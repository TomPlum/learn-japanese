import { Filter } from "../Filter"
import { Learnable } from "types/learn/Learnable"

export default class ExclusionFilter implements Filter<Learnable> {
  private readonly exclusion: Learnable

  constructor(exclusion: Learnable) {
    this.exclusion = exclusion
  }

  apply(data: Learnable[]): Learnable[] {
    return data.filter((item) => !item.equals(this.exclusion))
  }
}
