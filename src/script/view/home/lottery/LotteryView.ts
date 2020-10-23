import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import TaskManager, { TaskEnum } from "../../../manager/TaskManager";
import { LotteryConfig } from "../../../common/GameConfigType";
import ConfigManager from "../../../manager/ConfigManager";
import GameMgr from "../../../manager/GameMgr";
import { GameManager } from "../../../manager/GameManager";
import AwardScene from "../award/AwardScene";
import TreasureManager from "../../../manager/TreasureManager";
import { GameData } from "../../../common/GameData";
import GameEvent from "../../../common/GameEvent";
import NoVacancy from "../common/NoVacancy";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import { MiniManeger } from "../../../manager/MiniManeger";

/**
 * 转盘界面
 */
export default class LotteryView extends BaseSceneUISkinPopView {
    public className_key = "LotteryView";
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE;

    private box_content: Laya.Box;
    private img_table: Laya.Image;
    private btn_lottery: Laya.Button;
    private btn_close: Laya.Button;

    private lotteryConfig: LotteryConfig[];
    private weightArr: number[];
    private awardIndex: number;

    constructor() {
        super();
        this.skin = "home/lottery/LotteryScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        this.btn_close.addComponent(CustomScaleComponent);
        this.btn_lottery.addComponent(CustomScaleComponent);
    }

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
    }

    private async initView() {
        this.btn_lottery.mouseEnabled = true;
        this.btn_close.mouseEnabled = true;
        this.judgeCanFreeLottery()
        // 161,105
        SoundManager.getInstance().playEffect(SoundConst.OpenPop);
        this.lotteryConfig = await ConfigManager.getInstance().getLotteryConfig();
        if (!this.weightArr) {
            this.weightArr = [];
            for (let i = 0, len = this.lotteryConfig.length; i < len; i++) {
                this.weightArr.push(this.lotteryConfig[i].weight);
            }
        }
    }

    public judgeCanFreeLottery() {
        let isSameDay = Utils.judgeIsOnTheSameDay(GameData.getInstance().playerData.lotteryData.time, new Date().getTime())
        if (isSameDay) {
            let icon_video = this.btn_lottery.getChildAt(1) as Laya.Image;
            let icon_zi = this.btn_lottery.getChildAt(0) as Laya.Image;
            if (GameData.getInstance().playerData.lotteryData.count <= 0) {
                icon_zi.x = 105;
                icon_video.visible = true;
            } else {
                icon_zi.x = 161;
                icon_video.visible = false;
            }
        } else {
            GameData.getInstance().playerData.lotteryData.time = new Date().getTime();
            GameData.getInstance().playerData.lotteryData.count = 1;
            this.judgeCanFreeLottery();
        }
    }

    private onLottery() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        let fun = () => {
            let icon_video = this.btn_lottery.getChildAt(1) as Laya.Image;
            if (icon_video.visible) {
                MiniManeger.instance.playViderAd({
                    successFun: () => {
                        this.awardIndex = GameMgr.getInstance().getRandomByWeightArr(this.weightArr);
                        TaskManager.instance.updateTask(TaskEnum.TASK_2013, 1);
                        this.lotteryAni();
                    },
                    failFun: () => {
                    },
                    errorFun: () => {
                    }
                });
            } else {
                this.awardIndex = GameMgr.getInstance().getRandomByWeightArr(this.weightArr);
                TaskManager.instance.updateTask(TaskEnum.TASK_2013, 1);
                this.lotteryAni();
            }

        }
        if (GameData.getInstance().treasure.vacancy) {
            fun();
        } else {
            ViewManager.getInstance().showView(NoVacancy, { sureTxt: "继续", sureFun: () => { fun(); } });
        }

    }

    private lotteryAni() {
        this.btn_lottery.mouseEnabled = false;
        this.btn_close.mouseEnabled = false;
        GameMgr.getInstance().com_TopBar.mouseEnabled = false;
        GameData.getInstance().playerData.lotteryData.count -= 1;
        GameData.getInstance().playerData.lotteryData.time = new Date().getTime();
        Laya.Tween.clearAll(this.img_table);
        this.img_table.rotation = 0;
        let toRotation = 135 - (this.awardIndex) * 45 + 360 * 3;
        // console.log("11111", this.awardIndex, toRotation);
        Laya.Tween.to(this.img_table, { rotation: toRotation }, 4000, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
            this.showAward();
        }));
    }

    private showAward() {
        this.btn_lottery.mouseEnabled = true;
        this.btn_close.mouseEnabled = true;
        GameMgr.getInstance().com_TopBar.mouseEnabled = true;

        this.judgeCanFreeLottery();
        GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
        let result = this.lotteryConfig[this.awardIndex];
        switch (result.id) {
            case 1:
            case 3:
            case 7:
                let dataArr;
                if (result.id == 1) {
                    let boo = GameManager.instance.getRandomOneBooster();
                    dataArr = TreasureManager.instance.getAwardPropData([boo]);
                } else if (result.id == 3) {
                    let cat = GameManager.instance.getRandomOneCat();
                    dataArr = TreasureManager.instance.getAwardPropData([cat]);
                } else {
                    let ship = GameManager.instance.getRandomOneShip();
                    dataArr = TreasureManager.instance.getAwardPropData([ship]);
                }
                GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                    ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
                break;
            case 2:
            case 6:
                if (GameData.getInstance().treasure.vacancy) {
                    let bid = 160001;
                    if (result.id == 2) {
                        TreasureManager.instance.getBox(bid);
                    } else {
                        bid = 160002;
                        TreasureManager.instance.getBox(bid);
                    }
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                        ViewManager.getInstance().showView(AwardScene, {
                            type: 2, data: [{ awardId: bid, awardNum: 1 }]
                        });
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                } else {
                    ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
                }
                break;
            case 4:
            case 5:
            case 8:
                let dataArr1;
                if (result.id == 4) {
                    dataArr1 = [{ awardId: 1002, awardNum: result.rewardNum }];
                    // GameMgr.getInstance().updateBaseData(1002, result.rewardNum);
                } else {
                    dataArr1 = [{ awardId: 1001, awardNum: result.rewardNum }];
                    // GameMgr.getInstance().updateBaseData(1001, result.rewardNum);
                }
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: dataArr1, sureFun: () => {
                            if (result.id == 4) {
                                // dataArr1 = [{ awardId: 1002, awardNum: result.rewardNum }];
                                GameMgr.getInstance().updateBaseData(1002, result.rewardNum);
                            } else {
                                // dataArr1 = [{ awardId: 1001, awardNum: result.rewardNum }];
                                GameMgr.getInstance().updateBaseData(1001, result.rewardNum);
                            }
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
                break;
        }
    }

    private onClose() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.removeSelf();
        SoundManager.getInstance().playEffect(SoundConst.ClosePop);
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        Laya.Tween.clearAll(this.img_table);
        this.img_table.rotation = 0;
    }
}