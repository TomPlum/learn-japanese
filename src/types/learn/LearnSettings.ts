import { KanaSettings } from "../game/GameSettings";
import { KanjiSettings } from "../../repository/KanjiRepository";

export interface LearnSettings {
    kana?: KanaSettings;
    calendar?: LearnCalendarSettings;
    kanji?: KanjiSettings;
    basics?: LearnBasicsSettings;
}

export interface LearnCalendarSettings {
    days?: boolean;
    months?: boolean;
    season?: boolean;
    nouns?: boolean;
    phrases?: boolean;
}

export interface LearnBasicsSettings {
    colours?: boolean;
    animals?: boolean;
    directions?: boolean;
    weather?: boolean;
    family?: boolean;
    body?: boolean;
}