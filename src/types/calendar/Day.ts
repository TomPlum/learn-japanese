import { KanjiLearnable } from "../learn/CommonLearnable";
import JapaneseWord from "../learn/JapaneseWord";

export default class Day implements KanjiLearnable {
    private readonly _english: string;
    private readonly _kanji: any; //TODO: Change to Kanji once feature merged.
    private readonly _romaji: string;
    private readonly _kana: string;
    private readonly _meaning: string | undefined;

    public constructor(english: string, kanji: any, romaji: string, kana: string, meaning?: string) {
        this._english = english;
        this._kanji = kanji;
        this._romaji = romaji;
        this._kana = kana;
        this._meaning = meaning;
    }

    getWords(): JapaneseWord[] {
        return [new JapaneseWord(this._kana, this._romaji)];
    }

    getQuestion(): string {
        return this._english;
    }

    getTitle(): string {
        return "Day of the Week";
    }

    getRomaji(): string {
        return this._romaji;
    }

    getKana(): string {
        return this._kana;
    }

    getMeaning(): string | undefined {
        return this._meaning;
    }

    getKanji(): string {
        return this._kanji;
    }
}