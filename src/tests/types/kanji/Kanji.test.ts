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
            [new Example("外国人", ["がいこくじん"], ["foreigner"])]
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

        it("Should get the grade", () => {
            expect(kanji.grade).toBe(KyoikuGrade.ONE);
        });

        it("Should get the source", () => {
            expect(kanji.source).toBe("https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji");
        });

        it("Should get the examples", () => {
            expect(kanji.examples).toStrictEqual( [new Example("外国人", ["がいこくじん"], ["foreigner"])]);
        });

        it("Should return the Kyoiku grade for the title", () => {
            expect(kanji.getTitle()).toBe("Grade 1")
        });
    });
});