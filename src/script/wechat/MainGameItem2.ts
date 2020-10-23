import DYChannelMgr, { MoreGameInfo } from "../manager/channel/DYChannelMgr";
import { BaseUIScene } from "../view/BaseUIScene";

export class MainGameItem2 extends BaseUIScene {
    className_key = "MainGameItem2";

    public constructor(data) {
        super();
        this.viewData_ = data

        this.skin = "platform/dy/wechat/MainGameItem2.json";
    }


    public index: number = 0;
    public viewData_: MoreGameInfo;
    private gameInfo: MoreGameInfo;

    private txt_title: Laya.Label;
    private icon_title: Laya.Image;

    public setData(data: any) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }
    public adaptationStage(){
        
    }

    public initView() {
        let data = this.viewData_;
        this.gameInfo = data;
        let gameInfo = data
        this.txt_title.text = gameInfo.name;
        this.icon_title.skin = gameInfo.ad_img;
        this.gameInfo = gameInfo;
    }
    public addEvent() {
        this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.on(Laya.Event.REMOVED, this, this.onRemoved);
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
        if (!this.gameInfo) return;
        let data = this.gameInfo;
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
                // EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, false);
            }
        };
        wx.navigateToMiniProgram(obj);
    }


}