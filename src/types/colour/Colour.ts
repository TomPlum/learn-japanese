import CommonLearnable from "../learn/CommonLearnable";

export default class Colour implements CommonLearnable {
    private readonly _name: string;
    private readonly _kanji: string | undefined;
    private readonly _kana: string;
    private readonly _romaji: string;
    private readonly _colour: string;

    constructor(name: string, kanji: string | undefined, kana: string, romaji: string, colour: string) {
        this._name = name;
        this._kanji = kanji;
        this._kana = kana;
        this._romaji = romaji;
        this._colour = colour;
    }

    get name(): string {
        return this._name;
    }

    get colour(): string {
        return this._colour;
    }

    getKanji(): string | undefined {
        return this._kanji;
    }

    getKana(): string {
        return this._kana;
    }

    getRomaji(): string {
        return this._romaji;
    }

    getAnswer(): string {
        return this._kanji ?? "";
    }

    getQuestion(): string {
        return this._name;
    }

    getTitle(): string {
        return "Colour";
    }

    getMeaning(): string | undefined {
        return undefined;
    }
}