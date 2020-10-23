项目介绍
.H5小游戏框架
.作者：小明太极-衍生内容部-成都游戏部
.基础库完成时间:2020-10-23
.封装内容
H5小游戏框架,用于laya开发小游戏，集成了签到，邀请，关卡选择，成功和失败的结算界面，游戏导出界面。集成平台接入管理类（微信，qq，字节跳动等）。集成工具类（后台交互，音乐管理，和一些通用方法）。集成关卡实现的基类以及部分关卡逻辑 。 适用于二选一类型的探险小游戏。

二.使用说明
blib目录下是一些通用的工具代码，使用方法可以参考bLib.d.ts中的注释，也可以阅读bLib.js中的源码信息。 弹窗类继承BaseSceneUISkinPopView，场景类继承BaseSceneUISkin
HttpMgr.ts 网络处理工具
GameData.ts 处理游戏通用数据
GameDataManager.ts 处理玩家游戏数据
SoundManager.ts 音效管理
ConfigManager.ts 游戏配置加载
ViewChangeManager.ts 游戏特殊界面切换
GamePreLoadingView.ts 游戏加载界面
AnimationManager.ts 通用动画处理文件
InviteManager.ts 邀请数据管理
LevelManager.ts 通用关卡切换逻辑

view/game 下是游戏界面
游戏下分为两个模式

view/home 下是外围ui界面

award是奖励
commo公用界面
lottery是抽奖界面
relive是弹窗复活
set是设置
sign是签到
store是商店
task是任务
treasure是宝箱



bundle.js 完整编译后的文件
