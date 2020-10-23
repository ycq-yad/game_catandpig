import SoundManager, { SoundConst } from "../../../manager/SoundManager";
import { localData } from "../../../common/GameDataType";
import { HomeScene } from "../../home/HomeScene";
import { MiniManeger } from "../../../manager/MiniManeger";
import GameMgr from "../../../manager/GameMgr";
import DungeonManager from "../../../manager/DungeonManager";
import AwardScene from "../../home/award/AwardScene";
import { GameData } from "../../../common/GameData";
import GameInfoManager from "../../../manager/GameInfoManager";
import GameConst from "../../../common/GameConst";
import TreasureManager from "../../../manager/TreasureManager";
import NoVacancy from "../../home/common/NoVacancy";
import { GameManager } from "../../../manager/GameManager";
import { ShareVideo } from "../../home/tt/ShareVideo";
import TTBaoTypeGame from "../../home/tt/TTBaoTypeGame";
import { MoreGameBoxSingle } from "../../../wechat/MoreGameBoxSingle";


/**
 * 副本结算界面
 */
export default class DungeonOverScene extends BaseSceneUISkinPopView {
    public className_key = "DungeonOverScene";

    private img_bg: Laya.Image;
    private box_win: Laya.Box;
    private box_star: Laya.Box;
    private img_hp: Laya.Image;
    private btn_sure: Laya.Button;
    private btn_share: Laya.Button;
    private btn_shareVideo: Laya.Button;
    private box_fail: Laya.Box;
    private btn_sure1: Laya.Button;
    private btn_share1: Laya.Button;
    private btn_shareVideo1: Laya.Button;
    private box_fail1: Laya.Box;
    private btn_home: Laya.Button;
    private btn_restart: Laya.Button;
    private box_award: Laya.Box;
    private img_boxAward: Laya.Image;
    private box_awardStar: Laya.Box;
    private countMask: Laya.Sprite;

    private data: { curBlood: number, blood: number };
    /** 结算结果的星数 */
    private resultStar: number;
    /** 可领取的星数 */
    private getStar: number;

    /**
     * 需要传入当前剩余血量和总血量，用于计算获得几颗星
     */
    constructor(data_: { curBlood: number, blood: number }) {
        super();
        this.data = data_;
        this.skin = "game/dungeon/DungeonOverScene.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
        DeviceUtil.adaptationBgImg(this.img_bg);
        this.btn_sure.addComponent(CustomScaleComponent);
        this.btn_share.addComponent(CustomScaleComponent);
        this.btn_shareVideo.addComponent(CustomScaleComponent);
        this.btn_sure1.addComponent(CustomScaleComponent);
        this.btn_share1.addComponent(CustomScaleComponent);
        this.btn_shareVideo1.addComponent(CustomScaleComponent);
        this.btn_home.addComponent(CustomScaleComponent);
        this.btn_restart.addComponent(CustomScaleComponent);
        this.box_award.addComponent(CustomScaleComponent);
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
        this.btn_sure.on(Laya.Event.CLICK, this, this.onSureSucc);
        this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
        this.btn_share1.on(Laya.Event.CLICK, this, this.onShare);
        this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_shareVideo1.on(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_sure1.on(Laya.Event.CLICK, this, this.onSureFail);
        this.btn_home.on(Laya.Event.CLICK, this, this.onHome);
        this.btn_restart.on(Laya.Event.CLICK, this, this.onRestart);
        this.box_award.on(Laya.Event.CLICK, this, this.onAward);
    }

    /** 设置数据 */
    public setData(data_: { curBlood: number, blood: number }) {
        this.data = data_;
        if (this.isCreate) {
            this.initView();
        }
    }

    private initView() {
        GameMgr.getInstance().showTopBar();
        if (!this.data) return;
        this.showOwnStar();
        this.box_win.visible = this.box_fail.visible = this.box_fail1.visible = false;
        let data = this.data;
        console.log("DungeonOverScene >>> initView", data);
        if (data.curBlood > 0) {
            this.img_bg.skin = "resource/assets/img/gamePublic/gamePublic_bg1.jpg";
            this.box_win.visible = true;
            let curDung = DungeonManager.instance.curLevelData;
            if (curDung.type == 1) DungeonManager.instance.unlockLevel(curDung.id + 1);
            //显示剩余可领星数
            let surplusStar = curDung.surplusStar;
            for (let i = 0, len = this.box_star.numChildren; i < len; i++) {
                let img = <Laya.Image>this.box_star.getChildByName("star" + (3 - i));
                (<Laya.Image>img.getChildAt(0)).visible = surplusStar > i;
            }
            //显示剩余血量
            let per = data.curBlood / data.blood;
            this.countMask = new Laya.Sprite;
            this.countMask.graphics.clear();
            this.countMask.graphics.drawRect(this.img_hp.x, this.img_hp.y, 791 * per, 92, "#ff0000");
            this.img_hp.mask = this.countMask;
            this.canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();

            //计算可领取星星数
            if (surplusStar) {
                let per1 = per * 100;
                console.log("剩余血量百分比", per1);
                if (per1 >= 66) {
                    this.resultStar = 3;
                } else if (per1 >= 33 && per1 < 66) {
                    this.resultStar = 2;
                } else {
                    this.resultStar = 1;
                }
                if (surplusStar == 1) {
                    if (this.resultStar < 3) {
                        this.getStar = 0;
                    } else {
                        this.getStar = 1;
                    }
                } else if (surplusStar == 2) {
                    if (this.resultStar < 2) {
                        this.getStar = 0;
                    } else {
                        this.getStar = 2;
                    }
                } else {
                    this.getStar = this.resultStar;
                }
            } else {
                this.getStar = 0;
            }
            // console.log("获得星星", this.resultStar, this.getStar);
            if (this.getStar) {
                GameData.getInstance().playerData.ownStar += this.getStar;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                DungeonManager.instance.updateLevelStar(curDung.type, curDung.id, surplusStar - this.getStar);
            }
            //获得金币
            let dataArr = [{ awardId: 1001, awardNum: curDung.outGold }];
            //
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                SoundManager.getInstance().playEffect(SoundConst.Reward);
                ViewManager.getInstance().showView(AwardScene, {
                    type: 2, data: dataArr, sureFun: () => {
                        GameMgr.getInstance().updateBaseData(1001, curDung.outGold);
                        this.getStarAward();
                        this.shareVideo();
                    }
                });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        } else {
            this.img_bg.skin = "resource/assets/img/gamePublic/gamePublic_bg2.jpg";
            this.box_fail.visible = true;
            this.getStar = 0;
            this.shareVideo();
        }

        let btn_share = this.btn_share;
        if (GameData.getInstance().isConVersion) {
            this.canFreeGetDiamond = false;
            this.box_award.visible = false;
        }
        if (DeviceUtil.isWXMiniGame()) {
            this.btn_shareVideo.visible = false;
            this.btn_shareVideo1.visible = false;
            this.btn_share.visible = true;
            this.btn_share1.visible = true;

            btn_share.gray = false;
            if (this.canFreeGetDiamond) {
                (btn_share.getChildByName('icon_diomand') as Laya.Image).visible = true;
            }

            if (GameData.getInstance().isConVersion) {
                this.btn_shareVideo.visible = false;
                this.btn_shareVideo1.visible = false;
                this.btn_share.visible = false;
                this.btn_share1.visible = false;
                this.btn_sure.centerX = 0;
                this.btn_sure1.centerX = 0;
                return;
            }
            this.showMoreGameBoxSingle();
        }

    }
    private box_gameBox: Laya.Box

    private async showMoreGameBoxSingle() {
        let left_gameBox = this.box_gameBox.getChildByName("left_gameBox") as MoreGameBoxSingle;
        let right_gameBox = this.box_gameBox.getChildByName("right_gameBox") as MoreGameBoxSingle;
        if (!left_gameBox) {
            left_gameBox = await GameManager.instance.showMoreGameBoxSingle(3);
            if (left_gameBox) {
                this.box_gameBox.addChild(left_gameBox)
                left_gameBox.left = 100;
            }
        }
        if (!right_gameBox) {
            right_gameBox = await GameManager.instance.showMoreGameBoxSingle(3);
            if (right_gameBox) {
                this.box_gameBox.addChild(right_gameBox)
                right_gameBox.right = 100;
            }

        }
    }

    public shareVideo() {
        // ViewManager.getInstance().showView(ShareVideo);

        if (DeviceUtil.isTTMiniGame()) {
            (this.btn_share.getChildByName('icon_diomand') as Laya.Image).visible = false;
            (this.btn_share1.getChildByName('icon_diomand') as Laya.Image).visible = false;
            let flag = false;
            (this.btn_shareVideo1.getChildByName('icon_diomand') as Laya.Image).visible = false;
            (this.btn_shareVideo.getChildByName('icon_diomand') as Laya.Image).visible = false;
            if (GameData.getInstance().isConVersion) {
                (this.btn_shareVideo1.getChildByName('icon_diomand') as Laya.Image).visible = true;
                (this.btn_shareVideo.getChildByName('icon_diomand') as Laya.Image).visible = true;
            }
            this.btn_shareVideo1.visible = false;
            this.btn_shareVideo.visible = false;
            this.btn_shareVideo.gray = false;
            this.btn_shareVideo1.gray = false;
            this.btn_share.visible = false;
            this.btn_share1.visible = false;
            flag = MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0;
            console.log(">>>>>>>>>>>>>>>>>>", flag)
            if (this.canFreeGetDiamond && flag) {
                this.btn_shareVideo.visible = false;
                this.btn_shareVideo1.visible = false;
                this.btn_sure.centerX = 0;
                this.btn_sure1.centerX = 0;
                ViewManager.getInstance().showView(ShareVideo);
            } else {
                this.btn_sure.centerX = -251;
                this.btn_sure1.centerX = -251;
                this.btn_shareVideo.visible = true;
                this.btn_shareVideo1.visible = true;

            }
        }

    }

    public moreGameItem: TTBaoTypeGame;
    public moreGameItem1: TTBaoTypeGame;

    /** 获得星星奖励 */
    private getStarAward() {
        console.log("获得星星奖励", this.getStar);
        if (this.getStar) {
            Laya.timer.once(200, this, () => {
                SoundManager.getInstance().playEffect(SoundConst.StarGather);
                let img = new Laya.Image();
                img.skin = "resource/assets/img/game/dungeon/dungeon_ui_level_win_sword_double.png";
                img.anchorX = img.anchorY = 0.5;
                let p = this.box_star.localToGlobal(new Laya.Point(266, 54));
                img.pos(p.x, p.y);
                Laya.stage.addChild(img);
                let endP = this.box_awardStar.localToGlobal(new Laya.Point(266, 54));
                Laya.Tween.to(img, { x: endP.x, y: endP.y, scaleX: 0.4, scaleY: 0.4 }, 500, null, Laya.Handler.create(this, () => {
                    Laya.stage.removeChild(img);
                    let surplusStar = DungeonManager.instance.curLevelData.surplusStar - this.getStar;
                    for (let i = 0, len = this.box_star.numChildren; i < len; i++) {
                        let img = <Laya.Image>this.box_star.getChildByName("star" + (3 - i));
                        (<Laya.Image>img.getChildAt(0)).visible = surplusStar > i;
                    }
                    this.showOwnStar();
                }));
            });
        }
    }

    /** 显示拥有的星星 */
    private showOwnStar() {
        let own = GameData.getInstance().playerData.ownStar;
        for (let i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
            let img = <Laya.Image>this.box_awardStar.getChildByName("star" + (i + 1));
            (<Laya.Image>img.getChildAt(0)).visible = own > i;
        }
        let canGet = own >= 3
        this.box_award.mouseEnabled = canGet;
        this.boxAwardAni(canGet);
    }

    private isPlaying = false;
    private boxAwardAni(isAni: boolean) {
        if (isAni) {
            if (this.isPlaying) return;
            this.isPlaying = true;
            let fun = () => {
                Laya.Tween.to(this.img_boxAward, { rotation: 10 }, 200, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.img_boxAward, { rotation: -10 }, 400, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(this.img_boxAward, { rotation: 0 }, 200, null, Laya.Handler.create(this, () => {
                            Laya.timer.once(500, this, () => { fun() });
                        }));
                    }));
                }));
            }
            fun();
        } else {
            Laya.timer.clearAll(this);
            Laya.Tween.clearAll(this.img_boxAward);
            this.img_boxAward.rotation = 0;
            this.isPlaying = false;
        }
    }

    private onSureSucc() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SceneManager.getInstance().openGameScene(HomeScene);
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        homeView.displayDungeonView();
        this.removeSelf();
    }
    public canFreeGetDiamond = false;

    private onShare() {
        if (this.btn_share.gray) return;
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        // MiniManeger.instance.shareAppMessage();
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

    public onShareVideo() {
        if (this.btn_shareVideo1.gray) return;
        if (this.btn_shareVideo.gray) return;
        MiniManeger.instance.shareGameVideo({
            successFun: () => {
                if (GameData.getInstance().isConVersion) {

                    GameManager.instance.freeDiamond(20);
                    this.btn_shareVideo1.gray = true;
                    this.btn_shareVideo.gray = true;
                    (this.btn_shareVideo1.getChildByName('icon_diomand') as Laya.Image).visible = false;
                    (this.btn_shareVideo.getChildByName('icon_diomand') as Laya.Image).visible = false;
                }


            }
        })
    }

    private onSureFail() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        this.box_fail.visible = false;
        this.box_fail1.visible = true;
    }

    private onHome() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SceneManager.getInstance().openGameScene(HomeScene);
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        homeView.displayMainView();
        this.removeSelf();
    }

    private onRestart() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        SceneManager.getInstance().openGameScene(HomeScene);
        let homeView = <HomeScene>SceneManager.getInstance().currentScene;
        homeView.displayDungeonView();
        this.removeSelf();
    }

    private onAward() {
        SoundManager.getInstance().playEffect(SoundConst.BtnClick);
        if (GameData.getInstance().treasure.vacancy) {

            GameData.getInstance().playerData.ownStar -= 3;
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            this.showOwnStar();
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], () => {
                ViewManager.getInstance().showView(AwardScene, {
                    type: 2, data: [{ awardId: 160001, awardNum: 1 }], sureFun: () => {
                        TreasureManager.instance.getBox(160001);
                    }
                });
                GameMgr.getInstance().hiddeBufferLoading();
            });
        } else {
            ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
        }
    }

    /** 移除事件 */
    private removeEvent() {
        this.btn_sure.off(Laya.Event.CLICK, this, this.onSureSucc);
        this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
        this.btn_share1.off(Laya.Event.CLICK, this, this.onShare);
        this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_shareVideo1.off(Laya.Event.CLICK, this, this.onShareVideo);
        this.btn_sure1.off(Laya.Event.CLICK, this, this.onSureFail);
        this.btn_home.off(Laya.Event.CLICK, this, this.onHome);
        this.btn_restart.off(Laya.Event.CLICK, this, this.onRestart);
        this.box_award.off(Laya.Event.CLICK, this, this.onAward);
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        if (this.moreGameItem) {
            this.moreGameItem.removeSelf();
            this.moreGameItem = null;
        }
        if (this.moreGameItem1) {
            this.moreGameItem1.removeSelf();
            this.moreGameItem1 = null;
        }
        this.img_hp.mask = null;
        this.countMask = null;
        this.data = null;
        this.boxAwardAni(false);
    }
}