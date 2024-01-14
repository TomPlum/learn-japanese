import Topic from "types/Topic"
import { Learnable } from "types/learn/Learnable"
import CalendarRepository from "../repository/CalendarRepository"
import BasicsRepository from "../repository/BasicsRepository"
import NumbersRepository from "../repository/NumbersRepository"
import SentenceStructureRepository from "../repository/SentenceStructureRepository"
import DataSettings from "types/session/settings/data/DataSettings"
import KanaSettings from "types/session/settings/data/KanaSettings"
import CalendarSettings from "types/session/settings/data/CalendarSettings"
import KanjiSettings from "types/session/settings/data/KanjiSettings"
import BasicsSettings from "types/session/settings/data/BasicsSettings"
import SentenceStructureSettings from "types/session/settings/data/SentenceStructureSettings"
import NumbersSettings from "types/session/settings/data/NumbersSettings"
import KanaService from "./KanaService"
import KanjiService from "./KanjiService"

export default class LearningDataService {
  private readonly _kanaService = new KanaService()
  private readonly _kanjiService = new KanjiService()
  private readonly _basicsRepository = new BasicsRepository()
  private readonly _numbersRepository = new NumbersRepository()
  private readonly _sentenceStructureRepository = new SentenceStructureRepository()
  private readonly _calendarRepository = new CalendarRepository()

  public async read(settings?: DataSettings): Promise<Learnable[]> {
    if (!settings) return []

    switch (settings.topic) {
      case Topic.KANA: {
        return this._kanaService.getKana(settings as KanaSettings)
      }
      case Topic.CALENDAR: {
        return this._calendarRepository.read(settings as CalendarSettings)
      }
      case Topic.KANJI: {
        return this._kanjiService.getKanjiPage(0, 9999, (settings as KanjiSettings).grades).then((response) => {
          return response.kanji.map((result) => result.value)
        })
      }
      case Topic.BASICS: {
        return this._basicsRepository.read(settings as BasicsSettings)
      }
      case Topic.NUMBERS: {
        return this._numbersRepository.read(settings as NumbersSettings)
      }
      case Topic.GRAMMAR: {
        return this._sentenceStructureRepository.read(settings as SentenceStructureSettings)
      }
      default: {
        return []
      }
    }
  }
}
