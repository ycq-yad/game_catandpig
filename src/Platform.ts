/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {
    CLLogin();
    /**
     * 获取小游戏启动时的参数
     */
    getLaunchOptionsSync(): any;
    /**
     * 创建插屏
     * @param obj 
     */
    createInterstitialAd(obj: { adUnitId: String, onError?: Function, onLoad?: Function, onClose?: Function }): any;
    /**
     * 显示 loading 提示框
     */
    showLoading(obj: Object): any;
    /**
    * 关闭 loading 提示框
    */
    hideLoading(obj: Object): any;

    /**
     * 监听小游戏回到前台的事件
     */
    onShow(callback: Function);

    /**
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
     */
    onHide(callback: Function);

    /**
     * 监听音频因为受到系统占用而被中断开始事件。
     * 以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    onAudioInterruptionBegin(callback: Function);

    /**
     * 监听音频中断结束事件。
     * 在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     */
    onAudioInterruptionEnd(callback: Function);

    /**授权 */
    authorize(): Promise<any>;

    //创建授权按钮
    createUserInfoButton(onTap);

    /**
     * 获取用户信息
     * 
     * 在已经授权的情况才能获取，没有授权只能创建授权按钮
     */
    getUserInfo(): Promise<any>;

    login(): Promise<any>;

    /**嘟游 登录只需要 code信息 */
    DYlogin(): Promise<string>;

    /**
     * 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
     */
    createInnerAudioContext(): any;

    /**
     * 分享
     * @param obj 
     */
    shareAppMessage(obj);

    /**获取token */
    getToken(): Promise<string>;

    /**获取系统信息 */
    getSystemInfo(): Promise<string>;
    getSystemInfoSync(): any;
    getMenuButtonBoundingClientRect(): Object;

    /**
     * 支付 num数量
     */
    requestMidasPayment(num, prepayid, success, fail);

    /**
     * 震动
     */
    vibrateShort(obj: Object);
    /**
     * 长震动
     */
    vibrateLong();

    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
     */
    setKeepScreenOn();

    /**
     * 更新转发属性
     */
    updateShareMenu();

    /**
     * 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮
     */
    showShareMenu();

    /**
     * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    onShareAppMessage(callback);

    /**
     * 创建激励视频
     * 
     * @param onClose res 内有isEnded 为1 正常播放完毕 0非正常播放完毕退出
     * @param onError 
     */
    createRewardedVideoAd(adUnitId, onClose, onError);

    /**微信授权 弹出  返回是否授权*/
    wxAuthorize(): Promise<boolean>;

    /**检验是否授权 */
    checkIsAuthorize(): Promise<boolean>;

    /**
     * 加速回收 qq上api没有公布
     */
    triggerGC();

    navigateToMiniProgram(obj);
    previewImage(obj);

    /**
     * 复制
     * @param obj 
     */
    setClipboardData(obj);

    startGyroscope(object);
    onGyroscopeChange(callback)
    offGyroscopeChange(callback)

    startDeviceMotionListening(obj)
    stopDeviceMotionListening(obj)
    onDeviceMotionChange(callback)
    offDeviceMotionChange(callback)

    createBannerAd(adUnitId): any

    checkSession(obj);
    /** 显示模态对话框*/
    showModal(obj: any);

    /**分享录屏 --今日头条 */
    shareVideo(obj: any);

    /**录屏工具 管理器 -今日头条 */
    getGameRecorderManager();
    /**
     * 基础库 1.33.0 开始支持本方法，低版本需做兼容处理。
     * tt.showMoreGamesModal 仅 Android 支持，iOS 不支持，开发者需做相应兼容处理。
     */
    showMoreGamesModal(obj);
    //更新
    getUpdateManager();

}


class DebugPlatform implements Platform {
    createBannerAd(adUnitId) {

    }
    checkSession(obj) { }

    /**
     * 获取小游戏启动时的参数
     */
    getLaunchOptionsSync(): any {

    }

    /**
     * 显示 loading 提示框
     */
    showLoading(obj: Object) {

    }
    /**
    * 关闭 loading 提示框
    */
    hideLoading(obj: Object) {

    }

    previewImage(obj) {

    }
    navigateToMiniProgram(obj) {

    }

    /**
     * 监听小游戏回到前台的事件
     */
    onShow(callback: Function) { }

    /**
     * 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
     */
    onHide(callback: Function) { }

    /**
     * 监听音频因为受到系统占用而被中断开始事件。
     * 以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    onAudioInterruptionBegin(callback: Function) { };

    /**
     * 监听音频中断结束事件。
     * 在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     */
    onAudioInterruptionEnd(callback: Function) { };

    /**授权 */
    authorize(): Promise<any> {
        return
    }

    //创建授权按钮
    createUserInfoButton(onTap) { }

    getUserInfo(): Promise<any> {
        return
    }

    login(): Promise<any> {
        return
    }

    CLLogin(): Promise<any> {
        return
    }
    /**嘟游 登录只需要 code信息 */
    DYlogin(): Promise<string> {
        return
    }

    /**
     * 创建并返回内部 audio 上下文 `innerAudioContext` 对象。*本接口是 `wx.createAudioContext` 升级版。*
     */
    createInnerAudioContext(): any { }

    /**
     * 分享
     * @param obj 
     */
    shareAppMessage(obj) { }

    /**获取token */
    getToken(): Promise<string> { return }

    /**获取系统信息 */
    getSystemInfo(): Promise<string> { return }

    /**
     * 支付 num数量
     */
    requestMidasPayment(num, prepayid, success, fail) {

    }

    /**
     * 震动
     */
    vibrateShort(obj: Object) { }

    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效
     */
    setKeepScreenOn() {

    }

    /**
     * 更新转发属性
     */
    updateShareMenu() {

    }

    /**
     * 显示当前页面的"转发"、"分享到空间"、"分享到微信好友"、"分享到微信朋友圈"按钮
     */
    showShareMenu() {

    }

    /**
     * 监听用户点击右上角菜单的「转发」、「分享到空间」按钮时触发的事件
     */
    onShareAppMessage(callback) {

    }

    /**
     * 创建激励视频
     * 
     * @param onClose res 内有isEnded 为1 正常播放完毕 0非正常播放完毕退出
     * @param onError 
     */
    createRewardedVideoAd(adUnitId, onClose, onError) {

    }

    /**微信授权 弹出  返回是否授权*/
    wxAuthorize(): Promise<boolean> {
        return
    }

    /**检验是否授权 */
    checkIsAuthorize(): Promise<boolean> {
        return
    }

    /**
     * 加速回收 qq上api没有公布
     */
    triggerGC() {

    }
    getMenuButtonBoundingClientRect() {
        return Object
    }
    /**
      * 长震动
      */
    vibrateLong() {

    }

    /**
     * 复制
     * @param obj 
     */
    setClipboardData(obj) {

    }
    //开始监听陀螺仪数据。
    startGyroscope(obj) {

    }

    //开始监听陀螺仪数据。
    createInterstitialAd(obj) {

    }

    getSystemInfoSync() {
        return Object;
    }

    onGyroscopeChange(callback) {

    }
    offGyroscopeChange(callback) {

    }

    startDeviceMotionListening(obj) {

    }
    stopDeviceMotionListening(obj) {

    }
    onDeviceMotionChange(callback) {

    }
    offDeviceMotionChange(callback) {

    }

    /** 显示模态对话框*/
    showModal(obj: any) { }

    /**分享录屏 --今日头条 */
    shareVideo(obj: any) { }

    /**录屏工具 管理器 -今日头条 */
    getGameRecorderManager() { }

    /**
     * 基础库 1.33.0 开始支持本方法，低版本需做兼容处理。
     * tt.showMoreGamesModal 仅 Android 支持，iOS 不支持，开发者需做相应兼容处理。
     */
    showMoreGamesModal(obj) { };
    /**
     * 更新
     */
    getUpdateManager() { }

}

/**
 * 用户信息
 */
class UserInfo {
    avatarUrl: string;
    city: string;
    country: string;
    gender: number;
    language: string;
    nickName: string;
    province: string;
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





