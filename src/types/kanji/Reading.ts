import { ReadingType } from "./ReadingType";

export class Reading {
    private readonly _romanji: string;
    private readonly _kana: string;
    private readonly _type: ReadingType;

    constructor(romanji: string, kana: string, type: ReadingType) {
        this._romanji = romanji;
        this._kana = kana;
        this._type = type;
    }

    get romanji(): string {
        return this._romanji;
    }

    get kana(): string {
        return this._kana;
    }

    get type(): ReadingType {
        return this._type;
    }
}