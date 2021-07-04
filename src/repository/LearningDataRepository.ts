import Topic from "../types/Topic";
import { Learnable } from "../types/learn/Learnable";
import { KanaRepository } from "./KanaRepository";
import CalendarRepository from "./CalendarRepository";
import { KanjiRepository } from "./KanjiRepository";
import BasicsRepository from "./BasicsRepository";
import NumbersRepository from "./NumbersRepository";
import SentenceStructureRepository from "./SentenceStructureRepository";
import DataSettings, { BasicsSettings, CalendarSettings, KanaSettings, KanjiSettings, NumbersSettings, SentenceStructureSettings } from "../types/session/DataSettings";

export default class LearningDataRepository {
    public read(settings?: DataSettings): Learnable[] {
        if (!settings) return [];

        switch (settings.topic) {
            case Topic.KANA: {
                return new KanaRepository().read(settings as KanaSettings);
            }
            case Topic.CALENDAR: {
                return new CalendarRepository().read(settings as CalendarSettings);
            }
            case Topic.KANJI: {
                return new KanjiRepository().read(settings as KanjiSettings);
            }
            case Topic.BASICS: {
                return new BasicsRepository().read(settings as BasicsSettings);
            }
            case Topic.NUMBERS: {
                return new NumbersRepository().read(settings as NumbersSettings);
            }
            case Topic.GRAMMAR: {
                return new SentenceStructureRepository().read(settings as SentenceStructureSettings);
            }
            default: {
                return [];
            }
        }
    }
}