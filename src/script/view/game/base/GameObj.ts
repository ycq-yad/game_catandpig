import SoundManager, { SoundConst } from "../../../manager/SoundManager";

/**
 * 游戏对象
 */
export abstract class GameObj extends Laya.Sprite {

    abstract className_key = ''
    /**
     * 从对象池中取出对象
     * GameObjInfo  基本属性数据
     * isNeedResulView  暂不适用
     */
    public onCreate(data: GameObjInfo, isNeedResulView: boolean): void {
        this.objInfo_ = data;
        this.isRecovery = false;
        this.isEnabled = true;
        this.initObj();
        this.name = this.className_key;
    }
    /**
     * 主要标记 修复bug
     */
    public isEnabled = true;

    public isRecovery: boolean;

    public onRecovery(): void {
        if (this.isRecovery) return;
        this.isRecovery = true;
        this._destroyAllComponent();
        Laya.timer.clearAll(this);
        Laya.Tween.clearTween(this);
        this.collider = null;
        this.rigidBody = null;
        this.removeChildren();
        this.removeSelf();
    };
    /**
     * 游戏对象数据体
     */
    public objInfo_: GameObjInfo;

    /**
     * 物理对象体
     */
    public rigidBody: Laya.RigidBody;

    /**
     * 碰撞器
     */
    public collider: Laya.ColliderBase;

    constructor() {
        super();

    }

    public playGameEffect(soundName: SoundConst) {
        SoundManager.getInstance().playEffect(soundName);
    }

    /**
     * 初始化对象
     */
    protected initObj(): void {
        this.width = this.objInfo_.width;
        this.height = this.objInfo_.height;
        //默认居中
        this.pivotX = this.objInfo_.width / 2;
        this.pivotY = this.objInfo_.height / 2;
    }

}
/**
 * 游戏状态
 */
export enum GAMESTATUS {
    STOP = 0,
    PLAYING = 1,
    PLAYERDEAD = 2,
    PLAYERWIN = 3,
    PAUSE = 4,
    GAMESTART = 5,
    READY

}
/**
 * 游戏对象信息体
 */
export class GameObjInfo {

    public uid: number;
    public star: number;


    public blood: number;


    public curBlood: number;
    /**
     * 宽度
     */
    public width: number;
    /**
     * 高度
     */
    public height: number;

    public AIScriptID: number;


    public id: number;

    /**
     * 类型
     * 通过类型区分玩家的船与子弹
     *              敌人的船与敌人
     */
    public type: GameConstant;


    /**
     * 是否是展示，不添加事件
     */
    public isShow: boolean = false;

}

export class GameConstant {
    /**
     * 玩家自己
     */
    static Player = 'player';

    /**
     * 敌人
     */
    static Enemy = 'enemy'

    /**
     * 子弹
     */
    static Bullet = 'bullet';
    /**
     * 船
     */
    static Ship = 'ship';
    /**
     * 猪
     */
    static Pig = 'Pig';
    /**
     * 增幅器
     */
    static Booster = 'Booster';
    /**
     * 护盾
     */
    static Shield = 'Shield';

    /**
     * 鱼雷炸弹
     */
    static MineBoom = 'MineBoom';
    /**
     * 飞天炸弹
     */
    static FlyBoom = 'FlyBoom';
    /**
     * 导弹
     */
    static MissileBullet = 'FlyBoom';


    /**
     * 水的碰撞体
     */
    static Water_wave = 'water_wave';


    static bulletWidth = 50;
    static bulletHeight = 50;

}

export enum PigType {
    normal = 1,
    Boss = 2,
}
/**
 * 单位
 */
export enum AttackType {
    // /空中单位
    Sky = 1,
    /**
     * 水面单位
     */
    Water,
    /**
     * 水下单位
     */
    UnderWater,


    All

}


/*
  * 刚体类型，支持三种类型static，dynamic和kinematic类型
  * static为静态类型，静止不动，不受重力影响，质量无限大，可以通过节点移动，旋转，缩放进行控制
  * dynamic为动态类型，接受重力影响
  * kinematic为运动类型，不受重力影响，可以通过施加速度或者力的方式使其运动
  */
export class Physic {
    static STATIC = 'static';
    static DYNAMIC = 'dynamic';
    static KINEMATIC = 'kinematic';
}







