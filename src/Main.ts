import GameConfig from "./GameConfig";
import { GameData } from "./script/common/GameData";
import { GameInfosData } from "./script/constant/GameInfosData";
import GameMgr from "./script/manager/GameMgr";
import GameLoadingView from "./script/loading/GameLoadingView";
import { MiniManeger } from "./script/manager/MiniManeger";
import ConfigManager from "./script/manager/ConfigManager";
import { HomeScene } from "./script/view/home/HomeScene";
import { GameScene } from "./script/view/game/GameScene";
import { GameManager, GameModel, GameAttackModel } from "./script/manager/GameManager";
import GameInfoManager from "./script/manager/GameInfoManager";
import TaskManager from "./script/manager/TaskManager";
import SoundManager from "./script/manager/SoundManager";
import GameConst from "./script/common/GameConst";
import { GameAdventureScene } from "./script/view/game/GameAdventureScene";
import DungeonManager from "./script/manager/DungeonManager";
import { MiniWeChatGameManager } from "./script/manager/MiniWeChatGameManager";
import { MiniTTGameManager } from "./script/manager/MiniTTGameManager";

import DYChannelMgr from "./script/manager/channel/DYChannelMgr";

declare var VConsole;
declare var loadLib;

class Main extends BaseContent {
	constructor() {
		super({ width: 1920, height: 1080, exportSceneToJson: true });
		//
		GameConfig.init();
		if (MiniManeger.ins == null) {
			if (DeviceUtil.isWXMiniGame()) {
				MiniManeger.ins = new MiniWeChatGameManager();
			} else if (DeviceUtil.isTTMiniGame()) {
				MiniManeger.ins = new MiniTTGameManager();
			}
			else {
				MiniManeger.ins = new MiniWeChatGameManager();
			}

		}
		// 		import { MiniTTGameManager } from "./MiniTTGameManager";
		// import { MiniWeChatGameManager } from "./MiniWeChatGameManager";
		//校验平台
		this.checkPlatform();

		let onShow = (obj) => {
			console.log("onShow");
			SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
			if (obj) {
				console.log("QQ onShow obj = ", obj);
			}
		}

		let onHide = () => {
			console.log("onHide");
			SoundManager.getInstance().stopBgMusic();
		}

		let onAudioInterruptionBegin = (res) => {
			console.log("onAudioInterruptionBegin");
			SoundManager.getInstance().stopBgMusic();
		};

		let onAudioInterruptionEnd = (res) => {
			console.log("onAudioInterruptionEnd");
			SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
		};

		//QQ
		if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
			GameData.getInstance().enterGameInfo = platform.getLaunchOptionsSync();
			MiniManeger.instance.onShow(onShow);
			MiniManeger.instance.onHide(onHide);
			MiniManeger.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
			MiniManeger.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
			MiniManeger.instance.initMiniGame();
		} else {
			onShow(null);
		}
	}

	/**
	 * 检验平台
	 */
	private checkPlatform(): void {
		console.log("检验平台---");
		let self = this;
		//h5
		if (window["loadingH5"]) {
			window["loadingH5"](100);
			// 初始化
			// loadLib("vconsole.min.js");
		}

		//判断平台使用不同的地址资源
		let resUrl: string = "./";
		// if (DeviceUtil.isWXMiniGame()) {
		// 	resUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res/";
		// } else if (DeviceUtil.isTTMiniGame()) {
		// 	resUrl = GameData.getInstance().MinigameResUrlRoot + "tt_res/";
		// } else if (DeviceUtil.isQQMiniGame()) {
		// 	resUrl = GameData.getInstance().MinigameResUrlRoot + "qq_res/";
		// }
		let fileLocalList = [
			"resource/assets/loading/loading_bg.jpg",
			"resource/assets/loading/loading2.png",
			"resource/assets/loading/loading1.png",
			"resource/assets/loading/loading6.png",

		];
		GameData.getInstance().gameVersion = 1001;


		if (DeviceUtil.isQQMiniGame()) {
			//开启定时回收触发
			Laya.timer.once(10000, this, () => {
				console.log("加速回收---");
				platform.triggerGC();
			});


		} else if (DeviceUtil.isWXMiniGame()) {
			//开启定时回收触发
			Laya.timer.once(10000, this, () => {
				console.log("加速回收---");
				platform.triggerGC();
			});
			GameData.getInstance().gameVersion = 1001;

			GameData.getInstance().resVersion = '2_1/';
			GameData.getInstance().MinigameResUrlRoot += "wx_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res_v_z_" + GameData.getInstance().resVersion;
			// resUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res/";
			resUrl = GameData.getInstance().MinigameResAllUrl;

			ResUtil.getIntance().defaultOriginUrl = resUrl;
			ResUtil.getIntance().addVersionPrefix(resUrl);
			//增加白名单列表资源
			Laya.MiniAdpter.init();
			Laya.MiniAdpter.nativefiles = fileLocalList;
			self.initDebug();
			// self.initDebug(resUrl + "configs/Debug.json?" + Math.random());
			self.loadPreLoadRes(resUrl + "configs/");
		} else if (DeviceUtil.isTTMiniGame()) {
			Laya.timer.once(10000, this, () => {
				console.log("加速回收---");
				platform.triggerGC();
			});
			GameData.getInstance().gameVersion = 1002;
			GameData.getInstance().resVersion = '1_5/';
			GameData.getInstance().MinigameResUrlRoot += "tt_res/";
			GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "tt_res_v_z_" + GameData.getInstance().resVersion;
			// resUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res/";
			resUrl = GameData.getInstance().MinigameResAllUrl;
			ResUtil.getIntance().defaultOriginUrl = resUrl;
			//增加白名单列表资源
			ResUtil.getIntance().addVersionPrefix(resUrl);
			Laya.MiniAdpter.init();
			Laya.MiniAdpter.nativefiles = fileLocalList;
			self.initDebug();
			// self.initDebug(resUrl + "configs/Debug.json?" + Math.random());
			self.loadPreLoadRes(GameData.getInstance().MinigameResUrlRoot);
		}
		else {
			//剩余其他的平台
			// GameData.getInstance().deviceNumber = DeviceUtil.getDeviceNo();
			let openId = Laya.LocalStorage.getItem("openId");
			if (openId) {
				GameData.getInstance().userInfo.openId = openId;
				GameData.getInstance().userInfo.nick = openId;
			} else {
				openId = "cat" + Utils.getRandom(10000, 99999);
				GameData.getInstance().userInfo.openId = openId;
				GameData.getInstance().userInfo.nick = openId;
				Laya.LocalStorage.setItem("openId", openId);
			}

			self.initDebug();
			self.loadPreLoadRes(resUrl + 'configs/');
		}

		// if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
		// 	// ResUtil.getIntance().originURL = "";

		// }
	}


	/**
	 * 加载预加载资源
	 */
	private async loadPreLoadRes(resUrl: string) {
		console.log("加载预加载资源--");
		let url = resUrl;

		super.initInfos((url + "infos.json" + GameMgr.getInstance().randomVersion));
	}

	protected enableFileConfig(): void {
		if (DeviceUtil.isTTMiniGame()) {
			MiniManeger.instance.moreSomeAppInfos = [];
			//
			let res = [
				{ "appid": "tt5c622adfc34851be", "title": "杠精大乱斗", "icon": "https://hs.yz061.com/res/down/public/icon/cd/pole_jump.png" },
				{ "appid": "tt4e7138ccd15b7caa", "title": "巴掌王3D", "icon": "https://hs.yz061.com/res/down/public/icon/cd/slap_king.png" },
				{ "appid": "tt7e0808b5e1224cd6", "title": "穿越空间", "icon": "https://hs.yz061.com/res/down/public/icon/cd/cykj.png" },
				{ "appid": "tt9c09eab4032391c1", "title": "消消来了", "icon": "https://hs.yz061.com/res/down/public/icon/cd/xxll.jpg" },
				{ "appid": "tt18956e2887bf2f24", "title": "篮球大作战", "icon": "https://hs.yz061.com/res/down/public/icon/cd/kltl.jpg" },
				{ "appid": "ttfdfc8b4162d6c8ab", "title": "萌兵战争", "icon": "https://hs.yz061.com/res/down/public/icon/cd/mbzz.jpg" },
				{ "appid": "tte3a3951e7c899dfd", "title": "疯狂跳床", "icon": "https://hs.yz061.com/res/down/public/icon/cd/jump.png" },
				{ "appid": "tt546f22d2cb457cd0", "title": "超级购物狂", "icon": "https://hs.yz061.com/res/down/public/icon/cd/crazy_shopping.jpg" },
				{ "appid": "tt8c7bfac613516af9", "title": "快来划水", "icon": "https://hs.yz061.com/res/down/public/icon/cd/klhs.jpg" },
				{ "appid": "ttce8db83051a7f459", "title": "春节小火车", "icon": "https://hs.yz061.com/res/down/public/icon/cd/train.jpg" },


			]
			for (let i = 0, len = res.length; i < len; i++) {
				if (res[i].appid != "tt9c09eab4032391c1") {
					MiniManeger.instance.moreSomeAppInfos.push(res[i]);
				}
			}

		}
		console.log(BaseConst.infos);
		let gameInfoDatas: GameInfosData = BaseConst.infos as GameInfosData;
		GameData.getInstance().initConfig(gameInfoDatas);
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, async () => {
			if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
				console.log("开始登录");
				let info;
				let self = this;
				let enter = async (isCreate: boolean = false) => {
					if (isCreate) {
						self.loadRes();
						return;
					}
					if (DeviceUtil.isWXMiniGame()) {
						console.log("登陆信息:", info);
						GameData.getInstance().userInfo.openId = info.openid;
						GameData.getInstance().userInfo.sessionKey = info.session_key;

						console.log("用户信息 : ", GameData.getInstance().userInfo);
					}
					if (DeviceUtil.isTTMiniGame()) {
						let userInfo = await platform.getUserInfo();
						console.log("getUserInfo:", userInfo);
						GameData.getInstance().userInfo.nick = userInfo.nickName;
						GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
						console.log("授权用户信息 : ", GameData.getInstance().userInfo);

					} else {
						MiniManeger.instance.initUserInfo();
					}
					self.loadRes();
				}
				if (DeviceUtil.isTTMiniGame()) {
					platform.checkSession({
						async success() {
							let userInfo = await platform.getUserInfo();
							console.log("getUserInfo:", userInfo);
							if (userInfo) {
								GameData.getInstance().userInfo.nick = userInfo.nickName;
								GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
								enter(true);
							} else {
								enter(true);
							}
							console.log(`session未过期`);

						},
						async fail() {
							console.log(`session已过期，需要重新登录`);
							info = await platform.login();
							if (info == null) {
								enter(true);
								return;
							}
							info = JSON.parse(info);
							let userInfo = await platform.getUserInfo();
							console.log("getUserInfo:", userInfo);
							if (userInfo) {
								GameData.getInstance().userInfo.nick = userInfo.nickName;
								GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
								enter(true);
							} else {
								enter(true);
							}

						}
					});
				} else {
					info = await DYChannelMgr.instance.loginGame();
					if (!info) info = await platform.login();

					if (info == null) {
						self.enableFileConfig();
						return;
					}
					enter();
				}


			} else {
				this.loadRes();
			}
		}));
	}




	/**
	 * 加载资源
	 */
	protected async loadRes() {

		GameMgr.getInstance().loadingView = new GameLoadingView();
		SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
		MiniManeger.instance.showBannerAd(null);
		MiniManeger.instance.hideBanner();
		// let arr = [1, 2, 34, 4, 6, 7, 6];
		// let arr1 = arr.concat([1, 3, 4, 5, 67, 7, 8]);
		// console.log(arr1, arr)
		console.log("loadRes---");
		let resUrl = "";
		//
		let loadresUrl = GameData.getInstance().MinigameResAllUrl;
		if (DeviceUtil.isNative()) {
			await ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json");
			await ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json");
		}
		else if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
			await ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + GameMgr.getInstance().randomVersion);
			await ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + GameMgr.getInstance().randomVersion);
		}
		else if (DeviceUtil.isTTMiniGame()) {
			await ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + GameMgr.getInstance().randomVersion);
			await ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + GameMgr.getInstance().randomVersion);
		}
		else {
			await ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json");
			await ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json");
		}
		GameMgr.getInstance().registerBufferLoading();

		let strogeVersion = Laya.LocalStorage.getItem('strogeVersion');
		if (GameData.getInstance().strogeVersion != strogeVersion) {
			Laya.LocalStorage.clear();
		}
		Laya.LocalStorage.setItem('strogeVersion', GameData.getInstance().strogeVersion);

		await GameInfoManager.getInstance().selectAllGameInfo();
		GameManager.instance.playerGuide = GameData.getInstance().playerData.playerGuide;
		if (GameData.getInstance().playerData.lotteryData == null) {
			GameData.getInstance().playerData.lotteryData = { count: 1, time: new Date().getTime() }
		}
		await ConfigManager.getInstance().initConfigs();
		let resArr = ["preload", "home"];


		let dataArr = await DungeonManager.instance.getLevelData();
		DungeonManager.instance.curLevelData = dataArr[0];
		if (GameManager.instance.playerGuide == 1) {
			this.enterGame(resArr)
		} else {
			GameData.getInstance().playerData.playerGuide = 4;
			this.enterHome(resArr);
		}

	}

	public enterGame(resArr) {
		resArr.push("game", "gamePublic");
		ResUtil.getIntance().loadGroups(resArr, async () => {
			console.log("res load completed!!!");
			await TaskManager.instance.initTaskData();
			await ConfigManager.getInstance().initGameConfigs();
			GameManager.instance.gameModel = GameModel.Adventure;
			GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
			GameMgr.getInstance().initTopBar();
			SceneManager.getInstance().openGameScene(GameAdventureScene, '');

			if (GameData.getInstance().playerData.playerGuide == 1) {
				// GameData.getInstance().playerData.playerGuide++;
				GameData.getInstance().playerData.playerGuide = 4;
				GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
			} else {
				GameData.getInstance().playerData.playerGuide = 4;

			}
			//进入游戏
			GameMgr.getInstance().loadingView.remove();
		}, (index, len) => {
			GameMgr.getInstance().loadingView.progress(index, len);
		});
	}

	private enterHome(resArr) {
		resArr.push("config", "iconBox", "public");
		ResUtil.getIntance().loadGroups(resArr, async () => {
			console.log("res load completed!!!");
			await TaskManager.instance.initTaskData();
			// GameManager.instance.getFirstShip();
			//进入游戏
			SceneManager.getInstance().openGameScene(HomeScene);
			let homeView = <HomeScene>SceneManager.getInstance().currentScene;
			homeView.displayMainView();
			GameMgr.getInstance().loadingView.remove();
		}, (index, len) => {
			GameMgr.getInstance().loadingView.progress(index, len);
		});
	}
}
//激活启动类
new Main();
