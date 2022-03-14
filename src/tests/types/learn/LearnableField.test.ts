import LearnableField from "../../../domain/learn/LearnableField";
import katakana from "../../../data/Katakana";
import hiragana from "../../../data/Hiragana";
import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import JLTPLevel from "../../../domain/learn/JLTPLevel";

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
            const kanji = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], 9, ["animal"]);
            expect(kanji.getValue()).toMatch(LearnableField.KANJI.validationRegex);
        });

        it("On'Yomi Readings", () => {
            const readings = new Kanji("鳥",
                [new KanjiReading("tori", "とり", ReadingType.ON)],
                ["bird"],
                KyoikuGrade.TWO,
                JLTPLevel.N5,
                "", [], 10,
                ["animal"]
            ).getOnyomiReadings().map(it => it.kana);

            readings.forEach(reading => expect(reading).toMatch(LearnableField.ONYOMI_READING.validationRegex));
        });

        it("Kun'Yomi Readings", () => {
            const readings = new Kanji("魚",
                [new KanjiReading("sakana", "さかな", ReadingType.KUN)],
                ["fish"],
                KyoikuGrade.TWO, JLTPLevel.N5, "",
                [], 10, ["animal"]
            ).getKunyomiReadings().map(it => it.kana);

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
