import { GameScene } from "./GameScene";
import { GameManager, GameModel } from "../../manager/GameManager";
import GameConst from "../../common/GameConst";
import { PigPlayerGameInfo, PigPlayer } from "./pig/PigPlayer";
import { GameConstant, GAMESTATUS } from "./base/GameObj";
import ObjectPool from "../../common/ObjectPool";
import DungeonManager from "../../manager/DungeonManager";
import { ObjectManager } from "./base/ObjectManager";
import ConfigManager from "../../manager/ConfigManager";
import TaskManager, { TaskEnum } from "../../manager/TaskManager";

/**
 * 游戏的冒险场景
 */
export class GameAdventureScene extends GameScene {
    public className_key = "GameAdventureScene";

    public constructor() {
        super();
        this.skin = "game/GameScene.json";
    }

    public onRestart() {
        this.wave = 1;
        super.onRestart();
    }
    /**
     * 根据游戏模式创建对手
     */
    public createOtherByGameModel() {
        // this.btn_model.visible = true;
        // this.btn_pause.visible = true;
        // this.icon_start.visible = false;
        let data = this.viewData_;
        EventMgr.getInstance().addEvent(GameConst.NextWave, this, this.onNextWave);
        this.getAdventurePlayerJson('');
    }

    public pigGameJson = null;
    public wave: number = 1;
    public async getAdventurePlayerJson(url: string) {
        this.pigGameJson = await GameManager.instance.loadCongigs('resource/assets/map/' + DungeonManager.instance.curLevelData.id + '.json');
        this.createAdventuresPlayer();
    }
    public createAdventuresPlayer() {
        let data = this.pigGameJson[this.wave];
        if (data == null) {
            //游戏结束
            GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
            // GameManager.instance.backHome();
            // GameManager.instance.gameOver();
            TaskManager.instance.updateTask(TaskEnum.TASK_2008, 1);

            EventMgr.getInstance().sendEvent(GameConst.GameOver);
            return;

        }
        for (let i = 0, len = data.length; i < len; i++) {
            this.createPigByJson(data[i])
        }
    }

    protected onNextWave() {
        this.wave++;
        this.createAdventuresPlayer()
    }
    /**
     * 通过json创建猪
     */
    public createPigByJson(data: { id: string, config: Array<{ x: number, y: number, hp: string, attackCD: string, crit: string, damage: string }> }, isEmemy: boolean = true, isCallPig: boolean = false) {
        if (this.nearBg == null) return;
        let config = data.config
        let birth = config.shift() as { x: number, y: number, hp: string, attackCD: string, crit: string, damage: string };
        let playerData = new PigPlayerGameInfo()
        playerData.configsInfo = config;
        playerData.playerId = data.id
        if (isEmemy) {
            playerData.type = GameConstant.Enemy;
        } else {
            playerData.type = GameConstant.Player;
        }
        playerData.curBlood = parseInt(birth.hp)
        playerData.blood = parseInt(birth.hp)
        playerData.attack = parseInt(birth.damage);
        playerData.attackCD = parseInt(birth.attackCD);
        playerData.critPercent = parseInt(birth.crit);
        playerData.crit = 1.5;
        playerData.width = 150;
        playerData.height = 150;
        playerData.x = birth.x
        playerData.y = birth.y;
        if (this.wave > 1) {
            playerData.direAtt = true;

        } else {
            playerData.direAtt = false;
        }
        playerData.id = Laya.Utils.getGID();
        let pigconfig = ConfigManager.getInstance().pigConfigs[data.id];

        // playerData.type=
        // let player = ObjectPool.instance.createObjectByName(PigPlayer, playerData) as PigPlayer;
        let player = ObjectManager.getInstance().createPigPlayer(pigconfig.AIScriptID, playerData);
        // let player = ObjectManager.getInstance().createPigPlayer(6, playerData);
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

    public init() {
        this.wave = 1;
        super.init();
    }

    public removeEvent() {
        EventMgr.getInstance().removeEvent(GameConst.NextWave, this, this.onNextWave);
        super.removeEvent();
    }
    public removeSelf() {
        EventMgr.getInstance().removeEvent(GameConst.NextWave, this, this.onNextWave);
        return super.removeSelf();
    }

}