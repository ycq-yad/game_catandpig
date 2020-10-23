import { GameObj, GameConstant, GameObjInfo, Physic, GAMESTATUS, AttackType } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";
import ObjectPool from "../../../common/ObjectPool";
import { Player, PlayerGameInfo, CatLocaction, PlayerAniName } from "../player/Player";
import { GameManager, BaseInfoType, GameModel } from "../../../manager/GameManager";
import AnimationManager from "../../../manager/AnimationManager";
import { CatPlayer } from "../player/CatPlayer";
import { GameData } from "../../../common/GameData";
import { BaseCatGameInfo, BaseGameInfo, BaseBoosterGameInfo, BaseShipGameInfo } from "../../vo/BaseGameInfo";
import { HomeScene } from "../../home/HomeScene";
import { BoosterInfo, BoosterPlayer } from "../player/BoosterPlayer";
import GameConst from "../../../common/GameConst";
import ConfigManager from "../../../manager/ConfigManager";
import { ShipShield, ShiledInfo } from "./ShipShield";
import { PigPlayer } from "../pig/PigPlayer";
import { ShipBlood } from "../blood/ShipBlood";
import { SoundConst } from "../../../manager/SoundManager";
import { ShiledBooster } from "../player/ShiledBooster";
import { ShockUtils } from "../../../tool/ShockUtils";
import { PopReliveView } from "../../home/relive/PopReliveView";


export class BaseShipUi extends BaseSceneUISkin {


    className_key = 'BaseShipUi';

    protected createChildren() {
        super.createChildren();


    }

    public adaptationStage() {

    }
    public objInfo_: ShipObjInfo;


    public init(data: ShipObjInfo) {
        this.objInfo_ = data;
    }
    public box_detail: Laya.Box;
    public box_ship: Laya.Box;
    public box_ui: Laya.Box;
    /**
     * 伞
     */
    public box1: Laya.Box;
    /**
     * 血量
     */
    public box_blood: Laya.Box;
    /////////////处理猫等的碰撞体
    public box_col1: Laya.Box;
    public box_col2: Laya.Box;
    public box_col3: Laya.Box;
    public box_col4: Laya.Box;
    public box_col5: Laya.Box;

    public box_player1: Laya.Box;
    public box_player2: Laya.Box;
    public box_player3: Laya.Box;
    public box_player4: Laya.Box;
    public box_player5: Laya.Box;
    public behind: Laya.Box;
    public front: Laya.Box;

    public icon_booster: Laya.Box;
    /**
     * 碰撞体
     */
    public rigidBody: Laya.RigidBody;
    /**
     * 多边形碰撞体
     */
    public collider: Laya.PolygonCollider;

    /**
     * 显示2d对象
     */
    // public view2d_: Laya.Box;
    public icon_ship: Laya.Image;

    public async onAddStage() {
        // super.onAddStage();
        if (this.isCreate) {
            this.pivotX = this.width / 2;
            this.pivotY = this.height / 2;

            if (!this.objInfo_.isShow) {
                this.addEvent();
            }
            this.initView();

        }
    }
    /**
     *创建玩家
     */
    public createPlayer(box_player: Laya.Box, uid: number, index: number) {
        if (box_player == null) return;
        // let localUserShipInfo = GameData.getInstance().localUserShipInfo;
        // let catInfo: BaseCatGameInfo = GameManager.instance.getBaseInfoByUidAndType(uid, BaseInfoType.Cat) as BaseCatGameInfo;
        let prop = GameData.getInstance().prop
        if (this.objInfo_.type == GameConstant.Enemy) {
            prop = GameData.getInstance().otherprop;
        }
        if (uid == -1) {
            (box_player.getChildByName('solt') as Laya.Image).visible = true;
            return;
        }
        let baseGameInfo = GameManager.instance.getBaseInfoByUidNoType(uid, prop);

        if (baseGameInfo == null) {
            (box_player.getChildByName('solt') as Laya.Image).visible = false;
            return;
        }
        // (box_player.getChildByName('solt') as Laya.Image).visible = true;

        if (baseGameInfo.type == BaseInfoType.Cat) {
            this.createCatPlayer(box_player, baseGameInfo as BaseCatGameInfo, index);

        } else if (baseGameInfo.type == BaseInfoType.Booster) {
            this.createBoosterPlayer(box_player, baseGameInfo as BaseBoosterGameInfo, index)
        }
        //处理子弹的初始位置的   暂时使用
        // let point = Laya.Point.create();
        // point = box.localToGlobal(point, false, Laya.stage)
        // playerData.x = point.x;
        // playerData.y = point.y;
        // this.on(Laya.Event.CLICK, this, (evt) => {
        //     console.log("box_player4>>>>>>>>>>>>>>>>", evt)
        // })
    }


    /**
     * 创建增幅器
     */
    public createBoosterPlayer(box_player: Laya.Box, boosterGameInfo: BaseBoosterGameInfo, index: number) {
        let playerData = new BoosterInfo();
        playerData.isShow = this.objInfo_.isShow;
        playerData.type = this.objInfo_.type;
        playerData.id = Laya.Utils.getGID();
        playerData.width = 81.6;
        playerData.height = 153.6;
        // playerData.critPercent = boosterGameInfo.growthCrit * boosterGameInfo.level + boosterGameInfo.initialCrit;
        playerData.star = boosterGameInfo.star;
        let blood = Math.floor(boosterGameInfo.growthHp * boosterGameInfo.level + boosterGameInfo.initialHp);
        playerData.curBlood = blood;
        playerData.blood = blood;
        playerData.boosterId = boosterGameInfo.id;
        playerData.skillCD = boosterGameInfo.skillCD;
        playerData.uid = boosterGameInfo.uid

        let boosterPlayer = ObjectPool.instance.createObjectByName(BoosterPlayer, playerData) as BoosterPlayer;
        boosterPlayer.name = 'player';
        box_player.addChildAt(boosterPlayer, 0);//暂时处理
        boosterPlayer.x = boosterPlayer.width;
        boosterPlayer.y = boosterPlayer.height / 2;
        boosterPlayer.initCol(this['box_col' + index]);
        // GameManager.instance.addCollider(boosterPlayer);
        this.shipPlayerObj[playerData.id] = boosterPlayer;

    }


    /**
     * 创建猫
     * @param box_player 
     * @param uid 
     * @param index 
     */
    public createCatPlayer(box_player: Laya.Box, catInfo: BaseCatGameInfo, index: number) {
        let playerData = new PlayerGameInfo();
        playerData.uid = catInfo.uid
        playerData.isShow = this.objInfo_.isShow;
        playerData.type = this.objInfo_.type;
        playerData.id = Laya.Utils.getGID();
        playerData.width = 100;
        playerData.height = 150;

        playerData.star = catInfo.star;
        let blood = catInfo.growthHp * catInfo.level + catInfo.initialHp;
        let attack = catInfo.initialAtt + catInfo.growthAtt * catInfo.level;
        let critPercent = catInfo.growthCrit * catInfo.level + catInfo.initialCrit;
        if (!catInfo.isNormal) {
            blood *= 1.05;//暂定
        }
        if (catInfo.id + '' == 120901 + '' && this.objInfo_.type == GameConstant.Player) {
            let data = GameManager.instance.getCaptainInfoByPlayerLevel();
            critPercent = data.critPercent;
            blood = data.blood;
            attack = data.attack;
            if (GameData.getInstance().isTestVersion) {
                blood = 10000;
                attack = 10000;
            }
        }

        playerData.critPercent = critPercent
        playerData.curBlood = blood;
        playerData.blood = blood;
        // if (this.objInfo_.type == GameConstant.Player) {
        //     playerData.curBlood = 10000000;
        //     playerData.blood = 10000000;
        // }
        playerData.crit = 1.5;
        playerData.attack = attack;
        playerData.playerId = catInfo.id;

        if (box_player.name.indexOf("under") > -1) {
            playerData.loa = CatLocaction.UNDER_WATER
        } else if (box_player.name.indexOf("up") > -1) {
            playerData.loa = CatLocaction.UP_WATER
        } else {
            playerData.loa = CatLocaction.MAIN

        }
        let player = ObjectPool.instance.createObjectByName(CatPlayer, playerData) as CatPlayer;
        // this.box_player1.addChildAt(player, 0);//暂时处理
        // player.collider = this['box_col' + index].getComponent(Laya.BoxCollider);
        // player.rigidBody = this['box_col' + index].getComponent(Laya.BoxCollider);
        player.name = 'player';
        box_player.addChildAt(player, 0);//暂时处理
        player.x = player.width / 2;
        // player.y = player.height / 2;
        player.initCol(this['box_col' + index]);
        this.shipPlayerObj[playerData.id] = player;
    }

    public shipPlayerObj = {};

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();

        }
    }
    /**
    * 如果是对手 船的碰撞体
    */
    public enemyBoxPosArr = [
        {
            x: 284, y: 27
        },
        {
            x: 440, y: 27
        },
        {
            x: 123, y: 27
        },
        {
            x: 286, y: 235
        },
        {
            x: 123, y: 235
        },

    ];

    public playerWin() {
        let catPlayerObj = this.shipPlayerObj;
        for (var id in catPlayerObj) {
            let player = catPlayerObj[id] as CatPlayer;
            if (player instanceof CatPlayer) {
                player.playerWin();
            }
        }
    }


    public removeAllPlayer() {
        let catPlayerObj = this.shipPlayerObj;
        for (var id in catPlayerObj) {
            let player = catPlayerObj[id];
            player.removeSelf();
            delete catPlayerObj[id];
        }
    }

    /**
     * 初始化数据
     */
    public initView() {
        // this.front.cacheAs = 'bitmap';
        // this.behind.cacheAs = 'bitmap';
        this.box1.mouseThrough = true;
        this.icon_ship.mouseEnabled = false;
        this.box_player1 && (this.box_player1.name = 'main');//舰长
        this.box_player2 && (this.box_player2.name = 'up1');//水面上
        this.box_player3 && (this.box_player3.name = 'up1');//水面上
        this.box_player4 && (this.box_player4.name = 'under1');//水面下
        this.box_player5 && (this.box_player5.name = 'under2');//水面下
        // this.icon_ship.scale(0.3, 0.3);
        // if (this.objInfo_.type == GameConstant.Enemy) return
        this.initPlayer();
        if (this.objInfo_.type == GameConstant.Enemy) {
            this.box_ui.scaleX = -1;
            // this.collider.x = -this.width / 2;
            for (let i = 0; i < 5; i++) {
                this['box_col' + (i + 1)].x = this.enemyBoxPosArr[i].x
                this['box_col' + (i + 1)].y = this.enemyBoxPosArr[i].y
            }
        } else {
            this.box_ui.scaleX = 1;
            // this.collider.x = -this.width / 2;
        }
        // this.collider.y = -this.height / 2
        // this.icon_ship.visible = false;
        // this.behind.visible = false;
        // this.front.visible = false;
        this.initUmbrell();
        this.setShipAni();
        this.shipBlood = new ShipBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        this.shipBlood.x = -200;
        this.box_blood.addChild(this.shipBlood);
        this.box_blood.mouseThrough = true;
        if (this.objInfo_.isShow) {
            this.box_detail.on(Laya.Event.CLICK, this, this.onSelectedClick);
            this.showSlot();
            return;
        }

        // this.shipBlood.scaleX=-1;
    }

    public showSlot() {
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(GameData.getInstance().localUserShipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
        let arr = shiInfo.slotArr;
        for (let i = 0, len = arr.length; i < len; i++) {
            let box_player = this['box_player' + arr[i]];
            (box_player.getChildByName('solt') as Laya.Image).visible = true;
        }

    }

    protected onSelectedClick() {
        console.log('ontestClick>>>>>>>>>>>>>>>ship')
        EventMgr.getInstance().sendEvent(GameConst.ClickShipOrCat, { uid: this.objInfo_.uid, isLongClick: false });
    }
    public shipBlood: ShipBlood;


    public initPlayer() {
        let playerConfig = this.objInfo_.playerConfig;
        if (playerConfig) {
            // for (var obj in playerConfig) {
            //     // box_player1
            //     if (playerConfig[obj] != null && playerConfig[obj] != '') {
            //         this.createPlayer(this[obj], playerConfig[obj]);
            //     }
            // }
            for (let i = 1; i < 6; i++) {
                let boxPlayer = playerConfig['box_player' + i]

                this.createPlayer(this['box_player' + i], boxPlayer, i);
            }
        }

        let boosterId = null;
        if (this.objInfo_.type == GameConstant.Player) {
            boosterId = this.objInfo_.shieldId;

        } else if (this.objInfo_.type == GameConstant.Enemy) {
            boosterId = this.objInfo_.booster;

        }
        if (boosterId == null || boosterId == 0) {
            this.icon_booster.visible = false;
        } else {
            this.icon_booster.visible = true;

            let boosterInfo = new BoosterInfo();
            boosterInfo.id = Laya.Utils.getGID();
            boosterInfo.boosterId = boosterId;
            boosterInfo.skillCD = 7000;
            boosterInfo.type = this.objInfo_.type;
            this.icon_booster.size(81.6, 153.6)
            boosterInfo.width = 81.6;
            boosterInfo.height = 153.6;

            let shiledBooster = ObjectPool.instance.createObjectByName(ShiledBooster, boosterInfo) as ShiledBooster;
            this.icon_booster.addChild(shiledBooster);
            this.shipPlayerObj[boosterInfo.id] = shiledBooster;
            // let boosterInfo = GameManager.instance.getBaseInfoByUidAndType(this.objInfo_.shieldId, BaseInfoType.Booster);
            // this.createBoosterPlayer(this.icon_booster, boosterInfo as BaseBoosterGameInfo, -1);
        }




        // this.createPlayer(this.box_player1);
        // this.createPlayer(this.box_player2);
        // this.createPlayer(this.box_player3);
    }


    /**
     * 初始化伞
     */
    public initUmbrell() {

    }

    /**
     * 设置船的移动
     */
    public setShipAni() {
        Laya.Tween.to(this.box_ship, { rotation: 2 }, 1000, null, Laya.Handler.create(this, () => {
            Laya.Tween.to(this.box_ship, { rotation: 0 }, 1000, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.box_ship, { rotation: -2 }, 1000, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.box_ship, { rotation: 0 }, 1000, null, Laya.Handler.create(this, () => {
                        this.setShipAni();
                    }))
                }))

            }))
        }))
    }
    /**
  * 检测碰撞
  * @param other 
  * @param self 
  * @param contact 
  */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
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
                    // GameManager.instance.dropGold(otherOwner.x, otherOwner.y);
                }
                this.bulletDestory(otherOwner);
            }
        } else if (otherOwner instanceof PigPlayer) {
            if (otherOwner) {
                //自爆出现伤害 
                if (this.objInfo_.type == otherOwner.objInfo_.type) {
                    return;
                }
                if (otherOwner.isDead) return;
                GameManager.instance.createBloodText({ x: otherOwner.x, y: otherOwner.y, showText: Math.floor(otherOwner.objInfo_.attack) + '', isReduction: false });
                this.deleteShipBlood(otherOwner.objInfo_.attack);
                otherOwner.playDestoryEffect()
                otherOwner.destroy();
            }
        }
    }

    public bulletDestory(owner: BaseBullet) {
        if (!owner.isActive) return;
        owner.rigidBody.setVelocity({ x: 0, y: 0 });
        owner.rigidBody.gravityScale = 0;
        //计算伤害  
        let deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner, attackType: this.objInfo_.attackType });
        this.deleteShipBlood(deleteBlood);
        //消毁子弹
        //播放特效
        owner.destroy();
    }
    /**
    * 离开碰撞
    */
    protected onTriggerExit(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {

    }

    public isDead = false;
    /**
     * 更新血量
     * @param deleteBlood 
     */
    public deleteShipBlood(deleteBlood: number) {
        ShockUtils.geyInstance().start(1);
        this.objInfo_.curBlood -= deleteBlood;
        this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        console.log('curBlood', this.objInfo_.id, this.objInfo_.curBlood);
        if (this.objInfo_.curBlood <= 0) {
            this.isDead = true;
            this.gameOver();

        }
    }
    public reliveTimes = 1;
    /**
     * 游戏结束
     */
    public gameOver() {
        let self = this;
        if (this.objInfo_.type == GameConstant.Player) {

            if (!GameData.getInstance().isConVersion && GameManager.instance.gameModel == GameModel.Adventure && this.reliveTimes > 0) {
                ViewManager.getInstance().showView(PopReliveView, {
                    successFun: () => {
                        self.showPlayerRelive({ relive: true });
                    }, failFun: () => {
                        self.showPlayerRelive({ relive: false });

                    }
                })
                // this.relive();
                return;
            }
            GameManager.instance.gameStatus = GAMESTATUS.PLAYERDEAD;
        } else {
            GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
        }
        Laya.timer.clearAll(this);
        EventMgr.getInstance().sendEvent(GameConst.GameOver);
        Laya.Tween.to(this, { y: Laya.stage.height + this.height }, 2000);

        // GameManager.instance.backHome();
    }
    public showPlayerRelive(data: { relive: boolean }) {
        if (data.relive) {
            this.relive();
        } else {
            GameManager.instance.gameStatus = GAMESTATUS.PLAYERDEAD;
            Laya.Tween.to(this, { y: Laya.stage.height + this.height }, 2000);
            Laya.timer.clearAll(this);
            EventMgr.getInstance().sendEvent(GameConst.GameOver);
        }
    }

    /**
     * 复活
     */
    public relive() {
        this.reliveTimes--;
        let shipPlayerObj = this.shipPlayerObj;
        for (var id in shipPlayerObj) {
            let player = shipPlayerObj[id] as CatPlayer;
            player.relive();
            // player.objInfo_.curBlood = player.objInfo_.blood;
            // player.bloodView.updateBlood({ cur: player.objInfo_.curBlood, total: player.objInfo_.blood });
        }
        this.objInfo_.curBlood = this.objInfo_.blood;
        this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        GameManager.instance.gameStatus = GAMESTATUS.PLAYING;
        this.isDead = false;
    }



    public dead() {
        if (this.objInfo_.blood <= 0) {//死亡

        }
    }
    /**
     * 增加数据监听
     */
    public addEvent() {
        this.icon_ship.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.icon_ship.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        EventMgr.getInstance().addEvent(GameConst.GameOver, this, this.onGameOver);
        EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);
        EventMgr.getInstance().addEvent(GameConst.RestartGame, this, this.onRestart);
    }
    /**
     * 重新开始游戏
     */
    protected onRestart() {
        this.removeAllPlayer();
        this.objInfo_.curBlood = this.objInfo_.blood;

        this.initPlayer();
    }
    protected onUserBooster(data: { data: any, type: GameConstant }) {
        if (data.type != this.objInfo_.type) return;
        let boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data] as {
            id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string, value: string
        };
        if (boosterConfig == null) return;
        switch (boosterConfig.type) {
            case "5"://治疗血量最低的单位
                this.restoreCurBlood(boosterConfig)
                break
            case "99"://主舰获得一个可以抵消伤害的护盾
                this.createShipShield(boosterConfig);
                break
        }
    }

    public createShipShield(boosterConfig: {
        id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string, value: string
    }) {
        let gameObjInfo = new ShiledInfo();
        gameObjInfo.id = Laya.Utils.getGID();
        gameObjInfo.type = this.objInfo_.type
        gameObjInfo.width = this.width * 1.2;
        gameObjInfo.height = this.height * 1.2;
        gameObjInfo.lastTime = Number(boosterConfig.value)
        let shipShield = ObjectPool.instance.createObjectByName(ShipShield, gameObjInfo) as ShipShield;
        GameManager.instance.bodyLayer.addChild(shipShield);
        shipShield.x = this.x;
        shipShield.y = this.y - this.height / 2;
        shipShield.view2d_.x = this.x;
        shipShield.view2d_.y = this.y;
        GameManager.instance.box_game.addChild(shipShield.view2d_);
    }

    /**
     * 回复血量
     * @param boosterConfig 
     */
    public restoreCurBlood(boosterConfig: {
        id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string, value: string
    }) {
        let curBloodPer = 1;
        let mid: any;
        let catPlayerObj = this.shipPlayerObj;
        let percent = 1
        for (let id in catPlayerObj) {
            let player = catPlayerObj[id] as Player;
            if (player) {
                percent = player.objInfo_.curBlood / player.objInfo_.blood
                if (percent <= curBloodPer) {
                    curBloodPer = percent;
                    mid = id;
                }
            }
        }
        // percent = this.objInfo_.curBlood / this.objInfo_.blood
        // if (percent < curBloodPer) {//增加船的血量
        //     curBloodPer = percent;
        //     this.updateBlood(this.objInfo_.blood * Number(boosterConfig.value));
        // } else {

        // }
        let player = catPlayerObj[mid] as Player;
        if (player && player.updateBlood) {
            player.updateBlood(player.objInfo_.blood * Number(boosterConfig.value));
        }

    }
    /**
     * 更新血量
     * @param updateBlood 
     */
    public updateBlood(updateBlood: number) {
        this.objInfo_.curBlood += Math.floor(updateBlood);
        if (this.objInfo_.curBlood > this.objInfo_.blood) {
            this.objInfo_.curBlood = this.objInfo_.blood;
        }
        this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
    }



    public onGameOver() {
        EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
        if (GameManager.instance.gameModel == GameModel.Match) {//帆船赛
            if (this.objInfo_.type == GameConstant.Player) {//玩家的船
                if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERWIN) {//玩家胜利
                    this.playerWin();
                    GameManager.instance.playEffect(SoundConst.Victory);
                    Laya.timer.once(2000, this, () => {
                        GameManager.instance.gameOver({ curBlood: this.objInfo_.curBlood, blood: this.objInfo_.blood, isEnemy: false });
                    })
                } else if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {//玩家失败
                    GameManager.instance.playEffect(SoundConst.PiratesDeath);
                    Laya.timer.once(2000, this, () => {
                        GameManager.instance.gameOver({ curBlood: this.objInfo_.curBlood, blood: this.objInfo_.blood, isEnemy: true });
                    })
                }

            }

            else if (this.objInfo_.type == GameConstant.Enemy) {//敌人的船
                if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {//玩家失败  敌人播放动画
                    this.playerWin();


                }
            }
        } else if (GameManager.instance.gameModel == GameModel.Adventure) {//冒险副本
            if (this.objInfo_.type == GameConstant.Player) {//玩家
                if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERWIN) {//玩家胜利
                    this.playerWin();
                    GameManager.instance.playEffect(SoundConst.Victory);
                    Laya.timer.once(2000, this, () => {
                        GameManager.instance.gameOver({ curBlood: this.objInfo_.curBlood, blood: this.objInfo_.blood, isEnemy: false });
                    })
                } else if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {//玩家失败
                    GameManager.instance.playEffect(SoundConst.PiratesDeath);
                    Laya.timer.once(2000, this, () => {
                        GameManager.instance.gameOver({ curBlood: this.objInfo_.curBlood, blood: this.objInfo_.blood, isEnemy: false });
                    })
                }

            }
        }


    }

    public removeEvent() {
        Laya.Tween.clearAll(this.box_ship);
        Laya.timer.clearAll(this);
        EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
        EventMgr.getInstance().removeEvent(GameConst.RestartGame, this, this.onRestart);
        EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
        this.icon_ship.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
        this.icon_ship.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        if (this.objInfo_.isShow) {
            this.box_detail.off(Laya.Event.CLICK, this, this.onSelectedClick);

        }
    }

    public onRemoved() {
        this.removeEvent();
        super.onRemoved();
    }

    public removeSelf() {
        console.log('removeSelf  ship', this.objInfo_);
        this.removeAllPlayer();
        this.icon_ship._destroyAllComponent();
        this.box_col1._destroyAllComponent();
        this.box_col2._destroyAllComponent();
        this.box_col3._destroyAllComponent();
        this.box_col4._destroyAllComponent();
        this.box_col5._destroyAllComponent();
        return super.removeSelf();
    }

}

export class ShipObjInfo extends GameObjInfo {

    public slotArr = [];

    public slot: number;
    /**
     * 是否有护盾
     */
    public hasShield: boolean;
    /**
     * 护盾id
     */
    public shieldId: number;


    public star: number;


    public blood: number;


    public curBlood: number;
    /**
     * 玩家配置
     * 用于每个口子放置的player
     * 如果没有  则不添加
     * box_player1   是舰长的位置  
     * 
     */
    public playerConfig:
        {//uid
            box_player1: any,
            box_player2: any,
            box_player3: any,
            box_player4: any,
            box_player5: any,
        }
    /**
     * 特殊的增幅器
     */
    public booster: number;

    /**
     * 对空类型
     */
    attackType: AttackType;

}