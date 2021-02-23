import { TipQuantity } from "./TipQuantity";
import { LifeQuantity } from "./LifeQuantity";

export interface GameSettings {
    kana: KanaSettings
    tips: TipSettings;
    lives: LifeQuantity;
    isTimed?: boolean;
    time?: TimeSettings;
}

export interface TipSettings {
    enabled: boolean;
    quantity: TipQuantity;
}

export interface KanaSettings {
    hiragana?: boolean;
    katakana?: boolean;
    diagraphs?: boolean;
}

export interface TimeSettings {
    secondsPerQuestion: number;
}