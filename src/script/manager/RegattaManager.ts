import * as ConfigType from "../common/GameConfigType";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import { GameData } from "../common/GameData";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import { GameManager } from "./GameManager";
import RegattaOverScene from "../view/game/regatta/RegattaOverScene";
import TreasureManager from "./TreasureManager";
import GameEvent from "../common/GameEvent";

/** 帆船赛管理类 */
export default class RegattaManager {
    private constructor() { };

    private static ins: RegattaManager;
    public static get instance(): RegattaManager {
        if (RegattaManager.ins == null) {
            RegattaManager.ins = new RegattaManager();
        }
        return RegattaManager.ins;
    }

    /** 最大赛区数 */
    private maxZone: number;

    /** 帆船赛赛区对手配置 */
    private regattaConfig: any;
    /** 
     * 根据赛区获取对手配置
     * @param zoneNo
     */
    public async getOpponentData(zoneNo: number) {
        // if (!this.regattaConfig) {
        // this.regattaConfig = await GameManager.instance.loadCongigs("resource/assets/configs/MatchPlayer" + zoneNo + ".json");
        let fileName = (40000 + zoneNo) + ".json";
        this.regattaConfig = await GameManager.instance.loadCongigs("resource/assets/map/" + fileName);
        // }
        // let oppConfig = await ConfigManager.getInstance().getRegattaConfig();
        // let dataArr: ConfigType.RegattaConfig[] = [];
        // for (let key in oppConfig) {
        //     let config = oppConfig[key];
        //     if (config.zoneNo == zoneNo) {
        //         dataArr.push(config);
        //     }
        // }
        return this.regattaConfig;
    }

    /** 获取赛区数据 */
    public async getZoneData() {
        let zoneConfigs = await ConfigManager.getInstance().getRegattaZoneConfig();
        this.maxZone = zoneConfigs.length;
        let matchInfo = GameData.getInstance().playerData.matchInfo;
        let dataArr: DataType.localData.ZoneData[] = [];
        for (let i = 0, len = zoneConfigs.length; i < len; i++) {
            let config = zoneConfigs[i];
            let data = new DataType.localData.ZoneData();
            data.zoneNo = config.zoneNo;
            data.playerNo = config.playerNo;
            data.unlockStarMax = config.unlockStarMax;
            data.unlockSlotMax = config.unlockSlotMax;
            data.reward = config.reward;
            if (matchInfo.zoneNo == this.maxZone && matchInfo.rank == 1) {
                data.pass = true;
                data.curZone = false;
            } else {
                data.pass = config.zoneNo < matchInfo.zoneNo;
                data.curZone = config.zoneNo == matchInfo.zoneNo;
            }
            data.unlock = config.zoneNo <= matchInfo.zoneNo;
            // data.isEnd = i == (len - 1);
            data.isShowSlot = i < 3;
            data.isShowStar = i < 4;
            dataArr.push(data);
        }
        let data1 = new DataType.localData.ZoneData();
        data1.zoneNo = 1000;
        data1.isEnd = true;
        dataArr.push(data1);
        return dataArr;
    }

    /**
     * 赛区是否已通关
     * @param zoneNo 
     */
    public zoneIsPass(zoneNo: number) {
        let matchInfo = GameData.getInstance().playerData.matchInfo;
        if (zoneNo == matchInfo.zoneNo) {
            return matchInfo.rank == 1;
        } else {
            return zoneNo < matchInfo.zoneNo;
        }
    }

    /** 
     * 根据赛区获取奖励信息
     * @param zoneNo
     */
    public async getRegattaAwardData(zoneNo: number) {
        let oppConfig = await ConfigManager.getInstance().getRegattaAwardConfig();
        let dataArr: ConfigType.RegattaAwardConfig[] = [];
        for (let i = 0, len = oppConfig.length; i < len; i++) {
            let config = oppConfig[i];
            if (config.zoneNo == zoneNo) {
                dataArr.push(config);
            }
        }
        return dataArr;
    }

    /** 获取自己当前排名 */
    public async getCurRank(): Promise<number> {
        let netInfo = GameData.getInstance().playerData.matchInfo;
        if (netInfo.rank) {
            return netInfo.rank;
        } else {
            let oppConfig = await this.getOpponentData(netInfo.zoneNo);
            let players = oppConfig.players;
            let selfRank = players.length + 1;
            GameData.getInstance().playerData.matchInfo.rank = selfRank;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            return selfRank;
        }
    }

    private curRankData: DataType.localData.RankData[];

    /**
     * 获取赛区帆船赛排名信息
     * @param zoneNo 查看赛区(结算时不传)
     */
    public async getRegattaRank(zoneNo?: number) {
        let isPass = false;
        if (zoneNo) {
            isPass = this.zoneIsPass(zoneNo);//是否已通关（已通关不包含自己）
        } else {
            zoneNo = GameData.getInstance().playerData.matchInfo.zoneNo;
        }
        let oppConfig = await this.getOpponentData(zoneNo);
        GameData.getInstance().otherprop = oppConfig.star;
        let players = oppConfig.players;
        let dataArr: DataType.localData.RankData[] = [];
        for (let i = 0, len = players.length; i < len; i++) {
            let config = players[i];
            let data = new DataType.localData.RankData();
            data.type = 1;
            data.zoneNo = zoneNo;
            data.rank = i + 1;
            data.name = config.nickName;
            data.combat = config.sun;
            data.isSelf = false;
            data.shipInfo = config.shipInfo;
            dataArr.push(data);
        }
        let netInfo = GameData.getInstance().playerData.matchInfo;
        let selfRank = netInfo.rank;
        let combat = GameManager.instance.calCombat();
        if (!isPass) {
            //加入自己排位信息
            if (selfRank) {
                dataArr.splice(selfRank - 1, 0, {
                    type: 1,
                    zoneNo: netInfo.zoneNo,
                    rank: selfRank,
                    name: GameData.getInstance().userInfo.nick,
                    combat: combat,
                    isSelf: true,
                    shipInfo: GameData.getInstance().localUserShipInfo
                });
            } else {
                selfRank = players.length + 1;
                GameData.getInstance().playerData.matchInfo.rank = selfRank;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                dataArr.push({
                    type: 1,
                    zoneNo: netInfo.zoneNo,
                    rank: selfRank,
                    name: GameData.getInstance().userInfo.nick,
                    combat: combat,
                    isSelf: true,
                    shipInfo: GameData.getInstance().localUserShipInfo
                });
            }
            dataArr.forEach((v, i) => { v.rank = i + 1; });
            //下一个对手数据
            for (let i = 0, len = players.length; i < len; i++) {
                if (i == selfRank - 2) {
                    GameData.getInstance().localOtherShipInfo = players[i].shipInfo;
                    break;
                }
            }
        }
        //加入奖励信息
        let awardConfig = await this.getRegattaAwardData(zoneNo);
        for (let i = 0, len = awardConfig.length; i < len; i++) {
            let award = awardConfig[i];
            dataArr.push({
                type: 2,
                zoneNo: zoneNo,
                rank: award.rank,
                reward: award.reward
            });
        }
        // 按排行升序,排行相同type降序
        dataArr.sort((a, b) => {
            let arank = a.rank, brank = b.rank;
            if (arank == brank) {
                let atype = a.type, btype = b.type;
                return btype - atype;
            } else {
                return arank - brank;
            }
        })
        dataArr.forEach((v, i) => {
            v.index = i + 1;
            v.isBeat = isPass ? true : v.rank >= selfRank;
            v.select = isPass ? i == 0 : v.isSelf;
        });
        console.log("排名信息", dataArr);
        this.curRankData = dataArr;
        return dataArr;
    }

    /** 获取下一个对手数据 */
    public async getNextOpponentData() {
        let netInfo = GameData.getInstance().playerData.matchInfo;
        let oppConfig = await this.getOpponentData(netInfo.zoneNo);
        let players = oppConfig.players;
        let selfRank = netInfo.rank;
        if (!selfRank) selfRank = players.length + 1;
        for (let i = 0, len = players.length; i < len; i++) {
            if (i == selfRank - 2) {
                GameData.getInstance().localOtherShipInfo = players[i].shipInfo;
                break;
            }
        }
    }

    /** 
     * 判断并返回是否结束帆船赛（如果结束弹结算）
     * 每击败一个对手或者被击败调一次
     */
    public async judgeIsEndRegatta(data: { curBlood: number, blood: number }) {
        console.log("判断是否结束帆船赛", data);
        if (data.curBlood > 0) {
            let netInfo = GameData.getInstance().playerData.matchInfo;
            netInfo.rank = netInfo.rank - 1;
            let awardData;
            for (let i = 0, len = this.curRankData.length; i < len; i++) {
                let data = this.curRankData[i];
                if (data.type == 2 && data.rank == netInfo.rank) {//可以领奖进入结算
                    awardData = data;
                    break;
                }
            }
            GameData.getInstance().playerData.matchInfo = netInfo;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            let dataArr = await this.getZoneAward();
            if (awardData) {
                ViewManager.getInstance().showView(RegattaOverScene, { winAward: awardData, zoneAward: dataArr });
                return true;
            } else {
                if (netInfo.rank == 1) {//全部击败进入结算
                    ViewManager.getInstance().showView(RegattaOverScene, { winAward: awardData, zoneAward: dataArr });
                    return true;
                } else {
                    await this.getNextOpponentData();
                    return false;
                }
            }
        } else {
            ViewManager.getInstance().showView(RegattaOverScene);
            return true;
        }
    }

    /**
     * 判断解锁新赛区
     */
    public unlockZone() {
        let netInfo = GameData.getInstance().playerData.matchInfo;
        if (netInfo.rank == 1) {
            if (netInfo.zoneNo + 1 <= this.maxZone) {
                netInfo.zoneNo += 1;
                netInfo.rank = null;
                //解锁新赛区玩家等级加1
                GameData.getInstance().playerData.playerLevel += 1;
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            }
        }
    }

    /** 获取赛区奖励（赛区通关领奖） */
    private async getZoneAward() {
        if (GameData.getInstance().playerData.matchInfo.rank == 1) {
            let zoneConfigs = await ConfigManager.getInstance().getRegattaZoneConfig();
            let matchInfo = GameData.getInstance().playerData.matchInfo;
            let dataArr = [];
            let propArr = [];
            let treasureArr = [];
            for (let i = 0, len = zoneConfigs.length; i < len; i++) {
                if (matchInfo.zoneNo == zoneConfigs[i].zoneNo) {
                    GameData.getInstance().playerData.maxSlot = zoneConfigs[i].unlockSlotMax;
                    let awardArr = zoneConfigs[i].reward.split(",");
                    for (let j = 0, len = awardArr.length; j < len; j++) {
                        let id = parseInt(awardArr[j].split("|")[0]);
                        if (id > 160000 && id < 170000) {//宝箱
                            treasureArr.push(id + '');
                        } else {//实体5
                            let data = GameManager.instance.getOnePropById(id + '');
                            propArr.push(data)
                        }

                    }
                    break;
                }
            }
            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            dataArr.push(TreasureManager.instance.getAwardPropData(propArr), treasureArr);

            return dataArr
        } else {
            return null;
        }
    }
}