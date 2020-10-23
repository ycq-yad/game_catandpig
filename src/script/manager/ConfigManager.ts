
import * as ConfigType from "../common/GameConfigType";
import { GameManager } from "./GameManager";
import { MiniManeger } from "./MiniManeger";

/**
 * 配置管理
 */
export default class ConfigManager {

    private static instance: ConfigManager;

    public static getInstance(): ConfigManager {
        if (!this.instance) {
            this.instance = new ConfigManager();
        }
        return this.instance;
    }

    private constructor() { };

    private readonly URL = "resource/assets/configs/";

    // 读取配置表 ----------------------------------------------------------------------------------

    /** 签到配置 */
    private signConfig: ConfigType.SignConfig[];
    /** 获取签到配置表 */
    public async getSignConfig(): Promise<ConfigType.SignConfig[]> {
        if (!this.signConfig) {
            this.signConfig = <ConfigType.SignConfig[]>(await ResUtil.getIntance().getAsyncRES("SignConfig_json"));
        }
        return this.signConfig;
    }

    /** 任务配置 */
    private taskConfig: ConfigType.TaskConfig[];
    /** 获取任务配置表 */
    public async getTaskConfig(): Promise<ConfigType.TaskConfig[]> {
        if (!this.taskConfig) {
            this.taskConfig = <ConfigType.TaskConfig[]>(await ResUtil.getIntance().getAsyncRES("TaskConfig_json"));
        }
        return this.taskConfig;
    }

    /** 宝箱配置 */
    private treasureConfig: any;
    /** 获取宝箱配置表 */
    public async getTreasureConfig(): Promise<any> {
        if (!this.treasureConfig) {
            // this.treasureConfig = <ConfigType.TreasureConfig[]>(await ResUtil.getIntance().getAsyncRES("TreasureConfig_json"));
            this.treasureConfig = this.arrToObjById(<ConfigType.TreasureConfig[]>(await ResUtil.getIntance().getAsyncRES("TreasureConfig_json")));
        }
        return this.treasureConfig;
    }

    /** 关卡配置 */
    private guankaConfig: any;
    /** 获取关卡配置表 */
    public async getGuankaConfig(): Promise<any> {
        if (!this.guankaConfig) {
            // this.guankaConfig = <ConfigType.GuankaConfig[]>(await GameManager.instance.loadCongigs(this.URL + "GuankaConfig.json"));
            this.guankaConfig = this.arrToObjById(<ConfigType.GuankaConfig[]>(await GameManager.instance.loadCongigs(this.URL + "GuankaConfig.json")));
        }
        return this.guankaConfig;
    }

    /** 遭遇战配置 */
    private encounterConfig: ConfigType.EncounterConfig[];
    /** 获取遭遇战配置表 */
    public async getEncounterConfig(): Promise<ConfigType.EncounterConfig[]> {
        if (!this.encounterConfig) {
            this.encounterConfig = <ConfigType.EncounterConfig[]>(await GameManager.instance.loadCongigs(this.URL + "encounter.json"));
        }
        return this.encounterConfig;
    }

    private dungeonItemConfig: ConfigType.DungeonItemConfig[];
    /**关卡itme坐标配置 */
    public async getDungeonItemConfig(): Promise<ConfigType.DungeonItemConfig[]> {
        if (!this.dungeonItemConfig) {
            this.dungeonItemConfig = <ConfigType.DungeonItemConfig[]>(await GameManager.instance.loadCongigs(this.URL + "DungeonItemConfig.json"));
        }
        return this.dungeonItemConfig;
    }

    /** 帆船赛对手配置 */
    private regattaConfig: any;
    /** 获取帆船赛对手配置表 */
    public async getRegattaConfig(): Promise<any> {
        if (!this.regattaConfig) {
            // this.regattaConfig = <ConfigType.RegattaConfig[]>(await ResUtil.getIntance().getAsyncRES("RegattaConfig_json"));
            this.regattaConfig = this.arrToObjById(<ConfigType.RegattaConfig[]>(await ResUtil.getIntance().getAsyncRES("RegattaConfig_json")));
        }
        return this.regattaConfig;
    }

    /** 帆船赛奖励配置 */
    private regattaAwardConfig: ConfigType.RegattaAwardConfig[];
    /** 获取帆船赛奖励配置 */
    public async getRegattaAwardConfig(): Promise<ConfigType.RegattaAwardConfig[]> {
        if (!this.regattaAwardConfig) {
            this.regattaAwardConfig = <ConfigType.RegattaAwardConfig[]>(await GameManager.instance.loadCongigs(this.URL + "RegattaAward.json"));
        }
        return this.regattaAwardConfig;
    }

    /** 帆船赛赛区配置 */
    private regattaZoneConfig: ConfigType.RegattaZoneConfig[];
    /** 获取帆船赛赛区配置 */
    public async getRegattaZoneConfig(): Promise<ConfigType.RegattaZoneConfig[]> {
        if (!this.regattaZoneConfig) {
            this.regattaZoneConfig = <ConfigType.RegattaZoneConfig[]>(await GameManager.instance.loadCongigs(this.URL + "RegattaZone.json"));
        }
        return this.regattaZoneConfig;
    }

    /** 商店配置 */
    private storeConfig: ConfigType.StoreConfig[];
    /** 获取商店配置 */
    public async getStoreConfig(): Promise<ConfigType.StoreConfig[]> {
        if (!this.storeConfig) {
            this.storeConfig = <ConfigType.StoreConfig[]>(await GameManager.instance.loadCongigs(this.URL + "StoreConfig.json"));
        }
        return this.storeConfig;
    }

    /** 转盘配置 */
    private lotteryConfig: ConfigType.LotteryConfig[];
    /** 获取转盘配置 */
    public async getLotteryConfig(): Promise<ConfigType.LotteryConfig[]> {
        if (!this.lotteryConfig) {
            this.lotteryConfig = <ConfigType.LotteryConfig[]>(await GameManager.instance.loadCongigs(this.URL + "LotteryConfig.json"));
        }
        return this.lotteryConfig;
    }

    private _inviteConfig: ConfigType.InviteConfig[];
    public set inviteConfig(value: ConfigType.InviteConfig[]) {
        this._inviteConfig = value;
    }
    public get inviteConfig() {
        return this._inviteConfig;
    }

    private _skinConfig: ConfigType.SkinConfig[];
    public set skinConfig(value: ConfigType.SkinConfig[]) {
        this._skinConfig = value;
    }
    public get skinConfig() {
        return this._skinConfig;
    }

    /**
     * 初始化配置文件
     */
    public initConfigs() {
        return new Promise(async resolve => {
            // let conf = await GameManager.instance.loadCongigs("configs/configs.json");
            // // console.log("111", conf);
            // this._inviteConfig = conf.invite;
            // this.signConfig = conf.sign;
            // MiniManeger.instance.shareInfo = conf.shareInfo;
            await this.initMainConfigs();
            resolve();
        });
    }

    public async initMainConfigs(): Promise<any> {
        let url = 'resource/assets/configs/';
        this.catConfigs = this.arrToObjById(await GameManager.instance.loadCongigs(url + "cat.json"));
        this.shipConfigs = this.arrToObjById(await GameManager.instance.loadCongigs(url + "ship.json"));
        this.boosterConfigs = this.arrToObjById(await GameManager.instance.loadCongigs(url + "booster.json"));
        this.playerExpJson = await GameManager.instance.loadCongigs(url + 'exp.json');
        this.playerStarExpJson = await GameManager.instance.loadCongigs(url + 'starExp.json');
        this.starJson = await GameManager.instance.loadCongigs(url + 'star.json');
    }

    public async initGameConfigs(): Promise<any> {
        let url = 'resource/assets/configs/';
        if (!this.bulletConfigs) {
            this.bulletConfigs = this.arrToObjById(await GameManager.instance.loadCongigs(url + "bullet.json"));
        }
        if (!this.pigConfigs) {
            this.pigConfigs = this.arrToObjById(await GameManager.instance.loadCongigs(url + "pig.json"));
        }
        if (!this.starConfigs) {
            this.starConfigs = await GameManager.instance.loadCongigs(url + "StarConfig.json");
        }
    }

    public arrToObjById(arr: Array<any>): any {
        let obj = {};
        if (arr == null) return obj;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id) {//存在id的时候
                obj[arr[i].id] = arr[i]
            } else if (arr[i].ID) {
                obj[arr[i].ID] = arr[i]
            } else {//存在其他

            }
        }
        return obj
    }

    public starJson: any;
    public playerExpJson: Array<{ "level": number, "exp": number }> = null
    public playerStarExpJson: Array<{ "star": number, "basicExp": number, "etrExpMod": number }> = null
    /**
     * 星级配置
     */
    public starConfigs: ConfigType.StarConfig[] = null;
    /**
     * 猫的配置
     * CatConfig
     */
    public catConfigs: any = null;
    /**
     * 船的配置
     * ShipConfig
     */
    public shipConfigs = null;
    /**
     * 增幅器的配置
     * BoosterConfig
     */
    public boosterConfigs = null;
    /**
     * 猪的配置
     */
    public pigConfigs = null;
    /**
     * 子弹配置
     */
    public bulletConfigs = null;

    public CaptainInfo = [
        { "playerLevel": 1, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
        { "playerLevel": 2, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
        { "playerLevel": 3, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
        { "playerLevel": 4, "captainAtt": 20, "captainHp": 60, "captainCrit": 600 },
        { "playerLevel": 5, "captainAtt": 30, "captainHp": 80, "captainCrit": 850 },
        { "playerLevel": 6, "captainAtt": 40, "captainHp": 100, "captainCrit": 1000 },

    ]
}
