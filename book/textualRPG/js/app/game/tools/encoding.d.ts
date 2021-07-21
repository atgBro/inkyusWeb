import { Info } from "./../../Types/infoType";
export declare const encoding: (asciiString: string) => string;
export declare const decoding: (hexString: string) => string;
export declare const parseData: (data: string) => Info;
export declare const stringifyData: (info: Info) => string;
export declare const getInfoFromUrl: () => Info;
export declare const getInfoFromCookie: () => Info;
