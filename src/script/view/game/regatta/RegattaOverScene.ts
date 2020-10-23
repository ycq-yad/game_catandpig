import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import RegattaManager from "../../../manager/RegattaManager";
import FosterItem from "../../home/foster/FosterItem";
import { MiniManeger } from "../../../manager/MiniManeger";
import { HomeScene } from "../../home/HomeScene";
import GameMgr from "../../../manager/GameMgr";
import { GameManager } from "../../../manager/GameManager";
import TreasureManager from "../../../manager/TreasureManager";
import GameConst from "../../../common/GameConst";
import GameInfoManager from "../../../manager/GameInfoManager";
import AwardScene from "../../home/award/AwardScene";
import OpenTreasure from "../../home/treasure/OpenTreasure";
import { GameData } from "../../../common/GameData";
import { ShareVideo } from "../../home/tt/ShareVideo";
import TTBaoTypeGame from "../../home/tt/TTBaoTypeGame";


/**
 * 帆船赛结算界面
 */
export default class RegattaOverScene extends BaseSceneUISkinPopView {
    public className_key = "RegattaOverScene";

    private img_bg: Laya.Image;
    private box_content: Laya.Box;
    private panel_rank: Laya.Panel;
    private btn_sure: Laya.Button;
    private btn_share: Laya.Button;
    private btn_shareVideo: Laya.Button;

    private data: { winAward: localData.RankData, zoneAward: Array<any> };

    /**
     * 需要传入奖励
     */
    constructor(data_: { winAward: localData.RankData, zoneAward: localData.PropData[] }) {
        super();
        this.data = data_;
        this.skin = "game/regatta/RegattaOverScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.panel_rank.vScrollBarSkin = "";
        this.panel_rank.elasticEnabled = true;
        this.panel_rank.vScrollBar.elasticDistance = 50;
        this.panel_rank.vScrollBar.elasticBackTime = 100;
        this.btn_sure.addComponent(CustomScaleComponent);
        this.btn_share.addComponent(CustomScaleComponent);
        this.btn_shareVideo.addComponent(CustomScaleComponent);
    }

    public canFreeGetDiamond = false;
    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 添加事件 */
    private addEvent() {
        this.btn_sure.on(Laya.Event.CLICK, this, this.onSure);
        this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
        this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
    }
    public onShareVideo() {
        if (this.btn_shareVideo.gray) return;
        MiniManeger.instance.shareGameVideo({
            successFun: () => {
                if (GameData.getInstance().isConVersion) {


                    GameManager.instance.freeDiamond(20);
                    this.btn_shareVideo.gray = true;
                    (this.btn_shareVideo.getChildByName('icon_diomand') as Laya.Image).visible = false;
                }
            }
        })
    }

    /** 设置数据 */
    public setData(data_: { winAward: localData.RankData, zoneAward: localData.PropData[] }) {
        this.data = data_;
        if (this.isCreate) {
            this.initView();
        }
    }

    private async initView() {
        GameMgr.getInstance().showTopBar();
        this.panel_rank.vScrollBar.value = 0;
        let dataArr = await RegattaManager.instance.getRegattaRank();
        for (let i = 0, len = dataArr.length; i < len; i++) {
            let item: FosterItem = Laya.Pool.getItemByClass("FosterItem", FosterItem);
            item.setData({ type: 2, data: dataArr[i] });
            item.y = i * 72;
            this.panel_rank.addChild(item);
        }
        RegattaManager.instance.unlockZone();
        this.showAward();
        this.canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();
        let btn_share = this.btn_share;
        if (DeviceUtil.isTTMiniGame()) {
            this.btn_shareVideo.visible = true;
            this.btn_share.visible = false;
            btn_share = this.btn_shareVideo;
            (this.btn_shareVideo.getChildByName('icon_diomand') as Laya.Image).visible = false;
            if (this.canFreeGetDiamond && MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0) {
                this.btn_shareVideo.visible = false;
                this.btn_sure.centerX = 0;
                ViewManager.getInstance().showView(ShareVideo);
            } else {
                this.btn_sure.centerX = -251;
                this.btn_shareVideo.visible = true;

            }

            this.btn_shareVideo.gray = false;

        }
        if (DeviceUtil.isWXMiniGame()) {
            this.btn_shareVideo.visible = false;
            this.btn_share.visible = true;
            if (GameData.getInstance().isConVersion) {
                this.canFreeGetDiamond = false;
            }
            btn_share.gray = false
            if (this.canFreeGetDiamond) {
                (btn_share.getChildByName('icon_diomand') as Laya.Image).visible = true;
            }
        }
    
    }

    public moreGameItem: TTBaoTypeGame;
    public moreGameItem1: TTBaoTypeGame;
    public getaward() {
        if (this.data.zoneAward) {
            let propAwardArr = this.data.zoneAward[0] as localData.PropData[];
            let treaAwardArr = this.data.zoneAward[1] as Array<any>
            let fun = () => {
                if (treaAwardArr.length > 0) {
                    let id = treaAwardArr.shift();
                    SoundManager.getInstance().playEffect(SoundConst.Reward);
                    let award = new localData.TimeBoxData();
                    award.id = id;
                    let data = {
                        data: award, fun: () => {
                            fun();
                        }
                    }
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["treasure"], () => {
                        ViewManager.getInstance().showView(OpenTreasure, data);
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                }
            }
            if (propAwardArr.length > 0) {
                SoundManager.getInstance().playEffect(SoundConst.Reward);
                ViewManager.getInstance().showView(AwardScene, {
                    type: 1, data: propAwardArr, sureFun: () => {
                        fun();
                    }
                });
            } else {

                fun();
            }

        }
    }
    private showAward() {
        if (!this.data) return;
        let self = this
        let fun = () => {
            self.getaward()
        }
        if (this.data.winAward) {
            SoundManager.getInstance().playEffect(SoundConst.Reward);
            let result = this.data.winAward.reward.split("|");
            let id = parseInt(result[0]);
            switch (id) {
                case 160201:
                case 160202:
                case 160203:
                    let dataArr;
                    if (id == 160203) {
                        let boo = GameManager.instance.getRandomOneBooster();
                        dataArr = TreasureManager.instance.getAwardPropData([boo]);
                    } else if (id == 160202) {
                        let cat = GameManager.instance.getRandomOneCat();
                        dataArr = TreasureManager.instance.getAwardPropData([cat]);
                    } else {
                        let ship = GameManager.instance.getRandomOneShip();
                        dataArr = TreasureManager.instance.getAwardPropData([ship]);
                    }
                    GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                        ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr, sureFun: () => { fun() } });
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                    break;
                case 1001:
                case 1002:
                    let dataArr1;
                    if (id == 1002) {
                        dataArr1 = [{ awardId: 1002, awardNum: parseInt(result[1]) }];
                        // GameMgr.getInstance().updateBaseData(1002, parseInt(result[1]));
                    } else {
                        dataArr1 = [{ awardId: 1001, awardNum: parseInt(result[1]) }];
                        // GameMgr.getInstance().updateBaseData(1001, parseInt(result[1]));
                    }
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                        ViewManager.getInstance().showView(AwardScene, {
                            type: 2, data: dataArr1, sureFun: () => {
                                fun()
                                if (id == 1002) {
                                    dataArr1 = [{ awardId: 1002, awardNum: parseInt(result[1]) }];
                                    GameMgr.getInstance().updateBaseData(1002, parseInt(result[1]));
                                } else {
                                    dataArr1 = [{ awardId: 1001, awardNum: parseInt(result[1]) }];
                                    GameMgr.getInstance().updateBaseData(1001, parseInt(result[1]));
                                }
                            }
                        });
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                    break;
            }
        } else {
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                fun();
                GameMgr.getInstance().hiddeBufferLoading();
            });
        }
    }

    private onSure() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // 返回帆船赛界面
        SceneManager.getInstance().openGameScene(HomeScene);
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        homeView.displayRegattaView();
        this.removeSelf();
    }

    private onShare() {
        if (this.btn_share.gray) return;
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        MiniManeger.instance.shareAppMessage({
            sucFun: () => {
                if (this.canFreeGetDiamond) {
                    GameManager.instance.freeDiamond(20);
                }
                this.btn_share.gray = true;
                (this.btn_share.getChildByName('icon_diomand') as Laya.Image).visible = false;
            }
        });
    }

    private recoverPool() {
        for (let i = 0, len = this.panel_rank.numChildren; i < len; i++) {
            let item: FosterItem = <FosterItem>this.panel_rank.getChildAt(i);
            Laya.Pool.recover("FosterItem", item);
        }
        this.panel_rank.removeChildren();
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_sure.off(Laya.Event.CLICK, this, this.onSure);
        this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
        this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.recoverPool();
        if (this.moreGameItem) {
            this.moreGameItem.removeSelf();
            this.moreGameItem = null;
        }
        if (this.moreGameItem1) {
            this.moreGameItem1.removeSelf();
            this.moreGameItem1 = null;
        }
        this.data = null;
    }
}