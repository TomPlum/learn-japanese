import { Topic } from "../types/Topic";
import Learnable from "../types/learn/Learnable";
import { KanaRepository } from "./KanaRepository";
import CalendarRepository from "./CalendarRepository";
import { LearnSessionSettings } from "../components/layout/GameSettingsMenu";
import { KanjiRepository } from "./KanjiRepository";

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
        }

        return [];
    }
}