import { BaseBullet, BulletInfo } from "./BaseBullet";
import { Physic, GameConstant, GAMESTATUS } from "../base/GameObj";
import { GameManager } from "../../../manager/GameManager";

/**
 * 导弹
 */
export class MissileBullet extends BaseBullet {
    className_key = "MissileBullet";

    public vel = { x: 0, y: 0 }
    public onCreate(data: BulletInfo) {
        super.onCreate(data);
        this.index = 0;
        this.rigidBody.type = Physic.KINEMATIC;
        this.collider.label = GameConstant.Bullet;
        this.vel.y = -Math.abs(data.vely);
        this.vel.x = Math.abs(data.velx);
        // this.rigidBody.setVelocity({ x: 0, y: -data.vely });
        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    private index = 0;

    protected onLoop() {
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING || GameManager.instance.playerShip == null) {
            Laya.timer.clear(this, this.onLoop);

            return;
        }
        if (this.y + 200 > GameManager.instance.playerShip.y && this.index == 0) {
            if (this.vel.x < 1) {
                this.vel.x = 0;
            }
            if (Math.abs(this.vel.y) < 2) {
                this.vel.y = -5;
            }
            this.vel.x /= 2;
        } else {
            this.index++;
            if (this.index < 40) {
                this.vel.x -= 0.5;
                this.vel.y += 0.5;

            } else {
                Laya.timer.clear(this, this.onLoop);
                let data = GameManager.instance.getRandomLoca(this.objInfo_.type)
                let vel: Array<number> = Utils.getRunDirection({ x: this.x, y: this.y }, { x: data.x, y: data.y }, Math.abs(this.objInfo_.velx));
                this.vel.x = vel[0];
                this.vel.y = vel[1];
            }
        }


        this.rigidBody.setVelocity(this.vel);
    }
    /**
     * 检测碰撞
     * @param other 
     * @param self 
     * @param contact 
     */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {
        // console.log(other);
        let otherOwner = other.owner;
        if (otherOwner instanceof BaseBullet) {//碰到子弹

            if (this.objInfo_.blood <= 0) {
                return;
            }

            let bowner = otherOwner.objInfo_.owner;
            if (bowner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理

            } else {
                otherOwner.destroy();
                this.destroy();
            }
        }

    }



    public onRecovery() {
        super.onRecovery();
    }




}

