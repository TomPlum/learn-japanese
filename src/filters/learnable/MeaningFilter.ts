import { Filter } from "../Filter"
import { Learnable } from "types/learn/Learnable"

/**
 * Filters out Learnable data objects whose meanings don't contain part or all of
 * the given search term. For example:
 *
 * - Dataset: ["Monday", "Tuesday", "Wednesday"]
 * - Search Term: "Monday" -> ["Monday"]
 * - Search Term: "day" -> ["Monday", "Tuesday", "Wednesday"]
 */
class MeaningFilter<T extends Learnable> implements Filter<T> {
  private readonly meaning: string

  constructor(meaning: string) {
    this.meaning = meaning
  }

  apply(values: T[]): T[] {
    if (!this.meaning) {
      return []
    }

    return values.filter((datum: T) => {
      return datum.getMeanings().some((meaning: string) => {
        return meaning.includes(this.meaning)
      })
    })
  }
}

export default MeaningFilter
