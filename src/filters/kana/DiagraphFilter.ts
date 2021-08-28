import { Kana } from "../../types/kana/Kana";
import { Filter } from "../Filter";

export default class DiagraphFilter implements Filter<Kana> {

    private readonly include: boolean;
    private readonly includeDiacriticals: boolean;

    constructor(include: boolean = false, includeDiacriticals: boolean = true) {
        this.include = include;
        this.includeDiacriticals = includeDiacriticals;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.isDiagraph() === this.include);
    }
}