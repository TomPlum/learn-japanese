import { Kana } from "../../types/kana/Kana";
import { Filter } from "../Filter";

export default class DiagraphFilter implements Filter<Kana> {

    private readonly include: boolean;

    constructor(include: boolean = false) {
        this.include = include;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.isDiagraph() === this.include);
    }
}