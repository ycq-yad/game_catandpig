import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import SoundUtil from "../../../tool/SoundUtil";
import { MiniManeger } from "../../../manager/MiniManeger";
import { GameData } from "../../../common/GameData";
import TTBaoTypeGame from "../tt/TTBaoTypeGame";
import { GameManager } from "../../../manager/GameManager";


/**
 * 复活界面
 */
export class PopReliveView extends BaseSceneUISkinPopView {
    public className_key = "PopReliveView";
    // protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private btn_relive: Laya.Button;
    private btn_close: Laya.Image;

    public viewData_: { successFun: Function, failFun: Function }
    constructor(data: { successFun: Function, failFun: Function }) {
        super();
        this.viewData_ = data
        this.skin = "home/relive/PopRelive.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_relive.addComponent(CustomScaleComponent);
        this.btn_close.addComponent(CustomScaleComponent);
    }
    /** 设置数据 */
    public setData(data: { successFun: Function, failFun: Function }) {
        this.viewData_ = data
        if (this.isCreate) {
            this.initView();
        }
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
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_relive.on(Laya.Event.CLICK, this, this.onRelieve);

    }
    protected onRelieve() {
        this.playVideo();
    }

    public playVideo() {
        let self = this;
        let viewData_ = this.viewData_
        MiniManeger.instance.playViderAd({
            successFun: () => {
                viewData_.successFun && viewData_.successFun();
                self.removeSelf();
            },
            failFun: () => {

            },
            errorFun: () => {

            }
        });
    }

    private async initView() {
        Laya.physicsTimer.pause();
        Laya.timer.pause();
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            let phone = MiniManeger.instance.systemInfo;
            let offset = { w: phone.screenWidth / 2, h: phone.screenHeight }
            MiniManeger.instance.showBannerAd(offset);
        }

    }

    public moreGameItem: TTBaoTypeGame;
    public moreGameItem1: TTBaoTypeGame;




    private onClose() {
        this.viewData_.failFun && this.viewData_.failFun();
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }
    public removeSelf() {
        Laya.timer.resume();
        Laya.physicsTimer.resume();
        return super.removeSelf();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_relive.off(Laya.Event.CLICK, this, this.onRelieve);


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
        MiniManeger.instance.hideBanner();
    }
}