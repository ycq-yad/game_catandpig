import { BaseInfoType } from "../../manager/GameManager";
import { AttackType } from "../game/base/GameObj";

/**
* 基础星级等数据源
*/
export class BaseGameInfo {
    public type = BaseInfoType.Ship;

    attack_type: AttackType;

    /**
     * 船只、猫、猪的唯一性id
     * 区分相同外形 不同配置的id
     */
    public uid: number;
    /**
     * 基础的id 
     * 获取外形等
     */
    public id: string;
    /**
     * 星级
     */
    public star: number;
    /**
     * 基础生命值
     */
    public initialHp: number;
    /**
     * 成长生命
     */
    public growthHp: number;
    /**
     * 等级
     */
    public level: number;
    /**
     * 品质（1：普通，2：稀有）
     */
    public quality: number;
    /**
     * 经验值
     */
    public exp: number;
    // /**
    //  * 对空类型 用的时候去配置那，增幅器表里面没有这个字段
    //  */
    // public attack_type: number;

    // this.shipConfigs
}


/**
 * 基础船等数据源
 */
export class BaseShipGameInfo extends BaseGameInfo {
    /**
     * 是否有护盾
     */
    public hasShield: boolean = false;
    /** 护盾增幅器id */
    public shieldId: number = 0;
    
    public slotArr = [];
    /**
     * 槽位
     */
    public slot: number = 1;

    public type = BaseInfoType.Ship;
}
/**
 * 基础猫等数据源
 */
export class BaseCatGameInfo extends BaseGameInfo {
    public type = BaseInfoType.Cat;
    /**
     * 初始攻击
     */
    public initialAtt: number;
    /**
     * 初始暴击
     */
    public initialCrit: number;
    /**
     * 成长暴击
     */
    public growthCrit: number;
    /**
     * 成长攻击
     */
    public growthAtt: number;
    /**
     * 是否是普通怪物
     */
    public isNormal = true;
}

/**
 * 基础猪等数据源
 */
export class BasePigGameInfo extends BaseGameInfo {
    /**
     * 技能cd
     * 
     */
    public skillCD: number;
    public type = BaseInfoType.Pig;

}

/**
 * 基础增幅器数据源
 */
export class BaseBoosterGameInfo extends BaseGameInfo {
    /**
     * 技能cd
     */
    public skillCD: number;
    public type = BaseInfoType.Booster;
}