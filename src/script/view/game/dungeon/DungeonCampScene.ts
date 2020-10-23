import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import GameMgr from "../../../manager/GameMgr";
import DungeonManager from "../../../manager/DungeonManager";
import { GameData } from "../../../common/GameData";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import TreasureManager from "../../../manager/TreasureManager";
import NoVacancy from "../../home/common/NoVacancy";
import { GameManager, GameModel, BaseInfoType } from "../../../manager/GameManager";
import { BaseShipGameInfo } from "../../vo/BaseGameInfo";
import { ShipObjInfo, BaseShipUi } from "../ship/BaseShip";
import { GameConstant } from "../base/GameObj";
import { ObjectManager } from "../base/ObjectManager";
import EnemyCampItem from "./EnemyCampItem";
import AwardScene from "../../home/award/AwardScene";
import { MiniManeger } from "../../../manager/MiniManeger";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import { DYMoreGameBanner } from "../../../wechat/DYMoreGameBanner";

/**
 * 副本阵容界面
 */
export default class DungeonCampScene extends BaseSceneUISkinPopView {
    public className_key = "DungeonCampScene";

    private img_bg: Laya.Image;
    private box_content: Laya.Box;
    private btn_back: Laya.Button;
    private boxH_level: Laya.HBox;
    private img_level: Laya.Image;
    private btn_start: Laya.Button;
    private box_award: Laya.Box;
    private img_boxAward: Laya.Image;
    private box_awardStar: Laya.Box;
    /** 玩家船 */
    private playership: BaseShipUi;

    private data: localData.LevelData;

    constructor(data_: localData.LevelData) {
        super();
        this.data = data_;
        this.skin = "game/dungeon/DungeonCampScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.btn_back.addComponent(CustomScaleComponent);
        this.btn_start.addComponent(CustomScaleComponent);
        this.box_award.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                let phone = MiniManeger.instance.systemInfo;
                let offset = { w: phone.screenWidth / 4, h: phone.screenHeight }
                MiniManeger.instance.showBannerAd(offset);
            }
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
        this.btn_start.on(Laya.Event.CLICK, this, this.onStart);
        this.box_award.on(Laya.Event.CLICK, this, this.onAward);
    }

    /** 设置数据 */
    public setData(data_: localData.LevelData) {
        this.data = data_;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        if (!this.data) return;
        this.box_content.removeChildren();
        this.showOwnStar();
        let data = this.data;
        BitmapLabelUtils.setLabel(this.img_level, data.index + "", "resource/assets/img/game/dungeon/dungeon_sz/", 0);
        this.initShip();
        this.initEnemy();
    }

    private initShip() {
        let localUserShipInfo = GameData.getInstance().localUserShipInfo;
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
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
        pshiInfo.width = 300;
        pshiInfo.height = 100;
        pshiInfo.id = Laya.Utils.getGID();
        pshiInfo.playerConfig = localUserShipInfo.player;
        pshiInfo.type = GameConstant.Player;
        // let playership = ObjectPool.instance.createObjectByName(BaseShip, pshiInfo) as BaseShip;
        this.playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
        this.playership.box_ship.mouseEnabled = false;
        this.playership.x = 400;
        this.playership.y = 500;
        this.box_content.addChild(this.playership);
        // GameManager.instance.adventureShowShip = this.playership;
        this.showGameBanner();
    }

    private box_gameBanner: Laya.Box;
    /**
     * 显示banner
     */
    private async showGameBanner() {
        this.box_gameBanner.removeChildren();
        let dYMoreGameBanner: DYMoreGameBanner = await GameManager.instance.showGameBanner(4, 20000);
        if (dYMoreGameBanner) {
            this.box_gameBanner.addChild(dYMoreGameBanner);
            this.box_gameBanner.width = dYMoreGameBanner.width;
        }
    }

    private initEnemy() {
        let data = this.data;
        let enemy = data.enemy.split(",");
        let enemyPos = data.enemyIconLocate.split(",");
        for (let i = 0, len = enemy.length; i < len; i++) {
            let en = enemy[i].split("|");
            let enP = enemyPos[i].split("|");
            let data = { id: parseInt(en[0]), num: parseInt(en[1]), x: parseInt(enP[0]), y: parseInt(enP[1]) };
            let item = new EnemyCampItem(data);
            this.box_content.addChild(item);
        }
    }

    /** 显示拥有的星星 */
    private showOwnStar() {
        let own = GameData.getInstance().playerData.ownStar;
        for (let i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
            let img = <Laya.Image>this.box_awardStar.getChildByName("star" + (i + 1));
            (<Laya.Image>img.getChildAt(0)).visible = own > i;
        }
        let canGet = own >= 3
        this.box_award.mouseEnabled = canGet;
        this.boxAwardAni(canGet);
    }

    private isPlaying = false;
    private boxAwardAni(isAni: boolean) {
        if (isAni) {
            if (this.isPlaying) return;
            this.isPlaying = true;
            let fun = () => {
                Laya.Tween.to(this.img_boxAward, { rotation: 10 }, 200, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.img_boxAward, { rotation: -10 }, 400, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(this.img_boxAward, { rotation: 0 }, 200, null, Laya.Handler.create(this, () => {
                            Laya.timer.once(500, this, () => { fun() });
                        }));
                    }));
                }));
            }
            fun();
        } else {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.img_boxAward);
            this.img_boxAward.rotation = 0;
            this.isPlaying = false;
        }
    }

    private onBack() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    private onStart() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        DungeonManager.instance.curLevelData = this.data;
        GameManager.instance.gameModel = GameModel.Adventure;
        GameManager.instance.openGame('');
        if (this.data.type == 1) {
            TaskManager.instance.updateTask(TaskEnum.TASK_2009, 1);
        } else {
            TaskManager.instance.updateTask(TaskEnum.TASK_2010, 1);
        }
        GameMgr.getInstance().hideTopBar();
        this.removeSelf();

        // GameMgr.getInstance().showBufferLoading();
        // ResUtil.getIntance().loadGroups(["dungeon"], () => {
        //     ViewManager.getInstance().showView(DungeonOverScene, { curBlood: 50, blood: 120 });
        //     GameMgr.getInstance().hiddeBufferLoading();
        // });
    }

    private onAward() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (GameData.getInstance().treasure.vacancy) {

            GameData.getInstance().playerData.ownStar -= 3;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            this.showOwnStar();
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                ViewManager.getInstance().showView(AwardScene, {
                    type: 2, data: [{ awardId: 160001, awardNum: 1 }], sureFun: () => {
                        TreasureManager.instance.getBox(160001);
                    }
                });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        } else {
            ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
        }
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
        this.btn_start.off(Laya.Event.CLICK, this, this.onStart);
        this.box_award.off(Laya.Event.CLICK, this, this.onAward);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.data = null;
        MiniManeger.instance.hideBanner();
        this.boxAwardAni(false);
    }
}