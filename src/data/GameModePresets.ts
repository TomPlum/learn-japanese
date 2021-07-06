import { GameSettingsBuilder } from "../types/session/settings/GameSettings";
import { HintQuantity } from "../types/game/HintQuantity";
import { LifeQuantity } from "../types/game/LifeQuantity";
import { DisplayType } from "../types/game/DisplayType";

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
    .withDisplaySettings({ type: DisplayType.KANA, cards: 6, score: true })
    .withHintSettings({ enabled: false })
    .withLifeSettings({ enabled: true, quantity: LifeQuantity.ONE })
    .withTimeSettings({ timed: false, countdown: true, secondsPerQuestion: 5 })
    .build();