import Topic from "../../domain/Topic";
import each from "jest-each";

describe("Topic", () => {
    describe("From Name Static Factory Constructor", () => {
        it("Should return the kana topic", () => {
            const name = "Hiragana & Katakana";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.KANA);
        });

        it("Should return the numbers topic", () => {
            const name = "Numbers & Counting";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.NUMBERS);
        });

        it("Should return the kanji topic", () => {
            const name = "Jōyō Kanji";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.KANJI);
        });

        it("Should return the basics topic", () => {
            const name = "Basics";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.BASICS);
        });

        it("Should return the calender topic", () => {
            const name = "Days & Months";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.CALENDAR);
        });

        it("Should return the grammar topic", () => {
            const name = "Sentence Structure";
            const topic = Topic.fromName(name);
            expect(topic).toBe(Topic.GRAMMAR);
        });

        each([null, undefined, "unknown"]).it("Should throw an error for an invalid name [%s]", (name: string) => {
            expect(() => Topic.fromName(name)).toThrow(`Invalid Topic [${name}]`);
        });
    });
});
