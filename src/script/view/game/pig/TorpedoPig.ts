import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import ConfigManager from "../../../manager/ConfigManager";
import { GameManager, GameModel } from "../../../manager/GameManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import PigMove from "./PigMove";
import { Physic, GameConstant } from "../base/GameObj";
import { PlayerAniName } from "../player/Player";
import { BaseShipUi } from "../ship/BaseShip";

/**
 * 
 * 1、移动至目标点后开始攻击
2、从前侧炮口释放1个鱼雷，等待攻击冷却后，释放下一个鱼雷
3、可以通过配置开启曲线移动，即在自身上下一定距离内来回移动，增加玩家命中的难度

 */
export class TorpedoPig extends PigPlayer {
    className_key = "TorpedoPig";

    public pigMove: PigMove
    public async onCreate(data: PigPlayerGameInfo) {
        super.onCreate(data);
        this.pigMove = this.addComponent(PigMove);

    }


    /**
     * 攻击
     */
    public playerAttack(info) {
        this.autoAttack();
        Laya.timer.once(parseInt(info.time + ''), this, () => {
            Laya.timer.clear(this, this.autoAttack);
            this.actionIndex++;
            this.initActionIndex();
        })
    }
    public update() {

    }

    public async destroy() {


        super.destroy()

    }
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
        // bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        // bulletInfo.gravityScale = Math.abs(bulletInfo.gravityScale)
        if (this.objInfo_.type == GameConstant.Enemy) {
            velX = -velX
            let playerShip = GameManager.instance.playerShip;
            if (this.y - playerShip.y > 0) {
                bulletInfo.vely = -1 * bulletInfo.vely
            }
        }
        bulletInfo.vely = velY;
        bulletInfo.attack = this.objInfo_.attack;
        bulletInfo.velx = velX;
        this.shootBullet(bulletInfo);
    }
    /**
     * 创建子弹
     */
    public createBullet(bulletInfo: BulletInfo): BaseBullet {
        // bulletInfo.velx = 10;
        this.initBulletLoa();
        let data = GameManager.instance.getRandomLoca(this.objInfo_.type)
        let ys = data.y;
        let xs = data.x;
        let disX = Math.abs(this.objInfo_.x - xs);
        let t1 = Math.abs(disX / 50 / bulletInfo.velx);
        let disY = Math.abs(this.objInfo_.y - ys)
        bulletInfo.vely = Math.abs(bulletInfo.vely);
        bulletInfo.gravityScale = -(2 * disY + 2 * bulletInfo.vely * 50 * t1) / (t1 * t1) / 500;//-(bulletInfo.vely / 10 / t1 * 2);
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo) as BaseBullet;//ObjectManager.getInstance().createBaseBullet(bulletInfo.id + '', bulletInfo) as MissileBullet;
        baseBullet.x = this.objInfo_.x; //+ Utils.getRandom(-10, 10);
        baseBullet.y = this.objInfo_.y;
        baseBullet.view2d_.x = baseBullet.x;
        baseBullet.view2d_.y = baseBullet.y;
        GameManager.instance.bodyLayer.addChild(baseBullet);
        baseBullet.init();
        baseBullet.isActive = true;
        GameManager.instance.box_game.addChild(baseBullet.view2d_);
        GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
        return baseBullet;
    }


    public onRecovery() {
        this._destroyComponent(this.pigMove);
        this.pigMove = null;
        super.onRecovery();
    }
}