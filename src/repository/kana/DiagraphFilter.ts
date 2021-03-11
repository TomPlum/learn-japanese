import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";

export default class DiagraphFilter implements KanaFilter {

    private readonly include: boolean;

    constructor(include: boolean = false) {
        this.include = include;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.isDiagraph() === this.include);
    }
}