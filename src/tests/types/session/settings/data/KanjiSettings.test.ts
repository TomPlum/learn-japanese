import KanjiSettings, { KanjiSettingsBuilder } from "../../../../../domain/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../../../../../domain/kanji/KyoikuGrade";

describe("Kanji Settings", () => {
    describe('Builder', function () {
        it("Should default values correctly", () => {
            const settings = new KanjiSettingsBuilder().build();
            expect(settings).toStrictEqual(new KanjiSettings([], [], undefined));
        });

        it("Should set grades to the specified", () => {
            const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.TWO, KyoikuGrade.SIX]).build();
            expect(settings.grades).toStrictEqual([KyoikuGrade.TWO, KyoikuGrade.SIX]);
        });

        it("Should add set grades to 1,2,3,4,5,6,8 to to the list when specifying joyo but not passing any arg", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji().build();
            expect(settings.grades).toStrictEqual([
                KyoikuGrade.ONE, KyoikuGrade.TWO, KyoikuGrade.THREE, KyoikuGrade.FOUR,
                KyoikuGrade.FIVE, KyoikuGrade.SIX, KyoikuGrade.EIGHT
            ]);
        });

        it("Should remove grade 8 from the list when specifying joyo as false", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji(false).build();
            expect(settings.grades).toStrictEqual([]);
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
