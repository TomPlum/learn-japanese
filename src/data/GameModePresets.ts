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
    tipQuantity: TipQuantity.UNLIMITED,
    lifeQuantity: LifeQuantity.UNLIMITED
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    showTime: true,
    tipQuantity: TipQuantity.THREE,
    lifeQuantity: LifeQuantity.FIVE
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    showTime: true,
    tipQuantity: TipQuantity.THREE,
    lifeQuantity: LifeQuantity.FIVE
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    tipQuantity: TipQuantity.THREE,
    lifeQuantity: LifeQuantity.FIVE
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    tipQuantity: TipQuantity.ZERO,
    lifeQuantity: LifeQuantity.ONE
}