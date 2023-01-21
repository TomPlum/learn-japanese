import { Filter } from "../Filter"
import { Learnable } from "../../domain/learn/Learnable"

class KanjiFilter<T extends Learnable> implements Filter<T> {
    private readonly kanji: string

    constructor(kanji: string) {
        this.kanji = kanji
    }

    apply(values: T[]): T[] {
        if (!this.kanji) {
            return []
        }

        return values.filter((value: T) => {
            return value.getKanjiVariation()?.includes(this.kanji)
        })
    }
}

export default KanjiFilter
