import GameEvent from "../common/GameEvent";
import DYChannelMgr, { MoreGameInfo } from "../manager/channel/DYChannelMgr";
import { ArrayUtil } from "../tool/ArrayUtil";


/**
 * 嘟游渠道 更多游戏-页面中导出游戏盒子
 */
export class DYMoreGameBox extends BaseSceneUISkin {
    public className_key = "DYMoreGameBox";

    public constructor(data_: { num: number }) {
        super();
        this.name = "DYMoreGameBox";
        this.viewData_ = data_;
        this.skin = "platform/dy/wechat/DYMoreGameBox.json";
    }

    public viewData_: { num: number };
    // 必备组件
    private box_game: Laya.Box;

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {

    }

    /** 添加到父节点 */
    public onAddStage() {
        if (this.isCreate) {
            this.addEvent();
            this.initView();
        }
    }

    /** 设置数据 */
    public setData(data: { num: number }) {
        this.viewData_ = data;
    }

    /** 添加事件 */
    private addEvent() {

    }

    /** 初始化页面 */
    private initView() {
        if (this.viewData_.num == 4) {
            this.list4();
        } else {
            this.list6();
        }
    }

    private list4() {
        let dataArr = ArrayUtil.getRandomUniqueArr(DYChannelMgr.instance.moreGameList, 4);
        this.box_game.removeChildren();
        let len = dataArr.length
        let select = Utils.getRandom(0, len - 1);
        let itemW = 320;
        let itemH = 390;
        this.size(690, 790);
        for (let i = 0; i < len; i++) {
            let item: DYMoreGameBoxItem4 = <DYMoreGameBoxItem4>this.box_game.getChildAt(i);
            if (item) {
                item.setData({ select: i == select, info: dataArr[i] });
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameBoxItem4", DYMoreGameBoxItem4);
                item.setData({ select: i == select, info: dataArr[i] });
                item.x = (i % 2) * (itemW + 50);
                item.y = Math.floor(i / 2) * (itemH + 10);
                this.box_game.addChild(item);
            }
        }
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    private list6() {
        let dataArr = ArrayUtil.getRandomUniqueArr(DYChannelMgr.instance.moreGameList, 6);
        this.box_game.removeChildren();
        let len = dataArr.length
        let select = Utils.getRandom(0, len - 1);
        let itemW = 300;
        let itemH = 365;
        this.size(920, 740);
        for (let i = 0; i < len; i++) {
            let item: DYMoreGameBoxItem6 = <DYMoreGameBoxItem6>this.box_game.getChildAt(i);
            if (item) {
                item.setData({ select: i == select, info: dataArr[i] });
            } else {
                item = Laya.Pool.getItemByClass("DYMoreGameBoxItem6", DYMoreGameBoxItem6);
                item.setData({ select: i == select, info: dataArr[i] });
                item.x = (i % 3) * (itemW + 10);
                item.y = Math.floor(i / 3) * (itemH + 10);
                this.box_game.addChild(item);
            }
        }
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();
    }

    /**
     * 移除事件
     */
    private removeEvent() {

    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        // Laya.timer.clearAll(this);
    }
}

/**
 * 嘟游渠道 更多游戏-页面中导出游戏盒子Item
 */
class DYMoreGameBoxItem4 extends Laya.Box {
    public className_key = "DYMoreGameBoxItem4";

    public constructor(data_?: { select: boolean, info: MoreGameInfo }) {
        super();
        this.data = data_;
        this.size(320, 390);
        this.createUI();
    }

    // 必备组件
    private img_db: Laya.Image;
    private img_icon: Laya.Image;
    private lab_name: Laya.Label;
    private img_finger: Laya.Image;

    /** 数据源 */
    public data: { select: boolean, info: MoreGameInfo };

    private createUI() {
        this.img_db = new Laya.Image();
        this.img_db.sizeGrid = "15,15,95,15";
        this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
        this.img_db.size(320, 390);
        this.addChild(this.img_db);

        this.img_icon = new Laya.Image();
        this.img_icon.centerX = 0;
        this.img_icon.y = 9;
        this.img_icon.size(300, 300);
        this.addChild(this.img_icon);

        this.lab_name = new Laya.Label();
        this.lab_name.font = "SimHei";
        this.lab_name.fontSize = 40;
        this.lab_name.color = "#ffffff";
        this.lab_name.centerX = 0;
        this.lab_name.y = 325;
        this.addChild(this.lab_name);

        this.img_finger = new Laya.Image();
        this.img_finger.skin = "resource/assets/channel/duyou/failed_icon_1.png";
        this.img_finger.centerX = 50;
        this.img_finger.centerY = 50;
        this.img_finger.visible = false;
        this.addChild(this.img_finger);
    }

    public setData(data_: { select: boolean, info: MoreGameInfo }) {
        this.data = data_;
        this.addEvent();
        this.initView();
    }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.on(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /** 初始化页面 */
    private initView() {
        if (!this.data) return;
        let data = this.data.info;
        this.img_finger.visible = this.data.select;
        this.lab_name.text = data.name;
        this.img_icon.skin = data.ad_img;
        // this.lab_name.text = Utils.cutOutStr1(data.title, 5);
    }

    private onMouseDown() {
        let startTime = (new Date()).getTime();
        let mouseUp = (evt: Laya.Event) => {
            let endTime = (new Date()).getTime();
            if (endTime - startTime <= 150) {
                this.onPlay();
            }
            this.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.off(Laya.Event.MOUSE_OUT, this, mouseOut);
        }
        let mouseOut = (evt: Laya.Event) => {
        }
        this.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
    }

    private onPlay() {
        if (!this.data) return;
        let data = this.data.info;
        DYChannelMgr.instance.clickGame(data.ad_id);
        let obj = {
            appId: data.ad_appid,
            path: data.url,
            success: () => {
                console.log("navigateToMiniProgram success!");
                DYChannelMgr.instance.toGame(data.ad_id);
            },
            fail: (e) => {
                console.log("navigateToMiniProgram fail", e);
                EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
            }
        };
        wx.navigateToMiniProgram(obj);
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.off(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        this.removeEvent();
        this.data = null;
        Laya.Pool.recover("DYMoreGameBoxItem4", this);
    }
}

/**
 * 嘟游渠道 更多游戏-页面中导出游戏盒子Item
 */
class DYMoreGameBoxItem6 extends Laya.Box {
    public className_key = "DYMoreGameBoxItem6";

    public constructor(data_?: { select: boolean, info: MoreGameInfo }) {
        super();
        this.data = data_;
        this.size(300, 365);
        this.createUI();
    }

    // 必备组件
    private img_db: Laya.Image;
    private img_icon: Laya.Image;
    private lab_name: Laya.Label;
    private img_finger: Laya.Image;

    /** 数据源 */
    public data: { select: boolean, info: MoreGameInfo };

    private createUI() {
        this.img_db = new Laya.Image();
        this.img_db.sizeGrid = "15,15,95,15";
        this.img_db.skin = "resource/assets/channel/duyou/box_baseboard_1.png";
        this.img_db.size(300, 365);
        this.addChild(this.img_db);

        this.img_icon = new Laya.Image();
        this.img_icon.centerX = 0;
        this.img_icon.y = 9;
        this.img_icon.size(280, 280);
        this.addChild(this.img_icon);

        this.lab_name = new Laya.Label();
        this.lab_name.font = "SimHei";
        this.lab_name.fontSize = 38;
        this.lab_name.color = "#ffffff";
        this.lab_name.centerX = 0;
        this.lab_name.y = 300;
        this.addChild(this.lab_name);

        this.img_finger = new Laya.Image();
        this.img_finger.skin = "resource/assets/channel/duyou/failed_icon_1.png";
        this.img_finger.centerX = 50;
        this.img_finger.centerY = 50;
        this.img_finger.visible = false;
        this.addChild(this.img_finger);
    }

    public setData(data_: { select: boolean, info: MoreGameInfo }) {
        this.data = data_;
        this.addEvent();
        this.initView();
    }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.on(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /** 初始化页面 */
    private initView() {
        if (!this.data) return;
        let data = this.data.info;
        this.img_finger.visible = this.data.select;
        this.lab_name.text = data.name;
        this.img_icon.skin = data.ad_img;
        // this.lab_name.text = Utils.cutOutStr1(data.title, 5);
    }

    private onMouseDown() {
        let startTime = (new Date()).getTime();
        let mouseUp = (evt: Laya.Event) => {
            let endTime = (new Date()).getTime();
            if (endTime - startTime <= 150) {
                this.onPlay();
            }
            this.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.off(Laya.Event.MOUSE_OUT, this, mouseOut);
        }
        let mouseOut = (evt: Laya.Event) => {
        }
        this.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
    }

    private onPlay() {
        if (!this.data) return;
        let data = this.data.info;
        DYChannelMgr.instance.clickGame(data.ad_id);
        let obj = {
            appId: data.ad_appid,
            path: data.url,
            success: () => {
                console.log("navigateToMiniProgram success!");
                DYChannelMgr.instance.toGame(data.ad_id);
            },
            fail: (e) => {
                console.log("navigateToMiniProgram fail", e);
                EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
            }
        };
        wx.navigateToMiniProgram(obj);
    }

    /**
     * 移除事件
     */
    private removeEvent() {
        this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.off(Laya.Event.REMOVED, this, this.onRemoved);
    }

    /**
     * 当移除时候
     */
    public onRemoved() {
        this.removeEvent();
        this.data = null;
        Laya.Pool.recover("DYMoreGameBoxItem6", this);
    }
}