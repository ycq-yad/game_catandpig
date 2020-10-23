import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import SignItem from "./SignItem";
import SignManager from "../../../manager/SignManager";
import { HomeScene } from "../HomeScene";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
 * 签到界面
 */
export default class SignView extends BaseSceneUISkinPopView {
    public className_key = "SignView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private btn_double: Laya.Box;
    private icon_check: Laya.Box;
    private box_content: Laya.Box;
    private box_sign: Laya.Box;
    private btn_close: Laya.Button;
    private img_tip: Laya.Image;
    private btn_sign: Laya.Button;

    private pointArr = [[108, 0], [343, 0], [578, 0], [0, 280], [235, 280], [470, 280], [705, 280]];
    private signData: Array<localData.SignData> = [];

    constructor() {
        super();
        this.skin = "home/sign/SignScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        // console.log("SignView >>>>>>> childrenCreated", this.isCreate);
        this.box_sign.removeChildren();
        this.btn_close.addComponent(CustomScaleComponent);
        this.btn_sign.addComponent(CustomScaleComponent);
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
        this.btn_sign.on(Laya.Event.CLICK, this, this.onSign);
        this.btn_double.on(Laya.Event.CLICK, this, this.onDouble);
    }

    private  onDouble() {
        this.icon_check.visible = !this.icon_check.visible;
       
    }
    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        let can = SignManager.instance.checkSign();
        this.img_tip.visible = !can;
        this.btn_sign.visible = can;
        this.btn_double.visible = can;
        this.icon_check.visible = true;
        this.refreshUI();
    }

    private async refreshUI() {
       
        this.signData = await SignManager.instance.getSignData();
        console.log("SignInView >>>>>>> initView", this.signData);
        for (let i = 0, len = this.pointArr.length; i < len; i++) {
            let item = <SignItem>this.box_sign.getChildAt(i);
            if (item) {
                item.setData(this.signData[i]);
            } else {
                item = new SignItem(this.signData[i]);
                item.x = this.pointArr[i][0];
                item.y = this.pointArr[i][1];
                this.box_sign.addChild(item);
            }
        }
    }

    private async onSign() {

        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let self = this;
        this.grp_center.mouseEnabled = false;
        if (this.icon_check.visible) {
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    self.getAward(2);
                }, failFun: () => {
                    self.grp_center.mouseEnabled = true;
                },
                errorFun: () => {
                    self.grp_center.mouseEnabled = true;

                }
            })
        } else {
            this.getAward(1)

        }



    }
    public async getAward(mul: number = 1) {
        let data: localData.SignData;
        for (let index = 0; index < this.signData.length; index++) {
            const element = this.signData[index];
            if (element.canSign) {
                data = element;
                break;
            }
        }
        await SignManager.instance.receiveReward(mul, data.reward);
        this.initView();
        this.grp_center.mouseEnabled = true;
    }

    private onClose() {
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        homeView.displayMainView();
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_sign.off(Laya.Event.CLICK, this, this.onSign);
        this.btn_double.off(Laya.Event.CLICK, this, this.onDouble);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}