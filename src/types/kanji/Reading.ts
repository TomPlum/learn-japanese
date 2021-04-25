import { ReadingType } from "./ReadingType";

export class Reading {
    private readonly _romaji: string;
    private readonly _kana: string;
    private readonly _type: ReadingType;

    constructor(romaji: string, kana: string, type: ReadingType) {
        this._romaji = romaji;
        this._kana = kana;
        this._type = type;
    }

    get romaji(): string {
        return this._romaji;
    }

    get kana(): string {
        return this._kana;
    }

    get type(): ReadingType {
        return this._type;
    }
}