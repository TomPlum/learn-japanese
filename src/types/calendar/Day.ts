import { Learnable } from "../learn/Learnable";

export default class Day extends Learnable {
    private readonly _english: string;
    private readonly _kanji: string;
    private readonly _romaji: string;
    private readonly _kana: string;
    private readonly _meaning: string | undefined;

    public constructor(english: string, kanji: any, romaji: string, kana: string, meaning?: string) {
        super();
        this._english = english;
        this._kanji = kanji;
        this._romaji = romaji;
        this._kana = kana;
        this._meaning = meaning;
    }

    getKana(): string[] {
        return [this._kana];
    }

    getTitle(): string {
        return "Day of the Week";
    }

    getMeanings(): string[] {
        return [this._english]
    }

    getKanjiVariation(): string {
        return this._kanji;
    }
}