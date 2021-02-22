import {GameSettings, KanaSettings} from "../types/GameSettings";
import {TipQuantity} from "../types/TipQuantity";
import {LifeQuantity} from "../types/LifeQuantity";

const defaultKanaSettings: KanaSettings = {
    includeHiragana: true,
    includeKatakana: true,
    includeDiagraphs: true,
};

export const RELAXED: GameSettings = {
    kana: defaultKanaSettings,
    tips: TipQuantity.UNLIMITED,
    lives: LifeQuantity.UNLIMITED
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    showTime: true,
    tips: TipQuantity.THREE,
    lives: LifeQuantity.FIVE
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    showTime: true,
    tips: TipQuantity.THREE,
    lives: LifeQuantity.FIVE
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    tips: TipQuantity.THREE,
    lives: LifeQuantity.FIVE
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    tips: TipQuantity.ZERO,
    lives: LifeQuantity.ONE
}