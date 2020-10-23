import { GameObj, Physic, GameConstant, GameObjInfo } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { BaseBullet } from "../bullet/BaseBullet";
/**
 * 创建护盾
 */
export class ShipShield extends GameObj {

    className_key = "ShipShield";

    public objInfo_: ShiledInfo
    public view2d_: Laya.Box;
    public onCreate(data: ShiledInfo) {
        super.onCreate(data, false)
        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
            this.view2d_.autoSize = true;
            this.view2d_.anchorX = 0.5;
            this.view2d_.anchorY = 0.5;
        }
        this.createShipShield();
        this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        Laya.timer.once(this.objInfo_.lastTime, this, this.destroy);

        let img = Laya.Pool.getItemByClass('ship_shield', Laya.Image) as Laya.Image;
        img.skin = 'resource/assets/img/game/ship_shield.png';
        img.size(data.width, data.width);
        this.view2d_.addChild(img);
    }
    /**
     * 碰撞体
     */
    public rigidBody: Laya.RigidBody;
    /**
     * 矩形碰撞体
     */
    public collider: Laya.CircleCollider;
    /**
     * 创建船的护盾
     */
    public createShipShield() {
        let rigidBody = this.addComponent(Laya.RigidBody);
        rigidBody.type = Physic.STATIC;
        rigidBody.label = GameConstant.Shield;
        let circleCollider = this.addComponent(Laya.CircleCollider);
        circleCollider.radius = this.width / 2;
        circleCollider.label = GameConstant.Shield;
        circleCollider.y = this.width / 4
        this.collider = circleCollider;
        this.rigidBody = rigidBody;
    }

    /**
    * 离开碰撞
    */
    protected onTriggerExit(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {

    }

    /**
  * 检测碰撞
  * @param other 
  * @param self 
  * @param contact 
  */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {

        let owner = other.owner;
        if (owner instanceof BaseBullet) {//碰到子弹
            let bowner = owner.objInfo_.owner;
            if (bowner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理

            } else {
                if (!owner.isActive) return;
                if (owner.objInfo_.isAttackCanPt) return;
                owner.destroy();
            }
        }
    }
    public destroy() {
        ObjectPool.instance.recoveryObj(this);

    }

    public onRecovery() {
        super.onRecovery();
        this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        this.view2d_.removeChildren();
        this.view2d_.removeSelf();
        this._destroyComponent(this.collider);
        Laya.timer.clearAll(this);
        super.onRecovery();
    }
}
export class ShiledInfo extends GameObjInfo {
    /**
     * 持续时间
     */
    public lastTime: number;
}