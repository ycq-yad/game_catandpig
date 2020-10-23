import { GameData } from "../../common/GameData";

import { ChannelInfos } from "../../common/GameConfigType";
import { MiniManeger } from "../MiniManeger";
import { GameManager } from "../GameManager";

/**
 * 渠道-嘟游网络科技有限公司
 */
export default class DYChannelMgr {

    private constructor() {

    }

    public static ins: DYChannelMgr;
    public static get instance(): DYChannelMgr {
        if (!DYChannelMgr.ins) DYChannelMgr.ins = new DYChannelMgr();
        return DYChannelMgr.ins;
    }


    /** 接口的url, 默认wx */
    private url: string = "https://zy.qkxz.com/WxApi/?webid=106";
    /** 版本号 */
    private version: number = 210;
    /** openid */
    private openid: string;

    public channelInfos: ChannelInfos;

    public initConfig(res) {
        this.channelInfos = res;
        this.url = res.url;
        this.version = res.version;
    }

    /** 渠道登录。获取openid及授权等操作 */
    public loginGame(): Promise<DYAuthorize_Rev> {
        return new Promise<DYAuthorize_Rev>(async (resolve, reject) => {
            let userinfo;
            if (DeviceUtil.isWXMiniGame()) {
                userinfo = await this.WXLogin();
            } else if (DeviceUtil.isTTMiniGame()) {
                userinfo = await this.TTLogin();
            }
            if (userinfo) {
                this.openid = userinfo.openid;
                GameData.getInstance().userInfo.openId = userinfo.openid;
            }
            await this.requestUser();
            resolve(userinfo);
        });
    }

    /** 微信平台登录。获取openid及授权等操作 */
    private WXLogin(): Promise<DYAuthorize_Rev> {
        return new Promise<DYAuthorize_Rev>((resolve, reject) => {
            wx.login({
                success: (res) => {
                    if (res.code) {
                        console.log("code：", res.code);
                        let launchOption: WXLaunchOptions = MiniManeger.instance.launchOption;
                        let scene = null;
                        if (launchOption.query && launchOption.query["scene"]) {
                            scene = launchOption.query["scene"]
                        }
                        let obj: DYAuthorize_Cmd = {
                            code: res.code,
                            nickName: "",
                            avatarUrl: "",
                            gender: 0,
                            scene: scene
                        }
                        let str = GameManager.instance.objToQueryStr(obj);
                        HttpMgr.getInstance().sendHttp(this.url + "&act=userinfo&version=" + this.version + "&" + str, null, (rev) => {
                            let jsonRev: DYAuthorize_Rev = rev.data;
                            console.log("DY---> login success", rev);
                            resolve(jsonRev);
                        }, (err) => {
                            console.warn("DY---> login fail = ", err);
                            // reject();
                            resolve(null);
                        }, "get");
                    } else {
                        console.warn("微信登录失败：", res);
                        resolve(null);
                    }
                },
                fail: (err) => {
                    console.log("login调用失败", err);
                    resolve(null);
                }
            });
        });
    }

    /** 头条平台登录。获取openid及授权等操作 */
    private TTLogin(): Promise<DYAuthorize_Rev> {
        return new Promise<DYAuthorize_Rev>((resolve, reject) => {
            // HttpMgr.getInstance().sendHttp(this.url + "&act=userinfo" + "&", obj, (rev) => {
            //     let jsonRev: DYAuthorize_Rev = rev.data;
            //     console.log("DY---> login success", rev);
            //     resolve(jsonRev);
            // }, (err) => {
            //     console.warn("DY---> login fail = ", err);
            //     reject();
            // }, "get");
        });
    }

    private requestUser(): Promise<any> {
        return new Promise<any>((resolve) => {
            HttpMgr.getInstance().sendHttp(this.url + "&act=user&version=" + this.version + "&openid=" + this.openid, null, (rev) => {
                console.log("DY---> requestUser rev = ", rev);
                if (rev && rev.data) {
                    // GameData.getInstance().isConVersion = rev.data.is_status == 0;
                    if (parseInt(rev.data.is_status) == 1 && parseInt(rev.data.casualClick) == 1) {
                        // GameData.getInstance().touchByMistake = true;
                        GameData.getInstance().isConVersion = false;
                    } else {
                        // GameData.getInstance().touchByMistake = false;
                        GameData.getInstance().isConVersion = true;
                    }
                }
                resolve();
            }, () => {
                resolve();
            }, "get");
        });
    }

    private startGameReport = false;
    public nGameID: number = 0;
    /** 开始游戏, 返回游戏id */
    public startGame(): Promise<number> {
        return new Promise<number>((resolve) => {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame() && !this.startGameReport) {
                HttpMgr.getInstance().sendHttp(this.url + "&act=index&version=" + this.version + "&openid=" + this.openid, null, (rev) => {
                    let jsonRev = rev.data;
                    console.log("DY---> startGame rev = ", rev);
                    this.nGameID = jsonRev.id;
                    this.startGameReport = true;
                    resolve(jsonRev.id);
                }, () => {
                    resolve(null);
                }, "get");
            } else {
                resolve(null);
            }
        });
    }

    private endGameReport = false;
    /** 游戏结束接口 */
    public endGame(obj?: DYEndGame_Cmd): Promise<any> {
        return new Promise<any>((resolve) => {
            if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame() && !this.endGameReport) {
                if (!obj) obj = { id: this.nGameID };
                HttpMgr.getInstance().sendHttp(this.url + "&act=end&version=" + this.version + "&openid=" + this.openid + "&id=" + obj.id, null, (rev) => {
                    let jsonRev = rev.data;
                    console.log("DY---> endGame rev = ", rev);
                    this.endGameReport = true;
                    resolve(jsonRev);
                }, () => {
                    resolve(null);
                }, "get");
            } else {
                resolve(null);
            }
        });
    }

    /** 
     * 点击游戏统计
     * @param id 
     */
    public clickGame(id: string) {
        HttpMgr.getInstance().sendHttp(this.url + "&act=game&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, (rev) => {
            console.log("DY---> clickGame rev = ", rev);
        }, null, "get");
    }

    /**
     * 跳转游戏成功统计
     * @param id 
     */
    public toGame(id: string) {
        HttpMgr.getInstance().sendHttp(this.url + "&act=cgame&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, (rev) => {
            console.log("DY---> toGame rev = ", rev);
        }, null, "get");
    }

    /** 游戏显示列表 */
    private gameListInfos: DYGameListItem[] = [];
    /** 广告显示 */
    private bannerInfos: any[] = [];

    private _moreGameList: MoreGameInfo[] = [];
    /** 更多游戏显示列表 */
    public get moreGameList() {
        return Utils.copy(this._moreGameList);
    }
    public set moreGameList(data: MoreGameInfo[]) {
        this._moreGameList = data;
    }


    public randomOpenGame() {
        let data = Utils.randomArray(this.moreGameList) as MoreGameInfo;
        DYChannelMgr.instance.clickGame(data.ad_id);
        let obj = {
            appId: data.ad_appid,
            path: data.url,
            success: () => {
                console.log("navigateToMiniProgram success!");
                DYChannelMgr.instance.toGame(data.ad_id);
            },
            fail: (e) => {
                console.log("navigateToMiniProgram fail", e);
                // EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, false);
            }
        };
        wx.navigateToMiniProgram(obj);
    }
    /** 获取游戏列表接口 */
    private getGameList(): Promise<DYGameListItem[]> {
        return new Promise<DYGameListItem[]>((resolve, reject) => {
            let url = this.url + "&act=gamelist&version=" + this.version + "&openid=" + this.openid + "&v=" + Math.random();
            HttpMgr.getInstance().sendHttp(url, null, (rev) => {
                console.log("DY---> getGameList rev = ", rev);
                this.bannerInfos = rev.data.banner;
                this.gameListInfos = rev.data.gamelist;
                resolve(rev.data.gamelist);
            }, () => {
                reject();
            }, "get");
        });
    }

    /**请求刷新游戏列表 */
    public refreshGameList(reload: boolean = true) {
        return new Promise<any>((resolve, reject) => {
            if (!reload && this._moreGameList && this._moreGameList.length > 0) {
                resolve(this._moreGameList);
                return;
            }
            this.getGameList().then(() => {
                this._moreGameList = [];
                let nLen = 0;
                if (this.gameListInfos) nLen = this.gameListInfos.length;
                for (let i = 0; i < nLen; ++i) {
                    let stData = new MoreGameInfo();
                    stData.ad_id = this.gameListInfos[i].id;
                    stData.ad_img = this.gameListInfos[i].img;
                    stData.name = this.gameListInfos[i].title;
                    stData.ad_appid = this.gameListInfos[i].appid;
                    stData.url = this.gameListInfos[i].url;
                    this._moreGameList.push(stData);
                }
                console.log("refreshGameList = ", this._moreGameList);
                resolve(this._moreGameList);
            }).catch(() => {
                resolve(null);
            });
        });
    }

    public getRandomIndex(nMax: number): number[] {
        if (!this._moreGameList || this._moreGameList.length <= 0) {
            return [];
        }
        let nRandom = Utils.random(0, this._moreGameList.length - 1);
        let nCount = this._moreGameList.length % 3;
        if (nCount > 0) {
            nCount = 3 - nCount;
        }

        nCount = this._moreGameList.length + nCount;
        if (nCount <= nMax) {
            nCount = nMax;
        }
        let aryInfo: number[] = [];
        for (let i = 0; i < nCount; ++i) {
            aryInfo.push(nRandom);
            nRandom += 1;
            if (nRandom >= this._moreGameList.length) {
                nRandom = 0;
            }
        }
        return aryInfo;
    }
}

/**
 * 授权 嘟游 获取openid的发送参数
 */
export class DYAuthorize_Cmd {
    /**
     * Wx.login 获取的code
     */
    code: string;
    /**
     * 昵称
     */
    nickName: string;
    /**
     * 头像
     */
    avatarUrl: string;
    /**
     * 性别
     */
    gender: number;
    /**
     * wx 的进入场景值
     * 启动小游戏的场景值
     */
    scene: string;
}

/**
 * 授权 嘟游 获取openid的回应参数
 */
export class DYAuthorize_Rev {
    /**
     * 用户id
     */
    id: string;
    /**
     * openid
     */
    openid: string;
    /**
     * 昵称
     */
    nick_name: string;
    /**
     * 头像
     */
    avatar_url: string;
    /**
     * 1为授权 0为没有授权
     */
    is_authorize: number;
}

/**
 * 授权 嘟游 游戏结束接口的回发送参数
 */
export class DYEndGame_Cmd {
    /**
     * 游戏ID
     */
    id: number;
    /**
     * 关卡等级
     */
    level?: number;
}

/**
 * 获取到的gamelistItem信息
 */
export class DYGameListItem {
    /**
     * 游戏id
     */
    id: string;
    /**
     * 跳转参数
     */
    url: string;
    /**
     * 显示图片
     */
    img: string;
    /**
     * 备用显示图片
     */
    img1: string;
    /**
     * 标题
     */
    title: string;
    /**
     * appid
     */
    appid: string;
    /**
     * 点击次数-单位为万人
     */
    click: string;
}

export class MoreGameInfo {
    ad_id: string = "";
    ad_img: string = "";
    name: string = "";
    ad_appid: string = "";
    url: string = "";
};