import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import PigMove from "./PigMove";
import ConfigManager from "../../../manager/ConfigManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import { Physic } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { MineBullet } from "../bullet/MineBullet";
/**
 * 1、飞行至目标点
2、为生命值最低猪施加生命恢复效果
3、等待技能冷却
4、继续选择生命值最低的猪施加生命恢复效果
 */
export class TreatmentPig extends PigPlayer {
    className_key = "TreatmentPig";

    public pigMove: PigMove;
    public async onCreate(data: PigPlayerGameInfo) {
        await super.onCreate(data);
        this.ani_player.y = data.height / 2
        this.pigMove = this.addComponent(PigMove);

    }
    public init() {

    }
    /**
     * 自动攻击  回复血量
     */
    public autoAttack() {
        this.isAutoAttack = true;

        let pigObj = GameManager.instance.pigObj;
        let bloodPercent = Number.MAX_VALUE;
        let inid: any;

        for (var id in pigObj) {
            let pigPlayer = pigObj[id] as PigPlayer;
            let percent = pigPlayer.objInfo_.curBlood / pigPlayer.objInfo_.blood
            if (percent < bloodPercent) {
                bloodPercent = pigPlayer.objInfo_.curBlood;
                inid = id;
            }
        }
        if (inid != null) {
            let pigPlayer = pigObj[inid] as PigPlayer;
            pigPlayer.updateBlood(pigPlayer.objInfo_.blood * 0.3);
        }
        this.startAttackTime = new Date().getTime();
        Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
    }


    public update() {

    }

    public async destroy() {

        super.destroy();
    }




    public onRecovery() {
        this._destroyComponent(this.pigMove);
        this.pigMove = null;
        super.onRecovery();
    }
}