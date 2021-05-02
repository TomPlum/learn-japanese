import { SentenceStructureLearnable } from "../learn/CommonLearnable";
import { VerbType } from "./VerbType";

export default class Verb implements SentenceStructureLearnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly type: VerbType;
    private readonly kana: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, type: VerbType, kana: string) {
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.type = type;
        this.kana = kana;
    }

    getQuestion(): string {
        return this.meanings.join(" or ");
    }

    getTitle(): string {
        return this.type + " Verb";
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