import { GameManager, GameModel, BaseInfoType } from "../../../manager/GameManager";
import GameMgr from "../../../manager/GameMgr";
import RegattaManager from "../../../manager/RegattaManager";
import FosterItem from "./FosterItem";
import { localData } from "../../../common/GameDataType";
import { GameData } from "../../../common/GameData";
import { BaseShipGameInfo } from "../../vo/BaseGameInfo";
import { ShipObjInfo } from "../../game/ship/BaseShip";
import { GameConstant } from "../../game/base/GameObj";
import { ObjectManager } from "../../game/base/ObjectManager";
import ConfigManager from "../../../manager/ConfigManager";
import { RegattaConfig } from "../../../common/GameConfigType";
import GameEvent from "../../../common/GameEvent";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";

/**
 * 帆船赛赛区对手页面
 */
export class AdventureEmenyScene extends BaseSceneUISkin {
    className_key = "AdventureEmenyScene";

    private img_bg: Laya.Image;
    private box_main: Laya.Box;
    private box_ship: Laya.Box;
    private box_detail: Laya.Box;
    private panel_rank: Laya.Panel;
    private btn_close: Laya.Image;
    private btn_fight: Laya.Image;
    private img_icon: Laya.Image;
    public txt_sky: Laya.Label;
    public txt_water: Laya.Label;
    public txt_underWater: Laya.Label;
    /** 
     * data.type 1=从帆船赛进入，2=从培养进入
     * data.zoneNo 查看赛区编号
     */
    private data: { type: number, zoneNo: number };
    private selectData: localData.RankData;
    private enemyData: localData.RankData;

    public constructor(_data: { type: number, zoneNo: number }) {
        super();
        this.data = _data;
        this.skin = "home/foster/AdventureEmenyScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.panel_rank.vScrollBarSkin = "";
        this.panel_rank.elasticEnabled = true;
        this.panel_rank.vScrollBar.elasticDistance = 50;
        this.panel_rank.vScrollBar.elasticBackTime = 100;
        this.btn_close.addComponent(CustomScaleComponent);
        this.btn_fight.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_fight.on(Laya.Event.CLICK, this, this.onFight);
        EventMgr.getInstance().addEvent(GameEvent.SELECT_RANK, this, this.showSelect);
    }

    /** 设置数据 */
    public setData(data: { type: number, zoneNo: number }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        console.log("AdventureEmenyScene >>> initView", this.data);
        GameMgr.getInstance().showTopBar();
        // this.panel_rank.vScrollBar.value = 800;
        let dataArr = await RegattaManager.instance.getRegattaRank(this.data.zoneNo);
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item: FosterItem = Laya.Pool.getItemByClass("FosterItem", FosterItem);
            item.setData({ type: 1, data: dataArr[i] });
            item.y = i * 72;
            this.panel_rank.addChild(item);
            if (dataArr[i].select) this.selectData = dataArr[i];
        }
        if (this.selectData.index != 0) {
            this.enemyData = dataArr[this.selectData.index - 1];
        }
        let max = dataArr.length * 72;
        this.panel_rank.vScrollBar.setScroll(0, max, 0);
        // console.log(this.panel_rank.vScrollBar.value);
        this.showSelect(this.selectData);
    }

    private showSelect(data: localData.RankData) {
        for (let i = 0, len = this.panel_rank.numChildren; i < len; i++) {
            let item: FosterItem = <FosterItem>this.panel_rank.getChildAt(i);
            if (item.data.data.index == data.index) {
                item.showSelect(true);
            } else {
                item.showSelect(false);
            }
        }
        this.box_ship.removeChildren();
        if (data.reward) {
            this.showReward(data.reward);
        } else {
            this.showShip(data.shipInfo, data.isSelf);
        }
    }

    /** 显示船 */
    private showShip(shipInfo: any, isSelf: boolean) {
        let shiInfo: BaseShipGameInfo;
        if (isSelf) {
            shiInfo = GameManager.instance.getBaseInfoByUidAndType(shipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
        } else {
            shiInfo = GameManager.instance.getBaseInfoByUidAndType(shipInfo.ship.uid, BaseInfoType.Ship, GameData.getInstance().otherprop) as BaseShipGameInfo;
        }
        let pshiInfo = new ShipObjInfo();
        pshiInfo.uid = shiInfo.uid;
        let blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
        pshiInfo.isShow = true;
        pshiInfo.blood = blood;
        pshiInfo.star = shiInfo.star;
        pshiInfo.slot = shiInfo.slot;
        pshiInfo.curBlood = blood;
        pshiInfo.hasShield = shiInfo.hasShield;
        pshiInfo.shieldId = shiInfo.shieldId;
        pshiInfo.width = 600;
        pshiInfo.height = 200;
        pshiInfo.id = Laya.Utils.getGID();
        pshiInfo.playerConfig = shipInfo.player;
        pshiInfo.type = isSelf ? GameConstant.Player : GameConstant.Enemy;
        pshiInfo.attackType = shiInfo.attack_type;
        let playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
        playership.box_ship.mouseEnabled = false;
        playership.x = 1300;
        playership.y = 550;
        playership.scale(1.3, 1.3);
        this.initFightValue();
        this.box_ship.addChild(playership);
    }

    /**|
     * 计算战力值
     */
    public initFightValue() {
        let data = GameManager.instance.calFightValue();
        this.txt_sky.text = '' + data.attackSky;
        this.txt_water.text = '' + data.attackWater;
        this.txt_underWater.text = '' + data.attackUndetWater;
    }

    private showReward(reward: string) {
        if (!this.img_icon) this.img_icon = new Laya.Image();
        let id = parseInt(reward.split("|")[0]);
        if (id < 10000) {//基础物品
            this.img_icon.scale(3, 3);
            this.img_icon.pos(1200, 500);
            if (id == 1001) {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
            } else {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
            }
        } else {//随机道具
            this.img_icon.scale(3, 3);
            this.img_icon.pos(1200, 500);
            if (id == 160201) {
                this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_14.png";
            } else if (id == 160202) {
                this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_13.png";
            } else {
                this.img_icon.skin = "";
            }
        }
        this.box_ship.addChild(this.img_icon);
    }

    private onFight() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (RegattaManager.instance.zoneIsPass(this.data.zoneNo)) {
            TipsManager.getInstance().showDefaultTips("当前赛区已通关");
        } else {
            TaskManager.instance.updateTask(TaskEnum.TASK_2011, 1);
            GameManager.instance.gameModel = GameModel.Match;
            GameManager.instance.openGame("");
            GameMgr.getInstance().hideTopBar();
            this.removeSelf();
        }
    }

    // private 

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (this.data.type == 1) {
            GameMgr.getInstance().hideTopBar();
            if (DeviceUtil.isWXMiniGame()|| DeviceUtil.isTTMiniGame()) {
                let phone = MiniManeger.instance.systemInfo;
                let offset = { w: phone.screenWidth / 4, h: phone.screenHeight }
                MiniManeger.instance.showBannerAd(offset);
            }
        }
        this.removeSelf();
    }

    private recoverPool() {
        for (let i = 0, len = this.panel_rank.numChildren; i < len; i++) {
            let item: FosterItem = <FosterItem>this.panel_rank.getChildAt(i);
            Laya.Pool.recover("FosterItem", item);
        }
        this.panel_rank.removeChildren();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_fight.off(Laya.Event.CLICK, this, this.onFight);
        EventMgr.getInstance().removeEvent(GameEvent.SELECT_RANK, this, this.showSelect);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.recoverPool();
        this.data = null;
    }
}