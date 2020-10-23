import DYChannelMgr, { MoreGameInfo } from "../manager/channel/DYChannelMgr";
import { PopBaseScene } from "../view/PopBaseScene";
import { MainGameItem2 } from "./MainGameItem2";
import { WechatBoxUI2 } from "./WechatBoxUI2";

export class WechatBoxUI4 extends PopBaseScene {
    className_key = 'WechatBoxUI4';

    public viewData_: { closeFun: Function };

    public bnt_next: Laya.Image;
    public btn_back: Laya.Image;

    public panel_list: Laya.Panel;

    public constructor() {
        super();
        this.skin = "platform/dy/wechat/WechatBoxUI4.json";
    }

    public addEvent() {
        this.panel_list.on(Laya.Event.MOUSE_DOWN, this, this.onMousedown);
        this.btn_back.on(Laya.Event.MOUSE_DOWN, this, this.onBack);
        this.bnt_next.on(Laya.Event.MOUSE_DOWN, this, this.onClick);

    }
    private onClick() {
        //随机打开
        DYChannelMgr.instance.randomOpenGame();

    }

    private onBack() {
        // this.viewData_.closeFun && this.viewData_.closeFun();
        // this.removeSelf();
        ViewManager.getInstance().showView(WechatBoxUI2, this.viewData_);
        this.removeSelf();

    }


    private dataArr: Array<MoreGameInfo>;
    private maxCount: number;
    private itemW: number = 200;
    private autoMove: boolean = true;
    private speed: number = 2;
    private dir: number = -1;
    public initView() {
        Laya.timer.clearAll(this);
        this.dataArr = DYChannelMgr.instance.moreGameList;
        console.log(this.dataArr);
        //初始化条目
        let didnex: number = 0;
        this.panel_list.removeChildren();
        for (let i: number = 0; i < this.maxCount + 1; i++) {
            let data = this.dataArr[didnex]
            let item: MainGameItem2 = new MainGameItem2(data);
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
        // 每次使用后刷新下游戏列表
        DYChannelMgr.instance.refreshGameList();

        DYChannelMgr.instance.randomOpenGame();
    }


    private onMove(dt): void {
        if (!this.autoMove) return;
        for (let i: number = 0; i < this.panel_list.numChildren; i++) {
            let item: MainGameItem2 = <MainGameItem2>this.panel_list.getChildAt(i);
            item.x += this.speed * this.dir;
        }
        this.refresh();
    }


    private refresh() {
        let startItem: MainGameItem2 = <MainGameItem2>this.panel_list.getChildAt(0);
        let lastItem: MainGameItem2 = <MainGameItem2>this.panel_list.getChildAt(this.maxCount);
        if (this.dir == -1) {//向坐
            if (startItem.x < -this.itemW) {
                startItem.x = lastItem.x + lastItem.width;
                startItem.zOrder = lastItem.zOrder + 1;
                startItem.index = this.getDownIndexforCurIndex(lastItem.index);
                startItem.setData(this.dataArr[startItem.index]);
            }
        } else {//向下
            if (lastItem.x > this.maxCount * this.itemW) {
                lastItem.x = startItem.x - startItem.height;
                lastItem.zOrder = startItem.zOrder - 1;
                lastItem.index = this.getUpIndexforCurIndex(startItem.index);
                lastItem.setData(this.dataArr[lastItem.index]);
            }
        }
    }
    private getUpIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index - 1 >= 0 ? index - 1 : this.dataArr.length - 1;
    }

    private getDownIndexforCurIndex(index: number): number {
        if (index >= this.dataArr.length || index < 0) return 0;
        return index + 1 < this.dataArr.length ? index + 1 : 0;
    }

    private stx: number;
    private sty: number;
    private onMousedown(evt: Laya.Event) {
        this.autoMove = false;
        this.stx = evt.stageX;
        this.sty = evt.stageY;

        let mouseMove = (evt1: Laya.Event) => {
            let dx: number = evt1.stageX - this.stx;
            for (let i: number = 0; i < this.panel_list.numChildren; i++) {
                let item: MainGameItem2 = <MainGameItem2>this.panel_list.getChildAt(i);
                item.x += dx;
            }
            this.stx = evt1.stageX;
            this.dir = dx > 0 ? 1 : -1;
            this.refresh();
        }
        let mouseUp = (evt1: Laya.Event) => {
            this.panel_list.off(Laya.Event.MOUSE_MOVE, this, mouseMove);
            this.panel_list.off(Laya.Event.MOUSE_UP, this, mouseUp);
            this.panel_list.off(Laya.Event.MOUSE_OUT, this, mouseUp);
            this.dir = -1;
            this.autoMove = true;
        }
        this.panel_list.on(Laya.Event.MOUSE_MOVE, this, mouseMove);
        this.panel_list.on(Laya.Event.MOUSE_UP, this, mouseUp);
        this.panel_list.on(Laya.Event.MOUSE_OUT, this, mouseUp);
    }
}