

export class MiniManeger {

    public static ins: MiniManeger;
    public static get instance(): MiniManeger {
        // if (MiniManeger.ins == null) {
        //     if (DeviceUtil.isWXMiniGame()) {
        //         MiniManeger.ins = new MiniWeChatGameManager();
        //     } else if (DeviceUtil.isTTMiniGame()) {
        //         MiniManeger.ins = new MiniTTGameManager()
        //     }
        //     else {
        //         MiniManeger.ins = new MiniWeChatGameManager();
        //     }

        // }

        return MiniManeger.ins;
    }
    public systemInfo;
    public launchOption;
    

    /**
     * 初始化小游戏
     */
    public initMiniGame() {
        // platform.onHide(onHide);

    }
    /**
     * 获取用户信息
     */
    public async getUserInfo(): Promise<any> {
    }

    /**
     * 出事玩家信息  拉取授权等
     * 
     * 暂定返回用户信息
     */
    public async initUserInfo() {
    }

    /**
     * 创建用户按钮的尺寸大小
     * @param percentTop  按钮距离上面位置的比列
     * @param pectendSize  按钮尺寸大小占设计大小的比例
     * @param percentLeft  按钮距离左边位置的比列
     */
    public userButtonSize(percentTop: number, pectendSize: number, percentLeft: number) {

        ////自行处理
    }
    /**
     * 
     * @param style 
     */
    public async createUserButton(style: {
        left: number, top: number, width: number, height: number,
        alpha?, lineHeight?, color?, textAlign?, fontSize?, borderRadius?, backgroundColor?
    }, isFullScene: boolean = false): Promise<any> {


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

    }

    public onHide(callBack: Function) {

    }

    public onAudioInterruptionBegin(callBack: Function) {

    }

    public onAudioInterruptionEnd(callBack: Function) {

    }

    /**
     * 获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。
     */
    public getUpdateManager() {

    }

    /****************************************分享************************************/

    public defaultMssage: any = {

    }

    public shareInfo = [

    ]


    /**
     * 
     * @param query 得到分享配置
     */
    public getShareInfo(query: Object): any {

    }

    /**
     * 分享处理
     * @param data 
     */
    public shareAppMessage(data?: { message?: any, thisObj?: any, sucFun?: Function, failFun?: Function, time?: number }) {

    }

    public shareSucful: Function;

    public shareFailful: Function;

    public thisObj: any;
    /**
     * 分享成功回调的等待时间
     */
    public sucTime: number = 0;


    public async  showMoreGame(data: { parent: Laya.Sprite, moreGame: any, bannerType?: any, showRowCount?: number, showColCount?: number }): Promise<any> {
        return
    }

    /**********************************************广告*****************************************/


    /**
  * 播放视频广告
  * 
  */
    public playViderAd(data: { successFun?: Function, failFun?: Function, errorFun?: Function }) {

    }
    public bannerAd: any;
    public canShowBanner = true;
    /**
     * 显示banner
     */
    public showBannerAd(offset: { w: number, h: number, callback?: Function }) {

    }

    /**
     * 隐藏banner
     */
    public hideBanner() {

    }




    /**
     * 短震动
     */
    public vibrateShort(data: { complete?: Function }) {

    }
    /**
     * 长震动
     */
    public vibrateLong() {

    }

    /**
     * 适配添加到我的小程序
     * @param collec_img 
     * @param stage 
     */
    public adaptImgToClientRect(collec_img: Laya.Image, stage: Laya.Stage) {

    }

    /**
     * 发送到开放数据
     */
    public sendDataToWxOpen(data: { cmd: string, data: any }) {


    }

    /**
     * 
     * @param data 
     */
    public removeOpenData(data: { parent: Laya.Sprite }) {

    }
    /**
     * 增加到微信开放域
     * @param data 
     */
    public addOpenWxData(data: { x?: number, y?: number, width: number, height: number, left?: number, right?: number, top?: number, bottom?: number, parent: Laya.Sprite, isCenter?: boolean }) {

    }
    ///////////////////////////////////////////////////////////////头条//////////////////////////////////////////////////////////

    /**
    * 录屏结束回调
    */
    public recordStopFun: Function;

    /**是否开始计时 */
    public isMakeVideo: boolean;
    /**计时值 */
    public indexTime: number;

    /**最大录制时间 default 120s */
    public maxMakeVideoTime: number = 120;

    /**是否结束后自动分享视频 */
    public isAutoStopShare: boolean = false;

    /**
     * 自动 第一次开始 第二次结束 录制视频
     */
    public makeVideo(): void {

    }

    /**
     * 走时
     */
    public loopTime(): void {

    }

    /**
     * 开始录制
     * 
     * 手动开始
     */
    public startGameRecord() {

    }

    /**
     * 停止录制
     * 
     * 手动停止
     */
    public stopGameRecord() {

    }
    public stopGameRecordOver: Function;
    public pauseGameRecord() {
    }
    public resumeGameRecord() {
    }

	/**
	 * 分享游戏 主动分享 视频--今日头条使用
	 */
    public shareGameVideo(data?: { successFun?: Function, failFun?: Function, errorFun?: Function }): void {

    }

    /**起始时间 */
    public startTime = 0;

    /**
     * 临时录制的视频地址
     */
    public tempVideoPath: string;

	/**
	 * 设置头条视频录制监听
	 */
    public initGameRecordListener(callBack?: Function): void {

    }

    /**更多游戏数据 */
    public moreSomeAppInfos: MoreSomeAppInfo[];

    /**
     * 显示更多游戏
     * 
     * 需要提前设置 moreSomeAppInfos
     */
    public showMoreGamesModal(): void {

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


}
/**
 * 更多游戏需要跳转的单个数据
 */
export class MoreSomeAppInfo {
    /**icon url */
    icon: string;
    title: string;
    appid: string;
}