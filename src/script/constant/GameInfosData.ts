export class GameInfosData extends BaseInfosData {
    showCd: boolean; serverConf: "nts" | "wts" | "wzs";
    version: number;
    bannerId: Array<string>;
    videoId: Array<string>;
    isOpen: boolean
}