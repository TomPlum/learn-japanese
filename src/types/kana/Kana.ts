import KanaType from "./KanaType";
import { KanaColumn } from "./KanaColumn";
import Arrays from "../../utility/Arrays";
import { Learnable } from "../learn/Learnable";

export class Kana extends Learnable {
    private readonly _code: string;
    private readonly _romaji: string[];
    private readonly _type: KanaType;
    private readonly _column: KanaColumn;
    private readonly _isDiacritical: boolean;

    constructor(code: string, romaji: string[], type: KanaType, column: KanaColumn, isDiacritical: boolean) {
        super();
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
        const romaji = this.getRomaji();

        if (romaji.length === 1) {
            return romaji[0];
        } else {
            return romaji[0] + " (" + romaji[1] + ")";
        }
    }

    public getHint(): string {
        if (this.column === KanaColumn.OTHER) {
            return "This kana is exceptional. It is not a consonant nor a vowel."
        }

        let message: string;
        const diacritical = " Also, notice the diacritical mark.";

        if (this.isDiagraph()) {
            message = "Diagraphs usually drop the 1st kana's 2nd letter when transcribed."
        } else {
            message = "This kana is from the '" + this.column + "' column in the " + this.type + " syllabary.";
        }

        return message + (this.isDiacritical ? diacritical : "");
    }

    public getBaseScore(): number {
        return this.isDiagraph() ? 150 : 100;
    }

    get code(): string {
        return this._code;
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

    getTitle(): string {
        return this._type;
    }

    getKana(): string[] {
        return [this._code];
    }

    getMeanings(): string[] {
        return this._romaji;
    }

    getUniqueID(): string {
        return this._code;
    }

    getRomaji(): string[] {
        return this._romaji;
    }

    public equals(other: any): boolean {
        if (!other) return false;
        if (!(other instanceof Kana)) return false;
        if (!Arrays.areEqual(this.getRomaji(), other.getRomaji())) return false;
        if (other.type !== this.type) return false;
        if (other.column !== this.column) return false;
        if (other.isDiacritical !== this.isDiacritical) return false;
        return other.code === this.code;
    }
}