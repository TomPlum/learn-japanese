import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";

export default class DiagraphFilter implements KanaFilter {
    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => !kana.isDiagraph());
    }
}