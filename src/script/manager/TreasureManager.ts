import { GameData } from "../common/GameData";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import GameInfoManager from "./GameInfoManager";
import { TreasureConfig } from "../common/GameConfigType";
import GameConst from "../common/GameConst";
import { GameManager } from "./GameManager";
import GameMgr from "./GameMgr";
import AwardScene from "../view/home/award/AwardScene";
import TaskManager, { TaskEnum } from "./TaskManager";
import GameEvent from "../common/GameEvent";

/**
 * 宝箱管理工具
 */
export default class TreasureManager {
    private constructor() {

    }

    private static ins: TreasureManager;
    public static get instance(): TreasureManager {
        if (TreasureManager.ins == null) {
            TreasureManager.ins = new TreasureManager();
        }
        return TreasureManager.ins;
    }

    /** 获取时间宝箱数据 */
    public async getTimeBoxData() {
        let owns = GameData.getInstance().treasure.owns;
        let dataArr: DataType.localData.TimeBoxData[] = [];
        let curTime = (new Date()).getTime();
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            let data: DataType.localData.TimeBoxData = new DataType.localData.TimeBoxData();
            data.id = own.id;
            data.uid = own.uid;
            data.state = own.state;
            data.videoJump = own.videoJump;
            data.config = await this.getTreasureConfig(own.id);
            if (own.endTime) {
                if (curTime >= own.endTime) {
                    data.state = 2;
                    data.surplusTime = 0;
                } else {
                    data.surplusTime = Math.floor((own.endTime - curTime) / 1000);
                }
            } else {
                if (GameData.getInstance().isTestVersion) {
                    data.surplusTime = 30 * 60 + 5;
                } else {
                    data.surplusTime = data.config.timeToOpen * 60;
                }
            }
            dataArr.push(data);
        }
        return dataArr;
    }

    /** 获取当前视频宝箱获得数及对应看视频次数 */
    public getCurVideoTimes(): { num: number, needTimes: number, times: number } {
        let curTime = (new Date()).getTime();
        let video = GameData.getInstance().treasure.videoBox;
        if (Utils.judgeIsOnTheSameDay(curTime, video.lastTime)) {
            let needTimes = video.num + 1;
            if (video.num >= 5) needTimes = video.num;
            return { num: video.num, needTimes: needTimes, times: video.times };
        } else {
            GameData.getInstance().treasure.videoBox.num = 0;
            GameData.getInstance().treasure.videoBox.times = 1;
            GameData.getInstance().treasure.videoBox.lastTime = curTime;
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
            return { num: 0, needTimes: 1, times: 1 };
        }
    }

    /** 看一次视频更新视频宝箱数据 */
    public updateVideoBox() {
        let video = GameData.getInstance().treasure.videoBox;
        video.times -= 1;
        if (video.times == 0) {//获得一个宝箱
            // this.getBox(160002);
            video.num += 1;
            if (video.num < 5) video.times = video.num + 1;
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                ViewManager.getInstance().showView(AwardScene, {
                    type: 2, data: [{ awardId: 160002, awardNum: 1 }], sureFun: () => {
                        this.getBox(160002);
                    }
                });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        }
        video.lastTime = (new Date()).getTime();
        GameData.getInstance().treasure.videoBox = video;
        GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
    }

    /**
     * 获得一个宝箱
     * @param id 宝箱id
     */
    public getBox(id: number) {
        if (GameData.getInstance().treasure.vacancy) {
            GameData.getInstance().treasure.baseUid++;
            GameData.getInstance().treasure.owns.push({ uid: GameData.getInstance().treasure.baseUid, id: id, state: 0, videoJump: 0, endTime: null });
            GameData.getInstance().treasure.vacancy -= 1;
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
        }
        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
    }

    /** 获取当前是否有处于倒计时状态 */
    public getIsDownTimeState() {
        let owns = GameData.getInstance().treasure.owns;
        for (let i = 0, len = owns.length; i < len; i++) {
            if (owns[i].state == 1) {
                return true;
            }
        }
        return false;
    }

    /**
     * 开启某个宝箱倒计时
     * @param uid 宝箱uid
     * @param time 宝箱倒计时总时间 s
     */
    public openBoxDownTime(uid: number, time: number) {
        if (GameData.getInstance().isTestVersion) {
            time = 30 * 60 + 5;
        }
        let owns = GameData.getInstance().treasure.owns;
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            if (own.uid == uid) {
                own.state = 1;
                own.endTime = (new Date()).getTime() + time * 1000;
                GameData.getInstance().treasure.owns[i] = own;
                break;
            }
        }
        GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
    }

    /**
     * 宝箱倒计时结束
     * @param uid 宝箱uid
     */
    public boxDownTimeEnd(uid: number) {
        let owns = GameData.getInstance().treasure.owns;
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            if (own.uid == uid) {
                own.state = 2;
                GameData.getInstance().treasure.owns[i] = own;
                break;
            }
        }
        GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
    }

    /**
     * 宝箱倒计时减少
     * @param uid 宝箱uid
     * @param time 宝箱倒计时减少时间 s
     */
    public boxDownTimeReduce(uid: number, time: number) {
        let owns = GameData.getInstance().treasure.owns;
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            if (own.uid == uid) {
                own.endTime = own.endTime - time * 1000;
                own.videoJump += 1;
                let curTime = (new Date()).getTime();
                if (curTime >= own.endTime) {
                    own.state = 2
                }
                GameData.getInstance().treasure.owns[i] = own;
                break;
            }
        }
        GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
    }

    /**
     * 删除一个宝箱
     * @param uid 宝箱uid
     */
    public deleteBox(uid: number) {
        let owns = GameData.getInstance().treasure.owns;
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            if (own.uid == uid) {
                GameData.getInstance().treasure.owns.splice(i, 1);
                GameData.getInstance().treasure.vacancy += 1;
                GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
                break;
            }
        }
    }

    /**
     * 打开宝箱
     * @param id 
     * @param uid 
     */
    public async openBox(id: number, uid?: number): Promise<{ gold: number, prop: DataType.localData.PropData[] }> {
        let config = await this.getTreasureConfig(id);
        let star;
        let lvLimit = true;
        switch (id) {
            case 169901:
                star = 1;
                break;
            case 169902:
                star = 2;
                break;
            case 169903:
                star = 3;
                break;
            case 169904:
                star = 4;
                break;
            case 169905:
                star = 5;
                break;
        }
        if (star) lvLimit = false;
        //掉落金币
        let dropGold = Utils.getRandom(config.dropGoldMin, config.dropGoldMax);
        // GameMgr.getInstance().updateBaseData(1001, dropGold);
        //掉落道具
        let pool: { dropShip?: number[], dropCat?: number[], dropBooster?: number[] } = {};
        if (config.dropShip) pool.dropShip = [config.dropShip, 0];
        if (config.dropCat) pool.dropCat = [config.dropCat, 0];
        if (config.dropBooster) pool.dropBooster = [config.dropBooster, 0];
        if (config.dropInsure) {
            let keys = Object.keys(pool);
            for (let i = 0; i < config.dropInsure; i++) {
                let index = Utils.getRandom(0, keys.length - 1);
                pool[keys[index]][0] -= 1;
                pool[keys[index]][1] += 1;
            }
        }
        console.log("打开宝箱", id, uid, pool);
        let dataArr = [];
        if (pool.dropShip) {//掉落船
            for (let i = 0, len = pool.dropShip[0]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneShip(false, star, lvLimit));
            }
            for (let i = 0, len = pool.dropShip[1]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneShip(true, star, lvLimit));
            }
        }
        if (pool.dropCat) {//掉落猫
            for (let i = 0, len = pool.dropCat[0]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneCat(false, star, lvLimit));
            }
            for (let i = 0, len = pool.dropCat[1]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneCat(true, star, lvLimit));
            }
        }
        if (pool.dropBooster) {//掉落增幅器
            for (let i = 0, len = pool.dropBooster[0]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneBooster(false, star, lvLimit));
            }
            for (let i = 0, len = pool.dropBooster[1]; i < len; i++) {
                dataArr.push(GameManager.instance.getRandomOneBooster(true, star, lvLimit));
            }
        }
        if (uid) {
            this.deleteBox(uid);
            TaskManager.instance.updateTask(TaskEnum.TASK_2012, 1);
        }
        GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
        return { gold: dropGold, prop: this.getAwardPropData(dataArr) };
    }

    public getAwardPropData(arr: any[]): DataType.localData.PropData[] {
        let dataArr: DataType.localData.PropData[] = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            let own = arr[i];
            let data = new DataType.localData.PropData();
            let id = parseInt(own.id);
            data.uid = own.uid;
            data.id = id;
            data.type = own.type;
            data.star = own.star;
            data.level = own.level;
            data.quality = own.quality;
            data.exp = own.exp;
            data.hp = GameManager.instance.calAttr(own.initialHp, own.growthHp, own.level, own.quality);
            if (id >= 110001 && id < 120001) {//船
                data.slot = own.slot;
                data.hasShield = own.hasShield;
                data.shieldId = own.shieldId;
                data.shipConfig = ConfigManager.getInstance().shipConfigs[id];
            } else if (id >= 120001 && id < 130001) {//猫
                data.atk = GameManager.instance.calAttr(own.initialAtt, own.growthAtt, own.level, own.quality);
                data.crit = GameManager.instance.calAttr(own.initialCrit, own.growthCrit, own.level, own.quality);
                data.isNormal = own.isNormal;
                data.catConfig = ConfigManager.getInstance().catConfigs[id];
            } else if (id >= 140001 && id < 150001) {//增幅器
                data.skillCD = own.skillCD;
                data.boosterConfig = ConfigManager.getInstance().boosterConfigs[id];
            }
            dataArr.push(data);
        }
        return dataArr;
    }

    /**
     * 获取宝箱配置
     * @param boxId 宝箱id
     */
    public async getTreasureConfig(boxId: number): Promise<TreasureConfig> {
        let config = await ConfigManager.getInstance().getTreasureConfig();
        return config[boxId];
        // for (let i in config) {
        //     if (config[i].ID == boxId) {
        //         return config[i];
        //     }
        // }
    }

    public async getStoreData() {
        let dataArr = [];
        //时间宝箱
        dataArr.push({ type: 1 });
        //转盘
        dataArr.push({ type: 2 });
        //商品
        let configs = await ConfigManager.getInstance().getStoreConfig();
        for (let i = 0, len = configs.length; i < len; i++) {
            let config = configs[i];
            if (GameData.getInstance().isTestVersion) {
                dataArr.push({ type: 3, goods: config });
            } else {
                let box = await this.getTreasureConfig(config.itemID);
                if (box.type < 99) {
                    dataArr.push({ type: 3, goods: config });
                }
            }
        }
        return dataArr;
    }
}
window['TreasureManager'] = TreasureManager;