import { GameSettingsBuilder } from "../../domain/session/settings/game/GameSettings"
import { LifeSettingsBuilder } from "../../domain/session/settings/game/LifeSettings"
import { HintSettingsBuilder } from "../../domain/session/settings/game/HintSettings"
import { TimeSettingsBuilder } from "../../domain/session/settings/game/TimeSettings"
import { QuestionSettingsBuilder } from "../../domain/session/settings/game/QuestionSettings"
import LearnableField from "../../domain/learn/LearnableField"
import QuestionType from "../../domain/game/QuestionType"
import GameSettingsConverter from "../../converter/GameSettingsConverter"
import { GameConfigResponse } from "../../repository/PresetRepository"

describe("Game Settings Converter", () => {
  const converter = new GameSettingsConverter()

  describe("Game Settings API Request", () => {
    it("Should convert the given settings into the API request format", () => {
      const settings = new GameSettingsBuilder()
        .withLifeSettings(new LifeSettingsBuilder().withQuantity(12).isEnabled(true).build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(8).isEnabled(true).areUnlimited(false).build())
        .withTimeSettings(new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build())
        .withQuestionSettings(
          new QuestionSettingsBuilder()
            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
            .withQuantity(150)
            .withType(QuestionType.CHOICE)
            .withCardQuantity(4)
            .withScoreTracking(true)
            .build()
        )
        .build()

      const target = converter.convertRequest(settings)

      expect(target).toStrictEqual({
        hints: {
          quantity: 8,
          enabled: true,
          unlimited: false
        },
        lives: {
          quantity: 12,
          enabled: true
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          cards: 4,
          score: true,
          type: "choice",
          quantity: 150,
          answerField: "learnable.field.romaji.name",
          questionField: "learnable.field.kana.name",
          answerFilter: 0
        }
      })
    })
  })

  describe("API Response Conversion", () => {
    it("Should de-serialise a valid API response", () => {
      const response: GameConfigResponse = {
        hints: {
          quantity: 8,
          enabled: true,
          unlimited: false
        },
        lives: {
          quantity: 12,
          enabled: true
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          cards: 4,
          score: true,
          type: "choice",
          quantity: 150,
          answerField: "learnable.field.romaji.name",
          questionField: "learnable.field.kana.name",
          answerFilter: undefined
        }
      }

      const deserialised = converter.convert(response)

      expect(JSON.stringify(deserialised)).toStrictEqual(
        JSON.stringify(
          new GameSettingsBuilder()
            .withLifeSettings(new LifeSettingsBuilder().withQuantity(12).isEnabled(true).build())
            .withHintSettings(new HintSettingsBuilder().withQuantity(8).isEnabled(true).areUnlimited(false).build())
            .withTimeSettings(
              new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build()
            )
            .withQuestionSettings(
              new QuestionSettingsBuilder()
                .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                .withQuantity(150)
                .withType(QuestionType.CHOICE)
                .withCardQuantity(4)
                .withScoreTracking(true)
                .build()
            )
            .build()
        )
      )
    })
  })

  describe("Serialise", () => {
    it("Should convert valid game settings", () => {
      const settings = new GameSettingsBuilder()
        .withLifeSettings(new LifeSettingsBuilder().withQuantity(12).isEnabled(true).build())
        .withHintSettings(new HintSettingsBuilder().withQuantity(8).isEnabled(true).areUnlimited(false).build())
        .withTimeSettings(new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build())
        .withQuestionSettings(
          new QuestionSettingsBuilder()
            .withFields(LearnableField.KANA, LearnableField.ROMAJI)
            .withQuantity(150)
            .withType(QuestionType.CHOICE)
            .withCardQuantity(4)
            .withScoreTracking(true)
            .withAnswerFilterChainID(1)
            .build()
        )
        .build()

      const serialised = converter.serialise(settings)

      expect(serialised).toStrictEqual({
        hints: {
          quantity: 8,
          enabled: true,
          unlimited: false
        },
        lives: {
          quantity: 12,
          enabled: true
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          cards: 4,
          score: true,
          type: "choice",
          quantity: 150,
          answerField: "learnable.field.romaji.name",
          questionField: "learnable.field.kana.name",
          answerFilter: 1
        }
      })
    })
  })

  describe("De-Serialise", () => {
    it("Should de-serialise a valid JSON object", () => {
      const state = {
        hints: {
          quantity: 8,
          enabled: true,
          unlimited: false
        },
        lives: {
          quantity: 12,
          enabled: true
        },
        time: {
          timed: true,
          countdown: false,
          secondsPerQuestion: 0
        },
        question: {
          cards: 4,
          score: true,
          type: "choice",
          quantity: 150,
          answerField: "learnable.field.romaji.name",
          questionField: "learnable.field.kana.name",
          answerFilter: 1
        }
      }

      const deserialised = converter.deserialise(state)

      expect(JSON.stringify(deserialised)).toStrictEqual(
        JSON.stringify(
          new GameSettingsBuilder()
            .withLifeSettings(new LifeSettingsBuilder().withQuantity(12).isEnabled(true).build())
            .withHintSettings(new HintSettingsBuilder().withQuantity(8).isEnabled(true).areUnlimited(false).build())
            .withTimeSettings(
              new TimeSettingsBuilder().isTimed(true).isCountDown(false).withSecondsPerQuestion(0).build()
            )
            .withQuestionSettings(
              new QuestionSettingsBuilder()
                .withFields(LearnableField.KANA, LearnableField.ROMAJI)
                .withQuantity(150)
                .withType(QuestionType.CHOICE)
                .withCardQuantity(4)
                .withScoreTracking(true)
                .withAnswerFilterChainID(1)
                .build()
            )
            .build()
        )
      )
    })
  })
})
