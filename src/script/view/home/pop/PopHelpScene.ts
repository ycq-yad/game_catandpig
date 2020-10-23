import { MiniManeger } from "../../../manager/MiniManeger";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import GameMgr from "../../../manager/GameMgr";

export class PopHelpScene extends BaseSceneUISkinPopView {
    className_key = "PopHelpScene";
    protected showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
    constructor() {
        super();
        this.skin = "home/pop/PopHelpScene.json";
    }
    private btn_close: Laya.Button;
    private btn_next: Laya.Button;
    private btn_pre: Laya.Button;
    private icon_guide: Laya.Image;
    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();

        }
    }
    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
        this.btn_pre.on(Laya.Event.CLICK, this, this.onPre);

    }

    public onPre() {
        this.btn_pre.visible = false;
        this.btn_next.visible = true;
        this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu1.jpg' + GameMgr.getInstance().randomVersion;

    }
    public onNext() {
        this.btn_pre.visible = true;
        this.btn_next.visible = false;
        this.btn_close.visible = true
        this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu2.jpg' + GameMgr.getInstance().randomVersion;
    }

    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        this.btn_pre.visible = false;
        this.btn_next.visible = true;
        this.btn_close.visible = false;
        this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu1.jpg' + GameMgr.getInstance().randomVersion;


    }
    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
        this.btn_pre.off(Laya.Event.CLICK, this, this.onPre);

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