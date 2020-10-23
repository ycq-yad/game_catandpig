import { localData } from "../../../common/GameDataType";
import DungeonCampScene from "./DungeonCampScene";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";

/**
* 关卡item
*/
export default class DungeonItem extends BaseSceneUISkin {
    public className_key = "DungeonItem";

    private icon_hand: Laya.Image;
    private img_bg: Laya.Image;
    private box_num: Laya.Box;
    private box_awardStar: Laya.Box;
    private img_mark: Laya.Image;

    public data: localData.LevelData;

    constructor(_data: localData.LevelData) {
        super();
        this.data = _data;
        this.skin = "game/dungeon/DungeonItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(200, 200);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 设置数据 */
    public setData(data: localData.LevelData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.CLICK, this, this.onStartGame);
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.pos(data.pos.x, data.pos.y);
        // this.box_num.width = data.index < 10 ? 50 : 100;
        BitmapLabelUtils.setLabel(this.box_num, data.index + "", "resource/assets/img/game/dungeon/dungeon_sz/", 0, ".png", "center");
        this.icon_hand.visible = false
        if (data.isCurLevel) {
            this.img_mark.visible = true;
            this.img_bg.skin = "resource/assets/img/game/dungeon/dungeon_guanqia_2.png";
            if (data.index == 1 || data.index == 2) {
                this.icon_hand.visible = true;
                Laya.Tween.clearAll(this.icon_hand);
                this.showGuide();
            }
        } else {
            this.img_mark.visible = false;
            Laya.Tween.clearAll(this.icon_hand);
            this.img_bg.skin = data.isUnlock ? "resource/assets/img/game/dungeon/dungeon_guanqia_1.png" : "resource/assets/img/game/dungeon/dungeon_guanqia_3.png";
        }

        for (let i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
            let img = <Laya.Image>this.box_awardStar.getChildByName("star" + (i + 1));
            if (data.isUnlock) {
                img.disabled = false;
                (<Laya.Image>img.getChildAt(0)).visible = data.surplusStar > i;
            } else {
                img.disabled = true;
                (<Laya.Image>img.getChildAt(0)).visible = true;
            }
        }
    }

    public showGuide() {
        this.icon_hand.x=200;
        this.icon_hand.y=200;
        let xs = this.icon_hand.x - 50;
        let ys = this.icon_hand.y - 50;
        Laya.Tween.to(this.icon_hand, { x: xs, y: ys }, 500, null, Laya.Handler.create(this.icon_hand, () => {
            Laya.Tween.to(this.icon_hand, { x: xs + 50, y: ys + 50 }, 500, null, Laya.Handler.create(this.icon_hand, () => {
                this.showGuide();
            }));
        }));
    }
    private onStartGame() {
        if (!this.data.isUnlock) return;
        console.log("进入副本", this.data);
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        ViewManager.getInstance().showView(DungeonCampScene, this.data);
    }

    /** 移除事件 */
    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.onStartGame);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        Laya.Tween.clearAll(this.icon_hand);
        super.onRemoved();
        this.removeEvent();
        this.data = null;
    }
}