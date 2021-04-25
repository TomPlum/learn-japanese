import { KanjiLearnable } from "../learn/CommonLearnable";
import JapaneseWord from "../learn/JapaneseWord";

export default class Colour extends KanjiLearnable {
    private readonly _name: string;
    private readonly _kanji: string | undefined;
    private readonly _kana: string;
    private readonly _romaji: string;
    private readonly _colour: string;

    constructor(name: string, kanji: string | undefined, kana: string, romaji: string, colour: string) {
        super();
        this._name = name;
        this._kanji = kanji;
        this._kana = kana;
        this._romaji = romaji;
        this._colour = colour;
    }

    get colour(): string {
        return this._colour;
    }

    getKanji(): string {
        return this._kanji ?? this._name;
    }

    getWords(): JapaneseWord[] {
        return [new JapaneseWord(this._kana, this._romaji)];
    }

    getQuestion(): string {
        return this._name;
    }

    getTitle(): string {
        return this._name;
    }
}