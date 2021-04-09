import { Kana } from "../../types/kana/Kana";
import { Filter } from "../Filter";

export default class ExclusionFilter implements Filter<Kana> {

    private readonly kana: Kana;

    constructor(kana: Kana) {
        this.kana = kana;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => !kana.equals(this.kana));
    }
}