import { Kana } from "../../types/Kana";
import { Filter } from "../filter/Filter";

export default class ExclusionFilter implements Filter<Kana> {

    private readonly kana: Kana;

    constructor(kana: Kana) {
        this.kana = kana;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.romanji !== this.kana.romanji);
    }
}