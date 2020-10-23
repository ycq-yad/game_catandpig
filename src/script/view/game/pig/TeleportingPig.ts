import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import PigMove from "./PigMove";
import ConfigManager from "../../../manager/ConfigManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import { Physic, GameConstant } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { MineBullet } from "../bullet/MineBullet";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
/**
 *
1、直接出现在目标点
2、快速连续的向玩家主舰发射5发火球炮弹
3、随机获得1个新的目标点，闪现至该点
4、等待攻击冷却时间
5、发射1枚导弹，等待攻击冷却时间
6、2种攻击方式轮流使用

1、炮弹连续发射时，每个炮弹的发射角度会有较小波动，让那个子弹呈现离散状，单个炮弹沿直线快速飞向玩家船体
2、导弹追踪至玩家船体，与船体碰撞发生爆炸
 */
export class TeleportingPig extends PigPlayer {
    className_key = "TeleportingPig";

    public pigMove: PigMove
    public async onCreate(data: PigPlayerGameInfo) {
        await super.onCreate(data);
        this.ani_player.y = data.height / 2
        this.pigMove = this.addComponent(PigMove);

    }
    public init() {
    }


    public update() {

    }
    /**
  * 检测碰撞
  * @param other 
  * @param self 
  * @param contact 
  */
    public onTriggerEnter(other: Laya.ColliderBase, self: Laya.ColliderBase, contact: any) {
        if (this.isMoveing) return;
        super.onTriggerEnter(other, self, contact);
    }



    /**
     * 瞬间移动到新的位置
     */
    public teleportingNewLoc(info: { cmd: string, time: string, x1: string, x2: string, y1: string, y2: string, nextMoveTime: string }) {
        //发射子弹
        if (info.time != 999999999 + '') {
            Laya.timer.once(parseInt(info.time), this, () => {
                this.actionIndex++;
                this.initActionIndex();
            })
        }
        this.teleportmove(info)
    }
    /**
     * 瞬移次数
     */
    public teleporIndex = 0;
    public isMoveing = false
    /**
     * 瞬间移动
     * @param info 
     */
    public teleportmove(info: { cmd: string, time: string, x1: string, x2: string, y1: string, y2: string, nextMoveTime: string }) {
        let xs = Utils.getRandom(parseInt(info.x1), parseInt(info.x2));
        let ys = Utils.getRandom(parseInt(info.y1), parseInt(info.y2));
        this.teleporIndex++;
        this.view2d_.scale(0.1, 0.1);
        this.isMoveing = true;
        this.x = xs;
        this.y = ys;
        Laya.Tween.to(this.view2d_, { scaleX: 1, scaleY: 1 }, 500, null, Laya.Handler.create(this, () => {
            this.isMoveing = false;
            this.initBulletId();
            Laya.timer.once(parseInt(info.nextMoveTime), this, this.teleportmove, [info]);
        }))
    }

    /**
     * 初始化子弹id
     */
    public initBulletId() {
        if (this.teleporIndex % 2 == 0) {
            this.initBulletLoa();
            let bidA = (this.playerInfo.blt_id + '').split("|");
            for (let i = 0, len = bidA.length; i < len; i++) {
                this.playerAttackByBid(bidA[i], i)
            }
        }
    }
    /**
       * 飞猪攻击
       */
    public playerAttackByBid(bid: string, index: number) {
        // 100109/子弹
        //100107//导弹

        this.createBulletInfo(bid, index);
        if (bid == 100107 + '') return;
        SoundManager.getInstance().playEffect(SoundConst.BotShot);

        for (let i = 1; i < 4; i++) {
            Laya.timer.once(i * 100, this, this.createBulletInfo, [bid, index, 5], false);
        }
    }
    /**
     * 创建基础子弹
     * 
     * @param bid 
     */
    public createBulletInfo(bid: string, index: number, count: number = 1) {
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, icon: string, height: number, width: number } = ConfigManager.getInstance().bulletConfigs[bid];
        let bulletInfo = new BulletInfo();
        if (this.playerInfo.offX != null) {
            let offxArr = this.playerInfo.offX.split('|');
            bulletInfo.offx = parseInt(offxArr[index])
            let offyArr = this.playerInfo.offY.split('|');
            bulletInfo.offy = parseInt(offyArr[index])
        }
        this.initBulletInfo(bulletInfo);
        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        bulletInfo.bid = parseInt(bid)
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        // bulletInfo.velx
        let vel: Array<number> = Utils.getRunDirection({ x: this.x, y: this.y }, { x: GameManager.instance.playerShip.x, y: GameManager.instance.playerShip.y }, Number(bulletConfig.velx));
        bulletInfo.velx = vel[0];
        bulletInfo.vely = vel[1];
        bulletInfo.attack /= count;
        this.createBullet(bulletInfo);
    }
    /**
     * 创建子弹
     */
    public createBullet(bulletInfo: BulletInfo): BaseBullet {
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);// ObjectPool.instance.createObjectByName(MineBullet, bulletInfo) as MineBullet;
        baseBullet.x = this.objInfo_.x + bulletInfo.offx;
        baseBullet.y = this.objInfo_.y + bulletInfo.offy;
        baseBullet.view2d_.x = baseBullet.x;
        baseBullet.view2d_.y = baseBullet.y;
        GameManager.instance.bodyLayer.addChild(baseBullet);
        baseBullet.init();
        GameManager.instance.box_game.addChild(baseBullet.view2d_);
        GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
        return baseBullet;
    }

    public initBulletInfo(bulletInfo: BulletInfo): BulletInfo {
        bulletInfo.id = Laya.Utils.getGID();
        bulletInfo.width = GameConstant.bulletWidth;
        bulletInfo.height = GameConstant.bulletHeight;
        bulletInfo.type = this.objInfo_.type;
        // let bidA = (this.playerInfo.blt_id + '').split("|");
        // let bulletConfig: { blt_id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
        bulletInfo.owner = this;
        // let bArr = bulletConfig.icon.split("|")

        return bulletInfo;
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