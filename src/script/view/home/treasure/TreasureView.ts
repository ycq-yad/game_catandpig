import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import GameEvent from "../../../common/GameEvent";
import TreasureManager from "../../../manager/TreasureManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import GameMgr from "../../../manager/GameMgr";
import OpenTreasure from "./OpenTreasure";
import { GameData } from "../../../common/GameData";
import TTBaoTypeGame from "../tt/TTBaoTypeGame";
import { GameManager } from "../../../manager/GameManager";

/**
 * 时长宝箱界面
 */
export default class TreasureView extends BaseSceneUISkinPopView {
    public className_key = "TreasureView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_icon: Laya.Image;
    private img_time: Laya.Image;
    private lab_time: Laya.Label;
    private btn_close: Laya.Button;
    private btn_open: Laya.Button;
    private box_open1: Laya.Box;
    private img_openCostH: Laya.Image;
    private img_openCostM: Laya.Image;
    private box_open2: Laya.Box;
    private img_openCostD: Laya.Image;
    private btn_jump: Laya.Button;
    private box_jump1: Laya.Box;
    private img_jumpCostD: Laya.Image;
    private box_jump2: Laya.Box;
    private img_jumpCostM: Laya.Image;

    public data: localData.TimeBoxData;
    /** 剩余时间 s */
    private surplusTime: number;
    /** 用钻石打开消费钻石数 */
    private costDim: number;

    constructor(_data: localData.TimeBoxData) {
        super();
        this.data = _data;
        this.skin = "home/treasure/TreasureScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_close.addComponent(CustomScaleComponent);
        this.btn_open.addComponent(CustomScaleComponent);
        this.btn_jump.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            // if (DeviceUtil.isWXMiniGame()) {
            //     let phone = MiniManeger.instance.systemInfo;
            //     let offset = { w: phone.screenWidth / 5, h: phone.screenHeight }
            //     MiniManeger.instance.showBannerAd(offset);
            // }
        }
    }

    /** 设置数据 */
    public setData(data: localData.TimeBoxData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_open.on(Laya.Event.CLICK, this, this.onOpen);
        this.btn_jump.on(Laya.Event.CLICK, this, this.onJump);
        EventMgr.getInstance().addEvent(GameEvent.TIME_METER, this, this.downTime);
    }

    private async initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        if (!this.data) return;
        this.box_open1.visible = this.box_open2.visible = false;
        this.box_jump1.visible = this.box_jump2.visible = false;
        this.btn_jump.visible = true;
        this.img_time.visible = false;
        let data = this.data;
        this.img_icon.skin = "resource/assets/img/icon/box/" + data.config.icon + ".png";
        if (data.state == 0) {
            this.box_open1.visible = true;
            let hour = Math.floor(data.config.timeToOpen / 60);
            let min = data.config.timeToOpen % 60;
            this.img_openCostM.width = min > 9 ? 34 * 2 : 34;
            BitmapLabelUtils.setLabel(this.img_openCostH, hour + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
            BitmapLabelUtils.setLabel(this.img_openCostM, min + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
            this.costDim = Math.floor((20 / 60) * data.config.timeToOpen);
            BitmapLabelUtils.setLabel(this.img_jumpCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
            this.box_jump1.visible = true;
        } else if (data.state == 1) {
            this.img_time.visible = true;
            this.box_open2.visible = true;
            this.box_jump2.visible = true;
            if (data.videoJump) this.btn_jump.visible = false;
            this.surplusTime = data.surplusTime;
            let min = Math.floor(this.surplusTime / 60);
            let sec = this.surplusTime % 60;
            this.lab_time.text = min + "m" + sec + "s";
            this.costDim = Math.floor((20 / 60) * Math.ceil(this.surplusTime / 60));
            BitmapLabelUtils.setLabel(this.img_openCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
        } else {
        }
    }

    public moreGameItem: TTBaoTypeGame;
    public moreGameItem1: TTBaoTypeGame;

    private downTime() {
        if (this.data.state != 1 || !this.surplusTime) return;
        this.surplusTime--;
        let min = Math.floor(this.surplusTime / 60);
        let sec = this.surplusTime % 60;
        this.lab_time.text = min + "m" + sec + "s";
        this.costDim = Math.floor((20 / 60) * Math.ceil(this.surplusTime / 60));
        BitmapLabelUtils.setLabel(this.img_openCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
        if (this.surplusTime <= 0) {
            TreasureManager.instance.boxDownTimeEnd(this.data.uid);
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
            // this.data.state = 2;
            // this.initView();
            this.removeSelf();
            MiniManeger.instance.hideBanner();
        }
    }

    private onOpen() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let data = this.data;
        if (data.state == 0) {//开启倒计时
            if (TreasureManager.instance.getIsDownTimeState()) {
                TipsManager.getInstance().showDefaultTips("当前有其他宝箱处于倒计时");
            } else {
                TreasureManager.instance.openBoxDownTime(data.uid, data.config.timeToOpen * 60);
                this.data.state = 1;
                this.data.surplusTime = data.config.timeToOpen * 60;
                this.initView();
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                // this.removeSelf();
                // MiniManeger.instance.hideBanner();
            }
        } else if (data.state == 1) {//消耗钻石打开
            if (GameData.getInstance().playerData.diamond >= this.costDim) {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["treasure"], () => {
                    ViewManager.getInstance().showView(OpenTreasure, {
                        data: this.data, fun: () => {
                            GameMgr.getInstance().updateBaseData(1002, this.costDim * -1);
                        }
                    });
                    this.removeSelf();
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            } else {
                TipsManager.getInstance().showDefaultTips("钻石不足");
            }
        } else {
        }
    }

    private onJump() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let data = this.data;
        if (data.state == 0) {//消耗钻石直接打开
            if (GameData.getInstance().playerData.diamond >= this.costDim) {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["treasure"], () => {
                    ViewManager.getInstance().showView(OpenTreasure, {
                        data: this.data, fun: () => {
                            GameMgr.getInstance().updateBaseData(1002, this.costDim * -1);
                        }
                    });
                    this.removeSelf();
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            } else {
                TipsManager.getInstance().showDefaultTips("钻石不足");
            }
        } else if (data.state == 1) {//看视频减少30分钟
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    TreasureManager.instance.boxDownTimeReduce(data.uid, 30 * 60);
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                    // this.data.surplusTime = this.data.surplusTime - 30 * 60;
                    // if (this.data.surplusTime <= 0) {
                    //     this.removeSelf();
                    // } else {
                    //     this.initView();
                    // }
                    this.removeSelf();
                    MiniManeger.instance.hideBanner();
                },
                failFun: () => {
                },
                errorFun: () => {
                }
            });
        } else {
        }
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        MiniManeger.instance.hideBanner();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_open.off(Laya.Event.CLICK, this, this.onOpen);
        this.btn_jump.off(Laya.Event.CLICK, this, this.onJump);
        EventMgr.getInstance().removeEvent(GameEvent.TIME_METER, this, this.downTime);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (this.moreGameItem) {
            this.moreGameItem.removeSelf();
            this.moreGameItem = null;
        }
        if (this.moreGameItem1) {
            this.moreGameItem1.removeSelf();
            this.moreGameItem1 = null;
        }
        this.data = null;
    }
}