import { PlayerGameInfo, Player, PlayerAniName } from "../player/Player";
import { ShipObjInfo, BaseShipUi } from "./BaseShip";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import { GameConstant, GAMESTATUS } from "../base/GameObj";
import { BaseBullet } from "../bullet/BaseBullet";

export class Ship110003 extends BaseShipUi {
    className_key = "Ship110003";
    public constructor(data: ShipObjInfo) {
        super();
        this.objInfo_ = data;
        this.skin = 'game/ship/Ship110003.json';
    }


    /**
     * 如果是对手 船的碰撞体
     */
    public enemyBoxPosArr = [
        {
            x: 284, y: 27
        },
        {
            x: 440, y: 27
        },
        {
            x: 123, y: 27
        },
        {
            x: 286, y: 235
        },
        {
            x: 123, y: 235
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
        let umbrella = await GameManager.instance.createSkeleton("resource/assets/img/ani/ship/umbrellaA.sk");
        if (umbrella == null) return;
        umbrella.x = umbrella.width - 84;
        umbrella.y = umbrella.height + 30;
        this.box1.addChild(umbrella);
        umbrella.play(PlayerAniName.daiji, true);
    }


    public removeSelf() {
        return super.removeSelf();
    }
}
