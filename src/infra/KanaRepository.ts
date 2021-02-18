import {Kana} from "../types/Kana";
import hiragana from "../data/hiragana";

export class KanaRepository {
    readHiragana(): Kana[] {
        return hiragana.map(character => {
            return new Kana(character.code, character.name);
        })
    }
}