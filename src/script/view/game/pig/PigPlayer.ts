import { Player, PlayerGameInfo, PlayerAniName } from "../player/Player";
import ConfigManager from "../../../manager/ConfigManager";
import { Physic, GameConstant, AttackType, PigType, GAMESTATUS } from "../base/GameObj";
import GameConst from "../../../common/GameConst";
import { BaseBullet, BulletInfo } from "../bullet/BaseBullet";
import { GameManager, BaseInfoType, GameModel } from "../../../manager/GameManager";
import ObjectPool from "../../../common/ObjectPool";
import { PlayerBlood } from "../blood/PlayerBlood";
import PigScript from "./PigScript";
import { SoundConst } from "../../../manager/SoundManager";
import { ShockUtils } from "../../../tool/ShockUtils";
// import { SoundConst } from "../../../manager/SoundManager";

/**
 * 飞猪 
 * 属于增强器
 * 
 * 
 * 整理下飞猪的移动方式
 */
export class PigPlayer extends Player {
    className_key = 'PigPlayer';
    public view2d_: Laya.Box;

    public objInfo_: PigPlayerGameInfo;

    public playerInfo: {
        "id": string, "name": string, "star": string, "url": string, "blt_id": string, "attack_type": string, "scale": string, "bonenameArr": string, "baseRoA": string, offX: string, offY: string
    }

    public pigScript: PigScript;
    /**
     * 
     */
    public async  onCreate(data: PigPlayerGameInfo) {
        super.onCreate(data)
        this.x = data.x;
        this.y = data.y;
        data.classType = BaseInfoType.Pig;
        this.pigScript = this.addComponent(PigScript)
        this.isDead = false;
        this.playerInfo = ConfigManager.getInstance().pigConfigs[this.objInfo_.playerId];
        if (this.playerInfo.attack_type) {
            this.objInfo_.attackType = parseInt(this.playerInfo.attack_type);
        }
        let boomAnimation = await this.createSkeleton('resource/assets/img/ani/pig/' + this.playerInfo.url + '.sk');
        this.actionIndex = 0;
        this.ani_player = boomAnimation;

        boomAnimation.x = data.width / 2;
        boomAnimation.y = data.height * 0.8;

        this.rigidBody = this.addComponent(Laya.RigidBody) as Laya.RigidBody;
        this.rigidBody.type = Physic.KINEMATIC;
        // this.rigidBody.allowRotation
        // this.rigidBody.type = 'dynamic';
        this.collider = this.addComponent(Laya.BoxCollider) as Laya.BoxCollider;
        this.collider.label = GameConstant.Pig;
        this.collider.isSensor = true;
        boomAnimation.scale(0.1, 0.1);
        let scale = Number(this.playerInfo.scale)
        Laya.Tween.to(boomAnimation, { scaleX: scale, scaleY: scale }, 200);
        // this.collider.radius = this.height / 2;
        this.collider.width = data.width;
        this.collider.height = data.height;
        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
            this.view2d_.autoSize = true;
            this.view2d_.anchorX = 0.5;
            this.view2d_.anchorY = 0.5;
        }

        if (data.type == GameConstant.Player) {
            this.view2d_.scaleX = -1;
        } else {
            this.view2d_.scaleX = 1;

        }
        this.view2d_.addChild(boomAnimation);
        this.view2d_.size(data.width, data.height);
        // this.view2d_.x = data.width / 2;
        // this.view2d_.y = data.height / 2;
        if (this.objInfo_.isShow) return;
        if (data.direAtt) {
            this.startGame();
        } else {
            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startGame);

        }

        this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);

        this.bloodView = new PlayerBlood({ cur: data.blood, total: data.blood });
        this.bloodView.y = data.height + 10;
        this.bloodView.x = (data.width - this.bloodView.width) / 2
        this.view2d_.addChild(this.bloodView);
        //
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
    public update() {


    }

    public startGame() {
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
        this.startAiGame();
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
        if (this.isDead) return;
        // console.log(other);
        let otherOwner = other.owner;
        if (otherOwner instanceof BaseBullet) {//碰到子弹

            if (this.objInfo_.blood <= 0) {
                return;
            }

            let bowner = otherOwner.objInfo_.owner;
            if (bowner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理
                if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {//如果是炸弹类的 需要处理
                    //自爆出现伤害 
                    if (bowner.objInfo_.id != this.objInfo_.id) {
                        this.bulletDestory(otherOwner);
                    }
                }
            } else {
                if (this.objInfo_.type == GameConstant.Enemy) {
                    GameManager.instance.dropGold(otherOwner.x, otherOwner.y);
                }
                this.bulletDestory(otherOwner);

            }
        }
        else if (otherOwner instanceof PigPlayer) {//碰到的是猪

            if (this.objInfo_.blood <= 0) {

                return;
            }


            if (otherOwner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理

            } else {
                if (this.objInfo_.AIScriptID == 4 && this.objInfo_.pigType == PigType.normal) {

                    if (otherOwner.isDead) {

                        return;
                    }
                    this.playDestoryEffect();
                    this.destroy();
                }
            }
        }
    }
    public bulletDestory(otherOwner: BaseBullet) {
        if (!otherOwner.isActive) return;
        this.playerAni(PlayerAniName.shouji, () => {
            this.playerAni(PlayerAniName.daiji, null, true);
        }, false)
        otherOwner.rigidBody.setVelocity({ x: 0, y: 0 });
        otherOwner.rigidBody.gravityScale = 0;
        //计算伤害  
        let deleteBlood = GameManager.instance.calDeleteBlood({ bullet: otherOwner, attackType: this.objInfo_.attackType });

        this.deleteBlood(deleteBlood);
        //消毁子弹
        //播放特效
        otherOwner.destroy();
    }


    public isDead = false;
    /**
     * 更新血量
     * @param deleteBlood 
     */
    public deleteBlood(deleteBlood: number) {
        ShockUtils.geyInstance().start(1);
        this.objInfo_.curBlood -= deleteBlood;
        this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        console.log('curBlood>>>>>>>pig', this.objInfo_.curBlood)
        if (this.objInfo_.curBlood <= 0) {
            this.playDestoryEffect();
            this.destroy();
            this.isDead = true;

        }
    }
    public playDestoryEffect() {
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        let sound_effect = null;
        switch (this.objInfo_.playerId) {
            case 130001 + '':
            case 130002 + '':
            case 130003 + '':
            case 130101 + '':
            case 130102 + '':
                sound_effect = SoundConst.SteamerDeath;

                break
            case 130201 + '':
            case 130202 + '':
            case 130203 + '':
                sound_effect = SoundConst.OctopusDeath;

                break
        }
        if (sound_effect != null) {

            this.playGameEffect(sound_effect);
        }
    }


    /**
    * 移除自己
    */
    public async destroy() {
        delete GameManager.instance.pigObj[this.objInfo_.id];
        this.isDead = true;
        Laya.timer.clearAll(this);
        this.bloodView.visible = false;
        if (this.pigScript) {
            this._destroyComponent(this.pigScript);
            this.pigScript = null;
        }
        this.playerAni(PlayerAniName.zhuihui, () => {
            this.view2d_.removeChildren();
            // GameManager.instance.removeCollider(this.objInfo_.id + '')
            ObjectPool.instance.recoveryObj(this);
            let len = Utils.getObjLength(GameManager.instance.pigObj)
            if (len == 0) {
                EventMgr.getInstance().sendEvent(GameConst.NextWave);
            }
        }, false);
    }

    public pigLevelScene() {
        delete GameManager.instance.pigObj[this.objInfo_.id];
        this.isDead = true;
        Laya.timer.clearAll(this);
        this.bloodView.visible = false;
        if (this.pigScript) {
            this._destroyComponent(this.pigScript);
            this.pigScript = null;
        }
        this.view2d_.removeChildren();
        // GameManager.instance.removeCollider(this.objInfo_.id + '')
    }
    /**
     * 行为配置参数
     */

    public actionIndex = 0;
    public initActionIndex() {
        if (this.actionIndex >= this.objInfo_.configsInfo.length) {
            this.actionIndex = 0;
        }
        this.startAiGame();
    }
    /**
     * 开始ai逻辑
     */
    public startAiGame() {
        if (this.isDead) return;
        let configsInfo = this.objInfo_.configsInfo;
        let info = configsInfo[this.actionIndex];
        switch (info.cmd) {
            case "wait"://等待
                Laya.timer.clear(this, this.autoAttack);
                this.isAutoAttack = false;
                this.playerWait(info)
                break;
            case "move"://移动
                Laya.timer.clear(this, this.autoAttack);
                this.isAutoAttack = false;
                this.playerMove(info);
                break;
            case "attack"://攻击
                this.playerAttack(info);
                break;
            case "attackAndMove"://移动加攻击

                this.playerAtackAndMove(info);
                break;
            case "attackAndMoveAuto"://循环移动加攻击
                this.autoAttackAndMove(info);
                break;
            case "randomLoc"://随机生成地点
                // this.autoAttackAndMove(info);
                // let s = {
                //     "cmd": "randomLoc",
                //     "x1":100,
                //     "x2":200,
                //     "y1":100,
                //     "y2":200,
                // nextMoveTime: 200
                //     "time":30000
                // };
                this.teleportingNewLoc(info);
                break;
            case "destory"://销毁
                Laya.timer.clear(this, this.autoAttack);
                this.isAutoAttack = false;
                this.destroy();
                break;

        }
    }

    /**
     * 瞬间移动到新的位置
     */
    public teleportingNewLoc(info: { cmd: string, time: string, x1: string, x2: string, y1: string, y2: string, nextMoveTime: string }) {
    }
    /**
     * 循环移动加攻击
     */
    public autoAttackAndMove(info) {
        if (!this.isAutoAttack) {

            this.autoAttack();
        }

        this.playerAtackAndMoveAuto(info, 0);
        Laya.timer.once(Number(info.time), this, () => {
            Laya.timer.clear(this, this.playerAtackAndMoveAuto);
            this.actionIndex++;
            this.initActionIndex();
        })
    }
    /**
     * 游戏暂停
     */
    public gamePause() {
        // Laya.timer.clearAll(this);
        // this.rigidBody.setVelocity({ x: 0, y: 0 });
        // Laya.timer.pause();
    }

    /**
     * 游戏恢复
     */
    public gameResume() {
        // this.initActionIndex();

    }
    /**
     * 飞猪移动
     */
    public playerMove(info) {
        // console.log("this.x", this.objInfo_.id, this.x, this.y);
        this.rigidBody.setVelocity({ x: info.velx, y: info.vely });
        Laya.timer.once(parseInt(info.time + ''), this, () => {
            this.rigidBody.setVelocity({ x: 0, y: 0 });
            // console.log("this.x", this.objInfo_.id, this.x, this.y);
            this.actionIndex++;
            this.initActionIndex()
        })
    }
    /**
     * 循环移动的配置
     * @param info 
     * @param index 
     */
    public playerAtackAndMoveAuto(info, index: number) {
        // let newTime = new Date().getTime();//攻击
        // let disTime = newTime - this.startAttackTime;
        // if (disTime > Number(this.objInfo_.attackCD)) {
        //     this.autoAttack();
        // } else {
        //     Laya.timer.once(disTime, this, () => {
        //         this.autoAttack();
        //     })
        // }
        let arr = info.attackAndMove as Array<any>;
        let flag = index % arr.length;
        // [{
        //     "velx": -4,
        //     "vely": 0,
        //     "time": 5000,
        //     "cmd": "move"
        // }, {
        //     "velx": -4,
        //     "vely": 0,
        //     "time": 5000,
        //     "cmd": "move"
        // }
        // ]

        this.rigidBody.setVelocity({ x: arr[flag].velx, y: arr[flag].vely });
        index++;
        Laya.timer.once(parseInt(arr[flag].time + ''), this, this.playerAtackAndMoveAuto, [info, index])

    }
    /**
     * 边移动变攻击
     * @param info 
     */
    public playerAtackAndMove(info) {
        // let newTime = new Date().getTime();
        // let disTime = newTime - this.startAttackTime;
        // // console.log(disTime);
        // if (disTime > Number(this.objInfo_.attackCD)) {
        //     this.autoAttack();
        // } else {
        //     Laya.timer.once(disTime, this, this.autoAttack)
        // }
        if (!this.isAutoAttack) {
            this.autoAttack();
        }
        this.rigidBody.setVelocity({ x: info.velx, y: info.vely });
        Laya.timer.once(parseInt(info.time + ''), this, () => {
            // Laya.timer.clear(this, this.autoAttack);
            this.rigidBody.setVelocity({ x: 0, y: 0 });
            this.actionIndex++;
            this.initActionIndex()
            // this.playerAtackAndMove(info);
        })
    }
    /**
     * 是否是自动攻击
     * 
     */
    public isAutoAttack = false;
    /**
     * 飞猪攻击
     */
    public playerAttack(info) {
        this.rigidBody.setVelocity({ x: 0, y: 0 });

        if (!this.isAutoAttack) {
            this.autoAttack();
        }
        Laya.timer.once(parseInt(info.time + ''), this, () => {
            // Laya.timer.clear(this, this.autoAttack);
            this.actionIndex++;
            this.initActionIndex()
        })
    }


    public autoAttack() {
        if (this.isDead) return;
        this.isAutoAttack = true;
        this.startShootBullet();
        this.startAttackTime = new Date().getTime();
        Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
    }

    public index: number = 0;

    public startShootBullet() {
        let point = Laya.Point.create();
        point = this.ani_player.localToGlobal(point, false, Laya.stage)
        this.objInfo_.x = point.x;
        this.objInfo_.y = point.y;
        let bulletInfo = new BulletInfo();
        let bidA = (this.playerInfo.blt_id + '').split("|");
        let index = this.index % bidA.length
        let bid = bidA[index];
        if (this.playerInfo.offX != null) {
            let offxArr = this.playerInfo.offX.split('|');
            bulletInfo.offx = parseInt(offxArr[index])
            let offyArr = this.playerInfo.offY.split('|');
            bulletInfo.offy = parseInt(offyArr[index])
        }
        this.index++;
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bid];
        bulletInfo = this.initBulletInfo(bulletInfo);
        bulletInfo.bid = parseInt(bid);
        bulletInfo.bulletId = bulletConfig.icon;

        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        let velX = Number(bulletConfig.velx);
        let velY = Number(bulletConfig.vely);
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        bulletInfo.gravityScale = Math.abs(bulletInfo.gravityScale)
        bulletInfo.vely = velY// Utils.random(velY * 0.5, velY * 1.5) * -1//暂时处理

        if (this.objInfo_.type == GameConstant.Enemy) {
            let vel: Array<number> = Utils.getRunDirection({ x: this.x, y: this.y }, { x: GameManager.instance.playerShip.x, y: GameManager.instance.playerShip.y }, Math.abs(velX));
            velX = vel[0];
            velY = vel[1];
            // velX = -velX
            let playerShip = GameManager.instance.playerShip;
            let disX = Math.abs(this.x - GameManager.instance.playerShip.x);
            let t1 = Math.abs(disX / 50 / velX);
            if (this.y - playerShip.y > 0) {
                bulletInfo.gravityScale = -bulletInfo.gravityScale;
                // bulletInfo.vely = -1 * bulletInfo.vely;

                // bulletInfo.gravityScale = -(/ / t1 * 2);
            }
            // bulletInfo.vely = bulletInfo.gravityScale * t1 / 2 * 10;
            bulletInfo.vely = velY;

            bulletInfo.attack = this.objInfo_.attack;
            bulletInfo.velx = velX;
            this.shootBullet(bulletInfo);
        } else {
            this.playerPigAttackEnemy(bulletInfo, velX, velY)
        }

    }

    /**
     * 玩家的猪攻击敌人
     */
    public playerPigAttackEnemy(bulletInfo: BulletInfo, velX: number, velY: number) {
        let data = GameManager.instance.getRandomLoca(this.objInfo_.type)
        let ys = data.y;
        let xs = data.x;
        let vel: Array<number> = Utils.getRunDirection({ x: this.x, y: this.y }, { x: xs, y: ys }, Math.abs(velX));
        velX = vel[0] + 5;
        velY = vel[1];
        if (velY > 10) {
            velY -= 2;
        } else if (velY < -10) {
            velY += 2;
        }
        // velX = -velX

        // let disX = Math.abs(this.x - xs);
        // let t1 = Math.abs(disX / 50 / velX);
        if (this.y - ys > 0) {
            bulletInfo.gravityScale = -bulletInfo.gravityScale;
            // bulletInfo.vely = -1 * bulletInfo.vely;
            // bulletInfo.gravityScale = -(/ / t1 * 2);
        }
        // bulletInfo.vely = bulletInfo.gravityScale * t1 / 2 * 10;
        bulletInfo.vely = velY;
        bulletInfo.attack = this.objInfo_.attack;
        bulletInfo.velx = velX;
        this.shootBullet(bulletInfo);
    }


    public startAttackTime = 0;
    /**
     * 飞猪等待
     */
    public playerWait(info) {
        this.rigidBody.setVelocity({ x: 0, y: 0 });
        Laya.timer.once(parseInt(info.time + ''), this, () => {
            this.actionIndex++;
            this.initActionIndex()
        })
    }



    /**
      * 回收
      */
    public onRecovery() {
        if (this.isRecovery) return;
        // this.pigScript.destroy()
        if (this.pigScript) {
            this._destroyComponent(this.pigScript);
        }
        this.pigScript = null;
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
        this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        this.view2d_.removeSelf();
        this._destroyComponent(this.collider);
        Laya.timer.clearAll(this);
        this.isAutoAttack = false;
        super.onRecovery();
        // if (this.ani_player) {
        //     this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete)
        // }
    }


    public removeSelf() {
        return super.removeSelf();
    }
}
export class PigPlayerGameInfo extends PlayerGameInfo {
    x: number;
    y: number;
    /**
     * 猪的类型
     */
    public pigType: PigType;
    /**
     * 移动配置
     */
    public configsInfo: any;
    /**
     * 总血量
     * */
    public blood: number;

    public curBlood: number;
    /**
     * 攻击间隔
     */
    public attackCD: number;
    /**
     * 是否直接攻击
     * 需要等待外加先操作
     * 
     */
    public direAtt: boolean;


}