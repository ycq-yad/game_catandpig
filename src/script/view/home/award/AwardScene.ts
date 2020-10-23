import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import PropItem from "./PropItem";
import GiftItem from "./GiftItem";
import GoodsItem from "./GoodsItem";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
 * 奖励界面
 */
export default class AwardScene extends BaseSceneUISkinPopView {
    public className_key = "AwardScene";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_title: Laya.Image;
    private panel_award: Laya.Panel;
    private box_award: Laya.Box;
    private btn_get: Laya.Button;
    private btn_close: Laya.Button;

    /**
     * data.type 1=猫船等道具，2=金币钻石时间宝箱，3=惊喜礼物
     */
    private data: { type: number, data: any, sureFun: Function };

    constructor(data_: { type: number, data: any, sureFun: Function }) {
        super();
        this.data = data_;
        this.skin = "home/award/AwardScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.panel_award.hScrollBarSkin = "";
        this.panel_award.elasticEnabled = true;
        this.panel_award.hScrollBar.elasticDistance = 100;
        this.panel_award.hScrollBar.elasticBackTime = 100;
        this.panel_award.autoSize = true;
        this.btn_get.addComponent(CustomScaleComponent);
        this.btn_close.addComponent(CustomScaleComponent);
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
        this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
    }

    /** 设置数据 */
    public setData(data_: { type: number, data: any, sureFun: Function }) {
        this.data = data_;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        if (!this.data) return;
        this.btn_close.visible = false;
        this.btn_get.visible = true;
        console.log("AwardScene >>>>>>> initView", this.data);
        this.panel_award.hScrollBar.value = 0;
        this.box_award.removeChildren();
        this.img_title.skin = "resource/assets/img/home/award/award_zi_8.png";
        if (this.data.type == 1) {//猫船等道具
            let dataArr: localData.PropData[] = this.data.data;
            let len = dataArr.length;
            for (let i = 0; i < len; i++) {
                let data = dataArr[i];
                let item = new PropItem({ type: 1, data: data });
                item.x = (485 + 20) * i;
                this.box_award.addChild(item);
            }
            this.box_award.width = 485 * len + 20 * (len - 1);
        } else if (this.data.type == 2) {
            let dataArr: any[] = this.data.data;
            let len = dataArr.length;
            for (let i = 0; i < len; i++) {
                let data = dataArr[i];
                let item = new GoodsItem(data);
                item.x = (485 + 20) * i;
                this.box_award.addChild(item);
            }
            this.box_award.width = 485 * len + 20 * (len - 1);
            // if (DeviceUtil.isWXMiniGame()) {
            //     let phone = MiniManeger.instance.systemInfo;
            //     let offset = { w: phone.screenWidth / 5, h: phone.screenHeight }
            //     MiniManeger.instance.showBannerAd(offset);
            // }
        } else {
            this.img_title.skin = "resource/assets/img/home/award/award_zi_9.png";
            this.btn_close.visible = true;
            this.btn_get.visible = false;
            let item = new GiftItem();
            item.x = 0;
            this.box_award.addChild(item);
            this.box_award.width = 485;
            // if (DeviceUtil.isWXMiniGame()) {
            //     let phone = MiniManeger.instance.systemInfo;
            //     let offset = { w: phone.screenWidth / 5, h: phone.screenHeight }
            //     MiniManeger.instance.showBannerAd(offset);
            // }
        }
        this.box_award.height = this.panel_award.height = 605;
        this.panel_award.width = this.box_award.width;
        if (this.box_award.width >= 1920) {
            this.panel_award.autoSize = false;
            this.panel_award.width = 1920;
        } else {
            // this.panel_award.autoSize = true;
        }
    }

    private onGet() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (this.data.type == 2 && this.data.data[0].awardId == 1001) {
            SoundManager.getInstance().playEffect(SoundConst.GetGold);
        }
        this.getAward();
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
    }

    public getAward() {
        let fun = this.data.sureFun;
        this.removeSelf();
        fun && fun();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.data = null;
        MiniManeger.instance.hideBanner();
    }
}