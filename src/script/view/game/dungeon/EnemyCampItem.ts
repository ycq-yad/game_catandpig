/**
* 敌方阵营item
*/
export default class EnemyCampItem extends BaseSceneUISkin {
    public className_key = "EnemyCampItem";

    private img_icon: Laya.Image;
    private lab_num: Laya.Label;

    public data: { id: number, num: number, x: number, y: number };

    constructor(_data: { id: number, num: number, x: number, y: number }) {
        super();
        this.data = _data;
        this.skin = "game/dungeon/EnemyCampItem.json";
    }

    protected childrenCreated() {
        super.childrenCreated();
    }

    protected adaptationStage() {
        this.size(300, 300);
        this.scale(0.85, 0.85);
    }

    public onAddStage() {
        if (this.isCreate) {
            this.initView();
            this.addEvent();
        }
    }

    /** 设置数据 */
    public setData(data: { id: number, num: number, x: number, y: number }) {
        this.data = data;
        if (this.isCreate) {
            this.initView();
        }
    }

    /** 添加事件 */
    private addEvent() {

    }

    /** 初始化页面 */
    private async initView() {
        if (!this.data) return;
        let data = this.data;
        this.pos(data.x, data.y);
        this.lab_num.text = data.num + "";
        this.img_icon.skin = "resource/assets/img/icon/pig/pig_" + data.id + ".png";
    }

    /** 移除事件 */
    private removeEvent() {
    }

    /**
     * 当从父节点移除时候
     */
    public onRemoved() {
        super.onRemoved();
        this.removeEvent();
        this.data = null;
    }
}