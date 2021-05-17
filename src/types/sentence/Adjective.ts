import { AdjectiveType } from "./AdjectiveType";
import { Learnable } from "../learn/Learnable";

export default class Adjective extends Learnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly type: AdjectiveType;
    private readonly kana: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, type: AdjectiveType, kana: string) {
        super();
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.type = type;
        this.kana = kana;
    }

    getTitle(): string {
        return this.type + " Adjective";
    }

    getKanjiVariation(): string | undefined {
        return this.kanjiVariant;
    }

    getMeanings(): string[] {
        return this.meanings;
    }

    getKana(): string[] {
        return [this.kana];
    }
}