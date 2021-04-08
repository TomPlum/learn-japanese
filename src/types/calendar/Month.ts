import CalendarData from "./CalendarData";

export default class Month implements CalendarData {
    private readonly _english: string;
    private readonly _kanji: any;
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
        return "Month of the Year";
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