import { Filter } from "../Filter";
import { Kana } from "../../types/kana/Kana";

export default class RegularKanaFilter implements Filter<Kana> {

    private readonly include: boolean;

    constructor(include: boolean = false) {
        this.include = include;
    }

    apply(values: Kana[]): Kana[] {
        return values.filter((kana: Kana) => {
            const isRegular = !kana.isDiagraph() && !kana.isDiacritical;
            return this.include ? isRegular : !isRegular;
        });
    }
}