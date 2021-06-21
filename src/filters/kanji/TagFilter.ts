import { Kanji } from "../../types/kanji/Kanji";
import { Filter } from "../Filter";

class TagFilter implements Filter<Kanji> {

    private readonly tags: string[];

    constructor(tags: string[]) {
        this.tags = tags;
    }

    apply(values: Kanji[]): Kanji[] {
        return values.filter((kanji: Kanji) => {
            return kanji.getTags().some((tag: string) => this.tags.includes(tag));
        });
    }
}

export default TagFilter;