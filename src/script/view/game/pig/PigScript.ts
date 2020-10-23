import { GameManager } from "../../../manager/GameManager";
import { GAMESTATUS } from "../base/GameObj";
import { PigPlayer } from "./PigPlayer";

export default class PigScript extends Laya.Script {


    constructor() { super(); }

    onEnable(): void {
    }

    onDisable(): void {

    }


    public pigPlayer: PigPlayer;
    onAwake() {
        super.onAwake();
        this.pigPlayer = this.owner as PigPlayer;

    }
    // public index = 0;
    /**
     * 实时更新子弹的旋转方向
     */
    public onUpdate() {
        super.onUpdate();
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) {
            return;
        }
        // this.index++;
        // if (this.bullet.rigidBody.linearVelocity.y >= 0) {
        //     console.log("this.index");
        // }
        if (this.pigPlayer.view2d_) {
            this.pigPlayer.view2d_.x = this.pigPlayer.x;
            this.pigPlayer.view2d_.y = this.pigPlayer.y;
            // console.log("this.pigPlayer.view2d_", this.pigPlayer.view2d_.x, this.pigPlayer.view2d_.y)
        }




        // console.log(this.bullet.view2d_.x, this.bullet.view2d_.y)

    }
}