import {KanaRepository} from "../../repository/KanaRepository";
import {Kana} from "../../types/Kana";
import KanaType from "../../types/KanaType";
import {KanaColumn} from "../../types/KanaColumn";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    it("Should return 214 total kana", () => {
        const data = repository.read({
            diagraphs: true,
            katakana: true,
            hiragana: true,
        })
        expect(data.length).toBe(214);
    });

    it('Should throw a exception if the settings are falsy', () => {
        expect(() => repository.read(undefined)).toThrow(ReferenceError);
    });

    it("Should return only the quantity specified when the config parameter is passed", () => {
        const data = repository.read({ hiragana: true, quantity: 10 });
        expect(data).toHaveLength(10);
    });

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.read({hiragana: true});
                expect(response[0]).toStrictEqual(new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false));
            });
        });
    });

    describe("Katakana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.read({katakana: true});
                expect(response[0]).toStrictEqual(new Kana("ア", ["a"], KanaType.KATAKANA, KanaColumn.VOWEL, false));
            });
        });
    });
});