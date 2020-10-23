/**
 * 玩家血量
 */
export class PlayerBlood extends BaseSceneUISkin {
    className_key = "PlayerBlood";

    public adaptationStage() {

    }
    public viewData_: { total: number, cur: number }
    public constructor(data: { total: number, cur: number }) {
        super(data);
        this.skin = 'game/blood/PlayerBlood.json';
    }

    public icon_blood: Laya.Image;
    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
        }
    }

    public initView() {
        this.icon_blood.width = 100 * (this.viewData_.cur / this.viewData_.total);
    }

    public updateBlood(data: { cur: number, total: number }) {
        if (data.cur <= 0) {
            data.cur = 0;
        }
        this.icon_blood.width = 100 * (data.cur / data.total);
    }

}