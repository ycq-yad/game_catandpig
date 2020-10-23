import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import { MiniManeger } from "../../../manager/MiniManeger";
import GameMgr from "../../../manager/GameMgr";
import AwardScene from "./AwardScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import TreasureManager from "../../../manager/TreasureManager";

/**
* 获得金币，钻石，时间宝箱等奖励item
*/
export default class GoodsItem extends BaseSceneUISkin {
    public className_key = "GoodsItem";

    private lab_name: Laya.Label;
    private img_content: Laya.Image;
    private img_icon: Laya.Image;
    private lab_num: Laya.Label;
    private btn_video: Laya.Button;
    private img_mult: Laya.Image;

    private data: { awardId: number, awardNum: number };
    private multiple: number;

    constructor(_data: { awardId: number, awardNum: number }) {
        super();
        this.data = _data;
        this.skin = "home/award/GoodsItem.json";
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
    public setData(data: { awardId: number, awardNum: number }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        // this.btn_video.disabled = false;
        let data = this.data;
        // this.lab_num.text = "X" + data.awardNum;
        BitmapLabelUtils.setLabel(this.lab_num, data.awardNum + "", "resource/assets/img/home/top/top_sz/", 0);
        this.lab_num.width = (data.awardNum + "").length * 42;
        if (data.awardId == 1001) {
            this.btn_video.visible = true;
            this.img_content.y = 88;
            this.lab_name.text = "金币";
            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
            this.img_icon.scale(3, 3);
            this.multiple = GameMgr.getInstance().getGoldMult(data.awardNum);
            BitmapLabelUtils.setLabel(this.img_mult, this.multiple + "", "resource/assets/img/public/public_sz/", 0);
        } else if (data.awardId == 1002) {
            this.btn_video.visible = false;
            this.img_content.y = 130;
            this.lab_name.text = "钻石";
            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
            this.img_icon.scale(3, 3);
        } else {
            this.btn_video.visible = false;
            this.img_content.y = 130;
            let config = await TreasureManager.instance.getTreasureConfig(data.awardId);
            this.lab_name.text = config.name;
            this.img_icon.skin = "resource/assets/img/icon/box/" + config.icon + ".png";
            this.img_icon.scale(0.5, 0.5);
        }
    }

    private onVideo() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        MiniManeger.instance.playViderAd({
            successFun: () => {
                // this.btn_video.disabled = true;
                let data = this.data;
                if (data.awardId == 1001) {
                    GameMgr.getInstance().updateBaseData(1001, data.awardNum * (this.multiple - 1));
                } else if (data.awardId == 1002) {
                    GameMgr.getInstance().updateBaseData(1002, data.awardNum);
                }
                let views = ViewManager.getInstance().views;
                let result = <AwardScene>views["AwardScene"];
                if (result) {
                    result.getAward();
                }
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