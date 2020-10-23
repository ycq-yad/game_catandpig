import { localData } from "../../../common/GameDataType";

/**
* 签到item
*/
export default class SignItem extends BaseSceneUISkin {
    public className_key = "SignItem";

    private img_bg: Laya.Image;
    private lab_title: Laya.Label;
    private img_icon: Laya.Image;
    private lab_num: Laya.Label;
    private img_light: Laya.Image;
    private img_signed: Laya.Image;

    public data: localData.SignData

    constructor(_data: localData.SignData) {
        super();
        this.data = _data;
        this.skin = "home/sign/SignItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(215, 227);
    }

    public onAddStage() {
        // console.log("SignItem >>>>>>> onAddStage", this.isCreate);
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 设置数据 */
    public setData(data: localData.SignData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.lab_title.text = data.name;
        this.lab_num.text = data.reward[0].num + "";
        this.img_bg.skin = data.canSign ? "resource/assets/img/home/sign/sign_diban_4.png" : "resource/assets/img/home/sign/sign_diban_3.png";
        this.img_light.visible = data.canSign;
        this.img_signed.visible = data.signed;
        let awardId = data.reward[0].type;
        // let route = await GameManager.instance.getIconUrlById(awardId);
        if (awardId < 10000) {//基础物品
            if (awardId == 1001) {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
            } else {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
            }
        }
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.data = null;
    }
}