import { renderHook } from "@testing-library/react";
import useFonts from "hooks/useFonts/useFonts.ts";
import { Font } from "components/ui/buttons/FontSelectorButton";
import { localStorageMock } from "setupTests.ts";

describe('Fonts Hook', () => {
  describe('Get Fonts', () => {
    it('should return a list of all fonts', async () => {
      const { result } = renderHook(useFonts)
      const fonts = await result.current.getFonts()
      expect(fonts).toStrictEqual<Font[]>([
        { slug: "default", name: "Arial" },
        { slug: "handwriting", name: "SanafonMugi Handwriting" },
        { slug: "gothic", name: "K Gothic" },
        { slug: "mincho", name: "Appli Mincho" }
      ])
    })
  })

  describe('Get Selected Font', () => {
    it('should return the selected font if there is one set', () => {
      localStorageMock.setItem('font', 'SanafonMugi Handwriting')

      const { result } = renderHook(useFonts)
      const selectedFont = result.current.getSelectedFont()

      expect(selectedFont).toStrictEqual<Font>({
        slug: "handwriting",
        name: "SanafonMugi Handwriting"
      })
    })

    it('should return undefined if there is no selected font', () => {
      localStorageMock.setItem('font', undefined)
      const { result } = renderHook(useFonts)
      const selectedFont = result.current.getSelectedFont()
      expect(selectedFont).toBeUndefined()
    })
  })

  describe('Find by font name', () => {
    it('should return the font if the given name matches one', () => {
      const { result } = renderHook(useFonts)
      const font = result.current.findByFontName('K Gothic')
      expect(font).toStrictEqual<Font>({ slug: "gothic", name: "K Gothic" })
    })

    it('should return the default font if the name does not match', () => {
      const { result } = renderHook(useFonts)
      const font = result.current.findByFontName('Montserrat')
      expect(font).toStrictEqual<Font>({ slug: "default", name: "Arial" })
    })
  })
})