import { GameData } from "../common/GameData";

/**
 * GamePreLoadingView
 */
export default class GameLoadingView extends BaseSceneUISkin implements ILoadingView {
    public className_key = "GameLoadingView";
    /** 背景图 */
    private img_bg: Laya.Image;
    /** 进度条底板 */
    private img_jdt_db: Laya.Image;
    /** 进度条 */
    private img_jdt: Laya.Image;
    /** Loading字样 */
    private img_load: Laya.Image;

    private txt_load: Laya.Label;

    constructor() {
        super();
        this.width = Laya.stage.width;
        this.height = Laya.stage.height;
        this.img_bg = new Laya.Image();
        this.img_bg.skin = "resource/assets/loading/loading_bg.jpg?v="+new Date().getTime();
        this.img_bg.width = 1920;
        this.img_bg.height = 1080;
        this.img_bg.centerX = this.img_bg.centerY = 0;
        this.img_bg.anchorX = this.img_bg.anchorY = 0.5;
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.addChild(this.img_bg);

        this.img_jdt_db = new Laya.Image();
        this.img_jdt_db.skin = "resource/assets/loading/loading2.png";
        this.img_jdt_db.sizeGrid = "0,4,0,4";
        this.img_jdt_db.width = 1285;
        this.img_jdt_db.height = 36;
        this.img_jdt_db.centerX = 0;
        this.img_jdt_db.bottom = 120;
        this.addChild(this.img_jdt_db);

        this.img_jdt = new Laya.Image();
        this.img_jdt.skin = "resource/assets/loading/loading1.png";
        this.img_jdt.sizeGrid = "0,4,0,4";
        this.img_jdt.width = 14;
        this.img_jdt.height = 36;
        this.img_jdt.x = 0;
        this.img_jdt.centerY = 0;
        this.img_jdt_db.addChild(this.img_jdt);

        this.img_load = new Laya.Image();
        this.img_load.skin = "resource/assets/loading/loading6.png";
        this.img_load.y = 60;
        this.img_load.centerX = 0;
        this.img_jdt_db.addChild(this.img_load);

        this.progress(1, 100);
    }

    public childrenCreated(): void {

    }

    private showAnimation() {
        // if (!this.img_mg) return;
        // let n: number = 1;
        // let func: Function = () => {
        //     n = n == 1 ? 2 : 1;
        //     this.img_mg.skin = this._url + n + ".png";
        // };
        // Laya.timer.loop(200, this, func);
    }

    createChildren(): void {
        super.createChildren();
    }

    public onAwake() {
        super.onAwake();
        // this.img_bg.scaleX = this.img_bg.scaleY = DeviceUtil.getScalePix();
    }

    public progress(index: number, len: number): void {
        this.img_jdt.width = 1285 * (index / len);
    }

    public remove() {
        // Laya.timer.clearAll(this);
        Laya.timer.clearAll(this);
        console.log("remove loadingView...");
        if (this && this.parent) this.parent.removeChild(this);
    }
}