import { Filter } from "../Filter";
import { Learnable } from "../../domain/learn/Learnable";

class KanjiFilter implements Filter<Learnable> {

    private readonly kanji: string;

    constructor(kanji: string) {
        this.kanji = kanji;
    }

    apply(values: Learnable[]): Learnable[] {
        if (!this.kanji) {
            return [];
        }

        return values.filter((value: Learnable) => {
            return value.getKanjiVariation()?.includes(this.kanji);
        });
    }

}

export default KanjiFilter;
