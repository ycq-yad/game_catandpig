import AnimationManager from "../../../manager/AnimationManager";

export class ShipBlood extends BaseSceneUISkin {
    className_key = "ShipBlood";
    public viewData_: { total: number, cur: number }
    public constructor(data: { total: number, cur: number }) {
        super(data);
        this.skin = 'game/blood/ShipBlood.json';
    }
    public txt_blood: Laya.Box;

    public box_flag: Laya.Box;
    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initView();
        }
    }



    public async  initView() {
        // this.txt_blood;

        let boomAnimation = await this.createSkeleton("resource/assets/img/ani/ship/flag.sk");
        boomAnimation.x = boomAnimation.width / 2;
        boomAnimation.y = boomAnimation.height;
        this.flag = boomAnimation;
        this.box_flag.addChild(this.flag);
        BitmapLabelUtils.setLabel(this.txt_blood, this.viewData_.cur + '', "resource/assets/img/game/sz/", 0)
    }
    public updateBlood(data: { cur: number, total: number }) {
        // this.txt_blood;
        if (data.cur <= 0) {
            data.cur = 0;
        }
        BitmapLabelUtils.setLabel(this.txt_blood, data.cur + '', "resource/assets/img/game/sz/", 0)
    }

    public flag: Laya.Skeleton
    /**
   * 创建动画
   * @param url 
   */
    public async  createSkeleton(url: string): Promise<Laya.Skeleton> {
        return new Promise<Laya.Skeleton>((resolve) => {
            if (url == null) {
                url = "resource/assets/img/ani/cat/cat1.sk";
            }
            AnimationManager.instance.showSkeletonAnimation(url, (boomAnimation: Laya.Skeleton) => {
                if (boomAnimation == null) resolve(boomAnimation);
                boomAnimation.player.playbackRate = 1;
                // boomAnimation.player.once(Laya.Event.COMPLETE, self, () => {
                //     console.log("播放完成",boomAnimation);
                //     if (boomAnimation) {
                //         boomAnimation.removeSelf();
                //         boomAnimation.destroy();
                //     }
                //     boomAnimation = null;
                // });
                boomAnimation.scale(1, 1);
                boomAnimation.autoSize = true;
                // let index = boomAnimation.getAniNameByIndex("daiji")
                // boomAnimation.play(5, true)
                console.log("aniNum =", boomAnimation.getAnimNum(), boomAnimation.width, boomAnimation.height);

                // console.log(boomAnimation.width, boomAnimation.height)
                // boomAnimation.play(0, true);
                // let test = boomAnimation.getSlotByName('qiang-k');
                // console.log(test.getMatrix())

                // 

                resolve(boomAnimation)
            }, 1);
        })

    }
}