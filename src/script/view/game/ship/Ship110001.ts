import { PlayerGameInfo, Player, PlayerAniName } from "../player/Player";
import { ShipObjInfo, BaseShipUi } from "./BaseShip";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { GameConstant, GAMESTATUS } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";

export class Ship110001 extends BaseShipUi {
    className_key = "Ship110001";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110001.json';
    }
    /**
     * 如果是对手 船的碰撞体
     */
    public enemyBoxPosArr = [
        {
            x: 230, y: 27
        },
        {
            x: 385, y: 27
        },
        {
            x: 97, y: 27
        },
        {
            x: 330, y: 230
        },
        {
            x: 146, y: 230
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
