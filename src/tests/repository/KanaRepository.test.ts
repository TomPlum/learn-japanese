import {KanaRepository} from "../../repository/KanaRepository";
import {Kana} from "../../types/Kana";
import KanaType from "../../types/KanaType";
import {KanaColumn} from "../../types/KanaColumn";

describe("Kana Repository", () => {
    const repository = new KanaRepository();

    it ("should return 194 total kana", () => {
        const data = repository.read({
            includeDiagraphs: true,
            includeKatakana: true,
            includeHiragana: true,
        })
        expect(data.length).toBe(214);
    } )

    describe("Hiragana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.read({includeHiragana: true});
                expect(response[0]).toStrictEqual(new Kana("あ", "a", KanaType.HIRAGANA, KanaColumn.VOWEL));
            });
        });
    });

    describe("Katakana", () => {
        describe("Read", () => {
            it("Should convert the JSON values into Kana objects", () => {
                const response = repository.read({includeKatakana: true});
                expect(response[0]).toStrictEqual(new Kana("ア", "a", KanaType.KATAKANA, KanaColumn.VOWEL));
            });
        });
    });
});