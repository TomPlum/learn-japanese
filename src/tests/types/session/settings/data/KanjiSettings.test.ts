import KanjiSettings, { KanjiSettingsBuilder } from "../../../../../types/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../../../../../types/kanji/KyoikuGrade";

describe("Kanji Settings", () => {
    describe('Builder', function () {
        it("Should default values correctly", () => {
            const settings = new KanjiSettingsBuilder().build();
            expect(settings).toStrictEqual(new KanjiSettings([], false, [], true, true, undefined));
        });

        it("Should set grades to the specified", () => {
            const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.TWO, KyoikuGrade.SIX]).build();
            expect(settings.grades).toStrictEqual([KyoikuGrade.TWO, KyoikuGrade.SIX]);
        });

        it("Should set joyo to true when specifying but not passing any arg", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji().build();
            expect(settings.joyo).toBe(true);
        });

        it("Should set joyo to false when specifying", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji(false).build();
            expect(settings.joyo).toBe(false);
        });

        it("Should set onyomi to true when specifying but not passing any arg", () => {
            const settings = new KanjiSettingsBuilder().withOnyomiReadings().build();
            expect(settings.onyomi).toBe(true);
        });

        it("Should set onyomi to false when specifying", () => {
            const settings = new KanjiSettingsBuilder().withOnyomiReadings(false).build();
            expect(settings.onyomi).toBe(false);
        });

        it("Should set kunyomi to true when specifying but not passing any arg", () => {
            const settings = new KanjiSettingsBuilder().withKunyomiReadings().build();
            expect(settings.kunyomi).toBe(true);
        });

        it("Should set kunyomi to false when specifying", () => {
            const settings = new KanjiSettingsBuilder().withKunyomiReadings(false).build();
            expect(settings.kunyomi).toBe(false);
        });

        it("Should set tags to the specified", () => {
            const settings = new KanjiSettingsBuilder().withTags(["animal", "verb"]).build();
            expect(settings.tags).toStrictEqual(["animal", "verb"]);
        });

        it("Should set quantity to the specified", () => {
            const settings = new KanjiSettingsBuilder().withQuantity(5).build();
            expect(settings.quantity).toStrictEqual(5);
        });
    });
});