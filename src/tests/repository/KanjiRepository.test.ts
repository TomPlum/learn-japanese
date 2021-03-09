import { KanjiRepository } from "../../repository/KanjiRepository";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

describe("Kanji Repository", () => {
    const repository = new KanjiRepository();
    
    describe("Kyoiku", () => {
        it("Should read 31 kanji when passing only grade 1", () => {
            const result = repository.read({ grades: [KyoikuGrade.ONE] });
            expect(result).toHaveLength(33);
        });

        it("Should read 1 kanji when passing only grade 2", () => {
            const result = repository.read({ grades: [KyoikuGrade.TWO] });
            expect(result).toHaveLength(2);
        });
    });
});