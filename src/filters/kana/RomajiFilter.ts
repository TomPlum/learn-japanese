import { Filter } from "../Filter";
import { Kana } from "../../types/kana/Kana";

export default class RomajiFilter implements Filter<Kana> {

    private readonly search: string;

    constructor(search: string) {
        this.search = search;
    }

    apply(values: Kana[]): Kana[] {
        if (this.search) {
            return values.filter(kana => kana.getRomaji().some(romaji => romaji.includes(this.search)));
        }
        return values;
    }
}