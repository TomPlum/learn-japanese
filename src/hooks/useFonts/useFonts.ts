import { FontsResponse } from "hooks/useFonts/types.ts";
import { useCallback } from "react";
import { Font } from "components/ui/buttons/FontSelectorButton";

const defaultFont: Font = { slug: "default", name: "Arial" }

const fonts: Font[] =  [
  defaultFont,
  { slug: "handwriting", name: "SanafonMugi Handwriting" },
  { slug: "gothic", name: "K Gothic" },
  { slug: "mincho", name: "Appli Mincho" }
]

export const useFonts = (): FontsResponse => {
  const getFonts = useCallback(() => {
    return Promise.resolve(fonts)
  }, [])

  const getSelectedFont = useCallback(() => {
    try {
      const cachedSelection = localStorage.getItem("font") ?? ""
      return fonts.find((font) => font.name === cachedSelection)
    } catch {
      return undefined
    }
  }, [getFonts])

  const findByFontName = useCallback((name: string) => {
    return fonts.find((font) => font.name === name) ?? defaultFont
  }, [])

  return {
    getFonts,
    getSelectedFont,
    findByFontName
  }
}

export default useFonts