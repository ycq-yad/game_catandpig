import GameConst from "../../../common/GameConst";
import { GameData } from "../../../common/GameData";
import { ObjectManager } from "../../game/base/ObjectManager";
import { BaseShipUi, ShipObjInfo } from "../../game/ship/BaseShip";
import { GameManager, BaseInfoType, GameModel } from "../../../manager/GameManager";
import { BaseShipGameInfo, BaseGameInfo } from "../../vo/BaseGameInfo";
import { GameConstant, AttackType } from "../../game/base/GameObj";
import ConfigManager from "../../../manager/ConfigManager";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameEvent from "../../../common/GameEvent";
import PropItem from "../award/PropItem";
import FosterDetailView from "./FosterDetailView";
import GameMgr from "../../../manager/GameMgr";
import { AdventureEmenyScene } from "./AdventureEmenyScene";
import DevourInfoItem from "./DevourInfoItem";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import RegattaManager from "../../../manager/RegattaManager";
import DungeonManager from "../../../manager/DungeonManager";
import { PopHelpScene } from "../pop/PopHelpScene";

/**
 * 培养界面
 */
export class AdventureScene extends BaseSceneUISkin {
    className_key = "AdventureScene";
    constructor(data) {
        super(data);
        this.skin = "home/foster/AdventureScene.json";
    }

    /**
     * 页面数据
     */
    public viewData_: any
    /**
     * panel的选择
     */
    public panel_selecte: Laya.Panel;

    public icon_guide_hand: Laya.Image;
    public icon_guide_lab: Laya.Image;

    public icon_set: Laya.Image;
    public btn_close: Laya.Image;
    public box_main: Laya.Box;
    public boxH_gold: Laya.HBox;
    public txt_gold: Laya.Label;
    /** 售卖的 */
    public box_sale: Laya.Box;
    public box_detail_click: Laya.Box;
    /** 详细信息页 */
    public box_detail: Laya.Box;
    /**
     * 放船的地方
     */
    public box_ship: Laya.Box;
    // public box_ship_click: Laya.Box;
    public box_pop: Laya.Box;
    public box_selected: Laya.Box;
    public boxView: Laya.Box;
    public btn_help: Laya.Button;
    public btn_fight: Laya.Image;
    /** 损 */
    public img_sun: Laya.Image;

    public txt_sky: Laya.Label;
    public txt_water: Laya.Label;
    public txt_underWater: Laya.Label;
    /** 光效显示图 */
    public icon_light: Laya.Image;
    /** 选中的uid */
    public selectedItem: BaseGameInfo;
    /** 玩家船 */
    private playership: BaseShipUi;
    private img_detail: Laya.Image;
    public img_expTip: Laya.Image;
    private icon_remove: Laya.Image;

    private btn_pre: Laya.Image;

    private btn_next: Laya.Image;


    protected childrenCreated() {
        super.childrenCreated();
        // this.panel_selecte.hScrollBarSkin = '';
        // this.panel_selecte
        this.panel_selecte.mouseThrough = true;
        // this.panel_selecte.width = Laya.stage.width - 280;;
        // this.panel_selecte.height = Laya.stage.height;
        this.box_main.width = Laya.stage.width;
        this.box_main.height = Laya.stage.height;
        this.btn_close.addComponent(CustomScaleComponent);
        this.btn_fight.addComponent(CustomScaleComponent);
        this.img_detail.addComponent(CustomScaleComponent);
        this.icon_remove.addComponent(CustomScaleComponent);
        this.btn_help.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
            this.initView();
            if (!GameData.getInstance().isConVersion) {
                this.addEvent();
            }
        }
    }

    public maxPage = 1;
    public curPage = 1;
    public onPage(evt: Laya.Event) {
        switch (evt.currentTarget) {
            case this.btn_pre:
                this.curPage--;
                break;
            case this.btn_next:
                this.curPage++;
                break;
        }
        this.initPage();
    }

    public initPage() {
        if (this.curPage <= 1) {
            this.btn_pre.visible = false;
            this.curPage = 1;
        } else {
            this.btn_pre.visible = true;

        }
        if (this.curPage >= this.maxPage) {
            this.curPage = this.maxPage;
            this.btn_next.visible = false;
        } else {
            this.btn_next.visible = true;

        }
        this.boxView.x = -(this.curPage - 1) * this.itemW * 4;
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_pre.on(Laya.Event.CLICK, this, this.onPage);
        this.btn_next.on(Laya.Event.CLICK, this, this.onPage);
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_fight.on(Laya.Event.CLICK, this, this.onFight);
        this.btn_help.on(Laya.Event.CLICK, this, this.onShowHelp);
        // this.panel_selecte.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        EventMgr.getInstance().addEvent(GameConst.ClickShipOrCat, this, this.onClickShipOrCat);
        this.playership.once(Laya.Event.CLICK, this, this.showSomeView);
        this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
        this.icon_remove.on(Laya.Event.CLICK, this, this.removeCat);
        // EventMgr.getInstance().addEvent(GameConst.RemoveCatOrBooster, this, this.removeCat)
    }
    public onShowHelp() {
        ViewManager.getInstance().showView(PopHelpScene);
    }

    public onClickShipOrCat(data: { uid: number, isLongClick: boolean }) {
        this.icon_light.removeSelf();
        this.box_detail.removeChildren();
        this.selectedItem = GameManager.instance.getBaseInfoByUidNoType(data.uid);
        let propData = GameManager.instance.getPropDataByUid(data.uid);
        let propView = new PropItem({ type: 2, data: propData });
        // propView.y = -(propView.height - this.box_detail.height) / 2;
        // propView.y = -187;
        if (this.selectedItem.type != BaseInfoType.Ship) {
            this.icon_remove.visible = true;
        } else {
            this.icon_remove.visible = false;

        }
        this.box_detail.addChild(propView);

    }

    public removeCat() {
        let catuid = this.selectedItem.uid
        let playerConfig = GameData.getInstance().localUserShipInfo.player;
        for (let i = 1; i < 6; i++) {
            let uid = playerConfig["box_player" + i];
            if (uid == catuid) {
                playerConfig["box_player" + i] = 0;
                break;

            }
        }
        this.initShipUi();
        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
    }
    private initView() {
        this.box_selected.visible = false;
        this.boxH_gold.visible = false;
        if (this.icon_light == null) {
            this.icon_light = new Laya.Image();
            this.icon_light.skin = 'resource/assets/img/home/foster/foster_guangxiao.png';
            // this.icon_light.visible = false;
            this.icon_light.centerX = this.icon_light.centerY = 0;
        }

        this.icon_remove.visible = false;
        this.icon_set.scale(2, 2);
        this.icon_set.anchorX = 0.5;
        this.icon_set.anchorY = 0.5;
        this.initShipUi();

        // this.hideSomeView();
    }

    public hideSomeView() {
        this.playership.box_ship.mouseEnabled = false;
        this.playership.box_detail.mouseEnabled = false;
        this.panel_selecte.visible = false;
        this.icon_set.visible = false;
        this.btn_close.visible = false;
        this.btn_fight.visible = false;
        this.btn_help.visible = false;
        this.box_detail_click.visible = false;
        this.box_detail.visible = false;
        this.box_sale.visible = false;
        this.img_sun.visible = false;
        this.img_expTip.visible = false;
        this.btn_next.visible = false;
        this.btn_pre.visible = false;
        this.icon_guide_hand.visible = false;
        this.icon_guide_lab.visible = false;
        // this.initShip();
        this.playership.scale(1.2, 1.2);
        let type = this.playership.objInfo_.attackType;
        console.log("1111111", type)
        if (type == AttackType.Sky) {
            this.playership.y = 560;
        } else if (type == AttackType.Water) {
            this.playership.y = 640;
        } else {
            this.playership.y = 720;
        }
        this.playership.x = Laya.stage.width / 3 - 150;
        this.playership.once(Laya.Event.CLICK, this, this.showSomeView);
    }

    public showSomeView() {
        this.btn_help.right = 200;
        if (GameData.getInstance().isConVersion) return;
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.playership.box_ship.mouseEnabled = true;
        this.playership.box_detail.mouseEnabled = true;
        this.box_sale.visible = true;
        this.btn_help.visible = true;
        this.panel_selecte.visible = true;
        this.btn_close.visible = true;
        this.btn_fight.visible = true;
        this.box_detail_click.visible = true;
        this.box_detail.visible = true;
        this.img_sun.visible = true;

        EventMgr.getInstance().sendEvent(GameEvent.SHOW_REGATTA);
        GameManager.instance.gameModel = GameModel.Match;
        this.selectedItem = null;
        this.initShipUi();
        if (GameData.getInstance().playerData.playerGuide == 4) {
            ViewManager.getInstance().showView(PopHelpScene);
            GameData.getInstance().playerData.playerGuide++;
        }
        // this.box_ship_click.on(Laya.Event.MOUSE_DOWN, this.onShipMouseDown, this);
    }

    public initShipUi() {
        GameInfoManager.getInstance().saveInfo(GameConst.USE_PROP);//保存数据
        let baseInfos = GameData.getInstance().prop.baseInfos;
        this.listdata = baseInfos.ship.concat(baseInfos.cat).concat(baseInfos.booster);
        this.initList();
        this.clearPlayerIndexCao();
        this.initShip();
        this.img_expTip.visible = false;
        // this.box_ship_click.size(this.playership.width, this.playership.height);
        // this.box_ship_click.pos(this.playership.x, this.playership.y)
        let data = GameManager.instance.calFightValue();
        this.txt_sky.text = '' + data.attackSky;
        this.txt_water.text = '' + data.attackWater;
        this.txt_underWater.text = '' + data.attackUndetWater;
        if (DungeonManager.instance.curLevelId > 20003) {
            this.btn_fight.visible = true;
        } else {
            this.btn_fight.visible = false;

        }
    }

    private listdata: Array<any>;
    private itemW = 400;
    private initList() {
        this.boxView.removeChildren();
        let index = 0;
        this.listdata.sort(GameManager.instance.baseGameInfoSort);
        for (let i = 0, len = this.listdata.length; i < len; i++) {
            let data = this.listdata[i];
            let flag = GameManager.instance.checkIsUseUid(data.uid)
            if (!flag) {
                let item = new AdventureItem();

                item.initDataAndView(data);
                item.localScene = this;
                this.boxView.addChild(item);
                // item.x = this.itemW * i;
                item.basePos.x = this.itemW * (index) + this.itemW / 2;
                index++;
                item.basePos.y = 220;
                item.initPos();
            }
        }
        // this.boxView.width = this.itemW * (index)
        this.maxPage = Math.ceil(index / 4)
        this.initPage();


    }

    public clearPlayerIndexCao() {
        this.box_selected.removeChildren();
        this.box_selected.visible = false;
    }

    private initShip() {
        if (this.playership != null) {
            this.playership.removeSelf();
            this.playership = null;
        }
        this.box_ship.removeChildren();
        let localUserShipInfo = GameData.getInstance().localUserShipInfo;
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
        let pshiInfo = new ShipObjInfo();
        pshiInfo.uid = shiInfo.uid;
        let blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
        pshiInfo.isShow = true;
        pshiInfo.blood = blood;
        pshiInfo.star = shiInfo.star;
        pshiInfo.slot = shiInfo.slot;
        pshiInfo.slotArr = shiInfo.slotArr;
        pshiInfo.curBlood = blood;
        pshiInfo.hasShield = shiInfo.hasShield;
        pshiInfo.shieldId = shiInfo.shieldId;
        pshiInfo.width = 300;
        pshiInfo.height = 100;
        pshiInfo.id = Laya.Utils.getGID();
        pshiInfo.playerConfig = localUserShipInfo.player;
        pshiInfo.type = GameConstant.Player;
        pshiInfo.attackType = shiInfo.attack_type;
        // let playership = ObjectPool.instance.createObjectByName(BaseShip, pshiInfo) as BaseShip;
        this.playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
        this.playership.scale(1.4, 1.4);
        if (DeviceUtil.getIsIphoneX()) {
            this.playership.x = Laya.stage.width / 2;
        } else {
            this.playership.x = Laya.stage.width / 2 + 150;
        }
        this.playership.y = 680;
        this.box_ship.addChild(this.playership);
        GameManager.instance.adventureShowShip = this.playership;
        if (this.selectedItem == null) {
            this.selectedItem = GameManager.instance.getBaseInfoByUidNoType(shiInfo.uid);
        }
        this.initGamePorp(this.selectedItem);
        if (GameData.getInstance().playerData.playerGuide == 2) {
            this.icon_set.visible = true;
            if (pshiInfo.slotArr && pshiInfo.slotArr.length > 0) {
                let index = pshiInfo.slotArr[0];
                let boxPlayer = this.playership.box_col3 as Laya.Box;
                let point = Laya.Point.create();
                point.x = 0;
                point.y = 0;
                point = boxPlayer.localToGlobal(point, false)
                this.icon_set.x = point.x + 50;
                this.icon_set.y = point.y - 20;
                point.recover();
            }

        } else if (GameData.getInstance().playerData.playerGuide == 3) {
            this.icon_guide_hand.visible = true;
            this.icon_guide_lab.visible = true;
            this.showGuide();
        }
    }

    public showGuide() {
        Laya.Tween.clearAll(this.icon_guide_hand)
        let point = Laya.Point.create();
        point.x = 0;
        point.y = 0;
        point = this.panel_selecte.localToGlobal(point, false)
        point.x += 100
        point.y += 200
        this.icon_guide_hand.x = point.x
        this.icon_guide_hand.y = point.y
        let xs = 300;
        let ys = 540;

        Laya.Tween.to(this.icon_guide_hand, { x: xs, y: ys }, 1500, null, Laya.Handler.create(this.icon_guide_hand, () => {
            // Laya.Tween.to(this.icon_guide_hand, { x: point.x, y: point.y }, 500, null, Laya.Handler.create(this.icon_guide_hand, () => {
            //     point.recover();

            // }));
            point.recover();
            this.showGuide();
        }));
    }

    /** 是否点击 */
    private isTouch: boolean = false;
    /** 开始的位置 */
    private starX: number;
    /** 点击的x值 */
    private clickX: number;
    /**
    * 按下时候
    * @param evt 
    */
    private mouseDown(evt: Laya.Event): void {
        this.isTouch = true;
        this.clickX = evt.stageX;
        this.starX = this.boxView.x;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
    }
    /**
      * 移动时候
      * @param evt 
      */
    private mouseMove(evt: Laya.Event): void {
        this.boxView.x = this.starX + (evt.stageY - this.clickX);
        if (this.boxView.x + this.boxView.width <= this.panel_selecte.width) {
            this.boxView.x = this.panel_selecte.width - this.boxView.width;
        }
        if (this.boxView.x > this.boxView.width / 2) {
            this.boxView.x = this.boxView.width / 2
        }
    }
    /**
     * 弹起时候
     */
    private mouseOutUp(): void {
        this.isTouch = false;
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
    }

    private onDetail() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        ViewManager.getInstance().showView(FosterDetailView, GameManager.instance.getPropDataByUid(this.selectedItem.uid));
    }

    /**
     * 冒险选择变化
     * @param data \
     */
    protected onAdvantureChange(data: any) {

    }

    private async onFight() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["foster", "rank"], async () => {
            ViewManager.getInstance().showView(AdventureEmenyScene, {
                type: 2,
                zoneNo: GameData.getInstance().playerData.matchInfo.zoneNo
            });
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    /**
     * 处理船 猫，增幅器的显示升级信息
     */
    public initGamePorp(data: any) {
        // console.log("显示信息", data);
        this.box_detail.removeChildren();
        this.selectedItem = data;
        let propData = GameManager.instance.getPropDataByUid(data.uid);

        let propView = new PropItem({ type: 2, data: propData });
        // propView.y = -(propView.height - this.box_detail.height) / 2;
        // propView.y = -187;
        this.box_detail.addChild(propView);
        // this.icon_remove.visible = false;
        let playerConfig = GameData.getInstance().localUserShipInfo.player;
        for (let i = 1; i < 6; i++) {
            let uid = playerConfig["box_player" + i];
            if (uid == data.uid) {
                this.icon_remove.visible = true;
                return;

            }
        }
        this.icon_remove.visible = false;


    }

    private devourInfoItem: DevourInfoItem;
    private showDevouring = false;
    /** 显示吞噬信息 */
    public async showDevourInfo(addExp: number) {
        if (this.devourInfoItem && this.devourInfoItem.visible == true) {
            return;
        }
        if (this.showDevouring) return
        this.showDevouring = true;
        let data = this.selectedItem;
        let info = await GameManager.instance.judgeUpgradeByAddExp(data, addExp);
        let endLv = data.level + info.addLv;

        let playerExp = ConfigManager.getInstance().playerExpJson;
        let endlvdata: { level: number, exp: number };
        for (let i = 0, len = playerExp.length; i < len; i++) {
            if (playerExp[i].level == endLv + 1) {
                endlvdata = playerExp[i];
                break;
            }
        }
        let endLvNeedExp: number = 0;
        if (endlvdata) {
            endLvNeedExp = endlvdata.exp;
        }
        let evdata = { addLv: info.addLv, addExp: addExp, needExp: endLvNeedExp, endExp: info.endExp, addAttrObj: {}, type: 0 }
        if (info.addLv) {//可以升级
            let oldHp = GameManager.instance.calAttr(data.initialHp, data.growthHp, data.level, data.quality);
            let newHp = GameManager.instance.calAttr(data.initialHp, data.growthHp, endLv, data.quality);
            if (data.type == BaseInfoType.Ship) {
                evdata.type = BaseInfoType.Ship;
                evdata.addAttrObj = { addHp: newHp - oldHp };
            } else if (data.type == BaseInfoType.Cat) {
                let oldAtk = GameManager.instance.calAttr(data["initialAtt"], data["growthAtt"], data.level, data.quality);
                let oldCrit = GameManager.instance.calAttr(data["initialCrit"], data["growthCrit"], data.level, data.quality);
                let newAtk = GameManager.instance.calAttr(data["initialAtt"], data["growthAtt"], endLv, data.quality);
                let newCrit = GameManager.instance.calAttr(data["initialCrit"], data["growthCrit"], endLv, data.quality);
                evdata.addAttrObj = {
                    addHp: newHp - oldHp,
                    addAtk: newAtk - oldAtk,
                    addCrit: newCrit - oldCrit
                };
                evdata.type = BaseInfoType.Cat;
            } else if (data.type == BaseInfoType.Booster) {
                evdata.addAttrObj = { addHp: newHp - oldHp };
                evdata.type = BaseInfoType.Booster;
            }
        } else {
            // evdata.endExp = data.exp + addExp;
        }
        if (!this.devourInfoItem) {
            this.devourInfoItem = new DevourInfoItem(evdata);
            this.box_detail_click.addChild(this.devourInfoItem);
        } else {
            this.devourInfoItem.setData(evdata);
        }
        this.devourInfoItem.visible = true;
        this.showDevouring = false;
    }

    /** 隐藏吞噬信息 */
    public hideDevourInfo() {
        this.devourInfoItem && (this.devourInfoItem.visible = false);
    }

    /**
     * 显示选择增加选择的槽位
     */
    public addSelectPlayerIndexCao() {
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(GameData.getInstance().localUserShipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
        let arr = shiInfo.slotArr;
        /*  switch (slot) {//显示的槽位
             case 1:
                 // arr.push(2, 3, 4, 5);//测试试用
                 arr.push(2);
                 break;
             case 2:
                 arr.push(2, 3);
                 break;
             case 3:
                 arr.push(2, 3, 4);
                 break;
             case 4:
 
             case 5:
                 arr.push(2, 3, 4, 5);
                 break;
         } */
        this.box_selected.visible = true;


        for (let i = 0, len = arr.length; i < len; i++) {
            let box_player = this.playership['box_player' + arr[i]] as Laya.Box;
            let point = Laya.Point.create();
            point.x = 0;
            point.y = 0;
            point = box_player.localToGlobal(point, false);
            let image = new Laya.Image();
            image.anchorX = 0.5;
            image.anchorY = 0.5;
            image.size(117, 126.5);
            image.pos(point.x + image.width / 2, point.y + image.height / 2)

            if (arr[i] == 4 || arr[i] == 5) {
                image.scaleY = -1;
                image.pos(point.x + image.width / 2, point.y - image.height / 2)

            }
            image.skin = 'resource/assets/img/game/ship/cat_capsule.png';
            image.name = 'box_player' + arr[i]
            this.box_selected.addChild(image);
            point.recover();
        }
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // this.removeSelf();
        this.hideSomeView();
        EventMgr.getInstance().sendEvent(GameEvent.SHOW_MAIN);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_fight.off(Laya.Event.CLICK, this, this.onFight);
        this.panel_selecte.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        this.img_detail.off(Laya.Event.CLICK, this, this.onDetail);
        this.icon_remove.off(Laya.Event.CLICK, this, this.removeCat);
        this.btn_help.off(Laya.Event.CLICK, this, this.onShowHelp);
        EventMgr.getInstance().removeEvent(GameConst.ClickShipOrCat, this, this.onClickShipOrCat);
        // EventMgr.getInstance().removeEvent(GameConst.RemoveCatOrBooster, this, this.removeCat)


    }

    public removeSelf() {
        this.playership.removeSelf();
        return super.removeSelf();
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}



/**
 * 列表item
 */
export class AdventureItem extends Laya.Box {
    private box_item: Laya.Box;
    /** 星星 */
    private box_star: Laya.Box;
    private showUi: any;
    private showType: BaseInfoType;
    public viewData: BaseGameInfo;
    public basePos = { x: 0, y: 0 };

    public constructor() {
        super();
        this.size(400, 251);
        this.anchorX = 0.5;
        this.anchorY = 0.5;
        this.initView();
        this.addEvent();
    }

    private initView() {
        if (this.box_item == null) {
            this.box_item = new Laya.Box();
            this.box_item.size(100, 150);
            this.box_item.anchorX = 0.5;
            this.box_item.anchorY = 0.5;
            this.box_item.centerX = this.box_item.centerY = 0;
            this.addChild(this.box_item);
        }
        if (this.box_star == null) {
            this.box_star = new Laya.Box();
            this.box_star.anchorX = 0.5;
            this.box_star.anchorY = 0.5;
            this.addChild(this.box_star);
            this.box_star.centerX = 0;
            this.box_star.bottom = -20;
            // this.box_star.autoSize = true;
            // this.box_star.size(400, 150);
        }
    }

    public initPos() {
        this.x = this.basePos.x;
        this.y = this.basePos.y;
    }

    /**
     * 初始化数据和显示界面
     * 创建猪等
     * @param data 
     */
    public initDataAndView(data: BaseGameInfo) {
        this.viewData = data;
        // console.log(data);
        let id = data.id;
        if (parseInt(id) >= 110001 && parseInt(id) < 120001) {//船
            this.showType = BaseInfoType.Ship;
            // let ship: BaseShipUi = ShipManager.getInstance().createShowShipByType(id, {});
            // ship.scale(0.4, 0.4);
            // ship.x = (ship.width - this.box_item.width) / 2
            // ship.y = (ship.height - this.box_item.height) / 2
            let ship = new Laya.Image();
            ship.skin = 'resource/assets/img/icon/ship/shipIcon_' + id + '.png';
            ship.centerX = ship.centerY = 0;
            this.box_item.addChild(ship);
            this.box_item.size(400, 251);
        }
        else if (parseInt(id) >= 120001 && parseInt(id) < 130001) {//猫
            this.showType = BaseInfoType.Cat;
            // let playerInfo = ConfigManager.getInstance().catConfigs[id];


            let icon_cat = new Laya.Image();
            // icon_cat.size(147, 172);
            icon_cat.skin = 'resource/assets/img/icon/cat/catIcon_' + id + '.png';
            icon_cat.centerX = icon_cat.centerY = 0;
            icon_cat.anchorX = icon_cat.anchorY = 0.5;
            // this.box_item.width=icon_cat.displayWidth;
            // this.box_item.height=icon_cat.displayHeight;
            // icon_booster.size(100, 150);
            this.box_item.addChild(icon_cat);
            // AnimationManager.instance.showSkeletonAnimation(GameManager.instance.catUrl + playerInfo.url + '.sk', (boomAnimation: Laya.Skeleton) => {
            //     if (boomAnimation == null) return;
            //     this.box_item.addChild(boomAnimation);
            //     boomAnimation.player.playbackRate = 1;
            //     boomAnimation.scale(0.62, 0.62);
            //     boomAnimation.autoSize = true;
            //     boomAnimation.x = boomAnimation.width / 2;
            //     boomAnimation.y = boomAnimation.height / 2;
            //     boomAnimation.play(PlayerAniName.daiji, false);

            // }, 1);
            // let ship = new Laya.Image();
            // ship.skin = 'resource/assets/img/public/public_anniu_1_2.png';
            // ship.centerX = ship.centerY = 0;
            // ship.size(100, 150);
            // this.box_item.addChild(ship);
        }
        else if (parseInt(id) >= 140001 && parseInt(id) < 150001) {//猪
            this.showType = BaseInfoType.Booster;
            let playerInfo = ConfigManager.getInstance().boosterConfigs[id]
            let iconArr = playerInfo.icon.split("|");
            let icon_booster = new Laya.Image();
            icon_booster.size(81.6, 153.6);
            icon_booster.skin = 'resource/assets/img/game/booster/' + iconArr[0] + '.png';
            icon_booster.centerX = icon_booster.centerY = 0;
            // icon_booster.size(100, 150);
            this.box_item.addChild(icon_booster);
        }
        let playerStarExpJson = ConfigManager.getInstance().playerStarExpJson;
        this.exp = this.viewData.exp + playerStarExpJson[this.viewData.star - 1].basicExp + GameManager.instance.getTotleExpByLv(this.viewData.level);
        // this.exp = 300;
        this.createStar();
    }

    /**
     * 被吞噬可以获得的经验
     */
    public exp = 0;

    public createStar() {
        this.box_star.removeChildren();
        let star = this.viewData.star;
        for (let i = 0; i < star; i++) {
            let icon_star = new Laya.Image();
            icon_star.skin = 'resource/assets/img/propPublic/propPublic_xx.png';
            icon_star.scale(0.6, 0.6);
            icon_star.x = i * 80;
            this.box_star.addChild(icon_star);
            //
        }
        this.box_star.width = star * 80;
        this.box_star.height = 80;

    }
    public addEvent() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.on(Laya.Event.CLICK, this, this.onClick);

    }
    protected onAdvantureSelecte() {

    }

    /**
     * 点击
     */
    protected onClick() {
        if (!this.isClick) {
            if (this.adventureItem) {
                this.removeAdventureItem();

                return;
            }
        }

        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let scene = (this.scene as AdventureScene);
        if (scene == null) return;
        scene.icon_light.removeSelf();
        this.addChildAt(scene.icon_light, 0);
        scene.initGamePorp(this.viewData);
        // console.log("click");
        // Laya.timer.clear(this, this.longTouchMouseDown);
    }
    private startPoint: { x: number, y: number } = { x: 0, y: 0 };

    public isMoving = false;
    protected onMouseDown(evt: Laya.Event) {
        // Laya.timer.clear(this, this.longTouchMouseDown);
        // Laya.timer.once(0, this, this.longTouchMouseDown, [evt]);
        this.isClick = true;
        let self = this;
        self.isMoving = false
        this.startPoint.x = evt.stageX;
        this.startPoint.y = evt.stageY;
        if (this.localScene == null) return;
        function onMouseUp() {
            self.off(Laya.Event.MOUSE_MOVE, self, onMove);
            self.off(Laya.Event.MOUSE_MOVE, self, onMove);
            Laya.timer.clear(self, longtouch);
        }


        function longtouch() {
            if (self.isMoving) return;
            self.isMoving = true
            self.off(Laya.Event.MOUSE_UP, self, onMouseUp)
            let item = new AdventureItem();
            item.initDataAndView(self.viewData);
            // let value = self.localScene.panel_selecte.hScrollBar.value;
            // console.log('value>>>>', value)
            item.x = evt.stageX;
            item.y = evt.stageY;
            item.box_star.visible = false;
            // item.box_star.visible=false;
            self.adventureItem = item;
            // this.localScene.box_pop.x = ;
            self.localScene.box_pop.addChild(item);
            self.localScene.box_pop.visible = true;
            self.longTouchMouseDown(evt)
            self.visible = false;
        }
        longtouch()

        let ifMove = false;
        function onMove(mevt: Laya.Event) {
            if (ifMove) {
                longtouch();
                self.off(Laya.Event.MOUSE_MOVE, self, onMove);

            }
            if (mevt.stageY - this.startPoint.y > 1) {
                ifMove = true;
            }
            // console.log()
            // console.log(ifMove, this.startPoint, mevt.stageX, mevt.stageY)
        }
        // self.on(Laya.Event.MOUSE_MOVE, self, onMove);
        // self.once(Laya.Event.MOUSE_UP, self, onMouseUp);
        // Laya.timer.once(100, self, longtouch);


    }

    public adventureItem: AdventureItem

    public localScene: AdventureScene;
    public removeAdventureItem() {
        if (this.adventureItem) {
            this.adventureItem.removeSelf();
            this.adventureItem = null;
        }

    }

    protected longTouchMouseDown(evt: Laya.Event) {

        if (this.adventureItem) {
            this.adventureItem.box_item.scaleX = 1.8;
            this.adventureItem.box_item.scaleY = 1.8;
        }
        let scene = (this.scene as AdventureScene);
        if (scene == null) return;
        scene.img_expTip.visible = true;

        // this.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        // this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        if (this.showType == BaseInfoType.Ship) {//滑动的是船

        } else {
            // GameManager.instance.adventureShowShip.scale(1.3, 1.3);
            //开始增加碰撞器的显示
            // public_anniu_1_2
            scene.addSelectPlayerIndexCao();
            scene.box_ship.alpha = 0.5;
        }
        // scene.box_sale.scale(1.2, 1.2);
        scene.boxH_gold.visible = true;
        BitmapLabelUtils.setLabel(scene.txt_gold, this.exp + "", "resource/assets/img/home/top/top_sz/", 0);
        scene.txt_gold.width = (this.exp + "").length * 42;
        // scene.txt_gold.text = this.exp + '';
        scene.btn_fight.visible = false;
        scene.btn_close.visible = false;
        let display = this.adventureItem//evt.currentTarget;
        let starPoint = { x: display.x, y: display.y }
        let offset = { x: evt.stageX - display.x, y: evt.stageY - display.y };
        GameManager.instance.dragResult(this.adventureItem, starPoint, offset, (evt: Laya.Event, upateValueCallback) => {
            let disx = this.startPoint.x - evt.stageX;
            let disy = this.startPoint.y - evt.stageY;
            if (Math.abs(disx) < 20 || Math.abs(disy) < 20) return;
            upateValueCallback && upateValueCallback();
            this.onMouseMove(evt);
        }, (evt: Laya.Event) => {
            this.localScene.boxView.addChild(this);
            this.onMouseUp(evt);
        }, true, 0);
    }
    protected onMouseMove(evt: Laya.Event) {
        this.box_star.visible = false;
        if (this.adventureItem) {
            this.adventureItem.box_item.scaleX = 1.8;
            this.adventureItem.box_item.scaleY = 1.8;
        }
        let scene = (this.scene as AdventureScene);
        // scene.panel_selecte.hScrollBar.stopScroll();
        if (scene.selectedItem.uid != this.viewData.uid) {
            let isHit = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_detail, 3);
            if (isHit) {
                if (scene.selectedItem.level >= 30) {
                    // TipsManager.getInstance().showDefaultTips("已达最大等级");
                    return;
                }
                scene.showDevourInfo(this.exp);
            }
        }
    }
    /**
     * 是否是点击
     */
    public isClick = true;

    protected async onMouseUp(evt: Laya.Event) {
        //如果碰撞到，就替换
        //如果没有碰撞到   就重置
        //猫和猪 处理不一样
        // this.box_item.x = 0;
        // this.box_item.y = 0;
        this.visible = true;
        let scene = (this.scene as AdventureScene);
        scene.hideDevourInfo();
        scene.img_expTip.visible = false;
        let disx = this.startPoint.x - evt.stageX;
        let disy = this.startPoint.y - evt.stageY;
        // this.box_item.scaleX = 1;
        // this.box_item.scaleY = 1;
        scene.box_sale.scale(1, 1);
        this.box_star.visible = true;

        if (scene == null) {
            this.removeAdventureItem();
            this.onClick();
            return;
        }

        scene.boxH_gold.visible = false;
        scene.btn_fight.visible = true;
        scene.btn_close.visible = true;
        console.log("mouseup");
        if (this.showType == BaseInfoType.Ship) {//滑动的是船
            if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
                this.removeAdventureItem();

                this.onClick();

                return;
            }
            this.isClick = false;
            let isHit = GameManager.instance.checkShowShipCanHit(this.adventureItem, null, 3);
            console.log('ishit>>>>>', isHit);
            if (isHit) {
                SoundManager.getInstance().playEffect(SoundConst.PartSelect);
                GameData.getInstance().localUserShipInfo.ship.star = this.viewData.star
                GameData.getInstance().localUserShipInfo.ship.uid = this.viewData.uid;
                GameData.getInstance().localUserShipInfo.booster = (this.viewData as BaseShipGameInfo).shieldId;
                GameData.getInstance().localUserShipInfo.player.box_player2 = 0;
                GameData.getInstance().localUserShipInfo.player.box_player3 = 0;
                GameData.getInstance().localUserShipInfo.player.box_player4 = 0;
                GameData.getInstance().localUserShipInfo.player.box_player5 = 0;
                scene.initShipUi();
                this.removeAdventureItem();
                this.onClick();
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                return;
            }
        } else {
            scene.box_ship.alpha = 1;
            if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
                (this.scene as AdventureScene).clearPlayerIndexCao();
                this.removeAdventureItem();
                this.adventureItem = null;
                this.onClick();

                return;
            }

            this.isClick = false;

            GameManager.instance.adventureShowShip.scale(1.4, 1.4);
            let flag = this.checkHit(evt);

            if (flag) {
                this.removeAdventureItem();
                this.onClick();

                return;
            }

        }

        if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
            this.removeAdventureItem();
            this.onClick();

            return;
        }
        this.isClick = false;
        let isHit = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_sale, 2);
        console.log("售卖>>>>", isHit);
        if (isHit) {
            GameMgr.getInstance().updateBaseData(1001, this.exp);
            GameManager.instance.removepPropBase(this.viewData);
            (this.scene as AdventureScene).initShipUi();
            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
            this.removeAdventureItem();
            this.onClick();
            if (this.viewData.type == BaseInfoType.Ship) {
                TaskManager.instance.updateTask(TaskEnum.TASK_2001, 1);
            } else if (this.viewData.type == BaseInfoType.Cat) {
                TaskManager.instance.updateTask(TaskEnum.TASK_2002, 1);
            } else if (this.viewData.type == BaseInfoType.Booster) {
                TaskManager.instance.updateTask(TaskEnum.TASK_2003, 1);
            }
            return;
        }
        /**
         * 处理是否是升级吞噬
         * 无法将自己转化为经验
         */

        let isHit1 = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_detail, 3);
        console.log("吞噬>>>>", isHit1);
        if (isHit1) {
            if (scene.selectedItem.uid != this.viewData.uid) {
                if (scene.selectedItem.level >= GameManager.instance.shipMaxLevel) {
                    TipsManager.getInstance().showDefaultTips("已达最大等级");
                    this.removeAdventureItem();
                    this.onClick();
                    return;
                }
                if (GameData.getInstance().playerData.gold > this.exp) {
                    // GameData.getInstance().playerData.gold -= exp;
                    GameMgr.getInstance().updateBaseData(1001, -this.exp);
                } else {
                    TipsManager.getInstance().showDefaultTips("金币不足")
                    this.removeAdventureItem();
                    this.onClick();
                    return;
                }
                if (GameData.getInstance().playerData.playerGuide == 3) {
                    scene.icon_guide_hand.visible = false;
                    scene.icon_guide_lab.visible = false;
                    Laya.Tween.clearAll(scene.icon_guide_hand)
                    GameData.getInstance().playerData.playerGuide++
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                }
                await GameManager.instance.propAddExp(scene.selectedItem, this.exp);
                SoundManager.getInstance().playEffect(SoundConst.GetExp);
                GameManager.instance.removepPropBase(this.viewData);
                (this.scene as AdventureScene).initShipUi();
                GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                this.removeAdventureItem();
                this.adventureItem = null;
                this.onClick();

                return;
            } else {
                TipsManager.getInstance().showDefaultTips('无法将自己转化为经验');
            }
        }
        this.removeAdventureItem();
        this.adventureItem = null;
        this.onClick();

    }


    public checkHit(evt: Laya.Event): boolean {
        let scene = (this.scene as AdventureScene);
        if (scene == null) return;
        let box_selected = scene.box_selected as Laya.Box;
        // checkSHowShipCanHit
        let player = GameData.getInstance().localUserShipInfo.player
        for (let i = 0, len = box_selected.numChildren; i < len; i++) {
            let img = box_selected.getChildAt(i) as Laya.Image;

            let isHit = img.hitTestPoint(evt.stageX, evt.stageY)//GameManager.instance.checkShowShipCanHit(this.adventureItem.box_item, img, 2);
            console.log('ishit1>>>>>', isHit);
            if (isHit) {
                if (GameData.getInstance().playerData.playerGuide == 2) {
                    scene.icon_set.visible = false;
                    GameData.getInstance().playerData.playerGuide++
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                }
                player[img.name] = this.viewData.uid;
                (this.scene as AdventureScene).initShipUi();
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);

                return true;
            }
        }
        (this.scene as AdventureScene).clearPlayerIndexCao();
        return false
    }

    /**
     * 升级选中的条目
     */
    public updateSelectedItem() {

    }
    /**
    * 当从父节点移除时候
    */
    public _onRemoved() {
        super._onRemoved();
        this.removeEvent();
    }


    protected removeEvent() {
        this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.off(Laya.Event.CLICK, this, this.onClick);
    }
}