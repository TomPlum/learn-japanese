import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";

describe("Kyoiku Grade", () => {
    describe("Static Grade Presets", () => {
        it("Grade 1", () => {
            expect(KyoikuGrade.ONE.value).toBe(1);
            expect(KyoikuGrade.ONE.quantity).toBe(80);
        });

        it("Grade 2", () => {
            expect(KyoikuGrade.TWO.value).toBe(2);
            expect(KyoikuGrade.TWO.quantity).toBe(160);
        });

        it("Grade 3", () => {
            expect(KyoikuGrade.THREE.value).toBe(3);
            expect(KyoikuGrade.THREE.quantity).toBe(200);
        });

        it("Grade 4", () => {
            expect(KyoikuGrade.FOUR.value).toBe(4);
            expect(KyoikuGrade.FOUR.quantity).toBe(220);
        });

        it("Grade 5", () => {
            expect(KyoikuGrade.FIVE.value).toBe(5);
            expect(KyoikuGrade.FIVE.quantity).toBe(185);
        });

        it("Grade 6", () => {
            expect(KyoikuGrade.SIX.value).toBe(6);
            expect(KyoikuGrade.SIX.quantity).toBe(181);
        });
    });
});
