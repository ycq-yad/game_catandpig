import { BaseBullet } from "./BaseBullet";
import { GameManager } from "../../../manager/GameManager";
import { GAMESTATUS } from "../base/GameObj";

export default class BulletScript extends Laya.Script {


    constructor() { super(); }

    onEnable(): void {
    }

    onDisable(): void {

    }


    public bullet: BaseBullet;
    onAwake() {
        super.onAwake();
        this.bullet = this.owner as BaseBullet;

    }
    // public index = 0;
    /**
     * 实时更新子弹的旋转方向
     */
    public onUpdate() {
        super.onUpdate();
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) {
            
            this.bullet.leaveScene();
            return;
        }
        // this.index++;
        // if (this.bullet.rigidBody.linearVelocity.y >= 0) {
        //     console.log("this.index");
        // }
        if (this.bullet.view2d_) {
            this.bullet.view2d_.x = this.bullet.x;
            this.bullet.view2d_.y = this.bullet.y;
            this.bullet.updateRoatation()
        }
        if (this.bullet.y > 3000 || this.bullet.y < -1000 || (this.bullet.x > 4000 || this.bullet.x < -1000)) {
            this.bullet.leaveScene();
        }
        if (this.bullet.objInfo_.showSmoke) {

            this.bullet.createBulletSmoke()
        }


        // console.log(this.bullet.view2d_.x, this.bullet.view2d_.y)

    }
}