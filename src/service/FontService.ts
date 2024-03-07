import FontRepository from "../repository/FontRepository"
import { Font } from "components/ui/buttons/FontSelectorButton"

class FontService {
  private readonly _repository = new FontRepository()

  /**
   * Retrieves all available fonts.
   * These fonts are specifically for Japanese kanji and/or kana.
   * @return fonts An array of fonts.
   */
  public getFonts(): Promise<Font[]> {
    return this._repository.read().then((response) => {
      return response
    })
  }
}

export default FontService
