import { Filter } from "../Filter";
import { Learnable } from "../../domain/learn/Learnable";

/**
 * Filters out all Learnable objects whose kana values do not contain or match
 * the given kana string.
 */
class KanaFilter<T extends Learnable> implements Filter<T> {

    private readonly kana: string;

    constructor(kana: string) {
        this.kana = kana;
    }

    apply(values: T[]): T[] {
        if (!this.kana) {
            return [];
        }

        return values.filter((value: T) => {
            return value.getKana().some((meaning: string) => {
                return meaning.includes(this.kana);
            });
        });
    }
}

export default KanaFilter;
