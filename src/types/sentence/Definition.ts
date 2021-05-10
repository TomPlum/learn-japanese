import { SentenceStructureLearnable } from "../learn/CommonLearnable";

export default class Definition implements SentenceStructureLearnable {

    private readonly meanings: string[];
    private readonly kanjiVariant: string | undefined;
    private readonly kana: string;
    private readonly type: string;

    constructor(meanings: string[], kanjiVariant: string | undefined, kana: string, type: string) {
        this.meanings = meanings;
        this.kanjiVariant = kanjiVariant;
        this.kana = kana;
        this.type = type;
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

    getQuestion(): string {
        return this.meanings.join(" or ");
    }

    getTitle(): string {
        return this.type;
    }

}