import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import LearnableField from "../../../types/learn/LearnableField";
import CommonData from "../../../types/learn/CommonData";
import { Kanji } from "../../../types/kanji/Kanji";
import { KanjiReading } from "../../../types/kanji/KanjiReading";
import { ReadingType } from "../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../types/kanji/KyoikuGrade";

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
            expect(fieldValues).toStrictEqual(["he"]);
        });

        it("Should return the kanji variation when specifying the kanji field", () => {
            const data = new Kanji("魚", [new KanjiReading("sakana", "さかな", ReadingType.KUN)], ["fish"], KyoikuGrade.TWO, "", [], ["animal"]);
            const fieldValues = data.getFieldValues(LearnableField.KANJI);
            expect(fieldValues).toStrictEqual(["魚"]);
        });
    });
});