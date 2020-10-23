import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import SoundUtil from "../../../tool/SoundUtil";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
 * 设置界面
 */
export default class SetView extends BaseSceneUISkinPopView {
    public className_key = "SetView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_music: Laya.Image;
    private img_effect: Laya.Image;
    private img_vibrate: Laya.Image;
    private btn_close: Laya.Button;

    constructor() {
        super();
        this.skin = "home/set/SetScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_close.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
            if (DeviceUtil.isWXMiniGame()|| DeviceUtil.isTTMiniGame()) {
                let phone = MiniManeger.instance.systemInfo;
                let offset = { w: phone.screenWidth / 2, h: phone.screenHeight }
                MiniManeger.instance.showBannerAd(offset);
            }
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.img_music.on(Laya.Event.CLICK, this, this.onMusic);
        this.img_effect.on(Laya.Event.CLICK, this, this.onEffect);
        this.img_vibrate.on(Laya.Event.CLICK, this, this.onVibrate);
    }

    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        this.musicSwitch();
        this.effectSwitch();
        this.vibrateSwitch();
    }

    private onMusic() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SoundUtil.getInstance().musicOpen = !SoundUtil.getInstance().musicOpen;
        this.musicSwitch();
    }

    private onEffect() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SoundUtil.getInstance().soundOpen = !SoundUtil.getInstance().soundOpen;
        this.effectSwitch();
    }

    private onVibrate() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SoundUtil.getInstance().shakeIsOpen = !SoundUtil.getInstance().shakeIsOpen;
        this.vibrateSwitch();
    }

    private musicSwitch() {
        let img1 = <Laya.Image>this.img_music.getChildAt(0);
        let img2 = <Laya.Image>this.img_music.getChildAt(1);
        img1.visible = SoundUtil.getInstance().musicOpen;
        img2.visible = !SoundUtil.getInstance().musicOpen;
    }

    private effectSwitch() {
        let img1 = <Laya.Image>this.img_effect.getChildAt(0);
        let img2 = <Laya.Image>this.img_effect.getChildAt(1);
        img1.visible = SoundUtil.getInstance().soundOpen;
        img2.visible = !SoundUtil.getInstance().soundOpen;
    }

    private vibrateSwitch() {
        let img1 = <Laya.Image>this.img_vibrate.getChildAt(0);
        let img2 = <Laya.Image>this.img_vibrate.getChildAt(1);
        img1.visible = SoundUtil.getInstance().shakeIsOpen;
        img2.visible = !SoundUtil.getInstance().shakeIsOpen;
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.img_music.off(Laya.Event.CLICK, this, this.onMusic);
        this.img_effect.off(Laya.Event.CLICK, this, this.onEffect);
        this.img_vibrate.off(Laya.Event.CLICK, this, this.onVibrate);
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