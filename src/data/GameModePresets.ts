import { GameSettingsBuilder } from "../types/session/settings/game/GameSettings";
import { HintQuantity } from "../types/game/HintQuantity";
import { LifeQuantity } from "../types/game/LifeQuantity";
import { DisplayType } from "../types/game/DisplayType";
import { LifeSettingsBuilder } from "../types/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../types/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../types/session/settings/game/TimeSettings";

export const RELAXED = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: false })
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
    .build();

export const ROMAJI = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: true })
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .build();

export const KANA = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.KANA, cards: 4, score: true })
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .build();

export const TIME_ATTACK = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.ROMAJI, cards: 1, score: true })
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build())
    .build();

export const HARDCORE = new GameSettingsBuilder()
    .withDisplaySettings({ type: DisplayType.KANA, cards: 6, score: true })
    .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
    .build();