import { Learnable } from "../learn/Learnable"

export default class Colour extends Learnable {
    private readonly _name: string
    private readonly _kanji: string | undefined
    private readonly _kana: string
    private readonly _romaji: string
    private readonly _colour: string

    constructor(name: string, kanji: string | undefined, kana: string, romaji: string, colour: string) {
        super()
        this._name = name
        this._kanji = kanji
        this._kana = kana
        this._romaji = romaji
        this._colour = colour
    }

    get colour(): string {
        return this._colour
    }

    getKanjiVariation(): string | undefined {
        return this._kanji
    }

    getKana(): string[] {
        return [this._kana]
    }

    getTitle(): string {
        return this._name
    }

    getMeanings(): string[] {
        return [this._name]
    }

    getHint(): string {
        return "It begins with " + this._kana[0]
    }

    getUniqueID(): string {
        return this._name + "-" + this._kana
    }
}
