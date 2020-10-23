import GameMgr from "../../manager/GameMgr";
import GameEvent from "../../common/GameEvent";
import StoreScene from "./store/StoreScene";
import { GameData } from "../../common/GameData";
import SoundManager, { SoundConst } from "../../manager/SoundManager";

/**
 * 顶栏
 */
export class PlayerTopScene extends BaseSceneUISkin {
    className_key = "PlayerTopScene";
    public constructor() {
        super();
        this.skin = "home/PlayerTopScene.json";
    }

    private txt_nickname: Laya.Label;
    private txt_grade: Laya.Label;
    private img_gold: Laya.Box;
    private img_diamond: Laya.Box;
    private btn_add: Laya.Button;
    private img_num1: Laya.Image;
    private img_point: Laya.Image;
    private img_num2: Laya.Image;

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_add.addComponent(CustomScaleComponent);
    }

    protected adaptationStage() {
        this.size(1920, 170);

    }

    public onAddStage() {
        if (this.isCreate) {
            // console.log("PlayerTopScene >>> onAddStage", this);
            this.initView();
            this.addEvent();
        }
    }

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
    }

    /** 增加事件监听 */
    private addEvent() {
        this.btn_add.on(Laya.Event.CLICK, this, this.onAdd);
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_TOP, this, this.updateTopInfo);
    }

    /** 初始化页面 */
    private initView() {
        this.txt_nickname.overflow = 'hidden';
        this.updateTopInfo();
        if (GameData.getInstance().isConVersion) {
            this.btn_add.visible = false;
        }
    }

    private updateTopInfo() {
        // this.img_gold.removeChildren();
        let data = GameMgr.getInstance().getTopInfo();
        this.txt_nickname.text = Utils.cutOutStr(data.nick, 6);
        // console.log("111", this.txt_nickname);
        this.txt_grade.text = data.currLevel + "";
        if (data.currGold < 1000000) {
            this.img_gold.scale(1, 1);
        } else if (data.currGold >= 1000000 && data.currGold < 10000000) {
            this.img_gold.scale(0.85, 0.85);
        } else {
            this.img_gold.scale(0.7, 0.7);
        }
        BitmapLabelUtils.setLabel(this.img_gold, data.currGold + "", "resource/assets/img/home/top/top_sz/", 0, ".png");
        if (data.currDids < 100000) {
            this.img_diamond.scale(1, 1);
        } else if (data.currDids >= 100000 && data.currDids < 1000000) {

            this.img_diamond.scale(0.85, 0.85);
        } else {
            this.img_diamond.scale(0.7, 0.7);
        }
        BitmapLabelUtils.setLabel(this.img_diamond, data.currDids + "", "resource/assets/img/home/top/top_sz/", 0, ".png");
        let numArr = (data.currCombat + "").split(".");
        this.img_num1.width = 42;
        if (parseInt(numArr[0]) > 999) {
            this.img_num1.width = 42 * 4;
        } else if (parseInt(numArr[0]) > 99) {
            this.img_num1.width = 42 * 3;
        } else if (parseInt(numArr[0]) > 9) {
            this.img_num1.width = 42 * 2;
        }
        if (numArr.length < 2) {
            this.img_point.visible = this.img_num2.visible = false;
            BitmapLabelUtils.setLabel(this.img_num1, numArr[0], "resource/assets/img/home/top/top_sz/", 0, ".png");
        } else {
            this.img_point.visible = this.img_num2.visible = true;
            this.img_num2.width = 42;
            if (parseInt(numArr[0]) > 999) {
                this.img_num2.width = 42 * 4;
            } else if (parseInt(numArr[0]) > 99) {
                this.img_num2.width = 42 * 3;
            } else if (parseInt(numArr[0]) > 9) {
                this.img_num2.width = 42 * 2;
            }
            BitmapLabelUtils.setLabel(this.img_num1, numArr[0], "resource/assets/img/home/top/top_sz/", 0, ".png");
            BitmapLabelUtils.setLabel(this.img_num2, numArr[1], "resource/assets/img/home/top/top_sz/", 0, ".png");
        }
    }

    private onAdd() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["store"], () => {
            ViewManager.getInstance().showView(StoreScene);
            GameMgr.getInstance().enableTopBar(false);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private removeEvent() {
        this.btn_add.off(Laya.Event.CLICK, this, this.onAdd);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TOP, this, this.updateTopInfo);
    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }

    public removeSelf() {
        return super.removeSelf();
    }
}