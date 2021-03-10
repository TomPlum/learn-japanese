import { KanjiRepository, KanjiSettings } from "../../repository/KanjiRepository";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";
import { kyoiku, joyo } from "../../data/Kanji";
import each from "jest-each";
import { KanjiData } from "../../data/DataTypes";

jest.mock("../../data/Kanji.ts");

let mockKyoiku = kyoiku as jest.MockedFunction<() => KanjiData[]>;
let mockJoyo = joyo as jest.MockedFunction<() => KanjiData[]>;

beforeEach(() => {
    const exampleKyoikuKanji6 = {
        name: "机",
        code: "\u673A",
        on: [{ kana: "き", romanji: "ki" }],
        kun: [{ kana: "つくえ", romanji: "tsukue" }],
        source: "https://en.wiktionary.org/wiki/%E6%9C%BA#Kanji",
        meanings: ["desk", "table"],
        grade: KyoikuGrade.SIX,
        examples: [
            { value: "机", kana: ["つくえ, つき"], english: ["desk"] },
            { value: "机上", kana: ["きじょう"], english: ["on the desk", "theoretical", "academic"] },
            { value: "机上の空論", kana: ["きじょうのくうろん"], english: ["academic gossip", "empty theory"] },
            { value: "事務机", kana: ["じむづくえ"], english: ["cleric desk"] },
            { value: "書き物机", kana: ["かきものづくえ"], english: ["writing desk",] },
        ]
    };

    let exampleKyoikuKanji2 = exampleKyoikuKanji6;
    exampleKyoikuKanji2.grade = KyoikuGrade.TWO;

    mockKyoiku.mockReturnValue([exampleKyoikuKanji6, exampleKyoikuKanji2]);

    const exampleJoyoKanji = {
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
            { value: "飼い猫", kana: ["かいねこ"], english: ["pet cat"] },
        ]
    };

    mockJoyo.mockReturnValue([exampleJoyoKanji, exampleJoyoKanji, exampleJoyoKanji, exampleJoyoKanji]);
});

describe("Kanji Repository", () => {
    const repository = new KanjiRepository();

    each([null, undefined]).it("Should return an empty array if the settings are falsy", (settings) => {
        const response = repository.read(settings);
        expect(response).toHaveLength(0);
    });

    it("Should return all Joyo Kanji if they are requested with no quantity", () => {
        const settings: KanjiSettings = { joyo: true, grades: [] };
        const response = repository.read(settings);
        expect(response).toHaveLength(4);
    });

    it("Should return the specified quantity of Joyo Kanji when requested", () => {
        const settings: KanjiSettings = { joyo: true, grades: [], quantity: 1 };
        const response = repository.read(settings);
        expect(response).toHaveLength(1);
    });

    it("Should return the specified quantity of Kyoiku Kanji when requested with no Joyo", () => {
        const settings: KanjiSettings = { joyo: false, grades: [KyoikuGrade.TWO, KyoikuGrade.SIX], quantity: 1 };
        const response = repository.read(settings);
        expect(response).toHaveLength(1);
    });

    it("Should return all Kyoiku Kanji when only grades are specific in the request", () => {
        const settings: KanjiSettings = { grades: [KyoikuGrade.TWO, KyoikuGrade.SIX] };
        const response = repository.read(settings);
        expect(response).toHaveLength(2);
    });

    it("Should return all Joyo Kanji if they are not specified, but also no Kyoiku grades are specified", () => {
        const settings: KanjiSettings = { joyo: false, grades: [] };
        const response = repository.read(settings);
        expect(response).toHaveLength(4)
    });
});