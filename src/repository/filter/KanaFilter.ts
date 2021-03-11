import { Kana } from "../../types/Kana";

export default interface KanaFilter {
    apply: (kana: Kana[]) => Kana[];
}