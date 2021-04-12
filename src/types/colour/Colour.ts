import Learnable from "../learn/Learnable";

export default class Colour implements Learnable {
    private readonly _name: string;
    private readonly _kanji: string;
    private readonly _kana: string;
    private readonly _romaji: string;
    private readonly _colour: string;

    constructor(name: string, kanji: string, kana: string, romaji: string, colour: string) {
        this._name = name;
        this._kanji = kanji;
        this._kana = kana;
        this._romaji = romaji;
        this._colour = colour;
    }

    get name(): string {
        return this._name;
    }

    get kanji(): string {
        return this._kanji;
    }

    get kana(): string {
        return this._kana;
    }

    get romaji(): string {
        return this._romaji;
    }

    get colour(): string {
        return this._colour;
    }

    getAnswer(): string {
        return this._kanji;
    }

    getQuestion(): string {
        return this._name;
    }

    getTitle(): string {
        return "Colour";
    }
}