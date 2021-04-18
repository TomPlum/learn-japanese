import { joyo, kyoiku } from "../../data/Kanji";
import { KanjiData } from "../../data/DataTypes";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";

/*
jest.mock("../../data/Kanji.ts");

let mockKyoiku = kyoiku as jest.MockedFunction<() => KanjiData[]>;
let mockJoyo = joyo as jest.MockedFunction<() => KanjiData[]>;

beforeEach(() => {
    mockKyoiku.mockReturnValue([{
        name: "人",
        code: "\u4eba",
        on: [{ kana: "じん", romanji: "jin" }],
        kun: [{ kana: "ひと", romanji: "hito" }],
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
        on: [{ kana: " みょう", romanji: "myo" }],
        kun: [{ kana: "ねこ", romanji: "neko" }],
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

it("Kyoiku should return only Kyoiku", () => {
    expect(kyoiku()).toHaveLength(123);
});

it("Joyo should return Joyo & Kyoiku", () => {
    expect(joyo()).toHaveLength(124);
});

it("Should return exactly 80 Grade 1 Kyoiku Kanji", () => {
    const kanji = kyoiku().filter((kanji: KanjiData) => kanji.grade === KyoikuGrade.ONE)
    expect(kanji).toHaveLength(80);
});

it("Should not return any duplicate unicode values", () => {
    const kanji = kyoiku().map((kanji: KanjiData) => kanji.code);
    const unique = new Set(kanji);
    expect(kanji.length).toBe(unique.size);
});