import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import { ObjectManager } from "../base/ObjectManager";
import PigMove from "./PigMove";
import ConfigManager from "../../../manager/ConfigManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import { Physic } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { MineBullet } from "../bullet/MineBullet";
import { PlayerAniName } from "../player/Player";
/**
 * 1、移动至目标点后等待
2、等待5秒后，继续向屏幕左侧前进
3、移动至玩家主舰下方区域后，释放炸弹
4、释放炸弹后继续向前移动，若与玩家主舰碰撞则自爆造成伤害，否则移动出屏幕后消失
5、死亡时也会释放1个炸弹
6、可以通过配置开启曲线移动，即在上下一定距离内来飞动，增加玩家命中的难度

1、炸弹释放后快速向水面浮起
2、浮至水面后停止，并跟随水面一起飘动
3、与任意单位发生碰撞，则爆炸，对碰撞单位造成伤害
4、炸弹存在8秒后自动爆炸销毁
 */
export class MinePig extends PigPlayer {
    className_key = "FlyPig";

    public pigMove: PigMove
    public async onCreate(data: PigPlayerGameInfo) {
        await super.onCreate(data);
        this.ani_player.y = data.height / 2
        this.pigMove = this.addComponent(PigMove);
        this.createBoom();


    }
    public init() {
        // this.createBoom();
    }
    /**
     * 创建炸弹
     */
    public createBoom() {
        let bulletInfo = new BulletInfo();
        bulletInfo = this.initBulletInfo(bulletInfo);
        //飞猪会处理
        let bidA = (this.playerInfo.blt_id + '').split("|");
        let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
        bulletInfo.height = bulletConfig.height;
        bulletInfo.width = bulletConfig.width;
        // let bArr = bulletConfig.icon.split("|")
        bulletInfo.bid = parseInt(bidA[0]);
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.showSmoke = false;
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
        bulletInfo.velx = 0;
        bulletInfo.vely = 0;
        let bullet = this.createBullet(bulletInfo);
        bullet.baseRotation = -90;
        bullet.rigidBody.type = Physic.KINEMATIC;
        // bullet.x = this.x;
        // bullet.y = this.y + this.height / 2;
        bullet.isActive = false;

        this.bullet_boom = bullet;
    }
    /**
     * 创建子弹
     */
    public createBullet(bulletInfo: BulletInfo): BaseBullet {
        let baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);//ObjectManager.getInstance().createBaseBullet(bulletInfo.id + '', bulletInfo);//ObjectPool.instance.createObjectByName(MineBullet, bulletInfo) as MineBullet;
        baseBullet.x = this.objInfo_.x + bulletInfo.offx;
        baseBullet.y = this.objInfo_.y + bulletInfo.offy;
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
        if (this.bullet_boom && !this.bullet_boom.isActive) {
            this.bullet_boom.x = this.x - 5;
            this.bullet_boom.y = this.y - this.height / 2 - 5;
        }
    }
    /**
   * 飞猪攻击
   */
    public playerAttack(info) {
        this.playerAni(PlayerAniName.gongji, () => {
            let bidA = (this.playerInfo.blt_id + '').split("|")
            let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string, width: number, height: number, icon: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            // bulletInfo.height = bulletConfig.height;
            // bulletInfo.width = bulletConfig.width;

            if (this.bullet_boom && this.bullet_boom.rigidBody) {
                this.bullet_boom.isActive = true;
                this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
                this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                this.bullet_boom.rigidBody.setVelocity({ x: 0, y: -bulletConfig.vely });
                Laya.timer.once(parseInt(info.time + ''), this, () => {
                    Laya.timer.clear(this, this.autoAttack);
                    this.actionIndex++;
                    this.initActionIndex();
                })
            }


        }, false)

    }

    public async destroy() {
        if (!this.bullet_boom.isActive) {
            let bidA = (this.playerInfo.blt_id + '').split("|");
            let bulletConfig: { id: string, velx: string, vely: string, gravityScale: string } = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            this.bullet_boom.isActive = true;
            if (this.bullet_boom.rigidBody) {
                this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
                this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                this.bullet_boom.rigidBody.setVelocity({ x: 0, y: -bulletConfig.vely });
            }

        }
        super.destroy();
    }

    public bullet_boom: BaseBullet;


    public onRecovery() {
        this._destroyComponent(this.pigMove);
        this.bullet_boom = null;
        this.pigMove = null;
        super.onRecovery();
    }
}