import GameSettings, { GameSettingsBuilder } from "../domain/session/settings/game/GameSettings"
import { GameSettingState } from "../slices/GameSettingsSlice"
import { LifeSettingsBuilder } from "../domain/session/settings/game/LifeSettings"
import { HintSettingsBuilder } from "../domain/session/settings/game/HintSettings"
import { TimeSettingsBuilder } from "../domain/session/settings/game/TimeSettings"
import { QuestionSettingsBuilder } from "../domain/session/settings/game/QuestionSettings"
import LearnableField from "../domain/learn/LearnableField"
import QuestionType from "../domain/game/QuestionType"
import { GameConfigRequest, GameConfigResponse } from "../repository/PresetRepository"

class GameSettingsConverter {
  public convert(settings: GameConfigResponse): GameSettings {
    return new GameSettingsBuilder()
      .withLifeSettings(
        new LifeSettingsBuilder().withQuantity(settings.lives.quantity).isEnabled(settings.lives.enabled).build()
      )
      .withHintSettings(
        new HintSettingsBuilder()
          .withQuantity(settings.hints.quantity)
          .isEnabled(settings.hints.enabled)
          .areUnlimited(settings.hints.unlimited)
          .build()
      )
      .withTimeSettings(
        new TimeSettingsBuilder()
          .isTimed(settings.time.timed)
          .isCountDown(settings.time.countdown)
          .withSecondsPerQuestion(settings.time.secondsPerQuestion ?? 0)
          .build()
      )
      .withQuestionSettings(
        new QuestionSettingsBuilder()
          .withFields(
            LearnableField.fromTranslationPath(settings.question.questionField),
            LearnableField.fromTranslationPath(settings.question.answerField)
          )
          .withQuantity(settings.question.quantity)
          .withType(QuestionType.fromName(settings.question.type))
          .withCardQuantity(settings.question.cards)
          .withScoreTracking(settings.question.score)
          .withAnswerFilterChainID(settings.question.answerFilter ?? -1)
          .build()
      )
      .build()
  }

  public convertRequest(settings: GameSettings): GameConfigRequest {
    return {
      hints: {
        enabled: settings.hints.enabled,
        quantity: settings.hints.quantity,
        unlimited: settings.hints.unlimited
      },
      lives: {
        enabled: settings.lives.enabled,
        quantity: settings.lives.quantity
      },
      time: {
        timed: settings.time.timed,
        countdown: settings.time.countdown,
        secondsPerQuestion: settings.time.secondsPerQuestion
      },
      question: {
        cards: settings.question.cards,
        score: settings.question.score,
        type: settings.question.type.name,
        quantity: settings.question.quantity,
        answerField: settings.question.answerField.name,
        questionField: settings.question.questionField.name,
        answerFilter: 0
      }
    }
  }

  public serialise(settings: GameSettings): GameSettingState {
    return {
      hints: {
        enabled: settings.hints.enabled,
        quantity: settings.hints.quantity,
        unlimited: settings.hints.unlimited
      },
      lives: {
        enabled: settings.lives.enabled,
        quantity: settings.lives.quantity
      },
      time: {
        timed: settings.time.timed,
        countdown: settings.time.countdown,
        secondsPerQuestion: settings.time.secondsPerQuestion
      },
      question: {
        cards: settings.question.cards,
        score: settings.question.score,
        type: settings.question.type.name,
        quantity: settings.question.quantity,
        answerField: settings.question.answerField.name,
        questionField: settings.question.questionField.name,
        answerFilter: settings.question.answerFilterId
      }
    }
  }

  public deserialise(state: GameSettingState): GameSettings {
    return new GameSettingsBuilder()
      .withLifeSettings(
        new LifeSettingsBuilder().withQuantity(state.lives.quantity).isEnabled(state.lives.enabled).build()
      )
      .withHintSettings(
        new HintSettingsBuilder()
          .withQuantity(state.hints.quantity)
          .isEnabled(state.hints.enabled)
          .areUnlimited(state.hints.unlimited)
          .build()
      )
      .withTimeSettings(
        new TimeSettingsBuilder()
          .isTimed(state.time.timed)
          .isCountDown(state.time.countdown)
          .withSecondsPerQuestion(state.time.secondsPerQuestion)
          .build()
      )
      .withQuestionSettings(
        new QuestionSettingsBuilder()
          .withFields(
            LearnableField.fromTranslationPath(state.question.questionField),
            LearnableField.fromTranslationPath(state.question.answerField)
          )
          .withQuantity(state.question.quantity)
          .withType(QuestionType.fromName(state.question.type))
          .withCardQuantity(state.question.cards)
          .withScoreTracking(state.question.score)
          .withAnswerFilterChainID(state.question.answerFilter)
          .build()
      )
      .build()
  }
}

export default GameSettingsConverter
