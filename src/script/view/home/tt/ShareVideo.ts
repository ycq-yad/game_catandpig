import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import { GameManager } from "../../../manager/GameManager";
import GameMgr from "../../../manager/GameMgr";
import { GameData } from "../../../common/GameData";

export class ShareVideo extends BaseSceneUISkinPopView {
    className_key = "ShareVideo";
    public constructor() {
        super();
        this.skin = "home/tt/ShareVideo.json";
    }
    private box_content: Laya.Box;

    private btn_share: Laya.Button;
    private txt_award: Laya.Label;
    private btn_close: Laya.Label;
    protected childrenCreated() {
        super.childrenCreated();
        this.btn_share.addComponent(CustomScaleComponent);
        this.btn_close.addComponent(CustomScaleComponent);
    }
    /** 设置数据 */
    public setData(data: { successFun: Function, failFun: Function }) {
        this.viewData_ = data
        if (this.isCreate) {
            this.initView();
            this.addEvent();
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
        this.btn_share.on(Laya.Event.CLICK, this, this.onShare);

    }


    public onShare() {
        this.btn_share.mouseEnabled = false;
        MiniManeger.instance.shareGameVideo({
            successFun: () => {
                this.btn_share.mouseEnabled = true;
                GameManager.instance.freeDiamond(20);
                this.removeSelf();
            },
            failFun: () => {
                this.btn_share.mouseEnabled = true;
            }
        })
    }


    private initView() {
        GameMgr.getInstance().hideTopBar();
        this.txt_award.text = 'x20'
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        this.btn_close.centerY = 600;
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            let phone = MiniManeger.instance.systemInfo;
            let offset = { w: phone.screenWidth / 2, h: phone.screenHeight }
            if (GameData.getInstance().isConVersion) {
                this.btn_close.centerY = 380;
                MiniManeger.instance.showBannerAd(offset);
            } else {
                Laya.timer.once(1500, this, () => {
                    this.btn_close.centerY = 380;
                    MiniManeger.instance.showBannerAd(offset);
                })
            }

        }

    }




    private onClose() {
        this.viewData_ && this.viewData_.failFun && this.viewData_.failFun();
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }
    public removeSelf() {
        GameMgr.getInstance().showTopBar();

        return super.removeSelf();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_share.off(Laya.Event.CLICK, this, this.onShare);


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