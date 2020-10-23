import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import TreasureManager from "../../../manager/TreasureManager";
import GameMgr from "../../../manager/GameMgr";
import LotteryView from "../lottery/LotteryView";
import { GameData } from "../../../common/GameData";
import GameEvent from "../../../common/GameEvent";
import AwardScene from "../award/AwardScene";
import NoVacancy from "../common/NoVacancy";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
* 商店item
*/
export default class StoreItem extends BaseSceneUISkin {
    public className_key = "StoreItem";

    private lab_name: Laya.Label;
    private img_icon: Laya.Image;
    private img_lottery: Laya.Image;
    private lab_des: Laya.Label;
    private box_des: Laya.Box;
    private btn_video: Laya.Button;
    private lab_videoTimes: Laya.Label;
    private btn_dim: Laya.Button;
    private btn_lottery: Laya.Button;
    private img_cast: Laya.Image;

    private data: any;

    constructor(_data: any) {
        super();
        this.data = _data;
        this.skin = "home/store/StoreItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_dim.addComponent(CustomScaleComponent);
        this.btn_video.addComponent(CustomScaleComponent);
        this.btn_lottery.addComponent(CustomScaleComponent);
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
        this.btn_dim.on(Laya.Event.CLICK, this, this.onBuy);
        this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
        this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
    }

    /** 设置数据 */
    public setData(data: any) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        this.img_lottery.visible = false;
        this.btn_dim.visible = this.btn_lottery.visible = this.btn_video.visible = false;
        let data = this.data;
        if (data.type == 1) {
            this.btn_video.visible = true;
            this.lab_name.text = "时间宝箱";
            this.lab_des.text = "";
            this.img_icon.skin = "resource/assets/img/icon/box/Lootbox_Ferric.png";
            this.img_icon.scale(0.5, 0.5);
            let curTimes = TreasureManager.instance.getCurVideoTimes();
            let img = <Laya.Image>this.btn_video.getChildAt(1);
            if (curTimes.num < 5) {
                img.centerY = 13;
                this.lab_videoTimes.visible = true;
                this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
            } else {
                img.centerY = 0;
                this.lab_videoTimes.visible = false;
            }
        } else if (data.type == 2) {
            this.btn_lottery.visible = true;
            this.lab_name.text = "转盘";
            this.lab_des.text = "";
            this.img_icon.skin = "";
            this.img_lottery.visible = true;
            this.img_icon.scale(0.5, 0.5);
        } else {
            this.btn_dim.visible = true;
            this.lab_name.text = data.goods.name;
            this.lab_des.text = "";
            // this.lab_des.text = data.goods.itemDes;
            // console.log(this.lab_des.width, this.lab_des.height, this.lab_des);
            this.box_des.removeChildren();
            let desArr = data.goods.itemDes.split("|");
            let desColArr = data.goods.desColor.split("|");
            if (this.data.goods.itemID <= 160102) {
                let labelAttr = [
                    { text: desArr[0], color: desColArr[0], fontSize: 30, font: "SimHei" },
                    { text: desArr[1], color: desColArr[1], fontSize: 30, font: "SimHei" },
                    { text: "船、猫和增幅器", color: desColArr[2], fontSize: 30, font: "SimHei" }
                ];
                let baseLabel = new BaseLabel(labelAttr);
                this.box_des.addChild(baseLabel);
                let labelAttr1 = [
                    { text: "至少", color: desColArr[2], fontSize: 30, font: "SimHei" },
                    { text: desArr[3], color: desColArr[3], fontSize: 30, font: "SimHei" },
                ];
                let baseLabel1 = new BaseLabel(labelAttr1);
                baseLabel1.y = baseLabel.desHeight + 5;
                this.box_des.addChild(baseLabel1);
            } else {
                let labelAttr = []
                for (let i = 0, len = desArr.length; i < len; i++) {
                    labelAttr.push({ text: desArr[i], color: desColArr[i], fontSize: 30, font: "SimHei" });
                }
                let baseLabel = new BaseLabel(labelAttr);
                this.box_des.addChild(baseLabel);
            }
            let route = await GameMgr.getInstance().getIconUrlById(data.goods.itemID);
            this.img_icon.skin = route.route + route.prefix + ".png";
            this.img_icon.scale(0.3, 0.3);
            BitmapLabelUtils.setLabel(this.img_cast, data.goods.cost + "", "resource/assets/img/public/public_sz/", 0);
        }
    }

    private onBuy() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (GameData.getInstance().playerData.diamond >= this.data.goods.cost) {
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], async () => {
                GameMgr.getInstance().updateBaseData(1002, this.data.goods.cost * -1);
                let data = await TreasureManager.instance.openBox(this.data.goods.itemID);
                let fun = () => {
                    GameMgr.getInstance().updateBaseData(1001, data.gold);
                    ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop });
                }
                ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: () => { fun() } });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        } else {
            TipsManager.getInstance().showDefaultTips("钻石不足");
        }
    }

    private onVideo() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let curTimes = TreasureManager.instance.getCurVideoTimes();
        if (curTimes.num < 5) {
            if (GameData.getInstance().treasure.vacancy) {
                MiniManeger.instance.playViderAd({
                    successFun: () => {
                        TreasureManager.instance.updateVideoBox();
                        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                        let curTimes = TreasureManager.instance.getCurVideoTimes();
                        let img = <Laya.Image>this.btn_video.getChildAt(1);
                        if (curTimes.num < 5) {
                            img.centerY = 13;
                            this.lab_videoTimes.visible = true;
                            this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
                        } else {
                            img.centerY = 0;
                            this.lab_videoTimes.visible = false;
                        }
                    },
                    failFun: () => {
                    },
                    errorFun: () => {
                    }
                });
            } else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
            }
        } else {
            TipsManager.getInstance().showDefaultTips("今日看视频得宝箱次数已用完");
        }
    }

    private onLottery() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["lottery"], () => {
            ViewManager.getInstance().showView(LotteryView);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_dim.off(Laya.Event.CLICK, this, this.onBuy);
        this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
        this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
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