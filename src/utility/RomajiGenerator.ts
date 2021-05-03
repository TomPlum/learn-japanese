import hiragana from "../data/Hiragana";
import katakana from "../data/Katakana";
import { KanaData } from "../data/DataTypes";

export default class RomajiGenerator {
    private readonly hiragana: KanaData[] = hiragana();
    private readonly katakana: KanaData[] = katakana();

    private readonly longSounds = new Map([["uu", "ū"], ["oo", "ō"], ["ou", "ō"]]);

    public generate(kana: string): string {
        let romaji = [...kana].map((char: string) => {
            const hiraganaRomaji = this.hiragana.find((it: KanaData) => it.name === char)?.romaji;
            const katakanaRomaji = this.katakana.find((it: KanaData) => it.name === char)?.romaji;

            if (hiraganaRomaji) {
                return hiraganaRomaji[0];
            }

            if (katakanaRomaji) {
                return katakanaRomaji[0];
            }

            throw new Error(char + " is not a valid Hiragana or Katakana character");
        }).join("");

        this.longSounds.forEach((value: string, key: string) => {
            romaji = romaji.replaceAll(key, value)
        });

        return romaji;
    }
}