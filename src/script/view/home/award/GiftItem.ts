import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import GameMgr from "../../../manager/GameMgr";
import { GameData } from "../../../common/GameData";
import { GameManager } from "../../../manager/GameManager";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import TreasureManager from "../../../manager/TreasureManager";
import AwardScene from "./AwardScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";

/**
* 惊喜礼物（只有时间宝箱有）item
*/
export default class GiftItem extends BaseSceneUISkin {
    public className_key = "GiftItem";

    private lab_name: Laya.Label;
    private img_icon: Laya.Image;
    private boxH_star: Laya.HBox;
    private btn_video: Laya.Button;

    private data: any;

    constructor(_data?: any) {
        super();
        this.data = _data;
        this.skin = "home/award/GiftItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_video.addComponent(CustomScaleComponent);
    }

    protected adaptationStage() {
        this.size(485, 605);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
    }

    /** 设置数据 */
    public setData(data: localData.PropData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private initView() {
        // if (!this.data) return;
        // this.btn_video.disabled = false;
        let level = GameData.getInstance().playerData.playerLevel;
        for (let i = 0, len = this.boxH_star.numChildren; i < len; i++) {
            (<Laya.Image>this.boxH_star.getChildAt(i)).visible = level > i;
        }
        this.boxH_star.width = level * 93;
        this.boxH_star.centerX = 0;
    }

    private onVideo() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        MiniManeger.instance.playViderAd({
            successFun: () => {
                // this.btn_video.disabled = true;
                let type = Utils.getRandom(1, 3);
                let ob;
                switch (type) {
                    case 1:
                        ob = GameManager.instance.getRandomOneShip(false, GameData.getInstance().playerData.playerLevel);
                        break;
                    case 2:
                        ob = GameManager.instance.getRandomOneCat(false, GameData.getInstance().playerData.playerLevel);
                        break;
                    case 3:
                        ob = GameManager.instance.getRandomOneBooster(false, GameData.getInstance().playerData.playerLevel);
                        break;
                }
                GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                let views = ViewManager.getInstance().views;
                let result = <AwardScene>views["AwardScene"];
                if (result) {
                    result.getAward();
                }
                let dataArr = TreasureManager.instance.getAwardPropData([ob]);
                ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr });
            },
            failFun: () => {
            },
            errorFun: () => {
            }
        });
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
        this.removeEvent();
    }
}