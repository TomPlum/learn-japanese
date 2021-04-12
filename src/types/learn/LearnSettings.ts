import { KanaSettings } from "../game/GameSettings";
import { KanjiSettings } from "../../repository/KanjiRepository";

export interface LearnSettings {
    kana?: KanaSettings;
    calendar?: LearnCalendarSettings;
    kanji?: KanjiSettings;
}

export interface LearnCalendarSettings {
    days?: boolean;
    months?: boolean;
    season?: boolean;
    nouns?: boolean;
    phrases?: boolean;
}