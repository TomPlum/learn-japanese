import KanaType from "./KanaType";

export class Kana {
    private readonly _code: string;
    private readonly _romanji: string;
    private readonly _type: KanaType;

    constructor(code: string, romanji: string, type: KanaType) {
        this._code = code;
        this._romanji = romanji;
        this._type = type;
    }

    get code(): string {
        return this._code;
    }

    get romanji(): string {
        return this._romanji;
    }

    get type(): KanaType {
        return this._type;
    }
}