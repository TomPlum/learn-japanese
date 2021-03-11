import { Kana } from "../../types/Kana";
import { Filter } from "../filter/Filter";

export default class DiagraphFilter implements Filter<Kana> {

    private readonly include: boolean;

    constructor(include: boolean = false) {
        this.include = include;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.isDiagraph() === this.include);
    }
}