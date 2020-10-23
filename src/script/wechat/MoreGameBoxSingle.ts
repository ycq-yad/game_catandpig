import DYChannelMgr from "../manager/channel/DYChannelMgr";
import { MainGameItem2 } from "./MainGameItem2";

export class MoreGameBoxSingle extends Laya.Box {
    className_key = "MoreGameBoxSingle";


    private data: { len: number }
    public constructor(data: { len: number }) {
        super();
        this.data = data;
        this.initView();
    }

    private itemW: number = 250;


    private initView() {
        this.width = this.itemW;
        this.height = (this.itemW + 20) * this.data.len;
        this.initItem();
    }

    private initItem() {
        let dataArr = DYChannelMgr.instance.moreGameList;
        Utils.upset(dataArr);
        for (let i: number = 0; i < this.data.len; i++) {
            let data = dataArr[i];
            let item: MainGameItem2 = new MainGameItem2(data);
            item.setData(data);
            item.y = (this.itemW + 20) * i;
            this.addChild(item);
        }

        Laya.timer.once(1000, this, this.initItem)
    }

    /**
     * 
     */
    public onDisable() {
        Laya.timer.clearAll(this);
    }
}