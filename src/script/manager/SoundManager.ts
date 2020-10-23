import SoundUtil from "../tool/SoundUtil";

/**
* 音频播放管理
*/
export default class SoundManager {

    private constructor() {

    }

    private static instance: SoundManager;
    public static getInstance(): SoundManager {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    }

    /** 当前正在播放的背景音乐 */
    public curBgMusic: SoundConst;

    /** 播放背景音乐 */
    public playBgMusic(soundName: SoundConst) {
        if (!soundName) return;
        if (this.curBgMusic != soundName) {
            this.curBgMusic = soundName
            SoundUtil.getInstance().bgm = soundName;
        } else {
            SoundUtil.getInstance().playBgMusic();
        }
    }

    /** 停止背景音乐 */
    public stopBgMusic() {
        SoundUtil.getInstance().stopBgMusic();
    }

    /** 播放音效 */
    public playEffect(soundName: SoundConst) {
        SoundUtil.getInstance().playEffect(soundName);
    }
}

export enum SoundConst {
    /** 游戏首页背景音乐 */
    MainBgm = "mainMenuBGM",
    /** 按钮点击音效 */
    BtnClick = "ButtonPress",
    /** 屏幕点击音效 */
    ScreenClick = "tab",
    /** 弹窗关闭音效 */
    ClosePop = "WindowClose",
    /** 弹窗打卡音效 */
    OpenPop = "WindowOpen",
    /** 战斗结算界面展示星星星星跳出时 */
    StarGather = "StarGather",
    /** 开启宝箱时播放 */
    ChestOpen = "ChestOpen",
    /** 战斗结束胜利，玩家在结算界面获得奖励时播放 */
    Reward = "Reward",
    /** 玩家拖动更换船、猫和增幅器生效时播放 */
    PartSelect = "PartSelect",
    /** 船、猫和增幅器获得经验时播放 */
    GetExp = "ui_upgrade",
    /** 领取金币 */
    GetGold = "Purchase",

    /** 游戏内背景音乐 */
    GameBgm = "battleBGM",

    /** 玩家胜利时在战斗界面停留时播放 */
    Victory = "victory",

    /** 炸弹从空中或水中释放时播放(飞天炸弹猪、水下炸弹猪) */
    BombDrop = "bomb_drop",
    /** 猫咪在屏幕的显示内出生时播放 */
    CatsAppear = "catsAppear",


    /** 炸弹、导弹、鱼雷和高射火炮爆炸时播放(对舰猫、反潜猫、水面导弹猪、水下导弹猪、水下海胆猪、舰长、海盗猫) */
    Explosion = "explosion",

    /** 导弹和鱼雷发射时播放(对舰猫、反潜猫、水面导弹猪、水下导弹猪、水下海胆猪) */
    RocketShot = "rocketShot",

    /** 普通子弹命中是播放(对空猫、飞天射击猪) */
    SniperHit = "SniperHit",

    /** 普通子弹射出时播放(对空猫、飞天射击猪) */
    SniperShot = "SniperShot",

    /** 高射火炮发射时播放(舰长、水面导弹猪、全能猫) */
    CannonShot = "CannonShot",

    /** 空中、水面的猪死亡时播放(水面导弹猪、水面刀锋猪) */
    SteamerDeath = "SteamerDeath",

    /** 水下猪死亡时播放(水下海胆猪、水下导弹猪、水下炸弹猪) */
    OctopusDeath = "OctopusDeath",
    /** 瞬移猪连发射击 */
    BotShot = "BotShot",
    /** 战斗开始时玩家船只入场 */
    PirateShipStart = "PirateShipStart",
    /** 增幅器被激活时播放 */
    BoosterActive = "berserk_and_bandolier_click",
    /** 玩家船只死亡时播放 */
    PiratesDeath = "PiratesDeath",
}