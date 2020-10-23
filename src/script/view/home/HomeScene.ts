import GameMgr from "../../manager/GameMgr";
import GameEvent from "../../common/GameEvent";
import { MainScene } from "./MainScene";
import DungeonScene from "../game/dungeon/DungeonScene";
import RegattaScene from "../game/regatta/RegattaScene";
import SoundManager, { SoundConst } from "../../manager/SoundManager";
import { MiniManeger } from "../../manager/MiniManeger";

/**
 * 首页
 */
export class HomeScene extends BaseSceneUISkin {
    className_key = "HomeScene";
    public constructor() {
        super();
        this.skin = "home/HomeScene.json";
    }

    private box_view: Laya.Box;
    private box_main: Laya.Box;
    private com_main: MainScene;

    protected childrenCreated() {
        super.childrenCreated();
        ResUtil.getIntance().loadGroups(["propPublic"], () => {

        });
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
    }

    /** 增加事件监听 */
    private addEvent() {
        EventMgr.getInstance().addEvent(GameEvent.SHOW_MAIN, this, this.displayMainView);
        EventMgr.getInstance().addEvent(GameEvent.SHOW_REGATTA, this, this.displayFosterView);
    }

    /** 初始化页面 */
    private initView() {
        SoundManager.getInstance().playBgMusic(SoundConst.MainBgm);
        // this.displayMainView();
        // this.displayFosterView();
    }

    /** 主界面 */
    public displayMainView() {
        // if (DeviceUtil.isWXMiniGame()) {
        //     let xs = 0;
        //     if (DeviceUtil.getIsIphoneX()) {
        //         xs = 180;
        //     }
        //     MiniManeger.instance.addOpenWxData({ x: xs, parent: this, width: 200, height: 1200, top: 400 });
        // }

        GameMgr.getInstance().showTopBar();
        this.box_view.removeChildren();
        if (!this.com_main) {
            this.com_main = <MainScene>GameMgr.getInstance().getView(MainScene);
            this.com_main.com_home = this;
            this.box_main.addChild(this.com_main);
        }
        this.com_main.showMain();
        this.box_view.visible = false;
        this.box_main.visible = true;
    }

    /** 培养界面 */
    public displayFosterView() {
        if (DeviceUtil.isWXMiniGame()) {
            MiniManeger.instance.removeOpenData({ parent: this });
            //
        }
        this.box_view.removeChildren();
        if (!this.com_main) {
            this.com_main = <MainScene>GameMgr.getInstance().getView(MainScene);
            this.com_main.com_home = this;
            this.box_main.addChild(this.com_main);
        }
        this.com_main.showRegatta();
        this.box_view.visible = false;
        this.box_main.visible = true;
        // GameMgr.getInstance().showBufferLoading();
        // ResUtil.getIntance().loadGroups(["foster"], () => {
        //     this.box_view.removeChildren();
        //     let view = <AdventureScene>GameMgr.getInstance().getView(AdventureScene);
        //     GameMgr.getInstance().hiddeBufferLoading();
        //     this.box_main.visible = false;
        //     this.box_view.visible = true;
        //     this.box_view.addChild(view);
        // });
    }

    /** 副本界面 */
    public displayDungeonView() {
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["dungeon"], () => {
            this.box_view.removeChildren();
            let view = <DungeonScene>GameMgr.getInstance().getView(DungeonScene);
            this.box_main.visible = false;
            this.box_view.visible = true;
            this.box_view.addChild(view);
            GameMgr.getInstance().hiddeBufferLoading();
            GameMgr.getInstance().hideTopBar();
        });
    }

    /** 帆船赛界面 */
    public displayRegattaView() {
        if (DeviceUtil.isWXMiniGame()) {
            MiniManeger.instance.removeOpenData({ parent: this });
            //
        }
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["regatta"], () => {
            this.box_view.removeChildren();
            let view = <RegattaScene>GameMgr.getInstance().getView(RegattaScene);
            this.box_main.visible = false;
            this.box_view.visible = true;
            this.box_view.addChild(view);
            GameMgr.getInstance().hiddeBufferLoading();
            GameMgr.getInstance().hideTopBar();
        });
    }

    private removeEvent() {
        EventMgr.getInstance().removeEvent(GameEvent.SHOW_MAIN, this, this.displayMainView);
        EventMgr.getInstance().removeEvent(GameEvent.SHOW_REGATTA, this, this.displayFosterView);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.box_main.removeChildren();
        this.box_view.removeChildren();
        this.com_main = null;
    }

    public removeSelf() {
        return super.removeSelf();
    }
}