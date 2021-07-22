import LearnableField from "../../../types/learn/LearnableField";
import katakana from "../../../data/Katakana";
import hiragana from "../../../data/Hiragana";
import { joyo } from "../../../data/Kanji";

describe("Learnable Field", () => {
    describe("From Name String", () => {
        it("English Meaning", () => {
            expect(LearnableField.fromNameString("English Meaning")).toBe(LearnableField.MEANING);
        });

        it("Kanji", () => {
            expect(LearnableField.fromNameString("Kanji")).toBe(LearnableField.KANJI);
        });

        it("Kana", () => {
            expect(LearnableField.fromNameString("Kana")).toBe(LearnableField.KANA);
        });

        it("Japanese", () => {
            expect(LearnableField.fromNameString("Japanese")).toBe(LearnableField.JAPANESE);
        });

        it("Rōmaji", () => {
            expect(LearnableField.fromNameString("Rōmaji")).toBe(LearnableField.ROMAJI);
        });

        it("On'Yomi Reading", () => {
            expect(LearnableField.fromNameString("On'Yomi Reading")).toBe(LearnableField.ONYOMI_READING);
        });

        it("Kun'Yomi Reading", () => {
            expect(LearnableField.fromNameString("Kun'Yomi Reading")).toBe(LearnableField.KUNYOMI_READING);
        });

        it("Random", () => {
            expect(LearnableField.fromNameString("Random")).toBe(LearnableField.RANDOM);
        });

        it("Should throw an exception if an unknown name is passed", () => {
            expect(() => LearnableField.fromNameString("Blah")).toThrow("Invalid Learnable Field Name: Blah");
        });
    });

    describe("Validation Regex", () => {
        it("Kana", () => {
            const kana = hiragana().concat(katakana()).map(it => it.code);
            kana.forEach(kana => expect(kana).toMatch(LearnableField.KANA.validationRegex));
        });

        it("Kanji", () => {
            const kanji = joyo().map(it => it.code);
            kanji.forEach(kana => expect(kana).toMatch(LearnableField.KANJI.validationRegex));
        });

        it("On'Yomi Readings", () => {
            const readings = joyo().flatMap(it => it.on).map(it => it.kana);
            readings.forEach(kana => expect(kana).toMatch(LearnableField.ONYOMI_READING.validationRegex));
        });

        it("Kun'Yomi Readings", () => {
            const readings = joyo().flatMap(it => it.kun).map(it => it.kana);
            readings.forEach(kana => expect(kana).toMatch(LearnableField.KUNYOMI_READING.validationRegex));
        });
    });

    it("Should return all values for the value() call", () => {
        const values = LearnableField.values();
        expect(values).toStrictEqual([
            LearnableField.MEANING, LearnableField.KANJI, LearnableField.KANA,
            LearnableField.JAPANESE, LearnableField.ROMAJI, LearnableField.ONYOMI_READING,
            LearnableField.KUNYOMI_READING, LearnableField.RANDOM
        ]);
    })
});