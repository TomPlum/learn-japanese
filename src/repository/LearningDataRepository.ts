import Topic from "../domain/Topic";
import { Learnable } from "../domain/learn/Learnable";
import KanaRepository from "./KanaRepository";
import CalendarRepository from "./CalendarRepository";
import KanjiRepository from "./KanjiRepository";
import BasicsRepository from "./BasicsRepository";
import NumbersRepository from "./NumbersRepository";
import SentenceStructureRepository from "./SentenceStructureRepository";
import DataSettings from "../domain/session/settings/data/DataSettings";
import KanaSettings from "../domain/session/settings/data/KanaSettings";
import CalendarSettings from "../domain/session/settings/data/CalendarSettings";
import KanjiSettings from "../domain/session/settings/data/KanjiSettings";
import BasicsSettings from "../domain/session/settings/data/BasicsSettings";
import SentenceStructureSettings from "../domain/session/settings/data/SentenceStructureSettings";
import NumbersSettings from "../domain/session/settings/data/NumbersSettings";

export default class LearningDataRepository {
    public async read(settings?: DataSettings): Promise<Learnable[]> {
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
