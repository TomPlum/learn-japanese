import {TipQuantity} from "./TipQuantity";
import {LifeQuantity} from "./LifeQuantity";

export interface GameSettings {
    kana: KanaSettings
    tips: TipQuantity;
    lives: LifeQuantity;
    isTimed?: boolean;
    time?: TimeSettings;
}

export interface KanaSettings {
    includeHiragana?: boolean;
    includeKatakana?: boolean;
    includeDiagraphs?: boolean;
}

export interface TimeSettings {
    secondsPerQuestion: number;
}