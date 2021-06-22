import { Filter } from "../Filter";
import { Learnable } from "../../types/learn/Learnable";

/**
 * Filters out all Learnable objects whose kana values do not contain or match
 * the given kana string.
 */
class KanaFilter implements Filter<Learnable> {

    private readonly kana: string;

    constructor(kana: string) {
        this.kana = kana;
    }

    apply(values: Learnable[]): Learnable[] {
        if (!this.kana) {
            return [];
        }

        return values.filter((value: Learnable) => {
            return value.getKana().some((meaning: string) => {
                return meaning.includes(this.kana);
            });
        });
    }
}

export default KanaFilter;