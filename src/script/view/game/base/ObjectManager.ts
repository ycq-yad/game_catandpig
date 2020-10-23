import { Ship110201 } from "../ship/Ship110201";
import { Ship110003 } from "../ship/Ship110003";
import { Ship110101 } from "../ship/Ship110101";
import { PigPlayer, PigPlayerGameInfo } from "../pig/PigPlayer";
import ObjectPool from "../../../common/ObjectPool";
import { FlyPig } from "../pig/FlyPig";
import { MinePig } from "../pig/MinePig";
import { MissileBullet } from "../bullet/MissileBullet";
import { BaseBullet } from "../bullet/BaseBullet";
import { MineBullet } from "../bullet/MineBullet";
import { SeaurchinPig } from "../pig/SeaurchinPig";
import { TeleportingPig } from "../pig/TeleportingPig";
import { TreatmentPig } from "../pig/TreatmentPig";
import { TorpedoPig } from "../pig/TorpedoPig";
import { Ship110001 } from "../ship/Ship110001";
import { Ship110002 } from "../ship/Ship110002";
import { Ship110004 } from "../ship/Ship110004";
import { Ship110005 } from "../ship/Ship110005";
import { PigType } from "./GameObj";
import { WaterPig } from "../pig/WaterPig";
import { Ship110105 } from "../ship/Ship110105";
import { Ship110102 } from "../ship/Ship110102";
import { Ship110103 } from "../ship/Ship110103";
import { Ship110104 } from "../ship/Ship110104";
import { Ship110205 } from "../ship/Ship110205";
import { Ship110204 } from "../ship/Ship110204";
import { Ship110203 } from "../ship/Ship110203";
import { Ship110202 } from "../ship/Ship110202";


/**
 * 猫船等的管理类
 */
export class ObjectManager {
    public constructor() {

    }
    private static ins: ObjectManager;

    public static getInstance(): ObjectManager {
        if (ObjectManager.ins == null) {
            ObjectManager.ins = new ObjectManager();
        }
        return ObjectManager.ins;
    }

    /**
     * 通过类型创建船只
     */
    public createShipByType(type: string, data) {
        let ship = null
        switch (type + '') {
            case '110001':
                ship = new Ship110001(data);
                break
            case '110002':
                ship = new Ship110002(data);
                break
            case '110003':
                ship = new Ship110003(data);
                break
            case '110004':
                ship = new Ship110004(data);
                break
            case '110005':
                ship = new Ship110005(data);
                break

            case '110101':
                ship = new Ship110101(data);
                break
            case '110102':
                ship = new Ship110102(data);
                break
            case '110103':
                ship = new Ship110103(data);
                break
            case '110104':
                ship = new Ship110104(data);
                break
            case '110105':
                ship = new Ship110105(data);
                break
            case '110201':
                ship = new Ship110201(data);
                break
            case '110202':
                ship = new Ship110202(data);
                break
            case '110203':
                ship = new Ship110203(data);
                break
            case '110204':
                ship = new Ship110204(data);
                break
            case '110205':
                ship = new Ship110205(data);
                break
        }
        ship.init(data);
        return ship;

    }

    /**
     * 创建猪猪
     */
    public createPigPlayer(type, data: PigPlayerGameInfo): PigPlayer {
        let pPlayer: any;


        switch (parseInt(type)) {
            case 1:
                pPlayer = ObjectPool.instance.createObjectByName(FlyPig, data);
                break;
            case 6:
                pPlayer = ObjectPool.instance.createObjectByName(MinePig, data);
                break;
            case 7:
                pPlayer = ObjectPool.instance.createObjectByName(SeaurchinPig, data);
                break;
            case 9:
                pPlayer = ObjectPool.instance.createObjectByName(TeleportingPig, data);
                break;
            case 3:
                pPlayer = ObjectPool.instance.createObjectByName(TreatmentPig, data);
                break;
            case 8:
                pPlayer = ObjectPool.instance.createObjectByName(TorpedoPig, data);
                break;
            case 5:
                pPlayer = ObjectPool.instance.createObjectByName(WaterPig, data);
                break;
            case 4:
                if (data.playerId + '' == 130101 + '') {
                    data.pigType = PigType.normal
                } else {
                    data.pigType = PigType.Boss

                }
                pPlayer = ObjectPool.instance.createObjectByName(PigPlayer, data) as PigPlayer;
                break;
            default:
                pPlayer = ObjectPool.instance.createObjectByName(PigPlayer, data) as PigPlayer;
                break
        }
        return pPlayer;
    }


    // public createBaseBullet(id: string, data): BaseBullet {
    //     let bullet: any
    //     switch (parseInt(id)) {
    //         case 1:
    //             bullet = ObjectPool.instance.createObjectByName(BaseBullet, data);
    //             break;
    //         case 100106:
    //             bullet = ObjectPool.instance.createObjectByName(MineBullet, data);
    //             break;
    //         case 100107://导弹
    //         case 100108:
    //             bullet = ObjectPool.instance.createObjectByName(MissileBullet, data) as MissileBullet
    //             break;

    //         default:
    //             bullet = ObjectPool.instance.createObjectByName(BaseBullet, data) as BaseBullet;
    //             break
    //     }

    //     return bullet;
    // }




}