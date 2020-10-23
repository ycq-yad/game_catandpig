import { localData } from "../../../common/GameDataType";
import { GameManager, GameModel } from "../../../manager/GameManager";
import DungeonManager from "../../../manager/DungeonManager";
import GameEvent from "../../../common/GameEvent";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";

/**
* 帆船赛对手/帆船赛结算 界面item
*/
export default class FosterItem extends BaseSceneUISkin {
    public className_key = "FosterItem";

    private img_select: Laya.Image;
    private img_bg: Laya.Image;
    private box_player: Laya.Box;
    private img_rank: Laya.Image;
    private lab_rank: Laya.Label;
    private img_state: Laya.Image;
    private lab_name: Laya.Label;
    private lab_combat: Laya.Label;
    private box_award: Laya.Box;
    private img_icon: Laya.Image;

    /**
     * type=1:对手界面，type=2:结算界面
     */
    public data: { type: number, data: localData.RankData };

    constructor() {
        super();
        // this.data = _data;
        this.skin = "home/foster/FosterItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(620, 74);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 设置数据 */
    public setData(data: { type: number, data: localData.RankData }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.on(Laya.Event.CLICK, this, this.onSelect);
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data.data;
        this.img_state.visible = this.img_select.visible = false;
        this.img_bg.skin = data.index % 2 == 0 ? "" : "resource/assets/img/home/rank/rank_diban_8.png";
        this.img_rank.skin = "";
        if (data.reward) {
            this.box_player.visible = false;
            this.box_award.visible = true;
            this.img_state.skin = "resource/assets/img/home/rank/rank_gou.png";
            this.showReward(data.reward);
        } else {
            this.box_award.visible = false;
            this.box_player.visible = true;
            this.lab_rank.text = data.rank + "";
            this.lab_name.text = data.name + "";
            this.lab_combat.text = data.combat + "";
            if (data.isSelf) {
                this.img_bg.skin = "resource/assets/img/home/rank/rank_diban_7.png";
            }
            if (data.rank <= 3) {
                this.img_rank.skin = "resource/assets/img/home/rank/rank_dengji_" + data.rank + ".png"
            }
            this.img_state.skin = "resource/assets/img/home/rank/rank_cha.png";
        }
        if (data.isBeat && !data.isSelf) {
            this.img_state.visible = true;
            this.lab_rank.text = "";
        }
        if (this.data.type == 1 && data.select) {
            this.img_select.visible = true;
        }
    }

    private showReward(reward: string) {
        let id = parseInt(reward.split("|")[0]);
        if (id < 10000) {//基础物品
            this.img_icon.scale(0.7, 0.7);
            if (id == 1001) {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
            } else {
                this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
            }
        } else {//随机道具
            this.img_icon.scale(1, 1);
            if (id == 160201) {
                this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_14.png";
            } else if (id == 160202) {
                this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_13.png";
            } else {
                this.img_icon.skin = "";
            }
        }
    }

    private onSelect() {
        if (!this.data || this.data.type == 2 || this.data.data.select) return
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        EventMgr.getInstance().sendEvent(GameEvent.SELECT_RANK, this.data.data);
    }

    public showSelect(show: boolean) {
        this.data.data.select = show;
        this.img_select.visible = show;
    }

    /** 移除事件 */
    private removeEvent() {
        this.off(Laya.Event.CLICK, this, this.onSelect);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.data = null;
    }
}