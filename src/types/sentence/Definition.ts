import { Learnable } from "../learn/Learnable";

export default class Definition extends Learnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly kana: string;
    private readonly type: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, kana: string, type: string) {
        super();
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.kana = kana;
        this.type = type;
    }

    getKana(): string[] {
        return [this.kana];
    }

    getKanjiVariation(): string | undefined {
        return this.kanjiVariant;
    }

    getMeanings(): string[] {
        return this.meanings;
    }

    getTitle(): string {
        return this.type;
    }

    getHint(): string {
        return "It starts with " + this.kana[0];
    }

    getUniqueID(): string {
        return this.meanings.join("-")
    }
}