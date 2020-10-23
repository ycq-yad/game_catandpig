import { GameScene } from "./GameScene";
import { ShipObjInfo, BaseShipUi } from "./ship/BaseShip";
import { GameConstant } from "./base/GameObj";
import { ObjectManager } from "./base/ObjectManager";
import GameConst from "../../common/GameConst";
import { GameManager, GameModel, BaseInfoType } from "../../manager/GameManager";
import { GameData } from "../../common/GameData";
import { BaseShipGameInfo } from "../vo/BaseGameInfo";
import ConfigManager from "../../manager/ConfigManager";

/**
 * 游戏帆船场景
 */
export class GameMatchScene extends GameScene {
    public className_key = "GameMatchScene";

    public constructor() {
        super();
        this.skin = "game/GameScene.json";
    }
    /**
      * 根据游戏模式创建对手
      */
    public createOtherByGameModel() {
        this.createOtherPlayer();
        //    Laya.timer.once(10000, this, () => {
        //     EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: 149901, type: GameConstant.Player });
        // })
        this.nearBg.icon_enemy.visible = true;
        this.nearBg.icon_player.visible = true;
    }
    /**
     * 创建其他玩家  对战情况
     */
    public createOtherPlayer() {
        if (GameManager.instance.otherShip != null) {
            GameManager.instance.otherShip.removeSelf();
            GameManager.instance.otherShip = null
        }
        /**
       * 玩家船
       */
        let localOtherShipInfo = GameData.getInstance().localOtherShipInfo;
        let shiInfo: BaseShipGameInfo = GameManager.instance.getBaseInfoByUidAndType(localOtherShipInfo.ship.uid, BaseInfoType.Ship, GameData.getInstance().otherprop) as BaseShipGameInfo;
        let eshiInfo = new ShipObjInfo();
        eshiInfo.uid = shiInfo.uid;
        let blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
        eshiInfo.blood = blood;
        eshiInfo.attackType = ConfigManager.getInstance().shipConfigs[shiInfo.id].attack_type; //shiInfo.attack_type;
        eshiInfo.star = shiInfo.star;
        eshiInfo.slot = shiInfo.slot;
        eshiInfo.curBlood = blood;
        eshiInfo.shieldId = shiInfo.shieldId;
        eshiInfo.hasShield = shiInfo.hasShield;
        eshiInfo.width = 300;
        eshiInfo.height = 100;
        eshiInfo.id = Laya.Utils.getGID();
        localOtherShipInfo.player
        eshiInfo.playerConfig = localOtherShipInfo.player;
        eshiInfo.booster = localOtherShipInfo.booster;
        eshiInfo.type = GameConstant.Enemy;

        // let enemyship = ObjectPool.instance.createObjectByName(BaseShip, eshiInfo) as BaseShip;
        let enemyship = ObjectManager.getInstance().createShipByType(shiInfo.id, eshiInfo);

        enemyship.x = Laya.stage.width - eshiInfo.width * 1.2;
        //

        this.nearBg.icon_enemy.skin = 'resource/assets/img/game/fight/anti_' + eshiInfo.attackType + '.png';
        let ys = Laya.stage.height - 500;
        switch (eshiInfo.attackType + '') {
            case 1 + '':
                ys = Laya.stage.height - 680
                break;
            case 2 + '':
                // ys
                break;
            case 3 + '':
                ys = Laya.stage.height - 480
                break;
        }
        enemyship.y = ys;
        GameManager.instance.otherShip = enemyship;
        GameManager.instance.addCollider(enemyship);
        // enemyship.y = Laya.stage.height - 580;
        // enemyship.skewY = -180;
        this.nearBg.box_game.addChild(enemyship);
    }


    public removeEvent() {

        super.removeEvent();
    }
    public removeSelf() {
        // EventMgr.getInstance().removeEvent(GameConst.NextWave, this, this.onNextWave);

        return super.removeSelf();
    }
}