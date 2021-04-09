import CalendarData from "../../../types/calendar/CalendarData";
import TemporalNoun from "../../../types/calendar/TemporalNoun";

describe("Temporal Noun", () => {

    const noun: CalendarData = new TemporalNoun("Tomorrow", "明日", "ashita", "あした");

    it("Should return the correct title", () => {
        expect(noun.getTitle()).toBe("Temporal Noun / Adverb");
    });

    it("Should return the kanji as the answer", () => {
        expect(noun.getAnswer()).toBe("明日");
    });

    it("Should return the english word as the question", () => {
        expect(noun.getQuestion()).toBe("Tomorrow");
    });

    it("Should return the kana", () => {
        expect(noun.getKana()).toBe("あした");
    });

    it("Should return the romaji", () => {
        expect(noun.getRomaji()).toBe("ashita");
    });
});