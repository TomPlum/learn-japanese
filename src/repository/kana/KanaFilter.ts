import { Kana } from "../../types/Kana";
import { Filter } from "../filter/Filter";

export default interface KanaFilter extends Filter<Kana> {
    apply: (kana: Kana[]) => Kana[];
}