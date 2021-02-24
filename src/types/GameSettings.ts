import { HintQuantity } from "./HintQuantity";
import { LifeQuantity } from "./LifeQuantity";

export interface GameSettings {
    kana: KanaSettings
    hints: HintSettings;
    lives: LifeSettings;
    time: TimeSettings;
}

export interface LifeSettings {
    enabled: boolean;
    quantity?: LifeQuantity;
}

export interface HintSettings {
    enabled: boolean;
    quantity?: HintQuantity;
}

export interface KanaSettings {
    hiragana?: boolean;
    katakana?: boolean;
    diagraphs?: boolean;
    quantity?: number;
}

export interface TimeSettings {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion?: number;
}