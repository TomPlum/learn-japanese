import KanjiService from "./KanjiService.ts"
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts"
import { KanjiSettingsBuilder } from "types/session/settings/data/KanjiSettings.ts"
import { PaginationRequest } from "../rest/request/PaginationRequest.ts"
import { Kanji } from "types/kanji/Kanji.ts"
import { KanjiReading } from "types/kanji/KanjiReading.ts"
import { ReadingType } from "types/kanji/ReadingType.ts"
import JLTPLevel from "types/learn/JLTPLevel.ts"

//Mock Kanji Repository
const mockRepoRead = vi.fn()
const mockRepoGetBySearchTerm = vi.fn()
const mockRepoGetByFilter = vi.fn()
const mockGetRandom = vi.fn()

vi.mock("repository/KanjiRepository", () => ({
  default: function () {
    return {
      read: mockRepoRead,
      getByFilter: mockRepoGetByFilter,
      getBySearchTerm: mockRepoGetBySearchTerm,
      getRandomKanji: mockGetRandom
    }
  }
}))

const kanji = new Kanji(
  "魚",
  [new KanjiReading("sakana", "さかな", ReadingType.KUN)],
  ["fish"],
  KyoikuGrade.TWO,
  JLTPLevel.N5,
  "",
  [],
  10,
  []
)

describe("Kanji Service", () => {
  const service = new KanjiService()

  describe("Get Kanji Page", () => {
    it("Should call the repository with the given pagination details and grades", () => {
      mockRepoRead.mockResolvedValueOnce({ results: [kanji], pages: 1, quantity: 1 })
      const grades = [KyoikuGrade.ONE, KyoikuGrade.TWO]
      return service.getKanjiPage(0, 10, grades).then(() => {
        const expectedSettings = new KanjiSettingsBuilder().withGrades(grades).build()
        const expectedPagination: PaginationRequest = { page: 0, size: 10 }
        expect(mockRepoRead).toHaveBeenLastCalledWith(expectedSettings, expectedPagination)
      })
    })

    it("Should call the repository with all grades if they are omitted", () => {
      mockRepoRead.mockResolvedValueOnce({ results: [kanji], pages: 1, quantity: 1 })
      return service.getKanjiPage(0, 10).then(() => {
        const expectedSettings = new KanjiSettingsBuilder().withGrades(KyoikuGrade.ALL).build()
        const expectedPagination: PaginationRequest = { page: 0, size: 10 }
        expect(mockRepoRead).toHaveBeenLastCalledWith(expectedSettings, expectedPagination)
      })
    })

    it("Should return the kanji characters if the repository call is successful", () => {
      mockRepoRead.mockResolvedValueOnce({ results: [kanji], pages: 1, quantity: 1 })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.kanji[0].value).toStrictEqual(kanji)
      })
    })

    it("Should return an undefined field", () => {
      mockRepoRead.mockResolvedValueOnce({ results: [kanji], pages: 1, quantity: 1 })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.kanji[0].field).toBeUndefined()
      })
    })

    it("Should return an undefined error if the repository call is successful", () => {
      mockRepoRead.mockResolvedValueOnce({ results: [kanji], pages: 1, quantity: 1 })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.error).toBeUndefined()
      })
    })

    it("Should return the an empty kanji array if the repository call fails", () => {
      mockRepoRead.mockRejectedValueOnce({ error: "Oh No!" })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.kanji).toStrictEqual([])
      })
    })

    it("Should return the error if the repository call fails and it returns one", () => {
      mockRepoRead.mockRejectedValueOnce({ error: "Oh dear :(" })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.error).toBe("Oh dear :(")
      })
    })

    it("Should return a default error message if the repository call fails but returns no error", () => {
      mockRepoRead.mockRejectedValueOnce({ error: undefined })
      return service.getKanjiPage(0, 10).then((response) => {
        expect(response.error).toBe("An unknown error has occurred.")
      })
    })
  })

  describe("Get Kanji By Search Term", () => {
    it("Should call the repository with the search term, page and page size", () => {
      mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] })
      return service.search(0, 10, "student").then(() => {
        expect(mockRepoGetBySearchTerm).toHaveBeenLastCalledWith(0, 10, "student")
      })
    })

    it("Should return an array of results if there is data in the repository response", () => {
      mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] })
      return service.search(0, 10, "student").then((response) => {
        expect(response.kanji).toStrictEqual([{ field: "meaning", value: kanji }])
      })
    })

    it("Should return an undefined error if there is data in the repository response", () => {
      mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [{ field: "meaning", value: kanji }] })
      return service.search(0, 10, "student").then((response) => {
        expect(response.error).toBeUndefined()
      })
    })

    it("Should return an empty array of results if there is no data in the repository response", () => {
      mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [] })
      return service.search(0, 10, "student").then((response) => {
        expect(response.kanji).toStrictEqual([])
      })
    })

    it("Should return the response error if there is no data in the repository response", () => {
      mockRepoGetBySearchTerm.mockResolvedValueOnce({ results: [], error: "Something went wrong." })
      return service.search(0, 10, "student").then((response) => {
        expect(response.error).toBe("Something went wrong.")
      })
    })

    it("Should return an empty array of results if the repository call is rejected", () => {
      mockRepoGetBySearchTerm.mockRejectedValueOnce({ results: [], error: "Something went wrong." })
      return service.search(0, 10, "student").catch((response) => {
        expect(response.kanji).toStrictEqual([])
      })
    })

    it("Should return the error message if the repository call is rejected", () => {
      mockRepoGetBySearchTerm.mockRejectedValueOnce({ results: [], error: "Something went wrong." })
      return service.search(0, 10, "student").catch((response) => {
        expect(response.error).toBe("Something went wrong.")
      })
    })
  })

  describe("Random Kanji", () => {
    it("Should call the repository", () => {
      mockGetRandom.mockResolvedValueOnce({})
      return service.randomKanji().then(() => {
        expect(mockGetRandom).toHaveBeenCalled()
      })
    })

    it("Should return the kanji from the repository", () => {
      mockGetRandom.mockResolvedValueOnce(kanji)
      return service.randomKanji().then((response) => {
        expect(response.value).toBe(kanji)
      })
    })

    it("Should return an error message if the response is undefined", () => {
      mockGetRandom.mockResolvedValueOnce(undefined)
      return service.randomKanji().then((response) => {
        expect(response.error).toBe("Failed to retrieve random kanji")
      })
    })

    it("Should return an error message if the repository call is rejected", () => {
      mockGetRandom.mockRejectedValueOnce(undefined)
      return service.randomKanji().then((response) => {
        expect(response.error).toBe("Failed to retrieve random kanji")
      })
    })
  })
})
