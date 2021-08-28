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
          const romaji = kana.getRomaji();
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
      it("Should return the kana romaji string for the meanings", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const answer = kana.getMeanings();
          expect(answer).toStrictEqual(["fu", "hu"]);
      });

      it("Should return the kana type for the title", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const title = kana.getTitle();
          expect(title).toBe("Hiragana");
      });

      it("Should return the character for the kana", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const title = kana.getKana();
          expect(title).toStrictEqual(["ふ"]);
      });

      it("Should return undefined for the kanji variation", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const title = kana.getKanjiVariation();
          expect(title).toBeUndefined();
      });

      it("Should return undefined for the example", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const title = kana.getExample();
          expect(title).toBeUndefined();
      });

      it("Should return the kana character for the unique ID", () => {
          const kana = new Kana("ふ", ["fu", "hu"], KanaType.HIRAGANA, KanaColumn.H, false);
          const id = kana.getUniqueID();
          expect(id).toBe("ふ");
      });

      describe("Hint Message", () => {
          it('Should return a message hinting about the column and syllabary for a regular kana', () => {
              const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
              const text = kana.getHint();
              expect(text).toBe('This kana is from the \'vowel\' column in the Hiragana syllabary.');
          });

          it('Should return a message about diacriticals for a kana with a diacritical mark', () => {
              const kana = new Kana("ぞ", ["zo"], KanaType.HIRAGANA, KanaColumn.S, true);
              const text = kana.getHint();
              expect(text).toBe('This kana is from the \'s\' column in the Hiragana syllabary. Also, notice the diacritical mark.');
          });

          it('Should return a diagraph specific message for a kana that is a diagraph', () => {
              const kana = new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false);
              const text = kana.getHint();
              expect(text).toBe('Diagraphs usually drop the 1st kana\'s 2nd letter when transcribed.');
          });

          it('Should return a combination of relevant messages for a kana that is a diagraph with a diacritical mark', () => {
              const kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
              const text = kana.getHint();
              expect(text).toBe('Diagraphs usually drop the 1st kana\'s 2nd letter when transcribed. Also, notice the diacritical mark.');
          });
      });

      describe("Base Score", () => {
         it("Should return 100 for a regular kana", () => {
             const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
             const score = kana.getBaseScore();
             expect(score).toBe(100);
         });

         it("Should return 150 for a diagraph kana", () => {
             const kana = new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false);
             const score = kana.getBaseScore();
             expect(score).toBe(150);
         });
      });
   });
});