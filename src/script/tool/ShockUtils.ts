
/**
 * 
 * 震动
 * MAP 是上下左右震动     SPRITE 是左右震动   
 */
export class ShockUtils {
    constructor() {
    }
    public static instance: ShockUtils;

    public static geyInstance(): ShockUtils {
        if (this.instance == null) this.instance = new ShockUtils();
        return this.instance;
    }
    /**
     * 震动等级
     */
    public shockLevel = 1;
    public MAP: number = 0;
    public SPRITE: number = 1;
    private mapPoss: Array<any> = [new Laya.Point(0, 3), new Laya.Point(3, 2), new Laya.Point(-3, -2)];
    private spritePoss: Array<any> = [new Laya.Point(5, 0), new Laya.Point(-5, 0), new Laya.Point(5, 0)];
    private _shockPoss: Array<any>;
    private _shockLength: number = 0;
    private _shockCount: number = 0;
    public _target: Laya.Sprite;
    private _rx: number = 0;
    private _ry: number = 0;
    private _type: number = 0;

    private _repeatCount: number = 0;

    public destroy(): void {
        this.stop();
        this._target = null;
    }
    public shock(type: number = 0): void {
        this._type = type;
        if (this._type == this.MAP) {
            this._shockPoss = this.mapPoss.concat();
            this._shockLength = this._shockPoss.length;
        }
        else if (this._type == this.SPRITE) {
            this._shockPoss = this.spritePoss.concat();
            this._shockLength = this._shockPoss.length;
        }
    }
    public start(num: number = 1): void {
        this.stop();
        this.repeatCount = num;
        this._shockCount = 0;
        if (this._target) {
            this._rx = this._target.x;
            this._ry = this._target.y;
            //   Laya.Ticker.getInstance().register(this.onShockEnter, this);
            Laya.timer.frameLoop(1, this, this.onShockEnter);
        }
    }
    public stop(): void {
        if (this._target) {
            this._target.x = this._rx;
            this._target.y = this._ry;
            // Laya.Ticker.getInstance().unregister(this.onShockEnter, this);
            Laya.timer.clear(this, this.onShockEnter);
        }
    }
    private onShockEnter(e: Event): void {
        var maxCount: number = this._shockLength * this._repeatCount;
        if (this._shockCount >= maxCount) {
            this.stop();
            return;
        }
        var index: number = this._shockCount % this._shockLength;
        var pos: Laya.Point = this._shockPoss[index];
        if (this._target) {
            this._target.x = this._rx + pos.x*this.shockLevel;
            this._target.y = this._ry + pos.y*this.shockLevel;
        }
        this._shockCount++;
    }
    public get repeatCount(): number {
        return this._repeatCount;
    }
    public set repeatCount(value: number) {
        this._repeatCount = value;
    }
}