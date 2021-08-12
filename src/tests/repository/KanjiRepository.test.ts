import { KanjiRepository } from "../../repository/KanjiRepository";
import { KyoikuGrade } from "../../types/kanji/KyoikuGrade";
import { joyo, kyoiku } from "../../data/Kanji";
import { KanjiData } from "../../data/DataTypes";
import { KanjiSettingsBuilder } from "../../types/session/settings/data/KanjiSettings";
import Arrays from "../../utility/Arrays";

jest.mock("../../data/Kanji.ts");

let mockKyoiku = kyoiku as jest.MockedFunction<() => KanjiData[]>;
let mockJoyo = joyo as jest.MockedFunction<() => KanjiData[]>;

beforeEach(() => {
    const exampleKyoikuKanji6 = {
        name: "机",
        on: ["き"],
        kun: ["つくえ"],
        source: "https://en.wiktionary.org/wiki/%E6%9C%BA#Kanji",
        meanings: ["desk", "table"],
        grade: 6,
        examples: [
            { value: "机", kana: ["つくえ, つき"], english: ["desk"] },
            { value: "机上", kana: ["きじょう"], english: ["on the desk", "theoretical", "academic"] },
            { value: "机上の空論", kana: ["きじょうのくうろん"], english: ["academic gossip", "empty theory"] },
            { value: "事務机", kana: ["じむづくえ"], english: ["cleric desk"] },
            { value: "書き物机", kana: ["かきものづくえ"], english: ["writing desk",] },
        ],
        tags: ["furniture"]
    };

    let exampleKyoikuKanji1 =  { ...exampleKyoikuKanji6 };
    exampleKyoikuKanji1.grade = 1;

    let exampleKyoikuKanji2 = { ...exampleKyoikuKanji6 };
    exampleKyoikuKanji2.grade = 2;

    let exampleKyoikuKanji3 = { ...exampleKyoikuKanji6 };
    exampleKyoikuKanji3.grade = 3;

    mockKyoiku.mockReturnValue([exampleKyoikuKanji1, exampleKyoikuKanji2, exampleKyoikuKanji3, exampleKyoikuKanji6]);

    const exampleJoyoKanji = {
        name: "猫",
        code: "\u732B",
        on: ["みょう"],
        kun: ["ねこ"],
        source: "https://en.wiktionary.org/wiki/%E7%8C%AB#Kanji",
        meanings: ["cat"],
        grade: 2,
        examples: [
            { value: "猫", kana: ["ねこ"], english: ["cat"] },
            { value: "子猫", kana: ["こねこ"], english: ["kitten"] },
            { value: "野良猫", kana: ["のらねこ"], english: ["stray cat"] },
            { value: "黒猫", kana: ["くろねこ"], english: ["black cat"] },
            { value: "飼い猫", kana: ["かいねこ"], english: ["pet cat"] },
        ],
    };

    mockJoyo.mockReturnValue([exampleJoyoKanji, exampleJoyoKanji, exampleJoyoKanji, exampleKyoikuKanji6]);

    Arrays.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
        const objects = [...array];
        const firstKana = objects[0];
        objects.splice(0, 1);
        return [firstKana, objects];
    });
});

describe("Kanji Repository", () => {
    const repository = new KanjiRepository();

    describe("Read", () => {
        it.skip("Should return an empty array if the settings are empty", () => {
            const settings = new KanjiSettingsBuilder().build();
            const response = repository.read(settings);
            expect(response).toHaveLength(0);
        });

        it("Should return all Joyo Kanji if they are requested with no quantity", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji().build();
            const response = repository.read(settings);
            expect(response).toHaveLength(4);
        });

        it("Should return the specified quantity of Joyo Kanji when requested", () => {
            const settings = new KanjiSettingsBuilder().withJoyoKanji().withQuantity(1).build();
            const response = repository.read(settings);
            expect(response).toHaveLength(1);
        });

        it("Should return the specified quantity of Kyoiku Kanji when requested with no Joyo", () => {
            const settings = new KanjiSettingsBuilder().withQuantity(1).build();
            const response = repository.read(settings);
            expect(response).toHaveLength(1);
        });

        it("Should return all Kyoiku Kanji when only grades are specific in the request", () => {
            const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.TWO, KyoikuGrade.SIX]).build();
            const response = repository.read(settings);
            expect(response).toHaveLength(2);
        });

        it("Should return N random Kyoiku kanji when both grades and quantity are specified", () => {
            const settings = new KanjiSettingsBuilder().withGrades([KyoikuGrade.ONE, KyoikuGrade.SIX]).withQuantity(2).build();
            const response = repository.read(settings);
            expect(response.map(it => it.grade)).toStrictEqual([KyoikuGrade.ONE, KyoikuGrade.SIX]);
        });

        it("Should return all Joyo Kanji if they are not specified, but also no Kyoiku grades are specified", () => {
            const settings = new KanjiSettingsBuilder().build();
            const response = repository.read(settings);
            expect(response).toHaveLength(4)
        });
    });

    describe("Get By Value", () => {
        it("Should return the kanji if a code matches the request", () => {
            const kanji = repository.getByValue("猫");
            expect(kanji?.getMeanings()).toStrictEqual(['cat']);
        });

        it("Should return undefined if the request does not match any kanji", () => {
           const kanji = repository.getByValue("a");
           expect(kanji).toBeUndefined();
        });

        it("Should return the tags if the kanji has any", () => {
            const kanji = repository.getByValue("机");
            expect(kanji?.getTags()).toStrictEqual(["furniture"]);
        });

        it("Should return any empty array if the kanji has no tags", () => {
            const kanji = repository.getByValue("猫");
            expect(kanji?.getTags()).toStrictEqual([]);
        });
    });
});
