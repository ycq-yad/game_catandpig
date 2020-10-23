import { GameData } from "../common/GameData";
import * as DataType from "../common/GameDataType";
import ConfigManager from "./ConfigManager";
import GameInfoManager from "./GameInfoManager";
import GameConst from "../common/GameConst";
import GameMgr from "./GameMgr";

/**
 * 签到管理工具
 */
export default class SignManager {
    private constructor() {

    }

    private static ins: SignManager;
    public static get instance(): SignManager {
        if (SignManager.ins == null) {
            SignManager.ins = new SignManager();
        }
        return SignManager.ins;
    }

    /** 获取签到数据 */
    public async getSignData() {
        let signConfig = await ConfigManager.getInstance().getSignConfig();
        let signIn = GameData.getInstance().signIn;
        let curCanSign = this.checkSign();
        let len = signConfig.length;
        let rotations = signIn.rotations;
        if (curCanSign) {
            rotations = Math.floor(signIn.total_count / 7);
            signIn.rotations = rotations;
            if (signIn.total_count >= len) {
                signIn.total_count = 0;
                signIn.rotations = 0;
            }
            GameData.getInstance().signIn = signIn;
        }
        let start = rotations * 7;
        let end = start + 7;
        let dataArr: DataType.localData.SignData[] = [];
        for (let i = start; i < end; i++) {
            let sign = signConfig[i];
            let canSign = false;
            let signed = false;
            if (i < signIn.total_count) {
                signed = true;
            }
            if (i == signIn.total_count && curCanSign) {
                canSign = true;
            }
            let data: DataType.localData.SignData = new DataType.localData.SignData();
            data.id = sign.id;
            data.name = sign.name;
            data.reward = sign.reward;
            data.signed = signed;
            data.canSign = canSign;
            dataArr.push(data);
        }
        return dataArr;
    }

    /** 检查当前能否签到 */
    public checkSign() {
        let signIn = GameData.getInstance().signIn;
        let lastTime = signIn.timeStamp;
        let currTime = (new Date()).getTime();
        let isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
        return !isOneDay;
    }

    /**
     * 领取签到奖励
     * @param b 倍数
     */
    public receiveReward(b: number, reward: { type: number, num: number }[]) {
        return new Promise(resolve => {
            let awardId = reward[0].type;
            if (awardId < 10000) {//基础物品
                GameMgr.getInstance().updateBaseData(awardId, reward[0].num * b);
            }
            GameData.getInstance().signIn.timeStamp = (new Date()).getTime();
            GameData.getInstance().signIn.total_count += 1;
            GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
            resolve();
        });
    }
}