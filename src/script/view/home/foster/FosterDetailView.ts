import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import GameMgr from "../../../manager/GameMgr";

/**
 * 养成 详情界面
 */
export default class FosterDetailView extends BaseSceneUISkinPopView {
    public className_key = "FosterDetailView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private lab_title: Laya.Label;
    private img_icon: Laya.Image;
    private btn_close: Laya.Button;
    private lab_name: Laya.Label;
    private lab_desc: Laya.Label;
    private lab_type: Laya.Label;
    private lab_rarity: Laya.Label;
    private boxH_star: Laya.HBox;
    private box_ship: Laya.Box;
    private img_shipHp: Laya.Image;
    private lab_shipHp: Laya.Label;
    private lab_shipSlot: Laya.Label;
    private box_cat: Laya.Box;
    private img_catAtk: Laya.Image;
    private lab_catAtk: Laya.Label;
    private lab_catHp: Laya.Label;
    private lab_catCrit: Laya.Label;
    private box_booster: Laya.Box;
    private lab_boosterHp: Laya.Label;
    private lab_boosterCd: Laya.Label;

    private data: localData.PropData;

    constructor(_data: localData.PropData) {
        super();
        this.data = _data;
        this.skin = "home/foster/FosterDetailScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_close.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
    }

    /** 设置数据 */
    public setData(data: localData.PropData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        GameMgr.getInstance().hideTopBar();
        if (!this.data) return;
        this.box_booster.visible = this.box_cat.visible = this.box_ship.visible = false;
        let data = this.data;
        if (data.type == 0) {
            this.lab_title.text = data.shipConfig.name;
            this.lab_desc.text = data.shipConfig.des;
            this.lab_type.text = "船";
            this.box_ship.visible = true;
            if (parseInt(data.shipConfig.attack_type) == 1) {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_21.png";
            } else if (parseInt(data.shipConfig.attack_type) == 2) {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_22.png";
            } else {
                this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_23.png";
            }
            this.lab_shipHp.text = data.hp + "";
            this.lab_shipSlot.text = data.slot + "";
            this.img_icon.skin = "resource/assets/img/icon/ship/shipIcon_" + data.id + ".png";
            this.img_icon.scale(2.2, 2.2);
        } else if (data.type == 1) {
            this.lab_title.text = data.catConfig.name;
            this.lab_desc.text = data.catConfig.des;
            this.lab_type.text = "猫";
            this.box_cat.visible = true;
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
            this.img_icon.skin = 'resource/assets/img/icon/cat/catIcon_' + data.id + '.png';
            this.img_icon.scale(1.5, 1.5);
        } else {
            this.lab_title.text = data.boosterConfig.name;
            this.lab_desc.text = data.boosterConfig.des;
            this.lab_type.text = "增幅器";
            this.box_booster.visible = true;
            this.lab_boosterHp.text = data.hp + "";
            this.lab_boosterCd.text = (data.skillCD / 1000).toFixed(2) + 's';
            this.img_icon.skin = 'resource/assets/img/icon/booster/' + data.boosterConfig.uiIcon + '.png';
            this.img_icon.scale(1, 1);
        }
        this.lab_rarity.text = data.quality == 1 ? "普通" : "稀有";
        for (let i = 0, len = this.boxH_star.numChildren; i < len; i++) {
            let img = <Laya.Image>this.boxH_star.getChildAt(i);
            img.visible = data.star > i;
        }
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        GameMgr.getInstance().showTopBar();
        this.data = null;
    }
}