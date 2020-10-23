/** 签到配置数据结构 */
export type SignConfig = {
    id: number;
    /** 名字 */
    name: string;
    /** 奖励 */
    reward: { type: number, num: number }[];
    /** 描述 */
    info: string;
}

export type ChannelInfos = {
    url: string,
    version: number,
    backBtnDelay: number,
    randomBtnDelay: number
};
/** 任务配置数据结构 */
export type TaskConfig = {
    taskID: number;
    /** 任务描述 */
    tsakDes: string;
    /** 任务参数 */
    parValue: number;
    /** 奖励 */
    reward: string;
}

/** 邀请配置数据结构 */
export type InviteConfig = {
    id: number;
    name: any;
    /**奖励值 type:1->钥匙 num:奖励数值 */
    reward: {
        type: number,
        num: number
    }[];
}

/** 宝箱配置数据结构 */
export type TreasureConfig = {
    ID: number;
    /** 名字 */
    name: string;
    /** 类型 1：时长宝箱，2：非时长宝箱 */
    type: number;
    /** 开启时长/分钟 */
    timeToOpen: number;
    /** 掉落金币下限 */
    dropGoldMin: number;
    /** 掉落金币上限 */
    dropGoldMax: number;
    /** 掉落船数量 */
    dropShip: number;
    /** 掉落猫数量 */
    dropCat: number;
    /** 掉落增幅器数量 */
    dropBooster: number;
    /** 稀有保底数量 */
    dropInsure: number;
    /** 图标 */
    icon: string;
}

/** 星级配置数据结构 */
export type StarConfig = {
    /** 星级 */
    star: number,
    /** 基础经验 */
    basicExp: number,
    /** 额外经验系数 */
    etrExpMod: number,
    /** 船随机池 */
    shipPool: number[],
    /** 猫随机池 */
    catPool: number[],
    /** 增幅器随机池 */
    boosterPool: number[],
}

/** 关卡配置数据结构 */
export type GuankaConfig = {
    /** 关卡ID */
    id: number,
    /** 章节地图 */
    mapId: number,
    /** 金币产出 */
    outGold: number,
    /** 怪物展示 */
    enemy: string,
    /** 展示位置x|y */
    enemyIconLocate: string
}

/** 遭遇战配置数据结构 */
export type EncounterConfig = {
    /** 关卡ID */
    id: number,
    /** 玩家等级 */
    playerLevel: number,
    /** 怪物展示 */
    enemy: string,
    /** 展示位置x|y */
    enemyIconLocate: string,
    /** 金币产出 */
    outGold: number
}

/**关卡坐标配置 */
export type DungeonItemConfig = {
    id: number;
    /**坐标x */
    x: number;
    /**坐标y */
    y: number;
}

/** 帆船赛对手配置数据结构 */
export type RegattaConfig = {
    id: number;
    /** 赛区编号 */
    zoneNo: number;
    /** 对手排名 */
    enemyRank: number;
    /** 对手名字 */
    enemyName: string;
    /** 主舰模型 */
    shipModel: number;
    /** 主舰攻击 */
    shipAtt: number;
    /** 主舰生命 */
    shipHp: number;
    /** 主舰是否带有护盾 */
    shipHasShiled: number;
    /** 猫与增幅器 */
    catANDbooster: string;
    /** 对手战力 */
    enemyPower: number;
}

/** 帆船赛敌人配置数据结构 */
export type RegattaEnemyConfig = {
    /** 赛区编号 */
    zoneNo: number;
    /** 排名 */
    rank: number;
    /** 槽位 */
    slot: number;
    /** uid */
    uid: number;
    /** 类型 1：猫，2：增幅器 */
    type: number;
    /** 模型ID */
    modelId: number;
    /** 攻击力 */
    att: number;
    /** 生命值 */
    hp: string;
    /** 暴击率 */
    crit: number;
    /** 攻击间隔 */
    attCd: number;
}

/** 帆船赛奖励配置数据结构 */
export type RegattaAwardConfig = {
    /** 赛区编号 */
    zoneNo: number;
    /** 排名 */
    rank: number;
    /** 奖励 */
    reward: string;
}

/** 帆船赛赛区配置数据结构 */
export type RegattaZoneConfig = {
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
}

/** 商店配置数据结构 */
export type StoreConfig = {
    id: number,
    name: string,
    /** 商品ID */
    itemID: number,
    /** 描述 */
    itemDes: string,
    /** 描述颜色 */
    desColor: string,
    /** 钻石价格 */
    cost: number
}

/** 转盘配置数据结构 */
export type LotteryConfig = {
    id: number;
    name: string;
    /** 奖励数量 */
    rewardNum: number;
    /** 权重 */
    weight: number;
}

/** 船配置数据结构 */
export type ShipConfig = {
    /** id */
    id: string,
    /** 名字 */
    name: string,
    /** 船类型 */
    attack_type: string,
    /** 星级 */
    star: string,
    /** 缩放 */
    scale: string,
    /** 玩家解锁等级 */
    needPlayerLevel: string,
    /** 描述 */
    des: string
}

/** 猫配置数据结构 */
export type CatConfig = {
    /** id */
    id: string,
    /** 名字 */
    name: string,
    /** 猫类型 */
    attack_type: string,
    /** 星级 */
    star: string,
    /** 缩放 */
    scale: string,
    /** 玩家解锁等级 */
    needPlayerLevel: string,
    /** 描述 */
    des: string,
    url: string,
    /** 子弹id */
    blt_id: string,
    /** 骨骼转动名称 */
    bonenameArr: string,
    /** 骨骼初始角度 */
    baseRoA: string,
    /** UI图标 */
    uiIcon: string
}

/** 增幅器配置数据结构 */
export type BoosterConfig = {
    /** id */
    id: string,
    /** 名字 */
    name: string,
    /** 增幅器类型 */
    type: string,
    /** 星级 */
    star: string,
    /** 玩家解锁等级 */
    needPlayerLevel: string,
    /** 描述 */
    des: string,
    /** 效果ID */
    effectID: string,
    /** 效果参数 */
    value: string,
    /** 图标 */
    icon: string,
    /** UI图标 */
    uiIcon: string
}

/** 关卡配置数据结构 */
export type LevelConfig = {
    /** 关卡ID */
    Level_Id: number,
    /** 关卡地图文件名 */
    Level_Map: string,
    /** 关卡地图背景地址 */
    Level_Skin: string,
}

/** 皮肤配置数据结构 */
export type SkinConfig = {
    /** ID */
    id: number,
    /** 路径 */
    url: string
}