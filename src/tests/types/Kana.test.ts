import { Kana } from "../../types/Kana";
import KanaType from "../../types/KanaType";
import { KanaColumn } from "../../types/KanaColumn";

describe("Kana", () => {
   describe("Is Diagraph", () => {
        it("Should return true when the Kana code has 2 characters", () => {
            const kana = new Kana("きゃ", ["kya"], KanaType.HIRAGANA, KanaColumn.K, false);
            const isDiagraph = kana.isDiagraph();
            expect(isDiagraph).toBe(true);
        });

        it("Should return false when the Kana code has only 1 character", () => {
            const kana = new Kana("き", ["ki"], KanaType.HIRAGANA, KanaColumn.K, false);
            const isDiagraph = kana.isDiagraph();
            expect(isDiagraph).toBe(false);
        });
   });

   describe("Is Diacritical", () => {
       it("Should return true if the kana has a diacritical mark", () => {
           const kana = new Kana("ば", ["ba"], KanaType.HIRAGANA, KanaColumn.H, true);
           const isDiacritical = kana.isDiacritical;
           expect(isDiacritical).toBe(true);
       });

       it("Should return false if the kana does not have a diacritical mark", () => {
           const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           const isDiacritical = kana.isDiacritical;
           expect(isDiacritical).toBe(false);
       });
   });


   describe("Get Full Romanji String", () => {
       it("Should return the romanji for a Kana with a single pronunciation", () => {
           const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           const string = kana.getFullRomanjiString();
           expect(string).toEqual("a");
       });

       it("Should return both pronunciations with one in parentheses when a kana has multiple pronunciations", () => {
           const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           const string = kana.getFullRomanjiString();
           expect(string).toEqual("fu (hu)");
       });
   });

   describe("Getters", () => {
      it("Should return the Kana column", () => {
          const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const column = kana.column;
          expect(column).toEqual(KanaColumn.VOWEL);
      });

      it("Should return the Kana character", () => {
          const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const code = kana.code;
          expect(code).toEqual("あ");
      });

      it("Should return the Kana syllabary type", () => {
          const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const type = kana.type;
          expect(type).toEqual(KanaType.HIRAGANA);
      });

      it("Should return the Kana romanji", () => {
          const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const romanji = kana.romanji;
          expect(romanji[0]).toEqual("a");
      });
   });
});