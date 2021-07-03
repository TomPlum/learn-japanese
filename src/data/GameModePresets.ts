import { DisplaySettings, HintSettings, KanaSettings, LifeSettings, GameSettingsBuilder, TimeSettings } from "../types/session/GameSettings";
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
export const RELAXED = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: false })
    .withLifeSettings({ enabled: false })
    .withTimeSettings({ timed: false, countdown: false })
    .build();

export const ROMAJI = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: true })
    .withHintSettings({ enabled: true, quantity: HintQuantity.THREE })
    .build();

export const KANA = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.KANA, cards: 4, score: true })
    .withHintSettings({ enabled: true, quantity: HintQuantity.THREE })
    .build();

export const TIME_ATTACK = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: true })
    .withHintSettings({ enabled: true, quantity: HintQuantity.THREE })
    .withLifeSettings({ enabled: false })
    .withTimeSettings({ timed: false, countdown: true, secondsPerQuestion: 10 })
    .build();

export const HARDCORE = new GameSettingsBuilder()
    .withKanaSettings({ hiragana: true, katakana: true, diagraphs: true })
    .withDisplaySettings({ type: DisplayType.KANA, cards: 6, score: true })
    .withHintSettings({ enabled: false })
    .withLifeSettings({ enabled: true, quantity: LifeQuantity.ONE })
    .withTimeSettings({ timed: false, countdown: true, secondsPerQuestion: 5 })
    .build();