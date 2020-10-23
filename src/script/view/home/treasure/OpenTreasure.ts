import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import GameEvent from "../../../common/GameEvent";
import TreasureManager from "../../../manager/TreasureManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import GameMgr from "../../../manager/GameMgr";
import AwardScene from "../award/AwardScene";

/**
 * 开时长宝箱界面
 */
export default class OpenTreasure extends BaseSceneUISkinPopView {
    public className_key = "OpenTreasure";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_light: Laya.Image;
    private box_ani: Laya.Box;
    private boomAnimation: Laya.Skeleton;

    public data: { data: localData.TimeBoxData, fun?: Function };

    constructor(_data: { data: localData.TimeBoxData, fun?: Function }) {
        super();
        this.data = _data;
        this.skin = "home/treasure/OpenTreasure.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
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
    public setData(data: { data: localData.TimeBoxData, fun?: Function }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
    }

    private async initView() {
        // SoundManager.getInstance().playEffect(SoundConst.OPEN_POP);
        GameMgr.getInstance().hideTopBar();
        if (!this.data) return;
        console.log("OpenTreasure >>> initView", this.data);
        if (this.data.data.config) {
            let url = "resource/assets/img/home/ani/" + this.data.data.config.icon + "_Sk.sk";
            this.show2dBoonAnimation(url, this.box_ani, 0, true, 1, 430, 450, 0);
        } else {
            let img = new Laya.Image();
            let data = await TreasureManager.instance.getTreasureConfig(this.data.data.id);
            img.skin = "resource/assets/img/icon/box/" + data.icon + ".png";
            img.scale(0.6, 0.6);
            img.centerX = img.centerY = 0;
            this.box_ani.addChild(img);
            this.box_ani.on(Laya.Event.CLICK, this, this.onOpen);

        }

    }

    /**
     * 显示2d 骨骼动画
     * @param url	动画文件路径
     * @param dbBox	动画容器
     * @param index	动画索引
     * @param loop	是否循环播放
     * @param rate	播放速率
     */
    private show2dBoonAnimation(url: string, dbBox: Laya.Box, index: number, loop: boolean, rate: number, x: number, y: number, rotation: number) {
        return new Promise(resolve => {
            let self = this;
            if (!self.boomAnimation) self.boomAnimation = new Laya.Skeleton();
            self.boomAnimation.load(url, Laya.Handler.create(self, () => {
                if (!self.boomAnimation.player) {
                    resolve();
                    return;
                }
                self.boomAnimation.player.playbackRate = rate;
                //当skeleton.play(0,true) 第二个参数为true时，每播放完一遍龙骨动画，会自动触发Event.COMPLET事件
                //当skeleton.play(0,false) 第二个参数为false时，当前动画播放完成后，会自动触发Event.STOPED事件，而不是Event.COMPLETE事件
                // self.boomAnimation.player.once(Laya.Event.STOPPED, self, () => {
                //     dbBox.removeChild(self.boomAnimation);
                //     dbBox.visible = false;
                //     resolve();
                // });
                self.boomAnimation.scale(2, 2);
                dbBox.visible = true;
                dbBox.addChild(self.boomAnimation);
                self.boomAnimation.x = x; self.boomAnimation.y = y;
                self.boomAnimation.rotation = rotation;
                self.boomAnimation.play(index, loop);
                dbBox.on(Laya.Event.CLICK, this, this.onOpen);
            }));
        });
    }

    private onOpen() {
        SoundManager.getInstance().playEffect(SoundConst.ChestOpen);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["award", "propPublic"], async () => {
            let data = await TreasureManager.instance.openBox(this.data.data.id, this.data.data.uid);
            let fun1 = () => {
                ViewManager.getInstance().showView(AwardScene, { type: 3, data: data.prop });
            }
            let fun = () => {
                GameMgr.getInstance().updateBaseData(1001, data.gold);
                ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop, sureFun: () => { fun1() } });
            }
            this.data.fun && this.data.fun();
            this.removeSelf();
            ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: () => { fun() } });
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    /** 移除事件 */
    private removeEvent() {
        this.box_ani.off(Laya.Event.CLICK, this, this.onOpen);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        GameMgr.getInstance().showTopBar();
        this.removeEvent();
        if( this.boomAnimation){
            this.boomAnimation.stop() 
            this.box_ani.removeChild(this.boomAnimation);
        }
        this.box_ani.removeChildren();
        this.data = null;
        MiniManeger.instance.hideBanner();
    }
}