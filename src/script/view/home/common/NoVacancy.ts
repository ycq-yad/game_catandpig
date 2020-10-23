import SoundManager, { SoundConst } from "../../../manager/SoundManager";

/**
 * 没有空位提醒
 */
export default class NoVacancy extends BaseSceneUISkinPopView {
    public className_key = "NoVacancy";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private btn_back: Laya.Button;
    private btn_ok: Laya.Button;

    private data: { sureTxt: string, sureFun: Function };

    constructor(data_: { sureTxt: string, sureFun: Function }) {
        super();
        this.data = data_;
        this.skin = "home/common/NoVacancy.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_back.addComponent(CustomScaleComponent);
        this.btn_ok.addComponent(CustomScaleComponent);
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
        this.btn_back.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_ok.on(Laya.Event.CLICK, this, this.onSure);
    }

    /** 设置数据 */
    public setData(data_: { sureTxt: string, sureFun: Function }) {
        this.data = data_;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        if (!this.data) return;
        this.btn_ok.label = this.data.sureTxt;
    }

    private onSure() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.data.sureFun && this.data.sureFun();
        this.removeSelf();
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_back.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_ok.off(Laya.Event.CLICK, this, this.onSure);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.data = null;
    }
}