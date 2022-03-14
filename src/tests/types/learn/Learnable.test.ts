import { Kana } from "../../../domain/kana/Kana";
import KanaType from "../../../domain/kana/KanaType";
import { KanaColumn } from "../../../domain/kana/KanaColumn";
import LearnableField from "../../../domain/learn/LearnableField";
import CommonData from "../../../domain/learn/CommonData";
import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import Definition from "../../../domain/sentence/Definition";
import { Learnable } from "../../../domain/learn/Learnable";
import JLTPLevel from "../../../domain/learn/JLTPLevel";

describe("Learnable", () => {
    describe("Get Field Values", () => {
        it("Should return a list of romaji strings when specifying the romaji field", () => {
            const data = new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false);
            const fieldValues = data.getFieldValues(LearnableField.ROMAJI);
            expect(fieldValues).toStrictEqual(["shu"])
        });

        it("Should return a list of kana strings when specifying the kana field", () => {
            const data = new CommonData("0", ["れい", "ゼロ", "マル"], "零", "Number", "Zero");
            const fieldValues = data.getFieldValues(LearnableField.KANA);
            expect(fieldValues).toStrictEqual(["れい", "ゼロ", "マル"]);
        });

        it("Should return a list of romaji strings when specifying the romaji field", () => {
            const data = new Kana("へ", ["he", "e"], KanaType.HIRAGANA, KanaColumn.H, false);
            const fieldValues = data.getFieldValues(LearnableField.ROMAJI);
            expect(fieldValues).toStrictEqual(["he", "e"]);
        });

        it("Should return the kanji variation when specifying the kanji field", () => {
            const data = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, JLTPLevel.N5, "", [], 9, ["animal"]);
            const fieldValues = data.getFieldValues(LearnableField.KANJI);
            expect(fieldValues).toStrictEqual(["魚"]);
        });

        it("Should return an empty array  when the the kanji variation is undefined and specifying the kanji field", () => {
            const data = new Definition(["not much"], undefined, "あまり", "Adverb");
            const fieldValues = data.getFieldValues(LearnableField.KANJI);
            expect(fieldValues).toStrictEqual([]);
        });

        it("Should return the on'yomi readings when specifying the on'yomi field", () => {
            const readings = [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)];
            const data = new Kanji("人", readings, ["person"], KyoikuGrade.ONE, JLTPLevel.N5, "source", [], 1, []);
            const fieldValues = data.getFieldValues(LearnableField.ONYOMI_READING);
            expect(fieldValues).toStrictEqual(["じん"]);
        });

        it("Should return the kun'yomi readings when specifying the kun'yomi field", () => {
            const readings = [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)];
            const data = new Kanji("人", readings, ["person"], KyoikuGrade.ONE, JLTPLevel.N5, "source", [], 1, []);
            const fieldValues = data.getFieldValues(LearnableField.KUNYOMI_READING);
            expect(fieldValues).toStrictEqual(["ひと"]);
        });

        it("Should return the kanji variant if the data object has one when specifying the Japanese field", () => {
            const data = new CommonData("0", ["れい", "ゼロ", "マル"], "零", "Number", "Zero");
            const fieldValues = data.getFieldValues(LearnableField.JAPANESE);
            expect(fieldValues).toStrictEqual(["零"]);
        });

        it("Should return the kana if the data object has no kanji variant when specifying the Japanese field", () => {
            const data = new Definition(["not much"], undefined, "あまり", "Adverb");
            const fieldValues = data.getFieldValues(LearnableField.JAPANESE);
            expect(fieldValues).toStrictEqual(["あまり"]);
        });

        it.skip("Should throw an exception when passing in an unknown field type", () => {
            const data = new Definition(["not much"], undefined, "あまり", "Adverb");
            //How can we test this without adding in an unused LearnableField export?
        });
    });

    describe("Default Return Values", () => {
        it("On'yomi values should return empty array", () => {
            const data = new NoOptionalOverrides();
            const value = data.getOnyomiReadings();
            expect(value).toStrictEqual([]);
        });

        it("Kun'yomi values should return empty array", () => {
            const data = new NoOptionalOverrides();
            const value = data.getKunyomiReadings();
            expect(value).toStrictEqual([]);
        });

        it("Base score should return 100", () => {
            const data = new NoOptionalOverrides();
            const value = data.getBaseScore();
            expect(value).toBe(100);
        });

        it("Example should return undefined", () => {
            const data = new NoOptionalOverrides();
            const value = data.getExample();
            expect(value).toBeUndefined();
        });

        it("Kanji variation should return undefined", () => {
            const data = new NoOptionalOverrides();
            const value = data.getKanjiVariation();
            expect(value).toBeUndefined();
        });

        it("Tags variation should return an empty array", () => {
            const data = new NoOptionalOverrides();
            const value = data.getTags();
            expect(value).toStrictEqual([]);
        });

        it("Unique ID should default to a random v4 UUID", () => {
            const data = new NoOptionalOverrides();
            const id = data.getUniqueID();
            expect(id).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
        });

        it("Equals should use default === equality", () => {
            const obj1 = new NoOptionalOverrides();
            const obj2 = new NoOptionalOverrides();
            expect(obj1.equals(obj2)).toBe(false);
            expect(obj1.equals(obj1)).toBe(true);
            expect(obj2.equals(obj2)).toBe(true);
        });

        class NoOptionalOverrides extends Learnable {
            getHint(): string {
                return "";
            }

            getKana(): string[] {
                return [];
            }

            getMeanings(): string[] {
                return [];
            }

            getTitle(): string {
                return "";
            }

        }
    });
});
