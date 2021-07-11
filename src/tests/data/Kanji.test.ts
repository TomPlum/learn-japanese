import { joyo, kyoiku } from "../../data/Kanji";
import { KanjiData, KanjiExample } from "../../data/DataTypes";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

/*
jest.mock("../../data/Kanji.ts");

let mockKyoiku = kyoiku as jest.MockedFunction<() => KanjiData[]>;
let mockJoyo = joyo as jest.MockedFunction<() => KanjiData[]>;

beforeEach(() => {
    mockKyoiku.mockReturnValue([{
        name: "人",
        code: "\u4eba",
        on: [{ kana: "じん", romaji: "jin" }],
        kun: [{ kana: "ひと", romaji: "hito" }],
        source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        meanings: ["person"],
        grade: KyoikuGrade.ONE,
        examples: [
            { value: "外国人", kana: ["がいこくじん"], english: ["foreigner"] },
            { value: "個人", kana: ["こじん"], english: ["individual", "private person", "personal", "private"] },
            { value: "三人", kana: ["さんにん", "みたり"], english: ["three people"] },
            { value: "人間", kana: ["にんげん"], english: ["human being", "man", "person"] },
            { value: "人気", kana: ["にんき"], english: ["popular", "popular feeling", "business conditions"] },

        ]
    }]);

    mockJoyo.mockReturnValue([ {
        name: "猫",
        code: "\u732B",
        on: [{ kana: " みょう", romaji: "myo" }],
        kun: [{ kana: "ねこ", romaji: "neko" }],
        source: "https://en.wiktionary.org/wiki/%E7%8C%AB#Kanji",
        meanings: ["cat"],
        grade: KyoikuGrade.TWO,
        examples: [
            { value: "猫", kana: ["ねこ"], english: ["cat"] },
            { value: "子猫", kana: ["こねこ"], english: ["kitten"] },
            { value: "野良猫", kana: ["のらねこ"], english: ["stray cat"] },
            { value: "黒猫", kana: ["くろねこ"], english: ["black cat"] },
            { value: "飼い猫", kana: ["かいねこ"], english: ["pet cat",] },
        ]
    }]);
});
*/

describe("Kanji Data", () => {
    it("Kyoiku should return only Kyoiku", () => {
        expect(kyoiku()).toHaveLength(302);
    });

    it("Joyo should return Joyo & Kyoiku", () => {
        expect(joyo()).toHaveLength(303);
    });

    it("Should return exactly 80 Grade 1 Kyoiku Kanji", () => {
        const kanji = kyoiku().filter((kanji: KanjiData) => kanji.grade === KyoikuGrade.ONE)
        expect(kanji).toHaveLength(80);
    });

    it("Should return exactly 160 Grade 2 Kyoiku Kanji", () => {
        const kanji = kyoiku().filter((kanji: KanjiData) => kanji.grade === KyoikuGrade.TWO)
        expect(kanji).toHaveLength(160);
    });

    describe("Validation", () => {
        it("Should not contain any kanji that have commas in their meaning arrays", () => {
            const invalid = joyo().filter((kanji: KanjiData) => {
                return kanji.meanings.some((meaning: string) => meaning.includes(","))
            });

            if (invalid.length > 0) {
                console.log(invalid.length + " Kanji failed meanings validation. These were:\n");
                invalid.forEach((kanji: KanjiData) => {
                    console.log(kanji.code + " -> " + kanji.meanings);
                });
            }

            expect(invalid).toHaveLength(0);
        });

        it("Should not return any duplicate unicode values", () => {
            const kanji = kyoiku().map((kanji: KanjiData) => kanji.code);
            const unique = new Set(kanji);
            expect(kanji.length).toBe(unique.size);
        });

        it("Should not contain any kanji that have missing example kana", () => {
            const invalid = joyo().filter((kanji: KanjiData) => {
                return kanji.examples.some((example: KanjiExample) => {
                    return example.kana.some((kana: string) => !kana || kana === "");
                });
            });

            if (invalid.length > 0) {
                console.log(invalid.length + " Kanji failed examples kana validation. These were:\n");
                invalid.forEach((kanji: KanjiData) => {
                    console.log(kanji.code + " -> " + kanji.examples
                        .filter(it => it.kana.filter(it => !it || it === ""))
                        .map(it => it.english)
                    );
                });
            }

            expect(invalid).toHaveLength(0);
        });
    });
});