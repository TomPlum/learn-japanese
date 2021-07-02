import { DisplaySettings, GameSettings, HintSettings, KanaSettings, LifeSettings, TimeSettings } from "../types/game/GameSettings";
import { HintQuantity } from "../types/game/HintQuantity";
import { LifeQuantity } from "../types/game/LifeQuantity";
import { DisplayType } from "../types/game/DisplayType";

// Default Settings
export const defaultDisplaySettings: DisplaySettings = {
    type: DisplayType.ROMAJI,
    cards: 1,
    score: true
}

export const defaultKanaSettings: KanaSettings = {
    hiragana: true,
    katakana: true,
    diagraphs: true,
    quantity: 50
}

export const defaultHintSettings: HintSettings = {
    enabled: true,
    quantity: HintQuantity.UNLIMITED
}

export const defaultLifeSettings: LifeSettings = {
    enabled: true,
    quantity: LifeQuantity.FIVE
}

export const defaultTimeSettings: TimeSettings = {
    timed: true,
    countdown: false
}

// Game Mode Presets
export const RELAXED: GameSettings = {
    kana: defaultKanaSettings,
    display: { type: DisplayType.ROMAJI, cards: 1, score: false },
    hints: defaultHintSettings,
    lives: { enabled: false },
    time: { timed: false, countdown: false }
}

export const ROMAJI: GameSettings = {
    kana: defaultKanaSettings,
    display: { type: DisplayType.ROMAJI, cards: 1, score: true },
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const KANA: GameSettings = {
    kana: defaultKanaSettings,
    display: { type: DisplayType.KANA, cards: 4, score: true },
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const TIME_ATTACK: GameSettings = {
    kana: defaultKanaSettings,
    display: { type: DisplayType.ROMAJI, cards: 1, score: true },
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: { enabled: false },
    time: { timed: false, countdown: true, secondsPerQuestion: 10 }
}

export const HARDCORE: GameSettings = {
    kana: { hiragana: true, katakana: true, diagraphs: true },
    display: { type: DisplayType.KANA, cards: 6, score: true },
    hints: { enabled: false },
    lives: { enabled: true, quantity: LifeQuantity.ONE },
    time: { timed: false, countdown: true, secondsPerQuestion: 5 }
}