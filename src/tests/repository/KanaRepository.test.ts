import {KanaRepository} from "../../repository/KanaRepository";
import {Kana} from "../../types/Kana";
import KanaType from "../../types/KanaType";
import {KanaColumn} from "../../types/KanaColumn";
import hiragana from "../../data/Hiragana";
import { KanaData } from "../../data/DataTypes";
import katakana from "../../data/Katakana";

jest.mock("../../data/Hiragana");
jest.mock("../../data/Katakana");

const mockHiragana = hiragana as jest.MockedFunction<() => KanaData[]>;
const mockKatakana = katakana as jest.MockedFunction<() => KanaData[]>;

beforeEach(() => {
    mockHiragana.mockReturnValue([
        { name: "あ", code: "\u3042", romanji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "い", code: "\u3044", romanji: ["i"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "う", code: "\u3046", romanji: ["u"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "え", code: "\u3048", romanji: ["e"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "お", code: "\u304A", romanji: ["o"], column: KanaColumn.VOWEL, diacritical: false }
    ]);

    mockKatakana.mockReturnValue([
        { name: "ア", code: "\u30A2", romanji: ["a"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "イ", code: "\u30A4", romanji: ["i"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "ウ", code: "\u30A6", romanji: ["u"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "エ", code: "\u30A8", romanji: ["e"], column: KanaColumn.VOWEL, diacritical: false },
        { name: "オ", code: "\u30AA", romanji: ["o"], column: KanaColumn.VOWEL, diacritical: false }
    ]);
});

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    it("Should return only the quantity specified when the config parameter is passed", () => {
        const data = repository.read({ hiragana: true, quantity: 3 });
        expect(data).toHaveLength(3);
    });

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                mockHiragana.mockReturnValue([{ name: "あ", code: "\u3042", romanji: ["a"], column: KanaColumn.VOWEL, diacritical: false }]);
                const response = repository.read({ hiragana: true });
                expect(response[0]).toStrictEqual(new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false));
            });
        });
    });

    describe("Katakana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                mockKatakana.mockReturnValue([{ name: "ア", code: "\u30A2", romanji: ["a"], column: KanaColumn.VOWEL, diacritical: false }]);
                const response = repository.read({ katakana: true });
                expect(response[0]).toStrictEqual(new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false));
            });
        });
    });
});