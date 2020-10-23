/**
* 音频工具类
*/
export default class SoundUtil {

    private constructor() {
        // this.sufix = DeviceUtil.isNative() ? "_ogg" : "_mp3";
    }

    private static instance: SoundUtil;
    public static getInstance(): SoundUtil {
        if (!SoundUtil.instance) {
            SoundUtil.instance = new SoundUtil();
        }
        return SoundUtil.instance;
    }

    private _shakeIsOpen: boolean = true;
    /** 震动状态 */
    public set shakeIsOpen(isOpen: boolean) {
        this._shakeIsOpen = isOpen;
    }
    public get shakeIsOpen(): boolean {
        return this._shakeIsOpen;
    }

    private _soundIsOpen: boolean = true;
    /** 音效状态 */
    public set soundIsOpen(isOpen: boolean) {
        this._soundIsOpen = isOpen;
        this.musicOpen = isOpen;
        this.soundOpen = isOpen;
    }
    public get soundIsOpen(): boolean {
        return this._soundIsOpen;
    }

    public sufix: string = "_mp3";

    /*********************************************** 背景音乐 ***********************************************/

    /** 声音对象池 */
    private effectPool = {};

    private musicChannel: Laya.SoundChannel;

    private _musicOpen = true;
    /** 背景音乐开关 */
    set musicOpen(value: boolean) {
        this._musicOpen = value;
        if (value) {
            this.playBgMusic();
        } else {
            this.stopBgMusic();
        }
    }
    get musicOpen(): boolean {
        return this._musicOpen;
    }

    private _bgm: string;
    /** 背景音乐 */
    set bgm(bgm: string) {
        if (!this._bgm) {
            this._bgm = bgm;
            this.playBgMusic();
        } else {
            this._bgm = bgm;
            this.stopBgMusic();
            this.playBgMusic();
        }
    }
    get bgm(): string {
        return this._bgm;
    }

    private _bgvolume = 1;
    /** 背景音乐音量 */
    set bgvolume(value: number) {
        this.musicChannel && (this.musicChannel.volume = value);
        this._bgvolume = value;
    }
    get bgvolume(): number {
        return this._bgvolume;
    }

    /** 背景音乐 */
    playBgMusic() {
        if (this.musicOpen) this.playMusic();
    }


    /**音频 平台 */
    public bgInnerAudioContext;

    private async playMusic() {
        if (!SoundUtil.getInstance()._bgm) return;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            if (SoundUtil.getInstance().bgInnerAudioContext) {
                SoundUtil.getInstance().bgInnerAudioContext.play();
                SoundUtil.getInstance().bgInnerAudioContext.loop = true;
                return;
            }
            SoundUtil.getInstance().bgInnerAudioContext = platform.createInnerAudioContext();
            SoundUtil.getInstance().bgInnerAudioContext.src = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(SoundUtil.getInstance()._bgm + "_mp3").url);//
            SoundUtil.getInstance().bgInnerAudioContext.autoplay = true;
            SoundUtil.getInstance().bgInnerAudioContext.loop = true;
            SoundUtil.getInstance().bgInnerAudioContext.onPlay && (SoundUtil.getInstance().bgInnerAudioContext.onPlay = function () {
                // if (SceneManager.instance.curGameScene && SceneManager.instance.curGameScene.className_key == "HomeView") {//homeview
                SoundUtil.getInstance().playBgMusic();
                // }
            })
            return;
        }
        let _url = "resource/assets/sound/" + this._bgm + ".mp3";
        let music: Laya.Sound = SoundUtil.getInstance().effectPool[SoundUtil.getInstance().bgm];
        // console.log("play BGM ->", music);
        if (!music || !(music as any).loaded) {
            music = await ResUtil.getIntance().getAsyncRESByUrl<Laya.Sound>(_url);
            // if (SceneManager.instance.curGameScene.className_key != "HomeView") {
            //     return
            // }
            SoundUtil.getInstance().effectPool[SoundUtil.getInstance().bgm] = music;
            this.playMusic();
        } else {
            SoundUtil.getInstance().musicChannel = music.play(0, 0);
            SoundUtil.getInstance().musicChannel.volume = SoundUtil.getInstance().bgvolume;
        }
    }

    /** 关闭背景音乐 */
    stopBgMusic() {
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            if (SoundUtil.getInstance().bgInnerAudioContext) {
                SoundUtil.getInstance().bgInnerAudioContext.stop();
                return;
            }
            return;
        }
        SoundUtil.getInstance().musicChannel && SoundUtil.getInstance().musicChannel.stop();
        SoundUtil.getInstance().musicChannel = null;
    }

    /*********************************************** 游戏音效 ***********************************************/

    public effectPools = {};
    public onPlaySoundNum: number = 0;
    /** 音效音量 */
    private effectVolume = 1;

    private _soundOpen = true;
    /** 音效开关 */
    set soundOpen(_soundOpen: boolean) {
        this._soundOpen = _soundOpen;
    }
    get soundOpen(): boolean {
        return this._soundOpen;
    }

    /** 播放一个音效 */
    public async playEffect(soundName) {
        let _url = "resource/assets/sound/" + soundName + ".mp3";

        if (this._soundOpen == false || !soundName || soundName == "") return;
        if (DeviceUtil.isQQMiniGame() || DeviceUtil.isWXMiniGame() || DeviceUtil.isTTMiniGame()) {
            this.playMiniGameEffect(soundName);
            return;
        }
        let sound: Laya.Sound = this.effectPool[soundName];
        if (!sound || !(sound as any).audioBuffer || !(sound as any)._disposed) {
            sound = await ResUtil.getIntance().getAsyncRESByUrl<Laya.Sound>(_url);
            if (sound) {
                this.effectPool[soundName] = sound;
                let soundChannel = sound.play(0, 1) as Laya.SoundChannel;
                soundChannel.volume = this.effectVolume;
            } else {
                await ResUtil.getIntance().getAsyncRESByUrl(_url).then(() => {
                    this.playEffect(soundName);
                });
                return;
            }
        } else {
            let soundChannel = sound.play(0, 1) as Laya.SoundChannel;
            if (soundChannel) {
                soundChannel.play();
            }
            soundChannel.volume = this.effectVolume;
        }
    }

    /**
     * 小游戏播放音效
     */
    public playMiniGameEffect(soundName) {
        if (DeviceUtil.isQQMiniGame()) {
            let innerAudioContext = this.effectPools[soundName];
            if (!innerAudioContext) {
                SoundUtil.getInstance().effectPools[soundName] = innerAudioContext = platform.createInnerAudioContext();
                innerAudioContext.autoplay = true;
                let url = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(soundName + "_mp3").url);
                console.log('url>>>>>', url);
                innerAudioContext.src = url;
                // innerAudioContext.onEnded(() => {
                //     console.log("end ", soundName);
                // });
                innerAudioContext.onError(() => {
                    innerAudioContext.destroy();
                    SoundUtil.getInstance().effectPools[soundName] = null;
                });
                innerAudioContext.onStop(() => {
                    innerAudioContext.destroy();
                    SoundUtil.getInstance().effectPools[soundName] = null;
                });
            }
            innerAudioContext.play();
            // console.log("play ", soundName);
            return;
        }
        //以下内容只适应微信
        // if (this.onPlaySoundNum > 20) {//最大声音数目
        //     return;
        // }
        let miniSounds: MiniGameSound[] = this.effectPools[soundName];
        if (!miniSounds) {
            this.effectPools[soundName] = miniSounds = [];
        }
        let miniSound: MiniGameSound;
        if (miniSounds.length < 1) {
            miniSound = new MiniGameSound();
            miniSound.create(soundName);
        } else {
            miniSound = miniSounds.shift();
            if (miniSound.isEnded == false) {//获取到的没有结束
                miniSound = new MiniGameSound();
                miniSound.create(soundName);
            } else {
                miniSound.play();
            }
        }
        this.onPlaySoundNum += 1;
    }
}

/**
 * 小游戏的音效对象 封装下 控制数量和重用等
 */
class MiniGameSound {
    public innerAudioContext;
    public isEnded: boolean;
    public soundName: string;
    /** 
     * 创建
     */
    public create(soundName: string): void {
        this.innerAudioContext = platform.createInnerAudioContext();
        this.innerAudioContext.onEnded(() => {
            this.isEnded = true;
            SoundUtil.getInstance().effectPools[this.soundName].push(this);
            SoundUtil.getInstance().onPlaySoundNum -= 1;
        });
        this.isEnded = false;
        this.soundName = soundName;
        // this.innerAudioContext.src = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(soundName + "_mp3").url);
        let url = ResUtil.getIntance().getOriginUrlPath(ResUtil.getIntance().getResInfoByName(soundName + "_mp3").url);
        this.innerAudioContext.src = url;
        this.innerAudioContext.autoplay = true;
    }

    /**
     * 播放
     */
    public play(): void {
        this.innerAudioContext.play();
    }
}