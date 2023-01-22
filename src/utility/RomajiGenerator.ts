import hiragana from "../data/Hiragana"
import katakana from "../data/Katakana"
import { KanaData } from "../data/DataTypes"

export default class RomajiGenerator {
  private readonly hiragana: KanaData[] = hiragana()
  private readonly katakana: KanaData[] = katakana()

  private readonly longSounds = new Map([
    ["aa", "ā"],
    ["ii", "ī"],
    ["uu", "ū"],
    ["ee", "ē"],
    ["oo", "ō"],
    ["ou", "ō"],
    ["aー", "ā"],
    ["iー", "ī"],
    ["uー", "ū"],
    ["eー", "ē"],
    ["oー", "ō"]
  ])
  private readonly sokuons = ["っ", "ッ"]

  public generate(kana: string): string {
    let kanaWithDiagraphsReplaced = kana

    //Replace Diagraphs
    const hiraganaDiagraphs = hiragana().filter((it: KanaData) => it.name.length === 2)
    const katakanaDiagraphs = katakana().filter((it: KanaData) => it.name.length === 2)

    hiraganaDiagraphs.concat(katakanaDiagraphs).forEach((data: KanaData) => {
      kanaWithDiagraphsReplaced = kanaWithDiagraphsReplaced.replaceAll(data.code, data.romaji[0])
    })

    //Replace Sokuons
    const sokuonsReplaced = [...kanaWithDiagraphsReplaced].map((char: string, i: number) => {
      if (i < kanaWithDiagraphsReplaced.length - 1 && this.sokuons.includes(char)) {
        //TODO: What if the sokuon is before a diagraph?;
        const kana = this.hiragana
          .concat(this.katakana)
          .find((it: KanaData) => it.code === kanaWithDiagraphsReplaced[i + 1])
        return kana?.column ?? char
      }
      return char
    })

    //Replace Kana
    let romaji = [...sokuonsReplaced]
      .map((char: string) => {
        return this.hiragana.concat(this.katakana).find((it: KanaData) => it.code === char)?.romaji[0] ?? char
      })
      .join("")

    //Replace Long Sounds w/Macron Variants
    this.longSounds.forEach((value: string, key: string) => (romaji = romaji.replaceAll(key, value)))

    //Remove any leading Japanese full-stops (A.K.A 句点 kuten) as we don't want them in the romaji
    romaji = romaji.replaceAll("。", "")

    return romaji
  }
}
