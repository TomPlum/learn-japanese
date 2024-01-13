import FontRepository from "../repository/FontRepository"
import { Font } from "../components/ui/buttons/FontSelectorButton"

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

  /**
   * Retrieves the currently selected global kanji font.
   * Attempts to retrieve it from the browsers local storage.
   *
   * @return font The selected font, or else undefined if not set.
   */
  public getSelectedFont(): Promise<Font | undefined> {
    return this._repository
      .read()
      .then((response) => {
        const cachedSelection = localStorage.getItem("font") ?? ""
        return response.find((font) => font.name === cachedSelection)
      })
      .catch(() => {
        return undefined
      })
  }

  /**
   * Retrieves the font details based on the font-name.
   *
   * @param name The name of the font as it appears in the CSS.
   */
  public findByFontName(name: string): Font {
    return this._repository.findByName(name)
  }
}

export default FontService
