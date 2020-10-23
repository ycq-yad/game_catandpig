import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import RegattaManager from "../../../manager/RegattaManager";
import RegattaItem from "./RegattaItem";
import GameMgr from "../../../manager/GameMgr";
import { AdventureEmenyScene } from "../../home/foster/AdventureEmenyScene";
import { HomeScene } from "../../home/HomeScene";
import { GameData } from "../../../common/GameData";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
 * 帆船赛界面
 */
export default class RegattaScene extends BaseSceneUISkin {
    public className_key = "RegattaScene";

    private img_bg: Laya.Image;
    private btn_back: Laya.Button;
    private btn_start: Laya.Button;
    private panel_map: Laya.Panel;
    private box_zone: Laya.Box;

    constructor() {
        super();
        this.skin = "game/regatta/RegattaScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.panel_map.hScrollBarSkin = "";
        this.btn_back.addComponent(CustomScaleComponent);
        this.btn_start.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            if (DeviceUtil.isWXMiniGame()|| DeviceUtil.isTTMiniGame()) {
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
    }

    private async initView() {
        this.panel_map.hScrollBar.value = 0;
        let dataArr = await RegattaManager.instance.getZoneData();
        // console.log("RegattaScene >>> initView", dataArr);
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item = <RegattaItem>this.box_zone.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new RegattaItem(dataArr[i]);
                item.x = 50 + 600 * i;
                this.box_zone.addChild(item);
            }
        }
        this.box_zone.width = 600 * dataArr.length;
    }

    private onBack() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        (<HomeScene>SceneManager.getInstance().currentScene).displayMainView();
    }

    private async onStart() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        await RegattaManager.instance.getRegattaRank();

        ResUtil.getIntance().loadGroups(["foster", "rank"], () => {
            MiniManeger.instance.hideBanner();
            ViewManager.getInstance().showView(AdventureEmenyScene, {
                type: 1,
                zoneNo: GameData.getInstance().playerData.matchInfo.zoneNo
            });
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
        this.btn_start.off(Laya.Event.CLICK, this, this.onStart);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        MiniManeger.instance.hideBanner();
    }
}