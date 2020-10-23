import { GameObj, GameObjInfo } from "../base/GameObj";
import ObjectPool from "../../../common/ObjectPool";
import { GameManager } from "../../../manager/GameManager";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
/**
 * 掉落金币
 */
export class GoldView extends GameObj {
    className_key = "GoldView";

    public _view2d: Laya.Box;
    public onCreate(data: GameObjInfo) {
        super.onCreate(data, false);
        this.visible = true;
        if (this._view2d == null) {

            this._view2d = new Laya.Box();
            this.addChild(this._view2d);
        }
        this.createGoldIcon();
        this.once(Laya.Event.CLICK, this, this.onClick);
        Laya.timer.frameLoop(1, this, () => {

            if (this.x <= GameManager.instance.playerShip.x) {
                this.y += 4;
                if (this.y > Laya.stage.height) {
                    Laya.timer.clearAll(this);
                    this.destroy();
                }
            } else {
                this.x -= 1;
                if (this.y < Laya.stage.height - 480) {
                    this.y += 3;
                }
            }
        });
    }
    protected onClick() {
        SoundManager.getInstance().playEffect(SoundConst.GetGold);
        Laya.timer.clearAll(this);
        this.destroy();
    }


    private icon_gold: Laya.Image;
    public createGoldIcon() {
        let icon_gold = Laya.Pool.getItemByClass('icon_gold', Laya.Image) as Laya.Image;
        icon_gold.skin = 'resource/assets/img/home/foster/Icon_coin.png';
        icon_gold.size(100, 100);
        this._view2d.addChild(icon_gold);
        this.icon_gold = icon_gold;
    }

    public destroy() {
        this.visible = false;
        Laya.timer.clearAll(this);
        delete GameManager.instance.goldObj[this.objInfo_.id];
        ObjectPool.instance.recoveryObj(this);
        // super.destroy();
    }
    public removeSelf() {
        Laya.timer.clearAll(this);
        this.off(Laya.Event.CLICK, this, this.onClick);

        return super.removeSelf();
    }
    public onRecovery() {
        super.onRecovery();
        if (this.isRecovery) return;
        this.off(Laya.Event.CLICK, this, this.onClick);
        this.icon_gold.removeSelf();
        Laya.Pool.recover('icon_gold', this.icon_gold);
        if (this._view2d) {
            this._view2d.removeChildren();
            this._view2d.removeSelf();
            this._view2d = null;
        }

    }

}