import InviteManager from "./InviteManager";
import { MiniManeger } from "./MiniManeger";
import { GameObj, GAMESTATUS, GameObjInfo, AttackType, GameConstant } from "../view/game/base/GameObj";
import ObjectPool from "../common/ObjectPool";
import { BaseBullet, BulletInfo } from "../view/game/bullet/BaseBullet";
import GameMgr from "./GameMgr";
import AnimationManager from "./AnimationManager";
import { GameData } from "../common/GameData";
import ConfigManager from "./ConfigManager";
import { BaseGameInfo, BaseShipGameInfo, BaseCatGameInfo, BasePigGameInfo, BaseBoosterGameInfo } from "../view/vo/BaseGameInfo";
import { GameAdventureScene } from "../view/game/GameAdventureScene";
import { GameMatchScene } from "../view/game/GameMatchScene";
import { AdventureItem } from "../view/home/foster/AdventureScene";
import { BaseShipUi } from "../view/game/ship/BaseShip";
import { HomeScene } from "../view/home/HomeScene";
import * as DataType from "../common/GameDataType";

import { localData } from "../common/GameDataType";
import DungeonOverScene from "../view/game/dungeon/DungeonOverScene";

import { ShipConfig, CatConfig, BoosterConfig } from "../common/GameConfigType";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import TaskManager, { TaskEnum } from "./TaskManager";
import { GoldView } from "../view/game/gold/GoldView";
import RegattaManager from "./RegattaManager";
import SoundManager, { SoundConst } from "./SoundManager";
import { PigPlayer } from "../view/game/pig/PigPlayer";
import TTBaoTypeGame from "../view/home/tt/TTBaoTypeGame";
import { ShareVideo } from "../view/home/tt/ShareVideo";
import DYChannelMgr from "./channel/DYChannelMgr";
import { WechatBoxUI2 } from "../wechat/WechatBoxUI2";
import { WechatBoxUI3 } from "../wechat/WechatBoxUI3";
import { WechatBoxUI4 } from "../wechat/WechatBoxUI4";
import { DYMoreGameBanner } from "../wechat/DYMoreGameBanner";
import { MoreGameBoxSingle } from "../wechat/MoreGameBoxSingle";

/**
 * 游戏管理器\
 * 处理游戏基本逻辑的
 */
export class GameManager {
    private static ins: GameManager;

    public static get instance(): GameManager {
        if (this.ins == null) {
            this.ins = new GameManager();
        }
        return this.ins
    }
    private constructor() {

    }


    public objToQueryStr<T>(obj: Object): string {
        return Object.keys(obj).map(key => {
            if (typeof obj[key] == "string" && obj[key] == "") {
                return obj[key]
            } else {
                return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
            }
        }).join("&");
    }
    /**
     * 得到第一只船
     */
    public getFirstShip() {
        let baseInfos = GameData.getInstance().prop.baseInfos;
        if (baseInfos.ship == null) {
            baseInfos.ship = [];
        }
        if (baseInfos.ship.length == 0) {
            // this.getRandomSatrAndProById('110101');
            // this.getRandomSatrAndProById('110201');
            // this.getRandomSatrAndProById('110002');
            // this.getRandomSatrAndProById('110101');
            // this.getRandomSatrAndProById('110201');
            // this.getRandomSatrAndProById('110002');
            // this.getRandomSatrAndProById('110101');
            // this.getRandomSatrAndProById('110201');
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(false, 1);
            this.getRandomOneShip(true, 1);
        }
        if (baseInfos.cat == null) {
            baseInfos.cat = [];
        }
        if (baseInfos.cat.length == 0) {
            // this.getRandomSatrAndProById('120901');
            // this.getRandomSatrAndProById('120001');
            // this.getRandomSatrAndProById('120101');
            // this.getRandomSatrAndProById('120002');
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(true, 1);
            this.getRandomOneCat(false, 1);
            this.getRandomOneCat(false, 1);
        }
        if (baseInfos.booster == null) {
            baseInfos.booster = [];
        }
        if (baseInfos.booster.length == 0) {

            // this.getRandomSatrAndProById('140201');
            // this.getRandomSatrAndProById('140201');
            this.getRandomOneBooster(false, 1);
            this.getRandomOneBooster(false, 1);
            this.getRandomOneBooster(false, 1);

        }
        let localUserShipInfo = GameData.getInstance().localUserShipInfo;
        let info = baseInfos.ship[0] as BaseShipGameInfo;
        localUserShipInfo.ship.uid = info.uid;
        localUserShipInfo.ship.star = info.star;
        localUserShipInfo.player.box_player1 = baseInfos.cat[0].uid;
        GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
    }

    public checkIsUseUid(uid: number) {
        let localUserShipInfo = GameData.getInstance().localUserShipInfo;
        if (localUserShipInfo.ship.uid == uid ||
            localUserShipInfo.player.box_player1 == uid ||
            localUserShipInfo.player.box_player2 == uid ||
            localUserShipInfo.player.box_player3 == uid ||
            localUserShipInfo.player.box_player4 == uid ||
            localUserShipInfo.player.box_player5 == uid) {
            return true
        }
        return false
    }
    /**
     * 
     */
    public playerGuide: number = 1;
    /**
     * 通过uid和类型获取基础信息配置
     * @param uid 
     */
    public getBaseInfoByUidAndType(uid: number, type: BaseInfoType, prop?: DataType.netData.Prop): BaseGameInfo {
        let infos: Array<BaseGameInfo>;
        if (prop == null) {
            prop = GameData.getInstance().prop;
        }
        if (BaseInfoType.Booster == type) {
            infos = prop.baseInfos.booster;
        } else if (BaseInfoType.Cat == type) {
            infos = prop.baseInfos.cat;
        } else if (BaseInfoType.Ship == type) {
            infos = prop.baseInfos.ship;
        }
        if (infos == null) return null;
        for (let i = 0, len = infos.length; i < len; i++) {
            if (uid == infos[i].uid) {
                return infos[i];
            }
        }
        return null
    }
    /**
     * 通过uid获取基础信息配置
     * @param uid 
     */
    public getBaseInfoByUidNoType(uid: number, prop?: DataType.netData.Prop): BaseGameInfo {
        if (prop == null) {
            prop = GameData.getInstance().prop;
        }

        let baseInfos = prop.baseInfos
        let infos: Array<BaseGameInfo> = baseInfos.booster.concat(baseInfos.cat).concat(baseInfos.ship);
        // if (BaseInfoType.Booster == type) {
        //     infos = GameData.getInstance().prop.baseInfos.booster;
        // } else if (BaseInfoType.Cat == type) {
        //     infos = GameData.getInstance().prop.baseInfos.cat;
        // } else if (BaseInfoType.Ship == type) {
        //     infos = GameData.getInstance().prop.baseInfos.ship;
        // }
        // if (infos == null) return;
        for (let i = 0, len = infos.length; i < len; i++) {
            if (uid == infos[i].uid) {
                return infos[i];
            }
        }
    }

    public bodyLayer: Laya.Sprite;

    /**
     * 猫动画的地址
     */
    public catUrl = "resource/assets/img/ani/cat/";
    public pigUrl = 'resource/assets/img/ani/pig/';
    /**
     * 打开游戏
     * @param data 游戏所需要的数据 
     */
    public openGame(data: any = null) {
        // GameMgr.getInstance().showBufferLoading('资源加载中');
        GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
        SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
        ResUtil.getIntance().loadGroups(["game", "gamePublic"], async () => {
            await ConfigManager.getInstance().initGameConfigs();
            //进入游戏
            switch (this.gameModel) {
                case GameModel.Adventure:
                    SceneManager.getInstance().openGameScene(GameAdventureScene, data);
                    break;
                case GameModel.Match:
                    SceneManager.getInstance().openGameScene(GameMatchScene, data);
                    break;
            }
            GameMgr.getInstance().loadingView.remove();
        }, (index, len) => {
            GameMgr.getInstance().loadingView.progress(index, len);
        });
    }

    public async gameOver(data) {
        let fun = async () => {
            if (GameManager.instance.gameStatus == GAMESTATUS.PLAYING) return;
            if (GameManager.instance.gameModel == GameModel.Adventure) {
                ViewManager.getInstance().showView(DungeonOverScene, data);
            } else if (GameManager.instance.gameModel == GameModel.Match) {
                let continues = await RegattaManager.instance.judgeIsEndRegatta(data);
                if (!continues) {
                    // SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
                    // Laya.timer.once(500, this, () => {
                    GameManager.instance.openGame('');
                    //     GameMgr.getInstance().loadingView.remove();
                    // });
                } else {
                    let canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();
                    let flag = MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0;
                    console.log(">>>>>>>>>>>>>>>>>>", flag)
                    if (canFreeGetDiamond && flag) {
                        ViewManager.getInstance().showView(ShareVideo);
                    }
                }
                // ViewManager.getInstance().showView(RegattaOverScene, data)
            }
        }
        if (DeviceUtil.isTTMiniGame()) {
            MiniManeger.instance.stopGameRecordOver = fun;
            if (MiniManeger.instance.isMakeVideo) {
                MiniManeger.instance.stopGameRecord();
            } else {
                fun();
            }

        } else {
            fun();
        }


    }

    public backHome() {
        SceneManager.getInstance().openGameScene(HomeScene);

    }
    /**
     * 游戏主模式
     * 冒险 帆船等
     */
    public gameModel: GameModel = GameModel.Adventure;
    /**
     * 通过id得到展示的
     */
    public getShowItemById() {

    }
    /**
     * 冒险展示的船只
     */
    public adventureShowShip: BaseShipUi;
    public checkShowShipCanHit(item: any, flagSapite?: Laya.Sprite, convertCoefficient: number = 3): boolean {
        if (flagSapite == null) {
            flagSapite = this.adventureShowShip;
        }
        if (flagSapite == null) {
            return false;
        }
        if (item == null) return false

        return this.impactChecking(flagSapite, item, convertCoefficient);
    }

    public checkHit(item: AdventureItem, flagSapite?: Laya.Sprite) {
        let rectA = item.getBounds();
        let rectB = flagSapite.getBounds();
        return rectA.intersects(rectB);
    }
    /** 
  * 判断两个显示对象（矩形）是否发生像素碰撞（锚点须位于矩形的几何中心）
  * @param rectA 显示对象A
  * @param rectB 显示对象B
  * @param convertCoefficient 折算系数
  */
    public impactChecking(rectA: Laya.Sprite, rectB: Laya.Sprite, convertCoefficient: number = 2): boolean {
        let heightDif: number = (rectA.height + rectB.height) / convertCoefficient;
        let widthDif: number = (rectA.width + rectB.width) / convertCoefficient;
        // console.log(rectA.x, rectA.y, rectB.x, rectB.y, widthDif, heightDif);
        let point1 = Laya.Point.create();
        point1.x = 0;
        point1.y = 0;
        point1 = rectA.localToGlobal(point1, false);
        // if (rectA.pivotX == 0) {
        //     point1.x = point1.x - rectA.width / 2
        //     point1.y = point1.y - rectA.height / 2
        // }
        let point2 = Laya.Point.create();
        point2.x = 0;
        point2.y = 0;
        point2 = rectB.localToGlobal(point2, false);
        // if (rectB.pivotX == 0) {
        //     point2.x = point2.x - rectB.width / 2
        //     point2.y = point2.y - rectB.height / 2
        // }
        if (Math.abs(point1.x - point2.x) < widthDif && Math.abs(point1.y - point2.y) < heightDif) {
            point2.recover();
            point1.recover();
            return true;
        } else {
            point2.recover();
            point1.recover();
            return false;
        }
    }

    /**
     * 根据id获取一个道具,随机属性
     * @param id 
     */
    public getOnePropById(id: string) {
        let baseConfig;
        //确定uid
        GameData.getInstance().prop.baseInfoId++;
        //确定品质
        let ratio = Utils.getRandom(1, 100);
        let quality = ratio <= 95 ? 1 : 2;
        let starJson = ConfigManager.getInstance().starJson;
        if (parseInt(id) >= 110001 && parseInt(id) < 120001) {//船
            baseConfig = new BaseShipGameInfo();
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            baseConfig.quality = quality;
            baseConfig.id = id;
            let config: ShipConfig = ConfigManager.getInstance().shipConfigs[id];
            baseConfig.star = parseInt(config.star);
            baseConfig.slot = GameData.getInstance().playerData.maxSlot;
            baseConfig.slotArr = GameManager.instance.getSlotArrByMaxSlot(baseConfig.slot);
            let shipStar = starJson.shipStar[baseConfig.star - 1] as {
                initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number
            };
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthHp = Utils.getRandomInCeil(shipStar.growthHpMin, shipStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(shipStar.initialHpMin, shipStar.initialHpMax);
            baseConfig.attack_type = parseInt(ConfigManager.getInstance().shipConfigs[baseConfig.id].attack_type);
            //确定护盾
            let ratio1 = Utils.getRandom(1, 100);
            if (ratio1 <= 3) {
                baseConfig.hasShield = true;
                let exclude = ["149901", "149902", "149903", "149904", "149905"];
                for (let i = 0; i < exclude.length; i++) {
                    let config: BoosterConfig = ConfigManager.getInstance().boosterConfigs[exclude[i]];
                    if (parseInt(config.star) == baseConfig.star) {
                        baseConfig.shieldId = parseInt(config.id);
                        break;
                    }
                }
            }
            GameData.getInstance().prop.baseInfos.ship.push(baseConfig);
        } else if (parseInt(id) >= 120001 && parseInt(id) < 130001) {//猫
            baseConfig = new BaseCatGameInfo();
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            baseConfig.quality = quality;
            baseConfig.id = id;
            let config: CatConfig = ConfigManager.getInstance().catConfigs[id];
            baseConfig.star = parseInt(config.star);
            let catStar = starJson.catStar[baseConfig.star - 1] as {
                initialAttMin: number, initialAttMax: number, initialHpMin: number, initialHpMax: number, initialCritMin: number, initialCritMax: number, growthAttMin: number, growthAttMax: number, growthHpMin: number, growthHpMax: number, growthCritMin: number, growthCritMax: number,
            };
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthAtt = Utils.getRandomInCeil(catStar.growthAttMin, catStar.growthAttMax);
            baseConfig.growthCrit = Utils.getRandomInCeil(catStar.growthCritMin, catStar.growthCritMax);
            baseConfig.growthHp = Utils.getRandomInCeil(catStar.growthHpMin, catStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(catStar.initialHpMin, catStar.initialHpMax);
            baseConfig.initialAtt = Utils.getRandomInCeil(catStar.initialAttMin, catStar.initialAttMax);
            baseConfig.initialCrit = Utils.getRandomInCeil(catStar.initialCritMin, catStar.initialCritMax);
            baseConfig.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseConfig.id].attack_type);
            GameData.getInstance().prop.baseInfos.cat.push(baseConfig);
        } else if (parseInt(id) >= 140001 && parseInt(id) < 150001) {//增幅器
            baseConfig = new BaseBoosterGameInfo();
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            baseConfig.quality = quality;
            baseConfig.id = id;
            let config: BoosterConfig = ConfigManager.getInstance().boosterConfigs[id];
            baseConfig.star = parseInt(config.star);
            let boosterStar = starJson.boosterStar[baseConfig.star - 1] as {
                initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number, skillCD: number
            };
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthHp = Utils.getRandomInCeil(boosterStar.growthHpMin, boosterStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(boosterStar.initialHpMin, boosterStar.initialHpMax);
            baseConfig.skillCD = boosterStar.skillCD;
            GameData.getInstance().prop.baseInfos.booster.push(baseConfig);
        }
        return baseConfig;
    }

    public getSlotArrByMaxSlot(slot: number): Array<number> {
        let arr = [2, 3, 4, 5];
        if (slot >= 4) {
            return arr;
        }
        let index = Math.floor(Math.random() * slot);
        if (slot == 3) {
            arr.splice(index, 1)
            return arr;
        }
        if (slot == 1) {
            return arr.splice(index, 1)
        }
        if (slot == 2) {
            arr.splice(index, 1);
            index = Math.floor(Math.random() * slot);
            arr.splice(index, 1);
            return arr
        }
    }


    public shipMaxLevel = 30;
    /** 
     * 随机获得一个船
     * @param isDropRare 是否必定掉落稀有品种 
     */
    public getRandomOneShip(isDropRare = false, sureStar?: number, lvLimit?: boolean): BaseShipGameInfo {
        let baseConfig = new BaseShipGameInfo();
        //确定uid
        GameData.getInstance().prop.baseInfoId++;
        baseConfig.uid = GameData.getInstance().prop.baseInfoId;
        //确定品质
        if (isDropRare) {
            baseConfig.quality = 2;
        } else {
            let ratio = Utils.getRandom(1, 100);
            let quality = ratio <= 95 ? 1 : 2;
            baseConfig.quality = quality;
        }
        //确定星数
        let star: number;
        if (sureStar) {
            star = sureStar;
        } else {
            star = this.getRandomStar();
        }
        // //船暂时没有3星以上，强制转成3星
        // if (star > 3) star = 3;

        baseConfig.star = star;
        baseConfig.slot = GameData.getInstance().playerData.maxSlot;
        baseConfig.slotArr = GameManager.instance.getSlotArrByMaxSlot(baseConfig.slot);
        // arr.push();
        //确定id
        let configs: ShipConfig[] = [];
        let playerLv = GameData.getInstance().playerData.playerLevel;
        for (let key in ConfigManager.getInstance().shipConfigs) {
            let config: ShipConfig = ConfigManager.getInstance().shipConfigs[key];
            if (parseInt(config.star) == star) {
                if (lvLimit) {
                    if (playerLv >= parseInt(config.needPlayerLevel)) configs.push(config);
                } else {
                    configs.push(config);
                }
            }
        }
        // console.log("随机船星数", star, configs);
        baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;
        baseConfig.attack_type = parseInt(ConfigManager.getInstance().shipConfigs[baseConfig.id].attack_type);

        // let config = this.getStarConfig(star);
        // let shipPool = config.shipPool;
        // baseConfig.id = shipPool[Utils.getRandom(0, shipPool.length - 1)] + "";
        //确定属性
        let starJson = ConfigManager.getInstance().starJson;
        let shipStar = starJson.shipStar[star - 1] as {
            initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number
        };
        baseConfig.level = 0;
        baseConfig.exp = 0;
        baseConfig.growthHp = Utils.getRandomInCeil(shipStar.growthHpMin, shipStar.growthHpMax);
        baseConfig.initialHp = Utils.getRandomInCeil(shipStar.initialHpMin, shipStar.initialHpMax);
        //确定护盾
        let ratio1 = Utils.getRandom(1, 100);
        if (ratio1 <= 3) {
            baseConfig.hasShield = true;
            let exclude = ["149901", "149902", "149903", "149904", "149905"];
            for (let i = 0; i < exclude.length; i++) {
                let config: BoosterConfig = ConfigManager.getInstance().boosterConfigs[exclude[i]];
                if (parseInt(config.star) == baseConfig.star) {
                    baseConfig.shieldId = parseInt(config.id);
                    break;
                }
            }
        }
        GameData.getInstance().prop.baseInfos.ship.push(baseConfig);
        return baseConfig;
    }

    /** 
     * 随机获得一个猫
     * @param isDropRare 是否必定掉落稀有品种 
     */
    public getRandomOneCat(isDropRare = false, sureStar?: number, lvLimit?: boolean): BaseCatGameInfo {
        let baseConfig = new BaseCatGameInfo();
        //确定uid
        GameData.getInstance().prop.baseInfoId++;
        baseConfig.uid = GameData.getInstance().prop.baseInfoId;
        //确定品质
        if (isDropRare) {
            baseConfig.quality = 2;
        } else {
            let ratio = Utils.getRandom(1, 100);
            let quality = ratio <= 95 ? 1 : 2;
            baseConfig.quality = quality;
        }
        //确定星数
        let star: number;
        if (sureStar) {
            star = sureStar;
        } else {
            star = this.getRandomStar();
        }
        baseConfig.star = star;
        //确定id
        let configs: CatConfig[] = [];
        let playerLv = GameData.getInstance().playerData.playerLevel;
        for (let key in ConfigManager.getInstance().catConfigs) {
            let config: CatConfig = ConfigManager.getInstance().catConfigs[key];
            //要把舰长过滤掉
            if (parseInt(config.star) == star && parseInt(config.id) != 120901) {
                if (lvLimit) {
                    if (playerLv >= parseInt(config.needPlayerLevel)) configs.push(config);
                } else {
                    configs.push(config);
                }
            }
        }
        // console.log("随机猫星数", star, configs);
        baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;
        baseConfig.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseConfig.id].attack_type);
        // let config = this.getStarConfig(star);
        // let catPool = config.catPool;
        // baseConfig.id = catPool[Utils.getRandom(0, catPool.length - 1)] + "";
        //确定属性
        let starJson = ConfigManager.getInstance().starJson;
        let catStar = starJson.catStar[baseConfig.star - 1] as {
            initialAttMin: number, initialAttMax: number, initialHpMin: number, initialHpMax: number, initialCritMin: number, initialCritMax: number, growthAttMin: number, growthAttMax: number, growthHpMin: number, growthHpMax: number, growthCritMin: number, growthCritMax: number,
        };

        baseConfig.level = 0;
        baseConfig.exp = 0;
        baseConfig.growthAtt = Utils.getRandomInCeil(catStar.growthAttMin, catStar.growthAttMax);
        baseConfig.growthCrit = Utils.getRandomInCeil(catStar.growthCritMin, catStar.growthCritMax);
        baseConfig.growthHp = Utils.getRandomInCeil(catStar.growthHpMin, catStar.growthHpMax);
        baseConfig.initialHp = Utils.getRandomInCeil(catStar.initialHpMin, catStar.initialHpMax);
        baseConfig.initialAtt = Utils.getRandomInCeil(catStar.initialAttMin, catStar.initialAttMax);
        baseConfig.initialCrit = Utils.getRandomInCeil(catStar.initialCritMin, catStar.initialCritMax);
        GameData.getInstance().prop.baseInfos.cat.push(baseConfig);
        return baseConfig;
    }

    /** 
     * 随机获得一个增幅器
     * @param isDropRare 是否必定掉落稀有品种
     */
    public getRandomOneBooster(isDropRare = false, sureStar?: number, lvLimit?: boolean): BaseBoosterGameInfo {
        let baseConfig = new BaseBoosterGameInfo();
        //确定uid
        GameData.getInstance().prop.baseInfoId++;
        baseConfig.uid = GameData.getInstance().prop.baseInfoId;
        //确定品质
        if (isDropRare) {
            baseConfig.quality = 2;
        } else {
            let ratio = Utils.getRandom(1, 100);
            let quality = ratio <= 95 ? 1 : 2;
            baseConfig.quality = quality;
        }
        //确定星数
        let star: number;
        if (sureStar) {
            star = sureStar;
        } else {
            star = this.getRandomStar();
        }
        baseConfig.star = star;
        //确定id
        let configs: BoosterConfig[] = [];
        let playerLv = GameData.getInstance().playerData.playerLevel;
        //过滤掉护盾
        let exclude = ["149901", "149902", "149903", "149904", "149905"];
        for (let key in ConfigManager.getInstance().boosterConfigs) {
            let config: BoosterConfig = ConfigManager.getInstance().boosterConfigs[key];
            if (parseInt(config.star) == star && exclude.indexOf(config.id) < 0) {
                if (lvLimit) {
                    if (playerLv >= parseInt(config.needPlayerLevel)) configs.push(config);
                } else {
                    configs.push(config);
                }
            }
        }
        // console.log("随机增幅器星数", star, configs);
        baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;

        // let config = this.getStarConfig(star);
        // let boosterPool = config.boosterPool;
        // baseConfig.id = boosterPool[Utils.getRandom(0, boosterPool.length - 1)] + "";
        //确定属性
        let starJson = ConfigManager.getInstance().starJson;
        let boosterStar = starJson.boosterStar[star - 1] as {
            initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number, skillCD: number
        };
        baseConfig.level = 0;
        baseConfig.exp = 0;
        baseConfig.growthHp = Utils.getRandomInCeil(boosterStar.growthHpMin, boosterStar.growthHpMax);
        baseConfig.initialHp = Utils.getRandomInCeil(boosterStar.initialHpMin, boosterStar.initialHpMax);
        baseConfig.skillCD = boosterStar.skillCD;
        GameData.getInstance().prop.baseInfos.booster.push(baseConfig);
        return baseConfig;
    }

    /**
     * 获取星级配置
     * @param star 
     */
    public getStarConfig(star: number) {
        let configs = ConfigManager.getInstance().starConfigs;
        for (let i in configs) {
            if (configs[i].star == star) {
                return configs[i];
            }
        }
    }

    /**
     * 计算属性
     * 最终属性 = （基础属性 + 本身等级 * 成长属性）*（1 + 被动属性加成）
     * 被动属性加成暂定为 普通品质0；稀有品质5%
     */
    public calAttr(initAttr: number, growAttr: number, lv: number, quality: number) {
        let rate = quality == 1 ? 0 : 5;
        let attr = Math.floor((initAttr + growAttr * lv) * (1 + rate / 100));
        return attr;
    }

    /** 计算自己战斗力 */
    public calCombat() {
        let use = GameData.getInstance().localUserShipInfo;
        let combat = 0;
        let ship = this.getBaseInfoByUidNoType(use.ship.uid);
        let shipHp = this.calAttr(ship.initialHp, ship.growthHp, ship.level, ship.quality);
        combat += 0.25 * shipHp;
        for (let key in use.player) {
            if (key != "box_player1") {
                let uid = use.player[key];
                if (uid) {
                    let base = this.getBaseInfoByUidNoType(uid);
                    let baseHp = this.calAttr(base.initialHp, base.growthHp, base.level, base.quality);
                    if (base.type == BaseInfoType.Cat) {
                        let baseAtk = this.calAttr(base["initialAtt"], base["growthAtt"], base.level, base.quality);
                        combat += 0.25 * baseHp;
                        combat += 1 * baseAtk;
                    } else {
                        combat += 0.25 * baseHp * 2.5;
                    }
                }
            }
        }
        let str = combat.toString();
        return parseFloat(str.substring(0, str.indexOf(".") + 3));
    }

    /** 获取已拥有道具详细数据 */
    public getOwnPropData() {
        let baseInfos = GameData.getInstance().prop.baseInfos;
        let owns = (baseInfos.ship as Array<any>).concat(baseInfos.cat).concat(baseInfos.booster);
        let dataArr: localData.PropData[] = [];
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            let data = new localData.PropData();
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

    /** 通过uid获取某个已拥有道具详细数据 */
    public getPropDataByUid(uid: number) {
        let baseInfos = GameData.getInstance().prop.baseInfos;
        let owns = (baseInfos.ship as Array<any>).concat(baseInfos.cat).concat(baseInfos.booster);
        for (let i = 0, len = owns.length; i < len; i++) {
            let own = owns[i];
            if (uid == own.uid) {
                let id = parseInt(own.id);
                let data = new localData.PropData();
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
                return data;
            }
        }
        return null;
    }
    /**
     * 吞噬后移除基础配置
     * @param baseInfo 
     */
    public removepPropBase(baseInfo: BaseGameInfo) {
        let baseInfos = GameData.getInstance().prop.baseInfos;
        let arr: Array<BaseGameInfo>
        if (baseInfo.type == BaseInfoType.Ship) {
            arr = baseInfos.ship;
        } else if (baseInfo.type == BaseInfoType.Cat) {
            arr = baseInfos.cat;

        } else if (baseInfo.type == BaseInfoType.Booster) {
            arr = baseInfos.booster;
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].uid == baseInfo.uid) {
                arr.splice(i, 1);
                break;
            }
        }
    }


    /**
     * 船猫等增加经验
     */
    public async propAddExp(baseInfo: BaseGameInfo, addExp: number) {
        let info = await this.judgeUpgradeByAddExp(baseInfo, addExp);
        if (info.addLv > 0) {
            TaskManager.instance.updateTask(TaskEnum.TASK_2014, 1);
        }
        baseInfo.level = baseInfo.level + info.addLv;
        baseInfo.exp = info.endExp;

        // let level = baseInfo.level;
        // baseInfo.exp += addExp;
        // // console.log("增加经验", addExp, baseInfo);
        // let playerExp = ConfigManager.getInstance().playerExpJson;
        // let data: { level: number, exp: number };
        // for (let i = 0, len = playerExp.length; i < len; i++) {
        //     if (playerExp[i].level == level + 1) {
        //         data = playerExp[i];
        //         break;
        //     }
        // }
        // if (baseInfo.exp >= data.exp) {
        //     baseInfo.level = data.level;
        //     baseInfo.exp -= data.exp;
        // }

        let baseInfos = GameData.getInstance().prop.baseInfos;
        let arr: Array<BaseGameInfo>
        if (baseInfo.type == BaseInfoType.Ship) {
            arr = baseInfos.ship;
        } else if (baseInfo.type == BaseInfoType.Cat) {
            arr = baseInfos.cat;
        } else if (baseInfo.type == BaseInfoType.Booster) {
            arr = baseInfos.booster;
        }
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].uid == baseInfo.uid) {
                arr[i] = baseInfo;
                break;
            }
        }
        // console.log("增加经验后", baseInfo);
        // baseInfo = GameManager.instance.getLevelByExp(baseInfo)
    }

    /**
     * 判断增加经验值后等级变化（返回增加等级数和剩余经验值）
     * @param baseInfo 
     * @param addExp 
     */
    public judgeUpgradeByAddExp(baseInfo: BaseGameInfo, addExp: number): Promise<{ addLv: number, endExp: number }> {
        return new Promise(async resolve => {
            let ownExp = baseInfo.exp + addExp;
            let level = baseInfo.level;
            let addLv = 0;
            let playerExp = ConfigManager.getInstance().playerExpJson;
            let upGrade = (level: number) => {
                let data: { level: number, exp: number };
                let isUp = false;
                for (let i = 0, len = playerExp.length; i < len; i++) {
                    if (playerExp[i].level == level + 1) {
                        data = playerExp[i];
                        break;
                    }
                }
                if (data) {
                    if (ownExp >= data.exp) {
                        addLv += 1
                        ownExp -= data.exp;
                        isUp = true;
                    }
                }
                return isUp;
            }
            let fun = () => {
                return new Promise(res => {
                    let isEnd = () => {
                        let isUp = upGrade(level);
                        if (isUp) {
                            level += 1;
                            isEnd();
                        } else {
                            res();
                        }
                    }
                    isEnd();
                });
            }
            await fun();
            resolve({ addLv: addLv, endExp: ownExp });
        });
    }

    /**
     * 根据等级获取总经验
     * @param lv 
     */
    public getTotleExpByLv(lv: number) {
        if (lv == 0) return 0;
        let exp = 0;
        let playerExp = ConfigManager.getInstance().playerExpJson;
        for (let i = 0, len = playerExp.length; i < len; i++) {
            if (playerExp[i].level <= lv) {
                exp += playerExp[i].exp;
            }
        }
        return exp;
    }

    /**
     * 根据经验换算等级
     * @param baseInfo 
     */
    public getLevelByExp(baseInfo: BaseGameInfo) {
        let playerExp = ConfigManager.getInstance().playerExpJson;
        for (let i = 0, len = playerExp.length; i < len; i++) {
            if (playerExp[i].exp > baseInfo.exp) {
                baseInfo.level = (i);
                return baseInfo;
            }
        }
    }
    // /**
    //  * 通过id获得随机的星级和属性
    //  */
    // public getRandomSatrAndProById(id: string): any {
    //     let star = this.getRandomStar();
    //     // let baseConfig: any;
    //     let starJson = ConfigManager.getInstance().starJson;
    //     let baseConfig;
    //     GameData.getInstance().prop.baseInfoId++;
    //     if (parseInt(id) >= 110001 && parseInt(id) < 120001) {//船
    //         let shipStar = starJson.shipStar[star - 1] as {
    //             initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number
    //         };
    //         baseConfig = new BaseShipGameInfo();
    //         baseConfig.id = id;
    //         baseConfig.level = 0;
    //         baseConfig.uid = GameData.getInstance().prop.baseInfoId;
    //         baseConfig.star = star;
    //         baseConfig.exp = 0;
    //         baseConfig.growthHp = Utils.getRandomInCeil(shipStar.growthHpMin, shipStar.growthHpMax);
    //         baseConfig.initialHp = Utils.getRandomInCeil(shipStar.initialHpMin, shipStar.initialHpMax);
    //         GameData.getInstance().prop.baseInfos.ship.push(baseConfig)
    //     }
    //     else if (parseInt(id) >= 120001 && parseInt(id) < 130001) {//猫
    //         baseConfig = new BaseCatGameInfo();
    //         baseConfig.uid = GameData.getInstance().prop.baseInfoId;
    //         baseConfig.star = star;
    //         baseConfig.id = id;
    //         baseConfig.level = 0;
    //         baseConfig.exp = 0;
    //         let catStar = starJson.catStar[baseConfig.star - 1] as {
    //             initialAttMin: number, initialAttMax: number, initialHpMin: number, initialHpMax: number, initialCritMin: number, initialCritMax: number, growthAttMin: number, growthAttMax: number, growthHpMin: number, growthHpMax: number, growthCritMin: number, growthCritMax: number,
    //         };
    //         baseConfig.growthAtt = Utils.getRandomInCeil(catStar.growthAttMin, catStar.growthAttMax);
    //         baseConfig.growthCrit = Utils.getRandomInCeil(catStar.growthCritMin, catStar.growthCritMax);
    //         baseConfig.growthHp = Utils.getRandomInCeil(catStar.growthHpMin, catStar.growthHpMax);
    //         baseConfig.initialHp = Utils.getRandomInCeil(catStar.initialHpMin, catStar.initialHpMax);
    //         baseConfig.initialAtt = Utils.getRandomInCeil(catStar.initialAttMin, catStar.initialAttMax);
    //         baseConfig.initialCrit = Utils.getRandomInCeil(catStar.initialCritMin, catStar.initialCritMax);
    //         GameData.getInstance().prop.baseInfos.cat.push(baseConfig)
    //     }
    //     else if (parseInt(id) >= 140001 && parseInt(id) < 150001) {//增幅器
    //         let boosterStar = starJson.boosterStar[star - 1] as {
    //             initialHpMin: number, initialHpMax: number, growthHpMin: number, growthHpMax: number, skillCD: number
    //         };
    //         baseConfig = new BaseBoosterGameInfo();
    //         baseConfig.id = id;
    //         baseConfig.level = 0;

    //         baseConfig.uid = GameData.getInstance().prop.baseInfoId;
    //         baseConfig.star = star;
    //         baseConfig.skillCD = boosterStar.skillCD;
    //         baseConfig.exp = 0;
    //         baseConfig.growthHp = Utils.getRandomInCeil(boosterStar.growthHpMin, boosterStar.growthHpMax);
    //         baseConfig.initialHp = Utils.getRandomInCeil(boosterStar.initialHpMin, boosterStar.initialHpMax);
    //         GameData.getInstance().prop.baseInfos.booster.push(baseConfig)
    //     }
    //     return baseConfig;
    // }




    /**
     * 根据等级获取随机星级（权重计算）
     */
    public getRandomStar(): number {
        let level = GameData.getInstance().playerData.playerLevel;
        let weightArr = this.randomRate[level];
        weightArr = this.arrOverAdd(weightArr);
        // console.log(weightArr);
        var totalWeight = weightArr[weightArr.length - 1];

        var random = Math.random() * totalWeight;
        var arrIndex = this.getArrIndex(random, weightArr);
        // console.log(arrIndex);
        return arrIndex + 1;
    }

    public randomRate = {
        "1": [
            10000
        ],
        "2": [
            5000,
            5000
        ],
        "3": [
            3000,
            4000,
            3000
        ],
        "4": [
            2000,
            3000,
            3000,
            2000
        ],
        "5": [
            1000,
            1000,
            3000,
            3000,
            2000
        ]
    }

    /**
     * 游戏模式   
     * 自动模式/,,,
     */
    public gameAttackModel: GameAttackModel = GameAttackModel.MANUAL

    /**
     * 转换数据
     */
    public parsePlayerData() {
    }

    /**
     * NearWaterScene
     * 
     */
    public box_game: Laya.Box;
    /**
     * gameScen
     */
    public box_gameScene_game: Laya.Box;

    public playerShip: BaseShipUi;

    public otherShip: BaseShipUi;

    public playEffect(soundName: SoundConst) {
        SoundManager.getInstance().playEffect(soundName);
    }

    public async createSkeleton(url): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            AnimationManager.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                if (boomAnimation == null) {
                    resolve(boomAnimation);
                    return;
                }
                console.log("aniNum =", boomAnimation.getAnimNum());
                boomAnimation.player.playbackRate = 1;
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;
                resolve(boomAnimation);
            });
        })


    }

    /**
     * 获取基础配置
     * @param url 
     */
    public async getBaseConfig(url): Promise<any> {
        return new Promise((resolve) => {
            let jsonUrl = url;
            Laya.loader.load(jsonUrl + GameMgr.getInstance().randomVersion, Laya.Handler.create(this, (res) => {
                console.log("configs >>> ", res);

                // GameManager.instance.maxLevel = res.invite;
                MiniManeger.instance.shareInfo = res.shareInfo;
                InviteManager.getInstance().inviteConfig = res.invite;
                resolve()
            }));

        })

    }
    public loadCongigs(url): Promise<any> {
        return new Promise((resolve) => {
            let jsonUrl = url;
            Laya.loader.load(jsonUrl + GameMgr.getInstance().randomVersion, Laya.Handler.create(this, (res) => {
                resolve(Utils.copy(res))
            }));
        });
    }

    /**
     * 冒险模式的猪的属性模型
     */
    public pigObj = {};

    /**
     * 子弹的属性模型
     */
    public bulletObj = {};


    /**
     * 增加碰撞体
     */
    public addCollider(gameObj: any) {
        if (gameObj) {
            this.colliderObj[gameObj.objInfo_.id] = gameObj;
        }
    }

    /**
     * 移除碰撞体
     */
    public removeCollider(id: string) {
        let obj = this.colliderObj[id];
        if (obj) {
            // ObjectPool.instance.recoveryObj(obj);
            obj.removeSelf();
        }
        delete this.colliderObj[id];
    }


    public removeAllPig() {
        for (var id in this.pigObj) {
            if (this.pigObj[id]) {
                ObjectPool.instance.recoveryObj(this.pigObj[id]);
            }
            delete this.pigObj[id];
        }
    }

    public removeAllBullet() {
        for (var id in this.bulletObj) {
            if (this.bulletObj[id]) {
                ObjectPool.instance.recoveryObj(this.bulletObj[id]);
            }
            delete this.bulletObj[id];
        }
    }


    /**
     * 移除所有碰撞体
     */
    public removeAllCollider() {
        for (var id in this.colliderObj) {
            this.removeCollider(id);
        }
    }

    public colliderObj = {};

    /**
     * 游戏状态
     */
    public gameStatus: GAMESTATUS = GAMESTATUS.READY;


    public gamePause() {
        Laya.physicsTimer.pause();
    }
    public gameResume() {
        Laya.physicsTimer.resume();
    }

    /**
     * 创建血量的数字
     */
    public createBloodText(data: { x: number, y: number, showText: string, isCrit?: boolean, isReduction?: boolean }) {
        let text_show = Laya.Pool.getItemByClass('text_show', Laya.Box);
        text_show.autoSize = true;
        let prefix: string = 'resource/assets/img/game/sz/';
        if (data.isCrit) {
            prefix = 'resource/assets/img/game/sz_2/';

        } else if (data.isReduction) {
            prefix = 'resource/assets/img/game/sz_3/';
        }
        BitmapLabelUtils.setLabel(text_show, data.showText, prefix, 0);
        if (data.isCrit) {
            let img = new Laya.Image();
            img.skin = 'resource/assets/img/game/sz_2/C.png';
            img.centerX = 0;
            img.y = 62;
            text_show.addChild(img)
        }
        text_show.x = data.x;
        text_show.y = data.y;
        text_show.alpha = 1;
        let ys = text_show.y - 100;

        Laya.Tween.to(text_show, { y: ys, alpha: 0.2 }, 1500, null, Laya.Handler.create(text_show, () => {
            text_show.removeSelf();
            Laya.Pool.recover('text_show', text_show);
        }))
        GameManager.instance.box_gameScene_game.addChild(text_show);
    }
    /**
     * 计算减少的血量
     * attackType  单位存在三种类型，即空中单位、战舰单位和潜艇单位
     */
    public calDeleteBlood(data: { bullet: BaseBullet, attackType?: AttackType }): number {
        let deleteBlood = 0;
        let isCrit = false;
        let bower = data.bullet.objInfo_.owner
        if (data.bullet.objInfo_ && data.bullet.objInfo_.owner) {
            let player = data.bullet.objInfo_.owner;
            let random = Utils.getRandom(0, 100);
            isCrit = random < player.objInfo_.critPercent / 100;
            let attack = player.objInfo_.attack
            if (data.bullet.objInfo_.bid == 100109) {
                attack /= 5;
            }
            // isCrit = true
            if (isCrit) {/////暂定克制关系减免系数为0.5
                if (data.bullet.objInfo_.type = GameConstant.Player) {
                    MiniManeger.instance.vibrateShort({});
                }

                deleteBlood = attack * player.objInfo_.crit;// ( * 100 + 100) / 100;
            } else {
                deleteBlood = attack;
            }
        }

        deleteBlood = deleteBlood < 1 ? 1 : deleteBlood;
        if (GameManager.instance.gameModel == GameModel.Match) {
            if (bower && data.attackType != null && (bower.objInfo_.attackType == data.attackType || bower.objInfo_.attackType == AttackType.All)) {
                this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isCrit: isCrit })
            } else {
                deleteBlood = deleteBlood * (1 - 0.3);
                deleteBlood = deleteBlood < 1 ? 1 : deleteBlood;
                this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isReduction: true })
            }
        } else {
            this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isCrit: isCrit })
        }



        console.log("deleteBlood", deleteBlood);
        return Math.floor(deleteBlood);
    }

    public baseGameInfoSort(a: BaseGameInfo, b: BaseGameInfo) {
        if (a.id > b.id) {
            return 1;
        } else if (a.id < b.id) {
            return -1;
        }
        return 1;
    }

    /**
     * 计算战斗值
     */
    public calFightValue(shipInfo?: DataType.netData.ShipInfp, isOther: boolean = false): { attackSky: number, attackWater: number, attackUndetWater: number } {
        if (shipInfo == null) {
            shipInfo = GameData.getInstance().localUserShipInfo;
        }

        let player = shipInfo.player;
        let attackSky = 0;
        let attackWater = 0;
        let attackUndetWater = 0;
        for (var index in player) {
            let uid = player[index];
            if (uid == 0) {
                continue;
            } else {

                let baseInfo: BaseCatGameInfo = null;
                if (isOther) {
                    baseInfo = GameManager.instance.getBaseInfoByUidAndType(uid, BaseInfoType.Cat, GameData.getInstance().otherprop) as BaseCatGameInfo;
                } else {
                    baseInfo = GameManager.instance.getBaseInfoByUidAndType(uid, BaseInfoType.Cat) as BaseCatGameInfo;
                }

                if (baseInfo != null) {
                    attackSky = Math.floor(attackSky);
                    attackWater = Math.floor(attackWater);
                    attackUndetWater = Math.floor(attackUndetWater);
                    baseInfo.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseInfo.id].attack_type);
                    if (baseInfo.attack_type == AttackType.All) {
                        attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                    } else if (baseInfo.attack_type == AttackType.Sky) {
                        attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                    } else if (baseInfo.attack_type == AttackType.Water) {
                        attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                    } else if (baseInfo.attack_type == AttackType.UnderWater) {
                        attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                    }
                }
            }

        }

        return { attackSky: Math.floor(attackSky), attackWater: Math.floor(attackWater), attackUndetWater: Math.floor(attackUndetWater) }


    }

    /**
     * 得到随机的一个位置
     * 处理船，猪等
     * 根据类型处理
     */
    public getRandomLoca(type: GameConstant): { x: number, y: number } {
        let ys = 0;
        let xs = 0;
        if (type == GameConstant.Enemy) {
            let wid = GameManager.instance.playerShip.width;
            let height = GameManager.instance.playerShip.box_detail.height;
            xs = GameManager.instance.playerShip.x + Utils.getRandom(-wid / 2, wid / 2);
            ys = GameManager.instance.playerShip.y + Utils.getRandom(-height / 2, height / 2)
        }
        else {
            if (GameManager.instance.gameModel == GameModel.Match) {
                let wid = GameManager.instance.otherShip.width;
                let height = GameManager.instance.otherShip.box_detail.height;
                xs = GameManager.instance.otherShip.x + Utils.getRandom(-wid / 2, wid / 2);;
                ys = GameManager.instance.otherShip.y + Utils.getRandom(-height / 2, height / 2);;
            } else {
                let pigObj = GameManager.instance.pigObj;
                let len = Utils.getObjLength(pigObj);
                let index = 0;
                let random = Math.floor(Math.random() * len);
                for (var id in pigObj) {
                    let pigPlayer = pigObj[id] as PigPlayer;
                    if (pigPlayer.isRecovery || pigPlayer.isDead) {
                        Laya.timer.clearAll(pigPlayer);
                        pigPlayer.pigLevelScene();
                        len--;
                        random = Math.floor(Math.random() * len);
                        delete GameManager.instance.pigObj[id]
                        continue;
                    }
                    // if (pigPlayer.isDead) {
                    //     delete GameManager.instance.pigObj[id]
                    //     continue;
                    // }

                    xs = pigPlayer.x;
                    ys = pigPlayer.y;
                    if (index == random) {
                        break;
                    }
                    index++;
                }
            }
        }
        return { x: xs, y: ys };
    }

    /**
     * 获取免费钻石
     */
    public freeDiamond(count: number) {
        // GameData.getInstance().playerData.diamond += count;
        GameMgr.getInstance().updateBaseData(1002, count);
        GameData.getInstance().freeTimes.count++;
        GameInfoManager.getInstance().saveInfo(GameConst.FREE_DIAMOND);
    }

    /**
     * 是否能免费获取钻石
     */
    public judgeCanFreeGetDiamaond() {
        let lastTime = GameData.getInstance().freeTimes.lastTime;
        let currTime = (new Date()).getTime();
        let isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
        GameData.getInstance().freeTimes.lastTime = currTime;
        if (isOneDay) {
            let count = GameData.getInstance().freeTimes.count;
            if (count >= 6) {//不可领取
                return false;
            }
        } else {
            GameData.getInstance().freeTimes.count = 0;
        }
        GameInfoManager.getInstance().saveInfo(GameConst.FREE_DIAMOND);
        return true;
    }


    /**
     * 拷贝数据
     * @param bulletInfo 
     */
    public copyBulletInfo(bulletInfo: BulletInfo): BulletInfo {
        let newBulletInfo = new BulletInfo();
        newBulletInfo.attack = bulletInfo.attack;
        newBulletInfo.bid = bulletInfo.bid;
        newBulletInfo.bulletId = bulletInfo.bulletId;
        newBulletInfo.canMakeEnemyStop = bulletInfo.canMakeEnemyStop;
        newBulletInfo.gravityScale = bulletInfo.gravityScale;
        newBulletInfo.height = bulletInfo.height;
        newBulletInfo.isAttackCanPt = bulletInfo.isAttackCanPt;
        newBulletInfo.owner = bulletInfo.owner;
        newBulletInfo.showSmoke = bulletInfo.showSmoke;
        newBulletInfo.star = bulletInfo.star;
        newBulletInfo.type = bulletInfo.type;
        newBulletInfo.velx = bulletInfo.velx;
        newBulletInfo.vely = bulletInfo.vely;
        newBulletInfo.width = bulletInfo.width;

        return newBulletInfo
    }
    /**
     * 用户授权按钮
     * 特殊处理
     */
    public userInfoBtn: any;




    //数组元素叠加 [1,2,3,4,,] -> [1,3,6,10,,,,]
    public arrOverAdd(arr) {
        if (!arr || arr.length <= 0) {
            return [];
        } else {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (i == 0) {
                    temp[i] = parseInt(arr[i]);
                } else {
                    temp[i] = temp[i - 1] + parseInt(arr[i]);
                }
            }
            return temp;
        }
    }


    /**
     * 获取数组中最接近的值得index
     * @param random 随机数
     * @param weightArray 权重数组
     * @returns {number}
     */
    public getArrIndex(random, weightArray) {
        var index = 0;
        if (random <= weightArray[0]) {
            return 0;
        } else if (random >= weightArray[weightArray.length - 1]) {
            index = weightArray.length - 1;
            return index;
        } else {
            for (var i = 0; i < weightArray.length; i++) {
                if (random <= weightArray[i]) {
                    index = i;
                } else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break
                } else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                    index = i + 1;
                    break;
                }
            }
        }
        return index;
    }

    public dropGold(x: number, y: number) {
        let goldData = new GameObjInfo();
        goldData.width = 80;
        goldData.height = 80;
        goldData.id = Laya.Utils.getGID();;
        let goldView = ObjectPool.instance.createObjectByName(GoldView, goldData) as GoldView;
        goldView.x = x;
        goldView.y = y;
        GameManager.instance.box_game.addChild(goldView);
        GameManager.instance.goldObj[goldData.id] = goldView;
    }

    public goldObj = {};

    public removeAllGoldView() {
        let goldObj = this.goldObj;
        for (var id in goldObj) {
            let obj = goldObj[id] as GoldView;
            obj.destroy();
            delete goldObj[id];
        }
    }
    /**
     * 得到舰长的信息
     */
    public getCaptainInfoByPlayerLevel(): { critPercent: number, blood: number, attack: number } {
        let playerLevel = GameData.getInstance().playerData.playerLevel;
        let captainInfo = ConfigManager.getInstance().CaptainInfo;
        let info = captainInfo[playerLevel - 1];
        if (info == null) {
            info = captainInfo[captainInfo.length - 1]
        }
        return { critPercent: info.captainCrit, blood: info.captainHp, attack: info.captainAtt }

    }

    /**
   * 拖动一个物品(拖动完成回调)
   * @param display 拖动对象
   * @param startPoint 起始点
   * @param offset 触摸到到锚点偏移量
   * @param moveCallback 拖动完成回调
   * @param callback 拖动完成回调
   * @param isRecover 松开鼠标是否恢复原位置
   * @param judgeDistance 判定距离
   */
    public dragResult(display: Laya.Sprite, startPoint: { x: number, y: number }, offset: { x: number, y: number }, moveCallback?, callback?: Function,
        isRecover = false, judgeDistance: number = 0) {
        let mouseMove = (evt: Laya.Event) => {
            // console.log("拖动物品", evt.stageX - offset.x, display.x, evt.stageY - offset.y, display.y)
            moveCallback && moveCallback(evt, () => {
                display.x = evt.stageX - offset.x;
                display.y = evt.stageY - offset.y;
            })
        }
        let mouseUp = (evt: Laya.Event) => {
            if (Utils.getDistance(startPoint, { x: evt.stageX, y: evt.stageY }) >= judgeDistance) {
                callback && callback(evt);
            }
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, mouseUp);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, mouseUp);
            Laya.stage.off(Laya.Event.MOUSE_OVER, this, mouseUp);
            if (isRecover) {
                display.pos(startPoint.x, startPoint.y);
            }

        }
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OVER, this, mouseUp);
    }
    public lineBox: Laya.Box

    /**|
     * 通过速度方向获取抛物线的点
     */
    public getRunLineByVel(vel: { x: number, y: number, gravityScale: number }, data: { x: number, y: number }, count: number) {
        let velxs = vel.x * 50;
        let velys = vel.y * 50;

        let arr = new Array<{ x: number, y: number }>();
        this.lineBox.removeChildren();
        for (let i = 0; i < count; i++) {
            let point = { x: 0, y: 0 };
            let ts = 1 / 20;
            ts = (i) * ts;
            let xs = velxs * ts
            let ys = velys * ts + 0.5 * ts * ts * vel.gravityScale * 500;
            // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>", ys, xs, vel.gravityScale, velxs, velys)
            point.x = data.x + xs;
            point.y = data.y + ys;
            arr.push(point);

            // let icon_line = new Laya.Image();
            // icon_line.skin = 'resource/assets/img/game/bullet/bulletSmoke_1.png';
            // icon_line.size(20, 20);
            // icon_line.x = point.x;
            // icon_line.y = point.y;
            // this.lineBox.addChild(icon_line);
            let spr = new Laya.Sprite();
            spr.graphics.drawCircle(point.x, point.y, 10, "#69423a", 10);
            this.lineBox.addChild(spr);
        }

        // console.log("arr", arr);

    }



    /**
     * 盒子2
     * @param data 
     */
    public async showGameBox2(data: { closeFun?: Function, showFun?: Function, continueFun?: Function }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            let arr = await DYChannelMgr.instance.refreshGameList(false);
            if (arr) {
                if (!data) data = {};

                ViewManager.getInstance().showView(WechatBoxUI2, data);
            }
        }
    }
    /**
     * 盒子3
     * @param data 
     */
    public async showGameBox3(data: { closeFun?: Function, showFun?: Function, continueFun?: Function }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            let arr = await DYChannelMgr.instance.refreshGameList(false);
            if (arr) {
                if (!data) data = {};

                ViewManager.getInstance().showView(WechatBoxUI3, data);
            }
        }
    }
    /**
     * 盒子4
     * @param data 
     */
    public async showGameBox4(data: { closeFun?: Function, showFun?: Function, continueFun?: Function }) {
        if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
            let arr = await DYChannelMgr.instance.refreshGameList(false);
            if (arr) {
                if (!data) data = {};
                ViewManager.getInstance().showView(WechatBoxUI4, data);
            }
        }
    }

    public async showMoreGameBoxSingle(len: number) :Promise<MoreGameBoxSingle> {
        return new Promise(async (resolve) => {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                let arr = await DYChannelMgr.instance.refreshGameList(false);
                if (arr) {

                    let moreGameBoxSingle: MoreGameBoxSingle = new MoreGameBoxSingle({ len: len })
                    resolve(moreGameBoxSingle);
                } else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }
        })

    }
    /**
     * 
     */
    public async showGameBanner(count: number, scrollCount: number): Promise<DYMoreGameBanner> {
        return new Promise(async (resolve) => {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame()) {
                let arr = await DYChannelMgr.instance.refreshGameList(false);
                if (arr) {

                    let moreGameBanner = new DYMoreGameBanner({ len: count, scrollCount: scrollCount });
                    resolve(moreGameBanner);
                } else {
                    resolve(null);
                }
            } else {
                resolve(null);
            }
        })

    }
}

window['GameManager'] = GameManager;


export enum BaseInfoType {
    Ship,
    Cat,
    Booster,
    Pig
}

export enum GameAttackModel {
    /**
     * 自动
     */
    AUTO,
    MANUAL
}
/**
 * 游戏模式
 */
export enum GameModel {
    Adventure,//冒险
    Match//帆船赛
}