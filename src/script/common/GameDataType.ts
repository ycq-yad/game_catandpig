import { TreasureConfig, DungeonItemConfig, StarConfig, BoosterConfig, ShipConfig, CatConfig } from "./GameConfigType";

export module localData {

    /** 首页头部信息的数据体 */
    export class TopInfo {
        nick: string;
        head: string;
        /** 当前等级 */
        currLevel: number;
        /** 当前金币 */
        currGold: number;
        /** 当前钻石 */
        currDids: number;
        /** 当前战力 */
        currCombat: number;
    }

    export class SignData {
        id: number;
        name: string;
        /**奖励值 type:1->钥匙 num:奖励数值 */
        reward: {
            type: number,
            num: number
        }[];
        /**是否已签到 */
        signed: boolean;
        /**能否签到 */
        canSign: boolean;
    }

    export class TaskData {
        /** id */
        id: number;
        /** 任务描述 */
        teskDes: string;
        /** 任务参数 */
        teskPar: number;
        /** 任务奖励 */
        reward: string;
        /** 任务当前进度 */
        progress: number;
        /** 
		 * 任务状态
		 * 0：未完成；1：已完成未领取奖励；2：已完成已领取奖励
		 */
        state: number;
        /** 锁定任务 */
        locked: boolean;
        /** 剩余看视频换任务次数 */
        videoTimes: number;
    }

    export class TimeBoxData {
        /** 唯一id */
        uid: number;
        id: number;
        /** 宝箱状态 0：未开启倒计时，1：已开启倒计时，2：倒计时结束 */
        state: number;
        /** 剩余时间 s */
        surplusTime: number;
        /** 看视频跳过时间 每个时间宝箱只有一次机会 */
        videoJump: number;
        config: TreasureConfig;
    }

    export class PropData {
        /** 船只、猫、增幅器的唯一性id 区分相同外形 不同配置的id */
        uid: number;
        /** 类型（0、船，1、猫，2、增幅器） */
        type: number;
        /** 基础的id 获取外形等 */
        id: number;
        /** 星级 */
        star: number;
        /** 生命值 */
        hp: number;
        /** 等级 */
        level: number;
        /** 品质（1：普通，2：稀有）*/
        quality: number;
        /** 经验值 */
        exp: number;
        /** 槽位 */
        slot?: number;
        /** 是否有护盾 */
        hasShield?: boolean;
        /** 护盾Id */
        shieldId?: number;
        /** 船配置 */
        shipConfig?: ShipConfig;
        /** 攻击 */
        atk?: number;
        /** 暴击率 未除以100 */
        crit?: number;
        /** 是否是普通怪物 */
        isNormal?: boolean;
        /** 猫配置 */
        catConfig?: CatConfig;
        /** 技能cd */
        skillCD?: number;
        /** 增幅器配置 */
        boosterConfig?: BoosterConfig;
        /** 最大等级 */
        maxLevel: number = 30;
    }

    export class LevelData {
        /** 1=副本，2=遭遇战 */
        type: number;
        /** 关卡id */
        id: number;
        /** 地图id */
        mapId: number;
        /** 剩余星数 */
        surplusStar: number;
        /** 是否解锁 */
        isUnlock: boolean;
        /** 序号 */
        index: number;
        /** 金币产出 */
        outGold: number;
        /** 怪物展示 */
        enemy: string;
        /** 展示位置x|y */
        enemyIconLocate: string;
        isCurLevel: boolean;
        pos: DungeonItemConfig;
    }

    export class RankData {
        /** 1=玩家，2=奖励 */
        type: number;
        /** 赛区编号 */
        zoneNo: number;
        /** 序号 */
        index?: number;
        /** 排名 */
        rank: number;
        /** 名字 */
        name?: string;
        /** 战斗力 */
        combat?: number;
        /** 是否玩家自己 */
        isSelf?: boolean;
        /** 是否已被击败 */
        isBeat?: boolean;
        /** 奖励 */
        reward?: string;
        select?: boolean;
        shipInfo?: any;
    }

    export class ZoneData {
        /** 赛区编号 */
        zoneNo: number;
        /** 玩家等级 */
        playerNo: number;
        /** 通关解锁最大星级 */
        unlockStarMax: number;
        /** 通关解锁最大槽位数 */
        unlockSlotMax: number;
        /** 奖励 */
        reward: string;
        /** 是否已通过 */
        pass: boolean;
        /** 是否当前正在打的赛区 */
        curZone: boolean;
        /** 是否解锁 */
        unlock: boolean;
        /** 是否最后一个 */
        isEnd: boolean;
        /** 是否显示槽位 */
        isShowSlot: boolean;
        /** 是否显示星级 */
        isShowStar: boolean;
    }

    export class CardData {
        id: number;
        posX: number;
        posY: number;
        concard: number[];
    }

    export class CardConfig {
        id: string;
        objWeight: string;
        hpWeight: string;
        atkWeight: string;
    }

    export class InviteData {
        id: number;
        head: string;
        /**奖励值 type:1->钥匙 num:奖励数值 */
        reward: {
            type: number,
            num: number
        }[];
        /**是否已领取 */
        lingqued: boolean;
        /**能否领取 */
        canLingqu: boolean;
    }
}

export module netData {

    /**
     * 用户信息结构体
     */
    export class UserInfos {
        openId: string = "";
        /** 昵称 */
        nick: string = "猫咪舰长";
        /** 头像地址 */
        avatarUrl: string = "";
        /** 性别 */
        sex: number = 0;
        sessionKey: string = "";
        accessToken: string = "";
    }

    /**
     * 玩家数据
     */
    export class PlayerData {
        /** 金币 默认20 */
        public gold: number = 100;
        /** 宝石 默认0 */
        public diamond: number = 0;
        /** 玩家等级(也就是星级)  默认1 */
        public playerLevel: number = 1;
        /** 帆船赛信息 */
        public matchInfo: { zoneNo: number, rank: number } = { zoneNo: 1, rank: null };
        /** 拥有的星星数 默认0 */
        public ownStar: number = 0;
        /** 最大槽位数 默认1 */
        public maxSlot: number = 1;
        /**
         * 是否是新玩家
         */
        public playerGuide: number = 1;
        /**
         * 广告数据
         */
        public lotteryData: { count: number, time: number } = { count: 1, time: new Date().getTime() }
    }

    /** 签到 */
    export class SignIn {
        /** 累计签到次数 */
        total_count: number = 0;
        /** 最近签到时刻 ms */
        timeStamp: number = null;
        /** 已签到轮次 （7天一轮，四轮一循环）*/
        rotations: number = 0;
    }

    /** 邀请奖励相关 */
    export class Invite {
        /** 已经领取过邀请奖励的id数组 */
        public inviteId: number[] = [];
        // /** 当前已领取邀请奖励轮次 */
        // public count: number = 0;
        // /** 是否领取过一轮邀请完成大奖 */
        // public lingqued: boolean = false;
    }

    /**
	 * 邀请人信息
	 */
    export class Inviter {
        public nick: string;
        public openId: string;
    }

    /** 任务 */
    export class Task {
        lastTime: number;
        // count: any;
        taskInfo: {
            /** 任务id */
            id: number;
            /** 任务计数 */
            count: number;
            /** 
             * 任务状态
             * 0：未完成；1：已完成未领取奖励；2：已完成已领取奖励
             */
            state: number;
            locked: boolean;
        }[];
        /** 任务完成次数 */
        taskTimes: number;
        /** 惊喜大奖是否领取 */
        surpriseed: boolean;
        /** 剩余看视频换任务次数 */
        taskVideo: number;
    }

    /** 宝箱 */
    export type Treasure = {
        /** 唯一id，使用之前++ */
        baseUid: number;
        owns: {
            /** 宝箱唯一id */
            uid: number,
            id: number,
            /** 宝箱状态 0：未开启倒计时，1：已开启倒计时，2：倒计时结束 */
            state: number,
            /** 看视频跳过时间 每个时间宝箱只有一次机会 */
            videoJump: number,
            /** 倒计时结束时间 ms */
            endTime: number
        }[];
        /** 时间宝箱剩余空位 */
        vacancy: number;
        /** 每日广告宝箱 */
        videoBox: {
            /** 已获得宝箱个数，每日最多5个 */
            num: number,
            /** 当前宝箱剩余视频次数 */
            times: number,
            /** 上次看视频时间 */
            lastTime: number
        };
    }

    /** 猫，船，增幅器相关 */
    export class ShipInfp {
        ship: {
            star: number,//船的星级
            uid: number,//配置的唯一uid
        };
        booster: number;//增幅器   随机有  就直接放上去
        player: {
            box_player1: number,//舰长  使用配置的唯一uid
            box_player2: number,//一号船员
            box_player3: number,//二号船员
            box_player4: number,//三号船员
            box_player5: number,//四号船员
        }

    }
    /** 猫，船，增幅器相关 */
    export class Prop {
        /** 配置的uid  需要存储 ，使用之前++ */
        baseInfoId: number = 10;
        /** 拥有的船  猫  增幅器等信息 */
        baseInfos = {
            booster: [],
            ship: [],
            cat: []
        };
    }

    /** 关卡 */
    export class Level {
        /** 关卡Id */
        id: number;
        /** 关卡剩余可领取星数 */
        star: number;
    }
}