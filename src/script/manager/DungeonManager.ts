import * as ConfigType from "../common/GameConfigType";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import { GameData } from "../common/GameData";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";

export default class DungeonManager {
    private constructor() { };

    private static ins: DungeonManager;
    public static get instance(): DungeonManager {
        if (DungeonManager.ins == null) {
            DungeonManager.ins = new DungeonManager();
        }
        return DungeonManager.ins;
    }

    /** 当前进入关卡数据 */
    private _curLevelData: DataType.localData.LevelData;
    /** 当前进入关卡数据 */
    public set curLevelData(c) {
        this._curLevelData = c;
    }
    public get curLevelData() {
        return this._curLevelData;
    }

    /** 最大副本关卡id 暂时只显示到20011关 */
    private maxLevelId: number = 20011;

    public curLevelId: number = 20001;

    /** 获取副本关卡数据 */
    public async getLevelData() {
        let levelConfig = await ConfigManager.getInstance().getGuankaConfig();
        let posConfig = await ConfigManager.getInstance().getDungeonItemConfig();
        //这句暂时注释
        // this.maxLevelId = parseInt(Object.keys(levelConfig).pop());
        let netLevel = GameData.getInstance().level.dungeon;
        let dataArr: DataType.localData.LevelData[] = [];
        let i = 0;
        for (let key in levelConfig) {
            if (parseInt(key) <= this.maxLevelId) {
                let config = levelConfig[key];
                // console.log("关卡 >> ", config);
                let netData = netLevel[config.id];
                let data = new DataType.localData.LevelData();
                data.type = 1;
                data.id = config.id;
                data.index = i + 1;
                data.mapId = config.mapId;
                if (netData) {
                    data.surplusStar = netData.star;
                    data.isUnlock = true;
                    this.curLevelId = config.id;
                } else {
                    data.surplusStar = 3;
                    data.isUnlock = false;
                }
                if (GameData.getInstance().isTestVersion) {
                    data.isUnlock = true;
                }

                data.outGold = config.outGold;
                data.enemy = config.enemy;
                data.enemyIconLocate = config.enemyIconLocate;
                data.isCurLevel = i == Object.keys(netLevel).length - 1 ? true : false;
                data.pos = posConfig[i];
                dataArr.push(data);
            }
            i++;
        }
        return dataArr;
    }

    /** 获取一个遭遇战关卡数据 */
    public async getEncounterLevel() {
        let encounter = await ConfigManager.getInstance().getEncounterConfig();
        let configs: ConfigType.EncounterConfig[] = [];
        let playerLv = GameData.getInstance().playerData.playerLevel;
        if (playerLv >= 5) {
            playerLv = 5;
        }
        for (let i in encounter) {
            let config: ConfigType.EncounterConfig = encounter[i];
            if (config.playerLevel == playerLv) {
                configs.push(config);
            }
        }
        let randomConf = configs[Utils.getRandom(0, configs.length - 1)];

        // let levelConfig = await ConfigManager.getInstance().getGuankaConfig();
        // let config = levelConfig[randomConf.id];
        let netData = GameData.getInstance().level.encounter[randomConf.id];
        let data = new DataType.localData.LevelData();
        data.type = 2;
        data.id = randomConf.id;
        data.index = randomConf.id % 10000;
        if (netData) {
            data.surplusStar = netData.star;
        } else {
            data.surplusStar = 3;
        }
        // data.isUnlock = true;
        data.outGold = randomConf.outGold;

        data.enemy = randomConf.enemy;
        data.enemyIconLocate = randomConf.enemyIconLocate;
        return data;
    }

    /**
     * 获取副本关卡配置
     */
    public async getLevelConfig(id: number): Promise<ConfigType.GuankaConfig> {
        let levelConfig = await ConfigManager.getInstance().getGuankaConfig();
        return levelConfig[id];
        // for (let i = 0, len = levelConfig.length; i < len; i++) {
        //     if (levelConfig[i].id == id) {
        //         return levelConfig[i];
        //     }
        // }
    }

    // /** 获取关卡数据 */
    // public getLevelDataById(id: number) {
    //     let level = GameData.getInstance().level;
    //     return level[id];
    // }

    /**
     * 更新关卡星数
     * @param type 1=副本，2=遭遇战
     * @param id 
     * @param star 
     */
    public updateLevelStar(type: number, id: number, star: number) {
        if (type == 1) {
            let level = GameData.getInstance().level.dungeon[id];
            if (level) {
                level.star = star;
            } else {
                level = { star: star }
            }
            GameData.getInstance().level.dungeon[id] = level;
        } else {
            let level1 = GameData.getInstance().level.encounter[id];
            if (level1) {
                level1.star = star;
            } else {
                level1 = { star: star }
            }
            GameData.getInstance().level.encounter[id] = level1;
        }
        GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
    }

    /**
     * 判断下一个副本关卡是否已解锁,返回是否已解锁（如没解锁就解锁）
     * @param id 
     */
    public unlockLevel(id: number) {
        /** 下一关是否已解锁 */
        let isUnlock: boolean = false;
        if (id <= this.maxLevelId) {
            let level = GameData.getInstance().level.dungeon[id];
            if (level) isUnlock = true;
            if (!isUnlock) {
                GameData.getInstance().level.dungeon[id] = { star: 3 };
                GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
            }
        }
        return isUnlock;
    }
}