/**
 * 远程背景图
 */
export class FarbgScene extends BaseSceneUISkin {
    public className_key = "FarbgScene";
    public bg1: Laya.Image;
    public bg2: Laya.Image;

    public constructor() {
        super();
        this.skin = "game/bg/FarbgScene.json";
    }
    public adaptationStage(){

    }
    protected createChildren() {
        super.createChildren();
    }
    public onAddStage() {
        if (this.isCreate) {
            // this.width = 2500;
            this.height = 600;
            this.initView();
            this.addEvent();
            console.log(Laya.stage.width, Laya.stage.height)
        }
    }

    public childrenCreated() {
        super.childrenCreated();

    }

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
    }

    /**
     * 初始化数据
     */
    public initView() {
        Laya.timer.frameLoop(1, this, this.onLoop)
    }

    public onLoop() {
        this.bg1.x -= 0.5;
        this.bg2.x -= 0.5;
        if (this.bg1.x <= -2500) {
            this.bg1.x = this.bg2.x + 2500;
        }
        if (this.bg2.x <= -2500) {
            this.bg2.x = this.bg1.x + 2500;
        }
        // console.log(this.bg1.x, this.bg2.x)
    }

    /**
     * 增加数据监听
     */
    public addEvent() {

    }

    public removeEvent() {
        Laya.timer.clear(this, this.onLoop);
    }

    public onRemoved() {
        super.onRemoved();
    }

    public removeSelf() {
        return super.removeSelf();
    }
}