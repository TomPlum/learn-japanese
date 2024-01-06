import KanaRepository from "./KanaRepository.ts"
import { Kana } from "../domain/kana/Kana.ts"
import KanaType from "../domain/kana/KanaType.ts"
import { KanaColumn } from "../domain/kana/KanaColumn.ts"
import hiragana from "../data/Hiragana.ts"
import { KanaData } from "../data/DataTypes.ts"
import katakana from "../data/Katakana.ts"
import { KanaSettingsBuilder } from "../domain/session/settings/data/KanaSettings.ts"
import RestClient from "../rest/RestClient.ts"
import { Mock } from "vitest";

vi.mock("data/Hiragana")
vi.mock("data/Katakana")

const mockConverter = vi.fn()
vi.mock("converter/KanaConverter", () => ({
  default: function () {
    return { convert: mockConverter }
  }
}))

const mockHiragana = hiragana as Mock<KanaData[]>
const mockKatakana = katakana as Mock<KanaData[]>
const mockGet = vi.fn()

const hiraganaResponse = [{ character: "あ", romaji: ["a"], column: "vowel", diacritical: false }]
const katakanaResponse = [{ character: "ア", romaji: ["a"], column: "vowel", diacritical: false }]

const hiraganaDomain = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
const katakanaDomain = new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false)

beforeEach(() => {
  mockHiragana.mockReturnValue([
    { name: "あ", code: "\u3042", romaji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "い", code: "\u3044", romaji: ["i"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "う", code: "\u3046", romaji: ["u"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "え", code: "\u3048", romaji: ["e"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "お", code: "\u304A", romaji: ["o"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "ぎ", code: "\u304E", romaji: ["gi"], column: KanaColumn.K, diacritical: true },
    { name: "ぎゃ", code: "\u304E\u3083", romaji: ["gya"], column: KanaColumn.K, diacritical: true }
  ])

  mockKatakana.mockReturnValue([
    { name: "ア", code: "\u30A2", romaji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "イ", code: "\u30A4", romaji: ["i"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "ウ", code: "\u30A6", romaji: ["u"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "エ", code: "\u30A8", romaji: ["e"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "オ", code: "\u30AA", romaji: ["o"], column: KanaColumn.VOWEL, diacritical: false },
    { name: "ズ", code: "\u30BA", romaji: ["zu"], column: KanaColumn.S, diacritical: true },
    { name: "シャ", code: "\u30B7\u30E3", romaji: ["sha"], column: KanaColumn.S, diacritical: false }
  ])

  RestClient.get = mockGet
})

describe("Kana Repository", () => {
  const repository = new KanaRepository()

  beforeEach(() => {
    mockConverter.mockReturnValueOnce(hiraganaDomain)
    mockConverter.mockReturnValueOnce(katakanaDomain)
  })

  describe("Read All", () => {
    it("Should call the Rest Client with the correct endpoint", () => {
      mockGet.mockResolvedValueOnce({ data: [] })
      return repository.readAll().then(() => {
        expect(mockGet).toHaveBeenCalledWith("/kana/all")
      })
    })

    it("Should return the converted hiragana and katakana", () => {
      mockGet.mockResolvedValueOnce({ data: { hiragana: hiraganaResponse, katakana: katakanaResponse } })
      return repository.readAll().then((response) => {
        expect(response).toStrictEqual([hiraganaDomain, katakanaDomain])
      })
    })

    it("Should return an empty array if the API call succeeds but no data is returned", () => {
      mockGet.mockResolvedValueOnce({ data: undefined })
      return repository.readAll().then((response) => {
        expect(response).toStrictEqual([])
      })
    })

    it("Should return an empty array if the API call fails", () => {
      mockGet.mockRejectedValueOnce({})
      return repository.readAll().then((response) => {
        expect(response).toStrictEqual([])
      })
    })
  })

  it("Should return only the quantity specified when the config parameter is passed", () => {
    const settings = new KanaSettingsBuilder().withHiragana().withQuantity(3).build()
    return repository.read(settings).then((response) => {
      expect(response).toHaveLength(3)
    })
  })

  it("Should return only diacriticals when specifying diacriticals", () => {
    const settings = new KanaSettingsBuilder()
      .withHiragana()
      .withKatakana()
      .withDiacriticals()
      .withDiagraphs(false)
      .withRegularKana(false)
      .build()

    return repository.read(settings).then((response) => {
      expect(response.map((data: Kana) => data.code)).toStrictEqual(["ぎ", "ズ"])
    })
  })

  it("Should return max quantity when passed as undefined", () => {
    const settings = new KanaSettingsBuilder().withHiragana().withMaxQuantity().build()
    return repository.read(settings).then((response) => {
      expect(response).toHaveLength(5)
    })
  })

  it("Should return only diagraphs when specifying them", () => {
    const settings = new KanaSettingsBuilder().withHiragana().withKatakana().withOnlyDiagraphs().build()
    return repository.read(settings).then((response) => {
      expect(response.map((data: Kana) => data.code)).toStrictEqual(["ぎゃ", "シャ"])
    })
  })

  it("Should return all kana when specifying everything", () => {
    const settings = new KanaSettingsBuilder().withEverything().build()
    return repository.read(settings).then((response) => {
      const expected = ["あ", "い", "う", "え", "お", "ぎ", "ぎゃ", "ア", "イ", "ウ", "エ", "オ", "ズ", "シャ"]
      expect(response.map((data: Kana) => data.code)).toStrictEqual(expected)
    })
  })

  describe("Hiragana", () => {
    describe("Read", () => {
      it("Should convert the JSON values into Kana objects", () => {
        mockHiragana.mockReturnValue([
          {
            name: "あ",
            code: "\u3042",
            romaji: ["a"],
            column: KanaColumn.VOWEL,
            diacritical: false
          }
        ])

        const settings = new KanaSettingsBuilder().withHiragana().build()

        return repository.read(settings).then((response) => {
          expect(response[0]).toStrictEqual(new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false))
        })
      })
    })
  })

  describe("Katakana", () => {
    describe("Read", () => {
      it("Should convert the JSON values into Kana objects", () => {
        mockKatakana.mockReturnValue([
          {
            name: "ア",
            code: "\u30A2",
            romaji: ["a"],
            column: KanaColumn.VOWEL,
            diacritical: false
          }
        ])
        const settings = new KanaSettingsBuilder().withKatakana().build()
        return repository.read(settings).then((response) => {
          expect(response[0]).toStrictEqual(new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false))
        })
      })
    })
  })
})
