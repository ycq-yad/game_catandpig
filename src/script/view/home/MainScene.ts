import { GameManager, GameModel } from "../../manager/GameManager";
import SoundManager, { SoundConst } from "../../manager/SoundManager";
import GameMgr from "../../manager/GameMgr";
import SignView from "./sign/SignView";
import TaskView from "./task/TaskView";
import SetView from "./set/SetView";
import LotteryView from "./lottery/LotteryView";
import TreasureManager from "../../manager/TreasureManager";
import TreasureItem from "./treasure/TreasureItem";
import GameEvent from "../../common/GameEvent";
import { HomeScene } from "./HomeScene";
import { AdventureScene } from "./foster/AdventureScene";

import { GameData } from "../../common/GameData";
import { MiniManeger } from "../../manager/MiniManeger";
import NoVacancy from "./common/NoVacancy";
import RegattaManager from "../../manager/RegattaManager";
import GameConst from "../../common/GameConst";
import SignManager from "../../manager/SignManager";
import TaskManager from "../../manager/TaskManager";
import DungeonManager from "../../manager/DungeonManager";
import TTBaoTypeGame from "./tt/TTBaoTypeGame";
import { DYMoreGameBanner } from "../../wechat/DYMoreGameBanner";


/**
 * 首页
 */
export class MainScene extends BaseSceneUISkin {
    className_key = "MainScene";
    public constructor() {
        super();
        this.skin = "home/MainScene.json";
    }

    public txt_show: Laya.Label;
    public com_home: HomeScene;
    /** 帆船赛界面 */
    public com_regatta: AdventureScene;
    private img_bg: Laya.Image;
    private img_road: Laya.Image;
    private box_ship: Laya.Box;
    /** 帆船赛 */
    private btn_game1: Laya.Button;
    private lab_rank: Laya.Box;
    /** 冒险 */
    private btn_game2: Laya.Button;
    private btn_setting: Laya.Button;
    private box_right: Laya.Box;
    private btn_task: Laya.Button;
    private btn_sign: Laya.Button;
    private btn_lottery: Laya.Button;
    private btn_treasure: Laya.Button;
    private lab_videoTimes: Laya.Label;
    private box_treasure: Laya.Box;
    private box_gameBanner: Laya.Box;

    protected childrenCreated() {
        super.childrenCreated();
        // console.log("MainScene >>>>>>> childrenCreated", this.isCreate);
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.btn_game1.addComponent(CustomScaleComponent);
        this.btn_game2.addComponent(CustomScaleComponent);
        this.btn_setting.addComponent(CustomScaleComponent);
        this.btn_task.addComponent(CustomScaleComponent);
        this.btn_sign.addComponent(CustomScaleComponent);
        this.btn_lottery.addComponent(CustomScaleComponent);
        this.btn_treasure.addComponent(CustomScaleComponent);
        if (DeviceUtil.getIsIphoneX()) {
            this.btn_setting.left += 60;
        }
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    public setData(data: any) {
        if (this.isCreate) {
            // this.initView();
            // this.addEvent();
        }
    }

    /** 增加事件监听 */
    private addEvent() {
        this.btn_game1.on(Laya.Event.CLICK, this, this.onStartGame1);
        this.btn_game2.on(Laya.Event.CLICK, this, this.onStartGame2);
        this.btn_setting.on(Laya.Event.CLICK, this, this.onSetting);
        this.btn_task.on(Laya.Event.CLICK, this, this.onTask);
        this.btn_sign.on(Laya.Event.CLICK, this, this.onSign);
        this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
        this.btn_treasure.on(Laya.Event.CLICK, this, this.onTreasure);
        EventMgr.getInstance().addEvent(GameEvent.REFRESH_BOX, this, this.refreshBoxData);
        EventMgr.getInstance().addEvent(GameConst.CanRecieveTask, this, this.onRecieve);
    }

    protected onRecieve(data: boolean) {
        (this.btn_task.getChildByName('red') as Laya.Image).visible = data;
    }
    /** 初始化页面 */
    private initView() {
        this.refreshBoxData();
        this.showRank();

        Laya.timer.loop(1000, this, () => {
            EventMgr.getInstance().sendEvent(GameEvent.TIME_METER);
        });

    }
    /**
     * 显示banner
     */
    private async showGameBanner() {
        this.box_gameBanner.removeChildren();
        let dYMoreGameBanner: DYMoreGameBanner = await GameManager.instance.showGameBanner(4, 2);
        if (dYMoreGameBanner) {
            this.box_gameBanner.addChild(dYMoreGameBanner);
            this.box_gameBanner.width = dYMoreGameBanner.width;
        }
        this.box_gameBanner.scale(0.8, 0.8);
    }

    public async showMain() {
        if (!this.com_regatta) {
            this.com_regatta = new AdventureScene({});
            this.box_ship.addChild(this.com_regatta);
        }

        let canSign = SignManager.instance.checkSign();
        if (canSign) {
            (this.btn_sign.getChildByName('red') as Laya.Image).visible = true;
        } else {
            (this.btn_sign.getChildByName('red') as Laya.Image).visible = false;
        }
        this.com_regatta.hideSomeView();
        // this.com_regatta.hideSomeView();
        this.txt_show.visible = this.img_bg.visible = this.img_road.visible = true;
        this.btn_game1.visible = this.btn_game2.visible = this.btn_setting.visible = true;
        this.box_right.visible = this.box_treasure.visible = true;
        if (DungeonManager.instance.curLevelId > 20004) {
            (this.btn_game1.getChildByName('lock') as Laya.Image).visible = false;
            this.btn_game1.gray = false;
        } else {
            this.btn_game1.gray = true;
            (this.btn_game1.getChildByName('lock') as Laya.Image).visible = true;

        }
        (this.btn_task.getChildByName('red') as Laya.Image).visible = false;
        TaskManager.instance.getTaskData();
        if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
            if (GameData.getInstance().adConversion) {
                this.btn_treasure.visible = false;
            } else {
                this.btn_treasure.visible = true;
            }
        }
        if (GameData.getInstance().isConVersion) {
            // this.com_regatta.visible = false;
            this.box_right.visible = false;
            this.btn_game1.visible = false;
            this.btn_setting.visible = false;
            this.box_treasure.visible = false;
            this.img_road.visible = false;
            this.btn_game2.centerX = 0;
            this.txt_show.visible = false;
            return;
        }
        this.showGameBanner();

    }

    public moreGameItem: TTBaoTypeGame;
    /** 显示培养界面 */
    public showRegatta() {
        // if (!this.com_regatta) {
        //     this.com_regatta = new AdventureScene({});
        //     this.box_ship.addChild(this.com_regatta);
        // }
        // this.com_regatta.showSomeView();
        this.moreGameItem && (this.moreGameItem.visible = false);
        this.txt_show.visible = this.img_road.visible = false;
        this.btn_game1.visible = this.btn_game2.visible = this.btn_setting.visible = false;
        this.box_right.visible = this.box_treasure.visible = false;
    }

    private async refreshBoxData() {
        let dataArr = await TreasureManager.instance.getTimeBoxData();
        for (let i = 0, len = 4; i < len; i++) {
            let data = dataArr[i];
            let item = <TreasureItem>this.box_treasure.getChildAt(i);
            if (data) {
                if (item) {
                    item.setData(data);
                } else {
                    item = new TreasureItem(data);
                    item.x = (i % 2) * 310;
                    item.y = Math.floor(i / 2) * 420;
                    this.box_treasure.addChild(item);
                }
            } else {
                if (item) item.removeSelf();
            }
        }
        let curTimes = TreasureManager.instance.getCurVideoTimes();
        if (curTimes.num < 5) {
            this.lab_videoTimes.visible = true;
            this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
        } else {
            this.lab_videoTimes.visible = false;
        }
    }

    private async showRank() {
        let rank = await RegattaManager.instance.getCurRank();
        BitmapLabelUtils.setLabel(this.lab_rank, rank + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
    }

    private onStartGame1() {
        if (DungeonManager.instance.curLevelId > 20004) {

        } else {
            TipsManager.getInstance().showDefaultTips("请先通过四关");
            return;
        }
        console.log("帆船赛");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.com_home.displayRegattaView();
    }

    private onStartGame2() {
        console.log("副本");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.com_home.displayDungeonView();
    }

    private onSetting() {
        console.log("打开设置");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["set"], () => {
            ViewManager.getInstance().showView(SetView);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private onTask() {
        console.log("打开任务");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["task"], () => {
            ViewManager.getInstance().showView(TaskView);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private onSign() {
        console.log("打开签到");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["sign"], () => {
            ViewManager.getInstance().showView(SignView);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private onLottery() {
        console.log("打开抽奖");
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        GameMgr.getInstance().showBufferLoading();
        ResUtil.getIntance().loadGroups(["lottery"], () => {
            ViewManager.getInstance().showView(LotteryView);
            GameMgr.getInstance().hiddeBufferLoading();
        });
    }

    private onTreasure() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // GameMgr.getInstance().showBufferLoading();
        // ResUtil.getIntance().loadGroups(["dungeon"], () => {
        //     ViewManager.getInstance().showView(DungeonOverScene, { curBlood: 50, blood: 120 });
        //     GameMgr.getInstance().hiddeBufferLoading();
        // });
        // return;
        let curTimes = TreasureManager.instance.getCurVideoTimes();
        if (curTimes.num < 5) {
            if (GameData.getInstance().treasure.vacancy) {
                MiniManeger.instance.playViderAd({
                    successFun: () => {
                        TreasureManager.instance.updateVideoBox();
                        this.refreshBoxData();
                    },
                    failFun: () => {
                    },
                    errorFun: () => {
                    }
                });
            } else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
            }
        } else {
            TipsManager.getInstance().showDefaultTips("今日看视频得宝箱次数已用完");
        }
    }

    private removeEvent() {
        this.btn_game1.off(Laya.Event.CLICK, this, this.onStartGame1);
        this.btn_game2.off(Laya.Event.CLICK, this, this.onStartGame2);
        this.btn_setting.off(Laya.Event.CLICK, this, this.onSetting);
        this.btn_task.off(Laya.Event.CLICK, this, this.onTask);
        this.btn_sign.off(Laya.Event.CLICK, this, this.onSign);
        this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
        this.btn_treasure.off(Laya.Event.CLICK, this, this.onTreasure);
        EventMgr.getInstance().removeEvent(GameEvent.REFRESH_BOX, this, this.refreshBoxData);
        EventMgr.getInstance().removeEvent(GameConst.CanRecieveTask, this, this.onRecieve);

    }

    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.timer.clearAll(this);
    }

    public removeSelf() {
        if (this.moreGameItem) {
            this.moreGameItem.removeSelf();
            this.moreGameItem = null;
        }
        return super.removeSelf();
    }
}