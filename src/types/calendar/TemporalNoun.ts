import { KanjiLearnable } from "../learn/CommonLearnable";
import JapaneseWord from "../learn/JapaneseWord";

export default class TemporalNoun extends KanjiLearnable {
    private readonly _english: string;
    private readonly _kanji: string;
    private readonly _romaji: string;
    private readonly _kana: string;

    public constructor(english: string, kanji: any, romaji: string, kana: string) {
        super();
        this._english = english;
        this._kanji = kanji;
        this._romaji = romaji;
        this._kana = kana;
    }

    getWords(): JapaneseWord[] {
        return [new JapaneseWord(this._kana, this._romaji)];
    }

    getQuestion(): string {
        return this._english;
    }

    getTitle(): string {
        return "Temporal Noun / Adverb";
    }

    getMeaning(): string | undefined {
        return undefined;
    }

    getKanji(): string {
        return this._kanji;
    }
}