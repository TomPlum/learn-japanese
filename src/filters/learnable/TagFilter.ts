import { Filter } from "../Filter"
import { Learnable } from "../../domain/learn/Learnable"

/**
 * Filters out Learnable data objects that don't have one of the given tags.
 */
class TagFilter implements Filter<Learnable> {
    private readonly tags: string[]

    constructor(tags: string[]) {
        this.tags = tags
    }

    apply(values: Learnable[]): Learnable[] {
        return values.filter((datum: Learnable) => {
            return datum.getTags().some((tag: string) => this.tags.includes(tag))
        })
    }
}

export default TagFilter
