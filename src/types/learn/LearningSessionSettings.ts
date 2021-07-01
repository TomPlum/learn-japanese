import { KanaSettings, SessionSettings } from "../game/GameSettings";
import { KanjiSettings } from "../../repository/KanjiRepository";

export interface LearnSettings extends SessionSettings { }

export interface LearningSessionSettings {
    kana?: KanaSettings;
    calendar?: LearnCalendarSettings;
    kanji?: KanjiSettings;
    basics?: LearnBasicsSettings;
    numbers?: LearnNumbersSettings;
    sentence?: LearnSentenceStructureSettings;
}

export interface LearnCalendarSettings extends LearnSettings {
    days?: boolean;
    months?: boolean;
    season?: boolean;
    nouns?: boolean;
    phrases?: boolean;
}

export interface LearnBasicsSettings extends LearnSettings {
    colours?: boolean;
    animals?: boolean;
    directions?: boolean;
    weather?: boolean;
    family?: boolean;
    body?: boolean;
}

export interface LearnNumbersSettings extends LearnSettings {
    numbers?: boolean;
    counters?: boolean;
    age?: boolean;
    exceptions?: boolean;
    units?: boolean;
    sequence?: boolean;
}

export interface LearnSentenceStructureSettings extends LearnSettings {
    adverbs?: boolean;
    particles?: boolean;
    expressions?: boolean;
    verbs?: boolean;
    nouns?: boolean;
    adjectives?: boolean;
}