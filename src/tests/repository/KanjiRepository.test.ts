import KanjiRepository, { KanjiResponseModel } from "../../repository/KanjiRepository"
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade"
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings"
import RestClient from "../../rest/RestClient"
import { Kanji } from "../../domain/kanji/Kanji"
import { KanjiReading } from "../../domain/kanji/KanjiReading"
import { ReadingType } from "../../domain/kanji/ReadingType"
import { Example } from "../../domain/kanji/Example"
import { PaginationRequest } from "../../rest/request/PaginationRequest"
import JLTPLevel from "../../domain/learn/JLTPLevel"

//Mock Kanji Converter
const mockConverter = vi.fn()
vi.mock(
  "../../converter/KanjiConverter",
  () =>
    function () {
      return { convert: mockConverter }
    }
)

//Mock RestClient Methods
const mockPost = vi.fn()
const mockGet = vi.fn()

const exampleKanji = new Kanji(
  "小",
  [new KanjiReading("shō", "しょう", ReadingType.ON), new KanjiReading("chīsai", "ちいさい", ReadingType.KUN)],
  ["small", "little"],
  KyoikuGrade.ONE,
  JLTPLevel.N5,
  "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
  [new Example("小説", ["しょうせつ"], ["novel", "short story"])],
  10,
  ["size"]
)

const exampleKanjiResponseData: KanjiResponseModel = {
  character: "小",
  grade: 1,
  strokes: 3,
  jlpt: 4,
  source: "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
  meanings: ["small", "little"],
  readings: [
    { value: "ちいさい", type: "kun" },
    { value: "しょう", type: "on" }
  ],
  examples: [{ value: "小説", kana: ["しょうせつ"], english: ["novel", "short story"] }],
  tags: ["size"]
}

beforeEach(() => {
  RestClient.post = mockPost
  RestClient.get = mockGet
  mockConverter.mockImplementation(() => [exampleKanji])
})

describe("Kanji Repository", () => {
  const repository = new KanjiRepository()

  describe("Read", () => {
    it("Should call the /kanji/by-grade endpoint with empty grades and no quantity when settings are empty", () => {
      mockPost.mockResolvedValueOnce({ data: [] })
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-grade", {
          grades: [],
          quantity: undefined,
          paging: { page: 0, size: 9999 }
        })
      })
    })

    it("Should call the /kanji/by-grade endpoint with the quantity if specified", () => {
      mockPost.mockResolvedValueOnce({ data: [] })
      const settings = new KanjiSettingsBuilder().withJoyoKanji().withQuantity(50).build()
      return repository.read(settings).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-grade", {
          grades: [1, 2, 3, 4, 5, 6, 8],
          quantity: 50,
          paging: { page: 0, size: 9999 }
        })
      })
    })

    it("Should call the /kanji/by-grade endpoint with the specified grades", () => {
      mockPost.mockResolvedValueOnce({ data: [] })
      const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.TWO, KyoikuGrade.SIX]).build()
      return repository.read(settings).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-grade", {
          grades: [2, 6],
          quantity: undefined,
          paging: { page: 0, size: 9999 }
        })
      })
    })

    it("Should call the /kanji/by-grade endpoint with the specified grades and quantity", () => {
      mockPost.mockResolvedValueOnce({ data: [] })
      const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).withQuantity(120).build()
      return repository.read(settings).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-grade", {
          grades: [1],
          quantity: 120,
          paging: { page: 0, size: 9999 }
        })
      })
    })

    it("Should call the API endpoint with the specified pagination if specified", () => {
      mockPost.mockResolvedValueOnce({ data: [] })
      const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).build()
      const pagination: PaginationRequest = { page: 0, size: 10 }
      return repository.read(settings, pagination).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-grade", {
          grades: [1],
          paging: { page: 0, size: 10 }
        })
      })
    })

    it("Should return an empty array if there is no data in the API response", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).then((response) => {
        expect(response.results).toStrictEqual([])
      })
    })

    it("Should return the converted kanji objects when there is valid data in the API response", () => {
      mockPost.mockResolvedValueOnce({ data: [exampleKanjiResponseData] })
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).then((response) => {
        expect(response.results).toStrictEqual([exampleKanji])
      })
    })

    it("Should return an 0 pages if there is no data in the API response", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).then((response) => {
        expect(response.pages).toBe(0)
      })
    })

    it("Should return an 0 quantity if there is no data in the API response", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).then((response) => {
        expect(response.quantity).toBe(0)
      })
    })

    it("Should reject the promise if the API call returns an error", () => {
      mockPost.mockRejectedValueOnce("Internal Server Error")
      const settings = new KanjiSettingsBuilder().build()
      return repository.read(settings).catch((response) => {
        expect(response).toBe("Internal Server Error")
      })
    })
  })

  describe("Get By Search Term", () => {
    it("Should call the rest client with the correct endpoint", () => {
      mockPost.mockResolvedValueOnce({ data: { results: [], pages: 5, total: 200 } })
      return repository.getBySearchTerm(0, 10, "student").then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-term/student", { page: 0, size: 10 })
      })
    })

    it("Should return the data if the API call is successful and has data", () => {
      mockPost.mockResolvedValueOnce({
        data: { results: [{ field: "meaning", value: exampleKanji }], pages: 4, total: 100 }
      })
      return repository.getBySearchTerm(0, 10, "student").then((response) => {
        expect(response.results).toStrictEqual([{ field: "meaning", value: exampleKanji }])
      })
    })

    it("Should return an undefined error if the API call was successful and has data", () => {
      mockPost.mockResolvedValueOnce({ data: { results: [{ field: "meaning", value: exampleKanji }] } })
      return repository.getBySearchTerm(0, 10, "student").then((response) => {
        expect(response.error).toBeUndefined()
      })
    })

    it("Should return an empty results array if the API call was successful but with no data", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      return repository.getBySearchTerm(0, 10, "student").then((response) => {
        expect(response.results).toStrictEqual([])
      })
    })

    it("Should return a generic error message if the the API call was successful but with no data", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      return repository.getBySearchTerm(0, 10, "student").then((response) => {
        expect(response.error).toBe("No data in response")
      })
    })

    it("Should return an empty results array if the API call fails", () => {
      mockPost.mockRejectedValueOnce({ data: undefined })
      return repository.getBySearchTerm(0, 10, "student").catch((response) => {
        expect(response.results).toStrictEqual([])
      })
    })

    it("Should return the API error message if the API call fails", () => {
      mockPost.mockRejectedValueOnce({ error: "An internal sever error occurred." })
      return repository.getBySearchTerm(0, 10, "student").catch((response) => {
        expect(response.error).toBe("An internal sever error occurred.")
      })
    })
  })

  describe("Get By Value", () => {
    it("Should call the /kanji/by-character endpoint with the given kanji character", () => {
      mockGet.mockResolvedValueOnce({ data: exampleKanjiResponseData })
      const kanjiCharacter = "小"
      return repository.getByValue(kanjiCharacter).then(() => {
        expect(mockGet).toHaveBeenLastCalledWith("/kanji/by-character/小")
      })
    })

    it("Should return the kanji if it is preset in the API response", () => {
      mockGet.mockResolvedValueOnce({ data: exampleKanjiResponseData })
      const kanjiCharacter = "小"
      return repository.getByValue(kanjiCharacter).then((response) => {
        expect(response).toStrictEqual(exampleKanji)
      })
    })

    it("Should return undefined if the kanji is no found", () => {
      mockGet.mockResolvedValueOnce({ data: undefined })
      const kanjiCharacter = "小"
      return repository.getByValue(kanjiCharacter).then((response) => {
        expect(response).toBeUndefined()
      })
    })

    it("Should reject the promise if the API call returns an error", () => {
      mockGet.mockRejectedValueOnce("Internal Server Error")
      const kanjiCharacter = "小"
      return repository.getByValue(kanjiCharacter).catch((response) => {
        expect(response).toBe("Internal Server Error")
      })
    })
  })

  describe("Get By Filter", () => {
    it("Should call the rest client with the correct endpoint", () => {
      mockPost.mockResolvedValueOnce({ data: { results: [], pages: 5, total: 200 } })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).then(() => {
        expect(mockPost).toHaveBeenLastCalledWith("/kanji/by-filter", {
          search: "person",
          grades: [1, 2, 3],
          levels: [5, 4],
          strokes: 10,
          paging: {
            page: 0,
            size: 10
          }
        })
      })
    })

    it("Should return the data if the API call is successful and has data", () => {
      mockPost.mockResolvedValueOnce({
        data: { results: [{ field: "meaning", value: exampleKanji }], pages: 4, total: 100 }
      })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).then((response) => {
        expect(response.results).toStrictEqual([{ field: "meaning", value: exampleKanji }])
      })
    })

    it("Should return an undefined error if the API call was successful and has data", () => {
      mockPost.mockResolvedValueOnce({ data: { results: [{ field: "meaning", value: exampleKanji }] } })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).then((response) => {
        expect(response.error).toBeUndefined()
      })
    })

    it("Should return an empty results array if the API call was successful but with no data", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).then((response) => {
        expect(response.results).toStrictEqual([])
      })
    })

    it("Should return a generic error message if the the API call was successful but with no data", () => {
      mockPost.mockResolvedValueOnce({ data: undefined })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).then((response) => {
        expect(response.error).toBe("No data in response")
      })
    })

    it("Should return an empty results array if the API call fails", () => {
      mockPost.mockRejectedValueOnce({ data: undefined })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).catch((response) => {
        expect(response.results).toStrictEqual([])
      })
    })

    it("Should return the API error message if the API call fails", () => {
      mockPost.mockRejectedValueOnce({ error: "An internal sever error occurred." })
      return repository.getByFilter(0, 10, "person", [1, 2, 3], [5, 4], 10).catch((response) => {
        expect(response.error).toBe("An internal sever error occurred.")
      })
    })
  })

  describe("Get Random Kanji", () => {
    it("Should call the API with the correct endpoint", () => {
      mockGet.mockResolvedValueOnce({})
      return repository.getRandomKanji().then(() => {
        expect(mockGet).toHaveBeenLastCalledWith("/kanji/random")
      })
    })

    it("Should call the converter with the API response data if present", () => {
      mockGet.mockResolvedValueOnce({ data: exampleKanjiResponseData })
      mockConverter.mockReturnValueOnce([exampleKanji])
      return repository.getRandomKanji().then(() => {
        expect(mockConverter).toHaveBeenCalledWith([exampleKanjiResponseData])
      })
    })

    it("Should return the response from the converter if it has valid data", () => {
      mockGet.mockResolvedValueOnce({ data: exampleKanjiResponseData })
      mockConverter.mockReturnValueOnce([exampleKanji])
      return repository.getRandomKanji().then((response) => {
        expect(response).toBe(exampleKanji)
      })
    })

    it("Should return undefined if the API call resolves but has no data", () => {
      mockGet.mockResolvedValueOnce({ data: undefined })
      return repository.getRandomKanji().then((response) => {
        expect(response).toBeUndefined()
      })
    })

    it("Should return undefined if the API call is rejected", () => {
      mockGet.mockRejectedValueOnce({})
      return repository.getRandomKanji().then((response) => {
        expect(response).toBeUndefined()
      })
    })
  })
})
