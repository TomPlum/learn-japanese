import Month from "../../../types/calendar/Month";
import { Learnable } from "../../../types/learn/Learnable";

describe("Month", () => {

    const month: Learnable = new Month("January", "一月", "ichigatsu", "いちがつ", "One Month");

    it("Should return the correct title", () => {
        expect(month.getTitle()).toBe("Month of the Year");
    });

    it("Should return the kanji as the answer", () => {
        expect(month.getKanjiVariation()).toBe("一月");
    });

    it("Should return the Japanese Words", () => {
        expect(month.getKana()).toStrictEqual(["いちがつ"]);
    });

    it("Should return the meaning", () => {
        expect(month.getMeanings()).toStrictEqual(["January"]);
    });
});