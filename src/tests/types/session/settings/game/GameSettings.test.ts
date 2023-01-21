import { GameSettingsBuilder } from "../../../../../domain/session/settings/game/GameSettings"
import QuestionType from "../../../../../domain/game/QuestionType"
import LifeSettings, { LifeSettingsBuilder } from "../../../../../domain/session/settings/game/LifeSettings"
import HintSettings, { HintSettingsBuilder } from "../../../../../domain/session/settings/game/HintSettings"
import TimeSettings, { TimeSettingsBuilder } from "../../../../../domain/session/settings/game/TimeSettings"
import QuestionSettings, { QuestionSettingsBuilder } from "../../../../../domain/session/settings/game/QuestionSettings"
import LearnableField from "../../../../../domain/learn/LearnableField"

describe("Game Settings", () => {
    describe("Builder", () => {
        it("Should set default Hint settings if not specified", () => {
            const settings = new GameSettingsBuilder().build()
            expect(settings.hints).toStrictEqual(new HintSettingsBuilder().build())
        })

        it("Should set default Life settings if not specified", () => {
            const settings = new GameSettingsBuilder().build()
            expect(settings.lives).toStrictEqual(new LifeSettingsBuilder().build())
        })

        it("Should set default Display settings if not specified", () => {
            const settings = new GameSettingsBuilder().build()
            expect(settings.question).toStrictEqual(
                new QuestionSettingsBuilder().withAnswerFilterChainID(settings.question.answerFilterId).build()
            )
        })

        it("Should set default Time settings if not specified", () => {
            const settings = new GameSettingsBuilder().build()
            expect(settings.time).toStrictEqual(new TimeSettingsBuilder().build())
        })

        it("Should override settings when specified", () => {
            const settings = new GameSettingsBuilder()
                .withQuestionSettings(
                    new QuestionSettingsBuilder()
                        .withFields(LearnableField.KANJI, LearnableField.MEANING)
                        .withAnswerFilterChainID(1)
                        .withType(QuestionType.CHOICE)
                        .withCardQuantity(6)
                        .withScoreTracking(true)
                        .build()
                )
                .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(1).build())
                .withTimeSettings(new TimeSettingsBuilder().isCountDown().withSecondsPerQuestion(5).build())
                .build()

            expect(settings.question).toStrictEqual(
                new QuestionSettings(LearnableField.KANJI, LearnableField.MEANING, QuestionType.CHOICE, 6, 1, 1, true)
            )
            expect(settings.hints).toStrictEqual(new HintSettings(false, 0, false))
            expect(settings.lives).toStrictEqual(new LifeSettings(true, 1))
            expect(settings.time).toStrictEqual(new TimeSettings(false, true, 5))
        })

        it("Should build upon the existing values when creating from an existing settings object", () => {
            const settings = new GameSettingsBuilder()
                .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
                .build()

            const newSettings = new GameSettingsBuilder()
                .fromExisting(settings)
                .withLifeSettings(new LifeSettingsBuilder().isEnabled().withQuantity(1).build())
                .build()

            expect(newSettings.hints).toStrictEqual(new HintSettingsBuilder().isEnabled(false).build())
            expect(newSettings.lives).toStrictEqual(new LifeSettingsBuilder().isEnabled().withQuantity(1).build())
        })
    })
})
