import KanaType from "./KanaType";
import {KanaColumn} from "./KanaColumn";
import Arrays from "../../utility/Arrays";
import Learnable from "../learn/Learnable";

export class Kana implements Learnable {
    private readonly _code: string;
    private readonly _romaji: string[];
    private readonly _type: KanaType;
    private readonly _column: KanaColumn;
    private readonly _isDiacritical: boolean;

    constructor(code: string, romaji: string[], type: KanaType, column: KanaColumn, isDiacritical: boolean) {
        this._code = code;
        this._romaji = romaji;
        this._type = type;
        this._column = column;
        this._isDiacritical = isDiacritical;
    }

    public isDiagraph(): boolean {
        return this._code.length === 2;
    }

    public getFullRomajiString(): string {
        if (this.romaji.length === 1) {
            return this.romaji[0];
        } else {
            return this.romaji[0] + " (" + this.romaji[1] + ")";
        }
    }

    get code(): string {
        return this._code;
    }

    get romaji(): string[] {
        return this._romaji;
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

    getQuestion(): string {
        return this._code;
    }

    getAnswer(): string {
        return this.getFullRomajiString();
    }

    getTitle(): string {
        return this._type;
    }

    public equals(other: any): boolean {
        if (!other) return false;
        if (!(other instanceof Kana)) return false;
        if (!Arrays.areEqual(this.romaji, other.romaji)) return false;
        if (other.type !== this.type) return false;
        if (other.column !== this.column) return false;
        if (other.isDiacritical !== this.isDiacritical) return false;
        return other.code === this.code;
    }
}