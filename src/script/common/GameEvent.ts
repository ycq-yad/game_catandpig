export default class GameEvent {
    /** 游戏暂停 */
    public static GAME_PAUSE: string = "GAME_PAUSE";
    /** 游戏激活 */
    public static GAME_RESUME: string = "GAME_RESUME";
    /** 计时器通知 */
    public static TIME_METER: string = "TIME_METER";
    /** 刷新顶栏 */
    public static REFRESH_TOP: string = "REFRESH_TOP";
    /** 刷新任务列表 */
    public static REFRESH_TASK: string = "REFRESH_TASK";
    /** 刷新箱子列表 */
    public static REFRESH_BOX: string = "REFRESH_BOX";
    /** 显示主界面 */
    public static SHOW_MAIN: string = "SHOW_MAIN";
    /** 显示培养界面 */
    public static SHOW_REGATTA: string = "SHOW_REGATTA";
    /** 选中一个排名 */
    public static SELECT_RANK: string = "SELECT_RANK";



      /** 显示更多游戏抽屉 */
      public static SHOW_GAME_DRAWER: string = "SHOW_GAME_DRAWER";
      /** 隐藏更多游戏抽屉 */
      public static HIDE_GAME_DRAWER: string = "HIDE_GAME_DRAWER";
      /** 打开更多游戏抽屉 */
      public static OPEN_GAME_DRAWER: string = "OPEN_GAME_DRAWER";
      /** 显示更多游戏Banner */
      public static SHOW_GAME_BANNER: string = "SHOW_GAME_BANNER";
      /** 隐藏更多游戏Banner */
      public static HIDE_GAME_BANNER: string = "HIDE_GAME_BANNER";
      /** 打开更多游戏随机盒子 */
      public static OPEN_GAME_RANDOM: string = "OPEN_GAME_RANDOM";
      /** 打开更多游戏热门盒子 */
      public static OPEN_GAME_HOT: string = "OPEN_GAME_HOT";
      /** 打开更多游戏我的列表 */
      public static OPEN_GAME_LIST: string = "OPEN_GAME_LIST";
      /** 显示更多游戏页面内盒子 */
      public static SHOW_GAME_BOX: string = "SHOW_GAME_BOX";
      /** 隐藏更多游戏页面内盒子 */
      public static HIDE_GAME_BOX: string = "HIDE_GAME_BOX";
      /** 跳转到小游戏失败 */
      public static NAV_GAME_FAIL: string = "NAV_GAME_FAIL";
      /** 显示顶部退出按钮 */
      public static SHOW_EXIT_BTN: string = "SHOW_EXIT_BTN";
      /** 隐藏顶部退出按钮 */
      public static HIDE_EXIT_BTN: string = "HIDE_EXIT_BTN";
}
window['GameEvent'] = GameEvent;