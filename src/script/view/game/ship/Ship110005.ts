import { PlayerGameInfo, Player, PlayerAniName } from "../player/Player";
import { ShipObjInfo, BaseShipUi } from "./BaseShip";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { GameConstant, GAMESTATUS } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";

export class Ship110005 extends BaseShipUi {
    className_key = "Ship110005";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110005.json';
    }

    
    /**
     * 如果是对手 船的碰撞体
     */
    public enemyBoxPosArr = [
        {
            x: 268, y: 55
        },
        {
            x: 384, y: 55
        },
        {
            x: 138, y: 55
        },
        {
            x: 255, y: 289
        },
        {
            x: 129, y: 289
        },

    ];
    protected createChildren() {
        super.createChildren();
    }

    public initView() {
        super.initView();
        // this.rigidBody = this.icon_ship.addComponent(Laya.RigidBody) as Laya.RigidBody;
        // this.collider = this.icon_ship.addComponent(Laya.PolygonCollider) as Laya.PolygonCollider;
        // this.collider.points = '281,132,568,137,640,214,664,301,542,281,11,274,-8,248,-12,129';
    }

    public async initUmbrell() {
      
    }


    public removeSelf() {
        return super.removeSelf();
    }
}
