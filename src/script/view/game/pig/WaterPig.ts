import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import ConfigManager from "../../../manager/ConfigManager";
import { GameManager } from "../../../manager/GameManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import PigMove from "./PigMove";
import { Physic, GameConstant } from "../base/GameObj";
import { PlayerAniName } from "../player/Player";
import { BaseShipUi } from "../ship/BaseShip";

/**
 * 1、移动至目标点后开始攻击
2、首先使用前侧炮火释放1个炮弹
3、一定攻击间隔后，使用后侧火炮发射1个导弹
4、2种攻击方式轮流使用

 */
export class WaterPig extends PigPlayer {
    className_key = "WaterPig";

    public pigMove: PigMove
    public async onCreate(data: PigPlayerGameInfo) {
        super.onCreate(data);
        this.pigMove = this.addComponent(PigMove);

    }


    /**
     * 飞猪攻击
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
        let index = this.index % bidA.length;
        let bid = bidA[index];
        if (this.playerInfo.offX != null) {
            let offxArr = this.playerInfo.offX.split('|');
            bulletInfo.offx = parseInt(offxArr[index])
            let offyArr = this.playerInfo.offY.split('|');
            bulletInfo.offy = parseInt(offyArr[index])
        }
        this.index++;
        let bulletConfig: {
            id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string
        } = ConfigManager.getInstance().bulletConfigs[bid];
        bulletInfo = this.initBulletInfo(bulletInfo);
        bulletInfo.bid = parseInt(bid);
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        let velX = Number(bulletConfig.velx);
        let velY = Number(bulletConfig.vely);
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        bulletInfo.vely = Utils.random(velY * 0.5, velY * 1.5) * -1//暂时处理
        if (this.objInfo_.type == GameConstant.Enemy) {
            velX = -velX
            let playerShip = GameManager.instance.playerShip;
            if (this.y - playerShip.y > 0) {
                bulletInfo.gravityScale = - bulletInfo.gravityScale;
                bulletInfo.vely = -1 * bulletInfo.vely
            }
        }

        bulletInfo.attack = this.objInfo_.attack;
        bulletInfo.velx = velX;

        this.createBullet(bulletInfo);
    }

    /**
     * 创建子弹
     */
    public createBullet(bulletInfo: BulletInfo): BaseBullet {
        // bulletInfo.velx = 10;
        this.initBulletLoa();

        if (bulletInfo.bid + '' == 100107 + '') {
            super.createBullet(bulletInfo);
            return;
        }
        let disX = Math.abs(this.x - GameManager.instance.playerShip.x);
        let t1 = Math.abs(disX / 50 / bulletInfo.velx);
        bulletInfo.vely = -Math.abs(bulletInfo.vely);
        bulletInfo.gravityScale = -(bulletInfo.vely / 10 / t1 * 2);
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo) as BaseBullet;//ObjectManager.getInstance().createBaseBullet(bulletInfo.id + '', bulletInfo) as MissileBullet;
        // baseBullet.x = this.objInfo_.x + Utils.getRandom(-10, 10);
        // baseBullet.y = this.objInfo_.y;
        baseBullet.x = this.objInfo_.x + bulletInfo.offx;
        baseBullet.y = this.objInfo_.y + bulletInfo.offy;
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