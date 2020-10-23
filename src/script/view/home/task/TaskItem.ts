import { localData } from "../../../common/GameDataType";
import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import GameMgr from "../../../manager/GameMgr";
import TaskManager from "../../../manager/TaskManager";
import GameEvent from "../../../common/GameEvent";
import { MiniManeger } from "../../../manager/MiniManeger";
import { GameData } from "../../../common/GameData";

/**
* 任务item
*/
export default class TaskItem extends BaseSceneUISkin {
    public className_key = "TaskItem";

    private img_prog: Laya.Image;
    private lab_prog: Laya.Label;
    private lab_desc: Laya.Label;
    private btn_get: Laya.Button;
    private btn_video: Laya.Button;
    private img_videoTip: Laya.Image;
    private img_award: Laya.Image;
    private lab_num: Laya.Label;
    private img_xian: Laya.Image;

    public data: localData.TaskData

    constructor(_data: localData.TaskData) {
        super();
        this.data = _data;
        this.skin = "home/task/TaskItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_get.addComponent(CustomScaleComponent);
        this.btn_video.addComponent(CustomScaleComponent);
    }

    protected adaptationStage() {
        this.size(1050, 150);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
        this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
    }

    /** 设置数据 */
    public setData(data: localData.TaskData) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.lab_desc.text = GameMgr.getInstance().replaceStr(data.teskDes, data.teskPar + "");
        this.lab_prog.text = data.progress + "/" + data.teskPar;
        this.img_prog.width = 525 * data.progress / data.teskPar;
        let arr = data.reward.split("|");
        let awardId = parseInt(arr[0]);
        if (awardId == 1001) {

        } else {
            this.img_award.scale(0.6, 0.6);
            this.img_award.skin = "resource/assets/img/home/top/top_tubiao_1.png";
        }
        this.lab_num.text = "X" + arr[1];
        this.btn_video.visible = data.state == 0;
        this.btn_get.visible = data.state != 0;
    }

    private onGet() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        TaskManager.instance.getTaskAward(this.data.reward);
        TaskManager.instance.updateTask(this.data.id, 0, 2);
        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TASK);
    }

    private onVideo() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        MiniManeger.instance.playViderAd({
            successFun: () => {
                GameData.getInstance().task.taskVideo -= 1;
                this.changeTask();
            },
            failFun: () => {
            },
            errorFun: () => {
            }
        });
    }

    /** 换新任务 */
    private async changeTask() {
        await TaskManager.instance.changeTask(this.data.id);
        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TASK);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
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