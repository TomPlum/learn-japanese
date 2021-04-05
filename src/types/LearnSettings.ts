import { KanaSettings } from "./GameSettings";

export interface LearnSettings {
    kana?: KanaSettings;
    calendar?: LearnCalendarSettings;
}

export interface LearnCalendarSettings {
    days?: boolean;
    months?: boolean;
    season?: boolean;
    nouns?: boolean;
    phrases?: boolean;
}