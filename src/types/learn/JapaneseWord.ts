export default class JapaneseWord {
    private readonly _kana: string;
    private readonly _romaji: string;

    constructor(kana: string, romaji: string) {
        this._kana = kana;
        this._romaji = romaji;
    }

    get kana(): string {
        return this._kana;
    }

    get romaji(): string {
        return this._romaji;
    }

}