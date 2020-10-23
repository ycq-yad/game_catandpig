import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import PigMove from "./PigMove";
import ConfigManager from "../../../manager/ConfigManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import { Physic, GameConstant } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { MineBullet } from "../bullet/MineBullet";
import { PlayerAniName } from "../player/Player";
import { MissileBullet } from "../bullet/MissileBullet";
import { ObjectManager } from "../base/ObjectManager";
/**
 * 1、移动至目标点
2、同时向3个不同的方向发射3枚导弹
3、等待攻击冷却
4、发射下一轮导弹
 */
export class SeaurchinPig extends PigPlayer {
    className_key = "SeaurchinPig";

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

        this.playerAni(PlayerAniName.gongji, () => {
            this.initBulletLoa();
            let bidA = (this.playerInfo.blt_id + '').split("|");
            this.createBulletInfo(bidA[0], 0);
            this.createBulletInfo(bidA[0], 0);
            this.createBulletInfo(bidA[0], 0);
        }, false)
        this.startAttackTime = new Date().getTime();
        Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
    }
    /**
     * 创建基础子弹
     * 
     * @param bid 
     */
    public createBulletInfo(bid: string, index: number) {
        let bulletInfo = new BulletInfo();
        if (this.playerInfo.offX != null) {

            let offxArr = this.playerInfo.offX.split('|');
            bulletInfo.offx = parseInt(offxArr[index])
            let offyArr = this.playerInfo.offY.split('|');
            bulletInfo.offy = parseInt(offyArr[index])
        }


        this.initBulletInfo(bulletInfo);

        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bid];
        bulletInfo.bid = parseInt(bid);

        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        // bulletInfo.velx
        // let vel: Array<number> = Utils.getRunDirection({ x: this.x, y: this.y }, { x: GameManager.instance.playerShip.x, y: GameManager.instance.playerShip.y }, Number(bulletConfig.velx));
        bulletInfo.velx = parseInt(bulletConfig.velx) + Utils.random(-5, 5);
        bulletInfo.vely = parseInt(bulletConfig.vely) + Utils.random(-5, 5);
        // bulletInfo.velx = vel[0];
        // bulletInfo.vely = vel[1];
        this.createBullet(bulletInfo);
    }
    /**
     * 创建子弹
     */
    public createBullet(bulletInfo: BulletInfo): MissileBullet {
        // bulletInfo.velx = 10;
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo) as MissileBullet;//ObjectManager.getInstance().createBaseBullet(bulletInfo.id + '', bulletInfo) as MissileBullet;
        baseBullet.x = this.objInfo_.x + Utils.getRandom(-30, 30);
        baseBullet.y = this.objInfo_.y + Utils.getRandom(-30, 30);
        GameManager.instance.bodyLayer.addChild(baseBullet);
        baseBullet.init();
        baseBullet.isActive = true;
        baseBullet.view2d_.x = baseBullet.x;
        baseBullet.view2d_.y = baseBullet.y;
        GameManager.instance.box_game.addChild(baseBullet.view2d_);
        GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
        return baseBullet;
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