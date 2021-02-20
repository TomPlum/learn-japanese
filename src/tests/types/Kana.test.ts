import {Kana} from "../../types/Kana";
import KanaType from "../../types/KanaType";
import {KanaColumn} from "../../types/KanaColumn";

describe("Kana", () => {
   describe("Is Diagraph", () => {
        it("Should return true when the Kana code has 2 characters", () => {
            const diagraph = new Kana("きゃ", "kya", KanaType.HIRAGANA, KanaColumn.K);
            const isDiagraph = diagraph.isDiagraph();
            expect(isDiagraph).toBe(true);
        });

        it("Should return false when the Kana code has only 1 character", () => {
            const diagraph = new Kana("き", "ki", KanaType.HIRAGANA, KanaColumn.K);
            const isDiagraph = diagraph.isDiagraph();
            expect(isDiagraph).toBe(false);
        });
   });
});