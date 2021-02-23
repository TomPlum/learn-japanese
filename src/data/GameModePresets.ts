import { GameSettings, KanaSettings, LifeSettings, TimeSettings, TipSettings } from "../types/GameSettings";
import { HintQuantity } from "../types/HintQuantity";
import { LifeQuantity } from "../types/LifeQuantity";

// Default Settings
const defaultKanaSettings: KanaSettings = {
    hiragana: true,
    katakana: true,
    diagraphs: true,
}

const defaultTipSettings: TipSettings = {
    enabled: true,
    quantity: HintQuantity.UNLIMITED
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
    hints: defaultTipSettings,
    lives: { enabled: false },
    time: { timed: false, countdown: false }
}

export const ROMANJI: GameSettings = {
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: { timed: false, countdown: true }
}

export const HARDCORE: GameSettings = {
    kana: defaultKanaSettings,
    hints: { enabled: false },
    lives: { enabled: true, quantity: LifeQuantity.ONE },
    time: { timed: false, countdown: true, secondsPerQuestion: 5 }
}