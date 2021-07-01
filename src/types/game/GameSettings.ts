import { HintQuantity } from "./HintQuantity";
import { LifeQuantity } from "./LifeQuantity";
import { DisplayType } from "./DisplayType";
import { LearnSettings } from "../learn/LearningSessionSettings";

export interface SessionSettings { }


export interface GameSettings extends SessionSettings {
    kana?: KanaGameSettings;
}

export interface KanaGameSettings {
    display: DisplaySettings;
    kana: KanaSettings
    hints: HintSettings;
    lives: LifeSettings;
    time: TimeSettings;
}

export interface DisplaySettings {
    type: DisplayType;
    cards: number;
    score: boolean;
}

export interface LifeSettings {
    enabled: boolean;
    quantity?: LifeQuantity;
}

export interface HintSettings {
    enabled: boolean;
    quantity?: HintQuantity;
}

export interface KanaSettings extends LearnSettings {
    hiragana?: boolean;
    katakana?: boolean;
    diagraphs?: boolean;
    diacriticals?: boolean
    quantity?: number;
}

export interface TimeSettings {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion?: number;
}