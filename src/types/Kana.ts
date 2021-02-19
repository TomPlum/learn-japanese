import KanaType from "./KanaType";
import {KanaColumn} from "./KanaColumn";

export class Kana {
    private readonly _code: string;
    private readonly _romanji: string;
    private readonly _type: KanaType;
    private readonly _column: KanaColumn;

    constructor(code: string, romanji: string, type: KanaType, column: KanaColumn) {
        this._code = code;
        this._romanji = romanji;
        this._type = type;
        this._column = column;
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

    get column(): KanaColumn {
        return this._column;
    }
}