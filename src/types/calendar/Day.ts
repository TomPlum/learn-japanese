import CalendarData from "./CalendarData";

export default class Day implements CalendarData {
    private readonly _english: string;
    private readonly _kanji: any; //TODO: Change to Kanji once feature merged.

    public constructor(english: string, kanji: any) {
        this._english = english;
        this._kanji = kanji;
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
}