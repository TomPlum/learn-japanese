import Month from "../../../types/calendar/Month";
import CalendarData from "../../../types/calendar/CalendarData";

describe("Month", () => {

    const month: CalendarData = new Month("January", "一月", "ichigatsu", "いちがつ", "One Month");

    it("Should return the correct title", () => {
        expect(month.getTitle()).toBe("Month of the Year");
    });

    it("Should return the kanji as the answer", () => {
        expect(month.getAnswer()).toBe("一月");
    });

    it("Should return the english word as the question", () => {
        expect(month.getQuestion()).toBe("January");
    });

    it("Should return the kana", () => {
        expect(month.getKana()).toBe("いちがつ");
    });

    it("Should return the romaji", () => {
        expect(month.getRomaji()).toBe("ichigatsu");
    });

    it("Should return the meaning", () => {
        expect(month.getMeaning()).toBe("One Month");
    });
});