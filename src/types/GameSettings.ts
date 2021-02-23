import { TipQuantity } from "./TipQuantity";
import { LifeQuantity } from "./LifeQuantity";

export interface GameSettings {
    kana: KanaSettings
    tips: TipSettings;
    lives: LifeSettings;
    time: TimeSettings;
}

export interface LifeSettings {
    enabled: boolean;
    quantity?: LifeQuantity;
}

export interface TipSettings {
    enabled: boolean;
    quantity?: TipQuantity;
}

export interface KanaSettings {
    hiragana?: boolean;
    katakana?: boolean;
    diagraphs?: boolean;
}

export interface TimeSettings {
    timed: boolean;
    countdown: boolean;
    secondsPerQuestion?: number;
}