import { Kanji } from "../../../types/kanji/Kanji";
import { Reading } from "../../../types/kanji/Reading";
import { ReadingType } from "../../../types/kanji/ReadingType";
import { Example } from "../../../types/kanji/Example";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";

describe("Kanji", () => {
    describe("Getters", () => {
        const kanji = new Kanji(
            '人',
            [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)],
            ["person"],
            KyoikuGrade.ONE,
            "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
            [new Example("外国人", ["がいこくじん"], ["foreigner"])],
            []
        );

        it("Should get the readings", () => {
            expect(kanji.readings).toStrictEqual(
                [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)
            ]);
        });

        it("Should get the value", () => {
            expect(kanji.getValue()).toBe('人');
        });

        it("Should get the meanings", () => {
            expect(kanji.getMeanings()).toStrictEqual(["person"]);
        });

        it("Should return the first on and kun reading for the kana", () => {
            expect(kanji.getKana()).toStrictEqual(["じん", "ひと"]);
        });

        it("Should omit the on reading from the array if there isn't one when getting the kana", () => {
            const kanji = new Kanji('人',
                [new Reading("hito", "ひと", ReadingType.KUN)],
                ["person"],
                KyoikuGrade.ONE,
                "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
                [new Example("外国人", ["がいこくじん"], ["foreigner"])],
                []
            );
            expect(kanji.getKana()).toStrictEqual(["ひと"]);
        });

        it("Should omit the kun reading from the array if there isn't one when getting the kana", () => {
            const kanji = new Kanji('人',
                [new Reading("jin", "じん", ReadingType.ON)],
                ["person"],
                KyoikuGrade.ONE,
                "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
                [new Example("外国人", ["がいこくじん"], ["foreigner"])],
                []
            );
            expect(kanji.getKana()).toStrictEqual(["じん"]);
        });

        it("Should return an empty array if there are no readings when getting the kana", () => {
            const kanji = new Kanji('人',
                [],
                ["person"],
                KyoikuGrade.ONE,
                "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
                [new Example("外国人", ["がいこくじん"], ["foreigner"])],
                []
            );
            expect(kanji.getKana()).toStrictEqual([]);
        });

        it("Should get the grade", () => {
            expect(kanji.grade).toBe(KyoikuGrade.ONE);
        });

        it("Should get the source", () => {
            expect(kanji.source).toBe("https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji");
        });

        it("Should get the examples", () => {
            expect(kanji.examples).toStrictEqual([new Example("外国人", ["がいこくじん"], ["foreigner"])]);
        });

        it("Should return the Kyoiku grade for the title", () => {
            expect(kanji.getTitle()).toBe("Grade 1");
        });

        it("Should return the character for the kanji variation", () => {
            expect(kanji.getKanjiVariation()).toBe('人');
        });

        it("Should construct a hint message based on the grade and starting kana", () => {
            expect(kanji.getHint()).toBe("It's Grade 1 and starts with じ.")
        });
    });
});