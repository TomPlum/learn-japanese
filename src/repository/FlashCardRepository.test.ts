import FlashCardRepository from "./FlashCardRepository.ts"
import { FlashCard } from "../domain/learn/FlashCard.ts"
import SpaceRepetitionDetails from "../domain/learn/spacedrepetition/SpaceRepetitionDetails.ts"
import { Kanji } from "../domain/kanji/Kanji.ts"
import { KanjiReading } from "../domain/kanji/KanjiReading.ts"
import { ReadingType } from "../domain/kanji/ReadingType.ts"
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade.ts"
import RestClient from "../rest/RestClient.ts"
import { Example } from "../domain/kanji/Example.ts"
import JLTPLevel from "../domain/learn/JLTPLevel.ts"

const mockMessageQueue = vi.fn()
vi.mock("rest/MessageQueue", () => ({
  default: {
    fromLocalStorage: vi.fn().mockImplementation(function () {
      return { enqueue: mockMessageQueue }
    })
  }
}))

const mockGet = vi.fn()
RestClient.get = mockGet

const mockPost = vi.fn()
RestClient.post = mockPost

beforeEach(() => {
  vi.resetAllMocks()
})

describe("Flash Card Repository", () => {
  const repository = new FlashCardRepository()

  describe("Get Kanji Flash Cards", () => {
    it("Should call the rest client with the correct endpoint", () => {
      mockGet.mockResolvedValue({ data: [] })
      repository.getKanjiFlashCards()
      expect(mockGet).toHaveBeenCalledWith("/learn/flash-cards/kanji")
    })

    it("Should return an array of flash cards if the user has any outstanding", () => {
      mockGet.mockResolvedValue({
        data: [
          {
            id: 10,
            kanji: {
              character: "一",
              grade: 1,
              strokes: 1,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
              meanings: ["one"],
              readings: [{ value: "ひとつ", type: "kun" }],
              examples: [{ value: "一つ", kana: ["ひとつ"], english: ["one"] }],
              tags: ["number"]
            },
            dueDate: "2021-10-02",
            easiness: 3.0,
            repetition: 4,
            interval: 2
          }
        ]
      })

      return repository.getKanjiFlashCards().then((response) => {
        expect(response).toStrictEqual([
          new FlashCard(
            10,
            new Kanji(
              "一",
              [new KanjiReading("hitotsu", "ひとつ", ReadingType.KUN)],
              ["one"],
              KyoikuGrade.ONE,
              JLTPLevel.N4,
              "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
              [new Example("一つ", ["ひとつ"], ["one"])],
              1,
              ["number"]
            ),
            new SpaceRepetitionDetails(3.0, 2, 4, "2021-10-02")
          )
        ])
      })
    })

    it("Should return an empty array if the response has no data", () => {
      mockGet.mockResolvedValue({ data: undefined })
      return repository.getKanjiFlashCards().then((response) => {
        expect(response).toStrictEqual([])
      })
    })

    it("Should reject the promise with the response if the API call fails", () => {
      mockGet.mockRejectedValue({ error: "Internal Server Error (500)" })
      return repository.getKanjiFlashCards().catch((response) => {
        expect(response).toStrictEqual({ error: "Internal Server Error (500)" })
      })
    })
  })

  describe("Update", () => {
    const kanji = new Kanji(
      "一",
      [new KanjiReading("ichi", "いち", ReadingType.ON)],
      ["one"],
      KyoikuGrade.ONE,
      JLTPLevel.N5,
      "",
      [],
      1,
      ["number"]
    )

    it("Should call the message queue with the endpoint details and request", () => {
      mockPost.mockResolvedValueOnce({})
      const card = new FlashCard(10, kanji, new SpaceRepetitionDetails(2.5, 0, 0, "2020-10-21"))

      repository.update(card)

      expect(mockPost).toHaveBeenCalledWith("/flash-cards/kanji/update", {
        dueDate: "2020-10-21",
        easiness: 2.5,
        id: 10,
        interval: 0,
        repetition: 0
      })
    })
  })
})
