import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";

export default class FilterChain {
    private filters = new Set<KanaFilter>();

    public addFilter(filter: KanaFilter) {
        this.filters.add(filter);
    }

    public execute(kana: Kana[]): Kana[] {
        let reduced = kana;
        [...this.filters].forEach((filter: KanaFilter) => {
            reduced = filter.apply(reduced);
        });
        return reduced;
    }
}