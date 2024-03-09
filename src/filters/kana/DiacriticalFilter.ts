import { Filter } from "../Filter"
import { Kana } from "types/kana/Kana"

export default class DiacriticalFilter implements Filter<Kana> {
  private readonly include: boolean
  private readonly includeDiagraphs: boolean

  constructor(include = false, includeDiagraphs = true) {
    this.include = include
    this.includeDiagraphs = includeDiagraphs
  }

  apply(values: Kana[]): Kana[] {
    return values.filter((kana) => {
      if (!this.includeDiagraphs && kana.isDiagraph()) {
        return false
      }
      return this.include ? kana.isDiacritical : !kana.isDiacritical
    })
  }
}
