import hiragana from "./Hiragana.ts"
import each from "jest-each"
import { KanaColumn } from "../domain/kana/KanaColumn.ts"
import { KanaData } from "./DataTypes.ts"

describe("Hiragana", () => {
  describe("Unicode Mappings", () => {
    describe("Vowels", () => {
      it("a", () => expect(getHiragana(["a"]).code).toEqual("あ"))
      it("i", () => expect(getHiragana(["i"]).code).toEqual("い"))
      it("u", () => expect(getHiragana(["u"]).code).toEqual("う"))
      it("e", () => expect(getHiragana(["e"]).code).toEqual("え"))
      it("o", () => expect(getHiragana(["o"]).code).toEqual("お"))
    })

    describe("K Column", () => {
      it("ka", () => expect(getHiragana(["ka"]).code).toEqual("か"))
      it("ki", () => expect(getHiragana(["ki"]).code).toEqual("き"))
      it("ku", () => expect(getHiragana(["ku"]).code).toEqual("く"))
      it("ke", () => expect(getHiragana(["ke"]).code).toEqual("け"))
      it("ko", () => expect(getHiragana(["ko"]).code).toEqual("こ"))
    })

    describe("K Column Diacritical (Dakuten)", () => {
      it("ga", () => expect(getHiragana(["ga"]).code).toEqual("が"))
      it("gi", () => expect(getHiragana(["gi"]).code).toEqual("ぎ"))
      it("gu", () => expect(getHiragana(["gu"]).code).toEqual("ぐ"))
      it("ge", () => expect(getHiragana(["ge"]).code).toEqual("げ"))
      it("go", () => expect(getHiragana(["go"]).code).toEqual("ご"))
    })

    describe("S Column", () => {
      it("sa", () => expect(getHiragana(["sa"]).code).toEqual("さ"))
      it("shi", () => expect(getHiragana(["shi"]).code).toEqual("し"))
      it("su", () => expect(getHiragana(["su"]).code).toEqual("す"))
      it("se", () => expect(getHiragana(["se"]).code).toEqual("せ"))
      it("so", () => expect(getHiragana(["so"]).code).toEqual("そ"))
    })

    describe("S Column Diacritical (Dakuten)", () => {
      it("za", () => expect(getHiragana(["za"]).code).toEqual("ざ"))
      it("ji", () => expect(getHiragana(["ji", "zi"]).code).toEqual("じ"))
      it("zu", () => expect(getHiragana(["zu"]).code).toEqual("ず"))
      it("ze", () => expect(getHiragana(["ze"]).code).toEqual("ぜ"))
      it("zo", () => expect(getHiragana(["zo"]).code).toEqual("ぞ"))
    })

    describe("T Column", () => {
      it("ta", () => expect(getHiragana(["ta"]).code).toEqual("た"))
      it("chi", () => expect(getHiragana(["chi", "ti"]).code).toEqual("ち"))
      it("tsu", () => expect(getHiragana(["tsu"]).code).toEqual("つ"))
      it("te", () => expect(getHiragana(["te"]).code).toEqual("て"))
      it("to", () => expect(getHiragana(["to"]).code).toEqual("と"))
    })

    describe("T Column Diacritical (Dakuten)", () => {
      it("da", () => expect(getHiragana(["da"]).code).toEqual("だ"))
      it("di", () => expect(getHiragana(["di", "ji"]).code).toEqual("ぢ"))
      it("du", () => expect(getHiragana(["du", "zu"]).code).toEqual("づ"))
      it("de", () => expect(getHiragana(["de"]).code).toEqual("で"))
      it("do", () => expect(getHiragana(["do"]).code).toEqual("ど"))
    })

    describe("N Column", () => {
      it("na", () => expect(getHiragana(["na"]).code).toEqual("な"))
      it("ni", () => expect(getHiragana(["ni"]).code).toEqual("に"))
      it("nu", () => expect(getHiragana(["nu"]).code).toEqual("ぬ"))
      it("ne", () => expect(getHiragana(["ne"]).code).toEqual("ね"))
      it("no", () => expect(getHiragana(["no"]).code).toEqual("の"))
    })

    describe("H Column", () => {
      it("ha", () => expect(getHiragana(["ha"]).code).toEqual("は"))
      it("hi", () => expect(getHiragana(["hi"]).code).toEqual("ひ"))
      it("hu", () => expect(getHiragana(["hu", "fu"]).code).toEqual("ふ"))
      it("he", () => expect(getHiragana(["he", "e"]).code).toEqual("へ"))
      it("ho", () => expect(getHiragana(["ho"]).code).toEqual("ほ"))
    })

    describe("H Column Diacritical (Dakuten)", () => {
      it("ba", () => expect(getHiragana(["ba"]).code).toEqual("ば"))
      it("bi", () => expect(getHiragana(["bi"]).code).toEqual("び"))
      it("bu", () => expect(getHiragana(["bu"]).code).toEqual("ぶ"))
      it("be", () => expect(getHiragana(["be"]).code).toEqual("べ"))
      it("bo", () => expect(getHiragana(["bo"]).code).toEqual("ぼ"))
    })

    describe("H Column Diacritical (Handakuten)", () => {
      it("pa", () => expect(getHiragana(["pa"]).code).toEqual("ぱ"))
      it("pi", () => expect(getHiragana(["pi"]).code).toEqual("ぴ"))
      it("pu", () => expect(getHiragana(["pu"]).code).toEqual("ぷ"))
      it("pe", () => expect(getHiragana(["pe"]).code).toEqual("ぺ"))
      it("po", () => expect(getHiragana(["po"]).code).toEqual("ぽ"))
    })

    describe("M Column", () => {
      it("ma", () => expect(getHiragana(["ma"]).code).toEqual("ま"))
      it("mi", () => expect(getHiragana(["mi"]).code).toEqual("み"))
      it("mu", () => expect(getHiragana(["mu"]).code).toEqual("む"))
      it("me", () => expect(getHiragana(["me"]).code).toEqual("め"))
      it("mo", () => expect(getHiragana(["mo"]).code).toEqual("も"))
    })

    describe("Y Column", () => {
      it("ya", () => expect(getHiragana(["ya"]).code).toEqual("や"))
      it("yu", () => expect(getHiragana(["yu"]).code).toEqual("ゆ"))
      it("yo", () => expect(getHiragana(["yo"]).code).toEqual("よ"))
    })

    describe("R Column", () => {
      it("ra", () => expect(getHiragana(["ra"]).code).toEqual("ら"))
      it("ri", () => expect(getHiragana(["ri"]).code).toEqual("り"))
      it("ru", () => expect(getHiragana(["ru"]).code).toEqual("る"))
      it("re", () => expect(getHiragana(["re"]).code).toEqual("れ"))
      it("ro", () => expect(getHiragana(["ro"]).code).toEqual("ろ"))
    })

    describe("W Column", () => {
      it("wa", () => expect(getHiragana(["wa"]).code).toEqual("わ"))
      it("wo", () => expect(getHiragana(["wo"]).code).toEqual("を"))
    })

    it("n", () => expect(getHiragana(["n"]).code).toEqual("ん"))
  })

  describe("Column Mappings", () => {
    const vowels = getMultipleHiragana([["a"], ["i"], ["u"], ["e"], ["o"]])
    each(vowels).it("Should return the vowel column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.VOWEL)
    })

    const k = getMultipleHiragana([
      ["ka"],
      ["ki"],
      ["ku"],
      ["ke"],
      ["ko"],
      ["ga"],
      ["gi"],
      ["gu"],
      ["ge"],
      ["go"],
      ["kya"],
      ["kyu"],
      ["kyo"],
      ["gya"],
      ["gyu"],
      ["gyo"]
    ])
    each(k).it("Should return the k column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.K)
    })

    const s = getMultipleHiragana([
      ["sa"],
      ["shi"],
      ["su"],
      ["se"],
      ["so"],
      ["za"],
      ["ji", "zi"],
      ["zu"],
      ["ze"],
      ["zo"],
      ["sha"],
      ["shu"],
      ["sho"],
      ["ja", "zya"],
      ["ju", "zyu"],
      ["jo", "zyo"]
    ])
    each(s).it("Should return the s column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.S)
    })

    const t = getMultipleHiragana([
      ["ta"],
      ["chi", "ti"],
      ["tsu"],
      ["te"],
      ["to"],
      ["da"],
      ["di", "ji"],
      ["du", "zu"],
      ["de"],
      ["do"],
      ["cha"],
      ["chu"],
      ["cho"],
      ["dya", "ja"],
      ["dyu", "ju"],
      ["dyo", "jo"]
    ])
    each(t).it("Should return the t column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.T)
    })

    const n = getMultipleHiragana([["na"], ["ni"], ["nu"], ["ne"], ["no"], ["nya"], ["nyu"], ["nyo"]])
    each(n).it("Should return the n column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.N)
    })

    const h = getMultipleHiragana([
      ["ha"],
      ["hi"],
      ["hu", "fu"],
      ["he", "e"],
      ["ho"],
      ["ba"],
      ["bi"],
      ["bu"],
      ["be"],
      ["bo"],
      ["pa"],
      ["pi"],
      ["pu"],
      ["pe"],
      ["po"],
      ["hya"],
      ["hyu"],
      ["hyo"],
      ["bya"],
      ["byu"],
      ["byo"],
      ["pya"],
      ["pyu"],
      ["pyo"]
    ])
    each(h).it("Should return the h column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.H)
    })

    const m = getMultipleHiragana([["ma"], ["mi"], ["mu"], ["me"], ["mo"], ["mya"], ["myu"], ["myo"]])
    each(m).it("Should return the m column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.M)
    })

    const y = getMultipleHiragana([["ya"], ["yu"], ["yo"]])
    each(y).it("Should return the y column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.Y)
    })

    const r = getMultipleHiragana([["ra"], ["ri"], ["ru"], ["re"], ["ro"], ["rya"], ["ryu"], ["ryo"]])
    each(r).it("Should return the r column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.R)
    })

    const w = getMultipleHiragana([["wa"], ["wo"]])
    each(w).it("Should return the w column for '%s'", (kana: KanaData) => {
      expect(kana.column).toBe(KanaColumn.W)
    })

    it("Should return the other column for n", () => {
      expect(getHiragana(["n"]).column).toBe(KanaColumn.OTHER)
    })
  })

  describe("Diagraph Mappings", () => {
    it("kya", () => expect(getHiragana(["kya"]).code).toEqual("きゃ"))
    it("kyu", () => expect(getHiragana(["kyu"]).code).toEqual("きゅ"))
    it("kyo", () => expect(getHiragana(["kyo"]).code).toEqual("きょ"))

    it("sha", () => expect(getHiragana(["sha"]).code).toEqual("しゃ"))
    it("shu", () => expect(getHiragana(["shu"]).code).toEqual("しゅ"))
    it("sho", () => expect(getHiragana(["sho"]).code).toEqual("しょ"))

    it("cha", () => expect(getHiragana(["cha"]).code).toEqual("ちゃ"))
    it("chu", () => expect(getHiragana(["chu"]).code).toEqual("ちゅ"))
    it("cho", () => expect(getHiragana(["cho"]).code).toEqual("ちょ"))

    it("dya", () => expect(getHiragana(["dya", "ja"]).code).toEqual("ぢゃ"))
    it("dyu", () => expect(getHiragana(["dyu", "ju"]).code).toEqual("ぢゅ"))
    it("dyo", () => expect(getHiragana(["dyo", "jo"]).code).toEqual("ぢょ"))

    it("nya", () => expect(getHiragana(["nya"]).code).toEqual("にゃ"))
    it("nyu", () => expect(getHiragana(["nyu"]).code).toEqual("にゅ"))
    it("nya", () => expect(getHiragana(["nyo"]).code).toEqual("にょ"))

    it("hya", () => expect(getHiragana(["hya"]).code).toEqual("ひゃ"))
    it("hyu", () => expect(getHiragana(["hyu"]).code).toEqual("ひゅ"))
    it("hyo", () => expect(getHiragana(["hyo"]).code).toEqual("ひょ"))

    it("mya", () => expect(getHiragana(["mya"]).code).toEqual("みゃ"))
    it("myu", () => expect(getHiragana(["myu"]).code).toEqual("みゅ"))
    it("myo", () => expect(getHiragana(["myo"]).code).toEqual("みょ"))

    it("rya", () => expect(getHiragana(["rya"]).code).toEqual("りゃ"))
    it("ryu", () => expect(getHiragana(["ryu"]).code).toEqual("りゅ"))
    it("ryo", () => expect(getHiragana(["ryo"]).code).toEqual("りょ"))

    it("gya", () => expect(getHiragana(["gya"]).code).toEqual("ぎゃ"))
    it("gyu", () => expect(getHiragana(["gyu"]).code).toEqual("ぎゅ"))
    it("gyo", () => expect(getHiragana(["gyo"]).code).toEqual("ぎょ"))

    it("ja", () => expect(getHiragana(["ja", "zya"]).code).toEqual("じゃ"))
    it("ju", () => expect(getHiragana(["ju", "zyu"]).code).toEqual("じゅ"))
    it("jo", () => expect(getHiragana(["jo", "zyo"]).code).toEqual("じょ"))

    it("bya", () => expect(getHiragana(["bya"]).code).toEqual("びゃ"))
    it("byu", () => expect(getHiragana(["byu"]).code).toEqual("びゅ"))
    it("byo", () => expect(getHiragana(["byo"]).code).toEqual("びょ"))

    it("pya", () => expect(getHiragana(["pya"]).code).toEqual("ぴゃ"))
    it("pyu", () => expect(getHiragana(["pyu"]).code).toEqual("ぴゅ"))
    it("pyo", () => expect(getHiragana(["pyo"]).code).toEqual("ぴょ"))

    it("Should return a total of 36 diagraphs", () => {
      const diagraphs = hiragana().filter((data) => data.name.length === 2)
      expect(diagraphs).toHaveLength(36)
    })
  })

  describe("Is Diacritical", () => {
    const diacritical = getMultipleHiragana([
      ["ga"],
      ["gi"],
      ["gu"],
      ["ge"],
      ["go"],
      ["za"],
      ["ji", "zi"],
      ["zu"],
      ["ze"],
      ["zo"],
      ["da"],
      ["di", "ji"],
      ["du", "zu"],
      ["de"],
      ["do"],
      ["ba"],
      ["bi"],
      ["bu"],
      ["be"],
      ["bo"],
      ["pa"],
      ["pi"],
      ["pu"],
      ["pe"],
      ["po"],
      ["ja", "zya"],
      ["ju", "zyu"],
      ["jo", "zyo"],
      ["dya", "ja"],
      ["dyu", "ju"],
      ["dyo", "jo"],
      ["bya"],
      ["byu"],
      ["byo"],
      ["pya"],
      ["pyu"],
      ["pyo"]
    ])
    each(diacritical).it("it should have diacritical set to true", (kana) => {
      expect(kana.diacritical).toBe(true)
    })

    const regular = getMultipleHiragana([
      ["a"],
      ["i"],
      ["u"],
      ["e"],
      ["o"],
      ["ka"],
      ["ki"],
      ["ku"],
      ["ke"],
      ["ko"],
      ["kya"],
      ["kyu"],
      ["kyo"],
      ["sa"],
      ["shi"],
      ["su"],
      ["se"],
      ["so"],
      ["sha"],
      ["shu"],
      ["sho"],
      ["ta"],
      ["chi", "ti"],
      ["tsu"],
      ["te"],
      ["to"],
      ["cha"],
      ["chu"],
      ["cho"],
      ["na"],
      ["ni"],
      ["nu"],
      ["ne"],
      ["no"],
      ["nya"],
      ["nyu"],
      ["nyo"],
      ["ha"],
      ["hi"],
      ["hu", "fu"],
      ["he", "e"],
      ["ho"],
      ["hya"],
      ["hyu"],
      ["hyo"],
      ["ma"],
      ["mi"],
      ["mu"],
      ["me"],
      ["mo"],
      ["mya"],
      ["myu"],
      ["myo"],
      ["ya"],
      ["yu"],
      ["yo"],
      ["ra"],
      ["ri"],
      ["ru"],
      ["re"],
      ["ro"],
      ["rya"],
      ["ryu"],
      ["ryo"],
      ["wa"],
      ["wo"],
      ["n"]
    ])
    each(regular).it("it should have diacritical set to false", (kana) => {
      expect(kana.diacritical).toBe(false)
    })

    it("Should return exactly 25 diacritical (non-diagraph) kana", () => {
      const diacriticals = hiragana().filter((data) => data.diacritical && data.code.length === 1)
      expect(diacriticals.length).toBe(25)
    })
  })

  function getMultipleHiragana(romaji: string[][]): KanaData[] {
    return romaji.map((array) => getHiragana(array))
  }

  function getHiragana(romaji: string[]): KanaData {
    return hiragana().filter((entry) => JSON.stringify(entry.romaji) === JSON.stringify(romaji))[0]
  }
})
