import { GameObj, GameConstant, GameObjInfo, Physic, GAMESTATUS } from "../base/GameObj";
import BulletScript from "./BulletScript";
import { Player } from "../player/Player";
import ObjectPool from "../../../common/ObjectPool";
import AnimationManager from "../../../manager/AnimationManager";
import { GameManager } from "../../../manager/GameManager";
import ConfigManager from "../../../manager/ConfigManager";
import { SoundConst } from "../../../manager/SoundManager";
// import { SoundConst } from "../../../manager/SoundManager";

/**
 * 基础子弹类
 */
export class BaseBullet extends GameObj {
    className_key = "BaseBullet";

    public bulletScript: BulletScript;

    public objInfo_: BulletInfo;

    public isActive: boolean = false;


    public baseRotation = 0;
    /**
     * 显示2d对象
     */
    public view2d_: Laya.Box;
    /**
     * 创建
     */
    public onCreate(data: BulletInfo) {
        super.onCreate(data, false);
        this.baseRotation = 0;
        this.rigidBody = this.addComponent(Laya.RigidBody) as Laya.RigidBody;
        this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        // this.rigidBody.type = 'kinematic';
        this.isActive = true;

        this.rigidBody.type = Physic.DYNAMIC;
        this.rigidBody.bullet = true;
        this.collider = this.addComponent(Laya.BoxCollider) as Laya.BoxCollider;
        this.collider.isSensor = true;
        this.collider.label = GameConstant.Bullet;
        // this.collider.radius = this.height / 2;
        this.collider.width = data.width;
        this.collider.height = data.height;


        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
            this.view2d_.anchorX = 0.5;
            this.view2d_.anchorY = 0.5;
        }
        this.view2d_.x = this.x;
        this.view2d_.y = this.y;
        this.view2d_.size(this.width, this.height);
        //设置重力因子
        this.rigidBody.gravityScale = data.gravityScale;
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        let sound_effect = null;
        switch (this.objInfo_.bid + '') {
            case 100003 + '':
            case 100101 + '':
            case 100108 + '':
            case 100107 + '':
            case 100106 + '':
                sound_effect = SoundConst.RocketShot;
                break
            case 100001 + '':
            case 100004 + '':
            case 100005 + '':
            case 100006 + '':
            case 100009 + '':
            case 100102 + '':
            case 100103 + '':
            case 100105 + '':
            case 100901 + '':
                sound_effect = SoundConst.SniperShot;
                break
        }
        if (sound_effect != null) {

            this.playGameEffect(sound_effect);
        }
        this.bulletScript = this.addComponent(BulletScript) as BulletScript;
    }

    /**
     * 更新方向
     */
    public updateRoatation() {
        let linearVelocity = this.rigidBody.linearVelocity;
        let roa = Utils.getAngleTwoPoint({ x: 0, y: 0 }, { x: linearVelocity.x, y: linearVelocity.y });
        this.view2d_.rotation = roa + this.baseRotation;
    }

    public init() {
        //设置速度
        this.rigidBody.setVelocity({ x: this.objInfo_.velx, y: this.objInfo_.vely });
        this.createIcon();
    }
    /**
     *  
     */
    private createIcon() {
        // crow_bullet

        let icon_bullet = Laya.Pool.getItemByClass("icon_bullet", Laya.Image) as Laya.Image;
        icon_bullet.skin = 'resource/assets/img/game/bullet/' + this.objInfo_.bulletId + '.png';
        // icon_bullet.size(this.objInfo_.width, this.objInfo_.height)
        icon_bullet.anchorX = 0.5;
        icon_bullet.anchorY = 0.5;
        icon_bullet.centerX = 0;
        icon_bullet.centerY = 0;
        icon_bullet.size(this.objInfo_.width, this.objInfo_.height);
        icon_bullet.onDisable = () => {
            Laya.Pool.recover('icon_bullet', icon_bullet);

        }
        this.view2d_.addChild(icon_bullet);

    }


    public createBulletSmoke(): Laya.Image {
        let img_bullet_smoke = Laya.Pool.getItemByClass("img_bullet_smoke", Laya.Image)//new Laya.Image();
        img_bullet_smoke.skin = 'resource/assets/img/game/bullet/bulletSmoke_1.png';
        img_bullet_smoke.scaleX = 1;
        img_bullet_smoke.scaleY = 1;
        img_bullet_smoke.alpha = 1;
        img_bullet_smoke.size(this.objInfo_.height, this.objInfo_.height);
        img_bullet_smoke.anchorX = 0.5;
        img_bullet_smoke.anchorY = 0.5;
        img_bullet_smoke.x = this.view2d_.x;
        img_bullet_smoke.y = this.view2d_.y;
        Laya.Tween.to(img_bullet_smoke, { scaleX: 0.1, scaleY: 0.1, alpha: 0.1 }, 500, null, Laya.Handler.create(img_bullet_smoke, () => {
            Laya.Pool.recover('img_bullet_smoke', img_bullet_smoke);
            img_bullet_smoke.removeSelf();
        }))
        GameManager.instance.box_game.addChildAt(img_bullet_smoke, 0);
        return img_bullet_smoke;
    }

    private createBulletAni() {

    }
    /**
     * 检测碰撞
     * @param other 
     * @param self 
     * @param contact 
     */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {
        // console.log(other.label)
    }
    /**
    * 离开碰撞
    */
    protected onTriggerExit(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {

    }
    /**
     * 回收
     */
    public onRecovery() {
        if (this.isRecovery) return;
        Laya.timer.clearAll(this);
        if (this.bulletScript) {
            this._destroyComponent(this.bulletScript);
            this.bulletScript = null;
        }
        delete GameManager.instance.bulletObj[this.objInfo_.id];
        this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        this.view2d_.removeSelf();
        this._destroyComponent(this.collider);
        super.onRecovery();

    }
    /**
     * 碰撞体
     */
    public rigidBody: Laya.RigidBody;
    /**
     * 矩形碰撞体
     */
    public collider: Laya.BoxCollider;


    /**
       * 移除自己
       */
    public async destroy() {
        // console.log("Master Arrow destroy");
        // if (GameManager.instance.gameStatus == GAMESTATUS.PLAYING) {
        // }
        await this.playAni("resource/assets/img/ani/bullet/blasta.sk");
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        let sound_effect = null;
        switch (this.objInfo_.bid + '') {
            case 100003 + '':
            case 100101 + '':
            case 100108 + '':
            case 100107 + '':
            case 100106 + '':
                sound_effect = SoundConst.Explosion;
                break
            case 100001 + '':
            case 100004 + '':
            case 100005 + '':
            case 100006 + '':
            case 100102 + '':
            case 100103 + '':
            case 100105 + '':
            case 100109 + '':
            case 100901 + '':
                sound_effect = SoundConst.SniperHit;
                break
        }
        if (sound_effect != null) {

            this.playGameEffect(sound_effect);
        }

        this.leaveScene();
    }

    public leaveScene() {
        if (this.bulletScript) {

            this._destroyComponent(this.bulletScript);
            this.bulletScript = null;
        }
        this.view2d_.removeChildren();
        if (this.parent) {
            ObjectPool.instance.recoveryObj(this);
            // this.onRecovery();
        }
    }

    public playAni(url): Promise<Laya.Skeleton> {
        let self = this;
        return new Promise<Laya.Skeleton>((resolve) => {
            if (url == null) {
                // url = "resource/assets/img/ani/bullet/blasta.sk";
            }
            if (self.view2d_.parent == null) {
                resolve(null);
                return;
            }
            AnimationManager.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                if (boomAnimation == null) {
                    resolve(boomAnimation);
                    return;
                };
                console.log("aniNum =", boomAnimation.getAnimNum());
                if (self.view2d_.parent == null) {
                    resolve(boomAnimation);
                    return;
                }
                // this.addChild(boomAnimation);as
                boomAnimation.player.playbackRate = 1;
                // boomAnimation.player.once(Laya.Event.COMPLETE, self, () => {
                //     console.log("播放完成",boomAnimation);
                //     if (boomAnimation) {
                //         boomAnimation.removeSelf();
                //         boomAnimation.destroy();
                //     }
                //     boomAnimation = null;
                // });
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;

                // let index = boomAnimation.getAniNameByIndex("daiji")
                boomAnimation.play("blasta", false)
                boomAnimation.x = self.view2d_.x;
                boomAnimation.y = self.view2d_.y;

                boomAnimation.player.once(Laya.Event.STOPPED, self, () => {
                    // console.log("播放完成", boomAnimation);
                    if (boomAnimation) {
                        boomAnimation.removeSelf();
                        // boomAnimation.stop();
                        // boomAnimation.destroy();
                    }
                    boomAnimation = null;
                });
                // console.log(boomAnimation.width, boomAnimation.height)
                // boomAnimation.play(0, true);
                // let test = boomAnimation.getSlotByName('qiang-k');
                // console.log(test.getMatrix())
                // 

                self.view2d_.parent.addChild(boomAnimation);
                resolve(boomAnimation)
            }, 1);
        })

    }
}


export class BulletInfo extends GameObjInfo {

    public offx: number = 0;
    public offy: number = 0;
    /**
     * 子弹id
     */
    public bid: number;
    /**
     * 重力因子
     * 为负数 重力向上
     */
    public gravityScale: number;
    /**
     * x方向速度
     * 
     */
    public velx: number;
    /**
     * y方向速度
     */
    public vely: number;

    /**
     * 攻击力
     * 指定了对象
     */
    public attack: number;
    /**
     * 所属对象,计算伤害的
     */
    public owner: Player;
    /**
     * 是否穿透护盾
     */
    public isAttackCanPt: boolean;

    /**
     * 是敌人麻痹
     */
    public canMakeEnemyStop: boolean;
    /**
     * 子弹id
     */
    public bulletId: string;

    /**
     * 是否展示拖尾
     */
    public showSmoke: boolean = true;

}