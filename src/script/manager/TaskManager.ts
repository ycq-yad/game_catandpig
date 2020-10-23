import { GameData } from "../common/GameData";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import * as ConfigType from "../common/GameConfigType";
import GameEvent from "../common/GameEvent";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import GameMgr from "./GameMgr";

export enum TaskEnum {
    /** 出售船 */
    TASK_2001 = 2001,
    /** 出售猫 */
    TASK_2002,
    /** 出售增幅器 */
    TASK_2003,
    /** 使用增幅器 */
    TASK_2004,
    /** 使用反舰喵咪攻击 */
    TASK_2005,
    /** 使用对空喵咪攻击 */
    TASK_2006,
    /** 使用反潜猫咪攻击 */
    TASK_2007,
    /** 击败任意猪 */
    TASK_2008,
    /** 挑战副本 */
    TASK_2009,
    /** 进行猎猪 */
    TASK_2010,
    /** 进行帆船赛 */
    TASK_2011,
    /** 开启时长宝箱 */
    TASK_2012,
    /** 使用转盘 */
    TASK_2013,
    /** 升级船、猫咪或增幅器 */
    TASK_2014
}

export default class TaskManager {
    private constructor() {

    }

    private static ins: TaskManager;
    public static get instance(): TaskManager {
        if (TaskManager.ins == null) {
            TaskManager.ins = new TaskManager();
        }
        return TaskManager.ins;
    }

    /** 惊喜宝箱需要完成任务次数 */
    public surpriseTimes = 10;

    public initTaskData() {
        return new Promise(async res => {
            let jdData = GameData.getInstance().task;
            let curTime = (new Date()).getTime();
            let isOneDay = Utils.judgeIsOnTheSameDay(jdData.lastTime, curTime);
            if (isOneDay) {
                res();
            } else {
                let taskConfigs = await ConfigManager.getInstance().getTaskConfig();
                let newArr = GameMgr.getInstance().getArrayRandomItem(taskConfigs, 3);
                let jd = [];
                for (let i = 0, len = newArr.length; i < len; i++) {
                    let task = newArr[i];
                    let data = {
                        id: task.taskID,
                        state: 0,
                        count: 0,
                        locked: false
                    }
                    jd.push(data);
                }
                GameData.getInstance().task.taskInfo = jd;
                GameData.getInstance().task.lastTime = curTime;
                // GameData.getInstance().task.taskTimes = 0;
                GameData.getInstance().task.surpriseed = false;
                GameData.getInstance().task.taskVideo = 2;
                // GameData.getInstance().task.count = { sweep: 0, beat: 0, costGold: 0, compose: 0, getGold: 0 };
                GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
                res();
            }
        });
    }

    public async getTaskData(): Promise<DataType.localData.TaskData[]> {
        let task = GameData.getInstance().task;
        let jd = task.taskInfo.filter(v => v.state < 2);
        // let jd = GameData.getInstance().task.taskInfo;
        let dataArr: DataType.localData.TaskData[] = [];
        let canRecieveTask = false;
        for (let i = 0, len = jd.length; i < len; i++) {
            let taskJd = jd[i];
            let taskConfig = await this.getTaskConfig(taskJd.id);
            let data: DataType.localData.TaskData = new DataType.localData.TaskData();
            data.id = taskJd.id;
            data.teskDes = taskConfig.tsakDes;
            data.teskPar = taskConfig.parValue;
            data.reward = taskConfig.reward;
            data.progress = taskJd.count;
            data.state = taskJd.state;
            if (data.state == 1) {
                canRecieveTask = true
            }
            data.locked = taskJd.locked;
            data.videoTimes = task.taskVideo;
            dataArr.push(data);
        }
        EventMgr.getInstance().sendEvent(GameConst.CanRecieveTask, canRecieveTask);
        return dataArr;
    }



    /**
     * 换一个新任务
     * @param taskId 待更换任务id
     */
    public changeTask(taskId: number) {
        return new Promise(async res => {
            let taskConfigs = await ConfigManager.getInstance().getTaskConfig();
            let tasks = GameData.getInstance().task.taskInfo;
            let newArr: ConfigType.TaskConfig[] = [];
            for (let i = 0, len = taskConfigs.length; i < len; i++) {
                let config = taskConfigs[i];
                let ishave = false;
                for (let j = 0; j < tasks.length; j++) {
                    let task = tasks[j];
                    if (task.id == config.taskID) {
                        ishave = true;
                        break;
                    }
                }
                if (!ishave) newArr.push(config);
            }
            let arrIndex = Math.floor(Math.random() * newArr.length);
            let config = newArr[arrIndex];
            for (let j = 0; j < tasks.length; j++) {
                let task = tasks[j];
                if (task.id == taskId) {
                    task.id = config.taskID;
                    task.state = 0;
                    task.count = 0;
                    task.locked = false;
                    break;
                }
            }
            GameData.getInstance().task.taskInfo = tasks;
            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
            res();
        });
    }

    /**
     * 获取任务配置
     * @param taskId 任务id
     */
    private async getTaskConfig(taskId: number): Promise<ConfigType.TaskConfig> {
        let config = await ConfigManager.getInstance().getTaskConfig();
        for (let i in config) {
            if (config[i].taskID == taskId) {
                return config[i];
            }
        }
    }

    /**
     * 领取任务奖励
     * @param award 
     */
    public getTaskAward(award: string) {
        let arr = award.split("|");
        let awardId = parseInt(arr[0]);
        if (awardId < 10000) {//基础物品
            GameMgr.getInstance().updateBaseData(awardId, parseInt(arr[1]));
        }
        // EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
        // GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
    }

    /** 
     * 更新任务进度
     * @param id 任务id
     * @param num 任务计数
     * @param state 任务状态 0：未完成；1：已完成未领取奖励；2：已完成已领取奖励（领取任务奖励or锁定任务时传入2）
     */
    public async updateTask(id: number, num: number, state?: number) {
        let task = GameData.getInstance().task;
        if (state) {//领奖励时
            for (let index = 0; index < task.taskInfo.length; index++) {
                let jd = task.taskInfo[index];
                if (jd.id == id) {
                    if (jd.state == 2) return;
                    jd.state = state;
                    jd.locked = true;
                    break;
                }
            }
        } else {
            for (let index = 0; index < task.taskInfo.length; index++) {
                let jd = task.taskInfo[index];
                if (jd.id == id && jd.state == 0) {
                    jd.count += num;
                    let taskConfig = await this.getTaskConfig(jd.id);
                    if (jd.count >= taskConfig.parValue) {
                        jd.state = 1;
                        task.taskTimes += 1;
                    }
                    break;
                }
            }
        }
        GameData.getInstance().task = task;
        GameData.getInstance().task.lastTime = (new Date()).getTime();
        GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
    }
}
window['TaskManager'] = TaskManager;