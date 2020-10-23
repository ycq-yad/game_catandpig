/**
 * 游戏内容常量
 */
export default class GameConst {

    public static ONHIDE = 'onhide';
    public static ONSHOW = 'onshow';
    /**
     * 玩家模型的放大倍数-游戏中
     */
    public static playerModelScale: number = 10;
    /** 用户基本数据 */
    public static BASE_INFO: string = "BASE_INFO";
    /** 签到数据 */
    public static SIGN_INFO: string = "SIGN_INFO";
    /** 邀请奖励相关数据 */
    public static INVITE_INFO: string = "INVITE_INFO";
    /** 皮肤相关数据 */
    public static SKIN_INFO: string = "SKIN_INFO";
    /** 任务相关数据 */
    public static TASK_INFO: string = "TASK_INFO";
    /** 宝箱相关数据 */
    public static BOX_INFO: string = "BOX_INFO";
    /** 拥有道具数据 */
    public static OWN_PROP: string = "OWN_PROP";
    /** 使用道具数据 */
    public static USE_PROP: string = "USE_PROP";
    /** 关卡相关数据 */
    public static LEVEL_INFO: string = "LEVEL_INFO";
    /**
     * 免费获取钻石
     */
    public static FREE_DIAMOND: string = 'FREE_DIAMOND';

    // 本地数据存储的Key值 始
    /** 最高已通关关卡 */
    public static MaxLevel: string = "MaxLevel";
    // 本地数据存储的Key值 终

    public static PlayerTouchScene = "playerTouchScene";


    /**
     * 可以领取任务
     */
    public static CanRecieveTask = 'canRecieveTask'
    /**
     * 冒险界面选择船只等
     */
    public static AdvantureSelecte = 'AdvantureSelecte';

    /**
     * 冒险界面变化
     */
    public static AdvantureChange = 'AdvantureChange';


    /**
     * 下一波
     */
    public static NextWave = 'NextWave';

    /**
     * 游戏结束
     */
    public static GameOver = 'GameOver';
    /**
     * 模式选择修改
     */
    public static ModelChange = 'ModelChange';

    /**
     * 使用增幅器
     */
    public static UseBooster = 'UseBooster';
    /**
     * 重新开始游戏
     */
    public static RestartGame = 'RestartGame';
    /**
     * 游戏暂停或者恢复
     * 传值是  0  暂停，1 恢复
     */
    public static GamePauseOrResume = 'GamePauseOrResume';

    /**
     * 培养界面点击船或者猫
     */
    public static ClickShipOrCat = 'ClickShipOrCat';

    public static RemoveCatOrBooster = 'RemoveCatOrBooster';
    /**
     * app 信息 
     * 
     * showCd 兑换码是否显示
     * serverConf (nts 内网测试服)(wts 外网测试服) (wzs 外网正式服)
     * version 版本号  游戏版本大于此版本号 为审核版本 其他的时候正常
     * bannerId 
     * videoId 
     * isOpen 是否开启（代码运行总控制）
     * */
    public static infos: {
        strogeVersion: any,
        showCd: boolean,
        serverConf: "nts" | "wts" | "wzs",
        version: number,
        bannerId: Array<string>,
        videoId: Array<string>,
        longVideoId: Array<string>,
        isOpen: boolean,
        /** 是否自动录制视频 */
        isAutoMakeVideo: boolean,
        /** 是否停止自动分享视频 */
        isAutoStopShare: boolean,
        /**
         * 广告审核
         * 处理广告审核卡关
         */
        adConversion: boolean,
    };
}