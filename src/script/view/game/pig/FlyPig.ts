import { PigPlayer, PigPlayerGameInfo } from "./PigPlayer";
import ConfigManager from "../../../manager/ConfigManager";
import { GameManager } from "../../../manager/GameManager";
import { BulletInfo, BaseBullet } from "../bullet/BaseBullet";
import PigMove from "./PigMove";
import { Physic, GameConstant } from "../base/GameObj";
import { PlayerAniName } from "../player/Player";
import { BaseShipUi } from "../ship/BaseShip";

/**
 * 飞猪
 * 1、炸弹生成后快速下落直到出屏幕范围
    2、与任意单位发生碰撞，则爆炸，对碰撞单位造成伤害
    3、炸弹爆炸或超出屏幕范围后消失

 1、飞行至目标点后等待
2、等待5秒后，继续向屏幕左侧飞行
3、飞行至玩家主舰上方区域后，投下炸弹
4、投下炸弹后，继续向前飞行，若与玩家主舰碰撞则自爆造成伤害，否则飞出屏幕后消失
5、死亡时也会投下炸弹
6、可以通过配置开启曲线移动，即在自身上下一定距离内来回飞动，增加玩家命中的难度
 */
export class FlyPig extends PigPlayer {
    className_key = "FlyPig";

    public pigMove: PigMove
    public async onCreate(data: PigPlayerGameInfo) {
        await super.onCreate(data);
        this.pigMove = this.addComponent(PigMove);
        this.createBoom();
        if (this.bloodView) {
            this.bloodView.y = data.height + 50;
        }

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
        bulletInfo.bid = parseInt(bidA[0]);
        // let bArr = bulletConfig.icon.split("|")
        bulletInfo.bulletId = bulletConfig.icon;
        bulletInfo.showSmoke = false;
        bulletInfo.gravityScale = Number(bulletConfig.gravityScale);

        bulletInfo.velx = 0;
        bulletInfo.vely = 0;
        let bullet = this.createBullet(bulletInfo);
        bullet.baseRotation = 90;
        bullet.x = this.x;
        bullet.y = this.y + this.height / 2;
        bullet.rigidBody.type = Physic.KINEMATIC;

        bullet.isActive = false;
        bullet.collider.label = GameConstant.FlyBoom;
        this.bullet_boom = bullet;
    }

    public init() {

    }
    /**
     * 飞猪攻击
     */
    public playerAttack(info) {
        // this.autoAttack();
        this.bullet_boom.isActive = true;
        if (this.bullet_boom && this.bullet_boom.rigidBody) {
            this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
            this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
            Laya.timer.once(parseInt(info.time + ''), this, () => {
                Laya.timer.clear(this, this.autoAttack);
                this.actionIndex++;
                this.initActionIndex();
            })
        }


    }
    public update() {
        if (this.bullet_boom && !this.bullet_boom.isActive) {
            this.bullet_boom.x = this.x;
            this.bullet_boom.y = this.y + this.height / 2;
        }
    }

    public async destroy() {
        if (this.bullet_boom && !this.bullet_boom.isActive) {
            this.bullet_boom.isActive = true;
            if (this.bullet_boom.rigidBody) {
                this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
            }

        }

        super.destroy()

    }

    public bullet_boom: BaseBullet;


    public onRecovery() {
        this._destroyComponent(this.pigMove);
        this.bullet_boom = null;
        this.pigMove = null;
        super.onRecovery();
    }
}