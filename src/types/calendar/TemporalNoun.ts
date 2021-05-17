import { Learnable } from "../learn/Learnable";

export default class TemporalNoun extends Learnable {
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

    getKana(): string[] {
        return [this._kana];
    }

    getTitle(): string {
        return "Temporal Noun / Adverb";
    }

    getKanjiVariation(): string {
        return this._kanji;
    }

    getMeanings(): string[] {
        return [this._english];
    }
}