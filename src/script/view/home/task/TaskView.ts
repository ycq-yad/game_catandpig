import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import TaskItem from "./TaskItem";
import TaskManager from "../../../manager/TaskManager";
import { GameData } from "../../../common/GameData";
import GameEvent from "../../../common/GameEvent";
import GameMgr from "../../../manager/GameMgr";
import TreasureManager from "../../../manager/TreasureManager";
import AwardScene from "../award/AwardScene";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";

/**
 * 任务界面
 */
export default class TaskView extends BaseSceneUISkinPopView {
    public className_key = "TaskView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_prog: Laya.Image;
    private lab_prog: Laya.Label;
    private img_light: Laya.Image;
    private img_award: Laya.Image;
    private box_task: Laya.Box;
    private box_complete: Laya.Box;
    private btn_close: Laya.Button;

    constructor() {
        super();
        this.skin = "home/task/TaskScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.box_task.removeChildren();
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
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_TASK, this, this.initView);
    }

    private initView() {
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        this.refreshAward();
        this.refreshUI();
    }

    private refreshAward() {
        this.img_light.visible = false;
        this.img_award.visible = true;
        this.img_award.off(Laya.Event.CLICK, this, this.onAward);
        let task = GameData.getInstance().task;
        this.lab_prog.text = task.taskTimes + "/" + TaskManager.instance.surpriseTimes;
        if (task.taskTimes > TaskManager.instance.surpriseTimes) {
            this.img_prog.width = 600;
        } else {
            this.img_prog.width = 600 * task.taskTimes / TaskManager.instance.surpriseTimes;
        }
        if (task.surpriseed) {
            this.img_award.visible = this.img_light.visible = false;
        } else {
            if (task.taskTimes >= TaskManager.instance.surpriseTimes) {
                this.img_light.visible = true;
                this.img_award.on(Laya.Event.CLICK, this, this.onAward);
            }
        }
    }

    private async refreshUI() {
        let dataArr = await TaskManager.instance.getTaskData();
        console.log("TaskView >>>>>>> initView", dataArr);
        // this.taskData = dataArr;
        let len = dataArr.length;
        if (len) {
            this.box_complete.visible = false;
            this.box_task.visible = true;
            for (let i = 0; i < 3; i++) {
                let data = dataArr[i];
                let item = <TaskItem>this.box_task.getChildAt(i);
                if (data) {
                    if (item) {
                        item.setData(data);
                    } else {
                        item = new TaskItem(data);
                        item.y = i * 155;
                        this.box_task.addChild(item);
                    }
                } else {
                    if (item) item.removeSelf();
                }
            }
        } else {
            this.box_task.visible = false;
            this.box_complete.visible = true;
        }
    }

    private onAward() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["award", "propPublic"], async () => {
            let data = await TreasureManager.instance.openBox(160105);
            let fun = () => {
                GameMgr.getInstance().updateBaseData(1001, data.gold);
                ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop });
            }
            ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: () => { fun() } });
            // this.img_award.visible = this.img_light.visible = false;
            GameData.getInstance().task.taskTimes -= TaskManager.instance.surpriseTimes;
            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
            this.refreshAward();
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.img_award.off(Laya.Event.CLICK, this, this.onAward);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TASK, this, this.initView);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
    }
}