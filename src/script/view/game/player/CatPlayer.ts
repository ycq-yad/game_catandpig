import { Player, PlayerGameInfo, PlayerAniName, CatLocaction } from "./Player";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import { GameConstant, Physic, AttackType } from "../base/GameObj";
import ConfigManager from "../../../manager/ConfigManager";
import { GameManager, GameAttackModel, BaseInfoType, GameModel } from "../../../manager/GameManager";
import GameConst from "../../../common/GameConst";
import { PlayerBlood } from "../blood/PlayerBlood";
import { PigPlayer } from "../pig/PigPlayer";
import { MiniManeger } from "../../../manager/MiniManeger";
import { ShockUtils } from "../../../tool/ShockUtils";

export class CatPlayer extends Player {

    public async onCreate(data: PlayerGameInfo) {
        await super.onCreate(data);
        this.playerInfo = ConfigManager.getInstance().catConfigs[data.playerId];
        this.objInfo_.attackType = parseInt(this.playerInfo.attack_type);
        this.isDead = false;
        data.classType = BaseInfoType.Cat;

        let boomAnimation = await this.createSkeleton(GameManager.instance.catUrl + this.playerInfo.url + '.sk');
        this.ani_player = boomAnimation;
        boomAnimation.x = data.width / 2;
        boomAnimation.y = data.height;
        boomAnimation.scale(0.62, 0.62);
        this.view2d_.autoSize = true;
        this.view2d_.addChild(boomAnimation);
        this.initBulletLoa();
        // boomAnimation.getAniNameByIndex
        this.view2d_.size(data.width, data.height);
        this.view2d_.x = data.width / 2;
        this.view2d_.y = data.height / 2;
        this.playerAni(PlayerAniName.chu1, () => {
            this.playerAni(PlayerAniName.daiji, () => {
                this.turnRoation(0);
            }, false);
        }, false)
        this.addChild(this.view2d_);
        this.ani_player.player.stop();
        // this.ani_player.init(this.ani_player.templet, 1)
        // this.ani_player.play(PlayerAniName.daiji, false);
        // this.ani_player.player.stop();
        this.bloodView = new PlayerBlood({ cur: data.blood, total: data.blood });
        this.bloodView.y = 30;
        this.view2d_.addChild(this.bloodView)
        if (this.objInfo_.isShow) return;
        EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);

        if (this.objInfo_.type == GameConstant.Player) {
            EventMgr.getInstance().addEvent(GameConst.ModelChange, this, this.onModelChange);
        }
        EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startAiGame);
        this.showAttackIcon();
        // Laya.timer.frameLoop(1, this, () => {

        // })
        // var bone: Laya.Bone = this.ani_player.templet.mRootBone.findBone("shou1-k");
        // var bone = this.ani_player.getSlotByName("qiang-k");


        // Laya.timer.loop(1000, this, () => {
        //     temp += 10;
        //     // bone.rotation=temp;
        //     // bone.resultRotation=temp;
        //     bone.transform.skX=temp;
        //     // let matrix = bone.transform.getMatrix();
        //     // matrix.rotate(10);
        //     // bone.update(matrix);
        //     console.log(JSON.stringify(bone.rotation));
        // });
        // matrix.transform.skY = -90;
        // bone.transform.skX = 90;
        // var bone: Laya.Bone = this.ani_player.templet.mRootBone.findBone("shou1-k");
        // bone.transform.skX = 105;
        // bone.resultTransform.skX = 105;
        // bone.transform.skX = roa;
        // bone.resultTransform.skX = roa;
        // console.log(bone.transform.skX,bone.resultTransform.skX);
        // (this.ani_player as any)._createGraphics()
        // bone.resultTransform.skX = 90;

    }

    public showAttackIcon() {
        let icon_attack = new Laya.Image();
        let icon_str = 'resource/assets/img/propPublic/propPublic_ui_aim_red.png';
        switch (this.objInfo_.attackType) {
            case AttackType.All:
                break;
            case AttackType.Sky:
                icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_26.png';
                break;
            case AttackType.Water:
                icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_27.png';
                break;
            case AttackType.UnderWater:
                icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_28.png';

                break;
        }
        icon_attack.scale(0.5, 0.5);
        icon_attack.skin = icon_str;
        this.icon_attack = icon_attack;
        this.view2d_.addChild(icon_attack);
        if (GameManager.instance.gameModel == GameModel.Adventure) {
            icon_attack.visible = false;
        }
        icon_attack.centerX = 0;
    }

    public icon_attack: Laya.Image
    public bloodView: PlayerBlood;

    public onModelChange() {
        if (this.objInfo_.type == GameConstant.Enemy) return;
        if (this.isDead) return;
        if (this.localAniName == PlayerAniName.daiji && GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
            this.preShoot();
        }
        // if (this.box_col && !this.box_col.hasListener(Laya.Event.MOUSE_DOWN) && GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
        //     this.box_col.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        // }
    }

    public box_col: Laya.Box;
    protected onSelectedClick() {
        console.log('ontestClick>>>>>>>>>>>>>>>cat');
        if (this.objInfo_.playerId + '' == "120901") {
            return;
        }
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


        // box_col._destroyAllComponent();
        // let rigid = box_col.addComponent(Laya.RigidBody) as Laya.RigidBody;
        // rigid.type = Physic.KINEMATIC;
        // let cox = box_col.addComponent(Laya.BoxCollider) as Laya.BoxCollider;
        // cox.width = box_col.width;
        // cox.height = box_col.height;
        this.box_col.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.box_col.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        if (this.objInfo_.type == GameConstant.Enemy) return;
        this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
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
        console.log("catplayer>>>>>>>>>>")
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
                this.bulletDestory(otherOwner)
            }
        }
        else if (otherOwner instanceof PigPlayer) {//碰到的是猪

            if (this.objInfo_.blood <= 0) {
                return;
            }


            if (otherOwner.objInfo_.type == this.objInfo_.type) {//如果是相同类型   不处理

            } else {

                if (otherOwner.isDead) return;
                //计算伤害  
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

        // this.playerAni(PlayerAniName.shouji, () => {
        //     this.playerAni(PlayerAniName.daiji, null, true);

        // }, false)
        if (this.localAniName == PlayerAniName.ru) return;
        owner.rigidBody.setVelocity({ x: 0, y: 0 });
        owner.rigidBody.gravityScale = 0;
        //计算伤害  
        let deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner, attackType: this.objInfo_.attackType });
        this.deleteBlood(deleteBlood);
        //消毁子弹
        //播放特效
        owner.destroy();
    }

    public relive() {
        let player = this;
        player.objInfo_.curBlood = player.objInfo_.blood;
        player.bloodView.updateBlood({ cur: player.objInfo_.curBlood, total: player.objInfo_.blood });
        this.isDead = false;
        this.bloodView.visible = true;
        this.preShoot();
    }
    /**
     * 更新血量
     * @param deleteBlood 
     */
    public deleteBlood(deleteBlood: number) {
        ShockUtils.geyInstance().start(1);
        this.objInfo_.curBlood -= deleteBlood;
        this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        console.log('curBlood>>>>>>>cat', this.objInfo_.curBlood);

        if (this.objInfo_.curBlood <= 0) {
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            if (this.isMoveing) {
                GameManager.instance.lineBox.removeChildren();
            }
            this.isDead = true;
            this.bloodView.visible = false;
            // this.destroy();
            Laya.timer.clearAll(this);
            this.playerAni(PlayerAniName.ru, () => {

            }, false)
        }
    }

    public startAiGame() {
        this.icon_attack.visible = false;
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startAiGame);

        if (this.objInfo_.type == GameConstant.Enemy) {
            this.autoAttack();
        }
    }

    private temp: number = 10;

    private startPoint = { x: 0, y: 0 }

    /**
     * 
     */
    protected onMouseDown(evt: Laya.Event) {
        if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) return;
        MiniManeger.instance.vibrateShort({});
        this.isMoveing = true;
        this.startPoint.x = evt.stageX;
        this.startPoint.y = evt.stageY;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        // GameManager.instance.lineBox.removeChildren()
        this.initBulletLoa();
        // var bone: any = this.ani_player.templet.mRootBone.findBone("shou1-k");
        // bone.transform.skX = this.temp;
        // bone.resultTransform.skX = this.temp;
        // console.log(JSON.stringify(bone.transform));
        // this.temp += 10;
        //
        // (this.ani_player.player as any)._update(1);
        // bone.update();
        // (this.ani_player as any)._createGraphics();
    }


    protected onMouseMove(evt: Laya.Event) {
        // let disx = (evt.stageX - this.startPoint.x);
        // let disy = (evt.stageY - this.startPoint.y);
        let roa = Utils.getAngleTwoPoint({ x: evt.stageX, y: evt.stageY }, { x: this.startPoint.x, y: this.startPoint.y })
        // this.rotation = roa;
        if (roa > 60 && roa < 300) {
            return;
        }
        this.endPoint.x = evt.stageX;
        this.endPoint.y = evt.stageY;
        this.turnRoation(roa);
        // // bone.setRotation(90);
        // console.log(roa);
        // bone.transform.skX = roa;
        // bone.resultTransform.skX = roa;
        // bone.update();
        // console.log(bone);

        let data = this.calcuteVel();
        GameManager.instance.getRunLineByVel({ x: data.velX, y: data.velY, gravityScale: data.gravityScale }, { x: this.objInfo_.x, y: this.objInfo_.y }, 8);
    }
    public initBulletLoa() {
        let point = Laya.Point.create();
        point = this.ani_player.localToGlobal(point, false, Laya.stage)
        this.objInfo_.x = point.x
        this.objInfo_.y = point.y
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            this.objInfo_.y = point.y
            // this.objInfo_.x= point.x+ this.ani_player.width;
        }
    }

    private endPoint = { x: 0, y: 0 }


    public isMoveing = false;
    protected onMouseUp(evt: Laya.Event) {
        // var bone: Laya.Bone = this.ani_player.templet.mRootBone.findBone("qiang-k");
        // // bone.setRotation(90);
        // // bone.transform.skX = 0;
        // console.log(bone)

        // matrix.transform.skX = -90;
        // matrix.transform.skY = -90;
        this.isMoveing = false;
        GameManager.instance.lineBox.removeChildren();
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
        // this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);

        this.playerAttack();
        Laya.timer.once(100, this, () => {
            this.turnRoation(0);
        });
        Laya.timer.once(300, this, this.shootOver);
        this.startPoint.x = 0;
        this.startPoint.y = 0;
        EventMgr.getInstance().sendEvent(GameConst.PlayerTouchScene);
    }

    public calcuteVel(): { velY: number, velX: number, gravityScale: number, bulletConfig: any } {

        let disx = (this.endPoint.x - this.startPoint.x);
        let disy = (this.endPoint.y - this.startPoint.y);
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            disx = (this.endPoint.x - this.startPoint.x);
            disy = (this.startPoint.y - this.endPoint.y);
        }
        let bidA = (this.playerInfo.blt_id + '').split("|");
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];

        let velX = Number(bulletConfig.velx);
        let vel: Array<number> = Utils.getRunDirection({ x: this.endPoint.x, y: this.endPoint.y }, { x: this.startPoint.x, y: this.startPoint.y }, Math.abs(velX));
        // if (disx > 0) {
        //     velX = - velX;
        // }
        // if (disx == 0) {
        //     disx = 1
        // }
        // let velY = Math.abs(disy / disx * velX);
        // if (velY == 0) {
        //     velY = Number(bulletConfig.vely);
        // }
        // if (disy < 0) {
        //     velY = -velY
        // }
        velX = vel[0];
        let velY = vel[1];

        let flag = 1;
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            flag = -1
        }
        velY = velY;
        let gravityScale = flag * Number(bulletConfig.gravityScale);
        return { velY: velY, velX: velX, gravityScale: gravityScale, bulletConfig: bulletConfig }
    }

    public playerAttack() {
        let bulletInfo = new BulletInfo();
        let data = this.calcuteVel()
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = data.bulletConfig;
        bulletInfo = this.initBulletInfo(bulletInfo);
        bulletInfo.bid = parseInt(bulletConfig.id);
        bulletInfo.bulletId = bulletConfig.icon;

        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;

        // if
        bulletInfo.velx = data.velX;

        let flag = 1;
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            flag = -1
        }
        bulletInfo.vely = data.velY;
        bulletInfo.gravityScale = data.gravityScale;
        // var bone2: Laya.Bone = this.ani_player.templet.mRootBone.findBone(this.playerInfo.bonename + "armsb");
        // // var bone3: Laya.BoneSlot = this.ani_player.getSlotByName("catbarmsb");
        // // console.log("MOUSE_DOWN", bone3);
        // let arr = [1, 1]
        // bone2.localToWorld(arr);//实际需要修改

        // this.initBulletLoa();

        // console.log("MOUSE_DOWN", this.objInfo_.x, this.objInfo_.y, point, arr, bone2.resultMatrix)
        // this.objInfo_.x += arr[0]
        // this.objInfo_.y += arr[1]
        // console.log(bone.transform.skX, bone.resultTransform.skX);


        // this.playerAni(PlayerAniName.kaipao, () => {

        // })

        this.shootBullet(bulletInfo);
    }
    public turnRoation(roa) {
        /*   var bone: Laya.Bone = this.ani_player.templet.mRootBone.findBone(this.playerInfo.bonename + "leftarm");
          if (bone) {
              bone.transform.skX = roa;
              bone.resultTransform.skX = roa;
          }
     
          // var bone1: Laya.Bone = this.ani_player.templet.mRootBone.findBone("catbrightarm");
          // bone1.transform.skX = roa;
          // bone1.resultTransform.skX = roa;
          var bone2: Laya.Bone = this.ani_player.templet.mRootBone.findBone(this.playerInfo.bonename + "armsb");
          if (bone2) {
              bone2.transform.skX = roa;
              bone2.resultTransform.skX = roa;
          }
            */
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            roa = 360 - roa
        }

        let bonenameArr = this.playerInfo.bonenameArr;
        let baseRoA = this.playerInfo.baseRoA;
        let arr = bonenameArr.split('|');
        let arrRao = baseRoA.split('|');
        for (let i = 0, len = arr.length; i < len; i++) {
            var bone: Laya.Bone = this.ani_player.templet.mRootBone.findBone(arr[i]);
            if (bone == null) continue;
            bone.transform.skX = roa + parseInt(arrRao[i]);
            bone.resultTransform.skX = roa + parseInt(arrRao[i]);
        }
        (this.ani_player as any)._createGraphics();

        if (arr.length > 0) {//暂时处理
            let arr1 = [0, 0];
            let boneName = arr[0];
            var boneSlot: Laya.BoneSlot = this.ani_player.getSlotByName(boneName)//this.ani_player.templet.mRootBone.get(boneName)
            if (boneSlot == null) return
            let width = boneSlot.currDisplayData.width * 0.62
            let radian = Utils.getRadian(roa)
            let ys = width * Math.sin(radian);
            let xs = width * Math.cos(radian);
            arr1[0] = xs;
            arr1[1] = ys;

            // arr1 = [1, 1]
            // bone.localToWorld(arr1)
            let point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage)
            this.objInfo_.x = point.x + arr1[0]
            this.objInfo_.y = point.y + arr1[1]
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                this.objInfo_.y = point.y + arr1[1]
                // this.objInfo_.x= point.x+ this.ani_player.width;
            }
        }

    }


    public onRecovery() {
        Laya.timer.clearAll(this);
        if (this.box_col) {
            this.box_col.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.box_col.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        }
        if (this.ani_player) {
            this.ani_player.stop();
            this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
        }
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startAiGame);
        EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
        if (this.objInfo_.type == GameConstant.Player) {
            EventMgr.getInstance().removeEvent(GameConst.ModelChange, this, this.onModelChange);
        }

        super.onRecovery();
    }

    public removeSelf() {
        if (this.parent) {
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);

        }
        if (this.objInfo_.isShow && this.parent) {
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick)

        }
        return super.removeSelf();
    }
    /**
     * 游戏暂停
     */
    public gamePause() {
        this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.timer.clearAll(this);
    }
    /**
     * 游戏恢复
     */
    public gameResume() {
        // if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {

        // } else {

        // }
        this.preShoot();
    }

    /**
     * 准备攻击
     */
    public preShoot() {
        let ani = PlayerAniName.chu1
        if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
            ani = PlayerAniName.chu2
        }
        if (this.isDead) return;
        this.playerAni(ani, (index) => {
            if (this.objInfo_.type == GameConstant.Enemy || GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                this.autoAttack();
            } else {
                this.ani_player.player.playbackRate = 5;
                this.playerAni(PlayerAniName.daiji, () => {
                    this.ani_player.player.playbackRate = 1;
                    if (this.parent && !this.parent.hasListener(Laya.Event.MOUSE_DOWN)) {
                        this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                    }

                })
            }

        })
    }

    /**
     *  攻击结束
     */
    public shootOver() {
        this.ani_player.player.playbackRate = 1.5;
        this.playerAni(PlayerAniName.ru, (index) => {
            this.ani_player.player.playbackRate = 1;
            // this.preShoot();
            let times = 1000;
            Laya.timer.once(times, this, this.preShoot);
        })
    }

    protected onUserBooster(data: { data: any, type: GameConstant }) {
        if (data.type != this.objInfo_.type) return;

        let boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data] as {
            id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string
        };
        if (boosterConfig == null) return
        switch (boosterConfig.type) {
            case "1":
                this.nextAttackChangeThree = 1;
                break
            case "2":
                this.nextAttackCanPt = 1;
                break
            case "3":
                break
            case "4":
                break
            case "5":
                break
            case "6":
                this.nextAttackCanMakeEnemyStop = 1;
                break
            case "99":
                break
        }
    }


}

