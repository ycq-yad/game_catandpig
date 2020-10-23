import { PigPlayer } from "./PigPlayer";

export default class PigMove extends Laya.Script {


    constructor() { super(); }

    onEnable(): void {
    }

    onDisable(): void {
    }
    public pigPlayer: PigPlayer;

    onAwake() {
        super.onAwake();
        this.pigPlayer = this.owner as PigPlayer;

    }
    public onUpdate() {
        if (this.pigPlayer) {
            this.pigPlayer.update();
        }
    }
}