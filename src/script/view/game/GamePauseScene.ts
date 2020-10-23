import { HomeScene } from "../home/HomeScene";
import GameConst from "../../common/GameConst";
import { GameManager, GameModel } from "../../manager/GameManager";
import GameMgr from "../../manager/GameMgr";
import SoundManager, { SoundConst } from "../../manager/SoundManager";
import { MiniManeger } from "../../manager/MiniManeger";
import { GameData } from "../../common/GameData";
import TTBaoTypeGame from "../home/tt/TTBaoTypeGame";

export class GamePauseScene extends BaseSceneUISkinPopView {
    className_key = "GamePauseScene";

    public constructor() {
        super();
        this.skin = 'game/GamePauseScene.json';
    }
    // public bg_img_res = 'resource/assets/img/gamePublic/gamePublic_bg1.jpg';
    public grp_center: Laya.Box;
    public img_bg: Laya.Image;
    public btn_home: Laya.Button;
    public btn_restart: Laya.Button;
    public btn_continue: Laya.Button;

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_home.addComponent(CustomScaleComponent);
        this.btn_restart.addComponent(CustomScaleComponent);
        this.btn_continue.addComponent(CustomScaleComponent);
        DeviceUtil.adaptationBgImg(this.img_bg);
        // this.img_bg.width = this.width;
        // this.img_bg.height = this.height;
        // this.img_bg.visible = false;
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
        this.btn_home.on(Laya.Event.CLICK, this, this.onHome);
        this.btn_restart.on(Laya.Event.CLICK, this, this.onRestart);
        this.btn_continue.on(Laya.Event.CLICK, this, this.onClose);
    }

    /** 设置数据 */
    public setData(data: any) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private async initView() {
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            let phone = MiniManeger.instance.systemInfo;
            let offset = { w: phone.screenWidth / 2, h: phone.screenHeight }
            MiniManeger.instance.showBannerAd(offset);
        }
        Laya.physicsTimer.pause();
        // EventMgr.getInstance().sendEvent(GameConst.GamePauseOrResume, 0);
        Laya.timer.pause();
        // if (DeviceUtil.isTTMiniGame()) {

        // }

    }


    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // EventMgr.getInstance().sendEvent(GameConst.GamePauseOrResume, 1);

        this.removeSelf();
    }
    public removeSelf() {
        Laya.timer.resume();
        Laya.physicsTimer.resume();
        return super.removeSelf();
    }

    public onHome() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SceneManager.getInstance().openGameScene(HomeScene);
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        // if (GameManager.instance.gameModel == GameModel.Adventure) {
        //     homeView.displayDungeonView();
        // } else {
        //     homeView.displayMainView();

        // }
        homeView.displayMainView();
        MiniManeger.instance.stopGameRecordOver = null;
        MiniManeger.instance.stopGameRecord();
        this.removeSelf();
    }


    public onRestart() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // EventMgr.getInstance().sendEvent(GameConst.RestartGame);
        // GameManager.instance.openGame('');
        // GameManager.instance.
        MiniManeger.instance.stopGameRecordOver = null;
        MiniManeger.instance.stopGameRecord();
        this.removeSelf();
        // SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
        // Laya.timer.once(1000, this, () => {
        GameManager.instance.openGame('')
        //     GameMgr.getInstance().loadingView.remove();
        // });
        // this.removeSelf();
    }
    /** 移除事件 */
    private removeEvent() {
        this.btn_home.off(Laya.Event.CLICK, this, this.onHome);
        this.btn_restart.off(Laya.Event.CLICK, this, this.onRestart);
        this.btn_continue.off(Laya.Event.CLICK, this, this.onClose);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.viewData_ = null;

        MiniManeger.instance.hideBanner();
    }
}