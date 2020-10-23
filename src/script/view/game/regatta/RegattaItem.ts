import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import { BoosterConfig } from "../../../common/GameConfigType";
import { AdventureEmenyScene } from "../../home/foster/AdventureEmenyScene";
import GameMgr from "../../../manager/GameMgr";
import { MiniManeger } from "../../../manager/MiniManeger";
import RegattaManager from "../../../manager/RegattaManager";
import TreasureManager from "../../../manager/TreasureManager";

/**
 * 帆船赛Item
 */
export default class RegattaItem extends BaseSceneUISkin {
    public className_key = "RegattaItem";

    private box_center: Laya.Box;
    private box_start: Laya.Box;
    private box_mid: Laya.Box;
    private box_end: Laya.Box;
    private box_reward: Laya.Box;
    private img_slot: Laya.Image;
    private boxV_booster: Laya.VBox;
    private img_jt: Laya.Image;
    private img_pass: Laya.Image;
    private box_star: Laya.Box;
    private boxH_star: Laya.HBox;

    public data: localData.ZoneData;

    constructor(_data: localData.ZoneData) {
        super();
        this.data = _data;
        this.skin = "game/regatta/RegattaItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(600, 650);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
    }

    /** 设置数据 */
    public setData(data: localData.ZoneData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.box_start.visible = this.box_mid.visible = this.box_end.visible = false;
        this.img_jt.visible = this.img_pass.visible = false;
        this.box_reward.visible = this.box_star.visible = false;
        let box: Laya.Box, big: Laya.Image, bigNum: Laya.Image, small: Laya.Image, lock: Laya.Image, pass: Laya.Image;
        if (data.isEnd) {
            this.box_end.visible = true;
            // box = <Laya.Box>this.box_end.getChildAt(1);
            // big = <Laya.Image>box.getChildByName("big");
            // bigNum = <Laya.Image>box.getChildByName("bigNum");
            // small = <Laya.Image>box.getChildByName("small");
            // lock = <Laya.Image>box.getChildByName("lock");
            // pass = <Laya.Image>box.getChildByName("pass");
        } else {
            if (data.zoneNo == 1) {
                this.box_start.visible = true;
                this.img_jt.x = 40;
                this.box_star.x = 115;
                this.img_pass.x = -32;
                box = <Laya.Box>this.box_start.getChildAt(1);
                big = <Laya.Image>box.getChildByName("big");
                bigNum = <Laya.Image>box.getChildByName("bigNum");
                small = <Laya.Image>box.getChildByName("small");
                lock = <Laya.Image>box.getChildByName("lock");
                pass = <Laya.Image>box.getChildByName("pass");
            } else {
                this.box_mid.visible = true;
                this.img_jt.x = 60;
                this.box_star.x = 145;
                this.img_pass.x = 10;
                box = <Laya.Box>this.box_mid.getChildAt(1);
                big = <Laya.Image>box.getChildByName("big");
                bigNum = <Laya.Image>box.getChildByName("bigNum");
                small = <Laya.Image>box.getChildByName("small");
                lock = <Laya.Image>box.getChildByName("lock");
                pass = <Laya.Image>box.getChildByName("pass");
            }
            box.off(Laya.Event.CLICK, this, this.onSure);
            if (data.unlock) {
                lock.visible = false;
                box.on(Laya.Event.CLICK, this, this.onSure);
                if (data.curZone) {
                    small.visible = pass.visible = false;
                    big.visible = bigNum.visible = true;
                    this.img_jt.visible = true;
                    BitmapLabelUtils.setLabel(bigNum, data.zoneNo + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
                } else {
                    big.visible = bigNum.visible = false;
                    small.visible = pass.visible = true;
                    this.img_pass.visible = true;
                    let img = <Laya.Image>pass.getChildAt(0);
                    BitmapLabelUtils.setLabel(img, data.zoneNo + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
                }
            } else {
                lock.visible = small.visible = true;
                big.visible = bigNum.visible = pass.visible = false;
                let img = <Laya.Image>lock.getChildAt(0);
                BitmapLabelUtils.setLabel(img, data.zoneNo + "", "resource/assets/img/home/regatta/number2/number2_", 0, ".png", "center");
            }
            if (!data.pass) {
                this.box_reward.visible = true;
                if (data.isShowSlot) {
                    this.img_slot.visible = true;
                    this.img_slot.skin = "resource/assets/img/home/regatta/ui_icon_slot_" + data.unlockSlotMax + ".png";
                    this.boxV_booster.y = 163;
                } else {
                    this.img_slot.visible = false;
                    this.boxV_booster.y = 163;
                }
                this.boxV_booster.removeChildren();
                let awardArr = data.reward.split(",");
                for (let i = 0; i < awardArr.length; i++) {
                    let id = awardArr[i].split("|")[0];
                    let img = new Laya.Image();
                    if (parseInt(id) > 140000 && parseInt(id) < 150000) {//增幅器
                        let config = <BoosterConfig>ConfigManager.getInstance().boosterConfigs[id];
                        img.scale(0.6, 0.6);
                        img.skin = "resource/assets/img/icon/booster/" + config.uiIcon + ".png";
                    } else if (parseInt(id) > 120000 && parseInt(id) < 130000) {//猫

                        img.scale(0.7, 0.7);
                        img.skin = "resource/assets/img/icon/cat/catIcon_" + id + ".png";
                    } else if (parseInt(id) > 160000 && parseInt(id) < 170000) {
                        img.scale(0.2, 0.2);
                        let data = await TreasureManager.instance.getTreasureConfig(parseInt(id))
                        img.skin = "resource/assets/img/icon/box/" + data.icon + ".png"
                    }
                    this.boxV_booster.addChild(img);
                }

                if (data.isShowStar) {
                    this.box_star.visible = true;
                    for (let i = 0, len = this.boxH_star.numChildren; i < len; i++) {
                        (<Laya.Image>this.boxH_star.getChildAt(i)).visible = data.unlockStarMax > i;
                    }
                    this.boxH_star.width = data.unlockStarMax * 93;
                    this.boxH_star.centerX = 0;
                }
            }
        }
    }

    private async onSure() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        await RegattaManager.instance.getRegattaRank();

        ResUtil.getIntance().loadGroups(["foster", "rank"], () => {
            MiniManeger.instance.hideBanner();
            ViewManager.getInstance().showView(AdventureEmenyScene, { type: 1, zoneNo: this.data.zoneNo });
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    /** 移除事件 */
    private removeEvent() {

    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}