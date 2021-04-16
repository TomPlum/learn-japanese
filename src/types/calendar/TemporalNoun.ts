import CommonLearnable from "../learn/CommonLearnable";

export default class TemporalNoun implements CommonLearnable {
    private readonly _english: string;
    private readonly _kanji: any;
    private readonly _romaji: string;
    private readonly _kana: string;

    public constructor(english: string, kanji: any, romaji: string, kana: string) {
        this._english = english;
        this._kanji = kanji;
        this._romaji = romaji;
        this._kana = kana;
    }

    getAnswer(): string {
        return this._kanji;
    }

    getQuestion(): string {
        return this._english;
    }

    getTitle(): string {
        return "Temporal Noun / Adverb";
    }

    getRomaji(): string {
        return this._romaji;
    }

    getKana(): string {
        return this._kana;
    }

    getMeaning(): string | undefined {
        return undefined;
    }
}