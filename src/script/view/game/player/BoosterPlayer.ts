import { GameObj, GameObjInfo, Physic, GameConstant, GAMESTATUS } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";
import { GameManager, GameAttackModel, BaseInfoType } from "../../../manager/GameManager";
import { CatLocaction } from "./Player";
import ConfigManager from "../../../manager/ConfigManager";
import GameConst from "../../../common/GameConst";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import { PigPlayer } from "../pig/PigPlayer";
import { SoundConst } from "../../../manager/SoundManager";
import { PlayerBlood } from "../blood/PlayerBlood";
import AnimationManager from "../../../manager/AnimationManager";
import ObjectPool from "../../../common/ObjectPool";
// import SoundManager, { SoundConst } from "../../../manager/SoundManager";
/**
 * 增幅器
 */
export class BoosterPlayer extends GameObj {
    className_key = "BoosterPlayer";

    public objInfo_: BoosterInfo;
    public onCreate(data: any) {
        super.onCreate(data, false);
        data.classType = BaseInfoType.Booster;
        this.isDead = false;
        this.objInfo_ = data;

        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
        }
        this.isUseing = false;
        this.addChild(this.view2d_);
        this.initView();
    }
    public initView() {
        let boosterConfig = ConfigManager.getInstance().boosterConfigs[this.objInfo_.boosterId] as {
            id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string
        };
        this.objInfo_.boosterConfig = boosterConfig;
        let iconArr = boosterConfig.icon.split("|");
        this.visible = true;
        let icon_booster = new Laya.Image();
        icon_booster.size(81.6, 153.6);

        this.view2d_.size(81.6, 153.6);
        this.view2d_.anchorX = 0.5;
        this.view2d_.anchorY = 0.5;
        icon_booster.skin = 'resource/assets/img/game/booster/' + iconArr[0] + '.png';
        this.view2d_.addChild(icon_booster);



        // let icon_mask = new Laya.Image();
        // icon_mask.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
        // icon_mask.size(50, 50);
        // icon_mask.pos(0, 0);
        // icon_mask.name = 'mask';
        // icon_cd.addChild(icon_mask);
        let icon_mask = new Laya.Sprite();
        icon_mask.size(50, 50);
        icon_mask.pos(13, 87);
        var rect = new Laya.Rectangle(0, 0, 50, 50);
        icon_mask.scrollRect = rect;
        icon_booster.addChild(icon_mask);

        let icon_cd = new Laya.Image();
        icon_cd.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
        icon_cd.size(50, 50);
        icon_cd.pos(0, 0);
        icon_cd.name = 'cd';
        this.icon_cd = icon_cd;
        icon_mask.addChild(icon_cd);

        // icon_cd.mask = icon_mask;
        this.bloodView = new PlayerBlood({ cur: this.objInfo_.blood, total: this.objInfo_.blood });
        this.bloodView.y = 0;
        this.view2d_.addChild(this.bloodView);
        if (this.objInfo_.isShow) return;
        if (this.objInfo_.type == GameConstant.Enemy) {
            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.useBooster);
        }
        else {
            if (GameManager.instance.gameAttackModel != GameAttackModel.AUTO && this.view2d_) {
                EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startGame);

            }
            EventMgr.getInstance().addEvent(GameConst.ModelChange, this, this.onModelChange);

        }
    }

    public startGame() {
        this.view2d_.once(Laya.Event.CLICK, this, this.onClick);
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
    }
    public bloodView: PlayerBlood;


    public onModelChange() {
        if (this.isDead) return;
        if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
            this.useBooster();
        } else {
            if (this.view2d_ && !this.view2d_.hasListener(Laya.Event.MOUSE_DOWN)) {
                this.view2d_.once(Laya.Event.CLICK, this, this.onClick);
            }
        }

    }

    public icon_cd: Laya.Image;

    public isUseing = false;
    /**
     * 开始cd
     */
    public startCD() {
        let icon_cd = this.icon_cd;

        // let ic_mask = icon_cd.getChildByName("mask") as Laya.Image;
        icon_cd.x = -50;
        // ic_mask.x = 47;
        // Laya.Tween.to(ic_mask, { x: 0 }, Number(this.objInfo_.skillCD), null);
        Laya.Tween.to(icon_cd, { x: 0 }, Number(this.objInfo_.skillCD), null, Laya.Handler.create(this, () => {//cd充能完成
            if (this.objInfo_.type == GameConstant.Player && GameManager.instance.gameAttackModel != GameAttackModel.AUTO) {
                this.view2d_.once(Laya.Event.CLICK, this, this.onClick);
                this.isUseing = false;
            } else {
                this.isUseing = false;
                this.useBooster();
            }
        }));
    }

    public useBooster() {
        // let icon_cd = this.icon_cd;
        console.log("useBooster>>>>>>>>>>>>>>", this.objInfo_.id, this.isUseing)
        if (this.isUseing) return;
        this.isUseing = true
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        if (this.objInfo_.type == GameConstant.Player) {
            TaskManager.instance.updateTask(TaskEnum.TASK_2004, 1);

        }
        this.startCD();

        this.playGameEffect(SoundConst.BoosterActive);

        EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: this.objInfo_.boosterId, type: this.objInfo_.type });
    }
    protected onClick() {
        this.useBooster()
    }

    public relive() {
        let player = this;
        player.objInfo_.curBlood = player.objInfo_.blood;
        player.bloodView.updateBlood({ cur: player.objInfo_.curBlood, total: player.objInfo_.blood });
        this.isDead = false;
        this.bloodView.visible = true;
        this.isUseing = false;
        this.view2d_.off(Laya.Event.CLICK, this, this.onClick);
        this.useBooster();

    }
    public view2d_: Laya.Box;
    public onRecovery() {
        if (this.isRecovery) return;
        this.view2d_.off(Laya.Event.CLICK, this, this.onClick);
        if (this.box_col) {
            this.box_col.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.box_col.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        }

        if (this.objInfo_.type == GameConstant.Enemy) {
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.useBooster);
        }
        else {
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
            EventMgr.getInstance().removeEvent(GameConst.ModelChange, this, this.onModelChange);
        }
        Laya.Tween.clearAll(this.icon_cd);
        super.onRecovery();
        if (this.objInfo_.isShow && this.parent) {
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick)
            return;
        }

    }
    public box_col: Laya.Box;

    protected onSelectedClick() {
        console.log('ontestClick>>>>>>>>>>>>>>>booster', )
        let oldTime = new Date().getTime()
        this.parent.once(Laya.Event.MOUSE_UP, this, () => {
            let newTime = new Date().getTime();
            let isLongClick = false
            if (newTime - oldTime > 500) {
                isLongClick = true;
            }
            EventMgr.getInstance().sendEvent(GameConst.ClickShipOrCat, { uid: this.objInfo_.uid, isLongClick: isLongClick });

        })

    }
    public initCol(box_col: Laya.Box) {
        this.box_col = box_col;
        if (box_col == null) return;
        if (this.objInfo_.isShow) {
            this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick)
            return;
        }
        this.box_col = box_col;
        this.box_col.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.box_col.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
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
        console.log("boosterplayer>>>>>>>>>>")
        if (this.isDead) return;
        let otherOwner = other.owner;
        if (otherOwner instanceof BaseBullet) {//碰到子弹
            if (this.objInfo_.blood <= 0) {
                return;
            }

            let bowner = otherOwner.objInfo_.owner;
            if (bowner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理
                if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {//如果是炸弹类的 需要处理
                    //自爆出现伤害 
                    this.bulletDestory(otherOwner);
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
                //计算伤害  
                if (otherOwner.isDead) return;
                let deleteBlood = otherOwner.objInfo_.attack;

                this.deleteBlood(deleteBlood);
                //消毁子弹
                //播放特效
                otherOwner.destroy()
            }
        }
    }
    public bulletDestory(owner: BaseBullet) {
        if (!owner.isActive) return;
        owner.rigidBody.setVelocity({ x: 0, y: 0 });
        owner.rigidBody.gravityScale = 0;
        //计算伤害  
        let deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner });
        this.deleteBlood(deleteBlood);
        //消毁子弹
        //播放特效
        owner.destroy();
    }

    public isDead = false;
    /**
     * 更新血量
     * @param deleteBlood 
     */
    public deleteBlood(deleteBlood: number) {
        this.objInfo_.curBlood -= deleteBlood;
        console.log('curBlood>>>>>>>booster', this.objInfo_.curBlood)
        this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        if (this.objInfo_.curBlood <= 0) {
            this.isDead = true;
            this.bloodView.visible = false;
            this.visible = false;
            this.view2d_.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
            // this.destroy();
            Laya.timer.clearAll(this);

        }
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
        txt_blood.fontSize = 60;
        txt_blood.bold = true;
        txt_blood.alpha = 1;
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

        /*      let boomAnimation = await this.createSkeleton('resource/assets/img/ani/bullet/addblood.sk');
             this.view2d_.addChild(boomAnimation);
             boomAnimation.x = boomAnimation.width / 2 / 2;
     
             boomAnimation.scale(0.5, 0.5);
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

    public removeSelf() {
        ObjectPool.instance.recoveryObj(this);
        this.view2d_.removeSelf();
        this.view2d_.removeChildren();
        return super.removeSelf();
    }




}

export class BoosterInfo extends GameObjInfo {
    /**
     * 增幅器数据
     */
    public boosterConfig: any;

    public loa: CatLocaction;

    public star: number;
    /**
     * 冷却时间
     */
    public skillCD: number;
    /**
     * 外形id
     */
    public boosterId: string;

    public blood: number;

    public classType = BaseInfoType.Cat;


    public curBlood: number;

}