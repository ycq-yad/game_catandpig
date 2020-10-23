import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import GameMgr from "../../../manager/GameMgr";
import TreasureManager from "../../../manager/TreasureManager";
import StoreItem from "./StoreItem";
import { MiniManeger } from "../../../manager/MiniManeger";
import { GameManager } from "../../../manager/GameManager";
import { DYMoreGameBanner } from "../../../wechat/DYMoreGameBanner";

/**
 * 商店界面
 */
export default class StoreScene extends BaseSceneUISkinPopView {
    public className_key = "StoreScene";

    private img_bg: Laya.Image;
    private box_content: Laya.Box;
    private panel_store: Laya.Panel;
    private box_store: Laya.Box;
    private btn_close: Laya.Button;

    constructor() {
        super();
        this.skin = "home/store/StoreScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.box_store.removeChildren();
        this.panel_store.hScrollBarSkin = "";
        this.panel_store.elasticEnabled = true;
        this.panel_store.hScrollBar.elasticDistance = 100;
        this.panel_store.hScrollBar.elasticBackTime = 100;
        this.panel_store.autoSize = true;
        this.btn_close.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            // if (DeviceUtil.isWXMiniGame()) {
            //     let phone = MiniManeger.instance.systemInfo;
            //     let offset = {
            //         w: phone.screenWidth / 2, h: phone.screenHeight, callback: () => {
            //             console.log("1111", MiniManeger.instance.bannerAd)
            //             if (MiniManeger.instance.bannerAd.style.realHeight > 90) {
            //                 console.log("222", MiniManeger.instance.bannerAd)
            //                 MiniManeger.instance.hideBanner();
            //             }
            //         }
            //     }
            //     MiniManeger.instance.showBannerAd(offset);
            // }
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
    }

    // /** 设置数据 */
    // public setData(data_: { type: number, data: any }) {
    //     this.data = data_;
    //     if (this.isCreate) {
    //         this.initView();
    //     }
    // }

    private async initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        let dataArr = await TreasureManager.instance.getStoreData();
        this.panel_store.hScrollBar.value = 0;
        let len = dataArr.length;
        for (let i = 0; i < len; i++) {
            let item = <StoreItem>this.box_store.getChildAt(i);
            if (item) {
                item.setData(dataArr[i]);
            } else {
                item = new StoreItem(dataArr[i]);
                item.x = (485 + 20) * i;
                this.box_store.addChild(item);
            }
        }
        this.box_store.width = 485 * len + 20 * (len - 1);
        this.box_store.height = this.panel_store.height = 605;
        if (this.box_store.width >= 1920) {
            this.panel_store.autoSize = false;
            this.panel_store.width = 1920;
        } else {
            this.panel_store.autoSize = true;
        }

        this.showGameBanner();
    }

    private box_gameBanner: Laya.Box
/**
 * 显示banner
 */
    private async showGameBanner() {
        this.box_gameBanner.removeChildren();
        let dYMoreGameBanner: DYMoreGameBanner = await GameManager.instance.showGameBanner(6, 200000);
        if (dYMoreGameBanner) {
            this.box_gameBanner.addChild(dYMoreGameBanner);
            this.box_gameBanner.width = dYMoreGameBanner.width;
        }
    }


    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        GameMgr.getInstance().enableTopBar(true);
        MiniManeger.instance.hideBanner();
    }
}