import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";
import each from "jest-each";
import { KanaRepository } from "../../../repository/KanaRepository";

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


   describe("Get Full Rōmaji String", () => {
       it("Should return the rōmaji for a Kana with a single pronunciation", () => {
           const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           const string = kana.getFullRomajiString();
           expect(string).toEqual("a");
       });

       it("Should return both pronunciations with one in parentheses when a kana has multiple pronunciations", () => {
           const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           const string = kana.getFullRomajiString();
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

      it("Should return the Kana rōmaji", () => {
          const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const romaji = kana.romaji;
          expect(romaji[0]).toEqual("a");
      });
   });

   describe("Equality", () => {
       const kana = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

       it("Should return true for a Kana with identical fields", () => {
           const other = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           expect(kana.equals(other)).toBe(true);
       });

       each([null, undefined]).it("Should return false for falsy values", (other: Kana) => {
           expect(kana.equals(other)).toBe(false);
       });

       it("Should return false for a different type", () => {
           expect(kana.equals(new KanaRepository())).toBe(false);
       });

       it("Should return false for a Kana with a different code", () => {
           const other = new Kana("あ", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           expect(kana.equals(other)).toBe(false);
       });

       it("Should return false for a Kana with a different romaji array", () => {
           const other = new Kana("え", ["bya"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
           expect(kana.equals(other)).toBe(false);
       });

       it("Should return false for a Kana with a different KanaType", () => {
           const other = new Kana("え", ["e"], KanaType.KATAKANA, KanaColumn.VOWEL, false);
           expect(kana.equals(other)).toBe(false);
       });

       it("Should return false for a Kana with a different KanaColumn", () => {
           const other = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.S, false);
           expect(kana.equals(other)).toBe(false);
       });

       it("Should return false for a Kana with a different diacritical value", () => {
           const other = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, true);
           expect(kana.equals(other)).toBe(false);
       });
   });

   describe("Learnable", () => {
      it("Should return the kana unicode for the question", () => {
          const kana = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const question = kana.getQuestion();
          expect(question).toBe("え");
      });
      it("Should return the kana romaji string for the answer", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
          const question = kana.getAnswer();
          expect(question).toBe("fu (hu)");
      });
   });
});