/**
 * 远程背景图
 */
export class MiddleWaterScene extends BaseSceneUISkin {
    public className_key = "MiddleWaterScene";
    public water1: Laya.Image;
    public wav1: Laya.Image;
    public water2: Laya.Image;
    public wav2: Laya.Image;
    public mwav1: Laya.Image;
    public mwav2: Laya.Image;
    public box_mwav: Laya.Box;
    public box_wav: Laya.Box;

    public constructor() {
        super();
        this.skin = 'game/bg/MiddleWaterScene.json';
    }

    protected createChildren() {
        super.createChildren();
    }
    public adaptationStage(){

    }
    public onAddStage() {
        // super.onAddStage();
        if (this.isCreate) {
            // this.width = this.baseWid;
            this.height = 480;
            this.initView();
            this.addEvent();
            console.log(Laya.stage.width, Laya.stage.height)
        }
    }

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
    }

    public baseWid = 2500;

    /**
     * 初始化数据
     */
    public initView() {
        // this.waterBg.visible = false;
        // this.waterMiddle.visible = false;
        Laya.timer.frameLoop(1, this, this.onLoop);
        this.wavUpOrDown();
    }

    public onLoop() {
        //水
        this.water1.x -= 2;
        this.water2.x -= 2;
        if (this.water1.x <= -this.baseWid) {
            this.water1.x = this.water2.x + this.baseWid;
        }
        if (this.water2.x <= -this.baseWid) {
            this.water2.x = this.water1.x + this.baseWid;
        }


        this.wav1.x -= 2;
        this.wav2.x -= 2;
        if (this.wav1.x <= -this.baseWid) {
            this.wav1.x = this.wav2.x + this.baseWid;
        }
        if (this.wav2.x <= -this.baseWid) {
            this.wav2.x = this.wav1.x + this.baseWid;
        }

        this.mwav1.x -= 3;
        this.mwav2.x -= 3;
        if (this.mwav1.x <= -this.baseWid) {
            this.mwav1.x = this.mwav2.x + this.baseWid;
        }
        if (this.mwav2.x <= -this.baseWid) {
            this.mwav2.x = this.mwav1.x + this.baseWid;
        }

        // console.log(this.bg1.x, this.bg2.x)
    }

    public wavUpOrDown() {
        Laya.Tween.to(this.box_wav, { y: this.box_wav.y - 10 }, 1000, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.box_wav, { y: + 10 }, 1000, null, Laya.Handler.create(this, () => {
                this.wavUpOrDown();
            }))
        }))
    }
    /*
    *
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