import { Filter } from "../Filter";
import { Kana } from "../../types/kana/Kana";

export default class DiacriticalFilter implements Filter<Kana> {

    private readonly include: boolean;

    constructor(include: boolean = false) {
        this.include = include;
    }

    apply(values: Kana[]): Kana[] {
        return values.filter(kana => this.include ? kana.isDiacritical : !kana.isDiacritical);
    }
}