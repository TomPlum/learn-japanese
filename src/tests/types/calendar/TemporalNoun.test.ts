import { KanjiLearnable } from "../../../types/learn/CommonLearnable";
import TemporalNoun from "../../../types/calendar/TemporalNoun";
import JapaneseWord from "../../../types/learn/JapaneseWord";

describe("Temporal Noun", () => {

    const noun: KanjiLearnable = new TemporalNoun("Tomorrow", "明日", "ashita", "あした");

    it("Should return the correct title", () => {
        expect(noun.getTitle()).toBe("Temporal Noun / Adverb");
    });

    it("Should return the english word as the question", () => {
        expect(noun.getQuestion()).toBe("Tomorrow");
    });

    it("Should return the Japanese Words", () => {
        expect(noun.getWords()).toStrictEqual([new JapaneseWord("あした", "ashita")]);
    });

    it("Should return the Kanji", () => {
        expect(noun.getKanji()).toBe("明日");
    });

    it("Should return an undefined meaning", () => {
        expect(noun.getMeaning()).toBeUndefined();
    });
});