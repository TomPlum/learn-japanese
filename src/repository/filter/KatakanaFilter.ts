import KanaFilter from "./KanaFilter";
import KanaType from "../../types/KanaType";
import { Kana } from "../../types/Kana";

export default class KatakanaFilter implements KanaFilter {
    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.type !== KanaType.KATAKANA);
    }
}