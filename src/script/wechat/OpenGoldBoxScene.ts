import { GameManager } from "../manager/GameManager";
import { PopBaseScene } from "../view/PopBaseScene";
import { MoreGameBoxSingle } from "./MoreGameBoxSingle";

export class OpenGoldBoxScene extends PopBaseScene {
    className_key = "OpenGoldBoxScene";
    public viewData_: { closeFun: Function };
        public constructor(data:{ closeFun: Function }) {
        super();
        this.skin = "platform/dy/wechat/OpenGoldBoxScene.json";

    }
    public grp_center: Laya.Box;
    public btn_click: Laya.Button;
    public icon_bar1: Laya.Image;


    public initView() {
        this.clickIndex = 0;
        this.isShowBanner = false;
        this.showMoreGameBoxSingle();
    }

    public addEvent() {
        this.btn_click.on(Laya.Event.CLICK, this, this.onClick)
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


    private clickIndex = 0;
    private onClick(evt: Laya.Event) {
        this.clickIndex++;
        this.clickObj[this.clickIndex] = Date.now();
        this.checkQuickClick();
        if (this.clickIndex == 10) {
            this.showGBanner();
        }
    }


    private clickObj: any = {};
    private checkQuickClick() {
        if (this.clickIndex < 3) return;
        let time1 = this.clickObj[this.clickIndex];
        let time2 = this.clickObj[(this.clickIndex - 3)];
        if (time1 - time2 < 1000) {
            this.showGBanner()
        }
    }

    private showGBanner() {
        if (this.isShowBanner) return;
        this.isShowBanner = true;
        this.showBanner();
        Laya.timer.once(2000, this, this.onClose)
    }
    private onClose() {
        this.removeSelf();
    }

    private isShowBanner: boolean = false;

}