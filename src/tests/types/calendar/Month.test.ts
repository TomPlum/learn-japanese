import Month from "../../../types/calendar/Month";
import { KanjiLearnable } from "../../../types/learn/Learnable";
import JapaneseWord from "../../../types/learn/JapaneseWord";

describe("Month", () => {

    const month: KanjiLearnable = new Month("January", "一月", "ichigatsu", "いちがつ", "One Month");

    it("Should return the correct title", () => {
        expect(month.getTitle()).toBe("Month of the Year");
    });

    it("Should return the kanji as the answer", () => {
        expect(month.getKanjiVariation()).toBe("一月");
    });

    it("Should return the english word as the question", () => {
        expect(month.getQuestion()).toBe("January");
    });

    it("Should return the Japanese Words", () => {
        expect(month.getKana()).toStrictEqual(["いちがつ"]);
    });

    it("Should return the meaning", () => {
        expect(month.getMeanings()).toStrictEqual(["January"]);
    });
});