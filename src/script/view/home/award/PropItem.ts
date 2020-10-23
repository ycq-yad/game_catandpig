import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import FosterDetailView from "../foster/FosterDetailView";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { GameManager } from "../../../manager/GameManager";

/**
* 船，猫，增幅器item
*/
export default class PropItem extends BaseSceneUISkin {
    public className_key = "PropItem";

    private lab_lv: Laya.Label;
    private boxH_ship: Laya.HBox;
    private img_shipHp: Laya.Image;
    private lab_shipHp: Laya.Label;
    private lab_shipSlot: Laya.Label;
    private boxH_cat: Laya.HBox;
    private img_catAtk: Laya.Image;
    private lab_catAtk: Laya.Label;
    private lab_catHp: Laya.Label;
    private lab_catCrit: Laya.Label;
    private boxH_booster: Laya.HBox;
    private lab_boosterHp: Laya.Label;
    private lab_boosterCd: Laya.Label;
    private img_jd: Laya.Image;
    private img_icon: Laya.Image;
    private boxH_star: Laya.HBox;
    private lab_name: Laya.Label;
    private img_detail: Laya.Image;
    private img_xiyou: Laya.Image;

    /**
     * data.type 1=奖励界面，2=培养界面
     */
    private data: { type: number, data: localData.PropData };

    constructor(_data: { type: number, data: localData.PropData }) {
        super();
        this.data = _data;
        this.skin = "home/award/PropItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.img_detail.addComponent(CustomScaleComponent);
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
        this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
    }

    /** 设置数据 */
    public setData(data: { type: number, data: localData.PropData }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private initView() {
        if (!this.data) return;
        // console.log("PropItem >>> initView", this.data);
        // this.img_detail.visible = this.data.type == 2;
        this.boxH_booster.visible = this.boxH_cat.visible = this.boxH_ship.visible = false;
        let data = this.data.data;
        if (data == null) return;
        this.img_xiyou.visible = data.quality == 2;
        this.lab_lv.text = "LV." + data.level;
        if (data.level >= GameManager.instance.shipMaxLevel) {
            this.lab_lv.text = "LV.MAX";
        }
        if (data.type == 0) {
            this.boxH_ship.visible = true;
            if (parseInt(data.shipConfig.attack_type) == 1) {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_21.png";
            } else if (parseInt(data.shipConfig.attack_type) == 2) {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_22.png";
            } else {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_23.png";
            }
            this.lab_shipHp.text = data.hp + "";
            this.lab_shipSlot.text = data.slot + "";
            this.lab_name.text = data.shipConfig.name;
            this.img_icon.skin = "resource/assets/img/icon/ship/shipIcon_" + data.id + ".png";
            this.img_icon.scale(2, 2);
        } else if (data.type == 1) {
            this.boxH_cat.visible = true;
            if (parseInt(data.catConfig.attack_type) == 1) {
                this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_26.png";
            } else if (parseInt(data.catConfig.attack_type) == 2) {
                this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_27.png";
            } else if (parseInt(data.catConfig.attack_type) == 3) {
                this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_28.png";
            } else {
                this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_ui_aim_red.png";
            }
            this.lab_catAtk.text = data.atk + "";
            this.lab_catHp.text = data.hp + "";
            this.lab_catCrit.text = (data.crit / 100) + "%";
            this.lab_name.text = data.catConfig.name;
            this.img_icon.skin = 'resource/assets/img/icon/cat/catIcon_' + data.id + '.png';
            this.img_icon.scale(1.2, 1.2);
        } else {
            this.boxH_booster.visible = true;
            this.lab_boosterHp.text = data.hp + "";
            this.lab_boosterCd.text = (data.skillCD / 1000).toFixed(2) + 's';
            this.lab_name.text = data.boosterConfig.name;
            this.img_icon.skin = 'resource/assets/img/icon/booster/' + data.boosterConfig.uiIcon + '.png';
            this.img_icon.scale(1, 1);
        }
        if (data.level >= data.maxLevel) {
            this.img_jd.width = 408;
        } else {
            let needExp = ConfigManager.getInstance().playerExpJson[data.level].exp;
            this.img_jd.width = 408 * (data.exp / needExp);
        }
        // let exp1 = ConfigManager.getInstance().playerExpJson[this.data.level].exp;
        // let exp2 = 0;
        // if (this.data.level - 1 < 0) {
        //     exp2 = 0
        // } else {
        //     exp2 = ConfigManager.getInstance().playerExpJson[this.data.level - 1].exp;
        // }
        // this.img_jd.width = 408 * ((this.data.exp - exp2) / (exp1 - exp2));
        for (let i = 0, len = this.boxH_star.numChildren; i < len; i++) {
            (<Laya.Image>this.boxH_star.getChildAt(i)).visible = data.star > i;
        }
        this.boxH_star.width = data.star * 93;
        this.boxH_star.centerX = 0;
    }

    private onDetail() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        ViewManager.getInstance().showView(FosterDetailView, this.data.data);
    }

    /** 移除事件 */
    private removeEvent() {
        this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
    }
}