
/**
 * 对象池
 */
export default class ObjectPool {
    private constructor() {
        // this._className == className;
        this.initPool();
    }

    private static ins: ObjectPool;
    public static get instance(): ObjectPool {
        if (this.ins == null) {
            this.ins = new ObjectPool();
        }
        return this.ins
    }

    private poolList: Array<any>;
    private initPool() {
        this.poolList = [];
        this._pool = {};
    }
    private _pool: Object;

    /**
     * 通过类名获取对象
     * @param className 
     * 
     * @param data 
     */
    public createObjectByName(className: any, data?) {
        // var result;
        var key = className.key;
        if (key == null || key == '') {
            key = className.name;
        }

        let item = Laya.Pool.getItemByClass(key, className);
        item.key = key;
        item.onCreate && item.onCreate(data);
        item.visible = true;
        return item;
    }



    /**
     * 回收一个对象
     */
    public recoveryObj(obj: any) {
        var key = obj.key;
        // obj.onRecovery && obj.onRecovery();
        // Laya.Pool.recover(key, obj);

        if (obj) {
            obj.visible = false;
        }
        obj.x = 5000;
        Laya.timer.frameOnce(2, this, () => {
            //         obj.onRecovery();
            obj.onRecovery && obj.onRecovery();
            if (key == null || key == '') {
                key = obj.className_key
            }
            Laya.Pool.recover(key, obj);
            // console.log(key)
            // console.log('pool>>>>>onRecovery', key)
        });

        /*     if (this._pool[key] == null) {
                this._pool[key] = [];
            }
            if (this._pool[key].indexOf(obj) == -1) {
                this._pool[key].push(obj);
            } */
    }

    /**
     * 通过类名 销毁在对象池中的对象
     * @param className 
     */
    public destoryPoolByClassName(className) {
        let _pool = this._pool;
        let clazzs = _pool[className] as Array<any>;
        if (clazzs != null && clazzs.length > 0) {
            let len = clazzs.length;
            for (let i = 0; i < len; i++) {
                clazzs[i].onDestory && clazzs[i].onDestory();
            }
            clazzs = null;
        }
        delete _pool[className];
    }
    /**
     * 销毁zhengge 对象池
     */
    public destoryPool() {
        let _pool = this._pool;
        for (var obj in _pool) {
            let arr = _pool[obj] as Array<any>;
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                arr[i].onDestory && arr[i].onDestory();
            }
            arr = null;
            delete _pool[obj]
        }

    }


}