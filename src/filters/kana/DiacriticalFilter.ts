import { Filter } from "../Filter";
import { Kana } from "../../domain/kana/Kana";

export default class DiacriticalFilter implements Filter<Kana> {

    private readonly include: boolean;
    private readonly includeDiagraphs: boolean;

    constructor(include: boolean = false, includeDiagraphs: boolean = true) {
        this.include = include;
        this.includeDiagraphs = includeDiagraphs;
    }

    apply(values: Kana[]): Kana[] {
        return values.filter(kana => {
            if (!this.includeDiagraphs && kana.isDiagraph()) {
                return false;
            }
            return this.include ? kana.isDiacritical : !kana.isDiacritical;
        });
    }
}
