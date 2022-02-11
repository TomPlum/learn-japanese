import QuestionSettings, { QuestionSettingsBuilder } from "../../../../../domain/session/settings/game/QuestionSettings";
import QuestionType from "../../../../../domain/game/QuestionType";
import LearnableField from "../../../../../domain/learn/LearnableField";
import FilterChain from "../../../../../filters/FilterChain";
import { Learnable } from "../../../../../domain/learn/Learnable";
import { Kana } from "../../../../../domain/kana/Kana";
import DiagraphFilter from "../../../../../filters/kana/DiagraphFilter";

describe("Question Settings", () => {
    describe("Builder", () => {
        it("Should set defaults", () => {
            const settings = new QuestionSettingsBuilder().build();
            expect(settings).toMatchObject(new QuestionSettings(
                LearnableField.KANA, LearnableField.ROMAJI, QuestionType.TEXT, 1, 1, settings.answerFilter, false
            ));
        });

        it("Should set the question and answer fields when specifying", () => {
            const settings = new QuestionSettingsBuilder().withFields(LearnableField.KANJI, LearnableField.MEANING).build();
            expect(settings.questionField).toBe(LearnableField.KANJI);
            expect(settings.answerField).toBe(LearnableField.MEANING);
        });

        it("Should set the question type when specified", () => {
            const settings = new QuestionSettingsBuilder().withType(QuestionType.CHOICE).build();
            expect(settings.type).toBe(QuestionType.CHOICE);
        });

        it("Should set the cards quantity when specified", () => {
            const settings = new QuestionSettingsBuilder().withCardQuantity(6).build();
            expect(settings.cards).toBe(6);
        });

        it("Should set score tracking to true when not passing an arg", () => {
            const settings = new QuestionSettingsBuilder().withScoreTracking().build();
            expect(settings.score).toBe(true);
        });

        it("Should set score tracking to true when not passing an arg", () => {
            const settings = new QuestionSettingsBuilder().withScoreTracking(false).build();
            expect(settings.score).toBe(false);
        });

        it("Should set the quantity when specified", () => {
            const settings = new QuestionSettingsBuilder().withQuantity(3).build();
            expect(settings.quantity).toBe(3);
        });

        it("Should set the wrong optional filter chain function when specifying", () => {
            const filter = (data: Learnable) => {
                const kana = data as Kana;
                return new FilterChain<Kana>().withFilter(new DiagraphFilter(kana.isDiagraph()));
            };

            const settings = new QuestionSettingsBuilder().withWrongOptionsFilterChain(filter).build();

            expect(settings.answerFilter).toStrictEqual(filter);
        });
    });
});
