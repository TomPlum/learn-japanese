import QuestionSettings, { QuestionSettingsBuilder } from "../../../../../types/session/settings/game/QuestionSettings";
import { QuestionType } from "../../../../../types/game/QuestionType";

describe("Question Settings", () => {
    describe("Builder", () => {
        it("Should default question type, cards and score", () => {
            const settings = new QuestionSettingsBuilder().build();
            expect(settings).toStrictEqual(new QuestionSettings(QuestionType.ROMAJI, 1, false));
        });

        it("Should set the question type when specified", () => {
            const settings = new QuestionSettingsBuilder().withType(QuestionType.KANA).build();
            expect(settings.type).toBe(QuestionType.KANA);
        });

        it("Should set the cards quantity when specified", () => {
            const settings = new QuestionSettingsBuilder().withCardQuantity(6).build();
            expect(settings.cards).toBe(6);
        });

        it("Should set score tracking to true when not passing an arg", () => {
            const settings =  new QuestionSettingsBuilder().withScoreTracking().build();
            expect(settings.score).toBe(true);
        });

        it("Should set score tracking to true when not passing an arg", () => {
            const settings =  new QuestionSettingsBuilder().withScoreTracking(false).build();
            expect(settings.score).toBe(false);
        });
    });
});