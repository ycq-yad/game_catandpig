import { FarbgScene } from "./bg/FarbgScene";
import { MiddleWaterScene } from "./bg/MiddleWaterScene";
import { GameManager, GameModel, BaseInfoType, GameAttackModel } from "../../manager/GameManager";
import { ShipObjInfo, BaseShipUi } from "./ship/BaseShip";
import ObjectPool from "../../common/ObjectPool";
import { GameConstant, GAMESTATUS, Physic } from "./base/GameObj";
import { NearWaterScene } from "./bg/NearWaterScene";
import { ObjectManager } from "./base/ObjectManager";
import GameConst from "../../common/GameConst";
import { CatPlayer } from "./player/CatPlayer";
import { PlayerGameInfo, Player } from "./player/Player";
import { GameData } from "../../common/GameData";
import { BaseShipGameInfo } from "../vo/BaseGameInfo";
import ConfigManager from "../../manager/ConfigManager";
import { GamePauseScene } from "./GamePauseScene";
import { PigPlayerGameInfo, PigPlayer } from "./pig/PigPlayer";
import SoundManager, { SoundConst } from "../../manager/SoundManager";
import { ShockUtils } from "../../tool/ShockUtils";
import { MiniManeger } from "../../manager/MiniManeger";
import DungeonManager from "../../manager/DungeonManager";
import { DYMoreGameBanner } from "../../wechat/DYMoreGameBanner";

/**
 * 游戏场景
 */
export class GameScene extends BaseSceneUISkin {
    public className_key = "GameAdventureScene";

    public constructor() {
        super();
        this.skin = "game/GameScene.json";
    }
    /**
     * 引导文字
     */
    public icon_guide: Laya.Image;
    /**
     * 引导手
     */
    public icon_guide_hand: Laya.Image;

    public box_game: Laya.Box;
    public box_pop: Laya.Box;
    public box_tip: Laya.Box;
    public btn_pause: Laya.Box;
    public btn_model: Laya.Box;
    public box_gameBanner: Laya.Box;
    public icon_start: Laya.Image;

    public btn_record: Laya.Image;


    /**
     * 连击
     */
    public _lastAttack = 0;

    public childrenCreated() {
        super.childrenCreated();
        this.init();
    }

    public onAddStage() {
        if (this.isCreate) {
            SoundManager.getInstance().playBgMusic(SoundConst.GameBgm);
        }
    }
    public init2Dbox(): void {
        console.log("测试2d场景物理效果");
        // ViewManager.getInstance().showView(SignView)
        //
        // let physics: Laya.Physics = new Laya.Physics();
        // let debug: Laya.PhysicsDebugDraw = new Laya.PhysicsDebugDraw();
        // Laya.PhysicsDebugDraw.enable();
        // Laya.Physics.I.allowSleeping = false;
        Laya.Physics.I.worldRoot = this.bodyLayer;
    }

    public init() {
        if (this.viewData_ == null) return;
        if (this.isCreate) {
            this.initLayer();
            this.init2Dbox();
            this.initView();
            this.addEvent();
        }
    }
    public setData(data: any) {
        this.viewData_ = data;
        this.init();
    }
    public bodyLayer: Laya.Box;
    /**
      * 初始化玩家
      */
    public initLayer() {
        // if (this.layer_3d == null) {
        //     this.layer_3d = new Laya.Box();
        //   this.box_game.addChild(this.layer_3d);
        // }
        if (this.bodyLayer == null) {
            this.bodyLayer = new Laya.Box();
            // this.bodyLayer
            let rigidBody = this.box_game.addComponent(Laya.RigidBody) as Laya.RigidBody;
            rigidBody.type = Physic.KINEMATIC;
            rigidBody.label = GameConstant.Water_wave;
            this.box_game.addChildAt(this.bodyLayer, 0);
        }
        this.box_game.width = Laya.stage.width;
        this.box_game.height = Laya.stage.height;
        // this.box_game.centerX = this.box_game.centerY = 0;
        GameManager.instance.bodyLayer = this.bodyLayer;
    }
    public createBg() {
        let farBg = new FarbgScene();
        this.box_game.addChild(farBg);
        let middleBg = new MiddleWaterScene();
        middleBg.y = Laya.stage.height - middleBg.height;
        console.log(middleBg.height, "tessssssssssssssss");
        if (this.box_game) {
            let boxCollider = this.box_game.addComponent(Laya.BoxCollider) as Laya.BoxCollider;
            boxCollider.label = GameConstant.Water_wave;
            boxCollider.width = Laya.stage.width;
            boxCollider.height = 200;
            boxCollider.x = 0;
            boxCollider.y = middleBg.y - 10;
        }
        this.box_game.addChild(middleBg);

        farBg.y = middleBg.y - farBg.height;

        if (this.nearBg == null) {
            this.nearBg = new NearWaterScene();
            this.box_game.addChild(this.nearBg);
        }
        GameManager.instance.gameStatus = GAMESTATUS.PLAYING

    }

    public nearBg: NearWaterScene;

    public createPlayer() {
        /**
        * 玩家船
        */
        let localUserShipInfo = GameData.getInstance().localUserShipInfo
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship) as BaseShipGameInfo;
        let pshiInfo = new ShipObjInfo();
        pshiInfo.uid = shiInfo.uid;

        let blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
        if (GameData.getInstance().isTestVersion) {
            blood = 10000;
        }
        pshiInfo.blood = blood;

        pshiInfo.attackType = shiInfo.attack_type;
        pshiInfo.star = shiInfo.star;
        pshiInfo.slot = shiInfo.slot;
        pshiInfo.curBlood = blood;
        pshiInfo.hasShield = shiInfo.hasShield;
        pshiInfo.shieldId = shiInfo.shieldId;
        pshiInfo.width = 300;
        pshiInfo.height = 100;
        pshiInfo.id = Laya.Utils.getGID();
        pshiInfo.playerConfig = localUserShipInfo.player;
        pshiInfo.booster = localUserShipInfo.booster;
        pshiInfo.type = GameConstant.Player;
        this.nearBg.icon_player.skin = 'resource/assets/img/game/fight/anti_' + shiInfo.attack_type + '.png';
        // let playership = ObjectPool.instance.createObjectByName(BaseShip, pshiInfo) as BaseShip;
        let playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
        let xs = playership.box_ui.x;
        playership.box_ui.x = -300//pshiInfo.width;
        playership.x = pshiInfo.width * 1.2;
        let ys = Laya.stage.height - 500;
        switch (pshiInfo.attackType) {
            case 1:
                ys = Laya.stage.height - 680
                break;
            case 2:
                // ys
                break;
            case 3:
                ys = Laya.stage.height - 480
                break;
        }

        playership.y = ys;
        this.nearBg.box_game.addChild(playership);
        GameManager.instance.addCollider(playership);
        GameManager.instance.playerShip = playership;
        // playership.icon_ship.x = playership.x + playership.width / 2;
        // playership.icon_ship.y = playership.y + playership.height / 2;
        SoundManager.getInstance().playEffect(SoundConst.PirateShipStart);
        Laya.Tween.to(playership.box_ui, { x: xs }, 1000, Laya.Ease.quartOut, Laya.Handler.create(this, () => {
            if (GameManager.instance.gameModel == GameModel.Adventure) {
                if (DungeonManager.instance.curLevelData.id == 20001) {
                    this.icon_start.visible = false;
                    this.icon_guide.visible = true;
                    this.icon_guide_hand.visible = true;
                    this.icon_guide_hand.size(128, 107);
                    this.playGuide();
                } else {
                    EventMgr.getInstance().sendEvent(GameConst.PlayerTouchScene);
                }

            }

        }));

        // this.bodyLayer.addChild(playership);
        // playership.init();

        // enemyship.icon_ship.x = enemyship.x + enemyship.width / 2;
        // enemyship.icon_ship.y = enemyship.y + enemyship.height / 2;
        // this.bodyLayer.addChild(enemyship);
        // enemyship.init();
    }

    public playGuide() {
        let point = Laya.Point.create();
        let icon = GameManager.instance.playerShip.box_player1//.getChildByName('player') as Player;
        point = icon.localToGlobal(point, false);
        // point.x = point.x
        // point.y = point.y
        this.icon_guide_hand.x = point.x;
        this.icon_guide_hand.y = point.y;
        let xs = point.x - 100;
        let ys = point.y + 100;
        Laya.Tween.to(this.icon_guide_hand, { x: xs, y: ys }, 1000, null, Laya.Handler.create(this.icon_guide_hand, () => {
            Laya.Tween.to(this.icon_guide_hand, { x: point.x, y: point.y }, 1000, null, Laya.Handler.create(this.icon_guide_hand, () => {
                point.recover();
                this.playGuide();
            }));
        }));
    }
    /**
     * 根据游戏模式创建对手
     */
    public createOtherByGameModel() {

    }



    /**
     * 初始化数据
     */
    public initView() {
        ShockUtils.geyInstance()._target = this.box_game;
        ShockUtils.geyInstance().shockLevel = 2
        ShockUtils.geyInstance().shock(ShockUtils.geyInstance().MAP)
        this.icon_guide.visible = false;
        this.icon_guide_hand.visible = false;
        this.box_pop.width = Laya.stage.width
        this.changeModel();
        this.icon_start.visible = true;
        this.btn_model.visible = false;
        this.btn_pause.visible = false;
        GameManager.instance.box_gameScene_game = this.box_game;
        this.initLine();
        this.createBg();
        this.createOtherByGameModel();
        this.createPlayer();
        this.btn_record.visible = false;
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger.instance.stopGameRecord();
            this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png'
            this.btn_record.visible = true;
        }
        // Laya.timer.once(20000, this, () => {
        //     EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: 140401, type: GameConstant.Player });
        // })
        this.showGameBanner()
    }
/**
 * 显示banner
 */
    private async showGameBanner() {
        this.box_gameBanner.removeChildren();
        let dYMoreGameBanner: DYMoreGameBanner = await GameManager.instance.showGameBanner(5, 3);
        if (dYMoreGameBanner) {
            this.box_gameBanner.addChild(dYMoreGameBanner);
            this.box_gameBanner.width = dYMoreGameBanner.width;
        }
    }
    private lineBox: Laya.Box;
    public initLine() {
        this.lineBox = new Laya.Box();
        GameManager.instance.lineBox = this.lineBox
        Laya.stage.addChild(this.lineBox);
    }

    /**
     * 增加数据监听
     */
    public addEvent() {
        this.btn_model.addComponent(CustomScaleComponent);
        this.btn_pause.addComponent(CustomScaleComponent);
        this.btn_record.on(Laya.Event.CLICK, this, this.onRecordInfo);
        this.btn_model.on(Laya.Event.CLICK, this, this.onChangeModel);
        this.btn_pause.on(Laya.Event.CLICK, this, this.onGamePause);
        EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);
        EventMgr.getInstance().addEvent(GameConst.RestartGame, this, this.onRestart);
        EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
    }

    public onRecordInfo() {
        if (MiniManeger.instance.isMakeVideo) {
            MiniManeger.instance.stopGameRecord();
            this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
        } else {
            this.btn_record.skin = 'resource/assets/img/tt/luzhizhong.png';
            MiniManeger.instance.startGameRecord();
            MiniManeger.instance.recordStopFun = () => {
                this.recordTimeEnd();
            };
        }
    }

    public recordTimeEnd() {
        this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
    }
    protected onRestart() {
        // this.removeEvent()
        GameManager.instance.removeAllPig();
        GameManager.instance.removeAllBullet();
        // GameManager.instance.removeAllCollider();
        // Laya.timer.once(1000, this, () => {
        this.icon_start.visible = true;
        if (GameManager.instance.gameModel == GameModel.Adventure) {
            this.createOtherByGameModel();
        }
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger.instance.stopGameRecord();
            this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
            this.btn_record.visible = true;
        }
        // this.createPlayer();
        // });
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
    }

    public onGamePause() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        ViewManager.getInstance().showView(GamePauseScene);
    }
    public onChangeModel() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
            GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
            // (this.btn_model.getChildAt(1) as Laya.Image).skin = 'resource/assets/img/game/game14.png';
            (this.btn_model.getChildByName('icon_auto') as Laya.Image).visible = false;
            (this.btn_model.getChildByName('icon_hand') as Laya.Image).visible = true;
            EventMgr.getInstance().sendEvent(GameConst.ModelChange);

            //
        } else {
            Laya.physicsTimer.pause();
            Laya.timer.pause();
            MiniManeger.instance.playViderAd({
                successFun: () => {
                    this.onResume();
                    GameManager.instance.gameAttackModel = GameAttackModel.AUTO;
                    // (this.btn_model.getChildAt(1) as Laya.Image).skin = 'resource/assets/img/game/game16.png';
                    (this.btn_model.getChildByName('icon_auto') as Laya.Image).visible = true;
                    (this.btn_model.getChildByName('icon_hand') as Laya.Image).visible = false;
                    EventMgr.getInstance().sendEvent(GameConst.ModelChange);
                }, failFun: () => {
                    this.onResume();
                }, errorFun: () => {
                    this.onResume();
                    platform.showModal({
                        title: '系统提示', content: "加载广告失败,是否通过分享获得此功能？", showCancel: false, cancelText: "", confirmText: "确定",
                        success: () => {
                            MiniManeger.instance.shareAppMessage({
                                sucFun: () => {
                                    this.onResume();
                                    GameManager.instance.gameAttackModel = GameAttackModel.AUTO;
                                    // (this.btn_model.getChildAt(1) as Laya.Image).skin = 'resource/assets/img/game/game16.png';
                                    (this.btn_model.getChildByName('icon_auto') as Laya.Image).visible = true;
                                    (this.btn_model.getChildByName('icon_hand') as Laya.Image).visible = false;
                                    EventMgr.getInstance().sendEvent(GameConst.ModelChange);
                                }
                            })
                        }
                    })
                }
            })
        }

    }

    public onResume() {
        Laya.timer.resume();
        Laya.physicsTimer.resume();
    }

    public changeModel() {
        if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
            //
            (this.btn_model.getChildByName('icon_auto') as Laya.Image).visible = true;
            (this.btn_model.getChildByName('icon_hand') as Laya.Image).visible = false;

        } else {
            (this.btn_model.getChildByName('icon_auto') as Laya.Image).visible = false;
            (this.btn_model.getChildByName('icon_hand') as Laya.Image).visible = true;
        }
    }
    protected onPlayerTouchScene() {
        this.icon_start.visible = false;
        this.icon_guide_hand.visible = false;
        this.icon_guide.visible = false;
        this.btn_model.visible = true;
        this.btn_pause.visible = true;
        this.nearBg.icon_enemy.visible = this.nearBg.icon_player.visible = false;
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        if (DungeonManager.instance.curLevelData.id == 20001) {
            GameManager.instance.playerGuide++;
            this.btn_model.visible = false;
            this.btn_pause.visible = false;
        }
        Laya.Tween.clearAll(this.icon_guide_hand);
    }
    public removeEvent() {
        this.btn_record.off(Laya.Event.CLICK, this, this.onRecordInfo);
        this.btn_model.off(Laya.Event.CLICK, this, this.onChangeModel);
        this.btn_pause.off(Laya.Event.CLICK, this, this.onGamePause);
        EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        EventMgr.getInstance().removeEvent(GameConst.RestartGame, this, this.onRestart);


    }
    protected async onUserBooster(data: { data: any, type: GameConstant }) {

        let boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data] as {
            id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string, value: string
        };
        if (boosterConfig == null) return;
        let url = 'resource/assets/configs/booster/' + boosterConfig.value + '.json'
        if (data.type == GameConstant.Enemy) {
            url = 'resource/assets/configs/booster/1' + boosterConfig.value + '.json'
        };

        switch (boosterConfig.type) {
            case "3"://召唤1只猪猪反抗军为你作战
                break
            case "4"://召唤1只高级猪猪反抗军为你作战
                break
            default:
                return;
        }
        let json = await GameManager.instance.loadCongigs(url);
        if (json == null) return;
        this.createPigByJson(json, (data.type == GameConstant.Enemy), true)
    }

    /**
   * 通过json创建猪
   */
    public createPigByJson(data: { id: string, config: Array<{ x: number, y: number, hp: string, attackCD: string, crit: string, damage: string }> }, isEmemy: boolean = true, isCallPig: boolean) {
        let config = data.config
        let birth = config.shift() as { x: number, y: number, hp: string, attackCD: string, crit: string, damage: string };
        let playerData = new PigPlayerGameInfo()
        playerData.configsInfo = config;
        playerData.playerId = data.id

        playerData.curBlood = parseInt(birth.hp)
        playerData.blood = parseInt(birth.hp)
        playerData.attack = parseInt(birth.damage);
        playerData.attackCD = parseInt(birth.attackCD);
        playerData.critPercent = parseInt(birth.crit);
        playerData.crit = 1.5;
        playerData.width = 200;
        playerData.height = 200;
        playerData.direAtt = true;
        playerData.x = birth.x
        playerData.y = birth.y;
        playerData.id = Laya.Utils.getGID();
        if (isEmemy) {
            playerData.type = GameConstant.Enemy;

        } else {
            playerData.type = GameConstant.Player;
        }
        // playerData.type=
        let pigconfig = ConfigManager.getInstance().pigConfigs[data.id];

        // playerData.type=        
        playerData.AIScriptID = pigconfig.AIScriptID;

        // let player = ObjectPool.instance.createObjectByName(PigPlayer, playerData) as PigPlayer;
        let player = ObjectManager.getInstance().createPigPlayer(pigconfig.AIScriptID, playerData)
        player.x = birth.x;
        player.y = birth.y;
        player.view2d_.x = player.x;
        player.view2d_.y = player.y;
        if (isEmemy) {
            playerData.type = GameConstant.Enemy;
            GameManager.instance.pigObj[playerData.id] = player;

        } else {
            GameManager.instance.addCollider(player);
            playerData.type = GameConstant.Player;
        }
        if (isCallPig) {
            playerData.direAtt = isCallPig;
        }

        // enemyship.skewY = -180;
        this.bodyLayer.addChild(player);
        this.nearBg.box_game.addChild(player.view2d_);
        player.init();
    }
    public onRemoved() {
        super.onRemoved();
    }

    public removeSelf() {
        // this.bodyLayer.removeChildren();
        GameManager.instance.removeAllGoldView();
        GameManager.instance.removeAllPig();
        GameManager.instance.removeAllCollider();
        this.nearBg.removeSelf();
        this.nearBg = null;
        this.bodyLayer.removeChildren();
        this.bodyLayer = null;
        this.box_game._destroyAllComponent();
        this.box_game.removeChildren();
        return super.removeSelf();
    }


}


