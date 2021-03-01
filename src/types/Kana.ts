import KanaType from "./KanaType";
import {KanaColumn} from "./KanaColumn";

export class Kana {
    private readonly _code: string;
    private readonly _romanji: string[];
    private readonly _type: KanaType;
    private readonly _column: KanaColumn;
    private readonly _isDiacritical: boolean;

    constructor(code: string, romanji: string[], type: KanaType, column: KanaColumn, isDiacritical: boolean) {
        this._code = code;
        this._romanji = romanji;
        this._type = type;
        this._column = column;
        this._isDiacritical = isDiacritical;
    }

    public isDiagraph(): boolean {
        return this._code.length === 2;
    }

    public getFullRomanjiString(): string {
        if (this.romanji.length === 1) {
            return this.romanji[0];
        } else {
            return this.romanji[0] + " (" + this.romanji[1] + ")";
        }
    }

    get code(): string {
        return this._code;
    }

    get romanji(): string[] {
        return this._romanji;
    }

    get type(): KanaType {
        return this._type;
    }

    get column(): KanaColumn {
        return this._column;
    }

    get isDiacritical(): boolean {
        return this._isDiacritical;
    }
}