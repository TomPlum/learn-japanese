import LearningDataService from "./LearningDataService.ts"
import { KyoikuGrade } from "types/kanji/KyoikuGrade.ts"
import DataSettings from "types/session/settings/data/DataSettings.ts"
import { NumbersSettingsBuilder } from "types/session/settings/data/NumbersSettings.ts"
import { BasicsSettingsBuilder } from "types/session/settings/data/BasicsSettings.ts"
import { KanjiSettingsBuilder } from "types/session/settings/data/KanjiSettings.ts"
import { CalendarSettingsBuilder } from "types/session/settings/data/CalendarSettings.ts"
import { SentenceStructureSettingsBuilder } from "types/session/settings/data/SentenceStructureSettings.ts"
import { KanaSettingsBuilder } from "types/session/settings/data/KanaSettings.ts"
import { Kanji } from "types/kanji/Kanji.ts"
import { KanjiReading } from "types/kanji/KanjiReading.ts"
import { ReadingType } from "types/kanji/ReadingType.ts"
import JLTPLevel from "types/learn/JLTPLevel.ts"
import { Example } from "types/kanji/Example.ts"

const mockKanaService = vi.fn()
vi.mock("service/KanaService", () => ({
  default: function () {
    return { getKana: mockKanaService }
  }
}))

const mockCalendarRepository = vi.fn()
vi.mock("repository/CalendarRepository", () => ({
  default: function () {
    return { read: mockCalendarRepository }
  }
}))

const mockGetKanji = vi.fn()
vi.mock("service/KanjiService", () => ({
  default: function () {
    return { getKanjiPage: mockGetKanji }
  }
}))

const mockBasicsRepository = vi.fn()
vi.mock("repository/BasicsRepository", () => ({
  default: function () {
    return { read: mockBasicsRepository }
  }
}))

const mockNumbersRepository = vi.fn()
vi.mock("repository/NumbersRepository", () => ({
  default: function () {
    return { read: mockNumbersRepository }
  }
}))

const mockSentenceStructureRepository = vi.fn()
vi.mock("repository/SentenceStructureRepository", () => ({
  default: function () {
    return { read: mockSentenceStructureRepository }
  }
}))

describe("Learn Data Repository", () => {
  const service = new LearningDataService()

  test("Should delegate to the KanaRepository when the topic is Kana", () => {
    const config: DataSettings = new KanaSettingsBuilder().withHiragana().build()
    service.read(config)
    expect(mockKanaService).toHaveBeenCalledWith(config)
  })

  test("Should delegate to the CalendarRepository when the topic is Calendar", () => {
    const config: DataSettings = new CalendarSettingsBuilder().withDays().build()
    service.read(config)
    expect(mockCalendarRepository).toHaveBeenCalledWith(config)
  })

  test("Should delegate to the kanji service when the topic is Kanji", () => {
    const kanji = new Kanji(
      "魚",
      [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
      ["fish"],
      KyoikuGrade.TWO,
      JLTPLevel.N5,
      "https://jisho.org/魚",
      [new Example("金魚", ["きんぎょ"], ["goldfish"])],
      10,
      ["animal"]
    )
    mockGetKanji.mockResolvedValueOnce({ kanji: [kanji] })

    const config: DataSettings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE]).build()
    return service.read(config).then(() => {
      expect(mockGetKanji).toHaveBeenCalledWith(0, 9999, [KyoikuGrade.ONE])
    })
  })

  test("Should delegate to the BasicsRepository when the topic is Basics", () => {
    const config: DataSettings = new BasicsSettingsBuilder().withColours().build()
    return service.read(config).then(() => {
      expect(mockBasicsRepository).toHaveBeenCalledWith(config)
    })
  })

  test("Should delegate to the NumbersRepository when the topic is Numbers & Counting", () => {
    const config: DataSettings = new NumbersSettingsBuilder().withNumbers().build()
    service.read(config)
    expect(mockNumbersRepository).toHaveBeenCalledWith(config)
  })

  test("Should delegate to the SentenceStructureRepository when the topic is Sentence Structure", () => {
    const config: DataSettings = new SentenceStructureSettingsBuilder().withNouns().build()
    service.read(config)
    expect(mockSentenceStructureRepository).toHaveBeenCalledWith(config)
  })

  test("Passing in falsy settings should return an empty array", () => {
    return service.read(undefined).then((response) => {
      expect(response).toHaveLength(0)
    })
  })
})
