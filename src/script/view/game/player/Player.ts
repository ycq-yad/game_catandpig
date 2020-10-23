import { GameObj, GameObjInfo, GameConstant, AttackType } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { BaseBullet, BulletInfo } from "../bullet/BaseBullet";
import { GameManager, BaseInfoType, GameModel } from "../../../manager/GameManager";
import AnimationManager from "../../../manager/AnimationManager";
import ConfigManager from "../../../manager/ConfigManager";
import GameConst from "../../../common/GameConst";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import { ObjectManager } from "../base/ObjectManager";
import { MineBullet } from "../bullet/MineBullet";
import { MissileBullet } from "../bullet/MissileBullet";
import { PlayerBlood } from "../blood/PlayerBlood";
/**
 * 玩家基本类
 */
export class Player extends GameObj {

    className_key = "Player";

    public isDead = false;


    public view2d_: Laya.Box;

    public objInfo_: PlayerGameInfo;


    public playerInfo: { "id": string, "name": string, "star": string, "url": string, "blt_id": string, "attack_type": string, "scale": string, "bonenameArr": string, "baseRoA": string }

    /**
     * 创建
     */
    public async  onCreate(data: PlayerGameInfo) {
        super.onCreate(data, false)
        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
            this.view2d_.anchorX = 0.5;
            this.view2d_.anchorY = 0.5;
        }

        if (this.objInfo_.isShow) return;

        EventMgr.getInstance().addEvent(GameConst.GameOver, this, this.onGameOver);
        EventMgr.getInstance().addEvent(GameConst.GamePauseOrResume, this, this.onGamePauseOrResume);
        // this.onLoop();
        // Laya.timer.loop(3000, this, this.onLoop)
        // if (this.objInfo_.type != GameConstant.Player) return;
        // this.playerAni(4, (index) => {
        //     if (index == null) return;
        //     this.preShoot();
        // });
    }
    public bloodView: PlayerBlood;
    public init() {
    }
    public onGamePauseOrResume(data: any) {
        if (data == 0) {
            this.gamePause();
        } else {
            this.gameResume()
        }
    }
    protected onGameOver() {
        EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
        Laya.timer.clearAll(this);

    }

    /**
      * 更新血量
      * @param updateBlood 
      */
    public async updateBlood(updateBlood: number) {
        this.objInfo_.curBlood += Math.floor(updateBlood);
        if (this.objInfo_.curBlood > this.objInfo_.blood) {
            this.objInfo_.curBlood = this.objInfo_.blood;
        }
        this.bloodView && this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        let txt_blood = new Laya.Label();
        txt_blood.text = '+' + Math.floor(updateBlood) + '';
        txt_blood.color = '#4ab600';
        txt_blood.y = -10;
        txt_blood.fontSize = 40; txt_blood.alpha = 1;
        txt_blood.fontSize = 60;
        txt_blood.bold = true;
        let point = Laya.Point.create();
        point.x = 0;
        point.y = 0;

        point = this.view2d_.localToGlobal(point);
        txt_blood.x = point.x;
        txt_blood.y = point.y;
        Laya.Tween.to(txt_blood, { y: point.y - 200, alpha: 0.2 }, 2000, null, Laya.Handler.create(txt_blood, () => {

            txt_blood.removeSelf();
        }))
        GameManager.instance.box_gameScene_game.addChild(txt_blood);
        /*   let boomAnimation = await this.createSkeleton('resource/assets/img/ani/bullet/addblood.sk');
          boomAnimation.scale(0.5, 0.5);
          boomAnimation.x = boomAnimation.width / 2;
          this.view2d_.addChild(boomAnimation);
          if (boomAnimation && boomAnimation.player) {
              boomAnimation.player.once(Laya.Event.STOPPED, self, () => {
                  // console.log("播放完成", boomAnimation);
                  if (boomAnimation) {
                      boomAnimation.removeSelf();
                      // boomAnimation.stop();
                      // boomAnimation.destroy();
                  }
                  boomAnimation = null;
              });
          }
          boomAnimation.play(0, false); */

    }



    public ani_player: Laya.Skeleton;
    /**
     * 创建动画
     * @param url 
     */
    public async  createSkeleton(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            if (url == null) {
                url = "resource/assets/img/ani/cat/cat1.sk";
            }
            AnimationManager.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                if (boomAnimation == null) resolve(boomAnimation);
                // this.addChild(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                // boomAnimation.player.once(Laya.Event.COMPLETE, self, () => {
                //     console.log("播放完成",boomAnimation);
                //     if (boomAnimation) {
                //         boomAnimation.removeSelf();
                //         boomAnimation.destroy();
                //     }
                //     boomAnimation = null;
                // });
                boomAnimation.pivotX = boomAnimation.width / 2;
                boomAnimation.pivotY = boomAnimation.height / 2;
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;
                // let index = boomAnimation.getAniNameByIndex("daiji")
                // boomAnimation.play(5, true)

                // console.log("aniNum =", boomAnimation.getAnimNum(), boomAnimation.width, boomAnimation.height);


                resolve(boomAnimation)
            }, 1);
        })

    }

    public gamePause() {
        if (this.ani_player) {
            this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);

        }
    }
    /**
     * 游戏恢复
     */
    public gameResume() {
    }

    /**
     * 播放动画
     */
    public playerAni(aniName: any, callBack: Function, isLoop = false) {
        // console.log("aniName>>>>>>>>>>>>", aniName);

        if (this.ani_player != null) {
            // this.ani_player.player.stop() ;
            this.ani_player.visible = true;
            if (callBack) {
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete)
                this.ani_player.player.once(Laya.Event.STOPPED, this, this.onComplete, [aniName, callBack])
            }

            this.ani_player.play(aniName, isLoop);
            this.localAniName = aniName
        } else {
            callBack && callBack(aniName)

        }
    }


    public playerWin() {
        this.ani_player.visible = true;
        this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
        this.ani_player.play(PlayerAniName.shengli1, false);

    }
    public localAniName: PlayerAniName
    public onComplete(aniName: string, callBack: Function) {
        if (aniName == PlayerAniName.ru) {
            this.ani_player.visible = false;
        }
        callBack && callBack(aniName);
    }


    public removeSelf() {
        ObjectPool.instance.recoveryObj(this);
        return super.removeSelf();
    }

    /**
     * 回收
     */
    public onRecovery() {
        if (this.isRecovery) return;
        super.onRecovery();
        if (this.ani_player) {
            this.ani_player.stop();
            this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
        }
        if (this.view2d_) {
            this.view2d_.removeChildren();
            this.view2d_.destroy();
        }
        this.view2d_ = null;
        EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
        EventMgr.getInstance().removeEvent(GameConst.GamePauseOrResume, this, this.onGamePauseOrResume);


    }
    /**
     * 发射子弹
     */
    public shootBullet(bulletInfo: BulletInfo) {
        //根据类型发射子弹
        // bulletInfo = new BulletInfo();
        // bulletInfo = this.testBullet(bulletInfo)
        if (this.nextAttackCanPt > 0) {
            this.nextAttackCanPt--;
            bulletInfo.isAttackCanPt = true;
        } else {
            bulletInfo.isAttackCanPt = false;
        }

        if (this.nextAttackCanMakeEnemyStop > 0) {
            this.nextAttackCanMakeEnemyStop--;
            bulletInfo.canMakeEnemyStop = true;
        } else {
            bulletInfo.canMakeEnemyStop = false;
        }

        if (this.nextAttackChangeThree > 0) {//下一次攻击变成三发子弹
            this.nextAttackChangeThree--;
            //

            let bulletInfo1 = GameManager.instance.copyBulletInfo(bulletInfo);
            bulletInfo1.id = Laya.Utils.getGID();
            // bulletInfo1.gravityScale = bulletInfo1.gravityScale - 0.5;
            bulletInfo1.vely += 3;
            this.createBullet(bulletInfo1);

            // let bulletInfo2 = Utils.copy(bulletInfo);
            let bulletInfo2 = GameManager.instance.copyBulletInfo(bulletInfo);
            bulletInfo2.id = Laya.Utils.getGID();
            // bulletInfo2.gravityScale = bulletInfo2.gravityScale + 0.5;
            bulletInfo2.vely -= 3;
            this.createBullet(bulletInfo2);
        }

        this.createBullet(bulletInfo);
    }

    public createBullet(bulletInfo: BulletInfo): BaseBullet {
        if (this.objInfo_.type == GameConstant.Player && this.objInfo_.classType == BaseInfoType.Cat) {
            let taskEnum = null;
            if (parseInt(this.playerInfo.attack_type) == AttackType.Sky) {//对空
                taskEnum = TaskEnum.TASK_2006;
            } else if (parseInt(this.playerInfo.attack_type) == AttackType.Water) {
                taskEnum = TaskEnum.TASK_2005;
            }
            else if (parseInt(this.playerInfo.attack_type) == AttackType.UnderWater) {
                taskEnum = TaskEnum.TASK_2007;
            }
            if (taskEnum != null) {
                TaskManager.instance.updateTask(taskEnum, 1);
            }
            // TASK_2007
        }
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo)//ObjectManager.getInstance().createBaseBullet(bulletInfo.id +'', bulletInfo);
        baseBullet.x = this.objInfo_.x + bulletInfo.offx;
        baseBullet.y = this.objInfo_.y + bulletInfo.offy;
        baseBullet.view2d_.x = baseBullet.x;
        baseBullet.view2d_.y = baseBullet.y;
        GameManager.instance.bodyLayer.addChild(baseBullet);
        baseBullet.init();
        baseBullet.isActive = true;
        GameManager.instance.box_game.addChild(baseBullet.view2d_);
        GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
        return baseBullet;
    }
    public createBaseBullet(id: string, data): BaseBullet {
        let bullet: any
        switch (parseInt(id)) {

            case 100101:
            case 100106:
                bullet = ObjectPool.instance.createObjectByName(MineBullet, data);
                break;
            case 100107://导弹
                bullet = ObjectPool.instance.createObjectByName(MissileBullet, data) as MissileBullet
                break;

            default:
                bullet = ObjectPool.instance.createObjectByName(BaseBullet, data) as BaseBullet;
                // bullet = ObjectPool.instance.createObjectByName(MissileBullet, data) as MissileBullet
                break
        }
        return bullet;
    }


    public initBulletInfo(bulletInfo: BulletInfo): BulletInfo {
        bulletInfo.id = Laya.Utils.getGID();
        bulletInfo.width = GameConstant.bulletWidth;
        bulletInfo.height = GameConstant.bulletHeight;
        bulletInfo.type = this.objInfo_.type;
        let bidA = (this.playerInfo.blt_id + '').split("|");
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
        bulletInfo.owner = this;
        bulletInfo.bulletId = bulletConfig.icon;

        bulletInfo.bid = parseInt(bidA[0])
        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        // let bArr = bulletConfig.icon.split("|")
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        return bulletInfo;
    }
    // let velx = 15;
    // if (bulletInfo.type == GameConstant.Enemy) {
    //     velx = -15
    // }
    // bulletInfo.velx = velx + Utils.getRandom(-5, 5);
    // let random = Utils.getRandom(0, 100)
    // if (random < 50) {
    //     bulletInfo.vely = -30;
    //     bulletInfo.gravityScale = 4;
    // } else {
    //     bulletInfo.vely = 30;
    //     bulletInfo.gravityScale = -4;
    // }



    public autoAttack() {
        let bulletInfo = new BulletInfo();
        if (this.playerInfo == null) return;
        let bidA = (this.playerInfo.blt_id + '').split("|");
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
        bulletInfo = this.initBulletInfo(bulletInfo);
        bulletInfo.bid = parseInt(bidA[0]);
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        let velX = Number(bulletConfig.velx);
        let velY = Number(bulletConfig.vely);
        this.playerAutoAttackEnemy(bulletInfo, velX, velY);
        // let velY = Math.abs(disy / disx * velX);
        // if (velY == 0) {
        //     velY = parseInt(this.bulletInfo.vely);
        // }
        // if (disy >= 0) {
        //     velY = - velY;
        // }
        /*  let random = Utils.getRandom(0, 100)
         if (random < 50) {
             bulletInfo.vely = -30;
             bulletInfo.gravityScale = 4;
         } else {
             bulletInfo.vely = 30;
             bulletInfo.gravityScale = -4;
         } */



    }
    public relive() {

    }

    /**
     * 玩家的自动攻击
     */
    public playerAutoAttackEnemy(bulletInfo: BulletInfo, velX: number, velY: number) {
        this.initBulletLoa();

        let data = GameManager.instance.getRandomLoca(this.objInfo_.type)
        let ys = data.y;
        let xs = data.x;
        // let vel: Array<number> = Utils.getRunDirection({ x: this.objInfo_.x, y: this.objInfo_.y }, { x: xs, y: ys }, Math.abs(velX));
        // velX = vel[0];
        // velY = vel[1];
        let dxs = xs - this.objInfo_.x;
        let dys = ys - this.objInfo_.y;
        let flag = 1;
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            flag = -1;
        }
        bulletInfo.gravityScale = flag * bulletInfo.gravityScale;

        if (dxs > 0) {
            velX = Math.abs(velX);
        } else {
            velX = -Math.abs(velX);
        }
        let t1 = Math.abs(dxs / velX / 50);
        velY = (dys - 0.5 * bulletInfo.gravityScale * 500 * t1 * t1) / t1 / 50
        // velY = 0 //dxs * 2 / bulletInfo.gravityScale
        // velX = -velX

        // let disX = Math.abs(this.x - xs);
        // let t1 = Math.abs(disX / 50 / velX);
        // if (this.y - ys > 0) {
        //     bulletInfo.gravityScale = -bulletInfo.gravityScale;
        //     // bulletInfo.vely = -1 * bulletInfo.vely;
        //     // bulletInfo.gravityScale = -(/ / t1 * 2);
        // }
        // bulletInfo.vely = bulletInfo.gravityScale * t1 / 2 * 10;


        // if (this.objInfo_.type == GameConstant.Enemy) {
        //     velX = -velX
        // }
        bulletInfo.vely = velY;
        bulletInfo.attack = this.objInfo_.attack;
        bulletInfo.velx = velX;

        this.playerAni(PlayerAniName.kaipao, () => {
            this.shootBullet(bulletInfo);
            this.shootOver();
        })
    }

    /**
     * 下一次攻击变成三发子弹
     */
    public nextAttackChangeThree = 0;
    /**
     * 下一次攻击穿透次数
     */
    public nextAttackCanPt = 0;
    /**
    * 激活后每只猫的下一次攻击可以让敌人发呆一小会儿
    */
    public nextAttackCanMakeEnemyStop = 0;
    /**
     * 游戏结束
     */
    public gameOver() {
        Laya.timer.clearAll(this);
        if (this.ani_player) {
            this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete)
        }
        this.playerAni(PlayerAniName.daiji, () => {

        })
    }
    public initBulletLoa() {
        let point = Laya.Point.create();
        point = this.ani_player.localToGlobal(point, false, Laya.stage)
        this.objInfo_.x = point.x;
        this.objInfo_.y = point.y;
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            this.objInfo_.y = point.y + this.ani_player.height / 2;
            // this.objInfo_.x= point.x+ this.ani_player.width;
        }
    }


    /**
     * 准备攻击
     */
    public preShoot() {
        let ani = PlayerAniName.chu1
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            ani = PlayerAniName.chu2
        }
        this.playerAni(ani, (index) => {
            this.autoAttack();
        })
    }

    /**
     *  攻击结束
     */
    public shootOver() {
        this.playerAni(PlayerAniName.ru, (index) => {
            // if (index == null) return;
            // this.preShoot();
            Laya.timer.once(1500, this, this.preShoot);
        })
    }


    /**
     * 碰撞体
     */
    public rigidBody: Laya.RigidBody;
    /**
     * 矩形碰撞体
     */
    public collider: Laya.BoxCollider;
}

export class PlayerGameInfo extends GameObjInfo {
    x: number;

    y: number;

    public classType = BaseInfoType.Cat;

    attack: number;
    /**
     * 暴击概率
     */
    critPercent: number;
    /**
     * 暴击伤害
     */
    crit: number;
    /**
     * 攻击类型
     */
    attackType: AttackType;
    /**
     * 玩家的数据id  获取猫等的id
     */
    playerId: string;
    /**
     * 当前猫的位置
     */
    loa: CatLocaction;



}
export enum CatLocaction {
    UP_WATER,//水面上
    UNDER_WATER,//水面下
    MAIN//舰长

}


export class PlayerAniName {
    /**
     * 待机
     */
    public static daiji = 'daiji';
    /**
     * 出现1
     */
    public static chu1 = 'chu1';
    /**
     * 开炮
     */
    public static kaipao = 'kaipao';
    /**
    * 出现2
    */
    public static chu2 = 'chu2';
    /**
     * 胜利
     */
    public static shengli1 = 'shengli1';
    /**
     * 往下跳
     */
    public static ru = 'ru';

    ////////////////猪的动作
    /**
     * 攻击
     */
    public static gongji = 'gongji';
    /**
     * 受击
     */
    public static shouji = "shouji";
    /**
     * 坠毁
     */
    public static zhuihui = 'zhuihui';



}
