import { AdjectiveType } from "./AdjectiveType";
import { KanjiLearnable } from "../learn/Learnable";

export default class Adjective extends KanjiLearnable {

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

    getQuestion(): string {
        return this.meanings.join(" or ");
    }

    getTitle(): string {
        return this.type + " Adjective";
    }

    getKanjiVariation(): string | undefined {
        return this.kanjiVariant;
    }

    getMeanings(): string[] | undefined {
        return this.meanings;
    }

    getKana(): string[] {
        return [this.kana];
    }
}