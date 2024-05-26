import { Font } from "components/ui/buttons/FontSelectorButton";

export interface FontsResponse {
  /**
   * Retrieves all available fonts.
   * These fonts are specifically for Japanese kanji and/or kana.
   * @return fonts An array of fonts.
   */
  getFonts: () => Promise<Font[]>

  /**
   * Retrieves the currently selected global kanji font.
   * Attempts to retrieve it from the browsers local storage.
   *
   * @return font The selected font, or else undefined if not set.
   */
  getSelectedFont: () => Promise<Font | undefined>

  /**
   * Retrieves the font details based on the font-name.
   *
   * @param name The name of the font as it appears in the CSS.
   */
  findByFontName: (name: string) => Font
}