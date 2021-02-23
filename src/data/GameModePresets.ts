import { GameSettings, KanaSettings, LifeSettings, TimeSettings, TipSettings } from "../types/GameSettings";
import { TipQuantity } from "../types/TipQuantity";
import { LifeQuantity } from "../types/LifeQuantity";

// Default Settings

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

const defaultTimeSettings: TimeSettings = {
    timed: true,
    countdown: false
}

// Game Mode Presets

export const RELAXED: GameSettings = {
    kana: defaultKanaSettings,
    tips: defaultTipSettings,
    lives: { enabled: false },
    time: { timed: false, countdown: false }
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: true, quantity: TipQuantity.THREE },
    lives: defaultLifeSettings,
    time: { timed: false, countdown: true }
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    tips: { enabled: false },
    lives: { enabled: true, quantity: LifeQuantity.ONE },
    time: { timed: false, countdown: true, secondsPerQuestion: 5 }
}