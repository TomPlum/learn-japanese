import Learnable from "../learn/Learnable";
import { AdjectiveType } from "../kana/AdjectiveType";
import { ExceptionalLearnable, SentenceStructureLearnable } from "../learn/CommonLearnable";

export default class Adjective implements SentenceStructureLearnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly type: AdjectiveType;
    private readonly kana: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, type: AdjectiveType, kana: string) {
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.type = type;
        this.kana = kana;
    }

    getQuestion(): string {
        return this.meanings.join(" or ");
    }

    getTitle(): string {
        return "Adjective";
    }

    getAnswer(): string {
        return "";
    }

    getKana(): string {
        return this.kana;
    }

    getKanjiVariation(): string | undefined {
        return this.kanjiVariant;
    }

    getMeanings(): string[] {
        return this.meanings;
    }
}