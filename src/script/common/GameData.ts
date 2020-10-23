import GameConst from "./GameConst";
import * as DataType from "./GameDataType";

/**
 * 游戏数据缓存
 */
export class GameData {
    private constructor() { }

    private static instance: GameData;

    /** 皮肤 */
    public skinArr: Array<{ id: number, url: string, isUnlock: boolean, isUsing: boolean }> = [];

    public hasSkin: any = { 1: { isUnlock: true, isUsing: true } };

    public static getInstance(): GameData {
        if (!GameData.instance) {
            GameData.instance = new GameData();
        }
        return GameData.instance;
    }
    public channel: string = "duyou";

    /** 服务器Http地址（清空服务器数据）*/
    public URL_DELETE_DATA: string = "https://littlegame.32yx.com/DelMiniGameData.fcgi";
    // public URL_DELETE_DATA_TEST: string = "https://yxtest.32yx.com/DelMiniGameData.fcgi";
    public URL_DELETE_DATA_TEST: string = "https://172.17.3.217:8090/DelMiniGameData.fcgi";

    /** 服务器Http地址（保存数据）*/
    public URL_SAVE_DATA: string = "https://littlegame.32yx.com/MiniGameData.fcgi";
    public URL_SAVE_DATA_TEST: string = "http://172.17.3.217:8090/MiniGameData.fcgi";

    /** 服务器Http地址（排行榜）*/
    public URL_OF_RANK: string = "https://littlegame.32yx.com/MiniGameRank.fcgi";
    public URL_OF_RANK_TEST: string = "http://172.17.3.217:8090/MiniGameRank.fcgi";

    /** 服务器Http地址（邀请关联）*/
    public URL_OF_INVITE: string = "https://littlegame.32yx.com/Invitation.fcgi";
    public URL_OF_INVITE_TEST: string = "http://172.17.3.217:8090/Invitation.fcgi";

    /** 从服务器获取当前时间戳地址 */
    public URL_TIMESTAMP: string = "https://littlegame.32yx.com/gettime.php";

    /** 服务器Http地址（微信登录请求） */
    public URL_WX_REQ: string = "https://yxtest.32yx.com/MiniGame.fcgi";
    public URL_WX_REQ_TEST: string = "http://172.17.3.217:8090/MiniGame.fcgi";

    /**
     * 小游戏资源路径根目录
     */
    public MinigameResUrlRoot = 'https://package.32yx.com/ecy_game_small/laya/catAndPig/';
    /**
     * 小游戏资源全路径
     */
    public MinigameResAllUrl = 'https://package.32yx.com/ecy_game_small/laya/catAndPig/';
    /**
     * 小游戏资源版本号
     */
    public resVersion = '1_14/'
    /**
     * 修改数据信息
     * 如果版本不对应  修改到新数据类型
     * 当前只处理删除
     */
    public strogeVersion = '1001';
    /** 游戏ID */
    public gameId: string = "1038";

    /** 非正常退出观看视频提示 */
    public videoTips: string = "视频观看完整才能获得奖励哦";

    /** 
     * 服务类型 
     * (nts 内网测试服)
     * (wts 外网测试服)
     * (wzs 外网正式服)
     * */
    private serverConf_: "nts" | "wts" | "wzs";

    /**
     * 服务类型 只能设置一次 即可修改服务并且指明版本号
     */
    public set serverConf(sc) {
        this.serverConf_ = sc;
        this.initServer();
    }
    /**
     * 
     * 
     * 
     * 当前游戏版本号
     * 必须是数字
     */
    public gameVersion: number = 1002;

    public initConfig(res) {
        GameConst.infos = res// JSON.parse(res + "");
        if (DeviceUtil.isWXMiniGame()) {
            GameData.getInstance().serverConf = GameConst.infos.serverConf;
        } else {
            GameData.getInstance().serverConf = "nts";
        }
        //    = GameConst.infos.version;
        if (GameData.getInstance().gameVersion > GameConst.infos.version) {
            GameData.getInstance().isConVersion = true;
        } else {
            GameData.getInstance().isConVersion = false;
        }
        GameData.getInstance().isTestVersion = GameData.getInstance().gameVersion == 1;
        GameData.getInstance().bannerId = GameConst.infos.bannerId;
        GameData.getInstance().videoId = GameConst.infos.videoId;
        GameData.getInstance().longVideoId = GameConst.infos.longVideoId;
        GameData.getInstance().isOpen = GameConst.infos.isOpen;
        GameData.getInstance().strogeVersion = GameConst.infos.strogeVersion;
        GameData.getInstance().adConversion = GameConst.infos.adConversion;


    }

    public gamelist: Array<any> = [];
    /**P
     * 是否提交审核版本
     * 提交审核版本 为true时，关闭分享看视频按钮等，只保留基本游戏功能，应付审核版本
     * false时，正常游戏功能
     */
    public isConVersion = false;

    /**
     * 是否测试版本
     */
    public isTestVersion = true;
    /**
     * 是否授权后获取openid
     */
    public isGetOpenid = true;
    /**
     * banner
     * 
     */
    public bannerId: Array<string>;
    /**
     * 短视频id
     */
    public videoId: Array<string>;
    /**
     * 长视频id
     */
    public longVideoId: Array<string>;
    /**
     * 是否维护游戏
     */
    public isOpen: boolean;
    /**
     * 广告审核版本
     */
    public adConversion: boolean;


    /**
     * 初始服务配置
     */
    private initServer(): void {
        switch (GameData.instance.serverConf_) {
            case "nts":
                this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                break;
            case "wts":

                break;
            case "wzs":

                break;
        }
    }

    public enterGameInfo: any;

    private _defaultMaxLevel: number = 90;
    /** 当前版本总关卡数 */
    public set defaultMaxLevel(level: number) {
        this._defaultMaxLevel = level;
    }
    public get defaultMaxLevel(): number {
        return this._defaultMaxLevel;
    }

    /** 用户基本信息 */
    public userInfo: DataType.netData.UserInfos = new DataType.netData.UserInfos();

    public playerData: DataType.netData.PlayerData = new DataType.netData.PlayerData();

    /** 签到相关数据 */
    public signIn: DataType.netData.SignIn = new DataType.netData.SignIn();

    /** 邀请相关数据 */
    public invite: DataType.netData.Invite = new DataType.netData.Invite();

    /** 任务相关数据 */
    public task: DataType.netData.Task = {
        lastTime: null,
        // count: {},
        taskInfo: [{ id: 1, state: 0, count: 0, locked: false }],
        taskTimes: 0,
        surpriseed: false,
        taskVideo: 0
    };

    /** 自己拥有猫，船，增幅器相关 */
    public prop: DataType.netData.Prop = {
        baseInfoId: 1000,
        baseInfos: {
            booster: [],
            ship: [
                {
                    attack_type: 2,
                    exp: 0,
                    growthHp: 5.23,
                    hasShield: false,
                    id: 110101,
                    initialHp: 53.3,
                    level: 0,
                    quality: 1,
                    shieldId: 0,
                    slot: 1,
                    slotArr: [3],
                    star: 1,
                    type: 0,
                    uid: 2,
                }

            ],
            cat: [
                {
                    attack_type: 4,
                    exp: 0,
                    growthAtt: 0,
                    growthCrit: 0,
                    growthHp: 0,
                    id: 120901,
                    initialAtt: 10,
                    initialCrit: 149,
                    initialHp: 40,
                    isNormal: true,
                    level: 0,
                    quality: 1,
                    star: 1,
                    type: 1,
                    uid: 1,
                },
                {
                    attack_type: 1,
                    exp: 0,
                    growthAtt: 1.85,
                    growthCrit: 102,
                    growthHp: 2.8,
                    id: 120001,
                    initialAtt: 5.44,
                    initialCrit: 171,
                    initialHp: 15.6,
                    isNormal: true,
                    level: 0,
                    quality: 1,
                    star: 1,
                    type: 1,
                    uid: 4,
                },
                {
                    attack_type: 1,
                    exp: 0,
                    growthAtt: 1.85,
                    growthCrit: 102,
                    growthHp: 2.8,
                    id: 120001,
                    initialAtt: 5.44,
                    initialCrit: 171,
                    initialHp: 15.6,
                    isNormal: true,
                    level: 0,
                    quality: 1,
                    star: 1,
                    type: 1,
                    uid: 5,
                },

            ]
        }
    }
    /**
     * 其他玩家拥有的船只基本信息
     * 从表里读取配置
     */
    public otherprop: DataType.netData.Prop = {
        baseInfoId: 10,
        baseInfos: {
            booster: [],
            ship: [{
                "type": 0,
                "hasShield": false,
                "slot": 1,
                "uid": 2,
                "quality": 1,
                "star": 1,
                "id": "110201",
                "level": 0,
                "exp": 0,
                "growthHp": 7.27,
                "initialHp": 69
            }],
            cat: [{
                "type": 1,
                "isNormal": true,
                "uid": 1,
                "quality": 1,
                "star": 1,
                "id": "120901",
                "level": 0,
                "exp": 0,
                "growthAtt": 2.5,
                "growthCrit": 200,
                "growthHp": 4,
                "initialHp": 20,
                "initialAtt": 10,
                "initialCrit": 150
            }]
        }
    }

    /**
     * 自己当前船使用的配置
     * 测试的默认值
     * 此数据是直接使用到游戏场景中的、
     *   在两只船对打的时候，对手的配置与此一样
     *
     */
    public localUserShipInfo: DataType.netData.ShipInfp = {
        ship: {
            star: 1,//船的星级
            uid: 2,//配置的唯一uid
        },
        booster: 0,//增幅器   随机有  就直接放上去
        player: {
            box_player1: 1,//舰长  使用配置的唯一uid
            box_player2: 0,//一号船员
            box_player3: 0,//二号船员
            box_player4: 0,//三号船员
            box_player5: 0,//四号船员
        }
    }
    /**
     * 其他玩家的数据
     * 不存储
     */
    public localOtherShipInfo: DataType.netData.ShipInfp = {
        ship: {
            star: 1,//船的星级
            uid: 2,//配置的唯一uid
        },
        booster: 0,//增幅器   随机有  就直接放上去
        player: {
            box_player1: 1,//舰长  使用配置的唯一uid
            box_player2: 0,//一号船员
            box_player3: 0,//二号船员
            box_player4: 0,//三号船员
            box_player5: 0,//四号船员
        }
    }

    /** 宝箱相关数据 */
    public treasure: DataType.netData.Treasure = {
        baseUid: 4,
        owns: [
            {
                endTime: null,
                id: 160002,
                state: 0,
                uid: 5,
                videoJump: 0
            }
        ],
        vacancy: 3,
        videoBox: { num: 0, times: 1, lastTime: null }
    }

    // /** 关卡相关数据 */
    // public level: DataType.netData.Level[] = [
    //     { id: 20001, star: 3 }
    // ]

    /** 关卡相关数据 */
    public level = {
        dungeon: { 20001: { star: 3 } },
        encounter: {}
    };
    /**
     * 免费砖石
     */
    public freeTimes = { count: 1, lastTime: 0 }
    public isByShare: boolean = false;
    public inviterId: number = null;
    public inviterPlatform: any = null;

    ////////////////////////////////////////////////////////////////////////////////////////

    /** 人物在地板或隔板上时的速度 */
    private _defaultV: { x: number, y: number } = { x: 8, y: 0 };

    /**
     * 人物在地板或隔板上时的速度
     * @param direction 移动方向
     */
    public defaultV(direction: "left" | "right"): { x: number, y: number } {
        switch (direction) {
            case "left": return { x: -this._defaultV.x, y: this._defaultV.y };
            case "right": return this._defaultV;
        }
    }

    /** 最大关卡数 */
    public maxLevel: number = 100;

}