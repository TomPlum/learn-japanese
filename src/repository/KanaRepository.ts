import {Kana} from "../types/Kana";
import hiragana from "../data/Hiragana";
import katakana from "../data/Katakana";
import KanaType from "../types/KanaType";

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

    private convert(data: {name: string, code: string}[], type: KanaType): Kana[] {
        return data.map(character => {
            return new Kana(character.code, character.name, type);
        });
    }
}