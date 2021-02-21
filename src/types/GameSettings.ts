import {TipQuantity} from "./TipQuantity";
import {LifeQuantity} from "./LifeQuantity";

export interface GameSettings {
    kana: KanaSettings
    tipQuantity: TipQuantity;
    lives: LifeQuantity;
    showTime?: boolean;
}

export interface KanaSettings {
    includeHiragana?: boolean;
    includeKatakana?: boolean;
    includeDiagraphs?: boolean;
}

export interface TimeSettings {
    secondsPerQuestion: number;
}