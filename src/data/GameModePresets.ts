import { GameSettings, HintSettings, KanaSettings, LifeSettings, TimeSettings } from "../types/GameSettings";
import { HintQuantity } from "../types/HintQuantity";
import { LifeQuantity } from "../types/LifeQuantity";
import { DisplayType } from "../types/DisplayType";

// Default Settings
const defaultKanaSettings: KanaSettings = {
    hiragana: true,
    katakana: true,
    diagraphs: true,
}

const defaultTipSettings: HintSettings = {
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
    display: { type: DisplayType.SINGLE_KANA },
    kana: defaultKanaSettings,
    hints: defaultTipSettings,
    lives: { enabled: false },
    time: { timed: false, countdown: false }
}

export const ROMANJI: GameSettings = {
    display: { type: DisplayType.SINGLE_KANA },
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const KANA: GameSettings = {
    display: { type: DisplayType.MULTIPLE_CARDS, cards: 4 },
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: defaultLifeSettings,
    time: defaultTimeSettings
}

export const TIME_ATTACK: GameSettings = {
    display: { type: DisplayType.SINGLE_KANA },
    kana: defaultKanaSettings,
    hints: { enabled: true, quantity: HintQuantity.THREE },
    lives: { enabled: false },
    time: { timed: false, countdown: true, secondsPerQuestion: 10 }
}

export const HARDCORE: GameSettings = {
    display: { type: DisplayType.MULTIPLE_CARDS, cards: 6 },
    kana: defaultKanaSettings,
    hints: { enabled: false },
    lives: { enabled: true, quantity: LifeQuantity.ONE },
    time: { timed: false, countdown: true, secondsPerQuestion: 5 }
}