import ObjectPool from "../../../common/ObjectPool";
import { GameObj, GAMESTATUS } from "../base/GameObj";
import ConfigManager from "../../../manager/ConfigManager";
import { BoosterInfo } from "./BoosterPlayer";
import GameConst from "../../../common/GameConst";
import { BaseInfoType, GameManager } from "../../../manager/GameManager";

/**
 * 护盾增幅器
 */
export class ShiledBooster extends GameObj {
    className_key = "ShiledBooster";
    public view2d_: Laya.Box;
    public objInfo_: BoosterInfo;

    public onCreate(data: BoosterInfo) {
        super.onCreate(data, false);
        this.x = data.width / 2;
        this.y = data.height / 2;
        data.classType = BaseInfoType.Booster;

        this.objInfo_ = data;

        if (this.view2d_ == null) {
            this.view2d_ = new Laya.Box();
        }
        this.isUseing = false;
        this.addChild(this.view2d_);
        this.initView();
        EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);

    }
    public onPlayerTouchScene() {
        EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        this.useBooster();
    }
    public onRecovery() {
        super.onRecovery();
    }
    public initView() {
        let boosterConfig = ConfigManager.getInstance().boosterConfigs[this.objInfo_.boosterId] as {
            id: string, name: string, star: string, effectID: string, type: string, icon: string, des: string
        };
        this.objInfo_.boosterConfig = boosterConfig;
        let iconArr = boosterConfig.icon.split("|");

        // let icon_mask = new Laya.Image();
        // icon_mask.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
        // icon_mask.size(50, 50);
        // icon_mask.pos(0, 0);
        // icon_mask.name = 'mask';
        // icon_cd.addChild(icon_mask);
        // this.view2d_.size(81.6, 153.6);
        // this.view2d_.centerX = this.view2d_.centerY = 0;
        // this.view2d_.anchorX = 0.5;
        // this.view2d_.anchorY = 0.5;


        let icon_mask = new Laya.Sprite();
        icon_mask.size(50, 50);
        icon_mask.pos(13, 87);
        var rect = new Laya.Rectangle(0, 0, 50, 50);
        icon_mask.scrollRect = rect;
        this.view2d_.addChild(icon_mask);

        let icon_cd = new Laya.Image();
        icon_cd.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
        icon_cd.size(50, 50);
        icon_cd.pos(0, 0);
        icon_cd.name = 'cd';
        this.icon_cd = icon_cd;
        icon_mask.addChild(icon_cd);

    }
    public isUseing = false;
    /**
     * 开始cd
     */
    public startCD() {
        let icon_cd = this.icon_cd;

        // let ic_mask = icon_cd.getChildByName("mask") as Laya.Image;
        icon_cd.x = -50;
        // ic_mask.x = 47;
        // Laya.Tween.to(ic_mask, { x: 0 }, Number(this.objInfo_.skillCD), null);
        Laya.Tween.to(icon_cd, { x: 0 }, Number(this.objInfo_.skillCD), null, Laya.Handler.create(this, () => {//cd充能完成
            this.isUseing = false;
            this.useBooster();
        }));
    }
    public useBooster() {
        if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) return;
        // let icon_cd = this.icon_cd;
        console.log("useBooster>>>>>>>>>>>>>>", this.objInfo_.id, this.isUseing)
        if (this.isUseing) return;
        this.isUseing = true

        this.startCD();

        EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: this.objInfo_.boosterId, type: this.objInfo_.type });
    }

    public icon_cd: Laya.Image;
    public removeSelf() {
        Laya.Tween.clearAll(this.icon_cd);
        ObjectPool.instance.recoveryObj(this);
        this.view2d_.removeSelf();
        this.view2d_.removeChildren();
        return super.removeSelf();
    }
}