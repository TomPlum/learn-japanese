import FontService from "./FontService.ts"
import { localStorageMock } from "../setupTests.ts"

const mockFontRepository = vi.fn()
vi.mock("repository/FontRepository", () => ({
  default: function () {
    return { read: mockFontRepository }
  }
}))

const fonts = [
  { displayName: "Default", name: "" },
  { displayName: "Handwriting", name: "SanafonMugi Handwriting" },
  { displayName: "Gothic", name: "K Gothic" },
  { displayName: "Mincho", name: "Appli Mincho" }
]

describe("Font Service", () => {
  const service = new FontService()

  beforeEach(() => {
    mockFontRepository.mockResolvedValueOnce(fonts)
    localStorageMock.clear()
  })

  describe("Get Fonts", () => {
    it("Should call the repository", () => {
      return service.getFonts().then(() => {
        expect(mockFontRepository).toHaveBeenCalled()
      })
    })

    it("Should return the fonts from the repository", () => {
      return service.getFonts().then((fonts) => {
        expect(fonts).toStrictEqual(fonts)
      })
    })
  })
})
