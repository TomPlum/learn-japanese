import { rest } from "msw"
import { api } from "../util"

export const handlers = [
    rest.get(`${api}/kana/all`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                hiragana: [
                    {
                        character: "あ",
                        column: "vowel",
                        romaji: ["a"],
                        diacritical: false
                    },
                    {
                        character: "い",
                        column: "vowel",
                        romaji: ["i"],
                        diacritical: false
                    },
                    {
                        character: "う",
                        column: "vowel",
                        romaji: ["u"],
                        diacritical: false
                    },
                    {
                        character: "え",
                        column: "vowel",
                        romaji: ["e"],
                        diacritical: false
                    },
                    {
                        character: "お",
                        column: "vowel",
                        romaji: ["o"],
                        diacritical: false
                    },
                    {
                        character: "か",
                        column: "k",
                        romaji: ["ka"],
                        diacritical: false
                    },
                    {
                        character: "き",
                        column: "k",
                        romaji: ["ki"],
                        diacritical: false
                    },
                    {
                        character: "く",
                        column: "k",
                        romaji: ["ku"],
                        diacritical: false
                    },
                    {
                        character: "け",
                        column: "k",
                        romaji: ["ke"],
                        diacritical: false
                    },
                    {
                        character: "こ",
                        column: "k",
                        romaji: ["ko"],
                        diacritical: false
                    },
                    {
                        character: "が",
                        column: "k",
                        romaji: ["ga"],
                        diacritical: true
                    },
                    {
                        character: "ぎ",
                        column: "k",
                        romaji: ["gi"],
                        diacritical: true
                    },
                    {
                        character: "ぐ",
                        column: "k",
                        romaji: ["gu"],
                        diacritical: true
                    },
                    {
                        character: "げ",
                        column: "k",
                        romaji: ["ge"],
                        diacritical: true
                    },
                    {
                        character: "ご",
                        column: "k",
                        romaji: ["go"],
                        diacritical: true
                    },
                    {
                        character: "き",
                        column: "k",
                        romaji: ["kya"],
                        diacritical: false
                    },
                    {
                        character: "き",
                        column: "k",
                        romaji: ["kyu"],
                        diacritical: false
                    },
                    {
                        character: "き",
                        column: "k",
                        romaji: ["kyo"],
                        diacritical: false
                    },
                    {
                        character: "ぎ",
                        column: "k",
                        romaji: ["gya"],
                        diacritical: true
                    },
                    {
                        character: "ぎ",
                        column: "k",
                        romaji: ["gyu"],
                        diacritical: true
                    },
                    {
                        character: "ぎ",
                        column: "k",
                        romaji: ["gyo"],
                        diacritical: true
                    },
                    {
                        character: "さ",
                        column: "s",
                        romaji: ["sa"],
                        diacritical: false
                    },
                    {
                        character: "し",
                        column: "s",
                        romaji: ["shi"],
                        diacritical: false
                    },
                    {
                        character: "す",
                        column: "s",
                        romaji: ["su"],
                        diacritical: false
                    },
                    {
                        character: "せ",
                        column: "s",
                        romaji: ["se"],
                        diacritical: false
                    },
                    {
                        character: "そ",
                        column: "s",
                        romaji: ["so"],
                        diacritical: false
                    },
                    {
                        character: "ざ",
                        column: "s",
                        romaji: ["za"],
                        diacritical: true
                    },
                    {
                        character: "じ",
                        column: "s",
                        romaji: ["ji", "zi"],
                        diacritical: true
                    },
                    {
                        character: "ず",
                        column: "s",
                        romaji: ["zu"],
                        diacritical: true
                    },
                    {
                        character: "ぜ",
                        column: "s",
                        romaji: ["ze"],
                        diacritical: true
                    },
                    {
                        character: "ぞ",
                        column: "s",
                        romaji: ["zo"],
                        diacritical: true
                    },
                    {
                        character: "し",
                        column: "s",
                        romaji: ["sha"],
                        diacritical: false
                    },
                    {
                        character: "し",
                        column: "s",
                        romaji: ["shu"],
                        diacritical: false
                    },
                    {
                        character: "し",
                        column: "s",
                        romaji: ["sho"],
                        diacritical: false
                    },
                    {
                        character: "じ",
                        column: "s",
                        romaji: ["zya", "ja"],
                        diacritical: true
                    },
                    {
                        character: "じ",
                        column: "s",
                        romaji: ["ju", "zyu"],
                        diacritical: true
                    },
                    {
                        character: "じ",
                        column: "s",
                        romaji: ["jo", "zyo"],
                        diacritical: true
                    },
                    {
                        character: "た",
                        column: "t",
                        romaji: ["ta"],
                        diacritical: false
                    },
                    {
                        character: "ち",
                        column: "t",
                        romaji: ["chi", "ti"],
                        diacritical: false
                    },
                    {
                        character: "つ",
                        column: "t",
                        romaji: ["tsu"],
                        diacritical: false
                    },
                    {
                        character: "て",
                        column: "t",
                        romaji: ["te"],
                        diacritical: false
                    },
                    {
                        character: "と",
                        column: "t",
                        romaji: ["to"],
                        diacritical: false
                    },
                    {
                        character: "だ",
                        column: "t",
                        romaji: ["da"],
                        diacritical: true
                    },
                    {
                        character: "ぢ",
                        column: "t",
                        romaji: ["di", "ji"],
                        diacritical: true
                    },
                    {
                        character: "づ",
                        column: "t",
                        romaji: ["zu", "du"],
                        diacritical: true
                    },
                    {
                        character: "で",
                        column: "t",
                        romaji: ["de"],
                        diacritical: true
                    },
                    {
                        character: "ど",
                        column: "t",
                        romaji: ["do"],
                        diacritical: true
                    },
                    {
                        character: "ち",
                        column: "t",
                        romaji: ["cha"],
                        diacritical: false
                    },
                    {
                        character: "ち",
                        column: "t",
                        romaji: ["chu"],
                        diacritical: false
                    },
                    {
                        character: "ち",
                        column: "t",
                        romaji: ["cho"],
                        diacritical: false
                    },
                    {
                        character: "ぢ",
                        column: "t",
                        romaji: ["ja", "dya"],
                        diacritical: true
                    },
                    {
                        character: "ぢ",
                        column: "t",
                        romaji: ["dyu", "ju"],
                        diacritical: true
                    },
                    {
                        character: "ぢ",
                        column: "t",
                        romaji: ["dyo", "jo"],
                        diacritical: true
                    },
                    {
                        character: "な",
                        column: "n",
                        romaji: ["na"],
                        diacritical: false
                    },
                    {
                        character: "に",
                        column: "n",
                        romaji: ["ni"],
                        diacritical: false
                    },
                    {
                        character: "ぬ",
                        column: "n",
                        romaji: ["nu"],
                        diacritical: false
                    },
                    {
                        character: "ね",
                        column: "n",
                        romaji: ["ne"],
                        diacritical: false
                    },
                    {
                        character: "の",
                        column: "n",
                        romaji: ["no"],
                        diacritical: false
                    },
                    {
                        character: "に",
                        column: "n",
                        romaji: ["nya"],
                        diacritical: false
                    },
                    {
                        character: "に",
                        column: "n",
                        romaji: ["nyu"],
                        diacritical: false
                    },
                    {
                        character: "に",
                        column: "n",
                        romaji: ["nyo"],
                        diacritical: false
                    },
                    {
                        character: "は",
                        column: "h",
                        romaji: ["ha"],
                        diacritical: false
                    },
                    {
                        character: "ひ",
                        column: "h",
                        romaji: ["hi"],
                        diacritical: false
                    },
                    {
                        character: "ふ",
                        column: "h",
                        romaji: ["hu", "fu"],
                        diacritical: false
                    },
                    {
                        character: "へ",
                        column: "h",
                        romaji: ["he", "e"],
                        diacritical: false
                    },
                    {
                        character: "ほ",
                        column: "h",
                        romaji: ["ho"],
                        diacritical: false
                    },
                    {
                        character: "ば",
                        column: "h",
                        romaji: ["ba"],
                        diacritical: true
                    },
                    {
                        character: "び",
                        column: "h",
                        romaji: ["bi"],
                        diacritical: true
                    },
                    {
                        character: "ぶ",
                        column: "h",
                        romaji: ["bu"],
                        diacritical: true
                    },
                    {
                        character: "べ",
                        column: "h",
                        romaji: ["be"],
                        diacritical: true
                    },
                    {
                        character: "ぼ",
                        column: "h",
                        romaji: ["bo"],
                        diacritical: true
                    },
                    {
                        character: "ぱ",
                        column: "h",
                        romaji: ["pa"],
                        diacritical: true
                    },
                    {
                        character: "ぴ",
                        column: "h",
                        romaji: ["pi"],
                        diacritical: true
                    },
                    {
                        character: "ぷ",
                        column: "h",
                        romaji: ["pu"],
                        diacritical: true
                    },
                    {
                        character: "ぺ",
                        column: "h",
                        romaji: ["pe"],
                        diacritical: true
                    },
                    {
                        character: "ぽ",
                        column: "h",
                        romaji: ["po"],
                        diacritical: true
                    },
                    {
                        character: "ひ",
                        column: "h",
                        romaji: ["hya"],
                        diacritical: false
                    },
                    {
                        character: "ひ",
                        column: "h",
                        romaji: ["hyu"],
                        diacritical: false
                    },
                    {
                        character: "ひ",
                        column: "h",
                        romaji: ["hyo"],
                        diacritical: false
                    },
                    {
                        character: "び",
                        column: "h",
                        romaji: ["bya"],
                        diacritical: true
                    },
                    {
                        character: "び",
                        column: "h",
                        romaji: ["byu"],
                        diacritical: true
                    },
                    {
                        character: "び",
                        column: "h",
                        romaji: ["byo"],
                        diacritical: true
                    },
                    {
                        character: "ぴ",
                        column: "h",
                        romaji: ["pya"],
                        diacritical: true
                    },
                    {
                        character: "ぴ",
                        column: "h",
                        romaji: ["pyu"],
                        diacritical: true
                    },
                    {
                        character: "ぴ",
                        column: "h",
                        romaji: ["pyo"],
                        diacritical: true
                    },
                    {
                        character: "ま",
                        column: "m",
                        romaji: ["ma"],
                        diacritical: false
                    },
                    {
                        character: "み",
                        column: "m",
                        romaji: ["mi"],
                        diacritical: false
                    },
                    {
                        character: "む",
                        column: "m",
                        romaji: ["mu"],
                        diacritical: false
                    },
                    {
                        character: "め",
                        column: "m",
                        romaji: ["me"],
                        diacritical: false
                    },
                    {
                        character: "も",
                        column: "m",
                        romaji: ["mo"],
                        diacritical: false
                    },
                    {
                        character: "み",
                        column: "m",
                        romaji: ["mya"],
                        diacritical: false
                    },
                    {
                        character: "み",
                        column: "m",
                        romaji: ["myu"],
                        diacritical: false
                    },
                    {
                        character: "み",
                        column: "m",
                        romaji: ["myo"],
                        diacritical: false
                    },
                    {
                        character: "や",
                        column: "y",
                        romaji: ["ya"],
                        diacritical: false
                    },
                    {
                        character: "ゆ",
                        column: "y",
                        romaji: ["yu"],
                        diacritical: false
                    },
                    {
                        character: "よ",
                        column: "y",
                        romaji: ["yo"],
                        diacritical: false
                    },
                    {
                        character: "ら",
                        column: "r",
                        romaji: ["ra"],
                        diacritical: false
                    },
                    {
                        character: "り",
                        column: "r",
                        romaji: ["ri"],
                        diacritical: false
                    },
                    {
                        character: "る",
                        column: "r",
                        romaji: ["ru"],
                        diacritical: false
                    },
                    {
                        character: "れ",
                        column: "r",
                        romaji: ["re"],
                        diacritical: false
                    },
                    {
                        character: "ろ",
                        column: "r",
                        romaji: ["ro"],
                        diacritical: false
                    },
                    {
                        character: "り",
                        column: "r",
                        romaji: ["rya"],
                        diacritical: false
                    },
                    {
                        character: "り",
                        column: "r",
                        romaji: ["ryu"],
                        diacritical: false
                    },
                    {
                        character: "り",
                        column: "r",
                        romaji: ["ryo"],
                        diacritical: false
                    },
                    {
                        character: "わ",
                        column: "w",
                        romaji: ["wa"],
                        diacritical: false
                    },
                    {
                        character: "を",
                        column: "w",
                        romaji: ["wo"],
                        diacritical: false
                    },
                    {
                        character: "ん",
                        column: "?",
                        romaji: ["n"],
                        diacritical: false
                    }
                ],
                katakana: [
                    {
                        character: "ア",
                        column: "vowel",
                        romaji: ["a"],
                        diacritical: false
                    },
                    {
                        character: "イ",
                        column: "vowel",
                        romaji: ["i"],
                        diacritical: false
                    },
                    {
                        character: "ウ",
                        column: "vowel",
                        romaji: ["u"],
                        diacritical: false
                    },
                    {
                        character: "エ",
                        column: "vowel",
                        romaji: ["e"],
                        diacritical: false
                    },
                    {
                        character: "オ",
                        column: "vowel",
                        romaji: ["o"],
                        diacritical: false
                    },
                    {
                        character: "カ",
                        column: "k",
                        romaji: ["ka"],
                        diacritical: false
                    },
                    {
                        character: "キ",
                        column: "k",
                        romaji: ["ki"],
                        diacritical: false
                    },
                    {
                        character: "ク",
                        column: "k",
                        romaji: ["ku"],
                        diacritical: false
                    },
                    {
                        character: "ケ",
                        column: "k",
                        romaji: ["ke"],
                        diacritical: false
                    },
                    {
                        character: "コ",
                        column: "k",
                        romaji: ["ko"],
                        diacritical: false
                    },
                    {
                        character: "ガ",
                        column: "k",
                        romaji: ["ga"],
                        diacritical: true
                    },
                    {
                        character: "ギ",
                        column: "k",
                        romaji: ["gi"],
                        diacritical: true
                    },
                    {
                        character: "グ",
                        column: "k",
                        romaji: ["gu"],
                        diacritical: true
                    },
                    {
                        character: "ゲ",
                        column: "k",
                        romaji: ["ge"],
                        diacritical: true
                    },
                    {
                        character: "ゴ",
                        column: "k",
                        romaji: ["go"],
                        diacritical: true
                    },
                    {
                        character: "キ",
                        column: "k",
                        romaji: ["kya"],
                        diacritical: false
                    },
                    {
                        character: "キ",
                        column: "k",
                        romaji: ["kyu"],
                        diacritical: false
                    },
                    {
                        character: "キ",
                        column: "k",
                        romaji: ["kyo"],
                        diacritical: false
                    },
                    {
                        character: "ギ",
                        column: "k",
                        romaji: ["gya"],
                        diacritical: true
                    },
                    {
                        character: "ギ",
                        column: "k",
                        romaji: ["gyu"],
                        diacritical: true
                    },
                    {
                        character: "ギ",
                        column: "k",
                        romaji: ["gyo"],
                        diacritical: true
                    },
                    {
                        character: "サ",
                        column: "s",
                        romaji: ["sa"],
                        diacritical: false
                    },
                    {
                        character: "シ",
                        column: "s",
                        romaji: ["shi"],
                        diacritical: false
                    },
                    {
                        character: "ス",
                        column: "s",
                        romaji: ["su"],
                        diacritical: false
                    },
                    {
                        character: "セ",
                        column: "s",
                        romaji: ["se"],
                        diacritical: false
                    },
                    {
                        character: "ソ",
                        column: "s",
                        romaji: ["so"],
                        diacritical: false
                    },
                    {
                        character: "ザ",
                        column: "s",
                        romaji: ["za"],
                        diacritical: true
                    },
                    {
                        character: "ジ",
                        column: "s",
                        romaji: ["ji", "zi"],
                        diacritical: true
                    },
                    {
                        character: "ズ",
                        column: "s",
                        romaji: ["zu"],
                        diacritical: true
                    },
                    {
                        character: "ゼ",
                        column: "s",
                        romaji: ["ze"],
                        diacritical: true
                    },
                    {
                        character: "ゾ",
                        column: "s",
                        romaji: ["zo"],
                        diacritical: true
                    },
                    {
                        character: "シ",
                        column: "s",
                        romaji: ["sha"],
                        diacritical: false
                    },
                    {
                        character: "シ",
                        column: "s",
                        romaji: ["shu"],
                        diacritical: false
                    },
                    {
                        character: "シ",
                        column: "s",
                        romaji: ["sho"],
                        diacritical: false
                    },
                    {
                        character: "ジ",
                        column: "s",
                        romaji: ["zya", "ja"],
                        diacritical: true
                    },
                    {
                        character: "ジ",
                        column: "s",
                        romaji: ["ju", "zyu"],
                        diacritical: true
                    },
                    {
                        character: "ジ",
                        column: "s",
                        romaji: ["jo", "zyo"],
                        diacritical: true
                    },
                    {
                        character: "タ",
                        column: "t",
                        romaji: ["ta"],
                        diacritical: false
                    },
                    {
                        character: "チ",
                        column: "t",
                        romaji: ["chi", "ti"],
                        diacritical: false
                    },
                    {
                        character: "ツ",
                        column: "t",
                        romaji: ["tsu"],
                        diacritical: false
                    },
                    {
                        character: "テ",
                        column: "t",
                        romaji: ["te"],
                        diacritical: false
                    },
                    {
                        character: "ト",
                        column: "t",
                        romaji: ["to"],
                        diacritical: false
                    },
                    {
                        character: "ダ",
                        column: "t",
                        romaji: ["da"],
                        diacritical: true
                    },
                    {
                        character: "ヂ",
                        column: "t",
                        romaji: ["di", "ji"],
                        diacritical: true
                    },
                    {
                        character: "ヅ",
                        column: "t",
                        romaji: ["zu", "du"],
                        diacritical: true
                    },
                    {
                        character: "デ",
                        column: "t",
                        romaji: ["de"],
                        diacritical: true
                    },
                    {
                        character: "ド",
                        column: "t",
                        romaji: ["do"],
                        diacritical: true
                    },
                    {
                        character: "チ",
                        column: "t",
                        romaji: ["cha"],
                        diacritical: false
                    },
                    {
                        character: "チ",
                        column: "t",
                        romaji: ["chu"],
                        diacritical: false
                    },
                    {
                        character: "チ",
                        column: "t",
                        romaji: ["cho"],
                        diacritical: false
                    },
                    {
                        character: "ヂ",
                        column: "t",
                        romaji: ["ja", "dya"],
                        diacritical: true
                    },
                    {
                        character: "ヂ",
                        column: "t",
                        romaji: ["dyu", "ju"],
                        diacritical: true
                    },
                    {
                        character: "ヂ",
                        column: "t",
                        romaji: ["dyo", "jo"],
                        diacritical: true
                    },
                    {
                        character: "ナ",
                        column: "n",
                        romaji: ["na"],
                        diacritical: false
                    },
                    {
                        character: "ニ",
                        column: "n",
                        romaji: ["ni"],
                        diacritical: false
                    },
                    {
                        character: "ヌ",
                        column: "n",
                        romaji: ["nu"],
                        diacritical: false
                    },
                    {
                        character: "ネ",
                        column: "n",
                        romaji: ["ne"],
                        diacritical: false
                    },
                    {
                        character: "ノ",
                        column: "n",
                        romaji: ["no"],
                        diacritical: false
                    },
                    {
                        character: "ニ",
                        column: "n",
                        romaji: ["nya"],
                        diacritical: false
                    },
                    {
                        character: "ニ",
                        column: "n",
                        romaji: ["nyu"],
                        diacritical: false
                    },
                    {
                        character: "ニ",
                        column: "n",
                        romaji: ["nyo"],
                        diacritical: false
                    },
                    {
                        character: "ハ",
                        column: "h",
                        romaji: ["ha"],
                        diacritical: false
                    },
                    {
                        character: "ヒ",
                        column: "h",
                        romaji: ["hi"],
                        diacritical: false
                    },
                    {
                        character: "フ",
                        column: "h",
                        romaji: ["hu", "fu"],
                        diacritical: false
                    },
                    {
                        character: "ヘ",
                        column: "h",
                        romaji: ["he", "e"],
                        diacritical: false
                    },
                    {
                        character: "ホ",
                        column: "h",
                        romaji: ["ho"],
                        diacritical: false
                    },
                    {
                        character: "バ",
                        column: "h",
                        romaji: ["ba"],
                        diacritical: true
                    },
                    {
                        character: "ビ",
                        column: "h",
                        romaji: ["bi"],
                        diacritical: true
                    },
                    {
                        character: "ブ",
                        column: "h",
                        romaji: ["bu"],
                        diacritical: true
                    },
                    {
                        character: "ベ",
                        column: "h",
                        romaji: ["be"],
                        diacritical: true
                    },
                    {
                        character: "ボ",
                        column: "h",
                        romaji: ["bo"],
                        diacritical: true
                    },
                    {
                        character: "パ",
                        column: "h",
                        romaji: ["pa"],
                        diacritical: true
                    },
                    {
                        character: "ピ",
                        column: "h",
                        romaji: ["pi"],
                        diacritical: true
                    },
                    {
                        character: "プ",
                        column: "h",
                        romaji: ["pu"],
                        diacritical: true
                    },
                    {
                        character: "ペ",
                        column: "h",
                        romaji: ["pe"],
                        diacritical: true
                    },
                    {
                        character: "ポ",
                        column: "h",
                        romaji: ["po"],
                        diacritical: true
                    },
                    {
                        character: "ヒ",
                        column: "h",
                        romaji: ["hya"],
                        diacritical: false
                    },
                    {
                        character: "ヒ",
                        column: "h",
                        romaji: ["hyu"],
                        diacritical: false
                    },
                    {
                        character: "ヒ",
                        column: "h",
                        romaji: ["hyo"],
                        diacritical: false
                    },
                    {
                        character: "ビ",
                        column: "h",
                        romaji: ["bya"],
                        diacritical: true
                    },
                    {
                        character: "ビ",
                        column: "h",
                        romaji: ["byu"],
                        diacritical: true
                    },
                    {
                        character: "ビ",
                        column: "h",
                        romaji: ["byo"],
                        diacritical: true
                    },
                    {
                        character: "ピ",
                        column: "h",
                        romaji: ["pya"],
                        diacritical: true
                    },
                    {
                        character: "ピ",
                        column: "h",
                        romaji: ["pyu"],
                        diacritical: true
                    },
                    {
                        character: "ピ",
                        column: "h",
                        romaji: ["pyo"],
                        diacritical: true
                    },
                    {
                        character: "マ",
                        column: "m",
                        romaji: ["ma"],
                        diacritical: false
                    },
                    {
                        character: "ミ",
                        column: "m",
                        romaji: ["mi"],
                        diacritical: false
                    },
                    {
                        character: "ム",
                        column: "m",
                        romaji: ["mu"],
                        diacritical: false
                    },
                    {
                        character: "メ",
                        column: "m",
                        romaji: ["me"],
                        diacritical: false
                    },
                    {
                        character: "モ",
                        column: "m",
                        romaji: ["mo"],
                        diacritical: false
                    },
                    {
                        character: "ミ",
                        column: "m",
                        romaji: ["mya"],
                        diacritical: false
                    },
                    {
                        character: "ミ",
                        column: "m",
                        romaji: ["myu"],
                        diacritical: false
                    },
                    {
                        character: "ミ",
                        column: "m",
                        romaji: ["myo"],
                        diacritical: false
                    },
                    {
                        character: "ヤ",
                        column: "y",
                        romaji: ["ya"],
                        diacritical: false
                    },
                    {
                        character: "ユ",
                        column: "y",
                        romaji: ["yu"],
                        diacritical: false
                    },
                    {
                        character: "ヨ",
                        column: "y",
                        romaji: ["yo"],
                        diacritical: false
                    },
                    {
                        character: "ラ",
                        column: "r",
                        romaji: ["ra"],
                        diacritical: false
                    },
                    {
                        character: "リ",
                        column: "r",
                        romaji: ["ri"],
                        diacritical: false
                    },
                    {
                        character: "ル",
                        column: "r",
                        romaji: ["ru"],
                        diacritical: false
                    },
                    {
                        character: "レ",
                        column: "r",
                        romaji: ["re"],
                        diacritical: false
                    },
                    {
                        character: "ロ",
                        column: "r",
                        romaji: ["ro"],
                        diacritical: false
                    },
                    {
                        character: "リ",
                        column: "r",
                        romaji: ["rya"],
                        diacritical: false
                    },
                    {
                        character: "リ",
                        column: "r",
                        romaji: ["ryu"],
                        diacritical: false
                    },
                    {
                        character: "リ",
                        column: "r",
                        romaji: ["ryo"],
                        diacritical: false
                    },
                    {
                        character: "ワ",
                        column: "w",
                        romaji: ["wa"],
                        diacritical: false
                    },
                    {
                        character: "ヲ",
                        column: "w",
                        romaji: ["wo"],
                        diacritical: false
                    },
                    {
                        character: "ン",
                        column: "?",
                        romaji: ["n"],
                        diacritical: false
                    }
                ]
            })
        )
    })
]
