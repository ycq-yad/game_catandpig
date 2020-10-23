import { EventObj } from "./BaseUIScene";


export class PopBaseScene extends BaseSceneUISkinPopView {
    className_key = 'PopBaseScene';
    protected showEnterType: BasePopAnimationEnterType = BasePopAnimationEnterType.SCALE_MODE_BACK_MORE;
    public grp_center: Laya.Box;

    public onAddStage() {
        super.onAddStage();
        if (this.isCreate) {
            this.initMiniGame();
            this.initView();
            this.addEvent();
        }
        this.off(Laya.Event.ADDED, this, this.onAddStage);
    }

    public initMiniGame() {
        this.showBanner();
    }

    public setData(data: any) {
        this.viewData_ = data;
        if (this.isCreate) {
            this.initMiniGame();
            this.initView();
            this.addEvent();
            this.showEnterAnimation();

        }
    }

    public initView() { }

    public addEvent() { }

    public removeSelf() {
        let node = super.removeSelf();
  
        return node;
    }

    private eventPool: Array<EventObj> = [];
    protected registerEvent(target: Laya.Sprite, type: any, callbackobj: any, callback: Function, args?: any[]) {
        target.on(type, callbackobj, callback, args);
        this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
    }
    /**注册事件 会在dispose时自动移除 */
    protected registerOnceEvent(target: Laya.Sprite, type: any, callbackobj: any, callback: Function, args?: any[]) {

        target.once(type, callbackobj, callback, args);
        this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
    }
    /**移除全部事件 */
    public clearEvent() {
        let eventPool = this.eventPool
        if (eventPool.length > 0) {
            for (let i = 0; i < this.eventPool.length; i++) {
                let target = eventPool[i].target;
                let type = eventPool[i].type;
                let callback = eventPool[i].callback;
                let callbackobj = eventPool[i].callbackobj;
                if (target) {
                    target.off(type, callbackobj, callback);
                }
            }
        }
        eventPool = [];
    }

    public onDisable() {
        this.removeEvent();
    }



    public onRemoved() {
        super.onRemoved();
        this.clearEvent();

    }
    public removeEvent() {
        this.clearEvent();
    }


    public showBanner() {
    }

    /**
     * 销毁banner
     */
    public destoryBanner() {

    }
    /**
     * 隐藏banner
     */
    public hideBanner() {

    }


}