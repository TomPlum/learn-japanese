import {Kana} from "../types/Kana";
import hiragana from "../data/Hiragana";
import katakana from "../data/Katakana";

export class KanaRepository {

    readAllKana(): Kana[] {
        const hiragana = this.readHiragana();
        const katakana = this.readKatakana();
        return hiragana.concat(katakana);
    }

    readHiragana(): Kana[] {
        return this.convert(hiragana);
    }

    readKatakana(): Kana[] {
        return this.convert(katakana);
    }

    private convert(data: {name: string, code: string}[]): Kana[] {
        return data.map(character => {
            return new Kana(character.code, character.name);
        });
    }
}