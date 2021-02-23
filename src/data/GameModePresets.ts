import { GameSettings, KanaSettings, LifeSettings, TipSettings } from "../types/GameSettings";
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

const defaultLifeSettings: LifeSettings = {
    enabled: true,
    quantity: LifeQuantity.FIVE
}

export const RELAXED: GameSettings = {
    kana: defaultKanaSettings,
    tips: defaultTipSettings,
    lives: { enabled: false }
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    isTimed: true,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    isTimed: true,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: false },
    lives: { enabled: true, quantity: LifeQuantity.ONE }
}