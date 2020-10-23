import { PlayerGameInfo, Player, PlayerAniName } from "../player/Player";
import { ShipObjInfo, BaseShipUi } from "./BaseShip";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { GameConstant, GAMESTATUS, Physic } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";

export class Ship110103 extends BaseShipUi {
    className_key = "Ship110103";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110103.json';
    }
    protected createChildren() {
        super.createChildren();
    }
    /**
  * 如果是对手 船的碰撞体
  */
    public enemyBoxPosArr = [
        {
            x: 174, y: 53
        },
        {
            x: 294, y: 53
        },
        {

            x: 55, y: 53
        },
        {
            x: 64, y: 222
        },
        {
            x: 202, y: 222
        },

    ];

    public async initUmbrell() {

    }
    public initView() {
        super.initView();
        // this.rigidBody = this.icon_ship.addComponent(Laya.RigidBody) as Laya.RigidBody;
        // this.collider = this.icon_ship.addComponent(Laya.PolygonCollider) as Laya.PolygonCollider;
        // this.collider.points = '3,8,487,8,487,139,19,148,0,100';
    }

    public removeSelf() {
        return super.removeSelf();
    }
}
/**
 * 展示船的问题
 */
export class ShowShip110101 extends BaseShipUi {
    className_key = "ShowShip110101";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110101.json';
    }
    protected createChildren() {
        super.createChildren();
    }
    public async initUmbrell() {

    }

    public removeSelf() {
        return super.removeSelf();
    }
    public initPlayer() {
        let playerConfig = this.objInfo_.playerConfig;
        if (playerConfig) {
            for (let i = 1; i < 6; i++) {
                if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                    this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                }
            }
        }

        // this.createPlayer(this.box_player1);
        // this.createPlayer(this.box_player2);
        // this.createPlayer(this.box_player3);
    }
    /**
     * 初始化数据
     */
    public initView() {
        this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody) as Laya.RigidBody;
        this.collider = this.icon_ship.getComponent(Laya.PolygonCollider) as Laya.PolygonCollider;
        if (this.collider) {
            this.icon_ship._destroyComponent(this.collider);
        }
        if (this.rigidBody) {
            this.icon_ship._destroyComponent(this.rigidBody);
        }
        // this.rigidBody.type = Physic.KINEMATIC;

        this.box_player1 && (this.box_player1.name = 'main');//舰长
        this.box_player2 && (this.box_player2.name = 'up1');//水面上
        this.box_player3 && (this.box_player3.name = 'up1');//水面上
        this.box_player4 && (this.box_player4.name = 'under1');//水面下
        this.box_player5 && (this.box_player5.name = 'under2');//水面下
        // this.icon_ship.scale(0.3, 0.3);
        // if (this.objInfo_.type == GameConstant.Enemy) return
        this.initPlayer();
        // this.icon_ship.visible = false;
        // this.behind.visible = false;
        // this.front.visible = false;
        this.initUmbrell();
    }
}