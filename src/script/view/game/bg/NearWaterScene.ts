import { GameManager } from "../../../manager/GameManager";

/**
 * 远程背景图
 */
export class NearWaterScene extends BaseSceneUISkin {
    public className_key = "NearWaterScene";
    public box_game: Laya.Box;
    public box_mwav: Laya.Box;
    public box_: Laya.Box;
    public mwav1: Laya.Image;
    public mwav2: Laya.Image;
    public icon_enemy: Laya.Image;
    public icon_player: Laya.Image;

    public constructor() {
        super();
        this.skin = 'game/bg/NearWaterScene.json';
    }
    public adaptationStage() {
        this.width=Laya.stage.width;
    }
    protected createChildren() {
        super.createChildren();
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            // this.width = this.baseWid;
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

    public baseWid = 2500;

    /**
     * 初始化数据
     */
    public initView() {
        // this.waterBg.visible = false;
        // this.waterMiddle.visible = false;
        this.icon_player.visible = false;
        this.icon_enemy.visible = false;
        GameManager.instance.box_game = this.box_game;
        Laya.timer.frameLoop(1, this, this.onLoop);
        this.wavUpOrDown();
    
    }

    public onLoop() {
        //水
        this.mwav1.x -= 4;
        this.mwav2.x -= 4;
        if (this.mwav1.x <= -this.baseWid) {
            this.mwav1.x = this.mwav2.x + this.baseWid;
        }
        if (this.mwav2.x <= -this.baseWid) {
            this.mwav2.x = this.mwav1.x + this.baseWid;
        }

        // console.log(this.bg1.x, this.bg2.x)
    }
    public wavUpOrDown() {
        Laya.Tween.to(this.box_mwav, { y: this.box_mwav.y - 10 }, 1000, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.box_mwav, { y: + 10 }, 1000, null, Laya.Handler.create(this, () => {
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