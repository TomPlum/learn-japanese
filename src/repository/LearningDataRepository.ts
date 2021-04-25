import Topic from "../types/Topic";
import Learnable from "../types/learn/Learnable";
import { KanaRepository } from "./KanaRepository";
import CalendarRepository from "./CalendarRepository";
import { LearnSessionSettings } from "../components/layout/SettingsMenu";
import { KanjiRepository } from "./KanjiRepository";
import BasicsRepository from "./BasicsRepository";
import NumbersRepository from "./NumbersRepository";
import SentenceStructureRepository from "./SentenceStructureRepository";

export default class LearningDataRepository {
    public read(config?: LearnSessionSettings): Learnable[] {
        if (!config) return [];

        const settings = config.settings;

        switch (config.topic) {
            case Topic.KANA: {
                return new KanaRepository().read(settings.kana!);
            }
            case Topic.CALENDAR: {
                return new CalendarRepository().read(settings.calendar!);
            }
            case Topic.KANJI: {
                return new KanjiRepository().read(settings.kanji!);
            }
            case Topic.BASICS: {
                return new BasicsRepository().read(settings.basics!);
            }
            case Topic.NUMBERS: {
                return new NumbersRepository().read(settings.numbers!);
            }
            case Topic.GRAMMAR: {
                return new SentenceStructureRepository().read(settings.sentence!);
            }
            default: {
                return [];
            }
        }
    }
}