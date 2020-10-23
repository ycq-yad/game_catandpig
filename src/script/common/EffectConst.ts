export class EffectConst {
    /**
    * 怪物死亡特效
    * 目前使用创建动画特效 模式 
    */
    public static card_bow: EffectParme = {
        url: "resource/atlas/resource/assets/img/ani/card_bow",
        name: 'card_bow',
        playConst: 1,
        delayTime: 2000,
        speed: 1,
        frames: 17
    };

    public static card_fly: EffectParme = {
        url: "resource/atlas/resource/assets/img/ani/card_fly",
        name: 'card_bow',
        playConst: 1,
        delayTime: 2000,
        speed: 1,
        frames: 13
    };

    public static game_pass: EffectParme = {
        url: "resource/atlas/resource/assets/img/ani/game_pass",
        name: 'game_pass',
        playConst: 1,
        delayTime: 2000,
        speed: 1,
        frames: 31
    };


}

/**
 * 特效参数
 */
export class EffectParme {
    /**
     * 资源路径
     */
    url: string;
    /**
     * 播放次数
     */
    playConst: number;
    /**
     * 播放完毕停留时间
     */
    delayTime: number;
    /**
     * 播放速度
     */
    speed: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 帧数
     */
    frames: number;
}