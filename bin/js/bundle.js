(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var GameConfig = (function () {
        function GameConfig() {
        }
        GameConfig.init = function () {
            var reg = Laya.ClassUtils.regClass;
        };
        GameConfig.width = 1920;
        GameConfig.height = 1080;
        GameConfig.scaleMode = "fixedheight";
        GameConfig.screenMode = "none";
        GameConfig.alignV = "top";
        GameConfig.alignH = "left";
        GameConfig.startScene = "platform/dy/wechat/MoreGameBoxSingleItem.scene";
        GameConfig.sceneRoot = "";
        GameConfig.debug = false;
        GameConfig.stat = false;
        GameConfig.physicsDebug = false;
        GameConfig.exportSceneToJson = true;
        return GameConfig;
    }());
    GameConfig.init();

    var GameConst = (function () {
        function GameConst() {
        }
        GameConst.ONHIDE = 'onhide';
        GameConst.ONSHOW = 'onshow';
        GameConst.playerModelScale = 10;
        GameConst.BASE_INFO = "BASE_INFO";
        GameConst.SIGN_INFO = "SIGN_INFO";
        GameConst.INVITE_INFO = "INVITE_INFO";
        GameConst.SKIN_INFO = "SKIN_INFO";
        GameConst.TASK_INFO = "TASK_INFO";
        GameConst.BOX_INFO = "BOX_INFO";
        GameConst.OWN_PROP = "OWN_PROP";
        GameConst.USE_PROP = "USE_PROP";
        GameConst.LEVEL_INFO = "LEVEL_INFO";
        GameConst.FREE_DIAMOND = 'FREE_DIAMOND';
        GameConst.MaxLevel = "MaxLevel";
        GameConst.PlayerTouchScene = "playerTouchScene";
        GameConst.CanRecieveTask = 'canRecieveTask';
        GameConst.AdvantureSelecte = 'AdvantureSelecte';
        GameConst.AdvantureChange = 'AdvantureChange';
        GameConst.NextWave = 'NextWave';
        GameConst.GameOver = 'GameOver';
        GameConst.ModelChange = 'ModelChange';
        GameConst.UseBooster = 'UseBooster';
        GameConst.RestartGame = 'RestartGame';
        GameConst.GamePauseOrResume = 'GamePauseOrResume';
        GameConst.ClickShipOrCat = 'ClickShipOrCat';
        GameConst.RemoveCatOrBooster = 'RemoveCatOrBooster';
        return GameConst;
    }());

    var localData;
    (function (localData) {
        var TopInfo = (function () {
            function TopInfo() {
            }
            return TopInfo;
        }());
        localData.TopInfo = TopInfo;
        var SignData = (function () {
            function SignData() {
            }
            return SignData;
        }());
        localData.SignData = SignData;
        var TaskData = (function () {
            function TaskData() {
            }
            return TaskData;
        }());
        localData.TaskData = TaskData;
        var TimeBoxData = (function () {
            function TimeBoxData() {
            }
            return TimeBoxData;
        }());
        localData.TimeBoxData = TimeBoxData;
        var PropData = (function () {
            function PropData() {
                this.maxLevel = 30;
            }
            return PropData;
        }());
        localData.PropData = PropData;
        var LevelData = (function () {
            function LevelData() {
            }
            return LevelData;
        }());
        localData.LevelData = LevelData;
        var RankData = (function () {
            function RankData() {
            }
            return RankData;
        }());
        localData.RankData = RankData;
        var ZoneData = (function () {
            function ZoneData() {
            }
            return ZoneData;
        }());
        localData.ZoneData = ZoneData;
        var CardData = (function () {
            function CardData() {
            }
            return CardData;
        }());
        localData.CardData = CardData;
        var CardConfig = (function () {
            function CardConfig() {
            }
            return CardConfig;
        }());
        localData.CardConfig = CardConfig;
        var InviteData = (function () {
            function InviteData() {
            }
            return InviteData;
        }());
        localData.InviteData = InviteData;
    })(localData || (localData = {}));
    var netData;
    (function (netData) {
        var UserInfos = (function () {
            function UserInfos() {
                this.openId = "";
                this.nick = "猫咪舰长";
                this.avatarUrl = "";
                this.sex = 0;
                this.sessionKey = "";
                this.accessToken = "";
            }
            return UserInfos;
        }());
        netData.UserInfos = UserInfos;
        var PlayerData = (function () {
            function PlayerData() {
                this.gold = 100;
                this.diamond = 0;
                this.playerLevel = 1;
                this.matchInfo = { zoneNo: 1, rank: null };
                this.ownStar = 0;
                this.maxSlot = 1;
                this.playerGuide = 1;
                this.lotteryData = { count: 1, time: new Date().getTime() };
            }
            return PlayerData;
        }());
        netData.PlayerData = PlayerData;
        var SignIn = (function () {
            function SignIn() {
                this.total_count = 0;
                this.timeStamp = null;
                this.rotations = 0;
            }
            return SignIn;
        }());
        netData.SignIn = SignIn;
        var Invite = (function () {
            function Invite() {
                this.inviteId = [];
            }
            return Invite;
        }());
        netData.Invite = Invite;
        var Inviter = (function () {
            function Inviter() {
            }
            return Inviter;
        }());
        netData.Inviter = Inviter;
        var Task = (function () {
            function Task() {
            }
            return Task;
        }());
        netData.Task = Task;
        var ShipInfp = (function () {
            function ShipInfp() {
            }
            return ShipInfp;
        }());
        netData.ShipInfp = ShipInfp;
        var Prop = (function () {
            function Prop() {
                this.baseInfoId = 10;
                this.baseInfos = {
                    booster: [],
                    ship: [],
                    cat: []
                };
            }
            return Prop;
        }());
        netData.Prop = Prop;
        var Level = (function () {
            function Level() {
            }
            return Level;
        }());
        netData.Level = Level;
    })(netData || (netData = {}));

    var GameData = (function () {
        function GameData() {
            this.skinArr = [];
            this.hasSkin = { 1: { isUnlock: true, isUsing: true } };
            this.channel = "duyou";
            this.URL_DELETE_DATA = "https://littlegame.32yx.com/DelMiniGameData.fcgi";
            this.URL_DELETE_DATA_TEST = "https://172.17.3.217:8090/DelMiniGameData.fcgi";
            this.URL_SAVE_DATA = "https://littlegame.32yx.com/MiniGameData.fcgi";
            this.URL_SAVE_DATA_TEST = "http://172.17.3.217:8090/MiniGameData.fcgi";
            this.URL_OF_RANK = "https://littlegame.32yx.com/MiniGameRank.fcgi";
            this.URL_OF_RANK_TEST = "http://172.17.3.217:8090/MiniGameRank.fcgi";
            this.URL_OF_INVITE = "https://littlegame.32yx.com/Invitation.fcgi";
            this.URL_OF_INVITE_TEST = "http://172.17.3.217:8090/Invitation.fcgi";
            this.URL_TIMESTAMP = "https://littlegame.32yx.com/gettime.php";
            this.URL_WX_REQ = "https://yxtest.32yx.com/MiniGame.fcgi";
            this.URL_WX_REQ_TEST = "http://172.17.3.217:8090/MiniGame.fcgi";
            this.MinigameResUrlRoot = 'https://package.32yx.com/ecy_game_small/laya/catAndPig/';
            this.MinigameResAllUrl = 'https://package.32yx.com/ecy_game_small/laya/catAndPig/';
            this.resVersion = '1_14/';
            this.strogeVersion = '1001';
            this.gameId = "1038";
            this.videoTips = "视频观看完整才能获得奖励哦";
            this.gameVersion = 1002;
            this.gamelist = [];
            this.isConVersion = false;
            this.isTestVersion = true;
            this.isGetOpenid = true;
            this._defaultMaxLevel = 90;
            this.userInfo = new netData.UserInfos();
            this.playerData = new netData.PlayerData();
            this.signIn = new netData.SignIn();
            this.invite = new netData.Invite();
            this.task = {
                lastTime: null,
                taskInfo: [{ id: 1, state: 0, count: 0, locked: false }],
                taskTimes: 0,
                surpriseed: false,
                taskVideo: 0
            };
            this.prop = {
                baseInfoId: 1000,
                baseInfos: {
                    booster: [],
                    ship: [
                        {
                            attack_type: 2,
                            exp: 0,
                            growthHp: 5.23,
                            hasShield: false,
                            id: 110101,
                            initialHp: 53.3,
                            level: 0,
                            quality: 1,
                            shieldId: 0,
                            slot: 1,
                            slotArr: [3],
                            star: 1,
                            type: 0,
                            uid: 2,
                        }
                    ],
                    cat: [
                        {
                            attack_type: 4,
                            exp: 0,
                            growthAtt: 0,
                            growthCrit: 0,
                            growthHp: 0,
                            id: 120901,
                            initialAtt: 10,
                            initialCrit: 149,
                            initialHp: 40,
                            isNormal: true,
                            level: 0,
                            quality: 1,
                            star: 1,
                            type: 1,
                            uid: 1,
                        },
                        {
                            attack_type: 1,
                            exp: 0,
                            growthAtt: 1.85,
                            growthCrit: 102,
                            growthHp: 2.8,
                            id: 120001,
                            initialAtt: 5.44,
                            initialCrit: 171,
                            initialHp: 15.6,
                            isNormal: true,
                            level: 0,
                            quality: 1,
                            star: 1,
                            type: 1,
                            uid: 4,
                        },
                        {
                            attack_type: 1,
                            exp: 0,
                            growthAtt: 1.85,
                            growthCrit: 102,
                            growthHp: 2.8,
                            id: 120001,
                            initialAtt: 5.44,
                            initialCrit: 171,
                            initialHp: 15.6,
                            isNormal: true,
                            level: 0,
                            quality: 1,
                            star: 1,
                            type: 1,
                            uid: 5,
                        },
                    ]
                }
            };
            this.otherprop = {
                baseInfoId: 10,
                baseInfos: {
                    booster: [],
                    ship: [{
                            "type": 0,
                            "hasShield": false,
                            "slot": 1,
                            "uid": 2,
                            "quality": 1,
                            "star": 1,
                            "id": "110201",
                            "level": 0,
                            "exp": 0,
                            "growthHp": 7.27,
                            "initialHp": 69
                        }],
                    cat: [{
                            "type": 1,
                            "isNormal": true,
                            "uid": 1,
                            "quality": 1,
                            "star": 1,
                            "id": "120901",
                            "level": 0,
                            "exp": 0,
                            "growthAtt": 2.5,
                            "growthCrit": 200,
                            "growthHp": 4,
                            "initialHp": 20,
                            "initialAtt": 10,
                            "initialCrit": 150
                        }]
                }
            };
            this.localUserShipInfo = {
                ship: {
                    star: 1,
                    uid: 2,
                },
                booster: 0,
                player: {
                    box_player1: 1,
                    box_player2: 0,
                    box_player3: 0,
                    box_player4: 0,
                    box_player5: 0,
                }
            };
            this.localOtherShipInfo = {
                ship: {
                    star: 1,
                    uid: 2,
                },
                booster: 0,
                player: {
                    box_player1: 1,
                    box_player2: 0,
                    box_player3: 0,
                    box_player4: 0,
                    box_player5: 0,
                }
            };
            this.treasure = {
                baseUid: 4,
                owns: [
                    {
                        endTime: null,
                        id: 160002,
                        state: 0,
                        uid: 5,
                        videoJump: 0
                    }
                ],
                vacancy: 3,
                videoBox: { num: 0, times: 1, lastTime: null }
            };
            this.level = {
                dungeon: { 20001: { star: 3 } },
                encounter: {}
            };
            this.freeTimes = { count: 1, lastTime: 0 };
            this.isByShare = false;
            this.inviterId = null;
            this.inviterPlatform = null;
            this._defaultV = { x: 8, y: 0 };
            this.maxLevel = 100;
        }
        GameData.getInstance = function () {
            if (!GameData.instance) {
                GameData.instance = new GameData();
            }
            return GameData.instance;
        };
        Object.defineProperty(GameData.prototype, "serverConf", {
            set: function (sc) {
                this.serverConf_ = sc;
                this.initServer();
            },
            enumerable: false,
            configurable: true
        });
        GameData.prototype.initConfig = function (res) {
            GameConst.infos = res;
            if (DeviceUtil.isWXMiniGame()) {
                GameData.getInstance().serverConf = GameConst.infos.serverConf;
            }
            else {
                GameData.getInstance().serverConf = "nts";
            }
            if (GameData.getInstance().gameVersion > GameConst.infos.version) {
                GameData.getInstance().isConVersion = true;
            }
            else {
                GameData.getInstance().isConVersion = false;
            }
            GameData.getInstance().isTestVersion = GameData.getInstance().gameVersion == 1;
            GameData.getInstance().bannerId = GameConst.infos.bannerId;
            GameData.getInstance().videoId = GameConst.infos.videoId;
            GameData.getInstance().longVideoId = GameConst.infos.longVideoId;
            GameData.getInstance().isOpen = GameConst.infos.isOpen;
            GameData.getInstance().strogeVersion = GameConst.infos.strogeVersion;
            GameData.getInstance().adConversion = GameConst.infos.adConversion;
        };
        GameData.prototype.initServer = function () {
            switch (GameData.instance.serverConf_) {
                case "nts":
                    this.URL_SAVE_DATA = this.URL_SAVE_DATA_TEST;
                    this.URL_OF_RANK = this.URL_OF_RANK_TEST;
                    this.URL_OF_INVITE = this.URL_OF_INVITE_TEST;
                    this.URL_DELETE_DATA = this.URL_DELETE_DATA_TEST;
                    break;
                case "wts":
                    break;
                case "wzs":
                    break;
            }
        };
        Object.defineProperty(GameData.prototype, "defaultMaxLevel", {
            get: function () {
                return this._defaultMaxLevel;
            },
            set: function (level) {
                this._defaultMaxLevel = level;
            },
            enumerable: false,
            configurable: true
        });
        GameData.prototype.defaultV = function (direction) {
            switch (direction) {
                case "left": return { x: -this._defaultV.x, y: this._defaultV.y };
                case "right": return this._defaultV;
            }
        };
        return GameData;
    }());

    var GameBufferLoading = (function (_super) {
        __extends(GameBufferLoading, _super);
        function GameBufferLoading() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameBufferLoading";
            _this.bg_img_res = "game_panel_db_png";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.init();
            return _this;
        }
        GameBufferLoading.prototype.init = function () {
            if (!this.bg_img) {
                this.bg_img = new Laya.Image(ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(this.bg_img_res).url));
                this.bg_img.sizeGrid = "3,3,2,2";
                this.bg_img.width = this.width;
                this.bg_img.height = this.height;
                this.bg_img.alpha = 0.7;
                this.addChild(this.bg_img);
                this.mouseEnabled = true;
                this.bg_img.mouseEnabled = true;
                this.bg_img.mouseThrough = false;
            }
            if (!this.img_circle) {
                this.img_circle = new Laya.Image();
                this.img_circle.skin = "resource/assets/loading/loading_circle.png";
                this.img_circle.anchorX = this.img_circle.anchorY = 0.5;
                this.img_circle.centerX = this.img_circle.centerY = 0;
                this.addChild(this.img_circle);
            }
        };
        GameBufferLoading.prototype.setLabelInfo = function (info) {
        };
        GameBufferLoading.prototype.onShow = function () {
            if (this.img_circle) {
                this.img_circle.rotation = 0;
                Laya.Tween.to(this.img_circle, { rotation: 360 }, 500, null, Laya.Handler.create(this, this.onShow));
            }
        };
        GameBufferLoading.prototype.onHidd = function () {
            if (this.img_circle) {
                Laya.Tween.clearAll(this.img_circle);
            }
        };
        return GameBufferLoading;
    }(Laya.Sprite));

    var GameEvent = (function () {
        function GameEvent() {
        }
        GameEvent.GAME_PAUSE = "GAME_PAUSE";
        GameEvent.GAME_RESUME = "GAME_RESUME";
        GameEvent.TIME_METER = "TIME_METER";
        GameEvent.REFRESH_TOP = "REFRESH_TOP";
        GameEvent.REFRESH_TASK = "REFRESH_TASK";
        GameEvent.REFRESH_BOX = "REFRESH_BOX";
        GameEvent.SHOW_MAIN = "SHOW_MAIN";
        GameEvent.SHOW_REGATTA = "SHOW_REGATTA";
        GameEvent.SELECT_RANK = "SELECT_RANK";
        GameEvent.SHOW_GAME_DRAWER = "SHOW_GAME_DRAWER";
        GameEvent.HIDE_GAME_DRAWER = "HIDE_GAME_DRAWER";
        GameEvent.OPEN_GAME_DRAWER = "OPEN_GAME_DRAWER";
        GameEvent.SHOW_GAME_BANNER = "SHOW_GAME_BANNER";
        GameEvent.HIDE_GAME_BANNER = "HIDE_GAME_BANNER";
        GameEvent.OPEN_GAME_RANDOM = "OPEN_GAME_RANDOM";
        GameEvent.OPEN_GAME_HOT = "OPEN_GAME_HOT";
        GameEvent.OPEN_GAME_LIST = "OPEN_GAME_LIST";
        GameEvent.SHOW_GAME_BOX = "SHOW_GAME_BOX";
        GameEvent.HIDE_GAME_BOX = "HIDE_GAME_BOX";
        GameEvent.NAV_GAME_FAIL = "NAV_GAME_FAIL";
        GameEvent.SHOW_EXIT_BTN = "SHOW_EXIT_BTN";
        GameEvent.HIDE_EXIT_BTN = "HIDE_EXIT_BTN";
        return GameEvent;
    }());
    window['GameEvent'] = GameEvent;

    var CommonTool = (function () {
        function CommonTool() {
        }
        CommonTool.errorCodeTable = {
            1: "解析数据异常",
            2: "服务器内部错误",
            3: "数据库处理超时",
            4: "数据插入失败",
            5: "查询操作错误",
            6: "数据库没有该数据",
            7: "数据库数据不存在",
            8: "操作频繁",
            9: "名次传递错误",
            10: "没有rankid",
            11: "没有游戏id",
            12: "没有Session_Id",
            13: "没有Session_Key",
            14: "Session_Id超时",
            15: "Session_Id加密错误",
            16: "Session_Id解密失败",
            17: "Session_Id不匹配",
            18: "token验证失败",
            19: "没有保存Id",
            20: "参数错误",
            21: "没有分数",
            22: "数据更新失败",
            23: "数据删除失败",
            24: "无效的游戏Id",
            25: "无存储信息数据"
        };
        return CommonTool;
    }());

    var GameInfoManager = (function () {
        function GameInfoManager() {
            this.URL = GameData.getInstance().URL_SAVE_DATA;
        }
        GameInfoManager.getInstance = function () {
            if (!GameInfoManager.instance_) {
                GameInfoManager.instance_ = new GameInfoManager();
            }
            return GameInfoManager.instance_;
        };
        GameInfoManager.prototype.getTimeStamp = function (callF) {
            var timeStamp;
            var _url = GameData.getInstance().URL_TIMESTAMP;
            HttpMgr.getInstance().sendHttp(_url, null, function (e) {
                timeStamp = e * 1000;
                console.log("获取当前时间戳成功 ->", timeStamp);
                if (callF)
                    callF(timeStamp);
            }, function (e) { });
        };
        GameInfoManager.prototype.selectInfo = function (key, isUseNet) {
            var _this = this;
            if (isUseNet === void 0) { isUseNet = false; }
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var data, onlykey, str;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isUseNet) return [3, 2];
                            return [4, this.selectInfoByNet(key)];
                        case 1:
                            data = _a.sent();
                            return [3, 3];
                        case 2:
                            onlykey = key + "_" + GameData.getInstance().userInfo.openId;
                            str = Laya.LocalStorage.getItem(onlykey);
                            if (str) {
                                data = this.decodeData(str, key);
                                console.log("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", data);
                            }
                            _a.label = 3;
                        case 3:
                            resolve(data);
                            return [2];
                    }
                });
            }); });
        };
        GameInfoManager.prototype.selectInfoByNet = function (key, callF, isLoading) {
            var _this = this;
            if (isLoading === void 0) { isLoading = true; }
            return new Promise(function (resolve, reject) {
                var gameId = GameData.getInstance().gameId;
                var openId = GameData.getInstance().userInfo.openId + "_" + key;
                var msg = {
                    msg_type: "6",
                    msg_data: {
                        gameid: gameId,
                        saveid: openId
                    }
                };
                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                    var code = e.msg_data.error_code;
                    var data;
                    if (code == "0") {
                        console.log("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", e.msg_data);
                        data = _this.decodeData(e.msg_data.saveinfo, key);
                    }
                    else {
                        var str = CommonTool.errorCodeTable[code];
                        console.warn("\u67E5\u8BE2\u952E\u4E3A " + key + " \u7684\u6570\u636E\u5931\u8D25:" + str);
                    }
                    if (callF) {
                        var obj = { code: code, key: key };
                        callF(obj);
                    }
                    resolve(data);
                }, function (e) { resolve(null); });
            });
        };
        GameInfoManager.prototype.saveInfo = function (key, isUseNet) {
            if (isUseNet === void 0) { isUseNet = false; }
            if (isUseNet) {
                this.saveInfoToNet(key);
            }
            else {
                var str = this.encodeData(key);
                var onlykey = key + "_" + GameData.getInstance().userInfo.openId;
                Laya.LocalStorage.setItem(onlykey, str);
                console.log("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->");
            }
        };
        GameInfoManager.prototype.saveInfoToNet = function (key, callF) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var str = _this.encodeData(key);
                                var gameId = GameData.getInstance().gameId;
                                var openId = GameData.getInstance().userInfo.openId + "_" + key;
                                var msg = {
                                    msg_type: "8",
                                    msg_data: {
                                        "gameid": gameId,
                                        "saveid": openId,
                                        "saveinfo": str
                                    }
                                };
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e.msg_data.error_code;
                                    if (code == "0") {
                                        console.log("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u6210\u529F ->", e.msg_data);
                                    }
                                    else {
                                        var str_1 = CommonTool.errorCodeTable[code];
                                        console.warn("\u4FDD\u5B58\u952E\u4E3A " + key + " \u7684\u6570\u636E\u5931\u8D25\uFF1A" + str_1);
                                    }
                                    if (callF) {
                                        var obj = { code: code, key: key };
                                        callF(obj);
                                    }
                                    res();
                                }, function (e) { res(); });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        GameInfoManager.prototype.selectAllGameInfo = function (canUseNet) {
            var _this = this;
            if (canUseNet === void 0) { canUseNet = false; }
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!canUseNet) return [3, 10];
                            return [4, this.selectSingleInfo(GameConst.BASE_INFO, false)];
                        case 1:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.SIGN_INFO, false)];
                        case 2:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.INVITE_INFO, false)];
                        case 3:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.TASK_INFO, false)];
                        case 4:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.BOX_INFO, false)];
                        case 5:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.OWN_PROP, false)];
                        case 6:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.USE_PROP, false)];
                        case 7:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.LEVEL_INFO, false)];
                        case 8:
                            _a.sent();
                            return [4, this.selectSingleInfo(GameConst.FREE_DIAMOND, false)];
                        case 9:
                            _a.sent();
                            return [3, 20];
                        case 10: return [4, this.selectInfo(GameConst.BASE_INFO)];
                        case 11:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.SIGN_INFO)];
                        case 12:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.INVITE_INFO)];
                        case 13:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.TASK_INFO)];
                        case 14:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.BOX_INFO)];
                        case 15:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.OWN_PROP)];
                        case 16:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.USE_PROP)];
                        case 17:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.LEVEL_INFO)];
                        case 18:
                            _a.sent();
                            return [4, this.selectInfo(GameConst.FREE_DIAMOND)];
                        case 19:
                            _a.sent();
                            _a.label = 20;
                        case 20:
                            res();
                            return [2];
                    }
                });
            }); });
        };
        GameInfoManager.prototype.selectSingleInfo = function (key, isLoading) {
            var _this = this;
            if (isLoading === void 0) { isLoading = true; }
            return new Promise(function (res) {
                _this.selectInfoByNet(key, function (obj) {
                    if (obj.code == "0") {
                        res(obj.code);
                    }
                    else if (obj.code == "6" || obj.code == "25") {
                        _this.saveInfoToNet(key, function (obj1) {
                            if (obj1.code != "0") {
                                var str = CommonTool.errorCodeTable[obj1.code];
                            }
                            res(obj1.code);
                        });
                    }
                    else {
                        var str = CommonTool.errorCodeTable[obj.code];
                        res(obj.code);
                    }
                }, isLoading);
            });
        };
        GameInfoManager.prototype.deleteData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i, msg_data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 1;
                            _a.label = 1;
                        case 1:
                            if (!(i <= 3)) return [3, 4];
                            msg_data = {
                                "msg_type": "18",
                                "msg_data": {
                                    "gameid": GameData.getInstance().gameId,
                                    "datatype": i + ""
                                }
                            };
                            return [4, HttpMgr.getInstance().sendHttp(GameData.getInstance().URL_DELETE_DATA, msg_data, function () {
                                    console.log("清理数据成功...");
                                })];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3, 1];
                        case 4: return [2];
                    }
                });
            });
        };
        GameInfoManager.prototype.decodeData = function (data, key) {
            var obj = JSON.parse(data);
            if (obj) {
                switch (key) {
                    case GameConst.BASE_INFO:
                        GameData.getInstance().playerData = obj;
                        break;
                    case GameConst.SIGN_INFO:
                        GameData.getInstance().signIn = obj;
                        break;
                    case GameConst.INVITE_INFO:
                        GameData.getInstance().invite = obj;
                        break;
                    case GameConst.TASK_INFO:
                        GameData.getInstance().task = obj;
                        break;
                    case GameConst.BOX_INFO:
                        GameData.getInstance().treasure = obj;
                        break;
                    case GameConst.OWN_PROP:
                        GameData.getInstance().prop = obj;
                        break;
                    case GameConst.USE_PROP:
                        GameData.getInstance().localUserShipInfo = obj;
                        break;
                    case GameConst.LEVEL_INFO:
                        GameData.getInstance().level = obj;
                        break;
                    case GameConst.FREE_DIAMOND:
                        GameData.getInstance().freeTimes = obj;
                        break;
                }
            }
            return obj;
        };
        GameInfoManager.prototype.encodeData = function (key) {
            var obj;
            switch (key) {
                case GameConst.BASE_INFO:
                    obj = GameData.getInstance().playerData;
                    break;
                case GameConst.SIGN_INFO:
                    obj = GameData.getInstance().signIn;
                    break;
                case GameConst.INVITE_INFO:
                    obj = GameData.getInstance().invite;
                    break;
                case GameConst.TASK_INFO:
                    obj = GameData.getInstance().task;
                    break;
                case GameConst.BOX_INFO:
                    obj = GameData.getInstance().treasure;
                    break;
                case GameConst.OWN_PROP:
                    obj = GameData.getInstance().prop;
                    break;
                case GameConst.USE_PROP:
                    obj = GameData.getInstance().localUserShipInfo;
                    break;
                case GameConst.LEVEL_INFO:
                    obj = GameData.getInstance().level;
                    break;
                case GameConst.FREE_DIAMOND:
                    obj = GameData.getInstance().freeTimes;
                    break;
            }
            console.log("\u7F16\u8BD1\u952E\u4E3A " + key + " \u7684\u6570\u636E ->", obj);
            var str = JSON.stringify(obj);
            return str;
        };
        return GameInfoManager;
    }());

    var SoundUtil = (function () {
        function SoundUtil() {
            this._shakeIsOpen = true;
            this._soundIsOpen = true;
            this.sufix = "_mp3";
            this.effectPool = {};
            this._musicOpen = true;
            this._bgvolume = 1;
            this.effectPools = {};
            this.onPlaySoundNum = 0;
            this.effectVolume = 1;
            this._soundOpen = true;
        }
        SoundUtil.getInstance = function () {
            if (!SoundUtil.instance) {
                SoundUtil.instance = new SoundUtil();
            }
            return SoundUtil.instance;
        };
        Object.defineProperty(SoundUtil.prototype, "shakeIsOpen", {
            get: function () {
                return this._shakeIsOpen;
            },
            set: function (isOpen) {
                this._shakeIsOpen = isOpen;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SoundUtil.prototype, "soundIsOpen", {
            get: function () {
                return this._soundIsOpen;
            },
            set: function (isOpen) {
                this._soundIsOpen = isOpen;
                this.musicOpen = isOpen;
                this.soundOpen = isOpen;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SoundUtil.prototype, "musicOpen", {
            get: function () {
                return this._musicOpen;
            },
            set: function (value) {
                this._musicOpen = value;
                if (value) {
                    this.playBgMusic();
                }
                else {
                    this.stopBgMusic();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SoundUtil.prototype, "bgm", {
            get: function () {
                return this._bgm;
            },
            set: function (bgm) {
                if (!this._bgm) {
                    this._bgm = bgm;
                    this.playBgMusic();
                }
                else {
                    this._bgm = bgm;
                    this.stopBgMusic();
                    this.playBgMusic();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(SoundUtil.prototype, "bgvolume", {
            get: function () {
                return this._bgvolume;
            },
            set: function (value) {
                this.musicChannel && (this.musicChannel.volume = value);
                this._bgvolume = value;
            },
            enumerable: false,
            configurable: true
        });
        SoundUtil.prototype.playBgMusic = function () {
            if (this.musicOpen)
                this.playMusic();
        };
        SoundUtil.prototype.playMusic = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _url, music;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!SoundUtil.getInstance()._bgm)
                                return [2];
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                                if (SoundUtil.getInstance().bgInnerAudioContext) {
                                    SoundUtil.getInstance().bgInnerAudioContext.play();
                                    SoundUtil.getInstance().bgInnerAudioContext.loop = true;
                                    return [2];
                                }
                                SoundUtil.getInstance().bgInnerAudioContext = platform.createInnerAudioContext();
                                SoundUtil.getInstance().bgInnerAudioContext.src = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(SoundUtil.getInstance()._bgm + "_mp3").url);
                                SoundUtil.getInstance().bgInnerAudioContext.autoplay = true;
                                SoundUtil.getInstance().bgInnerAudioContext.loop = true;
                                SoundUtil.getInstance().bgInnerAudioContext.onPlay && (SoundUtil.getInstance().bgInnerAudioContext.onPlay = function () {
                                    SoundUtil.getInstance().playBgMusic();
                                });
                                return [2];
                            }
                            _url = "resource/assets/sound/" + this._bgm + ".mp3";
                            music = SoundUtil.getInstance().effectPool[SoundUtil.getInstance().bgm];
                            if (!(!music || !music.loaded)) return [3, 2];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            music = _a.sent();
                            SoundUtil.getInstance().effectPool[SoundUtil.getInstance().bgm] = music;
                            this.playMusic();
                            return [3, 3];
                        case 2:
                            SoundUtil.getInstance().musicChannel = music.play(0, 0);
                            SoundUtil.getInstance().musicChannel.volume = SoundUtil.getInstance().bgvolume;
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        SoundUtil.prototype.stopBgMusic = function () {
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                if (SoundUtil.getInstance().bgInnerAudioContext) {
                    SoundUtil.getInstance().bgInnerAudioContext.stop();
                    return;
                }
                return;
            }
            SoundUtil.getInstance().musicChannel && SoundUtil.getInstance().musicChannel.stop();
            SoundUtil.getInstance().musicChannel = null;
        };
        Object.defineProperty(SoundUtil.prototype, "soundOpen", {
            get: function () {
                return this._soundOpen;
            },
            set: function (_soundOpen) {
                this._soundOpen = _soundOpen;
            },
            enumerable: false,
            configurable: true
        });
        SoundUtil.prototype.playEffect = function (soundName) {
            return __awaiter(this, void 0, void 0, function () {
                var _url, sound, soundChannel, soundChannel;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _url = "resource/assets/sound/" + soundName + ".mp3";
                            if (this._soundOpen == false || !soundName || soundName == "")
                                return [2];
                            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                                this.playMiniGameEffect(soundName);
                                return [2];
                            }
                            sound = this.effectPool[soundName];
                            if (!(!sound || !sound.audioBuffer || !sound._disposed)) return [3, 5];
                            return [4, ResUtil.getIntance().getAsyncRESByUrl(_url)];
                        case 1:
                            sound = _a.sent();
                            if (!sound) return [3, 2];
                            this.effectPool[soundName] = sound;
                            soundChannel = sound.play(0, 1);
                            soundChannel.volume = this.effectVolume;
                            return [3, 4];
                        case 2: return [4, ResUtil.getIntance().getAsyncRESByUrl(_url).then(function () {
                                _this.playEffect(soundName);
                            })];
                        case 3:
                            _a.sent();
                            return [2];
                        case 4: return [3, 6];
                        case 5:
                            soundChannel = sound.play(0, 1);
                            if (soundChannel) {
                                soundChannel.play();
                            }
                            soundChannel.volume = this.effectVolume;
                            _a.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        SoundUtil.prototype.playMiniGameEffect = function (soundName) {
            if (DeviceUtil.isQQMiniGame()) {
                var innerAudioContext_1 = this.effectPools[soundName];
                if (!innerAudioContext_1) {
                    SoundUtil.getInstance().effectPools[soundName] = innerAudioContext_1 = platform.createInnerAudioContext();
                    innerAudioContext_1.autoplay = true;
                    var url = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(soundName + "_mp3").url);
                    console.log('url>>>>>', url);
                    innerAudioContext_1.src = url;
                    innerAudioContext_1.onError(function () {
                        innerAudioContext_1.destroy();
                        SoundUtil.getInstance().effectPools[soundName] = null;
                    });
                    innerAudioContext_1.onStop(function () {
                        innerAudioContext_1.destroy();
                        SoundUtil.getInstance().effectPools[soundName] = null;
                    });
                }
                innerAudioContext_1.play();
                return;
            }
            var miniSounds = this.effectPools[soundName];
            if (!miniSounds) {
                this.effectPools[soundName] = miniSounds = [];
            }
            var miniSound;
            if (miniSounds.length < 1) {
                miniSound = new MiniGameSound();
                miniSound.create(soundName);
            }
            else {
                miniSound = miniSounds.shift();
                if (miniSound.isEnded == false) {
                    miniSound = new MiniGameSound();
                    miniSound.create(soundName);
                }
                else {
                    miniSound.play();
                }
            }
            this.onPlaySoundNum += 1;
        };
        return SoundUtil;
    }());
    var MiniGameSound = (function () {
        function MiniGameSound() {
        }
        MiniGameSound.prototype.create = function (soundName) {
            var _this = this;
            this.innerAudioContext = platform.createInnerAudioContext();
            this.innerAudioContext.onEnded(function () {
                _this.isEnded = true;
                SoundUtil.getInstance().effectPools[_this.soundName].push(_this);
                SoundUtil.getInstance().onPlaySoundNum -= 1;
            });
            this.isEnded = false;
            this.soundName = soundName;
            var url = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(soundName + "_mp3").url);
            this.innerAudioContext.src = url;
            this.innerAudioContext.autoplay = true;
        };
        MiniGameSound.prototype.play = function () {
            this.innerAudioContext.play();
        };
        return MiniGameSound;
    }());

    var SoundManager = (function () {
        function SoundManager() {
        }
        SoundManager.getInstance = function () {
            if (!SoundManager.instance) {
                SoundManager.instance = new SoundManager();
            }
            return SoundManager.instance;
        };
        SoundManager.prototype.playBgMusic = function (soundName) {
            if (!soundName)
                return;
            if (this.curBgMusic != soundName) {
                this.curBgMusic = soundName;
                SoundUtil.getInstance().bgm = soundName;
            }
            else {
                SoundUtil.getInstance().playBgMusic();
            }
        };
        SoundManager.prototype.stopBgMusic = function () {
            SoundUtil.getInstance().stopBgMusic();
        };
        SoundManager.prototype.playEffect = function (soundName) {
            SoundUtil.getInstance().playEffect(soundName);
        };
        return SoundManager;
    }());
    var SoundConst;
    (function (SoundConst) {
        SoundConst["MainBgm"] = "mainMenuBGM";
        SoundConst["BtnClick"] = "ButtonPress";
        SoundConst["ScreenClick"] = "tab";
        SoundConst["ClosePop"] = "WindowClose";
        SoundConst["OpenPop"] = "WindowOpen";
        SoundConst["StarGather"] = "StarGather";
        SoundConst["ChestOpen"] = "ChestOpen";
        SoundConst["Reward"] = "Reward";
        SoundConst["PartSelect"] = "PartSelect";
        SoundConst["GetExp"] = "ui_upgrade";
        SoundConst["GetGold"] = "Purchase";
        SoundConst["GameBgm"] = "battleBGM";
        SoundConst["Victory"] = "victory";
        SoundConst["BombDrop"] = "bomb_drop";
        SoundConst["CatsAppear"] = "catsAppear";
        SoundConst["Explosion"] = "explosion";
        SoundConst["RocketShot"] = "rocketShot";
        SoundConst["SniperHit"] = "SniperHit";
        SoundConst["SniperShot"] = "SniperShot";
        SoundConst["CannonShot"] = "CannonShot";
        SoundConst["SteamerDeath"] = "SteamerDeath";
        SoundConst["OctopusDeath"] = "OctopusDeath";
        SoundConst["BotShot"] = "BotShot";
        SoundConst["PirateShipStart"] = "PirateShipStart";
        SoundConst["BoosterActive"] = "berserk_and_bandolier_click";
        SoundConst["PiratesDeath"] = "PiratesDeath";
    })(SoundConst || (SoundConst = {}));

    var InviteManager = (function () {
        function InviteManager() {
            this.URL = GameData.getInstance().URL_OF_INVITE;
            this.inviterInfo = new netData.Inviter();
            this.newPlayer = [];
        }
        InviteManager.getInstance = function () {
            if (!InviteManager.instance_) {
                InviteManager.instance_ = new InviteManager();
            }
            return InviteManager.instance_;
        };
        InviteManager.prototype.selectInfo = function (callF, obj) {
            var _this = this;
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            var gameId = GameData.getInstance().gameId;
            var openId = GameData.getInstance().userInfo.openId;
            var msg = {};
            msg.msg_type = "16";
            msg.msg_data = {
                "gameid": gameId,
                "openid": openId
            };
            console.log("查询受邀人列表 ->", msg);
            HttpMgr.getInstance().sendHttp(this.URL, msg, function (e) {
                var code = e["msg_data"]["error_code"];
                if (code == "0") {
                    console.log("查询受邀人列表成功 ->", e);
                    if (e["msg_data"]["index_list"] != "") {
                        _this.newPlayer = e["msg_data"]["index_list"];
                        console.log(_this.newPlayer);
                    }
                }
                else {
                    var str = CommonTool.errorCodeTable[code];
                    console.warn("查询受邀人列表失败：", str);
                }
                if (callF && obj) {
                    callF.call(obj, code);
                }
            }, function (e) { });
        };
        InviteManager.prototype.createInfo = function (callF, obj) {
            if (callF === void 0) { callF = null; }
            if (obj === void 0) { obj = null; }
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, new Promise(function (res, rej) {
                                var inviterOpenId = _this.inviterInfo.openId;
                                var tx_url = GameData.getInstance().userInfo.avatarUrl;
                                var nick = GameData.getInstance().userInfo.nick;
                                var gameId = GameData.getInstance().gameId;
                                var msg = {};
                                msg.msg_type = "14";
                                msg.msg_data = {
                                    "openid": inviterOpenId,
                                    "url": tx_url,
                                    "name": nick,
                                    "gameid": gameId
                                };
                                console.log("关联自己及邀请人 ->", msg);
                                HttpMgr.getInstance().sendHttp(_this.URL, msg, function (e) {
                                    var code = e["msg_data"]["error_code"];
                                    if (code == "0") {
                                        console.log("关联自己及邀请人成功...");
                                    }
                                    else {
                                        var str = CommonTool.errorCodeTable[code];
                                        console.warn("关联自己及邀请人失败：", str);
                                    }
                                    if (callF && obj) {
                                        callF.call(obj, code);
                                    }
                                    res();
                                }, function (e) { });
                            })];
                        case 1:
                            _a.sent();
                            return [2];
                    }
                });
            });
        };
        InviteManager.prototype.judgeInvite = function () {
            var _this = this;
            return new Promise(function (resolve) {
                var res = GameData.getInstance().enterGameInfo;
                console.log("开始关联邀请人", res);
                console.log("自己信息", GameData.getInstance().userInfo);
                if (res) {
                    var scene = res.scene;
                    if (scene == 1007 || scene == 1008 || scene == 1044) {
                        if (GameData.getInstance().userInfo.openId && res.query && res.query["openid"]) {
                            _this.inviterInfo.nick = res.query["nick"];
                            _this.inviterInfo.openId = res.query["openid"];
                            if (GameData.getInstance().userInfo.openId != _this.inviterInfo.openId) {
                                console.log("关联邀请人", res.query);
                                _this.createInfo();
                            }
                        }
                    }
                    resolve();
                }
                else {
                    resolve();
                }
            });
        };
        InviteManager.prototype.getInviteAwardData = function () {
            this.getInviteInfo();
            var inviteConfig = this.inviteConfig;
            var lingqu = GameData.getInstance().invite.inviteId;
            var invitePlayer = this.newPlayer;
            var dataArr = [];
            for (var i = 0; i < 10; i++) {
                var invite = inviteConfig[i];
                var awardId = invite.id;
                var canLingqu = false;
                var lingqued = false;
                var player = invitePlayer[i];
                if (lingqu.indexOf(awardId) > -1)
                    lingqued = true;
                if (player)
                    canLingqu = true;
                var data = new localData.InviteData();
                data.id = awardId;
                data.head = player ? player["url"] : "";
                data.reward = invite.reward;
                data.lingqued = lingqued;
                data.canLingqu = canLingqu;
                dataArr.push(data);
            }
            return dataArr;
        };
        InviteManager.prototype.getInviteInfo = function () {
            var inviteInfo = Laya.LocalStorage.getJSON(GameMgr.getInstance().invite);
            if (inviteInfo) {
                GameData.getInstance().invite = inviteInfo;
            }
            else {
                GameData.getInstance().invite = { inviteId: [] };
            }
        };
        InviteManager.prototype.getInviteAward = function (id, num) {
            GameData.getInstance().invite.inviteId.push(id);
            Laya.LocalStorage.setJSON(GameMgr.getInstance().invite, GameData.getInstance().invite);
        };
        return InviteManager;
    }());

    var MiniManeger = (function () {
        function MiniManeger() {
            this.hideTime = 0;
            this.showTime = 0;
            this.defaultMssage = {};
            this.shareInfo = [];
            this.sucTime = 0;
            this.canShowBanner = true;
            this.maxMakeVideoTime = 120;
            this.isAutoStopShare = false;
            this.startTime = 0;
        }
        Object.defineProperty(MiniManeger, "instance", {
            get: function () {
                return MiniManeger.ins;
            },
            enumerable: false,
            configurable: true
        });
        MiniManeger.prototype.initMiniGame = function () {
        };
        MiniManeger.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
        };
        MiniManeger.prototype.createUserButton = function (style, isFullScene) {
            if (isFullScene === void 0) { isFullScene = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.onShow = function (callBack) {
        };
        MiniManeger.prototype.onHide = function (callBack) {
        };
        MiniManeger.prototype.onAudioInterruptionBegin = function (callBack) {
        };
        MiniManeger.prototype.onAudioInterruptionEnd = function (callBack) {
        };
        MiniManeger.prototype.getUpdateManager = function () {
        };
        MiniManeger.prototype.getShareInfo = function (query) {
        };
        MiniManeger.prototype.shareAppMessage = function (data) {
        };
        MiniManeger.prototype.showMoreGame = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        MiniManeger.prototype.playViderAd = function (data) {
        };
        MiniManeger.prototype.showBannerAd = function (offset) {
        };
        MiniManeger.prototype.hideBanner = function () {
        };
        MiniManeger.prototype.vibrateShort = function (data) {
        };
        MiniManeger.prototype.vibrateLong = function () {
        };
        MiniManeger.prototype.adaptImgToClientRect = function (collec_img, stage) {
        };
        MiniManeger.prototype.sendDataToWxOpen = function (data) {
        };
        MiniManeger.prototype.removeOpenData = function (data) {
        };
        MiniManeger.prototype.addOpenWxData = function (data) {
        };
        MiniManeger.prototype.makeVideo = function () {
        };
        MiniManeger.prototype.loopTime = function () {
        };
        MiniManeger.prototype.startGameRecord = function () {
        };
        MiniManeger.prototype.stopGameRecord = function () {
        };
        MiniManeger.prototype.pauseGameRecord = function () {
        };
        MiniManeger.prototype.resumeGameRecord = function () {
        };
        MiniManeger.prototype.shareGameVideo = function (data) {
        };
        MiniManeger.prototype.initGameRecordListener = function (callBack) {
        };
        MiniManeger.prototype.showMoreGamesModal = function () {
        };
        MiniManeger.prototype.appName = function () {
            var self = this;
            if (!self.systemInfo) {
                self.systemInfo = platform.getSystemInfoSync();
            }
            return self.systemInfo.appName;
        };
        return MiniManeger;
    }());
    var MoreSomeAppInfo = (function () {
        function MoreSomeAppInfo() {
        }
        return MoreSomeAppInfo;
    }());

    var GameObj = (function (_super) {
        __extends(GameObj, _super);
        function GameObj() {
            var _this = _super.call(this) || this;
            _this.className_key = '';
            _this.isEnabled = true;
            return _this;
        }
        GameObj.prototype.onCreate = function (data, isNeedResulView) {
            this.objInfo_ = data;
            this.isRecovery = false;
            this.isEnabled = true;
            this.initObj();
            this.name = this.className_key;
        };
        GameObj.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            this.isRecovery = true;
            this._destroyAllComponent();
            Laya.timer.clearAll(this);
            Laya.Tween.clearTween(this);
            this.collider = null;
            this.rigidBody = null;
            this.removeChildren();
            this.removeSelf();
        };
        ;
        GameObj.prototype.playGameEffect = function (soundName) {
            SoundManager.getInstance().playEffect(soundName);
        };
        GameObj.prototype.initObj = function () {
            this.width = this.objInfo_.width;
            this.height = this.objInfo_.height;
            this.pivotX = this.objInfo_.width / 2;
            this.pivotY = this.objInfo_.height / 2;
        };
        return GameObj;
    }(Laya.Sprite));
    var GAMESTATUS;
    (function (GAMESTATUS) {
        GAMESTATUS[GAMESTATUS["STOP"] = 0] = "STOP";
        GAMESTATUS[GAMESTATUS["PLAYING"] = 1] = "PLAYING";
        GAMESTATUS[GAMESTATUS["PLAYERDEAD"] = 2] = "PLAYERDEAD";
        GAMESTATUS[GAMESTATUS["PLAYERWIN"] = 3] = "PLAYERWIN";
        GAMESTATUS[GAMESTATUS["PAUSE"] = 4] = "PAUSE";
        GAMESTATUS[GAMESTATUS["GAMESTART"] = 5] = "GAMESTART";
        GAMESTATUS[GAMESTATUS["READY"] = 6] = "READY";
    })(GAMESTATUS || (GAMESTATUS = {}));
    var GameObjInfo = (function () {
        function GameObjInfo() {
            this.isShow = false;
        }
        return GameObjInfo;
    }());
    var GameConstant = (function () {
        function GameConstant() {
        }
        GameConstant.Player = 'player';
        GameConstant.Enemy = 'enemy';
        GameConstant.Bullet = 'bullet';
        GameConstant.Ship = 'ship';
        GameConstant.Pig = 'Pig';
        GameConstant.Booster = 'Booster';
        GameConstant.Shield = 'Shield';
        GameConstant.MineBoom = 'MineBoom';
        GameConstant.FlyBoom = 'FlyBoom';
        GameConstant.MissileBullet = 'FlyBoom';
        GameConstant.Water_wave = 'water_wave';
        GameConstant.bulletWidth = 50;
        GameConstant.bulletHeight = 50;
        return GameConstant;
    }());
    var PigType;
    (function (PigType) {
        PigType[PigType["normal"] = 1] = "normal";
        PigType[PigType["Boss"] = 2] = "Boss";
    })(PigType || (PigType = {}));
    var AttackType;
    (function (AttackType) {
        AttackType[AttackType["Sky"] = 1] = "Sky";
        AttackType[AttackType["Water"] = 2] = "Water";
        AttackType[AttackType["UnderWater"] = 3] = "UnderWater";
        AttackType[AttackType["All"] = 4] = "All";
    })(AttackType || (AttackType = {}));
    var Physic = (function () {
        function Physic() {
        }
        Physic.STATIC = 'static';
        Physic.DYNAMIC = 'dynamic';
        Physic.KINEMATIC = 'kinematic';
        return Physic;
    }());

    var ObjectPool = (function () {
        function ObjectPool() {
            this.initPool();
        }
        Object.defineProperty(ObjectPool, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new ObjectPool();
                }
                return this.ins;
            },
            enumerable: false,
            configurable: true
        });
        ObjectPool.prototype.initPool = function () {
            this.poolList = [];
            this._pool = {};
        };
        ObjectPool.prototype.createObjectByName = function (className, data) {
            var key = className.key;
            if (key == null || key == '') {
                key = className.name;
            }
            var item = Laya.Pool.getItemByClass(key, className);
            item.key = key;
            item.onCreate && item.onCreate(data);
            item.visible = true;
            return item;
        };
        ObjectPool.prototype.recoveryObj = function (obj) {
            var key = obj.key;
            if (obj) {
                obj.visible = false;
            }
            obj.x = 5000;
            Laya.timer.frameOnce(2, this, function () {
                obj.onRecovery && obj.onRecovery();
                if (key == null || key == '') {
                    key = obj.className_key;
                }
                Laya.Pool.recover(key, obj);
            });
        };
        ObjectPool.prototype.destoryPoolByClassName = function (className) {
            var _pool = this._pool;
            var clazzs = _pool[className];
            if (clazzs != null && clazzs.length > 0) {
                var len = clazzs.length;
                for (var i = 0; i < len; i++) {
                    clazzs[i].onDestory && clazzs[i].onDestory();
                }
                clazzs = null;
            }
            delete _pool[className];
        };
        ObjectPool.prototype.destoryPool = function () {
            var _pool = this._pool;
            for (var obj in _pool) {
                var arr = _pool[obj];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    arr[i].onDestory && arr[i].onDestory();
                }
                arr = null;
                delete _pool[obj];
            }
        };
        return ObjectPool;
    }());

    var BulletScript = (function (_super) {
        __extends(BulletScript, _super);
        function BulletScript() {
            return _super.call(this) || this;
        }
        BulletScript.prototype.onEnable = function () {
        };
        BulletScript.prototype.onDisable = function () {
        };
        BulletScript.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.bullet = this.owner;
        };
        BulletScript.prototype.onUpdate = function () {
            _super.prototype.onUpdate.call(this);
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) {
                this.bullet.leaveScene();
                return;
            }
            if (this.bullet.view2d_) {
                this.bullet.view2d_.x = this.bullet.x;
                this.bullet.view2d_.y = this.bullet.y;
                this.bullet.updateRoatation();
            }
            if (this.bullet.y > 3000 || this.bullet.y < -1000 || (this.bullet.x > 4000 || this.bullet.x < -1000)) {
                this.bullet.leaveScene();
            }
            if (this.bullet.objInfo_.showSmoke) {
                this.bullet.createBulletSmoke();
            }
        };
        return BulletScript;
    }(Laya.Script));

    var AnimationManager = (function () {
        function AnimationManager() {
        }
        Object.defineProperty(AnimationManager, "instance", {
            get: function () {
                if (AnimationManager.ins == null) {
                    AnimationManager.ins = new AnimationManager();
                }
                return AnimationManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        AnimationManager.prototype.tipPointShake = function (target, play) {
            var _this = this;
            if (play) {
                Laya.Tween.clearAll(target);
                Laya.timer.clearAll(target);
                target.rotation = 0;
                var ani_1 = function (num) {
                    Laya.Tween.to(target, { rotation: 10 }, 100, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(target, { rotation: -10 }, 200, null, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(target, { rotation: 0 }, 100, null, Laya.Handler.create(_this, function () {
                                num--;
                                if (num) {
                                    ani_1(num);
                                }
                                else {
                                    var time = Utils.getRandom(1000, 3000);
                                    Laya.timer.once(time, target, function () { ani_1(2); });
                                }
                            }));
                        }));
                    }));
                };
                var delay = Utils.getRandom(500, 1000);
                Laya.timer.once(delay, target, function () { ani_1(2); });
            }
            else {
                Laya.timer.clearAll(target);
                Laya.Tween.clearAll(target);
                target.rotation = 0;
            }
        };
        AnimationManager.prototype.getAtlasAnimation = function (url, fex) {
            url = url + fex;
            return new Promise(function (resolve) {
                var roleAni = new Laya.Animation();
                roleAni.loadAtlas(url, Laya.Handler.create(null, function () {
                    resolve(roleAni);
                }));
            });
        };
        AnimationManager.prototype.scaleTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.visible = true;
            target.scale(0.8, 0.8);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.scaleBTween = function (target, caller, duration, complete, props, ease) {
            if (duration === void 0) { duration = 500; }
            target.scale(1.1, 1.1);
            Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.upToDownTween = function (target, props, duration, caller, ease, complete) {
            Laya.Tween.to(target, props, duration, ease, Laya.Handler.create(caller, function () {
                complete && complete();
            }));
        };
        AnimationManager.prototype.showSkeletonAnimation = function (url, callBack, aniMode) {
            console.log(url);
            var boomAnimation = new Laya.Skeleton();
            boomAnimation.load(url, Laya.Handler.create(this, function () {
                if (boomAnimation.player == null)
                    return;
                boomAnimation.player.playbackRate = 1;
                callBack && callBack(boomAnimation);
            }), aniMode);
        };
        AnimationManager.prototype.show2dBoonAnimation = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                dbBox.removeChildren();
                var boomAnimation = new Laya.Skeleton();
                boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!boomAnimation.player) {
                        resolve();
                        return;
                    }
                    boomAnimation.player.playbackRate = rate;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        resolve();
                    });
                    boomAnimation.scale(2, 2);
                    dbBox.addChild(boomAnimation);
                    boomAnimation.x = x;
                    boomAnimation.y = y;
                    boomAnimation.rotation = rotation;
                    boomAnimation.play(index, loop);
                }));
            });
        };
        AnimationManager.prototype.displayTwinkle = function (target, prefix, caller) {
            var index = 1;
            Laya.timer.loop(500, caller, function () {
                target.skin = prefix + index + ".png";
                index = index == 1 ? 2 : 1;
            });
        };
        AnimationManager.prototype.frameAni = function (target, prefix, caller, frameNum, time) {
            if (time === void 0) { time = 100; }
            var index = 1;
            Laya.timer.loop(time, caller, function () {
                target.skin = prefix + index + ".png";
                index++;
                if (index > frameNum)
                    index = 1;
            });
        };
        AnimationManager.prototype.zoomTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.1 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.zoomImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.02 + 1;
                target.rotation += Math.sin(scaleDelta) * 0.02;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.titleImgTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                target.rotation += Math.sin(scaleDelta) * 0.2;
            });
        };
        AnimationManager.prototype.VTween = function (target, caller, ds) {
            if (ds === void 0) { ds = 1; }
            var xDelta = 0;
            Laya.timer.loop(20, caller, function () {
                xDelta += 0.04;
                var xVaule = Math.sin(xDelta) * ds;
                target.x += xVaule;
            });
        };
        AnimationManager.prototype.flaTween = function (target, caller) {
            var alp = 0;
            Laya.timer.loop(20, caller, function () {
                alp += 0.04;
                var alpVaule = Math.abs(Math.sin(alp) * 0.5) + 0.5;
                target.alpha = alpVaule;
            });
        };
        AnimationManager.prototype.swingHeadTween = function (target, caller) {
            var scaleDelta = 0;
            var posY = target.y;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 6;
                target.y = scaleVaule + posY;
            });
        };
        AnimationManager.prototype.swingBodyTween = function (target, caller) {
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function () {
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.05 + 1;
                target.scale(scaleVaule, scaleVaule);
            });
        };
        AnimationManager.prototype.cardEnter = function (xs, target, caller, complete) {
            var x = xs;
            var wid = target.width;
            var w = 0.6;
            target.width = wid * w;
            Laya.timer.loop(20, caller, function onLoop() {
                w += 0.01;
                target.width = wid * w;
                target.x += 10;
                if (target.x >= x) {
                    target.width = wid;
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        AnimationManager.prototype.fallAni = function (target, caller, duration) {
            var disY = 1920 - target.y;
            var time = (duration / 20) + 1;
            var vX = Math.random() * 10 - 5;
            var vY = -Math.random() * 30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(20, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 20;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager.prototype.riseAni = function (target, caller, duration) {
            var vY = -Math.random() * 2;
            var t = 0;
            var scaleDelta = 0;
            Laya.timer.loop(20, caller, function onLoop() {
                target.y += vY;
                t += 20;
                scaleDelta += 0.04;
                var scaleVaule = Math.sin(scaleDelta) * 0.5 + 0.1;
                target.scale(scaleVaule, scaleVaule);
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    target.destroy();
                }
            });
        };
        AnimationManager.prototype.CardFly = function (target, startPoint, targetPoint, duration, caller, complete) {
            var disX = targetPoint.x - startPoint.x;
            var disY = targetPoint.y - startPoint.y;
            var time = (duration / 30) + 1;
            var vX = (disX / time);
            var vY = -30;
            var aY = (disY - vY * time) * 2 / (time * time);
            var x = target.x;
            var y = target.y;
            var t = 0;
            var r = 360 / time;
            Laya.timer.loop(30, caller, function onLoop() {
                vY += aY;
                x += vX;
                y += vY;
                t += 30;
                target.pos(x, y);
                target.rotation += r;
                if (t > duration) {
                    Laya.timer.clear(caller, onLoop);
                    complete && complete();
                }
            });
        };
        return AnimationManager;
    }());

    var BaseBullet = (function (_super) {
        __extends(BaseBullet, _super);
        function BaseBullet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "BaseBullet";
            _this.isActive = false;
            _this.baseRotation = 0;
            return _this;
        }
        BaseBullet.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, false);
            this.baseRotation = 0;
            this.rigidBody = this.addComponent(Laya.RigidBody);
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this.isActive = true;
            this.rigidBody.type = Physic.DYNAMIC;
            this.rigidBody.bullet = true;
            this.collider = this.addComponent(Laya.BoxCollider);
            this.collider.isSensor = true;
            this.collider.label = GameConstant.Bullet;
            this.collider.width = data.width;
            this.collider.height = data.height;
            if (this.view2d_ == null) {
                this.view2d_ = new Laya.Box();
                this.view2d_.anchorX = 0.5;
                this.view2d_.anchorY = 0.5;
            }
            this.view2d_.x = this.x;
            this.view2d_.y = this.y;
            this.view2d_.size(this.width, this.height);
            this.rigidBody.gravityScale = data.gravityScale;
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            var sound_effect = null;
            switch (this.objInfo_.bid + '') {
                case 100003 + '':
                case 100101 + '':
                case 100108 + '':
                case 100107 + '':
                case 100106 + '':
                    sound_effect = SoundConst.RocketShot;
                    break;
                case 100001 + '':
                case 100004 + '':
                case 100005 + '':
                case 100006 + '':
                case 100009 + '':
                case 100102 + '':
                case 100103 + '':
                case 100105 + '':
                case 100901 + '':
                    sound_effect = SoundConst.SniperShot;
                    break;
            }
            if (sound_effect != null) {
                this.playGameEffect(sound_effect);
            }
            this.bulletScript = this.addComponent(BulletScript);
        };
        BaseBullet.prototype.updateRoatation = function () {
            var linearVelocity = this.rigidBody.linearVelocity;
            var roa = Utils.getAngleTwoPoint({ x: 0, y: 0 }, { x: linearVelocity.x, y: linearVelocity.y });
            this.view2d_.rotation = roa + this.baseRotation;
        };
        BaseBullet.prototype.init = function () {
            this.rigidBody.setVelocity({ x: this.objInfo_.velx, y: this.objInfo_.vely });
            this.createIcon();
        };
        BaseBullet.prototype.createIcon = function () {
            var icon_bullet = Laya.Pool.getItemByClass("icon_bullet", Laya.Image);
            icon_bullet.skin = 'resource/assets/img/game/bullet/' + this.objInfo_.bulletId + '.png';
            icon_bullet.anchorX = 0.5;
            icon_bullet.anchorY = 0.5;
            icon_bullet.centerX = 0;
            icon_bullet.centerY = 0;
            icon_bullet.size(this.objInfo_.width, this.objInfo_.height);
            icon_bullet.onDisable = function () {
                Laya.Pool.recover('icon_bullet', icon_bullet);
            };
            this.view2d_.addChild(icon_bullet);
        };
        BaseBullet.prototype.createBulletSmoke = function () {
            var img_bullet_smoke = Laya.Pool.getItemByClass("img_bullet_smoke", Laya.Image);
            img_bullet_smoke.skin = 'resource/assets/img/game/bullet/bulletSmoke_1.png';
            img_bullet_smoke.scaleX = 1;
            img_bullet_smoke.scaleY = 1;
            img_bullet_smoke.alpha = 1;
            img_bullet_smoke.size(this.objInfo_.height, this.objInfo_.height);
            img_bullet_smoke.anchorX = 0.5;
            img_bullet_smoke.anchorY = 0.5;
            img_bullet_smoke.x = this.view2d_.x;
            img_bullet_smoke.y = this.view2d_.y;
            Laya.Tween.to(img_bullet_smoke, { scaleX: 0.1, scaleY: 0.1, alpha: 0.1 }, 500, null, Laya.Handler.create(img_bullet_smoke, function () {
                Laya.Pool.recover('img_bullet_smoke', img_bullet_smoke);
                img_bullet_smoke.removeSelf();
            }));
            GameManager.instance.box_game.addChildAt(img_bullet_smoke, 0);
            return img_bullet_smoke;
        };
        BaseBullet.prototype.createBulletAni = function () {
        };
        BaseBullet.prototype.onTriggerEnter = function (other, self, contact) {
        };
        BaseBullet.prototype.onTriggerExit = function (other, self, contact) {
        };
        BaseBullet.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            Laya.timer.clearAll(this);
            if (this.bulletScript) {
                this._destroyComponent(this.bulletScript);
                this.bulletScript = null;
            }
            delete GameManager.instance.bulletObj[this.objInfo_.id];
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this.view2d_.removeSelf();
            this._destroyComponent(this.collider);
            _super.prototype.onRecovery.call(this);
        };
        BaseBullet.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var sound_effect;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.playAni("resource/assets/img/ani/bullet/blasta.sk")];
                        case 1:
                            _a.sent();
                            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                                return [2];
                            sound_effect = null;
                            switch (this.objInfo_.bid + '') {
                                case 100003 + '':
                                case 100101 + '':
                                case 100108 + '':
                                case 100107 + '':
                                case 100106 + '':
                                    sound_effect = SoundConst.Explosion;
                                    break;
                                case 100001 + '':
                                case 100004 + '':
                                case 100005 + '':
                                case 100006 + '':
                                case 100102 + '':
                                case 100103 + '':
                                case 100105 + '':
                                case 100109 + '':
                                case 100901 + '':
                                    sound_effect = SoundConst.SniperHit;
                                    break;
                            }
                            if (sound_effect != null) {
                                this.playGameEffect(sound_effect);
                            }
                            this.leaveScene();
                            return [2];
                    }
                });
            });
        };
        BaseBullet.prototype.leaveScene = function () {
            if (this.bulletScript) {
                this._destroyComponent(this.bulletScript);
                this.bulletScript = null;
            }
            this.view2d_.removeChildren();
            if (this.parent) {
                ObjectPool.instance.recoveryObj(this);
            }
        };
        BaseBullet.prototype.playAni = function (url) {
            var self = this;
            return new Promise(function (resolve) {
                if (url == null) {
                }
                if (self.view2d_.parent == null) {
                    resolve(null);
                    return;
                }
                AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                    if (boomAnimation == null) {
                        resolve(boomAnimation);
                        return;
                    }
                    ;
                    console.log("aniNum =", boomAnimation.getAnimNum());
                    if (self.view2d_.parent == null) {
                        resolve(boomAnimation);
                        return;
                    }
                    boomAnimation.player.playbackRate = 1;
                    boomAnimation.scale(1, 1);
                    boomAnimation.autoSize = true;
                    boomAnimation.play("blasta", false);
                    boomAnimation.x = self.view2d_.x;
                    boomAnimation.y = self.view2d_.y;
                    boomAnimation.player.once(Laya.Event.STOPPED, self, function () {
                        if (boomAnimation) {
                            boomAnimation.removeSelf();
                        }
                        boomAnimation = null;
                    });
                    self.view2d_.parent.addChild(boomAnimation);
                    resolve(boomAnimation);
                }, 1);
            });
        };
        return BaseBullet;
    }(GameObj));
    var BulletInfo = (function (_super) {
        __extends(BulletInfo, _super);
        function BulletInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.offx = 0;
            _this.offy = 0;
            _this.showSmoke = true;
            return _this;
        }
        return BulletInfo;
    }(GameObjInfo));

    var BaseGameInfo = (function () {
        function BaseGameInfo() {
            this.type = BaseInfoType.Ship;
        }
        return BaseGameInfo;
    }());
    var BaseShipGameInfo = (function (_super) {
        __extends(BaseShipGameInfo, _super);
        function BaseShipGameInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hasShield = false;
            _this.shieldId = 0;
            _this.slotArr = [];
            _this.slot = 1;
            _this.type = BaseInfoType.Ship;
            return _this;
        }
        return BaseShipGameInfo;
    }(BaseGameInfo));
    var BaseCatGameInfo = (function (_super) {
        __extends(BaseCatGameInfo, _super);
        function BaseCatGameInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = BaseInfoType.Cat;
            _this.isNormal = true;
            return _this;
        }
        return BaseCatGameInfo;
    }(BaseGameInfo));
    var BasePigGameInfo = (function (_super) {
        __extends(BasePigGameInfo, _super);
        function BasePigGameInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = BaseInfoType.Pig;
            return _this;
        }
        return BasePigGameInfo;
    }(BaseGameInfo));
    var BaseBoosterGameInfo = (function (_super) {
        __extends(BaseBoosterGameInfo, _super);
        function BaseBoosterGameInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = BaseInfoType.Booster;
            return _this;
        }
        return BaseBoosterGameInfo;
    }(BaseGameInfo));

    var FarbgScene = (function (_super) {
        __extends(FarbgScene, _super);
        function FarbgScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "FarbgScene";
            _this.skin = "game/bg/FarbgScene.json";
            return _this;
        }
        FarbgScene.prototype.adaptationStage = function () {
        };
        FarbgScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        FarbgScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.height = 600;
                this.initView();
                this.addEvent();
                console.log(Laya.stage.width, Laya.stage.height);
            }
        };
        FarbgScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        FarbgScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        FarbgScene.prototype.initView = function () {
            Laya.timer.frameLoop(1, this, this.onLoop);
        };
        FarbgScene.prototype.onLoop = function () {
            this.bg1.x -= 0.5;
            this.bg2.x -= 0.5;
            if (this.bg1.x <= -2500) {
                this.bg1.x = this.bg2.x + 2500;
            }
            if (this.bg2.x <= -2500) {
                this.bg2.x = this.bg1.x + 2500;
            }
        };
        FarbgScene.prototype.addEvent = function () {
        };
        FarbgScene.prototype.removeEvent = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        FarbgScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        FarbgScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return FarbgScene;
    }(BaseSceneUISkin));

    var MiddleWaterScene = (function (_super) {
        __extends(MiddleWaterScene, _super);
        function MiddleWaterScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "MiddleWaterScene";
            _this.baseWid = 2500;
            _this.skin = 'game/bg/MiddleWaterScene.json';
            return _this;
        }
        MiddleWaterScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        MiddleWaterScene.prototype.adaptationStage = function () {
        };
        MiddleWaterScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.height = 480;
                this.initView();
                this.addEvent();
                console.log(Laya.stage.width, Laya.stage.height);
            }
        };
        MiddleWaterScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        MiddleWaterScene.prototype.initView = function () {
            Laya.timer.frameLoop(1, this, this.onLoop);
            this.wavUpOrDown();
        };
        MiddleWaterScene.prototype.onLoop = function () {
            this.water1.x -= 2;
            this.water2.x -= 2;
            if (this.water1.x <= -this.baseWid) {
                this.water1.x = this.water2.x + this.baseWid;
            }
            if (this.water2.x <= -this.baseWid) {
                this.water2.x = this.water1.x + this.baseWid;
            }
            this.wav1.x -= 2;
            this.wav2.x -= 2;
            if (this.wav1.x <= -this.baseWid) {
                this.wav1.x = this.wav2.x + this.baseWid;
            }
            if (this.wav2.x <= -this.baseWid) {
                this.wav2.x = this.wav1.x + this.baseWid;
            }
            this.mwav1.x -= 3;
            this.mwav2.x -= 3;
            if (this.mwav1.x <= -this.baseWid) {
                this.mwav1.x = this.mwav2.x + this.baseWid;
            }
            if (this.mwav2.x <= -this.baseWid) {
                this.mwav2.x = this.mwav1.x + this.baseWid;
            }
        };
        MiddleWaterScene.prototype.wavUpOrDown = function () {
            var _this = this;
            Laya.Tween.to(this.box_wav, { y: this.box_wav.y - 10 }, 1000, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.box_wav, { y: +10 }, 1000, null, Laya.Handler.create(_this, function () {
                    _this.wavUpOrDown();
                }));
            }));
        };
        MiddleWaterScene.prototype.addEvent = function () {
        };
        MiddleWaterScene.prototype.removeEvent = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        MiddleWaterScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        MiddleWaterScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return MiddleWaterScene;
    }(BaseSceneUISkin));

    var TaskEnum;
    (function (TaskEnum) {
        TaskEnum[TaskEnum["TASK_2001"] = 2001] = "TASK_2001";
        TaskEnum[TaskEnum["TASK_2002"] = 2002] = "TASK_2002";
        TaskEnum[TaskEnum["TASK_2003"] = 2003] = "TASK_2003";
        TaskEnum[TaskEnum["TASK_2004"] = 2004] = "TASK_2004";
        TaskEnum[TaskEnum["TASK_2005"] = 2005] = "TASK_2005";
        TaskEnum[TaskEnum["TASK_2006"] = 2006] = "TASK_2006";
        TaskEnum[TaskEnum["TASK_2007"] = 2007] = "TASK_2007";
        TaskEnum[TaskEnum["TASK_2008"] = 2008] = "TASK_2008";
        TaskEnum[TaskEnum["TASK_2009"] = 2009] = "TASK_2009";
        TaskEnum[TaskEnum["TASK_2010"] = 2010] = "TASK_2010";
        TaskEnum[TaskEnum["TASK_2011"] = 2011] = "TASK_2011";
        TaskEnum[TaskEnum["TASK_2012"] = 2012] = "TASK_2012";
        TaskEnum[TaskEnum["TASK_2013"] = 2013] = "TASK_2013";
        TaskEnum[TaskEnum["TASK_2014"] = 2014] = "TASK_2014";
    })(TaskEnum || (TaskEnum = {}));
    var TaskManager = (function () {
        function TaskManager() {
            this.surpriseTimes = 10;
        }
        Object.defineProperty(TaskManager, "instance", {
            get: function () {
                if (TaskManager.ins == null) {
                    TaskManager.ins = new TaskManager();
                }
                return TaskManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        TaskManager.prototype.initTaskData = function () {
            var _this = this;
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var jdData, curTime, isOneDay, taskConfigs, newArr, jd, i, len, task, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            jdData = GameData.getInstance().task;
                            curTime = (new Date()).getTime();
                            isOneDay = Utils.judgeIsOnTheSameDay(jdData.lastTime, curTime);
                            if (!isOneDay) return [3, 1];
                            res();
                            return [3, 3];
                        case 1: return [4, ConfigManager.getInstance().getTaskConfig()];
                        case 2:
                            taskConfigs = _a.sent();
                            newArr = GameMgr.getInstance().getArrayRandomItem(taskConfigs, 3);
                            jd = [];
                            for (i = 0, len = newArr.length; i < len; i++) {
                                task = newArr[i];
                                data = {
                                    id: task.taskID,
                                    state: 0,
                                    count: 0,
                                    locked: false
                                };
                                jd.push(data);
                            }
                            GameData.getInstance().task.taskInfo = jd;
                            GameData.getInstance().task.lastTime = curTime;
                            GameData.getInstance().task.surpriseed = false;
                            GameData.getInstance().task.taskVideo = 2;
                            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
                            res();
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            }); });
        };
        TaskManager.prototype.getTaskData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var task, jd, dataArr, canRecieveTask, i, len, taskJd, taskConfig, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            task = GameData.getInstance().task;
                            jd = task.taskInfo.filter(function (v) { return v.state < 2; });
                            dataArr = [];
                            canRecieveTask = false;
                            i = 0, len = jd.length;
                            _a.label = 1;
                        case 1:
                            if (!(i < len)) return [3, 4];
                            taskJd = jd[i];
                            return [4, this.getTaskConfig(taskJd.id)];
                        case 2:
                            taskConfig = _a.sent();
                            data = new localData.TaskData();
                            data.id = taskJd.id;
                            data.teskDes = taskConfig.tsakDes;
                            data.teskPar = taskConfig.parValue;
                            data.reward = taskConfig.reward;
                            data.progress = taskJd.count;
                            data.state = taskJd.state;
                            if (data.state == 1) {
                                canRecieveTask = true;
                            }
                            data.locked = taskJd.locked;
                            data.videoTimes = task.taskVideo;
                            dataArr.push(data);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3, 1];
                        case 4:
                            EventMgr.getInstance().sendEvent(GameConst.CanRecieveTask, canRecieveTask);
                            return [2, dataArr];
                    }
                });
            });
        };
        TaskManager.prototype.changeTask = function (taskId) {
            var _this = this;
            return new Promise(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var taskConfigs, tasks, newArr, i, len, config_1, ishave, j, task, arrIndex, config, j, task;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getTaskConfig()];
                        case 1:
                            taskConfigs = _a.sent();
                            tasks = GameData.getInstance().task.taskInfo;
                            newArr = [];
                            for (i = 0, len = taskConfigs.length; i < len; i++) {
                                config_1 = taskConfigs[i];
                                ishave = false;
                                for (j = 0; j < tasks.length; j++) {
                                    task = tasks[j];
                                    if (task.id == config_1.taskID) {
                                        ishave = true;
                                        break;
                                    }
                                }
                                if (!ishave)
                                    newArr.push(config_1);
                            }
                            arrIndex = Math.floor(Math.random() * newArr.length);
                            config = newArr[arrIndex];
                            for (j = 0; j < tasks.length; j++) {
                                task = tasks[j];
                                if (task.id == taskId) {
                                    task.id = config.taskID;
                                    task.state = 0;
                                    task.count = 0;
                                    task.locked = false;
                                    break;
                                }
                            }
                            GameData.getInstance().task.taskInfo = tasks;
                            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
                            res();
                            return [2];
                    }
                });
            }); });
        };
        TaskManager.prototype.getTaskConfig = function (taskId) {
            return __awaiter(this, void 0, void 0, function () {
                var config, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getTaskConfig()];
                        case 1:
                            config = _a.sent();
                            for (i in config) {
                                if (config[i].taskID == taskId) {
                                    return [2, config[i]];
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        TaskManager.prototype.getTaskAward = function (award) {
            var arr = award.split("|");
            var awardId = parseInt(arr[0]);
            if (awardId < 10000) {
                GameMgr.getInstance().updateBaseData(awardId, parseInt(arr[1]));
            }
        };
        TaskManager.prototype.updateTask = function (id, num, state) {
            return __awaiter(this, void 0, void 0, function () {
                var task, index, jd, index, jd, taskConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            task = GameData.getInstance().task;
                            if (!state) return [3, 1];
                            for (index = 0; index < task.taskInfo.length; index++) {
                                jd = task.taskInfo[index];
                                if (jd.id == id) {
                                    if (jd.state == 2)
                                        return [2];
                                    jd.state = state;
                                    jd.locked = true;
                                    break;
                                }
                            }
                            return [3, 5];
                        case 1:
                            index = 0;
                            _a.label = 2;
                        case 2:
                            if (!(index < task.taskInfo.length)) return [3, 5];
                            jd = task.taskInfo[index];
                            if (!(jd.id == id && jd.state == 0)) return [3, 4];
                            jd.count += num;
                            return [4, this.getTaskConfig(jd.id)];
                        case 3:
                            taskConfig = _a.sent();
                            if (jd.count >= taskConfig.parValue) {
                                jd.state = 1;
                                task.taskTimes += 1;
                            }
                            return [3, 5];
                        case 4:
                            index++;
                            return [3, 2];
                        case 5:
                            GameData.getInstance().task = task;
                            GameData.getInstance().task.lastTime = (new Date()).getTime();
                            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
                            return [2];
                    }
                });
            });
        };
        return TaskManager;
    }());
    window['TaskManager'] = TaskManager;

    var MineBullet = (function (_super) {
        __extends(MineBullet, _super);
        function MineBullet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "MineBullet";
            return _this;
        }
        MineBullet.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data);
            this.rigidBody.label = GameConstant.MineBoom;
            this.collider.label = GameConstant.MineBoom;
        };
        MineBullet.prototype.onTriggerEnter = function (other, self, contact) {
            var _this = this;
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            console.log(other.label);
            if (other.label.indexOf(GameConstant.Water_wave) > -1) {
                if (!this.isActive)
                    return;
                if (this.rigidBody.linearVelocity.y < 0)
                    return;
                var player = this.objInfo_.owner;
                if (player.objInfo_.playerId == '130001') {
                    this.playGameEffect(SoundConst.BombDrop);
                    return;
                }
                this.rigidBody.type = Physic.KINEMATIC;
                this.rigidBody.setVelocity({ x: 0, y: 0 });
                this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
                this.playGameEffect(SoundConst.BombDrop);
                Laya.timer.once(8000, this, function () {
                    _this.rigidBody.type = Physic.DYNAMIC;
                });
            }
        };
        return MineBullet;
    }(BaseBullet));

    var MissileBullet = (function (_super) {
        __extends(MissileBullet, _super);
        function MissileBullet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "MissileBullet";
            _this.vel = { x: 0, y: 0 };
            _this.index = 0;
            return _this;
        }
        MissileBullet.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data);
            this.index = 0;
            this.rigidBody.type = Physic.KINEMATIC;
            this.collider.label = GameConstant.Bullet;
            this.vel.y = -Math.abs(data.vely);
            this.vel.x = Math.abs(data.velx);
            Laya.timer.frameLoop(1, this, this.onLoop);
        };
        MissileBullet.prototype.onLoop = function () {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING || GameManager.instance.playerShip == null) {
                Laya.timer.clear(this, this.onLoop);
                return;
            }
            if (this.y + 200 > GameManager.instance.playerShip.y && this.index == 0) {
                if (this.vel.x < 1) {
                    this.vel.x = 0;
                }
                if (Math.abs(this.vel.y) < 2) {
                    this.vel.y = -5;
                }
                this.vel.x /= 2;
            }
            else {
                this.index++;
                if (this.index < 40) {
                    this.vel.x -= 0.5;
                    this.vel.y += 0.5;
                }
                else {
                    Laya.timer.clear(this, this.onLoop);
                    var data = GameManager.instance.getRandomLoca(this.objInfo_.type);
                    var vel = Utils.getRunDirection({ x: this.x, y: this.y }, { x: data.x, y: data.y }, Math.abs(this.objInfo_.velx));
                    this.vel.x = vel[0];
                    this.vel.y = vel[1];
                }
            }
            this.rigidBody.setVelocity(this.vel);
        };
        MissileBullet.prototype.onTriggerEnter = function (other, self, contact) {
            var otherOwner = other.owner;
            if (otherOwner instanceof BaseBullet) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                var bowner = otherOwner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                }
                else {
                    otherOwner.destroy();
                    this.destroy();
                }
            }
        };
        MissileBullet.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        return MissileBullet;
    }(BaseBullet));

    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "Player";
            _this.isDead = false;
            _this.nextAttackChangeThree = 0;
            _this.nextAttackCanPt = 0;
            _this.nextAttackCanMakeEnemyStop = 0;
            return _this;
        }
        Player.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.onCreate.call(this, data, false);
                    if (this.view2d_ == null) {
                        this.view2d_ = new Laya.Box();
                        this.view2d_.anchorX = 0.5;
                        this.view2d_.anchorY = 0.5;
                    }
                    if (this.objInfo_.isShow)
                        return [2];
                    EventMgr.getInstance().addEvent(GameConst.GameOver, this, this.onGameOver);
                    EventMgr.getInstance().addEvent(GameConst.GamePauseOrResume, this, this.onGamePauseOrResume);
                    return [2];
                });
            });
        };
        Player.prototype.init = function () {
        };
        Player.prototype.onGamePauseOrResume = function (data) {
            if (data == 0) {
                this.gamePause();
            }
            else {
                this.gameResume();
            }
        };
        Player.prototype.onGameOver = function () {
            EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
            Laya.timer.clearAll(this);
        };
        Player.prototype.updateBlood = function (updateBlood) {
            return __awaiter(this, void 0, void 0, function () {
                var txt_blood, point;
                return __generator(this, function (_a) {
                    this.objInfo_.curBlood += Math.floor(updateBlood);
                    if (this.objInfo_.curBlood > this.objInfo_.blood) {
                        this.objInfo_.curBlood = this.objInfo_.blood;
                    }
                    this.bloodView && this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
                    txt_blood = new Laya.Label();
                    txt_blood.text = '+' + Math.floor(updateBlood) + '';
                    txt_blood.color = '#4ab600';
                    txt_blood.y = -10;
                    txt_blood.fontSize = 40;
                    txt_blood.alpha = 1;
                    txt_blood.fontSize = 60;
                    txt_blood.bold = true;
                    point = Laya.Point.create();
                    point.x = 0;
                    point.y = 0;
                    point = this.view2d_.localToGlobal(point);
                    txt_blood.x = point.x;
                    txt_blood.y = point.y;
                    Laya.Tween.to(txt_blood, { y: point.y - 200, alpha: 0.2 }, 2000, null, Laya.Handler.create(txt_blood, function () {
                        txt_blood.removeSelf();
                    }));
                    GameManager.instance.box_gameScene_game.addChild(txt_blood);
                    return [2];
                });
            });
        };
        Player.prototype.createSkeleton = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            if (url == null) {
                                url = "resource/assets/img/ani/cat/cat1.sk";
                            }
                            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                if (boomAnimation == null)
                                    resolve(boomAnimation);
                                boomAnimation.player.playbackRate = 1;
                                boomAnimation.pivotX = boomAnimation.width / 2;
                                boomAnimation.pivotY = boomAnimation.height / 2;
                                boomAnimation.scale(1, 1);
                                boomAnimation.autoSize = true;
                                resolve(boomAnimation);
                            }, 1);
                        })];
                });
            });
        };
        Player.prototype.gamePause = function () {
            if (this.ani_player) {
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
            }
        };
        Player.prototype.gameResume = function () {
        };
        Player.prototype.playerAni = function (aniName, callBack, isLoop) {
            if (isLoop === void 0) { isLoop = false; }
            if (this.ani_player != null) {
                this.ani_player.visible = true;
                if (callBack) {
                    this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
                    this.ani_player.player.once(Laya.Event.STOPPED, this, this.onComplete, [aniName, callBack]);
                }
                this.ani_player.play(aniName, isLoop);
                this.localAniName = aniName;
            }
            else {
                callBack && callBack(aniName);
            }
        };
        Player.prototype.playerWin = function () {
            this.ani_player.visible = true;
            this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
            this.ani_player.play(PlayerAniName.shengli1, false);
        };
        Player.prototype.onComplete = function (aniName, callBack) {
            if (aniName == PlayerAniName.ru) {
                this.ani_player.visible = false;
            }
            callBack && callBack(aniName);
        };
        Player.prototype.removeSelf = function () {
            ObjectPool.instance.recoveryObj(this);
            return _super.prototype.removeSelf.call(this);
        };
        Player.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            _super.prototype.onRecovery.call(this);
            if (this.ani_player) {
                this.ani_player.stop();
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
            }
            if (this.view2d_) {
                this.view2d_.removeChildren();
                this.view2d_.destroy();
            }
            this.view2d_ = null;
            EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
            EventMgr.getInstance().removeEvent(GameConst.GamePauseOrResume, this, this.onGamePauseOrResume);
        };
        Player.prototype.shootBullet = function (bulletInfo) {
            if (this.nextAttackCanPt > 0) {
                this.nextAttackCanPt--;
                bulletInfo.isAttackCanPt = true;
            }
            else {
                bulletInfo.isAttackCanPt = false;
            }
            if (this.nextAttackCanMakeEnemyStop > 0) {
                this.nextAttackCanMakeEnemyStop--;
                bulletInfo.canMakeEnemyStop = true;
            }
            else {
                bulletInfo.canMakeEnemyStop = false;
            }
            if (this.nextAttackChangeThree > 0) {
                this.nextAttackChangeThree--;
                var bulletInfo1 = GameManager.instance.copyBulletInfo(bulletInfo);
                bulletInfo1.id = Laya.Utils.getGID();
                bulletInfo1.vely += 3;
                this.createBullet(bulletInfo1);
                var bulletInfo2 = GameManager.instance.copyBulletInfo(bulletInfo);
                bulletInfo2.id = Laya.Utils.getGID();
                bulletInfo2.vely -= 3;
                this.createBullet(bulletInfo2);
            }
            this.createBullet(bulletInfo);
        };
        Player.prototype.createBullet = function (bulletInfo) {
            if (this.objInfo_.type == GameConstant.Player && this.objInfo_.classType == BaseInfoType.Cat) {
                var taskEnum = null;
                if (parseInt(this.playerInfo.attack_type) == AttackType.Sky) {
                    taskEnum = TaskEnum.TASK_2006;
                }
                else if (parseInt(this.playerInfo.attack_type) == AttackType.Water) {
                    taskEnum = TaskEnum.TASK_2005;
                }
                else if (parseInt(this.playerInfo.attack_type) == AttackType.UnderWater) {
                    taskEnum = TaskEnum.TASK_2007;
                }
                if (taskEnum != null) {
                    TaskManager.instance.updateTask(taskEnum, 1);
                }
            }
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x + bulletInfo.offx;
            baseBullet.y = this.objInfo_.y + bulletInfo.offy;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            baseBullet.isActive = true;
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        Player.prototype.createBaseBullet = function (id, data) {
            var bullet;
            switch (parseInt(id)) {
                case 100101:
                case 100106:
                    bullet = ObjectPool.instance.createObjectByName(MineBullet, data);
                    break;
                case 100107:
                    bullet = ObjectPool.instance.createObjectByName(MissileBullet, data);
                    break;
                default:
                    bullet = ObjectPool.instance.createObjectByName(BaseBullet, data);
                    break;
            }
            return bullet;
        };
        Player.prototype.initBulletInfo = function (bulletInfo) {
            bulletInfo.id = Laya.Utils.getGID();
            bulletInfo.width = GameConstant.bulletWidth;
            bulletInfo.height = GameConstant.bulletHeight;
            bulletInfo.type = this.objInfo_.type;
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            bulletInfo.owner = this;
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.bid = parseInt(bidA[0]);
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            return bulletInfo;
        };
        Player.prototype.autoAttack = function () {
            var bulletInfo = new BulletInfo();
            if (this.playerInfo == null)
                return;
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            bulletInfo = this.initBulletInfo(bulletInfo);
            bulletInfo.bid = parseInt(bidA[0]);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            var velX = Number(bulletConfig.velx);
            var velY = Number(bulletConfig.vely);
            this.playerAutoAttackEnemy(bulletInfo, velX, velY);
        };
        Player.prototype.relive = function () {
        };
        Player.prototype.playerAutoAttackEnemy = function (bulletInfo, velX, velY) {
            var _this = this;
            this.initBulletLoa();
            var data = GameManager.instance.getRandomLoca(this.objInfo_.type);
            var ys = data.y;
            var xs = data.x;
            var dxs = xs - this.objInfo_.x;
            var dys = ys - this.objInfo_.y;
            var flag = 1;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                flag = -1;
            }
            bulletInfo.gravityScale = flag * bulletInfo.gravityScale;
            if (dxs > 0) {
                velX = Math.abs(velX);
            }
            else {
                velX = -Math.abs(velX);
            }
            var t1 = Math.abs(dxs / velX / 50);
            velY = (dys - 0.5 * bulletInfo.gravityScale * 500 * t1 * t1) / t1 / 50;
            bulletInfo.vely = velY;
            bulletInfo.attack = this.objInfo_.attack;
            bulletInfo.velx = velX;
            this.playerAni(PlayerAniName.kaipao, function () {
                _this.shootBullet(bulletInfo);
                _this.shootOver();
            });
        };
        Player.prototype.gameOver = function () {
            Laya.timer.clearAll(this);
            if (this.ani_player) {
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
            }
            this.playerAni(PlayerAniName.daiji, function () {
            });
        };
        Player.prototype.initBulletLoa = function () {
            var point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage);
            this.objInfo_.x = point.x;
            this.objInfo_.y = point.y;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                this.objInfo_.y = point.y + this.ani_player.height / 2;
            }
        };
        Player.prototype.preShoot = function () {
            var _this = this;
            var ani = PlayerAniName.chu1;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                ani = PlayerAniName.chu2;
            }
            this.playerAni(ani, function (index) {
                _this.autoAttack();
            });
        };
        Player.prototype.shootOver = function () {
            var _this = this;
            this.playerAni(PlayerAniName.ru, function (index) {
                Laya.timer.once(1500, _this, _this.preShoot);
            });
        };
        return Player;
    }(GameObj));
    var PlayerGameInfo = (function (_super) {
        __extends(PlayerGameInfo, _super);
        function PlayerGameInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.classType = BaseInfoType.Cat;
            return _this;
        }
        return PlayerGameInfo;
    }(GameObjInfo));
    var CatLocaction;
    (function (CatLocaction) {
        CatLocaction[CatLocaction["UP_WATER"] = 0] = "UP_WATER";
        CatLocaction[CatLocaction["UNDER_WATER"] = 1] = "UNDER_WATER";
        CatLocaction[CatLocaction["MAIN"] = 2] = "MAIN";
    })(CatLocaction || (CatLocaction = {}));
    var PlayerAniName = (function () {
        function PlayerAniName() {
        }
        PlayerAniName.daiji = 'daiji';
        PlayerAniName.chu1 = 'chu1';
        PlayerAniName.kaipao = 'kaipao';
        PlayerAniName.chu2 = 'chu2';
        PlayerAniName.shengli1 = 'shengli1';
        PlayerAniName.ru = 'ru';
        PlayerAniName.gongji = 'gongji';
        PlayerAniName.shouji = "shouji";
        PlayerAniName.zhuihui = 'zhuihui';
        return PlayerAniName;
    }());

    var PlayerBlood = (function (_super) {
        __extends(PlayerBlood, _super);
        function PlayerBlood(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "PlayerBlood";
            _this.skin = 'game/blood/PlayerBlood.json';
            return _this;
        }
        PlayerBlood.prototype.adaptationStage = function () {
        };
        PlayerBlood.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
            }
        };
        PlayerBlood.prototype.initView = function () {
            this.icon_blood.width = 100 * (this.viewData_.cur / this.viewData_.total);
        };
        PlayerBlood.prototype.updateBlood = function (data) {
            if (data.cur <= 0) {
                data.cur = 0;
            }
            this.icon_blood.width = 100 * (data.cur / data.total);
        };
        return PlayerBlood;
    }(BaseSceneUISkin));

    var PigScript = (function (_super) {
        __extends(PigScript, _super);
        function PigScript() {
            return _super.call(this) || this;
        }
        PigScript.prototype.onEnable = function () {
        };
        PigScript.prototype.onDisable = function () {
        };
        PigScript.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.pigPlayer = this.owner;
        };
        PigScript.prototype.onUpdate = function () {
            _super.prototype.onUpdate.call(this);
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING) {
                return;
            }
            if (this.pigPlayer.view2d_) {
                this.pigPlayer.view2d_.x = this.pigPlayer.x;
                this.pigPlayer.view2d_.y = this.pigPlayer.y;
            }
        };
        return PigScript;
    }(Laya.Script));

    var ShockUtils = (function () {
        function ShockUtils() {
            this.shockLevel = 1;
            this.MAP = 0;
            this.SPRITE = 1;
            this.mapPoss = [new Laya.Point(0, 3), new Laya.Point(3, 2), new Laya.Point(-3, -2)];
            this.spritePoss = [new Laya.Point(5, 0), new Laya.Point(-5, 0), new Laya.Point(5, 0)];
            this._shockLength = 0;
            this._shockCount = 0;
            this._rx = 0;
            this._ry = 0;
            this._type = 0;
            this._repeatCount = 0;
        }
        ShockUtils.geyInstance = function () {
            if (this.instance == null)
                this.instance = new ShockUtils();
            return this.instance;
        };
        ShockUtils.prototype.destroy = function () {
            this.stop();
            this._target = null;
        };
        ShockUtils.prototype.shock = function (type) {
            if (type === void 0) { type = 0; }
            this._type = type;
            if (this._type == this.MAP) {
                this._shockPoss = this.mapPoss.concat();
                this._shockLength = this._shockPoss.length;
            }
            else if (this._type == this.SPRITE) {
                this._shockPoss = this.spritePoss.concat();
                this._shockLength = this._shockPoss.length;
            }
        };
        ShockUtils.prototype.start = function (num) {
            if (num === void 0) { num = 1; }
            this.stop();
            this.repeatCount = num;
            this._shockCount = 0;
            if (this._target) {
                this._rx = this._target.x;
                this._ry = this._target.y;
                Laya.timer.frameLoop(1, this, this.onShockEnter);
            }
        };
        ShockUtils.prototype.stop = function () {
            if (this._target) {
                this._target.x = this._rx;
                this._target.y = this._ry;
                Laya.timer.clear(this, this.onShockEnter);
            }
        };
        ShockUtils.prototype.onShockEnter = function (e) {
            var maxCount = this._shockLength * this._repeatCount;
            if (this._shockCount >= maxCount) {
                this.stop();
                return;
            }
            var index = this._shockCount % this._shockLength;
            var pos = this._shockPoss[index];
            if (this._target) {
                this._target.x = this._rx + pos.x * this.shockLevel;
                this._target.y = this._ry + pos.y * this.shockLevel;
            }
            this._shockCount++;
        };
        Object.defineProperty(ShockUtils.prototype, "repeatCount", {
            get: function () {
                return this._repeatCount;
            },
            set: function (value) {
                this._repeatCount = value;
            },
            enumerable: false,
            configurable: true
        });
        return ShockUtils;
    }());

    var PigPlayer = (function (_super) {
        __extends(PigPlayer, _super);
        function PigPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'PigPlayer';
            _this.isDead = false;
            _this.actionIndex = 0;
            _this.isAutoAttack = false;
            _this.index = 0;
            _this.startAttackTime = 0;
            return _this;
        }
        PigPlayer.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var boomAnimation, scale;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _super.prototype.onCreate.call(this, data);
                            this.x = data.x;
                            this.y = data.y;
                            data.classType = BaseInfoType.Pig;
                            this.pigScript = this.addComponent(PigScript);
                            this.isDead = false;
                            this.playerInfo = ConfigManager.getInstance().pigConfigs[this.objInfo_.playerId];
                            if (this.playerInfo.attack_type) {
                                this.objInfo_.attackType = parseInt(this.playerInfo.attack_type);
                            }
                            return [4, this.createSkeleton('resource/assets/img/ani/pig/' + this.playerInfo.url + '.sk')];
                        case 1:
                            boomAnimation = _a.sent();
                            this.actionIndex = 0;
                            this.ani_player = boomAnimation;
                            boomAnimation.x = data.width / 2;
                            boomAnimation.y = data.height * 0.8;
                            this.rigidBody = this.addComponent(Laya.RigidBody);
                            this.rigidBody.type = Physic.KINEMATIC;
                            this.collider = this.addComponent(Laya.BoxCollider);
                            this.collider.label = GameConstant.Pig;
                            this.collider.isSensor = true;
                            boomAnimation.scale(0.1, 0.1);
                            scale = Number(this.playerInfo.scale);
                            Laya.Tween.to(boomAnimation, { scaleX: scale, scaleY: scale }, 200);
                            this.collider.width = data.width;
                            this.collider.height = data.height;
                            if (this.view2d_ == null) {
                                this.view2d_ = new Laya.Box();
                                this.view2d_.autoSize = true;
                                this.view2d_.anchorX = 0.5;
                                this.view2d_.anchorY = 0.5;
                            }
                            if (data.type == GameConstant.Player) {
                                this.view2d_.scaleX = -1;
                            }
                            else {
                                this.view2d_.scaleX = 1;
                            }
                            this.view2d_.addChild(boomAnimation);
                            this.view2d_.size(data.width, data.height);
                            if (this.objInfo_.isShow)
                                return [2];
                            if (data.direAtt) {
                                this.startGame();
                            }
                            else {
                                EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startGame);
                            }
                            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
                            this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
                            this.bloodView = new PlayerBlood({ cur: data.blood, total: data.blood });
                            this.bloodView.y = data.height + 10;
                            this.bloodView.x = (data.width - this.bloodView.width) / 2;
                            this.view2d_.addChild(this.bloodView);
                            return [2];
                    }
                });
            });
        };
        PigPlayer.prototype.init = function () {
        };
        PigPlayer.prototype.update = function () {
        };
        PigPlayer.prototype.startGame = function () {
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
            this.startAiGame();
        };
        PigPlayer.prototype.onTriggerExit = function (other, self, contact) {
        };
        PigPlayer.prototype.onTriggerEnter = function (other, self, contact) {
            if (this.isDead)
                return;
            var otherOwner = other.owner;
            if (otherOwner instanceof BaseBullet) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                var bowner = otherOwner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                    if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {
                        if (bowner.objInfo_.id != this.objInfo_.id) {
                            this.bulletDestory(otherOwner);
                        }
                    }
                }
                else {
                    if (this.objInfo_.type == GameConstant.Enemy) {
                        GameManager.instance.dropGold(otherOwner.x, otherOwner.y);
                    }
                    this.bulletDestory(otherOwner);
                }
            }
            else if (otherOwner instanceof PigPlayer) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                if (otherOwner.objInfo_.type == this.objInfo_.type) {
                }
                else {
                    if (this.objInfo_.AIScriptID == 4 && this.objInfo_.pigType == PigType.normal) {
                        if (otherOwner.isDead) {
                            return;
                        }
                        this.playDestoryEffect();
                        this.destroy();
                    }
                }
            }
        };
        PigPlayer.prototype.bulletDestory = function (otherOwner) {
            var _this = this;
            if (!otherOwner.isActive)
                return;
            this.playerAni(PlayerAniName.shouji, function () {
                _this.playerAni(PlayerAniName.daiji, null, true);
            }, false);
            otherOwner.rigidBody.setVelocity({ x: 0, y: 0 });
            otherOwner.rigidBody.gravityScale = 0;
            var deleteBlood = GameManager.instance.calDeleteBlood({ bullet: otherOwner, attackType: this.objInfo_.attackType });
            this.deleteBlood(deleteBlood);
            otherOwner.destroy();
        };
        PigPlayer.prototype.deleteBlood = function (deleteBlood) {
            ShockUtils.geyInstance().start(1);
            this.objInfo_.curBlood -= deleteBlood;
            this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            console.log('curBlood>>>>>>>pig', this.objInfo_.curBlood);
            if (this.objInfo_.curBlood <= 0) {
                this.playDestoryEffect();
                this.destroy();
                this.isDead = true;
            }
        };
        PigPlayer.prototype.playDestoryEffect = function () {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            var sound_effect = null;
            switch (this.objInfo_.playerId) {
                case 130001 + '':
                case 130002 + '':
                case 130003 + '':
                case 130101 + '':
                case 130102 + '':
                    sound_effect = SoundConst.SteamerDeath;
                    break;
                case 130201 + '':
                case 130202 + '':
                case 130203 + '':
                    sound_effect = SoundConst.OctopusDeath;
                    break;
            }
            if (sound_effect != null) {
                this.playGameEffect(sound_effect);
            }
        };
        PigPlayer.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    delete GameManager.instance.pigObj[this.objInfo_.id];
                    this.isDead = true;
                    Laya.timer.clearAll(this);
                    this.bloodView.visible = false;
                    if (this.pigScript) {
                        this._destroyComponent(this.pigScript);
                        this.pigScript = null;
                    }
                    this.playerAni(PlayerAniName.zhuihui, function () {
                        _this.view2d_.removeChildren();
                        ObjectPool.instance.recoveryObj(_this);
                        var len = Utils.getObjLength(GameManager.instance.pigObj);
                        if (len == 0) {
                            EventMgr.getInstance().sendEvent(GameConst.NextWave);
                        }
                    }, false);
                    return [2];
                });
            });
        };
        PigPlayer.prototype.pigLevelScene = function () {
            delete GameManager.instance.pigObj[this.objInfo_.id];
            this.isDead = true;
            Laya.timer.clearAll(this);
            this.bloodView.visible = false;
            if (this.pigScript) {
                this._destroyComponent(this.pigScript);
                this.pigScript = null;
            }
            this.view2d_.removeChildren();
        };
        PigPlayer.prototype.initActionIndex = function () {
            if (this.actionIndex >= this.objInfo_.configsInfo.length) {
                this.actionIndex = 0;
            }
            this.startAiGame();
        };
        PigPlayer.prototype.startAiGame = function () {
            if (this.isDead)
                return;
            var configsInfo = this.objInfo_.configsInfo;
            var info = configsInfo[this.actionIndex];
            switch (info.cmd) {
                case "wait":
                    Laya.timer.clear(this, this.autoAttack);
                    this.isAutoAttack = false;
                    this.playerWait(info);
                    break;
                case "move":
                    Laya.timer.clear(this, this.autoAttack);
                    this.isAutoAttack = false;
                    this.playerMove(info);
                    break;
                case "attack":
                    this.playerAttack(info);
                    break;
                case "attackAndMove":
                    this.playerAtackAndMove(info);
                    break;
                case "attackAndMoveAuto":
                    this.autoAttackAndMove(info);
                    break;
                case "randomLoc":
                    this.teleportingNewLoc(info);
                    break;
                case "destory":
                    Laya.timer.clear(this, this.autoAttack);
                    this.isAutoAttack = false;
                    this.destroy();
                    break;
            }
        };
        PigPlayer.prototype.teleportingNewLoc = function (info) {
        };
        PigPlayer.prototype.autoAttackAndMove = function (info) {
            var _this = this;
            if (!this.isAutoAttack) {
                this.autoAttack();
            }
            this.playerAtackAndMoveAuto(info, 0);
            Laya.timer.once(Number(info.time), this, function () {
                Laya.timer.clear(_this, _this.playerAtackAndMoveAuto);
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        PigPlayer.prototype.gamePause = function () {
        };
        PigPlayer.prototype.gameResume = function () {
        };
        PigPlayer.prototype.playerMove = function (info) {
            var _this = this;
            this.rigidBody.setVelocity({ x: info.velx, y: info.vely });
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                _this.rigidBody.setVelocity({ x: 0, y: 0 });
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        PigPlayer.prototype.playerAtackAndMoveAuto = function (info, index) {
            var arr = info.attackAndMove;
            var flag = index % arr.length;
            this.rigidBody.setVelocity({ x: arr[flag].velx, y: arr[flag].vely });
            index++;
            Laya.timer.once(parseInt(arr[flag].time + ''), this, this.playerAtackAndMoveAuto, [info, index]);
        };
        PigPlayer.prototype.playerAtackAndMove = function (info) {
            var _this = this;
            if (!this.isAutoAttack) {
                this.autoAttack();
            }
            this.rigidBody.setVelocity({ x: info.velx, y: info.vely });
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                _this.rigidBody.setVelocity({ x: 0, y: 0 });
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        PigPlayer.prototype.playerAttack = function (info) {
            var _this = this;
            this.rigidBody.setVelocity({ x: 0, y: 0 });
            if (!this.isAutoAttack) {
                this.autoAttack();
            }
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        PigPlayer.prototype.autoAttack = function () {
            if (this.isDead)
                return;
            this.isAutoAttack = true;
            this.startShootBullet();
            this.startAttackTime = new Date().getTime();
            Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
        };
        PigPlayer.prototype.startShootBullet = function () {
            var point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage);
            this.objInfo_.x = point.x;
            this.objInfo_.y = point.y;
            var bulletInfo = new BulletInfo();
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var index = this.index % bidA.length;
            var bid = bidA[index];
            if (this.playerInfo.offX != null) {
                var offxArr = this.playerInfo.offX.split('|');
                bulletInfo.offx = parseInt(offxArr[index]);
                var offyArr = this.playerInfo.offY.split('|');
                bulletInfo.offy = parseInt(offyArr[index]);
            }
            this.index++;
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bid];
            bulletInfo = this.initBulletInfo(bulletInfo);
            bulletInfo.bid = parseInt(bid);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            var velX = Number(bulletConfig.velx);
            var velY = Number(bulletConfig.vely);
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            bulletInfo.gravityScale = Math.abs(bulletInfo.gravityScale);
            bulletInfo.vely = velY;
            if (this.objInfo_.type == GameConstant.Enemy) {
                var vel = Utils.getRunDirection({ x: this.x, y: this.y }, { x: GameManager.instance.playerShip.x, y: GameManager.instance.playerShip.y }, Math.abs(velX));
                velX = vel[0];
                velY = vel[1];
                var playerShip = GameManager.instance.playerShip;
                var disX = Math.abs(this.x - GameManager.instance.playerShip.x);
                var t1 = Math.abs(disX / 50 / velX);
                if (this.y - playerShip.y > 0) {
                    bulletInfo.gravityScale = -bulletInfo.gravityScale;
                }
                bulletInfo.vely = velY;
                bulletInfo.attack = this.objInfo_.attack;
                bulletInfo.velx = velX;
                this.shootBullet(bulletInfo);
            }
            else {
                this.playerPigAttackEnemy(bulletInfo, velX, velY);
            }
        };
        PigPlayer.prototype.playerPigAttackEnemy = function (bulletInfo, velX, velY) {
            var data = GameManager.instance.getRandomLoca(this.objInfo_.type);
            var ys = data.y;
            var xs = data.x;
            var vel = Utils.getRunDirection({ x: this.x, y: this.y }, { x: xs, y: ys }, Math.abs(velX));
            velX = vel[0] + 5;
            velY = vel[1];
            if (velY > 10) {
                velY -= 2;
            }
            else if (velY < -10) {
                velY += 2;
            }
            if (this.y - ys > 0) {
                bulletInfo.gravityScale = -bulletInfo.gravityScale;
            }
            bulletInfo.vely = velY;
            bulletInfo.attack = this.objInfo_.attack;
            bulletInfo.velx = velX;
            this.shootBullet(bulletInfo);
        };
        PigPlayer.prototype.playerWait = function (info) {
            var _this = this;
            this.rigidBody.setVelocity({ x: 0, y: 0 });
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        PigPlayer.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            if (this.pigScript) {
                this._destroyComponent(this.pigScript);
            }
            this.pigScript = null;
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this.view2d_.removeSelf();
            this._destroyComponent(this.collider);
            Laya.timer.clearAll(this);
            this.isAutoAttack = false;
            _super.prototype.onRecovery.call(this);
        };
        PigPlayer.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return PigPlayer;
    }(Player));
    var PigPlayerGameInfo = (function (_super) {
        __extends(PigPlayerGameInfo, _super);
        function PigPlayerGameInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PigPlayerGameInfo;
    }(PlayerGameInfo));

    var CatPlayer = (function (_super) {
        __extends(CatPlayer, _super);
        function CatPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.temp = 10;
            _this.startPoint = { x: 0, y: 0 };
            _this.endPoint = { x: 0, y: 0 };
            _this.isMoveing = false;
            return _this;
        }
        CatPlayer.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var boomAnimation;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.playerInfo = ConfigManager.getInstance().catConfigs[data.playerId];
                            this.objInfo_.attackType = parseInt(this.playerInfo.attack_type);
                            this.isDead = false;
                            data.classType = BaseInfoType.Cat;
                            return [4, this.createSkeleton(GameManager.instance.catUrl + this.playerInfo.url + '.sk')];
                        case 2:
                            boomAnimation = _a.sent();
                            this.ani_player = boomAnimation;
                            boomAnimation.x = data.width / 2;
                            boomAnimation.y = data.height;
                            boomAnimation.scale(0.62, 0.62);
                            this.view2d_.autoSize = true;
                            this.view2d_.addChild(boomAnimation);
                            this.initBulletLoa();
                            this.view2d_.size(data.width, data.height);
                            this.view2d_.x = data.width / 2;
                            this.view2d_.y = data.height / 2;
                            this.playerAni(PlayerAniName.chu1, function () {
                                _this.playerAni(PlayerAniName.daiji, function () {
                                    _this.turnRoation(0);
                                }, false);
                            }, false);
                            this.addChild(this.view2d_);
                            this.ani_player.player.stop();
                            this.bloodView = new PlayerBlood({ cur: data.blood, total: data.blood });
                            this.bloodView.y = 30;
                            this.view2d_.addChild(this.bloodView);
                            if (this.objInfo_.isShow)
                                return [2];
                            EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);
                            if (this.objInfo_.type == GameConstant.Player) {
                                EventMgr.getInstance().addEvent(GameConst.ModelChange, this, this.onModelChange);
                            }
                            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startAiGame);
                            this.showAttackIcon();
                            return [2];
                    }
                });
            });
        };
        CatPlayer.prototype.showAttackIcon = function () {
            var icon_attack = new Laya.Image();
            var icon_str = 'resource/assets/img/propPublic/propPublic_ui_aim_red.png';
            switch (this.objInfo_.attackType) {
                case AttackType.All:
                    break;
                case AttackType.Sky:
                    icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_26.png';
                    break;
                case AttackType.Water:
                    icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_27.png';
                    break;
                case AttackType.UnderWater:
                    icon_str = 'resource/assets/img/propPublic/propPublic_button_icons_28.png';
                    break;
            }
            icon_attack.scale(0.5, 0.5);
            icon_attack.skin = icon_str;
            this.icon_attack = icon_attack;
            this.view2d_.addChild(icon_attack);
            if (GameManager.instance.gameModel == GameModel.Adventure) {
                icon_attack.visible = false;
            }
            icon_attack.centerX = 0;
        };
        CatPlayer.prototype.onModelChange = function () {
            if (this.objInfo_.type == GameConstant.Enemy)
                return;
            if (this.isDead)
                return;
            if (this.localAniName == PlayerAniName.daiji && GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                this.preShoot();
            }
        };
        CatPlayer.prototype.onSelectedClick = function () {
            var _this = this;
            console.log('ontestClick>>>>>>>>>>>>>>>cat');
            if (this.objInfo_.playerId + '' == "120901") {
                return;
            }
            var oldTime = new Date().getTime();
            this.parent.once(Laya.Event.MOUSE_UP, this, function () {
                var newTime = new Date().getTime();
                var isLongClick = false;
                if (newTime - oldTime > 500) {
                    isLongClick = true;
                }
                EventMgr.getInstance().sendEvent(GameConst.ClickShipOrCat, { uid: _this.objInfo_.uid, isLongClick: isLongClick });
            });
        };
        CatPlayer.prototype.initCol = function (box_col) {
            this.box_col = box_col;
            if (box_col == null)
                return;
            if (this.objInfo_.isShow) {
                this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick);
                return;
            }
            this.box_col.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.box_col.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            if (this.objInfo_.type == GameConstant.Enemy)
                return;
            this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        };
        CatPlayer.prototype.onTriggerExit = function (other, self, contact) {
        };
        CatPlayer.prototype.onTriggerEnter = function (other, self, contact) {
            console.log("catplayer>>>>>>>>>>");
            if (this.isDead)
                return;
            var otherOwner = other.owner;
            if (otherOwner instanceof BaseBullet) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                var bowner = otherOwner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                    if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {
                        this.bulletDestory(otherOwner);
                    }
                }
                else {
                    if (this.objInfo_.type == GameConstant.Enemy) {
                        GameManager.instance.dropGold(otherOwner.x, otherOwner.y);
                    }
                    this.bulletDestory(otherOwner);
                }
            }
            else if (otherOwner instanceof PigPlayer) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                if (otherOwner.objInfo_.type == this.objInfo_.type) {
                }
                else {
                    if (otherOwner.isDead)
                        return;
                    var deleteBlood = otherOwner.objInfo_.attack;
                    this.deleteBlood(deleteBlood);
                    otherOwner.destroy();
                }
            }
        };
        CatPlayer.prototype.bulletDestory = function (owner) {
            if (!owner.isActive)
                return;
            if (this.localAniName == PlayerAniName.ru)
                return;
            owner.rigidBody.setVelocity({ x: 0, y: 0 });
            owner.rigidBody.gravityScale = 0;
            var deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner, attackType: this.objInfo_.attackType });
            this.deleteBlood(deleteBlood);
            owner.destroy();
        };
        CatPlayer.prototype.relive = function () {
            var player = this;
            player.objInfo_.curBlood = player.objInfo_.blood;
            player.bloodView.updateBlood({ cur: player.objInfo_.curBlood, total: player.objInfo_.blood });
            this.isDead = false;
            this.bloodView.visible = true;
            this.preShoot();
        };
        CatPlayer.prototype.deleteBlood = function (deleteBlood) {
            ShockUtils.geyInstance().start(1);
            this.objInfo_.curBlood -= deleteBlood;
            this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            console.log('curBlood>>>>>>>cat', this.objInfo_.curBlood);
            if (this.objInfo_.curBlood <= 0) {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
                this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
                if (this.isMoveing) {
                    GameManager.instance.lineBox.removeChildren();
                }
                this.isDead = true;
                this.bloodView.visible = false;
                Laya.timer.clearAll(this);
                this.playerAni(PlayerAniName.ru, function () {
                }, false);
            }
        };
        CatPlayer.prototype.startAiGame = function () {
            this.icon_attack.visible = false;
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startAiGame);
            if (this.objInfo_.type == GameConstant.Enemy) {
                this.autoAttack();
            }
        };
        CatPlayer.prototype.onMouseDown = function (evt) {
            if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO)
                return;
            MiniManeger.instance.vibrateShort({});
            this.isMoveing = true;
            this.startPoint.x = evt.stageX;
            this.startPoint.y = evt.stageY;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.initBulletLoa();
        };
        CatPlayer.prototype.onMouseMove = function (evt) {
            var roa = Utils.getAngleTwoPoint({ x: evt.stageX, y: evt.stageY }, { x: this.startPoint.x, y: this.startPoint.y });
            if (roa > 60 && roa < 300) {
                return;
            }
            this.endPoint.x = evt.stageX;
            this.endPoint.y = evt.stageY;
            this.turnRoation(roa);
            var data = this.calcuteVel();
            GameManager.instance.getRunLineByVel({ x: data.velX, y: data.velY, gravityScale: data.gravityScale }, { x: this.objInfo_.x, y: this.objInfo_.y }, 8);
        };
        CatPlayer.prototype.initBulletLoa = function () {
            var point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage);
            this.objInfo_.x = point.x;
            this.objInfo_.y = point.y;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                this.objInfo_.y = point.y;
            }
        };
        CatPlayer.prototype.onMouseUp = function (evt) {
            var _this = this;
            this.isMoveing = false;
            GameManager.instance.lineBox.removeChildren();
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.playerAttack();
            Laya.timer.once(100, this, function () {
                _this.turnRoation(0);
            });
            Laya.timer.once(300, this, this.shootOver);
            this.startPoint.x = 0;
            this.startPoint.y = 0;
            EventMgr.getInstance().sendEvent(GameConst.PlayerTouchScene);
        };
        CatPlayer.prototype.calcuteVel = function () {
            var disx = (this.endPoint.x - this.startPoint.x);
            var disy = (this.endPoint.y - this.startPoint.y);
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                disx = (this.endPoint.x - this.startPoint.x);
                disy = (this.startPoint.y - this.endPoint.y);
            }
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            var velX = Number(bulletConfig.velx);
            var vel = Utils.getRunDirection({ x: this.endPoint.x, y: this.endPoint.y }, { x: this.startPoint.x, y: this.startPoint.y }, Math.abs(velX));
            velX = vel[0];
            var velY = vel[1];
            var flag = 1;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                flag = -1;
            }
            velY = velY;
            var gravityScale = flag * Number(bulletConfig.gravityScale);
            return { velY: velY, velX: velX, gravityScale: gravityScale, bulletConfig: bulletConfig };
        };
        CatPlayer.prototype.playerAttack = function () {
            var bulletInfo = new BulletInfo();
            var data = this.calcuteVel();
            var bulletConfig = data.bulletConfig;
            bulletInfo = this.initBulletInfo(bulletInfo);
            bulletInfo.bid = parseInt(bulletConfig.id);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.velx = data.velX;
            var flag = 1;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                flag = -1;
            }
            bulletInfo.vely = data.velY;
            bulletInfo.gravityScale = data.gravityScale;
            this.shootBullet(bulletInfo);
        };
        CatPlayer.prototype.turnRoation = function (roa) {
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                roa = 360 - roa;
            }
            var bonenameArr = this.playerInfo.bonenameArr;
            var baseRoA = this.playerInfo.baseRoA;
            var arr = bonenameArr.split('|');
            var arrRao = baseRoA.split('|');
            for (var i = 0, len = arr.length; i < len; i++) {
                var bone = this.ani_player.templet.mRootBone.findBone(arr[i]);
                if (bone == null)
                    continue;
                bone.transform.skX = roa + parseInt(arrRao[i]);
                bone.resultTransform.skX = roa + parseInt(arrRao[i]);
            }
            this.ani_player._createGraphics();
            if (arr.length > 0) {
                var arr1 = [0, 0];
                var boneName = arr[0];
                var boneSlot = this.ani_player.getSlotByName(boneName);
                if (boneSlot == null)
                    return;
                var width = boneSlot.currDisplayData.width * 0.62;
                var radian = Utils.getRadian(roa);
                var ys = width * Math.sin(radian);
                var xs = width * Math.cos(radian);
                arr1[0] = xs;
                arr1[1] = ys;
                var point = Laya.Point.create();
                point = this.ani_player.localToGlobal(point, false, Laya.stage);
                this.objInfo_.x = point.x + arr1[0];
                this.objInfo_.y = point.y + arr1[1];
                if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                    this.objInfo_.y = point.y + arr1[1];
                }
            }
        };
        CatPlayer.prototype.onRecovery = function () {
            Laya.timer.clearAll(this);
            if (this.box_col) {
                this.box_col.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
                this.box_col.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            }
            if (this.ani_player) {
                this.ani_player.stop();
                this.ani_player.player.off(Laya.Event.STOPPED, this, this.onComplete);
            }
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startAiGame);
            EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
            if (this.objInfo_.type == GameConstant.Player) {
                EventMgr.getInstance().removeEvent(GameConst.ModelChange, this, this.onModelChange);
            }
            _super.prototype.onRecovery.call(this);
        };
        CatPlayer.prototype.removeSelf = function () {
            if (this.parent) {
                this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            }
            if (this.objInfo_.isShow && this.parent) {
                this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick);
            }
            return _super.prototype.removeSelf.call(this);
        };
        CatPlayer.prototype.gamePause = function () {
            this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.timer.clearAll(this);
        };
        CatPlayer.prototype.gameResume = function () {
            this.preShoot();
        };
        CatPlayer.prototype.preShoot = function () {
            var _this = this;
            var ani = PlayerAniName.chu1;
            if (this.objInfo_.loa == CatLocaction.UNDER_WATER) {
                ani = PlayerAniName.chu2;
            }
            if (this.isDead)
                return;
            this.playerAni(ani, function (index) {
                if (_this.objInfo_.type == GameConstant.Enemy || GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                    _this.autoAttack();
                }
                else {
                    _this.ani_player.player.playbackRate = 5;
                    _this.playerAni(PlayerAniName.daiji, function () {
                        _this.ani_player.player.playbackRate = 1;
                        if (_this.parent && !_this.parent.hasListener(Laya.Event.MOUSE_DOWN)) {
                            _this.parent.on(Laya.Event.MOUSE_DOWN, _this, _this.onMouseDown);
                        }
                    });
                }
            });
        };
        CatPlayer.prototype.shootOver = function () {
            var _this = this;
            this.ani_player.player.playbackRate = 1.5;
            this.playerAni(PlayerAniName.ru, function (index) {
                _this.ani_player.player.playbackRate = 1;
                var times = 1000;
                Laya.timer.once(times, _this, _this.preShoot);
            });
        };
        CatPlayer.prototype.onUserBooster = function (data) {
            if (data.type != this.objInfo_.type)
                return;
            var boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data];
            if (boosterConfig == null)
                return;
            switch (boosterConfig.type) {
                case "1":
                    this.nextAttackChangeThree = 1;
                    break;
                case "2":
                    this.nextAttackCanPt = 1;
                    break;
                case "3":
                    break;
                case "4":
                    break;
                case "5":
                    break;
                case "6":
                    this.nextAttackCanMakeEnemyStop = 1;
                    break;
                case "99":
                    break;
            }
        };
        return CatPlayer;
    }(Player));

    var BoosterPlayer = (function (_super) {
        __extends(BoosterPlayer, _super);
        function BoosterPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "BoosterPlayer";
            _this.isUseing = false;
            _this.isDead = false;
            return _this;
        }
        BoosterPlayer.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, false);
            data.classType = BaseInfoType.Booster;
            this.isDead = false;
            this.objInfo_ = data;
            if (this.view2d_ == null) {
                this.view2d_ = new Laya.Box();
            }
            this.isUseing = false;
            this.addChild(this.view2d_);
            this.initView();
        };
        BoosterPlayer.prototype.initView = function () {
            var boosterConfig = ConfigManager.getInstance().boosterConfigs[this.objInfo_.boosterId];
            this.objInfo_.boosterConfig = boosterConfig;
            var iconArr = boosterConfig.icon.split("|");
            this.visible = true;
            var icon_booster = new Laya.Image();
            icon_booster.size(81.6, 153.6);
            this.view2d_.size(81.6, 153.6);
            this.view2d_.anchorX = 0.5;
            this.view2d_.anchorY = 0.5;
            icon_booster.skin = 'resource/assets/img/game/booster/' + iconArr[0] + '.png';
            this.view2d_.addChild(icon_booster);
            var icon_mask = new Laya.Sprite();
            icon_mask.size(50, 50);
            icon_mask.pos(13, 87);
            var rect = new Laya.Rectangle(0, 0, 50, 50);
            icon_mask.scrollRect = rect;
            icon_booster.addChild(icon_mask);
            var icon_cd = new Laya.Image();
            icon_cd.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
            icon_cd.size(50, 50);
            icon_cd.pos(0, 0);
            icon_cd.name = 'cd';
            this.icon_cd = icon_cd;
            icon_mask.addChild(icon_cd);
            this.bloodView = new PlayerBlood({ cur: this.objInfo_.blood, total: this.objInfo_.blood });
            this.bloodView.y = 0;
            this.view2d_.addChild(this.bloodView);
            if (this.objInfo_.isShow)
                return;
            if (this.objInfo_.type == GameConstant.Enemy) {
                EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.useBooster);
            }
            else {
                if (GameManager.instance.gameAttackModel != GameAttackModel.AUTO && this.view2d_) {
                    EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.startGame);
                }
                EventMgr.getInstance().addEvent(GameConst.ModelChange, this, this.onModelChange);
            }
        };
        BoosterPlayer.prototype.startGame = function () {
            this.view2d_.once(Laya.Event.CLICK, this, this.onClick);
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
        };
        BoosterPlayer.prototype.onModelChange = function () {
            if (this.isDead)
                return;
            if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                this.useBooster();
            }
            else {
                if (this.view2d_ && !this.view2d_.hasListener(Laya.Event.MOUSE_DOWN)) {
                    this.view2d_.once(Laya.Event.CLICK, this, this.onClick);
                }
            }
        };
        BoosterPlayer.prototype.startCD = function () {
            var _this = this;
            var icon_cd = this.icon_cd;
            icon_cd.x = -50;
            Laya.Tween.to(icon_cd, { x: 0 }, Number(this.objInfo_.skillCD), null, Laya.Handler.create(this, function () {
                if (_this.objInfo_.type == GameConstant.Player && GameManager.instance.gameAttackModel != GameAttackModel.AUTO) {
                    _this.view2d_.once(Laya.Event.CLICK, _this, _this.onClick);
                    _this.isUseing = false;
                }
                else {
                    _this.isUseing = false;
                    _this.useBooster();
                }
            }));
        };
        BoosterPlayer.prototype.useBooster = function () {
            console.log("useBooster>>>>>>>>>>>>>>", this.objInfo_.id, this.isUseing);
            if (this.isUseing)
                return;
            this.isUseing = true;
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            if (this.objInfo_.type == GameConstant.Player) {
                TaskManager.instance.updateTask(TaskEnum.TASK_2004, 1);
            }
            this.startCD();
            this.playGameEffect(SoundConst.BoosterActive);
            EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: this.objInfo_.boosterId, type: this.objInfo_.type });
        };
        BoosterPlayer.prototype.onClick = function () {
            this.useBooster();
        };
        BoosterPlayer.prototype.relive = function () {
            var player = this;
            player.objInfo_.curBlood = player.objInfo_.blood;
            player.bloodView.updateBlood({ cur: player.objInfo_.curBlood, total: player.objInfo_.blood });
            this.isDead = false;
            this.bloodView.visible = true;
            this.isUseing = false;
            this.view2d_.off(Laya.Event.CLICK, this, this.onClick);
            this.useBooster();
        };
        BoosterPlayer.prototype.onRecovery = function () {
            if (this.isRecovery)
                return;
            this.view2d_.off(Laya.Event.CLICK, this, this.onClick);
            if (this.box_col) {
                this.box_col.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
                this.box_col.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            }
            if (this.objInfo_.type == GameConstant.Enemy) {
                EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.useBooster);
            }
            else {
                EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.startGame);
                EventMgr.getInstance().removeEvent(GameConst.ModelChange, this, this.onModelChange);
            }
            Laya.Tween.clearAll(this.icon_cd);
            _super.prototype.onRecovery.call(this);
            if (this.objInfo_.isShow && this.parent) {
                this.parent.off(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick);
                return;
            }
        };
        BoosterPlayer.prototype.onSelectedClick = function () {
            var _this = this;
            console.log('ontestClick>>>>>>>>>>>>>>>booster');
            var oldTime = new Date().getTime();
            this.parent.once(Laya.Event.MOUSE_UP, this, function () {
                var newTime = new Date().getTime();
                var isLongClick = false;
                if (newTime - oldTime > 500) {
                    isLongClick = true;
                }
                EventMgr.getInstance().sendEvent(GameConst.ClickShipOrCat, { uid: _this.objInfo_.uid, isLongClick: isLongClick });
            });
        };
        BoosterPlayer.prototype.initCol = function (box_col) {
            this.box_col = box_col;
            if (box_col == null)
                return;
            if (this.objInfo_.isShow) {
                this.parent.on(Laya.Event.MOUSE_DOWN, this, this.onSelectedClick);
                return;
            }
            this.box_col = box_col;
            this.box_col.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.box_col.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
        };
        BoosterPlayer.prototype.onTriggerExit = function (other, self, contact) {
        };
        BoosterPlayer.prototype.onTriggerEnter = function (other, self, contact) {
            console.log("boosterplayer>>>>>>>>>>");
            if (this.isDead)
                return;
            var otherOwner = other.owner;
            if (otherOwner instanceof BaseBullet) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                var bowner = otherOwner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                    if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {
                        this.bulletDestory(otherOwner);
                    }
                }
                else {
                    if (this.objInfo_.type == GameConstant.Enemy) {
                        GameManager.instance.dropGold(otherOwner.x, otherOwner.y);
                    }
                    this.bulletDestory(otherOwner);
                }
            }
            else if (otherOwner instanceof PigPlayer) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                if (otherOwner.objInfo_.type == this.objInfo_.type) {
                }
                else {
                    if (otherOwner.isDead)
                        return;
                    var deleteBlood = otherOwner.objInfo_.attack;
                    this.deleteBlood(deleteBlood);
                    otherOwner.destroy();
                }
            }
        };
        BoosterPlayer.prototype.bulletDestory = function (owner) {
            if (!owner.isActive)
                return;
            owner.rigidBody.setVelocity({ x: 0, y: 0 });
            owner.rigidBody.gravityScale = 0;
            var deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner });
            this.deleteBlood(deleteBlood);
            owner.destroy();
        };
        BoosterPlayer.prototype.deleteBlood = function (deleteBlood) {
            this.objInfo_.curBlood -= deleteBlood;
            console.log('curBlood>>>>>>>booster', this.objInfo_.curBlood);
            this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            if (this.objInfo_.curBlood <= 0) {
                this.isDead = true;
                this.bloodView.visible = false;
                this.visible = false;
                this.view2d_.off(Laya.Event.MOUSE_DOWN, this, this.onClick);
                Laya.timer.clearAll(this);
            }
        };
        BoosterPlayer.prototype.updateBlood = function (updateBlood) {
            return __awaiter(this, void 0, void 0, function () {
                var txt_blood, point;
                return __generator(this, function (_a) {
                    this.objInfo_.curBlood += Math.floor(updateBlood);
                    if (this.objInfo_.curBlood > this.objInfo_.blood) {
                        this.objInfo_.curBlood = this.objInfo_.blood;
                    }
                    this.bloodView && this.bloodView.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
                    txt_blood = new Laya.Label();
                    txt_blood.text = '+' + Math.floor(updateBlood) + '';
                    txt_blood.color = '#4ab600';
                    txt_blood.y = -10;
                    txt_blood.fontSize = 60;
                    txt_blood.bold = true;
                    txt_blood.alpha = 1;
                    point = Laya.Point.create();
                    point.x = 0;
                    point.y = 0;
                    point = this.view2d_.localToGlobal(point);
                    txt_blood.x = point.x;
                    txt_blood.y = point.y;
                    Laya.Tween.to(txt_blood, { y: point.y - 200, alpha: 0.2 }, 2000, null, Laya.Handler.create(txt_blood, function () {
                        txt_blood.removeSelf();
                    }));
                    GameManager.instance.box_gameScene_game.addChild(txt_blood);
                    return [2];
                });
            });
        };
        BoosterPlayer.prototype.removeSelf = function () {
            ObjectPool.instance.recoveryObj(this);
            this.view2d_.removeSelf();
            this.view2d_.removeChildren();
            return _super.prototype.removeSelf.call(this);
        };
        return BoosterPlayer;
    }(GameObj));
    var BoosterInfo = (function (_super) {
        __extends(BoosterInfo, _super);
        function BoosterInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.classType = BaseInfoType.Cat;
            return _this;
        }
        return BoosterInfo;
    }(GameObjInfo));

    var ShipShield = (function (_super) {
        __extends(ShipShield, _super);
        function ShipShield() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "ShipShield";
            return _this;
        }
        ShipShield.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, false);
            if (this.view2d_ == null) {
                this.view2d_ = new Laya.Box();
                this.view2d_.autoSize = true;
                this.view2d_.anchorX = 0.5;
                this.view2d_.anchorY = 0.5;
            }
            this.createShipShield();
            this.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            Laya.timer.once(this.objInfo_.lastTime, this, this.destroy);
            var img = Laya.Pool.getItemByClass('ship_shield', Laya.Image);
            img.skin = 'resource/assets/img/game/ship_shield.png';
            img.size(data.width, data.width);
            this.view2d_.addChild(img);
        };
        ShipShield.prototype.createShipShield = function () {
            var rigidBody = this.addComponent(Laya.RigidBody);
            rigidBody.type = Physic.STATIC;
            rigidBody.label = GameConstant.Shield;
            var circleCollider = this.addComponent(Laya.CircleCollider);
            circleCollider.radius = this.width / 2;
            circleCollider.label = GameConstant.Shield;
            circleCollider.y = this.width / 4;
            this.collider = circleCollider;
            this.rigidBody = rigidBody;
        };
        ShipShield.prototype.onTriggerExit = function (other, self, contact) {
        };
        ShipShield.prototype.onTriggerEnter = function (other, self, contact) {
            var owner = other.owner;
            if (owner instanceof BaseBullet) {
                var bowner = owner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                }
                else {
                    if (!owner.isActive)
                        return;
                    if (owner.objInfo_.isAttackCanPt)
                        return;
                    owner.destroy();
                }
            }
        };
        ShipShield.prototype.destroy = function () {
            ObjectPool.instance.recoveryObj(this);
        };
        ShipShield.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
            this.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            this.view2d_.removeChildren();
            this.view2d_.removeSelf();
            this._destroyComponent(this.collider);
            Laya.timer.clearAll(this);
            _super.prototype.onRecovery.call(this);
        };
        return ShipShield;
    }(GameObj));
    var ShiledInfo = (function (_super) {
        __extends(ShiledInfo, _super);
        function ShiledInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ShiledInfo;
    }(GameObjInfo));

    var ShipBlood = (function (_super) {
        __extends(ShipBlood, _super);
        function ShipBlood(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "ShipBlood";
            _this.skin = 'game/blood/ShipBlood.json';
            return _this;
        }
        ShipBlood.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
            }
        };
        ShipBlood.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var boomAnimation;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.createSkeleton("resource/assets/img/ani/ship/flag.sk")];
                        case 1:
                            boomAnimation = _a.sent();
                            boomAnimation.x = boomAnimation.width / 2;
                            boomAnimation.y = boomAnimation.height;
                            this.flag = boomAnimation;
                            this.box_flag.addChild(this.flag);
                            BitmapLabelUtils.setLabel(this.txt_blood, this.viewData_.cur + '', "resource/assets/img/game/sz/", 0);
                            return [2];
                    }
                });
            });
        };
        ShipBlood.prototype.updateBlood = function (data) {
            if (data.cur <= 0) {
                data.cur = 0;
            }
            BitmapLabelUtils.setLabel(this.txt_blood, data.cur + '', "resource/assets/img/game/sz/", 0);
        };
        ShipBlood.prototype.createSkeleton = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            if (url == null) {
                                url = "resource/assets/img/ani/cat/cat1.sk";
                            }
                            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                if (boomAnimation == null)
                                    resolve(boomAnimation);
                                boomAnimation.player.playbackRate = 1;
                                boomAnimation.scale(1, 1);
                                boomAnimation.autoSize = true;
                                console.log("aniNum =", boomAnimation.getAnimNum(), boomAnimation.width, boomAnimation.height);
                                resolve(boomAnimation);
                            }, 1);
                        })];
                });
            });
        };
        return ShipBlood;
    }(BaseSceneUISkin));

    var ShiledBooster = (function (_super) {
        __extends(ShiledBooster, _super);
        function ShiledBooster() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "ShiledBooster";
            _this.isUseing = false;
            return _this;
        }
        ShiledBooster.prototype.onCreate = function (data) {
            _super.prototype.onCreate.call(this, data, false);
            this.x = data.width / 2;
            this.y = data.height / 2;
            data.classType = BaseInfoType.Booster;
            this.objInfo_ = data;
            if (this.view2d_ == null) {
                this.view2d_ = new Laya.Box();
            }
            this.isUseing = false;
            this.addChild(this.view2d_);
            this.initView();
            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        };
        ShiledBooster.prototype.onPlayerTouchScene = function () {
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
            this.useBooster();
        };
        ShiledBooster.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
        };
        ShiledBooster.prototype.initView = function () {
            var boosterConfig = ConfigManager.getInstance().boosterConfigs[this.objInfo_.boosterId];
            this.objInfo_.boosterConfig = boosterConfig;
            var iconArr = boosterConfig.icon.split("|");
            var icon_mask = new Laya.Sprite();
            icon_mask.size(50, 50);
            icon_mask.pos(13, 87);
            var rect = new Laya.Rectangle(0, 0, 50, 50);
            icon_mask.scrollRect = rect;
            this.view2d_.addChild(icon_mask);
            var icon_cd = new Laya.Image();
            icon_cd.skin = 'resource/assets/img/game/booster/' + iconArr[1] + '.png';
            icon_cd.size(50, 50);
            icon_cd.pos(0, 0);
            icon_cd.name = 'cd';
            this.icon_cd = icon_cd;
            icon_mask.addChild(icon_cd);
        };
        ShiledBooster.prototype.startCD = function () {
            var _this = this;
            var icon_cd = this.icon_cd;
            icon_cd.x = -50;
            Laya.Tween.to(icon_cd, { x: 0 }, Number(this.objInfo_.skillCD), null, Laya.Handler.create(this, function () {
                _this.isUseing = false;
                _this.useBooster();
            }));
        };
        ShiledBooster.prototype.useBooster = function () {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            console.log("useBooster>>>>>>>>>>>>>>", this.objInfo_.id, this.isUseing);
            if (this.isUseing)
                return;
            this.isUseing = true;
            this.startCD();
            EventMgr.getInstance().sendEvent(GameConst.UseBooster, { data: this.objInfo_.boosterId, type: this.objInfo_.type });
        };
        ShiledBooster.prototype.removeSelf = function () {
            Laya.Tween.clearAll(this.icon_cd);
            ObjectPool.instance.recoveryObj(this);
            this.view2d_.removeSelf();
            this.view2d_.removeChildren();
            return _super.prototype.removeSelf.call(this);
        };
        return ShiledBooster;
    }(GameObj));

    var PopReliveView = (function (_super) {
        __extends(PopReliveView, _super);
        function PopReliveView(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "PopReliveView";
            _this.viewData_ = data;
            _this.skin = "home/relive/PopRelive.json";
            return _this;
        }
        PopReliveView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_relive.addComponent(CustomScaleComponent);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        PopReliveView.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        PopReliveView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PopReliveView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_relive.on(Laya.Event.CLICK, this, this.onRelieve);
        };
        PopReliveView.prototype.onRelieve = function () {
            this.playVideo();
        };
        PopReliveView.prototype.playVideo = function () {
            var self = this;
            var viewData_ = this.viewData_;
            MiniManeger.instance.playViderAd({
                successFun: function () {
                    viewData_.successFun && viewData_.successFun();
                    self.removeSelf();
                },
                failFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        PopReliveView.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var phone, offset;
                return __generator(this, function (_a) {
                    Laya.physicsTimer.pause();
                    Laya.timer.pause();
                    SoundManager.getInstance().playEffect(SoundConst.OpenPop);
                    if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                        phone = MiniManeger.instance.systemInfo;
                        offset = { w: phone.screenWidth / 2, h: phone.screenHeight };
                        MiniManeger.instance.showBannerAd(offset);
                    }
                    return [2];
                });
            });
        };
        PopReliveView.prototype.onClose = function () {
            this.viewData_.failFun && this.viewData_.failFun();
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        PopReliveView.prototype.removeSelf = function () {
            Laya.timer.resume();
            Laya.physicsTimer.resume();
            return _super.prototype.removeSelf.call(this);
        };
        PopReliveView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_relive.off(Laya.Event.CLICK, this, this.onRelieve);
        };
        PopReliveView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this.moreGameItem) {
                this.moreGameItem.removeSelf();
                this.moreGameItem = null;
            }
            if (this.moreGameItem1) {
                this.moreGameItem1.removeSelf();
                this.moreGameItem1 = null;
            }
            MiniManeger.instance.hideBanner();
        };
        return PopReliveView;
    }(BaseSceneUISkinPopView));

    var BaseShipUi = (function (_super) {
        __extends(BaseShipUi, _super);
        function BaseShipUi() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'BaseShipUi';
            _this.shipPlayerObj = {};
            _this.enemyBoxPosArr = [
                {
                    x: 284, y: 27
                },
                {
                    x: 440, y: 27
                },
                {
                    x: 123, y: 27
                },
                {
                    x: 286, y: 235
                },
                {
                    x: 123, y: 235
                },
            ];
            _this.isDead = false;
            _this.reliveTimes = 1;
            return _this;
        }
        BaseShipUi.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        BaseShipUi.prototype.adaptationStage = function () {
        };
        BaseShipUi.prototype.init = function (data) {
            this.objInfo_ = data;
        };
        BaseShipUi.prototype.onAddStage = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.isCreate) {
                        this.pivotX = this.width / 2;
                        this.pivotY = this.height / 2;
                        if (!this.objInfo_.isShow) {
                            this.addEvent();
                        }
                        this.initView();
                    }
                    return [2];
                });
            });
        };
        BaseShipUi.prototype.createPlayer = function (box_player, uid, index) {
            if (box_player == null)
                return;
            var prop = GameData.getInstance().prop;
            if (this.objInfo_.type == GameConstant.Enemy) {
                prop = GameData.getInstance().otherprop;
            }
            if (uid == -1) {
                box_player.getChildByName('solt').visible = true;
                return;
            }
            var baseGameInfo = GameManager.instance.getBaseInfoByUidNoType(uid, prop);
            if (baseGameInfo == null) {
                box_player.getChildByName('solt').visible = false;
                return;
            }
            if (baseGameInfo.type == BaseInfoType.Cat) {
                this.createCatPlayer(box_player, baseGameInfo, index);
            }
            else if (baseGameInfo.type == BaseInfoType.Booster) {
                this.createBoosterPlayer(box_player, baseGameInfo, index);
            }
        };
        BaseShipUi.prototype.createBoosterPlayer = function (box_player, boosterGameInfo, index) {
            var playerData = new BoosterInfo();
            playerData.isShow = this.objInfo_.isShow;
            playerData.type = this.objInfo_.type;
            playerData.id = Laya.Utils.getGID();
            playerData.width = 81.6;
            playerData.height = 153.6;
            playerData.star = boosterGameInfo.star;
            var blood = Math.floor(boosterGameInfo.growthHp * boosterGameInfo.level + boosterGameInfo.initialHp);
            playerData.curBlood = blood;
            playerData.blood = blood;
            playerData.boosterId = boosterGameInfo.id;
            playerData.skillCD = boosterGameInfo.skillCD;
            playerData.uid = boosterGameInfo.uid;
            var boosterPlayer = ObjectPool.instance.createObjectByName(BoosterPlayer, playerData);
            boosterPlayer.name = 'player';
            box_player.addChildAt(boosterPlayer, 0);
            boosterPlayer.x = boosterPlayer.width;
            boosterPlayer.y = boosterPlayer.height / 2;
            boosterPlayer.initCol(this['box_col' + index]);
            this.shipPlayerObj[playerData.id] = boosterPlayer;
        };
        BaseShipUi.prototype.createCatPlayer = function (box_player, catInfo, index) {
            var playerData = new PlayerGameInfo();
            playerData.uid = catInfo.uid;
            playerData.isShow = this.objInfo_.isShow;
            playerData.type = this.objInfo_.type;
            playerData.id = Laya.Utils.getGID();
            playerData.width = 100;
            playerData.height = 150;
            playerData.star = catInfo.star;
            var blood = catInfo.growthHp * catInfo.level + catInfo.initialHp;
            var attack = catInfo.initialAtt + catInfo.growthAtt * catInfo.level;
            var critPercent = catInfo.growthCrit * catInfo.level + catInfo.initialCrit;
            if (!catInfo.isNormal) {
                blood *= 1.05;
            }
            if (catInfo.id + '' == 120901 + '' && this.objInfo_.type == GameConstant.Player) {
                var data = GameManager.instance.getCaptainInfoByPlayerLevel();
                critPercent = data.critPercent;
                blood = data.blood;
                attack = data.attack;
                if (GameData.getInstance().isTestVersion) {
                    blood = 10000;
                    attack = 10000;
                }
            }
            playerData.critPercent = critPercent;
            playerData.curBlood = blood;
            playerData.blood = blood;
            playerData.crit = 1.5;
            playerData.attack = attack;
            playerData.playerId = catInfo.id;
            if (box_player.name.indexOf("under") > -1) {
                playerData.loa = CatLocaction.UNDER_WATER;
            }
            else if (box_player.name.indexOf("up") > -1) {
                playerData.loa = CatLocaction.UP_WATER;
            }
            else {
                playerData.loa = CatLocaction.MAIN;
            }
            var player = ObjectPool.instance.createObjectByName(CatPlayer, playerData);
            player.name = 'player';
            box_player.addChildAt(player, 0);
            player.x = player.width / 2;
            player.initCol(this['box_col' + index]);
            this.shipPlayerObj[playerData.id] = player;
        };
        BaseShipUi.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        BaseShipUi.prototype.playerWin = function () {
            var catPlayerObj = this.shipPlayerObj;
            for (var id in catPlayerObj) {
                var player = catPlayerObj[id];
                if (player instanceof CatPlayer) {
                    player.playerWin();
                }
            }
        };
        BaseShipUi.prototype.removeAllPlayer = function () {
            var catPlayerObj = this.shipPlayerObj;
            for (var id in catPlayerObj) {
                var player = catPlayerObj[id];
                player.removeSelf();
                delete catPlayerObj[id];
            }
        };
        BaseShipUi.prototype.initView = function () {
            this.box1.mouseThrough = true;
            this.icon_ship.mouseEnabled = false;
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            if (this.objInfo_.type == GameConstant.Enemy) {
                this.box_ui.scaleX = -1;
                for (var i = 0; i < 5; i++) {
                    this['box_col' + (i + 1)].x = this.enemyBoxPosArr[i].x;
                    this['box_col' + (i + 1)].y = this.enemyBoxPosArr[i].y;
                }
            }
            else {
                this.box_ui.scaleX = 1;
            }
            this.initUmbrell();
            this.setShipAni();
            this.shipBlood = new ShipBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            this.shipBlood.x = -200;
            this.box_blood.addChild(this.shipBlood);
            this.box_blood.mouseThrough = true;
            if (this.objInfo_.isShow) {
                this.box_detail.on(Laya.Event.CLICK, this, this.onSelectedClick);
                this.showSlot();
                return;
            }
        };
        BaseShipUi.prototype.showSlot = function () {
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(GameData.getInstance().localUserShipInfo.ship.uid, BaseInfoType.Ship);
            var arr = shiInfo.slotArr;
            for (var i = 0, len = arr.length; i < len; i++) {
                var box_player = this['box_player' + arr[i]];
                box_player.getChildByName('solt').visible = true;
            }
        };
        BaseShipUi.prototype.onSelectedClick = function () {
            console.log('ontestClick>>>>>>>>>>>>>>>ship');
            EventMgr.getInstance().sendEvent(GameConst.ClickShipOrCat, { uid: this.objInfo_.uid, isLongClick: false });
        };
        BaseShipUi.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    var boxPlayer = playerConfig['box_player' + i];
                    this.createPlayer(this['box_player' + i], boxPlayer, i);
                }
            }
            var boosterId = null;
            if (this.objInfo_.type == GameConstant.Player) {
                boosterId = this.objInfo_.shieldId;
            }
            else if (this.objInfo_.type == GameConstant.Enemy) {
                boosterId = this.objInfo_.booster;
            }
            if (boosterId == null || boosterId == 0) {
                this.icon_booster.visible = false;
            }
            else {
                this.icon_booster.visible = true;
                var boosterInfo = new BoosterInfo();
                boosterInfo.id = Laya.Utils.getGID();
                boosterInfo.boosterId = boosterId;
                boosterInfo.skillCD = 7000;
                boosterInfo.type = this.objInfo_.type;
                this.icon_booster.size(81.6, 153.6);
                boosterInfo.width = 81.6;
                boosterInfo.height = 153.6;
                var shiledBooster = ObjectPool.instance.createObjectByName(ShiledBooster, boosterInfo);
                this.icon_booster.addChild(shiledBooster);
                this.shipPlayerObj[boosterInfo.id] = shiledBooster;
            }
        };
        BaseShipUi.prototype.initUmbrell = function () {
        };
        BaseShipUi.prototype.setShipAni = function () {
            var _this = this;
            Laya.Tween.to(this.box_ship, { rotation: 2 }, 1000, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.box_ship, { rotation: 0 }, 1000, null, Laya.Handler.create(_this, function () {
                    Laya.Tween.to(_this.box_ship, { rotation: -2 }, 1000, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(_this.box_ship, { rotation: 0 }, 1000, null, Laya.Handler.create(_this, function () {
                            _this.setShipAni();
                        }));
                    }));
                }));
            }));
        };
        BaseShipUi.prototype.onTriggerEnter = function (other, self, contact) {
            if (GameManager.instance.gameStatus != GAMESTATUS.PLAYING)
                return;
            if (this.isDead)
                return;
            var otherOwner = other.owner;
            if (otherOwner instanceof BaseBullet) {
                if (this.objInfo_.blood <= 0) {
                    return;
                }
                var bowner = otherOwner.objInfo_.owner;
                if (bowner.objInfo_.type == this.objInfo_.type) {
                    if (other.label.indexOf(GameConstant.MineBoom) > -1 || other.label.indexOf(GameConstant.FlyBoom) > -1) {
                        this.bulletDestory(otherOwner);
                    }
                }
                else {
                    if (this.objInfo_.type == GameConstant.Enemy) {
                    }
                    this.bulletDestory(otherOwner);
                }
            }
            else if (otherOwner instanceof PigPlayer) {
                if (otherOwner) {
                    if (this.objInfo_.type == otherOwner.objInfo_.type) {
                        return;
                    }
                    if (otherOwner.isDead)
                        return;
                    GameManager.instance.createBloodText({ x: otherOwner.x, y: otherOwner.y, showText: Math.floor(otherOwner.objInfo_.attack) + '', isReduction: false });
                    this.deleteShipBlood(otherOwner.objInfo_.attack);
                    otherOwner.playDestoryEffect();
                    otherOwner.destroy();
                }
            }
        };
        BaseShipUi.prototype.bulletDestory = function (owner) {
            if (!owner.isActive)
                return;
            owner.rigidBody.setVelocity({ x: 0, y: 0 });
            owner.rigidBody.gravityScale = 0;
            var deleteBlood = GameManager.instance.calDeleteBlood({ bullet: owner, attackType: this.objInfo_.attackType });
            this.deleteShipBlood(deleteBlood);
            owner.destroy();
        };
        BaseShipUi.prototype.onTriggerExit = function (other, self, contact) {
        };
        BaseShipUi.prototype.deleteShipBlood = function (deleteBlood) {
            ShockUtils.geyInstance().start(1);
            this.objInfo_.curBlood -= deleteBlood;
            this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            console.log('curBlood', this.objInfo_.id, this.objInfo_.curBlood);
            if (this.objInfo_.curBlood <= 0) {
                this.isDead = true;
                this.gameOver();
            }
        };
        BaseShipUi.prototype.gameOver = function () {
            var self = this;
            if (this.objInfo_.type == GameConstant.Player) {
                if (!GameData.getInstance().isConVersion && GameManager.instance.gameModel == GameModel.Adventure && this.reliveTimes > 0) {
                    ViewManager.getInstance().showView(PopReliveView, {
                        successFun: function () {
                            self.showPlayerRelive({ relive: true });
                        }, failFun: function () {
                            self.showPlayerRelive({ relive: false });
                        }
                    });
                    return;
                }
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERDEAD;
            }
            else {
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
            }
            Laya.timer.clearAll(this);
            EventMgr.getInstance().sendEvent(GameConst.GameOver);
            Laya.Tween.to(this, { y: Laya.stage.height + this.height }, 2000);
        };
        BaseShipUi.prototype.showPlayerRelive = function (data) {
            if (data.relive) {
                this.relive();
            }
            else {
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERDEAD;
                Laya.Tween.to(this, { y: Laya.stage.height + this.height }, 2000);
                Laya.timer.clearAll(this);
                EventMgr.getInstance().sendEvent(GameConst.GameOver);
            }
        };
        BaseShipUi.prototype.relive = function () {
            this.reliveTimes--;
            var shipPlayerObj = this.shipPlayerObj;
            for (var id in shipPlayerObj) {
                var player = shipPlayerObj[id];
                player.relive();
            }
            this.objInfo_.curBlood = this.objInfo_.blood;
            this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
            GameManager.instance.gameStatus = GAMESTATUS.PLAYING;
            this.isDead = false;
        };
        BaseShipUi.prototype.dead = function () {
            if (this.objInfo_.blood <= 0) {
            }
        };
        BaseShipUi.prototype.addEvent = function () {
            this.icon_ship.on(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.icon_ship.on(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            EventMgr.getInstance().addEvent(GameConst.GameOver, this, this.onGameOver);
            EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);
            EventMgr.getInstance().addEvent(GameConst.RestartGame, this, this.onRestart);
        };
        BaseShipUi.prototype.onRestart = function () {
            this.removeAllPlayer();
            this.objInfo_.curBlood = this.objInfo_.blood;
            this.initPlayer();
        };
        BaseShipUi.prototype.onUserBooster = function (data) {
            if (data.type != this.objInfo_.type)
                return;
            var boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data];
            if (boosterConfig == null)
                return;
            switch (boosterConfig.type) {
                case "5":
                    this.restoreCurBlood(boosterConfig);
                    break;
                case "99":
                    this.createShipShield(boosterConfig);
                    break;
            }
        };
        BaseShipUi.prototype.createShipShield = function (boosterConfig) {
            var gameObjInfo = new ShiledInfo();
            gameObjInfo.id = Laya.Utils.getGID();
            gameObjInfo.type = this.objInfo_.type;
            gameObjInfo.width = this.width * 1.2;
            gameObjInfo.height = this.height * 1.2;
            gameObjInfo.lastTime = Number(boosterConfig.value);
            var shipShield = ObjectPool.instance.createObjectByName(ShipShield, gameObjInfo);
            GameManager.instance.bodyLayer.addChild(shipShield);
            shipShield.x = this.x;
            shipShield.y = this.y - this.height / 2;
            shipShield.view2d_.x = this.x;
            shipShield.view2d_.y = this.y;
            GameManager.instance.box_game.addChild(shipShield.view2d_);
        };
        BaseShipUi.prototype.restoreCurBlood = function (boosterConfig) {
            var curBloodPer = 1;
            var mid;
            var catPlayerObj = this.shipPlayerObj;
            var percent = 1;
            for (var id in catPlayerObj) {
                var player_1 = catPlayerObj[id];
                if (player_1) {
                    percent = player_1.objInfo_.curBlood / player_1.objInfo_.blood;
                    if (percent <= curBloodPer) {
                        curBloodPer = percent;
                        mid = id;
                    }
                }
            }
            var player = catPlayerObj[mid];
            if (player && player.updateBlood) {
                player.updateBlood(player.objInfo_.blood * Number(boosterConfig.value));
            }
        };
        BaseShipUi.prototype.updateBlood = function (updateBlood) {
            this.objInfo_.curBlood += Math.floor(updateBlood);
            if (this.objInfo_.curBlood > this.objInfo_.blood) {
                this.objInfo_.curBlood = this.objInfo_.blood;
            }
            this.shipBlood.updateBlood({ cur: this.objInfo_.curBlood, total: this.objInfo_.blood });
        };
        BaseShipUi.prototype.onGameOver = function () {
            var _this = this;
            EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
            if (GameManager.instance.gameModel == GameModel.Match) {
                if (this.objInfo_.type == GameConstant.Player) {
                    if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERWIN) {
                        this.playerWin();
                        GameManager.instance.playEffect(SoundConst.Victory);
                        Laya.timer.once(2000, this, function () {
                            GameManager.instance.gameOver({ curBlood: _this.objInfo_.curBlood, blood: _this.objInfo_.blood, isEnemy: false });
                        });
                    }
                    else if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {
                        GameManager.instance.playEffect(SoundConst.PiratesDeath);
                        Laya.timer.once(2000, this, function () {
                            GameManager.instance.gameOver({ curBlood: _this.objInfo_.curBlood, blood: _this.objInfo_.blood, isEnemy: true });
                        });
                    }
                }
                else if (this.objInfo_.type == GameConstant.Enemy) {
                    if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {
                        this.playerWin();
                    }
                }
            }
            else if (GameManager.instance.gameModel == GameModel.Adventure) {
                if (this.objInfo_.type == GameConstant.Player) {
                    if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERWIN) {
                        this.playerWin();
                        GameManager.instance.playEffect(SoundConst.Victory);
                        Laya.timer.once(2000, this, function () {
                            GameManager.instance.gameOver({ curBlood: _this.objInfo_.curBlood, blood: _this.objInfo_.blood, isEnemy: false });
                        });
                    }
                    else if (GameManager.instance.gameStatus == GAMESTATUS.PLAYERDEAD) {
                        GameManager.instance.playEffect(SoundConst.PiratesDeath);
                        Laya.timer.once(2000, this, function () {
                            GameManager.instance.gameOver({ curBlood: _this.objInfo_.curBlood, blood: _this.objInfo_.blood, isEnemy: false });
                        });
                    }
                }
            }
        };
        BaseShipUi.prototype.removeEvent = function () {
            Laya.Tween.clearAll(this.box_ship);
            Laya.timer.clearAll(this);
            EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
            EventMgr.getInstance().removeEvent(GameConst.RestartGame, this, this.onRestart);
            EventMgr.getInstance().removeEvent(GameConst.GameOver, this, this.onGameOver);
            this.icon_ship.off(Laya.Event.TRIGGER_ENTER, this, this.onTriggerEnter);
            this.icon_ship.off(Laya.Event.TRIGGER_EXIT, this, this.onTriggerExit);
            if (this.objInfo_.isShow) {
                this.box_detail.off(Laya.Event.CLICK, this, this.onSelectedClick);
            }
        };
        BaseShipUi.prototype.onRemoved = function () {
            this.removeEvent();
            _super.prototype.onRemoved.call(this);
        };
        BaseShipUi.prototype.removeSelf = function () {
            console.log('removeSelf  ship', this.objInfo_);
            this.removeAllPlayer();
            this.icon_ship._destroyAllComponent();
            this.box_col1._destroyAllComponent();
            this.box_col2._destroyAllComponent();
            this.box_col3._destroyAllComponent();
            this.box_col4._destroyAllComponent();
            this.box_col5._destroyAllComponent();
            return _super.prototype.removeSelf.call(this);
        };
        return BaseShipUi;
    }(BaseSceneUISkin));
    var ShipObjInfo = (function (_super) {
        __extends(ShipObjInfo, _super);
        function ShipObjInfo() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.slotArr = [];
            return _this;
        }
        return ShipObjInfo;
    }(GameObjInfo));

    var NearWaterScene = (function (_super) {
        __extends(NearWaterScene, _super);
        function NearWaterScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "NearWaterScene";
            _this.baseWid = 2500;
            _this.skin = 'game/bg/NearWaterScene.json';
            return _this;
        }
        NearWaterScene.prototype.adaptationStage = function () {
            this.width = Laya.stage.width;
        };
        NearWaterScene.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        NearWaterScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        NearWaterScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        NearWaterScene.prototype.initView = function () {
            this.icon_player.visible = false;
            this.icon_enemy.visible = false;
            GameManager.instance.box_game = this.box_game;
            Laya.timer.frameLoop(1, this, this.onLoop);
            this.wavUpOrDown();
        };
        NearWaterScene.prototype.onLoop = function () {
            this.mwav1.x -= 4;
            this.mwav2.x -= 4;
            if (this.mwav1.x <= -this.baseWid) {
                this.mwav1.x = this.mwav2.x + this.baseWid;
            }
            if (this.mwav2.x <= -this.baseWid) {
                this.mwav2.x = this.mwav1.x + this.baseWid;
            }
        };
        NearWaterScene.prototype.wavUpOrDown = function () {
            var _this = this;
            Laya.Tween.to(this.box_mwav, { y: this.box_mwav.y - 10 }, 1000, null, Laya.Handler.create(this, function () {
                Laya.Tween.to(_this.box_mwav, { y: +10 }, 1000, null, Laya.Handler.create(_this, function () {
                    _this.wavUpOrDown();
                }));
            }));
        };
        NearWaterScene.prototype.addEvent = function () {
        };
        NearWaterScene.prototype.removeEvent = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        NearWaterScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        NearWaterScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return NearWaterScene;
    }(BaseSceneUISkin));

    var Ship110201 = (function (_super) {
        __extends(Ship110201, _super);
        function Ship110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110201";
            _this.enemyBoxPosArr = [
                {
                    x: 188, y: 45
                },
                {
                    x: 327, y: 67
                },
                {
                    x: 88, y: 66
                },
                {
                    x: 120, y: 284
                },
                {
                    x: 251, y: 284
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        Ship110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110201.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2 - 60;
                            umbrella.y = umbrella.height / 2 + 60;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -45;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        Ship110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110201;
    }(BaseShipUi));
    var ShowShip110201 = (function (_super) {
        __extends(ShowShip110201, _super);
        function ShowShip110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110201";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        ShowShip110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2;
                            umbrella.y = umbrella.height / 2;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -35;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        ShowShip110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110201.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110201.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110201;
    }(BaseShipUi));

    var Ship110003 = (function (_super) {
        __extends(Ship110003, _super);
        function Ship110003(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110003";
            _this.enemyBoxPosArr = [
                {
                    x: 284, y: 27
                },
                {
                    x: 440, y: 27
                },
                {
                    x: 123, y: 27
                },
                {
                    x: 286, y: 235
                },
                {
                    x: 123, y: 235
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110003.json';
            return _this;
        }
        Ship110003.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110003.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110003.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/umbrellaA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width - 84;
                            umbrella.y = umbrella.height + 30;
                            this.box1.addChild(umbrella);
                            umbrella.play(PlayerAniName.daiji, true);
                            return [2];
                    }
                });
            });
        };
        Ship110003.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110003;
    }(BaseShipUi));

    var Ship110101 = (function (_super) {
        __extends(Ship110101, _super);
        function Ship110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110101";
            _this.enemyBoxPosArr = [
                {
                    x: 193, y: -12
                },
                {
                    x: 360, y: -17
                },
                {
                    x: 45, y: -16
                },
                {
                    x: 200, y: 184
                },
                {
                    x: 43, y: 184
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        Ship110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110101.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110101;
    }(BaseShipUi));
    var ShowShip110101 = (function (_super) {
        __extends(ShowShip110101, _super);
        function ShowShip110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110101";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        ShowShip110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ShowShip110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110101.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110101.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110101;
    }(BaseShipUi));

    var PigMove = (function (_super) {
        __extends(PigMove, _super);
        function PigMove() {
            return _super.call(this) || this;
        }
        PigMove.prototype.onEnable = function () {
        };
        PigMove.prototype.onDisable = function () {
        };
        PigMove.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
            this.pigPlayer = this.owner;
        };
        PigMove.prototype.onUpdate = function () {
            if (this.pigPlayer) {
                this.pigPlayer.update();
            }
        };
        return PigMove;
    }(Laya.Script));

    var FlyPig = (function (_super) {
        __extends(FlyPig, _super);
        function FlyPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "FlyPig";
            return _this;
        }
        FlyPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.pigMove = this.addComponent(PigMove);
                            this.createBoom();
                            if (this.bloodView) {
                                this.bloodView.y = data.height + 50;
                            }
                            return [2];
                    }
                });
            });
        };
        FlyPig.prototype.createBoom = function () {
            var bulletInfo = new BulletInfo();
            bulletInfo = this.initBulletInfo(bulletInfo);
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.bid = parseInt(bidA[0]);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.showSmoke = false;
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            bulletInfo.velx = 0;
            bulletInfo.vely = 0;
            var bullet = this.createBullet(bulletInfo);
            bullet.baseRotation = 90;
            bullet.x = this.x;
            bullet.y = this.y + this.height / 2;
            bullet.rigidBody.type = Physic.KINEMATIC;
            bullet.isActive = false;
            bullet.collider.label = GameConstant.FlyBoom;
            this.bullet_boom = bullet;
        };
        FlyPig.prototype.init = function () {
        };
        FlyPig.prototype.playerAttack = function (info) {
            var _this = this;
            this.bullet_boom.isActive = true;
            if (this.bullet_boom && this.bullet_boom.rigidBody) {
                this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
                this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                Laya.timer.once(parseInt(info.time + ''), this, function () {
                    Laya.timer.clear(_this, _this.autoAttack);
                    _this.actionIndex++;
                    _this.initActionIndex();
                });
            }
        };
        FlyPig.prototype.update = function () {
            if (this.bullet_boom && !this.bullet_boom.isActive) {
                this.bullet_boom.x = this.x;
                this.bullet_boom.y = this.y + this.height / 2;
            }
        };
        FlyPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.bullet_boom && !this.bullet_boom.isActive) {
                        this.bullet_boom.isActive = true;
                        if (this.bullet_boom.rigidBody) {
                            this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                            this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
                        }
                    }
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        FlyPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.bullet_boom = null;
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return FlyPig;
    }(PigPlayer));

    var MinePig = (function (_super) {
        __extends(MinePig, _super);
        function MinePig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "FlyPig";
            return _this;
        }
        MinePig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.ani_player.y = data.height / 2;
                            this.pigMove = this.addComponent(PigMove);
                            this.createBoom();
                            return [2];
                    }
                });
            });
        };
        MinePig.prototype.init = function () {
        };
        MinePig.prototype.createBoom = function () {
            var bulletInfo = new BulletInfo();
            bulletInfo = this.initBulletInfo(bulletInfo);
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.bid = parseInt(bidA[0]);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.showSmoke = false;
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            bulletInfo.velx = 0;
            bulletInfo.vely = 0;
            var bullet = this.createBullet(bulletInfo);
            bullet.baseRotation = -90;
            bullet.rigidBody.type = Physic.KINEMATIC;
            bullet.isActive = false;
            this.bullet_boom = bullet;
        };
        MinePig.prototype.createBullet = function (bulletInfo) {
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x + bulletInfo.offx;
            baseBullet.y = this.objInfo_.y + bulletInfo.offy;
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            baseBullet.isActive = true;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        MinePig.prototype.update = function () {
            if (this.bullet_boom && !this.bullet_boom.isActive) {
                this.bullet_boom.x = this.x - 5;
                this.bullet_boom.y = this.y - this.height / 2 - 5;
            }
        };
        MinePig.prototype.playerAttack = function (info) {
            var _this = this;
            this.playerAni(PlayerAniName.gongji, function () {
                var bidA = (_this.playerInfo.blt_id + '').split("|");
                var bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
                if (_this.bullet_boom && _this.bullet_boom.rigidBody) {
                    _this.bullet_boom.isActive = true;
                    _this.bullet_boom.rigidBody.gravityScale = _this.bullet_boom.objInfo_.gravityScale;
                    _this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                    _this.bullet_boom.rigidBody.setVelocity({ x: 0, y: -bulletConfig.vely });
                    Laya.timer.once(parseInt(info.time + ''), _this, function () {
                        Laya.timer.clear(_this, _this.autoAttack);
                        _this.actionIndex++;
                        _this.initActionIndex();
                    });
                }
            }, false);
        };
        MinePig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                var bidA, bulletConfig;
                return __generator(this, function (_a) {
                    if (!this.bullet_boom.isActive) {
                        bidA = (this.playerInfo.blt_id + '').split("|");
                        bulletConfig = ConfigManager.getInstance().bulletConfigs[bidA[0]];
                        this.bullet_boom.isActive = true;
                        if (this.bullet_boom.rigidBody) {
                            this.bullet_boom.rigidBody.gravityScale = this.bullet_boom.objInfo_.gravityScale;
                            this.bullet_boom.rigidBody.type = Physic.DYNAMIC;
                            this.bullet_boom.rigidBody.setVelocity({ x: 0, y: -bulletConfig.vely });
                        }
                    }
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        MinePig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.bullet_boom = null;
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return MinePig;
    }(PigPlayer));

    var SeaurchinPig = (function (_super) {
        __extends(SeaurchinPig, _super);
        function SeaurchinPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "SeaurchinPig";
            return _this;
        }
        SeaurchinPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.ani_player.y = data.height / 2;
                            this.pigMove = this.addComponent(PigMove);
                            return [2];
                    }
                });
            });
        };
        SeaurchinPig.prototype.init = function () {
        };
        SeaurchinPig.prototype.autoAttack = function () {
            var _this = this;
            this.isAutoAttack = true;
            this.playerAni(PlayerAniName.gongji, function () {
                _this.initBulletLoa();
                var bidA = (_this.playerInfo.blt_id + '').split("|");
                _this.createBulletInfo(bidA[0], 0);
                _this.createBulletInfo(bidA[0], 0);
                _this.createBulletInfo(bidA[0], 0);
            }, false);
            this.startAttackTime = new Date().getTime();
            Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
        };
        SeaurchinPig.prototype.createBulletInfo = function (bid, index) {
            var bulletInfo = new BulletInfo();
            if (this.playerInfo.offX != null) {
                var offxArr = this.playerInfo.offX.split('|');
                bulletInfo.offx = parseInt(offxArr[index]);
                var offyArr = this.playerInfo.offY.split('|');
                bulletInfo.offy = parseInt(offyArr[index]);
            }
            this.initBulletInfo(bulletInfo);
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bid];
            bulletInfo.bid = parseInt(bid);
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            bulletInfo.velx = parseInt(bulletConfig.velx) + Utils.random(-5, 5);
            bulletInfo.vely = parseInt(bulletConfig.vely) + Utils.random(-5, 5);
            this.createBullet(bulletInfo);
        };
        SeaurchinPig.prototype.createBullet = function (bulletInfo) {
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x + Utils.getRandom(-30, 30);
            baseBullet.y = this.objInfo_.y + Utils.getRandom(-30, 30);
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            baseBullet.isActive = true;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        SeaurchinPig.prototype.update = function () {
        };
        SeaurchinPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        SeaurchinPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return SeaurchinPig;
    }(PigPlayer));

    var TeleportingPig = (function (_super) {
        __extends(TeleportingPig, _super);
        function TeleportingPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "TeleportingPig";
            _this.teleporIndex = 0;
            _this.isMoveing = false;
            return _this;
        }
        TeleportingPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.ani_player.y = data.height / 2;
                            this.pigMove = this.addComponent(PigMove);
                            return [2];
                    }
                });
            });
        };
        TeleportingPig.prototype.init = function () {
        };
        TeleportingPig.prototype.update = function () {
        };
        TeleportingPig.prototype.onTriggerEnter = function (other, self, contact) {
            if (this.isMoveing)
                return;
            _super.prototype.onTriggerEnter.call(this, other, self, contact);
        };
        TeleportingPig.prototype.teleportingNewLoc = function (info) {
            var _this = this;
            if (info.time != 999999999 + '') {
                Laya.timer.once(parseInt(info.time), this, function () {
                    _this.actionIndex++;
                    _this.initActionIndex();
                });
            }
            this.teleportmove(info);
        };
        TeleportingPig.prototype.teleportmove = function (info) {
            var _this = this;
            var xs = Utils.getRandom(parseInt(info.x1), parseInt(info.x2));
            var ys = Utils.getRandom(parseInt(info.y1), parseInt(info.y2));
            this.teleporIndex++;
            this.view2d_.scale(0.1, 0.1);
            this.isMoveing = true;
            this.x = xs;
            this.y = ys;
            Laya.Tween.to(this.view2d_, { scaleX: 1, scaleY: 1 }, 500, null, Laya.Handler.create(this, function () {
                _this.isMoveing = false;
                _this.initBulletId();
                Laya.timer.once(parseInt(info.nextMoveTime), _this, _this.teleportmove, [info]);
            }));
        };
        TeleportingPig.prototype.initBulletId = function () {
            if (this.teleporIndex % 2 == 0) {
                this.initBulletLoa();
                var bidA = (this.playerInfo.blt_id + '').split("|");
                for (var i = 0, len = bidA.length; i < len; i++) {
                    this.playerAttackByBid(bidA[i], i);
                }
            }
        };
        TeleportingPig.prototype.playerAttackByBid = function (bid, index) {
            this.createBulletInfo(bid, index);
            if (bid == 100107 + '')
                return;
            SoundManager.getInstance().playEffect(SoundConst.BotShot);
            for (var i = 1; i < 4; i++) {
                Laya.timer.once(i * 100, this, this.createBulletInfo, [bid, index, 5], false);
            }
        };
        TeleportingPig.prototype.createBulletInfo = function (bid, index, count) {
            if (count === void 0) { count = 1; }
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bid];
            var bulletInfo = new BulletInfo();
            if (this.playerInfo.offX != null) {
                var offxArr = this.playerInfo.offX.split('|');
                bulletInfo.offx = parseInt(offxArr[index]);
                var offyArr = this.playerInfo.offY.split('|');
                bulletInfo.offy = parseInt(offyArr[index]);
            }
            this.initBulletInfo(bulletInfo);
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            bulletInfo.bid = parseInt(bid);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            var vel = Utils.getRunDirection({ x: this.x, y: this.y }, { x: GameManager.instance.playerShip.x, y: GameManager.instance.playerShip.y }, Number(bulletConfig.velx));
            bulletInfo.velx = vel[0];
            bulletInfo.vely = vel[1];
            bulletInfo.attack /= count;
            this.createBullet(bulletInfo);
        };
        TeleportingPig.prototype.createBullet = function (bulletInfo) {
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x + bulletInfo.offx;
            baseBullet.y = this.objInfo_.y + bulletInfo.offy;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        TeleportingPig.prototype.initBulletInfo = function (bulletInfo) {
            bulletInfo.id = Laya.Utils.getGID();
            bulletInfo.width = GameConstant.bulletWidth;
            bulletInfo.height = GameConstant.bulletHeight;
            bulletInfo.type = this.objInfo_.type;
            bulletInfo.owner = this;
            return bulletInfo;
        };
        TeleportingPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        TeleportingPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return TeleportingPig;
    }(PigPlayer));

    var TreatmentPig = (function (_super) {
        __extends(TreatmentPig, _super);
        function TreatmentPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "TreatmentPig";
            return _this;
        }
        TreatmentPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, _super.prototype.onCreate.call(this, data)];
                        case 1:
                            _a.sent();
                            this.ani_player.y = data.height / 2;
                            this.pigMove = this.addComponent(PigMove);
                            return [2];
                    }
                });
            });
        };
        TreatmentPig.prototype.init = function () {
        };
        TreatmentPig.prototype.autoAttack = function () {
            this.isAutoAttack = true;
            var pigObj = GameManager.instance.pigObj;
            var bloodPercent = Number.MAX_VALUE;
            var inid;
            for (var id in pigObj) {
                var pigPlayer = pigObj[id];
                var percent = pigPlayer.objInfo_.curBlood / pigPlayer.objInfo_.blood;
                if (percent < bloodPercent) {
                    bloodPercent = pigPlayer.objInfo_.curBlood;
                    inid = id;
                }
            }
            if (inid != null) {
                var pigPlayer = pigObj[inid];
                pigPlayer.updateBlood(pigPlayer.objInfo_.blood * 0.3);
            }
            this.startAttackTime = new Date().getTime();
            Laya.timer.once(Number(this.objInfo_.attackCD), this, this.autoAttack);
        };
        TreatmentPig.prototype.update = function () {
        };
        TreatmentPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        TreatmentPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return TreatmentPig;
    }(PigPlayer));

    var TorpedoPig = (function (_super) {
        __extends(TorpedoPig, _super);
        function TorpedoPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "TorpedoPig";
            return _this;
        }
        TorpedoPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.onCreate.call(this, data);
                    this.pigMove = this.addComponent(PigMove);
                    return [2];
                });
            });
        };
        TorpedoPig.prototype.playerAttack = function (info) {
            var _this = this;
            this.autoAttack();
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                Laya.timer.clear(_this, _this.autoAttack);
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        TorpedoPig.prototype.update = function () {
        };
        TorpedoPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        TorpedoPig.prototype.startShootBullet = function () {
            var point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage);
            this.objInfo_.x = point.x;
            this.objInfo_.y = point.y;
            var bulletInfo = new BulletInfo();
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var index = this.index % bidA.length;
            var bid = bidA[index];
            if (this.playerInfo.offX != null) {
                var offxArr = this.playerInfo.offX.split('|');
                bulletInfo.offx = parseInt(offxArr[index]);
                var offyArr = this.playerInfo.offY.split('|');
                bulletInfo.offy = parseInt(offyArr[index]);
            }
            this.index++;
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bid];
            bulletInfo = this.initBulletInfo(bulletInfo);
            bulletInfo.bid = parseInt(bid);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            var velX = Number(bulletConfig.velx);
            var velY = Number(bulletConfig.vely);
            if (this.objInfo_.type == GameConstant.Enemy) {
                velX = -velX;
                var playerShip = GameManager.instance.playerShip;
                if (this.y - playerShip.y > 0) {
                    bulletInfo.vely = -1 * bulletInfo.vely;
                }
            }
            bulletInfo.vely = velY;
            bulletInfo.attack = this.objInfo_.attack;
            bulletInfo.velx = velX;
            this.shootBullet(bulletInfo);
        };
        TorpedoPig.prototype.createBullet = function (bulletInfo) {
            this.initBulletLoa();
            var data = GameManager.instance.getRandomLoca(this.objInfo_.type);
            var ys = data.y;
            var xs = data.x;
            var disX = Math.abs(this.objInfo_.x - xs);
            var t1 = Math.abs(disX / 50 / bulletInfo.velx);
            var disY = Math.abs(this.objInfo_.y - ys);
            bulletInfo.vely = Math.abs(bulletInfo.vely);
            bulletInfo.gravityScale = -(2 * disY + 2 * bulletInfo.vely * 50 * t1) / (t1 * t1) / 500;
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x;
            baseBullet.y = this.objInfo_.y;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            baseBullet.isActive = true;
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        TorpedoPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return TorpedoPig;
    }(PigPlayer));

    var Ship110001 = (function (_super) {
        __extends(Ship110001, _super);
        function Ship110001(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110001";
            _this.enemyBoxPosArr = [
                {
                    x: 230, y: 27
                },
                {
                    x: 385, y: 27
                },
                {
                    x: 97, y: 27
                },
                {
                    x: 330, y: 230
                },
                {
                    x: 146, y: 230
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110001.json';
            return _this;
        }
        Ship110001.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110001.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110001.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110001.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110001;
    }(BaseShipUi));

    var Ship110002 = (function (_super) {
        __extends(Ship110002, _super);
        function Ship110002(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110002";
            _this.enemyBoxPosArr = [
                {
                    x: 269, y: 27
                },
                {
                    x: 383, y: 27
                },
                {
                    x: 94, y: 27
                },
                {
                    x: 270, y: 250
                },
                {
                    x: 109, y: 250
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110002.json';
            return _this;
        }
        Ship110002.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110002.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110002.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110002.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110002;
    }(BaseShipUi));

    var Ship110004 = (function (_super) {
        __extends(Ship110004, _super);
        function Ship110004(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110004";
            _this.enemyBoxPosArr = [
                {
                    x: 163, y: 27
                },
                {
                    x: 380, y: 27
                },
                {
                    x: 95, y: 27
                },
                {
                    x: 268, y: 250
                },
                {
                    x: 104, y: 250
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110004.json';
            return _this;
        }
        Ship110004.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110004.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110004.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110004.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110004;
    }(BaseShipUi));

    var Ship110005 = (function (_super) {
        __extends(Ship110005, _super);
        function Ship110005(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110005";
            _this.enemyBoxPosArr = [
                {
                    x: 268, y: 55
                },
                {
                    x: 384, y: 55
                },
                {
                    x: 138, y: 55
                },
                {
                    x: 255, y: 289
                },
                {
                    x: 129, y: 289
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110005.json';
            return _this;
        }
        Ship110005.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110005.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110005.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110005.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110005;
    }(BaseShipUi));

    var WaterPig = (function (_super) {
        __extends(WaterPig, _super);
        function WaterPig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "WaterPig";
            return _this;
        }
        WaterPig.prototype.onCreate = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.onCreate.call(this, data);
                    this.pigMove = this.addComponent(PigMove);
                    return [2];
                });
            });
        };
        WaterPig.prototype.playerAttack = function (info) {
            var _this = this;
            this.autoAttack();
            Laya.timer.once(parseInt(info.time + ''), this, function () {
                Laya.timer.clear(_this, _this.autoAttack);
                _this.actionIndex++;
                _this.initActionIndex();
            });
        };
        WaterPig.prototype.update = function () {
        };
        WaterPig.prototype.destroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    _super.prototype.destroy.call(this);
                    return [2];
                });
            });
        };
        WaterPig.prototype.startShootBullet = function () {
            var point = Laya.Point.create();
            point = this.ani_player.localToGlobal(point, false, Laya.stage);
            this.objInfo_.x = point.x;
            this.objInfo_.y = point.y;
            var bulletInfo = new BulletInfo();
            var bidA = (this.playerInfo.blt_id + '').split("|");
            var index = this.index % bidA.length;
            var bid = bidA[index];
            if (this.playerInfo.offX != null) {
                var offxArr = this.playerInfo.offX.split('|');
                bulletInfo.offx = parseInt(offxArr[index]);
                var offyArr = this.playerInfo.offY.split('|');
                bulletInfo.offy = parseInt(offyArr[index]);
            }
            this.index++;
            var bulletConfig = ConfigManager.getInstance().bulletConfigs[bid];
            bulletInfo = this.initBulletInfo(bulletInfo);
            bulletInfo.bid = parseInt(bid);
            bulletInfo.bulletId = bulletConfig.icon;
            bulletInfo.height = bulletConfig.height;
            bulletInfo.width = bulletConfig.width;
            var velX = Number(bulletConfig.velx);
            var velY = Number(bulletConfig.vely);
            bulletInfo.gravityScale = Number(bulletConfig.gravityScale);
            bulletInfo.vely = Utils.random(velY * 0.5, velY * 1.5) * -1;
            if (this.objInfo_.type == GameConstant.Enemy) {
                velX = -velX;
                var playerShip = GameManager.instance.playerShip;
                if (this.y - playerShip.y > 0) {
                    bulletInfo.gravityScale = -bulletInfo.gravityScale;
                    bulletInfo.vely = -1 * bulletInfo.vely;
                }
            }
            bulletInfo.attack = this.objInfo_.attack;
            bulletInfo.velx = velX;
            this.createBullet(bulletInfo);
        };
        WaterPig.prototype.createBullet = function (bulletInfo) {
            this.initBulletLoa();
            if (bulletInfo.bid + '' == 100107 + '') {
                _super.prototype.createBullet.call(this, bulletInfo);
                return;
            }
            var disX = Math.abs(this.x - GameManager.instance.playerShip.x);
            var t1 = Math.abs(disX / 50 / bulletInfo.velx);
            bulletInfo.vely = -Math.abs(bulletInfo.vely);
            bulletInfo.gravityScale = -(bulletInfo.vely / 10 / t1 * 2);
            var baseBullet = this.createBaseBullet(bulletInfo.bid + '', bulletInfo);
            baseBullet.x = this.objInfo_.x + bulletInfo.offx;
            baseBullet.y = this.objInfo_.y + bulletInfo.offy;
            baseBullet.view2d_.x = baseBullet.x;
            baseBullet.view2d_.y = baseBullet.y;
            GameManager.instance.bodyLayer.addChild(baseBullet);
            baseBullet.init();
            baseBullet.isActive = true;
            GameManager.instance.box_game.addChild(baseBullet.view2d_);
            GameManager.instance.bulletObj[bulletInfo.id] = baseBullet;
            return baseBullet;
        };
        WaterPig.prototype.onRecovery = function () {
            this._destroyComponent(this.pigMove);
            this.pigMove = null;
            _super.prototype.onRecovery.call(this);
        };
        return WaterPig;
    }(PigPlayer));

    var Ship110105 = (function (_super) {
        __extends(Ship110105, _super);
        function Ship110105(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110105";
            _this.enemyBoxPosArr = [
                {
                    x: 254, y: 30
                },
                {
                    x: 387, y: 30
                },
                {
                    x: 134, y: 30
                },
                {
                    x: 255, y: 199
                },
                {
                    x: 121, y: 199
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110105.json';
            return _this;
        }
        Ship110105.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110105.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110105.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110105.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110105;
    }(BaseShipUi));
    var ShowShip110101$1 = (function (_super) {
        __extends(ShowShip110101, _super);
        function ShowShip110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110101";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        ShowShip110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ShowShip110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110101.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110101.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110101;
    }(BaseShipUi));

    var Ship110102 = (function (_super) {
        __extends(Ship110102, _super);
        function Ship110102(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110102";
            _this.enemyBoxPosArr = [
                {
                    x: 191, y: 32
                },
                {
                    x: 315, y: 44
                },
                {
                    x: 42, y: 44
                },
                {
                    x: 193, y: 213
                },
                {
                    x: 38, y: 213
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110102.json';
            return _this;
        }
        Ship110102.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110102.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110102.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110102.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110102;
    }(BaseShipUi));
    var ShowShip110101$2 = (function (_super) {
        __extends(ShowShip110101, _super);
        function ShowShip110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110101";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        ShowShip110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ShowShip110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110101.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110101.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110101;
    }(BaseShipUi));

    var Ship110103 = (function (_super) {
        __extends(Ship110103, _super);
        function Ship110103(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110103";
            _this.enemyBoxPosArr = [
                {
                    x: 174, y: 53
                },
                {
                    x: 294, y: 53
                },
                {
                    x: 55, y: 53
                },
                {
                    x: 64, y: 222
                },
                {
                    x: 202, y: 222
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110103.json';
            return _this;
        }
        Ship110103.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110103.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110103.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110103.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110103;
    }(BaseShipUi));
    var ShowShip110101$3 = (function (_super) {
        __extends(ShowShip110101, _super);
        function ShowShip110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110101";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        ShowShip110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ShowShip110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110101.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110101.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110101;
    }(BaseShipUi));

    var Ship110104 = (function (_super) {
        __extends(Ship110104, _super);
        function Ship110104(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110104";
            _this.enemyBoxPosArr = [
                {
                    x: 202, y: 62
                },
                {
                    x: 283, y: 72
                },
                {
                    x: 83, y: 72
                },
                {
                    x: 194, y: 199
                },
                {
                    x: 83, y: 199
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110104.json';
            return _this;
        }
        Ship110104.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110104.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        Ship110104.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110104.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110104;
    }(BaseShipUi));
    var ShowShip110101$4 = (function (_super) {
        __extends(ShowShip110101, _super);
        function ShowShip110101(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110101";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110101.json';
            return _this;
        }
        ShowShip110101.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110101.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ShowShip110101.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110101.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110101.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110101;
    }(BaseShipUi));

    var Ship110205 = (function (_super) {
        __extends(Ship110205, _super);
        function Ship110205(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110205";
            _this.enemyBoxPosArr = [
                {
                    x: 149, y: 100
                },
                {
                    x: 245, y: 100
                },
                {
                    x: 19, y: 100
                },
                {
                    x: 40, y: 270
                },
                {
                    x: 149, y: 270
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110205.json';
            return _this;
        }
        Ship110205.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110205.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110205.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110205;
    }(BaseShipUi));
    var ShowShip110201$1 = (function (_super) {
        __extends(ShowShip110201, _super);
        function ShowShip110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110201";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        ShowShip110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2;
                            umbrella.y = umbrella.height / 2;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -35;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        ShowShip110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110201.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110201.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110201;
    }(BaseShipUi));

    var Ship110204 = (function (_super) {
        __extends(Ship110204, _super);
        function Ship110204(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110204";
            _this.enemyBoxPosArr = [
                {
                    x: 197, y: 60
                },
                {
                    x: 327, y: 70
                },
                {
                    x: 65, y: 60
                },
                {
                    x: 191, y: 270
                },
                {
                    x: 85, y: 270
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110204.json';
            return _this;
        }
        Ship110204.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110204.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110204.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110204;
    }(BaseShipUi));
    var ShowShip110201$2 = (function (_super) {
        __extends(ShowShip110201, _super);
        function ShowShip110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110201";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        ShowShip110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2;
                            umbrella.y = umbrella.height / 2;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -35;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        ShowShip110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110201.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110201.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110201;
    }(BaseShipUi));

    var Ship110203 = (function (_super) {
        __extends(Ship110203, _super);
        function Ship110203(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110203";
            _this.enemyBoxPosArr = [
                {
                    x: 195, y: 45
                },
                {
                    x: 304, y: 45
                },
                {
                    x: 74, y: 45
                },
                {
                    x: 74, y: 228
                },
                {
                    x: 191, y: 228
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110203.json';
            return _this;
        }
        Ship110203.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110203.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110203.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110203;
    }(BaseShipUi));
    var ShowShip110201$3 = (function (_super) {
        __extends(ShowShip110201, _super);
        function ShowShip110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110201";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        ShowShip110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2;
                            umbrella.y = umbrella.height / 2;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -35;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        ShowShip110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110201.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110201.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110201;
    }(BaseShipUi));

    var Ship110202 = (function (_super) {
        __extends(Ship110202, _super);
        function Ship110202(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "Ship110202";
            _this.enemyBoxPosArr = [
                {
                    x: 225, y: 45
                },
                {
                    x: 333, y: 45
                },
                {
                    x: 127, y: 45
                },
                {
                    x: 115, y: 225
                },
                {
                    x: 241, y: 220
                },
            ];
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110202.json';
            return _this;
        }
        Ship110202.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        Ship110202.prototype.initView = function () {
            _super.prototype.initView.call(this);
        };
        Ship110202.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return Ship110202;
    }(BaseShipUi));
    var ShowShip110201$4 = (function (_super) {
        __extends(ShowShip110201, _super);
        function ShowShip110201(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "ShowShip110201";
            _this.objInfo_ = data;
            _this.skin = 'game/ship/Ship110201.json';
            return _this;
        }
        ShowShip110201.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ShowShip110201.prototype.initUmbrell = function () {
            return __awaiter(this, void 0, void 0, function () {
                var umbrella;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, GameManager.instance.createSkeleton("resource/assets/img/ani/ship/propellerA.sk")];
                        case 1:
                            umbrella = _a.sent();
                            if (umbrella == null)
                                return [2];
                            umbrella.x = umbrella.width / 2;
                            umbrella.y = umbrella.height / 2;
                            this.box1.addChild(umbrella);
                            this.box1.rotation = -35;
                            umbrella.play(0, true);
                            return [2];
                    }
                });
            });
        };
        ShowShip110201.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        ShowShip110201.prototype.initPlayer = function () {
            var playerConfig = this.objInfo_.playerConfig;
            if (playerConfig) {
                for (var i = 1; i < 6; i++) {
                    if (playerConfig['box_player' + i] != null && playerConfig['box_player' + i] != '') {
                        this.createPlayer(this['box_player' + i], playerConfig['box_player' + i], i);
                    }
                }
            }
        };
        ShowShip110201.prototype.initView = function () {
            this.rigidBody = this.icon_ship.getComponent(Laya.RigidBody);
            this.collider = this.icon_ship.getComponent(Laya.PolygonCollider);
            if (this.collider) {
                this.icon_ship._destroyComponent(this.collider);
            }
            if (this.rigidBody) {
                this.icon_ship._destroyComponent(this.rigidBody);
            }
            this.box_player1 && (this.box_player1.name = 'main');
            this.box_player2 && (this.box_player2.name = 'up1');
            this.box_player3 && (this.box_player3.name = 'up1');
            this.box_player4 && (this.box_player4.name = 'under1');
            this.box_player5 && (this.box_player5.name = 'under2');
            this.initPlayer();
            this.initUmbrell();
        };
        return ShowShip110201;
    }(BaseShipUi));

    var ObjectManager = (function () {
        function ObjectManager() {
        }
        ObjectManager.getInstance = function () {
            if (ObjectManager.ins == null) {
                ObjectManager.ins = new ObjectManager();
            }
            return ObjectManager.ins;
        };
        ObjectManager.prototype.createShipByType = function (type, data) {
            var ship = null;
            switch (type + '') {
                case '110001':
                    ship = new Ship110001(data);
                    break;
                case '110002':
                    ship = new Ship110002(data);
                    break;
                case '110003':
                    ship = new Ship110003(data);
                    break;
                case '110004':
                    ship = new Ship110004(data);
                    break;
                case '110005':
                    ship = new Ship110005(data);
                    break;
                case '110101':
                    ship = new Ship110101(data);
                    break;
                case '110102':
                    ship = new Ship110102(data);
                    break;
                case '110103':
                    ship = new Ship110103(data);
                    break;
                case '110104':
                    ship = new Ship110104(data);
                    break;
                case '110105':
                    ship = new Ship110105(data);
                    break;
                case '110201':
                    ship = new Ship110201(data);
                    break;
                case '110202':
                    ship = new Ship110202(data);
                    break;
                case '110203':
                    ship = new Ship110203(data);
                    break;
                case '110204':
                    ship = new Ship110204(data);
                    break;
                case '110205':
                    ship = new Ship110205(data);
                    break;
            }
            ship.init(data);
            return ship;
        };
        ObjectManager.prototype.createPigPlayer = function (type, data) {
            var pPlayer;
            switch (parseInt(type)) {
                case 1:
                    pPlayer = ObjectPool.instance.createObjectByName(FlyPig, data);
                    break;
                case 6:
                    pPlayer = ObjectPool.instance.createObjectByName(MinePig, data);
                    break;
                case 7:
                    pPlayer = ObjectPool.instance.createObjectByName(SeaurchinPig, data);
                    break;
                case 9:
                    pPlayer = ObjectPool.instance.createObjectByName(TeleportingPig, data);
                    break;
                case 3:
                    pPlayer = ObjectPool.instance.createObjectByName(TreatmentPig, data);
                    break;
                case 8:
                    pPlayer = ObjectPool.instance.createObjectByName(TorpedoPig, data);
                    break;
                case 5:
                    pPlayer = ObjectPool.instance.createObjectByName(WaterPig, data);
                    break;
                case 4:
                    if (data.playerId + '' == 130101 + '') {
                        data.pigType = PigType.normal;
                    }
                    else {
                        data.pigType = PigType.Boss;
                    }
                    pPlayer = ObjectPool.instance.createObjectByName(PigPlayer, data);
                    break;
                default:
                    pPlayer = ObjectPool.instance.createObjectByName(PigPlayer, data);
                    break;
            }
            return pPlayer;
        };
        return ObjectManager;
    }());

    var SignItem = (function (_super) {
        __extends(SignItem, _super);
        function SignItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "SignItem";
            _this.data = _data;
            _this.skin = "home/sign/SignItem.json";
            return _this;
        }
        SignItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        SignItem.prototype.adaptationStage = function () {
            this.size(215, 227);
        };
        SignItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
            }
        };
        SignItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        SignItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, awardId;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.lab_title.text = data.name;
                    this.lab_num.text = data.reward[0].num + "";
                    this.img_bg.skin = data.canSign ? "resource/assets/img/home/sign/sign_diban_4.png" : "resource/assets/img/home/sign/sign_diban_3.png";
                    this.img_light.visible = data.canSign;
                    this.img_signed.visible = data.signed;
                    awardId = data.reward[0].type;
                    if (awardId < 10000) {
                        if (awardId == 1001) {
                            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
                        }
                        else {
                            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
                        }
                    }
                    return [2];
                });
            });
        };
        SignItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
        };
        return SignItem;
    }(BaseSceneUISkin));

    var SignManager = (function () {
        function SignManager() {
        }
        Object.defineProperty(SignManager, "instance", {
            get: function () {
                if (SignManager.ins == null) {
                    SignManager.ins = new SignManager();
                }
                return SignManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        SignManager.prototype.getSignData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var signConfig, signIn, curCanSign, len, rotations, start, end, dataArr, i, sign, canSign, signed, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getSignConfig()];
                        case 1:
                            signConfig = _a.sent();
                            signIn = GameData.getInstance().signIn;
                            curCanSign = this.checkSign();
                            len = signConfig.length;
                            rotations = signIn.rotations;
                            if (curCanSign) {
                                rotations = Math.floor(signIn.total_count / 7);
                                signIn.rotations = rotations;
                                if (signIn.total_count >= len) {
                                    signIn.total_count = 0;
                                    signIn.rotations = 0;
                                }
                                GameData.getInstance().signIn = signIn;
                            }
                            start = rotations * 7;
                            end = start + 7;
                            dataArr = [];
                            for (i = start; i < end; i++) {
                                sign = signConfig[i];
                                canSign = false;
                                signed = false;
                                if (i < signIn.total_count) {
                                    signed = true;
                                }
                                if (i == signIn.total_count && curCanSign) {
                                    canSign = true;
                                }
                                data = new localData.SignData();
                                data.id = sign.id;
                                data.name = sign.name;
                                data.reward = sign.reward;
                                data.signed = signed;
                                data.canSign = canSign;
                                dataArr.push(data);
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        SignManager.prototype.checkSign = function () {
            var signIn = GameData.getInstance().signIn;
            var lastTime = signIn.timeStamp;
            var currTime = (new Date()).getTime();
            var isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
            return !isOneDay;
        };
        SignManager.prototype.receiveReward = function (b, reward) {
            return new Promise(function (resolve) {
                var awardId = reward[0].type;
                if (awardId < 10000) {
                    GameMgr.getInstance().updateBaseData(awardId, reward[0].num * b);
                }
                GameData.getInstance().signIn.timeStamp = (new Date()).getTime();
                GameData.getInstance().signIn.total_count += 1;
                GameInfoManager.getInstance().saveInfo(GameConst.SIGN_INFO);
                resolve();
            });
        };
        return SignManager;
    }());

    var SignView = (function (_super) {
        __extends(SignView, _super);
        function SignView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SignView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.pointArr = [[108, 0], [343, 0], [578, 0], [0, 280], [235, 280], [470, 280], [705, 280]];
            _this.signData = [];
            _this.skin = "home/sign/SignScene.json";
            return _this;
        }
        SignView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.box_sign.removeChildren();
            this.btn_close.addComponent(CustomScaleComponent);
            this.btn_sign.addComponent(CustomScaleComponent);
        };
        SignView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        SignView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_sign.on(Laya.Event.CLICK, this, this.onSign);
            this.btn_double.on(Laya.Event.CLICK, this, this.onDouble);
        };
        SignView.prototype.onDouble = function () {
            this.icon_check.visible = !this.icon_check.visible;
        };
        SignView.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            var can = SignManager.instance.checkSign();
            this.img_tip.visible = !can;
            this.btn_sign.visible = can;
            this.btn_double.visible = can;
            this.icon_check.visible = true;
            this.refreshUI();
        };
        SignView.prototype.refreshUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, i, len, item;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, SignManager.instance.getSignData()];
                        case 1:
                            _a.signData = _b.sent();
                            console.log("SignInView >>>>>>> initView", this.signData);
                            for (i = 0, len = this.pointArr.length; i < len; i++) {
                                item = this.box_sign.getChildAt(i);
                                if (item) {
                                    item.setData(this.signData[i]);
                                }
                                else {
                                    item = new SignItem(this.signData[i]);
                                    item.x = this.pointArr[i][0];
                                    item.y = this.pointArr[i][1];
                                    this.box_sign.addChild(item);
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        SignView.prototype.onSign = function () {
            return __awaiter(this, void 0, void 0, function () {
                var self;
                return __generator(this, function (_a) {
                    SoundManager.getInstance().playEffect(SoundConst.BtnClick);
                    self = this;
                    this.grp_center.mouseEnabled = false;
                    if (this.icon_check.visible) {
                        MiniManeger.instance.playViderAd({
                            successFun: function () {
                                self.getAward(2);
                            }, failFun: function () {
                                self.grp_center.mouseEnabled = true;
                            },
                            errorFun: function () {
                                self.grp_center.mouseEnabled = true;
                            }
                        });
                    }
                    else {
                        this.getAward(1);
                    }
                    return [2];
                });
            });
        };
        SignView.prototype.getAward = function (mul) {
            if (mul === void 0) { mul = 1; }
            return __awaiter(this, void 0, void 0, function () {
                var data, index, element;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            for (index = 0; index < this.signData.length; index++) {
                                element = this.signData[index];
                                if (element.canSign) {
                                    data = element;
                                    break;
                                }
                            }
                            return [4, SignManager.instance.receiveReward(mul, data.reward)];
                        case 1:
                            _a.sent();
                            this.initView();
                            this.grp_center.mouseEnabled = true;
                            return [2];
                    }
                });
            });
        };
        SignView.prototype.onClose = function () {
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayMainView();
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        SignView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_sign.off(Laya.Event.CLICK, this, this.onSign);
            this.btn_double.off(Laya.Event.CLICK, this, this.onDouble);
        };
        SignView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return SignView;
    }(BaseSceneUISkinPopView));

    var TaskItem = (function (_super) {
        __extends(TaskItem, _super);
        function TaskItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "TaskItem";
            _this.data = _data;
            _this.skin = "home/task/TaskItem.json";
            return _this;
        }
        TaskItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_get.addComponent(CustomScaleComponent);
            this.btn_video.addComponent(CustomScaleComponent);
        };
        TaskItem.prototype.adaptationStage = function () {
            this.size(1050, 150);
        };
        TaskItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TaskItem.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
        };
        TaskItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        TaskItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, arr, awardId;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.lab_desc.text = GameMgr.getInstance().replaceStr(data.teskDes, data.teskPar + "");
                    this.lab_prog.text = data.progress + "/" + data.teskPar;
                    this.img_prog.width = 525 * data.progress / data.teskPar;
                    arr = data.reward.split("|");
                    awardId = parseInt(arr[0]);
                    if (awardId == 1001) {
                    }
                    else {
                        this.img_award.scale(0.6, 0.6);
                        this.img_award.skin = "resource/assets/img/home/top/top_tubiao_1.png";
                    }
                    this.lab_num.text = "X" + arr[1];
                    this.btn_video.visible = data.state == 0;
                    this.btn_get.visible = data.state != 0;
                    return [2];
                });
            });
        };
        TaskItem.prototype.onGet = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            TaskManager.instance.getTaskAward(this.data.reward);
            TaskManager.instance.updateTask(this.data.id, 0, 2);
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TASK);
        };
        TaskItem.prototype.onVideo = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.playViderAd({
                successFun: function () {
                    GameData.getInstance().task.taskVideo -= 1;
                    _this.changeTask();
                },
                failFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        TaskItem.prototype.changeTask = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, TaskManager.instance.changeTask(this.data.id)];
                        case 1:
                            _a.sent();
                            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TASK);
                            return [2];
                    }
                });
            });
        };
        TaskItem.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
        };
        TaskItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return TaskItem;
    }(BaseSceneUISkin));

    var FosterDetailView = (function (_super) {
        __extends(FosterDetailView, _super);
        function FosterDetailView(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "FosterDetailView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.data = _data;
            _this.skin = "home/foster/FosterDetailScene.json";
            return _this;
        }
        FosterDetailView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        FosterDetailView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        FosterDetailView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        FosterDetailView.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        FosterDetailView.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            GameMgr.getInstance().hideTopBar();
            if (!this.data)
                return;
            this.box_booster.visible = this.box_cat.visible = this.box_ship.visible = false;
            var data = this.data;
            if (data.type == 0) {
                this.lab_title.text = data.shipConfig.name;
                this.lab_desc.text = data.shipConfig.des;
                this.lab_type.text = "船";
                this.box_ship.visible = true;
                if (parseInt(data.shipConfig.attack_type) == 1) {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_21.png";
                }
                else if (parseInt(data.shipConfig.attack_type) == 2) {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_22.png";
                }
                else {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_23.png";
                }
                this.lab_shipHp.text = data.hp + "";
                this.lab_shipSlot.text = data.slot + "";
                this.img_icon.skin = "resource/assets/img/icon/ship/shipIcon_" + data.id + ".png";
                this.img_icon.scale(2.2, 2.2);
            }
            else if (data.type == 1) {
                this.lab_title.text = data.catConfig.name;
                this.lab_desc.text = data.catConfig.des;
                this.lab_type.text = "猫";
                this.box_cat.visible = true;
                if (parseInt(data.catConfig.attack_type) == 1) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_26.png";
                }
                else if (parseInt(data.catConfig.attack_type) == 2) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_27.png";
                }
                else if (parseInt(data.catConfig.attack_type) == 3) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_28.png";
                }
                else {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_ui_aim_red.png";
                }
                this.lab_catAtk.text = data.atk + "";
                this.lab_catHp.text = data.hp + "";
                this.lab_catCrit.text = (data.crit / 100) + "%";
                this.img_icon.skin = 'resource/assets/img/icon/cat/catIcon_' + data.id + '.png';
                this.img_icon.scale(1.5, 1.5);
            }
            else {
                this.lab_title.text = data.boosterConfig.name;
                this.lab_desc.text = data.boosterConfig.des;
                this.lab_type.text = "增幅器";
                this.box_booster.visible = true;
                this.lab_boosterHp.text = data.hp + "";
                this.lab_boosterCd.text = (data.skillCD / 1000).toFixed(2) + 's';
                this.img_icon.skin = 'resource/assets/img/icon/booster/' + data.boosterConfig.uiIcon + '.png';
                this.img_icon.scale(1, 1);
            }
            this.lab_rarity.text = data.quality == 1 ? "普通" : "稀有";
            for (var i = 0, len = this.boxH_star.numChildren; i < len; i++) {
                var img = this.boxH_star.getChildAt(i);
                img.visible = data.star > i;
            }
        };
        FosterDetailView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        FosterDetailView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        FosterDetailView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            GameMgr.getInstance().showTopBar();
            this.data = null;
        };
        return FosterDetailView;
    }(BaseSceneUISkinPopView));

    var PropItem = (function (_super) {
        __extends(PropItem, _super);
        function PropItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "PropItem";
            _this.data = _data;
            _this.skin = "home/award/PropItem.json";
            return _this;
        }
        PropItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.img_detail.addComponent(CustomScaleComponent);
        };
        PropItem.prototype.adaptationStage = function () {
            this.size(485, 605);
        };
        PropItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PropItem.prototype.addEvent = function () {
            this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
        };
        PropItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        PropItem.prototype.initView = function () {
            if (!this.data)
                return;
            this.boxH_booster.visible = this.boxH_cat.visible = this.boxH_ship.visible = false;
            var data = this.data.data;
            if (data == null)
                return;
            this.img_xiyou.visible = data.quality == 2;
            this.lab_lv.text = "LV." + data.level;
            if (data.level >= GameManager.instance.shipMaxLevel) {
                this.lab_lv.text = "LV.MAX";
            }
            if (data.type == 0) {
                this.boxH_ship.visible = true;
                if (parseInt(data.shipConfig.attack_type) == 1) {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_21.png";
                }
                else if (parseInt(data.shipConfig.attack_type) == 2) {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_22.png";
                }
                else {
                    this.img_shipHp.skin = "resource/assets/img/propPublic/propPublic_button_icons_23.png";
                }
                this.lab_shipHp.text = data.hp + "";
                this.lab_shipSlot.text = data.slot + "";
                this.lab_name.text = data.shipConfig.name;
                this.img_icon.skin = "resource/assets/img/icon/ship/shipIcon_" + data.id + ".png";
                this.img_icon.scale(2, 2);
            }
            else if (data.type == 1) {
                this.boxH_cat.visible = true;
                if (parseInt(data.catConfig.attack_type) == 1) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_26.png";
                }
                else if (parseInt(data.catConfig.attack_type) == 2) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_27.png";
                }
                else if (parseInt(data.catConfig.attack_type) == 3) {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_button_icons_28.png";
                }
                else {
                    this.img_catAtk.skin = "resource/assets/img/propPublic/propPublic_ui_aim_red.png";
                }
                this.lab_catAtk.text = data.atk + "";
                this.lab_catHp.text = data.hp + "";
                this.lab_catCrit.text = (data.crit / 100) + "%";
                this.lab_name.text = data.catConfig.name;
                this.img_icon.skin = 'resource/assets/img/icon/cat/catIcon_' + data.id + '.png';
                this.img_icon.scale(1.2, 1.2);
            }
            else {
                this.boxH_booster.visible = true;
                this.lab_boosterHp.text = data.hp + "";
                this.lab_boosterCd.text = (data.skillCD / 1000).toFixed(2) + 's';
                this.lab_name.text = data.boosterConfig.name;
                this.img_icon.skin = 'resource/assets/img/icon/booster/' + data.boosterConfig.uiIcon + '.png';
                this.img_icon.scale(1, 1);
            }
            if (data.level >= data.maxLevel) {
                this.img_jd.width = 408;
            }
            else {
                var needExp = ConfigManager.getInstance().playerExpJson[data.level].exp;
                this.img_jd.width = 408 * (data.exp / needExp);
            }
            for (var i = 0, len = this.boxH_star.numChildren; i < len; i++) {
                this.boxH_star.getChildAt(i).visible = data.star > i;
            }
            this.boxH_star.width = data.star * 93;
            this.boxH_star.centerX = 0;
        };
        PropItem.prototype.onDetail = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            ViewManager.getInstance().showView(FosterDetailView, this.data.data);
        };
        PropItem.prototype.removeEvent = function () {
            this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
        };
        PropItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
        };
        return PropItem;
    }(BaseSceneUISkin));

    var GiftItem = (function (_super) {
        __extends(GiftItem, _super);
        function GiftItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "GiftItem";
            _this.data = _data;
            _this.skin = "home/award/GiftItem.json";
            return _this;
        }
        GiftItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_video.addComponent(CustomScaleComponent);
        };
        GiftItem.prototype.adaptationStage = function () {
            this.size(485, 605);
        };
        GiftItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        GiftItem.prototype.addEvent = function () {
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
        };
        GiftItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        GiftItem.prototype.initView = function () {
            var level = GameData.getInstance().playerData.playerLevel;
            for (var i = 0, len = this.boxH_star.numChildren; i < len; i++) {
                this.boxH_star.getChildAt(i).visible = level > i;
            }
            this.boxH_star.width = level * 93;
            this.boxH_star.centerX = 0;
        };
        GiftItem.prototype.onVideo = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.playViderAd({
                successFun: function () {
                    var type = Utils.getRandom(1, 3);
                    var ob;
                    switch (type) {
                        case 1:
                            ob = GameManager.instance.getRandomOneShip(false, GameData.getInstance().playerData.playerLevel);
                            break;
                        case 2:
                            ob = GameManager.instance.getRandomOneCat(false, GameData.getInstance().playerData.playerLevel);
                            break;
                        case 3:
                            ob = GameManager.instance.getRandomOneBooster(false, GameData.getInstance().playerData.playerLevel);
                            break;
                    }
                    GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                    var views = ViewManager.getInstance().views;
                    var result = views["AwardScene"];
                    if (result) {
                        result.getAward();
                    }
                    var dataArr = TreasureManager.instance.getAwardPropData([ob]);
                    ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr });
                },
                failFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        GiftItem.prototype.removeEvent = function () {
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
        };
        GiftItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return GiftItem;
    }(BaseSceneUISkin));

    var GoodsItem = (function (_super) {
        __extends(GoodsItem, _super);
        function GoodsItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "GoodsItem";
            _this.data = _data;
            _this.skin = "home/award/GoodsItem.json";
            return _this;
        }
        GoodsItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_video.addComponent(CustomScaleComponent);
        };
        GoodsItem.prototype.adaptationStage = function () {
            this.size(485, 605);
        };
        GoodsItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        GoodsItem.prototype.addEvent = function () {
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
        };
        GoodsItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        GoodsItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.data)
                                return [2];
                            data = this.data;
                            BitmapLabelUtils.setLabel(this.lab_num, data.awardNum + "", "resource/assets/img/home/top/top_sz/", 0);
                            this.lab_num.width = (data.awardNum + "").length * 42;
                            if (!(data.awardId == 1001)) return [3, 1];
                            this.btn_video.visible = true;
                            this.img_content.y = 88;
                            this.lab_name.text = "金币";
                            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
                            this.img_icon.scale(3, 3);
                            this.multiple = GameMgr.getInstance().getGoldMult(data.awardNum);
                            BitmapLabelUtils.setLabel(this.img_mult, this.multiple + "", "resource/assets/img/public/public_sz/", 0);
                            return [3, 4];
                        case 1:
                            if (!(data.awardId == 1002)) return [3, 2];
                            this.btn_video.visible = false;
                            this.img_content.y = 130;
                            this.lab_name.text = "钻石";
                            this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
                            this.img_icon.scale(3, 3);
                            return [3, 4];
                        case 2:
                            this.btn_video.visible = false;
                            this.img_content.y = 130;
                            return [4, TreasureManager.instance.getTreasureConfig(data.awardId)];
                        case 3:
                            config = _a.sent();
                            this.lab_name.text = config.name;
                            this.img_icon.skin = "resource/assets/img/icon/box/" + config.icon + ".png";
                            this.img_icon.scale(0.5, 0.5);
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        GoodsItem.prototype.onVideo = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.playViderAd({
                successFun: function () {
                    var data = _this.data;
                    if (data.awardId == 1001) {
                        GameMgr.getInstance().updateBaseData(1001, data.awardNum * (_this.multiple - 1));
                    }
                    else if (data.awardId == 1002) {
                        GameMgr.getInstance().updateBaseData(1002, data.awardNum);
                    }
                    var views = ViewManager.getInstance().views;
                    var result = views["AwardScene"];
                    if (result) {
                        result.getAward();
                    }
                },
                failFun: function () {
                },
                errorFun: function () {
                }
            });
        };
        GoodsItem.prototype.removeEvent = function () {
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
        };
        GoodsItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return GoodsItem;
    }(BaseSceneUISkin));

    var AwardScene = (function (_super) {
        __extends(AwardScene, _super);
        function AwardScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "AwardScene";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.data = data_;
            _this.skin = "home/award/AwardScene.json";
            return _this;
        }
        AwardScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_award.hScrollBarSkin = "";
            this.panel_award.elasticEnabled = true;
            this.panel_award.hScrollBar.elasticDistance = 100;
            this.panel_award.hScrollBar.elasticBackTime = 100;
            this.panel_award.autoSize = true;
            this.btn_get.addComponent(CustomScaleComponent);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        AwardScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        AwardScene.prototype.addEvent = function () {
            this.btn_get.on(Laya.Event.CLICK, this, this.onGet);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        AwardScene.prototype.setData = function (data_) {
            this.data = data_;
            if (this.isCreate) {
                this.initView();
            }
        };
        AwardScene.prototype.initView = function () {
            if (!this.data)
                return;
            this.btn_close.visible = false;
            this.btn_get.visible = true;
            console.log("AwardScene >>>>>>> initView", this.data);
            this.panel_award.hScrollBar.value = 0;
            this.box_award.removeChildren();
            this.img_title.skin = "resource/assets/img/home/award/award_zi_8.png";
            if (this.data.type == 1) {
                var dataArr = this.data.data;
                var len = dataArr.length;
                for (var i = 0; i < len; i++) {
                    var data = dataArr[i];
                    var item = new PropItem({ type: 1, data: data });
                    item.x = (485 + 20) * i;
                    this.box_award.addChild(item);
                }
                this.box_award.width = 485 * len + 20 * (len - 1);
            }
            else if (this.data.type == 2) {
                var dataArr = this.data.data;
                var len = dataArr.length;
                for (var i = 0; i < len; i++) {
                    var data = dataArr[i];
                    var item = new GoodsItem(data);
                    item.x = (485 + 20) * i;
                    this.box_award.addChild(item);
                }
                this.box_award.width = 485 * len + 20 * (len - 1);
            }
            else {
                this.img_title.skin = "resource/assets/img/home/award/award_zi_9.png";
                this.btn_close.visible = true;
                this.btn_get.visible = false;
                var item = new GiftItem();
                item.x = 0;
                this.box_award.addChild(item);
                this.box_award.width = 485;
            }
            this.box_award.height = this.panel_award.height = 605;
            this.panel_award.width = this.box_award.width;
            if (this.box_award.width >= 1920) {
                this.panel_award.autoSize = false;
                this.panel_award.width = 1920;
            }
            else {
            }
        };
        AwardScene.prototype.onGet = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (this.data.type == 2 && this.data.data[0].awardId == 1001) {
                SoundManager.getInstance().playEffect(SoundConst.GetGold);
            }
            this.getAward();
        };
        AwardScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        AwardScene.prototype.getAward = function () {
            var fun = this.data.sureFun;
            this.removeSelf();
            fun && fun();
        };
        AwardScene.prototype.removeEvent = function () {
            this.btn_get.off(Laya.Event.CLICK, this, this.onGet);
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        AwardScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
            MiniManeger.instance.hideBanner();
        };
        return AwardScene;
    }(BaseSceneUISkinPopView));

    var TaskView = (function (_super) {
        __extends(TaskView, _super);
        function TaskView() {
            var _this = _super.call(this) || this;
            _this.className_key = "TaskView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.skin = "home/task/TaskScene.json";
            return _this;
        }
        TaskView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.box_task.removeChildren();
            this.btn_close.addComponent(CustomScaleComponent);
        };
        TaskView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TaskView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_TASK, this, this.initView);
        };
        TaskView.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            this.refreshAward();
            this.refreshUI();
        };
        TaskView.prototype.refreshAward = function () {
            this.img_light.visible = false;
            this.img_award.visible = true;
            this.img_award.off(Laya.Event.CLICK, this, this.onAward);
            var task = GameData.getInstance().task;
            this.lab_prog.text = task.taskTimes + "/" + TaskManager.instance.surpriseTimes;
            if (task.taskTimes > TaskManager.instance.surpriseTimes) {
                this.img_prog.width = 600;
            }
            else {
                this.img_prog.width = 600 * task.taskTimes / TaskManager.instance.surpriseTimes;
            }
            if (task.surpriseed) {
                this.img_award.visible = this.img_light.visible = false;
            }
            else {
                if (task.taskTimes >= TaskManager.instance.surpriseTimes) {
                    this.img_light.visible = true;
                    this.img_award.on(Laya.Event.CLICK, this, this.onAward);
                }
            }
        };
        TaskView.prototype.refreshUI = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, len, i, data, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, TaskManager.instance.getTaskData()];
                        case 1:
                            dataArr = _a.sent();
                            console.log("TaskView >>>>>>> initView", dataArr);
                            len = dataArr.length;
                            if (len) {
                                this.box_complete.visible = false;
                                this.box_task.visible = true;
                                for (i = 0; i < 3; i++) {
                                    data = dataArr[i];
                                    item = this.box_task.getChildAt(i);
                                    if (data) {
                                        if (item) {
                                            item.setData(data);
                                        }
                                        else {
                                            item = new TaskItem(data);
                                            item.y = i * 155;
                                            this.box_task.addChild(item);
                                        }
                                    }
                                    else {
                                        if (item)
                                            item.removeSelf();
                                    }
                                }
                            }
                            else {
                                this.box_task.visible = false;
                                this.box_complete.visible = true;
                            }
                            return [2];
                    }
                });
            });
        };
        TaskView.prototype.onAward = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], function () { return __awaiter(_this, void 0, void 0, function () {
                var data, fun;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, TreasureManager.instance.openBox(160105)];
                        case 1:
                            data = _a.sent();
                            fun = function () {
                                GameMgr.getInstance().updateBaseData(1001, data.gold);
                                ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop });
                            };
                            ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: function () { fun(); } });
                            GameData.getInstance().task.taskTimes -= TaskManager.instance.surpriseTimes;
                            GameInfoManager.getInstance().saveInfo(GameConst.TASK_INFO);
                            this.refreshAward();
                            GameMgr.getInstance().hiddeBufferLoading();
                            return [2];
                    }
                });
            }); });
        };
        TaskView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        TaskView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.img_award.off(Laya.Event.CLICK, this, this.onAward);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TASK, this, this.initView);
        };
        TaskView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return TaskView;
    }(BaseSceneUISkinPopView));

    var SetView = (function (_super) {
        __extends(SetView, _super);
        function SetView() {
            var _this = _super.call(this) || this;
            _this.className_key = "SetView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.skin = "home/set/SetScene.json";
            return _this;
        }
        SetView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        SetView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                    var phone = MiniManeger.instance.systemInfo;
                    var offset = { w: phone.screenWidth / 2, h: phone.screenHeight };
                    MiniManeger.instance.showBannerAd(offset);
                }
            }
        };
        SetView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.img_music.on(Laya.Event.CLICK, this, this.onMusic);
            this.img_effect.on(Laya.Event.CLICK, this, this.onEffect);
            this.img_vibrate.on(Laya.Event.CLICK, this, this.onVibrate);
        };
        SetView.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            this.musicSwitch();
            this.effectSwitch();
            this.vibrateSwitch();
        };
        SetView.prototype.onMusic = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SoundUtil.getInstance().musicOpen = !SoundUtil.getInstance().musicOpen;
            this.musicSwitch();
        };
        SetView.prototype.onEffect = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SoundUtil.getInstance().soundOpen = !SoundUtil.getInstance().soundOpen;
            this.effectSwitch();
        };
        SetView.prototype.onVibrate = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SoundUtil.getInstance().shakeIsOpen = !SoundUtil.getInstance().shakeIsOpen;
            this.vibrateSwitch();
        };
        SetView.prototype.musicSwitch = function () {
            var img1 = this.img_music.getChildAt(0);
            var img2 = this.img_music.getChildAt(1);
            img1.visible = SoundUtil.getInstance().musicOpen;
            img2.visible = !SoundUtil.getInstance().musicOpen;
        };
        SetView.prototype.effectSwitch = function () {
            var img1 = this.img_effect.getChildAt(0);
            var img2 = this.img_effect.getChildAt(1);
            img1.visible = SoundUtil.getInstance().soundOpen;
            img2.visible = !SoundUtil.getInstance().soundOpen;
        };
        SetView.prototype.vibrateSwitch = function () {
            var img1 = this.img_vibrate.getChildAt(0);
            var img2 = this.img_vibrate.getChildAt(1);
            img1.visible = SoundUtil.getInstance().shakeIsOpen;
            img2.visible = !SoundUtil.getInstance().shakeIsOpen;
        };
        SetView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        SetView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.img_music.off(Laya.Event.CLICK, this, this.onMusic);
            this.img_effect.off(Laya.Event.CLICK, this, this.onEffect);
            this.img_vibrate.off(Laya.Event.CLICK, this, this.onVibrate);
        };
        SetView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MiniManeger.instance.hideBanner();
        };
        return SetView;
    }(BaseSceneUISkinPopView));

    var NoVacancy = (function (_super) {
        __extends(NoVacancy, _super);
        function NoVacancy(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "NoVacancy";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.data = data_;
            _this.skin = "home/common/NoVacancy.json";
            return _this;
        }
        NoVacancy.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_back.addComponent(CustomScaleComponent);
            this.btn_ok.addComponent(CustomScaleComponent);
        };
        NoVacancy.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        NoVacancy.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_ok.on(Laya.Event.CLICK, this, this.onSure);
        };
        NoVacancy.prototype.setData = function (data_) {
            this.data = data_;
            if (this.isCreate) {
                this.initView();
            }
        };
        NoVacancy.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            if (!this.data)
                return;
            this.btn_ok.label = this.data.sureTxt;
        };
        NoVacancy.prototype.onSure = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.data.sureFun && this.data.sureFun();
            this.removeSelf();
        };
        NoVacancy.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        NoVacancy.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_ok.off(Laya.Event.CLICK, this, this.onSure);
        };
        NoVacancy.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return NoVacancy;
    }(BaseSceneUISkinPopView));

    var LotteryView = (function (_super) {
        __extends(LotteryView, _super);
        function LotteryView() {
            var _this = _super.call(this) || this;
            _this.className_key = "LotteryView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.skin = "home/lottery/LotteryScene.json";
            return _this;
        }
        LotteryView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.addComponent(CustomScaleComponent);
            this.btn_lottery.addComponent(CustomScaleComponent);
        };
        LotteryView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        LotteryView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
        };
        LotteryView.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, i, len;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.btn_lottery.mouseEnabled = true;
                            this.btn_close.mouseEnabled = true;
                            this.judgeCanFreeLottery();
                            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
                            _a = this;
                            return [4, ConfigManager.getInstance().getLotteryConfig()];
                        case 1:
                            _a.lotteryConfig = _b.sent();
                            if (!this.weightArr) {
                                this.weightArr = [];
                                for (i = 0, len = this.lotteryConfig.length; i < len; i++) {
                                    this.weightArr.push(this.lotteryConfig[i].weight);
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        LotteryView.prototype.judgeCanFreeLottery = function () {
            var isSameDay = Utils.judgeIsOnTheSameDay(GameData.getInstance().playerData.lotteryData.time, new Date().getTime());
            if (isSameDay) {
                var icon_video = this.btn_lottery.getChildAt(1);
                var icon_zi = this.btn_lottery.getChildAt(0);
                if (GameData.getInstance().playerData.lotteryData.count <= 0) {
                    icon_zi.x = 105;
                    icon_video.visible = true;
                }
                else {
                    icon_zi.x = 161;
                    icon_video.visible = false;
                }
            }
            else {
                GameData.getInstance().playerData.lotteryData.time = new Date().getTime();
                GameData.getInstance().playerData.lotteryData.count = 1;
                this.judgeCanFreeLottery();
            }
        };
        LotteryView.prototype.onLottery = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var fun = function () {
                var icon_video = _this.btn_lottery.getChildAt(1);
                if (icon_video.visible) {
                    MiniManeger.instance.playViderAd({
                        successFun: function () {
                            _this.awardIndex = GameMgr.getInstance().getRandomByWeightArr(_this.weightArr);
                            TaskManager.instance.updateTask(TaskEnum.TASK_2013, 1);
                            _this.lotteryAni();
                        },
                        failFun: function () {
                        },
                        errorFun: function () {
                        }
                    });
                }
                else {
                    _this.awardIndex = GameMgr.getInstance().getRandomByWeightArr(_this.weightArr);
                    TaskManager.instance.updateTask(TaskEnum.TASK_2013, 1);
                    _this.lotteryAni();
                }
            };
            if (GameData.getInstance().treasure.vacancy) {
                fun();
            }
            else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "继续", sureFun: function () { fun(); } });
            }
        };
        LotteryView.prototype.lotteryAni = function () {
            var _this = this;
            this.btn_lottery.mouseEnabled = false;
            this.btn_close.mouseEnabled = false;
            GameMgr.getInstance().com_TopBar.mouseEnabled = false;
            GameData.getInstance().playerData.lotteryData.count -= 1;
            GameData.getInstance().playerData.lotteryData.time = new Date().getTime();
            Laya.Tween.clearAll(this.img_table);
            this.img_table.rotation = 0;
            var toRotation = 135 - (this.awardIndex) * 45 + 360 * 3;
            Laya.Tween.to(this.img_table, { rotation: toRotation }, 4000, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
                _this.showAward();
            }));
        };
        LotteryView.prototype.showAward = function () {
            this.btn_lottery.mouseEnabled = true;
            this.btn_close.mouseEnabled = true;
            GameMgr.getInstance().com_TopBar.mouseEnabled = true;
            this.judgeCanFreeLottery();
            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
            var result = this.lotteryConfig[this.awardIndex];
            switch (result.id) {
                case 1:
                case 3:
                case 7:
                    var dataArr_1;
                    if (result.id == 1) {
                        var boo = GameManager.instance.getRandomOneBooster();
                        dataArr_1 = TreasureManager.instance.getAwardPropData([boo]);
                    }
                    else if (result.id == 3) {
                        var cat = GameManager.instance.getRandomOneCat();
                        dataArr_1 = TreasureManager.instance.getAwardPropData([cat]);
                    }
                    else {
                        var ship = GameManager.instance.getRandomOneShip();
                        dataArr_1 = TreasureManager.instance.getAwardPropData([ship]);
                    }
                    GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                        ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr_1 });
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                    break;
                case 2:
                case 6:
                    if (GameData.getInstance().treasure.vacancy) {
                        var bid_1 = 160001;
                        if (result.id == 2) {
                            TreasureManager.instance.getBox(bid_1);
                        }
                        else {
                            bid_1 = 160002;
                            TreasureManager.instance.getBox(bid_1);
                        }
                        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                        GameMgr.getInstance().showBufferLoading();
                        ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                            ViewManager.getInstance().showView(AwardScene, {
                                type: 2, data: [{ awardId: bid_1, awardNum: 1 }]
                            });
                            GameMgr.getInstance().hiddeBufferLoading();
                        });
                    }
                    else {
                        ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
                    }
                    break;
                case 4:
                case 5:
                case 8:
                    var dataArr1_1;
                    if (result.id == 4) {
                        dataArr1_1 = [{ awardId: 1002, awardNum: result.rewardNum }];
                    }
                    else {
                        dataArr1_1 = [{ awardId: 1001, awardNum: result.rewardNum }];
                    }
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                        ViewManager.getInstance().showView(AwardScene, {
                            type: 2, data: dataArr1_1,
                            sureFun: function () {
                                if (result.id == 4) {
                                    GameMgr.getInstance().updateBaseData(1002, result.rewardNum);
                                }
                                else {
                                    GameMgr.getInstance().updateBaseData(1001, result.rewardNum);
                                }
                            }
                        });
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                    break;
            }
        };
        LotteryView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        LotteryView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
        };
        LotteryView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.Tween.clearAll(this.img_table);
            this.img_table.rotation = 0;
        };
        return LotteryView;
    }(BaseSceneUISkinPopView));

    var OpenTreasure = (function (_super) {
        __extends(OpenTreasure, _super);
        function OpenTreasure(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "OpenTreasure";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.data = _data;
            _this.skin = "home/treasure/OpenTreasure.json";
            return _this;
        }
        OpenTreasure.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        OpenTreasure.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        OpenTreasure.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        OpenTreasure.prototype.addEvent = function () {
        };
        OpenTreasure.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, img, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr.getInstance().hideTopBar();
                            if (!this.data)
                                return [2];
                            console.log("OpenTreasure >>> initView", this.data);
                            if (!this.data.data.config) return [3, 1];
                            url = "resource/assets/img/home/ani/" + this.data.data.config.icon + "_Sk.sk";
                            this.show2dBoonAnimation(url, this.box_ani, 0, true, 1, 430, 450, 0);
                            return [3, 3];
                        case 1:
                            img = new Laya.Image();
                            return [4, TreasureManager.instance.getTreasureConfig(this.data.data.id)];
                        case 2:
                            data = _a.sent();
                            img.skin = "resource/assets/img/icon/box/" + data.icon + ".png";
                            img.scale(0.6, 0.6);
                            img.centerX = img.centerY = 0;
                            this.box_ani.addChild(img);
                            this.box_ani.on(Laya.Event.CLICK, this, this.onOpen);
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        OpenTreasure.prototype.show2dBoonAnimation = function (url, dbBox, index, loop, rate, x, y, rotation) {
            var _this = this;
            return new Promise(function (resolve) {
                var self = _this;
                if (!self.boomAnimation)
                    self.boomAnimation = new Laya.Skeleton();
                self.boomAnimation.load(url, Laya.Handler.create(self, function () {
                    if (!self.boomAnimation.player) {
                        resolve();
                        return;
                    }
                    self.boomAnimation.player.playbackRate = rate;
                    self.boomAnimation.scale(2, 2);
                    dbBox.visible = true;
                    dbBox.addChild(self.boomAnimation);
                    self.boomAnimation.x = x;
                    self.boomAnimation.y = y;
                    self.boomAnimation.rotation = rotation;
                    self.boomAnimation.play(index, loop);
                    dbBox.on(Laya.Event.CLICK, _this, _this.onOpen);
                }));
            });
        };
        OpenTreasure.prototype.onOpen = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.ChestOpen);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["award", "propPublic"], function () { return __awaiter(_this, void 0, void 0, function () {
                var data, fun1, fun;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, TreasureManager.instance.openBox(this.data.data.id, this.data.data.uid)];
                        case 1:
                            data = _a.sent();
                            fun1 = function () {
                                ViewManager.getInstance().showView(AwardScene, { type: 3, data: data.prop });
                            };
                            fun = function () {
                                GameMgr.getInstance().updateBaseData(1001, data.gold);
                                ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop, sureFun: function () { fun1(); } });
                            };
                            this.data.fun && this.data.fun();
                            this.removeSelf();
                            ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: function () { fun(); } });
                            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                            GameMgr.getInstance().hiddeBufferLoading();
                            return [2];
                    }
                });
            }); });
        };
        OpenTreasure.prototype.removeEvent = function () {
            this.box_ani.off(Laya.Event.CLICK, this, this.onOpen);
        };
        OpenTreasure.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            GameMgr.getInstance().showTopBar();
            this.removeEvent();
            if (this.boomAnimation) {
                this.boomAnimation.stop();
                this.box_ani.removeChild(this.boomAnimation);
            }
            this.box_ani.removeChildren();
            this.data = null;
            MiniManeger.instance.hideBanner();
        };
        return OpenTreasure;
    }(BaseSceneUISkinPopView));

    var TreasureView = (function (_super) {
        __extends(TreasureView, _super);
        function TreasureView(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "TreasureView";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE;
            _this.data = _data;
            _this.skin = "home/treasure/TreasureScene.json";
            return _this;
        }
        TreasureView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_close.addComponent(CustomScaleComponent);
            this.btn_open.addComponent(CustomScaleComponent);
            this.btn_jump.addComponent(CustomScaleComponent);
        };
        TreasureView.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TreasureView.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TreasureView.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_open.on(Laya.Event.CLICK, this, this.onOpen);
            this.btn_jump.on(Laya.Event.CLICK, this, this.onJump);
            EventMgr.getInstance().addEvent(GameEvent.TIME_METER, this, this.downTime);
        };
        TreasureView.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, hour, min, min, sec;
                return __generator(this, function (_a) {
                    SoundManager.getInstance().playEffect(SoundConst.OpenPop);
                    if (!this.data)
                        return [2];
                    this.box_open1.visible = this.box_open2.visible = false;
                    this.box_jump1.visible = this.box_jump2.visible = false;
                    this.btn_jump.visible = true;
                    this.img_time.visible = false;
                    data = this.data;
                    this.img_icon.skin = "resource/assets/img/icon/box/" + data.config.icon + ".png";
                    if (data.state == 0) {
                        this.box_open1.visible = true;
                        hour = Math.floor(data.config.timeToOpen / 60);
                        min = data.config.timeToOpen % 60;
                        this.img_openCostM.width = min > 9 ? 34 * 2 : 34;
                        BitmapLabelUtils.setLabel(this.img_openCostH, hour + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
                        BitmapLabelUtils.setLabel(this.img_openCostM, min + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
                        this.costDim = Math.floor((20 / 60) * data.config.timeToOpen);
                        BitmapLabelUtils.setLabel(this.img_jumpCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
                        this.box_jump1.visible = true;
                    }
                    else if (data.state == 1) {
                        this.img_time.visible = true;
                        this.box_open2.visible = true;
                        this.box_jump2.visible = true;
                        if (data.videoJump)
                            this.btn_jump.visible = false;
                        this.surplusTime = data.surplusTime;
                        min = Math.floor(this.surplusTime / 60);
                        sec = this.surplusTime % 60;
                        this.lab_time.text = min + "m" + sec + "s";
                        this.costDim = Math.floor((20 / 60) * Math.ceil(this.surplusTime / 60));
                        BitmapLabelUtils.setLabel(this.img_openCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
                    }
                    else {
                    }
                    return [2];
                });
            });
        };
        TreasureView.prototype.downTime = function () {
            if (this.data.state != 1 || !this.surplusTime)
                return;
            this.surplusTime--;
            var min = Math.floor(this.surplusTime / 60);
            var sec = this.surplusTime % 60;
            this.lab_time.text = min + "m" + sec + "s";
            this.costDim = Math.floor((20 / 60) * Math.ceil(this.surplusTime / 60));
            BitmapLabelUtils.setLabel(this.img_openCostD, this.costDim + "", "resource/assets/img/home/treasure/treasure_sz/", 0, ".png", "center");
            if (this.surplusTime <= 0) {
                TreasureManager.instance.boxDownTimeEnd(this.data.uid);
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                this.removeSelf();
                MiniManeger.instance.hideBanner();
            }
        };
        TreasureView.prototype.onOpen = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var data = this.data;
            if (data.state == 0) {
                if (TreasureManager.instance.getIsDownTimeState()) {
                    TipsManager.getInstance().showDefaultTips("当前有其他宝箱处于倒计时");
                }
                else {
                    TreasureManager.instance.openBoxDownTime(data.uid, data.config.timeToOpen * 60);
                    this.data.state = 1;
                    this.data.surplusTime = data.config.timeToOpen * 60;
                    this.initView();
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                }
            }
            else if (data.state == 1) {
                if (GameData.getInstance().playerData.diamond >= this.costDim) {
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["treasure"], function () {
                        ViewManager.getInstance().showView(OpenTreasure, {
                            data: _this.data,
                            fun: function () {
                                GameMgr.getInstance().updateBaseData(1002, _this.costDim * -1);
                            }
                        });
                        _this.removeSelf();
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                }
                else {
                    TipsManager.getInstance().showDefaultTips("钻石不足");
                }
            }
            else {
            }
        };
        TreasureView.prototype.onJump = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var data = this.data;
            if (data.state == 0) {
                if (GameData.getInstance().playerData.diamond >= this.costDim) {
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["treasure"], function () {
                        ViewManager.getInstance().showView(OpenTreasure, {
                            data: _this.data,
                            fun: function () {
                                GameMgr.getInstance().updateBaseData(1002, _this.costDim * -1);
                            }
                        });
                        _this.removeSelf();
                        GameMgr.getInstance().hiddeBufferLoading();
                    });
                }
                else {
                    TipsManager.getInstance().showDefaultTips("钻石不足");
                }
            }
            else if (data.state == 1) {
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        TreasureManager.instance.boxDownTimeReduce(data.uid, 30 * 60);
                        EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                        _this.removeSelf();
                        MiniManeger.instance.hideBanner();
                    },
                    failFun: function () {
                    },
                    errorFun: function () {
                    }
                });
            }
            else {
            }
        };
        TreasureView.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            MiniManeger.instance.hideBanner();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        TreasureView.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_open.off(Laya.Event.CLICK, this, this.onOpen);
            this.btn_jump.off(Laya.Event.CLICK, this, this.onJump);
            EventMgr.getInstance().removeEvent(GameEvent.TIME_METER, this, this.downTime);
        };
        TreasureView.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            if (this.moreGameItem) {
                this.moreGameItem.removeSelf();
                this.moreGameItem = null;
            }
            if (this.moreGameItem1) {
                this.moreGameItem1.removeSelf();
                this.moreGameItem1 = null;
            }
            this.data = null;
        };
        return TreasureView;
    }(BaseSceneUISkinPopView));

    var TreasureItem = (function (_super) {
        __extends(TreasureItem, _super);
        function TreasureItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "TreasureItem";
            _this.data = _data;
            _this.skin = "home/treasure/TreasureItem.json";
            return _this;
        }
        TreasureItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_open.addComponent(CustomScaleComponent);
        };
        TreasureItem.prototype.adaptationStage = function () {
            this.size(260, 200);
        };
        TreasureItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TreasureItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        TreasureItem.prototype.addEvent = function () {
            this.btn_open.on(Laya.Event.CLICK, this, this.onOpen);
            this.img_icon.on(Laya.Event.CLICK, this, this.onOpen);
            EventMgr.getInstance().addEvent(GameEvent.TIME_METER, this, this.downTime);
        };
        TreasureItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.img_icon.skin = "resource/assets/img/icon/box/" + data.config.icon + ".png";
                    if (data.state == 0) {
                        this.img_suo.visible = true;
                        this.lab_open.text = "打开";
                        this.lab_open.centerX = 20;
                    }
                    else if (data.state == 1) {
                        this.img_suo.visible = false;
                        this.lab_open.text = Utils.formatTime(data.surplusTime);
                        this.lab_open.centerX = 0;
                    }
                    else {
                        this.img_suo.visible = false;
                        this.lab_open.text = "打开";
                        this.lab_open.centerX = 0;
                    }
                    return [2];
                });
            });
        };
        TreasureItem.prototype.downTime = function () {
            if (this.data.state != 1 || !this.data.surplusTime)
                return;
            this.data.surplusTime--;
            this.lab_open.text = Utils.formatTime(this.data.surplusTime);
            if (this.data.surplusTime <= 0) {
                TreasureManager.instance.boxDownTimeEnd(this.data.uid);
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
            }
        };
        TreasureItem.prototype.onOpen = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var data = this.data;
            if (data.state == 2) {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["treasure"], function () {
                    ViewManager.getInstance().showView(OpenTreasure, { data: _this.data });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            else {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["treasure"], function () {
                    ViewManager.getInstance().showView(TreasureView, Utils.copy(_this.data));
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
        };
        TreasureItem.prototype.removeEvent = function () {
            this.btn_open.off(Laya.Event.CLICK, this, this.onOpen);
            this.img_icon.off(Laya.Event.CLICK, this, this.onOpen);
            EventMgr.getInstance().removeEvent(GameEvent.TIME_METER, this, this.downTime);
        };
        TreasureItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return TreasureItem;
    }(BaseSceneUISkin));

    var FosterItem = (function (_super) {
        __extends(FosterItem, _super);
        function FosterItem() {
            var _this = _super.call(this) || this;
            _this.className_key = "FosterItem";
            _this.skin = "home/foster/FosterItem.json";
            return _this;
        }
        FosterItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        FosterItem.prototype.adaptationStage = function () {
            this.size(620, 74);
        };
        FosterItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        FosterItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        FosterItem.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onSelect);
        };
        FosterItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data.data;
                    this.img_state.visible = this.img_select.visible = false;
                    this.img_bg.skin = data.index % 2 == 0 ? "" : "resource/assets/img/home/rank/rank_diban_8.png";
                    this.img_rank.skin = "";
                    if (data.reward) {
                        this.box_player.visible = false;
                        this.box_award.visible = true;
                        this.img_state.skin = "resource/assets/img/home/rank/rank_gou.png";
                        this.showReward(data.reward);
                    }
                    else {
                        this.box_award.visible = false;
                        this.box_player.visible = true;
                        this.lab_rank.text = data.rank + "";
                        this.lab_name.text = data.name + "";
                        this.lab_combat.text = data.combat + "";
                        if (data.isSelf) {
                            this.img_bg.skin = "resource/assets/img/home/rank/rank_diban_7.png";
                        }
                        if (data.rank <= 3) {
                            this.img_rank.skin = "resource/assets/img/home/rank/rank_dengji_" + data.rank + ".png";
                        }
                        this.img_state.skin = "resource/assets/img/home/rank/rank_cha.png";
                    }
                    if (data.isBeat && !data.isSelf) {
                        this.img_state.visible = true;
                        this.lab_rank.text = "";
                    }
                    if (this.data.type == 1 && data.select) {
                        this.img_select.visible = true;
                    }
                    return [2];
                });
            });
        };
        FosterItem.prototype.showReward = function (reward) {
            var id = parseInt(reward.split("|")[0]);
            if (id < 10000) {
                this.img_icon.scale(0.7, 0.7);
                if (id == 1001) {
                    this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
                }
                else {
                    this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
                }
            }
            else {
                this.img_icon.scale(1, 1);
                if (id == 160201) {
                    this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_14.png";
                }
                else if (id == 160202) {
                    this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_13.png";
                }
                else {
                    this.img_icon.skin = "";
                }
            }
        };
        FosterItem.prototype.onSelect = function () {
            if (!this.data || this.data.type == 2 || this.data.data.select)
                return;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            EventMgr.getInstance().sendEvent(GameEvent.SELECT_RANK, this.data.data);
        };
        FosterItem.prototype.showSelect = function (show) {
            this.data.data.select = show;
            this.img_select.visible = show;
        };
        FosterItem.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onSelect);
        };
        FosterItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return FosterItem;
    }(BaseSceneUISkin));

    var ShareVideo = (function (_super) {
        __extends(ShareVideo, _super);
        function ShareVideo() {
            var _this = _super.call(this) || this;
            _this.className_key = "ShareVideo";
            _this.skin = "home/tt/ShareVideo.json";
            return _this;
        }
        ShareVideo.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_share.addComponent(CustomScaleComponent);
            this.btn_close.addComponent(CustomScaleComponent);
        };
        ShareVideo.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        ShareVideo.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        ShareVideo.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
        };
        ShareVideo.prototype.onShare = function () {
            var _this = this;
            this.btn_share.mouseEnabled = false;
            MiniManeger.instance.shareGameVideo({
                successFun: function () {
                    _this.btn_share.mouseEnabled = true;
                    GameManager.instance.freeDiamond(20);
                    _this.removeSelf();
                },
                failFun: function () {
                    _this.btn_share.mouseEnabled = true;
                }
            });
        };
        ShareVideo.prototype.initView = function () {
            var _this = this;
            GameMgr.getInstance().hideTopBar();
            this.txt_award.text = 'x20';
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            this.btn_close.centerY = 600;
            if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                var phone = MiniManeger.instance.systemInfo;
                var offset_1 = { w: phone.screenWidth / 2, h: phone.screenHeight };
                if (GameData.getInstance().isConVersion) {
                    this.btn_close.centerY = 380;
                    MiniManeger.instance.showBannerAd(offset_1);
                }
                else {
                    Laya.timer.once(1500, this, function () {
                        _this.btn_close.centerY = 380;
                        MiniManeger.instance.showBannerAd(offset_1);
                    });
                }
            }
        };
        ShareVideo.prototype.onClose = function () {
            this.viewData_ && this.viewData_.failFun && this.viewData_.failFun();
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        ShareVideo.prototype.removeSelf = function () {
            GameMgr.getInstance().showTopBar();
            return _super.prototype.removeSelf.call(this);
        };
        ShareVideo.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
        };
        ShareVideo.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MiniManeger.instance.hideBanner();
        };
        return ShareVideo;
    }(BaseSceneUISkinPopView));

    var RegattaOverScene = (function (_super) {
        __extends(RegattaOverScene, _super);
        function RegattaOverScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "RegattaOverScene";
            _this.canFreeGetDiamond = false;
            _this.data = data_;
            _this.skin = "game/regatta/RegattaOverScene.json";
            return _this;
        }
        RegattaOverScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.panel_rank.vScrollBarSkin = "";
            this.panel_rank.elasticEnabled = true;
            this.panel_rank.vScrollBar.elasticDistance = 50;
            this.panel_rank.vScrollBar.elasticBackTime = 100;
            this.btn_sure.addComponent(CustomScaleComponent);
            this.btn_share.addComponent(CustomScaleComponent);
            this.btn_shareVideo.addComponent(CustomScaleComponent);
        };
        RegattaOverScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        RegattaOverScene.prototype.addEvent = function () {
            this.btn_sure.on(Laya.Event.CLICK, this, this.onSure);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
            this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
        };
        RegattaOverScene.prototype.onShareVideo = function () {
            var _this = this;
            if (this.btn_shareVideo.gray)
                return;
            MiniManeger.instance.shareGameVideo({
                successFun: function () {
                    if (GameData.getInstance().isConVersion) {
                        GameManager.instance.freeDiamond(20);
                        _this.btn_shareVideo.gray = true;
                        _this.btn_shareVideo.getChildByName('icon_diomand').visible = false;
                    }
                }
            });
        };
        RegattaOverScene.prototype.setData = function (data_) {
            this.data = data_;
            if (this.isCreate) {
                this.initView();
            }
        };
        RegattaOverScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item, btn_share;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr.getInstance().showTopBar();
                            this.panel_rank.vScrollBar.value = 0;
                            return [4, RegattaManager.instance.getRegattaRank()];
                        case 1:
                            dataArr = _a.sent();
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                item = Laya.Pool.getItemByClass("FosterItem", FosterItem);
                                item.setData({ type: 2, data: dataArr[i] });
                                item.y = i * 72;
                                this.panel_rank.addChild(item);
                            }
                            RegattaManager.instance.unlockZone();
                            this.showAward();
                            this.canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();
                            btn_share = this.btn_share;
                            if (DeviceUtil.isTTMiniGame()) {
                                this.btn_shareVideo.visible = true;
                                this.btn_share.visible = false;
                                btn_share = this.btn_shareVideo;
                                this.btn_shareVideo.getChildByName('icon_diomand').visible = false;
                                if (this.canFreeGetDiamond && MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0) {
                                    this.btn_shareVideo.visible = false;
                                    this.btn_sure.centerX = 0;
                                    ViewManager.getInstance().showView(ShareVideo);
                                }
                                else {
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
                                btn_share.gray = false;
                                if (this.canFreeGetDiamond) {
                                    btn_share.getChildByName('icon_diomand').visible = true;
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        RegattaOverScene.prototype.getaward = function () {
            if (this.data.zoneAward) {
                var propAwardArr = this.data.zoneAward[0];
                var treaAwardArr_1 = this.data.zoneAward[1];
                var fun_1 = function () {
                    if (treaAwardArr_1.length > 0) {
                        var id = treaAwardArr_1.shift();
                        SoundManager.getInstance().playEffect(SoundConst.Reward);
                        var award = new localData.TimeBoxData();
                        award.id = id;
                        var data_1 = {
                            data: award,
                            fun: function () {
                                fun_1();
                            }
                        };
                        GameMgr.getInstance().showBufferLoading();
                        ResUtil.getIntance().loadGroups(["treasure"], function () {
                            ViewManager.getInstance().showView(OpenTreasure, data_1);
                            GameMgr.getInstance().hiddeBufferLoading();
                        });
                    }
                };
                if (propAwardArr.length > 0) {
                    SoundManager.getInstance().playEffect(SoundConst.Reward);
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 1, data: propAwardArr,
                        sureFun: function () {
                            fun_1();
                        }
                    });
                }
                else {
                    fun_1();
                }
            }
        };
        RegattaOverScene.prototype.showAward = function () {
            if (!this.data)
                return;
            var self = this;
            var fun = function () {
                self.getaward();
            };
            if (this.data.winAward) {
                SoundManager.getInstance().playEffect(SoundConst.Reward);
                var result_1 = this.data.winAward.reward.split("|");
                var id_1 = parseInt(result_1[0]);
                switch (id_1) {
                    case 160201:
                    case 160202:
                    case 160203:
                        var dataArr_1;
                        if (id_1 == 160203) {
                            var boo = GameManager.instance.getRandomOneBooster();
                            dataArr_1 = TreasureManager.instance.getAwardPropData([boo]);
                        }
                        else if (id_1 == 160202) {
                            var cat = GameManager.instance.getRandomOneCat();
                            dataArr_1 = TreasureManager.instance.getAwardPropData([cat]);
                        }
                        else {
                            var ship = GameManager.instance.getRandomOneShip();
                            dataArr_1 = TreasureManager.instance.getAwardPropData([ship]);
                        }
                        GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                        GameMgr.getInstance().showBufferLoading();
                        ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                            ViewManager.getInstance().showView(AwardScene, { type: 1, data: dataArr_1, sureFun: function () { fun(); } });
                            GameMgr.getInstance().hiddeBufferLoading();
                        });
                        break;
                    case 1001:
                    case 1002:
                        var dataArr1_1;
                        if (id_1 == 1002) {
                            dataArr1_1 = [{ awardId: 1002, awardNum: parseInt(result_1[1]) }];
                        }
                        else {
                            dataArr1_1 = [{ awardId: 1001, awardNum: parseInt(result_1[1]) }];
                        }
                        GameMgr.getInstance().showBufferLoading();
                        ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                            ViewManager.getInstance().showView(AwardScene, {
                                type: 2, data: dataArr1_1,
                                sureFun: function () {
                                    fun();
                                    if (id_1 == 1002) {
                                        dataArr1_1 = [{ awardId: 1002, awardNum: parseInt(result_1[1]) }];
                                        GameMgr.getInstance().updateBaseData(1002, parseInt(result_1[1]));
                                    }
                                    else {
                                        dataArr1_1 = [{ awardId: 1001, awardNum: parseInt(result_1[1]) }];
                                        GameMgr.getInstance().updateBaseData(1001, parseInt(result_1[1]));
                                    }
                                }
                            });
                            GameMgr.getInstance().hiddeBufferLoading();
                        });
                        break;
                }
            }
            else {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    fun();
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
        };
        RegattaOverScene.prototype.onSure = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().openGameScene(HomeScene);
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayRegattaView();
            this.removeSelf();
        };
        RegattaOverScene.prototype.onShare = function () {
            var _this = this;
            if (this.btn_share.gray)
                return;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.shareAppMessage({
                sucFun: function () {
                    if (_this.canFreeGetDiamond) {
                        GameManager.instance.freeDiamond(20);
                    }
                    _this.btn_share.gray = true;
                    _this.btn_share.getChildByName('icon_diomand').visible = false;
                }
            });
        };
        RegattaOverScene.prototype.recoverPool = function () {
            for (var i = 0, len = this.panel_rank.numChildren; i < len; i++) {
                var item = this.panel_rank.getChildAt(i);
                Laya.Pool.recover("FosterItem", item);
            }
            this.panel_rank.removeChildren();
        };
        RegattaOverScene.prototype.removeEvent = function () {
            this.btn_sure.off(Laya.Event.CLICK, this, this.onSure);
            this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
            this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
        };
        RegattaOverScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
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
        };
        return RegattaOverScene;
    }(BaseSceneUISkinPopView));

    var RegattaManager = (function () {
        function RegattaManager() {
        }
        ;
        Object.defineProperty(RegattaManager, "instance", {
            get: function () {
                if (RegattaManager.ins == null) {
                    RegattaManager.ins = new RegattaManager();
                }
                return RegattaManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        RegattaManager.prototype.getOpponentData = function (zoneNo) {
            return __awaiter(this, void 0, void 0, function () {
                var fileName, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            fileName = (40000 + zoneNo) + ".json";
                            _a = this;
                            return [4, GameManager.instance.loadCongigs("resource/assets/map/" + fileName)];
                        case 1:
                            _a.regattaConfig = _b.sent();
                            return [2, this.regattaConfig];
                    }
                });
            });
        };
        RegattaManager.prototype.getZoneData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var zoneConfigs, matchInfo, dataArr, i, len, config, data, data1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getRegattaZoneConfig()];
                        case 1:
                            zoneConfigs = _a.sent();
                            this.maxZone = zoneConfigs.length;
                            matchInfo = GameData.getInstance().playerData.matchInfo;
                            dataArr = [];
                            for (i = 0, len = zoneConfigs.length; i < len; i++) {
                                config = zoneConfigs[i];
                                data = new localData.ZoneData();
                                data.zoneNo = config.zoneNo;
                                data.playerNo = config.playerNo;
                                data.unlockStarMax = config.unlockStarMax;
                                data.unlockSlotMax = config.unlockSlotMax;
                                data.reward = config.reward;
                                if (matchInfo.zoneNo == this.maxZone && matchInfo.rank == 1) {
                                    data.pass = true;
                                    data.curZone = false;
                                }
                                else {
                                    data.pass = config.zoneNo < matchInfo.zoneNo;
                                    data.curZone = config.zoneNo == matchInfo.zoneNo;
                                }
                                data.unlock = config.zoneNo <= matchInfo.zoneNo;
                                data.isShowSlot = i < 3;
                                data.isShowStar = i < 4;
                                dataArr.push(data);
                            }
                            data1 = new localData.ZoneData();
                            data1.zoneNo = 1000;
                            data1.isEnd = true;
                            dataArr.push(data1);
                            return [2, dataArr];
                    }
                });
            });
        };
        RegattaManager.prototype.zoneIsPass = function (zoneNo) {
            var matchInfo = GameData.getInstance().playerData.matchInfo;
            if (zoneNo == matchInfo.zoneNo) {
                return matchInfo.rank == 1;
            }
            else {
                return zoneNo < matchInfo.zoneNo;
            }
        };
        RegattaManager.prototype.getRegattaAwardData = function (zoneNo) {
            return __awaiter(this, void 0, void 0, function () {
                var oppConfig, dataArr, i, len, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getRegattaAwardConfig()];
                        case 1:
                            oppConfig = _a.sent();
                            dataArr = [];
                            for (i = 0, len = oppConfig.length; i < len; i++) {
                                config = oppConfig[i];
                                if (config.zoneNo == zoneNo) {
                                    dataArr.push(config);
                                }
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        RegattaManager.prototype.getCurRank = function () {
            return __awaiter(this, void 0, void 0, function () {
                var netInfo, oppConfig, players, selfRank;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            netInfo = GameData.getInstance().playerData.matchInfo;
                            if (!netInfo.rank) return [3, 1];
                            return [2, netInfo.rank];
                        case 1: return [4, this.getOpponentData(netInfo.zoneNo)];
                        case 2:
                            oppConfig = _a.sent();
                            players = oppConfig.players;
                            selfRank = players.length + 1;
                            GameData.getInstance().playerData.matchInfo.rank = selfRank;
                            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                            return [2, selfRank];
                    }
                });
            });
        };
        RegattaManager.prototype.getRegattaRank = function (zoneNo) {
            return __awaiter(this, void 0, void 0, function () {
                var isPass, oppConfig, players, dataArr, i, len, config, data, netInfo, selfRank, combat, i, len, awardConfig, i, len, award;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isPass = false;
                            if (zoneNo) {
                                isPass = this.zoneIsPass(zoneNo);
                            }
                            else {
                                zoneNo = GameData.getInstance().playerData.matchInfo.zoneNo;
                            }
                            return [4, this.getOpponentData(zoneNo)];
                        case 1:
                            oppConfig = _a.sent();
                            GameData.getInstance().otherprop = oppConfig.star;
                            players = oppConfig.players;
                            dataArr = [];
                            for (i = 0, len = players.length; i < len; i++) {
                                config = players[i];
                                data = new localData.RankData();
                                data.type = 1;
                                data.zoneNo = zoneNo;
                                data.rank = i + 1;
                                data.name = config.nickName;
                                data.combat = config.sun;
                                data.isSelf = false;
                                data.shipInfo = config.shipInfo;
                                dataArr.push(data);
                            }
                            netInfo = GameData.getInstance().playerData.matchInfo;
                            selfRank = netInfo.rank;
                            combat = GameManager.instance.calCombat();
                            if (!isPass) {
                                if (selfRank) {
                                    dataArr.splice(selfRank - 1, 0, {
                                        type: 1,
                                        zoneNo: netInfo.zoneNo,
                                        rank: selfRank,
                                        name: GameData.getInstance().userInfo.nick,
                                        combat: combat,
                                        isSelf: true,
                                        shipInfo: GameData.getInstance().localUserShipInfo
                                    });
                                }
                                else {
                                    selfRank = players.length + 1;
                                    GameData.getInstance().playerData.matchInfo.rank = selfRank;
                                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                                    dataArr.push({
                                        type: 1,
                                        zoneNo: netInfo.zoneNo,
                                        rank: selfRank,
                                        name: GameData.getInstance().userInfo.nick,
                                        combat: combat,
                                        isSelf: true,
                                        shipInfo: GameData.getInstance().localUserShipInfo
                                    });
                                }
                                dataArr.forEach(function (v, i) { v.rank = i + 1; });
                                for (i = 0, len = players.length; i < len; i++) {
                                    if (i == selfRank - 2) {
                                        GameData.getInstance().localOtherShipInfo = players[i].shipInfo;
                                        break;
                                    }
                                }
                            }
                            return [4, this.getRegattaAwardData(zoneNo)];
                        case 2:
                            awardConfig = _a.sent();
                            for (i = 0, len = awardConfig.length; i < len; i++) {
                                award = awardConfig[i];
                                dataArr.push({
                                    type: 2,
                                    zoneNo: zoneNo,
                                    rank: award.rank,
                                    reward: award.reward
                                });
                            }
                            dataArr.sort(function (a, b) {
                                var arank = a.rank, brank = b.rank;
                                if (arank == brank) {
                                    var atype = a.type, btype = b.type;
                                    return btype - atype;
                                }
                                else {
                                    return arank - brank;
                                }
                            });
                            dataArr.forEach(function (v, i) {
                                v.index = i + 1;
                                v.isBeat = isPass ? true : v.rank >= selfRank;
                                v.select = isPass ? i == 0 : v.isSelf;
                            });
                            console.log("排名信息", dataArr);
                            this.curRankData = dataArr;
                            return [2, dataArr];
                    }
                });
            });
        };
        RegattaManager.prototype.getNextOpponentData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var netInfo, oppConfig, players, selfRank, i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            netInfo = GameData.getInstance().playerData.matchInfo;
                            return [4, this.getOpponentData(netInfo.zoneNo)];
                        case 1:
                            oppConfig = _a.sent();
                            players = oppConfig.players;
                            selfRank = netInfo.rank;
                            if (!selfRank)
                                selfRank = players.length + 1;
                            for (i = 0, len = players.length; i < len; i++) {
                                if (i == selfRank - 2) {
                                    GameData.getInstance().localOtherShipInfo = players[i].shipInfo;
                                    break;
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        RegattaManager.prototype.judgeIsEndRegatta = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var netInfo, awardData, i, len, data_1, dataArr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("判断是否结束帆船赛", data);
                            if (!(data.curBlood > 0)) return [3, 6];
                            netInfo = GameData.getInstance().playerData.matchInfo;
                            netInfo.rank = netInfo.rank - 1;
                            awardData = void 0;
                            for (i = 0, len = this.curRankData.length; i < len; i++) {
                                data_1 = this.curRankData[i];
                                if (data_1.type == 2 && data_1.rank == netInfo.rank) {
                                    awardData = data_1;
                                    break;
                                }
                            }
                            GameData.getInstance().playerData.matchInfo = netInfo;
                            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                            return [4, this.getZoneAward()];
                        case 1:
                            dataArr = _a.sent();
                            if (!awardData) return [3, 2];
                            ViewManager.getInstance().showView(RegattaOverScene, { winAward: awardData, zoneAward: dataArr });
                            return [2, true];
                        case 2:
                            if (!(netInfo.rank == 1)) return [3, 3];
                            ViewManager.getInstance().showView(RegattaOverScene, { winAward: awardData, zoneAward: dataArr });
                            return [2, true];
                        case 3: return [4, this.getNextOpponentData()];
                        case 4:
                            _a.sent();
                            return [2, false];
                        case 5: return [3, 7];
                        case 6:
                            ViewManager.getInstance().showView(RegattaOverScene);
                            return [2, true];
                        case 7: return [2];
                    }
                });
            });
        };
        RegattaManager.prototype.unlockZone = function () {
            var netInfo = GameData.getInstance().playerData.matchInfo;
            if (netInfo.rank == 1) {
                if (netInfo.zoneNo + 1 <= this.maxZone) {
                    netInfo.zoneNo += 1;
                    netInfo.rank = null;
                    GameData.getInstance().playerData.playerLevel += 1;
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                }
            }
        };
        RegattaManager.prototype.getZoneAward = function () {
            return __awaiter(this, void 0, void 0, function () {
                var zoneConfigs, matchInfo, dataArr, propArr, treasureArr, i, len, awardArr, j, len_1, id, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().playerData.matchInfo.rank == 1)) return [3, 2];
                            return [4, ConfigManager.getInstance().getRegattaZoneConfig()];
                        case 1:
                            zoneConfigs = _a.sent();
                            matchInfo = GameData.getInstance().playerData.matchInfo;
                            dataArr = [];
                            propArr = [];
                            treasureArr = [];
                            for (i = 0, len = zoneConfigs.length; i < len; i++) {
                                if (matchInfo.zoneNo == zoneConfigs[i].zoneNo) {
                                    GameData.getInstance().playerData.maxSlot = zoneConfigs[i].unlockSlotMax;
                                    awardArr = zoneConfigs[i].reward.split(",");
                                    for (j = 0, len_1 = awardArr.length; j < len_1; j++) {
                                        id = parseInt(awardArr[j].split("|")[0]);
                                        if (id > 160000 && id < 170000) {
                                            treasureArr.push(id + '');
                                        }
                                        else {
                                            data = GameManager.instance.getOnePropById(id + '');
                                            propArr.push(data);
                                        }
                                    }
                                    break;
                                }
                            }
                            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                            GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                            dataArr.push(TreasureManager.instance.getAwardPropData(propArr), treasureArr);
                            return [2, dataArr];
                        case 2: return [2, null];
                    }
                });
            });
        };
        return RegattaManager;
    }());

    var AdventureEmenyScene = (function (_super) {
        __extends(AdventureEmenyScene, _super);
        function AdventureEmenyScene(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "AdventureEmenyScene";
            _this.data = _data;
            _this.skin = "home/foster/AdventureEmenyScene.json";
            return _this;
        }
        AdventureEmenyScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.panel_rank.vScrollBarSkin = "";
            this.panel_rank.elasticEnabled = true;
            this.panel_rank.vScrollBar.elasticDistance = 50;
            this.panel_rank.vScrollBar.elasticBackTime = 100;
            this.btn_close.addComponent(CustomScaleComponent);
            this.btn_fight.addComponent(CustomScaleComponent);
        };
        AdventureEmenyScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        AdventureEmenyScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_fight.on(Laya.Event.CLICK, this, this.onFight);
            EventMgr.getInstance().addEvent(GameEvent.SELECT_RANK, this, this.showSelect);
        };
        AdventureEmenyScene.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        AdventureEmenyScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item, max;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.data)
                                return [2];
                            console.log("AdventureEmenyScene >>> initView", this.data);
                            GameMgr.getInstance().showTopBar();
                            return [4, RegattaManager.instance.getRegattaRank(this.data.zoneNo)];
                        case 1:
                            dataArr = _a.sent();
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                item = Laya.Pool.getItemByClass("FosterItem", FosterItem);
                                item.setData({ type: 1, data: dataArr[i] });
                                item.y = i * 72;
                                this.panel_rank.addChild(item);
                                if (dataArr[i].select)
                                    this.selectData = dataArr[i];
                            }
                            if (this.selectData.index != 0) {
                                this.enemyData = dataArr[this.selectData.index - 1];
                            }
                            max = dataArr.length * 72;
                            this.panel_rank.vScrollBar.setScroll(0, max, 0);
                            this.showSelect(this.selectData);
                            return [2];
                    }
                });
            });
        };
        AdventureEmenyScene.prototype.showSelect = function (data) {
            for (var i = 0, len = this.panel_rank.numChildren; i < len; i++) {
                var item = this.panel_rank.getChildAt(i);
                if (item.data.data.index == data.index) {
                    item.showSelect(true);
                }
                else {
                    item.showSelect(false);
                }
            }
            this.box_ship.removeChildren();
            if (data.reward) {
                this.showReward(data.reward);
            }
            else {
                this.showShip(data.shipInfo, data.isSelf);
            }
        };
        AdventureEmenyScene.prototype.showShip = function (shipInfo, isSelf) {
            var shiInfo;
            if (isSelf) {
                shiInfo = GameManager.instance.getBaseInfoByUidAndType(shipInfo.ship.uid, BaseInfoType.Ship);
            }
            else {
                shiInfo = GameManager.instance.getBaseInfoByUidAndType(shipInfo.ship.uid, BaseInfoType.Ship, GameData.getInstance().otherprop);
            }
            var pshiInfo = new ShipObjInfo();
            pshiInfo.uid = shiInfo.uid;
            var blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
            pshiInfo.isShow = true;
            pshiInfo.blood = blood;
            pshiInfo.star = shiInfo.star;
            pshiInfo.slot = shiInfo.slot;
            pshiInfo.curBlood = blood;
            pshiInfo.hasShield = shiInfo.hasShield;
            pshiInfo.shieldId = shiInfo.shieldId;
            pshiInfo.width = 600;
            pshiInfo.height = 200;
            pshiInfo.id = Laya.Utils.getGID();
            pshiInfo.playerConfig = shipInfo.player;
            pshiInfo.type = isSelf ? GameConstant.Player : GameConstant.Enemy;
            pshiInfo.attackType = shiInfo.attack_type;
            var playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
            playership.box_ship.mouseEnabled = false;
            playership.x = 1300;
            playership.y = 550;
            playership.scale(1.3, 1.3);
            this.initFightValue();
            this.box_ship.addChild(playership);
        };
        AdventureEmenyScene.prototype.initFightValue = function () {
            var data = GameManager.instance.calFightValue();
            this.txt_sky.text = '' + data.attackSky;
            this.txt_water.text = '' + data.attackWater;
            this.txt_underWater.text = '' + data.attackUndetWater;
        };
        AdventureEmenyScene.prototype.showReward = function (reward) {
            if (!this.img_icon)
                this.img_icon = new Laya.Image();
            var id = parseInt(reward.split("|")[0]);
            if (id < 10000) {
                this.img_icon.scale(3, 3);
                this.img_icon.pos(1200, 500);
                if (id == 1001) {
                    this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_2.png";
                }
                else {
                    this.img_icon.skin = "resource/assets/img/home/top/top_tubiao_1.png";
                }
            }
            else {
                this.img_icon.scale(3, 3);
                this.img_icon.pos(1200, 500);
                if (id == 160201) {
                    this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_14.png";
                }
                else if (id == 160202) {
                    this.img_icon.skin = "resource/assets/img/home/rank/rank_tb_13.png";
                }
                else {
                    this.img_icon.skin = "";
                }
            }
            this.box_ship.addChild(this.img_icon);
        };
        AdventureEmenyScene.prototype.onFight = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (RegattaManager.instance.zoneIsPass(this.data.zoneNo)) {
                TipsManager.getInstance().showDefaultTips("当前赛区已通关");
            }
            else {
                TaskManager.instance.updateTask(TaskEnum.TASK_2011, 1);
                GameManager.instance.gameModel = GameModel.Match;
                GameManager.instance.openGame("");
                GameMgr.getInstance().hideTopBar();
                this.removeSelf();
            }
        };
        AdventureEmenyScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (this.data.type == 1) {
                GameMgr.getInstance().hideTopBar();
                if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                    var phone = MiniManeger.instance.systemInfo;
                    var offset = { w: phone.screenWidth / 4, h: phone.screenHeight };
                    MiniManeger.instance.showBannerAd(offset);
                }
            }
            this.removeSelf();
        };
        AdventureEmenyScene.prototype.recoverPool = function () {
            for (var i = 0, len = this.panel_rank.numChildren; i < len; i++) {
                var item = this.panel_rank.getChildAt(i);
                Laya.Pool.recover("FosterItem", item);
            }
            this.panel_rank.removeChildren();
        };
        AdventureEmenyScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_fight.off(Laya.Event.CLICK, this, this.onFight);
            EventMgr.getInstance().removeEvent(GameEvent.SELECT_RANK, this, this.showSelect);
        };
        AdventureEmenyScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.recoverPool();
            this.data = null;
        };
        return AdventureEmenyScene;
    }(BaseSceneUISkin));

    var DevourInfoItem = (function (_super) {
        __extends(DevourInfoItem, _super);
        function DevourInfoItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DevourInfoItem";
            _this.data = _data;
            _this.skin = "home/foster/DevourInfoItem.json";
            return _this;
        }
        DevourInfoItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DevourInfoItem.prototype.adaptationStage = function () {
            this.size(485, 605);
        };
        DevourInfoItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        DevourInfoItem.prototype.addEvent = function () {
        };
        DevourInfoItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        DevourInfoItem.prototype.initView = function () {
            if (!this.data)
                return;
            console.log("DevourInfoItem  >>> ", this.data);
            this.boxH_booster.visible = this.boxH_cat.visible = this.boxH_ship.visible = false;
            var data = this.data;
            if (data.addLv) {
                this.lab_lv.text = "+" + data.addLv;
                if (data.type == 0) {
                    this.boxH_ship.visible = true;
                    this.lab_shipHp.text = "+" + data.addAttrObj.addHp;
                }
                else if (data.type == 1) {
                    this.boxH_cat.visible = true;
                    this.lab_catAtk.text = "+" + data.addAttrObj.addAtk;
                    this.lab_catHp.text = "+" + data.addAttrObj.addHp;
                    this.lab_catCrit.text = "+" + (data.addAttrObj.addCrit / 100) + "%";
                }
                else {
                    this.boxH_booster.visible = true;
                    this.lab_boosterHp.text = "+" + data.addAttrObj.addHp;
                }
            }
            else {
                this.lab_lv.text = "";
            }
            if (data.needExp) {
                this.img_jd.width = 408 * (data.endExp / data.needExp);
            }
            else {
                this.img_jd.width = 408;
            }
        };
        DevourInfoItem.prototype.removeEvent = function () {
        };
        DevourInfoItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
        };
        return DevourInfoItem;
    }(BaseSceneUISkin));

    var DungeonManager = (function () {
        function DungeonManager() {
            this.maxLevelId = 20011;
            this.curLevelId = 20001;
        }
        ;
        Object.defineProperty(DungeonManager, "instance", {
            get: function () {
                if (DungeonManager.ins == null) {
                    DungeonManager.ins = new DungeonManager();
                }
                return DungeonManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DungeonManager.prototype, "curLevelData", {
            get: function () {
                return this._curLevelData;
            },
            set: function (c) {
                this._curLevelData = c;
            },
            enumerable: false,
            configurable: true
        });
        DungeonManager.prototype.getLevelData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var levelConfig, posConfig, netLevel, dataArr, i, key, config, netData, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getGuankaConfig()];
                        case 1:
                            levelConfig = _a.sent();
                            return [4, ConfigManager.getInstance().getDungeonItemConfig()];
                        case 2:
                            posConfig = _a.sent();
                            netLevel = GameData.getInstance().level.dungeon;
                            dataArr = [];
                            i = 0;
                            for (key in levelConfig) {
                                if (parseInt(key) <= this.maxLevelId) {
                                    config = levelConfig[key];
                                    netData = netLevel[config.id];
                                    data = new localData.LevelData();
                                    data.type = 1;
                                    data.id = config.id;
                                    data.index = i + 1;
                                    data.mapId = config.mapId;
                                    if (netData) {
                                        data.surplusStar = netData.star;
                                        data.isUnlock = true;
                                        this.curLevelId = config.id;
                                    }
                                    else {
                                        data.surplusStar = 3;
                                        data.isUnlock = false;
                                    }
                                    if (GameData.getInstance().isTestVersion) {
                                        data.isUnlock = true;
                                    }
                                    data.outGold = config.outGold;
                                    data.enemy = config.enemy;
                                    data.enemyIconLocate = config.enemyIconLocate;
                                    data.isCurLevel = i == Object.keys(netLevel).length - 1 ? true : false;
                                    data.pos = posConfig[i];
                                    dataArr.push(data);
                                }
                                i++;
                            }
                            return [2, dataArr];
                    }
                });
            });
        };
        DungeonManager.prototype.getEncounterLevel = function () {
            return __awaiter(this, void 0, void 0, function () {
                var encounter, configs, playerLv, i, config, randomConf, netData, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getEncounterConfig()];
                        case 1:
                            encounter = _a.sent();
                            configs = [];
                            playerLv = GameData.getInstance().playerData.playerLevel;
                            if (playerLv >= 5) {
                                playerLv = 5;
                            }
                            for (i in encounter) {
                                config = encounter[i];
                                if (config.playerLevel == playerLv) {
                                    configs.push(config);
                                }
                            }
                            randomConf = configs[Utils.getRandom(0, configs.length - 1)];
                            netData = GameData.getInstance().level.encounter[randomConf.id];
                            data = new localData.LevelData();
                            data.type = 2;
                            data.id = randomConf.id;
                            data.index = randomConf.id % 10000;
                            if (netData) {
                                data.surplusStar = netData.star;
                            }
                            else {
                                data.surplusStar = 3;
                            }
                            data.outGold = randomConf.outGold;
                            data.enemy = randomConf.enemy;
                            data.enemyIconLocate = randomConf.enemyIconLocate;
                            return [2, data];
                    }
                });
            });
        };
        DungeonManager.prototype.getLevelConfig = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var levelConfig;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getGuankaConfig()];
                        case 1:
                            levelConfig = _a.sent();
                            return [2, levelConfig[id]];
                    }
                });
            });
        };
        DungeonManager.prototype.updateLevelStar = function (type, id, star) {
            if (type == 1) {
                var level = GameData.getInstance().level.dungeon[id];
                if (level) {
                    level.star = star;
                }
                else {
                    level = { star: star };
                }
                GameData.getInstance().level.dungeon[id] = level;
            }
            else {
                var level1 = GameData.getInstance().level.encounter[id];
                if (level1) {
                    level1.star = star;
                }
                else {
                    level1 = { star: star };
                }
                GameData.getInstance().level.encounter[id] = level1;
            }
            GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
        };
        DungeonManager.prototype.unlockLevel = function (id) {
            var isUnlock = false;
            if (id <= this.maxLevelId) {
                var level = GameData.getInstance().level.dungeon[id];
                if (level)
                    isUnlock = true;
                if (!isUnlock) {
                    GameData.getInstance().level.dungeon[id] = { star: 3 };
                    GameInfoManager.getInstance().saveInfo(GameConst.LEVEL_INFO);
                }
            }
            return isUnlock;
        };
        return DungeonManager;
    }());

    var PopHelpScene = (function (_super) {
        __extends(PopHelpScene, _super);
        function PopHelpScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "PopHelpScene";
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.skin = "home/pop/PopHelpScene.json";
            return _this;
        }
        PopHelpScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PopHelpScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        PopHelpScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_next.on(Laya.Event.CLICK, this, this.onNext);
            this.btn_pre.on(Laya.Event.CLICK, this, this.onPre);
        };
        PopHelpScene.prototype.onPre = function () {
            this.btn_pre.visible = false;
            this.btn_next.visible = true;
            this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu1.jpg' + GameMgr.getInstance().randomVersion;
        };
        PopHelpScene.prototype.onNext = function () {
            this.btn_pre.visible = true;
            this.btn_next.visible = false;
            this.btn_close.visible = true;
            this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu2.jpg' + GameMgr.getInstance().randomVersion;
        };
        PopHelpScene.prototype.initView = function () {
            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
            this.btn_pre.visible = false;
            this.btn_next.visible = true;
            this.btn_close.visible = false;
            this.icon_guide.skin = 'resource/assets/img/home/foster/peiyagnyindaotu1.jpg' + GameMgr.getInstance().randomVersion;
        };
        PopHelpScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
            this.btn_pre.off(Laya.Event.CLICK, this, this.onPre);
        };
        PopHelpScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MiniManeger.instance.hideBanner();
        };
        return PopHelpScene;
    }(BaseSceneUISkinPopView));

    var AdventureScene = (function (_super) {
        __extends(AdventureScene, _super);
        function AdventureScene(data) {
            var _this = _super.call(this, data) || this;
            _this.className_key = "AdventureScene";
            _this.maxPage = 1;
            _this.curPage = 1;
            _this.itemW = 400;
            _this.isTouch = false;
            _this.showDevouring = false;
            _this.skin = "home/foster/AdventureScene.json";
            return _this;
        }
        AdventureScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_selecte.mouseThrough = true;
            this.box_main.width = Laya.stage.width;
            this.box_main.height = Laya.stage.height;
            this.btn_close.addComponent(CustomScaleComponent);
            this.btn_fight.addComponent(CustomScaleComponent);
            this.img_detail.addComponent(CustomScaleComponent);
            this.icon_remove.addComponent(CustomScaleComponent);
            this.btn_help.addComponent(CustomScaleComponent);
        };
        AdventureScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                this.initView();
                if (!GameData.getInstance().isConVersion) {
                    this.addEvent();
                }
            }
        };
        AdventureScene.prototype.onPage = function (evt) {
            switch (evt.currentTarget) {
                case this.btn_pre:
                    this.curPage--;
                    break;
                case this.btn_next:
                    this.curPage++;
                    break;
            }
            this.initPage();
        };
        AdventureScene.prototype.initPage = function () {
            if (this.curPage <= 1) {
                this.btn_pre.visible = false;
                this.curPage = 1;
            }
            else {
                this.btn_pre.visible = true;
            }
            if (this.curPage >= this.maxPage) {
                this.curPage = this.maxPage;
                this.btn_next.visible = false;
            }
            else {
                this.btn_next.visible = true;
            }
            this.boxView.x = -(this.curPage - 1) * this.itemW * 4;
        };
        AdventureScene.prototype.addEvent = function () {
            this.btn_pre.on(Laya.Event.CLICK, this, this.onPage);
            this.btn_next.on(Laya.Event.CLICK, this, this.onPage);
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
            this.btn_fight.on(Laya.Event.CLICK, this, this.onFight);
            this.btn_help.on(Laya.Event.CLICK, this, this.onShowHelp);
            EventMgr.getInstance().addEvent(GameConst.ClickShipOrCat, this, this.onClickShipOrCat);
            this.playership.once(Laya.Event.CLICK, this, this.showSomeView);
            this.img_detail.on(Laya.Event.CLICK, this, this.onDetail);
            this.icon_remove.on(Laya.Event.CLICK, this, this.removeCat);
        };
        AdventureScene.prototype.onShowHelp = function () {
            ViewManager.getInstance().showView(PopHelpScene);
        };
        AdventureScene.prototype.onClickShipOrCat = function (data) {
            this.icon_light.removeSelf();
            this.box_detail.removeChildren();
            this.selectedItem = GameManager.instance.getBaseInfoByUidNoType(data.uid);
            var propData = GameManager.instance.getPropDataByUid(data.uid);
            var propView = new PropItem({ type: 2, data: propData });
            if (this.selectedItem.type != BaseInfoType.Ship) {
                this.icon_remove.visible = true;
            }
            else {
                this.icon_remove.visible = false;
            }
            this.box_detail.addChild(propView);
        };
        AdventureScene.prototype.removeCat = function () {
            var catuid = this.selectedItem.uid;
            var playerConfig = GameData.getInstance().localUserShipInfo.player;
            for (var i = 1; i < 6; i++) {
                var uid = playerConfig["box_player" + i];
                if (uid == catuid) {
                    playerConfig["box_player" + i] = 0;
                    break;
                }
            }
            this.initShipUi();
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
        };
        AdventureScene.prototype.initView = function () {
            this.box_selected.visible = false;
            this.boxH_gold.visible = false;
            if (this.icon_light == null) {
                this.icon_light = new Laya.Image();
                this.icon_light.skin = 'resource/assets/img/home/foster/foster_guangxiao.png';
                this.icon_light.centerX = this.icon_light.centerY = 0;
            }
            this.icon_remove.visible = false;
            this.icon_set.scale(2, 2);
            this.icon_set.anchorX = 0.5;
            this.icon_set.anchorY = 0.5;
            this.initShipUi();
        };
        AdventureScene.prototype.hideSomeView = function () {
            this.playership.box_ship.mouseEnabled = false;
            this.playership.box_detail.mouseEnabled = false;
            this.panel_selecte.visible = false;
            this.icon_set.visible = false;
            this.btn_close.visible = false;
            this.btn_fight.visible = false;
            this.btn_help.visible = false;
            this.box_detail_click.visible = false;
            this.box_detail.visible = false;
            this.box_sale.visible = false;
            this.img_sun.visible = false;
            this.img_expTip.visible = false;
            this.btn_next.visible = false;
            this.btn_pre.visible = false;
            this.icon_guide_hand.visible = false;
            this.icon_guide_lab.visible = false;
            this.playership.scale(1.2, 1.2);
            var type = this.playership.objInfo_.attackType;
            console.log("1111111", type);
            if (type == AttackType.Sky) {
                this.playership.y = 560;
            }
            else if (type == AttackType.Water) {
                this.playership.y = 640;
            }
            else {
                this.playership.y = 720;
            }
            this.playership.x = Laya.stage.width / 3 - 150;
            this.playership.once(Laya.Event.CLICK, this, this.showSomeView);
        };
        AdventureScene.prototype.showSomeView = function () {
            this.btn_help.right = 200;
            if (GameData.getInstance().isConVersion)
                return;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.playership.box_ship.mouseEnabled = true;
            this.playership.box_detail.mouseEnabled = true;
            this.box_sale.visible = true;
            this.btn_help.visible = true;
            this.panel_selecte.visible = true;
            this.btn_close.visible = true;
            this.btn_fight.visible = true;
            this.box_detail_click.visible = true;
            this.box_detail.visible = true;
            this.img_sun.visible = true;
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_REGATTA);
            GameManager.instance.gameModel = GameModel.Match;
            this.selectedItem = null;
            this.initShipUi();
            if (GameData.getInstance().playerData.playerGuide == 4) {
                ViewManager.getInstance().showView(PopHelpScene);
                GameData.getInstance().playerData.playerGuide++;
            }
        };
        AdventureScene.prototype.initShipUi = function () {
            GameInfoManager.getInstance().saveInfo(GameConst.USE_PROP);
            var baseInfos = GameData.getInstance().prop.baseInfos;
            this.listdata = baseInfos.ship.concat(baseInfos.cat).concat(baseInfos.booster);
            this.initList();
            this.clearPlayerIndexCao();
            this.initShip();
            this.img_expTip.visible = false;
            var data = GameManager.instance.calFightValue();
            this.txt_sky.text = '' + data.attackSky;
            this.txt_water.text = '' + data.attackWater;
            this.txt_underWater.text = '' + data.attackUndetWater;
            if (DungeonManager.instance.curLevelId > 20003) {
                this.btn_fight.visible = true;
            }
            else {
                this.btn_fight.visible = false;
            }
        };
        AdventureScene.prototype.initList = function () {
            this.boxView.removeChildren();
            var index = 0;
            this.listdata.sort(GameManager.instance.baseGameInfoSort);
            for (var i = 0, len = this.listdata.length; i < len; i++) {
                var data = this.listdata[i];
                var flag = GameManager.instance.checkIsUseUid(data.uid);
                if (!flag) {
                    var item = new AdventureItem();
                    item.initDataAndView(data);
                    item.localScene = this;
                    this.boxView.addChild(item);
                    item.basePos.x = this.itemW * (index) + this.itemW / 2;
                    index++;
                    item.basePos.y = 220;
                    item.initPos();
                }
            }
            this.maxPage = Math.ceil(index / 4);
            this.initPage();
        };
        AdventureScene.prototype.clearPlayerIndexCao = function () {
            this.box_selected.removeChildren();
            this.box_selected.visible = false;
        };
        AdventureScene.prototype.initShip = function () {
            if (this.playership != null) {
                this.playership.removeSelf();
                this.playership = null;
            }
            this.box_ship.removeChildren();
            var localUserShipInfo = GameData.getInstance().localUserShipInfo;
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship);
            var pshiInfo = new ShipObjInfo();
            pshiInfo.uid = shiInfo.uid;
            var blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
            pshiInfo.isShow = true;
            pshiInfo.blood = blood;
            pshiInfo.star = shiInfo.star;
            pshiInfo.slot = shiInfo.slot;
            pshiInfo.slotArr = shiInfo.slotArr;
            pshiInfo.curBlood = blood;
            pshiInfo.hasShield = shiInfo.hasShield;
            pshiInfo.shieldId = shiInfo.shieldId;
            pshiInfo.width = 300;
            pshiInfo.height = 100;
            pshiInfo.id = Laya.Utils.getGID();
            pshiInfo.playerConfig = localUserShipInfo.player;
            pshiInfo.type = GameConstant.Player;
            pshiInfo.attackType = shiInfo.attack_type;
            this.playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
            this.playership.scale(1.4, 1.4);
            if (DeviceUtil.getIsIphoneX()) {
                this.playership.x = Laya.stage.width / 2;
            }
            else {
                this.playership.x = Laya.stage.width / 2 + 150;
            }
            this.playership.y = 680;
            this.box_ship.addChild(this.playership);
            GameManager.instance.adventureShowShip = this.playership;
            if (this.selectedItem == null) {
                this.selectedItem = GameManager.instance.getBaseInfoByUidNoType(shiInfo.uid);
            }
            this.initGamePorp(this.selectedItem);
            if (GameData.getInstance().playerData.playerGuide == 2) {
                this.icon_set.visible = true;
                if (pshiInfo.slotArr && pshiInfo.slotArr.length > 0) {
                    var index = pshiInfo.slotArr[0];
                    var boxPlayer = this.playership.box_col3;
                    var point = Laya.Point.create();
                    point.x = 0;
                    point.y = 0;
                    point = boxPlayer.localToGlobal(point, false);
                    this.icon_set.x = point.x + 50;
                    this.icon_set.y = point.y - 20;
                    point.recover();
                }
            }
            else if (GameData.getInstance().playerData.playerGuide == 3) {
                this.icon_guide_hand.visible = true;
                this.icon_guide_lab.visible = true;
                this.showGuide();
            }
        };
        AdventureScene.prototype.showGuide = function () {
            var _this = this;
            Laya.Tween.clearAll(this.icon_guide_hand);
            var point = Laya.Point.create();
            point.x = 0;
            point.y = 0;
            point = this.panel_selecte.localToGlobal(point, false);
            point.x += 100;
            point.y += 200;
            this.icon_guide_hand.x = point.x;
            this.icon_guide_hand.y = point.y;
            var xs = 300;
            var ys = 540;
            Laya.Tween.to(this.icon_guide_hand, { x: xs, y: ys }, 1500, null, Laya.Handler.create(this.icon_guide_hand, function () {
                point.recover();
                _this.showGuide();
            }));
        };
        AdventureScene.prototype.mouseDown = function (evt) {
            this.isTouch = true;
            this.clickX = evt.stageX;
            this.starX = this.boxView.x;
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        AdventureScene.prototype.mouseMove = function (evt) {
            this.boxView.x = this.starX + (evt.stageY - this.clickX);
            if (this.boxView.x + this.boxView.width <= this.panel_selecte.width) {
                this.boxView.x = this.panel_selecte.width - this.boxView.width;
            }
            if (this.boxView.x > this.boxView.width / 2) {
                this.boxView.x = this.boxView.width / 2;
            }
        };
        AdventureScene.prototype.mouseOutUp = function () {
            this.isTouch = false;
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseOutUp);
        };
        AdventureScene.prototype.onDetail = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            ViewManager.getInstance().showView(FosterDetailView, GameManager.instance.getPropDataByUid(this.selectedItem.uid));
        };
        AdventureScene.prototype.onAdvantureChange = function (data) {
        };
        AdventureScene.prototype.onFight = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    SoundManager.getInstance().playEffect(SoundConst.BtnClick);
                    GameMgr.getInstance().showBufferLoading();
                    ResUtil.getIntance().loadGroups(["foster", "rank"], function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            ViewManager.getInstance().showView(AdventureEmenyScene, {
                                type: 2,
                                zoneNo: GameData.getInstance().playerData.matchInfo.zoneNo
                            });
                            GameMgr.getInstance().hiddeBufferLoading();
                            return [2];
                        });
                    }); });
                    return [2];
                });
            });
        };
        AdventureScene.prototype.initGamePorp = function (data) {
            this.box_detail.removeChildren();
            this.selectedItem = data;
            var propData = GameManager.instance.getPropDataByUid(data.uid);
            var propView = new PropItem({ type: 2, data: propData });
            this.box_detail.addChild(propView);
            var playerConfig = GameData.getInstance().localUserShipInfo.player;
            for (var i = 1; i < 6; i++) {
                var uid = playerConfig["box_player" + i];
                if (uid == data.uid) {
                    this.icon_remove.visible = true;
                    return;
                }
            }
            this.icon_remove.visible = false;
        };
        AdventureScene.prototype.showDevourInfo = function (addExp) {
            return __awaiter(this, void 0, void 0, function () {
                var data, info, endLv, playerExp, endlvdata, i, len, endLvNeedExp, evdata, oldHp, newHp, oldAtk, oldCrit, newAtk, newCrit;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.devourInfoItem && this.devourInfoItem.visible == true) {
                                return [2];
                            }
                            if (this.showDevouring)
                                return [2];
                            this.showDevouring = true;
                            data = this.selectedItem;
                            return [4, GameManager.instance.judgeUpgradeByAddExp(data, addExp)];
                        case 1:
                            info = _a.sent();
                            endLv = data.level + info.addLv;
                            playerExp = ConfigManager.getInstance().playerExpJson;
                            for (i = 0, len = playerExp.length; i < len; i++) {
                                if (playerExp[i].level == endLv + 1) {
                                    endlvdata = playerExp[i];
                                    break;
                                }
                            }
                            endLvNeedExp = 0;
                            if (endlvdata) {
                                endLvNeedExp = endlvdata.exp;
                            }
                            evdata = { addLv: info.addLv, addExp: addExp, needExp: endLvNeedExp, endExp: info.endExp, addAttrObj: {}, type: 0 };
                            if (info.addLv) {
                                oldHp = GameManager.instance.calAttr(data.initialHp, data.growthHp, data.level, data.quality);
                                newHp = GameManager.instance.calAttr(data.initialHp, data.growthHp, endLv, data.quality);
                                if (data.type == BaseInfoType.Ship) {
                                    evdata.type = BaseInfoType.Ship;
                                    evdata.addAttrObj = { addHp: newHp - oldHp };
                                }
                                else if (data.type == BaseInfoType.Cat) {
                                    oldAtk = GameManager.instance.calAttr(data["initialAtt"], data["growthAtt"], data.level, data.quality);
                                    oldCrit = GameManager.instance.calAttr(data["initialCrit"], data["growthCrit"], data.level, data.quality);
                                    newAtk = GameManager.instance.calAttr(data["initialAtt"], data["growthAtt"], endLv, data.quality);
                                    newCrit = GameManager.instance.calAttr(data["initialCrit"], data["growthCrit"], endLv, data.quality);
                                    evdata.addAttrObj = {
                                        addHp: newHp - oldHp,
                                        addAtk: newAtk - oldAtk,
                                        addCrit: newCrit - oldCrit
                                    };
                                    evdata.type = BaseInfoType.Cat;
                                }
                                else if (data.type == BaseInfoType.Booster) {
                                    evdata.addAttrObj = { addHp: newHp - oldHp };
                                    evdata.type = BaseInfoType.Booster;
                                }
                            }
                            else {
                            }
                            if (!this.devourInfoItem) {
                                this.devourInfoItem = new DevourInfoItem(evdata);
                                this.box_detail_click.addChild(this.devourInfoItem);
                            }
                            else {
                                this.devourInfoItem.setData(evdata);
                            }
                            this.devourInfoItem.visible = true;
                            this.showDevouring = false;
                            return [2];
                    }
                });
            });
        };
        AdventureScene.prototype.hideDevourInfo = function () {
            this.devourInfoItem && (this.devourInfoItem.visible = false);
        };
        AdventureScene.prototype.addSelectPlayerIndexCao = function () {
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(GameData.getInstance().localUserShipInfo.ship.uid, BaseInfoType.Ship);
            var arr = shiInfo.slotArr;
            this.box_selected.visible = true;
            for (var i = 0, len = arr.length; i < len; i++) {
                var box_player = this.playership['box_player' + arr[i]];
                var point = Laya.Point.create();
                point.x = 0;
                point.y = 0;
                point = box_player.localToGlobal(point, false);
                var image = new Laya.Image();
                image.anchorX = 0.5;
                image.anchorY = 0.5;
                image.size(117, 126.5);
                image.pos(point.x + image.width / 2, point.y + image.height / 2);
                if (arr[i] == 4 || arr[i] == 5) {
                    image.scaleY = -1;
                    image.pos(point.x + image.width / 2, point.y - image.height / 2);
                }
                image.skin = 'resource/assets/img/game/ship/cat_capsule.png';
                image.name = 'box_player' + arr[i];
                this.box_selected.addChild(image);
                point.recover();
            }
        };
        AdventureScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.hideSomeView();
            EventMgr.getInstance().sendEvent(GameEvent.SHOW_MAIN);
        };
        AdventureScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
            this.btn_fight.off(Laya.Event.CLICK, this, this.onFight);
            this.panel_selecte.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
            this.img_detail.off(Laya.Event.CLICK, this, this.onDetail);
            this.icon_remove.off(Laya.Event.CLICK, this, this.removeCat);
            this.btn_help.off(Laya.Event.CLICK, this, this.onShowHelp);
            EventMgr.getInstance().removeEvent(GameConst.ClickShipOrCat, this, this.onClickShipOrCat);
        };
        AdventureScene.prototype.removeSelf = function () {
            this.playership.removeSelf();
            return _super.prototype.removeSelf.call(this);
        };
        AdventureScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return AdventureScene;
    }(BaseSceneUISkin));
    var AdventureItem = (function (_super) {
        __extends(AdventureItem, _super);
        function AdventureItem() {
            var _this = _super.call(this) || this;
            _this.basePos = { x: 0, y: 0 };
            _this.exp = 0;
            _this.startPoint = { x: 0, y: 0 };
            _this.isMoving = false;
            _this.isClick = true;
            _this.size(400, 251);
            _this.anchorX = 0.5;
            _this.anchorY = 0.5;
            _this.initView();
            _this.addEvent();
            return _this;
        }
        AdventureItem.prototype.initView = function () {
            if (this.box_item == null) {
                this.box_item = new Laya.Box();
                this.box_item.size(100, 150);
                this.box_item.anchorX = 0.5;
                this.box_item.anchorY = 0.5;
                this.box_item.centerX = this.box_item.centerY = 0;
                this.addChild(this.box_item);
            }
            if (this.box_star == null) {
                this.box_star = new Laya.Box();
                this.box_star.anchorX = 0.5;
                this.box_star.anchorY = 0.5;
                this.addChild(this.box_star);
                this.box_star.centerX = 0;
                this.box_star.bottom = -20;
            }
        };
        AdventureItem.prototype.initPos = function () {
            this.x = this.basePos.x;
            this.y = this.basePos.y;
        };
        AdventureItem.prototype.initDataAndView = function (data) {
            this.viewData = data;
            var id = data.id;
            if (parseInt(id) >= 110001 && parseInt(id) < 120001) {
                this.showType = BaseInfoType.Ship;
                var ship = new Laya.Image();
                ship.skin = 'resource/assets/img/icon/ship/shipIcon_' + id + '.png';
                ship.centerX = ship.centerY = 0;
                this.box_item.addChild(ship);
                this.box_item.size(400, 251);
            }
            else if (parseInt(id) >= 120001 && parseInt(id) < 130001) {
                this.showType = BaseInfoType.Cat;
                var icon_cat = new Laya.Image();
                icon_cat.skin = 'resource/assets/img/icon/cat/catIcon_' + id + '.png';
                icon_cat.centerX = icon_cat.centerY = 0;
                icon_cat.anchorX = icon_cat.anchorY = 0.5;
                this.box_item.addChild(icon_cat);
            }
            else if (parseInt(id) >= 140001 && parseInt(id) < 150001) {
                this.showType = BaseInfoType.Booster;
                var playerInfo = ConfigManager.getInstance().boosterConfigs[id];
                var iconArr = playerInfo.icon.split("|");
                var icon_booster = new Laya.Image();
                icon_booster.size(81.6, 153.6);
                icon_booster.skin = 'resource/assets/img/game/booster/' + iconArr[0] + '.png';
                icon_booster.centerX = icon_booster.centerY = 0;
                this.box_item.addChild(icon_booster);
            }
            var playerStarExpJson = ConfigManager.getInstance().playerStarExpJson;
            this.exp = this.viewData.exp + playerStarExpJson[this.viewData.star - 1].basicExp + GameManager.instance.getTotleExpByLv(this.viewData.level);
            this.createStar();
        };
        AdventureItem.prototype.createStar = function () {
            this.box_star.removeChildren();
            var star = this.viewData.star;
            for (var i = 0; i < star; i++) {
                var icon_star = new Laya.Image();
                icon_star.skin = 'resource/assets/img/propPublic/propPublic_xx.png';
                icon_star.scale(0.6, 0.6);
                icon_star.x = i * 80;
                this.box_star.addChild(icon_star);
            }
            this.box_star.width = star * 80;
            this.box_star.height = 80;
        };
        AdventureItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.CLICK, this, this.onClick);
        };
        AdventureItem.prototype.onAdvantureSelecte = function () {
        };
        AdventureItem.prototype.onClick = function () {
            if (!this.isClick) {
                if (this.adventureItem) {
                    this.removeAdventureItem();
                    return;
                }
            }
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var scene = this.scene;
            if (scene == null)
                return;
            scene.icon_light.removeSelf();
            this.addChildAt(scene.icon_light, 0);
            scene.initGamePorp(this.viewData);
        };
        AdventureItem.prototype.onMouseDown = function (evt) {
            this.isClick = true;
            var self = this;
            self.isMoving = false;
            this.startPoint.x = evt.stageX;
            this.startPoint.y = evt.stageY;
            if (this.localScene == null)
                return;
            function onMouseUp() {
                self.off(Laya.Event.MOUSE_MOVE, self, onMove);
                self.off(Laya.Event.MOUSE_MOVE, self, onMove);
                Laya.timer.clear(self, longtouch);
            }
            function longtouch() {
                if (self.isMoving)
                    return;
                self.isMoving = true;
                self.off(Laya.Event.MOUSE_UP, self, onMouseUp);
                var item = new AdventureItem();
                item.initDataAndView(self.viewData);
                item.x = evt.stageX;
                item.y = evt.stageY;
                item.box_star.visible = false;
                self.adventureItem = item;
                self.localScene.box_pop.addChild(item);
                self.localScene.box_pop.visible = true;
                self.longTouchMouseDown(evt);
                self.visible = false;
            }
            longtouch();
            var ifMove = false;
            function onMove(mevt) {
                if (ifMove) {
                    longtouch();
                    self.off(Laya.Event.MOUSE_MOVE, self, onMove);
                }
                if (mevt.stageY - this.startPoint.y > 1) {
                    ifMove = true;
                }
            }
        };
        AdventureItem.prototype.removeAdventureItem = function () {
            if (this.adventureItem) {
                this.adventureItem.removeSelf();
                this.adventureItem = null;
            }
        };
        AdventureItem.prototype.longTouchMouseDown = function (evt) {
            var _this = this;
            if (this.adventureItem) {
                this.adventureItem.box_item.scaleX = 1.8;
                this.adventureItem.box_item.scaleY = 1.8;
            }
            var scene = this.scene;
            if (scene == null)
                return;
            scene.img_expTip.visible = true;
            if (this.showType == BaseInfoType.Ship) {
            }
            else {
                scene.addSelectPlayerIndexCao();
                scene.box_ship.alpha = 0.5;
            }
            scene.boxH_gold.visible = true;
            BitmapLabelUtils.setLabel(scene.txt_gold, this.exp + "", "resource/assets/img/home/top/top_sz/", 0);
            scene.txt_gold.width = (this.exp + "").length * 42;
            scene.btn_fight.visible = false;
            scene.btn_close.visible = false;
            var display = this.adventureItem;
            var starPoint = { x: display.x, y: display.y };
            var offset = { x: evt.stageX - display.x, y: evt.stageY - display.y };
            GameManager.instance.dragResult(this.adventureItem, starPoint, offset, function (evt, upateValueCallback) {
                var disx = _this.startPoint.x - evt.stageX;
                var disy = _this.startPoint.y - evt.stageY;
                if (Math.abs(disx) < 20 || Math.abs(disy) < 20)
                    return;
                upateValueCallback && upateValueCallback();
                _this.onMouseMove(evt);
            }, function (evt) {
                _this.localScene.boxView.addChild(_this);
                _this.onMouseUp(evt);
            }, true, 0);
        };
        AdventureItem.prototype.onMouseMove = function (evt) {
            this.box_star.visible = false;
            if (this.adventureItem) {
                this.adventureItem.box_item.scaleX = 1.8;
                this.adventureItem.box_item.scaleY = 1.8;
            }
            var scene = this.scene;
            if (scene.selectedItem.uid != this.viewData.uid) {
                var isHit = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_detail, 3);
                if (isHit) {
                    if (scene.selectedItem.level >= 30) {
                        return;
                    }
                    scene.showDevourInfo(this.exp);
                }
            }
        };
        AdventureItem.prototype.onMouseUp = function (evt) {
            return __awaiter(this, void 0, void 0, function () {
                var scene, disx, disy, isHit_1, flag, isHit, isHit1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.visible = true;
                            scene = this.scene;
                            scene.hideDevourInfo();
                            scene.img_expTip.visible = false;
                            disx = this.startPoint.x - evt.stageX;
                            disy = this.startPoint.y - evt.stageY;
                            scene.box_sale.scale(1, 1);
                            this.box_star.visible = true;
                            if (scene == null) {
                                this.removeAdventureItem();
                                this.onClick();
                                return [2];
                            }
                            scene.boxH_gold.visible = false;
                            scene.btn_fight.visible = true;
                            scene.btn_close.visible = true;
                            console.log("mouseup");
                            if (this.showType == BaseInfoType.Ship) {
                                if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
                                    this.removeAdventureItem();
                                    this.onClick();
                                    return [2];
                                }
                                this.isClick = false;
                                isHit_1 = GameManager.instance.checkShowShipCanHit(this.adventureItem, null, 3);
                                console.log('ishit>>>>>', isHit_1);
                                if (isHit_1) {
                                    SoundManager.getInstance().playEffect(SoundConst.PartSelect);
                                    GameData.getInstance().localUserShipInfo.ship.star = this.viewData.star;
                                    GameData.getInstance().localUserShipInfo.ship.uid = this.viewData.uid;
                                    GameData.getInstance().localUserShipInfo.booster = this.viewData.shieldId;
                                    GameData.getInstance().localUserShipInfo.player.box_player2 = 0;
                                    GameData.getInstance().localUserShipInfo.player.box_player3 = 0;
                                    GameData.getInstance().localUserShipInfo.player.box_player4 = 0;
                                    GameData.getInstance().localUserShipInfo.player.box_player5 = 0;
                                    scene.initShipUi();
                                    this.removeAdventureItem();
                                    this.onClick();
                                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                                    return [2];
                                }
                            }
                            else {
                                scene.box_ship.alpha = 1;
                                if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
                                    this.scene.clearPlayerIndexCao();
                                    this.removeAdventureItem();
                                    this.adventureItem = null;
                                    this.onClick();
                                    return [2];
                                }
                                this.isClick = false;
                                GameManager.instance.adventureShowShip.scale(1.4, 1.4);
                                flag = this.checkHit(evt);
                                if (flag) {
                                    this.removeAdventureItem();
                                    this.onClick();
                                    return [2];
                                }
                            }
                            if (Math.abs(disx) < 20 || Math.abs(disy) < 20) {
                                this.removeAdventureItem();
                                this.onClick();
                                return [2];
                            }
                            this.isClick = false;
                            isHit = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_sale, 2);
                            console.log("售卖>>>>", isHit);
                            if (isHit) {
                                GameMgr.getInstance().updateBaseData(1001, this.exp);
                                GameManager.instance.removepPropBase(this.viewData);
                                this.scene.initShipUi();
                                GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                                this.removeAdventureItem();
                                this.onClick();
                                if (this.viewData.type == BaseInfoType.Ship) {
                                    TaskManager.instance.updateTask(TaskEnum.TASK_2001, 1);
                                }
                                else if (this.viewData.type == BaseInfoType.Cat) {
                                    TaskManager.instance.updateTask(TaskEnum.TASK_2002, 1);
                                }
                                else if (this.viewData.type == BaseInfoType.Booster) {
                                    TaskManager.instance.updateTask(TaskEnum.TASK_2003, 1);
                                }
                                return [2];
                            }
                            isHit1 = GameManager.instance.checkShowShipCanHit(this.adventureItem, scene.box_detail, 3);
                            console.log("吞噬>>>>", isHit1);
                            if (!isHit1) return [3, 3];
                            if (!(scene.selectedItem.uid != this.viewData.uid)) return [3, 2];
                            if (scene.selectedItem.level >= GameManager.instance.shipMaxLevel) {
                                TipsManager.getInstance().showDefaultTips("已达最大等级");
                                this.removeAdventureItem();
                                this.onClick();
                                return [2];
                            }
                            if (GameData.getInstance().playerData.gold > this.exp) {
                                GameMgr.getInstance().updateBaseData(1001, -this.exp);
                            }
                            else {
                                TipsManager.getInstance().showDefaultTips("金币不足");
                                this.removeAdventureItem();
                                this.onClick();
                                return [2];
                            }
                            if (GameData.getInstance().playerData.playerGuide == 3) {
                                scene.icon_guide_hand.visible = false;
                                scene.icon_guide_lab.visible = false;
                                Laya.Tween.clearAll(scene.icon_guide_hand);
                                GameData.getInstance().playerData.playerGuide++;
                                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                            }
                            return [4, GameManager.instance.propAddExp(scene.selectedItem, this.exp)];
                        case 1:
                            _a.sent();
                            SoundManager.getInstance().playEffect(SoundConst.GetExp);
                            GameManager.instance.removepPropBase(this.viewData);
                            this.scene.initShipUi();
                            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                            this.removeAdventureItem();
                            this.adventureItem = null;
                            this.onClick();
                            return [2];
                        case 2:
                            TipsManager.getInstance().showDefaultTips('无法将自己转化为经验');
                            _a.label = 3;
                        case 3:
                            this.removeAdventureItem();
                            this.adventureItem = null;
                            this.onClick();
                            return [2];
                    }
                });
            });
        };
        AdventureItem.prototype.checkHit = function (evt) {
            var scene = this.scene;
            if (scene == null)
                return;
            var box_selected = scene.box_selected;
            var player = GameData.getInstance().localUserShipInfo.player;
            for (var i = 0, len = box_selected.numChildren; i < len; i++) {
                var img = box_selected.getChildAt(i);
                var isHit = img.hitTestPoint(evt.stageX, evt.stageY);
                console.log('ishit1>>>>>', isHit);
                if (isHit) {
                    if (GameData.getInstance().playerData.playerGuide == 2) {
                        scene.icon_set.visible = false;
                        GameData.getInstance().playerData.playerGuide++;
                        GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                    }
                    player[img.name] = this.viewData.uid;
                    this.scene.initShipUi();
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                    return true;
                }
            }
            this.scene.clearPlayerIndexCao();
            return false;
        };
        AdventureItem.prototype.updateSelectedItem = function () {
        };
        AdventureItem.prototype._onRemoved = function () {
            _super.prototype._onRemoved.call(this);
            this.removeEvent();
        };
        AdventureItem.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.off(Laya.Event.CLICK, this, this.onClick);
        };
        return AdventureItem;
    }(Laya.Box));

    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "MainScene";
            _this.skin = "home/MainScene.json";
            return _this;
        }
        MainScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
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
        };
        MainScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        MainScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        MainScene.prototype.addEvent = function () {
            this.btn_game1.on(Laya.Event.CLICK, this, this.onStartGame1);
            this.btn_game2.on(Laya.Event.CLICK, this, this.onStartGame2);
            this.btn_setting.on(Laya.Event.CLICK, this, this.onSetting);
            this.btn_task.on(Laya.Event.CLICK, this, this.onTask);
            this.btn_sign.on(Laya.Event.CLICK, this, this.onSign);
            this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
            this.btn_treasure.on(Laya.Event.CLICK, this, this.onTreasure);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_BOX, this, this.refreshBoxData);
            EventMgr.getInstance().addEvent(GameConst.CanRecieveTask, this, this.onRecieve);
        };
        MainScene.prototype.onRecieve = function (data) {
            this.btn_task.getChildByName('red').visible = data;
        };
        MainScene.prototype.initView = function () {
            this.refreshBoxData();
            this.showRank();
            Laya.timer.loop(1000, this, function () {
                EventMgr.getInstance().sendEvent(GameEvent.TIME_METER);
            });
        };
        MainScene.prototype.showGameBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dYMoreGameBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.box_gameBanner.removeChildren();
                            return [4, GameManager.instance.showGameBanner(4, 2)];
                        case 1:
                            dYMoreGameBanner = _a.sent();
                            if (dYMoreGameBanner) {
                                this.box_gameBanner.addChild(dYMoreGameBanner);
                                this.box_gameBanner.width = dYMoreGameBanner.width;
                            }
                            this.box_gameBanner.scale(0.8, 0.8);
                            return [2];
                    }
                });
            });
        };
        MainScene.prototype.showMain = function () {
            return __awaiter(this, void 0, void 0, function () {
                var canSign;
                return __generator(this, function (_a) {
                    if (!this.com_regatta) {
                        this.com_regatta = new AdventureScene({});
                        this.box_ship.addChild(this.com_regatta);
                    }
                    canSign = SignManager.instance.checkSign();
                    if (canSign) {
                        this.btn_sign.getChildByName('red').visible = true;
                    }
                    else {
                        this.btn_sign.getChildByName('red').visible = false;
                    }
                    this.com_regatta.hideSomeView();
                    this.txt_show.visible = this.img_bg.visible = this.img_road.visible = true;
                    this.btn_game1.visible = this.btn_game2.visible = this.btn_setting.visible = true;
                    this.box_right.visible = this.box_treasure.visible = true;
                    if (DungeonManager.instance.curLevelId > 20004) {
                        this.btn_game1.getChildByName('lock').visible = false;
                        this.btn_game1.gray = false;
                    }
                    else {
                        this.btn_game1.gray = true;
                        this.btn_game1.getChildByName('lock').visible = true;
                    }
                    this.btn_task.getChildByName('red').visible = false;
                    TaskManager.instance.getTaskData();
                    if (DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame()) {
                        if (GameData.getInstance().adConversion) {
                            this.btn_treasure.visible = false;
                        }
                        else {
                            this.btn_treasure.visible = true;
                        }
                    }
                    if (GameData.getInstance().isConVersion) {
                        this.box_right.visible = false;
                        this.btn_game1.visible = false;
                        this.btn_setting.visible = false;
                        this.box_treasure.visible = false;
                        this.img_road.visible = false;
                        this.btn_game2.centerX = 0;
                        this.txt_show.visible = false;
                        return [2];
                    }
                    this.showGameBanner();
                    return [2];
                });
            });
        };
        MainScene.prototype.showRegatta = function () {
            this.moreGameItem && (this.moreGameItem.visible = false);
            this.txt_show.visible = this.img_road.visible = false;
            this.btn_game1.visible = this.btn_game2.visible = this.btn_setting.visible = false;
            this.box_right.visible = this.box_treasure.visible = false;
        };
        MainScene.prototype.refreshBoxData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, data, item, curTimes;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, TreasureManager.instance.getTimeBoxData()];
                        case 1:
                            dataArr = _a.sent();
                            for (i = 0, len = 4; i < len; i++) {
                                data = dataArr[i];
                                item = this.box_treasure.getChildAt(i);
                                if (data) {
                                    if (item) {
                                        item.setData(data);
                                    }
                                    else {
                                        item = new TreasureItem(data);
                                        item.x = (i % 2) * 310;
                                        item.y = Math.floor(i / 2) * 420;
                                        this.box_treasure.addChild(item);
                                    }
                                }
                                else {
                                    if (item)
                                        item.removeSelf();
                                }
                            }
                            curTimes = TreasureManager.instance.getCurVideoTimes();
                            if (curTimes.num < 5) {
                                this.lab_videoTimes.visible = true;
                                this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
                            }
                            else {
                                this.lab_videoTimes.visible = false;
                            }
                            return [2];
                    }
                });
            });
        };
        MainScene.prototype.showRank = function () {
            return __awaiter(this, void 0, void 0, function () {
                var rank;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, RegattaManager.instance.getCurRank()];
                        case 1:
                            rank = _a.sent();
                            BitmapLabelUtils.setLabel(this.lab_rank, rank + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
                            return [2];
                    }
                });
            });
        };
        MainScene.prototype.onStartGame1 = function () {
            if (DungeonManager.instance.curLevelId > 20004) {
            }
            else {
                TipsManager.getInstance().showDefaultTips("请先通过四关");
                return;
            }
            console.log("帆船赛");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.com_home.displayRegattaView();
        };
        MainScene.prototype.onStartGame2 = function () {
            console.log("副本");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.com_home.displayDungeonView();
        };
        MainScene.prototype.onSetting = function () {
            console.log("打开设置");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["set"], function () {
                ViewManager.getInstance().showView(SetView);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        MainScene.prototype.onTask = function () {
            console.log("打开任务");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["task"], function () {
                ViewManager.getInstance().showView(TaskView);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        MainScene.prototype.onSign = function () {
            console.log("打开签到");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["sign"], function () {
                ViewManager.getInstance().showView(SignView);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        MainScene.prototype.onLottery = function () {
            console.log("打开抽奖");
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["lottery"], function () {
                ViewManager.getInstance().showView(LotteryView);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        MainScene.prototype.onTreasure = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var curTimes = TreasureManager.instance.getCurVideoTimes();
            if (curTimes.num < 5) {
                if (GameData.getInstance().treasure.vacancy) {
                    MiniManeger.instance.playViderAd({
                        successFun: function () {
                            TreasureManager.instance.updateVideoBox();
                            _this.refreshBoxData();
                        },
                        failFun: function () {
                        },
                        errorFun: function () {
                        }
                    });
                }
                else {
                    ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
                }
            }
            else {
                TipsManager.getInstance().showDefaultTips("今日看视频得宝箱次数已用完");
            }
        };
        MainScene.prototype.removeEvent = function () {
            this.btn_game1.off(Laya.Event.CLICK, this, this.onStartGame1);
            this.btn_game2.off(Laya.Event.CLICK, this, this.onStartGame2);
            this.btn_setting.off(Laya.Event.CLICK, this, this.onSetting);
            this.btn_task.off(Laya.Event.CLICK, this, this.onTask);
            this.btn_sign.off(Laya.Event.CLICK, this, this.onSign);
            this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
            this.btn_treasure.off(Laya.Event.CLICK, this, this.onTreasure);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_BOX, this, this.refreshBoxData);
            EventMgr.getInstance().removeEvent(GameConst.CanRecieveTask, this, this.onRecieve);
        };
        MainScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
        };
        MainScene.prototype.removeSelf = function () {
            if (this.moreGameItem) {
                this.moreGameItem.removeSelf();
                this.moreGameItem = null;
            }
            return _super.prototype.removeSelf.call(this);
        };
        return MainScene;
    }(BaseSceneUISkin));

    var EnemyCampItem = (function (_super) {
        __extends(EnemyCampItem, _super);
        function EnemyCampItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "EnemyCampItem";
            _this.data = _data;
            _this.skin = "game/dungeon/EnemyCampItem.json";
            return _this;
        }
        EnemyCampItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        EnemyCampItem.prototype.adaptationStage = function () {
            this.size(300, 300);
            this.scale(0.85, 0.85);
        };
        EnemyCampItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        EnemyCampItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        EnemyCampItem.prototype.addEvent = function () {
        };
        EnemyCampItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.pos(data.x, data.y);
                    this.lab_num.text = data.num + "";
                    this.img_icon.skin = "resource/assets/img/icon/pig/pig_" + data.id + ".png";
                    return [2];
                });
            });
        };
        EnemyCampItem.prototype.removeEvent = function () {
        };
        EnemyCampItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return EnemyCampItem;
    }(BaseSceneUISkin));

    var DungeonCampScene = (function (_super) {
        __extends(DungeonCampScene, _super);
        function DungeonCampScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DungeonCampScene";
            _this.isPlaying = false;
            _this.data = data_;
            _this.skin = "game/dungeon/DungeonCampScene.json";
            return _this;
        }
        DungeonCampScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.btn_back.addComponent(CustomScaleComponent);
            this.btn_start.addComponent(CustomScaleComponent);
            this.box_award.addComponent(CustomScaleComponent);
        };
        DungeonCampScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                    var phone = MiniManeger.instance.systemInfo;
                    var offset = { w: phone.screenWidth / 4, h: phone.screenHeight };
                    MiniManeger.instance.showBannerAd(offset);
                }
            }
        };
        DungeonCampScene.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.btn_start.on(Laya.Event.CLICK, this, this.onStart);
            this.box_award.on(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonCampScene.prototype.setData = function (data_) {
            this.data = data_;
            if (this.isCreate) {
                this.initView();
            }
        };
        DungeonCampScene.prototype.initView = function () {
            if (!this.data)
                return;
            this.box_content.removeChildren();
            this.showOwnStar();
            var data = this.data;
            BitmapLabelUtils.setLabel(this.img_level, data.index + "", "resource/assets/img/game/dungeon/dungeon_sz/", 0);
            this.initShip();
            this.initEnemy();
        };
        DungeonCampScene.prototype.initShip = function () {
            var localUserShipInfo = GameData.getInstance().localUserShipInfo;
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship);
            var pshiInfo = new ShipObjInfo();
            pshiInfo.uid = shiInfo.uid;
            var blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
            pshiInfo.isShow = true;
            pshiInfo.blood = blood;
            pshiInfo.star = shiInfo.star;
            pshiInfo.slot = shiInfo.slot;
            pshiInfo.curBlood = blood;
            pshiInfo.hasShield = shiInfo.hasShield;
            pshiInfo.shieldId = shiInfo.shieldId;
            pshiInfo.width = 300;
            pshiInfo.height = 100;
            pshiInfo.id = Laya.Utils.getGID();
            pshiInfo.playerConfig = localUserShipInfo.player;
            pshiInfo.type = GameConstant.Player;
            this.playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
            this.playership.box_ship.mouseEnabled = false;
            this.playership.x = 400;
            this.playership.y = 500;
            this.box_content.addChild(this.playership);
            this.showGameBanner();
        };
        DungeonCampScene.prototype.showGameBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dYMoreGameBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.box_gameBanner.removeChildren();
                            return [4, GameManager.instance.showGameBanner(4, 20000)];
                        case 1:
                            dYMoreGameBanner = _a.sent();
                            if (dYMoreGameBanner) {
                                this.box_gameBanner.addChild(dYMoreGameBanner);
                                this.box_gameBanner.width = dYMoreGameBanner.width;
                            }
                            return [2];
                    }
                });
            });
        };
        DungeonCampScene.prototype.initEnemy = function () {
            var data = this.data;
            var enemy = data.enemy.split(",");
            var enemyPos = data.enemyIconLocate.split(",");
            for (var i = 0, len = enemy.length; i < len; i++) {
                var en = enemy[i].split("|");
                var enP = enemyPos[i].split("|");
                var data_1 = { id: parseInt(en[0]), num: parseInt(en[1]), x: parseInt(enP[0]), y: parseInt(enP[1]) };
                var item = new EnemyCampItem(data_1);
                this.box_content.addChild(item);
            }
        };
        DungeonCampScene.prototype.showOwnStar = function () {
            var own = GameData.getInstance().playerData.ownStar;
            for (var i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
                var img = this.box_awardStar.getChildByName("star" + (i + 1));
                img.getChildAt(0).visible = own > i;
            }
            var canGet = own >= 3;
            this.box_award.mouseEnabled = canGet;
            this.boxAwardAni(canGet);
        };
        DungeonCampScene.prototype.boxAwardAni = function (isAni) {
            var _this = this;
            if (isAni) {
                if (this.isPlaying)
                    return;
                this.isPlaying = true;
                var fun_1 = function () {
                    Laya.Tween.to(_this.img_boxAward, { rotation: 10 }, 200, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(_this.img_boxAward, { rotation: -10 }, 400, null, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(_this.img_boxAward, { rotation: 0 }, 200, null, Laya.Handler.create(_this, function () {
                                Laya.timer.once(500, _this, function () { fun_1(); });
                            }));
                        }));
                    }));
                };
                fun_1();
            }
            else {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this.img_boxAward);
                this.img_boxAward.rotation = 0;
                this.isPlaying = false;
            }
        };
        DungeonCampScene.prototype.onBack = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        DungeonCampScene.prototype.onStart = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            DungeonManager.instance.curLevelData = this.data;
            GameManager.instance.gameModel = GameModel.Adventure;
            GameManager.instance.openGame('');
            if (this.data.type == 1) {
                TaskManager.instance.updateTask(TaskEnum.TASK_2009, 1);
            }
            else {
                TaskManager.instance.updateTask(TaskEnum.TASK_2010, 1);
            }
            GameMgr.getInstance().hideTopBar();
            this.removeSelf();
        };
        DungeonCampScene.prototype.onAward = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (GameData.getInstance().treasure.vacancy) {
                GameData.getInstance().playerData.ownStar -= 3;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                this.showOwnStar();
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: [{ awardId: 160001, awardNum: 1 }],
                        sureFun: function () {
                            TreasureManager.instance.getBox(160001);
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
            }
        };
        DungeonCampScene.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
            this.btn_start.off(Laya.Event.CLICK, this, this.onStart);
            this.box_award.off(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonCampScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
            MiniManeger.instance.hideBanner();
            this.boxAwardAni(false);
        };
        return DungeonCampScene;
    }(BaseSceneUISkinPopView));

    var DungeonItem = (function (_super) {
        __extends(DungeonItem, _super);
        function DungeonItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DungeonItem";
            _this.data = _data;
            _this.skin = "game/dungeon/DungeonItem.json";
            return _this;
        }
        DungeonItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        DungeonItem.prototype.adaptationStage = function () {
            this.size(200, 200);
        };
        DungeonItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        DungeonItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        DungeonItem.prototype.addEvent = function () {
            this.on(Laya.Event.CLICK, this, this.onStartGame);
        };
        DungeonItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, i, len, img;
                return __generator(this, function (_a) {
                    if (!this.data)
                        return [2];
                    data = this.data;
                    this.pos(data.pos.x, data.pos.y);
                    BitmapLabelUtils.setLabel(this.box_num, data.index + "", "resource/assets/img/game/dungeon/dungeon_sz/", 0, ".png", "center");
                    this.icon_hand.visible = false;
                    if (data.isCurLevel) {
                        this.img_mark.visible = true;
                        this.img_bg.skin = "resource/assets/img/game/dungeon/dungeon_guanqia_2.png";
                        if (data.index == 1 || data.index == 2) {
                            this.icon_hand.visible = true;
                            Laya.Tween.clearAll(this.icon_hand);
                            this.showGuide();
                        }
                    }
                    else {
                        this.img_mark.visible = false;
                        Laya.Tween.clearAll(this.icon_hand);
                        this.img_bg.skin = data.isUnlock ? "resource/assets/img/game/dungeon/dungeon_guanqia_1.png" : "resource/assets/img/game/dungeon/dungeon_guanqia_3.png";
                    }
                    for (i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
                        img = this.box_awardStar.getChildByName("star" + (i + 1));
                        if (data.isUnlock) {
                            img.disabled = false;
                            img.getChildAt(0).visible = data.surplusStar > i;
                        }
                        else {
                            img.disabled = true;
                            img.getChildAt(0).visible = true;
                        }
                    }
                    return [2];
                });
            });
        };
        DungeonItem.prototype.showGuide = function () {
            var _this = this;
            this.icon_hand.x = 200;
            this.icon_hand.y = 200;
            var xs = this.icon_hand.x - 50;
            var ys = this.icon_hand.y - 50;
            Laya.Tween.to(this.icon_hand, { x: xs, y: ys }, 500, null, Laya.Handler.create(this.icon_hand, function () {
                Laya.Tween.to(_this.icon_hand, { x: xs + 50, y: ys + 50 }, 500, null, Laya.Handler.create(_this.icon_hand, function () {
                    _this.showGuide();
                }));
            }));
        };
        DungeonItem.prototype.onStartGame = function () {
            if (!this.data.isUnlock)
                return;
            console.log("进入副本", this.data);
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            ViewManager.getInstance().showView(DungeonCampScene, this.data);
        };
        DungeonItem.prototype.removeEvent = function () {
            this.off(Laya.Event.CLICK, this, this.onStartGame);
        };
        DungeonItem.prototype.onRemoved = function () {
            Laya.Tween.clearAll(this.icon_hand);
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.data = null;
        };
        return DungeonItem;
    }(BaseSceneUISkin));

    var DungeonScene = (function (_super) {
        __extends(DungeonScene, _super);
        function DungeonScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "DungeonScene";
            _this.isPlaying = false;
            _this.skin = "game/dungeon/DungeonScene.json";
            return _this;
        }
        DungeonScene.prototype.showGameBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dYMoreGameBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.box_gameBanner.removeChildren();
                            return [4, GameManager.instance.showGameBanner(7, 20000)];
                        case 1:
                            dYMoreGameBanner = _a.sent();
                            if (dYMoreGameBanner) {
                                this.box_gameBanner.addChild(dYMoreGameBanner);
                                this.box_gameBanner.width = dYMoreGameBanner.width;
                            }
                            return [2];
                    }
                });
            });
        };
        DungeonScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.panel_map.hScrollBarSkin = "";
            this.box_dungeon.removeChildren();
            this.btn_back.addComponent(CustomScaleComponent);
            this.btn_pig.addComponent(CustomScaleComponent);
            this.box_award.addComponent(CustomScaleComponent);
        };
        DungeonScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        DungeonScene.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.btn_pig.on(Laya.Event.CLICK, this, this.onHuntPig);
            this.box_award.on(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.showOwnStar();
                            this.panel_map.hScrollBar.value = 0;
                            return [4, DungeonManager.instance.getLevelData()];
                        case 1:
                            dataArr = _a.sent();
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                item = this.box_dungeon.getChildAt(i);
                                if (item) {
                                    item.setData(dataArr[i]);
                                }
                                else {
                                    item = new DungeonItem(dataArr[i]);
                                    this.box_dungeon.addChild(item);
                                }
                            }
                            if (DungeonManager.instance.curLevelId > 20003) {
                                this.btn_pig.getChildByName('lock').visible = false;
                                this.btn_pig.gray = false;
                            }
                            else {
                                this.btn_pig.gray = true;
                                this.btn_pig.getChildByName('lock').visible = true;
                            }
                            if (GameData.getInstance().isConVersion) {
                                this.btn_pig.visible = false;
                                this.box_award.visible = false;
                                this.box_awardStar.visible = false;
                                return [2];
                            }
                            this.showGameBanner();
                            return [2];
                    }
                });
            });
        };
        DungeonScene.prototype.showOwnStar = function () {
            var own = GameData.getInstance().playerData.ownStar;
            for (var i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
                var img = this.box_awardStar.getChildByName("star" + (i + 1));
                img.getChildAt(0).visible = own > i;
            }
            var canGet = own >= 3;
            this.box_award.mouseEnabled = canGet;
            this.boxAwardAni(canGet);
        };
        DungeonScene.prototype.boxAwardAni = function (isAni) {
            var _this = this;
            if (isAni) {
                if (this.isPlaying)
                    return;
                this.isPlaying = true;
                var fun_1 = function () {
                    Laya.Tween.to(_this.img_boxAward, { rotation: 10 }, 200, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(_this.img_boxAward, { rotation: -10 }, 400, null, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(_this.img_boxAward, { rotation: 0 }, 200, null, Laya.Handler.create(_this, function () {
                                Laya.timer.once(500, _this, function () { fun_1(); });
                            }));
                        }));
                    }));
                };
                fun_1();
            }
            else {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this.img_boxAward);
                this.img_boxAward.rotation = 0;
                this.isPlaying = false;
            }
        };
        DungeonScene.prototype.onBack = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().currentScene.displayMainView();
        };
        DungeonScene.prototype.onHuntPig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
                            if (DungeonManager.instance.curLevelId > 20003) {
                            }
                            else {
                                TipsManager.getInstance().showDefaultTips("请先通过三关");
                                return [2];
                            }
                            return [4, DungeonManager.instance.getEncounterLevel()];
                        case 1:
                            data = _a.sent();
                            console.log("进入遭遇战", data);
                            ViewManager.getInstance().showView(DungeonCampScene, data);
                            return [2];
                    }
                });
            });
        };
        DungeonScene.prototype.onAward = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (GameData.getInstance().treasure.vacancy) {
                GameData.getInstance().playerData.ownStar -= 3;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                this.showOwnStar();
                EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: [{ awardId: 160001, awardNum: 1 }],
                        sureFun: function () {
                            TreasureManager.instance.getBox(160001);
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
            }
        };
        DungeonScene.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
            this.btn_pig.off(Laya.Event.CLICK, this, this.onHuntPig);
            this.box_award.off(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            if (this.moreGameItem) {
                this.moreGameItem.removeSelf();
                this.moreGameItem = null;
            }
            this.removeEvent();
            this.boxAwardAni(false);
        };
        return DungeonScene;
    }(BaseSceneUISkinPopView));

    var RegattaItem = (function (_super) {
        __extends(RegattaItem, _super);
        function RegattaItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "RegattaItem";
            _this.data = _data;
            _this.skin = "game/regatta/RegattaItem.json";
            return _this;
        }
        RegattaItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        RegattaItem.prototype.adaptationStage = function () {
            this.size(600, 650);
        };
        RegattaItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        RegattaItem.prototype.addEvent = function () {
        };
        RegattaItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        RegattaItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, box, big, bigNum, small, lock, pass, img, img, awardArr, i, id, img, config, data_1, i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.data)
                                return [2];
                            data = this.data;
                            this.box_start.visible = this.box_mid.visible = this.box_end.visible = false;
                            this.img_jt.visible = this.img_pass.visible = false;
                            this.box_reward.visible = this.box_star.visible = false;
                            if (!data.isEnd) return [3, 1];
                            this.box_end.visible = true;
                            return [3, 9];
                        case 1:
                            if (data.zoneNo == 1) {
                                this.box_start.visible = true;
                                this.img_jt.x = 40;
                                this.box_star.x = 115;
                                this.img_pass.x = -32;
                                box = this.box_start.getChildAt(1);
                                big = box.getChildByName("big");
                                bigNum = box.getChildByName("bigNum");
                                small = box.getChildByName("small");
                                lock = box.getChildByName("lock");
                                pass = box.getChildByName("pass");
                            }
                            else {
                                this.box_mid.visible = true;
                                this.img_jt.x = 60;
                                this.box_star.x = 145;
                                this.img_pass.x = 10;
                                box = this.box_mid.getChildAt(1);
                                big = box.getChildByName("big");
                                bigNum = box.getChildByName("bigNum");
                                small = box.getChildByName("small");
                                lock = box.getChildByName("lock");
                                pass = box.getChildByName("pass");
                            }
                            box.off(Laya.Event.CLICK, this, this.onSure);
                            if (data.unlock) {
                                lock.visible = false;
                                box.on(Laya.Event.CLICK, this, this.onSure);
                                if (data.curZone) {
                                    small.visible = pass.visible = false;
                                    big.visible = bigNum.visible = true;
                                    this.img_jt.visible = true;
                                    BitmapLabelUtils.setLabel(bigNum, data.zoneNo + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
                                }
                                else {
                                    big.visible = bigNum.visible = false;
                                    small.visible = pass.visible = true;
                                    this.img_pass.visible = true;
                                    img = pass.getChildAt(0);
                                    BitmapLabelUtils.setLabel(img, data.zoneNo + "", "resource/assets/img/home/top/top_sz/", 0, ".png", "center");
                                }
                            }
                            else {
                                lock.visible = small.visible = true;
                                big.visible = bigNum.visible = pass.visible = false;
                                img = lock.getChildAt(0);
                                BitmapLabelUtils.setLabel(img, data.zoneNo + "", "resource/assets/img/home/regatta/number2/number2_", 0, ".png", "center");
                            }
                            if (!!data.pass) return [3, 9];
                            this.box_reward.visible = true;
                            if (data.isShowSlot) {
                                this.img_slot.visible = true;
                                this.img_slot.skin = "resource/assets/img/home/regatta/ui_icon_slot_" + data.unlockSlotMax + ".png";
                                this.boxV_booster.y = 163;
                            }
                            else {
                                this.img_slot.visible = false;
                                this.boxV_booster.y = 163;
                            }
                            this.boxV_booster.removeChildren();
                            awardArr = data.reward.split(",");
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < awardArr.length)) return [3, 8];
                            id = awardArr[i].split("|")[0];
                            img = new Laya.Image();
                            if (!(parseInt(id) > 140000 && parseInt(id) < 150000)) return [3, 3];
                            config = ConfigManager.getInstance().boosterConfigs[id];
                            img.scale(0.6, 0.6);
                            img.skin = "resource/assets/img/icon/booster/" + config.uiIcon + ".png";
                            return [3, 6];
                        case 3:
                            if (!(parseInt(id) > 120000 && parseInt(id) < 130000)) return [3, 4];
                            img.scale(0.7, 0.7);
                            img.skin = "resource/assets/img/icon/cat/catIcon_" + id + ".png";
                            return [3, 6];
                        case 4:
                            if (!(parseInt(id) > 160000 && parseInt(id) < 170000)) return [3, 6];
                            img.scale(0.2, 0.2);
                            return [4, TreasureManager.instance.getTreasureConfig(parseInt(id))];
                        case 5:
                            data_1 = _a.sent();
                            img.skin = "resource/assets/img/icon/box/" + data_1.icon + ".png";
                            _a.label = 6;
                        case 6:
                            this.boxV_booster.addChild(img);
                            _a.label = 7;
                        case 7:
                            i++;
                            return [3, 2];
                        case 8:
                            if (data.isShowStar) {
                                this.box_star.visible = true;
                                for (i = 0, len = this.boxH_star.numChildren; i < len; i++) {
                                    this.boxH_star.getChildAt(i).visible = data.unlockStarMax > i;
                                }
                                this.boxH_star.width = data.unlockStarMax * 93;
                                this.boxH_star.centerX = 0;
                            }
                            _a.label = 9;
                        case 9: return [2];
                    }
                });
            });
        };
        RegattaItem.prototype.onSure = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
                            GameMgr.getInstance().showBufferLoading();
                            return [4, RegattaManager.instance.getRegattaRank()];
                        case 1:
                            _a.sent();
                            ResUtil.getIntance().loadGroups(["foster", "rank"], function () {
                                MiniManeger.instance.hideBanner();
                                ViewManager.getInstance().showView(AdventureEmenyScene, { type: 1, zoneNo: _this.data.zoneNo });
                                GameMgr.getInstance().hiddeBufferLoading();
                            });
                            return [2];
                    }
                });
            });
        };
        RegattaItem.prototype.removeEvent = function () {
        };
        RegattaItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        return RegattaItem;
    }(BaseSceneUISkin));

    var RegattaScene = (function (_super) {
        __extends(RegattaScene, _super);
        function RegattaScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "RegattaScene";
            _this.skin = "game/regatta/RegattaScene.json";
            return _this;
        }
        RegattaScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.panel_map.hScrollBarSkin = "";
            this.btn_back.addComponent(CustomScaleComponent);
            this.btn_start.addComponent(CustomScaleComponent);
        };
        RegattaScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
                if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                    var phone = MiniManeger.instance.systemInfo;
                    var offset = { w: phone.screenWidth / 4, h: phone.screenHeight };
                    MiniManeger.instance.showBannerAd(offset);
                }
            }
        };
        RegattaScene.prototype.addEvent = function () {
            this.btn_back.on(Laya.Event.CLICK, this, this.onBack);
            this.btn_start.on(Laya.Event.CLICK, this, this.onStart);
        };
        RegattaScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, i, len, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.panel_map.hScrollBar.value = 0;
                            return [4, RegattaManager.instance.getZoneData()];
                        case 1:
                            dataArr = _a.sent();
                            for (i = 0, len = dataArr.length; i < len; i++) {
                                item = this.box_zone.getChildAt(i);
                                if (item) {
                                    item.setData(dataArr[i]);
                                }
                                else {
                                    item = new RegattaItem(dataArr[i]);
                                    item.x = 50 + 600 * i;
                                    this.box_zone.addChild(item);
                                }
                            }
                            this.box_zone.width = 600 * dataArr.length;
                            return [2];
                    }
                });
            });
        };
        RegattaScene.prototype.onBack = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().currentScene.displayMainView();
        };
        RegattaScene.prototype.onStart = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
                            GameMgr.getInstance().showBufferLoading();
                            return [4, RegattaManager.instance.getRegattaRank()];
                        case 1:
                            _a.sent();
                            ResUtil.getIntance().loadGroups(["foster", "rank"], function () {
                                MiniManeger.instance.hideBanner();
                                ViewManager.getInstance().showView(AdventureEmenyScene, {
                                    type: 1,
                                    zoneNo: GameData.getInstance().playerData.matchInfo.zoneNo
                                });
                                GameMgr.getInstance().hiddeBufferLoading();
                            });
                            return [2];
                    }
                });
            });
        };
        RegattaScene.prototype.removeEvent = function () {
            this.btn_back.off(Laya.Event.CLICK, this, this.onBack);
            this.btn_start.off(Laya.Event.CLICK, this, this.onStart);
        };
        RegattaScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            MiniManeger.instance.hideBanner();
        };
        return RegattaScene;
    }(BaseSceneUISkin));

    var HomeScene = (function (_super) {
        __extends(HomeScene, _super);
        function HomeScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "HomeScene";
            _this.skin = "home/HomeScene.json";
            return _this;
        }
        HomeScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            ResUtil.getIntance().loadGroups(["propPublic"], function () {
            });
        };
        HomeScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        HomeScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        HomeScene.prototype.addEvent = function () {
            EventMgr.getInstance().addEvent(GameEvent.SHOW_MAIN, this, this.displayMainView);
            EventMgr.getInstance().addEvent(GameEvent.SHOW_REGATTA, this, this.displayFosterView);
        };
        HomeScene.prototype.initView = function () {
            SoundManager.getInstance().playBgMusic(SoundConst.MainBgm);
        };
        HomeScene.prototype.displayMainView = function () {
            GameMgr.getInstance().showTopBar();
            this.box_view.removeChildren();
            if (!this.com_main) {
                this.com_main = GameMgr.getInstance().getView(MainScene);
                this.com_main.com_home = this;
                this.box_main.addChild(this.com_main);
            }
            this.com_main.showMain();
            this.box_view.visible = false;
            this.box_main.visible = true;
        };
        HomeScene.prototype.displayFosterView = function () {
            if (DeviceUtil.isWXMiniGame()) {
                MiniManeger.instance.removeOpenData({ parent: this });
            }
            this.box_view.removeChildren();
            if (!this.com_main) {
                this.com_main = GameMgr.getInstance().getView(MainScene);
                this.com_main.com_home = this;
                this.box_main.addChild(this.com_main);
            }
            this.com_main.showRegatta();
            this.box_view.visible = false;
            this.box_main.visible = true;
        };
        HomeScene.prototype.displayDungeonView = function () {
            var _this = this;
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["dungeon"], function () {
                _this.box_view.removeChildren();
                var view = GameMgr.getInstance().getView(DungeonScene);
                _this.box_main.visible = false;
                _this.box_view.visible = true;
                _this.box_view.addChild(view);
                GameMgr.getInstance().hiddeBufferLoading();
                GameMgr.getInstance().hideTopBar();
            });
        };
        HomeScene.prototype.displayRegattaView = function () {
            var _this = this;
            if (DeviceUtil.isWXMiniGame()) {
                MiniManeger.instance.removeOpenData({ parent: this });
            }
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["regatta"], function () {
                _this.box_view.removeChildren();
                var view = GameMgr.getInstance().getView(RegattaScene);
                _this.box_main.visible = false;
                _this.box_view.visible = true;
                _this.box_view.addChild(view);
                GameMgr.getInstance().hiddeBufferLoading();
                GameMgr.getInstance().hideTopBar();
            });
        };
        HomeScene.prototype.removeEvent = function () {
            EventMgr.getInstance().removeEvent(GameEvent.SHOW_MAIN, this, this.displayMainView);
            EventMgr.getInstance().removeEvent(GameEvent.SHOW_REGATTA, this, this.displayFosterView);
        };
        HomeScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.box_main.removeChildren();
            this.box_view.removeChildren();
            this.com_main = null;
        };
        HomeScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return HomeScene;
    }(BaseSceneUISkin));

    var GamePauseScene = (function (_super) {
        __extends(GamePauseScene, _super);
        function GamePauseScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "GamePauseScene";
            _this.skin = 'game/GamePauseScene.json';
            return _this;
        }
        GamePauseScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_home.addComponent(CustomScaleComponent);
            this.btn_restart.addComponent(CustomScaleComponent);
            this.btn_continue.addComponent(CustomScaleComponent);
            DeviceUtil.adaptationBgImg(this.img_bg);
        };
        GamePauseScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        GamePauseScene.prototype.addEvent = function () {
            this.btn_home.on(Laya.Event.CLICK, this, this.onHome);
            this.btn_restart.on(Laya.Event.CLICK, this, this.onRestart);
            this.btn_continue.on(Laya.Event.CLICK, this, this.onClose);
        };
        GamePauseScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        GamePauseScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var phone, offset;
                return __generator(this, function (_a) {
                    if (DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                        phone = MiniManeger.instance.systemInfo;
                        offset = { w: phone.screenWidth / 2, h: phone.screenHeight };
                        MiniManeger.instance.showBannerAd(offset);
                    }
                    Laya.physicsTimer.pause();
                    Laya.timer.pause();
                    return [2];
                });
            });
        };
        GamePauseScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
        };
        GamePauseScene.prototype.removeSelf = function () {
            Laya.timer.resume();
            Laya.physicsTimer.resume();
            return _super.prototype.removeSelf.call(this);
        };
        GamePauseScene.prototype.onHome = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().openGameScene(HomeScene);
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayMainView();
            MiniManeger.instance.stopGameRecordOver = null;
            MiniManeger.instance.stopGameRecord();
            this.removeSelf();
        };
        GamePauseScene.prototype.onRestart = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.stopGameRecordOver = null;
            MiniManeger.instance.stopGameRecord();
            this.removeSelf();
            GameManager.instance.openGame('');
        };
        GamePauseScene.prototype.removeEvent = function () {
            this.btn_home.off(Laya.Event.CLICK, this, this.onHome);
            this.btn_restart.off(Laya.Event.CLICK, this, this.onRestart);
            this.btn_continue.off(Laya.Event.CLICK, this, this.onClose);
        };
        GamePauseScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            this.viewData_ = null;
            MiniManeger.instance.hideBanner();
        };
        return GamePauseScene;
    }(BaseSceneUISkinPopView));

    var GameScene = (function (_super) {
        __extends(GameScene, _super);
        function GameScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameAdventureScene";
            _this._lastAttack = 0;
            _this.skin = "game/GameScene.json";
            return _this;
        }
        GameScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.init();
        };
        GameScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                SoundManager.getInstance().playBgMusic(SoundConst.GameBgm);
            }
        };
        GameScene.prototype.init2Dbox = function () {
            console.log("测试2d场景物理效果");
            Laya.Physics.I.worldRoot = this.bodyLayer;
        };
        GameScene.prototype.init = function () {
            if (this.viewData_ == null)
                return;
            if (this.isCreate) {
                this.initLayer();
                this.init2Dbox();
                this.initView();
                this.addEvent();
            }
        };
        GameScene.prototype.setData = function (data) {
            this.viewData_ = data;
            this.init();
        };
        GameScene.prototype.initLayer = function () {
            if (this.bodyLayer == null) {
                this.bodyLayer = new Laya.Box();
                var rigidBody = this.box_game.addComponent(Laya.RigidBody);
                rigidBody.type = Physic.KINEMATIC;
                rigidBody.label = GameConstant.Water_wave;
                this.box_game.addChildAt(this.bodyLayer, 0);
            }
            this.box_game.width = Laya.stage.width;
            this.box_game.height = Laya.stage.height;
            GameManager.instance.bodyLayer = this.bodyLayer;
        };
        GameScene.prototype.createBg = function () {
            var farBg = new FarbgScene();
            this.box_game.addChild(farBg);
            var middleBg = new MiddleWaterScene();
            middleBg.y = Laya.stage.height - middleBg.height;
            console.log(middleBg.height, "tessssssssssssssss");
            if (this.box_game) {
                var boxCollider = this.box_game.addComponent(Laya.BoxCollider);
                boxCollider.label = GameConstant.Water_wave;
                boxCollider.width = Laya.stage.width;
                boxCollider.height = 200;
                boxCollider.x = 0;
                boxCollider.y = middleBg.y - 10;
            }
            this.box_game.addChild(middleBg);
            farBg.y = middleBg.y - farBg.height;
            if (this.nearBg == null) {
                this.nearBg = new NearWaterScene();
                this.box_game.addChild(this.nearBg);
            }
            GameManager.instance.gameStatus = GAMESTATUS.PLAYING;
        };
        GameScene.prototype.createPlayer = function () {
            var _this = this;
            var localUserShipInfo = GameData.getInstance().localUserShipInfo;
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(localUserShipInfo.ship.uid, BaseInfoType.Ship);
            var pshiInfo = new ShipObjInfo();
            pshiInfo.uid = shiInfo.uid;
            var blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
            if (GameData.getInstance().isTestVersion) {
                blood = 10000;
            }
            pshiInfo.blood = blood;
            pshiInfo.attackType = shiInfo.attack_type;
            pshiInfo.star = shiInfo.star;
            pshiInfo.slot = shiInfo.slot;
            pshiInfo.curBlood = blood;
            pshiInfo.hasShield = shiInfo.hasShield;
            pshiInfo.shieldId = shiInfo.shieldId;
            pshiInfo.width = 300;
            pshiInfo.height = 100;
            pshiInfo.id = Laya.Utils.getGID();
            pshiInfo.playerConfig = localUserShipInfo.player;
            pshiInfo.booster = localUserShipInfo.booster;
            pshiInfo.type = GameConstant.Player;
            this.nearBg.icon_player.skin = 'resource/assets/img/game/fight/anti_' + shiInfo.attack_type + '.png';
            var playership = ObjectManager.getInstance().createShipByType(shiInfo.id, pshiInfo);
            var xs = playership.box_ui.x;
            playership.box_ui.x = -300;
            playership.x = pshiInfo.width * 1.2;
            var ys = Laya.stage.height - 500;
            switch (pshiInfo.attackType) {
                case 1:
                    ys = Laya.stage.height - 680;
                    break;
                case 2:
                    break;
                case 3:
                    ys = Laya.stage.height - 480;
                    break;
            }
            playership.y = ys;
            this.nearBg.box_game.addChild(playership);
            GameManager.instance.addCollider(playership);
            GameManager.instance.playerShip = playership;
            SoundManager.getInstance().playEffect(SoundConst.PirateShipStart);
            Laya.Tween.to(playership.box_ui, { x: xs }, 1000, Laya.Ease.quartOut, Laya.Handler.create(this, function () {
                if (GameManager.instance.gameModel == GameModel.Adventure) {
                    if (DungeonManager.instance.curLevelData.id == 20001) {
                        _this.icon_start.visible = false;
                        _this.icon_guide.visible = true;
                        _this.icon_guide_hand.visible = true;
                        _this.icon_guide_hand.size(128, 107);
                        _this.playGuide();
                    }
                    else {
                        EventMgr.getInstance().sendEvent(GameConst.PlayerTouchScene);
                    }
                }
            }));
        };
        GameScene.prototype.playGuide = function () {
            var _this = this;
            var point = Laya.Point.create();
            var icon = GameManager.instance.playerShip.box_player1;
            point = icon.localToGlobal(point, false);
            this.icon_guide_hand.x = point.x;
            this.icon_guide_hand.y = point.y;
            var xs = point.x - 100;
            var ys = point.y + 100;
            Laya.Tween.to(this.icon_guide_hand, { x: xs, y: ys }, 1000, null, Laya.Handler.create(this.icon_guide_hand, function () {
                Laya.Tween.to(_this.icon_guide_hand, { x: point.x, y: point.y }, 1000, null, Laya.Handler.create(_this.icon_guide_hand, function () {
                    point.recover();
                    _this.playGuide();
                }));
            }));
        };
        GameScene.prototype.createOtherByGameModel = function () {
        };
        GameScene.prototype.initView = function () {
            ShockUtils.geyInstance()._target = this.box_game;
            ShockUtils.geyInstance().shockLevel = 2;
            ShockUtils.geyInstance().shock(ShockUtils.geyInstance().MAP);
            this.icon_guide.visible = false;
            this.icon_guide_hand.visible = false;
            this.box_pop.width = Laya.stage.width;
            this.changeModel();
            this.icon_start.visible = true;
            this.btn_model.visible = false;
            this.btn_pause.visible = false;
            GameManager.instance.box_gameScene_game = this.box_game;
            this.initLine();
            this.createBg();
            this.createOtherByGameModel();
            this.createPlayer();
            this.btn_record.visible = false;
            if (DeviceUtil.isTTMiniGame()) {
                MiniManeger.instance.stopGameRecord();
                this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
                this.btn_record.visible = true;
            }
            this.showGameBanner();
        };
        GameScene.prototype.showGameBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dYMoreGameBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.box_gameBanner.removeChildren();
                            return [4, GameManager.instance.showGameBanner(5, 3)];
                        case 1:
                            dYMoreGameBanner = _a.sent();
                            if (dYMoreGameBanner) {
                                this.box_gameBanner.addChild(dYMoreGameBanner);
                                this.box_gameBanner.width = dYMoreGameBanner.width;
                            }
                            return [2];
                    }
                });
            });
        };
        GameScene.prototype.initLine = function () {
            this.lineBox = new Laya.Box();
            GameManager.instance.lineBox = this.lineBox;
            Laya.stage.addChild(this.lineBox);
        };
        GameScene.prototype.addEvent = function () {
            this.btn_model.addComponent(CustomScaleComponent);
            this.btn_pause.addComponent(CustomScaleComponent);
            this.btn_record.on(Laya.Event.CLICK, this, this.onRecordInfo);
            this.btn_model.on(Laya.Event.CLICK, this, this.onChangeModel);
            this.btn_pause.on(Laya.Event.CLICK, this, this.onGamePause);
            EventMgr.getInstance().addEvent(GameConst.UseBooster, this, this.onUserBooster);
            EventMgr.getInstance().addEvent(GameConst.RestartGame, this, this.onRestart);
            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        };
        GameScene.prototype.onRecordInfo = function () {
            var _this = this;
            if (MiniManeger.instance.isMakeVideo) {
                MiniManeger.instance.stopGameRecord();
                this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
            }
            else {
                this.btn_record.skin = 'resource/assets/img/tt/luzhizhong.png';
                MiniManeger.instance.startGameRecord();
                MiniManeger.instance.recordStopFun = function () {
                    _this.recordTimeEnd();
                };
            }
        };
        GameScene.prototype.recordTimeEnd = function () {
            this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
        };
        GameScene.prototype.onRestart = function () {
            GameManager.instance.removeAllPig();
            GameManager.instance.removeAllBullet();
            this.icon_start.visible = true;
            if (GameManager.instance.gameModel == GameModel.Adventure) {
                this.createOtherByGameModel();
            }
            if (DeviceUtil.isTTMiniGame()) {
                MiniManeger.instance.stopGameRecord();
                this.btn_record.skin = 'resource/assets/img/tt/kaishiluzhi.png';
                this.btn_record.visible = true;
            }
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
            EventMgr.getInstance().addEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
        };
        GameScene.prototype.onGamePause = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            ViewManager.getInstance().showView(GamePauseScene);
        };
        GameScene.prototype.onChangeModel = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
                this.btn_model.getChildByName('icon_auto').visible = false;
                this.btn_model.getChildByName('icon_hand').visible = true;
                EventMgr.getInstance().sendEvent(GameConst.ModelChange);
            }
            else {
                Laya.physicsTimer.pause();
                Laya.timer.pause();
                MiniManeger.instance.playViderAd({
                    successFun: function () {
                        _this.onResume();
                        GameManager.instance.gameAttackModel = GameAttackModel.AUTO;
                        _this.btn_model.getChildByName('icon_auto').visible = true;
                        _this.btn_model.getChildByName('icon_hand').visible = false;
                        EventMgr.getInstance().sendEvent(GameConst.ModelChange);
                    }, failFun: function () {
                        _this.onResume();
                    }, errorFun: function () {
                        _this.onResume();
                        platform.showModal({
                            title: '系统提示', content: "加载广告失败,是否通过分享获得此功能？", showCancel: false, cancelText: "", confirmText: "确定",
                            success: function () {
                                MiniManeger.instance.shareAppMessage({
                                    sucFun: function () {
                                        _this.onResume();
                                        GameManager.instance.gameAttackModel = GameAttackModel.AUTO;
                                        _this.btn_model.getChildByName('icon_auto').visible = true;
                                        _this.btn_model.getChildByName('icon_hand').visible = false;
                                        EventMgr.getInstance().sendEvent(GameConst.ModelChange);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        };
        GameScene.prototype.onResume = function () {
            Laya.timer.resume();
            Laya.physicsTimer.resume();
        };
        GameScene.prototype.changeModel = function () {
            if (GameManager.instance.gameAttackModel == GameAttackModel.AUTO) {
                this.btn_model.getChildByName('icon_auto').visible = true;
                this.btn_model.getChildByName('icon_hand').visible = false;
            }
            else {
                this.btn_model.getChildByName('icon_auto').visible = false;
                this.btn_model.getChildByName('icon_hand').visible = true;
            }
        };
        GameScene.prototype.onPlayerTouchScene = function () {
            this.icon_start.visible = false;
            this.icon_guide_hand.visible = false;
            this.icon_guide.visible = false;
            this.btn_model.visible = true;
            this.btn_pause.visible = true;
            this.nearBg.icon_enemy.visible = this.nearBg.icon_player.visible = false;
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
            if (DungeonManager.instance.curLevelData.id == 20001) {
                GameManager.instance.playerGuide++;
                this.btn_model.visible = false;
                this.btn_pause.visible = false;
            }
            Laya.Tween.clearAll(this.icon_guide_hand);
        };
        GameScene.prototype.removeEvent = function () {
            this.btn_record.off(Laya.Event.CLICK, this, this.onRecordInfo);
            this.btn_model.off(Laya.Event.CLICK, this, this.onChangeModel);
            this.btn_pause.off(Laya.Event.CLICK, this, this.onGamePause);
            EventMgr.getInstance().removeEvent(GameConst.UseBooster, this, this.onUserBooster);
            EventMgr.getInstance().removeEvent(GameConst.PlayerTouchScene, this, this.onPlayerTouchScene);
            EventMgr.getInstance().removeEvent(GameConst.RestartGame, this, this.onRestart);
        };
        GameScene.prototype.onUserBooster = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var boosterConfig, url, json;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            boosterConfig = ConfigManager.getInstance().boosterConfigs[data.data];
                            if (boosterConfig == null)
                                return [2];
                            url = 'resource/assets/configs/booster/' + boosterConfig.value + '.json';
                            if (data.type == GameConstant.Enemy) {
                                url = 'resource/assets/configs/booster/1' + boosterConfig.value + '.json';
                            }
                            ;
                            switch (boosterConfig.type) {
                                case "3":
                                    break;
                                case "4":
                                    break;
                                default:
                                    return [2];
                            }
                            return [4, GameManager.instance.loadCongigs(url)];
                        case 1:
                            json = _a.sent();
                            if (json == null)
                                return [2];
                            this.createPigByJson(json, (data.type == GameConstant.Enemy), true);
                            return [2];
                    }
                });
            });
        };
        GameScene.prototype.createPigByJson = function (data, isEmemy, isCallPig) {
            if (isEmemy === void 0) { isEmemy = true; }
            var config = data.config;
            var birth = config.shift();
            var playerData = new PigPlayerGameInfo();
            playerData.configsInfo = config;
            playerData.playerId = data.id;
            playerData.curBlood = parseInt(birth.hp);
            playerData.blood = parseInt(birth.hp);
            playerData.attack = parseInt(birth.damage);
            playerData.attackCD = parseInt(birth.attackCD);
            playerData.critPercent = parseInt(birth.crit);
            playerData.crit = 1.5;
            playerData.width = 200;
            playerData.height = 200;
            playerData.direAtt = true;
            playerData.x = birth.x;
            playerData.y = birth.y;
            playerData.id = Laya.Utils.getGID();
            if (isEmemy) {
                playerData.type = GameConstant.Enemy;
            }
            else {
                playerData.type = GameConstant.Player;
            }
            var pigconfig = ConfigManager.getInstance().pigConfigs[data.id];
            playerData.AIScriptID = pigconfig.AIScriptID;
            var player = ObjectManager.getInstance().createPigPlayer(pigconfig.AIScriptID, playerData);
            player.x = birth.x;
            player.y = birth.y;
            player.view2d_.x = player.x;
            player.view2d_.y = player.y;
            if (isEmemy) {
                playerData.type = GameConstant.Enemy;
                GameManager.instance.pigObj[playerData.id] = player;
            }
            else {
                GameManager.instance.addCollider(player);
                playerData.type = GameConstant.Player;
            }
            if (isCallPig) {
                playerData.direAtt = isCallPig;
            }
            this.bodyLayer.addChild(player);
            this.nearBg.box_game.addChild(player.view2d_);
            player.init();
        };
        GameScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
        };
        GameScene.prototype.removeSelf = function () {
            GameManager.instance.removeAllGoldView();
            GameManager.instance.removeAllPig();
            GameManager.instance.removeAllCollider();
            this.nearBg.removeSelf();
            this.nearBg = null;
            this.bodyLayer.removeChildren();
            this.bodyLayer = null;
            this.box_game._destroyAllComponent();
            this.box_game.removeChildren();
            return _super.prototype.removeSelf.call(this);
        };
        return GameScene;
    }(BaseSceneUISkin));

    var GameAdventureScene = (function (_super) {
        __extends(GameAdventureScene, _super);
        function GameAdventureScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameAdventureScene";
            _this.pigGameJson = null;
            _this.wave = 1;
            _this.skin = "game/GameScene.json";
            return _this;
        }
        GameAdventureScene.prototype.onRestart = function () {
            this.wave = 1;
            _super.prototype.onRestart.call(this);
        };
        GameAdventureScene.prototype.createOtherByGameModel = function () {
            var data = this.viewData_;
            EventMgr.getInstance().addEvent(GameConst.NextWave, this, this.onNextWave);
            this.getAdventurePlayerJson('');
        };
        GameAdventureScene.prototype.getAdventurePlayerJson = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, GameManager.instance.loadCongigs('resource/assets/map/' + DungeonManager.instance.curLevelData.id + '.json')];
                        case 1:
                            _a.pigGameJson = _b.sent();
                            this.createAdventuresPlayer();
                            return [2];
                    }
                });
            });
        };
        GameAdventureScene.prototype.createAdventuresPlayer = function () {
            var data = this.pigGameJson[this.wave];
            if (data == null) {
                GameManager.instance.gameStatus = GAMESTATUS.PLAYERWIN;
                TaskManager.instance.updateTask(TaskEnum.TASK_2008, 1);
                EventMgr.getInstance().sendEvent(GameConst.GameOver);
                return;
            }
            for (var i = 0, len = data.length; i < len; i++) {
                this.createPigByJson(data[i]);
            }
        };
        GameAdventureScene.prototype.onNextWave = function () {
            this.wave++;
            this.createAdventuresPlayer();
        };
        GameAdventureScene.prototype.createPigByJson = function (data, isEmemy, isCallPig) {
            if (isEmemy === void 0) { isEmemy = true; }
            if (isCallPig === void 0) { isCallPig = false; }
            if (this.nearBg == null)
                return;
            var config = data.config;
            var birth = config.shift();
            var playerData = new PigPlayerGameInfo();
            playerData.configsInfo = config;
            playerData.playerId = data.id;
            if (isEmemy) {
                playerData.type = GameConstant.Enemy;
            }
            else {
                playerData.type = GameConstant.Player;
            }
            playerData.curBlood = parseInt(birth.hp);
            playerData.blood = parseInt(birth.hp);
            playerData.attack = parseInt(birth.damage);
            playerData.attackCD = parseInt(birth.attackCD);
            playerData.critPercent = parseInt(birth.crit);
            playerData.crit = 1.5;
            playerData.width = 150;
            playerData.height = 150;
            playerData.x = birth.x;
            playerData.y = birth.y;
            if (this.wave > 1) {
                playerData.direAtt = true;
            }
            else {
                playerData.direAtt = false;
            }
            playerData.id = Laya.Utils.getGID();
            var pigconfig = ConfigManager.getInstance().pigConfigs[data.id];
            var player = ObjectManager.getInstance().createPigPlayer(pigconfig.AIScriptID, playerData);
            player.x = birth.x;
            player.y = birth.y;
            player.view2d_.x = player.x;
            player.view2d_.y = player.y;
            if (isEmemy) {
                playerData.type = GameConstant.Enemy;
                GameManager.instance.pigObj[playerData.id] = player;
            }
            else {
                GameManager.instance.addCollider(player);
                playerData.type = GameConstant.Player;
            }
            if (isCallPig) {
                playerData.direAtt = isCallPig;
            }
            this.bodyLayer.addChild(player);
            this.nearBg.box_game.addChild(player.view2d_);
            player.init();
        };
        GameAdventureScene.prototype.init = function () {
            this.wave = 1;
            _super.prototype.init.call(this);
        };
        GameAdventureScene.prototype.removeEvent = function () {
            EventMgr.getInstance().removeEvent(GameConst.NextWave, this, this.onNextWave);
            _super.prototype.removeEvent.call(this);
        };
        GameAdventureScene.prototype.removeSelf = function () {
            EventMgr.getInstance().removeEvent(GameConst.NextWave, this, this.onNextWave);
            return _super.prototype.removeSelf.call(this);
        };
        return GameAdventureScene;
    }(GameScene));

    var GameMatchScene = (function (_super) {
        __extends(GameMatchScene, _super);
        function GameMatchScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameMatchScene";
            _this.skin = "game/GameScene.json";
            return _this;
        }
        GameMatchScene.prototype.createOtherByGameModel = function () {
            this.createOtherPlayer();
            this.nearBg.icon_enemy.visible = true;
            this.nearBg.icon_player.visible = true;
        };
        GameMatchScene.prototype.createOtherPlayer = function () {
            if (GameManager.instance.otherShip != null) {
                GameManager.instance.otherShip.removeSelf();
                GameManager.instance.otherShip = null;
            }
            var localOtherShipInfo = GameData.getInstance().localOtherShipInfo;
            var shiInfo = GameManager.instance.getBaseInfoByUidAndType(localOtherShipInfo.ship.uid, BaseInfoType.Ship, GameData.getInstance().otherprop);
            var eshiInfo = new ShipObjInfo();
            eshiInfo.uid = shiInfo.uid;
            var blood = Math.floor(shiInfo.initialHp + shiInfo.growthHp * shiInfo.level);
            eshiInfo.blood = blood;
            eshiInfo.attackType = ConfigManager.getInstance().shipConfigs[shiInfo.id].attack_type;
            eshiInfo.star = shiInfo.star;
            eshiInfo.slot = shiInfo.slot;
            eshiInfo.curBlood = blood;
            eshiInfo.shieldId = shiInfo.shieldId;
            eshiInfo.hasShield = shiInfo.hasShield;
            eshiInfo.width = 300;
            eshiInfo.height = 100;
            eshiInfo.id = Laya.Utils.getGID();
            localOtherShipInfo.player;
            eshiInfo.playerConfig = localOtherShipInfo.player;
            eshiInfo.booster = localOtherShipInfo.booster;
            eshiInfo.type = GameConstant.Enemy;
            var enemyship = ObjectManager.getInstance().createShipByType(shiInfo.id, eshiInfo);
            enemyship.x = Laya.stage.width - eshiInfo.width * 1.2;
            this.nearBg.icon_enemy.skin = 'resource/assets/img/game/fight/anti_' + eshiInfo.attackType + '.png';
            var ys = Laya.stage.height - 500;
            switch (eshiInfo.attackType + '') {
                case 1 + '':
                    ys = Laya.stage.height - 680;
                    break;
                case 2 + '':
                    break;
                case 3 + '':
                    ys = Laya.stage.height - 480;
                    break;
            }
            enemyship.y = ys;
            GameManager.instance.otherShip = enemyship;
            GameManager.instance.addCollider(enemyship);
            this.nearBg.box_game.addChild(enemyship);
        };
        GameMatchScene.prototype.removeEvent = function () {
            _super.prototype.removeEvent.call(this);
        };
        GameMatchScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return GameMatchScene;
    }(GameScene));

    var DungeonOverScene = (function (_super) {
        __extends(DungeonOverScene, _super);
        function DungeonOverScene(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DungeonOverScene";
            _this.isPlaying = false;
            _this.canFreeGetDiamond = false;
            _this.data = data_;
            _this.skin = "game/dungeon/DungeonOverScene.json";
            return _this;
        }
        DungeonOverScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
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
        };
        DungeonOverScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        DungeonOverScene.prototype.addEvent = function () {
            this.btn_sure.on(Laya.Event.CLICK, this, this.onSureSucc);
            this.btn_share.on(Laya.Event.CLICK, this, this.onShare);
            this.btn_share1.on(Laya.Event.CLICK, this, this.onShare);
            this.btn_shareVideo.on(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_shareVideo1.on(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_sure1.on(Laya.Event.CLICK, this, this.onSureFail);
            this.btn_home.on(Laya.Event.CLICK, this, this.onHome);
            this.btn_restart.on(Laya.Event.CLICK, this, this.onRestart);
            this.box_award.on(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonOverScene.prototype.setData = function (data_) {
            this.data = data_;
            if (this.isCreate) {
                this.initView();
            }
        };
        DungeonOverScene.prototype.initView = function () {
            var _this = this;
            GameMgr.getInstance().showTopBar();
            if (!this.data)
                return;
            this.showOwnStar();
            this.box_win.visible = this.box_fail.visible = this.box_fail1.visible = false;
            var data = this.data;
            console.log("DungeonOverScene >>> initView", data);
            if (data.curBlood > 0) {
                this.img_bg.skin = "resource/assets/img/gamePublic/gamePublic_bg1.jpg";
                this.box_win.visible = true;
                var curDung_1 = DungeonManager.instance.curLevelData;
                if (curDung_1.type == 1)
                    DungeonManager.instance.unlockLevel(curDung_1.id + 1);
                var surplusStar = curDung_1.surplusStar;
                for (var i = 0, len = this.box_star.numChildren; i < len; i++) {
                    var img = this.box_star.getChildByName("star" + (3 - i));
                    img.getChildAt(0).visible = surplusStar > i;
                }
                var per = data.curBlood / data.blood;
                this.countMask = new Laya.Sprite;
                this.countMask.graphics.clear();
                this.countMask.graphics.drawRect(this.img_hp.x, this.img_hp.y, 791 * per, 92, "#ff0000");
                this.img_hp.mask = this.countMask;
                this.canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();
                if (surplusStar) {
                    var per1 = per * 100;
                    console.log("剩余血量百分比", per1);
                    if (per1 >= 66) {
                        this.resultStar = 3;
                    }
                    else if (per1 >= 33 && per1 < 66) {
                        this.resultStar = 2;
                    }
                    else {
                        this.resultStar = 1;
                    }
                    if (surplusStar == 1) {
                        if (this.resultStar < 3) {
                            this.getStar = 0;
                        }
                        else {
                            this.getStar = 1;
                        }
                    }
                    else if (surplusStar == 2) {
                        if (this.resultStar < 2) {
                            this.getStar = 0;
                        }
                        else {
                            this.getStar = 2;
                        }
                    }
                    else {
                        this.getStar = this.resultStar;
                    }
                }
                else {
                    this.getStar = 0;
                }
                if (this.getStar) {
                    GameData.getInstance().playerData.ownStar += this.getStar;
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                    DungeonManager.instance.updateLevelStar(curDung_1.type, curDung_1.id, surplusStar - this.getStar);
                }
                var dataArr_1 = [{ awardId: 1001, awardNum: curDung_1.outGold }];
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    SoundManager.getInstance().playEffect(SoundConst.Reward);
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: dataArr_1,
                        sureFun: function () {
                            GameMgr.getInstance().updateBaseData(1001, curDung_1.outGold);
                            _this.getStarAward();
                            _this.shareVideo();
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            else {
                this.img_bg.skin = "resource/assets/img/gamePublic/gamePublic_bg2.jpg";
                this.box_fail.visible = true;
                this.getStar = 0;
                this.shareVideo();
            }
            var btn_share = this.btn_share;
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
                    btn_share.getChildByName('icon_diomand').visible = true;
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
        };
        DungeonOverScene.prototype.showMoreGameBoxSingle = function () {
            return __awaiter(this, void 0, void 0, function () {
                var left_gameBox, right_gameBox;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            left_gameBox = this.box_gameBox.getChildByName("left_gameBox");
                            right_gameBox = this.box_gameBox.getChildByName("right_gameBox");
                            if (!!left_gameBox) return [3, 2];
                            return [4, GameManager.instance.showMoreGameBoxSingle(3)];
                        case 1:
                            left_gameBox = _a.sent();
                            if (left_gameBox) {
                                this.box_gameBox.addChild(left_gameBox);
                                left_gameBox.left = 100;
                            }
                            _a.label = 2;
                        case 2:
                            if (!!right_gameBox) return [3, 4];
                            return [4, GameManager.instance.showMoreGameBoxSingle(3)];
                        case 3:
                            right_gameBox = _a.sent();
                            if (right_gameBox) {
                                this.box_gameBox.addChild(right_gameBox);
                                right_gameBox.right = 100;
                            }
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        DungeonOverScene.prototype.shareVideo = function () {
            if (DeviceUtil.isTTMiniGame()) {
                this.btn_share.getChildByName('icon_diomand').visible = false;
                this.btn_share1.getChildByName('icon_diomand').visible = false;
                var flag = false;
                this.btn_shareVideo1.getChildByName('icon_diomand').visible = false;
                this.btn_shareVideo.getChildByName('icon_diomand').visible = false;
                if (GameData.getInstance().isConVersion) {
                    this.btn_shareVideo1.getChildByName('icon_diomand').visible = true;
                    this.btn_shareVideo.getChildByName('icon_diomand').visible = true;
                }
                this.btn_shareVideo1.visible = false;
                this.btn_shareVideo.visible = false;
                this.btn_shareVideo.gray = false;
                this.btn_shareVideo1.gray = false;
                this.btn_share.visible = false;
                this.btn_share1.visible = false;
                flag = MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0;
                console.log(">>>>>>>>>>>>>>>>>>", flag);
                if (this.canFreeGetDiamond && flag) {
                    this.btn_shareVideo.visible = false;
                    this.btn_shareVideo1.visible = false;
                    this.btn_sure.centerX = 0;
                    this.btn_sure1.centerX = 0;
                    ViewManager.getInstance().showView(ShareVideo);
                }
                else {
                    this.btn_sure.centerX = -251;
                    this.btn_sure1.centerX = -251;
                    this.btn_shareVideo.visible = true;
                    this.btn_shareVideo1.visible = true;
                }
            }
        };
        DungeonOverScene.prototype.getStarAward = function () {
            var _this = this;
            console.log("获得星星奖励", this.getStar);
            if (this.getStar) {
                Laya.timer.once(200, this, function () {
                    SoundManager.getInstance().playEffect(SoundConst.StarGather);
                    var img = new Laya.Image();
                    img.skin = "resource/assets/img/game/dungeon/dungeon_ui_level_win_sword_double.png";
                    img.anchorX = img.anchorY = 0.5;
                    var p = _this.box_star.localToGlobal(new Laya.Point(266, 54));
                    img.pos(p.x, p.y);
                    Laya.stage.addChild(img);
                    var endP = _this.box_awardStar.localToGlobal(new Laya.Point(266, 54));
                    Laya.Tween.to(img, { x: endP.x, y: endP.y, scaleX: 0.4, scaleY: 0.4 }, 500, null, Laya.Handler.create(_this, function () {
                        Laya.stage.removeChild(img);
                        var surplusStar = DungeonManager.instance.curLevelData.surplusStar - _this.getStar;
                        for (var i = 0, len = _this.box_star.numChildren; i < len; i++) {
                            var img_1 = _this.box_star.getChildByName("star" + (3 - i));
                            img_1.getChildAt(0).visible = surplusStar > i;
                        }
                        _this.showOwnStar();
                    }));
                });
            }
        };
        DungeonOverScene.prototype.showOwnStar = function () {
            var own = GameData.getInstance().playerData.ownStar;
            for (var i = 0, len = this.box_awardStar.numChildren; i < len; i++) {
                var img = this.box_awardStar.getChildByName("star" + (i + 1));
                img.getChildAt(0).visible = own > i;
            }
            var canGet = own >= 3;
            this.box_award.mouseEnabled = canGet;
            this.boxAwardAni(canGet);
        };
        DungeonOverScene.prototype.boxAwardAni = function (isAni) {
            var _this = this;
            if (isAni) {
                if (this.isPlaying)
                    return;
                this.isPlaying = true;
                var fun_1 = function () {
                    Laya.Tween.to(_this.img_boxAward, { rotation: 10 }, 200, null, Laya.Handler.create(_this, function () {
                        Laya.Tween.to(_this.img_boxAward, { rotation: -10 }, 400, null, Laya.Handler.create(_this, function () {
                            Laya.Tween.to(_this.img_boxAward, { rotation: 0 }, 200, null, Laya.Handler.create(_this, function () {
                                Laya.timer.once(500, _this, function () { fun_1(); });
                            }));
                        }));
                    }));
                };
                fun_1();
            }
            else {
                Laya.timer.clearAll(this);
                Laya.Tween.clearAll(this.img_boxAward);
                this.img_boxAward.rotation = 0;
                this.isPlaying = false;
            }
        };
        DungeonOverScene.prototype.onSureSucc = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().openGameScene(HomeScene);
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayDungeonView();
            this.removeSelf();
        };
        DungeonOverScene.prototype.onShare = function () {
            var _this = this;
            if (this.btn_share.gray)
                return;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            MiniManeger.instance.shareAppMessage({
                sucFun: function () {
                    if (_this.canFreeGetDiamond) {
                        GameManager.instance.freeDiamond(20);
                    }
                    _this.btn_share.gray = true;
                    _this.btn_share.getChildByName('icon_diomand').visible = false;
                }
            });
        };
        DungeonOverScene.prototype.onShareVideo = function () {
            var _this = this;
            if (this.btn_shareVideo1.gray)
                return;
            if (this.btn_shareVideo.gray)
                return;
            MiniManeger.instance.shareGameVideo({
                successFun: function () {
                    if (GameData.getInstance().isConVersion) {
                        GameManager.instance.freeDiamond(20);
                        _this.btn_shareVideo1.gray = true;
                        _this.btn_shareVideo.gray = true;
                        _this.btn_shareVideo1.getChildByName('icon_diomand').visible = false;
                        _this.btn_shareVideo.getChildByName('icon_diomand').visible = false;
                    }
                }
            });
        };
        DungeonOverScene.prototype.onSureFail = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.box_fail.visible = false;
            this.box_fail1.visible = true;
        };
        DungeonOverScene.prototype.onHome = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().openGameScene(HomeScene);
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayMainView();
            this.removeSelf();
        };
        DungeonOverScene.prototype.onRestart = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            SceneManager.getInstance().openGameScene(HomeScene);
            var homeView = SceneManager.getInstance().currentScene;
            homeView.displayDungeonView();
            this.removeSelf();
        };
        DungeonOverScene.prototype.onAward = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (GameData.getInstance().treasure.vacancy) {
                GameData.getInstance().playerData.ownStar -= 3;
                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                this.showOwnStar();
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: [{ awardId: 160001, awardNum: 1 }],
                        sureFun: function () {
                            TreasureManager.instance.getBox(160001);
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            else {
                ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
            }
        };
        DungeonOverScene.prototype.removeEvent = function () {
            this.btn_sure.off(Laya.Event.CLICK, this, this.onSureSucc);
            this.btn_share.off(Laya.Event.CLICK, this, this.onShare);
            this.btn_share1.off(Laya.Event.CLICK, this, this.onShare);
            this.btn_shareVideo.off(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_shareVideo1.off(Laya.Event.CLICK, this, this.onShareVideo);
            this.btn_sure1.off(Laya.Event.CLICK, this, this.onSureFail);
            this.btn_home.off(Laya.Event.CLICK, this, this.onHome);
            this.btn_restart.off(Laya.Event.CLICK, this, this.onRestart);
            this.box_award.off(Laya.Event.CLICK, this, this.onAward);
        };
        DungeonOverScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
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
        };
        return DungeonOverScene;
    }(BaseSceneUISkinPopView));

    var GoldView = (function (_super) {
        __extends(GoldView, _super);
        function GoldView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "GoldView";
            return _this;
        }
        GoldView.prototype.onCreate = function (data) {
            var _this = this;
            _super.prototype.onCreate.call(this, data, false);
            this.visible = true;
            if (this._view2d == null) {
                this._view2d = new Laya.Box();
                this.addChild(this._view2d);
            }
            this.createGoldIcon();
            this.once(Laya.Event.CLICK, this, this.onClick);
            Laya.timer.frameLoop(1, this, function () {
                if (_this.x <= GameManager.instance.playerShip.x) {
                    _this.y += 4;
                    if (_this.y > Laya.stage.height) {
                        Laya.timer.clearAll(_this);
                        _this.destroy();
                    }
                }
                else {
                    _this.x -= 1;
                    if (_this.y < Laya.stage.height - 480) {
                        _this.y += 3;
                    }
                }
            });
        };
        GoldView.prototype.onClick = function () {
            SoundManager.getInstance().playEffect(SoundConst.GetGold);
            Laya.timer.clearAll(this);
            this.destroy();
        };
        GoldView.prototype.createGoldIcon = function () {
            var icon_gold = Laya.Pool.getItemByClass('icon_gold', Laya.Image);
            icon_gold.skin = 'resource/assets/img/home/foster/Icon_coin.png';
            icon_gold.size(100, 100);
            this._view2d.addChild(icon_gold);
            this.icon_gold = icon_gold;
        };
        GoldView.prototype.destroy = function () {
            this.visible = false;
            Laya.timer.clearAll(this);
            delete GameManager.instance.goldObj[this.objInfo_.id];
            ObjectPool.instance.recoveryObj(this);
        };
        GoldView.prototype.removeSelf = function () {
            Laya.timer.clearAll(this);
            this.off(Laya.Event.CLICK, this, this.onClick);
            return _super.prototype.removeSelf.call(this);
        };
        GoldView.prototype.onRecovery = function () {
            _super.prototype.onRecovery.call(this);
            if (this.isRecovery)
                return;
            this.off(Laya.Event.CLICK, this, this.onClick);
            this.icon_gold.removeSelf();
            Laya.Pool.recover('icon_gold', this.icon_gold);
            if (this._view2d) {
                this._view2d.removeChildren();
                this._view2d.removeSelf();
                this._view2d = null;
            }
        };
        return GoldView;
    }(GameObj));

    var DYChannelMgr = (function () {
        function DYChannelMgr() {
            this.url = "https://zy.qkxz.com/WxApi/?webid=106";
            this.version = 210;
            this.startGameReport = false;
            this.nGameID = 0;
            this.endGameReport = false;
            this.gameListInfos = [];
            this.bannerInfos = [];
            this._moreGameList = [];
        }
        Object.defineProperty(DYChannelMgr, "instance", {
            get: function () {
                if (!DYChannelMgr.ins)
                    DYChannelMgr.ins = new DYChannelMgr();
                return DYChannelMgr.ins;
            },
            enumerable: false,
            configurable: true
        });
        DYChannelMgr.prototype.initConfig = function (res) {
            this.channelInfos = res;
            this.url = res.url;
            this.version = res.version;
        };
        DYChannelMgr.prototype.loginGame = function () {
            var _this = this;
            return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var userinfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!DeviceUtil.isWXMiniGame()) return [3, 2];
                            return [4, this.WXLogin()];
                        case 1:
                            userinfo = _a.sent();
                            return [3, 4];
                        case 2:
                            if (!DeviceUtil.isTTMiniGame()) return [3, 4];
                            return [4, this.TTLogin()];
                        case 3:
                            userinfo = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (userinfo) {
                                this.openid = userinfo.openid;
                                GameData.getInstance().userInfo.openId = userinfo.openid;
                            }
                            return [4, this.requestUser()];
                        case 5:
                            _a.sent();
                            resolve(userinfo);
                            return [2];
                    }
                });
            }); });
        };
        DYChannelMgr.prototype.WXLogin = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                wx.login({
                    success: function (res) {
                        if (res.code) {
                            console.log("code：", res.code);
                            var launchOption = MiniManeger.instance.launchOption;
                            var scene = null;
                            if (launchOption.query && launchOption.query["scene"]) {
                                scene = launchOption.query["scene"];
                            }
                            var obj = {
                                code: res.code,
                                nickName: "",
                                avatarUrl: "",
                                gender: 0,
                                scene: scene
                            };
                            var str = GameManager.instance.objToQueryStr(obj);
                            HttpMgr.getInstance().sendHttp(_this.url + "&act=userinfo&version=" + _this.version + "&" + str, null, function (rev) {
                                var jsonRev = rev.data;
                                console.log("DY---> login success", rev);
                                resolve(jsonRev);
                            }, function (err) {
                                console.warn("DY---> login fail = ", err);
                                resolve(null);
                            }, "get");
                        }
                        else {
                            console.warn("微信登录失败：", res);
                            resolve(null);
                        }
                    },
                    fail: function (err) {
                        console.log("login调用失败", err);
                        resolve(null);
                    }
                });
            });
        };
        DYChannelMgr.prototype.TTLogin = function () {
            return new Promise(function (resolve, reject) {
            });
        };
        DYChannelMgr.prototype.requestUser = function () {
            var _this = this;
            return new Promise(function (resolve) {
                HttpMgr.getInstance().sendHttp(_this.url + "&act=user&version=" + _this.version + "&openid=" + _this.openid, null, function (rev) {
                    console.log("DY---> requestUser rev = ", rev);
                    if (rev && rev.data) {
                        if (parseInt(rev.data.is_status) == 1 && parseInt(rev.data.casualClick) == 1) {
                            GameData.getInstance().isConVersion = false;
                        }
                        else {
                            GameData.getInstance().isConVersion = true;
                        }
                    }
                    resolve();
                }, function () {
                    resolve();
                }, "get");
            });
        };
        DYChannelMgr.prototype.startGame = function () {
            var _this = this;
            return new Promise(function (resolve) {
                if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame() && !_this.startGameReport) {
                    HttpMgr.getInstance().sendHttp(_this.url + "&act=index&version=" + _this.version + "&openid=" + _this.openid, null, function (rev) {
                        var jsonRev = rev.data;
                        console.log("DY---> startGame rev = ", rev);
                        _this.nGameID = jsonRev.id;
                        _this.startGameReport = true;
                        resolve(jsonRev.id);
                    }, function () {
                        resolve(null);
                    }, "get");
                }
                else {
                    resolve(null);
                }
            });
        };
        DYChannelMgr.prototype.endGame = function (obj) {
            var _this = this;
            return new Promise(function (resolve) {
                if (GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame() && !_this.endGameReport) {
                    if (!obj)
                        obj = { id: _this.nGameID };
                    HttpMgr.getInstance().sendHttp(_this.url + "&act=end&version=" + _this.version + "&openid=" + _this.openid + "&id=" + obj.id, null, function (rev) {
                        var jsonRev = rev.data;
                        console.log("DY---> endGame rev = ", rev);
                        _this.endGameReport = true;
                        resolve(jsonRev);
                    }, function () {
                        resolve(null);
                    }, "get");
                }
                else {
                    resolve(null);
                }
            });
        };
        DYChannelMgr.prototype.clickGame = function (id) {
            HttpMgr.getInstance().sendHttp(this.url + "&act=game&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, function (rev) {
                console.log("DY---> clickGame rev = ", rev);
            }, null, "get");
        };
        DYChannelMgr.prototype.toGame = function (id) {
            HttpMgr.getInstance().sendHttp(this.url + "&act=cgame&version=" + this.version + "&id=" + id + "&openid=" + this.openid, null, function (rev) {
                console.log("DY---> toGame rev = ", rev);
            }, null, "get");
        };
        Object.defineProperty(DYChannelMgr.prototype, "moreGameList", {
            get: function () {
                return Utils.copy(this._moreGameList);
            },
            set: function (data) {
                this._moreGameList = data;
            },
            enumerable: false,
            configurable: true
        });
        DYChannelMgr.prototype.randomOpenGame = function () {
            var data = Utils.randomArray(this.moreGameList);
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYChannelMgr.prototype.getGameList = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var url = _this.url + "&act=gamelist&version=" + _this.version + "&openid=" + _this.openid + "&v=" + Math.random();
                HttpMgr.getInstance().sendHttp(url, null, function (rev) {
                    console.log("DY---> getGameList rev = ", rev);
                    _this.bannerInfos = rev.data.banner;
                    _this.gameListInfos = rev.data.gamelist;
                    resolve(rev.data.gamelist);
                }, function () {
                    reject();
                }, "get");
            });
        };
        DYChannelMgr.prototype.refreshGameList = function (reload) {
            var _this = this;
            if (reload === void 0) { reload = true; }
            return new Promise(function (resolve, reject) {
                if (!reload && _this._moreGameList && _this._moreGameList.length > 0) {
                    resolve(_this._moreGameList);
                    return;
                }
                _this.getGameList().then(function () {
                    _this._moreGameList = [];
                    var nLen = 0;
                    if (_this.gameListInfos)
                        nLen = _this.gameListInfos.length;
                    for (var i = 0; i < nLen; ++i) {
                        var stData = new MoreGameInfo();
                        stData.ad_id = _this.gameListInfos[i].id;
                        stData.ad_img = _this.gameListInfos[i].img;
                        stData.name = _this.gameListInfos[i].title;
                        stData.ad_appid = _this.gameListInfos[i].appid;
                        stData.url = _this.gameListInfos[i].url;
                        _this._moreGameList.push(stData);
                    }
                    console.log("refreshGameList = ", _this._moreGameList);
                    resolve(_this._moreGameList);
                }).catch(function () {
                    resolve(null);
                });
            });
        };
        DYChannelMgr.prototype.getRandomIndex = function (nMax) {
            if (!this._moreGameList || this._moreGameList.length <= 0) {
                return [];
            }
            var nRandom = Utils.random(0, this._moreGameList.length - 1);
            var nCount = this._moreGameList.length % 3;
            if (nCount > 0) {
                nCount = 3 - nCount;
            }
            nCount = this._moreGameList.length + nCount;
            if (nCount <= nMax) {
                nCount = nMax;
            }
            var aryInfo = [];
            for (var i = 0; i < nCount; ++i) {
                aryInfo.push(nRandom);
                nRandom += 1;
                if (nRandom >= this._moreGameList.length) {
                    nRandom = 0;
                }
            }
            return aryInfo;
        };
        return DYChannelMgr;
    }());
    var DYAuthorize_Cmd = (function () {
        function DYAuthorize_Cmd() {
        }
        return DYAuthorize_Cmd;
    }());
    var DYAuthorize_Rev = (function () {
        function DYAuthorize_Rev() {
        }
        return DYAuthorize_Rev;
    }());
    var DYEndGame_Cmd = (function () {
        function DYEndGame_Cmd() {
        }
        return DYEndGame_Cmd;
    }());
    var DYGameListItem = (function () {
        function DYGameListItem() {
        }
        return DYGameListItem;
    }());
    var MoreGameInfo = (function () {
        function MoreGameInfo() {
            this.ad_id = "";
            this.ad_img = "";
            this.name = "";
            this.ad_appid = "";
            this.url = "";
        }
        return MoreGameInfo;
    }());
    ;

    var PopBaseScene = (function (_super) {
        __extends(PopBaseScene, _super);
        function PopBaseScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = 'PopBaseScene';
            _this.showEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
            _this.eventPool = [];
            return _this;
        }
        PopBaseScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initMiniGame();
                this.initView();
                this.addEvent();
            }
            this.off(Laya.Event.ADDED, this, this.onAddStage);
        };
        PopBaseScene.prototype.initMiniGame = function () {
            this.showBanner();
        };
        PopBaseScene.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initMiniGame();
                this.initView();
                this.addEvent();
                this.showEnterAnimation();
            }
        };
        PopBaseScene.prototype.initView = function () { };
        PopBaseScene.prototype.addEvent = function () { };
        PopBaseScene.prototype.removeSelf = function () {
            var node = _super.prototype.removeSelf.call(this);
            return node;
        };
        PopBaseScene.prototype.registerEvent = function (target, type, callbackobj, callback, args) {
            target.on(type, callbackobj, callback, args);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        PopBaseScene.prototype.registerOnceEvent = function (target, type, callbackobj, callback, args) {
            target.once(type, callbackobj, callback, args);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        PopBaseScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        target.off(type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        PopBaseScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        PopBaseScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        PopBaseScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        PopBaseScene.prototype.showBanner = function () {
        };
        PopBaseScene.prototype.destoryBanner = function () {
        };
        PopBaseScene.prototype.hideBanner = function () {
        };
        return PopBaseScene;
    }(BaseSceneUISkinPopView));

    var BaseUIScene = (function (_super) {
        __extends(BaseUIScene, _super);
        function BaseUIScene() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.className_key = "BaseUIScene";
            _this.eventPool = [];
            return _this;
        }
        BaseUIScene.prototype.registerEvent = function (target, type, callbackobj, callback, args) {
            target.on(type, callbackobj, callback, args);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        BaseUIScene.prototype.registerOnceEvent = function (target, type, callbackobj, callback, args) {
            target.once(type, callbackobj, callback, args);
            this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
        };
        BaseUIScene.prototype.removeOnceEvent = function (target, type, callbackobj, callback) {
            target.off(type, callbackobj, callback);
        };
        BaseUIScene.prototype.clearEvent = function () {
            var eventPool = this.eventPool;
            if (eventPool.length > 0) {
                for (var i = 0; i < this.eventPool.length; i++) {
                    var target = eventPool[i].target;
                    var type = eventPool[i].type;
                    var callback = eventPool[i].callback;
                    var callbackobj = eventPool[i].callbackobj;
                    if (target) {
                        this.removeOnceEvent(target, type, callbackobj, callback);
                    }
                }
            }
            eventPool = [];
        };
        BaseUIScene.prototype.playClickSound = function () {
        };
        BaseUIScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            this.initView();
            this.addEvent();
        };
        BaseUIScene.prototype.onDisable = function () {
            this.removeEvent();
        };
        BaseUIScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        BaseUIScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.clearEvent();
        };
        BaseUIScene.prototype.removeEvent = function () {
            this.clearEvent();
        };
        BaseUIScene.prototype.initView = function () {
        };
        BaseUIScene.prototype.addEvent = function () {
        };
        return BaseUIScene;
    }(BaseSceneUISkin));
    var EventObj = (function () {
        function EventObj() {
        }
        return EventObj;
    }());

    var MainGameItem2 = (function (_super) {
        __extends(MainGameItem2, _super);
        function MainGameItem2(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "MainGameItem2";
            _this.index = 0;
            _this.viewData_ = data;
            _this.skin = "platform/dy/wechat/MainGameItem2.json";
            return _this;
        }
        MainGameItem2.prototype.setData = function (data) {
            this.viewData_ = data;
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        MainGameItem2.prototype.adaptationStage = function () {
        };
        MainGameItem2.prototype.initView = function () {
            var data = this.viewData_;
            this.gameInfo = data;
            var gameInfo = data;
            this.txt_title.text = gameInfo.name;
            this.icon_title.skin = gameInfo.ad_img;
            this.gameInfo = gameInfo;
        };
        MainGameItem2.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        MainGameItem2.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        MainGameItem2.prototype.onPlay = function () {
            if (!this.gameInfo)
                return;
            var data = this.gameInfo;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        return MainGameItem2;
    }(BaseUIScene));

    var WechatBoxUI2 = (function (_super) {
        __extends(WechatBoxUI2, _super);
        function WechatBoxUI2() {
            var _this = _super.call(this) || this;
            _this.className_key = 'WechatBoxUI2';
            _this.itemW = 200;
            _this.autoMove = true;
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "platform/dy/wechat/WechatBoxUI2.json";
            return _this;
        }
        WechatBoxUI2.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
            this.btn_back.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
            this.bnt_next.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
        };
        WechatBoxUI2.prototype.onClick = function () {
            DYChannelMgr.instance.randomOpenGame();
        };
        WechatBoxUI2.prototype.onBack = function () {
            this.viewData_.closeFun && this.viewData_.closeFun();
            this.removeSelf();
        };
        WechatBoxUI2.prototype.initView = function () {
            Laya.timer.clearAll(this);
            this.dataArr = DYChannelMgr.instance.moreGameList;
            console.log(this.dataArr);
            var didnex = 0;
            this.panel_list.removeChildren();
            for (var i = 0; i < this.maxCount + 1; i++) {
                var data = this.dataArr[didnex];
                var item = new MainGameItem2(data);
                item.index = didnex;
                item.zOrder = 0;
                item.setData(data);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.x = i * this.itemW;
                this.panel_list.addChild(item);
            }
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
        };
        WechatBoxUI2.prototype.onMove = function (dt) {
            if (!this.autoMove)
                return;
            for (var i = 0; i < this.panel_list.numChildren; i++) {
                var item = this.panel_list.getChildAt(i);
                item.x += this.speed * this.dir;
            }
            this.refresh();
        };
        WechatBoxUI2.prototype.refresh = function () {
            var startItem = this.panel_list.getChildAt(0);
            var lastItem = this.panel_list.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.x < -this.itemW) {
                    startItem.x = lastItem.x + lastItem.width;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.setData(this.dataArr[startItem.index]);
                }
            }
            else {
                if (lastItem.x > this.maxCount * this.itemW) {
                    lastItem.x = startItem.x - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.setData(this.dataArr[lastItem.index]);
                }
            }
        };
        WechatBoxUI2.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        WechatBoxUI2.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        WechatBoxUI2.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.stx = evt.stageX;
            this.sty = evt.stageY;
            var mouseMove = function (evt1) {
                var dx = evt1.stageX - _this.stx;
                for (var i = 0; i < _this.panel_list.numChildren; i++) {
                    var item = _this.panel_list.getChildAt(i);
                    item.x += dx;
                }
                _this.stx = evt1.stageX;
                _this.dir = dx > 0 ? 1 : -1;
                _this.refresh();
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.dir = -1;
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        return WechatBoxUI2;
    }(PopBaseScene));

    var WechatBoxUI3 = (function (_super) {
        __extends(WechatBoxUI3, _super);
        function WechatBoxUI3() {
            var _this = _super.call(this) || this;
            _this.className_key = 'WechatBoxUI3';
            _this.itemW = 200;
            _this.autoMove = true;
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "platform/dy/wechat/WechatBoxUI3.json";
            return _this;
        }
        WechatBoxUI3.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
            this.btn_back.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
            this.bnt_next.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
        };
        WechatBoxUI3.prototype.onClick = function () {
            DYChannelMgr.instance.randomOpenGame();
        };
        WechatBoxUI3.prototype.onBack = function () {
            this.viewData_.closeFun && this.viewData_.closeFun();
            this.removeSelf();
        };
        WechatBoxUI3.prototype.initView = function () {
            Laya.timer.clearAll(this);
            this.dataArr = DYChannelMgr.instance.moreGameList;
            console.log(this.dataArr);
            var didnex = 0;
            this.panel_list.removeChildren();
            for (var i = 0; i < this.maxCount + 1; i++) {
                var data = this.dataArr[didnex];
                var item = new MainGameItem2(data);
                item.index = didnex;
                item.zOrder = 0;
                item.setData(data);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.x = i * this.itemW;
                this.panel_list.addChild(item);
            }
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
        };
        WechatBoxUI3.prototype.onMove = function (dt) {
            if (!this.autoMove)
                return;
            for (var i = 0; i < this.panel_list.numChildren; i++) {
                var item = this.panel_list.getChildAt(i);
                item.x += this.speed * this.dir;
            }
            this.refresh();
        };
        WechatBoxUI3.prototype.refresh = function () {
            var startItem = this.panel_list.getChildAt(0);
            var lastItem = this.panel_list.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.x < -this.itemW) {
                    startItem.x = lastItem.x + lastItem.width;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.setData(this.dataArr[startItem.index]);
                }
            }
            else {
                if (lastItem.x > this.maxCount * this.itemW) {
                    lastItem.x = startItem.x - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.setData(this.dataArr[lastItem.index]);
                }
            }
        };
        WechatBoxUI3.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        WechatBoxUI3.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        WechatBoxUI3.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.stx = evt.stageX;
            this.sty = evt.stageY;
            var mouseMove = function (evt1) {
                var dx = evt1.stageX - _this.stx;
                for (var i = 0; i < _this.panel_list.numChildren; i++) {
                    var item = _this.panel_list.getChildAt(i);
                    item.x += dx;
                }
                _this.stx = evt1.stageX;
                _this.dir = dx > 0 ? 1 : -1;
                _this.refresh();
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.dir = -1;
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        return WechatBoxUI3;
    }(PopBaseScene));

    var WechatBoxUI4 = (function (_super) {
        __extends(WechatBoxUI4, _super);
        function WechatBoxUI4() {
            var _this = _super.call(this) || this;
            _this.className_key = 'WechatBoxUI4';
            _this.itemW = 200;
            _this.autoMove = true;
            _this.speed = 2;
            _this.dir = -1;
            _this.skin = "platform/dy/wechat/WechatBoxUI4.json";
            return _this;
        }
        WechatBoxUI4.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
            this.btn_back.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
            this.bnt_next.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
        };
        WechatBoxUI4.prototype.onClick = function () {
            DYChannelMgr.instance.randomOpenGame();
        };
        WechatBoxUI4.prototype.onBack = function () {
            ViewManager.getInstance().showView(WechatBoxUI2, this.viewData_);
            this.removeSelf();
        };
        WechatBoxUI4.prototype.initView = function () {
            Laya.timer.clearAll(this);
            this.dataArr = DYChannelMgr.instance.moreGameList;
            console.log(this.dataArr);
            var didnex = 0;
            this.panel_list.removeChildren();
            for (var i = 0; i < this.maxCount + 1; i++) {
                var data = this.dataArr[didnex];
                var item = new MainGameItem2(data);
                item.index = didnex;
                item.zOrder = 0;
                item.setData(data);
                didnex++;
                if (didnex >= this.dataArr.length) {
                    didnex = 0;
                }
                item.x = i * this.itemW;
                this.panel_list.addChild(item);
            }
            Laya.timer.frameLoop(1, this, this.onMove);
            DYChannelMgr.instance.refreshGameList();
            DYChannelMgr.instance.randomOpenGame();
        };
        WechatBoxUI4.prototype.onMove = function (dt) {
            if (!this.autoMove)
                return;
            for (var i = 0; i < this.panel_list.numChildren; i++) {
                var item = this.panel_list.getChildAt(i);
                item.x += this.speed * this.dir;
            }
            this.refresh();
        };
        WechatBoxUI4.prototype.refresh = function () {
            var startItem = this.panel_list.getChildAt(0);
            var lastItem = this.panel_list.getChildAt(this.maxCount);
            if (this.dir == -1) {
                if (startItem.x < -this.itemW) {
                    startItem.x = lastItem.x + lastItem.width;
                    startItem.zOrder = lastItem.zOrder + 1;
                    startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                    startItem.setData(this.dataArr[startItem.index]);
                }
            }
            else {
                if (lastItem.x > this.maxCount * this.itemW) {
                    lastItem.x = startItem.x - startItem.height;
                    lastItem.zOrder = startItem.zOrder - 1;
                    lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                    lastItem.setData(this.dataArr[lastItem.index]);
                }
            }
        };
        WechatBoxUI4.prototype.getUpIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
        };
        WechatBoxUI4.prototype.getDownIndexforCurIndex = function (index) {
            if (index >= this.dataArr.length || index < 0)
                return 0;
            return index + 1 < this.dataArr.length ? index + 1 : 0;
        };
        WechatBoxUI4.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.stx = evt.stageX;
            this.sty = evt.stageY;
            var mouseMove = function (evt1) {
                var dx = evt1.stageX - _this.stx;
                for (var i = 0; i < _this.panel_list.numChildren; i++) {
                    var item = _this.panel_list.getChildAt(i);
                    item.x += dx;
                }
                _this.stx = evt1.stageX;
                _this.dir = dx > 0 ? 1 : -1;
                _this.refresh();
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.dir = -1;
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        return WechatBoxUI4;
    }(PopBaseScene));

    var DYMoreGameBanner = (function (_super) {
        __extends(DYMoreGameBanner, _super);
        function DYMoreGameBanner(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBanner";
            _this.itemW = 250;
            _this.autoMove = true;
            _this.index = 0;
            _this.mulindex = 0;
            _this.scrollCount = 2;
            _this.isMove = true;
            _this.nStartX = 0;
            _this.viewData_ = data;
            _this.scrollCount = data.scrollCount;
            _this.name = "DYMoreGameBanner";
            _this.skin = "platform/dy/wechat/DYMoreGameBanner.json";
            return _this;
        }
        DYMoreGameBanner.prototype.adaptationStage = function () {
        };
        DYMoreGameBanner.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.addEvent();
                this.initView();
            }
        };
        DYMoreGameBanner.prototype.addEvent = function () {
            this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameBanner.prototype.initView = function () {
            var dataArr = DYChannelMgr.instance.moreGameList;
            var len = dataArr.length;
            var count = this.viewData_.len < len ? this.viewData_.len : len;
            this.width = count * (this.itemW + 20);
            this.panel_list.width = count * (this.itemW + 20);
            this.mulindex = this.scrollCount * (this.itemW + 20);
            this.box_view1.x = 0;
            this.box_view1.removeChildren();
            for (var i = 0; i < len; i++) {
                var item = this.box_view1.getChildAt(i);
                if (item) {
                    item.setData(dataArr[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                    item.setData(dataArr[i]);
                    item.x = (this.itemW + 20) * i;
                    this.box_view1.addChild(item);
                }
            }
            this.box_view1.width = (this.itemW + 20) * len;
            this.box_view2.x = this.box_view1.width;
            this.box_view2.removeChildren();
            for (var i = 0; i < len; i++) {
                var item = this.box_view2.getChildAt(i);
                if (item) {
                    item.setData(dataArr[i]);
                }
                else {
                    item = Laya.Pool.getItemByClass("DYMoreGameBannerItem", DYMoreGameBannerItem);
                    item.setData(dataArr[i]);
                    item.x = (this.itemW + 20) * i;
                    this.box_view2.addChild(item);
                }
            }
            this.box_view2.width = (this.itemW + 20) * len;
            if (len) {
                this.autoMove = true;
                Laya.timer.frameLoop(1, this, this.onMove);
            }
        };
        DYMoreGameBanner.prototype.onMove = function () {
            var _this = this;
            if (!this.autoMove)
                return;
            if (!this.isMove)
                return;
            this.index += 2;
            if (this.index % this.mulindex == 0) {
                this.isMove = false;
                Laya.timer.once(1000, this, function () {
                    _this.isMove = true;
                    _this.index = 0;
                });
                return;
            }
            var nWidth = this.box_view1.width;
            this.box_view2.x -= 2;
            this.box_view1.x -= 2;
            if (this.box_view1.x <= -nWidth) {
                this.box_view1.x = this.box_view2.x + nWidth;
            }
            if (this.box_view2.x <= -nWidth) {
                this.box_view2.x = this.box_view1.x + nWidth;
            }
        };
        DYMoreGameBanner.prototype.onMousedown = function (evt) {
            var _this = this;
            this.autoMove = false;
            this.nStartX = evt.currentTarget.mouseX;
            var self = this;
            var mouseMove = function (evt1) {
                var nXTemp = self.nStartX - evt1.currentTarget.mouseX;
                self.box_view1.x -= nXTemp;
                self.box_view2.x -= nXTemp;
                self.nStartX = evt1.currentTarget.mouseX;
                if (self.box_view1.x >= 0 && self.box_view2.x >= 0) {
                    self.box_view1.x = 0;
                    self.box_view2.x = self.box_view1.width;
                }
            };
            var mouseUp = function (evt1) {
                _this.panel_list.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                _this.panel_list.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.panel_list.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                _this.autoMove = true;
            };
            this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
        };
        DYMoreGameBanner.prototype.removeEvent = function () {
            this.panel_list.off(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        };
        DYMoreGameBanner.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            Laya.timer.clearAll(this);
        };
        return DYMoreGameBanner;
    }(BaseSceneUISkin));
    var DYMoreGameBannerItem = (function (_super) {
        __extends(DYMoreGameBannerItem, _super);
        function DYMoreGameBannerItem(data_) {
            var _this = _super.call(this) || this;
            _this.className_key = "DYMoreGameBannerItem";
            _this.data = data_;
            _this.size(250, 250);
            _this.createUI();
            return _this;
        }
        DYMoreGameBannerItem.prototype.createUI = function () {
            this.img_icon = new Laya.Image();
            this.img_icon.centerX = 0;
            this.img_icon.y = 0;
            this.img_icon.size(250, 250);
            this.addChild(this.img_icon);
        };
        DYMoreGameBannerItem.prototype.setData = function (data_) {
            this.data = data_;
            this.addEvent();
            this.initView();
        };
        DYMoreGameBannerItem.prototype.addEvent = function () {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBannerItem.prototype.initView = function () {
            if (!this.data)
                return;
            var data = this.data;
            this.img_icon.skin = data.ad_img;
        };
        DYMoreGameBannerItem.prototype.onMouseDown = function () {
            var _this = this;
            var startTime = (new Date()).getTime();
            var mouseUp = function (evt) {
                var endTime = (new Date()).getTime();
                if (endTime - startTime <= 150) {
                    _this.onPlay();
                }
                _this.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                _this.off(Laya.Event.MOUSE_OUT, _this, mouseOut);
            };
            var mouseOut = function (evt) {
            };
            this.on(Laya.Event.MOUSE_UP, this, mouseUp);
            this.on(Laya.Event.MOUSE_OUT, this, mouseOut);
        };
        DYMoreGameBannerItem.prototype.onPlay = function () {
            if (!this.data)
                return;
            var data = this.data;
            DYChannelMgr.instance.clickGame(data.ad_id);
            var obj = {
                appId: data.ad_appid,
                path: data.url,
                success: function () {
                    console.log("navigateToMiniProgram success!");
                    DYChannelMgr.instance.toGame(data.ad_id);
                },
                fail: function (e) {
                    console.log("navigateToMiniProgram fail", e);
                    EventMgr.getInstance().sendEvent(GameEvent.NAV_GAME_FAIL, true);
                }
            };
            wx.navigateToMiniProgram(obj);
        };
        DYMoreGameBannerItem.prototype.removeEvent = function () {
            this.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.off(Laya.Event.REMOVED, this, this.onRemoved);
        };
        DYMoreGameBannerItem.prototype.onRemoved = function () {
            this.removeEvent();
            this.data = null;
            Laya.Pool.recover("DYMoreGameBannerItem", this);
        };
        return DYMoreGameBannerItem;
    }(Laya.Box));

    var MoreGameBoxSingle = (function (_super) {
        __extends(MoreGameBoxSingle, _super);
        function MoreGameBoxSingle(data) {
            var _this = _super.call(this) || this;
            _this.className_key = "MoreGameBoxSingle";
            _this.itemW = 250;
            _this.data = data;
            _this.initView();
            return _this;
        }
        MoreGameBoxSingle.prototype.initView = function () {
            this.width = this.itemW;
            this.height = (this.itemW + 20) * this.data.len;
            this.initItem();
        };
        MoreGameBoxSingle.prototype.initItem = function () {
            var dataArr = DYChannelMgr.instance.moreGameList;
            Utils.upset(dataArr);
            for (var i = 0; i < this.data.len; i++) {
                var data = dataArr[i];
                var item = new MainGameItem2(data);
                item.setData(data);
                item.y = (this.itemW + 20) * i;
                this.addChild(item);
            }
            Laya.timer.once(1000, this, this.initItem);
        };
        MoreGameBoxSingle.prototype.onDisable = function () {
            Laya.timer.clearAll(this);
        };
        return MoreGameBoxSingle;
    }(Laya.Box));

    var GameManager = (function () {
        function GameManager() {
            this.playerGuide = 1;
            this.catUrl = "resource/assets/img/ani/cat/";
            this.pigUrl = 'resource/assets/img/ani/pig/';
            this.gameModel = GameModel.Adventure;
            this.shipMaxLevel = 30;
            this.randomRate = {
                "1": [
                    10000
                ],
                "2": [
                    5000,
                    5000
                ],
                "3": [
                    3000,
                    4000,
                    3000
                ],
                "4": [
                    2000,
                    3000,
                    3000,
                    2000
                ],
                "5": [
                    1000,
                    1000,
                    3000,
                    3000,
                    2000
                ]
            };
            this.gameAttackModel = GameAttackModel.MANUAL;
            this.pigObj = {};
            this.bulletObj = {};
            this.colliderObj = {};
            this.gameStatus = GAMESTATUS.READY;
            this.goldObj = {};
        }
        Object.defineProperty(GameManager, "instance", {
            get: function () {
                if (this.ins == null) {
                    this.ins = new GameManager();
                }
                return this.ins;
            },
            enumerable: false,
            configurable: true
        });
        GameManager.prototype.objToQueryStr = function (obj) {
            return Object.keys(obj).map(function (key) {
                if (typeof obj[key] == "string" && obj[key] == "") {
                    return obj[key];
                }
                else {
                    return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
                }
            }).join("&");
        };
        GameManager.prototype.getFirstShip = function () {
            var baseInfos = GameData.getInstance().prop.baseInfos;
            if (baseInfos.ship == null) {
                baseInfos.ship = [];
            }
            if (baseInfos.ship.length == 0) {
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(false, 1);
                this.getRandomOneShip(true, 1);
            }
            if (baseInfos.cat == null) {
                baseInfos.cat = [];
            }
            if (baseInfos.cat.length == 0) {
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(true, 1);
                this.getRandomOneCat(false, 1);
                this.getRandomOneCat(false, 1);
            }
            if (baseInfos.booster == null) {
                baseInfos.booster = [];
            }
            if (baseInfos.booster.length == 0) {
                this.getRandomOneBooster(false, 1);
                this.getRandomOneBooster(false, 1);
                this.getRandomOneBooster(false, 1);
            }
            var localUserShipInfo = GameData.getInstance().localUserShipInfo;
            var info = baseInfos.ship[0];
            localUserShipInfo.ship.uid = info.uid;
            localUserShipInfo.ship.star = info.star;
            localUserShipInfo.player.box_player1 = baseInfos.cat[0].uid;
            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
        };
        GameManager.prototype.checkIsUseUid = function (uid) {
            var localUserShipInfo = GameData.getInstance().localUserShipInfo;
            if (localUserShipInfo.ship.uid == uid ||
                localUserShipInfo.player.box_player1 == uid ||
                localUserShipInfo.player.box_player2 == uid ||
                localUserShipInfo.player.box_player3 == uid ||
                localUserShipInfo.player.box_player4 == uid ||
                localUserShipInfo.player.box_player5 == uid) {
                return true;
            }
            return false;
        };
        GameManager.prototype.getBaseInfoByUidAndType = function (uid, type, prop) {
            var infos;
            if (prop == null) {
                prop = GameData.getInstance().prop;
            }
            if (BaseInfoType.Booster == type) {
                infos = prop.baseInfos.booster;
            }
            else if (BaseInfoType.Cat == type) {
                infos = prop.baseInfos.cat;
            }
            else if (BaseInfoType.Ship == type) {
                infos = prop.baseInfos.ship;
            }
            if (infos == null)
                return null;
            for (var i = 0, len = infos.length; i < len; i++) {
                if (uid == infos[i].uid) {
                    return infos[i];
                }
            }
            return null;
        };
        GameManager.prototype.getBaseInfoByUidNoType = function (uid, prop) {
            if (prop == null) {
                prop = GameData.getInstance().prop;
            }
            var baseInfos = prop.baseInfos;
            var infos = baseInfos.booster.concat(baseInfos.cat).concat(baseInfos.ship);
            for (var i = 0, len = infos.length; i < len; i++) {
                if (uid == infos[i].uid) {
                    return infos[i];
                }
            }
        };
        GameManager.prototype.openGame = function (data) {
            var _this = this;
            if (data === void 0) { data = null; }
            GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
            SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
            ResUtil.getIntance().loadGroups(["game", "gamePublic"], function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().initGameConfigs()];
                        case 1:
                            _a.sent();
                            switch (this.gameModel) {
                                case GameModel.Adventure:
                                    SceneManager.getInstance().openGameScene(GameAdventureScene, data);
                                    break;
                                case GameModel.Match:
                                    SceneManager.getInstance().openGameScene(GameMatchScene, data);
                                    break;
                            }
                            GameMgr.getInstance().loadingView.remove();
                            return [2];
                    }
                });
            }); }, function (index, len) {
                GameMgr.getInstance().loadingView.progress(index, len);
            });
        };
        GameManager.prototype.gameOver = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var fun;
                var _this = this;
                return __generator(this, function (_a) {
                    fun = function () { return __awaiter(_this, void 0, void 0, function () {
                        var continues, canFreeGetDiamond, flag;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (GameManager.instance.gameStatus == GAMESTATUS.PLAYING)
                                        return [2];
                                    if (!(GameManager.instance.gameModel == GameModel.Adventure)) return [3, 1];
                                    ViewManager.getInstance().showView(DungeonOverScene, data);
                                    return [3, 3];
                                case 1:
                                    if (!(GameManager.instance.gameModel == GameModel.Match)) return [3, 3];
                                    return [4, RegattaManager.instance.judgeIsEndRegatta(data)];
                                case 2:
                                    continues = _a.sent();
                                    if (!continues) {
                                        GameManager.instance.openGame('');
                                    }
                                    else {
                                        canFreeGetDiamond = GameManager.instance.judgeCanFreeGetDiamaond();
                                        flag = MiniManeger.instance.tempVideoPath != null && MiniManeger.instance.tempVideoPath.length > 0;
                                        console.log(">>>>>>>>>>>>>>>>>>", flag);
                                        if (canFreeGetDiamond && flag) {
                                            ViewManager.getInstance().showView(ShareVideo);
                                        }
                                    }
                                    _a.label = 3;
                                case 3: return [2];
                            }
                        });
                    }); };
                    if (DeviceUtil.isTTMiniGame()) {
                        MiniManeger.instance.stopGameRecordOver = fun;
                        if (MiniManeger.instance.isMakeVideo) {
                            MiniManeger.instance.stopGameRecord();
                        }
                        else {
                            fun();
                        }
                    }
                    else {
                        fun();
                    }
                    return [2];
                });
            });
        };
        GameManager.prototype.backHome = function () {
            SceneManager.getInstance().openGameScene(HomeScene);
        };
        GameManager.prototype.getShowItemById = function () {
        };
        GameManager.prototype.checkShowShipCanHit = function (item, flagSapite, convertCoefficient) {
            if (convertCoefficient === void 0) { convertCoefficient = 3; }
            if (flagSapite == null) {
                flagSapite = this.adventureShowShip;
            }
            if (flagSapite == null) {
                return false;
            }
            if (item == null)
                return false;
            return this.impactChecking(flagSapite, item, convertCoefficient);
        };
        GameManager.prototype.checkHit = function (item, flagSapite) {
            var rectA = item.getBounds();
            var rectB = flagSapite.getBounds();
            return rectA.intersects(rectB);
        };
        GameManager.prototype.impactChecking = function (rectA, rectB, convertCoefficient) {
            if (convertCoefficient === void 0) { convertCoefficient = 2; }
            var heightDif = (rectA.height + rectB.height) / convertCoefficient;
            var widthDif = (rectA.width + rectB.width) / convertCoefficient;
            var point1 = Laya.Point.create();
            point1.x = 0;
            point1.y = 0;
            point1 = rectA.localToGlobal(point1, false);
            var point2 = Laya.Point.create();
            point2.x = 0;
            point2.y = 0;
            point2 = rectB.localToGlobal(point2, false);
            if (Math.abs(point1.x - point2.x) < widthDif && Math.abs(point1.y - point2.y) < heightDif) {
                point2.recover();
                point1.recover();
                return true;
            }
            else {
                point2.recover();
                point1.recover();
                return false;
            }
        };
        GameManager.prototype.getOnePropById = function (id) {
            var baseConfig;
            GameData.getInstance().prop.baseInfoId++;
            var ratio = Utils.getRandom(1, 100);
            var quality = ratio <= 95 ? 1 : 2;
            var starJson = ConfigManager.getInstance().starJson;
            if (parseInt(id) >= 110001 && parseInt(id) < 120001) {
                baseConfig = new BaseShipGameInfo();
                baseConfig.uid = GameData.getInstance().prop.baseInfoId;
                baseConfig.quality = quality;
                baseConfig.id = id;
                var config = ConfigManager.getInstance().shipConfigs[id];
                baseConfig.star = parseInt(config.star);
                baseConfig.slot = GameData.getInstance().playerData.maxSlot;
                baseConfig.slotArr = GameManager.instance.getSlotArrByMaxSlot(baseConfig.slot);
                var shipStar = starJson.shipStar[baseConfig.star - 1];
                baseConfig.level = 0;
                baseConfig.exp = 0;
                baseConfig.growthHp = Utils.getRandomInCeil(shipStar.growthHpMin, shipStar.growthHpMax);
                baseConfig.initialHp = Utils.getRandomInCeil(shipStar.initialHpMin, shipStar.initialHpMax);
                baseConfig.attack_type = parseInt(ConfigManager.getInstance().shipConfigs[baseConfig.id].attack_type);
                var ratio1 = Utils.getRandom(1, 100);
                if (ratio1 <= 3) {
                    baseConfig.hasShield = true;
                    var exclude = ["149901", "149902", "149903", "149904", "149905"];
                    for (var i = 0; i < exclude.length; i++) {
                        var config_1 = ConfigManager.getInstance().boosterConfigs[exclude[i]];
                        if (parseInt(config_1.star) == baseConfig.star) {
                            baseConfig.shieldId = parseInt(config_1.id);
                            break;
                        }
                    }
                }
                GameData.getInstance().prop.baseInfos.ship.push(baseConfig);
            }
            else if (parseInt(id) >= 120001 && parseInt(id) < 130001) {
                baseConfig = new BaseCatGameInfo();
                baseConfig.uid = GameData.getInstance().prop.baseInfoId;
                baseConfig.quality = quality;
                baseConfig.id = id;
                var config = ConfigManager.getInstance().catConfigs[id];
                baseConfig.star = parseInt(config.star);
                var catStar = starJson.catStar[baseConfig.star - 1];
                baseConfig.level = 0;
                baseConfig.exp = 0;
                baseConfig.growthAtt = Utils.getRandomInCeil(catStar.growthAttMin, catStar.growthAttMax);
                baseConfig.growthCrit = Utils.getRandomInCeil(catStar.growthCritMin, catStar.growthCritMax);
                baseConfig.growthHp = Utils.getRandomInCeil(catStar.growthHpMin, catStar.growthHpMax);
                baseConfig.initialHp = Utils.getRandomInCeil(catStar.initialHpMin, catStar.initialHpMax);
                baseConfig.initialAtt = Utils.getRandomInCeil(catStar.initialAttMin, catStar.initialAttMax);
                baseConfig.initialCrit = Utils.getRandomInCeil(catStar.initialCritMin, catStar.initialCritMax);
                baseConfig.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseConfig.id].attack_type);
                GameData.getInstance().prop.baseInfos.cat.push(baseConfig);
            }
            else if (parseInt(id) >= 140001 && parseInt(id) < 150001) {
                baseConfig = new BaseBoosterGameInfo();
                baseConfig.uid = GameData.getInstance().prop.baseInfoId;
                baseConfig.quality = quality;
                baseConfig.id = id;
                var config = ConfigManager.getInstance().boosterConfigs[id];
                baseConfig.star = parseInt(config.star);
                var boosterStar = starJson.boosterStar[baseConfig.star - 1];
                baseConfig.level = 0;
                baseConfig.exp = 0;
                baseConfig.growthHp = Utils.getRandomInCeil(boosterStar.growthHpMin, boosterStar.growthHpMax);
                baseConfig.initialHp = Utils.getRandomInCeil(boosterStar.initialHpMin, boosterStar.initialHpMax);
                baseConfig.skillCD = boosterStar.skillCD;
                GameData.getInstance().prop.baseInfos.booster.push(baseConfig);
            }
            return baseConfig;
        };
        GameManager.prototype.getSlotArrByMaxSlot = function (slot) {
            var arr = [2, 3, 4, 5];
            if (slot >= 4) {
                return arr;
            }
            var index = Math.floor(Math.random() * slot);
            if (slot == 3) {
                arr.splice(index, 1);
                return arr;
            }
            if (slot == 1) {
                return arr.splice(index, 1);
            }
            if (slot == 2) {
                arr.splice(index, 1);
                index = Math.floor(Math.random() * slot);
                arr.splice(index, 1);
                return arr;
            }
        };
        GameManager.prototype.getRandomOneShip = function (isDropRare, sureStar, lvLimit) {
            if (isDropRare === void 0) { isDropRare = false; }
            var baseConfig = new BaseShipGameInfo();
            GameData.getInstance().prop.baseInfoId++;
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            if (isDropRare) {
                baseConfig.quality = 2;
            }
            else {
                var ratio = Utils.getRandom(1, 100);
                var quality = ratio <= 95 ? 1 : 2;
                baseConfig.quality = quality;
            }
            var star;
            if (sureStar) {
                star = sureStar;
            }
            else {
                star = this.getRandomStar();
            }
            baseConfig.star = star;
            baseConfig.slot = GameData.getInstance().playerData.maxSlot;
            baseConfig.slotArr = GameManager.instance.getSlotArrByMaxSlot(baseConfig.slot);
            var configs = [];
            var playerLv = GameData.getInstance().playerData.playerLevel;
            for (var key in ConfigManager.getInstance().shipConfigs) {
                var config = ConfigManager.getInstance().shipConfigs[key];
                if (parseInt(config.star) == star) {
                    if (lvLimit) {
                        if (playerLv >= parseInt(config.needPlayerLevel))
                            configs.push(config);
                    }
                    else {
                        configs.push(config);
                    }
                }
            }
            baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;
            baseConfig.attack_type = parseInt(ConfigManager.getInstance().shipConfigs[baseConfig.id].attack_type);
            var starJson = ConfigManager.getInstance().starJson;
            var shipStar = starJson.shipStar[star - 1];
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthHp = Utils.getRandomInCeil(shipStar.growthHpMin, shipStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(shipStar.initialHpMin, shipStar.initialHpMax);
            var ratio1 = Utils.getRandom(1, 100);
            if (ratio1 <= 3) {
                baseConfig.hasShield = true;
                var exclude = ["149901", "149902", "149903", "149904", "149905"];
                for (var i = 0; i < exclude.length; i++) {
                    var config = ConfigManager.getInstance().boosterConfigs[exclude[i]];
                    if (parseInt(config.star) == baseConfig.star) {
                        baseConfig.shieldId = parseInt(config.id);
                        break;
                    }
                }
            }
            GameData.getInstance().prop.baseInfos.ship.push(baseConfig);
            return baseConfig;
        };
        GameManager.prototype.getRandomOneCat = function (isDropRare, sureStar, lvLimit) {
            if (isDropRare === void 0) { isDropRare = false; }
            var baseConfig = new BaseCatGameInfo();
            GameData.getInstance().prop.baseInfoId++;
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            if (isDropRare) {
                baseConfig.quality = 2;
            }
            else {
                var ratio = Utils.getRandom(1, 100);
                var quality = ratio <= 95 ? 1 : 2;
                baseConfig.quality = quality;
            }
            var star;
            if (sureStar) {
                star = sureStar;
            }
            else {
                star = this.getRandomStar();
            }
            baseConfig.star = star;
            var configs = [];
            var playerLv = GameData.getInstance().playerData.playerLevel;
            for (var key in ConfigManager.getInstance().catConfigs) {
                var config = ConfigManager.getInstance().catConfigs[key];
                if (parseInt(config.star) == star && parseInt(config.id) != 120901) {
                    if (lvLimit) {
                        if (playerLv >= parseInt(config.needPlayerLevel))
                            configs.push(config);
                    }
                    else {
                        configs.push(config);
                    }
                }
            }
            baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;
            baseConfig.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseConfig.id].attack_type);
            var starJson = ConfigManager.getInstance().starJson;
            var catStar = starJson.catStar[baseConfig.star - 1];
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthAtt = Utils.getRandomInCeil(catStar.growthAttMin, catStar.growthAttMax);
            baseConfig.growthCrit = Utils.getRandomInCeil(catStar.growthCritMin, catStar.growthCritMax);
            baseConfig.growthHp = Utils.getRandomInCeil(catStar.growthHpMin, catStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(catStar.initialHpMin, catStar.initialHpMax);
            baseConfig.initialAtt = Utils.getRandomInCeil(catStar.initialAttMin, catStar.initialAttMax);
            baseConfig.initialCrit = Utils.getRandomInCeil(catStar.initialCritMin, catStar.initialCritMax);
            GameData.getInstance().prop.baseInfos.cat.push(baseConfig);
            return baseConfig;
        };
        GameManager.prototype.getRandomOneBooster = function (isDropRare, sureStar, lvLimit) {
            if (isDropRare === void 0) { isDropRare = false; }
            var baseConfig = new BaseBoosterGameInfo();
            GameData.getInstance().prop.baseInfoId++;
            baseConfig.uid = GameData.getInstance().prop.baseInfoId;
            if (isDropRare) {
                baseConfig.quality = 2;
            }
            else {
                var ratio = Utils.getRandom(1, 100);
                var quality = ratio <= 95 ? 1 : 2;
                baseConfig.quality = quality;
            }
            var star;
            if (sureStar) {
                star = sureStar;
            }
            else {
                star = this.getRandomStar();
            }
            baseConfig.star = star;
            var configs = [];
            var playerLv = GameData.getInstance().playerData.playerLevel;
            var exclude = ["149901", "149902", "149903", "149904", "149905"];
            for (var key in ConfigManager.getInstance().boosterConfigs) {
                var config = ConfigManager.getInstance().boosterConfigs[key];
                if (parseInt(config.star) == star && exclude.indexOf(config.id) < 0) {
                    if (lvLimit) {
                        if (playerLv >= parseInt(config.needPlayerLevel))
                            configs.push(config);
                    }
                    else {
                        configs.push(config);
                    }
                }
            }
            baseConfig.id = configs[Utils.getRandom(0, configs.length - 1)].id;
            var starJson = ConfigManager.getInstance().starJson;
            var boosterStar = starJson.boosterStar[star - 1];
            baseConfig.level = 0;
            baseConfig.exp = 0;
            baseConfig.growthHp = Utils.getRandomInCeil(boosterStar.growthHpMin, boosterStar.growthHpMax);
            baseConfig.initialHp = Utils.getRandomInCeil(boosterStar.initialHpMin, boosterStar.initialHpMax);
            baseConfig.skillCD = boosterStar.skillCD;
            GameData.getInstance().prop.baseInfos.booster.push(baseConfig);
            return baseConfig;
        };
        GameManager.prototype.getStarConfig = function (star) {
            var configs = ConfigManager.getInstance().starConfigs;
            for (var i in configs) {
                if (configs[i].star == star) {
                    return configs[i];
                }
            }
        };
        GameManager.prototype.calAttr = function (initAttr, growAttr, lv, quality) {
            var rate = quality == 1 ? 0 : 5;
            var attr = Math.floor((initAttr + growAttr * lv) * (1 + rate / 100));
            return attr;
        };
        GameManager.prototype.calCombat = function () {
            var use = GameData.getInstance().localUserShipInfo;
            var combat = 0;
            var ship = this.getBaseInfoByUidNoType(use.ship.uid);
            var shipHp = this.calAttr(ship.initialHp, ship.growthHp, ship.level, ship.quality);
            combat += 0.25 * shipHp;
            for (var key in use.player) {
                if (key != "box_player1") {
                    var uid = use.player[key];
                    if (uid) {
                        var base = this.getBaseInfoByUidNoType(uid);
                        var baseHp = this.calAttr(base.initialHp, base.growthHp, base.level, base.quality);
                        if (base.type == BaseInfoType.Cat) {
                            var baseAtk = this.calAttr(base["initialAtt"], base["growthAtt"], base.level, base.quality);
                            combat += 0.25 * baseHp;
                            combat += 1 * baseAtk;
                        }
                        else {
                            combat += 0.25 * baseHp * 2.5;
                        }
                    }
                }
            }
            var str = combat.toString();
            return parseFloat(str.substring(0, str.indexOf(".") + 3));
        };
        GameManager.prototype.getOwnPropData = function () {
            var baseInfos = GameData.getInstance().prop.baseInfos;
            var owns = baseInfos.ship.concat(baseInfos.cat).concat(baseInfos.booster);
            var dataArr = [];
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                var data = new localData.PropData();
                var id = parseInt(own.id);
                data.uid = own.uid;
                data.id = id;
                data.type = own.type;
                data.star = own.star;
                data.level = own.level;
                data.quality = own.quality;
                data.exp = own.exp;
                data.hp = GameManager.instance.calAttr(own.initialHp, own.growthHp, own.level, own.quality);
                if (id >= 110001 && id < 120001) {
                    data.slot = own.slot;
                    data.hasShield = own.hasShield;
                    data.shieldId = own.shieldId;
                    data.shipConfig = ConfigManager.getInstance().shipConfigs[id];
                }
                else if (id >= 120001 && id < 130001) {
                    data.atk = GameManager.instance.calAttr(own.initialAtt, own.growthAtt, own.level, own.quality);
                    data.crit = GameManager.instance.calAttr(own.initialCrit, own.growthCrit, own.level, own.quality);
                    data.isNormal = own.isNormal;
                    data.catConfig = ConfigManager.getInstance().catConfigs[id];
                }
                else if (id >= 140001 && id < 150001) {
                    data.skillCD = own.skillCD;
                    data.boosterConfig = ConfigManager.getInstance().boosterConfigs[id];
                }
                dataArr.push(data);
            }
            return dataArr;
        };
        GameManager.prototype.getPropDataByUid = function (uid) {
            var baseInfos = GameData.getInstance().prop.baseInfos;
            var owns = baseInfos.ship.concat(baseInfos.cat).concat(baseInfos.booster);
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                if (uid == own.uid) {
                    var id = parseInt(own.id);
                    var data = new localData.PropData();
                    data.uid = own.uid;
                    data.id = id;
                    data.type = own.type;
                    data.star = own.star;
                    data.level = own.level;
                    data.quality = own.quality;
                    data.exp = own.exp;
                    data.hp = GameManager.instance.calAttr(own.initialHp, own.growthHp, own.level, own.quality);
                    if (id >= 110001 && id < 120001) {
                        data.slot = own.slot;
                        data.hasShield = own.hasShield;
                        data.shieldId = own.shieldId;
                        data.shipConfig = ConfigManager.getInstance().shipConfigs[id];
                    }
                    else if (id >= 120001 && id < 130001) {
                        data.atk = GameManager.instance.calAttr(own.initialAtt, own.growthAtt, own.level, own.quality);
                        data.crit = GameManager.instance.calAttr(own.initialCrit, own.growthCrit, own.level, own.quality);
                        data.isNormal = own.isNormal;
                        data.catConfig = ConfigManager.getInstance().catConfigs[id];
                    }
                    else if (id >= 140001 && id < 150001) {
                        data.skillCD = own.skillCD;
                        data.boosterConfig = ConfigManager.getInstance().boosterConfigs[id];
                    }
                    return data;
                }
            }
            return null;
        };
        GameManager.prototype.removepPropBase = function (baseInfo) {
            var baseInfos = GameData.getInstance().prop.baseInfos;
            var arr;
            if (baseInfo.type == BaseInfoType.Ship) {
                arr = baseInfos.ship;
            }
            else if (baseInfo.type == BaseInfoType.Cat) {
                arr = baseInfos.cat;
            }
            else if (baseInfo.type == BaseInfoType.Booster) {
                arr = baseInfos.booster;
            }
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].uid == baseInfo.uid) {
                    arr.splice(i, 1);
                    break;
                }
            }
        };
        GameManager.prototype.propAddExp = function (baseInfo, addExp) {
            return __awaiter(this, void 0, void 0, function () {
                var info, baseInfos, arr, i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.judgeUpgradeByAddExp(baseInfo, addExp)];
                        case 1:
                            info = _a.sent();
                            if (info.addLv > 0) {
                                TaskManager.instance.updateTask(TaskEnum.TASK_2014, 1);
                            }
                            baseInfo.level = baseInfo.level + info.addLv;
                            baseInfo.exp = info.endExp;
                            baseInfos = GameData.getInstance().prop.baseInfos;
                            if (baseInfo.type == BaseInfoType.Ship) {
                                arr = baseInfos.ship;
                            }
                            else if (baseInfo.type == BaseInfoType.Cat) {
                                arr = baseInfos.cat;
                            }
                            else if (baseInfo.type == BaseInfoType.Booster) {
                                arr = baseInfos.booster;
                            }
                            for (i = 0, len = arr.length; i < len; i++) {
                                if (arr[i].uid == baseInfo.uid) {
                                    arr[i] = baseInfo;
                                    break;
                                }
                            }
                            return [2];
                    }
                });
            });
        };
        GameManager.prototype.judgeUpgradeByAddExp = function (baseInfo, addExp) {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                var ownExp, level, addLv, playerExp, upGrade, fun;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ownExp = baseInfo.exp + addExp;
                            level = baseInfo.level;
                            addLv = 0;
                            playerExp = ConfigManager.getInstance().playerExpJson;
                            upGrade = function (level) {
                                var data;
                                var isUp = false;
                                for (var i = 0, len = playerExp.length; i < len; i++) {
                                    if (playerExp[i].level == level + 1) {
                                        data = playerExp[i];
                                        break;
                                    }
                                }
                                if (data) {
                                    if (ownExp >= data.exp) {
                                        addLv += 1;
                                        ownExp -= data.exp;
                                        isUp = true;
                                    }
                                }
                                return isUp;
                            };
                            fun = function () {
                                return new Promise(function (res) {
                                    var isEnd = function () {
                                        var isUp = upGrade(level);
                                        if (isUp) {
                                            level += 1;
                                            isEnd();
                                        }
                                        else {
                                            res();
                                        }
                                    };
                                    isEnd();
                                });
                            };
                            return [4, fun()];
                        case 1:
                            _a.sent();
                            resolve({ addLv: addLv, endExp: ownExp });
                            return [2];
                    }
                });
            }); });
        };
        GameManager.prototype.getTotleExpByLv = function (lv) {
            if (lv == 0)
                return 0;
            var exp = 0;
            var playerExp = ConfigManager.getInstance().playerExpJson;
            for (var i = 0, len = playerExp.length; i < len; i++) {
                if (playerExp[i].level <= lv) {
                    exp += playerExp[i].exp;
                }
            }
            return exp;
        };
        GameManager.prototype.getLevelByExp = function (baseInfo) {
            var playerExp = ConfigManager.getInstance().playerExpJson;
            for (var i = 0, len = playerExp.length; i < len; i++) {
                if (playerExp[i].exp > baseInfo.exp) {
                    baseInfo.level = (i);
                    return baseInfo;
                }
            }
        };
        GameManager.prototype.getRandomStar = function () {
            var level = GameData.getInstance().playerData.playerLevel;
            var weightArr = this.randomRate[level];
            weightArr = this.arrOverAdd(weightArr);
            var totalWeight = weightArr[weightArr.length - 1];
            var random = Math.random() * totalWeight;
            var arrIndex = this.getArrIndex(random, weightArr);
            return arrIndex + 1;
        };
        GameManager.prototype.parsePlayerData = function () {
        };
        GameManager.prototype.playEffect = function (soundName) {
            SoundManager.getInstance().playEffect(soundName);
        };
        GameManager.prototype.createSkeleton = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            AnimationManager.instance.showSkeletonAnimation(url, function (boomAnimation) {
                                if (boomAnimation == null) {
                                    resolve(boomAnimation);
                                    return;
                                }
                                console.log("aniNum =", boomAnimation.getAnimNum());
                                boomAnimation.player.playbackRate = 1;
                                boomAnimation.scale(1, 1);
                                boomAnimation.autoSize = true;
                                resolve(boomAnimation);
                            });
                        })];
                });
            });
        };
        GameManager.prototype.getBaseConfig = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            var jsonUrl = url;
                            Laya.loader.load(jsonUrl + GameMgr.getInstance().randomVersion, Laya.Handler.create(_this, function (res) {
                                console.log("configs >>> ", res);
                                MiniManeger.instance.shareInfo = res.shareInfo;
                                InviteManager.getInstance().inviteConfig = res.invite;
                                resolve();
                            }));
                        })];
                });
            });
        };
        GameManager.prototype.loadCongigs = function (url) {
            var _this = this;
            return new Promise(function (resolve) {
                var jsonUrl = url;
                Laya.loader.load(jsonUrl + GameMgr.getInstance().randomVersion, Laya.Handler.create(_this, function (res) {
                    resolve(Utils.copy(res));
                }));
            });
        };
        GameManager.prototype.addCollider = function (gameObj) {
            if (gameObj) {
                this.colliderObj[gameObj.objInfo_.id] = gameObj;
            }
        };
        GameManager.prototype.removeCollider = function (id) {
            var obj = this.colliderObj[id];
            if (obj) {
                obj.removeSelf();
            }
            delete this.colliderObj[id];
        };
        GameManager.prototype.removeAllPig = function () {
            for (var id in this.pigObj) {
                if (this.pigObj[id]) {
                    ObjectPool.instance.recoveryObj(this.pigObj[id]);
                }
                delete this.pigObj[id];
            }
        };
        GameManager.prototype.removeAllBullet = function () {
            for (var id in this.bulletObj) {
                if (this.bulletObj[id]) {
                    ObjectPool.instance.recoveryObj(this.bulletObj[id]);
                }
                delete this.bulletObj[id];
            }
        };
        GameManager.prototype.removeAllCollider = function () {
            for (var id in this.colliderObj) {
                this.removeCollider(id);
            }
        };
        GameManager.prototype.gamePause = function () {
            Laya.physicsTimer.pause();
        };
        GameManager.prototype.gameResume = function () {
            Laya.physicsTimer.resume();
        };
        GameManager.prototype.createBloodText = function (data) {
            var text_show = Laya.Pool.getItemByClass('text_show', Laya.Box);
            text_show.autoSize = true;
            var prefix = 'resource/assets/img/game/sz/';
            if (data.isCrit) {
                prefix = 'resource/assets/img/game/sz_2/';
            }
            else if (data.isReduction) {
                prefix = 'resource/assets/img/game/sz_3/';
            }
            BitmapLabelUtils.setLabel(text_show, data.showText, prefix, 0);
            if (data.isCrit) {
                var img = new Laya.Image();
                img.skin = 'resource/assets/img/game/sz_2/C.png';
                img.centerX = 0;
                img.y = 62;
                text_show.addChild(img);
            }
            text_show.x = data.x;
            text_show.y = data.y;
            text_show.alpha = 1;
            var ys = text_show.y - 100;
            Laya.Tween.to(text_show, { y: ys, alpha: 0.2 }, 1500, null, Laya.Handler.create(text_show, function () {
                text_show.removeSelf();
                Laya.Pool.recover('text_show', text_show);
            }));
            GameManager.instance.box_gameScene_game.addChild(text_show);
        };
        GameManager.prototype.calDeleteBlood = function (data) {
            var deleteBlood = 0;
            var isCrit = false;
            var bower = data.bullet.objInfo_.owner;
            if (data.bullet.objInfo_ && data.bullet.objInfo_.owner) {
                var player = data.bullet.objInfo_.owner;
                var random = Utils.getRandom(0, 100);
                isCrit = random < player.objInfo_.critPercent / 100;
                var attack = player.objInfo_.attack;
                if (data.bullet.objInfo_.bid == 100109) {
                    attack /= 5;
                }
                if (isCrit) {
                    if (data.bullet.objInfo_.type = GameConstant.Player) {
                        MiniManeger.instance.vibrateShort({});
                    }
                    deleteBlood = attack * player.objInfo_.crit;
                }
                else {
                    deleteBlood = attack;
                }
            }
            deleteBlood = deleteBlood < 1 ? 1 : deleteBlood;
            if (GameManager.instance.gameModel == GameModel.Match) {
                if (bower && data.attackType != null && (bower.objInfo_.attackType == data.attackType || bower.objInfo_.attackType == AttackType.All)) {
                    this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isCrit: isCrit });
                }
                else {
                    deleteBlood = deleteBlood * (1 - 0.3);
                    deleteBlood = deleteBlood < 1 ? 1 : deleteBlood;
                    this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isReduction: true });
                }
            }
            else {
                this.createBloodText({ x: data.bullet.x, y: data.bullet.y, showText: Math.floor(deleteBlood) + '', isCrit: isCrit });
            }
            console.log("deleteBlood", deleteBlood);
            return Math.floor(deleteBlood);
        };
        GameManager.prototype.baseGameInfoSort = function (a, b) {
            if (a.id > b.id) {
                return 1;
            }
            else if (a.id < b.id) {
                return -1;
            }
            return 1;
        };
        GameManager.prototype.calFightValue = function (shipInfo, isOther) {
            if (isOther === void 0) { isOther = false; }
            if (shipInfo == null) {
                shipInfo = GameData.getInstance().localUserShipInfo;
            }
            var player = shipInfo.player;
            var attackSky = 0;
            var attackWater = 0;
            var attackUndetWater = 0;
            for (var index in player) {
                var uid = player[index];
                if (uid == 0) {
                    continue;
                }
                else {
                    var baseInfo = null;
                    if (isOther) {
                        baseInfo = GameManager.instance.getBaseInfoByUidAndType(uid, BaseInfoType.Cat, GameData.getInstance().otherprop);
                    }
                    else {
                        baseInfo = GameManager.instance.getBaseInfoByUidAndType(uid, BaseInfoType.Cat);
                    }
                    if (baseInfo != null) {
                        attackSky = Math.floor(attackSky);
                        attackWater = Math.floor(attackWater);
                        attackUndetWater = Math.floor(attackUndetWater);
                        baseInfo.attack_type = parseInt(ConfigManager.getInstance().catConfigs[baseInfo.id].attack_type);
                        if (baseInfo.attack_type == AttackType.All) {
                            attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                            attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                            attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        }
                        else if (baseInfo.attack_type == AttackType.Sky) {
                            attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                            attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                            attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        }
                        else if (baseInfo.attack_type == AttackType.Water) {
                            attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                            attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                            attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                        }
                        else if (baseInfo.attack_type == AttackType.UnderWater) {
                            attackSky += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                            attackWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt) * 0.7;
                            attackUndetWater += (baseInfo.growthAtt * baseInfo.level + baseInfo.initialAtt);
                        }
                    }
                }
            }
            return { attackSky: Math.floor(attackSky), attackWater: Math.floor(attackWater), attackUndetWater: Math.floor(attackUndetWater) };
        };
        GameManager.prototype.getRandomLoca = function (type) {
            var ys = 0;
            var xs = 0;
            if (type == GameConstant.Enemy) {
                var wid = GameManager.instance.playerShip.width;
                var height = GameManager.instance.playerShip.box_detail.height;
                xs = GameManager.instance.playerShip.x + Utils.getRandom(-wid / 2, wid / 2);
                ys = GameManager.instance.playerShip.y + Utils.getRandom(-height / 2, height / 2);
            }
            else {
                if (GameManager.instance.gameModel == GameModel.Match) {
                    var wid = GameManager.instance.otherShip.width;
                    var height = GameManager.instance.otherShip.box_detail.height;
                    xs = GameManager.instance.otherShip.x + Utils.getRandom(-wid / 2, wid / 2);
                    ;
                    ys = GameManager.instance.otherShip.y + Utils.getRandom(-height / 2, height / 2);
                    ;
                }
                else {
                    var pigObj = GameManager.instance.pigObj;
                    var len = Utils.getObjLength(pigObj);
                    var index = 0;
                    var random = Math.floor(Math.random() * len);
                    for (var id in pigObj) {
                        var pigPlayer = pigObj[id];
                        if (pigPlayer.isRecovery || pigPlayer.isDead) {
                            Laya.timer.clearAll(pigPlayer);
                            pigPlayer.pigLevelScene();
                            len--;
                            random = Math.floor(Math.random() * len);
                            delete GameManager.instance.pigObj[id];
                            continue;
                        }
                        xs = pigPlayer.x;
                        ys = pigPlayer.y;
                        if (index == random) {
                            break;
                        }
                        index++;
                    }
                }
            }
            return { x: xs, y: ys };
        };
        GameManager.prototype.freeDiamond = function (count) {
            GameMgr.getInstance().updateBaseData(1002, count);
            GameData.getInstance().freeTimes.count++;
            GameInfoManager.getInstance().saveInfo(GameConst.FREE_DIAMOND);
        };
        GameManager.prototype.judgeCanFreeGetDiamaond = function () {
            var lastTime = GameData.getInstance().freeTimes.lastTime;
            var currTime = (new Date()).getTime();
            var isOneDay = Utils.judgeIsOnTheSameDay(lastTime, currTime);
            GameData.getInstance().freeTimes.lastTime = currTime;
            if (isOneDay) {
                var count = GameData.getInstance().freeTimes.count;
                if (count >= 6) {
                    return false;
                }
            }
            else {
                GameData.getInstance().freeTimes.count = 0;
            }
            GameInfoManager.getInstance().saveInfo(GameConst.FREE_DIAMOND);
            return true;
        };
        GameManager.prototype.copyBulletInfo = function (bulletInfo) {
            var newBulletInfo = new BulletInfo();
            newBulletInfo.attack = bulletInfo.attack;
            newBulletInfo.bid = bulletInfo.bid;
            newBulletInfo.bulletId = bulletInfo.bulletId;
            newBulletInfo.canMakeEnemyStop = bulletInfo.canMakeEnemyStop;
            newBulletInfo.gravityScale = bulletInfo.gravityScale;
            newBulletInfo.height = bulletInfo.height;
            newBulletInfo.isAttackCanPt = bulletInfo.isAttackCanPt;
            newBulletInfo.owner = bulletInfo.owner;
            newBulletInfo.showSmoke = bulletInfo.showSmoke;
            newBulletInfo.star = bulletInfo.star;
            newBulletInfo.type = bulletInfo.type;
            newBulletInfo.velx = bulletInfo.velx;
            newBulletInfo.vely = bulletInfo.vely;
            newBulletInfo.width = bulletInfo.width;
            return newBulletInfo;
        };
        GameManager.prototype.arrOverAdd = function (arr) {
            if (!arr || arr.length <= 0) {
                return [];
            }
            else {
                var temp = [];
                for (var i = 0; i < arr.length; i++) {
                    if (i == 0) {
                        temp[i] = parseInt(arr[i]);
                    }
                    else {
                        temp[i] = temp[i - 1] + parseInt(arr[i]);
                    }
                }
                return temp;
            }
        };
        GameManager.prototype.getArrIndex = function (random, weightArray) {
            var index = 0;
            if (random <= weightArray[0]) {
                return 0;
            }
            else if (random >= weightArray[weightArray.length - 1]) {
                index = weightArray.length - 1;
                return index;
            }
            else {
                for (var i = 0; i < weightArray.length; i++) {
                    if (random <= weightArray[i]) {
                        index = i;
                    }
                    else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                        index = i + 1;
                        break;
                    }
                    else if (random > weightArray[i] && random <= weightArray[i + 1]) {
                        index = i + 1;
                        break;
                    }
                }
            }
            return index;
        };
        GameManager.prototype.dropGold = function (x, y) {
            var goldData = new GameObjInfo();
            goldData.width = 80;
            goldData.height = 80;
            goldData.id = Laya.Utils.getGID();
            ;
            var goldView = ObjectPool.instance.createObjectByName(GoldView, goldData);
            goldView.x = x;
            goldView.y = y;
            GameManager.instance.box_game.addChild(goldView);
            GameManager.instance.goldObj[goldData.id] = goldView;
        };
        GameManager.prototype.removeAllGoldView = function () {
            var goldObj = this.goldObj;
            for (var id in goldObj) {
                var obj = goldObj[id];
                obj.destroy();
                delete goldObj[id];
            }
        };
        GameManager.prototype.getCaptainInfoByPlayerLevel = function () {
            var playerLevel = GameData.getInstance().playerData.playerLevel;
            var captainInfo = ConfigManager.getInstance().CaptainInfo;
            var info = captainInfo[playerLevel - 1];
            if (info == null) {
                info = captainInfo[captainInfo.length - 1];
            }
            return { critPercent: info.captainCrit, blood: info.captainHp, attack: info.captainAtt };
        };
        GameManager.prototype.dragResult = function (display, startPoint, offset, moveCallback, callback, isRecover, judgeDistance) {
            var _this = this;
            if (isRecover === void 0) { isRecover = false; }
            if (judgeDistance === void 0) { judgeDistance = 0; }
            var mouseMove = function (evt) {
                moveCallback && moveCallback(evt, function () {
                    display.x = evt.stageX - offset.x;
                    display.y = evt.stageY - offset.y;
                });
            };
            var mouseUp = function (evt) {
                if (Utils.getDistance(startPoint, { x: evt.stageX, y: evt.stageY }) >= judgeDistance) {
                    callback && callback(evt);
                }
                Laya.stage.off(Laya.Event.MOUSE_MOVE, _this, mouseMove);
                Laya.stage.off(Laya.Event.MOUSE_UP, _this, mouseUp);
                Laya.stage.off(Laya.Event.MOUSE_OUT, _this, mouseUp);
                Laya.stage.off(Laya.Event.MOUSE_OVER, _this, mouseUp);
                if (isRecover) {
                    display.pos(startPoint.x, startPoint.y);
                }
            };
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, mouseUp);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, mouseUp);
            Laya.stage.on(Laya.Event.MOUSE_OVER, this, mouseUp);
        };
        GameManager.prototype.getRunLineByVel = function (vel, data, count) {
            var velxs = vel.x * 50;
            var velys = vel.y * 50;
            var arr = new Array();
            this.lineBox.removeChildren();
            for (var i = 0; i < count; i++) {
                var point = { x: 0, y: 0 };
                var ts = 1 / 20;
                ts = (i) * ts;
                var xs = velxs * ts;
                var ys = velys * ts + 0.5 * ts * ts * vel.gravityScale * 500;
                point.x = data.x + xs;
                point.y = data.y + ys;
                arr.push(point);
                var spr = new Laya.Sprite();
                spr.graphics.drawCircle(point.x, point.y, 10, "#69423a", 10);
                this.lineBox.addChild(spr);
            }
        };
        GameManager.prototype.showGameBox2 = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var arr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            arr = _a.sent();
                            if (arr) {
                                if (!data)
                                    data = {};
                                ViewManager.getInstance().showView(WechatBoxUI2, data);
                            }
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        GameManager.prototype.showGameBox3 = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var arr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            arr = _a.sent();
                            if (arr) {
                                if (!data)
                                    data = {};
                                ViewManager.getInstance().showView(WechatBoxUI3, data);
                            }
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        GameManager.prototype.showGameBox4 = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var arr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                            return [4, DYChannelMgr.instance.refreshGameList(false)];
                        case 1:
                            arr = _a.sent();
                            if (arr) {
                                if (!data)
                                    data = {};
                                ViewManager.getInstance().showView(WechatBoxUI4, data);
                            }
                            _a.label = 2;
                        case 2: return [2];
                    }
                });
            });
        };
        GameManager.prototype.showMoreGameBoxSingle = function (len) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var arr, moreGameBoxSingle;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                                        return [4, DYChannelMgr.instance.refreshGameList(false)];
                                    case 1:
                                        arr = _a.sent();
                                        if (arr) {
                                            moreGameBoxSingle = new MoreGameBoxSingle({ len: len });
                                            resolve(moreGameBoxSingle);
                                        }
                                        else {
                                            resolve(null);
                                        }
                                        return [3, 3];
                                    case 2:
                                        resolve(null);
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        GameManager.prototype.showGameBanner = function (count, scrollCount) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                            var arr, moreGameBanner;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(GameData.getInstance().channel == "duyou" && DeviceUtil.isWXMiniGame())) return [3, 2];
                                        return [4, DYChannelMgr.instance.refreshGameList(false)];
                                    case 1:
                                        arr = _a.sent();
                                        if (arr) {
                                            moreGameBanner = new DYMoreGameBanner({ len: count, scrollCount: scrollCount });
                                            resolve(moreGameBanner);
                                        }
                                        else {
                                            resolve(null);
                                        }
                                        return [3, 3];
                                    case 2:
                                        resolve(null);
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); })];
                });
            });
        };
        return GameManager;
    }());
    window['GameManager'] = GameManager;
    var BaseInfoType;
    (function (BaseInfoType) {
        BaseInfoType[BaseInfoType["Ship"] = 0] = "Ship";
        BaseInfoType[BaseInfoType["Cat"] = 1] = "Cat";
        BaseInfoType[BaseInfoType["Booster"] = 2] = "Booster";
        BaseInfoType[BaseInfoType["Pig"] = 3] = "Pig";
    })(BaseInfoType || (BaseInfoType = {}));
    var GameAttackModel;
    (function (GameAttackModel) {
        GameAttackModel[GameAttackModel["AUTO"] = 0] = "AUTO";
        GameAttackModel[GameAttackModel["MANUAL"] = 1] = "MANUAL";
    })(GameAttackModel || (GameAttackModel = {}));
    var GameModel;
    (function (GameModel) {
        GameModel[GameModel["Adventure"] = 0] = "Adventure";
        GameModel[GameModel["Match"] = 1] = "Match";
    })(GameModel || (GameModel = {}));

    var ConfigManager = (function () {
        function ConfigManager() {
            this.URL = "resource/assets/configs/";
            this.playerExpJson = null;
            this.playerStarExpJson = null;
            this.starConfigs = null;
            this.catConfigs = null;
            this.shipConfigs = null;
            this.boosterConfigs = null;
            this.pigConfigs = null;
            this.bulletConfigs = null;
            this.CaptainInfo = [
                { "playerLevel": 1, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
                { "playerLevel": 2, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
                { "playerLevel": 3, "captainAtt": 10, "captainHp": 40, "captainCrit": 300 },
                { "playerLevel": 4, "captainAtt": 20, "captainHp": 60, "captainCrit": 600 },
                { "playerLevel": 5, "captainAtt": 30, "captainHp": 80, "captainCrit": 850 },
                { "playerLevel": 6, "captainAtt": 40, "captainHp": 100, "captainCrit": 1000 },
            ];
        }
        ConfigManager.getInstance = function () {
            if (!this.instance) {
                this.instance = new ConfigManager();
            }
            return this.instance;
        };
        ;
        ConfigManager.prototype.getSignConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.signConfig) return [3, 2];
                            _a = this;
                            return [4, ResUtil.getIntance().getAsyncRES("SignConfig_json")];
                        case 1:
                            _a.signConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.signConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getTaskConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.taskConfig) return [3, 2];
                            _a = this;
                            return [4, ResUtil.getIntance().getAsyncRES("TaskConfig_json")];
                        case 1:
                            _a.taskConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.taskConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getTreasureConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.treasureConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, ResUtil.getIntance().getAsyncRES("TreasureConfig_json")];
                        case 1:
                            _a.treasureConfig = _b.apply(this, [(_c.sent())]);
                            _c.label = 2;
                        case 2: return [2, this.treasureConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getGuankaConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.guankaConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(this.URL + "GuankaConfig.json")];
                        case 1:
                            _a.guankaConfig = _b.apply(this, [(_c.sent())]);
                            _c.label = 2;
                        case 2: return [2, this.guankaConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getEncounterConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.encounterConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "encounter.json")];
                        case 1:
                            _a.encounterConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.encounterConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getDungeonItemConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.dungeonItemConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "DungeonItemConfig.json")];
                        case 1:
                            _a.dungeonItemConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.dungeonItemConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getRegattaConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if (!!this.regattaConfig) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, ResUtil.getIntance().getAsyncRES("RegattaConfig_json")];
                        case 1:
                            _a.regattaConfig = _b.apply(this, [(_c.sent())]);
                            _c.label = 2;
                        case 2: return [2, this.regattaConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getRegattaAwardConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.regattaAwardConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "RegattaAward.json")];
                        case 1:
                            _a.regattaAwardConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.regattaAwardConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getRegattaZoneConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.regattaZoneConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "RegattaZone.json")];
                        case 1:
                            _a.regattaZoneConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.regattaZoneConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getStoreConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.storeConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "StoreConfig.json")];
                        case 1:
                            _a.storeConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.storeConfig];
                    }
                });
            });
        };
        ConfigManager.prototype.getLotteryConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!!this.lotteryConfig) return [3, 2];
                            _a = this;
                            return [4, GameManager.instance.loadCongigs(this.URL + "LotteryConfig.json")];
                        case 1:
                            _a.lotteryConfig = (_b.sent());
                            _b.label = 2;
                        case 2: return [2, this.lotteryConfig];
                    }
                });
            });
        };
        Object.defineProperty(ConfigManager.prototype, "inviteConfig", {
            get: function () {
                return this._inviteConfig;
            },
            set: function (value) {
                this._inviteConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConfigManager.prototype, "skinConfig", {
            get: function () {
                return this._skinConfig;
            },
            set: function (value) {
                this._skinConfig = value;
            },
            enumerable: false,
            configurable: true
        });
        ConfigManager.prototype.initConfigs = function () {
            var _this = this;
            return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.initMainConfigs()];
                        case 1:
                            _a.sent();
                            resolve();
                            return [2];
                    }
                });
            }); });
        };
        ConfigManager.prototype.initMainConfigs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, _a, _b, _c, _d, _e, _f, _g, _h, _j;
                return __generator(this, function (_k) {
                    switch (_k.label) {
                        case 0:
                            url = 'resource/assets/configs/';
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(url + "cat.json")];
                        case 1:
                            _a.catConfigs = _b.apply(this, [_k.sent()]);
                            _c = this;
                            _d = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(url + "ship.json")];
                        case 2:
                            _c.shipConfigs = _d.apply(this, [_k.sent()]);
                            _e = this;
                            _f = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(url + "booster.json")];
                        case 3:
                            _e.boosterConfigs = _f.apply(this, [_k.sent()]);
                            _g = this;
                            return [4, GameManager.instance.loadCongigs(url + 'exp.json')];
                        case 4:
                            _g.playerExpJson = _k.sent();
                            _h = this;
                            return [4, GameManager.instance.loadCongigs(url + 'starExp.json')];
                        case 5:
                            _h.playerStarExpJson = _k.sent();
                            _j = this;
                            return [4, GameManager.instance.loadCongigs(url + 'star.json')];
                        case 6:
                            _j.starJson = _k.sent();
                            return [2];
                    }
                });
            });
        };
        ConfigManager.prototype.initGameConfigs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            url = 'resource/assets/configs/';
                            if (!!this.bulletConfigs) return [3, 2];
                            _a = this;
                            _b = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(url + "bullet.json")];
                        case 1:
                            _a.bulletConfigs = _b.apply(this, [_f.sent()]);
                            _f.label = 2;
                        case 2:
                            if (!!this.pigConfigs) return [3, 4];
                            _c = this;
                            _d = this.arrToObjById;
                            return [4, GameManager.instance.loadCongigs(url + "pig.json")];
                        case 3:
                            _c.pigConfigs = _d.apply(this, [_f.sent()]);
                            _f.label = 4;
                        case 4:
                            if (!!this.starConfigs) return [3, 6];
                            _e = this;
                            return [4, GameManager.instance.loadCongigs(url + "StarConfig.json")];
                        case 5:
                            _e.starConfigs = _f.sent();
                            _f.label = 6;
                        case 6: return [2];
                    }
                });
            });
        };
        ConfigManager.prototype.arrToObjById = function (arr) {
            var obj = {};
            if (arr == null)
                return obj;
            for (var i = 0, len = arr.length; i < len; i++) {
                if (arr[i].id) {
                    obj[arr[i].id] = arr[i];
                }
                else if (arr[i].ID) {
                    obj[arr[i].ID] = arr[i];
                }
                else {
                }
            }
            return obj;
        };
        return ConfigManager;
    }());

    var TreasureManager = (function () {
        function TreasureManager() {
        }
        Object.defineProperty(TreasureManager, "instance", {
            get: function () {
                if (TreasureManager.ins == null) {
                    TreasureManager.ins = new TreasureManager();
                }
                return TreasureManager.ins;
            },
            enumerable: false,
            configurable: true
        });
        TreasureManager.prototype.getTimeBoxData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var owns, dataArr, curTime, i, len, own, data, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            owns = GameData.getInstance().treasure.owns;
                            dataArr = [];
                            curTime = (new Date()).getTime();
                            i = 0, len = owns.length;
                            _b.label = 1;
                        case 1:
                            if (!(i < len)) return [3, 4];
                            own = owns[i];
                            data = new localData.TimeBoxData();
                            data.id = own.id;
                            data.uid = own.uid;
                            data.state = own.state;
                            data.videoJump = own.videoJump;
                            _a = data;
                            return [4, this.getTreasureConfig(own.id)];
                        case 2:
                            _a.config = _b.sent();
                            if (own.endTime) {
                                if (curTime >= own.endTime) {
                                    data.state = 2;
                                    data.surplusTime = 0;
                                }
                                else {
                                    data.surplusTime = Math.floor((own.endTime - curTime) / 1000);
                                }
                            }
                            else {
                                if (GameData.getInstance().isTestVersion) {
                                    data.surplusTime = 30 * 60 + 5;
                                }
                                else {
                                    data.surplusTime = data.config.timeToOpen * 60;
                                }
                            }
                            dataArr.push(data);
                            _b.label = 3;
                        case 3:
                            i++;
                            return [3, 1];
                        case 4: return [2, dataArr];
                    }
                });
            });
        };
        TreasureManager.prototype.getCurVideoTimes = function () {
            var curTime = (new Date()).getTime();
            var video = GameData.getInstance().treasure.videoBox;
            if (Utils.judgeIsOnTheSameDay(curTime, video.lastTime)) {
                var needTimes = video.num + 1;
                if (video.num >= 5)
                    needTimes = video.num;
                return { num: video.num, needTimes: needTimes, times: video.times };
            }
            else {
                GameData.getInstance().treasure.videoBox.num = 0;
                GameData.getInstance().treasure.videoBox.times = 1;
                GameData.getInstance().treasure.videoBox.lastTime = curTime;
                GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
                return { num: 0, needTimes: 1, times: 1 };
            }
        };
        TreasureManager.prototype.updateVideoBox = function () {
            var _this = this;
            var video = GameData.getInstance().treasure.videoBox;
            video.times -= 1;
            if (video.times == 0) {
                video.num += 1;
                if (video.num < 5)
                    video.times = video.num + 1;
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () {
                    ViewManager.getInstance().showView(AwardScene, {
                        type: 2, data: [{ awardId: 160002, awardNum: 1 }],
                        sureFun: function () {
                            _this.getBox(160002);
                        }
                    });
                    GameMgr.getInstance().hiddeBufferLoading();
                });
            }
            video.lastTime = (new Date()).getTime();
            GameData.getInstance().treasure.videoBox = video;
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
        };
        TreasureManager.prototype.getBox = function (id) {
            if (GameData.getInstance().treasure.vacancy) {
                GameData.getInstance().treasure.baseUid++;
                GameData.getInstance().treasure.owns.push({ uid: GameData.getInstance().treasure.baseUid, id: id, state: 0, videoJump: 0, endTime: null });
                GameData.getInstance().treasure.vacancy -= 1;
                GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
            }
            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
        };
        TreasureManager.prototype.getIsDownTimeState = function () {
            var owns = GameData.getInstance().treasure.owns;
            for (var i = 0, len = owns.length; i < len; i++) {
                if (owns[i].state == 1) {
                    return true;
                }
            }
            return false;
        };
        TreasureManager.prototype.openBoxDownTime = function (uid, time) {
            if (GameData.getInstance().isTestVersion) {
                time = 30 * 60 + 5;
            }
            var owns = GameData.getInstance().treasure.owns;
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                if (own.uid == uid) {
                    own.state = 1;
                    own.endTime = (new Date()).getTime() + time * 1000;
                    GameData.getInstance().treasure.owns[i] = own;
                    break;
                }
            }
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
        };
        TreasureManager.prototype.boxDownTimeEnd = function (uid) {
            var owns = GameData.getInstance().treasure.owns;
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                if (own.uid == uid) {
                    own.state = 2;
                    GameData.getInstance().treasure.owns[i] = own;
                    break;
                }
            }
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
        };
        TreasureManager.prototype.boxDownTimeReduce = function (uid, time) {
            var owns = GameData.getInstance().treasure.owns;
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                if (own.uid == uid) {
                    own.endTime = own.endTime - time * 1000;
                    own.videoJump += 1;
                    var curTime = (new Date()).getTime();
                    if (curTime >= own.endTime) {
                        own.state = 2;
                    }
                    GameData.getInstance().treasure.owns[i] = own;
                    break;
                }
            }
            GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
        };
        TreasureManager.prototype.deleteBox = function (uid) {
            var owns = GameData.getInstance().treasure.owns;
            for (var i = 0, len = owns.length; i < len; i++) {
                var own = owns[i];
                if (own.uid == uid) {
                    GameData.getInstance().treasure.owns.splice(i, 1);
                    GameData.getInstance().treasure.vacancy += 1;
                    GameInfoManager.getInstance().saveInfo(GameConst.BOX_INFO);
                    break;
                }
            }
        };
        TreasureManager.prototype.openBox = function (id, uid) {
            return __awaiter(this, void 0, void 0, function () {
                var config, star, lvLimit, dropGold, pool, keys, i, index, dataArr, i, len, i, len, i, len, i, len, i, len, i, len;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getTreasureConfig(id)];
                        case 1:
                            config = _a.sent();
                            lvLimit = true;
                            switch (id) {
                                case 169901:
                                    star = 1;
                                    break;
                                case 169902:
                                    star = 2;
                                    break;
                                case 169903:
                                    star = 3;
                                    break;
                                case 169904:
                                    star = 4;
                                    break;
                                case 169905:
                                    star = 5;
                                    break;
                            }
                            if (star)
                                lvLimit = false;
                            dropGold = Utils.getRandom(config.dropGoldMin, config.dropGoldMax);
                            pool = {};
                            if (config.dropShip)
                                pool.dropShip = [config.dropShip, 0];
                            if (config.dropCat)
                                pool.dropCat = [config.dropCat, 0];
                            if (config.dropBooster)
                                pool.dropBooster = [config.dropBooster, 0];
                            if (config.dropInsure) {
                                keys = Object.keys(pool);
                                for (i = 0; i < config.dropInsure; i++) {
                                    index = Utils.getRandom(0, keys.length - 1);
                                    pool[keys[index]][0] -= 1;
                                    pool[keys[index]][1] += 1;
                                }
                            }
                            console.log("打开宝箱", id, uid, pool);
                            dataArr = [];
                            if (pool.dropShip) {
                                for (i = 0, len = pool.dropShip[0]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneShip(false, star, lvLimit));
                                }
                                for (i = 0, len = pool.dropShip[1]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneShip(true, star, lvLimit));
                                }
                            }
                            if (pool.dropCat) {
                                for (i = 0, len = pool.dropCat[0]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneCat(false, star, lvLimit));
                                }
                                for (i = 0, len = pool.dropCat[1]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneCat(true, star, lvLimit));
                                }
                            }
                            if (pool.dropBooster) {
                                for (i = 0, len = pool.dropBooster[0]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneBooster(false, star, lvLimit));
                                }
                                for (i = 0, len = pool.dropBooster[1]; i < len; i++) {
                                    dataArr.push(GameManager.instance.getRandomOneBooster(true, star, lvLimit));
                                }
                            }
                            if (uid) {
                                this.deleteBox(uid);
                                TaskManager.instance.updateTask(TaskEnum.TASK_2012, 1);
                            }
                            GameInfoManager.getInstance().saveInfo(GameConst.OWN_PROP);
                            return [2, { gold: dropGold, prop: this.getAwardPropData(dataArr) }];
                    }
                });
            });
        };
        TreasureManager.prototype.getAwardPropData = function (arr) {
            var dataArr = [];
            for (var i = 0, len = arr.length; i < len; i++) {
                var own = arr[i];
                var data = new localData.PropData();
                var id = parseInt(own.id);
                data.uid = own.uid;
                data.id = id;
                data.type = own.type;
                data.star = own.star;
                data.level = own.level;
                data.quality = own.quality;
                data.exp = own.exp;
                data.hp = GameManager.instance.calAttr(own.initialHp, own.growthHp, own.level, own.quality);
                if (id >= 110001 && id < 120001) {
                    data.slot = own.slot;
                    data.hasShield = own.hasShield;
                    data.shieldId = own.shieldId;
                    data.shipConfig = ConfigManager.getInstance().shipConfigs[id];
                }
                else if (id >= 120001 && id < 130001) {
                    data.atk = GameManager.instance.calAttr(own.initialAtt, own.growthAtt, own.level, own.quality);
                    data.crit = GameManager.instance.calAttr(own.initialCrit, own.growthCrit, own.level, own.quality);
                    data.isNormal = own.isNormal;
                    data.catConfig = ConfigManager.getInstance().catConfigs[id];
                }
                else if (id >= 140001 && id < 150001) {
                    data.skillCD = own.skillCD;
                    data.boosterConfig = ConfigManager.getInstance().boosterConfigs[id];
                }
                dataArr.push(data);
            }
            return dataArr;
        };
        TreasureManager.prototype.getTreasureConfig = function (boxId) {
            return __awaiter(this, void 0, void 0, function () {
                var config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, ConfigManager.getInstance().getTreasureConfig()];
                        case 1:
                            config = _a.sent();
                            return [2, config[boxId]];
                    }
                });
            });
        };
        TreasureManager.prototype.getStoreData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, configs, i, len, config, box;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            dataArr = [];
                            dataArr.push({ type: 1 });
                            dataArr.push({ type: 2 });
                            return [4, ConfigManager.getInstance().getStoreConfig()];
                        case 1:
                            configs = _a.sent();
                            i = 0, len = configs.length;
                            _a.label = 2;
                        case 2:
                            if (!(i < len)) return [3, 6];
                            config = configs[i];
                            if (!GameData.getInstance().isTestVersion) return [3, 3];
                            dataArr.push({ type: 3, goods: config });
                            return [3, 5];
                        case 3: return [4, this.getTreasureConfig(config.itemID)];
                        case 4:
                            box = _a.sent();
                            if (box.type < 99) {
                                dataArr.push({ type: 3, goods: config });
                            }
                            _a.label = 5;
                        case 5:
                            i++;
                            return [3, 2];
                        case 6: return [2, dataArr];
                    }
                });
            });
        };
        return TreasureManager;
    }());
    window['TreasureManager'] = TreasureManager;

    var StoreItem = (function (_super) {
        __extends(StoreItem, _super);
        function StoreItem(_data) {
            var _this = _super.call(this) || this;
            _this.className_key = "StoreItem";
            _this.data = _data;
            _this.skin = "home/store/StoreItem.json";
            return _this;
        }
        StoreItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_dim.addComponent(CustomScaleComponent);
            this.btn_video.addComponent(CustomScaleComponent);
            this.btn_lottery.addComponent(CustomScaleComponent);
        };
        StoreItem.prototype.adaptationStage = function () {
            this.size(485, 605);
        };
        StoreItem.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        StoreItem.prototype.addEvent = function () {
            this.btn_dim.on(Laya.Event.CLICK, this, this.onBuy);
            this.btn_video.on(Laya.Event.CLICK, this, this.onVideo);
            this.btn_lottery.on(Laya.Event.CLICK, this, this.onLottery);
        };
        StoreItem.prototype.setData = function (data) {
            this.data = data;
            if (this.isCreate) {
                this.initView();
            }
        };
        StoreItem.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var data, curTimes, img, desArr, desColArr, labelAttr, baseLabel, labelAttr1, baseLabel1, labelAttr, i, len, baseLabel, route;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.data)
                                return [2];
                            this.img_lottery.visible = false;
                            this.btn_dim.visible = this.btn_lottery.visible = this.btn_video.visible = false;
                            data = this.data;
                            if (!(data.type == 1)) return [3, 1];
                            this.btn_video.visible = true;
                            this.lab_name.text = "时间宝箱";
                            this.lab_des.text = "";
                            this.img_icon.skin = "resource/assets/img/icon/box/Lootbox_Ferric.png";
                            this.img_icon.scale(0.5, 0.5);
                            curTimes = TreasureManager.instance.getCurVideoTimes();
                            img = this.btn_video.getChildAt(1);
                            if (curTimes.num < 5) {
                                img.centerY = 13;
                                this.lab_videoTimes.visible = true;
                                this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
                            }
                            else {
                                img.centerY = 0;
                                this.lab_videoTimes.visible = false;
                            }
                            return [3, 4];
                        case 1:
                            if (!(data.type == 2)) return [3, 2];
                            this.btn_lottery.visible = true;
                            this.lab_name.text = "转盘";
                            this.lab_des.text = "";
                            this.img_icon.skin = "";
                            this.img_lottery.visible = true;
                            this.img_icon.scale(0.5, 0.5);
                            return [3, 4];
                        case 2:
                            this.btn_dim.visible = true;
                            this.lab_name.text = data.goods.name;
                            this.lab_des.text = "";
                            this.box_des.removeChildren();
                            desArr = data.goods.itemDes.split("|");
                            desColArr = data.goods.desColor.split("|");
                            if (this.data.goods.itemID <= 160102) {
                                labelAttr = [
                                    { text: desArr[0], color: desColArr[0], fontSize: 30, font: "SimHei" },
                                    { text: desArr[1], color: desColArr[1], fontSize: 30, font: "SimHei" },
                                    { text: "船、猫和增幅器", color: desColArr[2], fontSize: 30, font: "SimHei" }
                                ];
                                baseLabel = new BaseLabel(labelAttr);
                                this.box_des.addChild(baseLabel);
                                labelAttr1 = [
                                    { text: "至少", color: desColArr[2], fontSize: 30, font: "SimHei" },
                                    { text: desArr[3], color: desColArr[3], fontSize: 30, font: "SimHei" },
                                ];
                                baseLabel1 = new BaseLabel(labelAttr1);
                                baseLabel1.y = baseLabel.desHeight + 5;
                                this.box_des.addChild(baseLabel1);
                            }
                            else {
                                labelAttr = [];
                                for (i = 0, len = desArr.length; i < len; i++) {
                                    labelAttr.push({ text: desArr[i], color: desColArr[i], fontSize: 30, font: "SimHei" });
                                }
                                baseLabel = new BaseLabel(labelAttr);
                                this.box_des.addChild(baseLabel);
                            }
                            return [4, GameMgr.getInstance().getIconUrlById(data.goods.itemID)];
                        case 3:
                            route = _a.sent();
                            this.img_icon.skin = route.route + route.prefix + ".png";
                            this.img_icon.scale(0.3, 0.3);
                            BitmapLabelUtils.setLabel(this.img_cast, data.goods.cost + "", "resource/assets/img/public/public_sz/", 0);
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        StoreItem.prototype.onBuy = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            if (GameData.getInstance().playerData.diamond >= this.data.goods.cost) {
                GameMgr.getInstance().showBufferLoading();
                ResUtil.getIntance().loadGroups(["award", "propPublic"], function () { return __awaiter(_this, void 0, void 0, function () {
                    var data, fun;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GameMgr.getInstance().updateBaseData(1002, this.data.goods.cost * -1);
                                return [4, TreasureManager.instance.openBox(this.data.goods.itemID)];
                            case 1:
                                data = _a.sent();
                                fun = function () {
                                    GameMgr.getInstance().updateBaseData(1001, data.gold);
                                    ViewManager.getInstance().showView(AwardScene, { type: 1, data: data.prop });
                                };
                                ViewManager.getInstance().showView(AwardScene, { type: 2, data: [{ awardId: 1001, awardNum: data.gold }], sureFun: function () { fun(); } });
                                GameMgr.getInstance().hiddeBufferLoading();
                                return [2];
                        }
                    });
                }); });
            }
            else {
                TipsManager.getInstance().showDefaultTips("钻石不足");
            }
        };
        StoreItem.prototype.onVideo = function () {
            var _this = this;
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            var curTimes = TreasureManager.instance.getCurVideoTimes();
            if (curTimes.num < 5) {
                if (GameData.getInstance().treasure.vacancy) {
                    MiniManeger.instance.playViderAd({
                        successFun: function () {
                            TreasureManager.instance.updateVideoBox();
                            EventMgr.getInstance().sendEvent(GameEvent.REFRESH_BOX);
                            var curTimes = TreasureManager.instance.getCurVideoTimes();
                            var img = _this.btn_video.getChildAt(1);
                            if (curTimes.num < 5) {
                                img.centerY = 13;
                                _this.lab_videoTimes.visible = true;
                                _this.lab_videoTimes.text = curTimes.needTimes - curTimes.times + "/" + curTimes.needTimes;
                            }
                            else {
                                img.centerY = 0;
                                _this.lab_videoTimes.visible = false;
                            }
                        },
                        failFun: function () {
                        },
                        errorFun: function () {
                        }
                    });
                }
                else {
                    ViewManager.getInstance().showView(NoVacancy, { sureTxt: "确定" });
                }
            }
            else {
                TipsManager.getInstance().showDefaultTips("今日看视频得宝箱次数已用完");
            }
        };
        StoreItem.prototype.onLottery = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["lottery"], function () {
                ViewManager.getInstance().showView(LotteryView);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        StoreItem.prototype.removeEvent = function () {
            this.btn_dim.off(Laya.Event.CLICK, this, this.onBuy);
            this.btn_video.off(Laya.Event.CLICK, this, this.onVideo);
            this.btn_lottery.off(Laya.Event.CLICK, this, this.onLottery);
        };
        StoreItem.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.data = null;
            this.removeEvent();
        };
        return StoreItem;
    }(BaseSceneUISkin));

    var StoreScene = (function (_super) {
        __extends(StoreScene, _super);
        function StoreScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "StoreScene";
            _this.skin = "home/store/StoreScene.json";
            return _this;
        }
        StoreScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            DeviceUtil.adaptationBgImg(this.img_bg);
            this.box_store.removeChildren();
            this.panel_store.hScrollBarSkin = "";
            this.panel_store.elasticEnabled = true;
            this.panel_store.hScrollBar.elasticDistance = 100;
            this.panel_store.hScrollBar.elasticBackTime = 100;
            this.panel_store.autoSize = true;
            this.btn_close.addComponent(CustomScaleComponent);
        };
        StoreScene.prototype.onAddStage = function () {
            _super.prototype.onAddStage.call(this);
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        StoreScene.prototype.addEvent = function () {
            this.btn_close.on(Laya.Event.CLICK, this, this.onClose);
        };
        StoreScene.prototype.initView = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dataArr, len, i, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            SoundManager.getInstance().playEffect(SoundConst.OpenPop);
                            return [4, TreasureManager.instance.getStoreData()];
                        case 1:
                            dataArr = _a.sent();
                            this.panel_store.hScrollBar.value = 0;
                            len = dataArr.length;
                            for (i = 0; i < len; i++) {
                                item = this.box_store.getChildAt(i);
                                if (item) {
                                    item.setData(dataArr[i]);
                                }
                                else {
                                    item = new StoreItem(dataArr[i]);
                                    item.x = (485 + 20) * i;
                                    this.box_store.addChild(item);
                                }
                            }
                            this.box_store.width = 485 * len + 20 * (len - 1);
                            this.box_store.height = this.panel_store.height = 605;
                            if (this.box_store.width >= 1920) {
                                this.panel_store.autoSize = false;
                                this.panel_store.width = 1920;
                            }
                            else {
                                this.panel_store.autoSize = true;
                            }
                            this.showGameBanner();
                            return [2];
                    }
                });
            });
        };
        StoreScene.prototype.showGameBanner = function () {
            return __awaiter(this, void 0, void 0, function () {
                var dYMoreGameBanner;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.box_gameBanner.removeChildren();
                            return [4, GameManager.instance.showGameBanner(6, 200000)];
                        case 1:
                            dYMoreGameBanner = _a.sent();
                            if (dYMoreGameBanner) {
                                this.box_gameBanner.addChild(dYMoreGameBanner);
                                this.box_gameBanner.width = dYMoreGameBanner.width;
                            }
                            return [2];
                    }
                });
            });
        };
        StoreScene.prototype.onClose = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            this.removeSelf();
            SoundManager.getInstance().playEffect(SoundConst.ClosePop);
        };
        StoreScene.prototype.removeEvent = function () {
            this.btn_close.off(Laya.Event.CLICK, this, this.onClose);
        };
        StoreScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
            GameMgr.getInstance().enableTopBar(true);
            MiniManeger.instance.hideBanner();
        };
        return StoreScene;
    }(BaseSceneUISkinPopView));

    var PlayerTopScene = (function (_super) {
        __extends(PlayerTopScene, _super);
        function PlayerTopScene() {
            var _this = _super.call(this) || this;
            _this.className_key = "PlayerTopScene";
            _this.skin = "home/PlayerTopScene.json";
            return _this;
        }
        PlayerTopScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_add.addComponent(CustomScaleComponent);
        };
        PlayerTopScene.prototype.adaptationStage = function () {
            this.size(1920, 170);
        };
        PlayerTopScene.prototype.onAddStage = function () {
            if (this.isCreate) {
                this.initView();
                this.addEvent();
            }
        };
        PlayerTopScene.prototype.setData = function (data) {
            if (this.isCreate) {
            }
        };
        PlayerTopScene.prototype.addEvent = function () {
            this.btn_add.on(Laya.Event.CLICK, this, this.onAdd);
            EventMgr.getInstance().addEvent(GameEvent.REFRESH_TOP, this, this.updateTopInfo);
        };
        PlayerTopScene.prototype.initView = function () {
            this.txt_nickname.overflow = 'hidden';
            this.updateTopInfo();
            if (GameData.getInstance().isConVersion) {
                this.btn_add.visible = false;
            }
        };
        PlayerTopScene.prototype.updateTopInfo = function () {
            var data = GameMgr.getInstance().getTopInfo();
            this.txt_nickname.text = Utils.cutOutStr(data.nick, 6);
            this.txt_grade.text = data.currLevel + "";
            if (data.currGold < 1000000) {
                this.img_gold.scale(1, 1);
            }
            else if (data.currGold >= 1000000 && data.currGold < 10000000) {
                this.img_gold.scale(0.85, 0.85);
            }
            else {
                this.img_gold.scale(0.7, 0.7);
            }
            BitmapLabelUtils.setLabel(this.img_gold, data.currGold + "", "resource/assets/img/home/top/top_sz/", 0, ".png");
            if (data.currDids < 100000) {
                this.img_diamond.scale(1, 1);
            }
            else if (data.currDids >= 100000 && data.currDids < 1000000) {
                this.img_diamond.scale(0.85, 0.85);
            }
            else {
                this.img_diamond.scale(0.7, 0.7);
            }
            BitmapLabelUtils.setLabel(this.img_diamond, data.currDids + "", "resource/assets/img/home/top/top_sz/", 0, ".png");
            var numArr = (data.currCombat + "").split(".");
            this.img_num1.width = 42;
            if (parseInt(numArr[0]) > 999) {
                this.img_num1.width = 42 * 4;
            }
            else if (parseInt(numArr[0]) > 99) {
                this.img_num1.width = 42 * 3;
            }
            else if (parseInt(numArr[0]) > 9) {
                this.img_num1.width = 42 * 2;
            }
            if (numArr.length < 2) {
                this.img_point.visible = this.img_num2.visible = false;
                BitmapLabelUtils.setLabel(this.img_num1, numArr[0], "resource/assets/img/home/top/top_sz/", 0, ".png");
            }
            else {
                this.img_point.visible = this.img_num2.visible = true;
                this.img_num2.width = 42;
                if (parseInt(numArr[0]) > 999) {
                    this.img_num2.width = 42 * 4;
                }
                else if (parseInt(numArr[0]) > 99) {
                    this.img_num2.width = 42 * 3;
                }
                else if (parseInt(numArr[0]) > 9) {
                    this.img_num2.width = 42 * 2;
                }
                BitmapLabelUtils.setLabel(this.img_num1, numArr[0], "resource/assets/img/home/top/top_sz/", 0, ".png");
                BitmapLabelUtils.setLabel(this.img_num2, numArr[1], "resource/assets/img/home/top/top_sz/", 0, ".png");
            }
        };
        PlayerTopScene.prototype.onAdd = function () {
            SoundManager.getInstance().playEffect(SoundConst.BtnClick);
            GameMgr.getInstance().showBufferLoading();
            ResUtil.getIntance().loadGroups(["store"], function () {
                ViewManager.getInstance().showView(StoreScene);
                GameMgr.getInstance().enableTopBar(false);
                GameMgr.getInstance().hiddeBufferLoading();
            });
        };
        PlayerTopScene.prototype.removeEvent = function () {
            this.btn_add.off(Laya.Event.CLICK, this, this.onAdd);
            EventMgr.getInstance().removeEvent(GameEvent.REFRESH_TOP, this, this.updateTopInfo);
        };
        PlayerTopScene.prototype.onRemoved = function () {
            _super.prototype.onRemoved.call(this);
            this.removeEvent();
        };
        PlayerTopScene.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return PlayerTopScene;
    }(BaseSceneUISkin));

    var GameMgr = (function () {
        function GameMgr() {
            this.randomVersion = '';
            this.multWeight = {
                "0": [2000, 2000, 6000],
                "50": [2000, 4000, 4000],
                "100": [5000, 3000, 2000],
                "200": [6000, 2000, 2000],
                "500": [8000, 1000, 1000],
                "1000": [10000, 0, 0]
            };
            this._views = {};
            this.player = 'player';
            this.powerTime = 'powerTime';
            this.sign = 'sign';
            this.sex = 'sex';
            this.invite = 'invite';
            this.randomVersion = "?v=" + new Date().getTime();
        }
        GameMgr.getInstance = function () {
            if (!GameMgr.instance) {
                GameMgr.instance = new GameMgr();
            }
            return GameMgr.instance;
        };
        GameMgr.prototype.registerBufferLoading = function () {
            BufferLoadingManger.getInstance().registerOneBuffer("GameBufferLoading", new GameBufferLoading());
        };
        GameMgr.prototype.showBufferLoading = function (info) {
            if (info === void 0) { info = ""; }
            BufferLoadingManger.getInstance().showBuffer("GameBufferLoading", info);
            Laya.timer.clear(this, this.hiddeBufferLoading);
            Laya.timer.once(60000, this, this.hiddeBufferLoading);
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = false;
        };
        GameMgr.prototype.hiddeBufferLoading = function () {
            Laya.timer.clear(this, this.hiddeBufferLoading);
            BufferLoadingManger.getInstance().hiddBuffer("GameBufferLoading");
            BufferLoadingManger.getInstance().bufferGroup.mouseEnabled = true;
            BufferLoadingManger.getInstance().bufferGroup.mouseThrough = true;
        };
        GameMgr.prototype.initTopBar = function () {
            if (!this.com_TopBar) {
                this.com_TopBar = new PlayerTopScene();
                BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_TopBar);
                this.com_TopBar.visible = false;
            }
        };
        GameMgr.prototype.showTopBar = function () {
            if (!this.com_TopBar) {
                this.com_TopBar = new PlayerTopScene();
                BufferLoadingManger.getInstance().bufferGroup.addChild(this.com_TopBar);
            }
            this.com_TopBar.visible = true;
        };
        GameMgr.prototype.hideTopBar = function () {
            if (this.com_TopBar) {
                this.com_TopBar.visible = false;
            }
        };
        GameMgr.prototype.enableTopBar = function (enable) {
            if (this.com_TopBar) {
                this.com_TopBar.mouseEnabled = enable;
            }
        };
        GameMgr.prototype.getTopInfo = function () {
            var player = GameData.getInstance().userInfo;
            var info = GameData.getInstance().playerData;
            var data = new localData.TopInfo();
            data.nick = player.nick;
            data.head = player.avatarUrl;
            data.currLevel = info.playerLevel;
            data.currGold = info.gold;
            data.currDids = info.diamond;
            data.currCombat = GameManager.instance.calCombat();
            return data;
        };
        GameMgr.prototype.updateBaseData = function (id, value) {
            switch (id) {
                case 1001:
                    GameData.getInstance().playerData.gold += value;
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                    break;
                case 1002:
                    GameData.getInstance().playerData.diamond += value;
                    EventMgr.getInstance().sendEvent(GameEvent.REFRESH_TOP);
                    GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                    break;
                default:
                    console.warn("参数错误 ->", id);
            }
            console.log("更新玩家基本数据 >>> ", GameData.getInstance().playerData);
        };
        GameMgr.prototype.getIconUrlById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var data, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = { route: "", prefix: "" };
                            if (!(id < 10000)) return [3, 1];
                            return [3, 8];
                        case 1:
                            if (!(id > 110000 && id < 120000)) return [3, 2];
                            return [3, 8];
                        case 2:
                            if (!(id > 120000 && id < 130000)) return [3, 3];
                            return [3, 8];
                        case 3:
                            if (!(id > 130000 && id < 140000)) return [3, 4];
                            return [3, 8];
                        case 4:
                            if (!(id > 140000 && id < 150000)) return [3, 5];
                            return [3, 8];
                        case 5:
                            if (!(id > 150000 && id < 160000)) return [3, 6];
                            return [3, 8];
                        case 6:
                            if (!(id > 160000 && id < 170000)) return [3, 8];
                            return [4, TreasureManager.instance.getTreasureConfig(id)];
                        case 7:
                            config = _a.sent();
                            if (id > 160200) {
                                data.route = "resource/assets/img/icon/";
                            }
                            else {
                                data.route = "resource/assets/img/icon/box/";
                            }
                            data.prefix = config.icon;
                            _a.label = 8;
                        case 8: return [2, data];
                    }
                });
            });
        };
        GameMgr.prototype.getGoldMult = function (base) {
            var weightArr = [];
            if (base <= 50) {
                weightArr = this.multWeight[0];
            }
            else if (base > 50 && base <= 100) {
                weightArr = this.multWeight[50];
            }
            else if (base > 100 && base <= 200) {
                weightArr = this.multWeight[100];
            }
            else if (base > 200 && base <= 500) {
                weightArr = this.multWeight[200];
            }
            else if (base > 500 && base <= 1000) {
                weightArr = this.multWeight[500];
            }
            else {
                weightArr = this.multWeight[1000];
            }
            var index = this.getRandomByWeightArr(weightArr);
            return index + 2;
        };
        GameMgr.prototype.getArrayRandomItem = function (arr, num) {
            var newArr = Utils.copy(arr);
            var result = [];
            for (var i = 0; i < num; i++) {
                if (newArr.length > 0) {
                    var arrIndex = Math.floor(Math.random() * newArr.length);
                    result[i] = newArr[arrIndex];
                    newArr.splice(arrIndex, 1);
                }
                else {
                    break;
                }
            }
            return result;
        };
        GameMgr.prototype.getRandomByWeightArr = function (oArr) {
            var sum = 0;
            var rand = 0;
            var result = 0;
            for (var i in oArr) {
                sum += Number(oArr[i]);
            }
            for (var i in oArr) {
                rand = Math.floor(Math.random() * sum + 1);
                if (oArr[i] >= rand) {
                    result = Number(i);
                    break;
                }
                else {
                    sum -= oArr[i];
                }
            }
            return result;
        };
        GameMgr.prototype.replaceStr = function (str) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (str && str.match("%s") || []).forEach(function (item, i) { return str = str.replace(item, args[i] || item); });
            return str;
        };
        ;
        GameMgr.prototype.getView = function (className, data, only) {
            if (only === void 0) { only = true; }
            var panelKey = className.toString();
            panelKey = (panelKey.split("className_key=\"")[1]) == null ? (panelKey.split("className_key = \"")[1]) : (panelKey.split("className_key=\"")[1]);
            panelKey = panelKey.split("\"")[0];
            var result = this._views['' + panelKey];
            if (only && result) {
                result.setData(data);
                return result;
            }
            var clazz = Laya.ClassUtils.getRegClass(panelKey);
            if (clazz == null) {
                Laya.ClassUtils.regClass(panelKey, className);
                clazz = Laya.ClassUtils.getRegClass(panelKey);
            }
            result = new clazz(data);
            result.name = panelKey;
            if (only) {
                this._views['' + panelKey] = result;
            }
            return result;
        };
        GameMgr.prototype.sendKVJson = function (key, value, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) {
                            }
                            else {
                                Laya.LocalStorage.setJSON(key, value);
                                resolve();
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.sendKV = function (key, value, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) {
                            }
                            else {
                                Laya.LocalStorage.setItem(key, value);
                                resolve();
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.getKV = function (key, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) {
                            }
                            else {
                                var data = Laya.LocalStorage.getItem(key);
                                resolve(data);
                            }
                        })];
                });
            });
        };
        GameMgr.prototype.getKVJson = function (key, canUseNet) {
            if (canUseNet === void 0) { canUseNet = false; }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve, reject) {
                            if (canUseNet) {
                            }
                            else {
                                var data = Laya.LocalStorage.getJSON(key);
                                resolve(data);
                            }
                        })];
                });
            });
        };
        return GameMgr;
    }());
    window['GameMgr'] = GameMgr;

    var GameLoadingView = (function (_super) {
        __extends(GameLoadingView, _super);
        function GameLoadingView() {
            var _this = _super.call(this) || this;
            _this.className_key = "GameLoadingView";
            _this.width = Laya.stage.width;
            _this.height = Laya.stage.height;
            _this.img_bg = new Laya.Image();
            _this.img_bg.skin = "resource/assets/loading/loading_background.jpg?v=" + new Date().getTime();
            _this.img_bg.width = 1920;
            _this.img_bg.height = 1080;
            _this.img_bg.centerX = _this.img_bg.centerY = 0;
            _this.img_bg.anchorX = _this.img_bg.anchorY = 0.5;
            DeviceUtil.adaptationBgImg(_this.img_bg);
            _this.addChild(_this.img_bg);
            _this.img_jdt_db = new Laya.Image();
            _this.img_jdt_db.skin = "resource/assets/loading/loading2.png";
            _this.img_jdt_db.sizeGrid = "0,4,0,4";
            _this.img_jdt_db.width = 1285;
            _this.img_jdt_db.height = 36;
            _this.img_jdt_db.centerX = 0;
            _this.img_jdt_db.bottom = 120;
            _this.addChild(_this.img_jdt_db);
            _this.img_jdt = new Laya.Image();
            _this.img_jdt.skin = "resource/assets/loading/loading1.png";
            _this.img_jdt.sizeGrid = "0,4,0,4";
            _this.img_jdt.width = 14;
            _this.img_jdt.height = 36;
            _this.img_jdt.x = 0;
            _this.img_jdt.centerY = 0;
            _this.img_jdt_db.addChild(_this.img_jdt);
            _this.img_load = new Laya.Image();
            _this.img_load.skin = "resource/assets/loading/loading6.png";
            _this.img_load.y = 60;
            _this.img_load.centerX = 0;
            _this.img_jdt_db.addChild(_this.img_load);
            _this.progress(1, 100);
            return _this;
        }
        GameLoadingView.prototype.childrenCreated = function () {
        };
        GameLoadingView.prototype.showAnimation = function () {
        };
        GameLoadingView.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        GameLoadingView.prototype.onAwake = function () {
            _super.prototype.onAwake.call(this);
        };
        GameLoadingView.prototype.progress = function (index, len) {
            this.img_jdt.width = 1285 * (index / len);
        };
        GameLoadingView.prototype.remove = function () {
            Laya.timer.clearAll(this);
            console.log("remove loadingView...");
            if (this && this.parent)
                this.parent.removeChild(this);
        };
        return GameLoadingView;
    }(BaseSceneUISkin));

    var MiniWeChatGameManager = (function (_super) {
        __extends(MiniWeChatGameManager, _super);
        function MiniWeChatGameManager() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.defaultMssage = {
                "title": "如果猫猪争宠，你会站在哪一边？",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
                "query": ""
            };
            _this.shareInfo = [
                {
                    "title": "如果猫猪争宠，你会站在哪一边？",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
                    "query": ""
                }
            ];
            _this.sucTime = 0;
            _this.canShowBanner = true;
            return _this;
        }
        MiniWeChatGameManager.prototype.initMiniGame = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            this.launchOption = launchObj;
            this.getUpdateManager();
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.systemInfo = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
        };
        MiniWeChatGameManager.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            resolve(null);
                        })];
                });
            });
        };
        MiniWeChatGameManager.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (info == null) {
                            }
                            if (info == null)
                                return [2, null];
                            GameData.getInstance().userInfo.nick = info.userInfo.nickName;
                            GameData.getInstance().userInfo.avatarUrl = info.userInfo.avatarUrl;
                            MiniManeger.instance.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                            InviteManager.getInstance().judgeInvite();
                            platform.onShareAppMessage(function () {
                                return MiniManeger.instance.defaultMssage;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniWeChatGameManager.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniWeChatGameManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucful && _this.shareSucful.call(_this.thisObj);
                }
                else {
                    _this.shareFailful && _this.shareFailful.call(_this.thisObj);
                }
                _this.shareFailful = null;
                _this.shareFailful = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameConst.ONSHOW);
            });
        };
        MiniWeChatGameManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameConst.ONHIDE);
            });
        };
        MiniWeChatGameManager.prototype.onAudioInterruptionBegin = function (callBack) {
            platform.onAudioInterruptionBegin(function () {
                callBack && callBack();
            });
        };
        MiniWeChatGameManager.prototype.onAudioInterruptionEnd = function (callBack) {
            platform.onAudioInterruptionEnd(function () {
                callBack && callBack();
            });
        };
        MiniWeChatGameManager.prototype.getUpdateManager = function () {
            platform.getUpdateManager();
        };
        MiniWeChatGameManager.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniWeChatGameManager.prototype.shareAppMessage = function (data) {
            if (data == null) {
                data = {};
            }
            this.shareSucful = data.sucFun;
            this.shareFailful = function () {
                TipsManager.getInstance().showDefaultTips('分享失败，请分享到群里');
                data.failFun && data.failFun();
                ;
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || 0;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.shareAppMessage(data.message);
            }
            else {
            }
        };
        MiniWeChatGameManager.prototype.playViderAd = function (data) {
            if (!DeviceUtil.isWXMiniGame()) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.successFun && data.successFun();
                return;
            }
            var videoId = GameData.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = GameData.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                return;
            }
            platform.showLoading({ title: '广告加载中', mask: true });
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                }
                else {
                    data.failFun && data.failFun();
                    SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                }
                platform.hideLoading({});
            }, function () {
                platform.hideLoading({});
                TipsManager.getInstance().showDefaultTips('网络错误');
                data.errorFun && data.errorFun();
            });
        };
        MiniWeChatGameManager.prototype.showBannerAd = function (offset) {
            if (!DeviceUtil.isWXMiniGame()) {
                return;
            }
            this.canShowBanner = true;
            var bannerId = GameData.getInstance().bannerId;
            if (bannerId.length <= 0) {
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            if (this.bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                this.bannerAd = bannerAd;
                if (bannerAd == null)
                    return;
                bannerAd.show();
            }
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
            if (offset) {
                this.bannerAd.style.left = offset.w - this.bannerAd.style.realWidth / 2 + 0.1;
                this.bannerAd.style.top = offset.h - this.bannerAd.style.realHeight + 0.1;
                offset.callback && offset.callback();
            }
        };
        MiniWeChatGameManager.prototype.hideBanner = function () {
            if (this.bannerAd != null) {
                this.bannerAd.hide();
            }
            this.canShowBanner = false;
        };
        MiniWeChatGameManager.prototype.vibrateShort = function (data) {
            if (!SoundUtil.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.vibrateShort(data);
            }
        };
        MiniWeChatGameManager.prototype.vibrateLong = function () {
            if (!SoundUtil.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame()) {
                platform.vibrateLong();
            }
        };
        MiniWeChatGameManager.prototype.adaptImgToClientRect = function (collec_img, stage) {
            if (DeviceUtil.isWXMiniGame()) {
                var systemInfo = platform.getSystemInfoSync();
                var screenHeight = systemInfo['screenHeight'];
                var screenWidth = systemInfo['screenWidth'];
                var rect = platform.getMenuButtonBoundingClientRect();
                collec_img.top = stage.height * (rect['top'] / screenHeight);
                collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
            }
        };
        MiniWeChatGameManager.prototype.sendDataToWxOpen = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        MiniWeChatGameManager.prototype.removeOpenData = function (data) {
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            this.sendDataToWxOpen({ cmd: 'close', data: null });
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
        };
        MiniWeChatGameManager.prototype.addOpenWxData = function (data) {
            var shareData = MiniManeger.instance.getShareInfo({ id: GameData.getInstance().userInfo.openId });
            this.sendDataToWxOpen({ cmd: 'share', data: JSON.stringify(shareData) });
            var wxOpenData = data.parent.getChildByName('wxOpenData');
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
            }
            else {
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
        };
        return MiniWeChatGameManager;
    }(MiniManeger));

    var DouyinBanner = (function (_super) {
        __extends(DouyinBanner, _super);
        function DouyinBanner() {
            var _this = _super.call(this) || this;
            _this.size(900, 200);
            _this.initView();
            return _this;
        }
        DouyinBanner.prototype.initView = function () {
            if (this.icon_bg == null) {
                this.icon_bg = new Laya.Image();
                this.icon_bg.skin = 'resource/assets/img/platfrom/diban_2.png';
                this.icon_bg.sizeGrid = '26,23,21,27';
                this.icon_bg.size(900, 200);
                this.addChild(this.icon_bg);
            }
            if (this.item_box == null) {
                this.item_box = new Laya.Box();
                this.item_box.centerX = this.item_box.centerY = 0;
                this.icon_bg.addChild(this.item_box);
            }
            if (this.game_list == null) {
                this.game_list = new Laya.List();
                this.game_list.size(880, 180);
                this.game_list.centerX = 0;
                this.game_list.centerY = 0;
                this.game_list.itemRender = BannerItem;
                this.game_list.hScrollBarSkin = "";
                this.game_list.spaceX = 10;
                this.icon_bg.addChild(this.game_list);
            }
            this.initList();
        };
        DouyinBanner.prototype.initList = function () {
            var moreSomeAppInfos = MiniManeger.instance.moreSomeAppInfos;
            this.game_list.array = moreSomeAppInfos;
        };
        DouyinBanner.prototype.removeSelf = function () {
            return _super.prototype.removeSelf.call(this);
        };
        return DouyinBanner;
    }(Laya.Box));
    var BannerItem = (function (_super) {
        __extends(BannerItem, _super);
        function BannerItem(data) {
            var _this = _super.call(this) || this;
            _this.itemData_ = data;
            _this.size(135, 180);
            _this.on(Laya.Event.CLICK, _this, _this.click);
            return _this;
        }
        BannerItem.prototype.initView = function () {
        };
        BannerItem.prototype.dataChange = function (data) {
            this.itemData_ = data;
            if (this.bg_ == null) {
                this.bg_ = new Laya.Image();
                this.bg_.skin = 'resource/assets/img/platfrom/diban_3.png';
                this.bg_.sizeGrid = '11,14,12,9';
                ;
                this.bg_.size(135, 180);
                this.addChild(this.bg_);
            }
            if (this.name_txt == null) {
                this.name_txt = new Laya.Label();
                this.name_txt.fontSize = 25;
                this.name_txt.width = 80;
                this.name_txt.centerX = 0;
                this.name_txt.color = '#000000';
                this.name_txt.y = 140;
                this.bg_.addChild(this.name_txt);
            }
            if (this.icon_ == null) {
                this.icon_ = new Laya.Image();
                this.icon_.centerX = 0;
                this.icon_.y = 5;
                this.icon_.size(120, 120);
                this.bg_.addChild(this.icon_);
            }
            if (this.iconMask_ == null) {
                this.iconMask_ = new Laya.Image();
                this.iconMask_.size(120, 120);
                this.iconMask_.skin = 'resource/assets/img/platfrom/diban_3.png';
                this.icon_.addChild(this.iconMask_);
            }
            this.itemData_ = data;
            this.icon_.skin = data.icon;
            if (this.iconMask_) {
                this.icon_.mask = this.iconMask_;
                this.icon_.mask.visible = false;
            }
            if (this.name_txt) {
                data.title = data.title.substr(0, 4);
                this.name_txt.text = data.title;
            }
        };
        Object.defineProperty(BannerItem.prototype, "dataSource", {
            set: function (value) {
                if (!value)
                    return;
                this.dataChange(value);
            },
            enumerable: false,
            configurable: true
        });
        BannerItem.prototype.click = function () {
            if (!DeviceUtil.isTTMiniGame())
                return;
            console.log("go game info ", this.itemData_);
            MiniManeger.instance.showMoreGamesModal();
        };
        return BannerItem;
    }(Laya.Box));

    var MiniTTGameManager = (function (_super) {
        __extends(MiniTTGameManager, _super);
        function MiniTTGameManager() {
            var _this = _super.call(this) || this;
            _this.hideTime = 0;
            _this.showTime = 0;
            _this.defaultMssage = {
                "title": "如果猫猪争宠，你会站在哪一边？",
                "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
                "query": ""
            };
            _this.shareInfo = [
                {
                    "title": "如果猫猪争宠，你会站在哪一边？",
                    "imageUrl": "https://package.32yx.com/ecy_game_small/laya/catAndPig/wx_res/share1.png",
                    "query": ""
                }
            ];
            _this.sucTime = 0;
            _this.canShowBanner = true;
            _this.isMakeVideo = false;
            _this.indexTime = 0;
            _this.initGameRecordListener();
            return _this;
        }
        MiniTTGameManager.prototype.makeVideo = function () {
            if (this.isMakeVideo) {
                console.log("录制结束");
                this.stopGameRecord();
                if (this.indexTime < 3) {
                    TipsManager.getInstance().showDefaultTips("视频要录制超过3s哦!");
                }
                return;
            }
            console.log("录制开始");
            this.startGameRecord();
        };
        MiniTTGameManager.prototype.loopTime = function () {
            this.indexTime++;
            if (this.indexTime >= this.maxMakeVideoTime) {
                console.log("录制结束");
                this.stopGameRecord();
            }
        };
        MiniTTGameManager.prototype.startGameRecord = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            console.log("startGameRecord");
            this.isMakeVideo = true;
            this.indexTime = 0;
            Laya.timer.loop(1000, this, this.loopTime);
            platform.getGameRecorderManager().start({ duration: this.maxMakeVideoTime });
        };
        MiniTTGameManager.prototype.pauseGameRecord = function () {
            platform.getGameRecorderManager().pause();
        };
        MiniTTGameManager.prototype.resumeGameRecord = function () {
            platform.getGameRecorderManager().resume();
        };
        MiniTTGameManager.prototype.stopGameRecord = function () {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
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
        };
        MiniTTGameManager.prototype.shareGameVideo = function (data) {
            MiniManeger.instance.isAutoStopShare = GameConst.infos.isAutoMakeVideo;
            if (!this.tempVideoPath || this.tempVideoPath.length == 0) {
                TipsManager.getInstance().showDefaultTips("暂未录制视频哦!");
                return;
            }
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            console.log("分享游戏视频--");
            var obj = {};
            obj.title = "海盗转一转";
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
        };
        MiniTTGameManager.prototype.initGameRecordListener = function (callBack) {
            var _this = this;
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            var recorder = platform.getGameRecorderManager();
            recorder.onStart(function (res) {
                console.log(res);
                MiniManeger.instance.stopGameRecordOver = null;
                _this.startTime = (new Date()).getTime();
                recorder.recordClip({
                    timeRange: [3, 3]
                });
            });
            recorder.onStop(function (res) {
                var now = (new Date()).getTime();
                callBack && callBack();
                if (now - MiniManeger.instance.startTime < 3000) {
                    MiniManeger.instance.tempVideoPath = null;
                    platform.showModal({
                        title: '系统提示', content: "需要录制3秒以上哟", showCancel: false, cancelText: "", confirmText: "确定",
                        success: function () {
                            MiniManeger.instance.stopGameRecordOver && MiniManeger.instance.stopGameRecordOver();
                            MiniManeger.instance.stopGameRecordOver = null;
                        }
                    });
                    return;
                }
                MiniManeger.instance.tempVideoPath = res.videoPath;
                MiniManeger.instance.stopGameRecordOver && MiniManeger.instance.stopGameRecordOver();
                MiniManeger.instance.stopGameRecordOver = null;
                console.log('onstop ', MiniManeger.instance.tempVideoPath, MiniManeger.instance.isAutoStopShare && GameConst.infos.isAutoMakeVideo);
                if (MiniManeger.instance.isAutoStopShare && GameConst.infos.isAutoMakeVideo) {
                    MiniManeger.instance.shareGameVideo();
                }
            });
            recorder.onPause(function () {
            });
            recorder.onInterruptionBegin(function () {
                recorder.pause();
            });
            recorder.onInterruptionEnd(function () {
                recorder.resume();
            });
            recorder.onResume(function () {
            });
        };
        MiniTTGameManager.prototype.showMoreGamesModal = function () {
            var appLaunchOptions = [];
            for (var i = 0, len = this.moreSomeAppInfos.length; i < len; i++) {
                appLaunchOptions.push({
                    appId: this.moreSomeAppInfos[i].appid,
                    query: "",
                    extraData: {}
                });
            }
            platform.showMoreGamesModal({
                appLaunchOptions: appLaunchOptions,
                success: function (res) {
                    console.log("success", res.errMsg);
                },
                fail: function (res) {
                    console.log("fail", res.errMsg);
                }
            });
        };
        MiniTTGameManager.prototype.appName = function () {
            var self = this;
            if (!self.systemInfo) {
                self.systemInfo = platform.getSystemInfoSync();
            }
            return self.systemInfo.appName;
        };
        MiniTTGameManager.prototype.initMiniGame = function () {
            var _this = this;
            var launchObj = platform.getLaunchOptionsSync();
            if (launchObj) {
                console.log('launchObj>>>>>>>>>>>>>>', launchObj);
            }
            this.getUpdateManager();
            platform.setKeepScreenOn();
            platform.updateShareMenu();
            platform.showShareMenu();
            platform.onShareAppMessage(function () {
                return _this.defaultMssage;
            });
            this.systemInfo = platform.getSystemInfoSync();
            console.log("systemInfo >> ", this.systemInfo);
        };
        MiniTTGameManager.prototype.getUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2, new Promise(function (resolve) {
                            resolve(null);
                        })];
                });
            });
        };
        MiniTTGameManager.prototype.initUserInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var info;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.getUserInfo()];
                        case 1:
                            info = _a.sent();
                            if (info == null) {
                            }
                            if (info == null)
                                return [2, null];
                            GameData.getInstance().userInfo.nick = info.userInfo.nickName;
                            GameData.getInstance().userInfo.avatarUrl = info.userInfo.avatarUrl;
                            MiniManeger.instance.defaultMssage.query = "openid=" + GameData.getInstance().userInfo.openId;
                            InviteManager.getInstance().judgeInvite();
                            platform.onShareAppMessage(function () {
                                return MiniManeger.instance.defaultMssage;
                            });
                            return [2, info];
                    }
                });
            });
        };
        MiniTTGameManager.prototype.userButtonSize = function (percentTop, pectendSize, percentLeft) {
            var resInfo = platform.getSystemInfoSync();
            var left = resInfo['windowWidth'] * percentLeft;
            var top = resInfo['windowHeight'] * percentTop;
            var wid = resInfo['windowWidth'] * pectendSize;
            var height = resInfo['windowHeight'] * pectendSize;
        };
        MiniTTGameManager.prototype.onShow = function (callBack) {
            var _this = this;
            platform.onShow(function () {
                callBack && callBack();
                _this.showTime = new Date().getTime();
                if (_this.showTime - _this.hideTime >= _this.sucTime) {
                    _this.shareSucful && _this.shareSucful.call(_this.thisObj);
                }
                else {
                    _this.shareFailful && _this.shareFailful.call(_this.thisObj);
                }
                _this.shareFailful = null;
                _this.shareFailful = null;
                _this.thisObj = null;
                EventMgr.getInstance().sendEvent(GameConst.ONSHOW);
            });
        };
        MiniTTGameManager.prototype.onHide = function (callBack) {
            var _this = this;
            platform.onHide(function () {
                callBack && callBack();
                _this.hideTime = new Date().getTime();
                EventMgr.getInstance().sendEvent(GameConst.ONHIDE);
            });
        };
        MiniTTGameManager.prototype.onAudioInterruptionBegin = function (callBack) {
            platform.onAudioInterruptionBegin(function () {
                callBack && callBack();
            });
        };
        MiniTTGameManager.prototype.onAudioInterruptionEnd = function (callBack) {
            platform.onAudioInterruptionEnd(function () {
                callBack && callBack();
            });
        };
        MiniTTGameManager.prototype.getUpdateManager = function () {
            platform.getUpdateManager();
        };
        MiniTTGameManager.prototype.getShareInfo = function (query) {
            var shareInfo = this.shareInfo;
            var info = shareInfo[Math.floor(Math.random() * shareInfo.length)];
            if (query) {
                var openId = GameData.getInstance().userInfo.openId;
                query['openid'] = openId;
            }
            info.query = Utils.querStr(query);
            return info;
        };
        MiniTTGameManager.prototype.shareAppMessage = function (data) {
            if (data == null) {
                data = {};
            }
            this.shareSucful = data.sucFun;
            this.shareFailful = function () {
                TipsManager.getInstance().showDefaultTips('分享失败，请分享到群里');
                data.failFun && data.failFun();
                ;
            };
            this.thisObj = data.thisObj;
            this.sucTime = data.time || 0;
            if (!data.message) {
                data.message = this.getShareInfo({});
            }
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                platform.shareAppMessage(data.message);
            }
            else {
            }
        };
        MiniTTGameManager.prototype.playViderAd = function (data) {
            if (!DeviceUtil.isTTMiniGame()) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.successFun && data.successFun();
                return;
            }
            var videoId = GameData.getInstance().videoId;
            if (data.isLongVideo) {
                videoId = GameData.getInstance().longVideoId;
            }
            if (videoId.length <= 0) {
                TipsManager.getInstance().showDefaultTips('开发中');
                data.errorFun && data.errorFun();
                return;
            }
            platform.showLoading({ title: '广告加载中', mask: true });
            var adId = videoId[Math.floor(Math.random() * videoId.length)];
            platform.createRewardedVideoAd(adId, function (res) {
                if (res.isEnded) {
                    data.successFun && data.successFun();
                    SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                }
                else {
                    data.failFun && data.failFun();
                    SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                }
                platform.hideLoading({});
            }, function () {
                platform.hideLoading({});
                TipsManager.getInstance().showDefaultTips('网络错误');
                data.errorFun && data.errorFun();
            });
        };
        MiniTTGameManager.prototype.showBannerAd = function (offset) {
            if (!DeviceUtil.isTTMiniGame()) {
                return;
            }
            if (MiniManeger.instance.appName() == "Douyin") {
                if (MiniManeger.instance.moreSomeAppInfos != null && MiniManeger.instance.moreSomeAppInfos.length > 0) {
                    this.douyinBanner = Laya.stage.getChildByName('DouyinBanner');
                    if (this.douyinBanner == null) {
                        this.douyinBanner = new DouyinBanner();
                        this.douyinBanner.name = 'DouyinBanner';
                    }
                    else {
                        this.douyinBanner.removeSelf();
                    }
                    this.douyinBanner.bottom = 30;
                    var phone = MiniManeger.instance.systemInfo;
                    if (offset) {
                        var wids = offset.w / phone.screenWidth * Laya.stage.width;
                        this.douyinBanner.x = wids - this.douyinBanner.width / 2;
                    }
                    else {
                        this.douyinBanner.x = Laya.stage.width - this.douyinBanner.width / 2;
                    }
                    Laya.stage.addChild(this.douyinBanner);
                }
                return;
            }
            this.canShowBanner = true;
            var bannerId = GameData.getInstance().bannerId;
            if (bannerId.length <= 0) {
                return;
            }
            var adId = bannerId[Math.floor(Math.random() * bannerId.length)];
            if (this.bannerAd == null) {
                var bannerAd = platform.createBannerAd(adId);
                if (bannerAd == null)
                    return;
                this.bannerAd = bannerAd;
                bannerAd.show();
            }
            this.bannerAd.show();
            if (!this.canShowBanner) {
                this.bannerAd.hide();
            }
            if (offset) {
                this.bannerAd.style.left = offset.w - this.bannerAd.style.width / 2 + 0.1;
                offset.callback && offset.callback();
            }
        };
        MiniTTGameManager.prototype.hideBanner = function () {
            if (this.bannerAd != null) {
                this.bannerAd.hide();
            }
            if (MiniManeger.instance.appName() == "Douyin") {
                if (this.douyinBanner != null) {
                    this.douyinBanner.removeSelf();
                }
            }
            this.canShowBanner = false;
        };
        MiniTTGameManager.prototype.vibrateShort = function (data) {
            if (!SoundUtil.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                platform.vibrateShort(data);
            }
        };
        MiniTTGameManager.prototype.vibrateLong = function () {
            if (!SoundUtil.getInstance().shakeIsOpen)
                return;
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isTTMiniGame()) {
                platform.vibrateLong();
            }
        };
        MiniTTGameManager.prototype.adaptImgToClientRect = function (collec_img, stage) {
            if (DeviceUtil.isTTMiniGame()) {
                var systemInfo = platform.getSystemInfoSync();
                var screenHeight = systemInfo['screenHeight'];
                var screenWidth = systemInfo['screenWidth'];
                var rect = platform.getMenuButtonBoundingClientRect();
                collec_img.top = stage.height * (rect['top'] / screenHeight);
                collec_img.right = stage.width * (1 - rect['right'] / screenWidth) + collec_img.width;
            }
        };
        MiniTTGameManager.prototype.sendDataToWxOpen = function (data) {
            Laya.MiniAdpter.window.wx.postMessage(data);
        };
        MiniTTGameManager.prototype.removeOpenData = function (data) {
            var wxOpenData = data.parent.getChildByName('wxOpenData');
            this.sendDataToWxOpen({ cmd: 'close', data: null });
            if (wxOpenData) {
                wxOpenData.removeSelf();
                wxOpenData.destroy();
                wxOpenData = null;
            }
        };
        MiniTTGameManager.prototype.addOpenWxData = function (data) {
            var shareData = MiniManeger.instance.getShareInfo({ id: GameData.getInstance().userInfo.openId });
            this.sendDataToWxOpen({ cmd: 'share', data: JSON.stringify(shareData) });
            var wxOpenData = data.parent.getChildByName('wxOpenData');
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
            }
            else {
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
        };
        return MiniTTGameManager;
    }(MiniManeger));

    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            var _this = _super.call(this, { width: 1920, height: 1080, exportSceneToJson: true }) || this;
            GameConfig.init();
            if (MiniManeger.ins == null) {
                if (DeviceUtil.isWXMiniGame()) {
                    MiniManeger.ins = new MiniWeChatGameManager();
                }
                else if (DeviceUtil.isTTMiniGame()) {
                    MiniManeger.ins = new MiniTTGameManager();
                }
                else {
                    MiniManeger.ins = new MiniWeChatGameManager();
                }
            }
            _this.checkPlatform();
            var onShow = function (obj) {
                console.log("onShow");
                SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
                if (obj) {
                    console.log("QQ onShow obj = ", obj);
                }
            };
            var onHide = function () {
                console.log("onHide");
                SoundManager.getInstance().stopBgMusic();
            };
            var onAudioInterruptionBegin = function (res) {
                console.log("onAudioInterruptionBegin");
                SoundManager.getInstance().stopBgMusic();
            };
            var onAudioInterruptionEnd = function (res) {
                console.log("onAudioInterruptionEnd");
                SoundManager.getInstance().playBgMusic(SoundManager.getInstance().curBgMusic);
            };
            if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
                GameData.getInstance().enterGameInfo = platform.getLaunchOptionsSync();
                MiniManeger.instance.onShow(onShow);
                MiniManeger.instance.onHide(onHide);
                MiniManeger.instance.onAudioInterruptionBegin(onAudioInterruptionBegin);
                MiniManeger.instance.onAudioInterruptionEnd(onAudioInterruptionEnd);
                MiniManeger.instance.initMiniGame();
            }
            else {
                onShow(null);
            }
            return _this;
        }
        Main.prototype.checkPlatform = function () {
            console.log("检验平台---");
            var self = this;
            if (window["loadingH5"]) {
                window["loadingH5"](100);
            }
            var resUrl = "./";
            var fileLocalList = [
                "resource/assets/loading/loading_bg.jpg",
                "resource/assets/loading/loading2.png",
                "resource/assets/loading/loading1.png",
                "resource/assets/loading/loading6.png",
            ];
            GameData.getInstance().gameVersion = 1001;
            if (DeviceUtil.isQQMiniGame()) {
                Laya.timer.once(10000, this, function () {
                    console.log("加速回收---");
                    platform.triggerGC();
                });
            }
            else if (DeviceUtil.isWXMiniGame()) {
                Laya.timer.once(10000, this, function () {
                    console.log("加速回收---");
                    platform.triggerGC();
                });
                GameData.getInstance().gameVersion = 1001;
                GameData.getInstance().resVersion = '2_1/';
                GameData.getInstance().MinigameResUrlRoot += "wx_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "wx_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
                Laya.MiniAdpter.init();
                Laya.MiniAdpter.nativefiles = fileLocalList;
                self.initDebug();
                self.loadPreLoadRes(resUrl + "configs/");
            }
            else if (DeviceUtil.isTTMiniGame()) {
                Laya.timer.once(10000, this, function () {
                    console.log("加速回收---");
                    platform.triggerGC();
                });
                GameData.getInstance().gameVersion = 1002;
                GameData.getInstance().resVersion = '1_5/';
                GameData.getInstance().MinigameResUrlRoot += "tt_res/";
                GameData.getInstance().MinigameResAllUrl = GameData.getInstance().MinigameResUrlRoot + "tt_res_v_z_" + GameData.getInstance().resVersion;
                resUrl = GameData.getInstance().MinigameResAllUrl;
                ResUtil.getIntance().defaultOriginUrl = resUrl;
                ResUtil.getIntance().addVersionPrefix(resUrl);
                Laya.MiniAdpter.init();
                Laya.MiniAdpter.nativefiles = fileLocalList;
                self.initDebug();
                self.loadPreLoadRes(GameData.getInstance().MinigameResUrlRoot);
            }
            else {
                var openId = Laya.LocalStorage.getItem("openId");
                if (openId) {
                    GameData.getInstance().userInfo.openId = openId;
                    GameData.getInstance().userInfo.nick = openId;
                }
                else {
                    openId = "cat" + Utils.getRandom(10000, 99999);
                    GameData.getInstance().userInfo.openId = openId;
                    GameData.getInstance().userInfo.nick = openId;
                    Laya.LocalStorage.setItem("openId", openId);
                }
                self.initDebug();
                self.loadPreLoadRes(resUrl + 'configs/');
            }
        };
        Main.prototype.loadPreLoadRes = function (resUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var url;
                return __generator(this, function (_a) {
                    console.log("加载预加载资源--");
                    url = resUrl;
                    _super.prototype.initInfos.call(this, (url + "infos.json" + GameMgr.getInstance().randomVersion));
                    return [2];
                });
            });
        };
        Main.prototype.enableFileConfig = function () {
            var _this = this;
            if (DeviceUtil.isTTMiniGame()) {
                MiniManeger.instance.moreSomeAppInfos = [];
                var res = [
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
                ];
                for (var i = 0, len = res.length; i < len; i++) {
                    if (res[i].appid != "tt9c09eab4032391c1") {
                        MiniManeger.instance.moreSomeAppInfos.push(res[i]);
                    }
                }
            }
            console.log(BaseConst.infos);
            var gameInfoDatas = BaseConst.infos;
            GameData.getInstance().initConfig(gameInfoDatas);
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, function () { return __awaiter(_this, void 0, void 0, function () {
                var info_1, self_1, enter_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame())) return [3, 6];
                            console.log("开始登录");
                            self_1 = this;
                            enter_1 = function (isCreate) {
                                if (isCreate === void 0) { isCreate = false; }
                                return __awaiter(_this, void 0, void 0, function () {
                                    var userInfo;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (isCreate) {
                                                    self_1.loadRes();
                                                    return [2];
                                                }
                                                if (DeviceUtil.isWXMiniGame()) {
                                                    console.log("登陆信息:", info_1);
                                                    GameData.getInstance().userInfo.openId = info_1.openid;
                                                    GameData.getInstance().userInfo.sessionKey = info_1.session_key;
                                                    console.log("用户信息 : ", GameData.getInstance().userInfo);
                                                }
                                                if (!DeviceUtil.isTTMiniGame()) return [3, 2];
                                                return [4, platform.getUserInfo()];
                                            case 1:
                                                userInfo = _a.sent();
                                                console.log("getUserInfo:", userInfo);
                                                GameData.getInstance().userInfo.nick = userInfo.nickName;
                                                GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
                                                console.log("授权用户信息 : ", GameData.getInstance().userInfo);
                                                return [3, 3];
                                            case 2:
                                                MiniManeger.instance.initUserInfo();
                                                _a.label = 3;
                                            case 3:
                                                self_1.loadRes();
                                                return [2];
                                        }
                                    });
                                });
                            };
                            if (!DeviceUtil.isTTMiniGame()) return [3, 1];
                            platform.checkSession({
                                success: function () {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var userInfo;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4, platform.getUserInfo()];
                                                case 1:
                                                    userInfo = _a.sent();
                                                    console.log("getUserInfo:", userInfo);
                                                    if (userInfo) {
                                                        GameData.getInstance().userInfo.nick = userInfo.nickName;
                                                        GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
                                                        enter_1(true);
                                                    }
                                                    else {
                                                        enter_1(true);
                                                    }
                                                    console.log("session\u672A\u8FC7\u671F");
                                                    return [2];
                                            }
                                        });
                                    });
                                },
                                fail: function () {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var userInfo;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log("session\u5DF2\u8FC7\u671F\uFF0C\u9700\u8981\u91CD\u65B0\u767B\u5F55");
                                                    return [4, platform.login()];
                                                case 1:
                                                    info_1 = _a.sent();
                                                    if (info_1 == null) {
                                                        enter_1(true);
                                                        return [2];
                                                    }
                                                    info_1 = JSON.parse(info_1);
                                                    return [4, platform.getUserInfo()];
                                                case 2:
                                                    userInfo = _a.sent();
                                                    console.log("getUserInfo:", userInfo);
                                                    if (userInfo) {
                                                        GameData.getInstance().userInfo.nick = userInfo.nickName;
                                                        GameData.getInstance().userInfo.avatarUrl = userInfo.avatarUrl;
                                                        enter_1(true);
                                                    }
                                                    else {
                                                        enter_1(true);
                                                    }
                                                    return [2];
                                            }
                                        });
                                    });
                                }
                            });
                            return [3, 5];
                        case 1: return [4, DYChannelMgr.instance.loginGame()];
                        case 2:
                            info_1 = _a.sent();
                            if (!!info_1) return [3, 4];
                            return [4, platform.login()];
                        case 3:
                            info_1 = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (info_1 == null) {
                                self_1.enableFileConfig();
                                return [2];
                            }
                            enter_1();
                            _a.label = 5;
                        case 5: return [3, 7];
                        case 6:
                            this.loadRes();
                            _a.label = 7;
                        case 7: return [2];
                    }
                });
            }); }));
        };
        Main.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var resUrl, loadresUrl, strogeVersion, resArr, dataArr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GameMgr.getInstance().loadingView = new GameLoadingView();
                            SceneManager.getInstance().openSceneInstance(GameMgr.getInstance().loadingView);
                            MiniManeger.instance.showBannerAd(null);
                            MiniManeger.instance.hideBanner();
                            console.log("loadRes---");
                            resUrl = "";
                            loadresUrl = GameData.getInstance().MinigameResAllUrl;
                            if (!DeviceUtil.isNative()) return [3, 3];
                            return [4, ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json")];
                        case 1:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json")];
                        case 2:
                            _a.sent();
                            return [3, 12];
                        case 3:
                            if (!(DeviceUtil.isWXMiniGame() || DeviceUtil.isQQMiniGame())) return [3, 6];
                            return [4, ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + GameMgr.getInstance().randomVersion)];
                        case 4:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + GameMgr.getInstance().randomVersion)];
                        case 5:
                            _a.sent();
                            return [3, 12];
                        case 6:
                            if (!DeviceUtil.isTTMiniGame()) return [3, 9];
                            return [4, ResUtil.getIntance().loadThms(loadresUrl + "resource/default.thm.json" + GameMgr.getInstance().randomVersion)];
                        case 7:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(loadresUrl + "resource/default.res.json" + GameMgr.getInstance().randomVersion)];
                        case 8:
                            _a.sent();
                            return [3, 12];
                        case 9: return [4, ResUtil.getIntance().loadThms(resUrl + "resource/default.thm.json")];
                        case 10:
                            _a.sent();
                            return [4, ResUtil.getIntance().loadRESConfig(resUrl + "resource/default.res.json")];
                        case 11:
                            _a.sent();
                            _a.label = 12;
                        case 12:
                            GameMgr.getInstance().registerBufferLoading();
                            strogeVersion = Laya.LocalStorage.getItem('strogeVersion');
                            if (GameData.getInstance().strogeVersion != strogeVersion) {
                                Laya.LocalStorage.clear();
                            }
                            Laya.LocalStorage.setItem('strogeVersion', GameData.getInstance().strogeVersion);
                            return [4, GameInfoManager.getInstance().selectAllGameInfo()];
                        case 13:
                            _a.sent();
                            GameManager.instance.playerGuide = GameData.getInstance().playerData.playerGuide;
                            if (GameData.getInstance().playerData.lotteryData == null) {
                                GameData.getInstance().playerData.lotteryData = { count: 1, time: new Date().getTime() };
                            }
                            return [4, ConfigManager.getInstance().initConfigs()];
                        case 14:
                            _a.sent();
                            resArr = ["preload", "home"];
                            return [4, DungeonManager.instance.getLevelData()];
                        case 15:
                            dataArr = _a.sent();
                            DungeonManager.instance.curLevelData = dataArr[0];
                            if (GameManager.instance.playerGuide == 1) {
                                this.enterGame(resArr);
                            }
                            else {
                                GameData.getInstance().playerData.playerGuide = 4;
                                this.enterHome(resArr);
                            }
                            return [2];
                    }
                });
            });
        };
        Main.prototype.enterGame = function (resArr) {
            var _this = this;
            resArr.push("game", "gamePublic");
            ResUtil.getIntance().loadGroups(resArr, function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("res load completed!!!");
                            return [4, TaskManager.instance.initTaskData()];
                        case 1:
                            _a.sent();
                            return [4, ConfigManager.getInstance().initGameConfigs()];
                        case 2:
                            _a.sent();
                            GameManager.instance.gameModel = GameModel.Adventure;
                            GameManager.instance.gameAttackModel = GameAttackModel.MANUAL;
                            GameMgr.getInstance().initTopBar();
                            SceneManager.getInstance().openGameScene(GameAdventureScene, '');
                            if (GameData.getInstance().playerData.playerGuide == 1) {
                                GameData.getInstance().playerData.playerGuide = 4;
                                GameInfoManager.getInstance().saveInfo(GameConst.BASE_INFO);
                            }
                            else {
                                GameData.getInstance().playerData.playerGuide = 4;
                            }
                            GameMgr.getInstance().loadingView.remove();
                            return [2];
                    }
                });
            }); }, function (index, len) {
                GameMgr.getInstance().loadingView.progress(index, len);
            });
        };
        Main.prototype.enterHome = function (resArr) {
            var _this = this;
            resArr.push("config", "iconBox", "public");
            ResUtil.getIntance().loadGroups(resArr, function () { return __awaiter(_this, void 0, void 0, function () {
                var homeView;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("res load completed!!!");
                            return [4, TaskManager.instance.initTaskData()];
                        case 1:
                            _a.sent();
                            SceneManager.getInstance().openGameScene(HomeScene);
                            homeView = SceneManager.getInstance().currentScene;
                            homeView.displayMainView();
                            GameMgr.getInstance().loadingView.remove();
                            return [2];
                    }
                });
            }); }, function (index, len) {
                GameMgr.getInstance().loadingView.progress(index, len);
            });
        };
        return Main;
    }(BaseContent));
    new Main();

}());
