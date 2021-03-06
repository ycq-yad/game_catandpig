import { PlayerGameInfo, Player, PlayerAniName } from "../player/Player";
import { ShipObjInfo, BaseShipUi } from "./BaseShip";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { GameConstant, GAMESTATUS } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";

export class Ship110202 extends BaseShipUi {
    className_key = "Ship110202";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110202.json';
    }
    protected createChildren() {
        super.createChildren();
    }
    /**
    * 如果是对手 船的碰撞体
    */
    public enemyBoxPosArr = [
        {
            x: 225, y: 45
        },
        {
            x: 333, y: 45
        },
        {
            x: 127, y: 45
        },
        {
            x: 115, y: 225
        },
        {

            x: 241, y: 220
        },

    ];
    public initView() {
        super.initView();
        // this.rigidBody = this.icon_ship.addComponent(Laya.RigidBody) as Laya.RigidBody;
        // this.collider = this.icon_ship.addComponent(Laya.PolygonCollider) as Laya.PolygonCollider;
        // this.collider.points = '250,135,438,148,476,186,456,291,93,291,52,285,26,269,34,144';
    }


    public removeSelf() {

        return super.removeSelf();
    }
}
/**
 * 展示船的问题
 */
export class ShowShip110201 extends BaseShipUi {
    className_key = "ShowShip110201";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110201.json';
    }
    protected createChildren() {
        super.createChildren();
    }
    public async initUmbrell() {
        let umbrella = await GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk");
        if (umbrella == null) return;
        umbrella.x = umbrella.width / 2;
        umbrella.y = umbrella.height / 2;
        // // umbrella.scale(0.4, 0.4)
        this.box1.addChild(umbrella);
        this.box1.rotation = -35;
        umbrella.play(0, true);
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