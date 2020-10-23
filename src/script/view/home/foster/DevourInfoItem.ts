import { localData } from "../../../common/GameDataType";
import ConfigManager from "../../../manager/ConfigManager";
import FosterDetailView from "../foster/FosterDetailView";

/**
* 吞噬信息显示
*/
export default class DevourInfoItem extends BaseSceneUISkin {
    public className_key = "DevourInfoItem";

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

    private data: { addLv: number, addExp: number, needExp: number, endExp: number, addAttrObj: any, type: number };

    constructor(_data: { addLv: number, addExp: number, needExp: number, endExp: number, addAttrObj: any, type: number }) {
        super();
        this.data = _data;
        this.skin = "home/foster/DevourInfoItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
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
    }

    /** 设置数据 */
    public setData(data: { addLv: number, addExp: number, needExp: number, endExp: number, addAttrObj: any, type: number }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private initView() {
        if (!this.data) return;
        console.log("DevourInfoItem  >>> ", this.data);
        this.boxH_booster.visible = this.boxH_cat.visible = this.boxH_ship.visible = false;
        let data = this.data;
        if (data.addLv) {
            this.lab_lv.text = "+" + data.addLv;
            if (data.type == 0) {
                this.boxH_ship.visible = true;
                this.lab_shipHp.text = "+" + data.addAttrObj.addHp;
            } else if (data.type == 1) {
                this.boxH_cat.visible = true;
                this.lab_catAtk.text = "+" + data.addAttrObj.addAtk;
                this.lab_catHp.text = "+" + data.addAttrObj.addHp;
                this.lab_catCrit.text = "+" + (data.addAttrObj.addCrit / 100) + "%";
            } else {
                this.boxH_booster.visible = true;
                this.lab_boosterHp.text = "+" + data.addAttrObj.addHp;
            }
        } else {
            this.lab_lv.text = "";
        }
        if (data.needExp) {
            this.img_jd.width = 408 * (data.endExp / data.needExp);
        } else {
            this.img_jd.width = 408;
        }
    }

    /** 移除事件 */
    private removeEvent() {

    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
    }
}