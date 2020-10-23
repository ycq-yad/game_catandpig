import { BaseBullet, BulletInfo } from "./BaseBullet";
import { GameConstant, Physic, GAMESTATUS } from "../base/GameObj";
import { SoundConst } from "../../../manager/SoundManager";
import { Player } from "../player/Player";
import { GameManager } from "../../../manager/GameManager";
// import { SoundConst } from "../../../manager/SoundManager";
// import { FlyPig } from "../pig/FlyPig";
/**
 * 鱼雷炸弹
 */
export class MineBullet extends BaseBullet {
    className_key = "MineBullet";
    public onCreate(data: BulletInfo) {
        super.onCreate(data);
        this.rigidBody.label = GameConstant.MineBoom;
        this.collider.label = GameConstant.MineBoom;
    }

    /**
   * 检测碰撞
   * @param other 
   * @param self 
   * @param contact 
   */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        console.log(other.label);
        if (other.label.indexOf(GameConstant.Water_wave) > -1) {
            if (!this.isActive) return;
            if (this.rigidBody.linearVelocity.y < 0) return;
            let player = this.objInfo_.owner as Player
            if (player.objInfo_.playerId == '130001') {
                this.playGameEffect(SoundConst.BombDrop);
                return;
            }
            this.rigidBody.type = Physic.KINEMATIC;
            this.rigidBody.setVelocity({ x: 0, y: 0 });
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.playGameEffect(SoundConst.BombDrop);
            Laya.timer.once(8000, this, () => {
                this.rigidBody.type = Physic.DYNAMIC;
            })
        }
    }
}