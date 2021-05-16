import { KanjiLearnable, LearningExample } from "./Learnable";

export default class CommonData extends KanjiLearnable {

    private readonly question: string;
    private readonly kanji: string;
    private readonly title: string;
    private readonly kana: string[];
    private readonly meaning: string | undefined;
    private readonly example: LearningExample | undefined;

    constructor(question: string, kana: string[], kanji: string, title: string, meaning?: string, example?: LearningExample) {
        super();
        this.question = question;
        this.kanji = kanji;
        this.kana = kana;
        this.title = title;
        this.meaning = meaning;
        this.example = example;
    }

    getKana(): string[] {
        return this.kana;
    }

    getMeanings(): string[] | undefined {
        return this.meaning ? [this.meaning] : undefined;
    }

    getQuestion(): string {
        return this.question;
    }

    getTitle(): string {
        return this.title;
    }

    getKanjiVariation(): string {
        return this.kanji;
    }

    getExample(): LearningExample | undefined {
        return this.example;
    }
}