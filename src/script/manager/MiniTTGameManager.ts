
import InviteManager from "./InviteManager";
import { GameData } from "../common/GameData";
import SoundManager, { SoundConst } from "./SoundManager";
import GameConst from "../common/GameConst";
import SoundUtil from "../tool/SoundUtil";
import { MiniManeger } from "./MiniManeger";
import TTBaoTypeGame from "../view/home/tt/TTBaoTypeGame";
import { DouyinBanner } from "../view/home/tt/DouyinBanner";


/**
 * 小游戏管理器
 */
export class MiniTTGameManager extends MiniManeger {
    // public static ins: MiniManeger;
    // public static get instance(): MiniManeger {
    //     if (this.ins == null) {
    //         this.ins = new MiniManeger();
    //     }

    //     return this.ins;
    // }

    /********************************************************** */


    public constructor() {
        super();
        this.isMakeVideo = false;
        this.indexTime = 0;
        this.initGameRecordListener();
    }


    //////////////////////////////////////////////////////////头条/////////////////////////////////////////////////
    /**
   * 自动 第一次开始 第二次结束 录制视频
   */
    public makeVideo(): void {
        if (this.isMakeVideo) {
            console.log("录制结束");
            this.stopGameRecord();
            if (this.indexTime < 3) {
                TipsManager.getInstance().showDefaultTips("视频要录制超过3s哦!");
            }
            return
        }
        console.log("录制开始");
        this.startGameRecord();
    }

    /**
     * 走时
     */
    public loopTime(): void {
        this.indexTime++;
        if (this.indexTime >= this.maxMakeVideoTime) {
            console.log("录制结束");
            this.stopGameRecord();
        }
    }

    /**
     * 开始录制
     * 
     * 手动开始
     */
    public startGameRecord() {
        if (!DeviceUtil.isTTMiniGame()) {
            return;
        }
        console.log("startGameRecord");
        this.isMakeVideo = true;
        this.indexTime = 0;
        Laya.timer.loop(1000, this, this.loopTime);
        platform.getGameRecorderManager().start({ duration: this.maxMakeVideoTime });
    }

    public pauseGameRecord() {
        platform.getGameRecorderManager().pause();
    }
    public resumeGameRecord() {
        platform.getGameRecorderManager().resume();
    }
    /**
     * 停止录制
     * 
     * 手动停止
     */
    public stopGameRecord() {
        if (!DeviceUtil.isTTMiniGame()) {
            return
        }
        if (this.isMakeVideo) {
            this.isMakeVideo = false;
            Laya.timer.clear(this, this.loopTime);
            MiniManeger.instance.recordStopFun && MiniManeger.instance.recordStopFun();
            platform.getGameRecorderManager().stop();
            if (this.indexTime <= 3) {
                TipsManager.getInstance().showDefaultTips("录制视频时间不能小于3秒哦!");
            }
        }
        console.log("stopGameRecord");
    }

	/**
	 * 分享游戏 主动分享 视频--今日头条使用
	 */
    public shareGameVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }): void {
        MiniManeger.instance.isAutoStopShare = GameConst.infos.isAutoMakeVideo;
        if (!this.tempVideoPath || this.tempVideoPath.length == 0) {
            TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
            return
        }
        if (!DeviceUtil.isTTMiniGame()) { return }
        console.log("分享游戏视频--");
        //记录任务 本日分享次数达到5次
        let obj: any = {};
        // obj.channel = "video";
        obj.title = "海盗转一转";
        // obj.imageUrl = "https://package.32yx.com/ecy_game_small/game_basketball/share_img/game_basketball.jpg";
        obj.query = "openId=" + GameData.getInstance().userInfo.openId + "&nick=" + GameData.getInstance().userInfo.nick;
        obj.videoPath = this.tempVideoPath;
        obj.success = function () {
            console.log("视频分享成功！");
            data.successFun && data.successFun();
        };
        obj.fail = function (res) {
            console.log("视频分享失败！", res);
            data.failFun && data.failFun();
            TipsManager.getInstance().showDefaultTips("视频分享失败！");
        };
        platform.shareVideo(obj);
    }
	/**
	 * 设置头条视频录制监听
	 */
    public initGameRecordListener(callBack?: Function): void {
        if (!DeviceUtil.isTTMiniGame()) { return }
        let recorder = platform.getGameRecorderManager();

        recorder.onStart(res => {
            // 录屏开始
            console.log(res);
            MiniManeger.instance.stopGameRecordOver = null;
            this.startTime = (new Date()).getTime();
            // do somethine;
            recorder.recordClip({
                timeRange: [3, 3]
            })
        })
        recorder.onStop(res => {
            let now = (new Date()).getTime();
            callBack && callBack();
            if (now - MiniManeger.instance.startTime < 3000) {
                MiniManeger.instance.tempVideoPath = null;
                platform.showModal({
                    title: '系统提示', content: "需要录制3秒以上哟", showCancel: false, cancelText: "", confirmText: "确定",
                    success: () => {
                        MiniManeger.instance.stopGameRecordOver && MiniManeger.instance.stopGameRecordOver();
                        MiniManeger.instance.stopGameRecordOver = null;
                    }
                })
                return;
            }
            MiniManeger.instance.tempVideoPath = res.videoPath;
            MiniManeger.instance.stopGameRecordOver && MiniManeger.instance.stopGameRecordOver();
            MiniManeger.instance.stopGameRecordOver = null;
            console.log('onstop ', MiniManeger.instance.tempVideoPath, MiniManeger.instance.isAutoStopShare && GameConst.infos.isAutoMakeVideo);
            if (MiniManeger.instance.isAutoStopShare && GameConst.infos.isAutoMakeVideo) {//停止的时候需要设置并且配置为自动的时候调取分享
                MiniManeger.instance.shareGameVideo();
            }
        })

        recorder.onPause(() => {
            // 录屏已暂停;
        })
        recorder.onInterruptionBegin(() => {
            // 录屏已暂停;
            recorder.pause();
        })
        recorder.onInterruptionEnd(() => {
            // 录屏已暂停;
            recorder.resume();
        })

        recorder.onResume(() => {
            // 录屏已恢复;
        })
    }
    /**
     * 显示更多游戏
     * 
     * 需要提前设置 moreSomeAppInfos
     */
    public showMoreGamesModal(): void {
        let appLaunchOptions = [];
        for (let i = 0, len = this.moreSomeAppInfos.length; i < len; i++) {
            appLaunchOptions.push({
                appId: this.moreSomeAppInfos[i].appid,
                query: "",
                extraData: {}
            });
        }
        platform.showMoreGamesModal({
            appLaunchOptions: appLaunchOptions,
            success(res) {
                console.log("success", res.errMsg);
            },
            fail(res) {
                console.log("fail", res.errMsg);
            }
        });
    }


    /**
     * 获取app平台
     * Toutiao 今日头条
     * Douyin 抖音
     * XiGua 西瓜视频
     * news_article_lite 头条极速版
     * devtools 开发者工具
     */
    public appName(): "Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools" {
        let self = this;
        if (!self.systemInfo) {
            self.systemInfo = platform.getSystemInfoSync();
        }
        return (self.systemInfo.appName as ("Toutiao" | "Douyin" | "XiGua" | "news_article_lite" | "devtools"));
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * 初始化小游戏
     */
    public initMiniGame() {
        // platform.onHide(onHide);
        let launchObj = platform.getLaunchOptionsSync();
        if (launchObj) {
            console.log('launchObj>>>>>>>>>>>>>>', launchObj);

        }
        this.getUpdateManager();
        platform.setKeepScreenOn();
        platform.updateShareMenu();
        platform.showShareMenu();
        // 	//默认分享
        platform.onShareAppMessage(() => {
            return this.defaultMssage;
        });
        this.systemInfo = platform.getSystemInfoSync();
        console.log("systemInfo >> ", this.systemInfo);
    }

    /**
     * 获取用户信息
     */
    public async getUserInfo(): Promise<any> {
        return new Promise((resolve) => {
            // wx.getUserInfo({
            //     withCredentials: true,
            //     lang: 'zh_CN',
            //     success: (res) => {//直接获取用户信息
            //         // var userInfo = res.userInfo;
            //         resolve(res);
            //     },
            //     fail: (res) => {//创建登陆按钮
            //         if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
            //             // 处理用户拒绝授权的情况
            //         } else {

            //         }
            //         resolve(null);

            //     }
            // })
            resolve(null)
        })
    }

    /**
     * 出事玩家信息  拉取授权等
     * 
     * 暂定返回用户信息
     */
    public async initUserInfo() {
        let info = await this.getUserInfo();
        if (info == null) {//授权失败 创建 按钮授权
            // info = await this.createUserButton({ width: 0, height: 0, left: 0, top: 0 }, true);
        }
        if (info == null) return null;
        GameData.getInstance().userInfo.nick = info.userInfo.nickName;
        GameData.getInstance().userInfo.avatarUrl = info.userInfo.avatarUrl;
        MiniManeger.instance.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
        InviteManager.getInstance().judgeInvite();
        platform.onShareAppMessage(() => {
            return MiniManeger.instance.defaultMssage;
        });
        return info;
    }

    /**
     * 创建用户按钮的尺寸大小
     * @param percentTop  按钮距离上面位置的比列
     * @param pectendSize  按钮尺寸大小占设计大小的比例
     * @param percentLeft  按钮距离左边位置的比列
     */
    public userButtonSize(percentTop: number, pectendSize: number, percentLeft: number) {
        let resInfo = platform.getSystemInfoSync()
        let left = resInfo['windowWidth'] * percentLeft;
        let top = resInfo['windowHeight'] * percentTop;
        var wid = resInfo['windowWidth'] * pectendSize;
        var height = resInfo['windowHeight'] * pectendSize;
        ////自行处理
    }

    /**
     * 进入后台的时间戳
     */
    public hideTime = 0;
    /**
     * 进入前天的时间戳
     */
    public showTime = 0;
    public onShow(callBack: Function) {
        platform.onShow(() => {
            callBack && callBack();
            this.showTime = new Date().getTime();
            if (this.showTime - this.hideTime >= this.sucTime) {
                this.shareSucful && this.shareSucful.call(this.thisObj);
                // PlatfromManager.getInstance().uploadShare();
            } else {
                this.shareFailful && this.shareFailful.call(this.thisObj);
            }
            this.shareFailful = null;
            this.shareFailful = null;
            this.thisObj = null;
            EventMgr.getInstance().sendEvent(GameConst.ONSHOW);
        });
    }

    public onHide(callBack: Function) {
        platform.onHide(() => {
            callBack && callBack();
            // PlatfromManager.getInstance().initexposureInfoData();
            this.hideTime = new Date().getTime();
            EventMgr.getInstance().sendEvent(GameConst.ONHIDE);
        });
    }

    public onAudioInterruptionBegin(callBack: Function) {
        platform.onAudioInterruptionBegin(() => {
            callBack && callBack();
        });
    }

    public onAudioInterruptionEnd(callBack: Function) {
        platform.onAudioInterruptionEnd(() => {
            callBack && callBack();
        });
    }

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
     */
    public getUpdateManager() {
        platform.getUpdateManager();
    }

    /****************************************分享************************************/



    public defaultMssage = {
        "title": "如果猫猪争宠，你会站在哪一边？",
        "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
        "query": ""
    }

    public shareInfo = [
        {
            "title": "如果猫猪争宠，你会站在哪一边？",
            "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
            "query": ""
        }
    ]


    /**
     * 
     * @param query 得到分享配置
     */
    public getShareInfo(query: Object): any {
        let shareInfo = this.shareInfo;
        let info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
        if (query) {
            let openId: string = GameData.getInstance().userInfo.openId;
            query['openid'] = openId;
        }
        // if (PlatfromManager.getInstance().lastId != null) {
        //     query['id'] = PlatfromManager.getInstance().lastId
        // }
        info.query = Utils.querStr(query);
        return info;
    }

    /**
     * 分享处理
     * @param data 
     */
    public shareAppMessage(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {
        if (data == null) {
            data = {};
        }
        this.shareSucful = data.sucFun;
        this.shareFailful = () => {
            TipsManager.getInstance().showDefaultTips('分享失败，请分享到群里');
            data.failFun && data.failFun();;
        }

        this.thisObj = data.thisObj;
        this.sucTime = data.time || 0;
        if (!data.message) {
            data.message = this.getShareInfo({});
        }
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            platform.shareAppMessage(data.message);
        } else {

        }
    }

    public shareSucful: Function;

    public shareFailful: Function;

    public thisObj: any;
    /**
     * 分享成功回调的等待时间
     */
    public sucTime: number = 0;


    /**********************************************广告*****************************************/
    /**
      * 播放视频广告
      * 
      */
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function, isLongVideo?: boolean }) {
        if (!DeviceUtil.isTTMiniGame()) {
            ///暂时成功
            TipsManager.getInstance().showDefaultTips('开发中');
            data.successFun && data.successFun();
            return;
        }
        let videoId = GameData.getInstance().videoId;
        if (data.isLongVideo) {
            videoId = GameData.getInstance().longVideoId;
        }
        if (videoId.length <= 0) {
            TipsManager.getInstance().showDefaultTips('开发中');
            data.errorFun && data.errorFun();
            // SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
            return;
        }
        platform.showLoading({ title: '广告加载中', mask: true });

        let adId = videoId[Math.floor(Math.random() * videoId.length)];
        platform.createRewardedVideoAd(adId, (res) => {
            if (res.isEnded) {//正常关闭
                data.successFun && data.successFun();
                SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                // PlatfromManager.getInstance().dataUpload('video');
            } else {
                data.failFun && data.failFun();
                SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
            }

            platform.hideLoading({});
        }, () => {
            platform.hideLoading({});
            TipsManager.getInstance().showDefaultTips('网络错误');
            data.errorFun && data.errorFun();
        });
    }
    public bannerAd: any;
    public canShowBanner = true;
    /**
     * 抖音banner
     */
    public douyinBanner: DouyinBanner;
    /**
     * 显示banner
     */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {
        if (!DeviceUtil.isTTMiniGame()) {
            return;
        }
        if (MiniManeger.instance.appName() == "Douyin") {
            if (MiniManeger.instance.moreSomeAppInfos != null && MiniManeger.instance.moreSomeAppInfos.length > 0) {
                this.douyinBanner = Laya.stage.getChildByName('DouyinBanner') as DouyinBanner;
                if (this.douyinBanner == null) {
                    this.douyinBanner = new DouyinBanner();
                    this.douyinBanner.name = 'DouyinBanner';
                } else {
                    this.douyinBanner.removeSelf();
                }
                this.douyinBanner.bottom = 30;
                let phone = MiniManeger.instance.systemInfo;
                if (offset) {
                    let wids = offset.w / phone.screenWidth * Laya.stage.width;
                    this.douyinBanner.x = wids - this.douyinBanner.width / 2;
                } else {
                    this.douyinBanner.x = Laya.stage.width - this.douyinBanner.width / 2;
                }

                // let offset = { w: phone.screenWidth / 4, h: phone.screenHeight }
                Laya.stage.addChild(this.douyinBanner);
            }
            return;
        }
        this.canShowBanner = true;
        let bannerId = GameData.getInstance().bannerId;
        if (bannerId.length <= 0) {
            return;
        }
        let adId = bannerId[Math.floor(Math.random() * bannerId.length)];
        if (this.bannerAd == null) {
            let bannerAd = platform.createBannerAd(adId);
            if (bannerAd == null) return;
            this.bannerAd = bannerAd;
            // bannerAd.onResize(() => {
            //     // bannerAd.style.left = w - bannerAd.style.realWidth / 2 + 0.1;
            //     bannerAd.style.top = this.systemInfo.screenHeight - bannerAd.style.realHeight + 0.1;
            // });
            // bannerAd.style.top = this.systemInfo.screenHeight - bannerAd.style.realHeight + 0.1;
            bannerAd.show();
            // console.log("bannerAd", bannerAd);
        }
        this.bannerAd.show();
        if (!this.canShowBanner) {
            this.bannerAd.hide()
        }
        if (offset) {
            this.bannerAd.style.left = offset.w - this.bannerAd.style.width / 2 + 0.1;
            // this.bannerAd.style.top = offset.h //- this.bannerAd.style.height + 0.1;
            offset.callback && offset.callback();
        }
    }

    /**
     * 隐藏banner
     */
    public hideBanner() {
        if (this.bannerAd != null) {
            this.bannerAd.hide();
        }
        if (MiniManeger.instance.appName() == "Douyin") {
            if (this.douyinBanner != null) {
                this.douyinBanner.removeSelf();
            }
        }

        this.canShowBanner = false;
    }

    /**
     * 短震动
     */
    public vibrateShort(data: { complete?: Function }) {
        if (!SoundUtil.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            platform.vibrateShort(data);
        }
    }
    /**
     * 长震动
     */
    public vibrateLong() {
        if (!SoundUtil.getInstance().shakeIsOpen) return;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
            platform.vibrateLong();
        }
    }

    /**
     * 适配添加到我的小程序
     * @param collec_img 
     * @param stage 
     */
    public adaptImgToClientRect(collec_img: Laya.Image, stage: Laya.Stage) {
        if (DeviceUtil.isTTMiniGame()) {
            let systemInfo = platform.getSystemInfoSync();
            let screenHeight = systemInfo['screenHeight'];
            let screenWidth = systemInfo['screenWidth'];
            let rect = platform.getMenuButtonBoundingClientRect();
            // collec_img.anchorY = 0.5;
            collec_img.top = stage.height * (rect['top'] / screenHeight);
            collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
        }
    }

    /**
     * 发送到开放数据
     */
    public sendDataToWxOpen(data: { cmd: string, data: any }) {
        Laya.MiniAdpter.window.wx.postMessage(data);

    }

    /**
     * 
     * @param data 
     */
    public removeOpenData(data: { parent: Laya.Sprite }) {
        let wxOpenData: Laya.WXOpenDataViewer = data.parent.getChildByName('wxOpenData') as Laya.WXOpenDataViewer;
        this.sendDataToWxOpen({ cmd: 'close', data: null });
        if (wxOpenData) {
            wxOpenData.removeSelf();
            wxOpenData.destroy();
            wxOpenData = null;
        }
    }
    /**
     * 增加到微信开放域
     * @param data 
     */
    public addOpenWxData(data: { x?: number, y?: number, width: number, height: number, left?: number, right?: number, top?: number, bottom?: number, parent: Laya.Sprite, isCenter?: boolean }) {
        let shareData = MiniManeger.instance.getShareInfo({ id: GameData.getInstance().userInfo.openId })
        this.sendDataToWxOpen({ cmd: 'share', data: JSON.stringify(shareData) });
        let wxOpenData: Laya.WXOpenDataViewer = data.parent.getChildByName('wxOpenData') as Laya.WXOpenDataViewer;
        if (wxOpenData) {
            wxOpenData.removeSelf();
            wxOpenData.destroy();
            wxOpenData = null;
        }
        wxOpenData = new Laya.WXOpenDataViewer();
        wxOpenData.name = 'wxOpenData';
        wxOpenData.x = data.x || 0;
        wxOpenData.y = data.y || 0;
        wxOpenData.width = data.width;
        wxOpenData.height = data.height;
        if (data.isCenter) {
            wxOpenData.centerX = 0;
            wxOpenData.centerY = 0;
        } else {
            if (data.left != null) {
                wxOpenData.left = data.left;
            }
            if (data.right != null) {
                wxOpenData.right = data.right;
            }
            if (data.top != null) {
                wxOpenData.top = data.top;
            }
            if (data.bottom != null) {
                wxOpenData.bottom = data.bottom;
            }
        }
        if (data.parent) {
            data.parent.addChild(wxOpenData);
        }
        return wxOpenData;
    }


}
