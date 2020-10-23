import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import TreasureView from "./TreasureView";
import GameMgr from "../../../manager/GameMgr";
import GameEvent from "../../../common/GameEvent";
import TreasureManager from "../../../manager/TreasureManager";
import OpenTreasure from "./OpenTreasure";

/**
* 时长宝箱item
*/
export default class TreasureItem extends BaseSceneUISkin {
    public className_key = "TreasureItem";

    private img_icon: Laya.Image;
    private btn_open: Laya.Label;
    private img_suo: Laya.Image;
    private lab_open: Laya.Label;

    public data: localData.TimeBoxData;

    constructor(_data: localData.TimeBoxData) {
        super();
        this.data = _data;
        this.skin = "home/treasure/TreasureItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_open.addComponent(CustomScaleComponent);
    }

    protected adaptationStage() {
        this.size(260, 200);
    }

    public onAddStage() {
        // console.log("SignItem >>>>>>> onAddStage", this.isCreate);
        if (this.isCreate) {
            this.initView();
            this.addEvent();
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
        this.btn_open.on(Laya.Event.CLICK, this, this.onOpen);
        this.img_icon.on(Laya.Event.CLICK, this, this.onOpen);
        EventMgr.getInstance().addEvent(GameEvent.TIME_METER, this, this.downTime);
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.img_icon.skin = "resource/assets/img/icon/box/" + data.config.icon + ".png";
        if (data.state == 0) {
            this.img_suo.visible = true;
            this.lab_open.text = "打开";
            this.lab_open.centerX = 20;
        } else if (data.state == 1) {
            this.img_suo.visible = false;
            this.lab_open.text = Utils.formatTime(data.surplusTime);
            this.lab_open.centerX = 0;
        } else {
            this.img_suo.visible = false;
            this.lab_open.text = "打开";
            this.lab_open.centerX = 0;
        }
    }

    private downTime() {
        if (this.data.state != 1 || !this.data.surplusTime) return;
        this.data.surplusTime--;
        this.lab_open.text = Utils.formatTime(this.data.surplusTime);
        if (this.data.surplusTime <= 0) {
            TreasureManager.instance.boxDownTimeEnd(this.data.uid);
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
        }
    }

    private onOpen() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let data = this.data;
        if (data.state == 2) {//开宝箱界面
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["treasure"], () => {
                ViewManager.getInstance().showView(OpenTreasure, { data: this.data });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        } else {
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["treasure"], () => {
                ViewManager.getInstance().showView(TreasureView, Utils.copy(this.data));
                GameMgr.getInstance().hiddeBufferLoading();
            });
        }
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_open.off(Laya.Event.CLICK, this, this.onOpen);
        this.img_icon.off(Laya.Event.CLICK, this, this.onOpen);
        EventMgr.getInstance().removeEvent(GameEvent.TIME_METER, this, this.downTime);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
        this.removeEvent();
    }
}