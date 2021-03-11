import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";

export default class ExclusionFilter implements KanaFilter {

    private readonly kana: Kana;

    constructor(kana: Kana) {
        this.kana = kana;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.romanji !== this.kana.romanji);
    }
}