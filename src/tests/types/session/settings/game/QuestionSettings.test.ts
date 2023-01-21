import QuestionSettings, { QuestionSettingsBuilder } from "../../../../../domain/session/settings/game/QuestionSettings"
import QuestionType from "../../../../../domain/game/QuestionType"
import LearnableField from "../../../../../domain/learn/LearnableField"

describe("Question Settings", () => {
    describe("Builder", () => {
        it("Should set defaults", () => {
            const settings = new QuestionSettingsBuilder().build()
            expect(settings).toMatchObject(
                new QuestionSettings(
                    LearnableField.KANA,
                    LearnableField.ROMAJI,
                    QuestionType.TEXT,
                    1,
                    1,
                    settings.answerFilterId,
                    false
                )
            )
        })

        it("Should set the question and answer fields when specifying", () => {
            const settings = new QuestionSettingsBuilder()
                .withFields(LearnableField.KANJI, LearnableField.MEANING)
                .build()
            expect(settings.questionField).toBe(LearnableField.KANJI)
            expect(settings.answerField).toBe(LearnableField.MEANING)
        })

        it("Should set the question type when specified", () => {
            const settings = new QuestionSettingsBuilder().withType(QuestionType.CHOICE).build()
            expect(settings.type).toBe(QuestionType.CHOICE)
        })

        it("Should set the cards quantity when specified", () => {
            const settings = new QuestionSettingsBuilder().withCardQuantity(6).build()
            expect(settings.cards).toBe(6)
        })

        it("Should set score tracking to true when not passing an arg", () => {
            const settings = new QuestionSettingsBuilder().withScoreTracking().build()
            expect(settings.score).toBe(true)
        })

        it("Should set score tracking to true when not passing an arg", () => {
            const settings = new QuestionSettingsBuilder().withScoreTracking(false).build()
            expect(settings.score).toBe(false)
        })

        it("Should set the quantity when specified", () => {
            const settings = new QuestionSettingsBuilder().withQuantity(3).build()
            expect(settings.quantity).toBe(3)
        })

        it("Should set the wrong optional filter chain function ID when specifying", () => {
            const settings = new QuestionSettingsBuilder().withAnswerFilterChainID(1).build()
            expect(settings.answerFilterId).toBe(1)
        })
    })
})
