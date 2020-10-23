import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import { HomeScene } from "../../home/HomeScene";
import DungeonManager from "../../../manager/DungeonManager";
import DungeonItem from "./DungeonItem";
import { GameData } from "../../../common/GameData";
import TreasureManager from "../../../manager/TreasureManager";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import NoVacancy from "../../home/common/NoVacancy";
import GameEvent from "../../../common/GameEvent";
import { GameModel, GameManager } from "../../../manager/GameManager";
import GameMgr from "../../../manager/GameMgr";
import DungeonCampScene from "./DungeonCampScene";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import AwardScene from "../../home/award/AwardScene";
import TTBaoTypeGame from "../../home/tt/TTBaoTypeGame";
import { MiniManeger } from "../../../manager/MiniManeger";
import { DYMoreGameBanner } from "../../../wechat/DYMoreGameBanner";


/**
 * 副本界面
 */
export default class DungeonScene extends BaseSceneUISkinPopView {
    public className_key = "DungeonScene";

    private panel_map: Laya.Panel;
    private box_dungeon: Laya.Box;
    private btn_back: Laya.Button;
    private btn_pig: Laya.Button;
    private box_award: Laya.Box;
    private img_boxAward: Laya.Image;
    private box_awardStar: Laya.Box;
    private box_gameBanner: Laya.Box;

    constructor() {
        super();
        this.skin = "game/dungeon/DungeonScene.json";
    }

    /**
     * 显示banner
     */
    private async showGameBanner() {
        this.box_gameBanner.removeChildren();
        let dYMoreGameBanner: DYMoreGameBanner = await GameManager.instance.showGameBanner(7, 20000);
        if (dYMoreGameBanner) {
            this.box_gameBanner.addChild(dYMoreGameBanner);
            this.box_gameBanner.width = dYMoreGameBanner.width;
        }
    }
    protected childrenCreated() {
        super.childrenCreated();
        this.panel_map.hScrollBarSkin = "";
        this.box_dungeon.removeChildren();
        this.btn_back.addComponent(CustomScaleComponent);
        this.btn_pig.addComponent(CustomScaleComponent);
        this.box_award.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
        this.btn_pig.on(Laya.Event.CLICK, this, this.onHuntPig);
        this.box_award.on(Laya.Event.CLICK, this, this.onAward);
    }

    private async initView() {
        this.showOwnStar();
        this.panel_map.hScrollBar.value = 0;
        let dataArr = await DungeonManager.instance.getLevelData();
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item = <DungeonItem>this.box_dungeon.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new DungeonItem(dataArr[i]);
                this.box_dungeon.addChild(item);
            }
        }
        if (DungeonManager.instance.curLevelId > 20003) {
            (this.btn_pig.getChildByName('lock') as Laya.Image).visible = false;
            this.btn_pig.gray = false;
        } else {
            this.btn_pig.gray = true;
            (this.btn_pig.getChildByName('lock') as Laya.Image).visible = true;

        }
        if (GameData.getInstance().isConVersion) {
            this.btn_pig.visible = false;
            this.box_award.visible = false;
            this.box_awardStar.visible = false;
            return;
        }
        this.showGameBanner();


    }

    public moreGameItem: TTBaoTypeGame;

    /** 显示拥有的星星 */
    private showOwnStar() {
        let own = GameData.getInstance().playerData.ownStar;
        for (let i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
            let img = <Laya.Image>this.box_awardStar.getChildByName("star" + (i + 1));
            (<Laya.Image>img.getChildAt(0)).visible = own > i;
        }
        let canGet = own >= 3;
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
        (<HomeScene>SceneManager.getInstance().currentScene).displayMainView();
    }

    private async onHuntPig() {

        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (DungeonManager.instance.curLevelId > 20003) {

        } else {
            TipsManager.getInstance().showDefaultTips("请先通过三关");
            return;
        }
        let data = await DungeonManager.instance.getEncounterLevel();
        console.log("进入遭遇战", data);
        ViewManager.getInstance().showView(DungeonCampScene, data);
    }

    private onAward() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (GameData.getInstance().treasure.vacancy) {
            GameData.getInstance().playerData.ownStar -= 3;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            this.showOwnStar();
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
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
        this.btn_pig.off(Laya.Event.CLICK, this, this.onHuntPig);
        this.box_award.off(Laya.Event.CLICK, this, this.onAward);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        if (this.moreGameItem) {
            this.moreGameItem.removeSelf();
            this.moreGameItem = null;
        }
        this.removeEvent();
        this.boxAwardAni(false);
    }
}