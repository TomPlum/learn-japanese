import KanaService from "./KanaService.ts"
import { KanaSettingsBuilder } from "../domain/session/settings/data/KanaSettings.ts"
import { Kana } from "../domain/kana/Kana.ts"
import KanaType from "../domain/kana/KanaType.ts"
import { KanaColumn } from "../domain/kana/KanaColumn.ts"

const mockGetKana = vi.fn()
vi.mock("repository/KanaRepository", () => ({
  default: function () {
    return { read: mockGetKana }
  }
}))

const hiragana = [
  new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
  new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
]

describe("Kana Service", () => {
  const service = new KanaService()

  it("Should call the repository with the given settings", () => {
    mockGetKana.mockResolvedValueOnce([])
    const settings = new KanaSettingsBuilder().withEverything().build()
    return service.getKana(settings).then(() => {
      expect(mockGetKana).toHaveBeenCalledWith(settings)
    })
  })

  it("Should return the kana array if the repository call succeeds", () => {
    mockGetKana.mockResolvedValueOnce(hiragana)
    const settings = new KanaSettingsBuilder().withEverything().build()
    return service.getKana(settings).then((response) => {
      expect(response).toStrictEqual(hiragana)
    })
  })

  it("Should return an empty array if the repository call fails", () => {
    mockGetKana.mockRejectedValueOnce({ error: "Boom" })
    const settings = new KanaSettingsBuilder().withEverything().build()
    return service.getKana(settings).then((response) => {
      expect(response).toStrictEqual([])
    })
  })
})
