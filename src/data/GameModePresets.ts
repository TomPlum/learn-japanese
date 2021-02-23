import { GameSettings, KanaSettings, TipSettings } from "../types/GameSettings";
import { TipQuantity } from "../types/TipQuantity";
import { LifeQuantity } from "../types/LifeQuantity";

const defaultKanaSettings: KanaSettings = {
    hiragana: true,
    katakana: true,
    diagraphs: true,
}

const defaultTipSettings: TipSettings = {
    enabled: true,
    quantity: TipQuantity.UNLIMITED
}

export const RELAXED: GameSettings = {
    kana: defaultKanaSettings,
    tips: defaultTipSettings,
    lives: LifeQuantity.UNLIMITED
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    isTimed: true,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: LifeQuantity.FIVE
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    isTimed: true,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: LifeQuantity.FIVE
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: LifeQuantity.FIVE
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: false, quantity: TipQuantity.ZERO },
    lives: LifeQuantity.ONE
}