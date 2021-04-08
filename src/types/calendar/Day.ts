import CalendarData from "./CalendarData";

export default class Day implements CalendarData {
    private readonly _english: string;
    private readonly _kanji: any; //TODO: Change to Kanji once feature merged.
    private readonly _romaji: string;
    private readonly _kana: string;
    private readonly _meaning: string;

    public constructor(english: string, kanji: any, romaji: string, kana: string, meaning: string) {
        this._english = english;
        this._kanji = kanji;
        this._romaji = romaji;
        this._kana = kana;
        this._meaning = meaning;
    }

    getAnswer(): string {
        return this._kanji;
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

    getMeaning(): string {
        return this._meaning;
    }
}