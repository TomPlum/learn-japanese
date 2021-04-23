import JapaneseWord from "./JapaneseWord";
import { KanjiLearnable } from "./CommonLearnable";

export default class CommonData extends KanjiLearnable {

    private readonly question: string;
    private readonly kanji: string;
    private readonly title: string;
    private readonly words: JapaneseWord[];
    private readonly meaning: string | undefined;

    constructor(question: string,  words: JapaneseWord[], kanji: string, title: string, meaning?: string) {
        super();
        this.question = question;
        this.kanji = kanji;
        this.words = words;
        this.title = title;
        this.meaning = meaning;
    }

    getWords(): JapaneseWord[] {
        return this.words;
    }

    getMeaning(): string | undefined {
        return this.meaning;
    }

    getQuestion(): string {
        return this.question;
    }

    getTitle(): string {
        return this.title;
    }

    getKanji(): string {
        return this.kanji;
    }
}