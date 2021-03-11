import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";
import KanaType from "../../types/KanaType";

export default class HiraganaFilter implements KanaFilter {
    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.type !== KanaType.HIRAGANA);
    }
}