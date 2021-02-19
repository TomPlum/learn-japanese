import {Kana} from "../types/Kana";
import hiragana from "../data/Hiragana";
import katakana from "../data/Katakana";
import KanaType from "../types/KanaType";
import {KanaData} from "../data/DataTypes";

export class KanaRepository {

    readAllKana(): Kana[] {
        const hiragana = this.readHiragana();
        const katakana = this.readKatakana();
        return hiragana.concat(katakana);
    }

    readHiragana(): Kana[] {
        return this.convert(hiragana, KanaType.HIRAGANA);
    }

    readKatakana(): Kana[] {
        return this.convert(katakana, KanaType.KATAKANA);
    }

    private convert(data: KanaData[], type: KanaType): Kana[] {
        return data.map(data => new Kana(data.code, data.name, type, data.column));
    }
}