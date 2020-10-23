import GameBufferLoading from "../loading/GameBufferLoading";
import GameLoadingView from "../loading/GameLoadingView";
import { GameData } from "../common/GameData";
import GameEvent from "../common/GameEvent";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import { localData } from "../common/GameDataType";
import { PlayerTopScene } from "../view/home/PlayerTopScene";
import TreasureManager from "./TreasureManager";
import { GameManager } from "./GameManager";


/**
 * 管理器  处理一般数据
 */
export default class GameMgr {

    private static instance: GameMgr;
    public static getInstance(): GameMgr {
        if (!GameMgr.instance) {
            GameMgr.instance = new GameMgr();
        }
        return GameMgr.instance;
    }

    public randomVersion = '';
    private constructor() {
        this.randomVersion = "?v=" + new Date().getTime()

    }
    public loadingView: GameLoadingView;

    /** 注册默认bufferloading界面 */
    public registerBufferLoading(): void {
        BufferLoadingManger.getInstance().registerOneBuffer("GameBufferLoading", new GameBufferLoading());
    }

    /** 显示默认的buffer页面 */
    public showBufferLoading(info: string = ""): void {
        // if (DeviceUtil.isWXMiniGame()) {
        //     platform.showLoading({ mask: true, title: info });
        // } else {

        // }

        BufferLoadingManger.getInstance().showBuffer("GameBufferLoading", info);
        Laya.timer.clear(this, this.hiddeBufferLoading)
        Laya.timer.once(60000, this, this.hiddeBufferLoading);
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
    }

    /** 关闭默认的buffer页面 */
    public hiddeBufferLoading(): void {
        // if (DeviceUtil.isWXMiniGame()) {
        //     platform.hideLoading({});
        // } else {

        // }
        Laya.timer.clear(this, this.hiddeBufferLoading)
        BufferLoadingManger.getInstance().hiddBuffer("GameBufferLoading");
        BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
        BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;
    }

    public com_TopBar: PlayerTopScene;

    public initTopBar() {
        if (!this.com_TopBar) {
            this.com_TopBar = new PlayerTopScene();
            // if (DeviceUtil.getIsIphoneX()) {
            //     this.com_TopBar.pos(20, 123);
            // } else {
            //     this.com_TopBar.pos(20, 43);
            // }
            BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_TopBar);
            this.com_TopBar.visible = false;
        }
    }
    /** 显示顶栏 */
    public showTopBar() {
        if (!this.com_TopBar) {
            this.com_TopBar = new PlayerTopScene();
            // if (DeviceUtil.getIsIphoneX()) {
            //     this.com_TopBar.pos(20, 123);
            // } else {
            //     this.com_TopBar.pos(20, 43);
            // }
            BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_TopBar);
        }
        this.com_TopBar.visible = true;
    }

    /** 隐藏顶栏 */
    public hideTopBar() {
        if (this.com_TopBar) {
            this.com_TopBar.visible = false;
        }
    }

    /** 顶栏点击enable */
    public enableTopBar(enable: boolean) {
        if (this.com_TopBar) {
            this.com_TopBar.mouseEnabled = enable;
        }
    }

    /** 获取头部信息栏所需信息 */
    public getTopInfo(): localData.TopInfo {
        let player = GameData.getInstance().userInfo;
        let info = GameData.getInstance().playerData;
        let data = new localData.TopInfo();
        data.nick = player.nick;
        data.head = player.avatarUrl;
        data.currLevel = info.playerLevel;
        data.currGold = info.gold;
        data.currDids = info.diamond;
        data.currCombat = GameManager.instance.calCombat();
        return data;
    }

    /**
     * 更新玩家基本数据
     * @param id id
     * @param value 变化值
     */
    public updateBaseData(id: number, value: number) {
        switch (id) {
            case 1001://金币
                GameData.getInstance().playerData.gold += value;
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                break;
            case 1002://钻石
                GameData.getInstance().playerData.diamond += value;
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                break;
            default:
                console.warn("参数错误 ->", id);
        }
        console.log("更新玩家基本数据 >>> ", GameData.getInstance().playerData);
    }

    /**
     * 根据id获取icon路径和资源前缀
     * @param id 
     */
    public async getIconUrlById(id: number): Promise<{ route: string, prefix: string }> {
        // console.log(id)
        let data = { route: "", prefix: "" };
        if (id < 10000) {//基础物品

        } else if (id > 110000 && id < 120000) {//船

        } else if (id > 120000 && id < 130000) {//猫

        } else if (id > 130000 && id < 140000) {//猪

        } else if (id > 140000 && id < 150000) {//增幅器

        } else if (id > 150000 && id < 160000) {

        } else if (id > 160000 && id < 170000) {//宝箱
            let config = await TreasureManager.instance.getTreasureConfig(id);
            if (id > 160200) {
                data.route = "resource/assets/img/icon/";
            } else {
                data.route = "resource/assets/img/icon/box/";
            }
            data.prefix = config.icon;
        }
        return data;
    }

    /** 加倍权重（2,3,4倍） */
    private multWeight = {
        "0": [2000, 2000, 6000],//(0-50]
        "50": [2000, 4000, 4000],//(50-100]
        "100": [5000, 3000, 2000],
        "200": [6000, 2000, 2000],
        "500": [8000, 1000, 1000],
        "1000": [10000, 0, 0]
    }

    /**
     * 获取金币加倍倍数
     * @param base 
     */
    public getGoldMult(base: number) {
        let weightArr = [];
        if (base <= 50) {
            weightArr = this.multWeight[0];
        } else if (base > 50 && base <= 100) {
            weightArr = this.multWeight[50];
        } else if (base > 100 && base <= 200) {
            weightArr = this.multWeight[100];
        } else if (base > 200 && base <= 500) {
            weightArr = this.multWeight[200];
        } else if (base > 500 && base <= 1000) {
            weightArr = this.multWeight[500];
        } else {
            weightArr = this.multWeight[1000];
        }
        let index = this.getRandomByWeightArr(weightArr);
        return index + 2;
    }

    /**
     * 获取不重复随机数组
     * @param arr 原始数组
     * @param num 获取长度
     */
    public getArrayRandomItem<T>(arr: T[], num): T[] {
        let newArr = Utils.copy(arr);
        let result: T[] = [];
        for (let i = 0; i < num; i++) {
            if (newArr.length > 0) {
                let arrIndex = Math.floor(Math.random() * newArr.length);
                result[i] = newArr[arrIndex];
                newArr.splice(arrIndex, 1);
            } else {
                break;
            }
        }
        return result;
    }

    /**
     * 根据权重数组返回一个索引
     */
    public getRandomByWeightArr(oArr: Array<number>): number {
        let sum = 0;    // 总和
        let rand = 0;   // 每次循环产生的随机数
        let result = 0; // 返回的对象的index
        // 计算总和
        for (let i in oArr) {
            sum += Number(oArr[i]);
        }
        // 思路就是如果设置的数落在随机数内，则返回，否则减去本次的数
        for (let i in oArr) {
            rand = Math.floor(Math.random() * sum + 1);
            if (oArr[i] >= rand) {
                result = Number(i);
                break;
            } else {
                sum -= oArr[i];
            }
        }
        return result;
    }

    /** 
     * 用指定值替换s%字符串
     */
    public replaceStr(str: string, ...args: string[]) {
        (str && str.match("%s") || []).forEach((item, i) => str = str.replace(item, args[i] || item));
        return str;
    };

    private _views = {};

    public getView(className: any, data?: any, only: boolean = true): BaseSceneUISkin {
        let panelKey = className.toString(); // + "";
        panelKey = (panelKey.split("className_key=\"")[1]) == null ? (panelKey.split("className_key = \"")[1]) : (panelKey.split("className_key=\"")[1]);
        panelKey = panelKey.split("\"")[0]; //以上兼容发布

        let result: BaseSceneUISkin = this._views['' + panelKey];
        if (only && result) {
            result.setData(data);
            return result;
        }
        let clazz = Laya.ClassUtils.getRegClass(panelKey);
        if (clazz == null) {
            Laya.ClassUtils.regClass(panelKey, className)
            clazz = Laya.ClassUtils.getRegClass(panelKey);
        }
        result = new clazz(data);
        result.name = panelKey;
        if (only) {
            this._views['' + panelKey] = result;
        }
        return result;
    }


    /**
     * 存储key
     */
    public player = 'player';
    public powerTime = 'powerTime';
    public sign = 'sign';
    public sex = 'sex';
    public invite = 'invite';
    /**
     * 存储kv数据
     * key  
     * value 只能为json数据
     * canUseNet 是否使用网络数据
     */
    public async sendKVJson(key: string, value: any, canUseNet = false) {
        return new Promise((resolve, reject) => {
            if (canUseNet) {//通过网络获取

            } else {
                Laya.LocalStorage.setJSON(key, value);
                resolve();
            }
        })
    }
    public async sendKV(key: string, value: any, canUseNet = false) {
        return new Promise((resolve, reject) => {
            if (canUseNet) {//通过网络获取

            } else {
                Laya.LocalStorage.setItem(key, value);
                resolve();
            }
        });
    }
    /**
     * 获取kv
     * @param key 
     * @param canUseNet 
     */
    public async getKV(key: string, canUseNet = false): Promise<any> {
        return new Promise((resolve, reject) => {
            if (canUseNet) {//通过网络获取

            } else {
                let data = Laya.LocalStorage.getItem(key);
                resolve(data);
            }
        })

    }
    /**
     * 获取kv
     * @param key 
     * @param canUseNet 
     */
    public async getKVJson(key: string, canUseNet = false) {
        return new Promise((resolve, reject) => {
            if (canUseNet) {//通过网络获取

            } else {
                let data = Laya.LocalStorage.getJSON(key);
                resolve(data);
            }
        })

    }
    ////

}

window['GameMgr'] = GameMgr;