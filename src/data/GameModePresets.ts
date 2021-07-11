import { GameSettingsBuilder } from "../types/session/settings/game/GameSettings";
import { HintQuantity } from "../types/game/HintQuantity";
import { LifeQuantity } from "../types/game/LifeQuantity";
import { QuestionType } from "../types/game/QuestionType";
import { LifeSettingsBuilder } from "../types/session/settings/game/LifeSettings";
import { HintSettingsBuilder } from "../types/session/settings/game/HintSettings";
import { TimeSettingsBuilder } from "../types/session/settings/game/TimeSettings";
import { QuestionSettingsBuilder } from "../types/session/settings/game/QuestionSettings";

export const RELAXED = new GameSettingsBuilder()
    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(false).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
    .build();

export const ROMAJI = new GameSettingsBuilder()
    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(true).build())
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .build();

export const KANA = new GameSettingsBuilder()
    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(4).withScoreTracking(true).build())
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .build();

export const TIME_ATTACK = new GameSettingsBuilder()
    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.ROMAJI).withScoreTracking(true).build())
    .withHintSettings(new HintSettingsBuilder().isEnabled().withQuantity(HintQuantity.THREE).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(false).build())
    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(10).build())
    .build();

export const HARDCORE = new GameSettingsBuilder()
    .withQuestionSettings(new QuestionSettingsBuilder().withType(QuestionType.KANA).withCardQuantity(6).withScoreTracking(true).build())
    .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
    .withLifeSettings(new LifeSettingsBuilder().isEnabled(true).withQuantity(LifeQuantity.ONE).build())
    .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
    .build();