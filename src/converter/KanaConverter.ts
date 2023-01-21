import { KanaResponse } from "../repository/KanaRepository"
import { Kana } from "../domain/kana/Kana"
import KanaType from "../domain/kana/KanaType"
import { KanaColumn } from "../domain/kana/KanaColumn"

class KanaConverter {
    public convert(response: KanaResponse, type: KanaType): Kana {
        return new Kana(
            response.character,
            response.romaji,
            type,
            KanaConverter.parseColumn(response.column),
            response.diacritical
        )
    }

    private static parseColumn(value: string): KanaColumn {
        switch (value) {
            case "vowel": {
                return KanaColumn.VOWEL
            }
            case "k": {
                return KanaColumn.K
            }
            case "s": {
                return KanaColumn.S
            }
            case "t": {
                return KanaColumn.T
            }
            case "n": {
                return KanaColumn.N
            }
            case "h": {
                return KanaColumn.H
            }
            case "m": {
                return KanaColumn.M
            }
            case "y": {
                return KanaColumn.Y
            }
            case "r": {
                return KanaColumn.R
            }
            case "w": {
                return KanaColumn.W
            }
            case "other": {
                return KanaColumn.OTHER
            }
            default: {
                throw Error(`Invalid Kana Column [${value}]`)
            }
        }
    }
}

export default KanaConverter
