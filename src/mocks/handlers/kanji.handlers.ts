import { rest } from "msw"
import { api } from "../util"

// @ts-ignore
const kanji = [
  {
    name: "一",
    on: ["いち", "いつ"],
    kun: ["ひと", "ひとつ"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
    meanings: ["one"],
    grade: 1,
    jlpt: 4,
    strokes: 1,
    examples: [
      {
        value: "一つ",
        kana: ["ひとつ"],
        english: ["one"]
      },
      {
        value: "一月",
        kana: ["いちがつ"],
        english: ["January"]
      },
      {
        value: "一般",
        kana: ["いっぱん"],
        english: ["general", "liberal", "universal", "ordinary"]
      },
      {
        value: "一番",
        kana: ["いちばん"],
        english: ["best", "first", "number one", "game", "round", "bout"]
      },
      {
        value: "一部",
        kana: ["いちぶ"],
        english: ["one part", "one portion", "one section", "some"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "右",
    on: ["う", "ゆう"],
    kun: ["みぎ"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
    meanings: ["right"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "右翼",
        kana: ["うよく"],
        english: ["right wing (political)"]
      },
      {
        value: "左右",
        kana: ["さゆう"],
        english: ["left and right", "influence", "control"]
      },
      {
        value: "右手",
        kana: ["みぎて"],
        english: ["right hand"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "雨",
    on: ["う"],
    kun: ["あめ", "あま"],
    source: "https://en.wiktionary.org/wiki/%E9%9B%A8#Kanji",
    meanings: ["rain"],
    grade: 1,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "雨",
        kana: ["あめ"],
        english: ["rain"]
      },
      {
        value: "大雨",
        kana: ["おおあめ"],
        english: ["heavy rain"]
      },
      {
        value: "梅雨",
        kana: ["ばいう", "つゆ"],
        english: ["rainy season"]
      },
      {
        value: "雨水",
        kana: ["あまみず", "うすい"],
        english: ["rain water"]
      },
      {
        value: "雨量",
        kana: ["うりょう"],
        english: ["rainfall"]
      }
    ],
    tags: ["weather"]
  },
  {
    name: "円",
    on: ["えん"],
    kun: ["まる"],
    source: "https://en.wiktionary.org/wiki/%E5%86%86#Kanji",
    meanings: ["circle", "yen", "round"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "円",
        kana: ["えん", "まる"],
        english: ["Yen", "money", "circle"]
      },
      {
        value: "円高",
        kana: ["えんだか"],
        english: ["valued yen"]
      },
      {
        value: "円安",
        kana: ["えんやす"],
        english: ["cheap yen"]
      },
      {
        value: "円相場",
        kana: ["えんそうば"],
        english: ["yen exchange rate"]
      },
      {
        value: "一円",
        kana: ["いちえん"],
        english: ["whole district", "one yen", "throughout"]
      }
    ],
    tags: []
  },
  {
    name: "王",
    on: ["おう"],
    kun: ["おおきみ", "きみ"],
    source: "https://en.wiktionary.org/wiki/%E7%8E%8B#Kanji",
    meanings: ["king", "rule", "magnate"],
    grade: 1,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "王",
        kana: ["おう"],
        english: ["king", "ruler", "sovereign", "monarch"]
      },
      {
        value: "国王",
        kana: ["こくおう"],
        english: ["king"]
      },
      {
        value: "女王",
        kana: ["じょおう"],
        english: ["queen"]
      },
      {
        value: "王国",
        kana: ["おうこく"],
        english: ["kingdom", "monarchy"]
      },
      {
        value: "王座",
        kana: ["おうざ"],
        english: ["throne"]
      }
    ],
    tags: []
  },
  {
    name: "音",
    on: ["おん", "いん"],
    kun: ["おと", "ね"],
    source: "https://en.wiktionary.org/wiki/%E9%9F%B3#Kanji",
    meanings: ["sound", "noise"],
    grade: 1,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "音",
        kana: ["おと", "ね", "おん"],
        english: ["sound", "noise"]
      },
      {
        value: "音楽",
        kana: ["おんがく"],
        english: ["music", "musical movement"]
      },
      {
        value: "本音",
        kana: ["ほんね"],
        english: ["real intention", "motive"]
      },
      {
        value: "騒音",
        kana: ["そうおん"],
        english: ["noise"]
      },
      {
        value: "音声",
        kana: ["おんせい, おんじょう"],
        english: ["voice"]
      }
    ],
    tags: []
  },
  {
    name: "下",
    on: ["げ", "か"],
    kun: ["した", "しも", "もと"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%8B#Kanji",
    meanings: ["below", "down", "descend", "give", "low", "inferior"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "下",
        kana: ["もと"],
        english: ["under"]
      },
      {
        value: "下げる",
        kana: ["さげる"],
        english: ["to hang", "to lower", "to move back", "to wear"]
      },
      {
        value: "引き下げ",
        kana: ["ひきさげ"],
        english: ["reduction", "cut"]
      },
      {
        value: "下り",
        kana: ["くだり"],
        english: ["train"]
      },
      {
        value: "下院",
        kana: ["かいん"],
        english: ["lower", "house", "lower"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "火",
    on: ["か"],
    kun: ["ひ"],
    source: "https://en.wiktionary.org/wiki/%E7%81%AB#Kanji",
    meanings: ["fire"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "火山",
        kana: ["かざん"],
        english: ["volcano"]
      },
      {
        value: "火災",
        kana: ["かさい"],
        english: ["conflagration", "fire"]
      },
      {
        value: "噴火",
        kana: ["ふんか"],
        english: ["eruption"]
      },
      {
        value: "火砕流",
        kana: ["かさいりゅう"],
        english: ["pyroclastic flow"]
      }
    ],
    tags: []
  },
  {
    name: "花",
    on: ["か"],
    kun: ["はな"],
    source: "https://en.wiktionary.org/wiki/%E8%8A%B1#Kanji",
    meanings: ["flower"],
    grade: 1,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "花",
        kana: ["はな"],
        english: ["flower", "blossom", "bloom", "petal"]
      },
      {
        value: "花火",
        kana: ["はなび"],
        english: ["fireworks"]
      },
      {
        value: "花びら",
        kana: ["はなびら", "かべん"],
        english: ["flower petal"]
      },
      {
        value: "花見",
        kana: ["はなみ"],
        english: ["cherry blossom viewing", "flowing viewing"]
      },
      {
        value: "花園",
        kana: ["はなぞの", "かえん"],
        english: ["flower garden"]
      }
    ],
    tags: []
  },
  {
    name: "貝",
    on: ["ばい"],
    kun: ["かい"],
    source: "https://en.wiktionary.org/wiki/%E8%B2%9D#Kanji",
    meanings: ["shellfish"],
    grade: 1,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "貝",
        kana: ["かい"],
        english: ["shell", "shellfish"]
      },
      {
        value: "貝殻",
        kana: ["かいがら"],
        english: ["shell"]
      },
      {
        value: "貝塚",
        kana: ["かいずか", "かいづか"],
        english: ["shell heap", "shell mound", "kitchen midden"]
      },
      {
        value: "貝",
        kana: ["ばい", "バイ"],
        english: ["Japanese babylon (species of shelled mollusk)"]
      },
      {
        value: "巻き貝",
        kana: ["まきがい"],
        english: ["snail", "spiral shell"]
      }
    ],
    tags: []
  },
  {
    name: "学",
    on: ["がく"],
    kun: ["まなぶ"],
    source: "https://en.wiktionary.org/wiki/%E5%AD%A6#Kanji",
    meanings: ["study", "learning", "science"],
    grade: 1,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "学校",
        kana: ["がっこう"],
        english: ["school"]
      },
      {
        value: "学生",
        kana: ["がくせい"],
        english: ["student"]
      },
      {
        value: "大学",
        kana: ["だいがく"],
        english: ["secondary school"]
      },
      {
        value: "医学",
        kana: ["いがく"],
        english: ["medical science", "medicine"]
      },
      {
        value: "科学",
        kana: ["かがく"],
        english: ["science"]
      }
    ],
    tags: []
  },
  {
    name: "気",
    on: ["け", "き"],
    kun: ["いき"],
    source: "https://en.wiktionary.org/wiki/%E6%B0%97#Kanji",
    meanings: ["spirit", "mind", "air", "atmosphere", "mood"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "気",
        kana: ["き"],
        english: ["spirit", "mind", "heart", "nature", "disposition"]
      },
      {
        value: "景気",
        kana: ["けいき"],
        english: ["condition", "state", "business"]
      },
      {
        value: "人気",
        kana: ["にんき"],
        english: ["popular", "popular feeling", "business conditions"]
      },
      {
        value: "気持ち",
        kana: ["きもち"],
        english: ["feeling", "sensation", "mood"]
      },
      {
        value: "電気",
        kana: ["でんき"],
        english: ["electricity", "light"]
      }
    ],
    tags: []
  },
  {
    name: "休",
    on: ["きゅう"],
    kun: ["やすむ"],
    source: "https://en.wiktionary.org/wiki/%E4%BC%91#Kanji",
    meanings: ["rest"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "休み",
        kana: ["やすみ"],
        english: ["rest", "recess", "respite", "vacation", "holiday"]
      },
      {
        value: "夏休み",
        kana: ["なつやすみ"],
        english: ["summer holiday"]
      },
      {
        value: "休暇",
        kana: ["きゅうか"],
        english: ["holiday", "day off", "furlough"]
      },
      {
        value: "休日",
        kana: ["きゅうかきゅうか"],
        english: ["holiday", "day off"]
      },
      {
        value: "休業",
        kana: ["きゅうぎょう"],
        english: ["closed (e.g. store)", "business suspended"]
      }
    ],
    tags: []
  },
  {
    name: "玉",
    on: ["ぎょく"],
    kun: ["たま"],
    source: "https://en.wiktionary.org/wiki/%E7%8E%89#Kanji",
    meanings: ["jewel", "ball"],
    grade: 1,
    jlpt: 2,
    strokes: 5,
    examples: [
      {
        value: "玉",
        kana: ["たま"],
        english: ["ball", "sphere", "coin", "jewel", "pearl", "testicles"]
      },
      {
        value: "目玉",
        kana: ["めだま"],
        english: ["eyeball", "special feature", "centerpiece"]
      },
      {
        value: "替え玉",
        kana: ["かえだま"],
        english: ["substitute", "double"]
      },
      {
        value: "玉虫色",
        kana: ["たまむしいろ"],
        english: ["iridescent", "equivocal", "ambivalent"]
      },
      {
        value: "お年玉",
        kana: ["おとしだま"],
        english: ["New Year’s gift"]
      }
    ],
    tags: []
  },
  {
    name: "金",
    on: ["こん", "きん"],
    kun: ["かね", "かな"],
    source: "https://en.wiktionary.org/wiki/%E9%87%91#Kanji",
    meanings: ["gold", "money"],
    grade: 1,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "お金",
        kana: ["おかね"],
        english: ["money"]
      },
      {
        value: "金融",
        kana: ["きんゆう"],
        english: ["financing", "credit transacting"]
      },
      {
        value: "金利",
        kana: ["きんり"],
        english: ["interest rates"]
      },
      {
        value: "献金",
        kana: ["けんきん"],
        english: ["donation", "contribution", "offering"]
      },
      {
        value: "資金",
        kana: ["しきん"],
        english: ["funds", "capital"]
      }
    ],
    tags: []
  },
  {
    name: "九",
    on: ["きゅう", "く"],
    kun: ["ここの"],
    source: "https://en.wiktionary.org/wiki/%E4%B9%9D#Kanji",
    meanings: ["nine"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "九",
        kana: ["きゅう", "く", "ここの", "この", "ここ"],
        english: ["nine"]
      },
      {
        value: "九月",
        kana: ["くがつ"],
        english: ["September"]
      },
      {
        value: "十九",
        kana: ["じゅうきゅう"],
        english: ["nineteen"]
      },
      {
        value: "九州",
        kana: ["きゅうしゅう"],
        english: ["Kyushu"]
      },
      {
        value: "九十",
        kana: ["きゅうじゅう", "くじゅう"],
        english: ["ninety"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "空",
    on: ["く", "くう"],
    kun: ["あく", "から", "そら"],
    source: "https://en.wiktionary.org/wiki/%E7%A9%BA#Kanji",
    meanings: ["empty", "sky", "void"],
    grade: 1,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "空",
        kana: ["から"],
        english: ["emptiness", "vacuum", "blank"]
      },
      {
        value: "空港",
        kana: ["くうこう"],
        english: ["airport"]
      },
      {
        value: "航空",
        kana: ["こうくう"],
        english: ["aviation"]
      },
      {
        value: "空気",
        kana: ["くうき"],
        english: ["air", "atmosphere"]
      },
      {
        value: "航空機",
        kana: ["こうくうき"],
        english: ["aircraft", "aeroplane", "airplane"]
      }
    ],
    tags: []
  },
  {
    name: "月",
    on: ["がつ", "げつ"],
    kun: ["つき"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%88#Kanji",
    meanings: ["month", "moon"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "一月",
        kana: ["いちがつ"],
        english: ["January"]
      },
      {
        value: "九月",
        kana: ["くがつ"],
        english: ["September"]
      },
      {
        value: "五月",
        kana: ["ごがつ"],
        english: ["May"]
      },
      {
        value: "今月",
        kana: ["こんげつ"],
        english: ["this month"]
      },
      {
        value: "三月",
        kana: ["さんがつ"],
        english: ["March"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "犬",
    on: ["けん"],
    kun: ["いぬ"],
    source: "https://en.wiktionary.org/wiki/%E7%8A%AC#Kanji",
    meanings: ["dog"],
    grade: 1,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "犬",
        kana: ["いぬ"],
        english: ["dog"]
      },
      {
        value: "盲導犬",
        kana: ["もうどうけん"],
        english: ["guide dog for the blind"]
      },
      {
        value: "愛犬",
        kana: ["あいけん"],
        english: ["pet dog"]
      },
      {
        value: "飼い犬",
        kana: ["かいいぬ"],
        english: ["pet dog"]
      },
      {
        value: "野犬",
        kana: ["やけん"],
        english: ["stray dog"]
      }
    ],
    tags: ["animal"]
  },
  {
    name: "見",
    on: ["けん", "げん"],
    kun: ["みる"],
    source: "https://en.wiktionary.org/wiki/%E8%A6%8B#Kanji",
    meanings: ["see", "opinion"],
    grade: 1,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "意見",
        kana: ["いけん"],
        english: ["opinion", "view"]
      },
      {
        value: "会見",
        kana: ["かいけん"],
        english: ["interview", "audience"]
      },
      {
        value: "見直し",
        kana: ["みなおし"],
        english: ["review", "reconsideration", "revision"]
      },
      {
        value: "見方",
        kana: ["みかた"],
        english: ["viewpoint"]
      },
      {
        value: "見通し",
        kana: ["みとおし"],
        english: ["perspective", "unobstructed view", "outlook"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "五",
    on: ["ご"],
    kun: ["いつ"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%94#Kanji",
    meanings: ["five"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "五",
        kana: ["ご", "いつ", "い"],
        english: ["five"]
      },
      {
        value: "五月",
        kana: ["ごがつ"],
        english: ["May"]
      },
      {
        value: "十五",
        kana: ["じゅうご"],
        english: ["fifteen"]
      },
      {
        value: "五輪",
        kana: ["ごりん"],
        english: ["the Olympics"]
      },
      {
        value: "五十",
        kana: ["ごじゅう", "いそ", "い"],
        english: ["fifty"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "口",
    on: ["く", "こう"],
    kun: ["くち"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%A3#Kanji",
    meanings: ["mouth"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "口",
        kana: ["くち"],
        english: ["mouth", "opening", "hole", "gap", "orifice"]
      },
      {
        value: "人口",
        kana: ["じんこう"],
        english: ["population", "common talk"]
      },
      {
        value: "窓口",
        kana: ["まどぐち"],
        english: ["ticket window", "teller window", "counter"]
      },
      {
        value: "口座",
        kana: ["こうざ"],
        english: ["account"]
      },
      {
        value: "入り口",
        kana: ["いりぐち", "いりくち", "はいりぐち", "は", "いりくち"],
        english: ["entrance", "entry", "gate", "approach", "mouth"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "校",
    on: ["きょう", "こう"],
    kun: ["かせ"],
    source: "https://en.wiktionary.org/wiki/%E6%A0%A1#Kanji",
    meanings: ["school", "exam", "printing"],
    grade: 1,
    jlpt: 4,
    strokes: 10,
    examples: [
      {
        value: "学校",
        kana: ["がっこう"],
        english: ["school"]
      },
      {
        value: "高校",
        kana: ["こうこう"],
        english: ["senior high school"]
      },
      {
        value: "校長",
        kana: ["こうちょう"],
        english: ["principal", "headmaster"]
      },
      {
        value: "高校生",
        kana: ["こうこうせい"],
        english: ["senior high school student"]
      },
      {
        value: "小学校",
        kana: ["しょうがっこう"],
        english: ["primary school", "elementary school"]
      }
    ],
    tags: []
  },
  {
    name: "左",
    on: ["さ"],
    kun: ["ひだり"],
    source: "https://en.wiktionary.org/wiki/%E5%B7%A6#Kanji",
    meanings: ["left"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "向かって左",
        kana: ["むかってひだり"],
        english: ["on the left as one faces it"]
      },
      {
        value: "左翼",
        kana: ["さよく"],
        english: ["left wing (political)"]
      },
      {
        value: "左右",
        kana: ["さゆう"],
        english: ["left and right", "influence", "control"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "三",
    on: ["さん"],
    kun: ["み"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%89#Kanji",
    meanings: ["three"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "三",
        kana: ["さん", "み"],
        english: ["three"]
      },
      {
        value: "三つ",
        kana: ["みっつ"],
        english: ["three things"]
      },
      {
        value: "三月",
        kana: ["さんがつ"],
        english: ["March"]
      },
      {
        value: "三人",
        kana: ["さんにん", "みたり"],
        english: ["three people"]
      },
      {
        value: "十三",
        kana: ["じゅうさん"],
        english: ["thirteen"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "山",
    on: ["せん", "さん"],
    kun: ["やま"],
    source: "https://en.wiktionary.org/wiki/%E5%B1%B1#Kanji",
    meanings: ["mountain"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "山",
        kana: ["やま"],
        english: ["mountain", "pile", "heap", "climax", "critical point"]
      },
      {
        value: "火山",
        kana: ["かざん"],
        english: ["volcano"]
      },
      {
        value: "青山",
        kana: ["せいざん"],
        english: ["blue or green mountain", "grave", "burial place"]
      },
      {
        value: "山形",
        kana: ["やまがた"],
        english: ["mountain shaped"]
      },
      {
        value: "登山",
        kana: ["とざん"],
        english: ["mountain climbing"]
      }
    ],
    tags: []
  },
  {
    name: "四",
    on: ["し"],
    kun: ["よん", "よつ"],
    source: "https://en.wiktionary.org/wiki/%E5%9B%9B#Kanji",
    meanings: ["four"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "四",
        kana: ["よん", "し", "よ"],
        english: ["four"]
      },
      {
        value: "四つ",
        kana: ["よっつ"],
        english: ["four things"]
      },
      {
        value: "四月",
        kana: ["しがつ"],
        english: ["April"]
      },
      {
        value: "十四",
        kana: ["じゅうし", "じゅうよん"],
        english: ["fourteen"]
      },
      {
        value: "四十",
        kana: ["よんじゅう", "しじゅう", "よそ"],
        english: ["forty"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "子",
    on: ["し", "す"],
    kun: ["こ"],
    source: "https://en.wiktionary.org/wiki/%E5%AD%90#Kanji",
    meanings: ["child", "sign of the rat"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "子",
        kana: ["こ"],
        english: ["child"]
      },
      {
        value: "子供",
        kana: ["こども"],
        english: ["children"]
      },
      {
        value: "女子",
        kana: ["じょし", "おなご"],
        english: ["women", "girl"]
      },
      {
        value: "男子",
        kana: ["だんし"],
        english: ["youth", "young man"]
      },
      {
        value: "原子力",
        kana: ["げんしりょく"],
        english: ["atomic", "energy"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "糸",
    on: ["し"],
    kun: ["いと"],
    source: "https://en.wiktionary.org/wiki/%E7%B3%B8#Kanji",
    meanings: ["thread"],
    grade: 1,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "糸",
        kana: ["いと"],
        english: ["thread", "yarn", "string"]
      },
      {
        value: "糸口",
        kana: ["いとぐち"],
        english: ["thread end", "beginning", "clue"]
      },
      {
        value: "毛糸",
        kana: ["けいと"],
        english: ["knitting wool"]
      },
      {
        value: "撚糸",
        kana: ["ねんし"],
        english: ["twisted thread or yarn"]
      },
      {
        value: "生糸",
        kana: ["きいと"],
        english: ["raw silk thread"]
      }
    ],
    tags: []
  },
  {
    name: "字",
    on: ["じ"],
    kun: ["あざ"],
    source: "https://en.wiktionary.org/wiki/%E5%AD%97#Kanji",
    meanings: ["character", "letter", "word", "section of village"],
    grade: 1,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "字",
        kana: ["あざ"],
        english: ["section of village"]
      },
      {
        value: "黒字",
        kana: ["くろじ"],
        english: ["balance", "figure in black"]
      },
      {
        value: "数字",
        kana: ["すうじ"],
        english: ["numeral", "figure", "digit", "numeric character"]
      },
      {
        value: "赤字",
        kana: ["あかじ"],
        english: ["deficit"]
      },
      {
        value: "文字",
        kana: ["もじ", "もんじ"],
        english: ["letter (of alphabet", "character"]
      }
    ],
    tags: []
  },
  {
    name: "耳",
    on: ["じ", "に"],
    kun: ["みみ"],
    source: "https://en.wiktionary.org/wiki/%E8%80%B3#Kanji",
    meanings: ["ear"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "耳",
        kana: ["みみ"],
        english: ["ear", "hearing", "edge", "crust"]
      },
      {
        value: "耳目",
        kana: ["じもく"],
        english: ["eye and ear", "one’s attention", "one’s interest"]
      },
      {
        value: "中耳炎",
        kana: ["ちゅうじえん"],
        english: ["tympanitis (inflammation of middle ear)"]
      },
      {
        value: "耳打ち",
        kana: ["みみうち"],
        english: ["whisper into a person’s ear"]
      },
      {
        value: "耳鼻咽喉科",
        kana: ["じびいんこうか"],
        english: ["otorhinolaryngology", "ear", "nose and throat"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "七",
    on: ["しち"],
    kun: ["なな"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%83#Kanji",
    meanings: ["seven"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "七",
        kana: ["しち", "なな", "な"],
        english: ["seven"]
      },
      {
        value: "七月",
        kana: ["しちがつ"],
        english: ["July"]
      },
      {
        value: "十七",
        kana: ["じゅうしち", "じゅうなな"],
        english: ["seventeen"]
      },
      {
        value: "七十",
        kana: ["しちじゅう", "ななじゅう", "ななそ"],
        english: ["seventy"]
      },
      {
        value: "四十七士",
        kana: ["しじゅうしちし"],
        english: ["The 47 Ronin"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "車",
    on: ["しゃ"],
    kun: ["くるま"],
    source: "https://en.wiktionary.org/wiki/%E8%BB%8A#Kanji",
    meanings: ["vehicle", "car"],
    grade: 1,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "自動車",
        kana: ["じどうしゃ"],
        english: ["automobile"]
      },
      {
        value: "下車",
        kana: ["げしゃ"],
        english: ["alighting (from train, bus, etc.)"]
      },
      {
        value: "乗用車",
        kana: ["じょうようしゃ"],
        english: ["passenger vehicle", "automobile"]
      },
      {
        value: "自転車",
        kana: ["じてんしゃ"],
        english: ["bicycle"]
      }
    ],
    tags: []
  },
  {
    name: "手",
    on: ["しゅ"],
    kun: ["て"],
    source: "https://en.wiktionary.org/wiki/%E6%89%8B#Kanji",
    meanings: ["hand"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "選手",
        kana: ["せんしゅ"],
        english: ["player (in game)", "team member"]
      },
      {
        value: "選手権",
        kana: ["せんしゅけん"],
        english: ["championship", "title (of champion)"]
      },
      {
        value: "相手",
        kana: ["あいて"],
        english: ["companion", "partner", "company", "other party"]
      },
      {
        value: "大手",
        kana: ["おおて"],
        english: ["front castle gate", "both arms open"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "十",
    on: ["じゅう"],
    kun: ["と"],
    source: "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
    meanings: ["ten"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "十",
        kana: ["じゅう", "と", "とお"],
        english: ["ten"]
      },
      {
        value: "十一",
        kana: ["じゅういち", "ジュウイチ"],
        english: ["eleven"]
      },
      {
        value: "十一月",
        kana: ["じゅういちがつ"],
        english: ["November"]
      },
      {
        value: "十九",
        kana: ["じゅうきゅう"],
        english: ["nineteen"]
      },
      {
        value: "十月",
        kana: ["じゅうがつ"],
        english: ["October"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "出",
    on: ["しゅち", "しゅつ"],
    kun: ["で", "でる", "だす"],
    source: "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
    meanings: ["exit", "leave"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "出す",
        kana: ["だす"],
        english: ["to take out", "to get out", "to put out"]
      },
      {
        value: "出身",
        kana: ["しゅっしん"],
        english: ["person’s origin (town, city, country, etc.)"]
      },
      {
        value: "輸出",
        kana: ["ゆしゅつ", "しゅしゅつ"],
        english: ["export"]
      },
      {
        value: "出場",
        kana: ["しゅつじょう"],
        english: ["(stage) appearance", "participation"]
      },
      {
        value: "進出",
        kana: ["しんしゅつ"],
        english: ["advance", "step forward"]
      }
    ],
    tags: []
  },
  {
    name: "女",
    on: ["にょ", "じょ"],
    kun: ["おんな"],
    source: "https://en.wiktionary.org/wiki/%E5%A5%B3#Kanji",
    meanings: ["women", "female"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "女",
        kana: ["おんな"],
        english: ["women"]
      },
      {
        value: "女子",
        kana: ["じょし", "おなご"],
        english: ["girl"]
      },
      {
        value: "女性",
        kana: ["じょせい"],
        english: ["women", "female", "feminine gender"]
      },
      {
        value: "男女",
        kana: ["だんじょ"],
        english: ["man and women"]
      },
      {
        value: "彼女",
        kana: ["かのじょ"],
        english: ["she", "girlfriend", "sweetheart"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "小",
    on: ["しょう"],
    kun: ["ちいさい", "こ", "お"],
    source: "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
    meanings: ["small", "little"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "小選挙区",
        kana: ["しょうせんきょく"],
        english: ["small electoral district"]
      },
      {
        value: "小学校",
        kana: ["しょうがっこう"],
        english: ["primary school", "elementary school"]
      },
      {
        value: "小説",
        kana: ["しょうせつ"],
        english: ["novel", "short story"]
      },
      {
        value: "小学生",
        kana: ["しょうがくせい"],
        english: ["elementary school student"]
      },
      {
        value: "中小企業",
        kana: ["ちゅうしょうきぎょう"],
        english: ["small to medium enterprises"]
      }
    ],
    tags: ["size"]
  },
  {
    name: "上",
    on: ["じょう"],
    kun: ["うえ"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%8A#Kanji",
    meanings: ["above", "up"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "上がったり",
        kana: ["あがったり"],
        english: ["doomed", "in a bad state", "poor"]
      },
      {
        value: "史上",
        kana: ["しじょう"],
        english: ["historical"]
      },
      {
        value: "事実上",
        kana: ["じじつじょう"],
        english: ["(as a) matter of fact", "actually", "in reality"]
      },
      {
        value: "上げ",
        kana: ["あげ"],
        english: ["rise in price", "making a tuck"]
      },
      {
        value: "上昇",
        kana: ["じょうしょう"],
        english: ["rising", "ascending", "climbing"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "森",
    on: ["しん"],
    kun: ["もり"],
    source: "https://en.wiktionary.org/wiki/%E6%A3%AE#Kanji",
    meanings: ["forest", "woods"],
    grade: 1,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "森",
        kana: ["もり"],
        english: ["forest", "grove"]
      },
      {
        value: "森林",
        kana: ["しんりん"],
        english: ["forest", "woods"]
      },
      {
        value: "森閑",
        kana: ["しんかん"],
        english: ["silence"]
      },
      {
        value: "森厳",
        kana: ["しんげん"],
        english: ["solemn"]
      },
      {
        value: "森羅万象",
        kana: ["しんらばんしょう"],
        english: ["all things in nature", "the whole creation"]
      }
    ],
    tags: []
  },
  {
    name: "人",
    on: ["じん", "にん"],
    kun: ["ひと"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
    meanings: ["person"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "外国人",
        kana: ["がいこくじん"],
        english: ["foreigner"]
      },
      {
        value: "個人",
        kana: ["こじん"],
        english: ["individual", "private person", "personal", "private"]
      },
      {
        value: "三人",
        kana: ["さんにん", "みたり"],
        english: ["three people"]
      },
      {
        value: "人間",
        kana: ["にんげん"],
        english: ["human being", "man", "person"]
      },
      {
        value: "人気",
        kana: ["にんき"],
        english: ["popular", "popular feeling", "business conditions"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "水",
    on: ["すい"],
    kun: ["みず"],
    source: "https://en.wiktionary.org/wiki/%E6%B0%B4#Kanji",
    meanings: ["water"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "水",
        kana: ["みず"],
        english: ["water (cold, fresh)"]
      },
      {
        value: "水準",
        kana: ["すいじゅん"],
        english: ["water level"]
      },
      {
        value: "水道",
        kana: ["すいどう"],
        english: ["water service", "water supply"]
      },
      {
        value: "水面",
        kana: ["すいめん", "みなも", "みのも"],
        english: ["water's surface"]
      },
      {
        value: "水泳",
        kana: ["すいえい"],
        english: ["swimming"]
      }
    ],
    tags: ["food"]
  },
  {
    name: "正",
    on: ["しょう", "せい"],
    kun: ["ただしい", "まさ"],
    source: "https://en.wiktionary.org/wiki/%E6%AD%A3#Kanji",
    meanings: ["correct", "justice", "righteous"],
    grade: 1,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "正",
        kana: ["せい"],
        english: ["true", "regular", "original"]
      },
      {
        value: "改正",
        kana: ["かいせい"],
        english: ["revision", "amendment", "alteration"]
      },
      {
        value: "修正",
        kana: ["しゅうせい"],
        english: ["amendment", "correction", "revision", "modification"]
      },
      {
        value: "正式",
        kana: ["せいしき"],
        english: ["due form", "official", "formality"]
      },
      {
        value: "正常",
        kana: ["せいじょう"],
        english: ["normalcy", "normality", "normal"]
      }
    ],
    tags: []
  },
  {
    name: "生",
    on: ["しょう", "せい"],
    kun: ["いきる", "うむ", "なま"],
    source: "https://en.wiktionary.org/wiki/%E7%94%9F#Kanji",
    meanings: ["life", "genuine", "birth"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "生きる",
        kana: ["いきる"],
        english: ["to live", "to exist"]
      },
      {
        value: "学生",
        kana: ["がくせい"],
        english: ["student"]
      },
      {
        value: "生活",
        kana: ["せいかつ"],
        english: ["living", "life"]
      },
      {
        value: "生産",
        kana: ["せいさん"],
        english: ["production", "manufacture"]
      },
      {
        value: "厚生省",
        kana: ["こうせいしょう"],
        english: ["Ministry of Health, Labour and Welfare"]
      }
    ],
    tags: []
  },
  {
    name: "青",
    on: ["しょう"],
    kun: ["あお"],
    source: "https://en.wiktionary.org/wiki/%E9%9D%92#Kanji",
    meanings: ["blue"],
    grade: 1,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "青",
        kana: ["あお"],
        english: ["blue", "green", "green light"]
      },
      {
        value: "青年",
        kana: ["せいねん"],
        english: ["youth", "young man"]
      },
      {
        value: "青山",
        kana: ["せいざん"],
        english: ["blue or green mountain", "grave", "burial place"]
      },
      {
        value: "青木",
        kana: ["あおき", "アオキ"],
        english: ["Japanese laurel", "spotted laurel"]
      },
      {
        value: "青春",
        kana: ["せいしゅん"],
        english: ["youth", "springtime of life", "adolescent"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "石",
    on: ["じゃく", "せき"],
    kun: ["いし"],
    source: "https://en.wiktionary.org/wiki/%E7%9F%B3#Kanji",
    meanings: ["stone"],
    grade: 1,
    jlpt: 2,
    strokes: 5,
    examples: [
      {
        value: "石",
        kana: ["こく"],
        english: ["measure of volume"]
      },
      {
        value: "石油",
        kana: ["せきゆ"],
        english: ["oil", "petroleum", "kerosene"]
      },
      {
        value: "化石",
        kana: ["かせき"],
        english: ["fossil", "petrification", "fossilization"]
      },
      {
        value: "石炭",
        kana: ["せきたん"],
        english: ["coal"]
      },
      {
        value: "石橋",
        kana: ["いしばし", "せっきょう"],
        english: ["stone bridge"]
      }
    ],
    tags: []
  },
  {
    name: "赤",
    on: ["しゃく"],
    kun: ["あか"],
    source: "https://en.wiktionary.org/wiki/%E8%B5%A4#Kanji",
    meanings: ["red"],
    grade: 1,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "赤ちゃん",
        kana: ["あかちゃん"],
        english: ["baby", "infant"]
      },
      {
        value: "赤字",
        kana: ["あかじ"],
        english: ["deficit"]
      },
      {
        value: "赤松",
        kana: ["あかまつ"],
        english: ["Japanese red pine"]
      },
      {
        value: "赤い",
        kana: ["あかい"],
        english: ["Red (i.e. communist)"]
      },
      {
        value: "真っ赤",
        kana: ["まっか"],
        english: ["bright red", "deep red", "flushed"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "先",
    on: ["せん"],
    kun: ["さき"],
    source: "https://en.wiktionary.org/wiki/%E5%85%88#Kanji",
    meanings: ["before", "ahead", "previous", "future"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "先に",
        kana: ["さきに"],
        english: ["before", "earlier than", "ahead", "beyond"]
      },
      {
        value: "先月",
        kana: ["せんげつ"],
        english: ["last month"]
      },
      {
        value: "先進国",
        kana: ["せんしんこく"],
        english: ["advance"]
      },
      {
        value: "先生",
        kana: ["せんせい"],
        english: ["teacher", "master", "doctor"]
      },
      {
        value: "先発",
        kana: ["せんぱつ"],
        english: ["forerunner", "advance party", "going on ahead"]
      }
    ],
    tags: []
  },
  {
    name: "千",
    on: ["せん"],
    kun: ["ち"],
    source: "https://en.wiktionary.org/wiki/%E5%8D%83#Kanji",
    meanings: ["thousand"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "三千",
        kana: ["さんぜん"],
        english: ["three thousand"]
      },
      {
        value: "四千",
        kana: ["よんせん"],
        english: ["four thousand"]
      },
      {
        value: "千代",
        kana: ["せんだい"],
        english: ["thousand years", "very long", "forever"]
      },
      {
        value: "千里",
        kana: ["せんり"],
        english: ["1000 ri", "a very long distance"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "川",
    on: ["せん"],
    kun: ["かわ"],
    source: "https://en.wiktionary.org/wiki/%E5%B7%9D#Kanji",
    meanings: ["stream", "river"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "川",
        kana: ["かわ", "がわ"],
        english: ["river", "stream"]
      },
      {
        value: "小川",
        kana: ["おがわ"],
        english: ["streamlet", "brook"]
      },
      {
        value: "河川",
        kana: ["かせん"],
        english: ["rivers"]
      },
      {
        value: "谷川",
        kana: ["たにがわ"],
        english: ["mountain stream"]
      },
      {
        value: "江戸川",
        kana: ["えどがわ"],
        english: ["Edo River"]
      }
    ],
    tags: []
  },
  {
    name: "早",
    on: ["そう", "せい"],
    kun: ["はやい"],
    source: "https://en.wiktionary.org/wiki/%E6%97%A9#Kanji",
    meanings: ["early", "fast"],
    grade: 1,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "早期",
        kana: ["そうき"],
        english: ["early stage"]
      },
      {
        value: "早",
        kana: ["はや"],
        english: ["already", "now", "by this time"]
      },
      {
        value: "早急",
        kana: ["さっきゅう", "そうきゅう"],
        english: ["urgent"]
      },
      {
        value: "早朝",
        kana: ["そうちょう"],
        english: ["early morning"]
      },
      {
        value: "早める",
        kana: ["はやめる"],
        english: ["to hasten", "to quicken", "to expedite"]
      }
    ],
    tags: ["adjective"]
  },
  {
    name: "草",
    on: ["そう"],
    kun: ["くさ"],
    source: "https://en.wiktionary.org/wiki/%E8%8D%89#Kanji",
    meanings: ["grass", "weeds", "herbs", "pasture", "write", "draft"],
    grade: 1,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "草",
        kana: ["くさ"],
        english: ["grass"]
      },
      {
        value: "草案",
        kana: ["そうあん"],
        english: ["draft", "draught"]
      },
      {
        value: "草の根",
        kana: ["くさのね"],
        english: ["grassroots", "rank and file", "the roots of grass"]
      },
      {
        value: "草原",
        kana: ["そうげん", "くさはら"],
        english: ["plain", "grasslands", "meadows"]
      },
      {
        value: "起草",
        kana: ["きそう"],
        english: ["drafting", "draughting", "drawing up a bill"]
      }
    ],
    tags: []
  },
  {
    name: "足",
    on: ["す", "そく"],
    kun: ["あし", "たる", "たす"],
    source: "https://en.wiktionary.org/wiki/%E8%B6%B3#Kanji",
    meanings: ["leg", "foot"],
    grade: 1,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "足",
        kana: ["あし"],
        english: ["foot", "leg", "pace"]
      },
      {
        value: "不足",
        kana: ["ふそく"],
        english: ["insufficiency", "shortage", "deficiency", "lack"]
      },
      {
        value: "発足",
        kana: ["ほっそく", "はっそく"],
        english: ["starting", "inauguration", "launch", "founding"]
      },
      {
        value: "満足",
        kana: ["まんぞく"],
        english: ["satisfaction", "sufficiency"]
      },
      {
        value: "足並み",
        kana: ["あしなみ"],
        english: ["pace", "step"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "村",
    on: ["そん"],
    kun: ["むら"],
    source: "https://en.wiktionary.org/wiki/%E6%9D%91#Kanji",
    meanings: ["village"],
    grade: 1,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "村",
        kana: ["むら"],
        english: ["village"]
      },
      {
        value: "市町村",
        kana: ["しちょうそん"],
        english: ["cities", "towns and villages", "municipalities"]
      },
      {
        value: "農村",
        kana: ["のうそん"],
        english: ["agricultural community", "farm village", "rural"]
      },
      {
        value: "山村",
        kana: ["さんそん"],
        english: ["mountain village"]
      },
      {
        value: "村長",
        kana: ["そんちょう"],
        english: ["village headman"]
      }
    ],
    tags: []
  },
  {
    name: "大",
    on: ["だ", "だい", "たい"],
    kun: ["おお", "おおきい"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%A7#Kanji",
    meanings: ["large"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "大きな",
        kana: ["おおきな"],
        english: ["big", "large", "great"]
      },
      {
        value: "拡大",
        kana: ["かくだい"],
        english: ["magnification", "enlargement", "expansion"]
      },
      {
        value: "最大",
        kana: ["さいだい"],
        english: ["greatest", "largest", "maximum"]
      },
      {
        value: "大いに",
        kana: ["おおいに", "にっぽんじん"],
        english: ["very", "much", "greatly", "a lot of"]
      },
      {
        value: "大会",
        kana: ["たいかい"],
        english: ["convention", "mass meeting", "rally"]
      }
    ],
    tags: []
  },
  {
    name: "男",
    on: ["なん", "だん"],
    kun: ["おとこ"],
    source: "https://en.wiktionary.org/wiki/%E7%94%B7#Kanji",
    meanings: ["male"],
    grade: 1,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "男子",
        kana: ["だんし"],
        english: ["youth", "young man"]
      },
      {
        value: "男性",
        kana: ["だんせい"],
        english: ["male", "masculine gender"]
      },
      {
        value: "長男",
        kana: ["ちょうなん"],
        english: ["eldest son"]
      },
      {
        value: "男女",
        kana: ["だんじょ"],
        english: ["man and woman", "men and women"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "竹",
    on: ["ちく"],
    kun: ["たけ"],
    source: "https://en.wiktionary.org/wiki/%E7%AB%B9#Kanji",
    meanings: ["bamboo"],
    grade: 1,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "竹",
        kana: ["たけ"],
        english: ["bamboo"]
      },
      {
        value: "爆竹",
        kana: ["ばくちく"],
        english: ["firecracker"]
      },
      {
        value: "竹林",
        kana: ["ちくりん", "たけばやし"],
        english: ["bamboo thicket"]
      },
      {
        value: "竹刀",
        kana: ["しない"],
        english: ["fencing stick"]
      },
      {
        value: "青竹",
        kana: ["あおだけ"],
        english: ["green bamboo"]
      }
    ],
    tags: []
  },
  {
    name: "中",
    on: ["ちゅう", "じゅう"],
    kun: ["なか"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%AD#Kanji",
    meanings: ["inside", "middle"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "中央",
        kana: ["ちゅうおう"],
        english: ["centre", "central"]
      },
      {
        value: "中国",
        kana: ["ちゅうごく"],
        english: ["China"]
      },
      {
        value: "中心",
        kana: ["ちゅうしん"],
        english: ["center", "centre", "middle", "heart", "core", "focus"]
      },
      {
        value: "中でも",
        kana: ["なかでも", "にっぽんじん"],
        english: ["among (other things)", "inter alia"]
      },
      {
        value: "中間",
        kana: ["ちゅうかん"],
        english: ["middle", "midway", "interim"]
      }
    ],
    tags: ["position"]
  },
  {
    name: "虫",
    on: ["ちゅう"],
    kun: ["むし"],
    source: "https://en.wiktionary.org/wiki/%E8%99%AB#Kanji",
    meanings: ["insect", "bug", "temper"],
    grade: 1,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "虫",
        kana: ["むし"],
        english: ["insect"]
      },
      {
        value: "昆虫",
        kana: ["こんちゅう"],
        english: ["insect", "bug"]
      },
      {
        value: "殺虫剤",
        kana: ["さっちゅうざい"],
        english: ["insecticide", "pesticide"]
      },
      {
        value: "虫歯",
        kana: ["むしば", "うし"],
        english: ["cavity", "tooth decay", "decayed tooth", "caries"]
      },
      {
        value: "玉虫色",
        kana: ["たまむしいろ"],
        english: ["iridescent", "equivocal", "ambivalent"]
      }
    ],
    tags: []
  },
  {
    name: "町",
    on: ["ちょう"],
    kun: ["まち"],
    source: "https://en.wiktionary.org/wiki/%E7%94%BA#Kanji",
    meanings: ["town", "block", "street"],
    grade: 1,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "町",
        kana: ["まち, ちょう"],
        english: ["town", "block", "neighbourhood"]
      },
      {
        value: "市町村",
        kana: ["しちょうそん"],
        english: ["cities", "municipalities"]
      },
      {
        value: "同町",
        kana: ["どうちょう"],
        english: ["the same town", "that town"]
      },
      {
        value: "町長",
        kana: ["ちょうちょう"],
        english: ["town headman", "town mayor"]
      },
      {
        value: "町内",
        kana: ["ちょうない"],
        english: ["neighbourhood", "street", "block"]
      }
    ],
    tags: []
  },
  {
    name: "天",
    on: ["てん"],
    kun: ["あま"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%A9#Kanji",
    meanings: ["heaven", "sky"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "天皇",
        kana: ["てんのう", "すめらぎ"],
        english: ["Emperor of Japan"]
      },
      {
        value: "天気",
        kana: ["てんき"],
        english: ["weather", "the elements", "fair weather"]
      },
      {
        value: "天皇陛下",
        kana: ["てんのうへいか"],
        english: ["His Majesty the Emperor"]
      },
      {
        value: "天井",
        kana: ["てんじょう"],
        english: ["ceiling", "ceiling price"]
      }
    ],
    tags: []
  },
  {
    name: "田",
    on: ["でん"],
    kun: ["た", "だ"],
    source: "https://en.wiktionary.org/wiki/%E7%94%B0#Kanji",
    meanings: ["rice field", "rice paddy"],
    grade: 1,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "上田",
        kana: ["じょうでん"],
        english: ["high rice field", "very fertile rice field"]
      },
      {
        value: "水田",
        kana: ["すいでん"],
        english: ["water filled paddy field"]
      },
      {
        value: "油田",
        kana: ["ゆでん"],
        english: ["oil field"]
      },
      {
        value: "田舎",
        kana: ["いなか"],
        english: ["rural area", "countryside", "the sticks", "hometown"]
      },
      {
        value: "桑田",
        kana: ["そうでん"],
        english: ["mulberry plantation"]
      }
    ],
    tags: []
  },
  {
    name: "土",
    on: ["と", "ど"],
    kun: ["つち"],
    source: "https://en.wiktionary.org/wiki/%E5%9C%9F#Kanji",
    meanings: ["soil", "earth"],
    grade: 1,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "土地",
        kana: ["とち"],
        english: ["plot of land"]
      },
      {
        value: "領土",
        kana: ["りょうど"],
        english: ["dominion", "territory", "position"]
      },
      {
        value: "土曜",
        kana: ["どよう"],
        english: ["Saturday"]
      },
      {
        value: "国土",
        kana: ["こくど"],
        english: ["country", "territory", "domain", "realm"]
      }
    ],
    tags: []
  },
  {
    name: "二",
    on: ["に"],
    kun: ["ふた", "ふたつ"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%8C#Kanji",
    meanings: ["two"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "二",
        kana: ["に", "ふた", "ふ", "ふう"],
        english: ["two"]
      },
      {
        value: "二つ",
        kana: ["ふたつ"],
        english: ["two things"]
      },
      {
        value: "十二",
        kana: ["じゅうに"],
        english: ["twelve"]
      },
      {
        value: "十二月",
        kana: ["じゅうにがつ"],
        english: ["December"]
      },
      {
        value: "二月",
        kana: ["にがつ"],
        english: ["February"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "日",
    on: ["にち", "じつ"],
    kun: ["ひ", "か"],
    source: "https://en.wiktionary.org/wiki/%E6%97%A5#Kanji",
    meanings: ["day", "sun"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "日",
        kana: ["ひ"],
        english: ["day", "days", "sun", "sunshine", "sunlight"]
      },
      {
        value: "同日",
        kana: ["どうじつ"],
        english: ["the same day"]
      },
      {
        value: "日米",
        kana: ["にちべい"],
        english: ["Japan"]
      },
      {
        value: "日本人",
        kana: ["にほんじん", "にっぽんじん"],
        english: ["Japanese person (people)"]
      },
      {
        value: "毎日",
        kana: ["まいにち"],
        english: ["every day"]
      }
    ],
    tags: ["calendar"]
  },
  {
    name: "入",
    on: ["にゅう"],
    kun: ["いる", "はいる"],
    source: "https://en.wiktionary.org/wiki/%E5%85%A5#Kanji",
    meanings: ["enter", "insert"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "入り",
        kana: ["いり"],
        english: ["entering", "containing"]
      },
      {
        value: "輸入",
        kana: ["ゆにゅう", "しゅにゅう"],
        english: ["important", "import", "introduction"]
      },
      {
        value: "購入",
        kana: ["こうにゅう"],
        english: ["purchase", "busy"]
      },
      {
        value: "収入",
        kana: ["しゅうにゅう"],
        english: ["income", "receipts", "revenue"]
      },
      {
        value: "導入",
        kana: ["どうにゅう"],
        english: ["introduction", "bringing in", "leading in"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "年",
    on: ["ねん"],
    kun: ["とし"],
    source: "https://en.wiktionary.org/wiki/%E5%B9%B4#Kanji",
    meanings: ["year"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "年",
        kana: ["とし"],
        english: ["year", "age"]
      },
      {
        value: "昨年",
        kana: ["さくねん"],
        english: ["last year"]
      },
      {
        value: "前年",
        kana: ["ぜんねん"],
        english: ["the preceding year", "the previous year"]
      },
      {
        value: "年間",
        kana: ["ねんかん"],
        english: ["year (period of)"]
      },
      {
        value: "来年",
        kana: ["らいねん"],
        english: ["next year"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "白",
    on: ["びゃく", "はく"],
    kun: ["しろ"],
    source: "https://en.wiktionary.org/wiki/%E7%99%BD#Kanji",
    meanings: ["white"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "白書",
        kana: ["はくしょ"],
        english: ["white paper"]
      },
      {
        value: "白人",
        kana: ["はくじん"],
        english: ["white person", "Caucasian"]
      },
      {
        value: "空白",
        kana: ["くうはく"],
        english: ["blank space", "vacuum", "space", "null"]
      },
      {
        value: "白紙",
        kana: ["はくし"],
        english: ["blank paper", "white paper"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "八",
    on: ["はち"],
    kun: ["や"],
    source: "https://en.wiktionary.org/wiki/%E5%85%AB#Kanji",
    meanings: ["eight"],
    grade: 1,
    jlpt: 4,
    strokes: 2,
    examples: [
      {
        value: "八",
        kana: ["はち", "や"],
        english: ["eight"]
      },
      {
        value: "十八",
        kana: ["じゅうはち"],
        english: ["eighteen"]
      },
      {
        value: "八月",
        kana: ["はちがつ"],
        english: ["August"]
      },
      {
        value: "八十",
        kana: ["はちじゅう", "やそ"],
        english: ["eighty"]
      },
      {
        value: "三十八度線",
        kana: ["さんじゅうはちどせん"],
        english: ["eighth parallel"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "百",
    on: ["ひゃく"],
    kun: ["もも"],
    source: "https://en.wiktionary.org/wiki/%E7%99%BE#Kanji",
    meanings: ["hundred"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "百",
        kana: ["ひゃく", "もも"],
        english: ["hundred"]
      },
      {
        value: "二百",
        kana: ["にひゃく"],
        english: ["two hundred"]
      },
      {
        value: "三百",
        kana: ["さんびゃく"],
        english: ["three hundred"]
      },
      {
        value: "百貨店",
        kana: ["ひゃっかてん"],
        english: ["cleric desk"]
      },
      {
        value: "百万",
        kana: ["ひゃくまん"],
        english: ["one million"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "文",
    on: ["もん", "ぶん"],
    kun: ["ふみ"],
    source: "https://en.wiktionary.org/wiki/%E6%96%87#Kanji",
    meanings: ["text", "sentence", "literature", "style", "art"],
    grade: 1,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "文",
        kana: ["ふみ"],
        english: ["letter", "writings"]
      },
      {
        value: "文化",
        kana: ["ぶんか"],
        english: ["culture", "civilization", "civilisation"]
      },
      {
        value: "文学",
        kana: ["ぶんがく"],
        english: ["literature"]
      },
      {
        value: "文書",
        kana: ["ぶんしょ", "もんじょ"],
        english: ["document", "writing", "letter", "paperwork", "note"]
      },
      {
        value: "文字",
        kana: ["もじ", "もんじ"],
        english: ["letter (of alphabet)", "character (literal)"]
      }
    ],
    tags: []
  },
  {
    name: "本",
    on: ["ほん"],
    kun: ["もと"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%AC#Kanji",
    meanings: ["book"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "基本",
        kana: ["きほん"],
        english: ["foundation", "basis", "standard"]
      },
      {
        value: "日本人",
        kana: ["にほんじん", "にっぽんじん"],
        english: ["Japanese person", "Japanese people"]
      },
      {
        value: "本社",
        kana: ["ほんしゃ", "ほんじゃ"],
        english: ["head office", "main office", "headquarters"]
      },
      {
        value: "本部",
        kana: ["ほんぶ"],
        english: ["headquarters"]
      },
      {
        value: "本の",
        kana: ["ほんの"],
        english: ["mere", "only, just"]
      }
    ],
    tags: []
  },
  {
    name: "名",
    on: ["みょう", "めい"],
    kun: ["な"],
    source: "https://en.wiktionary.org/wiki/%E5%90%8D#Kanji",
    meanings: ["name"],
    grade: 1,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "名前",
        kana: ["なまえ"],
        english: ["name", "full name"]
      },
      {
        value: "名誉",
        kana: ["めいよ"],
        english: ["honour", "prestige"]
      },
      {
        value: "指名",
        kana: ["しめい"],
        english: ["nominate", "designate"]
      },
      {
        value: "氏名",
        kana: ["しめい"],
        english: ["full name", "identity"]
      }
    ],
    tags: []
  },
  {
    name: "木",
    on: ["もく", "ぼく"],
    kun: ["き"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%A8#Kanji",
    meanings: ["tree", "wood"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "青木",
        kana: ["あおき"],
        english: ["Japanese laurel", "spotted laurel"]
      },
      {
        value: "木造",
        kana: ["もくぞう"],
        english: ["wooden", "made of wood"]
      },
      {
        value: "土木",
        kana: ["どぼく"],
        english: ["public works"]
      },
      {
        value: "木材",
        kana: ["もくざい"],
        english: ["lumber", "timber", "wood"]
      }
    ],
    tags: []
  },
  {
    name: "目",
    on: ["もく"],
    kun: ["め"],
    source: "https://en.wiktionary.org/wiki/%E7%9B%AE#Kanji",
    meanings: ["eye", "look"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "目的",
        kana: ["もくてき"],
        english: ["purpose", "goal", "aim", "objective", "intention"]
      },
      {
        value: "目標",
        kana: ["もくひょう"],
        english: ["mark", "objective", "target"]
      },
      {
        value: "注目",
        kana: ["ちゅうもく"],
        english: ["notice", "attention", "observation"]
      },
      {
        value: "項目",
        kana: ["こうもく"],
        english: ["item, entry"]
      },
      {
        value: "名目",
        kana: ["めいもく", "みょうもく"],
        english: ["name", "title", "appellation"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "夕",
    on: ["せき"],
    kun: ["ゆう"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%95#Kanji",
    meanings: ["evening"],
    grade: 1,
    jlpt: 3,
    strokes: 3,
    examples: [
      {
        value: "夕",
        kana: ["ゆう", "ゆうべ", "さくや"],
        english: ["evening", "last night"]
      },
      {
        value: "夕食",
        kana: ["ゆうしょく"],
        english: ["evening meal", "dinner"]
      },
      {
        value: "夕方",
        kana: ["ゆうがた"],
        english: ["evening"]
      },
      {
        value: "夕刊",
        kana: ["ゆうかん"],
        english: ["evening paper"]
      },
      {
        value: "夕べ",
        kana: ["ゆう", "ゆうべ", "さくや"],
        english: ["evening", "last night"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "立",
    on: ["りつ"],
    kun: ["たつ"],
    source: "https://en.wiktionary.org/wiki/%E7%AB%8B#Kanji",
    meanings: ["stand up"],
    grade: 1,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "立場",
        kana: ["たちば"],
        english: ["standpoint", "position", "situation"]
      },
      {
        value: "連立",
        kana: ["れんりつ"],
        english: ["alliance", "coalition"]
      },
      {
        value: "国立",
        kana: ["こくりつ"],
        english: ["national"]
      },
      {
        value: "成立",
        kana: ["せいりつ"],
        english: ["coming into existence", "arrangements"]
      },
      {
        value: "対立",
        kana: ["たいりつ"],
        english: ["confrontation", "opposition", "antagonism"]
      }
    ],
    tags: []
  },
  {
    name: "力",
    on: ["りき", "りょく"],
    kun: ["ちから"],
    source: "https://en.wiktionary.org/wiki/%E5%8A%9B#Kanji",
    meanings: ["power", "strong"],
    grade: 1,
    jlpt: 3,
    strokes: 2,
    examples: [
      {
        value: "勢力",
        kana: ["せいりょく"],
        english: ["influence", "power", "might", "strength", "potency"]
      },
      {
        value: "努力",
        kana: ["どりょく"],
        english: ["great effort", "exertion", "endeavour", "endeavor"]
      },
      {
        value: "協力",
        kana: ["きょうりょく"],
        english: ["cooperation", "collaboration"]
      },
      {
        value: "権力",
        kana: ["けんりょく"],
        english: ["(political) power", "authority", "influence"]
      },
      {
        value: "原子力",
        kana: ["げんしりょく"],
        english: ["atomic energy"]
      }
    ],
    tags: []
  },
  {
    name: "林",
    on: ["りん"],
    kun: ["はやし"],
    source: "https://en.wiktionary.org/wiki/%E6%9E%97#Kanji",
    meanings: ["woods", "grove"],
    grade: 1,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "林",
        kana: ["はやし"],
        english: ["woods", "forest", "copse", "thicket"]
      },
      {
        value: "森林",
        kana: ["しんりん"],
        english: ["forest", "woods"]
      },
      {
        value: "農林",
        kana: ["のうりん"],
        english: ["agriculture and forestry"]
      },
      {
        value: "山林",
        kana: ["さんりん"],
        english: ["mountain forest", "mountains and forest"]
      },
      {
        value: "林業",
        kana: ["りんぎょう"],
        english: ["forestry"]
      }
    ],
    tags: []
  },
  {
    name: "六",
    on: ["ろく"],
    kun: ["む"],
    source: "https://en.wiktionary.org/wiki/%E5%85%AD#Kanji",
    meanings: ["six"],
    grade: 1,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "六",
        kana: ["ろく", "む", "むう"],
        english: ["six"]
      },
      {
        value: "六月",
        kana: ["ろくがつ"],
        english: ["June"]
      },
      {
        value: "六十",
        kana: ["ろくじゅう", "むそ"],
        english: ["sixty"]
      },
      {
        value: "六十四分音符",
        kana: ["ろくじゅうしぶおんぷ"],
        english: ["64th note"]
      },
      {
        value: "十六",
        kana: ["じゅうろく"],
        english: ["sixteen"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "引",
    on: ["いん"],
    kun: ["ひく", "ひける"],
    source: "https://en.wiktionary.org/wiki/%E5%BC%95#Kanji",
    meanings: ["pull", "tug", "jerk", "admit", "install", "quote", "refer to"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "取引",
        kana: ["とりひき"],
        english: ["transactions", "dealings", "business"]
      },
      {
        value: "引き下げ",
        kana: ["ひきさげ"],
        english: ["reduction", "cut"]
      },
      {
        value: "引き上げ",
        kana: ["ひきあげ"],
        english: ["pulling up", "drawing up", "salvage"]
      },
      {
        value: "引退",
        kana: ["いんたい"],
        english: ["retire"]
      },
      {
        value: "隠し引き出し",
        kana: ["かくしひきだし"],
        english: ["secret withdrawal"]
      }
    ],
    tags: []
  },
  {
    name: "羽",
    on: ["う"],
    kun: ["は", "はね"],
    source: "https://en.wiktionary.org/wiki/%E7%BE%BD#Kanji",
    meanings: ["feathers", "counter for birds", "rabbits"],
    grade: 2,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "羽",
        kana: ["わ", "ば", "ぱ"],
        english: ["counter for birds and rabbits"]
      },
      {
        value: "羽根",
        kana: ["はね"],
        english: ["feather", "plume", "wing", "blade", "fan", "propeller"]
      },
      {
        value: "羽毛",
        kana: ["うもう"],
        english: ["feathers", "plumage", "down"]
      },
      {
        value: "羽目",
        kana: ["はめ"],
        english: ["panel", "wainscoting", "wainscotting", "plight", "fix"]
      },
      {
        value: "白羽",
        kana: ["しらは"],
        english: ["white feather"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "雲",
    on: ["うん"],
    kun: ["くも"],
    source: "https://en.wiktionary.org/wiki/%E9%9B%B2#Kanji",
    meanings: ["cloud"],
    grade: 2,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "雲",
        kana: ["くも"],
        english: ["cloud"]
      },
      {
        value: "暗雲",
        kana: ["あんうん"],
        english: ["dark clouds"]
      },
      {
        value: "雲行き",
        kana: ["くもゆき"],
        english: ["weather", "look of the sky", "situation"]
      },
      {
        value: "青雲",
        kana: ["せいうん"],
        english: ["blue sky", "high rank"]
      },
      {
        value: "星雲",
        kana: ["せいうん"],
        english: ["nebula", "galaxy"]
      }
    ],
    tags: ["weather"]
  },
  {
    name: "園",
    on: ["えん"],
    kun: ["その"],
    source: "https://en.wiktionary.org/wiki/%E5%9C%92#Kanji",
    meanings: ["park", "garden", "yard", "farm"],
    grade: 2,
    jlpt: 2,
    strokes: 13,
    examples: [
      {
        value: "園",
        kana: ["その", "えん"],
        english: ["garden", "orchard", "park"]
      },
      {
        value: "公園",
        kana: ["こうえん"],
        english: ["(public) park"]
      },
      {
        value: "学園",
        kana: ["がくえん"],
        english: ["academy", "campus"]
      },
      {
        value: "動物園",
        kana: ["どうぶつえん"],
        english: ["zoo", "zoological gardens"]
      },
      {
        value: "幼稚園",
        kana: ["ようちえん"],
        english: ["kindergarten"]
      }
    ],
    tags: []
  },
  {
    name: "遠",
    on: ["えん", "おん"],
    kun: ["とおい"],
    source: "https://en.wiktionary.org/wiki/%E9%81%A0#Kanji",
    meanings: ["distant", "far"],
    grade: 2,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "遠",
        kana: ["とお"],
        english: ["distant"]
      },
      {
        value: "永遠",
        kana: ["えいえん"],
        english: ["eternity", "perpetuity", "immortality", "permanence"]
      },
      {
        value: "遠征",
        kana: ["えんせい"],
        english: ["expedition", "campaign", "(performer’s) tour"]
      },
      {
        value: "望遠鏡",
        kana: ["ぼうえんきょう"],
        english: ["telescope"]
      },
      {
        value: "遠隔",
        kana: ["えんかく"],
        english: ["distant", "remote", "isolated"]
      }
    ],
    tags: []
  },
  {
    name: "黄",
    on: ["おう", "こう"],
    kun: ["き", "こ"],
    source: "https://en.wiktionary.org/wiki/%E9%BB%84#Kanji",
    meanings: ["yellow"],
    grade: 2,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "黄",
        kana: ["き"],
        english: ["yellow"]
      },
      {
        value: "黄金",
        kana: ["おうごん", "こがね", "きがね", "くがね"],
        english: ["gold"]
      },
      {
        value: "硫黄",
        kana: ["いおう"],
        english: ["sulfur (S), sulphur"]
      },
      {
        value: "黄色",
        kana: ["きいろ", "こうしょく", "おうしょく"],
        english: ["yellow, amber"]
      },
      {
        value: "黄金時代",
        kana: ["おうごんじだい"],
        english: ["Golden Age"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "何",
    on: ["か"],
    kun: ["なに"],
    source: "https://en.wiktionary.org/wiki/%E4%BD%95#Kanji",
    meanings: ["what"],
    grade: 2,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "何",
        kana: ["なに", "なん"],
        english: ["what how many (some counter)"]
      },
      {
        value: "何か",
        kana: ["なにか", "なんか"],
        english: ["something"]
      },
      {
        value: "何も",
        kana: ["なにも"],
        english: ["nothing", "not any"]
      },
      {
        value: "何とか",
        kana: ["なんとか"],
        english: ["something", "something or other"]
      },
      {
        value: "何の",
        kana: ["どの"],
        english: ["which", "what (way)"]
      }
    ],
    tags: []
  },
  {
    name: "夏",
    on: ["げ", "か"],
    kun: ["なつ"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%8F#Kanji",
    meanings: ["summer"],
    grade: 2,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "夏",
        kana: ["なつ"],
        english: ["summer"]
      },
      {
        value: "夏休み",
        kana: ["なつやすみ"],
        english: ["summer vacation", "summer holiday"]
      },
      {
        value: "今夏",
        kana: ["こんか"],
        english: ["this summer", "next summer", "last summer"]
      },
      {
        value: "冷夏",
        kana: ["れいか"],
        english: ["a cool summer"]
      },
      {
        value: "夏場",
        kana: ["なつば"],
        english: ["summertime"]
      }
    ],
    tags: ["season"]
  },
  {
    name: "家",
    on: ["け", "か"],
    kun: ["いえ"],
    source: "https://en.wiktionary.org/wiki/%E5%AE%B6#Kanji",
    meanings: ["house", "home"],
    grade: 2,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "家族",
        kana: ["かぞく"],
        english: ["family", "members of a family"]
      },
      {
        value: "家庭",
        kana: ["かてい"],
        english: ["home", "family", "household"]
      },
      {
        value: "国家",
        kana: ["こっか"],
        english: ["state", "country", "nation"]
      },
      {
        value: "政治家",
        kana: ["せいじか"],
        english: ["politician", "statesman"]
      },
      {
        value: "作家",
        kana: ["さっか"],
        english: ["author", "writer", "novelist", "artist"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "科",
    on: ["か"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E7%A7%91#Kanji",
    meanings: ["section", "department", "course"],
    grade: 2,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "科",
        kana: ["か"],
        english: ["department", "section"]
      },
      {
        value: "科学",
        kana: ["かがく"],
        english: ["science"]
      },
      {
        value: "教科書",
        kana: ["きょうかしょ"],
        english: ["textbook", "text book"]
      },
      {
        value: "学科",
        kana: ["がっか"],
        english: ["study subject", "course of study"]
      },
      {
        value: "外科",
        kana: ["げか"],
        english: ["surgical department"]
      }
    ],
    tags: []
  },
  {
    name: "歌",
    on: ["か"],
    kun: ["うた", "うたう"],
    source: "https://en.wiktionary.org/wiki/%E6%AD%8C#Kanji",
    meanings: ["song", "sing"],
    grade: 2,
    jlpt: 3,
    strokes: 14,
    examples: [
      {
        value: "歌",
        kana: ["うた"],
        english: ["song", "classical Japanese poetry (esp. tanka)"]
      },
      {
        value: "歌手",
        kana: ["かしゅ"],
        english: ["singer"]
      },
      {
        value: "歌舞伎",
        kana: ["かぶき"],
        english: ["kabuki", "Japanese classical drama"]
      },
      {
        value: "短歌",
        kana: ["たんか"],
        english: ["tanka", "syllable Japanese poem"]
      },
      {
        value: "歌劇",
        kana: ["かげき"],
        english: ["opera"]
      }
    ],
    tags: []
  },
  {
    name: "画",
    on: ["が", "かく"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E7%94%BB#Kanji",
    meanings: ["brush", "stroke"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "画",
        kana: ["かく"],
        english: ["stroke (of a kanji)"]
      },
      {
        value: "映画",
        kana: ["えいが"],
        english: ["movie", "film"]
      },
      {
        value: "計画",
        kana: ["けいかく"],
        english: ["plan", "project", "schedule", "scheme", "program"]
      },
      {
        value: "企画",
        kana: ["きかく"],
        english: ["planning", "project", "plan", "design"]
      },
      {
        value: "絵画",
        kana: ["かいが"],
        english: ["picture", "painting"]
      }
    ],
    tags: []
  },
  {
    name: "会",
    on: ["え", "かい"],
    kun: ["あう"],
    source: "https://en.wiktionary.org/wiki/%E4%BC%9A#Kanji",
    meanings: ["meet", "party", "association"],
    grade: 2,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "委員会",
        kana: ["いいんかい"],
        english: ["committee", "commission", "board", "panel"]
      },
      {
        value: "会員",
        kana: ["かいいん"],
        english: ["member", "the membership"]
      },
      {
        value: "会議",
        kana: ["かいぎ"],
        english: ["meeting", "conference", "session", "assembly"]
      },
      {
        value: "会見",
        kana: ["かいけん"],
        english: ["interview", "audience"]
      },
      {
        value: "会社",
        kana: ["かいしゃ"],
        english: ["company", "corporation", "workplace"]
      }
    ],
    tags: []
  },
  {
    name: "回",
    on: ["え", "かい"],
    kun: ["まわす", "まわる"],
    source: "https://en.wiktionary.org/wiki/%E5%9B%9E#Kanji",
    meanings: ["times", "round", "game", "revolve", "counter for occurrences"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "回",
        kana: ["かい"],
        english: ["counter for occurrences"]
      },
      {
        value: "回復",
        kana: ["かいふく"],
        english: ["recovery (from illness)", "improvement"]
      },
      {
        value: "今回",
        kana: ["こんかい"],
        english: ["now", "this time", "lately"]
      },
      {
        value: "回答",
        kana: ["かいとう"],
        english: ["reply", "answer"]
      },
      {
        value: "前回",
        kana: ["ぜんかい"],
        english: ["last time", "last installment"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "海",
    on: ["かい"],
    kun: ["うみ"],
    source: "https://en.wiktionary.org/wiki/%E6%B5%B7#Kanji",
    meanings: ["sea", "ocean"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "海",
        kana: ["うみ", "み", "わた", "わだ"],
        english: ["sea", "beach"]
      },
      {
        value: "海外",
        kana: ["かいがい"],
        english: ["foreign", "abroad", "overseas"]
      },
      {
        value: "北海道",
        kana: ["ほっかいどう"],
        english: ["Hokkaido"]
      },
      {
        value: "東海",
        kana: ["とうかい"],
        english: ["region south of Tokyo on Pacific Ocean side of Japan, eastern sea"]
      },
      {
        value: "海軍",
        kana: ["かいぐん"],
        english: ["navy"]
      }
    ],
    tags: []
  },
  {
    name: "絵",
    on: ["え", "かい"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E7%B5%B5#Kanji",
    meanings: ["picture", "drawing", "painting", "sketch"],
    grade: 2,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "絵",
        kana: ["え"],
        english: ["picture", "drawing", "painting", "sketch"]
      },
      {
        value: "絵画",
        kana: ["かいが"],
        english: ["picture", "painting"]
      },
      {
        value: "絵本",
        kana: ["えほん"],
        english: ["picture book"]
      },
      {
        value: "絵の具",
        kana: ["えのぐ"],
        english: ["colours, paints"]
      },
      {
        value: "浮世絵",
        kana: ["うきよえ"],
        english: ["ukiyoe (colour print of everyday life in the Edoperiod)"]
      }
    ],
    tags: []
  },
  {
    name: "外",
    on: ["がい"],
    kun: ["そと"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%96#Kanji",
    meanings: ["outside"],
    grade: 2,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "外",
        kana: ["ほか"],
        english: ["other places and things", "the rest"]
      },
      {
        value: "海外",
        kana: ["かいがい"],
        english: ["foreign", "abroad", "overseas"]
      },
      {
        value: "外交",
        kana: ["がいこう"],
        english: ["diplomacy"]
      },
      {
        value: "外国",
        kana: ["がいこく"],
        english: ["foreign country"]
      },
      {
        value: "外国人",
        kana: ["がいこくじん"],
        english: ["foreigner"]
      }
    ],
    tags: []
  },
  {
    name: "角",
    on: ["かく"],
    kun: ["かど", "つの"],
    source: "https://en.wiktionary.org/wiki/%E8%A7%92#Kanji",
    meanings: ["angle", "corner", "square", "horn", "antlers"],
    grade: 2,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "角",
        kana: ["かど"],
        english: ["corner", "edge"]
      },
      {
        value: "多角",
        kana: ["たかく"],
        english: ["many sided", "versatile", "polygonal", "diversified"]
      },
      {
        value: "一角",
        kana: ["いっかく", "イッカク"],
        english: ["corner", "section", "point", "one horn"]
      },
      {
        value: "角度",
        kana: ["かくど"],
        english: ["angle"]
      },
      {
        value: "内角",
        kana: ["ないかく"],
        english: ["interior angle", "inside corner"]
      }
    ],
    tags: []
  },
  {
    name: "楽",
    on: ["がく", "らく"],
    kun: ["たのしい"],
    source: "https://en.wiktionary.org/wiki/%E6%A5%BD#Kanji",
    meanings: ["music", "pleasure", "comfort"],
    grade: 2,
    jlpt: 3,
    strokes: 13,
    examples: [
      {
        value: "楽しみ",
        kana: ["たのしみ"],
        english: ["enjoyment", "pleasure", "diversion", "amusement"]
      },
      {
        value: "音楽",
        kana: ["おんがく"],
        english: ["music", "musical movement"]
      },
      {
        value: "楽",
        kana: ["らく"],
        english: ["comfort", "ease"]
      },
      {
        value: "楽器",
        kana: ["がっき"],
        english: ["musical instrument"]
      },
      {
        value: "倶楽部",
        kana: ["くらぶ", "クラブ"],
        english: ["club", "fraternity", "sorority", "clubhouse"]
      }
    ],
    tags: []
  },
  {
    name: "活",
    on: ["かつ"],
    kun: ["いきる"],
    source: "https://en.wiktionary.org/wiki/%E6%B4%BB#Kanji",
    meanings: ["active", "lively", "living", "being helped"],
    grade: 2,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "活動",
        kana: ["かつどう"],
        english: ["action", "activity"]
      },
      {
        value: "生活",
        kana: ["せいかつ"],
        english: ["living", "life (one’s daily existence)"]
      },
      {
        value: "活発",
        kana: ["かっぱつ"],
        english: ["vigour", "active", "lively"]
      },
      {
        value: "活性",
        kana: ["かっせい"],
        english: ["activity"]
      },
      {
        value: "活躍",
        kana: ["かつやく"],
        english: ["activity (esp. energetic)", "great efforts"]
      }
    ],
    tags: []
  },
  {
    name: "間",
    on: ["かん", "けん"],
    kun: ["あいだ", "ま"],
    source: "https://en.wiktionary.org/wiki/%E9%96%93#Kanji",
    meanings: ["interval", "space"],
    grade: 2,
    jlpt: 4,
    strokes: 12,
    examples: [
      {
        value: "間",
        kana: ["あいだ"],
        english: ["space (between)", "gap", "interval", "distance"]
      },
      {
        value: "間もなく",
        kana: ["まもなく"],
        english: ["soon", "before long", "in a short time"]
      },
      {
        value: "期間",
        kana: ["きかん"],
        english: ["period", "term", "interval"]
      },
      {
        value: "時間",
        kana: ["じかん"],
        english: ["time", "hours"]
      },
      {
        value: "人間",
        kana: ["にんげん"],
        english: ["human being", "man", "person"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "丸",
    on: ["がん"],
    kun: ["まる"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%B8#Kanji",
    meanings: ["circle", "round", "full", "month", "perfection"],
    grade: 2,
    jlpt: 2,
    strokes: 3,
    examples: [
      {
        value: "日の丸",
        kana: ["ひのまる"],
        english: ["outline of the sun (esp. represented as a redcircle)", "Japanese flag"]
      },
      {
        value: "丸刈り",
        kana: ["まるがり"],
        english: ["close clipping"]
      },
      {
        value: "丸い",
        kana: ["まるい", "まろい"],
        english: ["round", "circular", "spherical", "harmonious", "calm"]
      },
      {
        value: "丸ごと",
        kana: ["丸ごと"],
        english: ["in its entirety", "whole, wholly"]
      },
      {
        value: "丸太",
        kana: ["まるた"],
        english: ["log"]
      }
    ],
    tags: []
  },
  {
    name: "岩",
    on: ["がん"],
    kun: ["いわ"],
    source: "https://en.wiktionary.org/wiki/%E5%B2%A9#Kanji",
    meanings: ["boulder", "rock", "cliff"],
    grade: 2,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "岩",
        kana: ["いわ", "いわお"],
        english: ["rock", "crag"]
      },
      {
        value: "溶岩",
        kana: ["ようがん"],
        english: ["lava"]
      },
      {
        value: "岩間",
        kana: ["いわま"],
        english: ["among rocks"]
      },
      {
        value: "一枚岩",
        kana: ["いちまいいわ"],
        english: ["monolithic"]
      },
      {
        value: "岩石",
        kana: ["がんせき"],
        english: ["rock"]
      }
    ],
    tags: []
  },
  {
    name: "顔",
    on: ["がん"],
    kun: ["かお"],
    source: "https://en.wiktionary.org/wiki/%E9%A1%94#Kanji",
    meanings: ["face", "expression"],
    grade: 2,
    jlpt: 3,
    strokes: 18,
    examples: [
      {
        value: "顔",
        kana: ["かお"],
        english: ["face (person)"]
      },
      {
        value: "知らん顔",
        kana: ["しらんかお"],
        english: ["unconcerned air", "indifference"]
      },
      {
        value: "笑顔",
        kana: ["えがお"],
        english: ["smiling face", "smile"]
      },
      {
        value: "顔ぶれ",
        kana: ["かおぶれ"],
        english: ["personnel", "member"]
      },
      {
        value: "似顔",
        kana: ["にがお"],
        english: ["portrait", "likeness"]
      }
    ],
    tags: ["body"]
  },
  {
    name: "帰",
    on: ["き"],
    kun: ["かえる", "かえす"],
    source: "https://en.wiktionary.org/wiki/%E5%B8%B0#Kanji",
    meanings: ["return", "homecoming", "arrive at", "lead to"],
    grade: 2,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "帰り",
        kana: ["かえり"],
        english: ["return", "coming back"]
      },
      {
        value: "帰国",
        kana: ["きこく"],
        english: ["return to one’s country"]
      },
      {
        value: "復帰",
        kana: ["ふっき"],
        english: ["return", "comeback", "reinstatement"]
      },
      {
        value: "帰還",
        kana: ["きかん"],
        english: ["repatriation", "(electrical) feedback"]
      },
      {
        value: "帰宅",
        kana: ["きたく"],
        english: ["returning home"]
      }
    ],
    tags: []
  },
  {
    name: "汽",
    on: ["き"],
    kun: ["みずけ"],
    source: "https://en.wiktionary.org/wiki/%E6%B1%BD#Kanji",
    meanings: ["vapour", "steam"],
    grade: 2,
    jlpt: 1,
    strokes: 7,
    examples: [
      {
        value: "汽車",
        kana: ["きしゃ"],
        english: ["train (steam)"]
      },
      {
        value: "汽船",
        kana: ["きせん"],
        english: ["steamship", "steamboat", "steamer"]
      },
      {
        value: "汽笛",
        kana: ["きてき"],
        english: ["steam whistle"]
      },
      {
        value: "汽車賃",
        kana: ["きしゃちん"],
        english: ["train fare"]
      },
      {
        value: "汽水",
        kana: ["きすい"],
        english: ["brackish water"]
      }
    ],
    tags: []
  },
  {
    name: "記",
    on: ["き"],
    kun: ["しるす"],
    source: "https://en.wiktionary.org/wiki/%E8%A8%98#Kanji",
    meanings: ["record", "scribe", "account", "narrative"],
    grade: 2,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "記事",
        kana: ["きじ"],
        english: ["article", "news story", "report", "account"]
      },
      {
        value: "記者",
        kana: ["きしゃ"],
        english: ["reporter"]
      },
      {
        value: "記録",
        kana: ["きろく"],
        english: ["record", "minutes", "document"]
      },
      {
        value: "書記",
        kana: ["しょき"],
        english: ["clerk", "secretary"]
      },
      {
        value: "記念",
        kana: ["きねん"],
        english: ["commemoration", "memory"]
      }
    ],
    tags: []
  },
  {
    name: "弓",
    on: ["きゅう"],
    kun: ["たらし"],
    source: "https://en.wiktionary.org/wiki/%E5%BC%93#Kanji",
    meanings: ["bow"],
    grade: 2,
    jlpt: 1,
    strokes: 3,
    examples: [
      {
        value: "弓",
        kana: ["ゆみ"],
        english: ["bow (and arrow)"]
      },
      {
        value: "洋弓",
        kana: ["ようきゅう"],
        english: ["Western style archery"]
      },
      {
        value: "弓道",
        kana: ["きゅうどう"],
        english: ["(Japanese) archery"]
      },
      {
        value: "弓矢",
        kana: ["ゆみや", "きゅうし"],
        english: ["bow and arrow"]
      },
      {
        value: "弓のこ",
        kana: ["ゆみのこ"],
        english: ["hacksaw"]
      }
    ],
    tags: []
  },
  {
    name: "牛",
    on: ["ぎゅう"],
    kun: ["うし"],
    source: "https://en.wiktionary.org/wiki/%E7%89%9B#Kanji",
    meanings: ["cow"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "牛",
        kana: ["うし", "ぎゅう"],
        english: ["cattle", "cow", "ox", "oxen", "beef"]
      },
      {
        value: "牛肉",
        kana: ["ぎゅうにく"],
        english: ["beef"]
      },
      {
        value: "牛乳",
        kana: ["ぎゅうにゅう"],
        english: ["cow's milk"]
      },
      {
        value: "牛歩",
        kana: ["ぎゅうほ"],
        english: ["snail’s pace", "slow progress"]
      },
      {
        value: "和牛",
        kana: ["わぎゅう"],
        english: ["Wagyu beef", "Japanese beef"]
      }
    ],
    tags: ["animal"]
  },
  {
    name: "魚",
    on: ["ご", "ぎょ"],
    kun: ["うお", "さかな"],
    source: "https://en.wiktionary.org/wiki/%E9%AD%9A#Kanji",
    meanings: ["fish"],
    grade: 2,
    jlpt: 4,
    strokes: 11,
    examples: [
      {
        value: "魚",
        kana: ["さかな", "うお"],
        english: ["fish"]
      },
      {
        value: "魚介類",
        kana: ["ぎょかいるい"],
        english: ["marine products", "seafood", "fish and shellfish"]
      },
      {
        value: "金魚",
        kana: ["きんぎょ"],
        english: ["goldfish"]
      },
      {
        value: "魚類",
        kana: ["ぎょるい"],
        english: ["the fishes"]
      },
      {
        value: "稚魚",
        kana: ["ちぎょ"],
        english: ["fry (young fish)"]
      }
    ],
    tags: ["animal"]
  },
  {
    name: "京",
    on: ["きょう", "けい"],
    kun: ["みやこ"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%AC#Kanji",
    meanings: ["capital", "x10^16"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "京",
        kana: ["きょう", "けい"],
        english: ["imperial captial"]
      },
      {
        value: "東京",
        kana: ["とうきょう"],
        english: ["Tokyo"]
      },
      {
        value: "北京",
        kana: ["ぺきん"],
        english: ["Beijing (China)", "Peking"]
      },
      {
        value: "京都",
        kana: ["きょうと"],
        english: ["Kyoto"]
      },
      {
        value: "東京証券取引所",
        kana: ["うきょうしょうけんとりひきじょ"],
        english: ["Tokyo Stock Exchange (TSE)"]
      }
    ],
    tags: []
  },
  {
    name: "強",
    on: ["きょう"],
    kun: ["つよい"],
    source: "https://en.wiktionary.org/wiki/%E5%BC%B7#Kanji",
    meanings: ["strong"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "強さ",
        kana: ["つよさ"],
        english: ["strength", "power"]
      },
      {
        value: "強化",
        kana: ["きょうか"],
        english: ["strengthen", "intensify", "reinforce", "solidify"]
      },
      {
        value: "強制",
        kana: ["きょうせい"],
        english: ["obligation", "coercion", "compulsion", "enforcement"]
      },
      {
        value: "勉強",
        kana: ["べんきょう"],
        english: ["study", "diligence", "discount", "reduction"]
      },
      {
        value: "強める",
        kana: ["つよめる"],
        english: ["to strengthen", "to emphasise"]
      }
    ],
    tags: []
  },
  {
    name: "教",
    on: ["きょう"],
    kun: ["おしえる"],
    source: "https://en.wiktionary.org/wiki/%E6%95%99#Kanji",
    meanings: ["teach", "faith", "doctorine"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "教育",
        kana: ["きょういく"],
        english: ["training", "education"]
      },
      {
        value: "教授",
        kana: ["きょうじゅ"],
        english: ["professor", "teaching", "instruction"]
      },
      {
        value: "教師",
        kana: ["きょうし"],
        english: ["teacher (classroom)"]
      },
      {
        value: "宗教",
        kana: ["しゅうきょう"],
        english: ["religion"]
      },
      {
        value: "教室",
        kana: ["きょうしつ"],
        english: ["classroom"]
      }
    ],
    tags: []
  },
  {
    name: "近",
    on: ["きん"],
    kun: ["ちかい"],
    source: "https://en.wiktionary.org/wiki/%E8%BF%91#Kanji",
    meanings: ["near", "early", "akin", "tantamount"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "最近",
        kana: ["さいきん"],
        english: ["latest", "most recent", "nowadays"]
      },
      {
        value: "近代",
        kana: ["きんだい"],
        english: ["present day", "modern times"]
      },
      {
        value: "付近",
        kana: ["ふきん"],
        english: ["neighbourhood", "vicinity"]
      },
      {
        value: "近鉄",
        kana: ["きんてつ"],
        english: ["Kinki Nippon Tetsudou (railway co.)"]
      },
      {
        value: "側近",
        kana: ["そっきん"],
        english: ["close associate", "close aide"]
      }
    ],
    tags: []
  },
  {
    name: "兄",
    on: ["きょう", "けい"],
    kun: ["あに"],
    source: "https://en.wiktionary.org/wiki/%E5%85%84#Kanji",
    meanings: ["older brother"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "兄",
        kana: ["あに"],
        english: ["older brother"]
      },
      {
        value: "兄弟",
        kana: ["きょうだい", "けいてい"],
        english: ["siblings", "brothers and sisters"]
      },
      {
        value: "兄ちゃん",
        kana: ["あんちゃん"],
        english: ["(my) older brother"]
      },
      {
        value: "兄さん",
        kana: ["にいさん", "あにさん"],
        english: ["older brother", "elder brother"]
      },
      {
        value: "実兄",
        kana: ["じっけい"],
        english: ["one’s own elder brother"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "形",
    on: ["ぎょう", "けい"],
    kun: ["かた", "かたち"],
    source: "https://en.wiktionary.org/wiki/%E5%BD%A2#Kanji",
    meanings: ["shape", "form", "style"],
    grade: 2,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "形",
        kana: ["かたち", "よう"],
        english: ["form", "shape", "figure", "visage"]
      },
      {
        value: "形式",
        kana: ["けいしき"],
        english: ["form (as opposed to substance)", "formality"]
      },
      {
        value: "形成",
        kana: ["けいせい"],
        english: ["formation", "molding", "taking form"]
      },
      {
        value: "形態",
        kana: ["けいたい"],
        english: ["form", "shape", "figure"]
      },
      {
        value: "人形",
        kana: ["にんぎょう"],
        english: ["doll", "puppet", "figure"]
      }
    ],
    tags: []
  },
  {
    name: "計",
    on: ["けい"],
    kun: ["はかる", "はからう"],
    source: "https://en.wiktionary.org/wiki/%E8%A8%88#Kanji",
    meanings: ["plot", "plan", "scheme", "measure"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "計",
        kana: ["けい"],
        english: ["plan", "meter", "measuring device"]
      },
      {
        value: "計画",
        kana: ["けいかく"],
        english: ["plan", "project", "schedule", "scheme", "program"]
      },
      {
        value: "合計",
        kana: ["ごうけい"],
        english: ["sum total", "total amount"]
      },
      {
        value: "設計",
        kana: ["せっけい"],
        english: ["plan, design", "layout"]
      },
      {
        value: "計算",
        kana: ["けいさん"],
        english: ["calculation", "reckoning", "count", "forecast"]
      }
    ],
    tags: []
  },
  {
    name: "元",
    on: ["げん", "げん"],
    kun: ["もと"],
    source: "https://en.wiktionary.org/wiki/%E5%85%83#Kanji",
    meanings: ["beginning", "former time", "origin"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "元",
        kana: ["もと"],
        english: ["concern", "interest"]
      },
      {
        value: "地元",
        kana: ["じもと"],
        english: ["centre", "middle", "heart", "core", "focus"]
      },
      {
        value: "元首",
        kana: ["げんしゅ"],
        english: ["heart failure"]
      },
      {
        value: "元気",
        kana: ["げんき"],
        english: ["from the bottom of one’s heart"]
      },
      {
        value: "元日",
        kana: ["がんじつ", "がんにち"],
        english: ["heart"]
      }
    ],
    tags: []
  },
  {
    name: "原",
    on: ["げん"],
    kun: ["はら"],
    source: "https://en.wiktionary.org/wiki/%E5%8E%9F#Kanji",
    meanings: ["meadow", "original", "primitive", "field", "plain", "tundra"],
    grade: 2,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "原因",
        kana: ["げんいん"],
        english: ["cause", "origin", "source"]
      },
      {
        value: "原則",
        kana: ["げんそく"],
        english: ["principle", "general rule"]
      },
      {
        value: "原子力",
        kana: ["げんしりょく"],
        english: ["atomic energy"]
      },
      {
        value: "原告",
        kana: ["げんこく"],
        english: ["plaintiff", "accuser", "prosecutor"]
      },
      {
        value: "原発",
        kana: ["げんぱつ"],
        english: ["nuclear power plant", "nuclear power supply"]
      }
    ],
    tags: []
  },
  {
    name: "言",
    on: ["げん", "ごん"],
    kun: ["こと", "いう"],
    source: "https://en.wiktionary.org/wiki/%E8%A8%80#Kanji",
    meanings: ["say"],
    grade: 2,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "言わば",
        kana: ["いわば"],
        english: ["so to speak", "so to call it", "as it were"]
      },
      {
        value: "言う",
        kana: ["いう", "ゆう"],
        english: ["to say", "to call (i.e. to give a name)"]
      },
      {
        value: "言",
        kana: ["げん", "こと"],
        english: ["word", "remark", "statement"]
      },
      {
        value: "言葉",
        kana: ["ことば", "けとば"],
        english: ["language", "dialect", "word", "phrase", "term"]
      },
      {
        value: "宣言",
        kana: ["せんげん"],
        english: ["declaration", "proclamation", "announcement"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "古",
    on: ["こ"],
    kun: ["ふるい", "ふるす"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%A4#Kanji",
    meanings: ["old"],
    grade: 2,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "古",
        kana: ["いにしえ"],
        english: ["antiquity", "ancient times"]
      },
      {
        value: "古代",
        kana: ["こだい"],
        english: ["ancient times"]
      },
      {
        value: "古典",
        kana: ["こてん"],
        english: ["old book", "classics", "classic"]
      },
      {
        value: "古墳",
        kana: ["こふん"],
        english: ["ancient tomb"]
      },
      {
        value: "考古学",
        kana: ["こうこがく"],
        english: ["archaeology"]
      }
    ],
    tags: []
  },
  {
    name: "戸",
    on: ["こ"],
    kun: ["と"],
    source: "https://en.wiktionary.org/wiki/%E6%88%B8#Kanji",
    meanings: ["door", "counter for houses"],
    grade: 2,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "戸",
        kana: ["と"],
        english: ["door (esp. Japanese style)"]
      },
      {
        value: "江戸",
        kana: ["えど"],
        english: ["old name of Tokyo"]
      },
      {
        value: "江戸川",
        kana: ["えどがわ"],
        english: ["Edo River"]
      },
      {
        value: "井戸",
        kana: ["いど"],
        english: ["water well"]
      },
      {
        value: "戸惑い",
        kana: ["とまどい"],
        english: ["being at sea", "losing one’s bearings"]
      }
    ],
    tags: []
  },
  {
    name: "午",
    on: ["ご"],
    kun: ["うま"],
    source: "https://en.wiktionary.org/wiki/%E5%8D%88#Kanji",
    meanings: ["noon", "sign of the horse"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "午後",
        kana: ["ごご"],
        english: ["afternoon", "p.m"]
      },
      {
        value: "午前",
        kana: ["ごぜん"],
        english: ["morning", "a.m"]
      },
      {
        value: "正午",
        kana: ["しょうご"],
        english: ["noon", "midday"]
      },
      {
        value: "午",
        kana: ["うま"],
        english: ["seventh sign of the Chinese zodiac"]
      },
      {
        value: "午",
        kana: ["ひる"],
        english: ["noon", "midday", "daytime", "lunch"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "後",
    on: ["ご", "こう"],
    kun: ["あと", "うしろ", "のち"],
    source: "https://en.wiktionary.org/wiki/%E5%BE%8C#Kanji",
    meanings: ["behind", "after", "back", "later"],
    grade: 2,
    jlpt: 4,
    strokes: 9,
    examples: [
      {
        value: "後",
        kana: ["あと"],
        english: ["behind", "rear", "after", "later", "after one’s death"]
      },
      {
        value: "午後",
        kana: ["ごご"],
        english: ["afternoon", "P.M"]
      },
      {
        value: "後ろ",
        kana: ["うしろ"],
        english: ["back", "behind", "rear"]
      },
      {
        value: "今後",
        kana: ["こんご"],
        english: ["from now on", "hereafter"]
      },
      {
        value: "最後",
        kana: ["さいご"],
        english: ["last", "end", "conclusion"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "語",
    on: ["ご"],
    kun: ["かたらう"],
    source: "https://en.wiktionary.org/wiki/%E8%AA%9E#Kanji",
    meanings: ["word", "speech", "language"],
    grade: 2,
    jlpt: 4,
    strokes: 14,
    examples: [
      {
        value: "英語",
        kana: ["えいご"],
        english: ["English (language)"]
      },
      {
        value: "日本語",
        kana: ["にほんご", "にっぽんご"],
        english: ["Japanese (language)"]
      },
      {
        value: "物語",
        kana: ["ものがたり"],
        english: ["tale", "story", "legend"]
      },
      {
        value: "語らう",
        kana: ["かたらう"],
        english: ["to talk", "to tell", "to recite", "to pledge"]
      },
      {
        value: "語る",
        kana: ["かたる"],
        english: ["to talk", "to tell", "to recite"]
      }
    ],
    tags: []
  },
  {
    name: "交",
    on: ["こう"],
    kun: ["まじわる", "まじる", "かう", "かわす", "まじえる", "まぜる", "まざる"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%A4#Kanji",
    meanings: ["intersect", "mingle", "mixing", "association"],
    grade: 2,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "外交",
        kana: ["がいこう"],
        english: ["diplomacy"]
      },
      {
        value: "交渉",
        kana: ["こうしょう"],
        english: ["negotiations", "discussions", "connection"]
      },
      {
        value: "交流",
        kana: ["こうりゅう"],
        english: ["intercourse", "(cultural) exchange"]
      },
      {
        value: "交換",
        kana: ["こうかん"],
        english: ["exchange", "interchange", "switching", "reciprocity"]
      },
      {
        value: "交通",
        kana: ["こうつう"],
        english: ["communication", "transportation", "traffic"]
      }
    ],
    tags: []
  },
  {
    name: "光",
    on: ["こう"],
    kun: ["ひかり", "ひかる"],
    source: "https://en.wiktionary.org/wiki/%E5%85%89#Kanji",
    meanings: ["light", "ray"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "光",
        kana: ["ひかり"],
        english: ["light"]
      },
      {
        value: "観光",
        kana: ["かんこう"],
        english: ["sightseeing"]
      },
      {
        value: "光景",
        kana: ["こうけい"],
        english: ["scene", "spectacle"]
      },
      {
        value: "日光",
        kana: ["にっこう"],
        english: ["sunlight"]
      },
      {
        value: "脚光",
        kana: ["きゃっこう"],
        english: ["footlight", "limelight"]
      }
    ],
    tags: []
  },
  {
    name: "公",
    on: ["こう"],
    kun: ["おおやけ"],
    source: "https://en.wiktionary.org/wiki/%E5%85%AC#Kanji",
    meanings: ["public", "prince", "official", "governmental"],
    grade: 2,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "公園",
        kana: ["こうえん"],
        english: ["(public) park"]
      },
      {
        value: "公演",
        kana: ["こうえん"],
        english: ["public performance"]
      },
      {
        value: "公開",
        kana: ["こうかい"],
        english: ["open to the public"]
      },
      {
        value: "公共",
        kana: ["こうきょう"],
        english: ["public", "community", "public service", "society"]
      },
      {
        value: "公式",
        kana: ["こうしき"],
        english: ["formality", "formal", "official", "formula"]
      }
    ],
    tags: []
  },
  {
    name: "工",
    on: ["こう", "く"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E5%B7%A5#Kanji",
    meanings: ["craft", "construction", "katakana e radical (no.48)"],
    grade: 2,
    jlpt: 3,
    strokes: 3,
    examples: [
      {
        value: "工場",
        kana: ["こうじょう", "こうば"],
        english: ["factory", "plant, mill", "workshop"]
      },
      {
        value: "工業",
        kana: ["こうぎょう"],
        english: ["(manufacturing) industry"]
      },
      {
        value: "工事",
        kana: ["こうじ"],
        english: ["construction work"]
      },
      {
        value: "工作",
        kana: ["こうさく"],
        english: ["work", "construction", "handicraft", "maneuvering"]
      },
      {
        value: "加工",
        kana: ["かこう"],
        english: ["manufacturing", "processing", "treatment"]
      }
    ],
    tags: []
  },
  {
    name: "広",
    on: ["こう"],
    kun: ["ひろい", "ひろまる", "ひろめる", "ひろがる", "ひろげる"],
    source: "https://en.wiktionary.org/wiki/%E5%BA%83#Kanji",
    meanings: ["wide", "broad", "spacious"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "広い",
        kana: ["ひろい"],
        english: ["spacious", "vast", "wide"]
      },
      {
        value: "広がり",
        kana: ["ひろがり"],
        english: ["spread", "span"]
      },
      {
        value: "広告",
        kana: ["こうこく"],
        english: ["advertisement"]
      },
      {
        value: "広げる",
        kana: ["ひろげる"],
        english: ["to spread", "to extend", "to expand", "to enlarge"]
      },
      {
        value: "広がった枝",
        kana: ["ひろがったえだ"],
        english: ["spreading branches"]
      }
    ],
    tags: []
  },
  {
    name: "考",
    on: ["こう"],
    kun: ["かんがえる"],
    source: "https://en.wiktionary.org/wiki/%E8%80%83#Kanji",
    meanings: ["consider", "think over"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "考え",
        kana: ["かんがえ"],
        english: ["thinking", "thought", "ideas", "intention"]
      },
      {
        value: "考え方",
        kana: ["かんがえかた"],
        english: ["way of thinking"]
      },
      {
        value: "参考",
        kana: ["さんこう"],
        english: ["reference, consultation"]
      },
      {
        value: "選考",
        kana: ["せんこう"],
        english: ["selection, screening"]
      },
      {
        value: "元日",
        kana: ["かんがえる"],
        english: ["to consider", "to think about"]
      }
    ],
    tags: []
  },
  {
    name: "行",
    on: ["こう", "ぎょう"],
    kun: ["いく", "ゆく", "おこなう"],
    source: "https://en.wiktionary.org/wiki/%E8%A1%8C#Kanji",
    meanings: ["go", "going", "journey"],
    grade: 2,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "行う",
        kana: ["おこなう"],
        english: ["to perform", "to do", "to conduct oneself"]
      },
      {
        value: "行",
        kana: ["ぎょう"],
        english: ["line (i.e. of text)", "row", "verse"]
      },
      {
        value: "銀行",
        kana: ["ぎんこう"],
        english: ["bank"]
      },
      {
        value: "行政",
        kana: ["ぎょうせい"],
        english: ["administration"]
      },
      {
        value: "行動",
        kana: ["こうどう"],
        english: ["action", "conduct", "behaviour"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "高",
    on: ["こう"],
    kun: ["たかい"],
    source: "https://en.wiktionary.org/wiki/%E9%AB%98#Kanji",
    meanings: ["tall", "high", "expensive"],
    grade: 2,
    jlpt: 4,
    strokes: 10,
    examples: [
      {
        value: "高さ",
        kana: ["たかさ"],
        english: ["height"]
      },
      {
        value: "高校",
        kana: ["こうこう"],
        english: ["senior high school"]
      },
      {
        value: "最高",
        kana: ["さいこう"],
        english: ["highest", "supreme", "the most"]
      },
      {
        value: "円高",
        kana: ["えんだか"],
        english: ["high valued yen"]
      },
      {
        value: "高",
        kana: ["たか", "だか"],
        english: ["quantity", "amount", "volume", "number"]
      }
    ],
    tags: ["adjective"]
  },
  {
    name: "合",
    on: ["ごう"],
    kun: ["あう"],
    source: "https://en.wiktionary.org/wiki/%E5%90%88#Kanji",
    meanings: ["fit", "suit", "join"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "合",
        kana: ["ごう"],
        english: ["0.18039 litres"]
      },
      {
        value: "合意",
        kana: ["ごうい"],
        english: ["agreement", "consent", "mutual understanding"]
      },
      {
        value: "試合",
        kana: ["しあい"],
        english: ["match", "game", "bout", "contest"]
      },
      {
        value: "連合",
        kana: ["れんごう"],
        english: ["union, alliance", "combination"]
      },
      {
        value: "総合",
        kana: ["そうごう"],
        english: ["synthesis", "coordination", "putting together"]
      }
    ],
    tags: []
  },
  {
    name: "国",
    on: ["こく"],
    kun: ["くに"],
    source: "https://en.wiktionary.org/wiki/%E5%9B%BD#Kanji",
    meanings: ["country"],
    grade: 2,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "国",
        kana: ["くに"],
        english: ["country", "state", "region"]
      },
      {
        value: "外国",
        kana: ["がいこく"],
        english: ["foreign country"]
      },
      {
        value: "外国人",
        kana: ["がいこくじん"],
        english: ["foreigner"]
      },
      {
        value: "韓国",
        kana: ["かんこく"],
        english: ["(South) Korea"]
      },
      {
        value: "国家",
        kana: ["こっか"],
        english: ["state", "country", "nation"]
      }
    ],
    tags: []
  },
  {
    name: "黒",
    on: ["こく"],
    kun: ["くろ", "くろい"],
    source: "https://en.wiktionary.org/wiki/%E9%BB%92#Kanji",
    meanings: ["black"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "黒",
        kana: ["くろ"],
        english: ["black", "dark", "bad guy"]
      },
      {
        value: "黒字",
        kana: ["くろじ"],
        english: ["balance (figure) in the black"]
      },
      {
        value: "黒人",
        kana: ["こくじん"],
        english: ["black person"]
      },
      {
        value: "黒海",
        kana: ["こっかい"],
        english: ["Black Sea"]
      },
      {
        value: "黒い",
        kana: ["くろい"],
        english: ["black", "dark", "illicit", "wicked", "underground"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "今",
    on: ["こん"],
    kun: ["いま"],
    source: "https://en.wiktionary.org/wiki/%E4%BB%8A#Kanji",
    meanings: ["now"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "今",
        kana: ["いま"],
        english: ["now", "the present time", "just now", "soon"]
      },
      {
        value: "今や",
        kana: ["いまや"],
        english: ["now"]
      },
      {
        value: "今回",
        kana: ["こんかい"],
        english: ["now", "this time", "lately"]
      },
      {
        value: "今月",
        kana: ["こんげつ"],
        english: ["this month"]
      },
      {
        value: "今後",
        kana: ["こんご"],
        english: ["from now on", "hereafter"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "才",
    on: ["さい"],
    kun: ["わずかに"],
    source: "https://en.wiktionary.org/wiki/%E6%89%8D#Kanji",
    meanings: ["genius", "years old", "cubic shaku", "ability"],
    grade: 2,
    jlpt: 2,
    strokes: 3,
    examples: [
      {
        value: "才",
        kana: ["さい"],
        english: ["years old", "ability", "gift", "talent", "aptitude"]
      },
      {
        value: "才能",
        kana: ["さいのう"],
        english: ["talent", "ability"]
      },
      {
        value: "天才",
        kana: ["てんさい"],
        english: ["genius", "prodigy", "natural gift"]
      },
      {
        value: "漫才",
        kana: ["まんざい"],
        english: ["comedian", "comic dialogue"]
      },
      {
        value: "秀才",
        kana: ["しゅうさい"],
        english: ["prodigy"]
      }
    ],
    tags: []
  },
  {
    name: "細",
    on: ["さい"],
    kun: ["ほそい", "こまかい"],
    source: "https://en.wiktionary.org/wiki/%E7%B4%B0#Kanji",
    meanings: ["dainty", "get thin", "taper", "slender", "narrow"],
    grade: 2,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "細かい",
        kana: ["こまかい"],
        english: ["small", "fine", "minute", "minor", "trivial"]
      },
      {
        value: "細胞",
        kana: ["さいぼう", "さいほう"],
        english: ["cell (biology)"]
      },
      {
        value: "細かく",
        kana: ["こまかく"],
        english: ["minutely", "finely"]
      },
      {
        value: "細か",
        kana: ["こまか"],
        english: ["small", "fine", "detailed", "stingy"]
      },
      {
        value: "詳細",
        kana: ["しょうさい"],
        english: ["detail", "particulars"]
      }
    ],
    tags: []
  },
  {
    name: "作",
    on: ["さく"],
    kun: ["つくる"],
    source: "https://en.wiktionary.org/wiki/%E4%BD%9C#Kanji",
    meanings: ["make", "production", "prepare", "build"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "作",
        kana: ["さく"],
        english: ["a work", "a harvest"]
      },
      {
        value: "作る",
        kana: ["つくる"],
        english: ["to make", "to produce", "to manufacture", "to build"]
      },
      {
        value: "作り",
        kana: ["つくり"],
        english: ["making", "producing", "manufacturing", "building"]
      },
      {
        value: "作業",
        kana: ["さぎょう"],
        english: ["work", "operation", "manufacturing", "fatigue duty"]
      },
      {
        value: "作品",
        kana: ["さくひん"],
        english: ["work (e.g. book, film, composition, etc.)"]
      }
    ],
    tags: []
  },
  {
    name: "算",
    on: ["さん"],
    kun: ["かぞえる"],
    source: "https://en.wiktionary.org/wiki/%E7%AE%97#Kanji",
    meanings: ["calculate", "divining", "number", "abacus", "probability"],
    grade: 2,
    jlpt: 2,
    strokes: 14,
    examples: [
      {
        value: "予算",
        kana: ["よさん"],
        english: ["estimate", "budget"]
      },
      {
        value: "決算",
        kana: ["けっさん"],
        english: ["balance sheet", "settlement of accounts"]
      },
      {
        value: "通算",
        kana: ["つうさん"],
        english: ["total"]
      },
      {
        value: "計算",
        kana: ["けいさん"],
        english: ["calculation", "reckoning", "count", "forecast"]
      },
      {
        value: "補正予算",
        kana: ["ほせいよさん"],
        english: ["revised or supplementary budget"]
      }
    ],
    tags: []
  },
  {
    name: "姉",
    on: ["し"],
    kun: ["あね"],
    source: "https://en.wiktionary.org/wiki/%E5%A7%89#Kanji",
    meanings: ["older sister"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "姉",
        kana: ["あね"],
        english: ["older sister", "elder sister"]
      },
      {
        value: "姉妹",
        kana: ["しまい", "きょうだい"],
        english: ["sisters"]
      },
      {
        value: "姉さん",
        kana: ["ねえさん", "あねさん"],
        english: ["elder sister", "young lady"]
      },
      {
        value: "義姉",
        kana: ["ぎし", "あね"],
        english: ["sister in-law"]
      },
      {
        value: "姉",
        kana: ["し"],
        english: ["honorific suffix used after the name of a woman of equal or higher status"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "市",
    on: ["し"],
    kun: ["いち"],
    source: "https://en.wiktionary.org/wiki/%E5%B8%82#Kanji",
    meanings: ["market", "city", "town"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "市場",
        kana: ["いちば"],
        english: ["(town) market", "the marketplace"]
      },
      {
        value: "市内",
        kana: ["しない"],
        english: ["within a city", "local"]
      },
      {
        value: "市民",
        kana: ["しみん"],
        english: ["citizen", "townspeople"]
      },
      {
        value: "都市",
        kana: ["とし"],
        english: ["town", "city", "municipal", "urban"]
      },
      {
        value: "同市",
        kana: ["どうし"],
        english: ["same city"]
      }
    ],
    tags: []
  },
  {
    name: "思",
    on: ["し"],
    kun: ["おもう"],
    source: "https://en.wiktionary.org/wiki/%E6%80%9D#Kanji",
    meanings: ["think"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "思わず",
        kana: ["おもわず"],
        english: ["unintentionally", "reflexively", "spontaneously"]
      },
      {
        value: "思い",
        kana: ["おもい"],
        english: ["thought", "mind", "heart", "feelings", "emotion"]
      },
      {
        value: "思う",
        kana: ["おもう"],
        english: ["to think", "to consider", "to believe"]
      },
      {
        value: "意思",
        kana: ["いし"],
        english: ["intention", "purpose"]
      },
      {
        value: "思想",
        kana: ["しそう"],
        english: ["thought", "idea", "ideology"]
      }
    ],
    tags: []
  },
  {
    name: "止",
    on: ["し"],
    kun: ["とまる", "とめる"],
    source: "https://en.wiktionary.org/wiki/%E6%AD%A2#Kanji",
    meanings: ["stop", "halt"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "禁止",
        kana: ["きんし"],
        english: ["prohibition", "inhibition", "ban"]
      },
      {
        value: "停止",
        kana: ["ていし"],
        english: ["suspension", "interruption", "stoppage", "ban"]
      },
      {
        value: "防止",
        kana: ["ぼうし"],
        english: ["prevention", "check"]
      },
      {
        value: "中止",
        kana: ["ちゅうし"],
        english: ["suspension", "stoppage", "discontinuance"]
      },
      {
        value: "廃止",
        kana: ["はいし"],
        english: ["abolition", "repeal"]
      }
    ],
    tags: []
  },
  {
    name: "紙",
    on: ["し"],
    kun: ["かみ"],
    source: "https://en.wiktionary.org/wiki/%E7%B4%99#Kanji",
    meanings: ["paper"],
    grade: 2,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "紙",
        kana: ["かみ"],
        english: ["paper"]
      },
      {
        value: "手紙",
        kana: ["てがみ"],
        english: ["letter"]
      },
      {
        value: "用紙",
        kana: ["ようし"],
        english: ["blank form"]
      },
      {
        value: "紙面",
        kana: ["しめん"],
        english: ["space (page)"]
      },
      {
        value: "白紙",
        kana: ["はくし"],
        english: ["blank paper", "white paper"]
      }
    ],
    tags: []
  },
  {
    name: "寺",
    on: ["じ"],
    kun: ["てら"],
    source: "https://en.wiktionary.org/wiki/%E5%AF%BA#Kanji",
    meanings: ["Buddhist Temple"],
    grade: 2,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "寺",
        kana: ["てら"],
        english: ["temple (Buddhist)"]
      },
      {
        value: "寺院",
        kana: ["じいん"],
        english: ["temple"]
      },
      {
        value: "国分寺",
        kana: ["こくぶんじ"],
        english: ["(Nara Era) state provincial temples"]
      },
      {
        value: "禅寺",
        kana: ["ぜんでら"],
        english: ["Zen temple"]
      },
      {
        value: "寺子屋",
        kana: ["てらこや"],
        english: ["temple elementary school (during the Edoperiod)"]
      }
    ],
    tags: []
  },
  {
    name: "時",
    on: ["じ"],
    kun: ["とき"],
    source: "https://en.wiktionary.org/wiki/%E6%99%82#Kanji",
    meanings: ["time", "hour"],
    grade: 2,
    jlpt: 4,
    strokes: 10,
    examples: [
      {
        value: "時",
        kana: ["とき"],
        english: ["time", "hour", "occasion", "moment"]
      },
      {
        value: "時間",
        kana: ["じかん"],
        english: ["time", "hours"]
      },
      {
        value: "時期",
        kana: ["じき"],
        english: ["time", "season", "period", "soon", "shortly"]
      },
      {
        value: "時代",
        kana: ["じだい"],
        english: ["period", "epoch", "era", "age", "the times"]
      },
      {
        value: "当時",
        kana: ["とうじ"],
        english: ["at that time", "in those days"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "自",
    on: ["じ", "し"],
    kun: ["みずから"],
    source: "https://en.wiktionary.org/wiki/%E8%87%AA#Kanji",
    meanings: ["oneself"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "自ら",
        kana: ["みずから"],
        english: ["for one’s self", "personally"]
      },
      {
        value: "自衛隊",
        kana: ["じえいたい"],
        english: ["self defence"]
      },
      {
        value: "自身",
        kana: ["じしん"],
        english: ["by oneself", "personally"]
      },
      {
        value: "自然",
        kana: ["しぜん"],
        english: ["nature", "spontaneity", "naturally", "spontaneously"]
      },
      {
        value: "自宅",
        kana: ["じたく"],
        english: ["one’s home"]
      }
    ],
    tags: []
  },
  {
    name: "室",
    on: ["しつ", "しち"],
    kun: ["むろ"],
    source: "https://en.wiktionary.org/wiki/%E5%AE%A4#Kanji",
    meanings: ["room", "apartment", "chamber", "greenhouse", "cellar"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "教室",
        kana: ["きょうしつ"],
        english: ["classroom"]
      },
      {
        value: "室長",
        kana: ["しつちょう"],
        english: ["room monitor"]
      },
      {
        value: "室内",
        kana: ["しつない"],
        english: ["indoor", "inside the room"]
      },
      {
        value: "皇室",
        kana: ["こうしつ"],
        english: ["Imperial household"]
      },
      {
        value: "会議室",
        kana: ["かいぎしつ"],
        english: ["conference room", "council room"]
      }
    ],
    tags: []
  },
  {
    name: "社",
    on: ["しゃ"],
    kun: ["やしろ"],
    source: "https://en.wiktionary.org/wiki/%E7%A4%BE#Kanji",
    meanings: ["company", "fire", "office", "association"],
    grade: 2,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "会社",
        kana: ["かいしゃ"],
        english: ["company", "corporation", "workplace"]
      },
      {
        value: "社会",
        kana: ["しゃかい"],
        english: ["society, public"]
      },
      {
        value: "社会党",
        kana: ["しゃかいとう"],
        english: ["Socialist Party"]
      },
      {
        value: "社長",
        kana: ["しゃちょう"],
        english: ["company president", "manager", "director"]
      },
      {
        value: "同社",
        kana: ["どうしゃ"],
        english: ["the same firm"]
      }
    ],
    tags: []
  },
  {
    name: "弱",
    on: ["じゃく"],
    kun: ["よわい", "よわる", "よわまる"],
    source: "https://en.wiktionary.org/wiki/%E5%BC%B1#Kanji",
    meanings: ["weak", "frail"],
    grade: 2,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "弱点",
        kana: ["じゃくてん"],
        english: ["weak point", "weakness"]
      },
      {
        value: "弱者",
        kana: ["じゃくしゃ"],
        english: ["weak person"]
      },
      {
        value: "弱体",
        kana: ["じゃくたい"],
        english: ["weak (organisation)"]
      },
      {
        value: "弱み",
        kana: ["よわみ"],
        english: ["weakness"]
      },
      {
        value: "弱気",
        kana: ["よわき"],
        english: ["timid", "faint hearted"]
      }
    ],
    tags: []
  },
  {
    name: "首",
    on: ["しゅ"],
    kun: ["くび"],
    source: "https://en.wiktionary.org/wiki/%E9%A6%96#Kanji",
    meanings: ["neck", "counter for songs and poems"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "首",
        kana: ["くび", "クビ"],
        english: ["neck", "head", "unemployed person"]
      },
      {
        value: "首相",
        kana: ["しゅしょう"],
        english: ["Prime Minister", "Chancellor (Germany, Austria)"]
      },
      {
        value: "首脳",
        kana: ["しゅのう"],
        english: ["head", "brains", "leading spirit"]
      },
      {
        value: "首都",
        kana: ["しゅと"],
        english: ["capital city", "metropolis"]
      },
      {
        value: "党首",
        kana: ["とうしゅ"],
        english: ["party leader"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "秋",
    on: ["しゅう"],
    kun: ["あき"],
    source: "https://en.wiktionary.org/wiki/%E7%A7%8B#Kanji",
    meanings: ["autumn"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "秋",
        kana: ["あき"],
        english: ["autumn", "fall"]
      },
      {
        value: "今秋",
        kana: ["こんしゅう"],
        english: ["this (next, last) autumn (fall)"]
      },
      {
        value: "昨秋",
        kana: ["さくしゅう"],
        english: ["autumn of last year", "fall of last year"]
      },
      {
        value: "春秋",
        kana: ["しゅんじゅう", "はるあき"],
        english: ["spring and autumn", "spring and fall"]
      },
      {
        value: "千秋楽",
        kana: ["せんしゅうらく"],
        english: ["concluding festivities"]
      }
    ],
    tags: ["season"]
  },
  {
    name: "週",
    on: ["しゅう"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E9%80%B1#Kanji",
    meanings: ["week"],
    grade: 2,
    jlpt: 4,
    strokes: 10,
    examples: [
      {
        value: "週",
        kana: ["しゅう"],
        english: ["week"]
      },
      {
        value: "週刊",
        kana: ["しゅうかん"],
        english: ["published weekly"]
      },
      {
        value: "一週間",
        kana: ["いっしゅうかん"],
        english: ["one week"]
      },
      {
        value: "今週",
        kana: ["こんしゅう"],
        english: ["this week"]
      },
      {
        value: "先週",
        kana: ["せんしゅう"],
        english: ["last week", "the week before"]
      }
    ],
    tags: []
  },
  {
    name: "春",
    on: ["しゅん"],
    kun: ["はる"],
    source: "https://en.wiktionary.org/wiki/%E6%98%A5#Kanji",
    meanings: ["spring (season)"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "春",
        kana: ["はる"],
        english: ["spring", "springtime", "new year"]
      },
      {
        value: "今春",
        kana: ["こんしゅん"],
        english: ["this spring", "spring this year"]
      },
      {
        value: "春闘",
        kana: ["しゅんとう"],
        english: ["spring offensive (Japanese unions)"]
      },
      {
        value: "来春",
        kana: ["らいしゅん", "らいはる"],
        english: ["next spring"]
      },
      {
        value: "青春",
        kana: ["せいしゅん"],
        english: ["youth", "springtime of life", "adolescent"]
      }
    ],
    tags: ["season"]
  },
  {
    name: "書",
    on: ["しょ"],
    kun: ["かく"],
    source: "https://en.wiktionary.org/wiki/%E6%9B%B8#Kanji",
    meanings: ["write"],
    grade: 2,
    jlpt: 4,
    strokes: 10,
    examples: [
      {
        value: "書記",
        kana: ["きた"],
        english: ["clerk", "secretary"]
      },
      {
        value: "秘書",
        kana: ["ほっかいどう"],
        english: ["private secretary"]
      },
      {
        value: "報告書",
        kana: ["ぺきん"],
        english: ["written report"]
      },
      {
        value: "文書",
        kana: ["きたちょうせん"],
        english: ["document", "writing", "letter", "paperwork"]
      },
      {
        value: "教科書",
        kana: ["とうほく", "ひがしきた"],
        english: ["textbook"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "少",
    on: ["しょう"],
    kun: ["すくない", "すこし"],
    source: "https://en.wiktionary.org/wiki/%E5%B0%91#Kanji",
    meanings: ["few", "little"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "少し",
        kana: ["すこし"],
        english: ["small quantity", "little", "few, something"]
      },
      {
        value: "少なくとも",
        kana: ["すくなくとも"],
        english: ["at least"]
      },
      {
        value: "少年",
        kana: ["しょうねん"],
        english: ["boys, juveniles"]
      },
      {
        value: "減少",
        kana: ["げんしょう"],
        english: ["decrease, reduction, decline"]
      },
      {
        value: "少数",
        kana: ["しょうすう"],
        english: ["minority, few"]
      }
    ],
    tags: []
  },
  {
    name: "場",
    on: ["じょう"],
    kun: ["ば"],
    source: "https://en.wiktionary.org/wiki/%E5%A0%B4#Kanji",
    meanings: ["location", "place"],
    grade: 2,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "現場",
        kana: ["げんば", "げんじょう"],
        english: ["actual spot", "scene", "scene of the crime"]
      },
      {
        value: "市場",
        kana: ["いちば"],
        english: ["(town) market", "(the) marketplace"]
      },
      {
        value: "場所",
        kana: ["ばしょ"],
        english: ["place", "location"]
      },
      {
        value: "立場",
        kana: ["たちば"],
        english: ["standpoint", "position", "situation"]
      },
      {
        value: "工場",
        kana: ["こうじょう", "こうば"],
        english: ["factory", "plant", "mill", "workshop"]
      }
    ],
    tags: []
  },
  {
    name: "色",
    on: ["しょく", "しき"],
    kun: ["いろ"],
    source: "https://en.wiktionary.org/wiki/%E8%89%B2#Kanji",
    meanings: ["colour"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "色",
        kana: ["いろ"],
        english: ["colour", "complexion", "appearance, look"]
      },
      {
        value: "色彩",
        kana: ["しきさい"],
        english: ["colour", "hue", "tints"]
      },
      {
        value: "特色",
        kana: ["とくしょく"],
        english: ["characteristic", "feature", "idiosyncrasy"]
      },
      {
        value: "難色",
        kana: ["なんしょく"],
        english: ["disapproval"]
      },
      {
        value: "黄色",
        kana: ["きいろ", "こうしょく", "おうしょく"],
        english: ["yellow", "amber"]
      }
    ],
    tags: []
  },
  {
    name: "食",
    on: ["しょく"],
    kun: ["たべる"],
    source: "https://en.wiktionary.org/wiki/%E9%A3%9F#Kanji",
    meanings: ["eat", "food"],
    grade: 2,
    jlpt: 4,
    strokes: 9,
    examples: [
      {
        value: "食",
        kana: ["しょく"],
        english: ["meal", "food"]
      },
      {
        value: "食事",
        kana: ["しょくじ"],
        english: ["meal to eat"]
      },
      {
        value: "食品",
        kana: ["しょくひん"],
        english: ["commodity", "foodstuff"]
      },
      {
        value: "食料",
        kana: ["しょくりょう"],
        english: ["food"]
      },
      {
        value: "食糧",
        kana: ["しょくりょう"],
        english: ["provisions", "rations", "food supply"]
      }
    ],
    tags: ["verb", "food"]
  },
  {
    name: "心",
    on: ["しん"],
    kun: ["こころ"],
    source: "https://en.wiktionary.org/wiki/%E5%BF%83#Kanji",
    meanings: ["heart", "mind", "spirit", "heart radical"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "関心",
        kana: ["かんしん"],
        english: ["concern", "interest"]
      },
      {
        value: "中心",
        kana: ["ちゅうしん"],
        english: ["centre", "middle", "heart", "core", "focus"]
      },
      {
        value: "心不全",
        kana: ["しんふぜん"],
        english: ["heart failure"]
      },
      {
        value: "心から",
        kana: ["しんから", "こころから"],
        english: ["from the bottom of one’s heart"]
      },
      {
        value: "心臓",
        kana: ["しんぞう"],
        english: ["heart"]
      }
    ],
    tags: []
  },
  {
    name: "新",
    on: ["しん"],
    kun: ["あたらしい"],
    source: "https://en.wiktionary.org/wiki/%E6%96%B0#Kanji",
    meanings: ["new"],
    grade: 2,
    jlpt: 4,
    strokes: 13,
    examples: [
      {
        value: "新た",
        kana: ["あらた"],
        english: ["new", "fresh", "novel", "newly", "freshly"]
      },
      {
        value: "新党",
        kana: ["しんとう"],
        english: ["new (political) party"]
      },
      {
        value: "新聞",
        kana: ["しんぶん"],
        english: ["newspaper"]
      },
      {
        value: "新人",
        kana: ["しんじん"],
        english: ["new face", "newcomer"]
      },
      {
        value: "新生",
        kana: ["しんせい"],
        english: ["rebirth", "new birth", "nascent"]
      }
    ],
    tags: ["adjective"]
  },
  {
    name: "親",
    on: ["しん"],
    kun: ["おや", "したしい", "したしむ"],
    source: "https://en.wiktionary.org/wiki/%E8%A6%AA#Kanji",
    meanings: ["parent", "intimacy", "relative", "familiarity"],
    grade: 2,
    jlpt: 3,
    strokes: 16,
    examples: [
      {
        value: "親",
        kana: ["おや"],
        english: ["parent", "dealer (in cards)", "founder"]
      },
      {
        value: "父親",
        kana: ["ちちおや"],
        english: ["father"]
      },
      {
        value: "母親",
        kana: ["ははおや"],
        english: ["mother"]
      },
      {
        value: "両親",
        kana: ["りょうしん", "ふたおや"],
        english: ["parents, both parents"]
      },
      {
        value: "親子",
        kana: ["おやこ", "しんし"],
        english: ["parent and child"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "図",
    on: ["ず", "と"],
    kun: ["はかる"],
    source: "https://en.wiktionary.org/wiki/%E5%9B%B3#Kanji",
    meanings: ["map", "drawing"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "図",
        kana: ["ず"],
        english: ["figure (e.g. Fig 1)", "drawing", "picture"]
      },
      {
        value: "意図",
        kana: ["いと"],
        english: ["intention", "aim", "design"]
      },
      {
        value: "構図",
        kana: ["こうず"],
        english: ["composition"]
      },
      {
        value: "図書館",
        kana: ["としょかん", "ずしょかん"],
        english: ["library"]
      },
      {
        value: "地図",
        kana: ["ちず"],
        english: ["map"]
      }
    ],
    tags: []
  },
  {
    name: "数",
    on: ["す", "すう"],
    kun: ["かぞえる"],
    source: "https://en.wiktionary.org/wiki/%E6%95%B0#Kanji",
    meanings: ["number", "strength", "fate", "law", "figures"],
    grade: 2,
    jlpt: 2,
    strokes: 13,
    examples: [
      {
        value: "数",
        kana: ["かず"],
        english: ["number", "amount"]
      },
      {
        value: "数字",
        kana: ["すうじ"],
        english: ["numeral", "figure", "digit", "numeric character"]
      },
      {
        value: "多数",
        kana: ["たすう"],
        english: ["great number", "countless", "majority"]
      },
      {
        value: "定数",
        kana: ["ていすう"],
        english: ["constant", "literal"]
      },
      {
        value: "少数",
        kana: ["しょうすう"],
        english: ["minority", "few"]
      }
    ],
    tags: []
  },
  {
    name: "星",
    on: ["せい", "しょう"],
    kun: ["ほし"],
    source: "https://en.wiktionary.org/wiki/%E6%98%9F#Kanji",
    meanings: ["star", "spot", "dot", "mark"],
    grade: 2,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "星",
        kana: ["ほし"],
        english: ["star"]
      },
      {
        value: "衛星",
        kana: ["えいせい"],
        english: ["satellite"]
      },
      {
        value: "通信衛星",
        kana: ["つうしんえいせい"],
        english: ["communication satellite"]
      },
      {
        value: "木星",
        kana: ["もくせい"],
        english: ["Jupiter (planet)"]
      },
      {
        value: "惑星",
        kana: ["わくせい"],
        english: ["planet"]
      }
    ],
    tags: []
  },
  {
    name: "晴",
    on: ["せい"],
    kun: ["はれる", "はれ"],
    source: "https://en.wiktionary.org/wiki/%E6%99%B4#Kanji",
    meanings: ["clear"],
    grade: 2,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "晴れ",
        kana: ["はれ"],
        english: ["clear weather", "public", "formal"]
      },
      {
        value: "素晴らしい",
        kana: ["すばらしい", "すんばらしい"],
        english: ["wonderful", "splendid", "magnificent"]
      },
      {
        value: "晴れる",
        kana: ["はれる"],
        english: ["to clear up", "to clear away", "to be sunny"]
      },
      {
        value: "快晴",
        kana: ["かいせい"],
        english: ["good weather"]
      },
      {
        value: "晴天",
        kana: ["せいてん"],
        english: ["fine weather"]
      }
    ],
    tags: ["weather"]
  },
  {
    name: "声",
    on: ["しょう", "せい"],
    kun: ["こえ"],
    source: "https://en.wiktionary.org/wiki/%E5%A3%B0#Kanji",
    meanings: ["voice"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "声",
        kana: ["こえ"],
        english: ["voice"]
      },
      {
        value: "声明",
        kana: ["せいめい"],
        english: ["declaration", "statement", "proclamation"]
      },
      {
        value: "音声",
        kana: ["おんせい", "おんじょう"],
        english: ["voice", "(the concept of) sound"]
      },
      {
        value: "歓声",
        kana: ["かんせい"],
        english: ["cheer", "shout of joy"]
      },
      {
        value: "声援",
        kana: ["せいえん"],
        english: ["encouragement", "cheering", "support"]
      }
    ],
    tags: []
  },
  {
    name: "西",
    on: ["せい"],
    kun: ["にし"],
    source: "https://en.wiktionary.org/wiki/%E8%A5%BF#Kanji",
    meanings: ["west", "Spain"],
    grade: 2,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "西",
        kana: ["にし"],
        english: ["west"]
      },
      {
        value: "関西",
        kana: ["かんさい", "かんせい"],
        english: ["Kansai"]
      },
      {
        value: "西側",
        kana: ["にしがわ"],
        english: ["west side", "west bank"]
      },
      {
        value: "東西",
        kana: ["とうざい"],
        english: ["East and West"]
      },
      {
        value: "西欧",
        kana: ["せいおう"],
        english: ["Western Europe"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "切",
    on: ["せつ", "せつ"],
    kun: ["きる", "きれる"],
    source: "https://en.wiktionary.org/wiki/%E5%88%87#Kanji",
    meanings: ["cut"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "大切",
        kana: ["たいせつ"],
        english: ["important", "valuable", "worthy of care"]
      },
      {
        value: "切っ掛け",
        kana: ["きっかけ"],
        english: ["chance", "start", "cue", "excuse", "motive", "impetus"]
      },
      {
        value: "一切",
        kana: ["いっさい"],
        english: ["all", "everything", "without exception", "the whole"]
      },
      {
        value: "適切",
        kana: ["てきせつ"],
        english: ["pertinent", "appropriate", "adequate", "relevance"]
      },
      {
        value: "切り",
        kana: ["きり"],
        english: ["limits", "end", "bounds", "period"]
      }
    ],
    tags: []
  },
  {
    name: "雪",
    on: ["せつ"],
    kun: ["ゆき"],
    source: "https://en.wiktionary.org/wiki/%E9%9B%AA#Kanji",
    meanings: ["snow"],
    grade: 2,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "雪",
        kana: ["ゆき"],
        english: ["snow"]
      },
      {
        value: "雪辱",
        kana: ["せつじょく"],
        english: ["vindication of honour"]
      },
      {
        value: "積雪",
        kana: ["せきせつ"],
        english: ["fallen snow"]
      },
      {
        value: "大雪",
        kana: ["おおゆき", "たいせつ"],
        english: ["heavy snow"]
      },
      {
        value: "吹雪",
        kana: ["ふぶき"],
        english: ["snow storm", "blizzard"]
      }
    ],
    tags: ["weather"]
  },
  {
    name: "線",
    on: ["せん"],
    kun: ["いと"],
    source: "https://en.wiktionary.org/wiki/%E7%B7%9A#Kanji",
    meanings: ["line", "track"],
    grade: 2,
    jlpt: 2,
    strokes: 15,
    examples: [
      {
        value: "線",
        kana: ["せん"],
        english: ["line (also telephone, railway)", "wire", "beam"]
      },
      {
        value: "路線",
        kana: ["ろせん"],
        english: ["route, line", "alignment"]
      },
      {
        value: "新幹線",
        kana: ["しんかんせん"],
        english: ["bullet train (very high speed)", "Shinkansen"]
      },
      {
        value: "打線",
        kana: ["だせん"],
        english: ["baseball lineup"]
      },
      {
        value: "戦線",
        kana: ["せんせん"],
        english: ["war front"]
      }
    ],
    tags: []
  },
  {
    name: "船",
    on: ["せん"],
    kun: ["ふな", "ふね"],
    source: "https://en.wiktionary.org/wiki/%E8%88%B9#Kanji",
    meanings: ["ship", "boat"],
    grade: 2,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "船",
        kana: ["ふね"],
        english: ["ship", "boat", "watercraft", "vessel", "steamship"]
      },
      {
        value: "漁船",
        kana: ["ぎょせん"],
        english: ["fishing boat"]
      },
      {
        value: "船長",
        kana: ["せんちょう"],
        english: ["ship’s captain"]
      },
      {
        value: "船舶",
        kana: ["せんぱく"],
        english: ["ship"]
      },
      {
        value: "造船",
        kana: ["ぞうせん"],
        english: ["shipbuilding"]
      }
    ],
    tags: []
  },
  {
    name: "前",
    on: ["ぜん"],
    kun: ["まえ"],
    source: "https://en.wiktionary.org/wiki/%E5%89%8D#Kanji",
    meanings: ["before", "in-front"],
    grade: 2,
    jlpt: 4,
    strokes: 9,
    examples: [
      {
        value: "午前",
        kana: ["ごぜん"],
        english: ["morning", "A.M"]
      },
      {
        value: "前年",
        kana: ["ぜんねん"],
        english: ["the previous year"]
      },
      {
        value: "前回",
        kana: ["ぜんかい"],
        english: ["last time"]
      },
      {
        value: "前提",
        kana: ["ぜんてい"],
        english: ["preamble", "premise", "reason"]
      },
      {
        value: "前日",
        kana: ["ぜんじつ", "まえび"],
        english: ["previous day"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "組",
    on: ["そ"],
    kun: ["くみ"],
    source: "https://en.wiktionary.org/wiki/%E7%B5%84#Kanji",
    meanings: ["team", "association", "braid", "plait", "construct", "unite", "cooperate", "grapple"],
    grade: 2,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "組",
        kana: ["くみ"],
        english: ["set (of items)", "group (of people)"]
      },
      {
        value: "組織",
        kana: ["そしき"],
        english: ["organisation", "structure"]
      },
      {
        value: "番組",
        kana: ["ばんぐみ"],
        english: ["program (e.g. TV)", "programme"]
      },
      {
        value: "組合",
        kana: ["くみあい"],
        english: ["association", "union"]
      },
      {
        value: "労組",
        kana: ["ろうそ", "ろうくみ"],
        english: ["labour union"]
      }
    ],
    tags: []
  },
  {
    name: "走",
    on: ["そう"],
    kun: ["はしる"],
    source: "https://en.wiktionary.org/wiki/%E8%B5%B0#Kanji",
    meanings: ["run"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "走り",
        kana: ["はしり"],
        english: ["the first (harvest)"]
      },
      {
        value: "走る",
        kana: ["はしる"],
        english: ["to run", "to travel (movement of vehicles)"]
      },
      {
        value: "走者",
        kana: ["そうしゃ"],
        english: ["runner"]
      },
      {
        value: "走行",
        kana: ["そうこう"],
        english: ["running a wheeled vehicle (e.g. car)"]
      },
      {
        value: "滑走",
        kana: ["かっそう"],
        english: ["glide", "volplane"]
      }
    ],
    tags: []
  },
  {
    name: "多",
    on: ["た"],
    kun: ["おおい"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%9A#Kanji",
    meanings: ["many", "frequent", "much"],
    grade: 2,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "多数",
        kana: ["たすう"],
        english: ["great number", "countless", "majority"]
      },
      {
        value: "多様",
        kana: ["たよう"],
        english: ["diverse", "varied"]
      },
      {
        value: "多角",
        kana: ["たかく"],
        english: ["many sided", "versatile", "polygonal", "diversified"]
      },
      {
        value: "最多",
        kana: ["さいた"],
        english: ["the most"]
      },
      {
        value: "多額",
        kana: ["たがく"],
        english: ["large amount of money"]
      }
    ],
    tags: []
  },
  {
    name: "太",
    on: ["た", "たい"],
    kun: ["ふとい", "ふとる"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%AA#Kanji",
    meanings: ["plump", "thick", "big around"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "太平洋",
        kana: ["たいへいよう"],
        english: ["Pacific Ocean"]
      },
      {
        value: "皇太子",
        kana: ["こうたいし"],
        english: ["crown prince"]
      },
      {
        value: "太陽",
        kana: ["たいよう"],
        english: ["sun", "solar"]
      },
      {
        value: "太平洋戦争",
        kana: ["たいへいようせんそう"],
        english: ["the Pacific War"]
      },
      {
        value: "太鼓",
        kana: ["たいこ"],
        english: ["drum"]
      }
    ],
    tags: []
  },
  {
    name: "体",
    on: ["たい"],
    kun: ["からだ"],
    source: "https://en.wiktionary.org/wiki/%E4%BD%93#Kanji",
    meanings: ["body", "substance", "object"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "体",
        kana: ["からだ", "しんたい"],
        english: ["body", "health"]
      },
      {
        value: "具体的",
        kana: ["ぐたいてき"],
        english: ["concrete", "tangible", "definite", "specific"]
      },
      {
        value: "全体",
        kana: ["ぜんたい"],
        english: ["whole", "entirety", "whatever (is the matter)"]
      },
      {
        value: "体制",
        kana: ["たいせい"],
        english: ["order", "system", "structure"]
      },
      {
        value: "団体",
        kana: ["だんたい"],
        english: ["organization", "organisation", "association"]
      }
    ],
    tags: []
  },
  {
    name: "台",
    on: ["だい", "たい"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E5%8F%B0#Kanji",
    meanings: ["pedestal", "a stand", "counter for machines and vehicles"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "台",
        kana: ["だい"],
        english: ["stand", "rack", "table", "support", "belt"]
      },
      {
        value: "台湾",
        kana: ["たいわん"],
        english: ["Taiwan"]
      },
      {
        value: "舞台",
        kana: ["ぶたい"],
        english: ["stage (theatre, theater)"]
      },
      {
        value: "台風",
        kana: ["たいふう"],
        english: ["typhoon, hurricane"]
      },
      {
        value: "台所",
        kana: ["だいどころ", "だいどこ"],
        english: ["kitchen"]
      }
    ],
    tags: []
  },
  {
    name: "谷",
    on: ["こく"],
    kun: ["たに"],
    source: "https://en.wiktionary.org/wiki/%E8%B0%B7#Kanji",
    meanings: ["valley"],
    grade: 2,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "谷",
        kana: ["たに"],
        english: ["valley"]
      },
      {
        value: "谷川",
        kana: ["たにがわ"],
        english: ["mountain stream"]
      },
      {
        value: "谷間",
        kana: ["たにま", "たにあい"],
        english: ["valley", "ravine", "chasm", "dell", "cleavage"]
      },
      {
        value: "渓谷",
        kana: ["けいこく"],
        english: ["valley", "ravine", "canyon"]
      },
      {
        value: "峡谷",
        kana: ["きょうこく"],
        english: ["glen", "ravine", "gorge", "canyon"]
      }
    ],
    tags: []
  },
  {
    name: "知",
    on: ["ち"],
    kun: ["しる"],
    source: "https://en.wiktionary.org/wiki/%E7%9F%A5#Kanji",
    meanings: ["know", "wisdom"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "知る",
        kana: ["しる"],
        english: ["to know", "to understand", "to be acquainted with"]
      },
      {
        value: "知事",
        kana: ["ちじ"],
        english: ["prefectural governor"]
      },
      {
        value: "知らん顔",
        kana: ["しらんかお"],
        english: ["unconcerned air", "indifference"]
      },
      {
        value: "県知事",
        kana: ["けんちじ"],
        english: ["prefectural governor"]
      },
      {
        value: "知識",
        kana: ["ちしき"],
        english: ["knowledge", "information"]
      }
    ],
    tags: []
  },
  {
    name: "地",
    on: ["じ", "ち"],
    kun: ["つち"],
    source: "https://en.wiktionary.org/wiki/%E5%9C%B0#Kanji",
    meanings: ["ground", "earth"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "地",
        kana: ["ち"],
        english: ["earth", "ground", "land", "soil", "territory"]
      },
      {
        value: "現地",
        kana: ["げんち"],
        english: ["actual place", "local"]
      },
      {
        value: "地域",
        kana: ["ちいき"],
        english: ["area", "region"]
      },
      {
        value: "地球",
        kana: ["ちきゅう"],
        english: ["the earth"]
      },
      {
        value: "地区",
        kana: ["ちく"],
        english: ["district", "section", "sector"]
      }
    ],
    tags: []
  },
  {
    name: "池",
    on: ["ち"],
    kun: ["いけ"],
    source: "https://en.wiktionary.org/wiki/%E6%B1%A0#Kanji",
    meanings: ["pond", "cistern", "pool", "reservoir"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "池",
        kana: ["いけ"],
        english: ["pond"]
      },
      {
        value: "電池",
        kana: ["でんち"],
        english: ["battery"]
      },
      {
        value: "太陽電池",
        kana: ["たいようでんち"],
        english: ["solar battery"]
      },
      {
        value: "乾電池",
        kana: ["かんでんち"],
        english: ["dry cell", "battery"]
      },
      {
        value: "貯水池",
        kana: ["ちょすいち"],
        english: ["reservoir"]
      }
    ],
    tags: []
  },
  {
    name: "茶",
    on: ["ちゃ", "さ"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E8%8C%B6#Kanji",
    meanings: ["tea"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "茶",
        kana: ["ちゃ"],
        english: ["tea", "tea plant"]
      },
      {
        value: "お茶",
        kana: ["おちゃ"],
        english: ["tea", "tea break"]
      },
      {
        value: "喫茶店",
        kana: ["きっさてん"],
        english: ["coffee lounge", "coffee shop"]
      },
      {
        value: "紅茶",
        kana: ["こうちゃ"],
        english: ["black tea"]
      },
      {
        value: "茶色",
        kana: ["ちゃいろ"],
        english: ["light brown", "tawny"]
      }
    ],
    tags: []
  },
  {
    name: "昼",
    on: ["ちゅう"],
    kun: ["ひる"],
    source: "https://en.wiktionary.org/wiki/%E6%98%BC#Kanji",
    meanings: ["daytime", "noon"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "昼",
        kana: ["ひる"],
        english: ["noon", "midday", "daytime", "lunch"]
      },
      {
        value: "昼食",
        kana: ["ちゅうしょく", "ちゅうじき", "ひるげ"],
        english: ["lunch", "midday meal"]
      },
      {
        value: "昼間",
        kana: ["ひるま", "ちゅうかん"],
        english: ["daytime", "during the day"]
      },
      {
        value: "昼過ぎ",
        kana: ["ひるすぎ"],
        english: ["afternoon"]
      },
      {
        value: "昼夜",
        kana: ["ちゅうや"],
        english: ["day and night"]
      }
    ],
    tags: []
  },
  {
    name: "朝",
    on: ["ちょう"],
    kun: ["あさ"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%9D#Kanji",
    meanings: ["morning", "dynasty", "regime", "epoch", "period", "(North) Korea"],
    grade: 2,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "朝",
        kana: ["あさ", "あした"],
        english: ["morning"]
      },
      {
        value: "北朝鮮",
        kana: ["きたちょうせん"],
        english: ["North Korea"]
      },
      {
        value: "朝鮮",
        kana: ["ちょうせん"],
        english: ["Korea"]
      },
      {
        value: "朝鮮民主主義人民共和国",
        kana: ["ちょうせんみんしゅしゅぎじんみんきょうわこく"],
        english: ["Democratic People’s Republic of Korea (North Korea), DPRK"]
      },
      {
        value: "朝鮮半島",
        kana: ["ちょうせんはんとう"],
        english: ["Korean peninsula"]
      }
    ],
    tags: []
  },
  {
    name: "長",
    on: ["ちょう"],
    kun: ["ながい"],
    source: "https://en.wiktionary.org/wiki/%E9%95%B7#Kanji",
    meanings: ["long", "leader"],
    grade: 2,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "長",
        kana: ["ちょう", "おさ"],
        english: ["chief", "head"]
      },
      {
        value: "委員長",
        kana: ["いいんちょう"],
        english: ["committee chairman"]
      },
      {
        value: "会長",
        kana: ["かいちょう"],
        english: ["president (of a society), chairman"]
      },
      {
        value: "議長",
        kana: ["ぎちょう"],
        english: ["chairman", "speaker"]
      },
      {
        value: "社長",
        kana: ["しゃちょう"],
        english: ["company president", "manager", "director"]
      }
    ],
    tags: []
  },
  {
    name: "鳥",
    on: ["ちょう"],
    kun: ["とり"],
    source: "https://en.wiktionary.org/wiki/%E9%B3%A5#Kanji",
    meanings: ["bird", "chicken"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "鳥",
        kana: ["とり"],
        english: ["bird meat", "fowl"]
      },
      {
        value: "野鳥",
        kana: ["やちょう"],
        english: ["wild bird"]
      },
      {
        value: "鳥類",
        kana: ["ちょうるい"],
        english: ["birds"]
      },
      {
        value: "白鳥",
        kana: ["はくちょう", "しろとり", "しらとり"],
        english: ["swan"]
      },
      {
        value: "渡り鳥",
        kana: ["わたりどり"],
        english: ["migratory bird", "bird of passage"]
      }
    ],
    tags: ["animal"]
  },
  {
    name: "直",
    on: ["じき", "ちょく"],
    kun: ["ただちに", "なおす"],
    source: "https://en.wiktionary.org/wiki/%E7%9B%B4#Kanji",
    meanings: ["straightaway", "honesty", "frankness", "fix", "repair"],
    grade: 2,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "直",
        kana: ["じき"],
        english: ["soon", "in a moment", "before long", "shortly"]
      },
      {
        value: "直ちに",
        kana: ["ただちに"],
        english: ["at once", "immediately", "directly", "in person"]
      },
      {
        value: "見直し",
        kana: ["みなおし"],
        english: ["review", "reconsideration", "revision"]
      },
      {
        value: "直後",
        kana: ["ちょくご"],
        english: ["immediately following"]
      },
      {
        value: "直接",
        kana: ["ちょくせつ"],
        english: ["direct", "immediate", "personal", "firsthand"]
      }
    ],
    tags: []
  },
  {
    name: "通",
    on: ["つう"],
    kun: ["とおる", "かよう"],
    source: "https://en.wiktionary.org/wiki/%E9%80%9A#Kanji",
    meanings: ["pass-through", "commute", "traffic", "documents", "notes"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "通り",
        kana: ["どおり"],
        english: ["in accordance with...", "following..."]
      },
      {
        value: "通信",
        kana: ["つうしん"],
        english: ["correspondence", "communication", "transmission"]
      },
      {
        value: "見通し",
        kana: ["みとおし"],
        english: ["perspective", "unobstructed view", "outlook"]
      },
      {
        value: "共通",
        kana: ["きょうつう"],
        english: ["commonness", "community"]
      },
      {
        value: "交通",
        kana: ["こうつう"],
        english: ["communication", "transportation", "traffic"]
      }
    ],
    tags: []
  },
  {
    name: "弟",
    on: ["だい", "てい"],
    kun: ["おとうと"],
    source: "https://en.wiktionary.org/wiki/%E5%BC%9F#Kanji",
    meanings: ["younger brother"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "弟",
        kana: ["おとうと", "おと", "おとと", "てい"],
        english: ["younger brother", "pupil", "apprentice"]
      },
      {
        value: "兄弟",
        kana: ["きょうだい", "けいてい"],
        english: ["siblings", "brothers and sisters"]
      },
      {
        value: "弟子",
        kana: ["でし", "ていし"],
        english: ["pupil", "disciple", "adherent", "follower"]
      },
      {
        value: "実弟",
        kana: ["じってい"],
        english: ["one’s (biological) younger brother"]
      },
      {
        value: "子弟",
        kana: ["してい"],
        english: ["young(er) people"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "店",
    on: ["てん"],
    kun: ["みせ"],
    source: "https://en.wiktionary.org/wiki/%E5%BA%97#Kanji",
    meanings: ["store", "shop"],
    grade: 2,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "支店",
        kana: ["してん"],
        english: ["branch store (office)"]
      },
      {
        value: "百貨店",
        kana: ["ひゃっかてん"],
        english: ["(department) store(s)"]
      },
      {
        value: "書店",
        kana: ["しょてん"],
        english: ["bookshop, bookstore"]
      },
      {
        value: "店舗",
        kana: ["てんぽ"],
        english: ["shop", "store"]
      },
      {
        value: "商店",
        kana: ["しょうてん"],
        english: ["shop", "small store", "business", "firm"]
      }
    ],
    tags: []
  },
  {
    name: "点",
    on: ["てん"],
    kun: ["ぼち"],
    source: "https://en.wiktionary.org/wiki/%E7%82%B9#Kanji",
    meanings: ["point", "spot", "mark", "speck", "decimal point"],
    grade: 2,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "点",
        kana: ["てん"],
        english: ["spot", "mark", "point", "dot", "mark (e.g. in exam)"]
      },
      {
        value: "焦点",
        kana: ["しょうてん"],
        english: ["focus (e.g. photographic)", "focal point"]
      },
      {
        value: "拠点",
        kana: ["きょてん"],
        english: ["position", "location", "base", "point"]
      },
      {
        value: "時点",
        kana: ["じてん"],
        english: ["point in time", "occasion"]
      },
      {
        value: "得点",
        kana: ["とくてん"],
        english: ["score", "points made", "marks obtained", "runs"]
      }
    ],
    tags: []
  },
  {
    name: "電",
    on: ["でん"],
    kun: ["いなずま"],
    source: "https://en.wiktionary.org/wiki/%E9%9B%BB#Kanji",
    meanings: ["electricity"],
    grade: 2,
    jlpt: 4,
    strokes: 13,
    examples: [
      {
        value: "電話",
        kana: ["でんわ"],
        english: ["telephone"]
      },
      {
        value: "電気",
        kana: ["でんき"],
        english: ["electricity", "electric light"]
      },
      {
        value: "電力",
        kana: ["でんりょく"],
        english: ["electric power"]
      },
      {
        value: "電子",
        kana: ["でんし"],
        english: ["electron", "electronic"]
      },
      {
        value: "電車",
        kana: ["でんしゃ"],
        english: ["electric train"]
      }
    ],
    tags: []
  },
  {
    name: "冬",
    on: ["とう"],
    kun: ["ふゆ"],
    source: "https://en.wiktionary.org/wiki/%E5%86%AC#Kanji",
    meanings: ["winter"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "冬",
        kana: ["ふゆ"],
        english: ["winter"]
      },
      {
        value: "冬季",
        kana: ["とうき"],
        english: ["season of winter"]
      },
      {
        value: "暖冬",
        kana: ["だんとう"],
        english: ["mild winter", "warm winter"]
      },
      {
        value: "冬場",
        kana: ["ふゆば"],
        english: ["the winter season"]
      },
      {
        value: "越冬",
        kana: ["えっとう"],
        english: ["passing the winter"]
      }
    ],
    tags: []
  },
  {
    name: "刀",
    on: ["とう"],
    kun: ["かたな"],
    source: "https://en.wiktionary.org/wiki/%E5%88%80#Kanji",
    meanings: ["sword", "saber", "knife"],
    grade: 2,
    jlpt: 1,
    strokes: 2,
    examples: [
      {
        value: "刀",
        kana: ["かたな", "とう"],
        english: ["single edged sword", "katana", "dagger", "knife"]
      },
      {
        value: "太刀打ち",
        kana: ["たちうち"],
        english: ["crossing swords", "opposition", "contention"]
      },
      {
        value: "宝刀",
        kana: ["ほうとう"],
        english: ["treasured sword"]
      },
      {
        value: "日本刀",
        kana: ["にほんとう"],
        english: ["Japanese sword"]
      },
      {
        value: "刀剣",
        kana: ["とうけん"],
        english: ["swords", "cold steel"]
      }
    ],
    tags: []
  },
  {
    name: "東",
    on: ["とう"],
    kun: ["ひがし", "あずま"],
    source: "https://en.wiktionary.org/wiki/%E6%9D%B1#Kanji",
    meanings: ["east"],
    grade: 2,
    jlpt: 4,
    strokes: 8,
    examples: [
      {
        value: "東",
        kana: ["ひがし", "ひむかし", "ひんがし"],
        english: ["east"]
      },
      {
        value: "東京",
        kana: ["とうきょう"],
        english: ["Tokyo"]
      },
      {
        value: "中東",
        kana: ["ちゅうとう"],
        english: ["Middle East"]
      },
      {
        value: "東海",
        kana: ["とうかい"],
        english: ["region south of Tokyo"]
      },
      {
        value: "東北",
        kana: ["とうほく", "ひがしきた"],
        english: ["Northeast China"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "当",
    on: ["とう"],
    kun: ["あたる"],
    source: "https://en.wiktionary.org/wiki/%E5%BD%93#Kanji",
    meanings: ["hit", "right", "appropriate", "himself"],
    grade: 2,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "当局",
        kana: ["とうきょく"],
        english: ["authorities", "this office"]
      },
      {
        value: "当時",
        kana: ["とうじ"],
        english: ["at that time", "in those days"]
      },
      {
        value: "当初",
        kana: ["とうしょ"],
        english: ["at first"]
      },
      {
        value: "担当",
        kana: ["たんとう"],
        english: ["(in) charge"]
      },
      {
        value: "当たり",
        kana: ["あたり"],
        english: ["hit", "success", "reaching the mark"]
      }
    ],
    tags: []
  },
  {
    name: "答",
    on: ["とう"],
    kun: ["こたえる", "こたえ"],
    source: "https://en.wiktionary.org/wiki/%E7%AD%94#Kanji",
    meanings: ["answer", "solution"],
    grade: 2,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "答え",
        kana: ["こたえ", "いらえ"],
        english: ["response", "reply", "answer", "solution"]
      },
      {
        value: "回答",
        kana: ["かいとう"],
        english: ["reply", "answer"]
      },
      {
        value: "答申",
        kana: ["とうしん"],
        english: ["report", "reply", "findings"]
      },
      {
        value: "答弁",
        kana: ["とうべん"],
        english: ["response", "reply", "answer", "defence", "defense"]
      },
      {
        value: "応答",
        kana: ["おうとう"],
        english: ["reply", "answer", "response"]
      }
    ],
    tags: []
  },
  {
    name: "頭",
    on: ["ず", "とう", "と"],
    kun: ["あたま", "かしら"],
    source: "https://en.wiktionary.org/wiki/%E9%A0%AD#Kanji",
    meanings: ["head", "counter for large animals"],
    grade: 2,
    jlpt: 3,
    strokes: 16,
    examples: [
      {
        value: "冒頭",
        kana: ["ぼうとう"],
        english: ["beginning", "start", "outset"]
      },
      {
        value: "先頭",
        kana: ["せんとう"],
        english: ["head", "lead", "vanguard", "first"]
      },
      {
        value: "店頭",
        kana: ["てんとう"],
        english: ["shop front", "counter", "shop"]
      },
      {
        value: "頭取",
        kana: ["とうどり"],
        english: ["bank", "president"]
      },
      {
        value: "街頭",
        kana: ["がいとう"],
        english: ["in the street"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "同",
    on: ["どう"],
    kun: ["おなじ"],
    source: "https://en.wiktionary.org/wiki/%E5%90%8C#Kanji",
    meanings: ["same", "agree", "equal"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "同時",
        kana: ["どうじ"],
        english: ["simultaneous(ly)", "concurrent", "same time"]
      },
      {
        value: "同社",
        kana: ["どうしゃ"],
        english: ["the same firm"]
      },
      {
        value: "同日",
        kana: ["どうじつ"],
        english: ["the same day"]
      },
      {
        value: "共同",
        kana: ["きょうどう"],
        english: ["doing together (as equals)", "sharing"]
      },
      {
        value: "同市",
        kana: ["どうし"],
        english: ["same city"]
      }
    ],
    tags: []
  },
  {
    name: "道",
    on: ["どう", "とう"],
    kun: ["みち"],
    source: "https://en.wiktionary.org/wiki/%E9%81%93#Kanji",
    meanings: ["road", "street", "district", "journey", "course"],
    grade: 2,
    jlpt: 4,
    strokes: 11,
    examples: [
      {
        value: "道",
        kana: ["みち"],
        english: ["road", "street", "way", "path", "course", "route", "lane"]
      },
      {
        value: "報道",
        kana: ["ほうどう"],
        english: ["information", "report", "journalism"]
      },
      {
        value: "北海道",
        kana: ["ほっかいどう"],
        english: ["Hokkaido"]
      },
      {
        value: "道路",
        kana: ["どうろ"],
        english: ["road", "highway"]
      },
      {
        value: "鉄道",
        kana: ["てつどう"],
        english: ["railroad"]
      }
    ],
    tags: []
  },
  {
    name: "読",
    on: ["どく"],
    kun: ["よむ"],
    source: "https://en.wiktionary.org/wiki/%E8%AA%AD#Kanji",
    meanings: ["read"],
    grade: 2,
    jlpt: 4,
    strokes: 14,
    examples: [
      {
        value: "読み",
        kana: ["よみ"],
        english: ["reading"]
      },
      {
        value: "読者",
        kana: ["どくしゃ"],
        english: ["reader"]
      },
      {
        value: "読書",
        kana: ["どくしょ", "とくしょ"],
        english: ["reading"]
      },
      {
        value: "読む",
        kana: ["よむ"],
        english: ["to read"]
      },
      {
        value: "積ん読",
        kana: ["つんどく"],
        english: ["buying books and not reading them"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "内",
    on: ["ない", "だい"],
    kun: ["うち"],
    source: "https://en.wiktionary.org/wiki/%E5%86%85#Kanji",
    meanings: ["inside", "within", "between", "among", "house"],
    grade: 2,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "内",
        kana: ["うち"],
        english: ["inside", "within", "while", "among", "amongst"]
      },
      {
        value: "国内",
        kana: ["こくない"],
        english: ["internal", "domestic"]
      },
      {
        value: "市内",
        kana: ["しない"],
        english: ["(within a) city", "local"]
      },
      {
        value: "都内",
        kana: ["とない"],
        english: ["metropolitan area"]
      },
      {
        value: "内閣",
        kana: ["ないかく"],
        english: ["cabinet", "(government) ministry"]
      }
    ],
    tags: []
  },
  {
    name: "南",
    on: ["なん"],
    kun: ["みなみ"],
    source: "https://en.wiktionary.org/wiki/%E5%8D%97#Kanji",
    meanings: ["south"],
    grade: 2,
    jlpt: 4,
    strokes: 9,
    examples: [
      {
        value: "南",
        kana: ["みなみ"],
        english: ["south"]
      },
      {
        value: "南アフリカ",
        kana: ["みなみアフリカ"],
        english: ["South Africa"]
      },
      {
        value: "南北",
        kana: ["なんぼく"],
        english: ["south and north"]
      },
      {
        value: "東南",
        kana: ["とうなん", "ひがしみなみ"],
        english: ["south east"]
      },
      {
        value: "南部",
        kana: ["なんぶ"],
        english: ["southern part"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "肉",
    on: ["にく"],
    kun: ["しし"],
    source: "https://en.wiktionary.org/wiki/%E8%82%89#Kanji",
    meanings: ["meat"],
    grade: 2,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "肉",
        kana: ["にく", "しし"],
        english: ["flesh", "meat"]
      },
      {
        value: "牛肉",
        kana: ["ぎゅうにく"],
        english: ["beef"]
      },
      {
        value: "筋肉",
        kana: ["きんにく"],
        english: ["muscle", "sinew"]
      },
      {
        value: "肉親",
        kana: ["にくしん"],
        english: ["blood relationship", "blood relative"]
      },
      {
        value: "肉体",
        kana: ["にくたい"],
        english: ["the body", "the flesh"]
      }
    ],
    tags: []
  },
  {
    name: "馬",
    on: ["ば"],
    kun: ["うま", "ま"],
    source: "https://en.wiktionary.org/wiki/%E9%A6%AC#Kanji",
    meanings: ["horse"],
    grade: 2,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "馬",
        kana: ["うま"],
        english: ["horse", "promoted bishop (shogi)"]
      },
      {
        value: "出馬",
        kana: ["しゅつば"],
        english: ["going on horseback", "going in person"]
      },
      {
        value: "競馬",
        kana: ["けいば"],
        english: ["horse racing"]
      },
      {
        value: "馬場",
        kana: ["ばば"],
        english: ["horse riding ground"]
      },
      {
        value: "競馬場",
        kana: ["けいばじょう"],
        english: ["racecourse", "race track"]
      }
    ],
    tags: ["animal"]
  },
  {
    name: "買",
    on: ["ばい"],
    kun: ["かう"],
    source: "https://en.wiktionary.org/wiki/%E8%B2%B7#Kanji",
    meanings: ["buy"],
    grade: 2,
    jlpt: 4,
    strokes: 12,
    examples: [
      {
        value: "買い",
        kana: ["かい"],
        english: ["buying", "buyer", "purchase"]
      },
      {
        value: "売買",
        kana: ["ばいばい"],
        english: ["trade", "buying and selling"]
      },
      {
        value: "買う",
        kana: ["かう"],
        english: ["to buy", "to value", "to have a high opinion"]
      },
      {
        value: "買収",
        kana: ["ばいしゅう"],
        english: ["buying", "purchase", "corruption", "bribery"]
      },
      {
        value: "買い物",
        kana: ["かいもの"],
        english: ["shopping", "purchased goods"]
      }
    ],
    tags: []
  },
  {
    name: "売",
    on: ["ばい"],
    kun: ["うる", "うれる"],
    source: "https://en.wiktionary.org/wiki/%E5%A3%B2#Kanji",
    meanings: ["sell"],
    grade: 2,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "販売",
        kana: ["はんばい"],
        english: ["sales", "selling", "marketing"]
      },
      {
        value: "売り",
        kana: ["うり"],
        english: ["sale", "selling", "selling point", "gimmick"]
      },
      {
        value: "売る",
        kana: ["うる"],
        english: ["to sell"]
      },
      {
        value: "売買",
        kana: ["ばいばい"],
        english: ["trade", "buying and selling"]
      },
      {
        value: "発売",
        kana: ["はつばい"],
        english: ["sale", "offering for sale", "release (for sale)"]
      }
    ],
    tags: []
  },
  {
    name: "麦",
    on: ["ばく"],
    kun: ["むぎ"],
    source: "https://en.wiktionary.org/wiki/%E9%BA%A6#Kanji",
    meanings: ["barley", "wheat"],
    grade: 2,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "麦",
        kana: ["むぎ"],
        english: ["wheat", "barley", "oat"]
      },
      {
        value: "小麦",
        kana: ["こむぎ"],
        english: ["wheat"]
      },
      {
        value: "小麦粉",
        kana: ["こむぎこ"],
        english: ["wheat flour"]
      },
      {
        value: "麦芽",
        kana: ["ばくが"],
        english: ["malt"]
      },
      {
        value: "大麦",
        kana: ["おおむぎ"],
        english: ["barley (Hordeum vulgare)"]
      }
    ],
    tags: []
  },
  {
    name: "半",
    on: ["はん"],
    kun: ["なかば"],
    source: "https://en.wiktionary.org/wiki/%E5%8D%8A#Kanji",
    meanings: ["half", "middle", "odd number"],
    grade: 2,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "半",
        kana: ["はん"],
        english: ["half"]
      },
      {
        value: "時半",
        kana: ["じはん"],
        english: ["about an hour", "short time"]
      },
      {
        value: "後半",
        kana: ["こうはん"],
        english: ["second half", "latter half"]
      },
      {
        value: "半ば",
        kana: ["なかば"],
        english: ["middle", "half", "semi", "halfway", "partly"]
      },
      {
        value: "半分",
        kana: ["はんぶん"],
        english: ["half"]
      }
    ],
    tags: ["time", "size"]
  },
  {
    name: "番",
    on: ["ばん"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E7%95%AA#Kanji",
    meanings: ["number", "turn", "number in a series"],
    grade: 2,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "一番",
        kana: ["いちばん"],
        english: ["best", "first", "number one", "game", "round", "bout"]
      },
      {
        value: "番組",
        kana: ["ばんぐみ"],
        english: ["program (e.g. TV)", "programme"]
      },
      {
        value: "番号",
        kana: ["ばんごう"],
        english: ["number", "series of digits"]
      },
      {
        value: "本番",
        kana: ["ほんばん"],
        english: ["performance", "take"]
      },
      {
        value: "番手",
        kana: ["ばんて"],
        english: ["(yarn) count", "nth place (e.g. in a race)"]
      }
    ],
    tags: []
  },
  {
    name: "父",
    on: ["ふ"],
    kun: ["ちち"],
    source: "https://en.wiktionary.org/wiki/%E7%88%B6#Kanji",
    meanings: ["father"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "父",
        kana: ["ちち"],
        english: ["father (your own)"]
      },
      {
        value: "お父さん",
        kana: ["おとうさん"],
        english: ["father (someone elses)"]
      },
      {
        value: "父親",
        kana: ["ちちおや"],
        english: ["father"]
      },
      {
        value: "父母",
        kana: ["ふぼ", "ちちはは"],
        english: ["father and mother", "parents"]
      },
      {
        value: "祖父",
        kana: ["そふ", "じじ", "じい"],
        english: ["grandfather", "old man"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "風",
    on: ["ふ", "ふう"],
    kun: ["かぜ", "かざ"],
    source: "https://en.wiktionary.org/wiki/%E9%A2%A8#Kanji",
    meanings: ["wind", "air", "style", "manner"],
    grade: 2,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "風景",
        kana: ["ふうけい"],
        english: ["scenery"]
      },
      {
        value: "台風",
        kana: ["たいふう"],
        english: ["typhoon", "hurricane"]
      },
      {
        value: "風土",
        kana: ["ふうど"],
        english: ["natural features", "topography", "climate"]
      },
      {
        value: "風速",
        kana: ["ふうそく"],
        english: ["wind speed"]
      },
      {
        value: "風潮",
        kana: ["ふうちょう"],
        english: ["tide", "current", "tendency"]
      }
    ],
    tags: ["weather"]
  },
  {
    name: "分",
    on: ["ふん", "ぶん"],
    kun: ["わかる"],
    source: "https://en.wiktionary.org/wiki/%E5%88%86#Kanji",
    meanings: ["minute", "understand"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "分け",
        kana: ["わけ"],
        english: ["sharing", "division", "draw", "tie"]
      },
      {
        value: "分ける",
        kana: ["わける"],
        english: ["to divide", "to separate", "to make distinctions"]
      },
      {
        value: "自分",
        kana: ["じぶん"],
        english: ["myself", "yourself", "oneself", "himself", "herself"]
      },
      {
        value: "部分",
        kana: ["ぶぶん"],
        english: ["portion", "section", "part"]
      },
      {
        value: "分野",
        kana: ["ぶんや"],
        english: ["field", "sphere", "realm", "division", "branch"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "聞",
    on: ["もん"],
    kun: ["きく"],
    source: "https://en.wiktionary.org/wiki/%E8%81%9E#Kanji",
    meanings: ["hear", "ask", "listen"],
    grade: 2,
    jlpt: 4,
    strokes: 14,
    examples: [
      {
        value: "聞かす",
        kana: ["きかす"],
        english: ["to inform about", "to read to", "to sing for"]
      },
      {
        value: "新聞",
        kana: ["しんぶん"],
        english: ["newspaper"]
      },
      {
        value: "新聞社",
        kana: ["しんぶんしゃ"],
        english: ["newspaper company"]
      },
      {
        value: "聞き手",
        kana: ["ききて"],
        english: ["hearer", "listener", "audience", "interviewer"]
      },
      {
        value: "新聞紙",
        kana: ["しんぶんし"],
        english: ["newsprint", "newspaper"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "米",
    on: ["まい", "べい"],
    kun: ["こめ"],
    source: "https://en.wiktionary.org/wiki/%E7%B1%B3#Kanji",
    meanings: ["rice", "USA", "metre"],
    grade: 2,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "日米",
        kana: ["にちべい"],
        english: ["Japan", "America"]
      },
      {
        value: "米国",
        kana: ["べいこく"],
        english: ["America", "USA"]
      },
      {
        value: "全米",
        kana: ["ぜんべい"],
        english: ["American"]
      },
      {
        value: "対米",
        kana: ["たいべい"],
        english: ["relating to the USA", "toward America"]
      },
      {
        value: "訪米",
        kana: ["ほうべい"],
        english: ["visit to America"]
      }
    ],
    tags: []
  },
  {
    name: "歩",
    on: ["ほ", "ぶ", "ふ"],
    kun: ["あるく", "あゆむ"],
    source: "https://en.wiktionary.org/wiki/%E6%AD%A9#Kanji",
    meanings: ["walk", "counter for steps"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "歩",
        kana: ["ほ"],
        english: ["step", "stride", "counter for steps"]
      },
      {
        value: "公定歩合",
        kana: ["こうていぶあい"],
        english: ["official discount (bank) rate"]
      },
      {
        value: "一歩",
        kana: ["いっぽ"],
        english: ["(a) step", "level", "stage", "small degree"]
      },
      {
        value: "譲歩",
        kana: ["じょうほ"],
        english: ["concession", "conciliation", "compromise"]
      },
      {
        value: "歩み",
        kana: ["あゆみ"],
        english: ["walking", "progress", "advance"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "母",
    on: ["ぼう"],
    kun: ["はは"],
    source: "https://en.wiktionary.org/wiki/%E6%AF%8D#Kanji",
    meanings: ["mother"],
    grade: 2,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "母",
        kana: ["はは"],
        english: ["mother"]
      },
      {
        value: "お母さん",
        kana: ["おかあさん"],
        english: ["mother"]
      },
      {
        value: "母親",
        kana: ["ははおや"],
        english: ["mother"]
      },
      {
        value: "父母",
        kana: ["ふぼ", "ちちはは"],
        english: ["father and mother, parents"]
      },
      {
        value: "母体",
        kana: ["ぼたい"],
        english: ["mother’s body"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "方",
    on: ["ほう"],
    kun: ["かた"],
    source: "https://en.wiktionary.org/wiki/%E6%96%B9#Kanji",
    meanings: ["direction", "person", "alternative"],
    grade: 2,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "一方",
        kana: ["いっぽう"],
        english: ["one (esp. of two)", "the other", "one way"]
      },
      {
        value: "見方",
        kana: ["みかた"],
        english: ["viewpoint"]
      },
      {
        value: "地方",
        kana: ["ちほう", "じかた"],
        english: ["area", "locality", "district", "region", "province"]
      },
      {
        value: "方向",
        kana: ["ほうこう"],
        english: ["direction, orientation, bearing, way"]
      },
      {
        value: "方針",
        kana: ["ほうしん"],
        english: ["objective, plan, policy"]
      }
    ],
    tags: []
  },
  {
    name: "北",
    on: ["ほく"],
    kun: ["きた"],
    source: "https://en.wiktionary.org/wiki/%E5%8C%97#Kanji",
    meanings: ["north"],
    grade: 2,
    jlpt: 4,
    strokes: 5,
    examples: [
      {
        value: "北",
        kana: ["きた"],
        english: ["north"]
      },
      {
        value: "北海道",
        kana: ["ほっかいどう"],
        english: ["Hokkaido"]
      },
      {
        value: "北京",
        kana: ["ぺきん"],
        english: ["Beijing"]
      },
      {
        value: "北朝鮮",
        kana: ["きたちょうせん"],
        english: ["North Korea"]
      },
      {
        value: "東北",
        kana: ["とうほく", "ひがしきた"],
        english: ["north east"]
      }
    ],
    tags: ["direction"]
  },
  {
    name: "妹",
    on: ["まい", "ばい"],
    kun: ["いもうと"],
    source: "https://en.wiktionary.org/wiki/%E5%A6%B9#Kanji",
    meanings: ["younger sister"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "妹",
        kana: ["いもうと"],
        english: ["younger sister"]
      },
      {
        value: "姉妹",
        kana: ["しまい", "きょうだい"],
        english: ["sisters"]
      },
      {
        value: "弟妹",
        kana: ["ていまい"],
        english: ["younger brother and sister"]
      },
      {
        value: "義妹",
        kana: ["ぎまい", "いもうと"],
        english: ["sister in law (younger)"]
      },
      {
        value: "実妹",
        kana: ["じつまい"],
        english: ["one’s younger sister"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "毎",
    on: ["まい"],
    kun: ["ごと"],
    source: "https://en.wiktionary.org/wiki/%E6%AF%8E#Kanji",
    meanings: ["every"],
    grade: 2,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "毎日",
        kana: ["まいにち"],
        english: ["every day"]
      },
      {
        value: "毎年",
        kana: ["まいとし", "まいねん"],
        english: ["every year", "yearly", "annually"]
      },
      {
        value: "毎週",
        kana: ["まいしゅう"],
        english: ["every week"]
      },
      {
        value: "毎月",
        kana: ["まいげつ", "まいつき"],
        english: ["every month", "each month", "monthly"]
      },
      {
        value: "毎回",
        kana: ["まいかい"],
        english: ["every time", "each round"]
      }
    ],
    tags: []
  },
  {
    name: "万",
    on: ["まん"],
    kun: ["よろず"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%87#Kanji",
    meanings: ["ten thousand"],
    grade: 2,
    jlpt: 4,
    strokes: 3,
    examples: [
      {
        value: "十万",
        kana: ["じゅうまん"],
        english: ["100,000", "hundred thousand"]
      },
      {
        value: "百万",
        kana: ["ひゃくまん"],
        english: ["1,000,000", "one million", "many"]
      },
      {
        value: "万全",
        kana: ["ばんぜん"],
        english: ["perfection", "flawlessness"]
      },
      {
        value: "数万",
        kana: ["すうまん"],
        english: ["tens of thousands"]
      },
      {
        value: "万里",
        kana: ["ばんり"],
        english: ["thousands of miles"]
      }
    ],
    tags: ["number"]
  },
  {
    name: "明",
    on: ["めい"],
    kun: ["あかるい"],
    source: "https://en.wiktionary.org/wiki/%E6%98%8E#Kanji",
    meanings: ["bright", "light"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "新た",
        kana: ["あらた"],
        english: ["obvious", "evident", "clear", "plain"]
      },
      {
        value: "新党",
        kana: ["しんとう"],
        english: ["declaration", "statement", "proclamation"]
      },
      {
        value: "新聞",
        kana: ["しんぶん"],
        english: ["explanation", "exposition"]
      },
      {
        value: "新人",
        kana: ["しんじん"],
        english: ["unknown", "obscure", "indistinct", "uncertain"]
      },
      {
        value: "新生",
        kana: ["しんせい"],
        english: ["clear up", "clarify", "define"]
      }
    ],
    tags: []
  },
  {
    name: "鳴",
    on: ["めい"],
    kun: ["なく", "なる", "ならす"],
    source: "https://en.wiktionary.org/wiki/%E9%B3%B4#Kanji",
    meanings: ["chirp", "cry", "bark", "sound", "ring", "echo", "honk"],
    grade: 2,
    jlpt: 2,
    strokes: 14,
    examples: [
      {
        value: "鳴り",
        kana: ["なり"],
        english: ["ringing", "sound"]
      },
      {
        value: "悲鳴",
        kana: ["ひめい"],
        english: ["shriek", "scream"]
      },
      {
        value: "鳴き声",
        kana: ["なきごえ"],
        english: ["cry (esp. animal)", "roar"]
      },
      {
        value: "鳴門",
        kana: ["なると", "なるとまき"],
        english: ["steamed fish", "paste cake"]
      },
      {
        value: "怒鳴り込む",
        kana: ["どなりこむ"],
        english: ["to storm in with a yell"]
      }
    ],
    tags: []
  },
  {
    name: "毛",
    on: ["もう"],
    kun: ["け"],
    source: "https://en.wiktionary.org/wiki/%E6%AF%9B#Kanji",
    meanings: ["hair", "fur", "feather"],
    grade: 2,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "毛",
        kana: ["け"],
        english: ["hair", "fur"]
      },
      {
        value: "毛布",
        kana: ["もうふ"],
        english: ["blanket"]
      },
      {
        value: "毛皮",
        kana: ["けがわ", "もうひ"],
        english: ["fur", "skin", "pelt"]
      },
      {
        value: "髪の毛",
        kana: ["かみのけ"],
        english: ["hair (head)"]
      },
      {
        value: "羽毛",
        kana: ["うもう"],
        english: ["feathers", "plumage", "down"]
      }
    ],
    tags: []
  },
  {
    name: "門",
    on: ["もん"],
    kun: ["かど"],
    source: "https://en.wiktionary.org/wiki/%E9%96%80#Kanji",
    meanings: ["gate", "counter for cannons"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "門",
        kana: ["かど, もん"],
        english: ["gate"]
      },
      {
        value: "部門",
        kana: ["ぶもん"],
        english: ["class", "group", "category", "department", "field"]
      },
      {
        value: "専門",
        kana: ["せんもん"],
        english: ["speciality", "subject of study"]
      },
      {
        value: "専門家",
        kana: ["せんもんか"],
        english: ["specialist"]
      },
      {
        value: "専門学校",
        kana: ["せんもんがっこう", "せんもんガッコウ", "せんもんガッコ"],
        english: ["vocational school", "technical school"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "夜",
    on: ["や"],
    kun: ["よる", "よ"],
    source: "https://en.wiktionary.org/wiki/%E5%A4%9C#Kanji",
    meanings: ["night", "evening"],
    grade: 2,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "夜",
        kana: ["よる", "よ"],
        english: ["evening", "night"]
      },
      {
        value: "深夜",
        kana: ["しんや"],
        english: ["late at night"]
      },
      {
        value: "日夜",
        kana: ["にちや"],
        english: ["day and night", "always"]
      },
      {
        value: "夜間",
        kana: ["やかん"],
        english: ["at night", "nighttime"]
      },
      {
        value: "前夜",
        kana: ["ぜんや"],
        english: ["last night", "the previous night"]
      }
    ],
    tags: []
  },
  {
    name: "野",
    on: ["や"],
    kun: ["の"],
    source: "https://en.wiktionary.org/wiki/%E9%87%8E#Kanji",
    meanings: ["field", "plains", "rustic", "civilian life"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "野",
        kana: ["の", "や", "ぬ"],
        english: ["plain", "field", "hidden (structural) member"]
      },
      {
        value: "分野",
        kana: ["ぶんや"],
        english: ["field", "sphere", "realm", "division", "branch"]
      },
      {
        value: "野球",
        kana: ["やきゅう"],
        english: ["baseball"]
      },
      {
        value: "野党",
        kana: ["やとう"],
        english: ["opposition party", "political opposition"]
      },
      {
        value: "与野党",
        kana: ["よやとう"],
        english: ["(political) parties in and out of power"]
      }
    ],
    tags: []
  },
  {
    name: "矢",
    on: ["し"],
    kun: ["や"],
    source: "https://en.wiktionary.org/wiki/%E7%9F%A2#Kanji",
    meanings: ["dart", "arrow"],
    grade: 2,
    jlpt: 1,
    strokes: 5,
    examples: [
      {
        value: "矢",
        kana: ["や", "さ"],
        english: ["arrow"]
      },
      {
        value: "矢先",
        kana: ["やさき"],
        english: ["arrowhead", "brunt", "target"]
      },
      {
        value: "矢面",
        kana: ["やおもて"],
        english: ["bearing the full brunt of something"]
      },
      {
        value: "矢継ぎ早",
        kana: ["やつぎばや"],
        english: ["rapid succession (e.g. questions)"]
      },
      {
        value: "一矢",
        kana: ["いっし"],
        english: ["an arrow, (a) retort"]
      }
    ],
    tags: []
  },
  {
    name: "友",
    on: ["ゆう"],
    kun: ["とも"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%8B#Kanji",
    meanings: ["friend"],
    grade: 2,
    jlpt: 4,
    strokes: 4,
    examples: [
      {
        value: "友",
        kana: ["とも"],
        english: ["friend", "companion", "pal"]
      },
      {
        value: "友人",
        kana: ["ゆうじん"],
        english: ["friend"]
      },
      {
        value: "友好",
        kana: ["ゆうこう"],
        english: ["friendship"]
      },
      {
        value: "友達",
        kana: ["ともだち"],
        english: ["friend", "companion"]
      },
      {
        value: "住友",
        kana: ["すみとも"],
        english: ["Sumitomo (company)"]
      }
    ],
    tags: ["family"]
  },
  {
    name: "曜",
    on: ["よう"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E6%9B%9C#Kanji",
    meanings: ["weekday"],
    grade: 2,
    jlpt: 3,
    strokes: 18,
    examples: [
      {
        value: "土曜",
        kana: ["どよう"],
        english: ["Saturday"]
      },
      {
        value: "曜日",
        kana: ["ようび"],
        english: ["Day of the week"]
      },
      {
        value: "日曜",
        kana: ["にちよう"],
        english: ["Sunday"]
      },
      {
        value: "金曜",
        kana: ["きんよう"],
        english: ["Friday"]
      },
      {
        value: "月曜",
        kana: ["げつよう"],
        english: ["Monday"]
      }
    ],
    tags: []
  },
  {
    name: "用",
    on: ["よう"],
    kun: ["もちいる"],
    source: "https://en.wiktionary.org/wiki/%E7%94%A8#Kanji",
    meanings: ["use", "business", "service", "employ"],
    grade: 2,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "雇用",
        kana: ["こよう"],
        english: ["employment (long term)", "hire"]
      },
      {
        value: "採用",
        kana: ["さいよう"],
        english: ["use", "adoption", "acceptance", "appointment"]
      },
      {
        value: "使用",
        kana: ["しよう"],
        english: ["use", "application", "employment", "utilisation"]
      },
      {
        value: "費用",
        kana: ["ひよう"],
        english: ["cost", "expense"]
      },
      {
        value: "利用",
        kana: ["りよう"],
        english: ["use", "utilisation", "application"]
      }
    ],
    tags: []
  },
  {
    name: "来",
    on: ["らい"],
    kun: ["くる"],
    source: "https://en.wiktionary.org/wiki/%E6%9D%A5#Kanji",
    meanings: ["come", "due", "next", "cause", "become"],
    grade: 2,
    jlpt: 4,
    strokes: 7,
    examples: [
      {
        value: "来",
        kana: ["らい"],
        english: ["next"]
      },
      {
        value: "以来",
        kana: ["いらい"],
        english: ["since", "henceforth"]
      },
      {
        value: "従来",
        kana: ["じゅうらい"],
        english: ["up to now", "so far", "traditional"]
      },
      {
        value: "将来",
        kana: ["しょうらい"],
        english: ["future", "prospects"]
      },
      {
        value: "来年",
        kana: ["らいねん"],
        english: ["next year"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "理",
    on: ["り"],
    kun: ["ことわり"],
    source: "https://en.wiktionary.org/wiki/%E7%90%86#Kanji",
    meanings: ["reason", "logic", "arrangement", "justice", "truth"],
    grade: 2,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "理",
        kana: ["り"],
        english: ["reason", "principle", "logic"]
      },
      {
        value: "管理",
        kana: ["かんり"],
        english: ["control", "management (e.g. of a business)"]
      },
      {
        value: "理事",
        kana: ["りじ"],
        english: ["director", "board of directors"]
      },
      {
        value: "理由",
        kana: ["りゆう"],
        english: ["reason", "pretext", "motive"]
      },
      {
        value: "処理",
        kana: ["しょり"],
        english: ["processing", "dealing with", "treatment"]
      }
    ],
    tags: []
  },
  {
    name: "里",
    on: ["り"],
    kun: ["さと"],
    source: "https://en.wiktionary.org/wiki/%E9%87%8C#Kanji",
    meanings: ["ri", "village", "parent's home", "league"],
    grade: 2,
    jlpt: 1,
    strokes: 7,
    examples: [
      {
        value: "里",
        kana: ["り"],
        english: ["ri (old Japanese unit of distance)"]
      },
      {
        value: "千里",
        kana: ["せんり"],
        english: ["1000 ri, (a) long distance"]
      },
      {
        value: "郷里",
        kana: ["きょうり"],
        english: ["birth place", "home town"]
      },
      {
        value: "万里",
        kana: ["ばんり"],
        english: ["thousands of miles"]
      },
      {
        value: "里子",
        kana: ["さとご"],
        english: ["foster child"]
      }
    ],
    tags: []
  },
  {
    name: "話",
    on: ["わ"],
    kun: ["はなし"],
    source: "https://en.wiktionary.org/wiki/%E8%A9%B1#Kanji",
    meanings: ["tale", "talk"],
    grade: 2,
    jlpt: 4,
    strokes: 13,
    examples: [
      {
        value: "話",
        kana: ["はなし"],
        english: ["talk", "speech", "chat", "story", "conversation"]
      },
      {
        value: "電話",
        kana: ["でんわ"],
        english: ["telephone"]
      },
      {
        value: "対話",
        kana: ["たいわ"],
        english: ["interactive", "interaction", "conversation"]
      },
      {
        value: "話題",
        kana: ["わだい"],
        english: ["topic", "subject"]
      },
      {
        value: "話し合い",
        kana: ["はなしあい"],
        english: ["discussion", "conference"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "悪",
    on: ["あく"],
    kun: ["わるい"],
    source: "https://en.wiktionary.org/wiki/%E6%82%AA#Kanji",
    meanings: ["bad", "vice", "rascal", "false", "evil", "wrong"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "悪",
        kana: ["あく"],
        english: ["evil", "wickedness"]
      },
      {
        value: "悪化",
        kana: ["あっか"],
        english: ["(suffer) deterioration", "growing worse"]
      },
      {
        value: "最悪",
        kana: ["さいあく"],
        english: ["the worst"]
      },
      {
        value: "悪さ",
        kana: ["わるさ"],
        english: ["badness", "mean mischief"]
      },
      {
        value: "悪質",
        kana: ["あくしつ"],
        english: ["bad quality", "malignancy", "vicious", "malignant"]
      }
    ],
    tags: ["adjective"]
  },
  {
    name: "安",
    on: ["あん"],
    kun: ["やすい"],
    source: "https://en.wiktionary.org/wiki/%E5%AE%89#Kanji",
    meanings: ["relax", "cheap", "low", "quiet", "rested", "contented", "peaceful"],
    grade: 3,
    jlpt: 4,
    strokes: 6,
    examples: [
      {
        value: "安全",
        kana: ["あんぜん"],
        english: ["safety", "security"]
      },
      {
        value: "安保",
        kana: ["あんぽ"],
        english: ["US Japan Security Treaty", "safety", "security"]
      },
      {
        value: "安全保障",
        kana: ["あんぜんほしょう"],
        english: ["security guarantee (e.g. military security"]
      },
      {
        value: "安定",
        kana: ["あんてい"],
        english: ["stability", "equilibrium"]
      },
      {
        value: "不安",
        kana: ["ふあん"],
        english: ["anxiety", "uneasiness", "insecurity", "suspense"]
      }
    ],
    tags: []
  },
  {
    name: "暗",
    on: ["アン"],
    kun: ["くらい", "くらむ", "くれる"],
    source: "",
    meanings: ["darkness", "disappear", "shade", "informal", "grow dark", "be blinded"],
    grade: 3,
    jlpt: 3,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "委",
    on: ["い"],
    kun: ["ゆだねる"],
    source: "https://en.wiktionary.org/wiki/%E5%A7%94#Kanji",
    meanings: ["committee", "entrust to", "leave to", "devote", "discard"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "委員",
        kana: ["いいん"],
        english: ["committee member"]
      },
      {
        value: "委員会",
        kana: ["いいんかい"],
        english: ["committee", "commission", "board", "panel"]
      },
      {
        value: "委員長",
        kana: ["いいんちょう"],
        english: ["committee chairman"]
      },
      {
        value: "公取委",
        kana: ["こうとりい"],
        english: ["Fair Trade Commission"]
      },
      {
        value: "委託",
        kana: ["いたく"],
        english: ["consign (goods (for sale) to a firm)"]
      }
    ],
    tags: []
  },
  {
    name: "意",
    on: ["い"],
    kun: ["こころ"],
    source: "https://en.wiktionary.org/wiki/%E6%84%8F#Kanji",
    meanings: ["idea", "mind", "heart", "taste", "thought", "desire", "care", "liking"],
    grade: 3,
    jlpt: 3,
    strokes: 13,
    examples: [
      {
        value: "意見",
        kana: ["いけん"],
        english: ["opinion", "view"]
      },
      {
        value: "意味",
        kana: ["いみ"],
        english: ["meaning", "significance"]
      },
      {
        value: "合意",
        kana: ["ごうい"],
        english: ["agreement", "consent", "mutual understanding"]
      },
      {
        value: "意向",
        kana: ["いこう"],
        english: ["intention", "idea", "inclination"]
      },
      {
        value: "意思",
        kana: ["いし"],
        english: ["intention", "purpose"]
      }
    ],
    tags: []
  },
  {
    name: "医",
    on: ["い"],
    kun: ["いやす"],
    source: "https://en.wiktionary.org/wiki/%E5%8C%BB#Kanji",
    meanings: ["doctor", "medicine"],
    grade: 3,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "医療",
        kana: ["いりょう"],
        english: ["medical care", "medical treatment"]
      },
      {
        value: "医学",
        kana: ["いがく"],
        english: ["medical science", "medicine"]
      },
      {
        value: "医師",
        kana: ["いし"],
        english: ["doctor", "physician"]
      },
      {
        value: "医",
        kana: ["い"],
        english: ["medicine", "the healing art", "healing", "curing"]
      },
      {
        value: "医薬品",
        kana: ["いやくひん"],
        english: ["medical supplies"]
      }
    ],
    tags: ["occupation"]
  },
  {
    name: "育",
    on: ["いく"],
    kun: ["そだつ", "そだてる", "はぐくむ"],
    source: "https://en.wiktionary.org/wiki/%E8%82%B2#Kanji",
    meanings: ["bring up", "grow up", "raise", "rear"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "教育",
        kana: ["きょういく"],
        english: ["training", "education"]
      },
      {
        value: "体育",
        kana: ["たいいく"],
        english: ["physical education", "gymnastics", "athletics"]
      },
      {
        value: "育児",
        kana: ["いくじ"],
        english: ["childcare", "nursing", "upbringing"]
      },
      {
        value: "保育",
        kana: ["ほいく"],
        english: ["nursing", "nurturing", "rearing", "lactation"]
      },
      {
        value: "育成",
        kana: ["いくせい"],
        english: ["rearing", "training", "nurture", "cultivation"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "員",
    on: ["いん"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E5%93%A1",
    meanings: ["employee", "member", "number"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "委員",
        kana: ["いいん"],
        english: ["committee member"]
      },
      {
        value: "委員会",
        kana: ["いいんかい"],
        english: ["committee", "commission", "board", "panel"]
      },
      {
        value: "委員長",
        kana: ["いいんちょう"],
        english: ["committee chairman"]
      },
      {
        value: "会員",
        kana: ["かいいん"],
        english: ["member", "the membership"]
      },
      {
        value: "議員",
        kana: ["ぎいん"],
        english: ["member of the Diet", "congress or parliament"]
      }
    ],
    tags: []
  },
  {
    name: "飲",
    on: ["いん"],
    kun: ["のむ"],
    source: "https://en.wiktionary.org/wiki/%E9%A3%B2#Kanji",
    meanings: ["drink", "smoke", "take"],
    grade: 3,
    jlpt: 4,
    strokes: 12,
    examples: [
      {
        value: "飲食",
        kana: ["いんしょく"],
        english: ["food and drink", "eating and drinking"]
      },
      {
        value: "飲料",
        kana: ["いんりょう"],
        english: ["a drink"]
      },
      {
        value: "飲酒",
        kana: ["いんしゅ"],
        english: ["drinking alcohol (sake)"]
      },
      {
        value: "飲み物",
        kana: ["のみもの"],
        english: ["drink", "beverage"]
      },
      {
        value: "飲み水",
        kana: ["のみみず"],
        english: ["drinking water"]
      }
    ],
    tags: ["verb", "food"]
  },
  {
    name: "院",
    on: ["えん"],
    kun: ["いん"],
    source: "https://en.wiktionary.org/wiki/%E9%99%A2#Kanji",
    meanings: ["Institution", "temple", "mansion", "school"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "参院",
        kana: ["さんいん"],
        english: ["House of Councillors"]
      },
      {
        value: "衆院",
        kana: ["しゅういん"],
        english: ["lower house of the Diet"]
      },
      {
        value: "病院",
        kana: ["びょういん"],
        english: ["hospital"]
      },
      {
        value: "下院",
        kana: ["かいん"],
        english: ["lower house", "lower (legislative) body"]
      },
      {
        value: "上院",
        kana: ["じょういん"],
        english: ["Upper House", "Senate", "Lords"]
      }
    ],
    tags: []
  },
  {
    name: "運",
    on: ["うん"],
    kun: ["はこぶ"],
    source: "https://en.wiktionary.org/wiki/%E9%81%8B#Kanji",
    meanings: ["carry", "luck", "destiny", "fate", "lot", "transport", "progress", "advance"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "運",
        kana: ["うん"],
        english: ["fortune", "luck"]
      },
      {
        value: "運ぶ",
        kana: ["はこぶ"],
        english: ["to carry", "to transport", "to move", "to convey"]
      },
      {
        value: "運動",
        kana: ["うんどう"],
        english: ["motion", "exercise"]
      },
      {
        value: "運営",
        kana: ["うんえい"],
        english: ["management", "administration", "operation"]
      },
      {
        value: "運転",
        kana: ["うんてん"],
        english: ["operation", "motion", "driving"]
      }
    ],
    tags: []
  },
  {
    name: "泳",
    on: ["エイ"],
    kun: ["およぐ"],
    source: "",
    meanings: ["swim"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "駅",
    on: ["えき"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E9%A7%85#Kanji",
    meanings: ["station"],
    grade: 3,
    jlpt: 4,
    strokes: 14,
    examples: [
      {
        value: "駅",
        kana: ["えき"],
        english: ["station"]
      },
      {
        value: "駅前",
        kana: ["えきまえ"],
        english: ["in front of station"]
      },
      {
        value: "駅伝",
        kana: ["えきでん"],
        english: ["stagecoach", "post horse"]
      },
      {
        value: "宿駅",
        kana: ["しゅくえき"],
        english: ["post town", "relay station", "stage"]
      },
      {
        value: "駅員",
        kana: ["えきいん"],
        english: ["station attendant"]
      }
    ],
    tags: []
  },
  {
    name: "央",
    on: ["オウ"],
    kun: [],
    source: "",
    meanings: ["center", "middle"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "横",
    on: ["オウ"],
    kun: ["よこ"],
    source: "",
    meanings: ["sideways", "side", "horizontal", "width", "woof", "unreasonable", "perverse"],
    grade: 3,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "屋",
    on: ["おく"],
    kun: ["や"],
    source: "https://en.wiktionary.org/wiki/%E5%B1%8B#Kanji",
    meanings: ["roof", "house", "shop", "dealer", "seller"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "部屋",
        kana: ["へや"],
        english: ["room", "sumo stable"]
      },
      {
        value: "屋根",
        kana: ["やね"],
        english: ["roof"]
      },
      {
        value: "総会屋",
        kana: ["そうかいや"],
        english: ["extortionist that threatens to disruptstock"]
      },
      {
        value: "小屋",
        kana: ["こや"],
        english: ["hut", "cabin", "shed", "(animal) pen"]
      },
      {
        value: "屋上",
        kana: ["おくじょう"],
        english: ["rooftop"]
      }
    ],
    tags: []
  },
  {
    name: "温",
    on: ["オン"],
    kun: ["あたたか", "あたたかい", "あたたまる", "あたためる", "ぬく"],
    source: "",
    meanings: ["warm"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "化",
    on: ["か", "け"],
    kun: ["ばける", "ばかす"],
    source: "https://en.wiktionary.org/wiki/%E5%8C%96#Kanji",
    meanings: ["change", "take the form of", "influence", "enchant", "delude"],
    grade: 3,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "強化",
        kana: ["きょうか"],
        english: ["strengthen", "intensify", "reinforce", "solidify"]
      },
      {
        value: "文化",
        kana: ["ぶんか"],
        english: ["culture", "civilisation"]
      },
      {
        value: "変化",
        kana: ["へんか"],
        english: ["change", "variation", "alteration", "mutation"]
      },
      {
        value: "悪化",
        kana: ["あっか"],
        english: ["(suffer) deterioration", "growing worse"]
      },
      {
        value: "化学",
        kana: ["かがく", "ばけがく"],
        english: ["chemistry"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "荷",
    on: ["カ"],
    kun: ["に"],
    source: "",
    meanings: ["baggage", "shoulder-pole load", "bear (a burden)", "shoulder (a gun)", "load", "cargo", "freight"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "界",
    on: ["かい"],
    kun: ["さかい"],
    source: "https://en.wiktionary.org/wiki/%E7%95%8C#Kanji",
    meanings: ["world"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "業界",
        kana: ["ぎょうかい"],
        english: ["industry, business"]
      },
      {
        value: "世界",
        kana: ["せかい"],
        english: ["the world, society, the universe"]
      },
      {
        value: "政界",
        kana: ["せいかい"],
        english: ["political world"]
      },
      {
        value: "財界",
        kana: ["ざいかい"],
        english: ["financial world"]
      },
      {
        value: "限界",
        kana: ["げんかい"],
        english: ["limit, bound"]
      }
    ],
    tags: []
  },
  {
    name: "開",
    on: ["かい"],
    kun: ["あける", "ひらく", "ひらける", "あく"],
    source: "https://en.wiktionary.org/wiki/%E9%96%8B#Kanji",
    meanings: ["open", "unfold", "unseal"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "開発",
        kana: ["かいはつ"],
        english: ["development", "exploitation"]
      },
      {
        value: "開催",
        kana: ["かいさい"],
        english: ["holding a meeting", "open an exhibition"]
      },
      {
        value: "開始",
        kana: ["かいし"],
        english: ["start", "commencement", "beginning", "initiation"]
      },
      {
        value: "開放",
        kana: ["かいほう"],
        english: ["open", "throw open", "liberalization"]
      },
      {
        value: "公開",
        kana: ["こうかい"],
        english: ["open to the public"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "階",
    on: ["カイ"],
    kun: ["きざはし"],
    source: "",
    meanings: ["storey", "stair", "counter for storeys of a building"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "寒",
    on: ["カン"],
    kun: ["さむい"],
    source: "",
    meanings: ["cold"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "感",
    on: ["かん"],
    kun: ["かんじる", "かまける"],
    source: "https://en.wiktionary.org/wiki/%E6%84%9F#Kanji",
    meanings: ["emotion", "feeling", "sensation"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [
      {
        value: "感じ",
        kana: ["かんじ"],
        english: ["feeling", "sense", "impression"]
      },
      {
        value: "感覚",
        kana: ["かんかく"],
        english: ["sense", "sensation", "feeling"]
      },
      {
        value: "感染",
        kana: ["かんせん"],
        english: ["infection", "contagion"]
      },
      {
        value: "感じる",
        kana: ["かんじる"],
        english: ["to feel", "to sense", "to experience"]
      },
      {
        value: "感情",
        kana: ["かんじょう"],
        english: ["emotion", "feeling", "feelings", "sentiment"]
      }
    ],
    tags: []
  },
  {
    name: "漢",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["Sino-", "China"],
    grade: 3,
    jlpt: 3,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "館",
    on: ["かん"],
    kun: ["やかた", "たて"],
    source: "https://en.wiktionary.org/wiki/%E9%A4%A8#Kanji",
    meanings: ["building", "mansion", "large building", "palace"],
    grade: 3,
    jlpt: 3,
    strokes: 16,
    examples: [
      {
        value: "会館",
        kana: ["かいかん"],
        english: ["meeting hall", "assembly hall"]
      },
      {
        value: "大使館",
        kana: ["たいしかん"],
        english: ["embassy"]
      },
      {
        value: "美術館",
        kana: ["びじゅつかん"],
        english: ["art gallery", "art museum"]
      },
      {
        value: "博物館",
        kana: ["はくぶつかん"],
        english: ["museum"]
      },
      {
        value: "図書館",
        kana: ["としょかん", "ずしょかん"],
        english: ["library"]
      }
    ],
    tags: []
  },
  {
    name: "岸",
    on: ["ガン"],
    kun: ["きし"],
    source: "",
    meanings: ["beach"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "期",
    on: ["き"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E6%9C%9F#Kanji",
    meanings: ["period", "time", "date", "term"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "期間",
        kana: ["きかん"],
        english: ["period", "term", "interval"]
      },
      {
        value: "期待",
        kana: ["きたい"],
        english: ["expectation", "anticipation", "hope"]
      },
      {
        value: "時期",
        kana: ["じき"],
        english: ["time", "season", "period", "soon", "shortly"]
      },
      {
        value: "早期",
        kana: ["そうき"],
        english: ["early stage"]
      },
      {
        value: "長期",
        kana: ["ちょうき"],
        english: ["long time period"]
      }
    ],
    tags: ["time"]
  },
  {
    name: "起",
    on: ["き"],
    kun: ["おきる", "おこる", "おこす"],
    source: "https://en.wiktionary.org/wiki/%E8%B5%B7#Kanji",
    meanings: ["rouse", "wake up", "get up"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "起訴",
        kana: ["きそ"],
        english: ["prosecution", "indictment"]
      },
      {
        value: "起こす",
        kana: ["おこす"],
        english: ["to raise, to cause", "to wake someone"]
      },
      {
        value: "起用",
        kana: ["きよう"],
        english: ["appointment (to a position, job, etc.)"]
      },
      {
        value: "起こる",
        kana: ["おこる"],
        english: ["to occur", "to happen"]
      },
      {
        value: "提起",
        kana: ["ていき"],
        english: ["bring suit", "file a claim", "raise a question"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "客",
    on: ["キャク", "カク"],
    kun: [],
    source: "",
    meanings: ["guest", "visitor", "customer", "client"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "宮",
    on: ["キュウ", "グウ", "ク", "クウ"],
    kun: ["みや"],
    source: "",
    meanings: ["Shinto shrine", "constellations", "palace", "princess"],
    grade: 3,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "急",
    on: ["きゅう"],
    kun: ["いそぐ"],
    source: "https://en.wiktionary.org/wiki/%E6%80%A5#Kanji",
    meanings: ["hurry", "emergency", "sudden", "steep"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "急",
        kana: ["きゅう"],
        english: ["urgent", "sudden", "abrupt", "sharp", "steep"]
      },
      {
        value: "急いで",
        kana: ["いそいで"],
        english: ["hurriedly"]
      },
      {
        value: "急きょ",
        kana: ["きゅうきょ"],
        english: ["hurriedly", "in a hurry"]
      },
      {
        value: "緊急",
        kana: ["きんきゅう"],
        english: ["urgent", "pressing", "emergency"]
      },
      {
        value: "急速",
        kana: ["きゅうそく"],
        english: ["rapid (e.g. progress)"]
      }
    ],
    tags: []
  },
  {
    name: "球",
    on: ["きゅう"],
    kun: ["たま"],
    source: "https://en.wiktionary.org/wiki/%E7%90%83#Kanji",
    meanings: ["ball", "sphere"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "球",
        kana: ["きゅう", "たま"],
        english: ["globe", "sphere", "ball"]
      },
      {
        value: "地球",
        kana: ["ちきゅう"],
        english: ["the earth"]
      },
      {
        value: "野球",
        kana: ["やきゅう"],
        english: ["baseball"]
      },
      {
        value: "球場",
        kana: ["きゅうじょう"],
        english: ["baseball stadium"]
      },
      {
        value: "球団",
        kana: ["きゅうだん"],
        english: ["baseball team"]
      }
    ],
    tags: []
  },
  {
    name: "究",
    on: ["きゅう"],
    kun: ["きわめる"],
    source: "https://en.wiktionary.org/wiki/%E7%A9%B6#Kanji",
    meanings: ["research", "study"],
    grade: 3,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "研究",
        kana: ["けんきゅう"],
        english: ["study", "research", "investigation"]
      },
      {
        value: "研究所",
        kana: ["けんきゅうしょ", "けんきゅうじょ"],
        english: ["research establishment"]
      },
      {
        value: "研究者",
        kana: ["けんきゅうしゃ"],
        english: ["researcher"]
      },
      {
        value: "究明",
        kana: ["きゅうめい"],
        english: ["investigation (esp. in academic and scientific contexts)"]
      },
      {
        value: "研究員",
        kana: ["けんきゅういん"],
        english: ["researcher"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "級",
    on: ["キュウ"],
    kun: [],
    source: "",
    meanings: ["class", "rank", "grade"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "去",
    on: ["きょ", "こ"],
    kun: ["さる"],
    source: "https://en.wiktionary.org/wiki/%E5%8E%BB#Kanji",
    meanings: ["gone", "past", "quit", "leave", "elapse", "eliminate", "divorce"],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "過去",
        kana: ["かこ"],
        english: ["the past", "bygone days", "the previous"]
      },
      {
        value: "死去",
        kana: ["しきょ"],
        english: ["death"]
      },
      {
        value: "撤去",
        kana: ["てっきょ"],
        english: ["withdrawal", "revocation", "repeal", "demolition"]
      },
      {
        value: "除去",
        kana: ["じょきょ"],
        english: ["removal", "getting rid of"]
      },
      {
        value: "去年",
        kana: ["きょねん", "こぞ"],
        english: ["last year"]
      }
    ],
    tags: []
  },
  {
    name: "橋",
    on: ["キョウ"],
    kun: ["はし"],
    source: "",
    meanings: ["bridge"],
    grade: 3,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "業",
    on: ["ぎょう", "ごう"],
    kun: ["わざ"],
    source: "https://en.wiktionary.org/wiki/%E6%A5%AD#Kanji",
    meanings: ["business", "vocation", "arts", "performance"],
    grade: 3,
    jlpt: 3,
    strokes: 13,
    examples: [
      {
        value: "業",
        kana: ["ごう"],
        english: ["karma (i.e. actions committed in a former life)"]
      },
      {
        value: "企業",
        kana: ["きぎょう"],
        english: ["enterprise", "undertaking", "corporation"]
      },
      {
        value: "業界",
        kana: ["ぎょうかい"],
        english: ["industry", "business"]
      },
      {
        value: "業者",
        kana: ["ぎょうしゃ"],
        english: ["trader", "merchant"]
      },
      {
        value: "作業",
        kana: ["さぎょう"],
        english: ["work", "operation", "manufacturing", "fatigue duty"]
      }
    ],
    tags: []
  },
  {
    name: "局",
    on: ["きょく"],
    kun: ["つぼね"],
    source: "https://en.wiktionary.org/wiki/%E5%B1%80#Kanji",
    meanings: ["office"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "局",
        kana: ["きょく"],
        english: ["channel (i.e. TV or radio)", "station"]
      },
      {
        value: "事務局",
        kana: ["じむきょく"],
        english: ["secretariat", "executive office"]
      },
      {
        value: "当局",
        kana: ["とうきょく"],
        english: ["authorities", "this office"]
      },
      {
        value: "局長",
        kana: ["きょくちょう"],
        english: ["bureau director", "office chief"]
      },
      {
        value: "結局",
        kana: ["けっきょく"],
        english: ["after all", "eventually"]
      }
    ],
    tags: []
  },
  {
    name: "曲",
    on: ["キョク"],
    kun: ["まがる", "まげる", "くま"],
    source: "",
    meanings: [
      "bend",
      "music",
      "melody",
      "composition",
      "pleasure",
      "injustice",
      "fault",
      "curve",
      "crooked",
      "perverse",
      "lean"
    ],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "銀",
    on: ["ぎん"],
    kun: ["しろがね"],
    source: "https://en.wiktionary.org/wiki/%E9%8A%80#Kanji",
    meanings: ["silver"],
    grade: 3,
    jlpt: 3,
    strokes: 14,
    examples: [
      {
        value: "銀",
        kana: ["ぎん", "しろがね"],
        english: ["silver", "silver coin", "silver paint"]
      },
      {
        value: "銀行",
        kana: ["ぎんこう"],
        english: ["bank"]
      },
      {
        value: "銀座",
        kana: ["ぎんざ"],
        english: ["Ginza (shopping district in Tokyo)"]
      },
      {
        value: "住友銀行",
        kana: ["すみともぎんこう"],
        english: ["Sumitomo Bank"]
      },
      {
        value: "日本銀行",
        kana: ["にっぽんぎんこう", "にほんぎんこ"],
        english: ["Bank of Japan"]
      }
    ],
    tags: ["colour"]
  },
  {
    name: "区",
    on: ["く"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E5%8C%BA#Kanji",
    meanings: ["ward", "district"],
    grade: 3,
    jlpt: 3,
    strokes: 4,
    examples: [
      {
        value: "区",
        kana: ["く"],
        english: ["ward", "district", "section"]
      },
      {
        value: "地区",
        kana: ["ちく"],
        english: ["district", "section", "sector"]
      },
      {
        value: "小選挙区",
        kana: ["しょうせんきょく"],
        english: ["small electoral district"]
      },
      {
        value: "区内",
        kana: ["くない"],
        english: ["in the ward or borough"]
      },
      {
        value: "区域",
        kana: ["くいき"],
        english: ["limits", "boundary", "domain", "zone", "sphere"]
      }
    ],
    tags: []
  },
  {
    name: "苦",
    on: ["ク"],
    kun: ["くるしい", "ぐるしい", "くるしむ", "くるしめる", "にがい", "にがる"],
    source: "",
    meanings: ["suffering", "trial", "worry", "hardship", "feel bitter", "scowl"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "具",
    on: ["グ"],
    kun: ["そなえる", "つぶさに"],
    source: "",
    meanings: ["tool", "utensil", "means", "possess", "ingredients", "counter for armor", "suits", "sets of furniture"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "君",
    on: ["クン"],
    kun: ["きみ", "ぎみ"],
    source: "",
    meanings: ["mister", "you", "ruler", "male name suffix"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "係",
    on: ["けい"],
    kun: ["かかる", "かかり"],
    source: "https://en.wiktionary.org/wiki/%E4%BF%82#Kanji",
    meanings: ["person in charge", "connection", "duty", "concern oneself"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "係",
        kana: ["かかり"],
        english: ["official", "duty", "person in charge"]
      },
      {
        value: "関係",
        kana: ["かんけい"],
        english: ["relation", "connection"]
      },
      {
        value: "関係者",
        kana: ["かんけいしゃ"],
        english: ["authorised people"]
      },
      {
        value: "人間関係",
        kana: ["にんげんかんけい"],
        english: ["human relations"]
      },
      {
        value: "係長",
        kana: ["かかりちょう"],
        english: ["chief clerk"]
      }
    ],
    tags: []
  },
  {
    name: "軽",
    on: ["ケイ", "キョウ", "キン"],
    kun: ["かるい", "かろやか", "かろんじる"],
    source: "",
    meanings: ["lightly", "trifling", "unimportant"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "決",
    on: ["けつ"],
    kun: ["きまる"],
    source: "https://en.wiktionary.org/wiki/%E6%B1%BA#Kanji",
    meanings: ["decide", "fix", "agree upon", "appoint"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "決まって",
        kana: ["きまって"],
        english: ["always", "without fail", "usually", "regularly"]
      },
      {
        value: "決して",
        kana: ["けっして, けして"],
        english: ["never", "by no means", "decidedly", "indisputably"]
      },
      {
        value: "解決",
        kana: ["かいけつ"],
        english: ["settlement", "solution", "resolution"]
      },
      {
        value: "決議",
        kana: ["けつぎ"],
        english: ["resolution", "vote", "decision"]
      },
      {
        value: "決定",
        kana: ["けってい"],
        english: ["decision", "determination"]
      }
    ],
    tags: []
  },
  {
    name: "血",
    on: ["ケツ"],
    kun: ["ち"],
    source: "",
    meanings: ["blood"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "研",
    on: ["げん"],
    kun: ["けん", "とぐ"],
    source: "https://en.wiktionary.org/wiki/%E7%A0%94#Kanji",
    meanings: ["polish", "study of", "sharpen"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "研究",
        kana: ["けんきゅう"],
        english: ["study", "research", "investigation"]
      },
      {
        value: "研究所",
        kana: ["けんきゅうしょ", "けんきゅうじょ"],
        english: ["research establishment (institute", "laboratory"]
      },
      {
        value: "研修",
        kana: ["けんしゅう"],
        english: ["training (esp. in?service)", "induction course"]
      },
      {
        value: "研究者",
        kana: ["けんきゅうしゃ"],
        english: ["researcher"]
      },
      {
        value: "研究員",
        kana: ["けんきゅういん"],
        english: ["researcher"]
      }
    ],
    tags: []
  },
  {
    name: "県",
    on: ["けん"],
    kun: ["かける"],
    source: "https://en.wiktionary.org/wiki/%E7%9C%8C#Kanji",
    meanings: ["prefecture"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "県警",
        kana: ["けんけい"],
        english: ["prefectural police"]
      },
      {
        value: "同県",
        kana: ["どうけん"],
        english: ["the same prefecture"]
      },
      {
        value: "県知事",
        kana: ["けんちじ"],
        english: ["prefectural governor"]
      },
      {
        value: "県内",
        kana: ["けんない"],
        english: ["within the prefecture"]
      },
      {
        value: "都道府県",
        kana: ["とどうふけん"],
        english: ["administrative divisions of Japan:"]
      }
    ],
    tags: []
  },
  {
    name: "庫",
    on: ["コ", "ク"],
    kun: ["くら"],
    source: "",
    meanings: ["warehouse", "storehouse"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "湖",
    on: ["コ"],
    kun: ["みずうみ"],
    source: "",
    meanings: ["lake"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "向",
    on: ["こう"],
    kun: ["むく", "むける", "むかう", "むこう"],
    source: "https://en.wiktionary.org/wiki/%E5%90%91#Kanji",
    meanings: ["yonder", "facing", "beyond", "confront", "defy", "tend", "toward", "approach"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "方向",
        kana: ["ほうこう"],
        english: ["direction, orientation", "bearing", "way"]
      },
      {
        value: "意向",
        kana: ["いこう"],
        english: ["intention", "idea", "inclination"]
      },
      {
        value: "傾向",
        kana: ["けいこう"],
        english: ["tendency", "trend", "inclination"]
      },
      {
        value: "向き",
        kana: ["むき"],
        english: ["direction", "orientation", "aspect", "situation"]
      },
      {
        value: "向上",
        kana: ["こうじょう"],
        english: ["elevation", "rise", "improvement", "advancement"]
      }
    ],
    tags: []
  },
  {
    name: "幸",
    on: ["コウ"],
    kun: ["さいわい", "さち", "しあわせ"],
    source: "",
    meanings: ["happiness", "blessing", "fortune"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "港",
    on: ["コウ"],
    kun: ["みなと"],
    source: "",
    meanings: ["harbor"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "号",
    on: ["ゴウ"],
    kun: ["さけぶ", "よびな"],
    source: "",
    meanings: ["nickname", "number", "item", "title", "pseudonym", "name", "call"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "根",
    on: ["コン"],
    kun: ["ね", "ね"],
    source: "",
    meanings: ["root", "radical", "head (pimple)"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "祭",
    on: ["サイ"],
    kun: ["まつる", "まつり", "まつり"],
    source: "",
    meanings: ["ritual", "offer prayers", "celebrate", "deify", "enshrine", "worship"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "坂",
    on: ["ハン"],
    kun: ["さか"],
    source: "",
    meanings: ["slope", "incline", "hill"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "皿",
    on: ["ベイ"],
    kun: ["さら"],
    source: "",
    meanings: ["dish", "a helping", "plate"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "仕",
    on: ["し", "じ"],
    kun: ["つかえる"],
    source: "https://en.wiktionary.org/wiki/%E4%BB%95#Kanji",
    meanings: ["serve", "attend", "doing", "official"],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "仕事",
        kana: ["しごと"],
        english: ["work", "job", "business", "occupation", "employment"]
      },
      {
        value: "仕組み",
        kana: ["しくみ"],
        english: ["structure", "construction", "arrangement"]
      },
      {
        value: "仕方",
        kana: ["しかた"],
        english: ["way", "method", "means", "resource", "course"]
      },
      {
        value: "仕掛け",
        kana: ["しかけ"],
        english: ["device", "trick", "mechanism", "gadget"]
      },
      {
        value: "仕手",
        kana: ["して"],
        english: ["doer", "performer"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "使",
    on: ["し"],
    kun: ["つかう"],
    source: "https://en.wiktionary.org/wiki/%E4%BD%BF#Kanji",
    meanings: ["use"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "使わす",
        kana: ["つかわす"],
        english: ["to send", "to dispatch"]
      },
      {
        value: "使う",
        kana: ["つかう"],
        english: ["to use (a thing, method, etc.)"]
      },
      {
        value: "使用",
        kana: ["しよう"],
        english: ["use", "application", "employment", "utilisation"]
      },
      {
        value: "大使",
        kana: ["たいし"],
        english: ["ambassador"]
      },
      {
        value: "行使",
        kana: ["こうし"],
        english: ["use", "exercise"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "始",
    on: ["し"],
    kun: ["はじめる", "はじまる"],
    source: "https://en.wiktionary.org/wiki/%E5%A7%8B#Kanji",
    meanings: ["begin", "commerce"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "開始",
        kana: ["かいし"],
        english: ["start", "commencement", "beginning", "initiation"]
      },
      {
        value: "始まり",
        kana: ["はじまり"],
        english: ["origin", "beginning"]
      },
      {
        value: "終始",
        kana: ["しゅうし"],
        english: ["from beginning to end"]
      },
      {
        value: "始める",
        kana: ["はじめる"],
        english: ["to start", "to begin", "to commence", "to initiate"]
      },
      {
        value: "始め",
        kana: ["はじめ"],
        english: ["beginning", "start", "origin"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "指",
    on: ["し"],
    kun: ["ゆび", "さす"],
    source: "https://en.wiktionary.org/wiki/%E6%8C%87#Kanji",
    meanings: ["finger", "point"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "指",
        kana: ["ゆび", "および", "おゆび"],
        english: ["finger", "toe", "digit"]
      },
      {
        value: "指導",
        kana: ["しどう"],
        english: ["leadership", "guidance", "coaching"]
      },
      {
        value: "指揮",
        kana: ["しき"],
        english: ["command", "direction"]
      },
      {
        value: "指定",
        kana: ["してい"],
        english: ["designation", "specification", "assignment"]
      },
      {
        value: "指名",
        kana: ["しめい"],
        english: ["name", "nominate", "designate"]
      }
    ],
    tags: []
  },
  {
    name: "死",
    on: ["し"],
    kun: ["しぬ"],
    source: "https://en.wiktionary.org/wiki/%E6%AD%BB#Kanji",
    meanings: ["death", "die"],
    grade: 3,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "死",
        kana: ["し"],
        english: ["death", "decease"]
      },
      {
        value: "死者",
        kana: ["ししゃ"],
        english: ["casualty", "deceased"]
      },
      {
        value: "脳死",
        kana: ["のうし"],
        english: ["brain death"]
      },
      {
        value: "死亡",
        kana: ["しぼう"],
        english: ["death", "mortality"]
      },
      {
        value: "二死",
        kana: ["にし"],
        english: ["two out (e.g. in baseball)"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "詩",
    on: ["シ"],
    kun: ["うた"],
    source: "",
    meanings: ["poem", "poetry"],
    grade: 3,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "歯",
    on: ["シ"],
    kun: ["よわい", "は", "よわい", "よわいする"],
    source: "",
    meanings: ["tooth", "cog"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "事",
    on: ["じ"],
    kun: ["こと"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%8B#Kanji",
    meanings: ["matter", "thing", "fact", "business", "reason", "possibly"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "事",
        kana: ["こと"],
        english: ["thing", "matter", "fact", "circumstances", "business"]
      },
      {
        value: "幹事",
        kana: ["かんじ"],
        english: ["executive secretary", "coordinator", "organizer"]
      },
      {
        value: "記事",
        kana: ["きじ"],
        english: ["article", "news story", "report", "account"]
      },
      {
        value: "軍事",
        kana: ["ぐんじ"],
        english: ["military affairs"]
      },
      {
        value: "仕事",
        kana: ["しごと"],
        english: ["work", "job", "business", "occupation", "employment"]
      }
    ],
    tags: []
  },
  {
    name: "持",
    on: ["じ"],
    kun: ["もつ"],
    source: "https://en.wiktionary.org/wiki/%E6%8C%81#Kanji",
    meanings: ["hold", "have"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "維持",
        kana: ["いじ"],
        english: ["maintenance", "preservation", "improvement"]
      },
      {
        value: "支持",
        kana: ["しじ"],
        english: ["support", "maintenance"]
      },
      {
        value: "気持ち",
        kana: ["きもち"],
        english: ["feeling", "sensation", "mood"]
      },
      {
        value: "持ち",
        kana: ["もち"],
        english: ["hold", "charge", "keep possession", "in charge"]
      },
      {
        value: "持つ",
        kana: ["もつ"],
        english: ["to hold", "to carry", "to possess"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "次",
    on: ["じ", "し"],
    kun: ["つぐ", "つぎ"],
    source: "https://en.wiktionary.org/wiki/%E6%AC%A1#Kanji",
    meanings: ["next", "order", "sequence"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "次官",
        kana: ["じかん"],
        english: ["vice-minister", "undersecretary"]
      },
      {
        value: "事務次官",
        kana: ["じむじかん"],
        english: ["permanent vice-president", "undersecretary"]
      },
      {
        value: "次期",
        kana: ["じき"],
        english: ["next term", "next period", "next version"]
      },
      {
        value: "次長",
        kana: ["じちょう"],
        english: ["vice", "assistant director", "vice-director"]
      },
      {
        value: "次々",
        kana: ["つぎつぎ"],
        english: ["in succession", "one by one"]
      }
    ],
    tags: []
  },
  {
    name: "式",
    on: ["しき"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E5%BC%8F#Kanji",
    meanings: ["style", "ceremony", "rite", "function", "method", "system", "form", "expression"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "株式",
        kana: ["かぶしき"],
        english: ["stock (company)"]
      },
      {
        value: "公式",
        kana: ["こうしき"],
        english: ["formality", "formal", "official", "formula"]
      },
      {
        value: "正式",
        kana: ["せいしき"],
        english: ["due form", "official", "formality"]
      },
      {
        value: "方式",
        kana: ["ほうしき"],
        english: ["form", "method", "system", "formula"]
      },
      {
        value: "形式",
        kana: ["けいしき"],
        english: ["form (as opposed to substance)", "formality"]
      }
    ],
    tags: []
  },
  {
    name: "実",
    on: ["じつ"],
    kun: ["み", "みのる"],
    source: "https://en.wiktionary.org/wiki/%E5%AE%9F#Kanji",
    meanings: ["reality", "truth"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "実",
        kana: ["じつ", "じち"],
        english: ["truth", "reality", "sincerity", "honesty", "fidelity"]
      },
      {
        value: "実は",
        kana: ["じつは"],
        english: ["as a matter of fact", "by the way"]
      },
      {
        value: "実に",
        kana: ["じつに", "まことに", "げに", "しんに"],
        english: ["indeed", "really", "absolutely", "truly", "actually"]
      },
      {
        value: "現実",
        kana: ["げんじつ"],
        english: ["reality"]
      },
      {
        value: "事実",
        kana: ["じじつ"],
        english: ["fact", "truth", "reality"]
      }
    ],
    tags: []
  },
  {
    name: "写",
    on: ["しゃ"],
    kun: ["うつす", "うつる"],
    source: "https://en.wiktionary.org/wiki/%E5%86%99#Kanji",
    meanings: ["copy", "be photographed", "describe"],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "写真",
        kana: ["しゃしん"],
        english: ["photograph", "photo", "movie"]
      },
      {
        value: "写真集",
        kana: ["しゃしんしゅう"],
        english: ["collection of photographs", "photoalbum"]
      },
      {
        value: "写る",
        kana: ["うつる"],
        english: ["to be photographed", "to be projected"]
      },
      {
        value: "描写",
        kana: ["びょうしゃ"],
        english: ["depiction", "description", "portrayal"]
      },
      {
        value: "青写真",
        kana: ["あおじゃしん"],
        english: ["blueprint", "plan"]
      }
    ],
    tags: []
  },
  {
    name: "者",
    on: ["しゃ"],
    kun: ["もの"],
    source: "https://en.wiktionary.org/wiki/%E8%80%85#Kanji",
    meanings: ["someone", "person"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "患者",
        kana: ["かんじゃ"],
        english: ["a patient"]
      },
      {
        value: "関係者",
        kana: ["かんけいしゃ"],
        english: ["authorised people"]
      },
      {
        value: "記者",
        kana: ["きしゃ"],
        english: ["reporter"]
      },
      {
        value: "業者",
        kana: ["ぎょうしゃ"],
        english: ["trader", "merchant"]
      },
      {
        value: "容疑者",
        kana: ["ようぎしゃ"],
        english: ["suspect person"]
      }
    ],
    tags: []
  },
  {
    name: "主",
    on: ["しゅ"],
    kun: ["おも", "ぬし"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%BB#Kanji",
    meanings: ["lord", "chief", "master", "main thing", "principal"],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "主に",
        kana: ["おもに"],
        english: ["mainly", "primarily"]
      },
      {
        value: "喪主",
        kana: ["もしゅ"],
        english: ["chief mourner"]
      },
      {
        value: "民主",
        kana: ["みんしゅ"],
        english: ["democracy", "popular sovereignty", "democratic"]
      },
      {
        value: "主義",
        kana: ["しゅぎ"],
        english: ["doctrine", "rule", "principle"]
      },
      {
        value: "主催",
        kana: ["しゅさい"],
        english: ["organisation", "sponsorship"]
      }
    ],
    tags: []
  },
  {
    name: "取",
    on: ["しゅ"],
    kun: ["とる"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%96#Kanji",
    meanings: ["take", "fetch", "take up"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "取る",
        kana: ["とる"],
        english: ["to take", "to pick up", "to harvest", "to earn"]
      },
      {
        value: "取引",
        kana: ["とりひき"],
        english: ["transactions", "dealings", "business"]
      },
      {
        value: "取材",
        kana: ["しゅざい"],
        english: ["collecting data (e.g. for a newspaper article)", "covering an event"]
      },
      {
        value: "取っ手",
        kana: ["とって", "はしゅ"],
        english: ["handle", "grip", "knob"]
      },
      {
        value: "取締役",
        kana: ["とりしまりやく"],
        english: ["company director", "board member"]
      }
    ],
    tags: []
  },
  {
    name: "守",
    on: ["シュ", "ス"],
    kun: ["まもる", "まもり", "もり", "もり", "かみ"],
    source: "",
    meanings: ["guard", "protect", "defend", "obey"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "酒",
    on: ["シュ"],
    kun: ["さけ", "さか"],
    source: "",
    meanings: ["sake", "alcohol"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "受",
    on: ["じゅ"],
    kun: ["うける", "うかる"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%97#Kanji",
    meanings: ["accept", "undergo", "answer (phone)", "take", "get", "catch", "receive"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "受け",
        kana: ["うけ"],
        english: ["popularity", "favour", "reception", "defense"]
      },
      {
        value: "受験",
        kana: ["じゅけん"],
        english: ["taking an examination"]
      },
      {
        value: "受け入れ",
        kana: ["うけいれ"],
        english: ["receiving", "acceptance"]
      },
      {
        value: "受賞",
        kana: ["じゅしょう"],
        english: ["winning (a prize)"]
      },
      {
        value: "受注",
        kana: ["じゅちゅう"],
        english: ["accepting orders"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "州",
    on: ["しゅう"],
    kun: ["す"],
    source: "https://en.wiktionary.org/wiki/%E5%B7%9E#Kanji",
    meanings: ["state", "province"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "州",
        kana: ["しゅう"],
        english: ["state", "province", "county (UK)"]
      },
      {
        value: "欧州",
        kana: ["おうしゅう"],
        english: ["Europe"]
      },
      {
        value: "九州",
        kana: ["きゅうしゅう"],
        english: ["Kyushu (southernmost of the four main islandsof Japan)"]
      },
      {
        value: "州都",
        kana: ["しゅうと"],
        english: ["capital (city) of a state"]
      },
      {
        value: "州政府",
        kana: ["しゅうせいふ"],
        english: ["state government"]
      }
    ],
    tags: []
  },
  {
    name: "拾",
    on: ["シュウ", "ジュウ"],
    kun: ["ひろう"],
    source: "",
    meanings: ["pick up", "gather", "find", "go on foot", "ten"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "終",
    on: ["しゅう"],
    kun: ["おわる", "おえる"],
    source: "https://en.wiktionary.org/wiki/%E7%B5%82#Kanji",
    meanings: ["end", "finish"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "終わり",
        kana: ["おわり"],
        english: ["the end"]
      },
      {
        value: "最終",
        kana: ["さいしゅう"],
        english: ["last", "final", "closing"]
      },
      {
        value: "終える",
        kana: ["おえる"],
        english: ["to finish"]
      },
      {
        value: "終結",
        kana: ["しゅうけつ"],
        english: ["end", "close"]
      },
      {
        value: "最終的",
        kana: ["さいしゅうてき"],
        english: ["finally"]
      }
    ],
    tags: []
  },
  {
    name: "習",
    on: ["しゅう"],
    kun: ["ならう"],
    source: "https://en.wiktionary.org/wiki/%E7%BF%92#Kanji",
    meanings: ["learn"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "練習",
        kana: ["れんしゅう"],
        english: ["practice", "practise"]
      },
      {
        value: "学習",
        kana: ["がくしゅう"],
        english: ["study", "learning", "tutorial"]
      },
      {
        value: "演習",
        kana: ["えんしゅう"],
        english: ["practice", "exercises", "manoeuvres"]
      },
      {
        value: "習慣",
        kana: ["しゅうかん"],
        english: ["custom", "habit", "manners"]
      },
      {
        value: "講習",
        kana: ["こうしゅう"],
        english: ["short course", "training"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "集",
    on: ["しゅう"],
    kun: ["あつまる", "あつめる", "つどう"],
    source: "https://en.wiktionary.org/wiki/%E9%9B%86#Kanji",
    meanings: ["gather", "meet", "congregate", "swarm", "flock"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "集める",
        kana: ["あつめる"],
        english: ["to collect", "to assemble", "to gather"]
      },
      {
        value: "集会",
        kana: ["しゅうかい"],
        english: ["meeting", "assembly"]
      },
      {
        value: "集団",
        kana: ["しゅうだん"],
        english: ["group", "mass"]
      },
      {
        value: "編集",
        kana: ["へんしゅう"],
        english: ["editing", "compilation"]
      },
      {
        value: "集中",
        kana: ["しゅうちゅう"],
        english: ["concentration", "convergence", "centralization"]
      }
    ],
    tags: []
  },
  {
    name: "住",
    on: ["じゅう"],
    kun: ["すむ", "すまう"],
    source: "https://en.wiktionary.org/wiki/%E4%BD%8F#Kanji",
    meanings: ["dwell", "reside", "live", "inhabit"],
    grade: 3,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "住",
        kana: ["じゅう"],
        english: ["dwelling", "living"]
      },
      {
        value: "住宅",
        kana: ["じゅうたく"],
        english: ["residence", "housing", "residential building"]
      },
      {
        value: "住民",
        kana: ["じゅうみん"],
        english: ["citizens", "inhabitants", "residents", "population"]
      },
      {
        value: "住所",
        kana: ["じゅうしょ"],
        english: ["address (e.g. of house)", "residence", "domicile"]
      },
      {
        value: "在住",
        kana: ["ざいじゅう"],
        english: ["resident"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "重",
    on: ["じゅう", "ちょう"],
    kun: ["え", "かさなる"],
    source: "https://en.wiktionary.org/wiki/%E9%87%8D#Kanji",
    meanings: ["heavy", "heap up", "pile up", "nest of boxes", "fold"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "重さ",
        kana: ["おもさ"],
        english: ["weight"]
      },
      {
        value: "重要",
        kana: ["じゅうよう"],
        english: ["important", "momentous", "essential", "principal"]
      },
      {
        value: "重大",
        kana: ["じゅうだい"],
        english: ["serious", "important", "significant", "grave"]
      },
      {
        value: "重み",
        kana: ["おもみ"],
        english: ["importance", "weight", "dignity", "emphasis"]
      },
      {
        value: "貴重",
        kana: ["きちょう"],
        english: ["precious", "valuable"]
      }
    ],
    tags: []
  },
  {
    name: "宿",
    on: ["シュク"],
    kun: ["やど", "やどる", "やどす"],
    source: "",
    meanings: ["inn", "lodging", "relay station", "dwell", "lodge", "be pregnant", "home", "dwelling"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "所",
    on: ["しょ"],
    kun: ["ところ"],
    source: "https://en.wiktionary.org/wiki/%E6%89%80#Kanji",
    meanings: ["place"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "事務所",
        kana: ["じむしょ"],
        english: ["office"]
      },
      {
        value: "場所",
        kana: ["ばしょ"],
        english: ["place", "location"]
      },
      {
        value: "研究所",
        kana: ["けんきゅうしょ", "けんきゅうじょ"],
        english: ["research establishment (institute, laboratory)"]
      },
      {
        value: "所得",
        kana: ["しょとく"],
        english: ["income", "earnings"]
      },
      {
        value: "住所",
        kana: ["じゅうしょ"],
        english: ["address (e.g. of house)", "residence", "domicile"]
      }
    ],
    tags: []
  },
  {
    name: "暑",
    on: ["ショ"],
    kun: ["あつい"],
    source: "",
    meanings: ["sultry", "hot", "summer heat"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "助",
    on: ["じょ"],
    kun: ["たすける", "たすかる", "すけ"],
    source: "https://en.wiktionary.org/wiki/%E5%8A%A9#Kanji",
    meanings: ["help", "rescue", "assist"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "援助",
        kana: ["えんじょ"],
        english: ["assistance", "aid", "support"]
      },
      {
        value: "補助",
        kana: ["ほじょ"],
        english: ["assistance", "support", "aid", "auxiliary"]
      },
      {
        value: "助教授",
        kana: ["じょきょうじゅ"],
        english: ["assistant professor"]
      },
      {
        value: "助成",
        kana: ["じょせい"],
        english: ["assisting", "assistance", "fostering", "aiding"]
      },
      {
        value: "助手",
        kana: ["じょしゅ", "すけて"],
        english: ["helper", "helpmeet", "assistant", "tutor"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "勝",
    on: ["しょう"],
    kun: ["かつ", "すぐれる", "まさる"],
    source: "https://en.wiktionary.org/wiki/%E5%8B%9D#Kanji",
    meanings: ["win"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [
      {
        value: "勝る",
        kana: ["まさる"],
        english: ["to excel", "to surpass", "to exceed"]
      },
      {
        value: "勝ち",
        kana: ["かち"],
        english: ["win", "victory"]
      },
      {
        value: "優勝",
        kana: ["ゆうしょう"],
        english: ["overall victory", "championship"]
      },
      {
        value: "決勝",
        kana: ["けっしょう"],
        english: ["decision of a contest", "finals (in sports)"]
      },
      {
        value: "勝利",
        kana: ["しょうり"],
        english: ["victory", "triumph", "conquest", "success", "win"]
      }
    ],
    tags: []
  },
  {
    name: "商",
    on: ["しょう"],
    kun: ["あきなう"],
    source: "https://en.wiktionary.org/wiki/%E5%95%86#Kanji",
    meanings: ["make a deal", "selling", "dealing in", "merchant"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [
      {
        value: "商",
        kana: ["しょう"],
        english: ["quotient", "dealing", "dealer", "store"]
      },
      {
        value: "商品",
        kana: ["しょうひん"],
        english: ["commodity", "article of commerce", "goods", "stock"]
      },
      {
        value: "商業",
        kana: ["しょうぎょう"],
        english: ["commerce", "trade", "business"]
      },
      {
        value: "商社",
        kana: ["しょうしゃ"],
        english: ["trading company", "firm"]
      },
      {
        value: "通商",
        kana: ["つうしょう"],
        english: ["commerce", "trade"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "昭",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["shining", "bright"],
    grade: 3,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "消",
    on: ["しょう"],
    kun: ["きえる"],
    source: "https://en.wiktionary.org/wiki/%E6%B6%88#Kanji",
    meanings: ["extinguish", "blow out", "turn off", "neutralize", "cancel"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "消費",
        kana: ["しょうひ"],
        english: ["consumption", "expenditure"]
      },
      {
        value: "消費者",
        kana: ["しょうひしゃ"],
        english: ["consumer"]
      },
      {
        value: "消費税",
        kana: ["しょうひぜい"],
        english: ["consumption tax (incl. sales tax, VAT"]
      },
      {
        value: "解消",
        kana: ["かいしょう"],
        english: ["cancellation", "liquidation", "resolution"]
      },
      {
        value: "消極的",
        kana: ["しょうきょくてき"],
        english: ["negative", "half-hearted", "passive", "unmotivated"]
      }
    ],
    tags: []
  },
  {
    name: "章",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["badge", "chapter", "composition", "poem", "design"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "乗",
    on: ["じょう"],
    kun: ["のる"],
    source: "https://en.wiktionary.org/wiki/%E4%B9%97#Kanji",
    meanings: ["ride", "power", "multiplication", "record", "counter for vehicles", "board", "mount", "join"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "乗り",
        kana: ["のり"],
        english: ["riding", "ride", "spread (of paints)"]
      },
      {
        value: "乗用車",
        kana: ["じょうようしゃ"],
        english: ["passenger vehicle", "automobile"]
      },
      {
        value: "乗客",
        kana: ["じょうきゃく", "じょうかく"],
        english: ["passenger"]
      },
      {
        value: "乗せる",
        kana: ["のせる"],
        english: ["to place on (something)", "to take on board"]
      },
      {
        value: "乗員",
        kana: ["じょういん"],
        english: ["crew"]
      }
    ],
    tags: ["counter", "verb"]
  },
  {
    name: "植",
    on: ["ショク"],
    kun: ["うえる", "うわる"],
    source: "",
    meanings: ["plant"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "深",
    on: ["シン"],
    kun: ["ふかい", "ぶかい", "ふかまる", "ふかめる", "み"],
    source: "",
    meanings: ["deep", "heighten", "intensify", "strengthen"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "申",
    on: ["シン"],
    kun: ["もうす", "もうし", "さる"],
    source: "",
    meanings: ["have the honor to", "sign of the monkey", "3-5PM", "ninth sign of Chinese zodiac"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "真",
    on: ["しん"],
    kun: ["ま"],
    source: "https://en.wiktionary.org/wiki/%E7%9C%9F#Kanji",
    meanings: ["true", "reality"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "写真",
        kana: ["しゃしん"],
        english: ["photograph", "photo", "movie"]
      },
      {
        value: "真の",
        kana: ["しんの"],
        english: ["true", "real", "genuine", "proper", "utter"]
      },
      {
        value: "真相",
        kana: ["しんそう"],
        english: ["truth", "real situation"]
      },
      {
        value: "真実",
        kana: ["しんじつ", "さな", "さね"],
        english: ["truth", "reality"]
      },
      {
        value: "真ん中",
        kana: ["まんなか", "まなか"],
        english: ["middle", "centre"]
      }
    ],
    tags: []
  },
  {
    name: "神",
    on: ["しん", "じん"],
    kun: ["かみ", "かん", "こう"],
    source: "https://en.wiktionary.org/wiki/%E7%A5%9E#Kanji",
    meanings: ["gods", "mind", "soul"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "神",
        kana: ["かみ"],
        english: ["god", "deity", "divinity", "spirit", "kami"]
      },
      {
        value: "精神",
        kana: ["せいしん"],
        english: ["mind", "soul", "heart", "spirit", "intention"]
      },
      {
        value: "阪神",
        kana: ["はんしん"],
        english: ["Osaka-Kobe Hanshin (company name: rail-way)"]
      },
      {
        value: "神経",
        kana: ["しんけい"],
        english: ["nerve", "sensitivity"]
      },
      {
        value: "神社",
        kana: ["じんじゃ"],
        english: ["Shinto shrine"]
      }
    ],
    tags: []
  },
  {
    name: "身",
    on: ["しん"],
    kun: ["み"],
    source: "https://en.wiktionary.org/wiki/%E8%BA%AB#Kanji",
    meanings: ["somebody", "person", "one’s station in life"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "身",
        kana: ["み"],
        english: ["body", "oneself", "one’s place", "one’s position"]
      },
      {
        value: "自身",
        kana: ["じしん"],
        english: ["by oneself", "personally"]
      },
      {
        value: "出身",
        kana: ["しゅっしん"],
        english: ["person’s origin (town, city, country, etc.)"]
      },
      {
        value: "中身",
        kana: ["なかみ"],
        english: ["contents", "interior", "substance", "filling"]
      },
      {
        value: "身長",
        kana: ["しんちょう"],
        english: ["height (of body)", "stature"]
      }
    ],
    tags: []
  },
  {
    name: "進",
    on: ["しん"],
    kun: ["すすむ", "すすめる"],
    source: "https://en.wiktionary.org/wiki/%E9%80%B2#Kanji",
    meanings: ["advance", "proceed", "progress", "promote"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "推進",
        kana: ["すいしん"],
        english: ["propulsion", "driving force", "implementation"]
      },
      {
        value: "進出",
        kana: ["しんしゅつ"],
        english: ["advance", "step forward"]
      },
      {
        value: "先進国",
        kana: ["せんしんこく"],
        english: ["advanced (developed) country"]
      },
      {
        value: "進展",
        kana: ["しんてん"],
        english: ["progress", "development"]
      },
      {
        value: "促進",
        kana: ["そくしん"],
        english: ["promotion", "acceleration", "encouragement"]
      }
    ],
    tags: []
  },
  {
    name: "世",
    on: ["せ", "せい"],
    kun: ["よ"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%96#Kanji",
    meanings: ["generation", "world", "society", "public"],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "世",
        kana: ["よ"],
        english: ["world", "society", "age", "generation"]
      },
      {
        value: "世界",
        kana: ["せかい"],
        english: ["the world", "society", "the universe"]
      },
      {
        value: "世代",
        kana: ["せだい"],
        english: ["generation", "the world", "the age"]
      },
      {
        value: "世論",
        kana: ["せろん, よろん"],
        english: ["public opinion"]
      },
      {
        value: "世界的",
        kana: ["せかいてき"],
        english: ["global", "international", "world famous"]
      }
    ],
    tags: []
  },
  {
    name: "整",
    on: ["セイ"],
    kun: ["ととのえる", "ととのう"],
    source: "",
    meanings: ["organize", "arranging", "tune", "tone", "meter", "key (music)"],
    grade: 3,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "昔",
    on: ["セキ", "シャク"],
    kun: ["むかし"],
    source: "",
    meanings: ["once upon a time", "antiquity", "old times"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "全",
    on: ["ぜん"],
    kun: ["すべて", "まったく"],
    source: "https://en.wiktionary.org/wiki/%E5%85%A8#Kanji",
    meanings: ["whole", "entire", "all", "complete", "fulfill"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "安全",
        kana: ["あんぜん"],
        english: ["safety", "security"]
      },
      {
        value: "全体",
        kana: ["ぜんたい"],
        english: ["whole", "entirety", "whatever (is the matter)"]
      },
      {
        value: "全国",
        kana: ["ぜんこく", "ぜんごく"],
        english: ["country wide", "nation wide", "whole country"]
      },
      {
        value: "安全保障",
        kana: ["あんぜんほしょう"],
        english: ["security guarantee (e.g. military security"]
      },
      {
        value: "全員",
        kana: ["ぜんいん"],
        english: ["all members (unanimity)", "all hands"]
      }
    ],
    tags: []
  },
  {
    name: "想",
    on: ["そう"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E6%83%B3#Kanji",
    meanings: ["concept", "think", "idea", "thought"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [
      {
        value: "構想",
        kana: ["こうそう"],
        english: ["plan", "plot", "idea", "conception"]
      },
      {
        value: "予想",
        kana: ["よそう"],
        english: ["expectation", "anticipation", "prediction"]
      },
      {
        value: "思想",
        kana: ["しそう"],
        english: ["thought", "idea", "ideology"]
      },
      {
        value: "感想",
        kana: ["かんそう"],
        english: ["impressions", "thoughts"]
      },
      {
        value: "発想",
        kana: ["はっそう"],
        english: ["expression (e.g. in music)", "idea", "conception"]
      }
    ],
    tags: []
  },
  {
    name: "相",
    on: ["そう", "しょう"],
    kun: ["あい"],
    source: "https://en.wiktionary.org/wiki/%E7%9B%B8#Kanji",
    meanings: ["mutual", "together", "each other", "minister of state", "councillor", "aspect", "phase", "physiognomy"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "外相",
        kana: ["がいしょう"],
        english: ["Foreign Minister"]
      },
      {
        value: "首相",
        kana: ["しゅしょう"],
        english: ["Prime Minister", "Chancellor (Germany, Austria"]
      },
      {
        value: "相手",
        kana: ["あいて"],
        english: ["companion", "partner", "company", "other party"]
      },
      {
        value: "相談",
        kana: ["そうだん"],
        english: ["consultation, discussion"]
      },
      {
        value: "蔵相",
        kana: ["ぞうしょう"],
        english: ["Minister of Finance"]
      }
    ],
    tags: []
  },
  {
    name: "送",
    on: ["す", "そう"],
    kun: ["おくる"],
    source: "https://en.wiktionary.org/wiki/%E9%80%81#Kanji",
    meanings: ["escort", "send"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "送る",
        kana: ["おくる"],
        english: ["to send (a thing)", "to dispatch"]
      },
      {
        value: "放送",
        kana: ["ほうそう"],
        english: ["broadcast", "broadcasting"]
      },
      {
        value: "輸送",
        kana: ["ゆそう"],
        english: ["transport", "transportation"]
      },
      {
        value: "送り",
        kana: ["おくり"],
        english: ["seeing off", "sending off", "funeral", "escapement"]
      },
      {
        value: "先送り",
        kana: ["さきおくり"],
        english: ["postpone"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "息",
    on: ["ソク"],
    kun: ["いき"],
    source: "",
    meanings: ["breath", "respiration", "son", "interest (on money)"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "速",
    on: ["ソク"],
    kun: ["はやい", "はや", "はやめる", "すみやか"],
    source: "",
    meanings: ["quick", "fast"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "族",
    on: ["ぞく"],
    kun: ["やから"],
    source: "https://en.wiktionary.org/wiki/%E6%97%8F#Kanji",
    meanings: ["tribe", "family"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "家族",
        kana: ["かぞく"],
        english: ["family", "members of a family"]
      },
      {
        value: "族",
        kana: ["ぞく"],
        english: ["tribe", "clan", "band"]
      },
      {
        value: "民族",
        kana: ["みんぞく"],
        english: ["people", "race", "nation"]
      },
      {
        value: "遺族",
        kana: ["いぞく"],
        english: ["bereaved family"]
      },
      {
        value: "民族主義",
        kana: ["みんぞくしゅぎ"],
        english: ["nationalism"]
      }
    ],
    tags: []
  },
  {
    name: "他",
    on: ["タ"],
    kun: ["ほか"],
    source: "",
    meanings: ["other", "another", "the others"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "打",
    on: ["だ"],
    kun: ["うつ"],
    source: "https://en.wiktionary.org/wiki/%E6%89%93#Kanji",
    meanings: ["strike", "hit", "knock", "pound", "dozen"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [
      {
        value: "打つ",
        kana: ["うつ"],
        english: ["to hit (something inanimate)", "to strike"]
      },
      {
        value: "本塁打",
        kana: ["ほんるいだ"],
        english: ["home run (baseball)"]
      },
      {
        value: "打撃",
        kana: ["だげき"],
        english: ["blow", "shock", "strike", "damage"]
      },
      {
        value: "打線",
        kana: ["だせん"],
        english: ["baseball lineup"]
      },
      {
        value: "安打",
        kana: ["あんだ"],
        english: ["safe hit (baseball)"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "対",
    on: ["たい"],
    kun: ["つい"],
    source: "https://en.wiktionary.org/wiki/%E5%AF%BE#Kanji",
    meanings: ["opposite", "even", "equal", "versus", "anti", "compare"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "対応",
        kana: ["たいおう"],
        english: ["interaction", "correspondence", "coping with"]
      },
      {
        value: "対策",
        kana: ["たいさく"],
        english: ["counter plan", "counter", "measure"]
      },
      {
        value: "対象",
        kana: ["たいしょう"],
        english: ["target", "object (of worship, study, etc.)"]
      },
      {
        value: "反対",
        kana: ["はんたい"],
        english: ["opposition", "resistance", "antagonism", "hostility"]
      },
      {
        value: "対立",
        kana: ["たいりつ"],
        english: ["confrontation, opposition, antagonism"]
      }
    ],
    tags: []
  },
  {
    name: "待",
    on: ["だい", "たい"],
    kun: ["まつ"],
    source: "https://en.wiktionary.org/wiki/%E5%BE%85#Kanji",
    meanings: ["wait", "depend on"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "期待",
        kana: ["きたい"],
        english: ["expectation", "anticipation", "hope"]
      },
      {
        value: "招待",
        kana: ["しょうたい"],
        english: ["invitation"]
      },
      {
        value: "待遇",
        kana: ["たいぐう"],
        english: ["treatment", "reception"]
      },
      {
        value: "待ち",
        kana: ["まち"],
        english: ["waiting", "waiting time"]
      },
      {
        value: "接待",
        kana: ["せったい"],
        english: ["reception", "welcome", "serving (food)"]
      }
    ],
    tags: []
  },
  {
    name: "代",
    on: ["だい", "たい"],
    kun: ["かわる", "よ", "かえる", "しろ"],
    source: "https://en.wiktionary.org/wiki/%E4%BB%A3#Kanji",
    meanings: [
      "substitute",
      "change",
      "convert",
      "replace",
      "period",
      "age",
      "counter for decades of ages",
      "eras",
      "generation",
      "charge",
      "rate",
      "fee"
    ],
    grade: 3,
    jlpt: 3,
    strokes: 5,
    examples: [
      {
        value: "代わり",
        kana: ["かわり", "がわり"],
        english: ["substitute", "deputy", "proxy", "alternate", "relief"]
      },
      {
        value: "時代",
        kana: ["じだい"],
        english: ["period", "epoch", "era", "age", "the times"]
      },
      {
        value: "代表",
        kana: ["だいひょう"],
        english: ["representative", "representation", "delegation"]
      },
      {
        value: "現代",
        kana: ["げんだい"],
        english: ["nowadays", "modern era", "modern times"]
      },
      {
        value: "世代",
        kana: ["せだい"],
        english: ["generation", "the world", "the age"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "第",
    on: ["ダイ", "テイ"],
    kun: [],
    source: "",
    meanings: ["No.", "residence"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "題",
    on: ["だい"],
    kun: ["ひたい"],
    source: "https://en.wiktionary.org/wiki/%E9%A1%8C#Kanji",
    meanings: ["topic", "subject"],
    grade: 3,
    jlpt: 3,
    strokes: 18,
    examples: [
      {
        value: "課題",
        kana: ["かだい"],
        english: ["subject", "theme", "task", "challenge", "issue"]
      },
      {
        value: "問題",
        kana: ["もんだい"],
        english: ["problem", "question"]
      },
      {
        value: "話題",
        kana: ["わだい"],
        english: ["topic", "subject"]
      },
      {
        value: "題",
        kana: ["だい"],
        english: ["title", "subject", "theme", "topic"]
      },
      {
        value: "問題点",
        kana: ["もんだいてん"],
        english: ["the point at issue"]
      }
    ],
    tags: []
  },
  {
    name: "炭",
    on: ["タン"],
    kun: ["すみ"],
    source: "",
    meanings: ["charcoal", "coal"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "短",
    on: ["タン"],
    kun: ["みじかい"],
    source: "",
    meanings: ["short", "brevity", "fault", "defect", "weak point"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "談",
    on: ["だん"],
    kun: ["かたる"],
    source: "https://en.wiktionary.org/wiki/%E8%AB%87#Kanji",
    meanings: ["discuss", "talk"],
    grade: 3,
    jlpt: 2,
    strokes: 15,
    examples: [
      {
        value: "会談",
        kana: ["かいだん"],
        english: ["conversation", "conference", "discussion"]
      },
      {
        value: "相談",
        kana: ["そうだん"],
        english: ["consultation", "discussion"]
      },
      {
        value: "懇談",
        kana: ["こんだん"],
        english: ["informal talk"]
      },
      {
        value: "談合",
        kana: ["だんごう"],
        english: ["consultation", "discussion", "conference"]
      },
      {
        value: "相談役",
        kana: ["そうだんやく"],
        english: ["counselor", "counsellor", "adviser", "advisor"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "着",
    on: ["じゃく", "ちゃく"],
    kun: ["つく", "つける"],
    source: "https://en.wiktionary.org/wiki/%E7%9D%80#Kanji",
    meanings: ["don", "arrive", "wear", "counter for suits of clothing"],
    grade: 3,
    jlpt: 3,
    strokes: 12,
    examples: [
      {
        value: "決着",
        kana: ["けっちゃく"],
        english: ["conclusion", "decision", "end", "settlement"]
      },
      {
        value: "着実",
        kana: ["ちゃくじつ"],
        english: ["steady", "sound", "trustworthy", "solid"]
      },
      {
        value: "落ち着いた",
        kana: ["おちついた"],
        english: ["quiet", "calm", "composed"]
      },
      {
        value: "癒着",
        kana: ["ゆちゃく"],
        english: ["adhesion"]
      },
      {
        value: "着る",
        kana: ["きる"],
        english: ["to wear (in modern Japanese)"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "柱",
    on: ["チュウ"],
    kun: ["はしら"],
    source: "",
    meanings: ["pillar", "post", "cylinder", "support"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "注",
    on: ["ちゅう"],
    kun: ["そそぐ"],
    source: "https://en.wiktionary.org/wiki/%E6%B3%A8#Kanji",
    meanings: ["pour", "irrigate", "shed (tears)", "flow into", "concentrate on", "notes", "comment", "annotate"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "注",
        kana: ["ちゅう"],
        english: ["annotation", "explanatory note", "comment"]
      },
      {
        value: "注目",
        kana: ["ちゅうもく"],
        english: ["notice", "attention", "observation"]
      },
      {
        value: "受注",
        kana: ["じゅちゅう"],
        english: ["accepting orders"]
      },
      {
        value: "注意",
        kana: ["ちゅうい"],
        english: ["caution", "being careful", "attention (heed)"]
      },
      {
        value: "注文",
        kana: ["ちゅうもん"],
        english: ["order", "request"]
      }
    ],
    tags: []
  },
  {
    name: "丁",
    on: ["チョウ", "テイ", "チン", "トウ", "チ"],
    kun: ["ひのと"],
    source: "",
    meanings: [
      "street",
      "ward",
      "town",
      "counter for guns",
      "tools",
      "leaves or cakes of something",
      "even number",
      "4th calendar sign"
    ],
    grade: 3,
    jlpt: 1,
    strokes: 2,
    examples: [],
    tags: []
  },
  {
    name: "帳",
    on: ["チョウ"],
    kun: ["とばり"],
    source: "",
    meanings: ["notebook", "account book", "album", "curtain", "veil", "net", "tent"],
    grade: 3,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "調",
    on: ["ちょう"],
    kun: ["しらべる", "ととのう", "ととのえる"],
    source: "https://en.wiktionary.org/wiki/%E8%AA%BF#Kanji",
    meanings: ["tune", "tone", "meter", "key (music)", "writing", "style", "prepare", "exorcise", "investigate"],
    grade: 3,
    jlpt: 2,
    strokes: 15,
    examples: [
      {
        value: "調べ",
        kana: ["しらべ"],
        english: ["investigation", "inspection", "examination", "tune"]
      },
      {
        value: "調査",
        kana: ["ちょうさ"],
        english: ["investigation", "examination", "inquiry", "enquiry"]
      },
      {
        value: "調整",
        kana: ["ちょうせい"],
        english: ["regulation", "adjustment", "tuning", "modification"]
      },
      {
        value: "協調",
        kana: ["きょうちょう"],
        english: ["cooperation", "conciliation", "harmony"]
      },
      {
        value: "好調",
        kana: ["こうちょう"],
        english: ["favourable", "favorable", "promising"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "追",
    on: ["つい"],
    kun: ["おう"],
    source: "https://en.wiktionary.org/wiki/%E8%BF%BD#Kanji",
    meanings: ["chase", "drive away", "follow", "pursue", "mean-while"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "追う",
        kana: ["おう"],
        english: ["to chase", "to run after", "to pursue"]
      },
      {
        value: "追加",
        kana: ["ついか"],
        english: ["addition", "supplement", "append (e.g. to a file)"]
      },
      {
        value: "追い込む",
        kana: ["おいこむ"],
        english: ["to herd", "to corner", "to drive"]
      },
      {
        value: "追及",
        kana: ["ついきゅう"],
        english: ["investigation (e.g. into someone’s guilt)"]
      },
      {
        value: "追放",
        kana: ["ついほう"],
        english: ["exile", "banishment"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "定",
    on: ["じょう", "てい"],
    kun: ["さだむ"],
    source: "https://en.wiktionary.org/wiki/%E5%AE%9A#Kanji",
    meanings: ["determine", "fix", "establish", "decide"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "協定",
        kana: ["きょうてい"],
        english: ["arrangement", "pact", "agreement"]
      },
      {
        value: "決定",
        kana: ["けってい"],
        english: ["decision", "determination"]
      },
      {
        value: "予定",
        kana: ["よてい"],
        english: ["plans", "arrangement", "schedule", "program"]
      },
      {
        value: "安定",
        kana: ["あんてい"],
        english: ["stability", "equilibrium"]
      },
      {
        value: "暫定",
        kana: ["ざんてい"],
        english: ["tentative", "temporary"]
      }
    ],
    tags: []
  },
  {
    name: "庭",
    on: ["テイ"],
    kun: ["にわ"],
    source: "",
    meanings: ["courtyard", "garden", "yard"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "笛",
    on: ["テキ"],
    kun: ["ふえ"],
    source: "",
    meanings: ["flute", "clarinet", "pipe", "whistle", "bagpipe", "piccolo"],
    grade: 3,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "鉄",
    on: ["テツ"],
    kun: ["くろがね"],
    source: "",
    meanings: ["iron"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "転",
    on: ["てん"],
    kun: ["ころぶ", "ころがす", "ころがる", "めぐる", "ころげる"],
    source: "https://en.wiktionary.org/wiki/%E8%BB%A2#Kanji",
    meanings: ["revolve", "turn around", "change"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "運転",
        kana: ["うんてん"],
        english: ["operation", "motion", "driving"]
      },
      {
        value: "転換",
        kana: ["てんかん"],
        english: ["convert", "divert"]
      },
      {
        value: "逆転",
        kana: ["ぎゃくてん"],
        english: ["(sudden) change", "reversal", "turn around"]
      },
      {
        value: "移転",
        kana: ["いてん"],
        english: ["moving", "transfer", "demise"]
      },
      {
        value: "運転手",
        kana: ["うんてんしゅ"],
        english: ["driver", "chauffeur"]
      }
    ],
    tags: []
  },
  {
    name: "登",
    on: ["トウ", "ト", "ドウ", "ショウ", "チョウ"],
    kun: ["のぼる", "あがる"],
    source: "",
    meanings: ["ascend", "climb up"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "都",
    on: ["と", "つ"],
    kun: ["みやこ"],
    source: "https://en.wiktionary.org/wiki/%E9%83%BD#Kanji",
    meanings: ["metropolis", "capital"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "都",
        kana: ["みやこ"],
        english: ["capital", "metropolis"]
      },
      {
        value: "都市",
        kana: ["とし"],
        english: ["town", "city", "municipal", "urban"]
      },
      {
        value: "都内",
        kana: ["とない"],
        english: ["metropolitan area"]
      },
      {
        value: "京都",
        kana: ["きょうと"],
        english: ["Kyoto"]
      },
      {
        value: "首都",
        kana: ["しゅと"],
        english: ["capital city", "metropolis"]
      }
    ],
    tags: []
  },
  {
    name: "度",
    on: ["ど", "と", "たく"],
    kun: ["たび"],
    source: "https://en.wiktionary.org/wiki/%E5%BA%A6#Kanji",
    meanings: ["degrees", "occurrence", "time", "counter for occurrences"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "制度",
        kana: ["せいど"],
        english: ["system", "institution", "organization"]
      },
      {
        value: "程度",
        kana: ["ていど"],
        english: ["degree", "amount", "grade", "standard"]
      },
      {
        value: "今度",
        kana: ["こんど"],
        english: ["now, this time", "next time", "another time"]
      },
      {
        value: "態度",
        kana: ["たいど"],
        english: ["attitude", "manner", "behaviour"]
      },
      {
        value: "何度",
        kana: ["なんど"],
        english: ["how many times?", "how often?"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "島",
    on: ["とう"],
    kun: ["しま"],
    source: "https://en.wiktionary.org/wiki/%E5%B3%B6#Kanji",
    meanings: ["island"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "島",
        kana: ["しま"],
        english: ["island", "territory (of a prostitute)"]
      },
      {
        value: "朝鮮半島",
        kana: ["ちょうせんはんとう"],
        english: ["Korean peninsula"]
      },
      {
        value: "中島",
        kana: ["なかじま"],
        english: ["island in a pond or river"]
      },
      {
        value: "小島",
        kana: ["こじま"],
        english: ["small island", "islet"]
      },
      {
        value: "半島",
        kana: ["はんとう"],
        english: ["peninsula"]
      }
    ],
    tags: []
  },
  {
    name: "投",
    on: ["とう"],
    kun: ["なげる"],
    source: "https://en.wiktionary.org/wiki/%E6%8A%95#Kanji",
    meanings: ["throw", "discard", "abandon", "launch into", "join", "invest in", "hurl", "give up", "sell at a loss"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "投資",
        kana: ["とうし"],
        english: ["investment"]
      },
      {
        value: "投手",
        kana: ["とうしゅ"],
        english: ["(baseball) pitcher"]
      },
      {
        value: "投票",
        kana: ["とうひょう"],
        english: ["voting", "poll"]
      },
      {
        value: "国民投票",
        kana: ["こくみんとうひょう"],
        english: ["national referendum"]
      },
      {
        value: "投球",
        kana: ["とうきゅう"],
        english: ["pitching", "throwing a ball"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "湯",
    on: ["トウ"],
    kun: ["ゆ"],
    source: "",
    meanings: ["hot water", "bath", "hot spring"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "等",
    on: ["トウ"],
    kun: ["ひとしい", "など", "ら"],
    source: "",
    meanings: ["etc.", "and so forth", "class (first)", "quality", "equal", "similar"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "豆",
    on: ["トウ", "ズ"],
    kun: ["まめ", "まめ"],
    source: "",
    meanings: ["beans", "pea", "midget"],
    grade: 3,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "動",
    on: ["どう"],
    kun: ["うごく", "うごかす"],
    source: "https://en.wiktionary.org/wiki/%E5%8B%95#Kanji",
    meanings: ["move", "motion", "change", "confusion", "shift", "shake"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "動",
        kana: ["どう"],
        english: ["motion", "change", "confusion"]
      },
      {
        value: "動き",
        kana: ["うごき"],
        english: ["movement", "activity", "trend", "development"]
      },
      {
        value: "運動",
        kana: ["うんどう"],
        english: ["motion", "exercise"]
      },
      {
        value: "活動",
        kana: ["かつどう"],
        english: ["action", "activity"]
      },
      {
        value: "行動",
        kana: ["こうどう"],
        english: ["action", "conduct", "behaviour"]
      }
    ],
    tags: []
  },
  {
    name: "童",
    on: ["ドウ"],
    kun: ["わらべ"],
    source: "",
    meanings: ["juvenile", "child"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "農",
    on: ["のう"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E8%BE%B2#Kanji",
    meanings: ["agriculture", "farmers"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [
      {
        value: "農",
        kana: ["のう"],
        english: ["farming", "agriculture"]
      },
      {
        value: "農業",
        kana: ["のうぎょう"],
        english: ["agriculture"]
      },
      {
        value: "農家",
        kana: ["のうか"],
        english: ["farmer", "farm family"]
      },
      {
        value: "農協",
        kana: ["のうきょう"],
        english: ["agricultural cooperative"]
      },
      {
        value: "農村",
        kana: ["のうそん"],
        english: ["agricultural community", "farm village", "rural"]
      }
    ],
    tags: []
  },
  {
    name: "波",
    on: ["ハ"],
    kun: ["なみ"],
    source: "",
    meanings: ["waves", "billows", "Poland"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "配",
    on: ["はい"],
    kun: ["くばる"],
    source: "https://en.wiktionary.org/wiki/%E9%85%8D#Kanji",
    meanings: ["distribute", "spouse", "exile", "rationing"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "支配",
        kana: ["しはい"],
        english: ["rule", "control", "direction"]
      },
      {
        value: "心配",
        kana: ["しんぱい"],
        english: ["worry", "concern", "anxiety", "care", "help", "aid"]
      },
      {
        value: "配分",
        kana: ["はいぶん"],
        english: ["distribution", "allotment"]
      },
      {
        value: "配慮",
        kana: ["はいりょ"],
        english: ["consideration", "concern", "forethought"]
      },
      {
        value: "配当",
        kana: ["はいとう"],
        english: ["dividend", "share"]
      }
    ],
    tags: []
  },
  {
    name: "倍",
    on: ["バイ"],
    kun: [],
    source: "",
    meanings: ["double", "twice", "times", "fold"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "箱",
    on: ["ソウ"],
    kun: ["はこ"],
    source: "",
    meanings: ["box", "chest", "case", "bin", "railway car"],
    grade: 3,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "畑",
    on: [],
    kun: ["はた", "はたけ", "ばたけ"],
    source: "",
    meanings: ["farm", "field", "garden", "one's specialty", "(kokuji)"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "発",
    on: ["はつ"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E7%99%BA#Kanji",
    meanings: ["discharge", "departure", "publish", "emit", "start from", "disclose", "counter for gunshots"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "発",
        kana: ["はつ"],
        english: ["departure", "departing (from ...)"]
      },
      {
        value: "開発",
        kana: ["かいはつ"],
        english: ["development", "exploitation"]
      },
      {
        value: "発言",
        kana: ["はつげん"],
        english: ["utterance", "speech", "proposal"]
      },
      {
        value: "発行",
        kana: ["はっこう"],
        english: ["issue (publications)", "publishing"]
      },
      {
        value: "発展",
        kana: ["はってん"],
        english: ["development", "growth"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "反",
    on: ["ほん", "はん"],
    kun: ["たん", "そらす", "そる"],
    source: "https://en.wiktionary.org/wiki/%E5%8F%8D#Kanji",
    meanings: ["anti"],
    grade: 3,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "違反",
        kana: ["いはん"],
        english: ["violation (of law), transgression"]
      },
      {
        value: "反対",
        kana: ["はんたい"],
        english: ["opposition", "resistance", "antagonism", "hostility"]
      },
      {
        value: "反発",
        kana: ["はんぱつ"],
        english: ["to repel", "to oppose", "to revolt"]
      },
      {
        value: "反応",
        kana: ["はんのう"],
        english: ["reaction", "response"]
      },
      {
        value: "反省",
        kana: ["はんせい"],
        english: ["reflection", "reconsideration", "introspection"]
      }
    ],
    tags: []
  },
  {
    name: "板",
    on: ["ハン", "バン"],
    kun: ["いた"],
    source: "",
    meanings: ["plank", "board", "plate", "stage"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "悲",
    on: ["ヒ"],
    kun: ["かなしい", "かなしむ"],
    source: "",
    meanings: ["grieve", "sad", "deplore", "regret"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "皮",
    on: ["ヒ"],
    kun: ["かわ"],
    source: "",
    meanings: ["pelt", "skin", "hide", "leather", "skin radical (no. 107)"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "美",
    on: ["ビ", "ミ"],
    kun: ["うつくしい"],
    source: "",
    meanings: ["beauty", "beautiful"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鼻",
    on: ["ビ"],
    kun: ["はな"],
    source: "",
    meanings: ["nose", "snout"],
    grade: 3,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "筆",
    on: ["ヒツ"],
    kun: ["ふで"],
    source: "",
    meanings: ["writing brush", "writing", "painting brush", "handwriting"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "氷",
    on: ["ヒョウ"],
    kun: ["こおり", "ひ", "こおる"],
    source: "",
    meanings: ["icicle", "ice", "hail", "freeze", "congeal"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "表",
    on: ["ひょう"],
    kun: ["あらわす", "あらわれる", "おもて"],
    source: "https://en.wiktionary.org/wiki/%E8%A1%A8#Kanji",
    meanings: ["surface", "table", "chart", "diagram"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "表",
        kana: ["おもて"],
        english: ["surface"]
      },
      {
        value: "代表",
        kana: ["だいひょう"],
        english: ["representative", "representation", "delegation"]
      },
      {
        value: "発表",
        kana: ["はっぴょう"],
        english: ["announcement", "publication"]
      },
      {
        value: "表現",
        kana: ["ひょうげん"],
        english: ["expression", "presentation", "representation"]
      },
      {
        value: "表情",
        kana: ["ひょうじょう"],
        english: ["facial expression"]
      }
    ],
    tags: []
  },
  {
    name: "病",
    on: ["びょう", "へい"],
    kun: ["やむ", "やまい"],
    source: "https://en.wiktionary.org/wiki/%E7%97%85#Kanji",
    meanings: ["ill", "sick"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "病院",
        kana: ["びょういん"],
        english: ["hospital"]
      },
      {
        value: "病気",
        kana: ["びょうき"],
        english: ["illness", "disease", "sickness"]
      },
      {
        value: "水俣病",
        kana: ["みなまたびょう"],
        english: ["Minamata disease"]
      },
      {
        value: "糖尿病",
        kana: ["とうにょうびょう"],
        english: ["diabetes mellitus", "sugar diabetes"]
      },
      {
        value: "白血病",
        kana: ["はっけつびょう"],
        english: ["leukemia"]
      }
    ],
    tags: []
  },
  {
    name: "秒",
    on: ["ビョウ"],
    kun: [],
    source: "",
    meanings: ["second (1/60 minute)"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "品",
    on: ["ひん"],
    kun: ["しな"],
    source: "https://en.wiktionary.org/wiki/%E5%93%81#Kanji",
    meanings: ["article", "counter for meal courses", "goods"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "作品",
        kana: ["さくひん"],
        english: ["work (e.g. book, film, composition, etc.)"]
      },
      {
        value: "商品",
        kana: ["しょうひん"],
        english: ["commodity", "article of commerce", "goods", "stock"]
      },
      {
        value: "製品",
        kana: ["せいひん"],
        english: ["manufactured goods", "finished goods", "product"]
      },
      {
        value: "食品",
        kana: ["しょくひん"],
        english: ["commodity", "foodstuff"]
      },
      {
        value: "部品",
        kana: ["ぶひん"],
        english: ["parts", "accessories"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "負",
    on: ["フ"],
    kun: ["まける", "まかす", "おう"],
    source: "",
    meanings: ["defeat", "negative", "-", "minus", "bear", "owe", "assume a responsibility"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "部",
    on: ["ぶ"],
    kun: ["わける"],
    source: "https://en.wiktionary.org/wiki/%E9%83%A8#Kanji",
    meanings: [
      "section",
      "bureau",
      "dept",
      "class",
      "copy",
      "part",
      "portion",
      "counter for copies of a newspaper or magazine"
    ],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "一部",
        kana: ["いちぶ"],
        english: ["one part", "one portion", "one section", "some"]
      },
      {
        value: "幹部",
        kana: ["かんぶ"],
        english: ["management", "(executive) staff", "leaders"]
      },
      {
        value: "部長",
        kana: ["ぶちょう"],
        english: ["head (chief"]
      },
      {
        value: "部分",
        kana: ["ぶぶん"],
        english: ["portion", "section", "part"]
      },
      {
        value: "部門",
        kana: ["ぶもん"],
        english: ["class", "group", "category", "department", "field"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "服",
    on: ["ふく"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E6%9C%8D#Kanji",
    meanings: ["clothing", "admit", "obey", "discharge"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "服",
        kana: ["ふく"],
        english: ["clothes (esp. Western clothes)"]
      },
      {
        value: "制服",
        kana: ["せいふく"],
        english: ["uniform"]
      },
      {
        value: "服装",
        kana: ["ふくそう"],
        english: ["garments"]
      },
      {
        value: "不服",
        kana: ["ふふく"],
        english: ["dissatisfaction", "discontent", "disapproval"]
      },
      {
        value: "洋服",
        kana: ["ようふく"],
        english: ["Western-style clothes (cf traditional Japanese clothes)"]
      }
    ],
    tags: ["clothes"]
  },
  {
    name: "福",
    on: ["フク"],
    kun: [],
    source: "",
    meanings: ["blessing", "fortune", "luck", "wealth"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "物",
    on: ["もつ", "ぶつ"],
    kun: ["もの"],
    source: "https://en.wiktionary.org/wiki/%E7%89%A9#Kanji",
    meanings: ["thing", "object", "matter"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "人物",
        kana: ["じんぶつ"],
        english: ["character", "personality", "person", "man"]
      },
      {
        value: "動物",
        kana: ["どうぶつ"],
        english: ["animal"]
      },
      {
        value: "建物",
        kana: ["たてもの"],
        english: ["building"]
      },
      {
        value: "物価",
        kana: ["ぶっか"],
        english: ["prices of commodities", "prices (in general)"]
      },
      {
        value: "物語",
        kana: ["ものがたり"],
        english: ["tale", "story", "legend"]
      }
    ],
    tags: []
  },
  {
    name: "平",
    on: ["へい", "びょう"],
    kun: ["ひら", "たいら"],
    source: "https://en.wiktionary.org/wiki/%E5%B9%B3#Kanji",
    meanings: ["even", "flat", "peace"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [
      {
        value: "平和",
        kana: ["へいわ"],
        english: ["peace", "harmony"]
      },
      {
        value: "和平",
        kana: ["わへい"],
        english: ["peace"]
      },
      {
        value: "平均",
        kana: ["へいきん", "へいぎん"],
        english: ["average", "mean", "balance", "equilibrium"]
      },
      {
        value: "太平洋",
        kana: ["たいへいよう"],
        english: ["Pacific Ocean"]
      },
      {
        value: "平成",
        kana: ["へいせい"],
        english: ["Heisei era (1989.1.8?)"]
      }
    ],
    tags: []
  },
  {
    name: "返",
    on: ["ヘン"],
    kun: ["かえす", "かえす", "かえる", "かえる"],
    source: "",
    meanings: ["return", "answer", "fade", "repay"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "勉",
    on: ["ベン"],
    kun: ["つとめる"],
    source: "",
    meanings: ["exertion", "endeavour", "encourage", "strive", "make effort", "diligent"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "放",
    on: ["ほう"],
    kun: ["はなす", "はなつ", "はなれる", "ほうる", "ゆるす"],
    source: "https://en.wiktionary.org/wiki/%E6%94%BE#Kanji",
    meanings: ["set free", "release", "fire", "shoot", "emit", "banish", "liberate"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "放る",
        kana: ["ほうる", "ほる"],
        english: ["to let go, to abandon", "to leave undone"]
      },
      {
        value: "放送",
        kana: ["ほうそう"],
        english: ["broadcast", "broadcasting"]
      },
      {
        value: "開放",
        kana: ["かいほう"],
        english: ["open", "throw open", "liberalization"]
      },
      {
        value: "解放",
        kana: ["かいほう"],
        english: ["release", "unleashing", "liberation", "emancipation"]
      },
      {
        value: "民放",
        kana: ["みんぽう"],
        english: ["commercial broadcast"]
      }
    ],
    tags: []
  },
  {
    name: "味",
    on: ["み"],
    kun: ["あじ", "あじわう"],
    source: "https://en.wiktionary.org/wiki/%E5%91%B3#Kanji",
    meanings: ["flavour", "taste"],
    grade: 3,
    jlpt: 3,
    strokes: 8,
    examples: [
      {
        value: "味",
        kana: ["あじ"],
        english: ["flavour", "taste", "charm", "style"]
      },
      {
        value: "意味",
        kana: ["いみ"],
        english: ["meaning", "significance"]
      },
      {
        value: "興味",
        kana: ["きょうみ"],
        english: ["interest (in something)"]
      },
      {
        value: "趣味",
        kana: ["しゅみ"],
        english: ["hobby", "tastes", "preference"]
      },
      {
        value: "味わい",
        kana: ["あじわい"],
        english: ["flavour", "meaning", "significance"]
      }
    ],
    tags: ["food"]
  },
  {
    name: "命",
    on: ["メイ", "ミョウ"],
    kun: ["いのち"],
    source: "",
    meanings: ["fate", "command", "decree", "destiny", "life", "appoint"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "面",
    on: ["めん"],
    kun: ["おも", "おもて", "つら"],
    source: "https://en.wiktionary.org/wiki/%E9%9D%A2#Kanji",
    meanings: ["mask", "face", "features", "surface"],
    grade: 3,
    jlpt: 2,
    strokes: 9,
    examples: [
      {
        value: "面",
        kana: ["つら"],
        english: ["face (often derog. or vulg.)", "mug", "surface"]
      },
      {
        value: "全面",
        kana: ["ぜんめん"],
        english: ["whole surface", "entire"]
      },
      {
        value: "当面",
        kana: ["とうめん"],
        english: ["current", "urgent", "pressing", "impending"]
      },
      {
        value: "場面",
        kana: ["ばめん"],
        english: ["scene", "setting (e.g. of novel)"]
      },
      {
        value: "画面",
        kana: ["がめん"],
        english: ["terminal screen", "scene", "picture"]
      }
    ],
    tags: []
  },
  {
    name: "問",
    on: ["もん"],
    kun: ["とう", "とん"],
    source: "https://en.wiktionary.org/wiki/%E5%95%8F#Kanji",
    meanings: ["question", "ask", "problem"],
    grade: 3,
    jlpt: 3,
    strokes: 11,
    examples: [
      {
        value: "問う",
        kana: ["とう"],
        english: ["to ask", "to question", "to inquire"]
      },
      {
        value: "問",
        kana: ["もん"],
        english: ["counter for questions"]
      },
      {
        value: "質問",
        kana: ["しつもん"],
        english: ["question", "inquiry", "enquiry"]
      },
      {
        value: "訪問",
        kana: ["ほうもん"],
        english: ["call", "visit"]
      },
      {
        value: "問題",
        kana: ["もんだい"],
        english: ["problem", "question"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "役",
    on: ["やく", "えき"],
    kun: ["つとめ"],
    source: "https://en.wiktionary.org/wiki/%E5%BD%B9#Kanji",
    meanings: ["duty", "war", "campaign", "drafted labor", "office", "service", "role"],
    grade: 3,
    jlpt: 2,
    strokes: 7,
    examples: [
      {
        value: "役",
        kana: ["やく"],
        english: ["use", "service", "role", "position"]
      },
      {
        value: "役割",
        kana: ["やくわり"],
        english: ["part", "assigning (allotment of) parts", "role"]
      },
      {
        value: "役員",
        kana: ["やくいん"],
        english: ["officer", "official", "executive", "staff"]
      },
      {
        value: "取締役",
        kana: ["とりしまりやく"],
        english: ["company director", "board member"]
      },
      {
        value: "懲役",
        kana: ["ちょうえき"],
        english: ["penal servitude"]
      }
    ],
    tags: []
  },
  {
    name: "薬",
    on: ["ヤク"],
    kun: ["くすり"],
    source: "",
    meanings: ["medicine", "chemical", "enamel", "gunpowder", "benefit"],
    grade: 3,
    jlpt: 3,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "油",
    on: ["ユ", "ユウ"],
    kun: ["あぶら"],
    source: "",
    meanings: ["oil", "fat"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "有",
    on: ["ゆう", "う"],
    kun: ["ある"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%89#Kanji",
    meanings: ["possess", "have", "exist", "happen", "occur", "approx"],
    grade: 3,
    jlpt: 3,
    strokes: 6,
    examples: [
      {
        value: "有",
        kana: ["ゆう"],
        english: ["existence", "possession", "having"]
      },
      {
        value: "有効",
        kana: ["ゆうこう"],
        english: ["validity", "legality", "availability"]
      },
      {
        value: "有力",
        kana: ["ゆうりょく"],
        english: ["influential", "prominent", "strong", "likely"]
      },
      {
        value: "有権者",
        kana: ["ゆうけんしゃ"],
        english: ["voter", "constituent"]
      },
      {
        value: "有名",
        kana: ["ゆうめい"],
        english: ["famous", "fame"]
      }
    ],
    tags: ["verb"]
  },
  {
    name: "由",
    on: ["ゆ", "ゆう"],
    kun: ["ゆい", "よし"],
    source: "https://en.wiktionary.org/wiki/%E7%94%B1#Kanji",
    meanings: ["wherefore", "a reason"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [
      {
        value: "由",
        kana: ["よし"],
        english: ["reason", "significance", "cause"]
      },
      {
        value: "自由",
        kana: ["じゆう"],
        english: ["freedom", "liberty", "as it pleases you"]
      },
      {
        value: "理由",
        kana: ["りゆう"],
        english: ["reason", "pretext", "motive"]
      },
      {
        value: "経由",
        kana: ["けいゆ"],
        english: ["go by the way", "via"]
      },
      {
        value: "不自由",
        kana: ["ふじゆう"],
        english: ["discomfort", "inconvenience", "poverty", "want"]
      }
    ],
    tags: []
  },
  {
    name: "遊",
    on: ["ユウ", "ユ"],
    kun: ["あそぶ", "あそばす"],
    source: "",
    meanings: ["play"],
    grade: 3,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "予",
    on: ["よ"],
    kun: ["あらかじめ"],
    source: "https://en.wiktionary.org/wiki/%E4%BA%88#Kanji_1",
    meanings: ["beforehand"],
    grade: 3,
    jlpt: 2,
    strokes: 4,
    examples: [
      {
        value: "予算",
        kana: ["よさん"],
        english: ["estimate", "budget"]
      },
      {
        value: "予定",
        kana: ["よてい"],
        english: ["plans", "arrangement", "schedule", "program"]
      },
      {
        value: "予選",
        kana: ["よせん"],
        english: ["nomination", "primary", "preliminary contest"]
      },
      {
        value: "予想",
        kana: ["よそう"],
        english: ["expectation", "anticipation", "prediction"]
      },
      {
        value: "予測",
        kana: ["よそく"],
        english: ["prediction", "estimation"]
      }
    ],
    tags: []
  },
  {
    name: "様",
    on: ["ヨウ", "ショウ"],
    kun: ["さま", "さん"],
    source: "",
    meanings: ["Esq.", "way", "manner", "situation", "polite suffix"],
    grade: 3,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "洋",
    on: ["よう"],
    kun: [],
    source: "https://en.wiktionary.org/wiki/%E6%B4%8B#Kanji",
    meanings: ["ocean", "western style"],
    grade: 3,
    jlpt: 3,
    strokes: 9,
    examples: [
      {
        value: "太平洋",
        kana: ["たいへいよう"],
        english: ["Pacific Ocean"]
      },
      {
        value: "東洋",
        kana: ["とうよう"],
        english: ["Orient"]
      },
      {
        value: "海洋",
        kana: ["かいよう"],
        english: ["ocean"]
      },
      {
        value: "大西洋",
        kana: ["たいせいよう"],
        english: ["Atlantic Ocean"]
      },
      {
        value: "西洋",
        kana: ["せいよう"],
        english: ["the west, Western countries"]
      }
    ],
    tags: []
  },
  {
    name: "羊",
    on: ["ヨウ"],
    kun: ["ひつじ"],
    source: "",
    meanings: ["sheep"],
    grade: 3,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "葉",
    on: ["ヨウ"],
    kun: ["は"],
    source: "",
    meanings: ["leaf", "plane", "lobe", "needle", "blade", "spear", "counter for flat things", "fragment", "piece"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "陽",
    on: ["ヨウ"],
    kun: ["ひ"],
    source: "",
    meanings: ["sunshine", "yang principle", "positive", "male", "heaven", "daytime"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "落",
    on: ["ラク"],
    kun: ["おちる", "おち", "おとす"],
    source: "",
    meanings: ["fall", "drop", "come down", "village", "hamlet"],
    grade: 3,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "流",
    on: ["る", "りゅう"],
    kun: ["ながれる", "ながす"],
    source: "https://en.wiktionary.org/wiki/%E6%B5%81#Kanji",
    meanings: ["current", "a sink", "flow", "forfeit"],
    grade: 3,
    jlpt: 2,
    strokes: 10,
    examples: [
      {
        value: "流れ",
        kana: ["ながれ"],
        english: ["stream", "current", "flow"]
      },
      {
        value: "交流",
        kana: ["こうりゅう"],
        english: ["intercourse", "(cultural) exchange"]
      },
      {
        value: "流す",
        kana: ["ながす"],
        english: ["to drain", "to pour", "to spill", "to shed (blood"]
      },
      {
        value: "流通",
        kana: ["りゅうつう"],
        english: ["circulation of money or goods"]
      },
      {
        value: "主流",
        kana: ["しゅりゅう"],
        english: ["main current (stream)", "mainline", "mainstream"]
      }
    ],
    tags: []
  },
  {
    name: "旅",
    on: ["ろ", "りょ"],
    kun: ["たび"],
    source: "https://en.wiktionary.org/wiki/%E6%97%85#Kanji",
    meanings: ["trip", "travel"],
    grade: 3,
    jlpt: 3,
    strokes: 10,
    examples: [
      {
        value: "旅",
        kana: ["たび"],
        english: ["travel", "trip", "journey"]
      },
      {
        value: "旅行",
        kana: ["りょこう"],
        english: ["travel", "trip"]
      },
      {
        value: "旅客",
        kana: ["りょかく", "りょきゃく"],
        english: ["passenger (transport)"]
      },
      {
        value: "旅館",
        kana: ["りょかん"],
        english: ["Japanese hotel", "inn", "ryokan"]
      },
      {
        value: "旅客機",
        kana: ["りょかくき", "りょかっき"],
        english: ["passenger plane"]
      }
    ],
    tags: []
  },
  {
    name: "両",
    on: ["りょう"],
    kun: ["ふたつ"],
    source: "https://en.wiktionary.org/wiki/%E4%B8%A1#Kanji_1",
    meanings: ["both", "old Japanese coin", "counter for carriages", "two"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "両国",
        kana: ["りょうこく", "りょうごく"],
        english: ["both countries"]
      },
      {
        value: "両党",
        kana: ["りょうとう"],
        english: ["both political parties"]
      },
      {
        value: "両親",
        kana: ["りょうしん", "ふたおや"],
        english: ["parents", "both parents"]
      },
      {
        value: "車両",
        kana: ["しゃりょう"],
        english: ["rolling stock", "railroad cars", "vehicles"]
      },
      {
        value: "両院",
        kana: ["りょういん"],
        english: ["both Houses of Parliament"]
      }
    ],
    tags: ["counter"]
  },
  {
    name: "緑",
    on: ["リョク", "ロク"],
    kun: ["みどり"],
    source: "",
    meanings: ["green"],
    grade: 3,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "礼",
    on: ["レイ", "ライ"],
    kun: [],
    source: "",
    meanings: ["salute", "bow", "ceremony", "thanks", "remuneration"],
    grade: 3,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "列",
    on: ["レツ", "レ"],
    kun: [],
    source: "",
    meanings: ["file", "row", "rank", "tier", "column"],
    grade: 3,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "練",
    on: ["レン"],
    kun: ["ねる", "ねり"],
    source: "",
    meanings: ["practice", "gloss", "train", "drill", "polish", "refine"],
    grade: 3,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "路",
    on: ["ロ", "ル"],
    kun: ["じ", "みち"],
    source: "",
    meanings: ["path", "route", "road", "distance"],
    grade: 3,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "和",
    on: ["わ"],
    kun: ["やわらぐ", "なごやか"],
    source: "https://en.wiktionary.org/wiki/%E5%92%8C#Kanji",
    meanings: ["harmony", "Japanese style", "peace", "soften", "Japan"],
    grade: 3,
    jlpt: 2,
    strokes: 8,
    examples: [
      {
        value: "平和",
        kana: ["へいわ"],
        english: ["peace", "harmony"]
      },
      {
        value: "和平",
        kana: ["わへい"],
        english: ["peace"]
      },
      {
        value: "グアテマラ共和国",
        kana: ["グアテマラきょうわこく"],
        english: ["Republic of Guatemala"]
      },
      {
        value: "緩和",
        kana: ["かんわ"],
        english: ["relief", "mitigation", "alleviation", "relaxation"]
      },
      {
        value: "朝鮮民主主義人民共和国",
        kana: ["ちょうせんみんしゅしゅぎじんみんきょうわこく"],
        english: ["Democratic People’s Republic of Korea (NorthKorea)", "DPRK"]
      }
    ],
    tags: []
  },
  {
    name: "愛",
    on: ["アイ"],
    kun: ["いとしい", "かなしい", "めでる", "おしむ", "まな"],
    source: "",
    meanings: ["love", "affection", "favourite"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "案",
    on: ["アン"],
    kun: ["つくえ"],
    source: "",
    meanings: [
      "plan",
      "suggestion",
      "draft",
      "ponder",
      "fear",
      "proposition",
      "idea",
      "expectation",
      "worry",
      "table",
      "bench"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "以",
    on: ["イ"],
    kun: ["もって"],
    source: "",
    meanings: ["by means of", "because", "in view of", "compared with"],
    grade: 4,
    jlpt: 3,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "位",
    on: ["イ"],
    kun: ["くらい", "ぐらい"],
    source: "",
    meanings: ["rank", "grade", "throne", "crown", "about", "some"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "囲",
    on: ["イ"],
    kun: ["かこむ", "かこう", "かこい"],
    source: "",
    meanings: ["surround", "besiege", "store", "paling", "enclosure", "encircle", "preserve", "keep"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "胃",
    on: ["イ"],
    kun: [],
    source: "",
    meanings: ["stomach", "paunch", "crop", "craw"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "衣",
    on: ["イ", "エ"],
    kun: ["ころも", "きぬ", "ぎ"],
    source: "",
    meanings: ["garment", "clothes", "dressing"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "井",
    on: ["セイ", "ショウ"],
    kun: ["い"],
    source: "",
    meanings: ["well", "well crib", "town", "community"],
    grade: 4,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "茨",
    on: ["シ", "ジ"],
    kun: ["いばら", "かや", "くさぶき"],
    source: "",
    meanings: ["briar", "thorn"],
    grade: 4,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "印",
    on: ["イン"],
    kun: ["しるし", "じるし", "しるす"],
    source: "",
    meanings: ["stamp", "seal", "mark", "imprint", "symbol", "emblem", "trademark", "evidence", "souvenir", "India"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "栄",
    on: ["エイ", "ヨウ"],
    kun: ["さかえる", "はえ", "ばえ", "はえる", "え"],
    source: "",
    meanings: ["flourish", "prosperity", "honor", "glory", "splendor"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "英",
    on: ["エイ"],
    kun: ["はなぶさ"],
    source: "",
    meanings: ["England", "English", "hero", "outstanding", "calyx"],
    grade: 4,
    jlpt: 3,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "塩",
    on: ["エン"],
    kun: ["しお"],
    source: "",
    meanings: ["salt"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "岡",
    on: ["コウ"],
    kun: ["おか"],
    source: "",
    meanings: ["mount", "hill", "knoll"],
    grade: 4,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "沖",
    on: ["チュウ"],
    kun: ["おき", "おきつ", "ちゅうする", "わく"],
    source: "",
    meanings: ["open sea", "offing", "rise high into sky"],
    grade: 4,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "億",
    on: ["オク"],
    kun: [],
    source: "",
    meanings: ["hundred million", "10**8"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "加",
    on: ["カ"],
    kun: ["くわえる", "くわわる"],
    source: "",
    meanings: ["add", "addition", "increase", "join", "include", "Canada"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "果",
    on: ["カ"],
    kun: ["はたす", "はたす", "はたす", "はてる", "はてる", "はて"],
    source: "",
    meanings: ["fruit", "reward", "carry out", "achieve", "complete", "end", "finish", "succeed"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "課",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["chapter", "lesson", "section", "department", "division", "counter for chapters (of a book)"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "貨",
    on: ["カ"],
    kun: ["たから"],
    source: "",
    meanings: ["freight", "goods", "property"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "芽",
    on: ["ガ"],
    kun: ["め"],
    source: "",
    meanings: ["bud", "sprout", "spear", "germ"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "改",
    on: ["カイ"],
    kun: ["あらためる", "あらたまる"],
    source: "",
    meanings: ["reformation", "change", "modify", "mend", "renew", "examine", "inspect", "search"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "械",
    on: ["カイ"],
    kun: ["かせ"],
    source: "",
    meanings: ["contraption", "fetter", "machine", "instrument"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "害",
    on: ["ガイ"],
    kun: [],
    source: "",
    meanings: ["harm", "injury"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "街",
    on: ["ガイ", "カイ"],
    kun: ["まち"],
    source: "",
    meanings: ["boulevard", "street", "town"],
    grade: 4,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "各",
    on: ["カク"],
    kun: ["おのおの"],
    source: "",
    meanings: ["each", "every", "either"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "覚",
    on: ["カク"],
    kun: ["おぼえる", "さます", "さめる", "さとる"],
    source: "",
    meanings: ["memorize", "learn", "remember", "awake", "sober up"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "潟",
    on: ["セキ"],
    kun: ["かた", "がた"],
    source: "",
    meanings: ["lagoon"],
    grade: 4,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "完",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["perfect", "completion", "end"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "官",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["bureaucrat", "the government", "organ"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "管",
    on: ["カン"],
    kun: ["くだ"],
    source: "",
    meanings: ["pipe", "tube", "wind instrument", "drunken talk", "control", "jurisdiction"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "観",
    on: ["カン"],
    kun: ["みる", "しめす"],
    source: "",
    meanings: ["outlook", "look", "appearance", "condition", "view"],
    grade: 4,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "関",
    on: ["カン"],
    kun: ["せき", "ぜき", "かかわる", "からくり", "かんぬき"],
    source: "",
    meanings: ["connection", "barrier", "gateway", "involve", "concerning"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "願",
    on: ["ガン"],
    kun: ["ねがう", "ねがい"],
    source: "",
    meanings: ["petition", "request", "vow", "wish", "hope"],
    grade: 4,
    jlpt: 2,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "喜",
    on: ["キ"],
    kun: ["よろこぶ", "よろこばす"],
    source: "",
    meanings: ["rejoice", "take pleasure in"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "器",
    on: ["キ"],
    kun: ["うつわ"],
    source: "",
    meanings: ["utensil", "vessel", "receptacle", "implement", "instrument", "ability", "container", "tool", "set"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "岐",
    on: ["キ", "ギ"],
    kun: [],
    source: "",
    meanings: ["branch off", "fork in road", "scene", "arena", "theater"],
    grade: 4,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "希",
    on: ["キ", "ケ"],
    kun: ["まれ", "こいねがう"],
    source: "",
    meanings: ["hope", "beg", "request", "pray", "beseech", "Greece", "dilute (acid)", "rare", "few", "phenomenal"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "旗",
    on: ["キ"],
    kun: ["はた"],
    source: "",
    meanings: ["national flag", "banner", "standard"],
    grade: 4,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "機",
    on: ["キ"],
    kun: ["はた"],
    source: "",
    meanings: ["loom", "mechanism", "machine", "airplane", "opportunity", "potency", "efficacy", "occasion"],
    grade: 4,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "季",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["seasons"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "紀",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["chronicle", "account", "narrative", "history", "annals", "geologic period"],
    grade: 4,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "議",
    on: ["ギ"],
    kun: [],
    source: "",
    meanings: ["deliberation", "consultation", "debate", "consideration"],
    grade: 4,
    jlpt: 2,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "救",
    on: ["キュウ"],
    kun: ["すくう"],
    source: "",
    meanings: ["salvation", "save", "help", "rescue", "reclaim"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "求",
    on: ["キュウ", "グ"],
    kun: ["もとめる"],
    source: "",
    meanings: ["request", "want", "wish for", "require", "demand"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "泣",
    on: ["キュウ"],
    kun: ["なく"],
    source: "",
    meanings: ["cry", "weep", "moan"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "給",
    on: ["キュウ"],
    kun: ["たまう", "たもう", "たまえ"],
    source: "",
    meanings: ["salary", "wage", "gift", "allow", "grant", "bestow on"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "挙",
    on: ["キョ"],
    kun: ["あげる", "あがる", "こぞる"],
    source: "",
    meanings: ["raise", "plan", "project", "behavior", "actions"],
    grade: 4,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "漁",
    on: ["ギョ", "リョウ"],
    kun: ["あさる"],
    source: "",
    meanings: ["fishing", "fishery"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "競",
    on: ["キョウ", "ケイ"],
    kun: ["きそう", "せる", "くらべる"],
    source: "",
    meanings: ["emulate", "compete with", "bid", "sell at auction", "bout", "contest", "race"],
    grade: 4,
    jlpt: 2,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "共",
    on: ["キョウ"],
    kun: ["とも", "ともに", "ども"],
    source: "",
    meanings: ["together", "both", "neither", "all", "and", "alike", "with"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "協",
    on: ["キョウ"],
    kun: [],
    source: "",
    meanings: ["co-", "cooperation"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "鏡",
    on: ["キョウ", "ケイ"],
    kun: ["かがみ"],
    source: "",
    meanings: ["mirror", "speculum", "barrel-head", "round rice-cake offering"],
    grade: 4,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "極",
    on: ["キョク", "ゴク"],
    kun: ["きわめる", "きわまる", "きわまり", "きわみ", "きめる", "ぎめ", "きまる"],
    source: "",
    meanings: [
      "poles",
      "settlement",
      "conclusion",
      "end",
      "highest rank",
      "electric poles",
      "very",
      "extremely",
      "most",
      "highly",
      "10**48"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "熊",
    on: ["ユウ"],
    kun: ["くま"],
    source: "",
    meanings: ["bear"],
    grade: 4,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "訓",
    on: ["クン", "キン"],
    kun: ["おしえる", "よむ", "くんずる"],
    source: "",
    meanings: ["instruction", "Japanese character reading", "explanation", "read"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "軍",
    on: ["グン"],
    kun: ["いくさ"],
    source: "",
    meanings: ["army", "force", "troops", "war", "battle"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "郡",
    on: ["グン"],
    kun: ["こおり"],
    source: "",
    meanings: ["county", "district"],
    grade: 4,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "型",
    on: ["ケイ"],
    kun: ["かた", "がた"],
    source: "",
    meanings: ["mould", "type", "model"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "径",
    on: ["ケイ"],
    kun: ["みち", "こみち", "さしわたし", "ただちに"],
    source: "",
    meanings: ["diameter", "path", "method"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "景",
    on: ["ケイ"],
    kun: [],
    source: "",
    meanings: ["scenery", "view"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "芸",
    on: ["ゲイ", "ウン"],
    kun: ["うえる", "のり", "わざ"],
    source: "",
    meanings: ["technique", "art", "craft", "performance", "acting", "trick", "stunt"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "欠",
    on: ["ケツ", "ケン"],
    kun: ["かける", "かく"],
    source: "",
    meanings: ["lack", "gap", "fail", "yawning radical (no. 76)"],
    grade: 4,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "結",
    on: ["ケツ", "ケチ"],
    kun: ["むすぶ", "ゆう", "ゆわえる"],
    source: "",
    meanings: ["tie", "bind", "contract", "join", "organize", "do up hair", "fasten"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "健",
    on: ["ケン"],
    kun: ["すこやか"],
    source: "",
    meanings: ["healthy", "health", "strength", "persistence"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "建",
    on: ["ケン", "コン"],
    kun: ["たてる", "たて", "だて", "たつ"],
    source: "",
    meanings: ["build"],
    grade: 4,
    jlpt: 3,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "験",
    on: ["ケン", "ゲン"],
    kun: ["あかし", "しるし", "ためす", "ためし"],
    source: "",
    meanings: ["verification", "effect", "testing"],
    grade: 4,
    jlpt: 3,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "固",
    on: ["コ"],
    kun: ["かためる", "かたまる", "かたまり", "かたい"],
    source: "",
    meanings: ["harden", "set", "clot", "curdle"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "候",
    on: ["コウ"],
    kun: ["そうろう"],
    source: "",
    meanings: ["climate", "season", "weather", "wait for", "expect"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "功",
    on: ["コウ", "ク"],
    kun: ["いさお"],
    source: "",
    meanings: ["achievement", "merits", "success", "honor", "credit"],
    grade: 4,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "好",
    on: ["コウ"],
    kun: ["このむ", "すく", "よい", "いい"],
    source: "",
    meanings: ["fond", "pleasing", "like something"],
    grade: 4,
    jlpt: 3,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "康",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["ease", "peace"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "航",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["navigate", "sail", "cruise", "fly"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "香",
    on: ["コウ", "キョウ"],
    kun: ["か", "かおり", "かおる"],
    source: "",
    meanings: ["incense", "smell", "perfume"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "告",
    on: ["コク"],
    kun: ["つげる"],
    source: "",
    meanings: ["revelation", "tell", "inform", "announce"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "佐",
    on: ["サ"],
    kun: [],
    source: "",
    meanings: ["assistant", "help"],
    grade: 4,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "差",
    on: ["サ"],
    kun: ["さす", "さし"],
    source: "",
    meanings: ["distinction", "difference", "variation", "discrepancy", "margin", "balance"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "最",
    on: ["サイ", "シュ"],
    kun: ["もっとも", "つま"],
    source: "",
    meanings: ["utmost", "most", "extreme"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "菜",
    on: ["サイ"],
    kun: ["な"],
    source: "",
    meanings: ["vegetable", "side dish", "greens"],
    grade: 4,
    jlpt: 3,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "材",
    on: ["ザイ"],
    kun: [],
    source: "",
    meanings: ["lumber", "log", "timber", "wood", "materials", "ingredients", "talent"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "阪",
    on: ["ハン"],
    kun: ["さか"],
    source: "",
    meanings: ["heights", "slope"],
    grade: 4,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "崎",
    on: ["キ"],
    kun: ["さき", "さい", "みさき"],
    source: "",
    meanings: ["promontory", "cape", "spit"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "埼",
    on: ["キ"],
    kun: ["さき", "さい", "みさき"],
    source: "",
    meanings: ["cape", "spit", "promontory"],
    grade: 4,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "昨",
    on: ["サク"],
    kun: [],
    source: "",
    meanings: ["yesterday", "previous"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "刷",
    on: ["サツ"],
    kun: ["する", "ずり", "ずり", "はく"],
    source: "",
    meanings: ["printing", "print", "brush"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "察",
    on: ["サツ"],
    kun: [],
    source: "",
    meanings: ["guess", "presume", "surmise", "judge", "understand"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "札",
    on: ["サツ"],
    kun: ["ふだ"],
    source: "",
    meanings: ["tag", "paper money", "counter for bonds", "placard", "bid"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "殺",
    on: ["サツ", "サイ", "セツ"],
    kun: ["ころす", "ごろし", "そぐ"],
    source: "",
    meanings: ["kill", "murder", "butcher", "slice off", "split", "diminish", "reduce", "spoil"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "参",
    on: ["サン", "シン"],
    kun: ["まいる", "まい", "まじわる", "みつ"],
    source: "",
    meanings: [
      "nonplussed",
      "three (in documents)",
      "going",
      "coming",
      "visiting",
      "visit",
      "be defeated",
      "die",
      "be madly in love",
      "participate",
      "take part in"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "散",
    on: ["サン"],
    kun: ["ちる", "ちらす", "ちらす", "ちらかす", "ちらかる", "ちらばる", "ばら", "ばらける"],
    source: "",
    meanings: ["scatter", "disperse", "spend", "squander"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "産",
    on: ["サン"],
    kun: ["うむ", "うまれる", "うぶ", "むす"],
    source: "",
    meanings: ["products", "bear", "give birth", "yield", "childbirth", "native", "property"],
    grade: 4,
    jlpt: 3,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "残",
    on: ["ザン", "サン"],
    kun: ["のこる", "のこす", "そこなう", "のこり"],
    source: "",
    meanings: ["remainder", "leftover", "balance"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "司",
    on: ["シ"],
    kun: ["つかさどる"],
    source: "",
    meanings: ["director", "official", "govt office", "rule", "administer"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "史",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["history", "chronicle"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "士",
    on: ["シ"],
    kun: ["さむらい"],
    source: "",
    meanings: ["gentleman", "scholar", "samurai", "samurai radical (no. 33)"],
    grade: 4,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "氏",
    on: ["シ"],
    kun: ["うじ", "うじ"],
    source: "",
    meanings: ["family name", "surname", "clan"],
    grade: 4,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "試",
    on: ["シ"],
    kun: ["こころみる", "ためす"],
    source: "",
    meanings: ["test", "try", "attempt", "experiment", "ordeal"],
    grade: 4,
    jlpt: 3,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "児",
    on: ["ジ", "ニ", "ゲイ"],
    kun: ["こ", "こ", "っこ"],
    source: "",
    meanings: ["newborn babe", "child", "young of animals"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "滋",
    on: ["ジ", "シ"],
    kun: [],
    source: "",
    meanings: ["nourishing", "more & more", "be luxuriant", "planting", "turbidity"],
    grade: 4,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "治",
    on: ["ジ", "チ"],
    kun: ["おさめる", "おさまる", "なおる", "なおす"],
    source: "",
    meanings: ["reign", "be at peace", "calm down", "subdue", "quell", "govt", "cure", "heal", "rule", "conserve"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "辞",
    on: ["ジ"],
    kun: ["やめる", "いなむ"],
    source: "",
    meanings: ["resign", "word", "term", "expression"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "鹿",
    on: ["ロク"],
    kun: ["しか", "か"],
    source: "",
    meanings: ["deer"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "失",
    on: ["シツ"],
    kun: ["うしなう", "うせる"],
    source: "",
    meanings: ["lose", "error", "fault", "disadvantage", "loss"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "借",
    on: ["シャク"],
    kun: ["かりる"],
    source: "",
    meanings: ["borrow", "rent"],
    grade: 4,
    jlpt: 3,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "種",
    on: ["シュ"],
    kun: ["たね", "ぐさ"],
    source: "",
    meanings: ["species", "kind", "class", "variety", "seed"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "周",
    on: ["シュウ"],
    kun: ["まわり"],
    source: "",
    meanings: ["circumference", "circuit", "lap"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "祝",
    on: ["シュク", "シュウ"],
    kun: ["いわう"],
    source: "",
    meanings: ["celebrate", "congratulate"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "順",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["obey", "order", "turn", "right", "docility", "occasion"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "初",
    on: ["ショ"],
    kun: ["はじめ", "はじめて", "はつ", "はつ", "うい", "そめる", "ぞめ"],
    source: "",
    meanings: ["first time", "beginning"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "唱",
    on: ["ショウ"],
    kun: ["となえる"],
    source: "",
    meanings: ["chant", "recite", "call upon", "yell"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "松",
    on: ["ショウ"],
    kun: ["まつ"],
    source: "",
    meanings: ["pine tree"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "焼",
    on: ["ショウ"],
    kun: ["やく", "やき", "やき", "やき", "やける"],
    source: "",
    meanings: ["bake", "burning"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "照",
    on: ["ショウ"],
    kun: ["てる", "てらす", "てれる"],
    source: "",
    meanings: ["illuminate", "shine", "compare", "bashful"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "省",
    on: ["セイ", "ショウ"],
    kun: ["かえりみる", "はぶく"],
    source: "",
    meanings: ["focus", "government ministry", "conserve"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "笑",
    on: ["ショウ"],
    kun: ["わらう", "えむ"],
    source: "",
    meanings: ["laugh"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "象",
    on: ["ショウ", "ゾウ"],
    kun: ["かたどる"],
    source: "",
    meanings: ["elephant", "pattern after", "imitate", "image", "shape", "sign (of the times)"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "賞",
    on: ["ショウ"],
    kun: ["ほめる"],
    source: "",
    meanings: ["prize", "reward", "praise"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "信",
    on: ["シン"],
    kun: [],
    source: "",
    meanings: ["faith", "truth", "fidelity", "trust"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "臣",
    on: ["シン", "ジン"],
    kun: [],
    source: "",
    meanings: ["retainer", "subject"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "成",
    on: ["セイ", "ジョウ"],
    kun: ["なる", "なす", "なす"],
    source: "",
    meanings: ["turn into", "become", "get", "grow", "elapse", "reach"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "清",
    on: ["セイ", "ショウ", "シン"],
    kun: ["きよい", "きよまる", "きよめる"],
    source: "",
    meanings: ["pure", "purify", "cleanse", "exorcise", "Manchu dynasty"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "静",
    on: ["セイ", "ジョウ"],
    kun: ["しず", "しずか", "しずまる", "しずめる"],
    source: "",
    meanings: ["quiet"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "席",
    on: ["セキ"],
    kun: ["むしろ"],
    source: "",
    meanings: ["seat", "mat", "occasion", "place"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "積",
    on: ["セキ"],
    kun: ["つむ", "づみ", "つもる", "つもり"],
    source: "",
    meanings: ["volume", "product (x*y)", "acreage", "contents", "pile up", "stack", "load", "amass"],
    grade: 4,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "折",
    on: ["セツ", "シャク"],
    kun: ["おる", "おり", "おり", "おり", "おれる"],
    source: "",
    meanings: ["fold", "break", "fracture", "bend", "yield", "submit"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "節",
    on: ["セツ", "セチ"],
    kun: ["ふし", "ぶし", "のっと"],
    source: "",
    meanings: [
      "node",
      "season",
      "period",
      "occasion",
      "verse",
      "clause",
      "stanza",
      "honor",
      "joint",
      "knuckle",
      "knob",
      "knot",
      "tune",
      "melody"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "説",
    on: ["セツ", "ゼイ"],
    kun: ["とく"],
    source: "",
    meanings: ["opinion", "theory", "explanation", "rumor"],
    grade: 4,
    jlpt: 3,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "戦",
    on: ["セン"],
    kun: ["いくさ", "たたかう", "おののく", "そよぐ", "わななく"],
    source: "",
    meanings: ["war", "battle", "match"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "浅",
    on: ["セン"],
    kun: ["あさい"],
    source: "",
    meanings: ["shallow", "superficial", "frivolous", "wretched", "shameful"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "選",
    on: ["セン"],
    kun: ["えらぶ", "える", "よる"],
    source: "",
    meanings: ["elect", "select", "choose", "prefer"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "然",
    on: ["ゼン", "ネン"],
    kun: ["しか", "しかり", "しかし", "さ"],
    source: "",
    meanings: ["sort of thing", "so", "if so", "in that case", "well"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "倉",
    on: ["ソウ"],
    kun: ["くら"],
    source: "",
    meanings: ["godown", "warehouse", "storehouse", "cellar", "treasury"],
    grade: 4,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "巣",
    on: ["ソウ"],
    kun: ["す", "すくう"],
    source: "",
    meanings: ["nest", "rookery", "hive", "cobweb", "den"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "争",
    on: ["ソウ"],
    kun: ["あらそう", "いかでか"],
    source: "",
    meanings: ["contend", "dispute", "argue"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "側",
    on: ["ソク"],
    kun: ["かわ", "がわ", "そば"],
    source: "",
    meanings: ["side", "lean", "oppose", "regret"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "束",
    on: ["ソク"],
    kun: ["たば", "たばねる", "つか", "つかねる"],
    source: "",
    meanings: ["bundle", "sheaf", "ream", "tie in bundles", "govern", "manage", "control"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "続",
    on: ["ゾク", "ショク", "コウ", "キョウ"],
    kun: ["つづく", "つづける", "つぐない"],
    source: "",
    meanings: ["continue", "series", "sequel"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "卒",
    on: ["ソツ", "シュツ"],
    kun: ["そっする", "おえる", "おわる", "ついに", "にわか"],
    source: "",
    meanings: ["graduate", "soldier", "private", "die"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "孫",
    on: ["ソン"],
    kun: ["まご"],
    source: "",
    meanings: ["grandchild", "descendants"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "帯",
    on: ["タイ"],
    kun: ["おびる", "おび"],
    source: "",
    meanings: ["sash", "belt", "obi", "zone", "region"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "隊",
    on: ["タイ"],
    kun: [],
    source: "",
    meanings: ["regiment", "party", "company", "squad"],
    grade: 4,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "達",
    on: ["タツ", "ダ"],
    kun: ["たち"],
    source: "",
    meanings: ["accomplished", "reach", "arrive", "attain"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "単",
    on: ["タン"],
    kun: ["ひとえ"],
    source: "",
    meanings: ["simple", "one", "single", "merely"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "置",
    on: ["チ"],
    kun: ["おく", "おき"],
    source: "",
    meanings: ["placement", "put", "set", "deposit", "leave behind", "keep", "employ", "pawn"],
    grade: 4,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "仲",
    on: ["チュウ"],
    kun: ["なか"],
    source: "",
    meanings: ["go-between", "relationship"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "貯",
    on: ["チョ"],
    kun: ["ためる", "たくわえる"],
    source: "",
    meanings: ["savings", "store", "lay in", "keep", "wear mustache"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "兆",
    on: ["チョウ"],
    kun: ["きざす", "きざし"],
    source: "",
    meanings: ["portent", "10**12", "trillion", "sign", "omen", "symptoms"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "腸",
    on: ["チョウ"],
    kun: ["はらわた", "わた"],
    source: "",
    meanings: ["intestines", "guts", "bowels", "viscera"],
    grade: 4,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "低",
    on: ["テイ"],
    kun: ["ひくい", "ひくめる", "ひくまる"],
    source: "",
    meanings: ["lower", "short", "humble"],
    grade: 4,
    jlpt: 3,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "停",
    on: ["テイ"],
    kun: ["とめる", "とまる"],
    source: "",
    meanings: ["halt", "stopping"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "底",
    on: ["テイ"],
    kun: ["そこ"],
    source: "",
    meanings: ["bottom", "sole", "depth", "bottom price", "base", "kind", "sort"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "的",
    on: ["テキ"],
    kun: ["まと"],
    source: "",
    meanings: ["bull's eye", "mark", "target", "object", "adjective ending"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "典",
    on: ["テン", "デン"],
    kun: [],
    source: "",
    meanings: ["code", "ceremony", "law", "rule"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "伝",
    on: ["デン", "テン"],
    kun: ["つたわる", "つたえる", "つたう", "つだう", "づたい", "つて"],
    source: "",
    meanings: ["transmit", "go along", "walk along", "follow", "report", "communicate", "legend", "tradition"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "徒",
    on: ["ト"],
    kun: ["いたずら", "あだ"],
    source: "",
    meanings: [
      "on foot",
      "junior",
      "emptiness",
      "vanity",
      "futility",
      "uselessness",
      "ephemeral thing",
      "gang",
      "set",
      "party",
      "people"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "努",
    on: ["ド"],
    kun: ["つとめる"],
    source: "",
    meanings: ["toil", "diligent", "as much as possible"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "灯",
    on: ["トウ"],
    kun: ["ひ", "ほ", "ともしび", "ともす", "あかり"],
    source: "",
    meanings: ["lamp", "a light", "light", "counter for lights"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "働",
    on: ["ドウ"],
    kun: ["はたらく"],
    source: "",
    meanings: ["work", "(kokuji)"],
    grade: 4,
    jlpt: 3,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "堂",
    on: ["ドウ"],
    kun: [],
    source: "",
    meanings: ["public chamber", "hall"],
    grade: 4,
    jlpt: 3,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "得",
    on: ["トク"],
    kun: ["える", "うる"],
    source: "",
    meanings: ["gain", "get", "find", "earn", "acquire", "can", "may", "able to", "profit", "advantage", "benefit"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "特",
    on: ["トク"],
    kun: [],
    source: "",
    meanings: ["special"],
    grade: 4,
    jlpt: 3,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "毒",
    on: ["ドク"],
    kun: [],
    source: "",
    meanings: ["poison", "virus", "venom", "germ", "harm", "injury", "spite"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "栃",
    on: [],
    kun: ["とち"],
    source: "",
    meanings: ["horse chestnut", "(kokuji)"],
    grade: 4,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "奈",
    on: ["ナ", "ナイ", "ダイ"],
    kun: ["いかん", "からなし"],
    source: "",
    meanings: ["Nara", "what?"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "縄",
    on: ["ジョウ"],
    kun: ["なわ", "ただす"],
    source: "",
    meanings: ["straw rope", "cord"],
    grade: 4,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "熱",
    on: ["ネツ"],
    kun: ["あつい"],
    source: "",
    meanings: ["heat", "temperature", "fever", "mania", "passion"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "念",
    on: ["ネン"],
    kun: [],
    source: "",
    meanings: ["wish", "sense", "idea", "thought", "feeling", "desire", "attention"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "敗",
    on: ["ハイ"],
    kun: ["やぶれる"],
    source: "",
    meanings: ["failure", "defeat", "reversal"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "梅",
    on: ["バイ"],
    kun: ["うめ"],
    source: "",
    meanings: ["plum"],
    grade: 4,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "博",
    on: ["ハク", "バク"],
    kun: [],
    source: "",
    meanings: ["Dr.", "command", "esteem", "win acclaim", "Ph.D.", "exposition", "fair"],
    grade: 4,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "飯",
    on: ["ハン"],
    kun: ["めし"],
    source: "",
    meanings: ["meal", "boiled rice"],
    grade: 4,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "費",
    on: ["ヒ"],
    kun: ["ついやす", "ついえる"],
    source: "",
    meanings: ["expense", "cost", "spend", "consume", "waste"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "飛",
    on: ["ヒ"],
    kun: ["とぶ", "とばす", "とばす"],
    source: "",
    meanings: ["fly", "skip (pages)", "scatter"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "必",
    on: ["ヒツ"],
    kun: ["かならず"],
    source: "",
    meanings: ["invariably", "certain", "inevitable"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "媛",
    on: ["エン"],
    kun: ["ひめ"],
    source: "",
    meanings: ["beautiful woman", "princess"],
    grade: 4,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "標",
    on: ["ヒョウ"],
    kun: ["しるべ", "しるし"],
    source: "",
    meanings: [
      "signpost",
      "seal",
      "mark",
      "stamp",
      "imprint",
      "symbol",
      "emblem",
      "trademark",
      "evidence",
      "souvenir",
      "target"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "票",
    on: ["ヒョウ"],
    kun: [],
    source: "",
    meanings: ["ballot", "label", "ticket", "sign"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "不",
    on: ["フ", "ブ"],
    kun: [],
    source: "",
    meanings: ["negative", "non-", "bad", "ugly", "clumsy"],
    grade: 4,
    jlpt: 3,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "付",
    on: ["フ"],
    kun: [
      "つける",
      "つける",
      "づける",
      "つけ",
      "つけ",
      "つけ",
      "づけ",
      "づけ",
      "つく",
      "づく",
      "つき",
      "つき",
      "つき",
      "づき",
      "づき"
    ],
    source: "",
    meanings: ["adhere", "attach", "refer to", "append"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "夫",
    on: ["フ", "フウ", "ブ"],
    kun: ["おっと", "それ"],
    source: "",
    meanings: ["husband", "man"],
    grade: 4,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "府",
    on: ["フ"],
    kun: [],
    source: "",
    meanings: ["borough", "urban prefecture", "govt office", "representative body", "storehouse"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "阜",
    on: ["フ", "フウ"],
    kun: [],
    source: "",
    meanings: ["hill", "mound", "left village radical (no. 170)"],
    grade: 4,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "副",
    on: ["フク"],
    kun: [],
    source: "",
    meanings: ["vice-", "assistant", "aide", "duplicate", "copy"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "粉",
    on: ["フン"],
    kun: ["デシメートル", "こ", "こな"],
    source: "",
    meanings: ["flour", "powder", "dust"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "兵",
    on: ["ヘイ", "ヒョウ"],
    kun: ["つわもの"],
    source: "",
    meanings: ["soldier", "private", "troops", "army", "warfare", "strategy", "tactics"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "別",
    on: ["ベツ"],
    kun: ["わかれる", "わける"],
    source: "",
    meanings: ["separate", "branch off", "diverge", "fork", "another", "extra", "specially"],
    grade: 4,
    jlpt: 3,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "変",
    on: ["ヘン"],
    kun: ["かわる", "かわり", "かえる"],
    source: "",
    meanings: ["unusual", "change", "strange"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "辺",
    on: ["ヘン"],
    kun: ["あたり", "ほとり", "べ"],
    source: "",
    meanings: ["environs", "boundary", "border", "vicinity"],
    grade: 4,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "便",
    on: ["ベン", "ビン"],
    kun: ["たより"],
    source: "",
    meanings: ["convenience", "facility", "excrement", "feces", "letter", "chance"],
    grade: 4,
    jlpt: 3,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "包",
    on: ["ホウ"],
    kun: ["つつむ", "くるむ"],
    source: "",
    meanings: ["wrap", "pack up", "cover", "conceal"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "法",
    on: ["ホウ", "ハッ", "ホッ", "フラン"],
    kun: ["のり"],
    source: "",
    meanings: ["method", "law", "rule", "principle", "model", "system"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "望",
    on: ["ボウ", "モウ"],
    kun: ["のぞむ", "もち"],
    source: "",
    meanings: ["ambition", "full moon", "hope", "desire", "aspire to", "expect"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "牧",
    on: ["ボク"],
    kun: ["まき"],
    source: "",
    meanings: ["breed", "care for", "shepherd", "feed", "pasture"],
    grade: 4,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "末",
    on: ["マツ", "バツ"],
    kun: ["すえ", "うら", "うれ"],
    source: "",
    meanings: ["end", "close", "tip", "powder", "posterity"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "満",
    on: ["マン", "バン"],
    kun: ["みちる", "みつ", "みたす"],
    source: "",
    meanings: ["full", "fullness", "enough", "satisfy"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "未",
    on: ["ミ", "ビ"],
    kun: ["いまだ", "まだ", "ひつじ"],
    source: "",
    meanings: [
      "un-",
      "not yet",
      "hitherto",
      "still",
      "even now",
      "sign of the ram",
      "1-3PM",
      "eighth sign of Chinese zodiac"
    ],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "脈",
    on: ["ミャク"],
    kun: ["すじ"],
    source: "",
    meanings: ["vein", "pulse", "hope"],
    grade: 4,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "民",
    on: ["ミン"],
    kun: ["たみ"],
    source: "",
    meanings: ["people", "nation", "subjects"],
    grade: 4,
    jlpt: 3,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "無",
    on: ["ム", "ブ"],
    kun: ["ない"],
    source: "",
    meanings: ["nothingness", "none", "ain't", "nothing", "nil", "not"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "約",
    on: ["ヤク"],
    kun: ["つづまる", "つづめる", "つづまやか"],
    source: "",
    meanings: ["promise", "approximately", "shrink"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "勇",
    on: ["ユウ"],
    kun: ["いさむ"],
    source: "",
    meanings: ["courage", "cheer up", "be in high spirits", "bravery", "heroism"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "要",
    on: ["ヨウ"],
    kun: ["いる", "かなめ"],
    source: "",
    meanings: ["need", "main point", "essence", "pivot", "key to"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "養",
    on: ["ヨウ", "リョウ"],
    kun: ["やしなう"],
    source: "",
    meanings: ["foster", "bring up", "rear", "develop", "nurture"],
    grade: 4,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "浴",
    on: ["ヨク"],
    kun: ["あびる", "あびせる"],
    source: "",
    meanings: ["bathe", "be favored with", "bask in"],
    grade: 4,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "利",
    on: ["リ"],
    kun: ["きく"],
    source: "",
    meanings: ["profit", "advantage", "benefit"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "梨",
    on: ["リ"],
    kun: ["なし"],
    source: "",
    meanings: ["pear tree"],
    grade: 4,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "陸",
    on: ["リク", "ロク"],
    kun: ["おか"],
    source: "",
    meanings: ["land", "six"],
    grade: 4,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "料",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["fee", "materials"],
    grade: 4,
    jlpt: 3,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "良",
    on: ["リョウ"],
    kun: ["よい", "よい", "いい", "いい"],
    source: "",
    meanings: ["good", "pleasing", "skilled"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "量",
    on: ["リョウ"],
    kun: ["はかる"],
    source: "",
    meanings: ["quantity", "measure", "weight", "amount", "consider", "estimate", "surmise"],
    grade: 4,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "輪",
    on: ["リン"],
    kun: ["わ"],
    source: "",
    meanings: ["wheel", "ring", "circle", "link", "loop", "counter for wheels and flowers"],
    grade: 4,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "類",
    on: ["ルイ"],
    kun: ["たぐい"],
    source: "",
    meanings: ["sort", "kind", "variety", "class", "genus"],
    grade: 4,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "令",
    on: ["レイ"],
    kun: [],
    source: "",
    meanings: ["orders", "laws", "command", "decree", "good"],
    grade: 4,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "例",
    on: ["レイ"],
    kun: ["たとえる"],
    source: "",
    meanings: ["example", "custom", "usage", "precedent"],
    grade: 4,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "冷",
    on: ["レイ"],
    kun: ["つめたい", "ひえる", "ひや", "ひややか", "ひやす", "ひやかす", "さめる", "さます"],
    source: "",
    meanings: ["cool", "cold (beer", "person)", "chill"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "歴",
    on: ["レキ", "レッキ"],
    kun: [],
    source: "",
    meanings: ["curriculum", "continuation", "passage of time"],
    grade: 4,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "連",
    on: ["レン"],
    kun: ["つらなる", "つらねる", "つれる", "づれ"],
    source: "",
    meanings: ["take along", "lead", "join", "connect", "party", "gang", "clique"],
    grade: 4,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "労",
    on: ["ロウ"],
    kun: ["ろうする", "いたわる", "いたずき", "ねぎら", "つかれる", "ねぎらう"],
    source: "",
    meanings: ["labor", "thank for", "reward for", "toil", "trouble"],
    grade: 4,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "老",
    on: ["ロウ"],
    kun: ["おいる", "ふける"],
    source: "",
    meanings: ["old man", "old age", "grow old"],
    grade: 4,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "録",
    on: ["ロク"],
    kun: ["しるす", "とる"],
    source: "",
    meanings: ["record"],
    grade: 4,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "圧",
    on: ["アツ", "エン", "オウ"],
    kun: ["おす", "へす", "おさえる", "おさえる"],
    source: "",
    meanings: ["pressure", "push", "overwhelm", "oppress", "dominate"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "易",
    on: ["エキ", "イ"],
    kun: ["やさしい", "やすい"],
    source: "",
    meanings: ["easy", "ready to", "simple", "fortune-telling", "divination"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "移",
    on: ["イ"],
    kun: ["うつる", "うつす"],
    source: "",
    meanings: ["shift", "move", "change", "drift", "catch (cold", "fire)", "pass into"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "因",
    on: ["イン"],
    kun: ["よる", "ちなむ"],
    source: "",
    meanings: ["cause", "factor", "be associated with", "depend on", "be limited to"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "営",
    on: ["エイ"],
    kun: ["いとなむ", "いとなみ"],
    source: "",
    meanings: ["occupation", "camp", "perform", "build", "conduct (business)"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "永",
    on: ["エイ"],
    kun: ["ながい"],
    source: "",
    meanings: ["eternity", "long", "lengthy"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "衛",
    on: ["エイ", "エ"],
    kun: [],
    source: "",
    meanings: ["defense", "protection"],
    grade: 5,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "液",
    on: ["エキ"],
    kun: [],
    source: "",
    meanings: ["fluid", "liquid", "juice", "sap", "secretion"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "益",
    on: ["エキ", "ヤク"],
    kun: ["ます"],
    source: "",
    meanings: ["benefit", "gain", "profit", "advantage"],
    grade: 5,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "演",
    on: ["エン"],
    kun: [],
    source: "",
    meanings: ["performance", "act", "play", "render", "stage"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "往",
    on: ["オウ"],
    kun: ["いく", "いにしえ", "さきに", "ゆく"],
    source: "",
    meanings: ["journey", "travel", "chase away", "let go", "going", "before", "formerly"],
    grade: 5,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "応",
    on: ["オウ", "ヨウ", "ノウ"],
    kun: ["あたる", "まさに", "こたえる"],
    source: "",
    meanings: ["apply", "answer", "yes", "OK", "reply", "accept"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "恩",
    on: ["オン"],
    kun: [],
    source: "",
    meanings: ["grace", "kindness", "goodness", "favor", "mercy", "blessing", "benefit"],
    grade: 5,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "仮",
    on: ["カ", "ケ"],
    kun: ["かり", "かり"],
    source: "",
    meanings: ["sham", "temporary", "interim", "assumed (name)", "informal"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "価",
    on: ["カ", "ケ"],
    kun: ["あたい"],
    source: "",
    meanings: ["value", "price"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "可",
    on: ["カ", "コク"],
    kun: ["べき", "べし"],
    source: "",
    meanings: ["can", "passable", "mustn't", "should not", "do not"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "河",
    on: ["カ"],
    kun: ["かわ"],
    source: "",
    meanings: ["river"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "過",
    on: ["カ"],
    kun: ["すぎる", "すごす", "あやまち", "あやまつ", "よぎる", "よぎる"],
    source: "",
    meanings: ["overdo", "exceed", "go beyond", "error"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "賀",
    on: ["ガ"],
    kun: [],
    source: "",
    meanings: ["congratulations", "joy"],
    grade: 5,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "解",
    on: ["カイ", "ゲ"],
    kun: ["とく", "とかす", "とける", "ほどく", "ほどける", "わかる", "さとる"],
    source: "",
    meanings: [
      "unravel",
      "notes",
      "key",
      "explanation",
      "understanding",
      "untie",
      "undo",
      "solve",
      "answer",
      "cancel",
      "absolve",
      "explain",
      "minute"
    ],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "快",
    on: ["カイ"],
    kun: ["こころよい"],
    source: "",
    meanings: ["cheerful", "pleasant", "agreeable", "comfortable"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "格",
    on: ["カク", "コウ", "キャク", "ゴウ"],
    kun: [],
    source: "",
    meanings: ["status", "rank", "capacity", "character", "case (law", "grammar)"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "確",
    on: ["カク", "コウ"],
    kun: ["たしか", "たしかめる"],
    source: "",
    meanings: ["assurance", "firm", "tight", "hard", "solid", "confirm", "clear", "evident"],
    grade: 5,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "額",
    on: ["ガク"],
    kun: ["ひたい"],
    source: "",
    meanings: ["forehead", "tablet", "plaque", "framed picture", "sum", "amount", "volume"],
    grade: 5,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "刊",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["publish", "carve", "engrave"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "幹",
    on: ["カン"],
    kun: ["みき"],
    source: "",
    meanings: ["tree trunk", "main part", "talent", "capability"],
    grade: 5,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "慣",
    on: ["カン"],
    kun: ["なれる", "ならす"],
    source: "",
    meanings: ["accustomed", "get used to", "become experienced"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "眼",
    on: ["ガン", "ゲン"],
    kun: ["まなこ", "め"],
    source: "",
    meanings: ["eyeball"],
    grade: 5,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "基",
    on: ["キ"],
    kun: ["もと", "もとい"],
    source: "",
    meanings: ["fundamentals", "radical (chem)", "counter for machines", "foundation"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "寄",
    on: ["キ"],
    kun: ["よる", "より", "よせる"],
    source: "",
    meanings: ["draw near", "stop in", "bring near", "gather", "collect", "send", "forward"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "規",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["standard", "measure"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "技",
    on: ["ギ"],
    kun: ["わざ"],
    source: "",
    meanings: ["skill", "art", "craft", "ability", "feat", "performance", "vocation", "arts"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "義",
    on: ["ギ"],
    kun: [],
    source: "",
    meanings: ["righteousness", "justice", "morality", "honor", "loyalty", "meaning"],
    grade: 5,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "逆",
    on: ["ギャク", "ゲキ"],
    kun: ["さか", "さかさ", "さからう"],
    source: "",
    meanings: ["inverted", "reverse", "opposite", "wicked"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "久",
    on: ["キュウ", "ク"],
    kun: ["ひさしい"],
    source: "",
    meanings: ["long time", "old story"],
    grade: 5,
    jlpt: 2,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "旧",
    on: ["キュウ"],
    kun: ["ふるい", "もと"],
    source: "",
    meanings: ["old times", "old things", "old friend", "former", "ex-"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "居",
    on: ["キョ", "コ"],
    kun: ["いる", "い", "おる"],
    source: "",
    meanings: ["reside", "to be", "exist", "live with"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "許",
    on: ["キョ"],
    kun: ["ゆるす", "もと"],
    source: "",
    meanings: ["permit", "approve"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "境",
    on: ["キョウ", "ケイ"],
    kun: ["さかい"],
    source: "",
    meanings: ["boundary", "border", "region"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "興",
    on: ["コウ", "キョウ"],
    kun: ["おこる", "おこす"],
    source: "",
    meanings: ["entertain", "revive", "retrieve", "interest", "pleasure"],
    grade: 5,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "均",
    on: ["キン"],
    kun: ["ならす"],
    source: "",
    meanings: ["level", "average"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "禁",
    on: ["キン"],
    kun: [],
    source: "",
    meanings: ["prohibition", "ban", "forbid"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "句",
    on: ["ク"],
    kun: [],
    source: "",
    meanings: ["phrase", "clause", "sentence", "passage", "paragraph", "counter for haiku"],
    grade: 5,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "群",
    on: ["グン"],
    kun: ["むれる", "むれ", "むら", "むらがる"],
    source: "",
    meanings: ["flock", "group", "crowd", "herd", "swarm", "cluster"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "経",
    on: ["ケイ", "キョウ", "キン"],
    kun: ["へる", "たつ", "たていと", "はかる", "のり"],
    source: "",
    meanings: ["sutra", "longitude", "pass thru", "expire", "warp"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "潔",
    on: ["ケツ"],
    kun: ["いさぎよい"],
    source: "",
    meanings: ["undefiled", "pure", "clean", "righteous", "gallant"],
    grade: 5,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "件",
    on: ["ケン"],
    kun: ["くだん"],
    source: "",
    meanings: ["affair", "case", "matter", "item"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "券",
    on: ["ケン"],
    kun: [],
    source: "",
    meanings: ["ticket"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "検",
    on: ["ケン"],
    kun: ["しらべる"],
    source: "",
    meanings: ["examination", "investigate"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "険",
    on: ["ケン"],
    kun: ["けわしい"],
    source: "",
    meanings: ["precipitous", "inaccessible place", "impregnable position", "steep place", "sharp eyes"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "減",
    on: ["ゲン"],
    kun: ["へる", "へらす"],
    source: "",
    meanings: ["dwindle", "decrease", "reduce", "decline", "curtail", "get hungry"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "現",
    on: ["ゲン"],
    kun: ["あらわれる", "あらわす", "うつつ", "うつつ"],
    source: "",
    meanings: ["present", "existing", "actual"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "限",
    on: ["ゲン"],
    kun: ["かぎる", "かぎり", "かぎり"],
    source: "",
    meanings: ["limit", "restrict", "to best of ability"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "個",
    on: ["コ", "カ"],
    kun: [],
    source: "",
    meanings: ["individual", "counter for articles"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "故",
    on: ["コ"],
    kun: ["ゆえ", "ふるい", "もと"],
    source: "",
    meanings: [
      "happenstance",
      "especially",
      "intentionally",
      "reason",
      "cause",
      "circumstances",
      "the late",
      "therefore",
      "consequently"
    ],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "護",
    on: ["ゴ"],
    kun: ["まもる"],
    source: "",
    meanings: ["safeguard", "protect"],
    grade: 5,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "効",
    on: ["コウ"],
    kun: ["きく", "ききめ", "ならう"],
    source: "",
    meanings: ["merit", "efficacy", "efficiency", "benefit"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "厚",
    on: ["コウ"],
    kun: ["あつい", "あか"],
    source: "",
    meanings: ["thick", "heavy", "rich", "kind", "cordial", "brazen", "shameless"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "構",
    on: ["コウ"],
    kun: ["かまえる", "かまう"],
    source: "",
    meanings: ["posture", "build", "pretend"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "耕",
    on: ["コウ"],
    kun: ["たがやす"],
    source: "",
    meanings: ["till", "plow", "cultivate"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "講",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["lecture", "club", "association"],
    grade: 5,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "鉱",
    on: ["コウ"],
    kun: ["あらがね"],
    source: "",
    meanings: ["mineral", "ore"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "混",
    on: ["コン"],
    kun: ["まじる", "まじり", "まざる", "まぜる", "こむ"],
    source: "",
    meanings: ["mix", "blend", "confuse"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "査",
    on: ["サ"],
    kun: [],
    source: "",
    meanings: ["investigate"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "再",
    on: ["サイ", "サ"],
    kun: ["ふたたび"],
    source: "",
    meanings: ["again", "twice", "second time"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "妻",
    on: ["サイ"],
    kun: ["つま"],
    source: "",
    meanings: ["wife", "spouse"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "採",
    on: ["サイ"],
    kun: ["とる"],
    source: "",
    meanings: ["pick", "take", "fetch", "take up"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "災",
    on: ["サイ"],
    kun: ["わざわい"],
    source: "",
    meanings: ["disaster", "calamity", "woe", "curse", "evil"],
    grade: 5,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "際",
    on: ["サイ"],
    kun: ["きわ", "ぎわ"],
    source: "",
    meanings: ["occasion", "side", "edge", "verge", "dangerous", "adventurous", "indecent", "time", "when"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "在",
    on: ["ザイ"],
    kun: ["ある"],
    source: "",
    meanings: ["exist", "outskirts", "suburbs", "located in"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "罪",
    on: ["ザイ"],
    kun: ["つみ"],
    source: "",
    meanings: ["guilt", "sin", "crime", "fault", "blame", "offense"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "財",
    on: ["ザイ", "サイ", "ゾク"],
    kun: ["たから"],
    source: "",
    meanings: ["property", "money", "wealth", "assets"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "桜",
    on: ["オウ", "ヨウ"],
    kun: ["さくら"],
    source: "",
    meanings: ["cherry"],
    grade: 5,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "雑",
    on: ["ザツ", "ゾウ"],
    kun: ["まじえる", "まじる"],
    source: "",
    meanings: ["miscellaneous"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "賛",
    on: ["サン"],
    kun: ["たすける", "たたえる"],
    source: "",
    meanings: ["approve", "praise", "title or inscription on picture", "assist", "agree with"],
    grade: 5,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "酸",
    on: ["サン"],
    kun: ["すい"],
    source: "",
    meanings: ["acid", "bitterness", "sour", "tart"],
    grade: 5,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "師",
    on: ["シ"],
    kun: ["いくさ"],
    source: "",
    meanings: ["expert", "teacher", "master", "model", "exemplar", "army (incl. counter)", "war"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "志",
    on: ["シ"],
    kun: ["シリング", "こころざす", "こころざし"],
    source: "",
    meanings: ["intention", "plan", "resolve", "aspire", "motive", "hopes", "shilling"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "支",
    on: ["シ"],
    kun: ["ささえる", "つかえる", "かう"],
    source: "",
    meanings: ["branch", "support", "sustain", "branch radical (no. 65)"],
    grade: 5,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "枝",
    on: ["シ"],
    kun: ["えだ"],
    source: "",
    meanings: ["bough", "branch", "twig", "limb", "counter for branches"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "資",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["assets", "resources", "capital", "funds", "data", "be conducive to", "contribute to"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "飼",
    on: ["シ"],
    kun: ["かう"],
    source: "",
    meanings: ["domesticate", "raise", "keep", "feed"],
    grade: 5,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "似",
    on: ["ジ"],
    kun: ["にる", "ひる"],
    source: "",
    meanings: ["becoming", "resemble", "counterfeit", "imitate", "suitable"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "示",
    on: ["ジ", "シ"],
    kun: ["しめす"],
    source: "",
    meanings: ["show", "indicate", "point out", "express", "display"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "識",
    on: ["シキ"],
    kun: ["しる", "しるす"],
    source: "",
    meanings: ["discriminating", "know", "write"],
    grade: 5,
    jlpt: 2,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "質",
    on: ["シツ", "シチ", "チ"],
    kun: ["たち", "ただす", "もと", "わりふ"],
    source: "",
    meanings: ["substance", "quality", "matter", "temperament"],
    grade: 5,
    jlpt: 3,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "舎",
    on: ["シャ", "セキ"],
    kun: ["やどる"],
    source: "",
    meanings: ["cottage", "inn", "hut", "house", "mansion"],
    grade: 5,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "謝",
    on: ["シャ"],
    kun: ["あやまる"],
    source: "",
    meanings: ["apologize", "thank", "refuse"],
    grade: 5,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "授",
    on: ["ジュ"],
    kun: ["さずける", "さずかる"],
    source: "",
    meanings: ["impart", "instruct", "grant", "confer"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "修",
    on: ["シュウ", "シュ"],
    kun: ["おさめる", "おさまる"],
    source: "",
    meanings: ["discipline", "conduct oneself well", "study", "master"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "術",
    on: ["ジュツ"],
    kun: ["すべ"],
    source: "",
    meanings: ["art", "technique", "skill", "means", "trick", "resources", "magic"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "述",
    on: ["ジュツ"],
    kun: ["のべる"],
    source: "",
    meanings: ["mention", "state", "speak", "relate"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "準",
    on: ["ジュン"],
    kun: ["じゅんじる", "じゅんずる", "なぞらえる", "のり", "ひとしい", "みずもり"],
    source: "",
    meanings: ["semi-", "correspond to", "proportionate to", "conform", "imitate"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "序",
    on: ["ジョ"],
    kun: ["ついで", "ついで"],
    source: "",
    meanings: ["preface", "beginning", "order", "precedence", "occasion", "chance", "incidentally"],
    grade: 5,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "承",
    on: ["ショウ", "ジョウ"],
    kun: ["うけたまわる", "うける"],
    source: "",
    meanings: ["acquiesce", "hear", "listen to", "be informed", "receive"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "招",
    on: ["ショウ"],
    kun: ["まねく"],
    source: "",
    meanings: ["beckon", "invite", "summon", "engage"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "証",
    on: ["ショウ"],
    kun: ["あかし"],
    source: "",
    meanings: ["evidence", "proof", "certificate"],
    grade: 5,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "常",
    on: ["ジョウ"],
    kun: ["つね", "とこ"],
    source: "",
    meanings: ["usual", "ordinary", "normal", "common", "regular", "continually", "always", "long-lasting"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "情",
    on: ["ジョウ", "セイ"],
    kun: ["なさけ"],
    source: "",
    meanings: ["feelings", "emotion", "passion", "sympathy", "circumstances", "facts"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "条",
    on: ["ジョウ", "チョウ", "デキ"],
    kun: ["えだ", "すじ"],
    source: "",
    meanings: [
      "article",
      "clause",
      "counter for articles",
      "clauses",
      "paragraphs",
      "etc.",
      "twig",
      "item",
      "stripe",
      "streak"
    ],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "状",
    on: ["ジョウ"],
    kun: [],
    source: "",
    meanings: ["status quo", "conditions", "circumstances", "form", "appearance"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "織",
    on: ["ショク", "シキ"],
    kun: ["おる", "おり", "おり", "おり", "おり"],
    source: "",
    meanings: ["weave", "fabric"],
    grade: 5,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "職",
    on: ["ショク", "ソク"],
    kun: [],
    source: "",
    meanings: ["post", "employment", "work"],
    grade: 5,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "制",
    on: ["セイ"],
    kun: [],
    source: "",
    meanings: ["system", "law", "rule"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "勢",
    on: ["セイ", "ゼイ"],
    kun: ["いきおい", "はずみ"],
    source: "",
    meanings: ["forces", "energy", "military strength"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "性",
    on: ["セイ", "ショウ"],
    kun: ["さが"],
    source: "",
    meanings: ["sex", "gender", "nature"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "政",
    on: ["セイ", "ショウ"],
    kun: ["まつりごと", "まん"],
    source: "",
    meanings: ["politics", "government"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "精",
    on: ["セイ", "ショウ"],
    kun: ["しらげる", "くわしい"],
    source: "",
    meanings: ["refined", "ghost", "fairy", "energy", "vitality", "semen", "excellence", "purity", "skill"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "製",
    on: ["セイ"],
    kun: [],
    source: "",
    meanings: ["made in...", "manufacture"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "税",
    on: ["ゼイ"],
    kun: [],
    source: "",
    meanings: ["tax", "duty"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "績",
    on: ["セキ"],
    kun: [],
    source: "",
    meanings: ["exploits", "achievements", "unreeling cocoons"],
    grade: 5,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "責",
    on: ["セキ"],
    kun: ["せめる"],
    source: "",
    meanings: ["blame", "condemn", "censure"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "接",
    on: ["セツ", "ショウ"],
    kun: ["つぐ"],
    source: "",
    meanings: ["touch", "contact", "adjoin", "piece together"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "設",
    on: ["セツ"],
    kun: ["もうける"],
    source: "",
    meanings: ["establishment", "provision", "prepare"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "絶",
    on: ["ゼツ"],
    kun: ["たえる", "たやす", "たつ"],
    source: "",
    meanings: [
      "discontinue",
      "sever",
      "cut off",
      "abstain",
      "interrupt",
      "suppress",
      "be beyond",
      "without match",
      "peerless",
      "unparalleled"
    ],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "舌",
    on: ["ゼツ"],
    kun: ["した"],
    source: "",
    meanings: ["tongue", "reed", "clapper"],
    grade: 5,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "銭",
    on: ["セン", "ゼン"],
    kun: ["ぜに", "すき"],
    source: "",
    meanings: ["coin", ".01 yen", "money"],
    grade: 5,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "祖",
    on: ["ソ"],
    kun: [],
    source: "",
    meanings: ["ancestor", "pioneer", "founder"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "素",
    on: ["ソ", "ス"],
    kun: ["もと"],
    source: "",
    meanings: ["elementary", "principle", "naked", "uncovered"],
    grade: 5,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "総",
    on: ["ソウ"],
    kun: ["すべて", "すべて", "ふさ"],
    source: "",
    meanings: ["general", "whole", "all", "full", "total"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "像",
    on: ["ゾウ"],
    kun: [],
    source: "",
    meanings: ["statue", "picture", "image", "figure", "portrait"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "増",
    on: ["ゾウ"],
    kun: ["ます", "まし", "ふえる", "ふやす"],
    source: "",
    meanings: ["increase", "add", "augment", "gain", "promote"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "造",
    on: ["ゾウ"],
    kun: ["つくる", "つくり", "づくり"],
    source: "",
    meanings: ["create", "make", "structure", "physique"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "則",
    on: ["ソク"],
    kun: ["のっとる"],
    source: "",
    meanings: ["rule", "follow", "based on", "model after"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "測",
    on: ["ソク"],
    kun: ["はかる"],
    source: "",
    meanings: ["fathom", "plan", "scheme", "measure"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "属",
    on: ["ゾク", "ショク"],
    kun: ["さかん", "つく", "やから"],
    source: "",
    meanings: ["belong", "genus", "subordinate official", "affiliated"],
    grade: 5,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "損",
    on: ["ソン"],
    kun: ["そこなう", "そこなう", "そこなう", "そこねる", "そこねる"],
    source: "",
    meanings: ["damage", "loss", "disadvantage", "hurt", "injure"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "態",
    on: ["タイ"],
    kun: ["わざと"],
    source: "",
    meanings: ["attitude", "condition", "figure", "appearance", "voice (of verbs)"],
    grade: 5,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "貸",
    on: ["タイ"],
    kun: ["かす", "かし", "かし"],
    source: "",
    meanings: ["lend"],
    grade: 5,
    jlpt: 3,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "退",
    on: ["タイ"],
    kun: ["しりぞく", "しりぞける", "ひく", "のく", "のける", "どく"],
    source: "",
    meanings: ["retreat", "withdraw", "retire", "resign", "repel", "expel", "reject"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "団",
    on: ["ダン", "トン"],
    kun: ["かたまり", "まるい"],
    source: "",
    meanings: ["group", "association"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "断",
    on: ["ダン"],
    kun: ["たつ", "ことわる", "さだめる"],
    source: "",
    meanings: [
      "severance",
      "decline",
      "refuse",
      "apologize",
      "warn",
      "dismiss",
      "prohibit",
      "decision",
      "judgement",
      "cutting"
    ],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "築",
    on: ["チク"],
    kun: ["きずく"],
    source: "",
    meanings: ["fabricate", "build", "construct"],
    grade: 5,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "張",
    on: ["チョウ"],
    kun: ["はる", "はり", "ばり"],
    source: "",
    meanings: ["lengthen", "counter for bows & stringed instruments", "stretch", "spread", "put up (tent)"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "提",
    on: ["テイ", "チョウ", "ダイ"],
    kun: ["さげる"],
    source: "",
    meanings: ["propose", "take along", "carry in hand"],
    grade: 5,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "程",
    on: ["テイ"],
    kun: ["ほど", "ほど"],
    source: "",
    meanings: ["extent", "degree", "law", "formula", "distance", "limits", "amount"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "敵",
    on: ["テキ"],
    kun: ["かたき", "あだ", "かなう"],
    source: "",
    meanings: ["enemy", "foe", "opponent"],
    grade: 5,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "適",
    on: ["テキ"],
    kun: ["かなう"],
    source: "",
    meanings: ["suitable", "occasional", "rare", "qualified", "capable"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "統",
    on: ["トウ"],
    kun: ["すべる", "ほびる"],
    source: "",
    meanings: ["overall", "relationship", "ruling", "governing"],
    grade: 5,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "導",
    on: ["ドウ"],
    kun: ["みちびく"],
    source: "",
    meanings: ["guidance", "leading", "conduct", "usher"],
    grade: 5,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "銅",
    on: ["ドウ"],
    kun: ["あかがね"],
    source: "",
    meanings: ["copper"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "徳",
    on: ["トク"],
    kun: [],
    source: "",
    meanings: ["benevolence", "virtue", "goodness", "commanding respect"],
    grade: 5,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "独",
    on: ["ドク", "トク"],
    kun: ["ひとり"],
    source: "",
    meanings: ["single", "alone", "spontaneously", "Germany"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "任",
    on: ["ニン"],
    kun: ["まかせる", "まかす"],
    source: "",
    meanings: ["responsibility", "duty", "term", "entrust to", "appoint"],
    grade: 5,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "燃",
    on: ["ネン"],
    kun: ["もえる", "もやす", "もす"],
    source: "",
    meanings: ["burn", "blaze", "glow"],
    grade: 5,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "能",
    on: ["ノウ"],
    kun: ["よく", "あたう"],
    source: "",
    meanings: ["ability", "talent", "skill", "capacity"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "破",
    on: ["ハ"],
    kun: ["やぶる", "やぶれる", "われる"],
    source: "",
    meanings: ["rend", "rip", "tear", "break", "destroy", "defeat", "frustrate"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "判",
    on: ["ハン", "バン"],
    kun: ["わかる"],
    source: "",
    meanings: ["judgement", "signature", "stamp", "seal"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "版",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["printing block", "printing plate", "edition", "impression", "label"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "犯",
    on: ["ハン", "ボン"],
    kun: ["おかす"],
    source: "",
    meanings: ["crime", "sin", "offense"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "比",
    on: ["ヒ"],
    kun: ["くらべる"],
    source: "",
    meanings: ["compare", "race", "ratio", "Philippines"],
    grade: 5,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "肥",
    on: ["ヒ"],
    kun: ["こえる", "こえ", "こやす", "こやし", "ふとる"],
    source: "",
    meanings: ["fertilizer", "get fat", "fertile", "manure", "pamper"],
    grade: 5,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "非",
    on: ["ヒ"],
    kun: ["あらず"],
    source: "",
    meanings: ["un-", "mistake", "negative", "injustice", "non-"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "備",
    on: ["ビ"],
    kun: ["そなえる", "そなわる", "つぶさに"],
    source: "",
    meanings: ["equip", "provision", "preparation"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "俵",
    on: ["ヒョウ"],
    kun: ["たわら"],
    source: "",
    meanings: ["bag", "bale", "sack", "counter for bags"],
    grade: 5,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "評",
    on: ["ヒョウ"],
    kun: [],
    source: "",
    meanings: ["evaluate", "criticism", "comment"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "貧",
    on: ["ヒン", "ビン"],
    kun: ["まずしい"],
    source: "",
    meanings: ["poverty", "poor"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "婦",
    on: ["フ"],
    kun: ["よめ"],
    source: "",
    meanings: ["lady", "woman", "wife", "bride"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "富",
    on: ["フ", "フウ"],
    kun: ["とむ", "とみ"],
    source: "",
    meanings: ["wealth", "enrich", "abundant"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "布",
    on: ["フ", "ホ"],
    kun: ["ぬの", "しく", "きれ"],
    source: "",
    meanings: ["linen", "cloth", "spread", "distribute"],
    grade: 5,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "武",
    on: ["ブ", "ム"],
    kun: ["たけ", "たけし"],
    source: "",
    meanings: ["warrior", "military", "chivalry", "arms"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "復",
    on: ["フク"],
    kun: ["また"],
    source: "",
    meanings: ["restore", "return to", "revert", "resume"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "複",
    on: ["フク"],
    kun: [],
    source: "",
    meanings: ["duplicate", "double", "compound", "multiple"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "仏",
    on: ["ブツ", "フツ"],
    kun: ["ほとけ"],
    source: "",
    meanings: ["Buddha", "the dead", "France"],
    grade: 5,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "編",
    on: ["ヘン"],
    kun: ["あむ", "あみ"],
    source: "",
    meanings: ["compilation", "knit", "plait", "braid", "twist", "editing", "completed poem", "part of a book"],
    grade: 5,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "弁",
    on: ["ベン", "ヘン"],
    kun: ["かんむり", "わきまえる", "わける", "はなびら", "あらそう"],
    source: "",
    meanings: [
      "valve",
      "petal",
      "braid",
      "speech",
      "dialect",
      "discrimination",
      "dispose of",
      "distinguish",
      "conical cap"
    ],
    grade: 5,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "保",
    on: ["ホ", "ホウ"],
    kun: ["たもつ"],
    source: "",
    meanings: ["protect", "guarantee", "keep", "preserve", "sustain", "support"],
    grade: 5,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "墓",
    on: ["ボ"],
    kun: ["はか"],
    source: "",
    meanings: ["grave", "tomb"],
    grade: 5,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "報",
    on: ["ホウ"],
    kun: ["むくいる"],
    source: "",
    meanings: ["report", "news", "reward", "retribution"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "豊",
    on: ["ホウ", "ブ"],
    kun: ["ゆたか", "とよ"],
    source: "",
    meanings: ["bountiful", "excellent", "rich"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "暴",
    on: ["ボウ", "バク"],
    kun: ["あばく", "あばれる"],
    source: "",
    meanings: ["outburst", "rave", "fret", "force", "violence", "cruelty", "outrage"],
    grade: 5,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "貿",
    on: ["ボウ"],
    kun: [],
    source: "",
    meanings: ["trade", "exchange"],
    grade: 5,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "防",
    on: ["ボウ"],
    kun: ["ふせぐ"],
    source: "",
    meanings: ["ward off", "defend", "protect", "resist"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "務",
    on: ["ム"],
    kun: ["つとめる"],
    source: "",
    meanings: ["task", "duties"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "夢",
    on: ["ム", "ボウ"],
    kun: ["ゆめ", "ゆめみる", "くらい"],
    source: "",
    meanings: ["dream", "vision", "illusion"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "迷",
    on: ["メイ"],
    kun: ["まよう"],
    source: "",
    meanings: ["astray", "be perplexed", "in doubt", "lost", "err", "illusion"],
    grade: 5,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "綿",
    on: ["メン"],
    kun: ["わた"],
    source: "",
    meanings: ["cotton"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "輸",
    on: ["ユ", "シュ"],
    kun: [],
    source: "",
    meanings: ["transport", "send", "be inferior"],
    grade: 5,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "余",
    on: ["ヨ"],
    kun: ["あまる", "あまり", "あます", "あんまり"],
    source: "",
    meanings: ["too much", "myself", "surplus", "other", "remainder"],
    grade: 5,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "預",
    on: ["ヨ"],
    kun: ["あずける", "あずかる"],
    source: "",
    meanings: ["deposit", "custody", "leave with", "entrust to"],
    grade: 5,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "容",
    on: ["ヨウ"],
    kun: ["いれる"],
    source: "",
    meanings: ["contain", "form", "looks"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "率",
    on: ["ソツ", "リツ", "シュツ"],
    kun: ["ひきいる"],
    source: "",
    meanings: ["ratio", "rate", "proportion", "%", "factor", "lead", "spearhead", "command"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "略",
    on: ["リャク"],
    kun: ["ほぼ", "はぶく", "おかす", "おさめる", "はかりごと", "はかる"],
    source: "",
    meanings: ["abbreviation", "omission", "outline", "shorten", "capture", "plunder"],
    grade: 5,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "留",
    on: ["リュウ", "ル"],
    kun: ["とめる", "とまる", "とどめる", "とどまる", "るうぶる"],
    source: "",
    meanings: ["detain", "fasten", "halt", "stop"],
    grade: 5,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "領",
    on: ["リョウ"],
    kun: ["えり"],
    source: "",
    meanings: ["jurisdiction", "dominion", "territory", "fief", "reign"],
    grade: 5,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "異",
    on: ["イ"],
    kun: ["こと", "ことなる", "け"],
    source: "",
    meanings: ["uncommon", "different", "queerness", "strangeness", "wonderful", "curious", "unusual"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "遺",
    on: ["イ", "ユイ"],
    kun: ["のこす"],
    source: "",
    meanings: ["bequeath", "leave behind", "reserve"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "域",
    on: ["イキ"],
    kun: [],
    source: "",
    meanings: ["range", "region", "limits", "stage", "level"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "宇",
    on: ["ウ"],
    kun: [],
    source: "",
    meanings: ["eaves", "roof", "house", "heaven"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "映",
    on: ["エイ"],
    kun: ["うつる", "うつす", "はえる", "ばえ"],
    source: "",
    meanings: ["reflect", "reflection", "projection"],
    grade: 6,
    jlpt: 3,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "延",
    on: ["エン"],
    kun: ["のびる", "のべる", "のべ", "のばす"],
    source: "",
    meanings: ["prolong", "stretching"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "沿",
    on: ["エン"],
    kun: ["そう", "ぞい"],
    source: "",
    meanings: ["run alongside", "follow along", "run along", "lie along"],
    grade: 6,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "我",
    on: ["ガ"],
    kun: ["われ", "わ", "わが", "わが"],
    source: "",
    meanings: ["ego", "I", "selfish", "our", "oneself"],
    grade: 6,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "灰",
    on: ["カイ"],
    kun: ["はい"],
    source: "",
    meanings: ["ashes", "puckery juice", "cremate"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "拡",
    on: ["カク", "コウ"],
    kun: ["ひろがる", "ひろげる", "ひろめる"],
    source: "",
    meanings: ["broaden", "extend", "expand", "enlarge"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "閣",
    on: ["カク"],
    kun: [],
    source: "",
    meanings: ["tower", "tall building", "palace"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "革",
    on: ["カク"],
    kun: ["かわ"],
    source: "",
    meanings: ["leather", "skin", "reform", "become serious"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "割",
    on: ["カツ"],
    kun: ["わる", "わり", "わり", "われる", "さく"],
    source: "",
    meanings: ["proportion", "comparatively", "divide", "cut", "separate", "split"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "株",
    on: ["シュ"],
    kun: ["かぶ"],
    source: "",
    meanings: ["stocks", "stump", "shares", "stock", "counter for small plants"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "巻",
    on: ["カン", "ケン"],
    kun: ["まく", "まき", "まき"],
    source: "",
    meanings: [
      "scroll",
      "volume",
      "book",
      "part",
      "roll up",
      "wind up",
      "tie",
      "coil",
      "counter for texts (or book scrolls)"
    ],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "干",
    on: ["カン"],
    kun: ["ほす", "ほし", "ぼし", "ひる"],
    source: "",
    meanings: ["dry", "parch", "ebb", "recede", "interfere", "intercede"],
    grade: 6,
    jlpt: 2,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "看",
    on: ["カン"],
    kun: ["みる"],
    source: "",
    meanings: ["watch over", "see"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "簡",
    on: ["カン", "ケン"],
    kun: ["えらぶ", "ふだ"],
    source: "",
    meanings: ["simplicity", "brevity"],
    grade: 6,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "危",
    on: ["キ"],
    kun: ["あぶない", "あやうい", "あやぶむ"],
    source: "",
    meanings: ["dangerous", "fear", "uneasy"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "揮",
    on: ["キ"],
    kun: ["ふるう"],
    source: "",
    meanings: ["brandish", "wave", "wag", "swing", "shake"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "机",
    on: ["き"],
    kun: ["つくえ"],
    source: "https://en.wiktionary.org/wiki/%E6%9C%BA#Kanji",
    meanings: ["desk", "table"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [
      {
        value: "机",
        kana: ["つくえ, つき"],
        english: ["desk"]
      },
      {
        value: "机上",
        kana: ["きじょう"],
        english: ["on the desk", "theoretical", "academic"]
      },
      {
        value: "机上の空論",
        kana: ["きじょうのくうろん"],
        english: ["academic gossip", "empty theory"]
      },
      {
        value: "事務机",
        kana: ["じむづくえ"],
        english: ["cleric desk"]
      },
      {
        value: "書き物机",
        kana: ["かきものづくえ"],
        english: ["writing desk"]
      }
    ],
    tags: []
  },
  {
    name: "貴",
    on: ["キ"],
    kun: ["たっとい", "とうとい", "たっとぶ", "とうとぶ"],
    source: "",
    meanings: ["precious", "value", "prize", "esteem", "honor"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "疑",
    on: ["ギ"],
    kun: ["うたがう"],
    source: "",
    meanings: ["doubt", "distrust", "be suspicious", "question"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "吸",
    on: ["キュウ"],
    kun: ["すう"],
    source: "",
    meanings: ["suck", "imbibe", "inhale", "sip"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "供",
    on: ["キョウ", "ク", "クウ", "グ"],
    kun: ["そなえる", "とも", "ども"],
    source: "",
    meanings: ["submit", "offer", "present", "serve (meal)", "accompany"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "胸",
    on: ["キョウ"],
    kun: ["むね", "むな"],
    source: "",
    meanings: ["bosom", "breast", "chest", "heart", "feelings"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "郷",
    on: ["キョウ", "ゴウ"],
    kun: ["さと"],
    source: "",
    meanings: ["home town", "village", "native place", "district"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "勤",
    on: ["キン", "ゴン"],
    kun: ["つとめる", "づとめ", "つとまる", "いそしむ"],
    source: "",
    meanings: ["diligence", "become employed", "serve"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "筋",
    on: ["キン"],
    kun: ["すじ"],
    source: "",
    meanings: ["muscle", "sinew", "tendon", "fiber", "plot", "plan", "descent"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "敬",
    on: ["ケイ", "キョウ"],
    kun: ["うやまう"],
    source: "",
    meanings: ["awe", "respect", "honor", "revere"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "系",
    on: ["ケイ"],
    kun: [],
    source: "",
    meanings: ["lineage", "system"],
    grade: 6,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "警",
    on: ["ケイ"],
    kun: ["いましめる"],
    source: "",
    meanings: ["admonish", "commandment"],
    grade: 6,
    jlpt: 2,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "劇",
    on: ["ゲキ"],
    kun: [],
    source: "",
    meanings: ["drama", "play"],
    grade: 6,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "激",
    on: ["ゲキ"],
    kun: ["はげしい"],
    source: "",
    meanings: ["violent", "get excited", "enraged", "chafe", "incite"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "穴",
    on: ["ケツ"],
    kun: ["あな"],
    source: "",
    meanings: ["hole", "aperture", "slit", "cave", "den"],
    grade: 6,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "憲",
    on: ["ケン"],
    kun: [],
    source: "",
    meanings: ["constitution", "law"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "権",
    on: ["ケン", "ゴン"],
    kun: ["おもり", "かり", "はかる"],
    source: "",
    meanings: ["authority", "power", "rights"],
    grade: 6,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "絹",
    on: ["ケン"],
    kun: ["きぬ"],
    source: "",
    meanings: ["silk"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "厳",
    on: ["ゲン", "ゴン"],
    kun: ["おごそか", "きびしい", "いかめしい", "いつくし"],
    source: "",
    meanings: ["stern", "strictness", "severity", "rigidity"],
    grade: 6,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "源",
    on: ["ゲン"],
    kun: ["みなもと"],
    source: "",
    meanings: ["source", "origin"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "呼",
    on: ["コ"],
    kun: ["よぶ"],
    source: "",
    meanings: ["call", "call out to", "invite"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "己",
    on: ["コ", "キ"],
    kun: ["おのれ", "つちのと", "な"],
    source: "",
    meanings: ["self"],
    grade: 6,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "誤",
    on: ["ゴ"],
    kun: ["あやまる", "あやまる"],
    source: "",
    meanings: ["mistake", "err", "do wrong", "mislead"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "后",
    on: ["コウ", "ゴ"],
    kun: ["きさき"],
    source: "",
    meanings: ["empress", "queen", "after", "behind", "back", "later"],
    grade: 6,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "孝",
    on: ["コウ", "キョウ"],
    kun: [],
    source: "",
    meanings: ["filial piety", "child's respect"],
    grade: 6,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "皇",
    on: ["コウ", "オウ"],
    kun: [],
    source: "",
    meanings: ["emperor"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "紅",
    on: ["コウ", "ク"],
    kun: ["べに", "くれない", "あかい"],
    source: "",
    meanings: ["crimson", "deep red"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鋼",
    on: ["コウ"],
    kun: ["はがね"],
    source: "",
    meanings: ["steel"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "降",
    on: ["コウ", "ゴ"],
    kun: ["おりる", "おろす", "ふる", "ふり", "くだる", "くだす"],
    source: "",
    meanings: ["descend", "precipitate", "fall", "surrender"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "刻",
    on: ["コク"],
    kun: ["きざむ", "きざみ"],
    source: "",
    meanings: ["engrave", "cut fine", "chop", "hash", "mince", "time", "carving"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "穀",
    on: ["コク"],
    kun: [],
    source: "",
    meanings: ["cereals", "grain"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "骨",
    on: ["コツ"],
    kun: ["ほね"],
    source: "",
    meanings: ["skeleton", "bone", "remains", "frame"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "困",
    on: ["コン"],
    kun: ["こまる"],
    source: "",
    meanings: ["quandary", "become distressed", "annoyed"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "砂",
    on: ["サ", "シャ"],
    kun: ["すな"],
    source: "",
    meanings: ["sand"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "座",
    on: ["ザ"],
    kun: ["すわる"],
    source: "",
    meanings: ["squat", "seat", "cushion", "gathering", "sit"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "済",
    on: ["サイ", "セイ"],
    kun: ["すむ", "ずみ", "ずみ", "すまない", "すます", "すます", "すくう", "なす", "わたし", "わたる"],
    source: "",
    meanings: ["settle (debt", "etc.)", "relieve (burden)", "finish", "come to an end", "excusable", "need not"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "裁",
    on: ["サイ"],
    kun: ["たつ", "さばく"],
    source: "",
    meanings: ["tailor", "judge", "decision", "cut out (pattern)"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "策",
    on: ["サク"],
    kun: [],
    source: "",
    meanings: ["scheme", "plan", "policy", "step", "means"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "冊",
    on: ["サツ", "サク"],
    kun: ["ふみ"],
    source: "",
    meanings: ["tome", "counter for books", "volume"],
    grade: 6,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "蚕",
    on: ["サン", "テン"],
    kun: ["かいこ", "こ"],
    source: "",
    meanings: ["silkworm"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "姿",
    on: ["シ"],
    kun: ["すがた"],
    source: "",
    meanings: ["figure", "form", "shape"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "私",
    on: ["し"],
    kun: ["わたくし"],
    source: "https://en.wiktionary.org/wiki/%E7%A7%81#Kanji",
    meanings: ["me", "I"],
    grade: 6,
    jlpt: 3,
    strokes: 7,
    examples: [
      {
        value: "私",
        kana: ["わたし", "わたくし"],
        english: ["I", "me", "personal matter"]
      },
      {
        value: "私立",
        kana: ["しりつ", "わたくしりつ"],
        english: ["private (establishment"]
      },
      {
        value: "私邸",
        kana: ["してい"],
        english: ["private residence"]
      },
      {
        value: "私的",
        kana: ["してき"],
        english: ["personal", "private", "proprietary"]
      },
      {
        value: "私鉄",
        kana: ["してつ"],
        english: ["private railway"]
      }
    ],
    tags: []
  },
  {
    name: "至",
    on: ["シ"],
    kun: ["いたる"],
    source: "",
    meanings: ["climax", "arrive", "proceed", "reach", "attain", "result in"],
    grade: 6,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "視",
    on: ["シ"],
    kun: ["みる"],
    source: "",
    meanings: ["inspection", "regard as", "see", "look at"],
    grade: 6,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "詞",
    on: ["シ"],
    kun: ["ことば"],
    source: "",
    meanings: ["part of speech", "words", "poetry"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "誌",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["document", "records"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "磁",
    on: ["ジ"],
    kun: [],
    source: "",
    meanings: ["magnet", "porcelain"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "射",
    on: ["シャ"],
    kun: ["いる", "さす", "うつ"],
    source: "",
    meanings: ["shoot", "shine into", "onto", "archery"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "捨",
    on: ["シャ"],
    kun: ["すてる"],
    source: "",
    meanings: ["discard", "throw away", "abandon", "resign", "reject", "sacrifice"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "尺",
    on: ["シャク"],
    kun: [],
    source: "",
    meanings: ["shaku", "Japanese foot", "measure", "scale", "rule"],
    grade: 6,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "若",
    on: ["ジャク", "ニャク", "ニャ"],
    kun: ["わかい", "わか", "もしくわ", "もし", "もしくは", "ごとし"],
    source: "",
    meanings: ["young", "if", "perhaps", "possibly", "low number", "immature"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "樹",
    on: ["ジュ"],
    kun: ["き"],
    source: "",
    meanings: ["timber", "trees", "wood", "establish", "set up"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "収",
    on: ["シュウ"],
    kun: ["おさめる", "おさまる"],
    source: "",
    meanings: ["income", "obtain", "reap", "pay", "supply", "store"],
    grade: 6,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "宗",
    on: ["シュウ", "ソウ"],
    kun: ["むね"],
    source: "",
    meanings: ["religion", "sect", "denomination", "main point", "origin", "essence"],
    grade: 6,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "就",
    on: ["シュウ", "ジュ"],
    kun: ["つく", "つける"],
    source: "",
    meanings: ["concerning", "settle", "take position", "depart", "study", "per"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "衆",
    on: ["シュウ", "シュ"],
    kun: ["おおい"],
    source: "",
    meanings: ["masses", "great numbers", "multitude", "populace"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "従",
    on: ["ジュウ", "ショウ", "ジュ"],
    kun: ["したがう", "したがえる", "より"],
    source: "",
    meanings: ["accompany", "obey", "submit to", "comply", "follow", "secondary", "incidental", "subordinate"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "縦",
    on: ["ジュウ"],
    kun: ["たて"],
    source: "",
    meanings: ["vertical", "length", "height", "self-indulgent", "wayward"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "縮",
    on: ["シュク"],
    kun: ["ちぢむ", "ちぢまる", "ちぢめる", "ちぢれる", "ちぢらす"],
    source: "",
    meanings: ["shrink", "contract", "shrivel", "wrinkle", "reduce"],
    grade: 6,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "熟",
    on: ["ジュク"],
    kun: ["うれる"],
    source: "",
    meanings: ["mellow", "ripen", "mature", "acquire skill"],
    grade: 6,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "純",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["genuine", "purity", "innocence", "net (profit)"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "処",
    on: ["ショ"],
    kun: ["ところ", "こ", "おる"],
    source: "",
    meanings: ["dispose", "manage", "deal with", "sentence", "condemn", "act", "behave", "place"],
    grade: 6,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "署",
    on: ["ショ"],
    kun: [],
    source: "",
    meanings: ["signature", "govt office", "police station"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "諸",
    on: ["ショ"],
    kun: ["もろ"],
    source: "",
    meanings: ["various", "many", "several", "together"],
    grade: 6,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "除",
    on: ["ジョ", "ジ"],
    kun: ["のぞく", "よけ"],
    source: "",
    meanings: ["exclude", "division (x/3)", "remove", "abolish", "cancel", "except"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "傷",
    on: ["ショウ"],
    kun: ["きず", "いたむ", "いためる"],
    source: "",
    meanings: ["wound", "hurt", "injure", "impair", "pain", "injury", "cut", "gash", "scar", "weak point"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "将",
    on: ["ショウ", "ソウ"],
    kun: ["まさに", "はた", "まさ", "ひきいる", "もって"],
    source: "",
    meanings: ["leader", "commander", "general", "admiral", "or", "and again", "soon", "from now on", "just about"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "障",
    on: ["ショウ"],
    kun: ["さわる"],
    source: "",
    meanings: ["hinder", "hurt", "harm"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "城",
    on: ["ジョウ", "セイ"],
    kun: ["しろ"],
    source: "",
    meanings: ["castle"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "蒸",
    on: ["ジョウ", "セイ"],
    kun: ["むす", "むれる", "むらす"],
    source: "",
    meanings: ["steam", "heat", "sultry", "foment", "get musty"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "針",
    on: ["シン"],
    kun: ["はり"],
    source: "",
    meanings: ["needle", "pin", "staple", "stinger"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "仁",
    on: ["ジン", "ニ", "ニン"],
    kun: [],
    source: "",
    meanings: ["humanity", "virtue", "benevolence", "charity", "man", "kernel"],
    grade: 6,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "垂",
    on: ["スイ"],
    kun: ["たれる", "たらす", "たれ", "たれ", "なんなんとす"],
    source: "",
    meanings: ["droop", "suspend", "hang", "slouch"],
    grade: 6,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "推",
    on: ["スイ"],
    kun: ["おす"],
    source: "",
    meanings: ["conjecture", "infer", "guess", "suppose", "support", "push (for)"],
    grade: 6,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "寸",
    on: ["スン"],
    kun: [],
    source: "",
    meanings: ["measurement", "tenth of a shaku", "a little", "small"],
    grade: 6,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "盛",
    on: ["セイ", "ジョウ"],
    kun: ["もる", "さかる", "さかん"],
    source: "",
    meanings: ["boom", "prosper", "copulate"],
    grade: 6,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "聖",
    on: ["セイ", "ショウ"],
    kun: ["ひじり"],
    source: "",
    meanings: ["holy", "saint", "sage", "master", "priest"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "誠",
    on: ["セイ"],
    kun: ["まこと"],
    source: "",
    meanings: ["sincerity", "admonish", "warn", "prohibit", "truth", "fidelity"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "宣",
    on: ["セン"],
    kun: ["のたまう"],
    source: "",
    meanings: ["proclaim", "say", "announce"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "専",
    on: ["セン"],
    kun: ["もっぱら"],
    source: "",
    meanings: ["specialty", "exclusive", "mainly", "solely"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "泉",
    on: ["セン"],
    kun: ["いずみ"],
    source: "",
    meanings: ["spring", "fountain"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "洗",
    on: ["セン"],
    kun: ["あらう"],
    source: "",
    meanings: ["wash", "inquire into", "probe"],
    grade: 6,
    jlpt: 3,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "染",
    on: ["セン"],
    kun: ["そめる", "そまる", "しみる", "しみ"],
    source: "",
    meanings: ["dye", "color", "paint", "stain", "print"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "善",
    on: ["ゼン"],
    kun: ["よい", "いい", "よく", "よしとする"],
    source: "",
    meanings: ["virtuous", "good", "goodness"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "創",
    on: ["ソウ", "ショウ"],
    kun: ["つくる", "はじめる", "きず", "けずしける"],
    source: "",
    meanings: ["genesis", "wound", "injury", "hurt", "start", "originate"],
    grade: 6,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "奏",
    on: ["ソウ"],
    kun: ["かなでる"],
    source: "",
    meanings: ["play music", "speak to a ruler", "complete"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "層",
    on: ["ソウ"],
    kun: [],
    source: "",
    meanings: ["stratum", "social class", "layer", "story", "floor"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "操",
    on: ["ソウ", "サン"],
    kun: ["みさお", "あやつる"],
    source: "",
    meanings: ["maneuver", "manipulate", "operate", "steer", "chastity", "virginity", "fidelity"],
    grade: 6,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "窓",
    on: ["ソウ", "ス"],
    kun: ["まど", "てんまど", "けむだし"],
    source: "",
    meanings: ["window", "pane"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "装",
    on: ["ソウ", "ショウ"],
    kun: ["よそおう", "よそおい"],
    source: "",
    meanings: ["attire", "dress", "pretend", "disguise", "profess"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "臓",
    on: ["ゾウ"],
    kun: ["はらわた"],
    source: "",
    meanings: ["entrails", "viscera", "bowels"],
    grade: 6,
    jlpt: 2,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "蔵",
    on: ["ゾウ", "ソウ"],
    kun: ["くら", "おさめる", "かくれる"],
    source: "",
    meanings: ["storehouse", "hide", "own", "have", "possess"],
    grade: 6,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "存",
    on: ["ソン", "ゾン"],
    kun: ["ながらえる", "ある", "たもつ", "とう"],
    source: "",
    meanings: ["exist", "suppose", "be aware of", "believe", "feel"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "尊",
    on: ["ソン"],
    kun: ["たっとい", "とうとい", "たっとぶ", "とうとぶ"],
    source: "",
    meanings: ["revered", "valuable", "precious", "noble", "exalted"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "宅",
    on: ["タク"],
    kun: [],
    source: "",
    meanings: ["home", "house", "residence", "our house", "my husband"],
    grade: 6,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "担",
    on: ["タン"],
    kun: ["かつぐ", "になう"],
    source: "",
    meanings: ["shouldering", "carry", "raise", "bear"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "探",
    on: ["タン"],
    kun: ["さぐる", "さがす"],
    source: "",
    meanings: ["grope", "search", "look for"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "誕",
    on: ["タン"],
    kun: [],
    source: "",
    meanings: ["nativity", "be born", "declension", "lie", "be arbitrary"],
    grade: 6,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "暖",
    on: ["ダン", "ノン"],
    kun: ["あたたか", "あたたかい", "あたたまる", "あたためる"],
    source: "",
    meanings: ["warmth"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "段",
    on: ["ダン", "タン"],
    kun: [],
    source: "",
    meanings: ["grade", "steps", "stairs"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "値",
    on: ["チ"],
    kun: ["ね", "あたい"],
    source: "",
    meanings: ["price", "cost", "value"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "宙",
    on: ["チュウ"],
    kun: [],
    source: "",
    meanings: ["mid-air", "air", "space", "sky", "memorization", "interval of time"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "忠",
    on: ["チュウ"],
    kun: [],
    source: "",
    meanings: ["loyalty", "fidelity", "faithfulness"],
    grade: 6,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "著",
    on: ["チョ", "チャク"],
    kun: ["あらわす", "いちじるしい"],
    source: "",
    meanings: [
      "renowned",
      "publish",
      "write",
      "remarkable",
      "phenomenal",
      "put on",
      "don",
      "wear",
      "arrival",
      "finish (race)",
      "counter for suits of clothing",
      "literary work"
    ],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "庁",
    on: ["チョウ", "テイ"],
    kun: ["やくしょ"],
    source: "",
    meanings: ["government office"],
    grade: 6,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "潮",
    on: ["チョウ"],
    kun: ["しお", "うしお"],
    source: "",
    meanings: ["tide", "salt water", "opportunity"],
    grade: 6,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "頂",
    on: ["チョウ"],
    kun: ["いただく", "いただき"],
    source: "",
    meanings: ["place on the head", "receive", "top of head", "top", "summit", "peak"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "賃",
    on: ["チン"],
    kun: [],
    source: "",
    meanings: ["fare", "fee", "hire", "rent", "wages", "charge"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "痛",
    on: ["ツウ"],
    kun: ["いたい", "いたむ", "いたましい", "いためる"],
    source: "",
    meanings: ["pain", "hurt", "damage", "bruise"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "展",
    on: ["テン"],
    kun: [],
    source: "",
    meanings: ["unfold", "expand"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "党",
    on: ["トウ"],
    kun: ["なかま", "むら"],
    source: "",
    meanings: ["party", "faction", "clique"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "糖",
    on: ["トウ"],
    kun: [],
    source: "",
    meanings: ["sugar"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "討",
    on: ["トウ"],
    kun: ["うつ"],
    source: "",
    meanings: ["chastise", "attack", "defeat", "destroy", "conquer"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "届",
    on: ["カイ"],
    kun: ["とどける", "とどけ", "とどく"],
    source: "",
    meanings: ["deliver", "reach", "arrive", "report", "notify", "forward"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "難",
    on: ["ナン"],
    kun: ["かたい", "がたい", "むずかしい", "むづかしい", "むつかしい", "にくい"],
    source: "",
    meanings: ["difficult", "impossible", "trouble", "accident", "defect"],
    grade: 6,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "乳",
    on: ["ニュウ"],
    kun: ["ちち", "ち"],
    source: "",
    meanings: ["milk", "breasts"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "認",
    on: ["ニン"],
    kun: ["みとめる", "したためる"],
    source: "",
    meanings: ["acknowledge", "witness", "discern", "recognize", "appreciate", "believe"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "納",
    on: ["ノウ", "ナッ", "ナ", "ナン", "トウ"],
    kun: ["おさめる", "おさめる", "おさまる"],
    source: "",
    meanings: ["settlement", "obtain", "reap", "pay", "supply", "store"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "脳",
    on: ["ノウ", "ドウ"],
    kun: ["のうずる"],
    source: "",
    meanings: ["brain", "memory"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "派",
    on: ["ハ"],
    kun: [],
    source: "",
    meanings: ["faction", "group", "party", "clique", "sect", "school"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "俳",
    on: ["ハイ"],
    kun: [],
    source: "",
    meanings: ["haiku", "actor"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "拝",
    on: ["ハイ"],
    kun: ["おがむ", "おろがむ"],
    source: "",
    meanings: ["worship", "adore", "pray to"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "背",
    on: ["ハイ"],
    kun: ["せ", "せい", "そむく", "そむける"],
    source: "",
    meanings: ["stature", "height", "back", "behind", "disobey", "defy", "go back on", "rebel"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "肺",
    on: ["ハイ"],
    kun: [],
    source: "",
    meanings: ["lungs"],
    grade: 6,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "班",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["squad", "corps", "unit", "group"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "晩",
    on: ["バン"],
    kun: [],
    source: "",
    meanings: ["nightfall", "night"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "否",
    on: ["ヒ"],
    kun: ["いな", "いや"],
    source: "",
    meanings: ["negate", "no", "noes", "refuse", "decline", "deny"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "批",
    on: ["ヒ"],
    kun: [],
    source: "",
    meanings: ["criticism", "strike"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "秘",
    on: ["ヒ"],
    kun: ["ひめる", "ひそか", "かくす"],
    source: "",
    meanings: ["secret", "conceal"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "腹",
    on: ["フク"],
    kun: ["はら"],
    source: "",
    meanings: ["abdomen", "belly", "stomach"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "奮",
    on: ["フン"],
    kun: ["ふるう"],
    source: "",
    meanings: ["stirred up", "be invigorated", "flourish"],
    grade: 6,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "並",
    on: ["ヘイ", "ホウ"],
    kun: ["なみ", "なみ", "ならべる", "ならぶ", "ならびに"],
    source: "",
    meanings: ["row", "and", "besides", "as well as", "line up", "rank with", "rival", "equal"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "閉",
    on: ["ヘイ"],
    kun: ["とじる", "とざす", "しめる", "しまる", "たてる"],
    source: "",
    meanings: ["closed", "shut"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "陛",
    on: ["ヘイ"],
    kun: [],
    source: "",
    meanings: ["highness", "steps (of throne)"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "片",
    on: ["ヘン"],
    kun: ["かた", "かた"],
    source: "",
    meanings: ["one-sided", "leaf", "sheet", "right-side kata radical (no. 91)"],
    grade: 6,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "補",
    on: ["ホ"],
    kun: ["おぎなう"],
    source: "",
    meanings: ["supplement", "supply", "make good", "offset", "compensate", "assistant", "learner"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "暮",
    on: ["ボ"],
    kun: ["くれる", "くらす"],
    source: "",
    meanings: ["evening", "twilight", "season's end", "livelihood", "make a living", "spend time"],
    grade: 6,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "宝",
    on: ["ホウ"],
    kun: ["たから"],
    source: "",
    meanings: ["treasure", "wealth", "valuables"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "訪",
    on: ["ホウ"],
    kun: ["おとずれる", "たずねる", "とう"],
    source: "",
    meanings: ["call on", "visit", "look up", "offer sympathy"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "亡",
    on: ["ボウ", "モウ"],
    kun: ["ない", "なき", "ほろびる", "ほろぶ", "ほろぼす"],
    source: "",
    meanings: ["deceased", "the late", "dying", "perish"],
    grade: 6,
    jlpt: 2,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "忘",
    on: ["ボウ"],
    kun: ["わすれる"],
    source: "",
    meanings: ["forget"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "棒",
    on: ["ボウ"],
    kun: [],
    source: "",
    meanings: ["rod", "stick", "cane", "pole", "club", "line"],
    grade: 6,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "枚",
    on: ["マイ", "バイ"],
    kun: [],
    source: "",
    meanings: ["sheet of...", "counter for flat thin objects or sheets"],
    grade: 6,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "幕",
    on: ["マク", "バク"],
    kun: ["とばり"],
    source: "",
    meanings: ["curtain", "bunting", "act of play"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "密",
    on: ["ミツ"],
    kun: ["ひそか"],
    source: "",
    meanings: ["secrecy", "density (pop)", "minuteness", "carefulness"],
    grade: 6,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "盟",
    on: ["メイ"],
    kun: [],
    source: "",
    meanings: ["alliance", "oath"],
    grade: 6,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "模",
    on: ["モ", "ボ"],
    kun: [],
    source: "",
    meanings: ["imitation", "copy", "mock"],
    grade: 6,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "訳",
    on: ["ヤク"],
    kun: ["わけ"],
    source: "",
    meanings: ["translate", "reason", "circumstance", "case"],
    grade: 6,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "優",
    on: ["ユウ", "ウ"],
    kun: ["やさしい", "すぐれる", "まさる"],
    source: "",
    meanings: ["tenderness", "excel", "surpass", "actor", "superiority", "gentleness"],
    grade: 6,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "郵",
    on: ["ユウ"],
    kun: [],
    source: "",
    meanings: ["mail", "stagecoach stop"],
    grade: 6,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "幼",
    on: ["ヨウ"],
    kun: ["おさない"],
    source: "",
    meanings: ["infancy", "childhood"],
    grade: 6,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "欲",
    on: ["ヨク"],
    kun: ["ほっする", "ほしい"],
    source: "",
    meanings: ["longing", "covetousness", "greed", "passion", "desire", "craving"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "翌",
    on: ["ヨク"],
    kun: [],
    source: "",
    meanings: ["the following", "next"],
    grade: 6,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "乱",
    on: ["ラン", "ロン"],
    kun: ["みだれる", "みだる", "みだす", "みだ", "おさめる", "わたる"],
    source: "",
    meanings: ["riot", "war", "disorder", "disturb"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "卵",
    on: ["ラン"],
    kun: ["たまご"],
    source: "",
    meanings: ["egg", "ovum", "spawn", "roe"],
    grade: 6,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "覧",
    on: ["ラン"],
    kun: ["みる"],
    source: "",
    meanings: ["perusal", "see"],
    grade: 6,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "裏",
    on: ["リ"],
    kun: ["うら"],
    source: "",
    meanings: ["back", "amidst", "in", "reverse", "inside", "palm", "sole", "rear", "lining", "wrong side"],
    grade: 6,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "律",
    on: ["リツ", "リチ", "レツ"],
    kun: [],
    source: "",
    meanings: ["rhythm", "law", "regulation", "gauge", "control"],
    grade: 6,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "臨",
    on: ["リン"],
    kun: ["のぞむ"],
    source: "",
    meanings: ["look to", "face", "meet", "confront", "attend", "call on"],
    grade: 6,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "朗",
    on: ["ロウ"],
    kun: ["ほがらか", "あきらか"],
    source: "",
    meanings: ["melodious", "clear", "bright", "serene", "cheerful"],
    grade: 6,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "論",
    on: ["ロン"],
    kun: ["あげつらう"],
    source: "",
    meanings: ["argument", "discourse"],
    grade: 6,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "亜",
    on: ["ア"],
    kun: ["つぐ"],
    source: "",
    meanings: ["Asia", "rank next", "come after", "-ous"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "哀",
    on: ["アイ"],
    kun: ["あわれ", "あわれむ", "かなしい"],
    source: "",
    meanings: ["pathetic", "grief", "sorrow", "pathos", "pity", "sympathize"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "挨",
    on: ["アイ"],
    kun: ["ひらく"],
    source: "",
    meanings: ["approach", "draw near", "push open"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "握",
    on: ["アク"],
    kun: ["にぎる"],
    source: "",
    meanings: ["grip", "hold", "mould sushi", "bribe"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "扱",
    on: ["ソウ", "キュウ"],
    kun: ["あつかい", "あつかう", "あつかる", "こく"],
    source: "",
    meanings: ["handle", "entertain", "thresh", "strip"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "宛",
    on: ["エン"],
    kun: ["あてる", "あて", "づつ", "あたかも"],
    source: "",
    meanings: ["address", "just like", "fortunately"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "闇",
    on: ["アン", "オン"],
    kun: ["やみ", "くらい"],
    source: "",
    meanings: ["get dark", "gloom", "disorder"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "依",
    on: ["イ", "エ"],
    kun: ["よる"],
    source: "",
    meanings: ["reliant", "depend on", "consequently", "therefore", "due to"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "偉",
    on: ["イ"],
    kun: ["えらい"],
    source: "",
    meanings: ["admirable", "greatness", "remarkable", "conceited", "famous", "excellent"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "威",
    on: ["イ"],
    kun: ["おどす", "おどし", "おどかす"],
    source: "",
    meanings: ["intimidate", "dignity", "majesty", "menace", "threaten"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "尉",
    on: ["イ", "ジョウ"],
    kun: [],
    source: "",
    meanings: ["military officer", "jailer", "old man", "rank"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "慰",
    on: ["イ"],
    kun: ["なぐさめる", "なぐさむ"],
    source: "",
    meanings: ["consolation", "amusement", "seduce", "cheer", "make sport of", "comfort", "console"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "椅",
    on: ["イ"],
    kun: [],
    source: "",
    meanings: ["chair"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "為",
    on: ["イ"],
    kun: ["ため", "なる", "なす", "する", "たり", "つくる", "なり"],
    source: "",
    meanings: [
      "do",
      "change",
      "make",
      "benefit",
      "welfare",
      "be of use",
      "reach to",
      "try",
      "practice",
      "cost",
      "serve as",
      "good",
      "advantage",
      "as a result of"
    ],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "畏",
    on: ["イ"],
    kun: ["おそれる", "かしこまる", "かしこ", "かしこし"],
    source: "",
    meanings: ["fear", "majestic", "graciously", "be apprehensive"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "維",
    on: ["イ"],
    kun: [],
    source: "",
    meanings: ["fiber", "tie", "rope"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "緯",
    on: ["イ"],
    kun: ["よこいと", "ぬき"],
    source: "",
    meanings: ["horizontal", "woof", "left & right", "(parallels of) latitude", "prediction"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "萎",
    on: ["イ"],
    kun: ["な", "しおれる", "しなびる", "しぼむ", "なえる"],
    source: "",
    meanings: ["wither", "droop", "lame"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "違",
    on: ["イ"],
    kun: ["ちがう", "ちがい", "ちがえる", "ちがえる", "たがう", "たがえる"],
    source: "",
    meanings: ["difference", "differ"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "壱",
    on: ["イチ", "イツ"],
    kun: ["ひとつ"],
    source: "",
    meanings: ["one (in documents)"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "逸",
    on: ["イツ"],
    kun: ["それる", "そらす", "はぐれる"],
    source: "",
    meanings: ["deviate", "idleness", "leisure", "miss the mark", "evade", "elude", "parry", "diverge"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "稲",
    on: ["トウ", "テ"],
    kun: ["いね", "いな"],
    source: "",
    meanings: ["rice plant"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "芋",
    on: ["ウ"],
    kun: ["いも"],
    source: "",
    meanings: ["potato"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "咽",
    on: ["イン", "エン", "エツ"],
    kun: ["むせぶ", "むせる", "のど", "のむ"],
    source: "",
    meanings: ["throat", "choked", "smothered", "stuffy"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "姻",
    on: ["イン"],
    kun: [],
    source: "",
    meanings: ["matrimony", "marry"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "淫",
    on: ["イン"],
    kun: ["ひたす", "ほしいまま", "みだら", "みだれる", "みだり"],
    source: "",
    meanings: ["lewdness", "licentiousness"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "陰",
    on: ["イン"],
    kun: ["かげ", "かげる"],
    source: "",
    meanings: ["shade", "yin", "negative", "sex organs", "secret", "shadow"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "隠",
    on: ["イン", "オン"],
    kun: ["かくす", "かくし", "かくれる", "かかす", "よる"],
    source: "",
    meanings: ["conceal", "hide", "cover"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "韻",
    on: ["イン"],
    kun: [],
    source: "",
    meanings: ["rhyme", "elegance", "tone"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "臼",
    on: ["キュウ", "グ"],
    kun: ["うす", "うすづく"],
    source: "",
    meanings: ["mortar"],
    grade: 8,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "渦",
    on: ["カ"],
    kun: ["うず"],
    source: "",
    meanings: ["whirlpool", "eddy", "vortex"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "唄",
    on: ["バイ"],
    kun: ["うた", "うたう"],
    source: "",
    meanings: ["song", "ballad"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "浦",
    on: ["ホ"],
    kun: ["うら"],
    source: "",
    meanings: ["bay", "creek", "inlet", "gulf", "beach", "seacoast"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "餌",
    on: ["ジ", "ニ"],
    kun: ["え", "えば", "えさ", "もち"],
    source: "",
    meanings: ["food", "bait", "prey", "tempting profit"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "影",
    on: ["エイ"],
    kun: ["かげ"],
    source: "",
    meanings: ["shadow", "silhouette", "phantom"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "詠",
    on: ["エイ"],
    kun: ["よむ", "うたう"],
    source: "",
    meanings: ["recitation", "poem", "song", "composing"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "鋭",
    on: ["エイ"],
    kun: ["するどい"],
    source: "",
    meanings: ["pointed", "sharpness", "edge", "weapon", "sharp", "violent"],
    grade: 8,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "疫",
    on: ["エキ", "ヤク"],
    kun: [],
    source: "",
    meanings: ["epidemic"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "悦",
    on: ["エツ"],
    kun: ["よろこぶ", "よろこばす"],
    source: "",
    meanings: ["ecstasy", "joy", "rapture"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "謁",
    on: ["エツ"],
    kun: [],
    source: "",
    meanings: ["audience", "audience (with king)"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "越",
    on: ["エツ", "オツ"],
    kun: ["こす", "こす", "ごし", "こえる", "ごえ"],
    source: "",
    meanings: ["surpass", "cross over", "move to", "exceed", "Vietnam"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "閲",
    on: ["エツ"],
    kun: ["けみする"],
    source: "",
    meanings: ["review", "inspection", "revision"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "宴",
    on: ["エン"],
    kun: ["うたげ"],
    source: "",
    meanings: ["banquet", "feast", "party"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "怨",
    on: ["エン", "オン", "ウン"],
    kun: ["うらむ", "うらみ", "うらめしい"],
    source: "",
    meanings: ["grudge", "show resentment", "be jealous"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "援",
    on: ["エン"],
    kun: [],
    source: "",
    meanings: ["abet", "help", "save"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "炎",
    on: ["エン"],
    kun: ["ほのお"],
    source: "",
    meanings: ["inflammation", "flame", "blaze"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "煙",
    on: ["エン"],
    kun: ["けむる", "けむり", "けむい"],
    source: "",
    meanings: ["smoke"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "猿",
    on: ["エン"],
    kun: ["さる"],
    source: "",
    meanings: ["monkey"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "縁",
    on: ["エン", "ネン"],
    kun: ["ふち", "ふちどる", "ゆかり", "よすが", "へり", "えにし"],
    source: "",
    meanings: ["affinity", "relation", "connection", "edge", "border", "verge", "brink"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "艶",
    on: ["エン"],
    kun: ["つや", "なまめかしい", "あでやか", "つやめく", "なまめく"],
    source: "",
    meanings: ["glossy", "luster", "glaze", "polish", "charm", "colorful", "captivating"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "鉛",
    on: ["エン"],
    kun: ["なまり"],
    source: "",
    meanings: ["lead"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "汚",
    on: ["オ"],
    kun: ["けがす", "けがれる", "けがらわしい", "よごす", "よごれる", "きたない"],
    source: "",
    meanings: ["dirty", "pollute", "disgrace", "rape", "defile"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "凹",
    on: ["オウ"],
    kun: ["くぼむ", "へこむ", "ぼこ"],
    source: "",
    meanings: ["concave", "hollow", "sunken"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "奥",
    on: ["オウ"],
    kun: ["おく", "おくまる", "くま"],
    source: "",
    meanings: ["heart", "interior"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "押",
    on: ["オウ"],
    kun: ["おす", "おし", "おっ", "おさえる", "おさえる"],
    source: "",
    meanings: [
      "push",
      "stop",
      "check",
      "subdue",
      "attach",
      "seize",
      "weight",
      "shove",
      "press",
      "seal",
      "do in spite of"
    ],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "旺",
    on: ["オウ", "キョウ", "ゴウ"],
    kun: ["かがやき", "うつくしい", "さかん"],
    source: "",
    meanings: ["flourishing", "successful", "beautiful", "vigorous"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "欧",
    on: ["オウ"],
    kun: ["うたう", "はく"],
    source: "",
    meanings: ["Europe"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "殴",
    on: ["オウ"],
    kun: ["なぐる"],
    source: "",
    meanings: ["assault", "hit", "beat", "thrash"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "翁",
    on: ["オウ"],
    kun: ["おきな"],
    source: "",
    meanings: ["venerable old man"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "憶",
    on: ["オク"],
    kun: [],
    source: "",
    meanings: ["recollection", "think", "remember"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "臆",
    on: ["オク", "ヨク"],
    kun: ["むね", "おくする"],
    source: "",
    meanings: ["timidity", "heart", "mind", "fear", "cowardly"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "乙",
    on: ["オツ", "イツ"],
    kun: ["おと", "きのと"],
    source: "",
    meanings: ["the latter", "duplicate", "strange", "witty", "fishhook radical (no. 5)"],
    grade: 8,
    jlpt: 1,
    strokes: 1,
    examples: [],
    tags: []
  },
  {
    name: "俺",
    on: ["エン"],
    kun: ["おれ", "われ"],
    source: "",
    meanings: ["I", "myself"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "卸",
    on: ["シャ"],
    kun: ["おろす", "おろし", "おろし"],
    source: "",
    meanings: ["wholesale"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "穏",
    on: ["オン"],
    kun: ["おだやか"],
    source: "",
    meanings: ["calm", "quiet", "moderation"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "佳",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["excellent", "beautiful", "good", "pleasing", "skilled"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "嫁",
    on: ["カ"],
    kun: ["よめ", "とつぐ", "いく", "ゆく"],
    source: "",
    meanings: ["marry into", "bride"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "寡",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["widow", "minority", "few"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "暇",
    on: ["カ"],
    kun: ["ひま", "いとま"],
    source: "",
    meanings: ["spare time", "rest", "leisure", "time", "leave of absence"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "架",
    on: ["カ"],
    kun: ["かける", "かかる"],
    source: "",
    meanings: ["erect", "frame", "mount", "support", "shelf", "construct"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "禍",
    on: ["カ"],
    kun: ["わざわい"],
    source: "",
    meanings: ["calamity", "misfortune", "evil", "curse"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "稼",
    on: ["カ"],
    kun: ["かせぐ"],
    source: "",
    meanings: ["earnings", "work", "earn money"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "箇",
    on: ["カ", "コ"],
    kun: [],
    source: "",
    meanings: ["counter for articles"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "苛",
    on: ["カ"],
    kun: ["いじめる", "さいなむ", "いらだつ", "からい", "こまかい"],
    source: "",
    meanings: ["torment", "scold", "chastise"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "華",
    on: ["カ", "ケ"],
    kun: ["はな"],
    source: "",
    meanings: ["splendor", "flower", "petal", "shine", "luster", "ostentatious", "showy", "gay", "gorgeous"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "菓",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["candy", "cakes", "fruit"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蚊",
    on: ["ブン"],
    kun: ["か"],
    source: "",
    meanings: ["mosquito"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "牙",
    on: ["ガ", "ゲ"],
    kun: ["きば", "は"],
    source: "",
    meanings: ["tusk", "fang", "tusk radical (no. 92)"],
    grade: 8,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "雅",
    on: ["ガ"],
    kun: ["みやび"],
    source: "",
    meanings: ["gracious", "elegant", "graceful", "refined"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "餓",
    on: ["ガ"],
    kun: ["うえる"],
    source: "",
    meanings: ["starve", "hungry", "thirst"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "介",
    on: ["カイ"],
    kun: [],
    source: "",
    meanings: ["jammed in", "shellfish", "mediate", "concern oneself with"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "塊",
    on: ["カイ", "ケ"],
    kun: ["かたまり", "つちくれ"],
    source: "",
    meanings: ["clod", "lump", "chunk", "clot", "mass"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "壊",
    on: ["カイ", "エ"],
    kun: ["こわす", "こわれる", "やぶる"],
    source: "",
    meanings: ["demolition", "break", "destroy"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "怪",
    on: ["カイ", "ケ"],
    kun: ["あやしい", "あやしむ"],
    source: "",
    meanings: ["suspicious", "mystery", "apparition"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "悔",
    on: ["カイ"],
    kun: ["くいる", "くやむ", "くやしい"],
    source: "",
    meanings: ["repent", "regret"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "懐",
    on: ["カイ", "エ"],
    kun: ["ふところ", "なつかしい", "なつかしむ", "なつく", "なつける", "なずける", "いだく", "おもう"],
    source: "",
    meanings: ["pocket", "feelings", "heart", "yearn", "miss someone", "become attached to", "bosom", "breast"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "戒",
    on: ["カイ"],
    kun: ["いましめる"],
    source: "",
    meanings: ["commandment"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "拐",
    on: ["カイ"],
    kun: [],
    source: "",
    meanings: ["kidnap", "falsify"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "皆",
    on: ["カイ"],
    kun: ["みな", "みんな"],
    source: "",
    meanings: ["all", "everything"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "劾",
    on: ["ガイ"],
    kun: [],
    source: "",
    meanings: ["censure", "criminal investigation"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "崖",
    on: ["ガイ", "ゲ", "ギ"],
    kun: ["がけ", "きし", "はて"],
    source: "",
    meanings: ["cliff", "bluff", "precipice"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "慨",
    on: ["ガイ"],
    kun: [],
    source: "",
    meanings: ["rue", "be sad", "sigh", "lament"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "概",
    on: ["ガイ"],
    kun: ["おおむね"],
    source: "",
    meanings: ["outline", "condition", "approximation", "generally"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "涯",
    on: ["ガイ"],
    kun: ["はて"],
    source: "",
    meanings: ["horizon", "shore", "limit", "bound"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蓋",
    on: ["ガイ", "カイ", "コウ"],
    kun: ["ふた", "けだし", "おおう", "かさ", "かこう"],
    source: "",
    meanings: ["cover", "lid", "flap"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "該",
    on: ["ガイ"],
    kun: [],
    source: "",
    meanings: ["above-stated", "the said", "that specific"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "骸",
    on: ["ガイ", "カイ"],
    kun: ["むくろ"],
    source: "",
    meanings: ["bone", "body", "corpse"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "垣",
    on: ["エン"],
    kun: ["かき"],
    source: "",
    meanings: ["hedge", "fence", "wall"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "柿",
    on: ["シ"],
    kun: ["かき"],
    source: "",
    meanings: ["persimmon"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "嚇",
    on: ["カク"],
    kun: ["おどす"],
    source: "",
    meanings: ["menacing", "dignity", "majesty", "threaten"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "核",
    on: ["カク"],
    kun: [],
    source: "",
    meanings: ["nucleus", "core", "kernel"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "殻",
    on: ["カク", "コク", "バイ"],
    kun: ["から", "がら"],
    source: "",
    meanings: ["husk", "nut shell"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "獲",
    on: ["カク"],
    kun: ["える"],
    source: "",
    meanings: ["seize", "get", "find", "earn", "acquire", "can", "may", "able to"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "穫",
    on: ["カク"],
    kun: [],
    source: "",
    meanings: ["harvest", "reap"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "較",
    on: ["カク", "コウ"],
    kun: ["くらべる"],
    source: "",
    meanings: ["contrast", "compare"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "郭",
    on: ["カク"],
    kun: ["くるわ"],
    source: "",
    meanings: ["enclosure", "quarters", "fortification", "red-light district"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "隔",
    on: ["カク"],
    kun: ["へだてる", "へだたる"],
    source: "",
    meanings: ["isolate", "alternate", "distance", "separate", "gulf"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "岳",
    on: ["ガク"],
    kun: ["たけ"],
    source: "",
    meanings: ["point", "peak", "mountain"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "顎",
    on: ["ガク"],
    kun: ["あご", "あぎと"],
    source: "",
    meanings: ["jaw", "chin", "gill"],
    grade: 8,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "掛",
    on: ["カイ", "ケイ"],
    kun: [
      "かける",
      "かける",
      "かけ",
      "かけ",
      "がけ",
      "かかる",
      "かかる",
      "がかる",
      "かかり",
      "がかり",
      "かかり",
      "がかり"
    ],
    source: "",
    meanings: ["hang", "suspend", "depend", "arrive at", "tax", "pour"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "喝",
    on: ["カツ"],
    kun: [],
    source: "",
    meanings: ["hoarse", "scold"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "括",
    on: ["カツ"],
    kun: ["くくる"],
    source: "",
    meanings: ["fasten", "tie up", "arrest", "constrict"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "渇",
    on: ["カツ"],
    kun: ["かわく"],
    source: "",
    meanings: ["thirst", "dry up", "parch"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "滑",
    on: ["カツ", "コツ"],
    kun: ["すべる", "なめらか"],
    source: "",
    meanings: ["slippery", "slide", "slip", "fail exam"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "葛",
    on: ["カツ", "カチ"],
    kun: ["つづら", "くず"],
    source: "",
    meanings: ["arrowroot", "kudzu"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "褐",
    on: ["カツ"],
    kun: [],
    source: "",
    meanings: ["brown", "woollen kimono"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "轄",
    on: ["カツ"],
    kun: ["くさび"],
    source: "",
    meanings: ["control", "wedge"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "且",
    on: ["ショ", "ソ", "ショウ"],
    kun: ["かつ"],
    source: "",
    meanings: ["moreover", "also", "furthermore"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "釜",
    on: ["フ"],
    kun: ["かま"],
    source: "",
    meanings: ["kettle", "cauldron", "iron pot"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鎌",
    on: ["レン", "ケン"],
    kun: ["かま"],
    source: "",
    meanings: ["sickle", "scythe", "trick"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "刈",
    on: ["ガイ", "カイ"],
    kun: ["かる"],
    source: "",
    meanings: ["reap", "cut", "clip", "trim", "prune"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "瓦",
    on: ["ガ"],
    kun: ["かわら", "ぐらむ"],
    source: "",
    meanings: ["tile", "gram"],
    grade: 8,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "乾",
    on: ["カン", "ケン"],
    kun: ["かわく", "かわかす", "ほす", "ひる", "いぬい"],
    source: "",
    meanings: ["drought", "dry", "dessicate", "drink up", "heaven", "emperor"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "冠",
    on: ["カン"],
    kun: ["かんむり"],
    source: "",
    meanings: ["crown", "best", "peerless"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "勘",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["intuition", "perception", "check", "compare", "sixth sense"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "勧",
    on: ["カン", "ケン"],
    kun: ["すすめる"],
    source: "",
    meanings: ["persuade", "recommend", "advise", "encourage", "offer"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "喚",
    on: ["カン"],
    kun: ["わめく"],
    source: "",
    meanings: ["yell", "cry", "call", "scream", "summon"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "堪",
    on: ["カン", "タン"],
    kun: ["たえる", "たまる", "こらえる", "こたえる"],
    source: "",
    meanings: ["withstand", "endure", "support", "resist"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "寛",
    on: ["カン"],
    kun: ["くつろぐ", "ひろい", "ゆるやか"],
    source: "",
    meanings: ["tolerant", "leniency", "generosity", "relax", "feel at home", "be at ease", "broadminded"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "患",
    on: ["カン"],
    kun: ["わずらう"],
    source: "",
    meanings: ["afflicted", "disease", "suffer from", "be ill"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "憾",
    on: ["カン"],
    kun: ["うらむ"],
    source: "",
    meanings: ["remorse", "regret", "be sorry"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "換",
    on: ["カン"],
    kun: ["かえる", "かえる", "かわる"],
    source: "",
    meanings: ["interchange", "period", "change", "convert", "replace", "renew"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "敢",
    on: ["カン"],
    kun: ["あえて", "あえない", "あえず"],
    source: "",
    meanings: ["daring", "brave", "bold", "sad", "tragic", "pitiful"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "棺",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["coffin", "casket"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "款",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["goodwill", "article", "section", "friendship", "collusion"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "歓",
    on: ["カン"],
    kun: ["よろこぶ"],
    source: "",
    meanings: ["delight", "joy"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "汗",
    on: ["カン"],
    kun: ["あせ"],
    source: "",
    meanings: ["sweat", "perspire"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "環",
    on: ["カン"],
    kun: ["わ"],
    source: "",
    meanings: ["ring", "circle", "link", "wheel"],
    grade: 8,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "甘",
    on: ["カン"],
    kun: ["あまい", "あまえる", "あまやかす", "うまい"],
    source: "",
    meanings: ["sweet", "coax", "pamper", "be content", "sugary"],
    grade: 8,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "監",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["oversee", "official", "govt office", "rule", "administer"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "緩",
    on: ["カン"],
    kun: ["ゆるい", "ゆるやか", "ゆるむ", "ゆるめる"],
    source: "",
    meanings: ["slacken", "loosen", "relax", "lessen", "be moderate", "ease"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "缶",
    on: ["カン"],
    kun: ["かま"],
    source: "",
    meanings: ["tin can", "container", "jar radical (no. 121)"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "肝",
    on: ["カン"],
    kun: ["きも"],
    source: "",
    meanings: ["liver", "pluck", "nerve", "chutzpah"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "艦",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["warship"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "貫",
    on: ["カン"],
    kun: ["つらぬく", "ぬく", "ぬき"],
    source: "",
    meanings: ["pierce", "8 1/3lbs", "penetrate", "brace"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "還",
    on: ["カン"],
    kun: ["かえる"],
    source: "",
    meanings: ["send back", "return"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "鑑",
    on: ["カン"],
    kun: ["かんがみる", "かがみ"],
    source: "",
    meanings: ["specimen", "take warning from", "learn from"],
    grade: 8,
    jlpt: 1,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "閑",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: ["leisure"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "陥",
    on: ["カン"],
    kun: ["おちいる", "おとしいれる"],
    source: "",
    meanings: ["collapse", "fall into", "cave in", "fall (castle)", "slide into"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "韓",
    on: ["カン"],
    kun: ["から", "いげた"],
    source: "",
    meanings: ["Korea"],
    grade: 8,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "含",
    on: ["ガン"],
    kun: ["ふくむ", "ふくめる"],
    source: "",
    meanings: ["contain", "include", "hold in the mouth", "bear in mind", "understand", "cherish"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "玩",
    on: ["ガン"],
    kun: ["もちあそぶ", "もてあそぶ"],
    source: "",
    meanings: ["play", "take pleasure in", "trifle with", "make sport of"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "頑",
    on: ["ガン"],
    kun: ["かたく"],
    source: "",
    meanings: ["stubborn", "foolish", "firmly"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "企",
    on: ["キ"],
    kun: ["くわだてる", "たくらむ"],
    source: "",
    meanings: ["undertake", "scheme", "design", "attempt", "plan"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "伎",
    on: ["ギ", "キ"],
    kun: ["わざ", "わざおぎ"],
    source: "",
    meanings: ["deed", "skill"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "奇",
    on: ["キ"],
    kun: ["くしき", "あやしい", "くし", "めずらしい"],
    source: "",
    meanings: ["strange", "strangeness", "curiosity"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "幾",
    on: ["キ"],
    kun: ["いく", "いくつ", "いくら"],
    source: "",
    meanings: ["how many", "how much", "how far", "how long", "some", "several"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "忌",
    on: ["キ"],
    kun: ["いむ", "いみ", "いまわしい"],
    source: "",
    meanings: ["mourning", "abhor", "detestable", "death anniversary"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "既",
    on: ["キ"],
    kun: ["すでに"],
    source: "",
    meanings: ["previously", "already", "long ago"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "棋",
    on: ["キ"],
    kun: ["ご"],
    source: "",
    meanings: ["chess piece", "Japanese chess", "shogi"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "棄",
    on: ["キ"],
    kun: ["すてる"],
    source: "",
    meanings: ["abandon", "throw away", "discard", "resign", "reject", "sacrifice"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "畿",
    on: ["キ"],
    kun: ["みやこ"],
    source: "",
    meanings: ["capital", "suburbs of capital"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "祈",
    on: ["キ"],
    kun: ["いのる"],
    source: "",
    meanings: ["pray", "wish"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "軌",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["rut", "wheel", "track", "model", "way of doing"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "輝",
    on: ["キ"],
    kun: ["かがやく"],
    source: "",
    meanings: ["radiance", "shine", "sparkle", "gleam", "twinkle"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "飢",
    on: ["キ"],
    kun: ["うえる"],
    source: "",
    meanings: ["hungry", "starve"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "騎",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["equestrian", "riding on horses", "counter for equestrians"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "鬼",
    on: ["キ"],
    kun: ["おに", "おに"],
    source: "",
    meanings: ["ghost", "devil"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "亀",
    on: ["キ", "キュウ", "キン"],
    kun: ["かめ"],
    source: "",
    meanings: ["tortoise", "turtle"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "偽",
    on: ["ギ", "カ"],
    kun: ["いつわる", "にせ", "いつわり"],
    source: "",
    meanings: ["falsehood", "lie", "deceive", "pretend", "counterfeit", "forgery"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "儀",
    on: ["ギ"],
    kun: [],
    source: "",
    meanings: ["ceremony", "rule", "affair", "case", "a matter"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "宜",
    on: ["ギ"],
    kun: ["よろしい", "よろしく"],
    source: "",
    meanings: ["best regards", "good"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "戯",
    on: ["ギ", "ゲ"],
    kun: ["たわむれる", "ざれる", "じゃれる"],
    source: "",
    meanings: ["frolic", "play", "sport"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "擬",
    on: ["ギ"],
    kun: ["まがい", "もどき"],
    source: "",
    meanings: ["mimic", "aim (a gun) at", "nominate", "imitate"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "欺",
    on: ["ギ"],
    kun: ["あざむく"],
    source: "",
    meanings: ["deceit", "cheat", "delude"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "犠",
    on: ["ギ", "キ"],
    kun: ["いけにえ"],
    source: "",
    meanings: ["sacrifice"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "菊",
    on: ["キク"],
    kun: [],
    source: "",
    meanings: ["chrysanthemum"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "吉",
    on: ["キチ", "キツ"],
    kun: ["よし"],
    source: "",
    meanings: ["good luck", "joy", "congratulations"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "喫",
    on: ["キツ"],
    kun: ["のむ"],
    source: "",
    meanings: ["consume", "eat", "drink", "smoke", "receive (a blow)"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "詰",
    on: ["キツ", "キチ"],
    kun: ["つめる", "つめ", "づめ", "つまる", "つむ"],
    source: "",
    meanings: ["packed", "close", "pressed", "reprove", "rebuke", "blame"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "却",
    on: ["キャク"],
    kun: ["かえって", "しりぞく", "しりぞける"],
    source: "",
    meanings: ["instead", "on the contrary", "rather", "step back", "withdraw", "retreat"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "脚",
    on: ["キャク", "キャ", "カク"],
    kun: ["あし"],
    source: "",
    meanings: ["skids", "leg", "undercarriage", "lower part", "base"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "虐",
    on: ["ギャク"],
    kun: ["しいたげる"],
    source: "",
    meanings: ["tyrannize", "oppress"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "丘",
    on: ["キュウ"],
    kun: ["おか"],
    source: "",
    meanings: ["hill", "knoll"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "及",
    on: ["キュウ"],
    kun: ["およぶ", "および", "および", "およぼす"],
    source: "",
    meanings: ["reach out", "exert", "exercise", "cause"],
    grade: 8,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "朽",
    on: ["キュウ"],
    kun: ["くちる"],
    source: "",
    meanings: ["decay", "rot", "remain in seclusion"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "窮",
    on: ["キュウ", "キョウ"],
    kun: ["きわめる", "きわまる", "きわまり", "きわみ"],
    source: "",
    meanings: ["hard up", "destitute", "suffer", "perplexed", "cornered"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "糾",
    on: ["キュウ"],
    kun: ["ただす"],
    source: "",
    meanings: ["twist", "ask", "investigate", "verify"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "巨",
    on: ["キョ"],
    kun: [],
    source: "",
    meanings: ["gigantic", "big", "large", "great"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "拒",
    on: ["キョ", "ゴ"],
    kun: ["こばむ"],
    source: "",
    meanings: ["repel", "refuse", "reject", "decline"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "拠",
    on: ["キョ", "コ"],
    kun: ["よる"],
    source: "",
    meanings: ["foothold", "based on", "follow", "therefore"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "虚",
    on: ["キョ", "コ"],
    kun: ["むなしい", "うつろ"],
    source: "",
    meanings: ["void", "emptiness", "unpreparedness", "crack", "fissure", "untruth"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "距",
    on: ["キョ"],
    kun: ["へだたる", "けづめ"],
    source: "",
    meanings: ["long-distance", "spur", "fetlock"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "享",
    on: ["キョウ", "コウ"],
    kun: ["うける"],
    source: "",
    meanings: ["enjoy", "receive", "undergo", "answer (phone)", "take", "get", "catch"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "凶",
    on: ["キョウ"],
    kun: [],
    source: "",
    meanings: ["villain", "evil", "bad luck", "disaster"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "叫",
    on: ["キョウ"],
    kun: ["さけぶ"],
    source: "",
    meanings: ["shout", "exclaim", "yell"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "峡",
    on: ["キョウ", "コウ"],
    kun: ["はざま"],
    source: "",
    meanings: ["gorge", "ravine"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "恐",
    on: ["キョウ"],
    kun: ["おそれる", "おそる", "おそろしい", "こわい", "こわがる"],
    source: "",
    meanings: ["fear", "dread", "awe"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "恭",
    on: ["キョウ"],
    kun: ["うやうやしい"],
    source: "",
    meanings: ["respect", "reverent"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "挟",
    on: ["キョウ", "ショウ"],
    kun: ["はさむ", "はさまる", "わきばさむ", "さしはさむ"],
    source: "",
    meanings: ["pinch", "between"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "況",
    on: ["キョウ"],
    kun: ["まして", "いわんや", "おもむき"],
    source: "",
    meanings: ["condition", "situation"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "狂",
    on: ["キョウ"],
    kun: ["くるう", "くるおしい", "くるおしい"],
    source: "",
    meanings: ["lunatic", "insane", "crazy", "confuse"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "狭",
    on: ["キョウ", "コウ"],
    kun: ["せまい", "せばめる", "せばまる", "さ"],
    source: "",
    meanings: ["cramped", "narrow", "contract", "tight"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "矯",
    on: ["キョウ"],
    kun: ["ためる"],
    source: "",
    meanings: ["rectify", "straighten", "correct", "reform", "cure", "control", "pretend", "falsify"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "脅",
    on: ["キョウ"],
    kun: ["おびやかす", "おどす", "おどかす"],
    source: "",
    meanings: ["threaten", "coerce"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "響",
    on: ["キョウ"],
    kun: ["ひびく"],
    source: "",
    meanings: ["echo", "sound", "resound", "ring", "vibrate"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "驚",
    on: ["キョウ"],
    kun: ["おどろく", "おどろかす"],
    source: "",
    meanings: ["wonder", "be surprised", "frightened", "amazed"],
    grade: 8,
    jlpt: 1,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "仰",
    on: ["ギョウ", "コウ"],
    kun: ["あおぐ", "おおせ", "おっしゃる", "おっしゃる"],
    source: "",
    meanings: ["face-up", "look up", "depend", "seek", "respect", "revere", "drink", "take"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "凝",
    on: ["ギョウ"],
    kun: ["こる", "こらす", "こごらす", "こごらせる", "こごる"],
    source: "",
    meanings: ["congeal", "freeze", "stiff", "be absorbed in"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "暁",
    on: ["ギョウ", "キョウ"],
    kun: ["あかつき", "さとる"],
    source: "",
    meanings: ["daybreak", "dawn", "in the event"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "僅",
    on: ["キン", "ゴン"],
    kun: ["わずか"],
    source: "",
    meanings: ["a wee bit"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "巾",
    on: ["キン", "フク"],
    kun: ["おおい", "ちきり", "きれ"],
    source: "",
    meanings: ["towel", "hanging scroll", "width", "cloth radical (no. 50)"],
    grade: 8,
    jlpt: null,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "錦",
    on: ["キン"],
    kun: ["にしき"],
    source: "",
    meanings: ["brocade", "fine dress", "honors"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "斤",
    on: ["キン"],
    kun: [],
    source: "",
    meanings: ["axe", "1.32 lb", "catty", "counter for loaves of bread", "axe radical (no. 69)"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "琴",
    on: ["キン", "ゴン"],
    kun: ["こと"],
    source: "",
    meanings: ["harp", "koto"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "緊",
    on: ["キン"],
    kun: ["しめる", "しまる"],
    source: "",
    meanings: ["tense", "solid", "hard", "reliable", "tight"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "菌",
    on: ["キン"],
    kun: [],
    source: "",
    meanings: ["germ", "fungus", "bacteria"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "襟",
    on: ["キン"],
    kun: ["えり"],
    source: "",
    meanings: ["collar", "neck", "lapel", "one's inner feelings"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "謹",
    on: ["キン"],
    kun: ["つつしむ"],
    source: "",
    meanings: ["discreet", "reverently", "humbly"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "吟",
    on: ["ギン"],
    kun: [],
    source: "",
    meanings: ["versify", "singing", "recital"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "駆",
    on: ["ク"],
    kun: ["かける", "かる"],
    source: "",
    meanings: ["drive", "run", "gallop", "advance", "inspire", "impel"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "駒",
    on: ["ク"],
    kun: ["こま"],
    source: "",
    meanings: ["pony", "horse", "colt"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "愚",
    on: ["グ"],
    kun: ["おろか"],
    source: "",
    meanings: ["foolish", "folly", "absurdity", "stupid"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "虞",
    on: ["グ"],
    kun: ["おそれ", "おもんぱかる", "はかる", "うれえる", "あざむく", "あやまる", "のぞむ", "たのしむ"],
    source: "",
    meanings: ["fear", "uneasiness", "anxiety", "concern", "expectation", "consideration"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "偶",
    on: ["グウ"],
    kun: ["たま"],
    source: "",
    meanings: ["accidentally", "even number", "couple", "man & wife", "same kind"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "遇",
    on: ["グウ"],
    kun: ["あう"],
    source: "",
    meanings: ["meet", "encounter", "interview", "treat", "entertain", "receive", "deal with"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "隅",
    on: ["グウ"],
    kun: ["すみ"],
    source: "",
    meanings: ["corner", "nook"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "串",
    on: ["カン", "ケン", "セン"],
    kun: ["くし", "つらぬく"],
    source: "",
    meanings: ["spit", "skewer"],
    grade: 8,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "屈",
    on: ["クツ"],
    kun: ["かがむ", "かがめる"],
    source: "",
    meanings: ["yield", "bend", "flinch", "submit"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "掘",
    on: ["クツ"],
    kun: ["ほる"],
    source: "",
    meanings: ["dig", "delve", "excavate"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "窟",
    on: ["クツ", "コツ"],
    kun: ["いわや", "いはや", "あな"],
    source: "",
    meanings: ["cavern"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "靴",
    on: ["カ"],
    kun: ["くつ"],
    source: "",
    meanings: ["shoes"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "繰",
    on: ["ソウ"],
    kun: ["くる"],
    source: "",
    meanings: ["winding", "reel", "spin", "turn (pages)", "look up", "refer to"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "桑",
    on: ["ソウ"],
    kun: ["くわ"],
    source: "",
    meanings: ["mulberry"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "勲",
    on: ["クン"],
    kun: ["いさお"],
    source: "",
    meanings: ["meritorious deed", "merit"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "薫",
    on: ["クン"],
    kun: ["かおる"],
    source: "",
    meanings: ["send forth fragrance", "fragrant", "be scented", "smoke (tobacco)"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "傾",
    on: ["ケイ"],
    kun: ["かたむく", "かたむける", "かたぶく", "かたげる", "かしげる"],
    source: "",
    meanings: ["lean", "incline", "tilt", "trend", "wane", "sink", "ruin", "bias"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "刑",
    on: ["ケイ"],
    kun: [],
    source: "",
    meanings: ["punish", "penalty", "sentence", "punishment"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "啓",
    on: ["ケイ"],
    kun: ["ひらく", "さとす"],
    source: "",
    meanings: ["disclose", "open", "say"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "契",
    on: ["ケイ"],
    kun: ["ちぎる"],
    source: "",
    meanings: ["pledge", "promise", "vow"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "恵",
    on: ["ケイ", "エ"],
    kun: ["めぐむ", "めぐみ"],
    source: "",
    meanings: ["favor", "blessing", "grace", "kindness"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "慶",
    on: ["ケイ"],
    kun: ["よろこび"],
    source: "",
    meanings: ["jubilation", "congratulate", "rejoice", "be happy"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "憩",
    on: ["ケイ"],
    kun: ["いこい", "いこう"],
    source: "",
    meanings: ["recess", "rest", "relax", "repose"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "掲",
    on: ["ケイ"],
    kun: ["かかげる"],
    source: "",
    meanings: ["put up (a notice)", "put up", "hoist", "display", "hang out", "publish", "describe"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "携",
    on: ["ケイ"],
    kun: ["たずさえる", "たずさわる"],
    source: "",
    meanings: ["portable", "carry (in hand)", "armed with", "bring along"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "渓",
    on: ["ケイ"],
    kun: ["たに", "たにがわ"],
    source: "",
    meanings: ["mountain stream", "valley"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "稽",
    on: ["ケイ"],
    kun: ["かんがえる", "とどめる"],
    source: "",
    meanings: ["think", "consider"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "継",
    on: ["ケイ"],
    kun: ["つぐ", "まま"],
    source: "",
    meanings: ["inherit", "succeed", "continue", "patch", "graft (tree)"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "茎",
    on: ["ケイ", "キョウ"],
    kun: ["くき"],
    source: "",
    meanings: ["stalk", "stem"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "蛍",
    on: ["ケイ"],
    kun: ["ほたる"],
    source: "",
    meanings: ["lightning-bug", "firefly"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "詣",
    on: ["ケイ", "ゲイ"],
    kun: ["けいする", "まいる", "いたる", "もうでる"],
    source: "",
    meanings: ["visit a temple", "arrive", "attain"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "鶏",
    on: ["ケイ"],
    kun: ["にわとり", "とり"],
    source: "",
    meanings: ["chicken"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "迎",
    on: ["ゲイ"],
    kun: ["むかえる"],
    source: "",
    meanings: ["welcome", "meet", "greet"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "鯨",
    on: ["ゲイ"],
    kun: ["くじら"],
    source: "",
    meanings: ["whale"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "撃",
    on: ["ゲキ"],
    kun: ["うつ"],
    source: "",
    meanings: ["beat", "attack", "defeat", "conquer"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "隙",
    on: ["ゲキ", "キャク", "ケキ"],
    kun: ["すき", "すく", "すかす", "ひま"],
    source: "",
    meanings: ["crevice", "fissure", "discord", "opportunity", "leisure"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "桁",
    on: ["コウ"],
    kun: ["けた"],
    source: "",
    meanings: ["beam", "girder", "spar", "unit or column (accounting)"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "傑",
    on: ["ケツ"],
    kun: ["すぐれる"],
    source: "",
    meanings: ["greatness", "excellence"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "倹",
    on: ["ケン"],
    kun: ["つましい", "つづまやか"],
    source: "",
    meanings: ["frugal", "economy", "thrifty"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "兼",
    on: ["ケン"],
    kun: ["かねる", "かねる"],
    source: "",
    meanings: ["concurrently", "and", "beforehand", "in advance"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "剣",
    on: ["ケン"],
    kun: ["つるぎ"],
    source: "",
    meanings: ["sabre", "sword", "blade", "clock hand"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "圏",
    on: ["ケン"],
    kun: ["かこい"],
    source: "",
    meanings: ["sphere", "circle", "radius", "range"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "堅",
    on: ["ケン"],
    kun: ["かたい", "がたい"],
    source: "",
    meanings: ["strict", "hard", "solid", "tough", "tight", "reliable"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "嫌",
    on: ["ケン", "ゲン"],
    kun: ["きらう", "きらい", "いや"],
    source: "",
    meanings: ["dislike", "detest", "hate"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "懸",
    on: ["ケン", "ケ"],
    kun: ["かける", "かかる"],
    source: "",
    meanings: ["state of suspension", "hang", "depend", "consult", "distant", "far apart"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "拳",
    on: ["ケン", "ゲン"],
    kun: ["こぶし"],
    source: "",
    meanings: ["fist"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "献",
    on: ["ケン", "コン"],
    kun: ["たてまつる"],
    source: "",
    meanings: ["offering", "counter for drinks", "present", "offer"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "肩",
    on: ["ケン"],
    kun: ["かた"],
    source: "",
    meanings: ["shoulder"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "謙",
    on: ["ケン"],
    kun: ["へりくだる"],
    source: "",
    meanings: ["self-effacing", "humble oneself", "condescend", "be modest"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "賢",
    on: ["ケン"],
    kun: ["かしこい"],
    source: "",
    meanings: ["intelligent", "wise", "wisdom", "cleverness"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "軒",
    on: ["ケン"],
    kun: ["のき"],
    source: "",
    meanings: ["flats", "counter for houses", "eaves"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "遣",
    on: ["ケン"],
    kun: ["つかう", "つかい", "づかい", "つかわす", "やる"],
    source: "",
    meanings: ["dispatch", "despatch", "send", "give", "donate", "do", "undertake"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "鍵",
    on: ["ケン"],
    kun: ["かぎ"],
    source: "",
    meanings: ["key"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "顕",
    on: ["ケン"],
    kun: ["あきらか", "あらわれる"],
    source: "",
    meanings: ["appear", "existing"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "幻",
    on: ["ゲン"],
    kun: ["まぼろし"],
    source: "",
    meanings: ["phantasm", "vision", "dream", "illusion", "apparition"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "弦",
    on: ["ゲン"],
    kun: ["つる"],
    source: "",
    meanings: ["bowstring", "chord", "hypotenuse"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "玄",
    on: ["ゲン"],
    kun: ["くろ", "くろい"],
    source: "",
    meanings: ["mysterious", "occultness", "black", "deep", "profound"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "舷",
    on: ["ゲン"],
    kun: ["ふなばた", "ふなべり"],
    source: "",
    meanings: ["gunwale"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "孤",
    on: ["コ"],
    kun: [],
    source: "",
    meanings: ["orphan", "alone"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "弧",
    on: ["コ"],
    kun: [],
    source: "",
    meanings: ["arc", "arch", "bow"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "枯",
    on: ["コ"],
    kun: ["かれる", "からす"],
    source: "",
    meanings: ["wither", "die", "dry up", "be seasoned"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "股",
    on: ["コ"],
    kun: ["また", "もも"],
    source: "",
    meanings: ["thigh", "crotch"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "虎",
    on: ["コ"],
    kun: ["とら"],
    source: "",
    meanings: ["tiger", "drunkard"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "誇",
    on: ["コ"],
    kun: ["ほこる"],
    source: "",
    meanings: ["boast", "be proud", "pride", "triumphantly"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "雇",
    on: ["コ"],
    kun: ["やとう"],
    source: "",
    meanings: ["employ", "hire"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "顧",
    on: ["コ"],
    kun: ["かえりみる"],
    source: "",
    meanings: ["look back", "review", "examine oneself", "turn around"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "鼓",
    on: ["コ"],
    kun: ["つづみ"],
    source: "",
    meanings: ["drum", "beat", "rouse", "muster"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "互",
    on: ["ゴ"],
    kun: ["たがい", "かたみに"],
    source: "",
    meanings: ["mutually", "reciprocally", "together"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "呉",
    on: ["ゴ"],
    kun: ["くれる", "くれ"],
    source: "",
    meanings: ["give", "do something for", "kingdom of Wu"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "娯",
    on: ["ゴ"],
    kun: [],
    source: "",
    meanings: ["recreation", "pleasure"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "御",
    on: ["ギョ", "ゴ"],
    kun: ["おん", "お", "み"],
    source: "",
    meanings: ["honorable", "manipulate", "govern"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "悟",
    on: ["ゴ"],
    kun: ["さとる"],
    source: "",
    meanings: ["enlightenment", "perceive", "discern", "realize", "understand"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "碁",
    on: ["ゴ"],
    kun: [],
    source: "",
    meanings: ["Go"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "乞",
    on: ["コツ", "キツ", "キ", "キケ", "コチ"],
    kun: ["こう"],
    source: "",
    meanings: ["beg", "invite", "ask"],
    grade: 8,
    jlpt: null,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "侯",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["marquis", "lord", "daimyo"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "勾",
    on: ["コウ", "ク"],
    kun: ["かぎ", "まがる"],
    source: "",
    meanings: ["be bent", "slope", "capture"],
    grade: 8,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "喉",
    on: ["コウ"],
    kun: ["のど"],
    source: "",
    meanings: ["throat", "voice"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "坑",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["pit", "hole"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "孔",
    on: ["コウ", "ク"],
    kun: ["あな"],
    source: "",
    meanings: ["cavity", "hole", "slit", "very", "great", "exceedingly"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "巧",
    on: ["コウ"],
    kun: ["たくみ", "たくむ", "うまい"],
    source: "",
    meanings: ["adroit", "skilled", "ingenuity"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "恒",
    on: ["コウ"],
    kun: ["つね", "つねに"],
    source: "",
    meanings: ["constancy", "always"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "慌",
    on: ["コウ"],
    kun: ["あわてる", "あわただしい"],
    source: "",
    meanings: ["disconcerted", "be confused", "lose one's head"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "抗",
    on: ["コウ"],
    kun: ["あらがう"],
    source: "",
    meanings: ["confront", "resist", "defy", "oppose"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "拘",
    on: ["コウ"],
    kun: ["かかわる"],
    source: "",
    meanings: ["arrest", "seize", "concerned", "adhere to", "despite"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "控",
    on: ["コウ"],
    kun: ["ひかえる", "ひかえ"],
    source: "",
    meanings: ["withdraw", "draw in", "hold back", "refrain from", "be moderate"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "攻",
    on: ["コウ"],
    kun: ["せめる"],
    source: "",
    meanings: ["aggression", "attack", "criticize", "polish"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "更",
    on: ["コウ"],
    kun: ["さら", "さらに", "ふける", "ふかす"],
    source: "",
    meanings: [
      "grow late",
      "night watch",
      "sit up late",
      "of course",
      "renew",
      "renovate",
      "again",
      "more and more",
      "further"
    ],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "梗",
    on: ["コウ", "キョウ"],
    kun: ["ふさぐ", "やまにれ", "おおむね"],
    source: "",
    meanings: ["for the most part", "close up", "flower stem"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "江",
    on: ["コウ"],
    kun: ["え"],
    source: "",
    meanings: ["creek", "inlet", "bay"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "洪",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["deluge", "flood", "vast"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "溝",
    on: ["コウ"],
    kun: ["みぞ"],
    source: "",
    meanings: ["gutter", "ditch", "sewer", "drain", "10**32"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "甲",
    on: ["コウ", "カン"],
    kun: ["きのえ"],
    source: "",
    meanings: ["armor", "high (voice)", "A grade", "first class", "former", "instep", "carapace"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "硬",
    on: ["コウ"],
    kun: ["かたい"],
    source: "",
    meanings: ["stiff", "hard"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "稿",
    on: ["コウ"],
    kun: ["わら", "したがき"],
    source: "",
    meanings: ["draft", "copy", "manuscript", "straw"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "絞",
    on: ["コウ"],
    kun: ["しぼる", "しめる", "しまる"],
    source: "",
    meanings: ["strangle", "constrict", "wring"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "綱",
    on: ["コウ"],
    kun: ["つな"],
    source: "",
    meanings: ["hawser", "class (genus)", "rope", "cord", "cable"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "肯",
    on: ["コウ"],
    kun: ["がえんじる"],
    source: "",
    meanings: ["agreement", "consent", "comply with"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "荒",
    on: ["コウ"],
    kun: ["あらす", "あれる", "あらい", "すさぶ", "すさむ", "あらし"],
    source: "",
    meanings: ["laid waste", "rough", "rude", "wild"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "衡",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["equilibrium", "measuring rod", "scale"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "貢",
    on: ["コウ", "ク"],
    kun: ["みつぐ"],
    source: "",
    meanings: ["tribute", "support", "finance"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "購",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["subscription", "buy"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "郊",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["outskirts", "suburbs", "rural area"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "酵",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["fermentation"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "項",
    on: ["コウ"],
    kun: ["うなじ"],
    source: "",
    meanings: ["paragraph", "nape of neck", "clause", "item", "term (expression)"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "剛",
    on: ["ゴウ"],
    kun: [],
    source: "",
    meanings: ["sturdy", "strength"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "拷",
    on: ["ゴウ"],
    kun: [],
    source: "",
    meanings: ["torture", "beat"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "豪",
    on: ["ゴウ"],
    kun: ["えらい"],
    source: "",
    meanings: ["overpowering", "great", "powerful", "excelling", "Australia"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "克",
    on: ["コク"],
    kun: ["かつ"],
    source: "",
    meanings: ["overcome", "kindly", "skillfully"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "酷",
    on: ["コク"],
    kun: ["ひどい"],
    source: "",
    meanings: ["cruel", "severe", "atrocious", "unjust"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "獄",
    on: ["ゴク"],
    kun: [],
    source: "",
    meanings: ["prison", "jail"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "腰",
    on: ["ヨウ"],
    kun: ["こし"],
    source: "",
    meanings: ["loins", "hips", "waist", "low wainscoting"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "込",
    on: [],
    kun: ["こむ", "こむ", "こみ", "こみ", "こめる"],
    source: "",
    meanings: ["crowded", "mixture", "in bulk", "included", "(kokuji)"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "頃",
    on: ["ケイ", "キョウ"],
    kun: ["ころ", "ごろ", "しばらく"],
    source: "",
    meanings: ["time", "about", "toward"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "墾",
    on: ["コン"],
    kun: ["はる", "ひらく"],
    source: "",
    meanings: ["ground-breaking", "open up farmland"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "婚",
    on: ["コン"],
    kun: [],
    source: "",
    meanings: ["marriage"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "恨",
    on: ["コン"],
    kun: ["うらむ", "うらめしい"],
    source: "",
    meanings: ["regret", "bear a grudge", "resentment", "malice", "hatred"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "懇",
    on: ["コン"],
    kun: ["ねんごろ"],
    source: "",
    meanings: ["sociable", "kind", "courteous", "hospitable", "cordial"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "昆",
    on: ["コン"],
    kun: [],
    source: "",
    meanings: ["descendants", "elder brother", "insect"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "痕",
    on: ["コン"],
    kun: ["あと"],
    source: "",
    meanings: ["mark", "foot print"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "紺",
    on: ["コン"],
    kun: [],
    source: "",
    meanings: ["dark blue", "navy"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "魂",
    on: ["コン"],
    kun: ["たましい", "たま"],
    source: "",
    meanings: ["soul", "spirit"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "唆",
    on: ["サ"],
    kun: ["そそる", "そそのかす"],
    source: "",
    meanings: ["tempt", "seduce", "instigate", "promote"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "沙",
    on: ["サ", "シャ"],
    kun: ["すな", "よなげる"],
    source: "",
    meanings: ["sand"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "詐",
    on: ["サ"],
    kun: ["いつわる"],
    source: "",
    meanings: ["lie", "falsehood", "deceive", "pretend"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "鎖",
    on: ["サ"],
    kun: ["くさり", "とざす"],
    source: "",
    meanings: ["chain", "irons", "connection"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "挫",
    on: ["ザ", "サ"],
    kun: ["くじく", "くじける"],
    source: "",
    meanings: ["crush", "break", "sprain", "discourage"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "債",
    on: ["サイ"],
    kun: [],
    source: "",
    meanings: ["bond", "loan", "debt"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "催",
    on: ["サイ"],
    kun: ["もようす", "もよおす"],
    source: "",
    meanings: ["sponsor", "hold (a meeting)", "give (a dinner)"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "塞",
    on: ["ソク", "サイ"],
    kun: ["ふさぐ", "とりで", "みちる"],
    source: "",
    meanings: ["close", "shut", "cover", "block", "obstruct"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "宰",
    on: ["サイ"],
    kun: [],
    source: "",
    meanings: ["superintend", "manager", "rule"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "彩",
    on: ["サイ"],
    kun: ["いろどる"],
    source: "",
    meanings: ["coloring", "paint", "makeup"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "栽",
    on: ["サイ"],
    kun: [],
    source: "",
    meanings: ["plantation", "planting"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "歳",
    on: ["サイ", "セイ"],
    kun: ["とし", "とせ", "よわい"],
    source: "",
    meanings: ["year-end", "age", "occasion", "opportunity"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "采",
    on: ["サイ"],
    kun: ["とる", "いろどり"],
    source: "",
    meanings: ["dice", "form", "appearance", "take", "gather", "coloring"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "砕",
    on: ["サイ"],
    kun: ["くだく", "くだける"],
    source: "",
    meanings: ["smash", "break", "crush", "familiar", "popular"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "斎",
    on: ["サイ"],
    kun: ["とき", "つつしむ", "ものいみ", "いむ", "いわう", "いつく"],
    source: "",
    meanings: ["purification", "Buddhist food", "room", "worship", "avoid", "alike"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "載",
    on: ["サイ"],
    kun: ["のせる", "のる"],
    source: "",
    meanings: ["ride", "board", "get on", "place", "spread", "10**44", "record", "publish"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "剤",
    on: ["ザイ", "スイ", "セイ"],
    kun: ["かる", "けずる"],
    source: "",
    meanings: ["dose", "medicine", "drug"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "咲",
    on: ["ショウ"],
    kun: ["さく", "ざき"],
    source: "",
    meanings: ["blossom", "bloom"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "削",
    on: ["サク"],
    kun: ["けずる", "はつる", "そぐ"],
    source: "",
    meanings: ["plane", "sharpen", "whittle", "pare", "shave"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "搾",
    on: ["サク"],
    kun: ["しぼる"],
    source: "",
    meanings: ["squeeze"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "柵",
    on: ["サク", "サン"],
    kun: ["しがらむ", "しがらみ", "とりで", "やらい"],
    source: "",
    meanings: ["stockade", "fence", "weir", "entwine around"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "索",
    on: ["サク"],
    kun: [],
    source: "",
    meanings: ["cord", "rope", "searching", "inquiring"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "錯",
    on: ["サク", "シャク"],
    kun: [],
    source: "",
    meanings: ["confused", "mix", "be in disorder"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "拶",
    on: ["サツ"],
    kun: ["せまる"],
    source: "",
    meanings: ["be imminent", "draw close"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "撮",
    on: ["サツ"],
    kun: ["とる", "つまむ", "どり"],
    source: "",
    meanings: ["snapshot", "take pictures"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "擦",
    on: ["サツ"],
    kun: ["する", "すれる", "ずれ", "こする", "こすれる"],
    source: "",
    meanings: ["grate", "rub", "scratch", "scrape", "chafe", "scour"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "傘",
    on: ["サン"],
    kun: ["かさ"],
    source: "",
    meanings: ["umbrella"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "惨",
    on: ["サン", "ザン"],
    kun: ["みじめ", "いたむ", "むごい"],
    source: "",
    meanings: ["wretched", "disaster", "cruelty", "harsh"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "桟",
    on: ["サン", "セン"],
    kun: ["かけはし"],
    source: "",
    meanings: ["scaffold", "cleat", "frame", "jetty", "bolt (door)"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "斬",
    on: ["ザン", "サン", "セン", "ゼン"],
    kun: ["きる"],
    source: "",
    meanings: ["beheading", "kill", "murder"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "暫",
    on: ["ザン"],
    kun: ["しばらく"],
    source: "",
    meanings: ["temporarily", "a while", "moment", "long time"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "伺",
    on: ["シ"],
    kun: ["うかがう"],
    source: "",
    meanings: ["pay respects", "visit", "ask", "inquire", "question", "implore"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "刺",
    on: ["シ"],
    kun: ["さす", "ささる", "さし", "さし", "とげ"],
    source: "",
    meanings: ["thorn", "pierce", "stab", "prick", "sting", "calling card"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "嗣",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["heir", "succeed"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "施",
    on: ["シ", "セ"],
    kun: ["ほどこす"],
    source: "",
    meanings: ["give", "bestow", "perform", "alms"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "旨",
    on: ["シ"],
    kun: ["むね", "うまい"],
    source: "",
    meanings: ["delicious", "relish", "show a liking for", "purport", "will", "clever", "expert"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "祉",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["welfare", "happiness"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "紫",
    on: ["シ"],
    kun: ["むらさき"],
    source: "",
    meanings: ["purple", "violet"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "肢",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: ["limb", "arms & legs"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "脂",
    on: ["シ"],
    kun: ["あぶら"],
    source: "",
    meanings: ["fat", "grease", "tallow", "lard", "rosin", "gum", "tar"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "諮",
    on: ["シ"],
    kun: ["はかる"],
    source: "",
    meanings: ["consult with"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "賜",
    on: ["シ"],
    kun: ["たまわる", "たまう", "たもう"],
    source: "",
    meanings: ["grant", "gift", "boon", "results"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "雌",
    on: ["シ"],
    kun: ["め", "めす", "めん"],
    source: "",
    meanings: ["feminine", "female"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "侍",
    on: ["ジ", "シ"],
    kun: ["さむらい", "はべる"],
    source: "",
    meanings: ["waiter", "samurai", "wait upon", "serve"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "慈",
    on: ["ジ"],
    kun: ["いつくしむ"],
    source: "",
    meanings: ["mercy"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "璽",
    on: ["ジ"],
    kun: [],
    source: "",
    meanings: ["emperor's seal"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "軸",
    on: ["ジク"],
    kun: [],
    source: "",
    meanings: ["axis", "pivot", "stem", "stalk", "counter for book scrolls"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "叱",
    on: ["シツ", "シチ"],
    kun: ["しかる"],
    source: "",
    meanings: ["scold", "reprove"],
    grade: 8,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "執",
    on: ["シツ", "シュウ"],
    kun: ["とる"],
    source: "",
    meanings: ["tenacious", "take hold", "grasp", "take to heart"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "嫉",
    on: ["シツ"],
    kun: ["そねむ", "ねたむ", "にくむ"],
    source: "",
    meanings: ["jealous", "envy"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "湿",
    on: ["シツ", "シュウ"],
    kun: ["しめる", "しめす", "うるおう", "うるおす"],
    source: "",
    meanings: ["damp", "wet", "moist"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "漆",
    on: ["シツ"],
    kun: ["うるし"],
    source: "",
    meanings: ["lacquer", "varnish", "seven"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "疾",
    on: ["シツ"],
    kun: ["はやい"],
    source: "",
    meanings: ["rapidly"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "芝",
    on: ["シ"],
    kun: ["しば"],
    source: "",
    meanings: ["turf", "lawn"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "赦",
    on: ["シャ"],
    kun: [],
    source: "",
    meanings: ["pardon", "forgiveness"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "斜",
    on: ["シャ"],
    kun: ["ななめ", "はす"],
    source: "",
    meanings: ["diagonal", "slanting", "oblique"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "煮",
    on: ["シャ"],
    kun: ["にる", "に", "にえる", "にやす"],
    source: "",
    meanings: ["boil", "cook"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "遮",
    on: ["シャ"],
    kun: ["さえぎる"],
    source: "",
    meanings: ["intercept", "interrupt", "obstruct"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "蛇",
    on: ["ジャ", "ダ", "イ", "ヤ"],
    kun: ["へび"],
    source: "",
    meanings: ["snake", "serpent", "hard drinker"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "邪",
    on: ["ジャ"],
    kun: ["よこしま"],
    source: "",
    meanings: ["wicked", "injustice", "wrong"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "爵",
    on: ["シャク"],
    kun: [],
    source: "",
    meanings: ["baron", "peerage", "court rank"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "酌",
    on: ["シャク"],
    kun: ["くむ"],
    source: "",
    meanings: ["bar-tending", "serving sake", "the host", "draw (water)", "ladle", "scoop", "pump"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "釈",
    on: ["シャク", "セキ"],
    kun: ["とく", "すてる", "ゆるす"],
    source: "",
    meanings: ["explanation"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "寂",
    on: ["ジャク", "セキ"],
    kun: ["さび", "さびしい", "さびれる", "さみしい"],
    source: "",
    meanings: ["loneliness", "quietly", "mellow", "mature", "death of a priest"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "朱",
    on: ["シュ"],
    kun: ["あけ"],
    source: "",
    meanings: ["vermilion", "cinnabar", "scarlet", "red", "bloody"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "殊",
    on: ["シュ"],
    kun: ["こと"],
    source: "",
    meanings: ["particularly", "especially", "exceptionally"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "狩",
    on: ["シュ"],
    kun: ["かる", "かり", "がり"],
    source: "",
    meanings: ["hunt", "raid", "gather"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "珠",
    on: ["シュ"],
    kun: ["たま"],
    source: "",
    meanings: ["pearl", "gem", "jewel"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "腫",
    on: ["シュ", "ショウ"],
    kun: ["はれる", "はれ", "はらす", "はれもの"],
    source: "",
    meanings: ["tumor", "swelling"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "趣",
    on: ["シュ"],
    kun: ["おもむき", "おもむく"],
    source: "",
    meanings: ["purport", "gist", "elegance", "interest", "proceed to", "tend", "become"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "儒",
    on: ["ジュ"],
    kun: [],
    source: "",
    meanings: ["Confucian"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "呪",
    on: ["ジュ", "シュ", "シュウ", "ズ"],
    kun: ["まじなう", "のろい", "まじない", "のろう"],
    source: "",
    meanings: ["spell", "curse", "charm", "malediction"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "寿",
    on: ["ジュ", "ス", "シュウ"],
    kun: ["ことぶき", "ことぶく", "ことほぐ"],
    source: "",
    meanings: ["longevity", "congratulations", "one's natural life"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "需",
    on: ["ジュ"],
    kun: [],
    source: "",
    meanings: ["demand", "request", "need"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "囚",
    on: ["シュウ"],
    kun: ["とらわれる"],
    source: "",
    meanings: ["captured", "criminal", "arrest", "catch"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "愁",
    on: ["シュウ"],
    kun: ["うれえる", "うれい"],
    source: "",
    meanings: ["distress", "grieve", "lament", "be anxious"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "秀",
    on: ["シュウ"],
    kun: ["ひいでる"],
    source: "",
    meanings: ["excel", "excellence", "beauty", "surpass"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "臭",
    on: ["シュウ"],
    kun: ["くさい", "くさい", "におう", "におい"],
    source: "",
    meanings: [
      "stinking",
      "ill-smelling",
      "suspicious looking",
      "odor",
      "savor",
      "fragrance",
      "be fragrant",
      "stink",
      "glow",
      "be bright"
    ],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "舟",
    on: ["シュウ"],
    kun: ["ふね", "ふな", "ぶね"],
    source: "",
    meanings: ["boat", "ship"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "襲",
    on: ["シュウ"],
    kun: ["おそう", "かさね"],
    source: "",
    meanings: ["attack", "advance on", "succeed to", "pile", "heap"],
    grade: 8,
    jlpt: 1,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "蹴",
    on: ["シュク", "シュウ"],
    kun: ["ける"],
    source: "",
    meanings: ["kick"],
    grade: 8,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "酬",
    on: ["シュウ", "シュ", "トウ"],
    kun: ["むくいる"],
    source: "",
    meanings: ["repay", "reward", "retribution"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "醜",
    on: ["シュウ"],
    kun: ["みにくい", "しこ"],
    source: "",
    meanings: ["ugly", "unclean", "shame", "bad looking"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "充",
    on: ["ジュウ"],
    kun: ["あてる", "みたす"],
    source: "",
    meanings: ["allot", "fill"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "柔",
    on: ["ジュウ", "ニュウ"],
    kun: ["やわらか", "やわらかい", "やわ", "やわら"],
    source: "",
    meanings: ["tender", "weakness", "gentleness", "softness"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "汁",
    on: ["ジュウ"],
    kun: ["しる", "しる", "つゆ"],
    source: "",
    meanings: ["soup", "juice", "broth", "sap", "gravy", "pus"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "渋",
    on: ["ジュウ", "シュウ"],
    kun: ["しぶ", "しぶい", "しぶる"],
    source: "",
    meanings: ["astringent", "hesitate", "reluctant", "have diarrhea"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "獣",
    on: ["ジュウ"],
    kun: ["けもの", "けだもの"],
    source: "",
    meanings: ["animal", "beast"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "銃",
    on: ["ジュウ"],
    kun: ["つつ"],
    source: "",
    meanings: ["gun", "arms"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "叔",
    on: ["シュク"],
    kun: [],
    source: "",
    meanings: ["uncle", "youth"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "淑",
    on: ["シュク"],
    kun: ["しとやか"],
    source: "",
    meanings: ["graceful", "gentle", "pure"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "粛",
    on: ["シュク", "スク"],
    kun: ["つつしむ"],
    source: "",
    meanings: ["solemn", "quietly", "softly"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "塾",
    on: ["ジュク"],
    kun: [],
    source: "",
    meanings: ["cram school", "private school"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "俊",
    on: ["シュン"],
    kun: [],
    source: "",
    meanings: ["sagacious", "genius", "excellence"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "瞬",
    on: ["シュン"],
    kun: ["またたく", "まじろぐ"],
    source: "",
    meanings: ["wink", "blink", "twinkle"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "准",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["quasi-", "semi-", "associate"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "循",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["sequential", "follow"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "旬",
    on: ["ジュン", "シュン"],
    kun: [],
    source: "",
    meanings: ["decameron", "ten-day period", "season (for specific products)"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "殉",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["martyrdom", "follow by resigning"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "潤",
    on: ["ジュン"],
    kun: ["うるおう", "うるおす", "うるむ"],
    source: "",
    meanings: ["wet", "be watered", "profit by", "receive benefits", "favor", "charm", "steep"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "盾",
    on: ["ジュン"],
    kun: ["たて"],
    source: "",
    meanings: ["shield", "escutcheon", "pretext"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "巡",
    on: ["ジュン"],
    kun: ["めぐる", "めぐり"],
    source: "",
    meanings: ["patrol", "go around", "circumference"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "遵",
    on: ["ジュン"],
    kun: [],
    source: "",
    meanings: ["abide by", "follow", "obey", "learn"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "庶",
    on: ["ショ"],
    kun: [],
    source: "",
    meanings: ["commoner", "all", "bastard"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "緒",
    on: ["ショ", "チョ"],
    kun: ["お", "いとぐち"],
    source: "",
    meanings: ["thong", "beginning", "inception", "end", "cord", "strap", "mental or emotional state"],
    grade: 8,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "叙",
    on: ["ジョ"],
    kun: ["ついず", "ついで"],
    source: "",
    meanings: ["confer", "relate", "narrate", "describe"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "徐",
    on: ["ジョ"],
    kun: ["おもむろに"],
    source: "",
    meanings: ["gradually", "slowly", "deliberately", "gently"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "償",
    on: ["ショウ"],
    kun: ["つぐなう"],
    source: "",
    meanings: ["reparation", "make up for", "recompense", "redeem"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "匠",
    on: ["ショウ"],
    kun: ["たくみ"],
    source: "",
    meanings: ["artisan", "workman", "carpenter"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "升",
    on: ["ショウ"],
    kun: ["ます"],
    source: "",
    meanings: ["measuring box", "1.8 liter"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "召",
    on: ["ショウ"],
    kun: ["めす"],
    source: "",
    meanings: ["seduce", "call", "send for", "wear", "put on", "ride in", "buy", "eat", "drink", "catch (cold)"],
    grade: 8,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "奨",
    on: ["ショウ", "ソウ"],
    kun: ["すすめる"],
    source: "",
    meanings: ["exhort", "urge", "encourage"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "宵",
    on: ["ショウ"],
    kun: ["よい"],
    source: "",
    meanings: ["wee hours", "evening", "early night"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "尚",
    on: ["ショウ"],
    kun: ["なお"],
    source: "",
    meanings: ["esteem", "furthermore", "still", "yet"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "床",
    on: ["ショウ"],
    kun: ["とこ", "ゆか"],
    source: "",
    meanings: ["bed", "counter for beds", "floor", "padding", "tatami"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "彰",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["patent", "clear"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "抄",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["extract", "selection", "summary", "copy", "spread thin"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "掌",
    on: ["ショウ"],
    kun: ["てのひら", "たなごころ"],
    source: "",
    meanings: ["manipulate", "rule", "administer", "conduct", "palm of hand"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "昇",
    on: ["ショウ"],
    kun: ["のぼる"],
    source: "",
    meanings: ["rise up"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "晶",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["sparkle", "clear", "crystal"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "沼",
    on: ["ショウ"],
    kun: ["ぬま"],
    source: "",
    meanings: ["marsh", "lake", "bog", "swamp", "pond"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "渉",
    on: ["ショウ"],
    kun: ["わたる"],
    source: "",
    meanings: ["ford", "go cross", "transit", "ferry", "import", "involve"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "焦",
    on: ["ショウ"],
    kun: ["こげる", "こがす", "こがれる", "あせる", "じれる", "じらす"],
    source: "",
    meanings: ["char", "hurry", "impatient", "irritate", "burn", "scorch", "singe"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "症",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["symptoms", "illness"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "硝",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["nitrate", "saltpeter"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "礁",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["reef", "sunken rock"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "祥",
    on: ["ショウ"],
    kun: ["さいわい", "きざし", "よい", "つまびらか"],
    source: "",
    meanings: ["auspicious", "happiness", "blessedness", "good omen", "good fortune"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "称",
    on: ["ショウ"],
    kun: ["たたえる", "となえる", "あげる", "かなう", "はかり", "はかる", "ほめる"],
    source: "",
    meanings: ["appellation", "praise", "admire", "name", "title", "fame"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "粧",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["cosmetics", "adorn (one's person)"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "紹",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["introduce", "inherit", "help"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "肖",
    on: ["ショウ"],
    kun: ["あやかる"],
    source: "",
    meanings: ["resemblance"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "衝",
    on: ["ショウ"],
    kun: ["つく"],
    source: "",
    meanings: ["collide", "brunt", "highway", "opposition (astronomy)", "thrust", "pierce", "stab", "prick"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "訟",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["sue", "accuse"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "詔",
    on: ["ショウ"],
    kun: ["みことのり"],
    source: "",
    meanings: ["imperial edict"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "詳",
    on: ["ショウ"],
    kun: ["くわしい", "つまびらか"],
    source: "",
    meanings: ["detailed", "full", "minute", "accurate", "well-informed"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "鐘",
    on: ["ショウ"],
    kun: ["かね"],
    source: "",
    meanings: ["bell", "gong", "chimes"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "丈",
    on: ["ジョウ"],
    kun: ["たけ", "だけ"],
    source: "",
    meanings: [
      "length",
      "ten shaku",
      "measure",
      "Mr.",
      "Ms.",
      "height",
      "stature",
      "all (one has)",
      "only",
      "that's all",
      "merely"
    ],
    grade: 8,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "冗",
    on: ["ジョウ"],
    kun: [],
    source: "",
    meanings: ["superfluous", "uselessness"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "剰",
    on: ["ジョウ"],
    kun: ["あまつさえ", "あまり", "あまる"],
    source: "",
    meanings: ["surplus", "besides"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "壌",
    on: ["ジョウ"],
    kun: ["つち"],
    source: "",
    meanings: ["lot", "earth", "soil"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "嬢",
    on: ["ジョウ"],
    kun: ["むすめ"],
    source: "",
    meanings: ["lass", "girl", "Miss", "daughter"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "浄",
    on: ["ジョウ", "セイ"],
    kun: ["きよめる", "きよい"],
    source: "",
    meanings: ["clean", "purify", "cleanse", "exorcise", "Manchu Dynasty"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "畳",
    on: ["ジョウ", "チョウ"],
    kun: ["たたむ", "たたみ", "かさなる"],
    source: "",
    meanings: ["tatami mat", "counter for tatami mats", "fold", "shut up", "do away with"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "譲",
    on: ["ジョウ"],
    kun: ["ゆずる"],
    source: "",
    meanings: ["defer", "turnover", "transfer", "convey"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "醸",
    on: ["ジョウ"],
    kun: ["かもす"],
    source: "",
    meanings: ["brew", "cause"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "錠",
    on: ["ジョウ"],
    kun: [],
    source: "",
    meanings: ["lock", "fetters", "shackles"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "嘱",
    on: ["ショク"],
    kun: ["しょくする", "たのむ"],
    source: "",
    meanings: ["entrust", "request", "send a message"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "飾",
    on: ["ショク"],
    kun: ["かざる", "かざり"],
    source: "",
    meanings: ["decorate", "ornament", "adorn", "embellish"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "拭",
    on: ["ショク", "シキ"],
    kun: ["ぬぐう", "ふく"],
    source: "",
    meanings: ["wipe", "mop", "swab"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "殖",
    on: ["ショク"],
    kun: ["ふえる", "ふやす"],
    source: "",
    meanings: ["augment", "increase", "multiply", "raise"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "触",
    on: ["ショク"],
    kun: ["ふれる", "さわる", "さわ"],
    source: "",
    meanings: ["contact", "touch", "feel", "hit", "proclaim", "announce", "conflict"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "辱",
    on: ["ジョク"],
    kun: ["はずかしめる"],
    source: "",
    meanings: ["embarrass", "humiliate", "shame"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "尻",
    on: ["コウ"],
    kun: ["しり"],
    source: "",
    meanings: ["buttocks", "hips", "butt", "rear"],
    grade: 8,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "伸",
    on: ["シン"],
    kun: ["のびる", "のばす", "のべる", "のす"],
    source: "",
    meanings: ["expand", "stretch", "extend", "lengthen", "increase"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "侵",
    on: ["シン"],
    kun: ["おかす"],
    source: "",
    meanings: ["encroach", "invade", "raid", "trespass", "violate"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "唇",
    on: ["シン"],
    kun: ["くちびる"],
    source: "",
    meanings: ["lips"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "娠",
    on: ["シン"],
    kun: [],
    source: "",
    meanings: ["with child", "pregnancy"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "寝",
    on: ["シン"],
    kun: ["ねる", "ねかす", "いぬ", "みたまや", "やめる"],
    source: "",
    meanings: ["lie down", "sleep", "rest", "bed", "remain unsold"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "審",
    on: ["シン"],
    kun: ["つまびらか", "つぶさに"],
    source: "",
    meanings: ["hearing", "judge", "trial"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "慎",
    on: ["シン"],
    kun: ["つつしむ", "つつましい", "つつし", "つつしみ"],
    source: "",
    meanings: ["humility", "be careful", "discreet", "prudent"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "振",
    on: ["シン"],
    kun: ["ふる", "ふれる", "ふるう"],
    source: "",
    meanings: ["shake", "wave", "wag", "swing"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "浸",
    on: ["シン"],
    kun: ["ひたす", "ひたる", "つかる"],
    source: "",
    meanings: ["immersed", "soak", "dip", "steep", "moisten", "wet", "dunk"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "紳",
    on: ["シン"],
    kun: [],
    source: "",
    meanings: ["sire", "good belt", "gentleman"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "芯",
    on: ["シン"],
    kun: [],
    source: "",
    meanings: ["wick"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "薪",
    on: ["シン"],
    kun: ["たきぎ", "まき"],
    source: "",
    meanings: ["fuel", "firewood", "kindling"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "診",
    on: ["シン"],
    kun: ["みる"],
    source: "",
    meanings: ["checkup", "seeing", "diagnose", "examine"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "辛",
    on: ["シン"],
    kun: ["からい", "つらい", "づらい", "かのと"],
    source: "",
    meanings: ["spicy", "bitter", "hot", "acrid"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "震",
    on: ["シン"],
    kun: ["ふるう", "ふるえる", "ふるわせる", "ふるわす"],
    source: "",
    meanings: ["quake", "shake", "tremble", "quiver", "shiver"],
    grade: 8,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "刃",
    on: ["ジン", "ニン"],
    kun: ["は", "やいば", "きる"],
    source: "",
    meanings: ["blade", "sword", "edge"],
    grade: 8,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "尋",
    on: ["ジン"],
    kun: ["たずねる", "ひろ"],
    source: "",
    meanings: ["inquire", "fathom", "look for"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "甚",
    on: ["ジン"],
    kun: ["はなはだ", "はなはだしい"],
    source: "",
    meanings: ["tremendously", "very", "great", "exceedingly"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "尽",
    on: ["ジン", "サン"],
    kun: ["つきる", "つくす", "つかす", "づく", "ずく", "ことごとく"],
    source: "",
    meanings: ["exhaust", "use up", "run out of", "deplete", "befriend", "serve"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "腎",
    on: ["ジン"],
    kun: [],
    source: "",
    meanings: ["kidney"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "迅",
    on: ["ジン"],
    kun: [],
    source: "",
    meanings: ["swift", "fast"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "陣",
    on: ["ジン"],
    kun: [],
    source: "",
    meanings: ["camp", "battle array", "ranks", "position", "sudden", "brief time"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "須",
    on: ["ス", "シュ"],
    kun: ["すべからく", "すべし", "ひげ", "まつ", "もちいる", "もとめる"],
    source: "",
    meanings: ["ought", "by all means", "necessarily"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "酢",
    on: ["サク"],
    kun: ["す"],
    source: "",
    meanings: ["vinegar", "sour", "acid", "tart"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "吹",
    on: ["スイ"],
    kun: ["ふく"],
    source: "",
    meanings: ["blow", "breathe", "puff", "emit", "smoke"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "帥",
    on: ["スイ"],
    kun: [],
    source: "",
    meanings: ["commander", "leading troops", "governor"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "炊",
    on: ["スイ"],
    kun: ["たく", "だき"],
    source: "",
    meanings: ["cook", "boil"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "睡",
    on: ["スイ"],
    kun: ["ねむる", "ねむい"],
    source: "",
    meanings: ["drowsy", "sleep", "die"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "粋",
    on: ["スイ"],
    kun: ["いき"],
    source: "",
    meanings: ["chic", "style", "purity", "essence", "pith", "cream", "elite", "choice"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "衰",
    on: ["スイ"],
    kun: ["おとろえる"],
    source: "",
    meanings: ["decline", "wane", "weaken"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "遂",
    on: ["スイ"],
    kun: ["とげる", "ついに"],
    source: "",
    meanings: ["consummate", "accomplish", "attain", "commit (suicide)"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "酔",
    on: ["スイ"],
    kun: ["よう", "よい", "よ"],
    source: "",
    meanings: ["drunk", "feel sick", "poisoned", "elated", "spellbound"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "随",
    on: ["ズイ"],
    kun: ["まにまに", "したがう"],
    source: "",
    meanings: [
      "follow",
      "though",
      "notwithstanding",
      "while",
      "during",
      "both",
      "all",
      "obey",
      "submit to",
      "comply",
      "at the mercy of (the waves)"
    ],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "髄",
    on: ["ズイ"],
    kun: [],
    source: "",
    meanings: ["marrow", "pith", "essence"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "崇",
    on: ["スウ"],
    kun: ["あがめる"],
    source: "",
    meanings: ["adore", "respect", "revere", "worship"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "枢",
    on: ["スウ", "シュ"],
    kun: ["とぼそ", "からくり"],
    source: "",
    meanings: ["hinge", "pivot", "door"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "据",
    on: ["キョ"],
    kun: ["すえる", "すわる"],
    source: "",
    meanings: ["set", "lay a foundation", "install", "equip", "squat down", "sit down"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "杉",
    on: ["サン"],
    kun: ["すぎ"],
    source: "",
    meanings: ["cedar", "cryptomeria"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "裾",
    on: ["キョ", "コ"],
    kun: ["すそ"],
    source: "",
    meanings: ["cuff", "hem", "foot of mountain"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "澄",
    on: ["チョウ"],
    kun: ["すむ", "すます", "すます"],
    source: "",
    meanings: ["lucidity", "be clear", "clear", "clarify", "settle", "strain", "look grave"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "瀬",
    on: ["ライ"],
    kun: ["せ"],
    source: "",
    meanings: ["rapids", "current", "torrent", "shallows", "shoal"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "畝",
    on: ["ボウ", "ホ", "モ", "ム"],
    kun: ["せ", "うね"],
    source: "",
    meanings: ["furrow", "thirty tsubo", "ridge", "rib"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "是",
    on: ["ゼ", "シ"],
    kun: ["これ", "この", "ここ"],
    source: "",
    meanings: ["just so", "this", "right", "justice"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "凄",
    on: ["セイ", "サイ"],
    kun: ["さむい", "すごい", "すさまじい"],
    source: "",
    meanings: ["uncanny", "weird", "threatening", "horrible"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "姓",
    on: ["セイ", "ショウ"],
    kun: [],
    source: "",
    meanings: ["surname"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "征",
    on: ["セイ"],
    kun: [],
    source: "",
    meanings: ["subjugate", "attack the rebellious", "collect taxes"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "牲",
    on: ["セイ"],
    kun: [],
    source: "",
    meanings: ["animal sacrifice", "offering"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "誓",
    on: ["セイ"],
    kun: ["ちかう"],
    source: "",
    meanings: ["vow", "swear", "pledge"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "請",
    on: ["セイ", "シン", "ショウ"],
    kun: ["こう", "うける"],
    source: "",
    meanings: ["solicit", "invite", "ask"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "逝",
    on: ["セイ"],
    kun: ["ゆく", "いく"],
    source: "",
    meanings: ["departed", "die"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "醒",
    on: ["セイ"],
    kun: ["さます", "さめる"],
    source: "",
    meanings: ["awake", "be disillusioned", "sober up"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "斉",
    on: ["セイ", "サイ"],
    kun: ["そろう", "ひとしい", "ひとしく", "あたる", "はやい"],
    source: "",
    meanings: ["adjusted", "alike", "equal", "similar variety of"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "隻",
    on: ["セキ"],
    kun: [],
    source: "",
    meanings: ["vessels", "counter for ships", "fish", "birds", "arrows", "one of a pair"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "惜",
    on: ["セキ"],
    kun: ["おしい", "おしむ"],
    source: "",
    meanings: ["pity", "be sparing of", "frugal", "stingy", "regret"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "戚",
    on: ["ソク", "セキ"],
    kun: ["いたむ", "うれえる", "みうち"],
    source: "",
    meanings: ["grieve", "relatives"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "斥",
    on: ["セキ"],
    kun: ["しりぞける"],
    source: "",
    meanings: ["reject", "retreat", "recede", "withdraw", "repel", "repulse"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "析",
    on: ["セキ"],
    kun: [],
    source: "",
    meanings: ["chop", "divide", "tear", "analyze"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "籍",
    on: ["セキ"],
    kun: [],
    source: "",
    meanings: ["enroll", "domiciliary register", "membership"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "脊",
    on: ["セキ"],
    kun: ["せ", "せい"],
    source: "",
    meanings: ["stature", "height"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "跡",
    on: ["セキ"],
    kun: ["あと"],
    source: "",
    meanings: ["tracks", "mark", "print", "impression"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "拙",
    on: ["セツ"],
    kun: ["つたない"],
    source: "",
    meanings: ["bungling", "clumsy", "unskillful"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "摂",
    on: ["セツ", "ショウ"],
    kun: ["おさめる", "かねる", "とる"],
    source: "",
    meanings: ["vicarious", "surrogate", "act in addition to", "take in", "absorb"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "窃",
    on: ["セツ"],
    kun: ["ぬすむ", "ひそか"],
    source: "",
    meanings: ["stealth", "steal", "secret", "private", "hushed"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "仙",
    on: ["セン", "セント"],
    kun: [],
    source: "",
    meanings: ["hermit", "wizard", "cent"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "占",
    on: ["セン"],
    kun: ["しめる", "うらなう"],
    source: "",
    meanings: ["fortune-telling", "divining", "forecasting", "occupy", "hold", "have", "get", "take"],
    grade: 8,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "扇",
    on: ["セン"],
    kun: ["おうぎ"],
    source: "",
    meanings: ["fan", "folding fan"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "栓",
    on: ["セン"],
    kun: [],
    source: "",
    meanings: ["plug", "bolt", "cork", "bung", "stopper"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "潜",
    on: ["セン"],
    kun: ["ひそむ", "もぐる", "かくれる", "くぐる", "ひそめる"],
    source: "",
    meanings: ["submerge", "conceal", "hide", "lower (voice)", "hush"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "煎",
    on: ["セン"],
    kun: ["せんじる", "いる", "にる"],
    source: "",
    meanings: ["broil", "parch", "roast", "boil"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "旋",
    on: ["セン"],
    kun: ["めぐる", "いばり"],
    source: "",
    meanings: ["rotation", "go around"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "繊",
    on: ["セン"],
    kun: [],
    source: "",
    meanings: ["slender", "fine", "thin kimono"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "羨",
    on: ["セン", "エン"],
    kun: ["うらやむ", "あまり"],
    source: "",
    meanings: ["envious", "be jealous", "covet"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "腺",
    on: ["セン"],
    kun: [],
    source: "",
    meanings: ["gland", "(kokuji)"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "薦",
    on: ["セン"],
    kun: ["すすめる"],
    source: "",
    meanings: ["recommend", "mat", "advise", "encourage", "offer"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "詮",
    on: ["セン"],
    kun: ["せんずる", "かい", "あきらか"],
    source: "",
    meanings: ["discussion", "methods called for", "selection", "result"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "践",
    on: ["セン"],
    kun: ["ふむ"],
    source: "",
    meanings: ["tread", "step on", "trample", "practice", "carry through"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "遷",
    on: ["セン"],
    kun: ["うつる", "うつす", "みやこがえ"],
    source: "",
    meanings: ["transition", "move", "change"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鮮",
    on: ["セン"],
    kun: ["あざやか"],
    source: "",
    meanings: ["fresh", "vivid", "clear", "brilliant", "Korea"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "漸",
    on: ["ゼン"],
    kun: ["ようやく", "やや", "ようよう", "すすむ"],
    source: "",
    meanings: ["steadily", "gradually advancing", "finally", "barely"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "禅",
    on: ["ゼン", "セン"],
    kun: ["しずか", "ゆずる"],
    source: "",
    meanings: ["Zen", "silent meditation"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "繕",
    on: ["ゼン"],
    kun: ["つくろう"],
    source: "",
    meanings: ["darning", "repair", "mend", "trim", "tidy up", "adjust"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "膳",
    on: ["ゼン", "セン"],
    kun: ["かしわ", "すすめる", "そなえる"],
    source: "",
    meanings: ["small low table", "tray"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "塑",
    on: ["ソ"],
    kun: ["でく"],
    source: "",
    meanings: ["model", "molding"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "措",
    on: ["ソ"],
    kun: ["おく"],
    source: "",
    meanings: ["set aside", "give up", "suspend", "discontinue", "lay aside", "except"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "曽",
    on: ["ソウ", "ソ", "ゾウ"],
    kun: ["かつ", "かつて", "すなわち"],
    source: "",
    meanings: ["formerly", "once", "before", "ever", "never", "ex-"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "狙",
    on: ["ソ", "ショ"],
    kun: ["ねらう", "ねらい"],
    source: "",
    meanings: ["aim at", "sight", "shadow", "stalk"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "疎",
    on: ["ソ", "ショ"],
    kun: ["うとい", "うとむ", "まばら"],
    source: "",
    meanings: ["alienate", "rough", "neglect", "shun", "sparse", "penetrate"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "礎",
    on: ["ソ"],
    kun: ["いしずえ"],
    source: "",
    meanings: ["cornerstone", "foundation stone"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "租",
    on: ["ソ"],
    kun: [],
    source: "",
    meanings: ["tariff", "crop tax", "borrowing"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "粗",
    on: ["ソ"],
    kun: ["あらい", "あら"],
    source: "",
    meanings: ["coarse", "rough", "rugged"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "訴",
    on: ["ソ"],
    kun: ["うったえる"],
    source: "",
    meanings: ["accusation", "sue", "complain of pain", "appeal to"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "阻",
    on: ["ソ"],
    kun: ["はばむ"],
    source: "",
    meanings: ["thwart", "separate from", "prevent", "obstruct", "deter", "impede"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "遡",
    on: ["ソ", "サク"],
    kun: ["さかのぼる"],
    source: "",
    meanings: ["go upstream", "retrace the past"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "僧",
    on: ["ソウ"],
    kun: [],
    source: "",
    meanings: ["Buddhist priest", "monk"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "双",
    on: ["ソウ"],
    kun: ["ふた", "たぐい", "ならぶ", "ふたつ"],
    source: "",
    meanings: ["pair", "set", "comparison", "counter for pairs"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "喪",
    on: ["ソウ"],
    kun: ["も"],
    source: "",
    meanings: ["miss", "mourning"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "壮",
    on: ["ソウ"],
    kun: ["さかん"],
    source: "",
    meanings: ["robust", "manhood", "prosperity"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "爽",
    on: ["ソウ"],
    kun: ["あきらか", "さわやか", "たがう"],
    source: "",
    meanings: ["refreshing", "bracing", "resonant", "sweet", "clear"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "捜",
    on: ["ソウ", "シュ", "シュウ"],
    kun: ["さがす"],
    source: "",
    meanings: ["search", "look for", "locate"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "掃",
    on: ["ソウ", "シュ"],
    kun: ["はく"],
    source: "",
    meanings: ["sweep", "brush"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "挿",
    on: ["ソウ"],
    kun: ["さす", "はさむ"],
    source: "",
    meanings: ["insert", "put in", "graft", "wear (sword)"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "曹",
    on: ["ソウ", "ゾウ"],
    kun: [],
    source: "",
    meanings: ["office", "official", "comrade", "fellow"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "槽",
    on: ["ソウ"],
    kun: ["ふね"],
    source: "",
    meanings: ["vat", "tub", "tank"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "燥",
    on: ["ソウ"],
    kun: ["はしゃぐ"],
    source: "",
    meanings: ["parch", "dry up"],
    grade: 8,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "痩",
    on: ["ソウ", "チュウ", "シュウ", "シュ"],
    kun: ["やせる"],
    source: "",
    meanings: ["get thin"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "荘",
    on: ["ソウ", "ショウ", "チャン"],
    kun: ["ほうき", "おごそか"],
    source: "",
    meanings: ["villa", "inn", "cottage", "feudal manor", "solemn", "dignified"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "葬",
    on: ["ソウ"],
    kun: ["ほうむる"],
    source: "",
    meanings: ["interment", "bury", "shelve"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "藻",
    on: ["ソウ"],
    kun: ["も"],
    source: "",
    meanings: ["seaweed", "duckweed"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "遭",
    on: ["ソウ"],
    kun: ["あう", "あわせる"],
    source: "",
    meanings: ["encounter", "meet", "party", "association", "interview", "join"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "霜",
    on: ["ソウ"],
    kun: ["しも"],
    source: "",
    meanings: ["frost"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "騒",
    on: ["ソウ"],
    kun: ["さわぐ", "うれい", "さわがしい"],
    source: "",
    meanings: ["boisterous", "make noise", "clamor", "disturb", "excite"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "憎",
    on: ["ゾウ"],
    kun: ["にくむ", "にくい", "にくらしい", "にくしみ"],
    source: "",
    meanings: ["hate", "detest"],
    grade: 8,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "贈",
    on: ["ゾウ", "ソウ"],
    kun: ["おくる"],
    source: "",
    meanings: ["presents", "send", "give to", "award to", "confer on", "presenting something"],
    grade: 8,
    jlpt: 2,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "促",
    on: ["ソク"],
    kun: ["うながす"],
    source: "",
    meanings: ["stimulate", "urge", "press", "demand", "incite"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "即",
    on: ["ソク"],
    kun: ["つく", "つける", "すなわち"],
    source: "",
    meanings: ["instant", "namely", "as is", "conform", "agree", "adapt"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "捉",
    on: ["ソク", "サク"],
    kun: ["とらえる"],
    source: "",
    meanings: ["catch", "capture"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "俗",
    on: ["ゾク"],
    kun: [],
    source: "",
    meanings: ["vulgar", "customs", "manners", "worldliness", "mundane things"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "賊",
    on: ["ゾク"],
    kun: [],
    source: "",
    meanings: ["burglar", "rebel", "traitor", "robber"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "袖",
    on: ["シュウ"],
    kun: ["そで"],
    source: "",
    meanings: ["sleeve", "wing (building)", "extension", "give cold shoulder"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "遜",
    on: ["ソン"],
    kun: ["したがう", "へりくだる", "ゆずる"],
    source: "",
    meanings: ["humble", "modest"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "汰",
    on: ["タ", "タイ"],
    kun: ["おごる", "にごる", "よなげる"],
    source: "",
    meanings: ["washing", "sieving", "filtering", "weeding out", "luxury"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "唾",
    on: ["ダ", "タ"],
    kun: ["つば", "つばき"],
    source: "",
    meanings: ["saliva", "sputum"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "堕",
    on: ["ダ"],
    kun: ["おちる", "くずす", "くずれる"],
    source: "",
    meanings: ["degenerate", "descend to", "lapse into"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "妥",
    on: ["ダ"],
    kun: [],
    source: "",
    meanings: ["gentle", "peace", "depravity"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "惰",
    on: ["ダ"],
    kun: [],
    source: "",
    meanings: ["lazy", "laziness"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "駄",
    on: ["ダ", "タ"],
    kun: [],
    source: "",
    meanings: ["burdensome", "pack horse", "horse load", "send by horse", "trivial", "worthless"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "堆",
    on: ["タイ", "ツイ"],
    kun: ["うずたかい"],
    source: "",
    meanings: ["piled high"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "耐",
    on: ["タイ"],
    kun: ["たえる"],
    source: "",
    meanings: ["-proof", "enduring"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "怠",
    on: ["タイ"],
    kun: ["おこたる", "なまける"],
    source: "",
    meanings: ["neglect", "laziness"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "戴",
    on: ["タイ"],
    kun: ["いただく"],
    source: "",
    meanings: ["be crowned with", "live under (a ruler)", "receive"],
    grade: 8,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "替",
    on: ["タイ"],
    kun: ["かえる", "かえ", "かわる"],
    source: "",
    meanings: ["exchange", "spare", "substitute", "per-"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "泰",
    on: ["タイ"],
    kun: [],
    source: "",
    meanings: ["peaceful", "calm", "peace", "easy", "Thailand", "extreme", "excessive", "great"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "滞",
    on: ["タイ", "テイ"],
    kun: ["とどこおる"],
    source: "",
    meanings: ["stagnate", "be delayed", "overdue", "arrears"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "胎",
    on: ["タイ"],
    kun: [],
    source: "",
    meanings: ["womb", "uterus"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "袋",
    on: ["タイ", "ダイ"],
    kun: ["ふくろ"],
    source: "",
    meanings: ["sack", "bag", "pouch"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "逮",
    on: ["タイ"],
    kun: [],
    source: "",
    meanings: ["apprehend", "chase"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "滝",
    on: ["ロウ", "ソウ"],
    kun: ["たき"],
    source: "",
    meanings: ["waterfall", "rapids", "cascade"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "卓",
    on: ["タク"],
    kun: [],
    source: "",
    meanings: ["eminent", "table", "desk", "high"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "択",
    on: ["タク"],
    kun: ["えらぶ"],
    source: "",
    meanings: ["choose", "select", "elect", "prefer"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "拓",
    on: ["タク"],
    kun: ["ひらく"],
    source: "",
    meanings: ["clear (the land)", "open", "break up (land)"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "沢",
    on: ["タク"],
    kun: ["さわ", "うるおい", "うるおす", "つや"],
    source: "",
    meanings: ["swamp", "marsh", "brilliance", "grace"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "濯",
    on: ["タク"],
    kun: ["すすぐ", "ゆすぐ"],
    source: "",
    meanings: ["laundry", "wash", "pour on", "rinse"],
    grade: 8,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "託",
    on: ["タク"],
    kun: ["かこつける", "かこつ", "かこつける"],
    source: "",
    meanings: ["consign", "requesting", "entrusting with", "pretend", "hint"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "濁",
    on: ["ダク", "ジョク"],
    kun: ["にごる", "にごす"],
    source: "",
    meanings: ["voiced", "uncleanness", "wrong", "nigori", "impurity"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "諾",
    on: ["ダク"],
    kun: [],
    source: "",
    meanings: ["consent", "assent", "agreement"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "但",
    on: ["タン"],
    kun: ["ただし"],
    source: "",
    meanings: ["however", "but"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "奪",
    on: ["ダツ"],
    kun: ["うばう"],
    source: "",
    meanings: ["rob", "take by force", "snatch away", "dispossess", "plunder", "usurp"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "脱",
    on: ["ダツ"],
    kun: ["ぬぐ", "ぬげる"],
    source: "",
    meanings: ["undress", "removing", "escape from", "get rid of", "be left out", "take off"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "棚",
    on: ["ホウ"],
    kun: ["たな", "だな"],
    source: "",
    meanings: ["shelf", "ledge", "rack", "mount", "mantle", "trellis"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "誰",
    on: ["スイ"],
    kun: ["だれ", "たれ", "た"],
    source: "",
    meanings: ["who", "someone", "somebody"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "丹",
    on: ["タン"],
    kun: ["に"],
    source: "",
    meanings: ["rust-colored", "red", "red lead", "pills", "sincerity"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "嘆",
    on: ["タン"],
    kun: ["なげく", "なげかわしい"],
    source: "",
    meanings: ["sigh", "lament", "moan", "grieve", "sigh of admiration"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "旦",
    on: ["タン", "ダン"],
    kun: ["あきらか", "あきら", "ただし", "あさ", "あした"],
    source: "",
    meanings: ["daybreak", "dawn", "morning"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "淡",
    on: ["タン"],
    kun: ["あわい"],
    source: "",
    meanings: ["thin", "faint", "pale", "fleeting"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "端",
    on: ["タン"],
    kun: ["はし", "は", "はた", "ばた", "はな"],
    source: "",
    meanings: ["edge", "origin", "end", "point", "border", "verge", "cape"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "綻",
    on: ["タン"],
    kun: ["ほころびる"],
    source: "",
    meanings: ["be rent", "ripped", "unravel", "run", "begin to open", "smile"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "胆",
    on: ["タン"],
    kun: ["きも"],
    source: "",
    meanings: ["gall bladder", "courage", "pluck", "nerve"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鍛",
    on: ["タン"],
    kun: ["きたえる"],
    source: "",
    meanings: ["forge", "discipline", "train"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "壇",
    on: ["ダン", "タン"],
    kun: [],
    source: "",
    meanings: ["podium", "stage", "rostrum", "terrace"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "弾",
    on: ["ダン", "タン"],
    kun: ["ひく", "ひき", "はずむ", "たま", "はじく", "はじける", "ただす", "はじきゆみ"],
    source: "",
    meanings: ["bullet", "twang", "flip", "snap"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "恥",
    on: ["チ"],
    kun: ["はじる", "はじ", "はじらう", "はずかしい"],
    source: "",
    meanings: ["shame", "dishonor"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "痴",
    on: ["チ"],
    kun: ["しれる", "おろか"],
    source: "",
    meanings: ["stupid", "foolish"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "稚",
    on: ["チ", "ジ"],
    kun: ["いとけない", "おさない", "おくて", "おでる"],
    source: "",
    meanings: ["immature", "young"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "致",
    on: ["チ"],
    kun: ["いたす"],
    source: "",
    meanings: ["doth", "do", "send", "forward", "cause", "exert", "incur", "engage"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "遅",
    on: ["チ"],
    kun: ["おくれる", "おくらす", "おそい"],
    source: "",
    meanings: ["slow", "late", "back", "later"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "畜",
    on: ["チク"],
    kun: [],
    source: "",
    meanings: ["livestock", "domestic fowl and animals"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "蓄",
    on: ["チク"],
    kun: ["たくわえる"],
    source: "",
    meanings: ["amass", "raise", "hoard", "store"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "逐",
    on: ["チク"],
    kun: [],
    source: "",
    meanings: ["pursue", "drive away", "chase", "accomplish", "attain", "commit"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "秩",
    on: ["チツ"],
    kun: [],
    source: "",
    meanings: ["regularity", "salary", "order"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "窒",
    on: ["チツ"],
    kun: [],
    source: "",
    meanings: ["plug up", "obstruct"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "嫡",
    on: ["チャク", "テキ"],
    kun: [],
    source: "",
    meanings: ["legitimate wife", "direct descent (non-bastard)"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "抽",
    on: ["チュウ"],
    kun: ["ひき"],
    source: "",
    meanings: ["pluck", "pull", "extract", "excel"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "衷",
    on: ["チュウ"],
    kun: [],
    source: "",
    meanings: ["inmost", "heart", "mind", "inside"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "酎",
    on: ["チュウ", "チュ"],
    kun: ["かもす"],
    source: "",
    meanings: ["sake"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鋳",
    on: ["チュウ", "イ", "シュ", "シュウ"],
    kun: ["いる"],
    source: "",
    meanings: ["casting", "mint"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "駐",
    on: ["チュウ"],
    kun: [],
    source: "",
    meanings: ["stop-over", "reside in", "resident"],
    grade: 8,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "弔",
    on: ["チョウ"],
    kun: ["とむらう", "とぶらう"],
    source: "",
    meanings: ["condolences", "mourning", "funeral"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "彫",
    on: ["チョウ"],
    kun: ["ほる", "ぼり"],
    source: "",
    meanings: ["carve", "engrave", "chisel"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "徴",
    on: ["チョウ", "チ"],
    kun: ["しるし"],
    source: "",
    meanings: ["indications", "sign", "omen", "symptom", "collect", "seek", "refer to", "question"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "懲",
    on: ["チョウ"],
    kun: ["こりる", "こらす", "こらしめる"],
    source: "",
    meanings: ["penal", "chastise", "punish", "discipline"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "挑",
    on: ["チョウ"],
    kun: ["いどむ"],
    source: "",
    meanings: ["challenge", "contend for", "make love to"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "眺",
    on: ["チョウ"],
    kun: ["ながめる"],
    source: "",
    meanings: ["stare", "watch", "look at", "see", "scrutinize"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "聴",
    on: ["チョウ", "テイ"],
    kun: ["きく", "ゆるす"],
    source: "",
    meanings: ["listen", "headstrong", "naughty", "careful inquiry"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "超",
    on: ["チョウ"],
    kun: ["こえる", "こす"],
    source: "",
    meanings: ["transcend", "super-", "ultra-"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "跳",
    on: ["チョウ"],
    kun: ["はねる", "とぶ", "とび"],
    source: "",
    meanings: ["hop", "leap up", "spring", "jerk", "prance", "buck", "splash", "sputter", "snap"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "勅",
    on: ["チョク"],
    kun: ["いましめる", "みことのり"],
    source: "",
    meanings: ["imperial order"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "捗",
    on: ["チョク", "ホ"],
    kun: ["はかどる"],
    source: "",
    meanings: ["make progress"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "朕",
    on: ["チン"],
    kun: [],
    source: "",
    meanings: ["majestic plural", "imperial we"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "沈",
    on: ["チン", "ジン"],
    kun: ["しずむ", "しずめる"],
    source: "",
    meanings: ["sink", "be submerged", "subside", "be depressed", "aloes"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "珍",
    on: ["チン"],
    kun: ["めずらしい", "たから"],
    source: "",
    meanings: ["rare", "curious", "strange"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鎮",
    on: ["チン"],
    kun: ["しずめる", "しずまる", "おさえ"],
    source: "",
    meanings: ["tranquilize", "ancient peace-preservation centers"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "陳",
    on: ["チン"],
    kun: ["ひねる"],
    source: "",
    meanings: ["exhibit", "state", "relate", "explain"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "津",
    on: ["シン"],
    kun: ["つ"],
    source: "",
    meanings: ["haven", "port", "harbor", "ferry"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "墜",
    on: ["ツイ"],
    kun: ["おちる", "おつ"],
    source: "",
    meanings: ["crash", "fall (down)"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "椎",
    on: ["ツイ", "スイ"],
    kun: ["つち", "うつ"],
    source: "",
    meanings: ["chinquapin", "mallet", "spine"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "塚",
    on: ["チョウ"],
    kun: ["つか", "づか"],
    source: "",
    meanings: ["hillock", "mound"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "漬",
    on: ["シ"],
    kun: ["つける", "つかる", "づけ", "づけ"],
    source: "",
    meanings: ["pickling", "soak", "moisten", "steep"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "潰",
    on: ["カイ", "エ"],
    kun: ["つぶす", "つぶれる", "ついえる"],
    source: "",
    meanings: ["crush", "smash", "break", "dissipate"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "坪",
    on: ["ヘイ"],
    kun: ["つぼ"],
    source: "",
    meanings: ["two-mat area", "approx. thirty-six sq ft"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "爪",
    on: ["ソウ"],
    kun: ["つめ", "つま"],
    source: "",
    meanings: ["claw", "nail", "talon"],
    grade: 8,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "釣",
    on: ["チョウ"],
    kun: ["つる", "つり", "つり"],
    source: "",
    meanings: ["angling", "fish", "catch", "allure", "ensnare"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "鶴",
    on: ["カク"],
    kun: ["つる"],
    source: "",
    meanings: ["crane", "stork"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "亭",
    on: ["テイ", "チン"],
    kun: [],
    source: "",
    meanings: ["pavilion", "restaurant", "mansion", "arbor", "cottage", "vaudeville", "music hall", "stage name"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "偵",
    on: ["テイ"],
    kun: [],
    source: "",
    meanings: ["spy"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "貞",
    on: ["テイ", "ジョウ"],
    kun: ["ただしい", "さだ"],
    source: "",
    meanings: ["upright", "chastity", "constancy", "righteousness"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "呈",
    on: ["テイ"],
    kun: [],
    source: "",
    meanings: ["display", "offer", "present", "send", "exhibit"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "堤",
    on: ["テイ"],
    kun: ["つつみ"],
    source: "",
    meanings: ["dike", "bank", "embankment"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "帝",
    on: ["テイ"],
    kun: ["みかど"],
    source: "",
    meanings: ["sovereign", "the emperor", "god", "creator"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "廷",
    on: ["テイ"],
    kun: [],
    source: "",
    meanings: ["courts", "imperial court", "government office"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "抵",
    on: ["テイ"],
    kun: [],
    source: "",
    meanings: ["resist", "reach", "touch"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "締",
    on: ["テイ"],
    kun: ["しまる", "しまり", "しめる", "しめ", "じめ"],
    source: "",
    meanings: ["tighten", "tie", "shut", "lock", "fasten"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "艇",
    on: ["テイ"],
    kun: [],
    source: "",
    meanings: ["rowboat", "small boat"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "訂",
    on: ["テイ"],
    kun: ["ただす"],
    source: "",
    meanings: ["revise", "correct", "decide"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "諦",
    on: ["テイ", "タイ"],
    kun: ["あきらめる", "つまびらか", "まこと"],
    source: "",
    meanings: ["truth", "clarity", "abandon", "give up"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "逓",
    on: ["テイ"],
    kun: ["かわる", "たがいに"],
    source: "",
    meanings: ["relay", "in turn", "sending"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "邸",
    on: ["テイ"],
    kun: ["やしき"],
    source: "",
    meanings: ["residence", "mansion"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "泥",
    on: ["デイ", "ナイ", "デ", "ニ"],
    kun: ["どろ", "なずむ"],
    source: "",
    meanings: ["mud", "mire", "adhere to", "be attached to"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "摘",
    on: ["テキ"],
    kun: ["つむ"],
    source: "",
    meanings: ["pinch", "pick", "pluck", "trim", "clip", "summarize"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "滴",
    on: ["テキ"],
    kun: ["しずく", "したたる"],
    source: "",
    meanings: ["drip", "drop"],
    grade: 8,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "溺",
    on: ["デキ", "ジョウ", "ニョウ"],
    kun: ["いばり", "おぼれる"],
    source: "",
    meanings: ["drown", "indulge"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "哲",
    on: ["テツ"],
    kun: ["さとい", "あきらか"],
    source: "",
    meanings: ["philosophy", "clear"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "徹",
    on: ["テツ"],
    kun: [],
    source: "",
    meanings: ["penetrate", "clear", "pierce", "strike home", "sit up (all night)"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "撤",
    on: ["テツ"],
    kun: [],
    source: "",
    meanings: ["remove", "withdraw", "disarm", "dismantle", "reject", "exclude"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "迭",
    on: ["テツ"],
    kun: [],
    source: "",
    meanings: ["transfer", "alternation"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "添",
    on: ["テン"],
    kun: ["そえる", "そう"],
    source: "",
    meanings: ["annexed", "accompany", "marry", "suit", "meet", "satisfy", "attach", "append", "garnish", "imitate"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "貼",
    on: ["テン", "チョウ"],
    kun: ["はる", "つく"],
    source: "",
    meanings: ["stick", "paste", "apply"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "殿",
    on: ["デン", "テン"],
    kun: ["との", "どの"],
    source: "",
    meanings: ["Mr.", "hall", "mansion", "palace", "temple", "lord"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "吐",
    on: ["ト"],
    kun: ["はく", "つく"],
    source: "",
    meanings: ["spit", "vomit", "belch", "confess", "tell (lies)"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "塗",
    on: ["ト"],
    kun: ["ぬる", "ぬり", "まみれる"],
    source: "",
    meanings: ["paint", "plaster", "daub", "smear", "coating"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "妬",
    on: ["ト", "ツ"],
    kun: ["ねたむ", "そねむ", "つもる", "ふさぐ"],
    source: "",
    meanings: ["jealous", "envy"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "斗",
    on: ["ト", "トウ"],
    kun: [],
    source: "",
    meanings: ["Big Dipper", "ten sho (vol)", "sake dipper", "dots and cross radical (no. 68)"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "渡",
    on: ["ト"],
    kun: ["わたる", "わたる", "わたす"],
    source: "",
    meanings: ["transit", "ford", "ferry", "cross", "import", "deliver", "diameter", "migrate"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "賭",
    on: ["ト"],
    kun: ["かける", "かけ"],
    source: "",
    meanings: ["gamble", "wager", "bet"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "途",
    on: ["ト"],
    kun: ["みち"],
    source: "",
    meanings: ["route", "way", "road"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "奴",
    on: ["ド"],
    kun: ["やつ", "やっこ"],
    source: "",
    meanings: ["guy", "slave", "manservant", "fellow"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "怒",
    on: ["ド", "ヌ"],
    kun: ["いかる", "おこる"],
    source: "",
    meanings: ["angry", "be offended"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "倒",
    on: ["トウ"],
    kun: ["たおれる", "だおれ", "たおす", "さかさま", "さかさ", "さかしま"],
    source: "",
    meanings: ["overthrow", "fall", "collapse", "drop", "break down"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "凍",
    on: ["トウ"],
    kun: ["こおる", "こごえる", "こごる", "いてる", "しみる"],
    source: "",
    meanings: ["frozen", "congeal", "refrigerate"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "唐",
    on: ["トウ"],
    kun: ["から"],
    source: "",
    meanings: ["T'ang", "China", "foreign"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "塔",
    on: ["トウ"],
    kun: [],
    source: "",
    meanings: ["pagoda", "tower", "steeple"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "悼",
    on: ["トウ"],
    kun: ["いたむ"],
    source: "",
    meanings: ["lament", "grieve over"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "搭",
    on: ["トウ"],
    kun: [],
    source: "",
    meanings: ["board", "load (a vehicle)", "ride"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "桃",
    on: ["トウ"],
    kun: ["もも"],
    source: "",
    meanings: ["peach"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "棟",
    on: ["トウ"],
    kun: ["むね", "むな"],
    source: "",
    meanings: ["ridgepole", "ridge"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "盗",
    on: ["トウ"],
    kun: ["ぬすむ", "ぬすみ"],
    source: "",
    meanings: ["steal", "rob", "pilfer"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "痘",
    on: ["トウ"],
    kun: [],
    source: "",
    meanings: ["pox", "smallpox"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "筒",
    on: ["トウ"],
    kun: ["つつ"],
    source: "",
    meanings: ["cylinder", "pipe", "tube", "gun barrel", "sleeve"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "到",
    on: ["トウ"],
    kun: ["いたる"],
    source: "",
    meanings: ["arrival", "proceed", "reach", "attain", "result in"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "藤",
    on: ["トウ", "ドウ"],
    kun: ["ふじ"],
    source: "",
    meanings: ["wisteria"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "謄",
    on: ["トウ"],
    kun: [],
    source: "",
    meanings: ["mimeograph", "copy"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "踏",
    on: ["トウ"],
    kun: ["ふむ", "ふまえる"],
    source: "",
    meanings: ["step", "trample", "carry through", "appraise", "evade payment"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "逃",
    on: ["トウ"],
    kun: ["にげる", "にがす", "のがす", "のがれる"],
    source: "",
    meanings: ["escape", "flee", "shirk", "evade", "set free"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "透",
    on: ["トウ"],
    kun: ["すく", "すかす", "すける", "とうる", "とうす"],
    source: "",
    meanings: ["transparent", "permeate", "filter", "penetrate"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "陶",
    on: ["トウ"],
    kun: ["すえ"],
    source: "",
    meanings: ["pottery", "porcelain"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "騰",
    on: ["トウ"],
    kun: ["あがる", "のぼる"],
    source: "",
    meanings: ["leaping up", "jumping up", "rising", "advancing", "going"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "闘",
    on: ["トウ"],
    kun: ["たたかう", "あらそう"],
    source: "",
    meanings: ["fight", "war"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "憧",
    on: ["ショウ", "トウ", "ドウ"],
    kun: ["あこがれる"],
    source: "",
    meanings: ["yearn after", "long for", "aspire to", "admire", "adore"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "洞",
    on: ["ドウ"],
    kun: ["ほら"],
    source: "",
    meanings: ["den", "cave", "excavation"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "瞳",
    on: ["ドウ", "トウ"],
    kun: ["ひとみ"],
    source: "",
    meanings: ["pupil (of eye)"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "胴",
    on: ["ドウ"],
    kun: [],
    source: "",
    meanings: ["trunk", "torso", "hull (ship)", "hub of wheel"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "峠",
    on: [],
    kun: ["とうげ"],
    source: "",
    meanings: ["mountain peak", "mountain pass", "climax", "crest", "(kokuji)"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "匿",
    on: ["トク"],
    kun: ["かくまう"],
    source: "",
    meanings: ["hide", "shelter", "shield"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "督",
    on: ["トク"],
    kun: [],
    source: "",
    meanings: ["coach", "command", "urge", "lead", "supervise"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "篤",
    on: ["トク"],
    kun: ["あつい"],
    source: "",
    meanings: ["fervent", "kind", "cordial", "serious", "deliberate"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "凸",
    on: ["トツ"],
    kun: ["でこ"],
    source: "",
    meanings: ["convex", "beetle brow", "uneven"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "突",
    on: ["トツ", "カ"],
    kun: ["つく"],
    source: "",
    meanings: ["stab", "protruding", "thrust", "pierce", "prick", "collision", "sudden"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "屯",
    on: ["トン"],
    kun: ["たむろ"],
    source: "",
    meanings: ["barracks", "police station", "camp", "ton"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "豚",
    on: ["トン"],
    kun: ["ぶた"],
    source: "",
    meanings: ["pork", "pig"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "頓",
    on: ["トン", "トツ"],
    kun: ["にわかに", "とんと", "つまずく", "とみに", "ぬかずく"],
    source: "",
    meanings: ["suddenly", "immediately", "in a hurry", "arrange", "stay in place", "bow", "kowtow"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "曇",
    on: ["ドン"],
    kun: ["くもる"],
    source: "",
    meanings: ["cloudy weather", "cloud up"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鈍",
    on: ["ドン"],
    kun: ["にぶい", "にぶる", "にぶ", "なまる", "なまくら"],
    source: "",
    meanings: ["dull", "slow", "foolish", "blunt"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "那",
    on: ["ナ", "ダ"],
    kun: ["なに", "なんぞ", "いかん"],
    source: "",
    meanings: ["what?"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "謎",
    on: ["メイ", "ベイ"],
    kun: ["なぞ"],
    source: "",
    meanings: ["riddle", "puzzle", "enigma", "hint", "tip"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "鍋",
    on: ["カ"],
    kun: ["なべ"],
    source: "",
    meanings: ["pot", "pan", "kettle"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "軟",
    on: ["ナン"],
    kun: ["やわらか", "やわらかい"],
    source: "",
    meanings: ["soft"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "尼",
    on: ["ニ"],
    kun: ["あま"],
    source: "",
    meanings: ["nun"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "弐",
    on: ["ニ", "ジ"],
    kun: ["ふたつ", "そえ"],
    source: "",
    meanings: ["II", "two", "second"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "匂",
    on: [],
    kun: ["におう", "におい", "におわせる"],
    source: "",
    meanings: ["fragrant", "stink", "glow", "insinuate", "(kokuji)"],
    grade: 8,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "虹",
    on: ["コウ"],
    kun: ["にじ"],
    source: "",
    meanings: ["rainbow"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "如",
    on: ["ジョ", "ニョ"],
    kun: ["ごとし"],
    source: "",
    meanings: ["likeness", "like", "such as", "as if", "better", "best", "equal"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "尿",
    on: ["ニョウ"],
    kun: ["ゆばり", "いばり", "しと"],
    source: "",
    meanings: ["urine"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "妊",
    on: ["ニン", "ジン"],
    kun: ["はらむ", "みごもる"],
    source: "",
    meanings: ["pregnancy"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "忍",
    on: ["ニン"],
    kun: ["しのぶ", "しのばせる"],
    source: "",
    meanings: ["endure", "bear", "put up with", "conceal", "secrete", "spy", "sneak"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "寧",
    on: ["ネイ"],
    kun: ["むしろ"],
    source: "",
    meanings: ["rather", "preferably", "peaceful", "quiet", "tranquility"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "猫",
    on: ["ビョウ"],
    kun: ["ねこ"],
    source: "",
    meanings: ["cat"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "捻",
    on: ["ネン", "ジョウ"],
    kun: ["ねじる", "ねじる", "ひねくる", "ひねる"],
    source: "",
    meanings: ["twirl", "twist", "play with"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "粘",
    on: ["ネン"],
    kun: ["ねばる"],
    source: "",
    meanings: ["sticky", "glutinous", "greasy", "persevere"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "悩",
    on: ["ノウ"],
    kun: ["なやむ", "なやます", "なやましい", "なやみ"],
    source: "",
    meanings: ["trouble", "worry", "in pain", "distress", "illness"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "濃",
    on: ["ノウ"],
    kun: ["こい"],
    source: "",
    meanings: ["concentrated", "thick", "dark", "undiluted"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "把",
    on: ["ハ", "ワ"],
    kun: [],
    source: "",
    meanings: ["grasp", "faggot", "bunch", "counter for bundles"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "覇",
    on: ["ハ", "ハク"],
    kun: ["はたがしら"],
    source: "",
    meanings: ["hegemony", "supremacy", "leadership", "champion"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "婆",
    on: ["バ"],
    kun: ["ばば", "ばあ"],
    source: "",
    meanings: ["old woman", "grandma", "wet nurse"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "罵",
    on: ["バ"],
    kun: ["ののしる"],
    source: "",
    meanings: ["abuse", "insult"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "廃",
    on: ["ハイ"],
    kun: ["すたれる", "すたる"],
    source: "",
    meanings: ["abolish", "obsolete", "cessation", "discarding", "abandon"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "排",
    on: ["ハイ"],
    kun: [],
    source: "",
    meanings: ["repudiate", "exclude", "expel", "reject", "line up", "arrange"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "杯",
    on: ["ハイ"],
    kun: ["さかずき"],
    source: "",
    meanings: ["counter for cupfuls", "wine glass", "glass", "toast"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "輩",
    on: ["ハイ"],
    kun: ["ばら", "やから", "やかい", "ともがら"],
    source: "",
    meanings: ["comrade", "fellow", "people", "companions"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "培",
    on: ["バイ"],
    kun: ["つちかう"],
    source: "",
    meanings: ["cultivate", "foster"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "媒",
    on: ["バイ"],
    kun: ["なこうど"],
    source: "",
    meanings: ["mediator", "go-between"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "賠",
    on: ["バイ"],
    kun: [],
    source: "",
    meanings: ["compensation", "indemnify"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "陪",
    on: ["バイ"],
    kun: [],
    source: "",
    meanings: ["obeisance", "follow", "accompany", "attend on"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "伯",
    on: ["ハク"],
    kun: [],
    source: "",
    meanings: ["chief", "count", "earl", "uncle", "Brazil"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "剥",
    on: ["ハク", "ホク"],
    kun: ["へぐ", "へずる", "むく", "むける", "はがれる", "はぐ", "はげる", "はがす"],
    source: "",
    meanings: ["come off", "peel", "fade", "discolor"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "拍",
    on: ["ハク", "ヒョウ"],
    kun: [],
    source: "",
    meanings: ["clap", "beat (music)"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "泊",
    on: ["ハク"],
    kun: ["とまる", "とめる"],
    source: "",
    meanings: ["overnight stay", "put up at", "ride at anchor"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "舶",
    on: ["ハク"],
    kun: [],
    source: "",
    meanings: ["liner", "ship"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "薄",
    on: ["ハク"],
    kun: ["うすい", "うす", "うす", "うすめる", "うすまる", "うすらぐ", "うすら", "うすれる", "すすき"],
    source: "",
    meanings: ["dilute", "thin", "weak (tea)", "pampas grass"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "迫",
    on: ["ハク"],
    kun: ["せまる"],
    source: "",
    meanings: ["urge", "force", "imminent", "spur on"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "漠",
    on: ["バク"],
    kun: [],
    source: "",
    meanings: ["vague", "obscure", "desert", "wide"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "爆",
    on: ["バク"],
    kun: ["はぜる"],
    source: "",
    meanings: ["bomb", "burst open", "pop", "split"],
    grade: 8,
    jlpt: 2,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "縛",
    on: ["バク"],
    kun: ["しばる"],
    source: "",
    meanings: ["truss", "arrest", "bind", "tie", "restrain"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "箸",
    on: ["チョ", "チャク"],
    kun: ["はし"],
    source: "",
    meanings: ["chopsticks"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "肌",
    on: ["キ"],
    kun: ["はだ"],
    source: "",
    meanings: ["texture", "skin", "body", "grain"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "鉢",
    on: ["ハチ", "ハツ"],
    kun: [],
    source: "",
    meanings: ["bowl", "rice tub", "pot", "crown"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "髪",
    on: ["ハツ"],
    kun: ["かみ"],
    source: "",
    meanings: ["hair of the head"],
    grade: 8,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "伐",
    on: ["バツ", "ハツ", "カ", "ボチ"],
    kun: ["きる", "そむく", "うつ"],
    source: "",
    meanings: ["fell", "strike", "attack", "punish"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "罰",
    on: ["バツ", "バチ", "ハツ"],
    kun: ["ばっする"],
    source: "",
    meanings: ["penalty", "punishment"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "抜",
    on: ["バツ", "ハツ", "ハイ"],
    kun: ["ぬく", "ぬく", "ぬき", "ぬける", "ぬかす", "ぬかる"],
    source: "",
    meanings: ["slip out", "extract", "pull out", "pilfer", "quote", "remove", "omit"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "閥",
    on: ["バツ"],
    kun: [],
    source: "",
    meanings: ["clique", "lineage", "pedigree", "faction", "clan"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "伴",
    on: ["ハン", "バン"],
    kun: ["ともなう"],
    source: "",
    meanings: ["consort", "accompany", "bring with", "companion"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "帆",
    on: ["ハン"],
    kun: ["ほ"],
    source: "",
    meanings: ["sail"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "搬",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["conveyor", "carry", "transport"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "斑",
    on: ["ハン"],
    kun: ["ふ", "まだら"],
    source: "",
    meanings: ["spot", "blemish", "speck", "patches"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "氾",
    on: ["ハン"],
    kun: ["ひろがる"],
    source: "",
    meanings: ["spread out", "wide"],
    grade: 8,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "汎",
    on: ["ハン", "ブ", "フウ", "ホウ", "ホン"],
    kun: ["ただよう", "ひろい"],
    source: "",
    meanings: ["pan-"],
    grade: 8,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "畔",
    on: ["ハン"],
    kun: ["あぜ", "くろ", "ほとり"],
    source: "",
    meanings: ["paddy ridge", "levee"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "繁",
    on: ["ハン"],
    kun: ["しげる", "しげく"],
    source: "",
    meanings: ["luxuriant", "thick", "overgrown", "frequency", "complexity", "trouble"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "般",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["carrier", "carry", "all", "general", "sort", "kind"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "藩",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["clan", "enclosure"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "販",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["marketing", "sell", "trade"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "範",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: ["pattern", "example", "model"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "煩",
    on: ["ハン", "ボン"],
    kun: ["わずらう", "わずらわす", "うるさがる", "うるさい"],
    source: "",
    meanings: ["anxiety", "trouble", "worry", "pain", "ill", "annoy", "nuisance", "irksome"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "頒",
    on: ["ハン"],
    kun: ["わかつ", "わける"],
    source: "",
    meanings: ["distribute", "disseminate", "partition", "understand"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "盤",
    on: ["バン"],
    kun: [],
    source: "",
    meanings: ["tray", "shallow bowl", "platter", "tub", "board", "phonograph record"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "蛮",
    on: ["バン"],
    kun: ["えびす"],
    source: "",
    meanings: ["barbarian"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "卑",
    on: ["ヒ"],
    kun: ["いやしい", "いやしむ", "いやしめる"],
    source: "",
    meanings: ["lowly", "base", "vile", "vulgar"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "妃",
    on: ["ヒ"],
    kun: ["きさき"],
    source: "",
    meanings: ["queen", "princess"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "彼",
    on: ["ヒ"],
    kun: ["かれ", "かの", "かの"],
    source: "",
    meanings: ["he", "that", "the"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "扉",
    on: ["ヒ"],
    kun: ["とびら"],
    source: "",
    meanings: ["front door", "title page", "front page"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "披",
    on: ["ヒ"],
    kun: [],
    source: "",
    meanings: ["expose", "open"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "泌",
    on: ["ヒツ", "ヒ"],
    kun: [],
    source: "",
    meanings: ["ooze", "flow", "soak in", "penetrate", "secrete"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "疲",
    on: ["ヒ"],
    kun: ["つかれる", "づかれ", "つからす"],
    source: "",
    meanings: ["exhausted", "tire", "weary"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "碑",
    on: ["ヒ"],
    kun: ["いしぶみ"],
    source: "",
    meanings: ["tombstone", "monument"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "罷",
    on: ["ヒ"],
    kun: ["まかり", "やめる"],
    source: "",
    meanings: ["quit", "stop", "leave", "withdraw", "go"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "被",
    on: ["ヒ"],
    kun: ["こうむる", "おおう", "かぶる", "かぶせる"],
    source: "",
    meanings: ["incur", "cover", "veil", "brood over", "shelter", "wear", "put on", "be exposed (film)", "receiving"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "避",
    on: ["ヒ"],
    kun: ["さける", "よける"],
    source: "",
    meanings: ["evade", "avoid", "avert", "ward off", "shirk", "shun"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "尾",
    on: ["ビ"],
    kun: ["お"],
    source: "",
    meanings: ["tail", "end", "counter for fish", "lower slope of mountain"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "微",
    on: ["ビ"],
    kun: ["かすか"],
    source: "",
    meanings: ["delicate", "minuteness", "insignificance"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "眉",
    on: ["ビ", "ミ"],
    kun: ["まゆ"],
    source: "",
    meanings: ["eyebrow"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "匹",
    on: ["ヒツ"],
    kun: ["ひき"],
    source: "",
    meanings: ["equal", "head", "counter for small animals", "roll of cloth"],
    grade: 8,
    jlpt: 2,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "膝",
    on: ["シツ"],
    kun: ["ひざ"],
    source: "",
    meanings: ["knee", "lap"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "肘",
    on: ["チュウ"],
    kun: ["ひじ"],
    source: "",
    meanings: ["elbow", "arm"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "姫",
    on: ["キ"],
    kun: ["ひめ", "ひめ"],
    source: "",
    meanings: ["princess"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "漂",
    on: ["ヒョウ"],
    kun: ["ただよう"],
    source: "",
    meanings: ["drift", "float (on liquid)"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "描",
    on: ["ビョウ"],
    kun: ["えがく", "かく"],
    source: "",
    meanings: ["sketch", "compose", "write", "draw", "paint"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "苗",
    on: ["ビョウ", "ミョウ"],
    kun: ["なえ", "なわ"],
    source: "",
    meanings: ["seedling", "sapling", "shoot"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "浜",
    on: ["ヒン"],
    kun: ["はま"],
    source: "",
    meanings: ["seacoast", "beach", "seashore"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "賓",
    on: ["ヒン"],
    kun: [],
    source: "",
    meanings: ["V.I.P.", "guest"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "頻",
    on: ["ヒン"],
    kun: ["しきりに"],
    source: "",
    meanings: ["repeatedly", "recur"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "敏",
    on: ["ビン"],
    kun: ["さとい"],
    source: "",
    meanings: ["cleverness", "agile", "alert"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "瓶",
    on: ["ビン"],
    kun: ["かめ", "へい"],
    source: "",
    meanings: ["bottle", "vial", "jar", "jug", "vat", "urn"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "怖",
    on: ["フ", "ホ"],
    kun: ["こわい", "こわがる", "おじる", "おそれる"],
    source: "",
    meanings: ["dreadful", "be frightened", "fearful"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "扶",
    on: ["フ"],
    kun: ["たすける"],
    source: "",
    meanings: ["aid", "help", "assist"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "敷",
    on: ["フ"],
    kun: ["しく", "しき"],
    source: "",
    meanings: ["spread", "pave", "sit", "promulgate"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "普",
    on: ["フ"],
    kun: ["あまねく", "あまねし"],
    source: "",
    meanings: ["universal", "wide(ly)", "generally", "Prussia"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "浮",
    on: ["フ"],
    kun: ["うく", "うかれる", "うかぶ", "うかべる"],
    source: "",
    meanings: ["floating", "float", "rise to surface"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "符",
    on: ["フ"],
    kun: [],
    source: "",
    meanings: ["token", "sign", "mark", "tally", "charm"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "腐",
    on: ["フ"],
    kun: ["くさる", "くさる", "くされる", "くされ", "くさらす", "くさす"],
    source: "",
    meanings: ["rot", "decay", "sour"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "膚",
    on: ["フ"],
    kun: ["はだ"],
    source: "",
    meanings: ["skin", "body", "grain", "texture", "disposition"],
    grade: 8,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "譜",
    on: ["フ"],
    kun: [],
    source: "",
    meanings: ["musical score", "music", "note", "staff", "table", "genealogy"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "賦",
    on: ["フ", "ブ"],
    kun: [],
    source: "",
    meanings: ["levy", "ode", "prose", "poem", "tribute", "installment"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "赴",
    on: ["フ"],
    kun: ["おもむく"],
    source: "",
    meanings: ["proceed", "get", "become", "tend"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "附",
    on: ["フ"],
    kun: ["つける", "つく"],
    source: "",
    meanings: ["affixed", "attach", "refer to", "append"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "侮",
    on: ["ブ"],
    kun: ["あなどる", "あなずる"],
    source: "",
    meanings: ["scorn", "despise", "make light of", "contempt"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "舞",
    on: ["ブ"],
    kun: ["まう", "まう", "まい"],
    source: "",
    meanings: ["dance", "flit", "circle", "wheel"],
    grade: 8,
    jlpt: 2,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "封",
    on: ["フウ", "ホウ"],
    kun: [],
    source: "",
    meanings: ["seal", "closing"],
    grade: 8,
    jlpt: 2,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "伏",
    on: ["フク"],
    kun: ["ふせる", "ふす"],
    source: "",
    meanings: ["prostrated", "bend down", "bow", "cover", "lay (pipes)"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "幅",
    on: ["フク"],
    kun: ["はば"],
    source: "",
    meanings: ["hanging scroll", "width"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "覆",
    on: ["フク"],
    kun: ["おおう", "くつがえす", "くつがえる"],
    source: "",
    meanings: ["capsize", "cover", "shade", "mantle", "be ruined"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "払",
    on: ["フツ", "ヒツ", "ホツ"],
    kun: ["はらう", "はらい", "ばらい"],
    source: "",
    meanings: ["pay", "clear out", "prune", "banish", "dispose of"],
    grade: 8,
    jlpt: 2,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "沸",
    on: ["フツ"],
    kun: ["わく", "わかす"],
    source: "",
    meanings: ["seethe", "boil", "ferment", "uproar", "breed"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "噴",
    on: ["フン"],
    kun: ["ふく"],
    source: "",
    meanings: ["erupt", "spout", "emit", "flush out"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "墳",
    on: ["フン"],
    kun: [],
    source: "",
    meanings: ["tomb", "mound"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "憤",
    on: ["フン"],
    kun: ["いきどおる"],
    source: "",
    meanings: ["aroused", "resent", "be indignant", "anger"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "紛",
    on: ["フン"],
    kun: ["まぎれる", "まぎれ", "まぎらす", "まぎらわす", "まぎらわしい"],
    source: "",
    meanings: ["distract", "be mistaken for", "go astray", "divert"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "雰",
    on: ["フン"],
    kun: [],
    source: "",
    meanings: ["atmosphere", "fog"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "丙",
    on: ["ヘイ"],
    kun: ["ひのえ"],
    source: "",
    meanings: ["third class", "3rd", "3rd calendar sign"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "併",
    on: ["ヘイ"],
    kun: ["あわせる"],
    source: "",
    meanings: ["join", "get together", "unite", "collective"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "塀",
    on: ["ヘイ", "ベイ"],
    kun: [],
    source: "",
    meanings: ["fence", "wall", "(kokuji)"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "幣",
    on: ["ヘイ"],
    kun: ["ぬさ"],
    source: "",
    meanings: ["cash", "bad habit", "humble prefix", "gift", "Shinto offerings of cloth", "rope", "cut paper"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "弊",
    on: ["ヘイ"],
    kun: [],
    source: "",
    meanings: ["abuse", "evil", "vice", "breakage"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "柄",
    on: ["ヘイ"],
    kun: ["がら", "え", "つか"],
    source: "",
    meanings: ["design", "pattern", "build", "nature", "character", "handle", "crank", "grip", "knob", "shaft"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "蔽",
    on: ["ヘイ", "ヘツ", "フツ"],
    kun: ["おおう", "おおい"],
    source: "",
    meanings: ["cover", "shade", "mantle", "capsize", "be ruined"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "壁",
    on: ["ヘキ"],
    kun: ["かべ"],
    source: "",
    meanings: ["wall", "lining (stomach)", "fence"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "癖",
    on: ["ヘキ"],
    kun: ["くせ", "くせに"],
    source: "",
    meanings: ["mannerism", "habit", "vice", "trait", "fault", "kink"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "蔑",
    on: ["ベツ"],
    kun: ["ないがしろ", "なみする", "くらい", "さげすむ"],
    source: "",
    meanings: ["ignore", "despise", "neglect", "ridicule"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "偏",
    on: ["ヘン"],
    kun: ["かたよる"],
    source: "",
    meanings: ["partial", "side", "left-side radical", "inclining", "biased"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "遍",
    on: ["ヘン"],
    kun: ["あまねく"],
    source: "",
    meanings: ["everywhere", "times", "widely", "generally"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "舗",
    on: ["ホ"],
    kun: [],
    source: "",
    meanings: ["shop", "store", "pave"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "捕",
    on: ["ホ"],
    kun: ["とらえる", "とらわれる", "とる", "とらえる", "とらわれる", "つかまえる", "つかまる"],
    source: "",
    meanings: ["catch", "capture"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "穂",
    on: ["スイ"],
    kun: ["ほ"],
    source: "",
    meanings: ["ear", "ear (grain)", "head", "crest (wave)"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "募",
    on: ["ボ"],
    kun: ["つのる"],
    source: "",
    meanings: ["recruit", "campaign", "gather (contributions)", "enlist", "grow violent"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "慕",
    on: ["ボ"],
    kun: ["したう"],
    source: "",
    meanings: ["pining", "yearn for", "love dearly", "adore"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "簿",
    on: ["ボ"],
    kun: [],
    source: "",
    meanings: ["register", "record book"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "倣",
    on: ["ホウ"],
    kun: ["ならう"],
    source: "",
    meanings: ["emulate", "imitate"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "俸",
    on: ["ホウ"],
    kun: [],
    source: "",
    meanings: ["stipend", "salary"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "奉",
    on: ["ホウ", "ブ"],
    kun: ["たてまつる", "まつる", "ほうずる"],
    source: "",
    meanings: ["observance", "offer", "present", "dedicate"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "峰",
    on: ["ホウ"],
    kun: ["みね", "ね"],
    source: "",
    meanings: ["summit", "peak"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "崩",
    on: ["ホウ"],
    kun: ["くずれる", "くずれ", "くずす"],
    source: "",
    meanings: ["crumble", "die", "demolish", "level"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "抱",
    on: ["ホウ"],
    kun: ["だく", "いだく", "かかえる"],
    source: "",
    meanings: ["embrace", "hug", "hold in arms"],
    grade: 8,
    jlpt: 2,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "泡",
    on: ["ホウ"],
    kun: ["あわ"],
    source: "",
    meanings: ["bubbles", "foam", "suds", "froth"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "砲",
    on: ["ホウ"],
    kun: [],
    source: "",
    meanings: ["cannon", "gun"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "縫",
    on: ["ホウ"],
    kun: ["ぬう"],
    source: "",
    meanings: ["sew", "stitch", "embroider"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "胞",
    on: ["ホウ"],
    kun: [],
    source: "",
    meanings: ["placenta", "sac", "sheath"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "芳",
    on: ["ホウ"],
    kun: ["かんばしい"],
    source: "",
    meanings: ["perfume", "balmy", "favorable", "fragrant"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "蜂",
    on: ["ホウ"],
    kun: ["はち"],
    source: "",
    meanings: ["bee", "wasp", "hornet"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "褒",
    on: ["ホウ"],
    kun: ["ほめる"],
    source: "",
    meanings: ["praise", "extol"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "邦",
    on: ["ホウ"],
    kun: ["くに"],
    source: "",
    meanings: ["home country", "country", "Japan"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "飽",
    on: ["ホウ"],
    kun: ["あきる", "あかす", "あく"],
    source: "",
    meanings: ["sated", "tired of", "bored", "satiate"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "乏",
    on: ["ボウ"],
    kun: ["とぼしい", "ともしい"],
    source: "",
    meanings: ["destitution", "scarce", "limited"],
    grade: 8,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "傍",
    on: ["ボウ"],
    kun: ["かたわら", "わき", "おか", "はた", "そば"],
    source: "",
    meanings: ["bystander", "side", "besides", "while", "nearby", "third person"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "剖",
    on: ["ボウ"],
    kun: [],
    source: "",
    meanings: ["divide"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "坊",
    on: ["ボウ", "ボッ"],
    kun: [],
    source: "",
    meanings: ["boy", "priest's residence", "priest"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "妨",
    on: ["ボウ"],
    kun: ["さまたげる"],
    source: "",
    meanings: ["disturb", "prevent", "hamper", "obstruct"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "帽",
    on: ["ボウ", "モウ"],
    kun: ["ずきん", "おおう"],
    source: "",
    meanings: ["cap", "headgear"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "忙",
    on: ["ボウ", "モウ"],
    kun: ["いそがしい", "せわしい", "おそれる", "うれえるさま"],
    source: "",
    meanings: ["busy", "occupied", "restless"],
    grade: 8,
    jlpt: 2,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "房",
    on: ["ボウ"],
    kun: ["ふさ"],
    source: "",
    meanings: ["tassel", "tuft", "fringe", "bunch", "lock (hair)", "segment (orange)", "house", "room"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "某",
    on: ["ボウ"],
    kun: ["それがし", "なにがし"],
    source: "",
    meanings: ["so-and-so", "one", "a certain", "that person"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "冒",
    on: ["ボウ"],
    kun: ["おかす"],
    source: "",
    meanings: ["risk", "face", "defy", "dare", "damage", "assume (a name)"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "紡",
    on: ["ボウ"],
    kun: ["つむぐ"],
    source: "",
    meanings: ["spinning"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "肪",
    on: ["ボウ"],
    kun: [],
    source: "",
    meanings: ["obese", "fat"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "膨",
    on: ["ボウ"],
    kun: ["ふくらむ", "ふくれる"],
    source: "",
    meanings: ["swell", "get fat", "thick"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "謀",
    on: ["ボウ", "ム"],
    kun: ["はかる", "たばかる", "はかりごと"],
    source: "",
    meanings: ["conspire", "cheat", "impose on", "plan", "devise", "scheme", "have in mind", "deceive"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "貌",
    on: ["ボウ", "バク"],
    kun: ["かたち", "かたどる"],
    source: "",
    meanings: ["form", "appearance", "countenance"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "僕",
    on: ["ボク"],
    kun: ["しもべ"],
    source: "",
    meanings: ["me", "I (male)", "servant", "manservant"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "墨",
    on: ["ボク"],
    kun: ["すみ"],
    source: "",
    meanings: ["black ink", "India ink", "ink stick", "Mexico"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "撲",
    on: ["ボク"],
    kun: [],
    source: "",
    meanings: ["slap", "strike", "hit", "beat", "tell", "speak"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "朴",
    on: ["ボク"],
    kun: ["ほう", "ほお", "えのき"],
    source: "",
    meanings: ["crude", "simple", "plain", "docile"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "睦",
    on: ["ボク", "モク"],
    kun: ["むつまじい", "むつむ", "むつぶ"],
    source: "",
    meanings: ["intimate", "friendly", "harmonious"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "勃",
    on: ["ボツ", "ホツ"],
    kun: ["おこる", "にわかに"],
    source: "",
    meanings: ["suddenness", "rise"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "没",
    on: ["ボツ", "モツ"],
    kun: ["おぼれる", "しずむ", "ない"],
    source: "",
    meanings: ["drown", "sink", "hide", "fall into", "disappear", "die"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "堀",
    on: ["クツ"],
    kun: ["ほり"],
    source: "",
    meanings: ["ditch", "moat", "canal"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "奔",
    on: ["ホン"],
    kun: ["はしる"],
    source: "",
    meanings: ["run", "bustle"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "翻",
    on: ["ホン", "ハン"],
    kun: ["ひるがえる", "ひるがえす"],
    source: "",
    meanings: ["flip", "turn over", "wave", "flutter", "change (mind)"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "凡",
    on: ["ボン", "ハン"],
    kun: ["およそ", "おうよそ", "すべて"],
    source: "",
    meanings: ["commonplace", "ordinary", "mediocre"],
    grade: 8,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "盆",
    on: ["ボン"],
    kun: [],
    source: "",
    meanings: ["basin", "lantern festival", "tray"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "摩",
    on: ["マ"],
    kun: ["まする", "さする", "する"],
    source: "",
    meanings: ["chafe", "rub", "polish", "grind", "scrape"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "磨",
    on: ["マ"],
    kun: ["みがく", "する"],
    source: "",
    meanings: ["grind", "polish", "scour", "improve", "brush (teeth)"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "魔",
    on: ["マ"],
    kun: [],
    source: "",
    meanings: ["witch", "demon", "evil spirit"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "麻",
    on: ["マ", "マア"],
    kun: ["あさ"],
    source: "",
    meanings: ["hemp", "flax", "numb"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "埋",
    on: ["マイ"],
    kun: ["うめる", "うまる", "うもれる", "うずめる", "うずまる", "いける"],
    source: "",
    meanings: ["bury", "be filled up", "embedded"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "昧",
    on: ["マイ", "バイ"],
    kun: ["くらい", "むさぼる"],
    source: "",
    meanings: ["dark", "foolish"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "膜",
    on: ["マク"],
    kun: [],
    source: "",
    meanings: ["membrane"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "枕",
    on: ["チン", "シン"],
    kun: ["まくら"],
    source: "",
    meanings: ["pillow"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "又",
    on: ["ユウ"],
    kun: ["また", "また", "またの"],
    source: "",
    meanings: ["or again", "furthermore", "on the other hand"],
    grade: 8,
    jlpt: 1,
    strokes: 2,
    examples: [],
    tags: []
  },
  {
    name: "抹",
    on: ["マツ"],
    kun: [],
    source: "",
    meanings: ["rub", "paint", "erase"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "繭",
    on: ["ケン"],
    kun: ["まゆ", "きぬ"],
    source: "",
    meanings: ["cocoon"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "慢",
    on: ["マン"],
    kun: [],
    source: "",
    meanings: ["ridicule", "laziness"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "漫",
    on: ["マン"],
    kun: ["みだりに", "そぞろ"],
    source: "",
    meanings: ["cartoon", "involuntarily", "unrestrained", "in spite of oneself", "corrupt"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "魅",
    on: ["ミ"],
    kun: [],
    source: "",
    meanings: ["fascination", "charm", "bewitch"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "岬",
    on: ["コウ"],
    kun: ["みさき"],
    source: "",
    meanings: ["headland", "cape", "spit", "promontory"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "蜜",
    on: ["ミツ", "ビツ"],
    kun: [],
    source: "",
    meanings: ["honey", "nectar", "molasses"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "妙",
    on: ["ミョウ", "ビョウ"],
    kun: ["たえ"],
    source: "",
    meanings: ["exquisite", "strange", "queer", "mystery", "miracle", "excellent", "delicate", "charming"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "眠",
    on: ["ミン"],
    kun: ["ねむる", "ねむい"],
    source: "",
    meanings: ["sleep", "die", "sleepy"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "矛",
    on: ["ム", "ボウ"],
    kun: ["ほこ"],
    source: "",
    meanings: ["halberd", "arms", "festival float"],
    grade: 8,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "霧",
    on: ["ム", "ボウ", "ブ"],
    kun: ["きり"],
    source: "",
    meanings: ["fog", "mist"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "婿",
    on: ["セイ"],
    kun: ["むこ"],
    source: "",
    meanings: ["bridegroom", "son-in-law"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "娘",
    on: ["ジョウ"],
    kun: ["むすめ", "こ"],
    source: "",
    meanings: ["daughter", "girl"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "冥",
    on: ["メイ", "ミョウ"],
    kun: ["くらい"],
    source: "",
    meanings: ["dark"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "銘",
    on: ["メイ"],
    kun: [],
    source: "",
    meanings: ["inscription", "signature (of artisan)"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "滅",
    on: ["メツ"],
    kun: ["ほろびる", "ほろぶ", "ほろぼす"],
    source: "",
    meanings: ["destroy", "ruin", "overthrow", "perish"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "免",
    on: ["メン"],
    kun: ["まぬかれる", "まぬがれる"],
    source: "",
    meanings: ["excuse", "dismissal"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "麺",
    on: ["メン", "ベン"],
    kun: ["むぎこ"],
    source: "",
    meanings: ["noodles", "wheat flour"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "茂",
    on: ["モ"],
    kun: ["しげる"],
    source: "",
    meanings: ["overgrown", "grow thick", "be luxuriant"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "妄",
    on: ["モウ", "ボウ"],
    kun: ["みだりに"],
    source: "",
    meanings: ["delusion", "unnecessarily", "without authority", "reckless"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "猛",
    on: ["モウ"],
    kun: [],
    source: "",
    meanings: ["fierce", "rave", "rush", "become furious", "wildness", "strength"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "盲",
    on: ["モウ"],
    kun: ["めくら"],
    source: "",
    meanings: ["blind", "blind man", "ignoramus"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "網",
    on: ["モウ"],
    kun: ["あみ"],
    source: "",
    meanings: ["netting", "network"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "耗",
    on: ["モウ", "コウ"],
    kun: [],
    source: "",
    meanings: ["decrease"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "黙",
    on: ["モク", "ボク"],
    kun: ["だまる", "もだす"],
    source: "",
    meanings: ["silence", "become silent", "stop speaking", "leave as is"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "餅",
    on: ["ヘイ", "ヒョウ"],
    kun: ["もち", "もちい"],
    source: "",
    meanings: ["mochi rice cake"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "戻",
    on: ["レイ"],
    kun: ["もどす", "もどる"],
    source: "",
    meanings: ["re-", "return", "revert", "resume", "restore", "go backwards"],
    grade: 8,
    jlpt: 2,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "紋",
    on: ["モン"],
    kun: [],
    source: "",
    meanings: ["family crest", "figures"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "冶",
    on: ["ヤ"],
    kun: ["いる"],
    source: "",
    meanings: ["melting", "smelting"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "弥",
    on: ["ミ", "ビ"],
    kun: ["や", "いや", "いよいよ", "わたる"],
    source: "",
    meanings: ["all the more", "increasingly"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "厄",
    on: ["ヤク"],
    kun: [],
    source: "",
    meanings: ["unlucky", "misfortune", "bad luck", "disaster"],
    grade: 8,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "躍",
    on: ["ヤク"],
    kun: ["おどる"],
    source: "",
    meanings: ["leap", "dance", "skip"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "柳",
    on: ["リュウ"],
    kun: ["やなぎ"],
    source: "",
    meanings: ["willow"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "愉",
    on: ["ユ"],
    kun: ["たのしい", "たのしむ"],
    source: "",
    meanings: ["pleasure", "happy", "rejoice"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "癒",
    on: ["ユ"],
    kun: ["いえる", "いやす", "いやす"],
    source: "",
    meanings: ["healing", "cure", "quench (thirst)", "wreak"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "諭",
    on: ["ユ"],
    kun: ["さとす"],
    source: "",
    meanings: ["rebuke", "admonish", "charge", "warn", "persuade"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "唯",
    on: ["ユイ", "イ"],
    kun: ["ただ"],
    source: "",
    meanings: ["solely", "only", "merely", "simply"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "幽",
    on: ["ユウ"],
    kun: ["ふかい", "かすか", "くらい", "しろい"],
    source: "",
    meanings: ["seclude", "confine to a room", "deep", "profound", "secluded", "faint", "dark", "tranquil", "calm"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "悠",
    on: ["ユウ"],
    kun: [],
    source: "",
    meanings: ["permanence", "distant", "long time", "leisure"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "憂",
    on: ["ユウ"],
    kun: ["うれえる", "うれい", "うい", "うき"],
    source: "",
    meanings: ["melancholy", "grieve", "lament", "be anxious", "sad", "unhappy"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "湧",
    on: ["ユウ", "ヨウ", "ユ"],
    kun: ["わく"],
    source: "",
    meanings: ["boil", "ferment", "seethe", "uproar", "breed"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "猶",
    on: ["ユウ", "ユ"],
    kun: ["なお"],
    source: "",
    meanings: ["furthermore", "still", "yet"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "裕",
    on: ["ユウ"],
    kun: [],
    source: "",
    meanings: ["abundant", "rich", "fertile"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "誘",
    on: ["ユウ"],
    kun: ["さそう", "いざなう"],
    source: "",
    meanings: ["entice", "lead", "tempt", "invite", "ask", "call for", "seduce", "allure"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "雄",
    on: ["ユウ"],
    kun: ["お", "おす", "おん"],
    source: "",
    meanings: ["masculine", "male", "hero", "leader", "superiority", "excellence"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "融",
    on: ["ユウ"],
    kun: ["とける", "とかす"],
    source: "",
    meanings: ["dissolve", "melt"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "与",
    on: ["ヨ"],
    kun: ["あたえる", "あずかる", "くみする", "ともに"],
    source: "",
    meanings: ["bestow", "participate in", "give", "award", "impart", "provide", "cause", "gift", "godsend"],
    grade: 8,
    jlpt: 2,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "誉",
    on: ["ヨ"],
    kun: ["ほまれ", "ほめる"],
    source: "",
    meanings: ["reputation", "praise", "honor", "glory"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "妖",
    on: ["ヨウ"],
    kun: ["あやしい", "なまめく", "わざわい"],
    source: "",
    meanings: ["attractive", "bewitching", "calamity"],
    grade: 8,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "庸",
    on: ["ヨウ"],
    kun: [],
    source: "",
    meanings: ["commonplace", "ordinary", "employment"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "揚",
    on: ["ヨウ"],
    kun: ["あげる", "あげ", "あがる"],
    source: "",
    meanings: ["raise", "elevate", "hoist", "praise", "extol", "fry in deep fat"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "揺",
    on: ["ヨウ"],
    kun: ["ゆれる", "ゆる", "ゆらぐ", "ゆるぐ", "ゆする", "ゆさぶる", "ゆすぶる", "うごく"],
    source: "",
    meanings: ["swing", "shake", "sway", "rock", "tremble", "vibrate"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "擁",
    on: ["ヨウ"],
    kun: [],
    source: "",
    meanings: ["hug", "embrace", "possess", "protect", "lead"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "溶",
    on: ["ヨウ"],
    kun: ["とける", "とかす", "とく"],
    source: "",
    meanings: ["melt", "dissolve", "thaw"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "窯",
    on: ["ヨウ"],
    kun: ["かま"],
    source: "",
    meanings: ["kiln", "oven", "furnace"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "謡",
    on: ["ヨウ"],
    kun: ["うたい", "うたう"],
    source: "",
    meanings: ["song", "sing", "ballad", "noh chanting"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "踊",
    on: ["ヨウ"],
    kun: ["おどる"],
    source: "",
    meanings: ["jump", "dance", "leap", "skip"],
    grade: 8,
    jlpt: 2,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "抑",
    on: ["ヨク"],
    kun: ["おさえる"],
    source: "",
    meanings: ["repress", "well", "now", "in the first place", "push", "shove", "press", "seal", "do in spite of"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "沃",
    on: ["ヨウ", "ヨク", "オク"],
    kun: ["そそぐ"],
    source: "",
    meanings: ["fertility"],
    grade: 8,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "翼",
    on: ["ヨク"],
    kun: ["つばさ"],
    source: "",
    meanings: ["wing", "plane", "flank"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "羅",
    on: ["ラ"],
    kun: ["うすもの"],
    source: "",
    meanings: ["gauze", "thin silk", "Rome", "arrange", "spread out"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "裸",
    on: ["ラ"],
    kun: ["はだか"],
    source: "",
    meanings: ["naked", "nude", "uncovered", "partially clothed"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "頼",
    on: ["ライ"],
    kun: ["たのむ", "たのもしい", "たよる"],
    source: "",
    meanings: ["trust", "request"],
    grade: 8,
    jlpt: 2,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "雷",
    on: ["ライ"],
    kun: ["かみなり", "いかずち", "いかづち"],
    source: "",
    meanings: ["thunder", "lightning bolt"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "絡",
    on: ["ラク"],
    kun: ["からむ", "からまる"],
    source: "",
    meanings: ["entwine", "coil around", "get caught in"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "酪",
    on: ["ラク"],
    kun: [],
    source: "",
    meanings: ["dairy products", "whey", "broth", "fruit juice"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "嵐",
    on: ["ラン"],
    kun: ["あらし"],
    source: "",
    meanings: ["storm", "tempest"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "欄",
    on: ["ラン"],
    kun: ["てすり"],
    source: "",
    meanings: ["column", "handrail", "blank", "space"],
    grade: 8,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "濫",
    on: ["ラン"],
    kun: ["みだりに", "みだりがましい"],
    source: "",
    meanings: ["excessive", "overflow", "spread out"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "藍",
    on: ["ラン"],
    kun: ["あい"],
    source: "",
    meanings: ["indigo"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "吏",
    on: ["リ"],
    kun: [],
    source: "",
    meanings: ["officer", "an official"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "履",
    on: ["リ"],
    kun: ["はく"],
    source: "",
    meanings: ["perform", "complete", "footgear", "shoes", "boots", "put on (the feet)"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "璃",
    on: ["リ"],
    kun: [],
    source: "",
    meanings: ["glassy", "lapis lazuli"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "痢",
    on: ["リ"],
    kun: [],
    source: "",
    meanings: ["diarrhea"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "離",
    on: ["リ"],
    kun: ["はなれる", "はなす"],
    source: "",
    meanings: ["detach", "separation", "disjoin", "digress"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "硫",
    on: ["リュウ"],
    kun: [],
    source: "",
    meanings: ["sulphur"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "粒",
    on: ["リュウ"],
    kun: ["つぶ"],
    source: "",
    meanings: ["grains", "drop", "counter for tiny particles"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "隆",
    on: ["リュウ"],
    kun: [],
    source: "",
    meanings: ["hump", "high", "noble", "prosperity"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "竜",
    on: ["リュウ", "リョウ", "ロウ"],
    kun: ["たつ", "いせ"],
    source: "",
    meanings: ["dragon", "imperial"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "侶",
    on: ["リョ", "ロ"],
    kun: ["とも"],
    source: "",
    meanings: ["companion", "follower"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "慮",
    on: ["リョ"],
    kun: ["おもんぱくる", "おもんぱかる"],
    source: "",
    meanings: ["prudence", "thought", "concern", "consider", "deliberate", "fear"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "虜",
    on: ["リョ", "ロ"],
    kun: ["とりこ", "とりく"],
    source: "",
    meanings: ["captive", "barbarian", "low epithet for the enemy"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "了",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["complete", "finish"],
    grade: 8,
    jlpt: 2,
    strokes: 2,
    examples: [],
    tags: []
  },
  {
    name: "僚",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["colleague", "official", "companion"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "寮",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["dormitory", "hostel", "villa", "tea pavillion"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "涼",
    on: ["リョウ"],
    kun: ["すずしい", "すずむ", "すずやか", "うすい", "ひやす", "まことに"],
    source: "",
    meanings: ["refreshing", "nice and cool"],
    grade: 8,
    jlpt: 2,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "猟",
    on: ["リョウ"],
    kun: ["かり", "かる"],
    source: "",
    meanings: ["game-hunting", "shooting", "game", "bag"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "療",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["heal", "cure"],
    grade: 8,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "瞭",
    on: ["リョウ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["clear"],
    grade: 8,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "糧",
    on: ["リョウ", "ロウ"],
    kun: ["かて"],
    source: "",
    meanings: ["provisions", "food", "bread"],
    grade: 8,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "陵",
    on: ["リョウ"],
    kun: ["みささぎ"],
    source: "",
    meanings: ["mausoleum", "imperial tomb", "mound", "hill"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "倫",
    on: ["リン"],
    kun: [],
    source: "",
    meanings: ["ethics", "companion"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "厘",
    on: ["リン"],
    kun: [],
    source: "",
    meanings: ["rin", "1/10 sen", "1/10 bu"],
    grade: 8,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "隣",
    on: ["リン"],
    kun: ["となる", "となり"],
    source: "",
    meanings: ["neighboring"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "瑠",
    on: ["ル", "リュウ"],
    kun: [],
    source: "",
    meanings: ["lapis lazuli"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "塁",
    on: ["ルイ", "ライ", "スイ"],
    kun: ["とりで"],
    source: "",
    meanings: ["bases", "fort", "rampart", "walls", "base(ball)"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "涙",
    on: ["ルイ", "レイ"],
    kun: ["なみだ"],
    source: "",
    meanings: ["tears", "sympathy"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "累",
    on: ["ルイ"],
    kun: [],
    source: "",
    meanings: ["accumulate", "involvement", "trouble", "tie up", "continually"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "励",
    on: ["レイ"],
    kun: ["はげむ", "はげます"],
    source: "",
    meanings: ["encourage", "be diligent", "inspire"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "鈴",
    on: ["レイ", "リン"],
    kun: ["すず"],
    source: "",
    meanings: ["small bell", "buzzer"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "隷",
    on: ["レイ"],
    kun: ["したがう", "しもべ"],
    source: "",
    meanings: ["slave", "servant", "prisoner", "criminal", "follower"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "零",
    on: ["レイ"],
    kun: ["ぜろ", "こぼす", "こぼれる"],
    source: "",
    meanings: ["zero", "spill", "overflow", "nothing", "cipher"],
    grade: 8,
    jlpt: 2,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "霊",
    on: ["レイ", "リョウ"],
    kun: ["たま"],
    source: "",
    meanings: ["spirits", "soul"],
    grade: 8,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "麗",
    on: ["レイ"],
    kun: ["うるわしい", "うららか"],
    source: "",
    meanings: ["lovely", "beautiful", "graceful", "resplendent"],
    grade: 8,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "齢",
    on: ["レイ"],
    kun: ["よわい", "とし"],
    source: "",
    meanings: ["age"],
    grade: 8,
    jlpt: 2,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "暦",
    on: ["レキ", "リャク"],
    kun: ["こよみ"],
    source: "",
    meanings: ["calendar", "almanac"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "劣",
    on: ["レツ"],
    kun: ["おとる"],
    source: "",
    meanings: ["inferiority", "be inferior to", "be worse"],
    grade: 8,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "烈",
    on: ["レツ"],
    kun: ["はげしい"],
    source: "",
    meanings: ["ardent", "violent", "vehement", "furious", "severe", "extreme"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "裂",
    on: ["レツ"],
    kun: ["さく", "さける", "ぎれ"],
    source: "",
    meanings: ["split", "rend", "tear"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "廉",
    on: ["レン"],
    kun: [],
    source: "",
    meanings: [
      "bargain",
      "reason",
      "charge",
      "suspicion",
      "point",
      "account",
      "purity",
      "honest",
      "low price",
      "cheap",
      "rested",
      "contented",
      "peaceful"
    ],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "恋",
    on: ["レン"],
    kun: ["こう", "こい", "こいしい"],
    source: "",
    meanings: ["romance", "in love", "yearn for", "miss", "darling"],
    grade: 8,
    jlpt: 2,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "錬",
    on: ["レン"],
    kun: ["ねる"],
    source: "",
    meanings: ["tempering", "refine", "drill", "train", "polish"],
    grade: 8,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "呂",
    on: ["ロ", "リョ"],
    kun: ["せぼね"],
    source: "",
    meanings: ["spine", "backbone"],
    grade: 8,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "炉",
    on: ["ロ"],
    kun: ["いろり"],
    source: "",
    meanings: ["hearth", "furnace", "kiln", "reactor"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "賂",
    on: ["ロ"],
    kun: ["まいない", "まいなう"],
    source: "",
    meanings: ["bribe"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "露",
    on: ["ロ", "ロウ"],
    kun: ["つゆ"],
    source: "",
    meanings: ["dew", "tears", "expose", "Russia"],
    grade: 8,
    jlpt: 1,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "廊",
    on: ["ロウ"],
    kun: [],
    source: "",
    meanings: ["corridor", "hall", "tower"],
    grade: 8,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "弄",
    on: ["ロウ", "ル"],
    kun: ["いじくる", "ろうする", "いじる", "ひねくる", "たわむれる", "もてあそぶ"],
    source: "",
    meanings: ["play with", "tamper", "trifle with"],
    grade: 8,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "楼",
    on: ["ロウ"],
    kun: ["たかどの"],
    source: "",
    meanings: ["watchtower", "lookout", "high building"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "浪",
    on: ["ロウ"],
    kun: [],
    source: "",
    meanings: ["wandering", "waves", "billows", "reckless", "unrestrained"],
    grade: 8,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "漏",
    on: ["ロウ"],
    kun: ["もる", "もれる", "もらす"],
    source: "",
    meanings: ["leak", "escape", "time"],
    grade: 8,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "郎",
    on: ["ロウ", "リョウ"],
    kun: ["おとこ"],
    source: "",
    meanings: ["son", "counter for sons"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "麓",
    on: ["ロク"],
    kun: ["ふもと"],
    source: "",
    meanings: ["foot of a mountain"],
    grade: 8,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "賄",
    on: ["ワイ"],
    kun: ["まかなう"],
    source: "",
    meanings: ["bribe", "board", "supply", "finance"],
    grade: 8,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "脇",
    on: ["キョウ"],
    kun: ["わき", "わけ"],
    source: "",
    meanings: ["armpit", "the other way", "another place", "flank", "supporting role"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "惑",
    on: ["ワク"],
    kun: ["まどう"],
    source: "",
    meanings: ["beguile", "delusion", "perplexity"],
    grade: 8,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "枠",
    on: [],
    kun: ["わく"],
    source: "",
    meanings: ["frame", "framework", "spindle", "spool", "bounding-box", "(kokuji)"],
    grade: 8,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "湾",
    on: ["ワン"],
    kun: ["いりえ"],
    source: "",
    meanings: ["gulf", "bay", "inlet"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "腕",
    on: ["ワン"],
    kun: ["うで"],
    source: "",
    meanings: ["arm", "ability", "talent"],
    grade: 8,
    jlpt: 2,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "丼",
    on: ["トン", "タン", "ショウ", "セイ"],
    kun: ["どんぶり"],
    source: "",
    meanings: ["bowl", "bowl of food"],
    grade: 8,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "傲",
    on: ["ゴウ"],
    kun: ["おごる", "あなどる"],
    source: "",
    meanings: ["be proud"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "刹",
    on: ["セチ", "セツ", "サツ"],
    kun: [],
    source: "",
    meanings: ["temple"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "哺",
    on: ["ホ"],
    kun: ["はぐくむ", "ふくむ"],
    source: "",
    meanings: ["nurse", "suckle"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "喩",
    on: ["ユ"],
    kun: ["たとえる", "さとす"],
    source: "",
    meanings: ["metaphor", "compare"],
    grade: 8,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "嗅",
    on: ["キュウ"],
    kun: ["かぐ"],
    source: "",
    meanings: ["smell", "sniff", "scent"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "嘲",
    on: ["チョウ", "トウ"],
    kun: ["あざける"],
    source: "",
    meanings: ["ridicule", "insult"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "毀",
    on: ["キ"],
    kun: ["こぼつ", "こわす", "こぼれる", "こわれる", "そしる", "やぶる"],
    source: "",
    meanings: ["break", "destroy", "censure", "be chipped", "be scratched", "be broken", "be ruined"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "彙",
    on: ["イ"],
    kun: ["はりねずみ"],
    source: "",
    meanings: ["same kind", "collect", "classify", "category", "hedgehog"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "恣",
    on: ["シ"],
    kun: ["ほしいまま"],
    source: "",
    meanings: ["selfish", "arbitrary"],
    grade: 8,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "惧",
    on: ["ク", "グ"],
    kun: ["おそれる"],
    source: "",
    meanings: ["fear", "be afraid of", "dread"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "慄",
    on: ["リツ"],
    kun: ["ふるえる", "おそれる", "おののく"],
    source: "",
    meanings: ["fear"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "憬",
    on: ["ケイ"],
    kun: ["あこがれる"],
    source: "",
    meanings: ["yearn for", "aspire to", "admire"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "拉",
    on: ["ラツ", "ラ", "ロウ"],
    kun: ["らっする", "ひしぐ", "くだく"],
    source: "",
    meanings: ["Latin", "kidnap", "crush"],
    grade: 8,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "摯",
    on: ["シ"],
    kun: ["いたる"],
    source: "",
    meanings: ["gift", "seriousness"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "曖",
    on: ["アイ"],
    kun: ["くらい"],
    source: "",
    meanings: ["dark", "not clear"],
    grade: 8,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "楷",
    on: ["カイ"],
    kun: [],
    source: "",
    meanings: ["square character style", "correctness"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "鬱",
    on: ["ウツ"],
    kun: ["うっする", "ふさぐ", "しげる"],
    source: "",
    meanings: ["gloom", "depression", "melancholy", "luxuriant"],
    grade: 8,
    jlpt: null,
    strokes: 29,
    examples: [],
    tags: []
  },
  {
    name: "璧",
    on: ["ヘキ"],
    kun: ["たま"],
    source: "",
    meanings: ["sphere", "ball"],
    grade: 8,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "瘍",
    on: ["ヨウ"],
    kun: ["かさ"],
    source: "",
    meanings: ["swelling", "boil", "tumor"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "箋",
    on: ["セン"],
    kun: ["ふだ"],
    source: "",
    meanings: ["paper", "label", "letter", "composition"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "籠",
    on: ["ロウ", "ル"],
    kun: ["かご", "こめる", "こもる", "こむ"],
    source: "",
    meanings: ["basket", "devote oneself", "seclude oneself", "cage", "coop", "implied"],
    grade: 8,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "緻",
    on: ["チ"],
    kun: ["こまかい"],
    source: "",
    meanings: ["fine (i.e. not coarse)"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "羞",
    on: ["シュウ"],
    kun: ["はじる", "すすめる", "はずかしい"],
    source: "",
    meanings: ["feel ashamed"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "訃",
    on: ["フ"],
    kun: ["しらせ"],
    source: "",
    meanings: ["obituary"],
    grade: 8,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "諧",
    on: ["カイ"],
    kun: ["かなう", "やわらぐ"],
    source: "",
    meanings: ["harmony"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "貪",
    on: ["タン", "ドン", "トン"],
    kun: ["むさぼる"],
    source: "",
    meanings: ["covet", "indulge in"],
    grade: 8,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "踪",
    on: ["ソウ", "ショウ"],
    kun: ["あと"],
    source: "",
    meanings: ["remains", "clue", "footprint"],
    grade: 8,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "辣",
    on: ["ラツ"],
    kun: ["からい"],
    source: "",
    meanings: ["pungent", "spicy", "harsh", "cruel", "severe"],
    grade: 8,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "錮",
    on: ["コ"],
    kun: ["ふさぐ"],
    source: "",
    meanings: ["confinement", "to tie"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "塡",
    on: ["テン", "チン"],
    kun: ["はまる", "うずめる", "はめる", "ふさぐ"],
    source: "",
    meanings: ["fill in", "fill up", "make good"],
    grade: 8,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "頰",
    on: ["キョウ"],
    kun: ["ほお", "ほほ"],
    source: "",
    meanings: ["cheeks", "jaw"],
    grade: 8,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "娃",
    on: ["ア", "アイ", "ワ"],
    kun: ["うつくしい"],
    source: "",
    meanings: ["beautiful"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "阿",
    on: ["ア", "オ"],
    kun: ["おもねる", "くま"],
    source: "",
    meanings: ["Africa", "flatter", "fawn upon", "corner", "nook", "recess"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "逢",
    on: ["ホウ"],
    kun: ["あう", "むかえる"],
    source: "",
    meanings: ["meeting", "tryst", "date", "rendezvous"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "葵",
    on: ["キ"],
    kun: ["あおい"],
    source: "",
    meanings: ["hollyhock"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "茜",
    on: ["セン"],
    kun: ["あかね"],
    source: "",
    meanings: ["madder", "red dye", "Turkey red"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "渥",
    on: ["アク"],
    kun: ["あつい", "うるおう"],
    source: "",
    meanings: ["kindness", "moisten"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "旭",
    on: ["キョク"],
    kun: ["あさひ"],
    source: "",
    meanings: ["rising sun", "morning sun"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "葦",
    on: ["イ"],
    kun: ["あし", "よし", "しおれる", "しなびる", "しぼむ", "なえる"],
    source: "",
    meanings: ["reed", "bullrush"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "芦",
    on: ["ロ"],
    kun: ["あし", "よし"],
    source: "",
    meanings: ["reed", "bullrush"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "梓",
    on: ["シ"],
    kun: ["あずさ"],
    source: "",
    meanings: ["catalpa tree", "woodblock printing"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "斡",
    on: ["アツ", "カン", "ワツ"],
    kun: ["めぐる", "めぐらす"],
    source: "",
    meanings: ["go around", "rule", "administer"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "絢",
    on: ["ケン"],
    kun: [],
    source: "",
    meanings: ["brilliant fabric design"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "綾",
    on: ["リン"],
    kun: ["あや"],
    source: "",
    meanings: ["design", "figured cloth", "twill"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鮎",
    on: ["デン", "ネン"],
    kun: ["あゆ", "なまず"],
    source: "",
    meanings: ["freshwater trout", "smelt"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "或",
    on: ["ワク", "コク", "イキ"],
    kun: ["ある", "あるい", "あるいは"],
    source: "",
    meanings: ["some", "one", "or", "possibly", "a certain"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "粟",
    on: ["ゾク", "ショク", "ソク"],
    kun: ["あわ", "もみ"],
    source: "",
    meanings: ["millet"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "庵",
    on: ["アン"],
    kun: ["いおり", "いお"],
    source: "",
    meanings: ["hermitage", "retreat"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "按",
    on: ["アン"],
    kun: ["おさえる", "しらべる"],
    source: "",
    meanings: ["hold", "consider", "investigate"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鞍",
    on: ["アン"],
    kun: ["くら"],
    source: "",
    meanings: ["saddle"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "杏",
    on: ["キョウ", "アン", "コウ"],
    kun: ["あんず"],
    source: "",
    meanings: ["apricot"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "伊",
    on: ["イ"],
    kun: ["かれ"],
    source: "",
    meanings: ["Italy", "that one"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "夷",
    on: ["イ"],
    kun: ["えびす", "えみし", "ころす", "たいらげる"],
    source: "",
    meanings: ["barbarian", "savage", "Ainu"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "惟",
    on: ["イ", "ユイ"],
    kun: ["おもんみる", "これ", "おもうに"],
    source: "",
    meanings: ["consider", "reflect", "think"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "謂",
    on: ["イ"],
    kun: ["いう", "いい", "おもう", "いわゆる"],
    source: "",
    meanings: ["reason", "origin", "history", "oral tradition"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "亥",
    on: ["ガイ", "カイ"],
    kun: ["い"],
    source: "",
    meanings: ["sign of the hog", "9-11PM", "twelfth sign of the Chinese zodiac"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "郁",
    on: ["イク"],
    kun: [],
    source: "",
    meanings: ["cultural progress", "perfume"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "磯",
    on: ["キ"],
    kun: ["いそ"],
    source: "",
    meanings: ["seashore", "beach"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "溢",
    on: ["イツ"],
    kun: ["こぼれる", "あふれる", "みちる"],
    source: "",
    meanings: ["overflow", "inundate", "spill"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "鰯",
    on: [],
    kun: ["いわし"],
    source: "",
    meanings: ["sardine", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "允",
    on: ["イン"],
    kun: ["じょう", "まことに", "ゆるす"],
    source: "",
    meanings: ["license", "sincerity", "permit"],
    grade: 9,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "胤",
    on: ["イン"],
    kun: ["たね"],
    source: "",
    meanings: ["descendent", "issue", "offspring"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "蔭",
    on: ["イン", "オン"],
    kun: ["かげ"],
    source: "",
    meanings: ["shade", "shadow", "backing assistance"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "烏",
    on: ["ウ", "オ"],
    kun: ["からす", "いずくんぞ", "なんぞ"],
    source: "",
    meanings: ["crow", "raven"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "迂",
    on: ["ウ"],
    kun: [],
    source: "",
    meanings: ["roundabout way"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "卯",
    on: ["ボウ", "モウ"],
    kun: ["う"],
    source: "",
    meanings: ["sign of the hare or rabbit", "fourth sign of Chinese zodiac", "5-7AM", "east"],
    grade: 9,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "鵜",
    on: ["テイ", "ダイ"],
    kun: ["う"],
    source: "",
    meanings: ["cormorant"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "窺",
    on: ["キ"],
    kun: ["うかがう", "のぞく"],
    source: "",
    meanings: ["lie in wait", "spy on", "reconnoiter"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "丑",
    on: ["チュウ"],
    kun: ["うし"],
    source: "",
    meanings: ["sign of the ox or cow", "1-3AM", "second sign of Chinese zodiac"],
    grade: 9,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "碓",
    on: ["カク", "タイ"],
    kun: ["たしか", "かくたる"],
    source: "",
    meanings: ["pestle"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "姥",
    on: ["ボ", "モ"],
    kun: ["うば"],
    source: "",
    meanings: ["old woman"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "厩",
    on: ["キュウ"],
    kun: ["うまや"],
    source: "",
    meanings: ["barn", "stable"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "瓜",
    on: ["カ", "ケ"],
    kun: ["うり"],
    source: "",
    meanings: ["melon"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "閏",
    on: ["ジュン"],
    kun: ["うるう"],
    source: "",
    meanings: ["intercalation", "illegitimate throne"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "噂",
    on: ["ソン"],
    kun: ["うわさ"],
    source: "",
    meanings: ["rumor", "gossip", "hearsay"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "云",
    on: ["ウン"],
    kun: ["いう", "ここに"],
    source: "",
    meanings: ["say"],
    grade: 9,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "叡",
    on: ["エイ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["intelligence", "imperial"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "曳",
    on: ["エイ"],
    kun: ["ひく"],
    source: "",
    meanings: ["pull", "tug", "jerk", "admit", "install", "quote", "refer to"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "瑛",
    on: ["エイ"],
    kun: [],
    source: "",
    meanings: ["sparkle of jewelry", "crystal"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "榎",
    on: ["カ"],
    kun: ["えのき"],
    source: "",
    meanings: ["lotus tree", "nettle tree", "hackberry"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "堰",
    on: ["エン"],
    kun: ["せき", "せく"],
    source: "",
    meanings: ["dam", "prevent", "stop up"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "奄",
    on: ["エン"],
    kun: ["おおう", "たちまち"],
    source: "",
    meanings: ["cover", "suffocate", "obstruct"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "燕",
    on: ["エン"],
    kun: ["つばめ", "つばくら", "つばくろ"],
    source: "",
    meanings: ["swallow (bird)"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "苑",
    on: ["エン", "オン"],
    kun: ["その", "うつ"],
    source: "",
    meanings: ["garden", "farm", "park"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "於",
    on: ["オ", "ヨ"],
    kun: ["おいて", "おける", "ああ", "より"],
    source: "",
    meanings: ["at", "in", "on", "as for"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "甥",
    on: ["セイ", "ソウ", "ショウ"],
    kun: ["おい", "むこ"],
    source: "",
    meanings: ["nephew"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "襖",
    on: ["オウ"],
    kun: ["ふすま", "あお"],
    source: "",
    meanings: ["opaque sliding door"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "荻",
    on: ["テキ"],
    kun: ["おぎ"],
    source: "",
    meanings: ["reed", "rush"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "桶",
    on: ["ヨウ", "トウ"],
    kun: ["おけ"],
    source: "",
    meanings: ["tub", "bucket"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "牡",
    on: ["ボ", "ボウ"],
    kun: ["おす", "お", "おん"],
    source: "",
    meanings: ["male"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "伽",
    on: ["カ", "ガ", "キャ", "ギャ"],
    kun: ["とぎ"],
    source: "",
    meanings: ["nursing", "attending", "entertainer"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "嘉",
    on: ["カ"],
    kun: ["よみする", "よい"],
    source: "",
    meanings: ["applaud", "praise", "esteem", "happy", "auspicious"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "珂",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["jewel"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "禾",
    on: ["カ"],
    kun: ["いね"],
    source: "",
    meanings: ["two-branch tree radical (no. 115)"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "茄",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: ["eggplant"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "蝦",
    on: ["カ", "ゲ"],
    kun: ["えび"],
    source: "",
    meanings: ["shrimp", "prawn", "lobster"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "嘩",
    on: ["カ", "ケ"],
    kun: ["かまびすしい"],
    source: "",
    meanings: ["noisy"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "迦",
    on: ["カ", "ケ"],
    kun: [],
    source: "",
    meanings: ["(used phonetically)"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "霞",
    on: ["カ", "ゲ"],
    kun: ["かすみ", "かすむ"],
    source: "",
    meanings: ["be hazy", "grow dim", "blurred"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "俄",
    on: ["ガ"],
    kun: ["にわか"],
    source: "",
    meanings: ["sudden", "abrupt", "improvised"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "峨",
    on: ["ガ"],
    kun: ["けわしい"],
    source: "",
    meanings: ["high mountain"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "臥",
    on: ["ガ"],
    kun: ["ふせる", "ふせる", "ふす"],
    source: "",
    meanings: ["bend down", "bow", "lie prostrate"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "駕",
    on: ["カ", "ガ"],
    kun: ["かご", "がする", "しのぐ", "のる"],
    source: "",
    meanings: ["vehicle", "palanquin", "litter", "hitch up an animal"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "廻",
    on: ["カイ", "エ"],
    kun: ["まわる", "まわす", "もとおる", "めぐる", "めぐらす"],
    source: "",
    meanings: ["round", "game", "revolve", "go around", "circumference"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "恢",
    on: ["カイ", "ケ"],
    kun: ["ひろい"],
    source: "",
    meanings: ["wide", "large", "enlarge"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "魁",
    on: ["カイ"],
    kun: ["さきがけ", "かしら"],
    source: "",
    meanings: ["charging ahead of others"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "晦",
    on: ["カイ"],
    kun: ["つごもり", "くらい", "みそか", "くらむ"],
    source: "",
    meanings: ["dark", "disappear"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "芥",
    on: ["カイ", "ケ"],
    kun: ["からし", "ごみ", "あくた"],
    source: "",
    meanings: ["mustard", "rape", "dust", "trash", "rubbish"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "蟹",
    on: ["カイ"],
    kun: ["かに"],
    source: "",
    meanings: ["crab"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "凱",
    on: ["ガイ", "カイ"],
    kun: ["かちどき", "やわらぐ"],
    source: "",
    meanings: ["victory song"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "鎧",
    on: ["カイ", "ガイ"],
    kun: ["よろう", "よろい"],
    source: "",
    meanings: ["put on armor", "arm oneself"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "浬",
    on: ["リ"],
    kun: ["かいり", "のっと"],
    source: "",
    meanings: ["knot", "nautical mile"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "馨",
    on: ["ケイ", "キョウ"],
    kun: ["かおる", "かおり"],
    source: "",
    meanings: ["fragrant", "balmy", "favourable"],
    grade: 9,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "笠",
    on: ["リュウ"],
    kun: ["かさ"],
    source: "",
    meanings: ["bamboo hat", "one's influence"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "樫",
    on: [],
    kun: ["かし"],
    source: "",
    meanings: ["evergreen oak", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "梶",
    on: ["ビ"],
    kun: ["かじ", "こずえ"],
    source: "",
    meanings: ["sculling oar"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "恰",
    on: ["コウ", "カッ", "チョウ", "キョウ"],
    kun: ["あたかも"],
    source: "",
    meanings: ["just as", "as though", "fortunately"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "叶",
    on: ["キョウ"],
    kun: ["かなえる", "かなう"],
    source: "",
    meanings: ["grant", "answer"],
    grade: 9,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "椛",
    on: [],
    kun: ["かば", "もみじ"],
    source: "",
    meanings: ["autumn foliage", "birch", "maple", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "樺",
    on: ["カ"],
    kun: ["かば", "かんば"],
    source: "",
    meanings: ["birch", "dark red"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鞄",
    on: ["ハク", "ホウ", "ビョウ"],
    kun: ["かばん"],
    source: "",
    meanings: ["suitcase", "bag", "briefcase"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "兜",
    on: ["トウ", "ト"],
    kun: ["かぶと"],
    source: "",
    meanings: ["helmet", "head piece"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蒲",
    on: ["ホ", "ボ", "フ", "ブ"],
    kun: ["がま", "かば", "かま"],
    source: "",
    meanings: ["bullrush", "flag", "cattail"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鴨",
    on: ["オウ"],
    kun: ["かも", "あひる"],
    source: "",
    meanings: ["wild duck", "easy mark"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "茅",
    on: ["ボウ", "ミョウ"],
    kun: ["かや", "ちがや"],
    source: "",
    meanings: ["miscanthus reed"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "萱",
    on: ["ケン"],
    kun: ["かや", "かんぞう"],
    source: "",
    meanings: ["miscanthus reed"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "粥",
    on: ["イク", "シュク", "ジュク"],
    kun: ["かゆ", "かい", "ひさぐ"],
    source: "",
    meanings: ["rice gruel"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "侃",
    on: ["カン"],
    kun: ["つよい"],
    source: "",
    meanings: ["strong", "just", "righteous", "peace-loving"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "柑",
    on: ["コン", "カン"],
    kun: [],
    source: "",
    meanings: ["citrus", "orange"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "竿",
    on: ["カン"],
    kun: ["さお"],
    source: "",
    meanings: ["pole", "rod", "scale beam", "violin neck"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "莞",
    on: ["カン"],
    kun: ["い"],
    source: "",
    meanings: ["smiling", "reed used to cover tatami"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "巌",
    on: ["ガン"],
    kun: ["いわ", "いわお", "けわしい"],
    source: "",
    meanings: ["rock", "crag", "boulder"],
    grade: 9,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "雁",
    on: ["ガン"],
    kun: ["かり", "かりがね"],
    source: "",
    meanings: ["wild goose"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "嬉",
    on: ["キ"],
    kun: ["うれしい", "たのしむ"],
    source: "",
    meanings: ["glad", "pleased", "rejoice"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "毅",
    on: ["キ", "ギ"],
    kun: ["つよい"],
    source: "",
    meanings: ["strong"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "稀",
    on: ["キ", "ケ"],
    kun: ["まれ", "まばら"],
    source: "",
    meanings: ["rare", "phenomenal", "dilute (acid)"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "徽",
    on: ["キ"],
    kun: ["しるし"],
    source: "",
    meanings: ["good", "beautiful", "badge"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "祇",
    on: ["ギ", "キ", "シ"],
    kun: ["くにつかみ", "ただ", "まさに"],
    source: "",
    meanings: ["national or local god", "peaceful", "great"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "誼",
    on: ["ギ"],
    kun: ["よしみ", "よい"],
    source: "",
    meanings: ["friendship", "intimacy"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "掬",
    on: ["キク", "コク"],
    kun: ["きくす", "むすぶ", "すくう", "たなごころ"],
    source: "",
    meanings: ["scoop up water with the hand"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "鞠",
    on: ["キク", "キュウ"],
    kun: ["まり"],
    source: "",
    meanings: ["ball"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "桔",
    on: ["キツ", "ケツ"],
    kun: [],
    source: "",
    meanings: ["used in plant names"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "橘",
    on: ["キツ"],
    kun: ["たちばな"],
    source: "",
    meanings: ["mandarin orange"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "砧",
    on: ["チン"],
    kun: ["きぬた"],
    source: "",
    meanings: ["fulling block"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "杵",
    on: ["ショ", "ソ"],
    kun: ["きね"],
    source: "",
    meanings: ["wooden pestle"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "汲",
    on: ["キュウ"],
    kun: ["くむ"],
    source: "",
    meanings: ["draw (water)", "ladle", "scoop", "pump"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "灸",
    on: ["キュウ", "ク"],
    kun: ["やいと"],
    source: "",
    meanings: ["moxa cautery", "chastisement"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "笈",
    on: ["キュウ"],
    kun: [],
    source: "",
    meanings: ["backpack bookcase"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鋸",
    on: ["キョ", "コ"],
    kun: ["のこ", "のこぎり"],
    source: "",
    meanings: ["saw (cuts wood)"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "亨",
    on: ["コウ", "キョウ", "ホウ"],
    kun: ["とおる"],
    source: "",
    meanings: ["pass through", "go smoothly"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "匡",
    on: ["キョウ", "オウ"],
    kun: ["すくう", "ただす"],
    source: "",
    meanings: ["correct", "save", "assist"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "卿",
    on: ["ケイ", "キョウ"],
    kun: ["きみ"],
    source: "",
    meanings: ["you", "lord", "secretary", "state minister"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "喬",
    on: ["キョウ"],
    kun: ["たかい"],
    source: "",
    meanings: ["high", "boasting"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蕎",
    on: ["キョウ"],
    kun: ["そば"],
    source: "",
    meanings: ["buckwheat"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "饗",
    on: ["キョウ"],
    kun: ["うける", "もてなす"],
    source: "",
    meanings: ["banquet"],
    grade: 9,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "尭",
    on: ["ギョウ"],
    kun: ["たかい"],
    source: "",
    meanings: ["high", "far"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "桐",
    on: ["トウ", "ドウ"],
    kun: ["きり"],
    source: "",
    meanings: ["paulownia"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "欣",
    on: ["キン", "ゴン", "コン"],
    kun: ["よろこぶ", "よろこび"],
    source: "",
    meanings: ["take pleasure in", "rejoice"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "欽",
    on: ["キン", "コン"],
    kun: ["つつしむ"],
    source: "",
    meanings: ["respect", "revere", "long for"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "禽",
    on: ["キン"],
    kun: ["とり", "とりこ"],
    source: "",
    meanings: ["bird", "captive", "capture"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "芹",
    on: ["キン"],
    kun: ["せり"],
    source: "",
    meanings: ["parsley"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "衿",
    on: ["キン", "コン"],
    kun: ["えり"],
    source: "",
    meanings: ["neck", "collar", "lapel"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "玖",
    on: ["キュウ", "ク"],
    kun: [],
    source: "",
    meanings: ["beautiful black jewel", "nine"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "矩",
    on: ["ク"],
    kun: ["かね", "かねざし", "さしがね"],
    source: "",
    meanings: ["ruler", "carpenter's square"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "喰",
    on: [],
    kun: ["くう", "くらう"],
    source: "",
    meanings: ["eat", "drink", "receive (a blow)", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "寓",
    on: ["グウ", "グ", "ドウ"],
    kun: ["ぐうする", "かこつける", "よせる", "よる", "かりずまい"],
    source: "",
    meanings: ["temporary abode", "imply", "suggest"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "櫛",
    on: ["シツ"],
    kun: ["くし", "くしけずる"],
    source: "",
    meanings: ["comb"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "釧",
    on: ["セン"],
    kun: ["くしろ", "うでわ"],
    source: "",
    meanings: ["bracelet"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "屑",
    on: ["セツ"],
    kun: ["くず", "いさぎよい"],
    source: "",
    meanings: ["rubbish", "junk", "trash", "waste", "scraps"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "沓",
    on: ["トウ"],
    kun: ["くつ"],
    source: "",
    meanings: ["shoes", "boots"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "窪",
    on: ["ワ", "ア"],
    kun: ["くぼむ", "くぼみ", "くぼまる", "くぼ"],
    source: "",
    meanings: ["depression", "cave in", "sink", "become hollow"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "隈",
    on: ["ワイ", "エ"],
    kun: ["くま", "すみ"],
    source: "",
    meanings: ["corner", "nook", "recess"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "栗",
    on: ["リツ", "リ"],
    kun: ["くり", "おののく"],
    source: "",
    meanings: ["chestnut"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鍬",
    on: ["ショウ", "シュウ"],
    kun: ["くわ", "すき"],
    source: "",
    meanings: ["hoe with long blade at acute angle"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "袈",
    on: ["ケ", "カ"],
    kun: [],
    source: "",
    meanings: ["a coarse camlet"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "祁",
    on: ["キ", "ケ"],
    kun: [],
    source: "",
    meanings: ["intense", "large"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "圭",
    on: ["ケイ", "ケ"],
    kun: [],
    source: "",
    meanings: ["square jewel", "corner", "angle", "edge"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "慧",
    on: ["ケイ", "エ"],
    kun: ["さとい"],
    source: "",
    meanings: ["wise"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "桂",
    on: ["ケイ"],
    kun: ["かつら"],
    source: "",
    meanings: ["Japanese Judas-tree", "cinnamon tree"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "戟",
    on: ["ゲキ"],
    kun: ["ほこ"],
    source: "",
    meanings: ["halbert", "arms"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "訣",
    on: ["ケツ"],
    kun: ["わかれ", "わかれる"],
    source: "",
    meanings: ["separation", "part", "secret"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "倦",
    on: ["ケン"],
    kun: ["あきる", "あぐむ", "あぐねる", "うむ", "つかれる"],
    source: "",
    meanings: ["lose interest in", "tire of"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "喧",
    on: ["ケン"],
    kun: ["やかましい", "かまびすしい"],
    source: "",
    meanings: ["noisy", "boisterous"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "捲",
    on: ["ケン"],
    kun: ["まく", "まくる", "まくる", "めくる", "まくれる"],
    source: "",
    meanings: ["roll", "wind", "coil", "turn pages", "roll up sleeves", "strip off", "be turned", "be rolled up"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "牽",
    on: ["ケン"],
    kun: ["ひく"],
    source: "",
    meanings: ["pull", "tug", "drag", "lead by hand"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "硯",
    on: ["ケン", "ゲン"],
    kun: ["すずり"],
    source: "",
    meanings: ["inkstone"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "絃",
    on: ["ゲン"],
    kun: ["いと"],
    source: "",
    meanings: ["string", "cord", "samisen music"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "諺",
    on: ["ゲン"],
    kun: ["ことわざ"],
    source: "",
    meanings: ["proverb"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "乎",
    on: ["コ", "オ"],
    kun: ["か", "ああ", "かな", "や", "よ", "を"],
    source: "",
    meanings: ["question mark", "?"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "糊",
    on: ["コ", "ゴ", "コツ"],
    kun: ["のり"],
    source: "",
    meanings: ["paste", "glue", "sizing"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "袴",
    on: ["コ", "ク"],
    kun: ["はかま", "ずぼん"],
    source: "",
    meanings: ["men's formal divided skirt"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "胡",
    on: ["ウ", "コ", "ゴ"],
    kun: ["なんぞ"],
    source: "",
    meanings: ["barbarian", "foreign"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "跨",
    on: ["コ", "カ"],
    kun: ["またがる", "またがる", "またぐ"],
    source: "",
    meanings: ["be", "sit or stand astride", "extend over", "straddle"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "伍",
    on: ["ゴ"],
    kun: ["いつつ"],
    source: "",
    meanings: ["five", "five-man squad", "file", "line"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "吾",
    on: ["ゴ"],
    kun: ["われ", "わが", "あ"],
    source: "",
    meanings: ["I", "my", "our", "one's own"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "梧",
    on: ["ゴ"],
    kun: ["あおぎり"],
    source: "",
    meanings: ["Chinese parasol tree", "phoenix tree"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "檎",
    on: ["キン", "ゴン", "ゴ"],
    kun: [],
    source: "",
    meanings: ["apple"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "瑚",
    on: ["コ", "ゴ"],
    kun: [],
    source: "",
    meanings: ["ancestral offering receptacle", "coral"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "醐",
    on: ["ゴ", "コ"],
    kun: [],
    source: "",
    meanings: ["boiled butter"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鯉",
    on: ["リ"],
    kun: ["こい"],
    source: "",
    meanings: ["carp"],
    grade: 9,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "倖",
    on: ["コウ"],
    kun: ["しあわせ", "さいわい"],
    source: "",
    meanings: ["happiness", "luck"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "宏",
    on: ["コウ"],
    kun: ["ひろい"],
    source: "",
    meanings: ["wide", "large"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "巷",
    on: ["コウ"],
    kun: ["ちまた"],
    source: "",
    meanings: ["fork in road", "scene", "arena", "theater"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "庚",
    on: ["コウ"],
    kun: ["かのえ"],
    source: "",
    meanings: ["7th", "7th calendar sign"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "弘",
    on: ["コウ", "グ"],
    kun: ["ひろい"],
    source: "",
    meanings: ["vast", "broad", "wide"],
    grade: 9,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "昂",
    on: ["コウ", "ゴウ"],
    kun: ["あがる", "たかい", "たかぶる"],
    source: "",
    meanings: ["rise"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "晃",
    on: ["コウ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["clear"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "杭",
    on: ["コウ"],
    kun: ["くい"],
    source: "",
    meanings: ["stake", "post", "picket"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "浩",
    on: ["コウ"],
    kun: ["おおきい", "ひろい"],
    source: "",
    meanings: ["wide expanse", "abundance", "vigorous"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "紘",
    on: ["コウ"],
    kun: ["おおづな", "つな", "つなぐ"],
    source: "",
    meanings: ["large"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "腔",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["body cavity"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "膏",
    on: ["コウ"],
    kun: ["あぶら"],
    source: "",
    meanings: ["fat", "grease", "lard", "paste", "ointment", "plaster"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "閤",
    on: ["コウ"],
    kun: ["くぐりど"],
    source: "",
    meanings: ["small side gate"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鴻",
    on: ["コウ", "ゴウ"],
    kun: ["おおとり", "ひしくい", "おおがり"],
    source: "",
    meanings: ["large bird", "wild goose", "large", "great", "powerful", "prosperous"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "劫",
    on: ["コウ", "ゴウ", "キョウ"],
    kun: ["おびやかす"],
    source: "",
    meanings: ["threat", "long ages"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "壕",
    on: ["コウ", "ゴウ"],
    kun: ["ほり"],
    source: "",
    meanings: ["trench", "dugout", "air raid shelter"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "轟",
    on: ["ゴウ", "コウ"],
    kun: ["とどろかす", "とどろく"],
    source: "",
    meanings: ["roar", "thunder", "boom resound"],
    grade: 9,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "忽",
    on: ["コツ"],
    kun: ["たちまち", "ゆるがせ"],
    source: "",
    meanings: ["in a moment", "instantly", "all of a sudden", "neglect", "disregard"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "惚",
    on: ["コツ"],
    kun: ["ほける", "ぼける", "ほれる"],
    source: "",
    meanings: ["fall in love with", "admire", "grow senile"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "此",
    on: ["シ"],
    kun: ["これ", "この", "ここ"],
    source: "",
    meanings: ["this", "current", "next", "coming", "last", "past"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "昏",
    on: ["コン"],
    kun: ["くらい", "くれ"],
    source: "",
    meanings: ["dark", "evening", "dusk"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "些",
    on: ["サ", "シャ"],
    kun: ["ちと", "ちっと", "いささか"],
    source: "",
    meanings: ["a little bit", "sometimes"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "叉",
    on: ["サ", "シャ", "サイ"],
    kun: ["また"],
    source: "",
    meanings: ["fork in road", "crotch"],
    grade: 9,
    jlpt: null,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "嵯",
    on: ["サ", "シ"],
    kun: [],
    source: "",
    meanings: ["steep", "craggy", "rugged"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "瑳",
    on: ["サ"],
    kun: ["みがく"],
    source: "",
    meanings: ["polish", "brilliant white luster of a gem", "artful smile"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "裟",
    on: ["サ", "シャ"],
    kun: [],
    source: "",
    meanings: ["Buddhist surplice"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "坐",
    on: ["ザ", "サ"],
    kun: ["すわる", "おわす", "そぞろに", "まします"],
    source: "",
    meanings: ["sit"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "哉",
    on: ["サイ"],
    kun: ["かな", "や"],
    source: "",
    meanings: ["how", "what", "alas", "question mark", "exclamation mark"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "犀",
    on: ["サイ", "セイ"],
    kun: [],
    source: "",
    meanings: ["rhinocerous"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "砦",
    on: ["サイ"],
    kun: ["とりで"],
    source: "",
    meanings: ["fort", "stronghold", "entrenchments"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "冴",
    on: ["ゴ", "コ"],
    kun: ["さえる", "こおる", "ひえる"],
    source: "",
    meanings: ["be clear", "serene", "cold", "skilful"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "堺",
    on: ["カイ"],
    kun: ["さかい"],
    source: "",
    meanings: ["world"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "榊",
    on: [],
    kun: ["さかき"],
    source: "",
    meanings: ["sacred Shinto tree", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "肴",
    on: ["コウ"],
    kun: ["さかな"],
    source: "",
    meanings: ["accompaniment for drinks"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "鷺",
    on: ["ロ"],
    kun: ["さぎ"],
    source: "",
    meanings: ["heron"],
    grade: 9,
    jlpt: null,
    strokes: 24,
    examples: [],
    tags: []
  },
  {
    name: "朔",
    on: ["サク"],
    kun: ["ついたち"],
    source: "",
    meanings: ["conjunction (astronomy)", "first day of month", "north"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "窄",
    on: ["サク"],
    kun: ["すぼめる", "つぼめる", "せまい"],
    source: "",
    meanings: ["narrow", "fold", "furl", "shrug", "pucker", "shut", "close"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "笹",
    on: [],
    kun: ["ささ"],
    source: "",
    meanings: ["bamboo grass", "(kokuji)"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "薩",
    on: ["サツ", "サチ"],
    kun: [],
    source: "",
    meanings: ["salvation", "Buddha"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "皐",
    on: ["コウ"],
    kun: ["さつき"],
    source: "",
    meanings: ["swamp", "shore"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "錆",
    on: ["ショウ", "セイ"],
    kun: ["さび", "くわしい"],
    source: "",
    meanings: ["rust", "tarnish"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "晒",
    on: ["サイ", "シ"],
    kun: ["さらす", "さらし"],
    source: "",
    meanings: ["bleach", "refine", "expose", "air"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "撒",
    on: ["サン", "サツ"],
    kun: ["まく"],
    source: "",
    meanings: ["scatter", "sprinkle", "give them the slip"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "燦",
    on: ["サン"],
    kun: ["さんたる", "あきらか", "きらめく", "きらめく"],
    source: "",
    meanings: ["brilliant"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "珊",
    on: ["サン"],
    kun: ["センチ", "さんち"],
    source: "",
    meanings: ["coral", "centimeter"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "纂",
    on: ["サン"],
    kun: ["あつめる"],
    source: "",
    meanings: ["editing", "compiling"],
    grade: 9,
    jlpt: null,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "讃",
    on: ["サン"],
    kun: ["ほめる", "たたえる"],
    source: "",
    meanings: ["praise", "title on a picture"],
    grade: 9,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "仔",
    on: ["シ"],
    kun: ["こ", "たえる"],
    source: "",
    meanings: ["offspring (animal)", "detailed", "fine"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "孜",
    on: ["シ"],
    kun: ["つとめる"],
    source: "",
    meanings: ["industriousness"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "斯",
    on: ["シ"],
    kun: ["か", "こう", "かく", "この", "これ", "ここに"],
    source: "",
    meanings: ["this", "thus", "such", "verbal pause"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "獅",
    on: ["シ"],
    kun: ["しし"],
    source: "",
    meanings: ["lion"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "爾",
    on: ["ジ", "ニ"],
    kun: ["なんじ", "しかり", "その", "のみ", "おれ", "しか"],
    source: "",
    meanings: ["you", "thou", "second person"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "而",
    on: ["ジ", "ニ"],
    kun: ["しこうして", "しかして", "しかも", "しかれども", "すなわち", "なんじ", "しかるに"],
    source: "",
    meanings: ["and yet", "and then", "but", "however", "nevertheless"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "蒔",
    on: ["シ", "ジ"],
    kun: ["うえる", "まく"],
    source: "",
    meanings: ["sow (seeds)"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "汐",
    on: ["セキ"],
    kun: ["しお", "うしお", "せい"],
    source: "",
    meanings: ["eventide", "tide", "salt water", "opportunity"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "竺",
    on: ["ジク", "チク", "トク"],
    kun: [],
    source: "",
    meanings: ["bamboo"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "雫",
    on: ["ダ"],
    kun: ["しずく"],
    source: "",
    meanings: ["drop", "trickle", "dripping", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "悉",
    on: ["シツ", "シチ"],
    kun: ["つきる", "ことごと", "ことごとく", "つくす", "つぶさに"],
    source: "",
    meanings: ["all", "entirely", "altogether", "completely", "use up", "run out of", "exhaust", "befriend", "serve"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "篠",
    on: ["ゾウ", "ショウ"],
    kun: ["しの", "ささ", "すず"],
    source: "",
    meanings: ["bamboo grass"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "偲",
    on: ["サイ", "シ"],
    kun: ["しのぶ"],
    source: "",
    meanings: ["recollect", "remember"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "柴",
    on: ["サイ", "シ"],
    kun: ["しば"],
    source: "",
    meanings: ["brush", "firewood"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "縞",
    on: ["コウ"],
    kun: ["しま", "しろぎぬ"],
    source: "",
    meanings: ["stripe"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "紗",
    on: ["サ", "シャ"],
    kun: ["うすぎぬ"],
    source: "",
    meanings: ["gauze", "gossamer"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "勺",
    on: ["シャク"],
    kun: [],
    source: "",
    meanings: ["ladle", "one tenth of a go", "dip"],
    grade: 9,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "灼",
    on: ["シャク"],
    kun: ["あらた", "やく"],
    source: "",
    meanings: ["miraculous"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "錫",
    on: ["セキ", "シャク"],
    kun: ["すず", "たまう"],
    source: "",
    meanings: ["copper", "tin"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "惹",
    on: ["ジャク", "ジャ"],
    kun: ["ひく"],
    source: "",
    meanings: ["attract", "captivate"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "洲",
    on: ["シュウ", "ス"],
    kun: ["しま"],
    source: "",
    meanings: ["continent", "sandbar", "island", "country"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "蒐",
    on: ["シュウ"],
    kun: ["あかね", "あつまる", "あつめる"],
    source: "",
    meanings: ["gather"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "輯",
    on: ["シュウ"],
    kun: ["あつめる", "やわらぐ"],
    source: "",
    meanings: ["gather", "collect", "compile"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "峻",
    on: ["シュン"],
    kun: ["けわしい", "たかい"],
    source: "",
    meanings: ["high", "steep"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "竣",
    on: ["ドウ", "シュン"],
    kun: ["わらわ", "わらべ", "おわる"],
    source: "",
    meanings: ["end", "finish"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "舜",
    on: ["シュン"],
    kun: [],
    source: "",
    meanings: ["type of morning glory", "rose of Sharon", "althea"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "駿",
    on: ["シュン", "スン"],
    kun: ["すぐれる"],
    source: "",
    meanings: ["a good horse", "speed", "a fast person"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "楯",
    on: ["ジュン"],
    kun: ["たて"],
    source: "",
    meanings: ["shield", "buckler", "pretext"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "淳",
    on: ["ジュン", "シュン"],
    kun: ["あつい"],
    source: "",
    meanings: ["pure"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "醇",
    on: ["ジュン", "シュン"],
    kun: ["もっぱら", "こい", "あつい"],
    source: "",
    meanings: ["pure sake", "purity", "affection"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "曙",
    on: ["ショ"],
    kun: ["あけぼの"],
    source: "",
    meanings: ["dawn", "daybreak"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "渚",
    on: ["ショ"],
    kun: ["なぎさ"],
    source: "",
    meanings: ["strand", "beach", "shore"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "恕",
    on: ["ジョ", "ショ"],
    kun: ["ゆるす"],
    source: "",
    meanings: ["excuse", "tolerate", "forgive"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "哨",
    on: ["ショウ"],
    kun: ["みはり"],
    source: "",
    meanings: ["scout", "sentinel"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "嘗",
    on: ["ショウ", "ジョウ"],
    kun: ["かつて", "こころみる", "なめる"],
    source: "",
    meanings: [
      "once",
      "before",
      "formerly",
      "ever",
      "never",
      "ex-",
      "lick",
      "lap up",
      "burn up",
      "taste",
      "undergo",
      "underrate",
      "despise"
    ],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "庄",
    on: ["ショウ", "ソ", "ソウ", "ホウ"],
    kun: [],
    source: "",
    meanings: ["level", "in the country", "manor", "village", "hamlet"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "捷",
    on: ["ショウ", "ソウ"],
    kun: ["はやい"],
    source: "",
    meanings: ["victory", "fast"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "昌",
    on: ["ショウ"],
    kun: ["さかん"],
    source: "",
    meanings: ["prosperous", "bright", "clear"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "梢",
    on: ["ショウ"],
    kun: ["こずえ", "くすのき"],
    source: "",
    meanings: ["treetops", "twig"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "樟",
    on: ["ショウ"],
    kun: ["くす"],
    source: "",
    meanings: ["camphor"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "湘",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["name of Chinese river", "the Sagami river"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "菖",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["iris"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蕉",
    on: ["ショウ"],
    kun: [],
    source: "",
    meanings: ["banana", "plantain"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "裳",
    on: ["ショウ"],
    kun: ["も", "もすそ"],
    source: "",
    meanings: ["skirt"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鞘",
    on: ["ショウ", "ソウ"],
    kun: ["さや"],
    source: "",
    meanings: ["sheath", "case", "margin", "difference", "shells (of beans)"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "丞",
    on: ["ジョウ", "ショウ"],
    kun: ["すくう", "たすける"],
    source: "",
    meanings: ["help"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "杖",
    on: ["ジョウ"],
    kun: ["つえ"],
    source: "",
    meanings: ["staff", "cane"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "穣",
    on: ["ジョウ"],
    kun: ["わら", "ゆたか"],
    source: "",
    meanings: ["good crops", "prosperity", "10**28"],
    grade: 9,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "埴",
    on: ["ショク"],
    kun: ["はに", "へな"],
    source: "",
    meanings: ["clay"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "燭",
    on: ["ソク", "ショク"],
    kun: ["ともしび"],
    source: "",
    meanings: ["light", "candlepower"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "晋",
    on: ["シン"],
    kun: ["すすむ"],
    source: "",
    meanings: ["advance"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "榛",
    on: ["シン", "ハン"],
    kun: ["はしばみ", "はり"],
    source: "",
    meanings: ["hazelnut", "filbert"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "秦",
    on: ["シン"],
    kun: ["はた"],
    source: "",
    meanings: ["Manchu dynasty", "name given to naturalized foreigners"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "壬",
    on: ["ニン", "ジン", "イ"],
    kun: ["みずのえ"],
    source: "",
    meanings: ["9th calendar sign"],
    grade: 9,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "訊",
    on: ["ジン", "シュン", "シン"],
    kun: ["きく", "とう", "たずねる"],
    source: "",
    meanings: ["request", "question", "investigate"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "諏",
    on: ["シュ", "ス"],
    kun: ["そう", "はかる"],
    source: "",
    meanings: ["consult"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "厨",
    on: ["シュウ", "ズ", "チュ", "チュウ"],
    kun: ["くりや"],
    source: "",
    meanings: ["kitchen"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "逗",
    on: ["トウ", "ズ"],
    kun: ["とどまる"],
    source: "",
    meanings: ["stop"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "翠",
    on: ["スイ"],
    kun: ["かわせみ", "みどり"],
    source: "",
    meanings: ["green", "kingfisher"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "錐",
    on: ["スイ"],
    kun: ["きり"],
    source: "",
    meanings: ["auger", "drill", "awl", "pyramid", "cone"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "錘",
    on: ["スイ"],
    kun: ["つむ", "おもり"],
    source: "",
    meanings: ["weight", "plumb bob", "sinker", "spindle"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "瑞",
    on: ["ズイ", "スイ"],
    kun: ["みず", "しるし"],
    source: "",
    meanings: ["congratulations"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "嵩",
    on: ["スウ", "シュウ"],
    kun: ["かさ", "かさむ", "たかい"],
    source: "",
    meanings: ["be aggravated", "grow worse", "grow bulky", "swell"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "雛",
    on: ["スウ", "ス", "ジュ"],
    kun: ["ひな", "ひよこ"],
    source: "",
    meanings: ["chick", "squab", "duckling", "doll"],
    grade: 9,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "菅",
    on: ["カン", "ケン"],
    kun: ["すげ"],
    source: "",
    meanings: ["sedge"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "頗",
    on: ["ハ"],
    kun: ["すこぶる", "かたよる"],
    source: "",
    meanings: ["prejudiced", "exceedingly"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "雀",
    on: ["ジャク", "ジャン", "サク", "シャク"],
    kun: ["すずめ"],
    source: "",
    meanings: ["sparrow"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "摺",
    on: ["ショウ", "シュウ", "ロウ"],
    kun: ["する", "ひだ"],
    source: "",
    meanings: ["rub", "fold", "print (on cloth)"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "棲",
    on: ["セイ"],
    kun: ["すむ"],
    source: "",
    meanings: ["live", "dwell"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "栖",
    on: ["セイ"],
    kun: ["すむ"],
    source: "",
    meanings: ["nest", "rookery", "hive", "cobweb", "den"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "蹟",
    on: ["セキ", "シャク"],
    kun: ["あと"],
    source: "",
    meanings: ["remains", "traces", "footprint"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "碩",
    on: ["セキ"],
    kun: ["おおきい"],
    source: "",
    meanings: ["large", "great", "eminent"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "尖",
    on: ["セン"],
    kun: ["とがる", "さき", "するどい"],
    source: "",
    meanings: ["be pointed", "sharp", "taper", "displeased", "angry", "edgy"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "撰",
    on: ["サン", "セン"],
    kun: ["せんする", "えらむ", "えらぶ"],
    source: "",
    meanings: ["composing", "editing", "compiling", "selecting"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "穿",
    on: ["セン"],
    kun: ["うがつ", "はく"],
    source: "",
    meanings: ["put on (to the feet)", "dig", "pierce", "drill"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "銑",
    on: ["セン"],
    kun: [],
    source: "",
    meanings: ["pig iron"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "閃",
    on: ["セン"],
    kun: ["ひらめく", "ひらめき", "うかがう"],
    source: "",
    meanings: ["flash", "brandish"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "噌",
    on: ["ソウ", "ショウ", "ソ"],
    kun: ["かまびすしい"],
    source: "",
    meanings: ["boisterous"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "楚",
    on: ["ソ", "ショ"],
    kun: ["いばら", "しもと", "すわえ"],
    source: "",
    meanings: ["whip", "cane"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "疏",
    on: ["ソ", "ショ"],
    kun: ["あらい", "うとい", "うとむ", "とおる", "とおす", "まばら"],
    source: "",
    meanings: ["pass through", "note", "commentary", "estrangement", "sparseness", "neglect", "penetrate"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蘇",
    on: ["ソ", "ス"],
    kun: ["よみがえる"],
    source: "",
    meanings: ["be resuscitated", "revived", "perilla", "shiso"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "叢",
    on: ["ソウ", "ス"],
    kun: ["くさむら", "むらがる", "むら"],
    source: "",
    meanings: ["plexus", "clump of bushes", "thicket"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "宋",
    on: ["ソウ"],
    kun: [],
    source: "",
    meanings: ["dwell", "Sung dynasty"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "惣",
    on: ["ソウ"],
    kun: ["すべて"],
    source: "",
    meanings: ["all"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "槍",
    on: ["ソウ", "ショウ"],
    kun: ["やり"],
    source: "",
    meanings: ["spear", "lance", "javelin"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "漕",
    on: ["ソウ"],
    kun: ["こぐ", "はこぶ"],
    source: "",
    meanings: ["rowing", "scull", "paddle"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "綜",
    on: ["ソウ"],
    kun: ["おさめる", "すべる"],
    source: "",
    meanings: ["rule", "synthesize"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "聡",
    on: ["ソウ"],
    kun: ["さとい", "みみざとい"],
    source: "",
    meanings: ["wise", "fast learner"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "蒼",
    on: ["ソウ"],
    kun: ["あおい"],
    source: "",
    meanings: ["blue", "pale"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "其",
    on: ["キ", "ギ", "ゴ"],
    kun: ["それ", "その"],
    source: "",
    meanings: ["that"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "揃",
    on: ["セン"],
    kun: ["そろえる", "そろう", "そろい", "きる"],
    source: "",
    meanings: ["be complete", "uniform", "all present"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "舵",
    on: ["ダ", "タ"],
    kun: ["かじ"],
    source: "",
    meanings: ["rudder", "helm", "wheel"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "楕",
    on: ["ダ", "タ"],
    kun: [],
    source: "",
    meanings: ["ellipse"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "陀",
    on: ["タ", "ダ", "イ", "チ", "ジ"],
    kun: ["けわしい", "ななめ"],
    source: "",
    meanings: ["steep"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "苔",
    on: ["タイ"],
    kun: ["こけ", "こけら"],
    source: "",
    meanings: ["moss", "lichen"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "黛",
    on: ["タイ"],
    kun: ["まゆずみ"],
    source: "",
    meanings: ["blackened eyebrows"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鯛",
    on: ["チョウ"],
    kun: ["たい"],
    source: "",
    meanings: ["sea bream", "red snapper"],
    grade: 9,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "醍",
    on: ["ダイ", "タイ", "テイ"],
    kun: [],
    source: "",
    meanings: ["whey", "good Buddhist teaching"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鷹",
    on: ["ヨウ", "オウ"],
    kun: ["たか"],
    source: "",
    meanings: ["hawk"],
    grade: 9,
    jlpt: 1,
    strokes: 24,
    examples: [],
    tags: []
  },
  {
    name: "啄",
    on: ["タク", "ツク", "トク"],
    kun: ["ついばむ", "つつく"],
    source: "",
    meanings: ["peck", "pick up"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "托",
    on: ["タク"],
    kun: ["たくする", "たのむ"],
    source: "",
    meanings: ["requesting", "entrusting with", "pretend", "hint"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "琢",
    on: ["タク"],
    kun: ["みがく"],
    source: "",
    meanings: ["polish"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "茸",
    on: ["ジョウ", "ニュ"],
    kun: ["きのこ", "たけ", "しげる"],
    source: "",
    meanings: ["mushroom"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "凧",
    on: [],
    kun: ["いかのぼり", "たこ"],
    source: "",
    meanings: ["kite", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "只",
    on: ["シ"],
    kun: ["ただ"],
    source: "",
    meanings: ["only", "free", "in addition"],
    grade: 9,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "辰",
    on: ["シン", "ジン"],
    kun: ["たつ"],
    source: "",
    meanings: ["sign of the dragon", "7-9AM", "fifth sign of Chinese zodiac", "shin dragon radical (no. 161)"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "巽",
    on: ["ソン"],
    kun: ["たつみ"],
    source: "",
    meanings: ["southeast"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "竪",
    on: ["ジュ"],
    kun: ["たて", "たてる", "こども"],
    source: "",
    meanings: ["length", "height", "warp"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "辿",
    on: ["テン"],
    kun: ["たどる", "たどり"],
    source: "",
    meanings: ["follow (road)", "pursue"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "樽",
    on: ["ソン"],
    kun: ["たる"],
    source: "",
    meanings: ["barrel", "cask", "keg"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "坦",
    on: ["タン"],
    kun: ["たいら"],
    source: "",
    meanings: ["level", "wide"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "歎",
    on: ["タン"],
    kun: ["なげく", "なげき"],
    source: "",
    meanings: ["grief", "lamentation"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "湛",
    on: ["タン", "チン", "ジン", "セン"],
    kun: ["しずむ", "たたえる"],
    source: "",
    meanings: ["fill", "wear (a smile)", "clear", "pure", "dense", "deep"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "耽",
    on: ["タン"],
    kun: ["ふける"],
    source: "",
    meanings: ["addicted", "absorbed in"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "檀",
    on: ["ダン", "タン"],
    kun: ["まゆみ"],
    source: "",
    meanings: ["cedar", "sandlewood", "spindle tree"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "弛",
    on: ["チ", "シ"],
    kun: ["たるむ", "たるめる", "たゆむ", "ゆるむ", "ゆるみ"],
    source: "",
    meanings: ["slacken", "relax"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "智",
    on: ["チ"],
    kun: [],
    source: "",
    meanings: ["wisdom", "intellect", "reason"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "馳",
    on: ["チ", "ジ"],
    kun: ["はせる"],
    source: "",
    meanings: ["run", "gallop", "sail", "drive (a wagon)", "win (fame)", "despatch"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "筑",
    on: ["チク"],
    kun: [],
    source: "",
    meanings: ["an ancient musical instrument"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "註",
    on: ["チュウ"],
    kun: [],
    source: "",
    meanings: ["notes", "comment", "annotate"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "猪",
    on: ["チョ"],
    kun: ["い", "いのしし"],
    source: "",
    meanings: ["boar"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "喋",
    on: ["チョウ", "トウ"],
    kun: ["しゃべる", "ついばむ"],
    source: "",
    meanings: ["talk", "chat", "chatter"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "寵",
    on: ["チョウ"],
    kun: ["めぐみ", "めぐむ"],
    source: "",
    meanings: ["affection", "love", "patronage"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "帖",
    on: ["チョウ", "ジョウ"],
    kun: ["かきもの"],
    source: "",
    meanings: ["quire (of paper)", "bundle of seaweed", "counter for screens", "notebook"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "暢",
    on: ["チョウ"],
    kun: ["のびる"],
    source: "",
    meanings: ["stretch"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "牒",
    on: ["チョウ", "ジョウ"],
    kun: ["ふだ"],
    source: "",
    meanings: ["label", "genealogy", "circular"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "脹",
    on: ["チョウ"],
    kun: ["はれる", "ふくらむ", "ふくれる"],
    source: "",
    meanings: ["dilate", "distend", "bulge", "fill out", "swell"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蝶",
    on: ["チョウ"],
    kun: [],
    source: "",
    meanings: ["butterfly"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "槌",
    on: ["ツイ"],
    kun: ["つち"],
    source: "",
    meanings: ["hammer", "mallet"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "槻",
    on: ["キ"],
    kun: ["つき"],
    source: "",
    meanings: ["Zelkova tree"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "佃",
    on: ["テン", "デン"],
    kun: ["つくだ"],
    source: "",
    meanings: ["cultivated rice field"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "柘",
    on: ["シャ", "ジャク"],
    kun: ["そ", "つげ", "やまぐわ"],
    source: "",
    meanings: ["wild mulberry"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "辻",
    on: [],
    kun: ["つじ"],
    source: "",
    meanings: ["crossing", "crossroad", "street corners", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "蔦",
    on: ["チョウ"],
    kun: ["つた"],
    source: "",
    meanings: ["vine", "ivy"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "綴",
    on: ["テイ", "テツ", "テチ", "ゲツ"],
    kun: ["とじる", "つづる", "つづり", "すみやか"],
    source: "",
    meanings: ["compose", "spell", "write", "bind (books)"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "椿",
    on: ["チン", "チュン"],
    kun: ["つばき"],
    source: "",
    meanings: ["camellia"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "紬",
    on: ["チュウ"],
    kun: ["つむぎ", "つむぐ"],
    source: "",
    meanings: ["pongee (a knotted silk cloth)"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "悌",
    on: ["テイ", "ダイ"],
    kun: [],
    source: "",
    meanings: ["serving our elders"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "挺",
    on: ["チョウ", "テイ"],
    kun: ["ぬく"],
    source: "",
    meanings: ["bravely volunteer", "counter for guns", "inksticks", "palanquins", "rickshaws"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "梯",
    on: ["テイ", "タイ"],
    kun: ["はしご"],
    source: "",
    meanings: ["ladder", "stairs", "insatiable drinking"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "汀",
    on: ["テイ"],
    kun: ["みぎわ", "なぎさ"],
    source: "",
    meanings: ["water's edge", "shore", "bank"],
    grade: 9,
    jlpt: 1,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "禎",
    on: ["テイ"],
    kun: ["さいわい"],
    source: "",
    meanings: ["happiness", "blessed", "good fortune", "auspicious"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "蹄",
    on: ["テイ"],
    kun: ["ひづめ"],
    source: "",
    meanings: ["hoof"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鄭",
    on: ["テイ", "ジョウ"],
    kun: [],
    source: "",
    meanings: ["an ancient Chinese province"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "釘",
    on: ["テイ", "チョウ"],
    kun: ["くぎ"],
    source: "",
    meanings: ["nail", "tack", "peg"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鼎",
    on: ["テイ"],
    kun: ["かなえ"],
    source: "",
    meanings: ["three legged kettle"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "擢",
    on: ["テキ", "タク"],
    kun: ["ぬく", "ぬきんでる"],
    source: "",
    meanings: ["excel in", "surpass", "pull out", "select"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "纏",
    on: ["テン", "デン"],
    kun: ["まつわる", "まとう", "まとめる", "まとまる", "まとい"],
    source: "",
    meanings: ["wear", "wrap", "tie", "follow around", "collect"],
    grade: 9,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "兎",
    on: ["ト", "ツ"],
    kun: ["うさぎ"],
    source: "",
    meanings: ["rabbit", "hare"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "堵",
    on: ["ト"],
    kun: ["かき"],
    source: "",
    meanings: ["fence", "railing", "enclosure"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "杜",
    on: ["ト", "トウ", "ズ"],
    kun: ["もり", "ふさぐ", "やまなし"],
    source: "",
    meanings: ["woods", "grove"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "砥",
    on: ["シ", "テイ", "キイ", "チ"],
    kun: ["と", "といし", "とぐ", "みがく"],
    source: "",
    meanings: ["whetstone", "grindstone"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "套",
    on: ["トウ"],
    kun: ["かさねる"],
    source: "",
    meanings: ["accumulate", "big and long", "hackneyed"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "宕",
    on: ["トウ"],
    kun: ["すぎる"],
    source: "",
    meanings: ["cave"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "祷",
    on: ["トウ"],
    kun: ["いのる", "いのり", "まつる"],
    source: "",
    meanings: ["pray"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "董",
    on: ["トウ"],
    kun: ["ただす"],
    source: "",
    meanings: ["correct"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "撞",
    on: ["ドウ", "トウ", "シュ"],
    kun: ["つく"],
    source: "",
    meanings: ["thrust", "pierce", "stab", "prick"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "萄",
    on: ["ドウ", "トウ"],
    kun: [],
    source: "",
    meanings: ["grape vine", "wild grape"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "鳶",
    on: ["エン"],
    kun: ["とび", "とんび"],
    source: "",
    meanings: ["black kite", "fireman", "hook"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "寅",
    on: ["イン"],
    kun: ["とら"],
    source: "",
    meanings: ["sign of the tiger", "3-5AM", "third sign of Chinese zodiac"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "酉",
    on: ["ユウ"],
    kun: ["とり"],
    source: "",
    meanings: ["west", "bird", "sign of the bird", "5-7PM", "tenth sign of Chinese zodiac", "sake radical (no. 164)"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "惇",
    on: ["シュン", "ジュン", "トン"],
    kun: ["あつい"],
    source: "",
    meanings: ["sincere", "kind", "considerate"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "敦",
    on: ["トン", "タイ", "ダン", "チョウ"],
    kun: ["あつい"],
    source: "",
    meanings: ["industry", "kindliness"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "沌",
    on: ["トン"],
    kun: ["くらい"],
    source: "",
    meanings: ["primeval chaos"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "遁",
    on: ["トン", "シュン"],
    kun: ["のがれる"],
    source: "",
    meanings: ["flee", "escape", "shirk", "evade", "set free"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "凪",
    on: [],
    kun: ["なぎ", "なぐ"],
    source: "",
    meanings: ["lull", "calm", "(kokuji)"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "薙",
    on: ["テイ", "チ"],
    kun: ["なぐ", "なぎ", "かる"],
    source: "",
    meanings: ["mow down (the enemy)"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "灘",
    on: ["タン", "ダン"],
    kun: ["なだ", "せ"],
    source: "",
    meanings: ["open sea"],
    grade: 9,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "捺",
    on: ["ナツ", "ダツ"],
    kun: ["さす", "おす"],
    source: "",
    meanings: ["press", "print", "affix a seal", "stamp"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "楢",
    on: ["シュウ", "ユウ"],
    kun: ["なら"],
    source: "",
    meanings: ["oak"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "馴",
    on: ["ジュン", "シュン", "クン"],
    kun: ["なれる", "ならす", "したがう"],
    source: "",
    meanings: ["get used to", "experienced", "tamed"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "楠",
    on: ["ナン", "ダン", "ゼン", "ネン"],
    kun: ["くす", "くすのき"],
    source: "",
    meanings: ["camphor tree"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "汝",
    on: ["ジョ"],
    kun: ["なんじ", "なれ", "い", "うぬ", "いまし", "し", "しゃ", "な", "なむち", "まし", "みまし"],
    source: "",
    meanings: ["you", "thou"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "賑",
    on: ["シン"],
    kun: ["にぎわい", "にぎやか", "にぎわす", "にぎわう"],
    source: "",
    meanings: ["flourish", "be bustling", "prosperity"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "廿",
    on: ["ジュウ", "ニュウ"],
    kun: ["にじゅう"],
    source: "",
    meanings: ["twenty"],
    grade: 9,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "濡",
    on: ["ジュ", "ニュ"],
    kun: ["ぬれる", "ぬらす", "ぬれる", "ぬらす", "うるおい", "うるおう", "うるおす"],
    source: "",
    meanings: ["get wet", "damp", "make love"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "禰",
    on: ["ネ", "デイ", "ナイ"],
    kun: [],
    source: "",
    meanings: ["ancestral shrine"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "祢",
    on: ["ネ", "デイ", "ナイ"],
    kun: [],
    source: "",
    meanings: ["ancestral shrine"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "乃",
    on: ["ナイ", "ダイ", "ノ", "アイ"],
    kun: ["の", "すなわち", "なんじ"],
    source: "",
    meanings: ["from", "possessive particle", "whereupon", "accordingly"],
    grade: 9,
    jlpt: 1,
    strokes: 2,
    examples: [],
    tags: []
  },
  {
    name: "之",
    on: ["シ"],
    kun: ["の", "これ", "ゆく", "この"],
    source: "",
    meanings: ["of", "this"],
    grade: 9,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "巴",
    on: ["ハ"],
    kun: ["ともえ", "うずまき"],
    source: "",
    meanings: ["comma-design"],
    grade: 9,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "播",
    on: ["ハ", "バン", "ハン"],
    kun: ["まく"],
    source: "",
    meanings: ["plant", "sow"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "杷",
    on: ["ハ"],
    kun: ["つか"],
    source: "",
    meanings: ["kind of rake", "loquat"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "琶",
    on: ["ハ", "ベ", "ワ"],
    kun: [],
    source: "",
    meanings: ["lute"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "芭",
    on: ["バ", "ハ"],
    kun: [],
    source: "",
    meanings: ["banana"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "煤",
    on: ["バイ", "マイ"],
    kun: ["すす"],
    source: "",
    meanings: ["soot", "smoke dried"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "這",
    on: ["シャ", "ゲン"],
    kun: ["はう", "はい", "むかえる", "この"],
    source: "",
    meanings: ["crawl", "creep", "grovel", "trail (vines)"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "秤",
    on: ["ショウ", "ヒン", "ビン"],
    kun: ["はかり"],
    source: "",
    meanings: ["balances", "scales", "steelyard"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "萩",
    on: ["シュウ"],
    kun: ["はぎ"],
    source: "",
    meanings: ["bush clover"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "柏",
    on: ["ハク", "ヒャク", "ビャク"],
    kun: ["かしわ"],
    source: "",
    meanings: ["oak", "cypress"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "箔",
    on: ["ハク"],
    kun: ["すだれ"],
    source: "",
    meanings: ["foil", "gilt"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "曝",
    on: ["バク", "ホク", "ボク"],
    kun: ["さらす"],
    source: "",
    meanings: ["bleach", "refine", "expose", "air"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "莫",
    on: ["バク", "ボ", "マク", "モ", "ナイ"],
    kun: ["くれ", "なかれ", "なし"],
    source: "",
    meanings: ["must not", "do not", "be not"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "函",
    on: ["カン"],
    kun: ["はこ", "いれる"],
    source: "",
    meanings: ["box (archaic)"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "肇",
    on: ["チョウ", "ジョウ", "トウ"],
    kun: ["はじめる", "はじめ"],
    source: "",
    meanings: ["beginning"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "筈",
    on: ["カツ"],
    kun: ["はず", "やはず"],
    source: "",
    meanings: ["notch of an arrow", "ought", "must", "should be", "expected"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "幡",
    on: ["マン", "ハン", "バン", "ホン"],
    kun: ["はた"],
    source: "",
    meanings: ["flag"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "畠",
    on: [],
    kun: ["はたけ", "はた"],
    source: "",
    meanings: ["field", "farm", "garden", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鳩",
    on: ["キュウ", "ク"],
    kun: ["はと", "あつめる"],
    source: "",
    meanings: ["pigeon", "dove"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "塙",
    on: ["カク", "コウ"],
    kun: ["はなわ", "かたい"],
    source: "",
    meanings: ["projecting tableland or mountain"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "隼",
    on: ["シュン", "ジュン"],
    kun: ["はやぶさ"],
    source: "",
    meanings: ["falcon"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "挽",
    on: ["バン"],
    kun: ["ひく"],
    source: "",
    meanings: ["saw", "turn (lathe)", "grind"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "磐",
    on: ["バン", "ハン"],
    kun: ["いわ"],
    source: "",
    meanings: ["rock", "crag", "cliff", "wall (in a mine)"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "蕃",
    on: ["バン", "ハン"],
    kun: [],
    source: "",
    meanings: ["grow luxuriously"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "庇",
    on: ["ヒ"],
    kun: ["ひさし", "おおう", "かばう"],
    source: "",
    meanings: ["protect", "shield", "defend", "eaves", "canopy", "penthouse", "visor"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "斐",
    on: ["ヒ", "イ"],
    kun: [],
    source: "",
    meanings: ["beautiful", "patterned"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "緋",
    on: ["ヒ"],
    kun: ["あけ", "あか"],
    source: "",
    meanings: ["scarlet", "cardinal"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "樋",
    on: ["トウ"],
    kun: ["ひ", "とい"],
    source: "",
    meanings: ["water pipe", "gutter", "downspout", "conduit"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "枇",
    on: ["ビ", "ヒ"],
    kun: [],
    source: "",
    meanings: ["loquat", "spoon"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "毘",
    on: ["ヒ", "ビ"],
    kun: ["たすける"],
    source: "",
    meanings: ["help", "assist"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "琵",
    on: ["ビ", "ヒ"],
    kun: [],
    source: "",
    meanings: ["glissando on strings", "lute"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "柊",
    on: ["シュ", "シュウ"],
    kun: ["ひいらぎ"],
    source: "",
    meanings: ["holly"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "疋",
    on: ["ヒキ", "ショ", "ソ", "ヒツ"],
    kun: ["あし"],
    source: "",
    meanings: ["head", "counter for animals"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "彦",
    on: ["ゲン"],
    kun: ["ひこ"],
    source: "",
    meanings: ["lad", "boy (ancient)"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "菱",
    on: ["リョウ"],
    kun: ["ひし"],
    source: "",
    meanings: ["diamond (shape)", "water chestnut", "rhombus"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "畢",
    on: ["ヒツ"],
    kun: ["おわる", "あみ", "おわり", "ことごとく"],
    source: "",
    meanings: ["the end", "finish"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "桧",
    on: ["カイ"],
    kun: ["ひのき", "ひ"],
    source: "",
    meanings: ["Japanese cypress"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "紐",
    on: ["チュウ", "ジュウ"],
    kun: ["ひも"],
    source: "",
    meanings: ["string", "cord", "braid", "lace", "tape", "strap", "ribbon"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "彪",
    on: ["ヒョウ", "ヒュウ"],
    kun: ["あや"],
    source: "",
    meanings: ["spotted", "mottled", "patterned", "small tiger"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "瓢",
    on: ["ヒョウ"],
    kun: ["ひさご", "ふくべ"],
    source: "",
    meanings: ["gourd"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "豹",
    on: ["ヒョウ", "ホウ"],
    kun: [],
    source: "",
    meanings: ["leopard", "panther"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "廟",
    on: ["ビョウ", "ミョウ"],
    kun: ["たまや", "みたまや", "やしろ"],
    source: "",
    meanings: ["mausoleum", "shrine", "palace"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "彬",
    on: ["ヒン", "フン"],
    kun: ["うるわしい", "あきらか"],
    source: "",
    meanings: ["refined", "gentle"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "瀕",
    on: ["ヒン"],
    kun: ["ほとり"],
    source: "",
    meanings: ["shore", "brink", "verge"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "斧",
    on: ["フ"],
    kun: ["おの"],
    source: "",
    meanings: ["ax", "hatchet"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "芙",
    on: ["フ"],
    kun: [],
    source: "",
    meanings: ["lotus", "Mt Fuji"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "撫",
    on: ["ブ", "フ"],
    kun: ["なでる"],
    source: "",
    meanings: ["stroke", "pat", "smooth down"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "葡",
    on: ["ブ", "ホ"],
    kun: [],
    source: "",
    meanings: ["wild grape", "Portugal"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蕪",
    on: ["ブ", "ム"],
    kun: ["かぶ", "かぶら", "あれる"],
    source: "",
    meanings: ["turnip"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "楓",
    on: ["フウ"],
    kun: ["かえで"],
    source: "",
    meanings: ["maple"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "葺",
    on: ["シュウ"],
    kun: ["あし", "ふく", "ふき"],
    source: "",
    meanings: ["thatch", "cover", "shingle", "tile"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蕗",
    on: ["ロ", "ル"],
    kun: ["ふき"],
    source: "",
    meanings: ["butterbur", "bog rhubarb"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "淵",
    on: ["エン", "カク", "コウ"],
    kun: ["ふち", "かたい", "はなわ"],
    source: "",
    meanings: ["abyss", "edge", "deep pool", "the depths"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "吻",
    on: ["フン", "ブン"],
    kun: ["くちわき", "くちさき"],
    source: "",
    meanings: ["proboscis"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "焚",
    on: ["フン", "ホン", "ハン"],
    kun: ["たく", "やく", "やきがり"],
    source: "",
    meanings: ["burn", "kindle", "build a fire", "boil", "cook"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "頁",
    on: ["ケツ"],
    kun: ["ぺえじ", "おおがい", "かしら"],
    source: "",
    meanings: ["page", "leaf"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "碧",
    on: ["ヘキ", "ヒャク"],
    kun: [],
    source: "",
    meanings: ["blue", "green"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "瞥",
    on: ["ベツ", "ヘツ"],
    kun: [],
    source: "",
    meanings: ["glance at"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "篇",
    on: ["ヘン"],
    kun: [],
    source: "",
    meanings: ["volume", "chapter", "book", "editing", "compilation"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "娩",
    on: ["ベン"],
    kun: [],
    source: "",
    meanings: ["bear (children)"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鞭",
    on: ["ベン", "ヘン"],
    kun: ["むち", "むちうつ"],
    source: "",
    meanings: ["whip", "rod", "counter for whippings"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "圃",
    on: ["ホ", "フ"],
    kun: ["はたけ", "にわ"],
    source: "",
    meanings: ["garden", "field"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "甫",
    on: ["ホ", "フ"],
    kun: ["はじめて"],
    source: "",
    meanings: ["for the first time", "not until"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "輔",
    on: ["ホ", "フ"],
    kun: ["たすける"],
    source: "",
    meanings: ["help"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "戊",
    on: ["ボ", "ボウ"],
    kun: ["つちのえ"],
    source: "",
    meanings: ["5th calendar sign"],
    grade: 9,
    jlpt: null,
    strokes: 5,
    examples: [],
    tags: []
  },
  {
    name: "菩",
    on: ["ボ"],
    kun: [],
    source: "",
    meanings: ["kind of grass", "sacred tree"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "捧",
    on: ["ホウ"],
    kun: ["ささげる"],
    source: "",
    meanings: ["lift up", "give", "offer", "consecrate", "sacrifice", "dedicate"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "朋",
    on: ["ホウ"],
    kun: ["とも"],
    source: "",
    meanings: ["companion", "friend"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "萌",
    on: ["ホウ"],
    kun: ["もえる", "きざす", "めばえ", "きざし"],
    source: "",
    meanings: ["show symptoms of", "sprout", "bud", "malt"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蓬",
    on: ["ホウ", "ブ"],
    kun: ["よもぎ"],
    source: "",
    meanings: ["sagebrush", "wormwood", "mugwort"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鋒",
    on: ["ホウ"],
    kun: ["きっさき", "とかり", "ほこさき"],
    source: "",
    meanings: ["dagger", "sword's point", "festival car", "float"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "鳳",
    on: ["ホウ", "フウ"],
    kun: [],
    source: "",
    meanings: ["male mythical bird"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "鵬",
    on: ["ホウ"],
    kun: ["おおとり"],
    source: "",
    meanings: ["phoenix"],
    grade: 9,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "卜",
    on: ["ボク"],
    kun: ["うらなう", "うらない"],
    source: "",
    meanings: ["divining", "fortune-telling", "divination or katakana to radical (no. 25)"],
    grade: 9,
    jlpt: null,
    strokes: 2,
    examples: [],
    tags: []
  },
  {
    name: "殆",
    on: ["タイ", "サイ"],
    kun: ["ほとほと", "ほとんど", "あやうい"],
    source: "",
    meanings: ["almost", "quite", "really"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "幌",
    on: ["コウ"],
    kun: ["ほろ", "とばり"],
    source: "",
    meanings: ["canopy", "awning", "hood", "curtain"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "哩",
    on: ["リ"],
    kun: ["まいる"],
    source: "",
    meanings: ["mile"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "槙",
    on: ["テン", "シン"],
    kun: ["まき", "こずえ"],
    source: "",
    meanings: ["twig", "ornamental evergreen"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "柾",
    on: [],
    kun: ["まさ", "まさめ", "まさき"],
    source: "",
    meanings: ["straight grain", "spindle tree", "(kokuji)"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "鱒",
    on: ["ソン", "セン", "ザン"],
    kun: ["ます"],
    source: "",
    meanings: ["salmon trout"],
    grade: 9,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "亦",
    on: ["エキ", "ヤク"],
    kun: ["また"],
    source: "",
    meanings: ["also", "again"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "俣",
    on: [],
    kun: ["また"],
    source: "",
    meanings: ["crotch", "thigh", "groin", "fork", "junction", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "沫",
    on: ["マツ", "バツ"],
    kun: ["あわ", "しぶき", "つばき"],
    source: "",
    meanings: ["splash", "suds"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "迄",
    on: ["キツ"],
    kun: ["まで", "およぶ"],
    source: "",
    meanings: ["until", "up to", "as far as", "to the extent"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "麿",
    on: [],
    kun: ["まろ"],
    source: "",
    meanings: ["I", "you", "(kokuji)"],
    grade: 9,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "蔓",
    on: ["マン", "バン"],
    kun: ["はびこる", "つる"],
    source: "",
    meanings: [
      "vine",
      "tendril",
      "influence",
      "connections",
      "good offices",
      "spread",
      "sprawl",
      "thrive",
      "rampant",
      "powerful"
    ],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "巳",
    on: ["シ"],
    kun: ["み"],
    source: "",
    meanings: ["sign of the snake or serpent", "9-11AM", "sixth sign of Chinese zodiac"],
    grade: 9,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "箕",
    on: ["キ"],
    kun: ["み"],
    source: "",
    meanings: ["winnowing"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "湊",
    on: ["ソウ"],
    kun: ["みなと", "あつまる"],
    source: "",
    meanings: ["port", "harbor"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蓑",
    on: ["サ", "サイ"],
    kun: ["みの"],
    source: "",
    meanings: ["straw raincoat"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "稔",
    on: ["ネン", "ジン", "ニン"],
    kun: ["みのる", "みのり"],
    source: "",
    meanings: ["harvest", "ripen"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "牟",
    on: ["ボウ", "ム"],
    kun: [],
    source: "",
    meanings: ["pupil (eye)", "moo (cow sound)"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "椋",
    on: ["リョウ"],
    kun: ["むく"],
    source: "",
    meanings: ["type of deciduous tree", "grey starling"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "姪",
    on: ["テツ", "チツ", "ジチ", "イツ", "イチ"],
    kun: ["めい", "おい"],
    source: "",
    meanings: ["niece"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "孟",
    on: ["モウ", "ボウ", "ミョウ"],
    kun: ["かしら"],
    source: "",
    meanings: ["chief", "beginning"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "蒙",
    on: ["モウ", "ボウ"],
    kun: ["こうむる", "おおう", "くらい"],
    source: "",
    meanings: ["ignorance", "darkness", "get", "receive", "be subjected to", "sustain", "Mongolia"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "儲",
    on: ["チョ"],
    kun: ["もうける", "もうかる", "もうけ", "たくわえる"],
    source: "",
    meanings: ["be profitable", "yield profit"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "勿",
    on: ["モチ", "ブツ", "ボツ"],
    kun: ["なかれ", "なし"],
    source: "",
    meanings: ["not", "must not", "do not", "be not"],
    grade: 9,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "尤",
    on: ["ユウ"],
    kun: ["もっとも", "とがめる"],
    source: "",
    meanings: ["reasonable", "just", "natural", "superb", "outstanding", "plausible"],
    grade: 9,
    jlpt: null,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "籾",
    on: [],
    kun: ["もみ"],
    source: "",
    meanings: ["unhulled rice", "(kokuji)"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "貰",
    on: ["セイ", "シャ"],
    kun: ["もらう"],
    source: "",
    meanings: ["get", "have", "obtain"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "匁",
    on: [],
    kun: ["もんめ", "め"],
    source: "",
    meanings: ["monme", "3.75 grams", "(kokuji)"],
    grade: 9,
    jlpt: 1,
    strokes: 4,
    examples: [],
    tags: []
  },
  {
    name: "也",
    on: ["ヤ", "エ"],
    kun: ["なり", "か", "また"],
    source: "",
    meanings: ["to be (classical)"],
    grade: 9,
    jlpt: 1,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "耶",
    on: ["ヤ", "ジャ"],
    kun: ["か"],
    source: "",
    meanings: ["question mark"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "靖",
    on: ["セイ", "ジョウ"],
    kun: ["やすんじる"],
    source: "",
    meanings: ["peaceful"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "佑",
    on: ["ユウ", "ウ"],
    kun: ["たすける"],
    source: "",
    meanings: ["help", "assist"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "宥",
    on: ["ユウ"],
    kun: ["なだめる", "ゆるす"],
    source: "",
    meanings: ["soothe", "calm", "pacify"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "柚",
    on: ["ユ", "ユウ", "ジク"],
    kun: ["ゆず"],
    source: "",
    meanings: ["citron"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "祐",
    on: ["ユウ", "ウ"],
    kun: ["たすける"],
    source: "",
    meanings: ["help"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "邑",
    on: ["ユウ"],
    kun: ["むら"],
    source: "",
    meanings: ["village", "rural community", "right village radical (no. 163)"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "輿",
    on: ["ヨ"],
    kun: ["かご", "こし"],
    source: "",
    meanings: ["palanquin", "bier", "public opinion", "the earth"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "傭",
    on: ["ヨウ", "チョウ"],
    kun: ["やとう", "あたい", "ひとしい"],
    source: "",
    meanings: ["employ", "hire"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "楊",
    on: ["ヨウ"],
    kun: ["やなぎ"],
    source: "",
    meanings: ["willow"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "耀",
    on: ["ヨウ"],
    kun: ["かがやく", "ひかり"],
    source: "",
    meanings: ["shine", "sparkle", "gleam", "twinkle"],
    grade: 9,
    jlpt: 1,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "蓉",
    on: ["ヨウ"],
    kun: [],
    source: "",
    meanings: ["lotus"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "遥",
    on: ["ヨウ"],
    kun: ["はるか"],
    source: "",
    meanings: ["far off", "distant", "long ago"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "淀",
    on: ["テン", "デン"],
    kun: ["よどむ"],
    source: "",
    meanings: ["pool", "eddy"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "螺",
    on: ["ラ"],
    kun: ["にし", "にな"],
    source: "",
    meanings: ["small", "edible", "helical fresh-water mollusk"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "洛",
    on: ["ラク"],
    kun: [],
    source: "",
    meanings: ["Kyoto", "the capital"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "蘭",
    on: ["ラン", "ラ"],
    kun: [],
    source: "",
    meanings: ["orchid", "Holland"],
    grade: 9,
    jlpt: 1,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "李",
    on: ["リ"],
    kun: ["すもも"],
    source: "",
    meanings: ["plum"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "裡",
    on: ["リ"],
    kun: ["うち", "うら"],
    source: "",
    meanings: ["reverse", "inside", "palm", "sole", "rear", "lining", "wrong side"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "掠",
    on: ["リャク", "リョウ"],
    kun: ["かすめる", "かする", "かすれる"],
    source: "",
    meanings: ["pillage", "rob", "graze", "skim", "sweep over", "cheat", "hint"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "劉",
    on: ["リュウ", "ル"],
    kun: ["ころす"],
    source: "",
    meanings: ["weapon of war", "logging axe", "kill en masse", "peeling (paint off a wall", "etc)", "sparse", "faded"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "溜",
    on: ["リュウ"],
    kun: ["たまる", "たまる", "ためる", "したたる", "たまり", "ため"],
    source: "",
    meanings: ["collect", "gather", "be in arrears"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "琉",
    on: ["リュウ", "ル"],
    kun: [],
    source: "",
    meanings: ["precious stone", "gem", "lapis lazuli"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "亮",
    on: ["リョウ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["clear", "help"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "凌",
    on: ["リョウ"],
    kun: ["しのぐ"],
    source: "",
    meanings: ["endure", "keep (rain)out", "stave off", "tide over", "defy", "slight", "surpass"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "梁",
    on: ["リョウ"],
    kun: ["はり", "うつばり", "うちばり", "やな", "はし"],
    source: "",
    meanings: ["weir", "fish trap", "beam", "girder"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "稜",
    on: ["リョウ", "ロウ"],
    kun: ["いつ", "かど"],
    source: "",
    meanings: ["angle", "edge", "corner", "power", "majesty"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "諒",
    on: ["リョウ"],
    kun: ["あきらか", "まことに"],
    source: "",
    meanings: ["fact", "reality", "understand", "appreciate"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "遼",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["distant"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "淋",
    on: ["リン"],
    kun: ["さびしい", "さみしい"],
    source: "",
    meanings: ["lonely", "deserted"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "琳",
    on: ["リン"],
    kun: [],
    source: "",
    meanings: ["jewel", "tinkling of jewelry"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "鱗",
    on: ["リン"],
    kun: ["うろこ", "こけ", "こけら"],
    source: "",
    meanings: ["scales (fish)"],
    grade: 9,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "麟",
    on: ["リン"],
    kun: [],
    source: "",
    meanings: ["Chinese unicorn", "genius", "giraffe", "bright", "shining"],
    grade: 9,
    jlpt: 1,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "伶",
    on: ["レイ", "リョウ"],
    kun: ["わざおぎ"],
    source: "",
    meanings: ["actor"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "嶺",
    on: ["レイ", "リョウ"],
    kun: ["みね"],
    source: "",
    meanings: ["peak", "summit"],
    grade: 9,
    jlpt: 1,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "怜",
    on: ["レイ", "レン", "リョウ"],
    kun: ["あわれむ", "さとい"],
    source: "",
    meanings: ["wise"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "玲",
    on: ["レイ"],
    kun: [],
    source: "",
    meanings: ["sound of jewels"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "憐",
    on: ["レン"],
    kun: ["あわれむ", "あわれ"],
    source: "",
    meanings: ["pity", "have mercy", "sympathise", "compassion"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "漣",
    on: ["レン", "ラン"],
    kun: ["さざなみ"],
    source: "",
    meanings: ["ripples"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "煉",
    on: ["レン"],
    kun: ["ねる"],
    source: "",
    meanings: ["refine metals", "kneading over fire"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "簾",
    on: ["レン"],
    kun: ["すだれ", "す"],
    source: "",
    meanings: ["bamboo screen", "rattan blind"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "蓮",
    on: ["レン"],
    kun: ["はす", "はちす"],
    source: "",
    meanings: ["lotus"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "魯",
    on: ["ロ"],
    kun: ["おろか"],
    source: "",
    meanings: ["foolish", "Russia"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "櫓",
    on: ["ロ"],
    kun: ["やぐら", "おおだて"],
    source: "",
    meanings: ["oar", "tower"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "狼",
    on: ["ロウ"],
    kun: ["おおかみ"],
    source: "",
    meanings: ["wolf"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "禄",
    on: ["ロク"],
    kun: ["さいわい", "ふち"],
    source: "",
    meanings: ["fief", "allowance", "pension", "grant", "happiness"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "肋",
    on: ["ロク"],
    kun: ["あばら"],
    source: "",
    meanings: ["rib"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "倭",
    on: ["ワ", "イ"],
    kun: ["やまと", "したがう"],
    source: "",
    meanings: ["Yamato", "ancient Japan"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "鷲",
    on: ["シュウ", "ジュ"],
    kun: ["わし"],
    source: "",
    meanings: ["eagle"],
    grade: 9,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "亙",
    on: ["コウ", "カン"],
    kun: ["わたる", "もとめる"],
    source: "",
    meanings: ["range", "reach", "extend", "cover"],
    grade: 9,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "亘",
    on: ["コウ", "カン", "セン"],
    kun: ["わたる", "もとめる"],
    source: "",
    meanings: ["span", "range", "extend over"],
    grade: 9,
    jlpt: 1,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "詫",
    on: ["タ"],
    kun: ["わび", "わびしい", "かこつ", "わびる", "わびる"],
    source: "",
    meanings: ["apologize"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "藁",
    on: ["コウ"],
    kun: ["わら"],
    source: "",
    meanings: ["straw"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "蕨",
    on: ["ケツ"],
    kun: ["わらび"],
    source: "",
    meanings: ["bracken", "fernbrake"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "椀",
    on: ["ワン"],
    kun: ["はち"],
    source: "",
    meanings: ["wooden or lacquered bowl"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "碗",
    on: ["ワン"],
    kun: ["こばち"],
    source: "",
    meanings: ["porcelain bowl", "tea cup"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "侑",
    on: ["ユウ", "ウ"],
    kun: ["すすめる", "たすける"],
    source: "",
    meanings: ["urge to eat"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "俐",
    on: ["リ"],
    kun: ["かしこい"],
    source: "",
    meanings: ["clever"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "凛",
    on: ["リン"],
    kun: ["きびしい"],
    source: "",
    meanings: ["cold", "strict", "severe"],
    grade: 9,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "凰",
    on: ["コウ", "オウ"],
    kun: ["おおとり"],
    source: "",
    meanings: ["female phoenix bird"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "勁",
    on: ["ケイ"],
    kun: ["つよい"],
    source: "",
    meanings: ["strong"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "奎",
    on: ["ケイ", "キ"],
    kun: [],
    source: "",
    meanings: ["star", "god of literature"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "崚",
    on: ["リョウ"],
    kun: [],
    source: "",
    meanings: ["mountains towering in a row"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "巖",
    on: ["ガン"],
    kun: ["いわ", "いわお", "けわしい"],
    source: "",
    meanings: ["rock", "crag", "boulder"],
    grade: 9,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "巫",
    on: ["フ"],
    kun: ["みこ", "かんなぎ"],
    source: "",
    meanings: ["sorcerer", "medium", "shrine maiden"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "已",
    on: ["イ"],
    kun: ["やむ", "すでに", "のみ", "はなはだ"],
    source: "",
    meanings: ["stop", "halt", "previously", "already", "long ago"],
    grade: 9,
    jlpt: null,
    strokes: 3,
    examples: [],
    tags: []
  },
  {
    name: "彗",
    on: ["スイ", "エ", "ケイ", "セイ"],
    kun: ["ほうき"],
    source: "",
    meanings: ["comet"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "徠",
    on: ["ライ"],
    kun: ["きたす", "きたる", "くる"],
    source: "",
    meanings: ["induce", "encourage to come"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "惺",
    on: ["セイ"],
    kun: ["さとる"],
    source: "",
    meanings: ["realize"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "昊",
    on: ["コウ"],
    kun: ["そら"],
    source: "",
    meanings: ["sky", "big"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "昴",
    on: ["コウ", "ボウ"],
    kun: ["すばる"],
    source: "",
    meanings: ["the Pleiades"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "晏",
    on: ["アン"],
    kun: ["おそい"],
    source: "",
    meanings: ["late", "quiet", "sets (sun)"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "晄",
    on: ["コウ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["clear"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "晨",
    on: ["シン"],
    kun: ["あした", "とき", "あさ"],
    source: "",
    meanings: ["morning", "early"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "晟",
    on: ["セイ", "ジョウ"],
    kun: ["あきらか"],
    source: "",
    meanings: ["clear"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "暉",
    on: ["キ"],
    kun: ["かがやく"],
    source: "",
    meanings: ["shine", "light"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "檜",
    on: ["カイ"],
    kun: ["ひのき", "ひ"],
    source: "",
    meanings: ["Japanese cypress"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "栞",
    on: ["カン"],
    kun: ["しおり"],
    source: "",
    meanings: ["bookmark", "guidebook"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "梛",
    on: ["ダ", "ナ"],
    kun: ["なぎ"],
    source: "",
    meanings: ["type of tall evergreen tree"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "椰",
    on: ["ヤ"],
    kun: ["やし"],
    source: "",
    meanings: ["coconut tree"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "橙",
    on: ["トウ"],
    kun: ["だいだい"],
    source: "",
    meanings: ["bitter orange"],
    grade: 9,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "櫂",
    on: ["トウ", "タク"],
    kun: ["かい", "かじ"],
    source: "",
    meanings: ["oar", "scull", "paddle"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "毬",
    on: ["キュウ"],
    kun: ["いが", "まり"],
    source: "",
    meanings: ["burr", "ball"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "洸",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: ["sparkling water"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "洵",
    on: ["ジュン", "シュン"],
    kun: ["のぶ", "まことに"],
    source: "",
    meanings: ["alike", "truth"],
    grade: 9,
    jlpt: 1,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "滉",
    on: ["コウ"],
    kun: ["ひろい"],
    source: "",
    meanings: ["deep and broad (water)"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "漱",
    on: ["ソウ", "シュウ", "ス"],
    kun: ["くちすすぐ", "くちそそぐ", "うがい", "すすぐ"],
    source: "",
    meanings: ["gargle", "rinse mouth"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "澪",
    on: ["レイ"],
    kun: ["みお"],
    source: "",
    meanings: ["water route", "shipping channel"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "煌",
    on: ["コウ"],
    kun: ["きらめく", "きらめく", "かがやく"],
    source: "",
    meanings: ["glitter", "gleam", "twinkle"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "燎",
    on: ["リョウ"],
    kun: ["かがりび"],
    source: "",
    meanings: ["burn", "bonfire"],
    grade: 9,
    jlpt: 1,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "燿",
    on: ["ヨウ"],
    kun: ["かがやく", "ひかり"],
    source: "",
    meanings: ["shine"],
    grade: 9,
    jlpt: 1,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "珈",
    on: ["カ"],
    kun: ["かみかざり"],
    source: "",
    meanings: ["ornamental hairpin"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "珀",
    on: ["ハク"],
    kun: [],
    source: "",
    meanings: ["amber"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "琥",
    on: ["コ"],
    kun: [],
    source: "",
    meanings: ["jewelled utensil"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "瑶",
    on: ["ヨウ"],
    kun: ["たま"],
    source: "",
    meanings: ["beautiful as a jewel"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "皓",
    on: ["コウ"],
    kun: ["しろい", "ひかる"],
    source: "",
    meanings: ["white", "clear"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "眸",
    on: ["ボウ", "ム"],
    kun: ["ひとみ"],
    source: "",
    meanings: ["pupil of the eye"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "祿",
    on: ["ロク"],
    kun: ["さいわい", "ふち"],
    source: "",
    meanings: ["fief", "allowance", "pension", "grant", "happiness"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "稟",
    on: ["リン", "ヒン"],
    kun: ["こめぐら"],
    source: "",
    meanings: ["salary in rice"],
    grade: 9,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "穰",
    on: ["ジョウ"],
    kun: ["わら", "ゆたか"],
    source: "",
    meanings: ["abundance"],
    grade: 9,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "穹",
    on: ["キュウ", "キョウ"],
    kun: ["あめ", "そら"],
    source: "",
    meanings: ["sky"],
    grade: 9,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "笙",
    on: ["ショウ", "ソウ"],
    kun: ["ふえ"],
    source: "",
    meanings: ["a reed instrument"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "絆",
    on: ["ハン"],
    kun: ["きずな", "ほだす", "つなぐ"],
    source: "",
    meanings: ["bonds", "fetters"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "綺",
    on: ["キ"],
    kun: ["あや"],
    source: "",
    meanings: ["figured cloth", "beautiful"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "綸",
    on: ["リン", "カン"],
    kun: ["いと"],
    source: "",
    meanings: ["thread", "silk cloth"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "羚",
    on: ["レイ", "リョウ"],
    kun: ["かもしか"],
    source: "",
    meanings: ["antelope"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "翔",
    on: ["ショウ"],
    kun: ["かける", "とぶ"],
    source: "",
    meanings: ["soar", "fly"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "脩",
    on: ["シュウ"],
    kun: ["おさめる", "ながい", "ほじし"],
    source: "",
    meanings: ["dried meat"],
    grade: 9,
    jlpt: 1,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "苺",
    on: ["バイ", "マイ"],
    kun: ["いちご"],
    source: "",
    meanings: ["strawberry"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "茉",
    on: ["マツ", "バツ", "マ"],
    kun: [],
    source: "",
    meanings: ["jasmine"],
    grade: 9,
    jlpt: 1,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "莉",
    on: ["リ", "ライ", "レイ"],
    kun: [],
    source: "",
    meanings: ["jasmine"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "菫",
    on: ["キン"],
    kun: ["すみれ"],
    source: "",
    meanings: ["the violet"],
    grade: 9,
    jlpt: 1,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "萠",
    on: ["ホウ"],
    kun: ["もえる", "きざす", "めばえ", "きざし"],
    source: "",
    meanings: ["show symptoms of", "sprout", "bud", "malt"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "蕾",
    on: ["ライ"],
    kun: ["つぼみ"],
    source: "",
    meanings: ["bud (plants", "mushrooms not yet opened)"],
    grade: 9,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "詢",
    on: ["ジュン", "シュン"],
    kun: ["はかる", "まこと"],
    source: "",
    meanings: ["consult with"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "諄",
    on: ["シュン"],
    kun: ["ひちくどい", "くどい", "くどくど", "ねんごろ"],
    source: "",
    meanings: ["tedious"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "赳",
    on: ["キュウ"],
    kun: [],
    source: "",
    meanings: ["strong and brave"],
    grade: 9,
    jlpt: 1,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "迪",
    on: ["テキ"],
    kun: ["みち", "みちびく", "すすむ", "いたる"],
    source: "",
    meanings: ["edify", "way", "path"],
    grade: 9,
    jlpt: 1,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "逞",
    on: ["テイ"],
    kun: ["たくましい"],
    source: "",
    meanings: ["sturdy", "brawny", "bold"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "釉",
    on: ["ユウ"],
    kun: ["うわぐすり"],
    source: "",
    meanings: ["glaze", "enamel"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "頌",
    on: ["ショウ", "ジュ", "ヨウ"],
    kun: ["かたち", "たたえる", "ほめる"],
    source: "",
    meanings: ["eulogy"],
    grade: 9,
    jlpt: 1,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "颯",
    on: ["サツ", "ソウ"],
    kun: ["さっと"],
    source: "",
    meanings: ["sudden", "quick", "sound of the wind"],
    grade: 9,
    jlpt: 1,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "驍",
    on: ["ギョウ", "キョウ"],
    kun: ["たけし", "つよい"],
    source: "",
    meanings: ["strong", "good horse", "gallant", "brave", "ferocious"],
    grade: 9,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "麒",
    on: ["キ"],
    kun: [],
    source: "",
    meanings: ["Chinese unicorn", "genius", "giraffe", "bright", "shining"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "黎",
    on: ["レイ", "リ"],
    kun: ["くろい"],
    source: "",
    meanings: ["dark", "black", "many"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "堯",
    on: ["ギョウ"],
    kun: ["たかい"],
    source: "",
    meanings: ["high", "far"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "槇",
    on: ["テン", "シン"],
    kun: ["まき", "こずえ"],
    source: "",
    meanings: ["twig", "Chinese black pine"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "遙",
    on: ["ヨウ"],
    kun: ["はるか"],
    source: "",
    meanings: ["far off", "distant", "long ago"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "凜",
    on: ["リン"],
    kun: ["きびしい"],
    source: "",
    meanings: ["cold", "strict", "severe"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "熙",
    on: ["キ"],
    kun: ["たのしむ", "ひかる", "ひろい", "よろこぶ", "かわく", "あきらか", "ひろめる", "ひろまる"],
    source: "",
    meanings: ["bright", "sunny", "prosperous", "merry"],
    grade: 9,
    jlpt: 1,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "俠",
    on: ["キョウ", "キャン"],
    kun: ["おとこだて"],
    source: "",
    meanings: ["chivalrous person", "chivalry", "knight-errant", "tomboy"],
    grade: 9,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "摑",
    on: ["カク"],
    kun: ["つかむ", "つかまえる", "つかまる"],
    source: "",
    meanings: ["box one's ears", "slap"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "焰",
    on: ["エン"],
    kun: ["ほのお"],
    source: "",
    meanings: ["flame", "blaze", "glowing", "blazing"],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "禱",
    on: ["トウ"],
    kun: ["いのる", "まつる"],
    source: "",
    meanings: ["pray", "entreat", "beg", "plead", "prayer"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "繡",
    on: ["シュウ"],
    kun: ["ぬいとり"],
    source: "",
    meanings: ["embroider", "embroidery", "ornament"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "繫",
    on: ["ケイ"],
    kun: ["つなぐ", "かかる", "かける"],
    source: "",
    meanings: ["attach", "connect", "unite", "fasten"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "萊",
    on: ["ライ", "リ"],
    kun: ["あかざ", "あれわ", "こうがい"],
    source: "",
    meanings: ["goosefoot", "weed", "fallow field"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "蔣",
    on: ["ショウ", "ソウ"],
    kun: ["まこも", "はげます"],
    source: "",
    meanings: ["surname", "hydropyrum latifalium"],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "蠟",
    on: ["ロウ"],
    kun: ["みつろう", "ろうそく"],
    source: "",
    meanings: ["wax", "candle", "waxy", "glazed"],
    grade: 9,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "醬",
    on: ["ショウ"],
    kun: ["ひしお"],
    source: "",
    meanings: ["any jam-like or paste-like food"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "顚",
    on: ["テン"],
    kun: ["いただき", "たおれる"],
    source: "",
    meanings: ["top", "peak", "summit", "upset"],
    grade: 9,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "鷗",
    on: ["オウ"],
    kun: ["かもめ"],
    source: "",
    meanings: ["seagull", "tern"],
    grade: 9,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "俱",
    on: ["ク"],
    kun: ["ともに"],
    source: "",
    meanings: ["all", "together", "accompany"],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "吞",
    on: ["ドン", "トン", "テン"],
    kun: ["のむ"],
    source: "",
    meanings: ["swallow", "absorb", "annex", "engulf"],
    grade: 9,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "簞",
    on: ["タン"],
    kun: ["はこ"],
    source: "",
    meanings: ["small bamboo basket for holding"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "蟬",
    on: ["セン", "ゼン"],
    kun: ["せみ"],
    source: "",
    meanings: ["cicada", "continuous"],
    grade: 9,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "猪",
    on: ["チョ"],
    kun: ["いのしし", "い"],
    source: "",
    meanings: ["pig"],
    grade: 9,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "渚",
    on: ["ショ"],
    kun: ["なぎさ"],
    source: "",
    meanings: [],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "琢",
    on: ["タク"],
    kun: ["みがく"],
    source: "",
    meanings: [],
    grade: 9,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "祐",
    on: ["ユウ"],
    kun: ["たすけ", "たすける"],
    source: "",
    meanings: [],
    grade: 9,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "禎",
    on: ["テイ"],
    kun: ["さいわい"],
    source: "",
    meanings: [],
    grade: 9,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "薗",
    on: ["エン", "オン"],
    kun: [],
    source: "",
    meanings: ["garden", "yard", "farm"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "駈",
    on: ["ク"],
    kun: ["かける", "かる"],
    source: "",
    meanings: ["run", "gallop", "advance"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "曾",
    on: ["ソウ", "ソ", "ゾウ"],
    kun: ["かつて", "かって", "すなわち"],
    source: "",
    meanings: ["once", "before", "formerly", "ever", "never", "ex-"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "瀧",
    on: ["ロウ", "ソウ"],
    kun: ["たき"],
    source: "",
    meanings: ["waterfall", "rapids", "cascade"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "嶋",
    on: ["トウ"],
    kun: ["しま"],
    source: "",
    meanings: ["island"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "燈",
    on: ["トウ"],
    kun: ["ひ", "ほ", "ともしび", "ともす", "あかり"],
    source: "",
    meanings: ["lamp", "light", "counter for lights"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "埜",
    on: ["ヤ", "ショ"],
    kun: ["の"],
    source: "",
    meanings: ["open country", "field", "wilderness"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "盃",
    on: ["ハイ"],
    kun: ["さかずき"],
    source: "",
    meanings: ["glass", "cup"],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "冨",
    on: ["フ", "フウ"],
    kun: ["とむ", "とみ"],
    source: "",
    meanings: ["enrich", "wealthy", "abundant"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "峯",
    on: ["ホウ"],
    kun: ["みね", "ね"],
    source: "",
    meanings: ["peak", "summit"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "龍",
    on: ["リュウ", "リョウ", "ロウ"],
    kun: ["たつ"],
    source: "",
    meanings: ["dragon", "imperial"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "乘",
    on: ["ジョウ"],
    kun: ["のる", "のせる"],
    source: "",
    meanings: ["power", "multiplication", "record", "counter for vehicles"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "亞",
    on: ["ア"],
    kun: ["つぐ"],
    source: "",
    meanings: ["rank", "follow"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "佛",
    on: ["ブツ", "フツ"],
    kun: ["ほとけ"],
    source: "",
    meanings: ["France"],
    grade: 10,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "來",
    on: ["ライ", "タイ"],
    kun: ["くる", "きたる", "きたす", "きたす", "きたる"],
    source: "",
    meanings: ["come", "due", "next", "cause", "become"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "傳",
    on: ["テン", "デン"],
    kun: ["つたわる", "つたえる", "つたう", "つて"],
    source: "",
    meanings: ["summon", "propagate", "transmit"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "僞",
    on: ["ギ", "カ"],
    kun: ["いつわる", "いつわり", "にせ"],
    source: "",
    meanings: ["lie", "falsehood", "deceive", "pretend"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "價",
    on: ["カ", "ケ"],
    kun: ["あたい"],
    source: "",
    meanings: ["price", "value"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "儉",
    on: ["ケン"],
    kun: ["つましい", "つづまやか"],
    source: "",
    meanings: ["economy", "thrifty"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "兒",
    on: ["ジ", "ニ", "ゲイ"],
    kun: ["こ"],
    source: "",
    meanings: ["child", "young of animals"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "凉",
    on: ["リョウ"],
    kun: ["すずしい", "すずむ", "すずやか", "うすい", "ひやす", "まことに"],
    source: "",
    meanings: ["nice and cool"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "剩",
    on: ["ジョウ"],
    kun: ["あまつさえ", "あまり", "あまる"],
    source: "",
    meanings: ["leftovers", "residue", "remains"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "劍",
    on: ["ケン"],
    kun: ["つるぎ"],
    source: "",
    meanings: ["sword"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "勳",
    on: ["クン"],
    kun: ["いさお"],
    source: "",
    meanings: ["meritorious deed", "merits", "rank"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "卷",
    on: ["カン", "ケン"],
    kun: ["まく", "まき"],
    source: "",
    meanings: ["volume", "book", "part"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "單",
    on: ["タン"],
    kun: ["ひとえ"],
    source: "",
    meanings: ["one", "single", "simple"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "嚴",
    on: ["ゲン", "ゴン"],
    kun: ["おごそか", "きびしい", "いかめしい", "いつくし"],
    source: "",
    meanings: ["strictness", "severity", "rigidity"],
    grade: 10,
    jlpt: null,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "圈",
    on: ["ケン"],
    kun: ["かこい"],
    source: "",
    meanings: ["sphere", "circle", "radius", "range"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "國",
    on: ["コク"],
    kun: ["くに"],
    source: "",
    meanings: ["country"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "圓",
    on: ["エン"],
    kun: ["まるい", "まる", "まど", "まどか", "まろやか"],
    source: "",
    meanings: ["yen", "circle", "round"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "團",
    on: ["ダン", "トン"],
    kun: ["かたまり", "まるい"],
    source: "",
    meanings: ["association"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "壞",
    on: ["カイ", "エ"],
    kun: ["こわす", "こわれる", "やぶる"],
    source: "",
    meanings: ["demolition", "break", "destroy"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "壘",
    on: ["ルイ", "ライ", "スイ"],
    kun: ["とりで"],
    source: "",
    meanings: ["fort", "rampart", "walls", "base(ball)"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "壯",
    on: ["ソウ"],
    kun: ["さかん"],
    source: "",
    meanings: ["big", "large", "robust", "name of tribe"],
    grade: 10,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "壽",
    on: ["ジュ", "ス", "シュウ"],
    kun: ["ことぶき", "ことぶく", "ことほぐ"],
    source: "",
    meanings: ["longevity", "congratulations"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "奧",
    on: ["オウ", "オク"],
    kun: ["おくまる", "くま"],
    source: "",
    meanings: ["heart", "interior"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "奬",
    on: ["ショウ", "ソウ"],
    kun: ["すすめる"],
    source: "",
    meanings: ["prize", "reward", "give award to"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "孃",
    on: ["ジョウ"],
    kun: ["むすめ"],
    source: "",
    meanings: ["girl", "Miss", "daughter"],
    grade: 10,
    jlpt: null,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "實",
    on: ["ジツ", "シツ"],
    kun: ["み", "みのる", "まことに", "みのり", "みちる"],
    source: "",
    meanings: ["truth", "reality"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "寢",
    on: ["シン"],
    kun: ["ねる", "ねかす", "いぬ", "みたまや", "やめる"],
    source: "",
    meanings: ["sleep", "rest", "bed chamber"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "將",
    on: ["ショウ", "ソウ"],
    kun: ["まさに", "はた", "ひきいる", "もって"],
    source: "",
    meanings: ["commander", "general", "admiral"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "專",
    on: ["セン"],
    kun: ["もっぱら"],
    source: "",
    meanings: ["specialty", "exclusive", "mainly", "solely"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "峽",
    on: ["キョウ", "コウ"],
    kun: ["はざま"],
    source: "",
    meanings: ["gorge", "strait", "ravine", "isthmus"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "帶",
    on: ["タイ"],
    kun: ["おびる", "おび"],
    source: "",
    meanings: ["belt", "girdle", "band", "strap", "zone"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "廣",
    on: ["コウ"],
    kun: ["ひろい", "ひろまる", "ひろめる", "ひろがる", "ひろげる"],
    source: "",
    meanings: ["broad", "wide", "spacious"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "廳",
    on: ["チョウ", "テイ"],
    kun: ["やくしょ"],
    source: "",
    meanings: ["hall", "central room"],
    grade: 10,
    jlpt: null,
    strokes: 25,
    examples: [],
    tags: []
  },
  {
    name: "彈",
    on: ["ダン", "タン"],
    kun: ["ひく", "はずむ", "たま", "はじく", "はじける", "ただす"],
    source: "",
    meanings: ["bullet", "twang", "flip", "snap"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "彌",
    on: ["ミ", "ビ"],
    kun: ["いや", "や", "あまねし", "いよいよ", "とおい", "ひさし", "ひさしい", "わたる"],
    source: "",
    meanings: ["extensive", "full", "fill", "complete"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "從",
    on: ["ジュウ", "ショウ", "ジュ"],
    kun: ["したがう", "したがえる", "より"],
    source: "",
    meanings: ["from", "by", "since", "whence", "through"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "恆",
    on: ["コウ"],
    kun: ["つねに"],
    source: "",
    meanings: ["constant", "regular", "persistent"],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "惡",
    on: ["アク", "オ"],
    kun: ["わるい", "あし", "にくい", "ああ", "いずくに", "いずくんぞ", "にくむ"],
    source: "",
    meanings: ["bad", "evil"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "惠",
    on: ["ケイ", "エ"],
    kun: ["めぐむ", "めぐみ"],
    source: "",
    meanings: ["blessing", "grace", "favor", "kindness"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "愼",
    on: ["シン"],
    kun: ["つつしむ", "つつしみ"],
    source: "",
    meanings: ["care", "chastity"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "應",
    on: ["オウ", "ヨウ"],
    kun: ["あたる", "まさに", "こたえる"],
    source: "",
    meanings: ["answer", "yes", "OK", "reply", "accept"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "懷",
    on: ["カイ", "エ"],
    kun: ["ふところ", "なつかしい", "なつかしむ", "なつく", "なつける", "いだく", "おもう"],
    source: "",
    meanings: ["pocket", "feelings", "heart", "yearn", "miss someone", "become attached to", "bosom", "breast"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "戰",
    on: ["セン"],
    kun: ["いくさ", "たたかう", "おののく", "そよぐ"],
    source: "",
    meanings: ["war", "fighting", "battle"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "戲",
    on: ["ギ", "ゲ"],
    kun: ["たわむれる", "たわむれ"],
    source: "",
    meanings: ["play", "frolic", "sport"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "拔",
    on: ["バツ", "ハイ"],
    kun: ["ぬく", "ぬける", "ぬかす", "ぬかる"],
    source: "",
    meanings: ["extract", "pull out", "pilfer", "quote", "remove", "omit"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "拜",
    on: ["ハイ"],
    kun: ["おがむ", "おろがむ"],
    source: "",
    meanings: ["worship", "adore", "pray to"],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "拂",
    on: ["ヒツ", "フツ", "ホツ"],
    kun: ["はらう"],
    source: "",
    meanings: ["clear out", "sweep away"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "搜",
    on: ["ソウ", "シュ", "シュウ"],
    kun: ["さがす"],
    source: "",
    meanings: ["search", "seek", "investigate"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "搖",
    on: ["ヨウ"],
    kun: ["ゆれる", "ゆらぐ", "ゆるぐ", "ゆする", "ゆさぶる", "ゆすぶる", "うごく"],
    source: "",
    meanings: ["wag", "swing", "wave", "shake", "scull"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "攝",
    on: ["セツ", "ショウ"],
    kun: ["おさめる", "かねる", "とる"],
    source: "",
    meanings: ["surrogate", "act in addition to"],
    grade: 10,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "收",
    on: ["シュウ"],
    kun: ["おさめる", "おさまる"],
    source: "",
    meanings: ["income"],
    grade: 10,
    jlpt: null,
    strokes: 6,
    examples: [],
    tags: []
  },
  {
    name: "敍",
    on: ["ジョ"],
    kun: ["ついず", "ついで"],
    source: "",
    meanings: ["express", "state", "relate", "narrate"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "晝",
    on: ["チュウ"],
    kun: ["ひる"],
    source: "",
    meanings: ["daytime", "daylight"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "曉",
    on: ["キョウ", "ギョウ"],
    kun: ["あかつき", "さとる"],
    source: "",
    meanings: ["dawn", "daybreak", "clear", "explicit"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "條",
    on: ["ジョウ", "チョウ", "デキ"],
    kun: ["えだ", "すじ"],
    source: "",
    meanings: ["article", "counter for articles", "clauses", "paragraphs", "etc.", "twig", "ray of light"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "榮",
    on: ["エイ", "ヨウ"],
    kun: ["さかえる", "はえる", "え"],
    source: "",
    meanings: ["flourish", "prosperity", "honour", "glory", "splendour"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "樂",
    on: ["ガク", "ラク", "ゴウ"],
    kun: ["たのしい", "たのしむ", "このむ"],
    source: "",
    meanings: ["music", "comfort"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "樣",
    on: ["ヨウ", "ショウ"],
    kun: ["さま"],
    source: "",
    meanings: ["Esq.", "way", "manner", "situation", "polite suffix"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "檢",
    on: ["ケン"],
    kun: ["しらべる"],
    source: "",
    meanings: ["check", "examine"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "櫻",
    on: ["オウ", "ヨウ"],
    kun: ["さくら"],
    source: "",
    meanings: ["cherry"],
    grade: 10,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "盜",
    on: ["トウ"],
    kun: ["ぬすむ"],
    source: "",
    meanings: ["thief", "to steal"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "氣",
    on: ["キ", "ケ"],
    kun: ["いき"],
    source: "",
    meanings: ["spirit", "mind", "air", "atmosphere", "mood"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "淨",
    on: ["ジョウ", "セイ"],
    kun: ["きよめる", "きよい"],
    source: "",
    meanings: ["pure", "clean", "unspoiled"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "滯",
    on: ["タイ", "テイ"],
    kun: ["とどこおる"],
    source: "",
    meanings: ["block up", "obstruct", "stagnant"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "澁",
    on: ["ジュウ", "シュウ"],
    kun: ["しぶ", "しぶい", "しぶる"],
    source: "",
    meanings: ["astringent", "harsh", "uneven", "rough"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "濕",
    on: ["シツ", "シュウ"],
    kun: ["しめる", "しめす", "うるおう", "うるおす"],
    source: "",
    meanings: ["wet", "moist", "humid", "damp", "an illness"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "燒",
    on: ["ショウ"],
    kun: ["やく", "やける"],
    source: "",
    meanings: ["burn", "bake", "heat", "roast"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "爭",
    on: ["ソウ"],
    kun: ["あらそう", "いかでか"],
    source: "",
    meanings: ["to dispute", "fight", "contend", "strive"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "爲",
    on: ["イ"],
    kun: ["ため", "なる", "なす", "する", "たり", "つくる", "なり"],
    source: "",
    meanings: ["change", "be of use", "reach to", "do", "try", "practice", "cost", "serve as"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "狹",
    on: ["キョウ", "コウ"],
    kun: ["せまい", "せばめる", "せばまる", "さ"],
    source: "",
    meanings: ["narrow", "contract", "reduce", "tight", "limited"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "默",
    on: ["ボク", "モク"],
    kun: ["だまる", "もだす"],
    source: "",
    meanings: ["silent", "quiet", "still", "dark"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "獸",
    on: ["ジュウ"],
    kun: ["けもの", "けだもの"],
    source: "",
    meanings: ["beast", "animal", "bestial"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "疊",
    on: ["ジョウ", "チョウ"],
    kun: ["たたむ", "たたみ", "かさなる", "かさねる"],
    source: "",
    meanings: ["tatami", "counter for tatami mats", "fold", "shut up", "do away with"],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "盡",
    on: ["ジン", "サン"],
    kun: ["つくす", "つきる", "つかす", "さかづき", "ことごとく"],
    source: "",
    meanings: ["exhaust", "use up", "run out of", "deplete", "befriend", "serve"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "眞",
    on: ["シン"],
    kun: ["ま", "まこと"],
    source: "",
    meanings: ["truth", "reality", "Buddhist sect"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "碎",
    on: ["サイ"],
    kun: ["くだく", "くだける"],
    source: "",
    meanings: ["break", "smash", "broken", "busted"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "祕",
    on: ["ヒ"],
    kun: ["ひめる", "かくす"],
    source: "",
    meanings: ["mysterious", "secret", "abstruse"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "禪",
    on: ["ゼン", "セン"],
    kun: ["しずか", "ゆずる"],
    source: "",
    meanings: ["Zen Buddhism", "silent meditation"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "禮",
    on: ["レイ", "ライ"],
    kun: [],
    source: "",
    meanings: ["social custom", "manners", "courtesy", "rites"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "稻",
    on: ["トウ", "テ"],
    kun: ["いね", "いな"],
    source: "",
    meanings: ["rice plant"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "穗",
    on: ["スイ"],
    kun: ["ほ"],
    source: "",
    meanings: ["ear (of grain)", "head", "crest (of wave)"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "粹",
    on: ["スイ"],
    kun: ["いき"],
    source: "",
    meanings: ["pure", "unadulterated", "select"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "縣",
    on: ["ケン"],
    kun: ["かける"],
    source: "",
    meanings: ["county", "district", "subdivision"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "縱",
    on: ["ジュウ"],
    kun: ["たて"],
    source: "",
    meanings: ["indulge in", "give free reign to"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "纖",
    on: ["セン"],
    kun: [],
    source: "",
    meanings: ["fine", "slender", "thin kimono"],
    grade: 10,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "飜",
    on: ["ハン", "ホン"],
    kun: ["ひるがえす", "ひるがえる"],
    source: "",
    meanings: ["flip over", "upset", "capsize"],
    grade: 10,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "聽",
    on: ["チョウ"],
    kun: ["きく", "ゆるす"],
    source: "",
    meanings: ["careful enquiry", "headstrong"],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "臟",
    on: ["ゾウ"],
    kun: ["はらわた"],
    source: "",
    meanings: ["viscera", "bowels"],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "與",
    on: ["ヨ"],
    kun: ["あたえる", "あずかる", "くみする", "ともに"],
    source: "",
    meanings: ["participate in", "give", "award", "impart", "provide", "cause"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "莊",
    on: ["ソウ", "ショウ", "チャン"],
    kun: ["ほうき", "おごそか"],
    source: "",
    meanings: ["broom"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "萬",
    on: ["マン", "バン"],
    kun: ["よろず"],
    source: "",
    meanings: ["ten thousand", "10,000"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "藏",
    on: ["ゾウ", "ソウ"],
    kun: ["くら", "おさめる", "かくれる"],
    source: "",
    meanings: ["hide", "own", "have", "possess"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "藝",
    on: ["ゲイ", "ウン"],
    kun: ["うえる", "のり", "わざ"],
    source: "",
    meanings: ["art", "craft", "performance", "acting", "trick", "stunt"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "藥",
    on: ["ヤク"],
    kun: ["くすり"],
    source: "",
    meanings: ["medicine", "chemical", "enamel", "gunpowder", "benefit"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "衞",
    on: ["エイ", "エ"],
    kun: ["まもる"],
    source: "",
    meanings: ["defense"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "裝",
    on: ["ソウ", "ショウ"],
    kun: ["よそおう", "よそおい"],
    source: "",
    meanings: ["dress", "pretend", "disguise", "profess"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "覽",
    on: ["ラン"],
    kun: ["みる"],
    source: "",
    meanings: ["look at", "inspect", "perceive"],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "謠",
    on: ["ヨウ"],
    kun: ["うたう", "うた"],
    source: "",
    meanings: ["chant (esp. Noh)", "folksong", "ballad"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "讓",
    on: ["ジョウ"],
    kun: ["ゆずる"],
    source: "",
    meanings: ["allow", "permit", "yield", "concede"],
    grade: 10,
    jlpt: null,
    strokes: 24,
    examples: [],
    tags: []
  },
  {
    name: "賣",
    on: ["バイ"],
    kun: ["うる", "うれる"],
    source: "",
    meanings: ["sell", "betray", "show off"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "轉",
    on: ["テン"],
    kun: ["ころがる", "ころげる", "ころがす", "ころぶ", "まろぶ", "うたた", "うつる"],
    source: "",
    meanings: ["shift", "move", "turn"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "醉",
    on: ["スイ"],
    kun: ["よう", "よい"],
    source: "",
    meanings: ["get drunk", "feel sick", "poisoned", "elated", "spellbound"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "釀",
    on: ["ジョウ"],
    kun: ["かもす"],
    source: "",
    meanings: ["brew", "cause"],
    grade: 10,
    jlpt: null,
    strokes: 24,
    examples: [],
    tags: []
  },
  {
    name: "鎭",
    on: ["チン"],
    kun: ["しずめる", "しずまる", "おさえ"],
    source: "",
    meanings: ["ancient peace-preservation centers"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "鑄",
    on: ["チュウ", "シュ", "シュウ"],
    kun: ["いる"],
    source: "",
    meanings: ["cast", "mint"],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  },
  {
    name: "陷",
    on: ["カン"],
    kun: ["おちいる", "おとしいれる"],
    source: "",
    meanings: ["fall into", "cave in", "fall (castle)", "slide into"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "險",
    on: ["ケン"],
    kun: ["けわしい"],
    source: "",
    meanings: ["inaccessible place", "impregnable position", "steep place", "sharp eyes"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "雜",
    on: ["ザツ", "ゾウ"],
    kun: ["まじえる", "まじる"],
    source: "",
    meanings: ["mixed", "blended", "mix", "mingle"],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "靜",
    on: ["セイ", "ジョウ"],
    kun: ["しず", "しずか", "しずまる", "しずめる"],
    source: "",
    meanings: ["quiet"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "顯",
    on: ["ケン"],
    kun: ["あきらか", "あらわれる"],
    source: "",
    meanings: ["manifest", "display", "evident", "clear"],
    grade: 10,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "騷",
    on: ["ソウ"],
    kun: ["さわぐ", "うれい", "さわがしい"],
    source: "",
    meanings: ["harass", "bother", "annoy", "disturb", "agitate", "sad", "grieved"],
    grade: 10,
    jlpt: null,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "驗",
    on: ["ケン", "ゲン"],
    kun: ["あかし", "しるし", "ためす", "ためし"],
    source: "",
    meanings: ["verification", "effect", "testing"],
    grade: 10,
    jlpt: null,
    strokes: 23,
    examples: [],
    tags: []
  },
  {
    name: "髮",
    on: ["ハツ"],
    kun: ["かみ"],
    source: "",
    meanings: ["hair"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "鷄",
    on: ["ケイ"],
    kun: ["にわとり", "とり"],
    source: "",
    meanings: ["chicken"],
    grade: 10,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "齊",
    on: ["セイ", "サイ"],
    kun: ["そろう", "ひとしい", "ひとしく", "あたる", "はやい"],
    source: "",
    meanings: ["alike", "equal", "similar", "Saito"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "擊",
    on: ["ゲキ"],
    kun: ["うつ"],
    source: "",
    meanings: ["strike", "hit", "beat", "attack", "fight"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "瘦",
    on: ["ソウ", "チュウ", "シュウ", "チュ"],
    kun: ["やせる"],
    source: "",
    meanings: ["thin", "emaciated", "lean", "meager"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "卽",
    on: ["ソク", "ショク"],
    kun: ["つく", "すなわち", "もし"],
    source: "",
    meanings: ["promptly"],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "增",
    on: ["ゾウ", "ソウ"],
    kun: ["ます", "ふえる", "ふやす"],
    source: "",
    meanings: ["increase", "add to", "augment"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "寬",
    on: ["カン"],
    kun: ["ひろい", "ゆるやか", "くつろぐ"],
    source: "",
    meanings: ["broad", "wide", "spacious", "vast"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "巢",
    on: [],
    kun: [],
    source: "",
    meanings: ["nest", "living quarter in tree"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "徵",
    on: ["チョウ", "チ"],
    kun: ["しるし", "めす"],
    source: "",
    meanings: ["summon", "recruit", "musical note"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "德",
    on: ["トク"],
    kun: ["おしえ"],
    source: "",
    meanings: ["ethics", "morality", "virtue"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "揭",
    on: ["ケイ", "ケツ"],
    kun: ["かかげる"],
    source: "",
    meanings: ["raise", "lift up", "surname"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "晚",
    on: ["バン"],
    kun: ["くれ", "おそい"],
    source: "",
    meanings: ["night", "evening", "late"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "曆",
    on: ["レキ"],
    kun: ["こよみ"],
    source: "",
    meanings: ["calendar", "era"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "橫",
    on: ["オウ", "コウ"],
    kun: ["よこ", "よこたわる", "よこたえる"],
    source: "",
    meanings: ["across", "horizontal", "lateral"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "步",
    on: ["ホ", "ブ", "フ"],
    kun: ["あるく", "あゆむ", "あゆみ"],
    source: "",
    meanings: ["step", "pace", "walk", "stroll"],
    grade: 10,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "歷",
    on: [],
    kun: [],
    source: "",
    meanings: ["take place", "past", "history"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "每",
    on: ["マイ", "バイ"],
    kun: ["つね"],
    source: "",
    meanings: ["every", "each"],
    grade: 10,
    jlpt: null,
    strokes: 7,
    examples: [],
    tags: []
  },
  {
    name: "涉",
    on: ["ショウ"],
    kun: ["わたる", "かかわる"],
    source: "",
    meanings: ["ford stream", "wade across"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "淚",
    on: ["ルイ", "レイ"],
    kun: ["なみだ"],
    source: "",
    meanings: ["tears", "weep", "cry"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "渴",
    on: ["カツ"],
    kun: ["かわく", "かわき"],
    source: "",
    meanings: ["thirsty", "parched", "yearn", "pine"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "溫",
    on: ["オン", "ウン"],
    kun: ["あたたか", "あたためる"],
    source: "",
    meanings: ["lukewarm", "warm", "tepid", "mild"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "瀨",
    on: ["ライ"],
    kun: ["せ"],
    source: "",
    meanings: ["swift current", "rapids"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "狀",
    on: ["ジョウ"],
    kun: [],
    source: "",
    meanings: ["form", "appearance", "shape", "official"],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "綠",
    on: ["リョク", "ロク"],
    kun: ["みどり"],
    source: "",
    meanings: ["green", "chlorine"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "緖",
    on: ["ショ", "チョ"],
    kun: ["お", "いとぐち"],
    source: "",
    meanings: ["end of thread", "thread", "clue"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "緣",
    on: ["エン"],
    kun: ["ふち", "へり", "よる"],
    source: "",
    meanings: ["hem", "margin", "reason", "cause", "karma", "fate"],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "薰",
    on: ["クン"],
    kun: ["かおる", "かおりぐさ", "かおり"],
    source: "",
    meanings: ["a medicinal herb", "to cauterize"],
    grade: 10,
    jlpt: null,
    strokes: 20,
    examples: [],
    tags: []
  },
  {
    name: "虛",
    on: ["キョ", "コ"],
    kun: ["むなしい"],
    source: "",
    meanings: ["false", "worthless", "empty", "hollow"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "賴",
    on: ["ライ"],
    kun: ["たのむ", "たよる", "たより"],
    source: "",
    meanings: ["rely", "depend on", "accuse falsely"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "郞",
    on: ["ロウ"],
    kun: ["おとこ"],
    source: "",
    meanings: ["gentleman"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "錄",
    on: ["ロク", "リョ"],
    kun: ["しるす"],
    source: "",
    meanings: ["copy", "write down", "record"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "鍊",
    on: ["レン"],
    kun: ["ねる"],
    source: "",
    meanings: ["smelt metals", "forge", "refine"],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "黃",
    on: ["コウ", "オウ"],
    kun: ["き"],
    source: "",
    meanings: ["yellow", "surname"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "黑",
    on: ["コク"],
    kun: ["くろい", "くろ"],
    source: "",
    meanings: ["black", "dark", "evil", "sinister"],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "欄",
    on: [],
    kun: [],
    source: "",
    meanings: ["railing", "balustrade", "animal pan"],
    grade: 10,
    jlpt: null,
    strokes: 21,
    examples: [],
    tags: []
  },
  {
    name: "廊",
    on: [],
    kun: [],
    source: "",
    meanings: ["corridor", "porch", "veranda"],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "朗",
    on: [],
    kun: [],
    source: "",
    meanings: ["clear", "bright", "distinct"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "虜",
    on: [],
    kun: [],
    source: "",
    meanings: ["capture", "imprison", "seize", "prison"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "類",
    on: [],
    kun: [],
    source: "",
    meanings: ["class", "group", "kind", "category"],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "神",
    on: ["シン", "ジン"],
    kun: ["かみ", "こう", "たましい"],
    source: "",
    meanings: ["spirit"],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "祥",
    on: ["ショウ"],
    kun: ["さいわい"],
    source: "",
    meanings: ["good luck"],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "福",
    on: ["フク"],
    kun: ["さいわい", "ひもろぎ"],
    source: "",
    meanings: ["happiness"],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "諸",
    on: ["ショ"],
    kun: ["もろ", "これ"],
    source: "",
    meanings: ["several"],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "都",
    on: [],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 11,
    examples: [],
    tags: []
  },
  {
    name: "侮",
    on: ["ブ"],
    kun: ["あなどる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "僧",
    on: ["ソウ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "勉",
    on: ["ベン"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "勤",
    on: ["キン", "ゴン"],
    kun: ["つとまる", "つとめる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "卑",
    on: ["ヒ"],
    kun: ["いやしい", "いやしむ", "いやしめる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "嘆",
    on: ["タン"],
    kun: ["なげかわしい", "なげく"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "器",
    on: ["キ"],
    kun: ["うつわ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "墨",
    on: ["ボク"],
    kun: ["すみ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "層",
    on: ["ソウ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "悔",
    on: ["カイ"],
    kun: ["くいる", "くやしい", "くやむ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "憎",
    on: ["ゾウ"],
    kun: ["にくい", "にくしみ", "にくむ", "にくらしい"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "懲",
    on: ["チョウ"],
    kun: ["こらしめる", "こらす", "こりる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "敏",
    on: ["ビン"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "暑",
    on: ["ショ"],
    kun: ["あつい"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "梅",
    on: ["バイ"],
    kun: ["うめ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "海",
    on: ["カイ"],
    kun: ["うみ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "漢",
    on: ["カン"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "煮",
    on: ["シャ"],
    kun: ["にえる", "にやす", "にる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "碑",
    on: ["ヒ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "社",
    on: ["シャ"],
    kun: ["やしろ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 8,
    examples: [],
    tags: []
  },
  {
    name: "祉",
    on: ["ツ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "祈",
    on: ["キ"],
    kun: ["いのる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "祖",
    on: ["ソ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "祝",
    on: ["シュウ", "シュク"],
    kun: ["いわう"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "禍",
    on: ["カ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "穀",
    on: ["コク"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "突",
    on: ["トツ"],
    kun: ["つく"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "節",
    on: ["セチ", "セツ"],
    kun: ["ふし"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "練",
    on: ["コウ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 15,
    examples: [],
    tags: []
  },
  {
    name: "繁",
    on: ["ハン"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 17,
    examples: [],
    tags: []
  },
  {
    name: "署",
    on: ["ショ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 14,
    examples: [],
    tags: []
  },
  {
    name: "者",
    on: ["シャ"],
    kun: ["もの"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 9,
    examples: [],
    tags: []
  },
  {
    name: "臭",
    on: ["シュウ"],
    kun: ["くさい"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 10,
    examples: [],
    tags: []
  },
  {
    name: "著",
    on: ["チョ"],
    kun: ["あらわす", "いちじるしい"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "視",
    on: ["シ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "謁",
    on: ["エツ"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 16,
    examples: [],
    tags: []
  },
  {
    name: "謹",
    on: ["キン"],
    kun: ["つつしむ"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 18,
    examples: [],
    tags: []
  },
  {
    name: "賓",
    on: ["ヒン"],
    kun: [],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 13,
    examples: [],
    tags: []
  },
  {
    name: "贈",
    on: ["ソウ", "ゾウ"],
    kun: ["おくる"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "逸",
    on: [],
    kun: ["しんにょう"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 12,
    examples: [],
    tags: []
  },
  {
    name: "難",
    on: ["ナン"],
    kun: ["かたい", "むずかしい"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 19,
    examples: [],
    tags: []
  },
  {
    name: "響",
    on: ["キョウ"],
    kun: ["ひびく"],
    source: "",
    meanings: [],
    grade: 10,
    jlpt: null,
    strokes: 22,
    examples: [],
    tags: []
  }
]

export const handlers = [
  rest.get(`${api}/kanji/random`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        character: "化",
        grade: 3,
        strokes: 4,
        jlpt: 2,
        source: "https://en.wiktionary.org/wiki/%E5%8C%96#Kanji",
        meanings: ["take the form of", "enchant", "change", "influence", "delude"],
        readings: [
          {
            value: "け",
            type: "on"
          },
          {
            value: "ばかす",
            type: "kun"
          },
          {
            value: "ばける",
            type: "kun"
          },
          {
            value: "か",
            type: "on"
          }
        ],
        examples: [
          {
            value: "文化",
            kana: ["ぶんか"],
            english: ["culture", "civilisation"]
          },
          {
            value: "悪化",
            kana: ["あっか"],
            english: ["growing worse", "(suffer) deterioration"]
          },
          {
            value: "強化",
            kana: ["きょうか"],
            english: ["intensify", "solidify", "strengthen", "reinforce"]
          },
          {
            value: "変化",
            kana: ["へんか"],
            english: ["change", "alteration", "variation", "mutation"]
          },
          {
            value: "化学",
            kana: ["ばけがく", "かがく"],
            english: ["chemistry"]
          }
        ],
        tags: ["verb"]
      })
    )
  }),
  rest.get(`${api}/kanji/random`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}))
  }),
  rest.get(`${api}/kanji/all`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(kanji))
  }),
  rest.post(`${api}/kanji/by-filter`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            field: "meaning",
            value: {
              character: "一",
              grade: 1,
              strokes: 1,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
              meanings: ["one"],
              readings: [
                {
                  value: "ひとつ",
                  type: "kun"
                },
                {
                  value: "ひと",
                  type: "kun"
                },
                {
                  value: "いち",
                  type: "on"
                },
                {
                  value: "いつ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "一月",
                  kana: ["いちがつ"],
                  english: ["January"]
                },
                {
                  value: "一つ",
                  kana: ["ひとつ"],
                  english: ["one"]
                },
                {
                  value: "一番",
                  kana: ["いちばん"],
                  english: ["first", "number one", "game", "round", "best", "bout"]
                },
                {
                  value: "一部",
                  kana: ["いちぶ"],
                  english: ["one part", "one section", "some", "one portion"]
                },
                {
                  value: "一般",
                  kana: ["いっぱん"],
                  english: ["general", "universal", "ordinary", "liberal"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "右",
              grade: 1,
              strokes: 5,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
              meanings: ["right"],
              readings: [
                {
                  value: "ゆう",
                  type: "on"
                },
                {
                  value: "う",
                  type: "on"
                },
                {
                  value: "みぎ",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "右翼",
                  kana: ["うよく"],
                  english: ["right wing (political)"]
                },
                {
                  value: "右手",
                  kana: ["みぎて"],
                  english: ["right hand"]
                },
                {
                  value: "左右",
                  kana: ["さゆう"],
                  english: ["control", "influence", "left and right"]
                }
              ],
              tags: ["direction"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "雨",
              grade: 1,
              strokes: 8,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E9%9B%A8#Kanji",
              meanings: ["rain"],
              readings: [
                {
                  value: "あめ",
                  type: "kun"
                },
                {
                  value: "あま",
                  type: "kun"
                },
                {
                  value: "う",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "雨",
                  kana: ["あめ"],
                  english: ["rain"]
                },
                {
                  value: "雨水",
                  kana: ["うすい", "あまみず"],
                  english: ["rain water"]
                },
                {
                  value: "雨量",
                  kana: ["うりょう"],
                  english: ["rainfall"]
                },
                {
                  value: "梅雨",
                  kana: ["つゆ", "ばいう"],
                  english: ["rainy season"]
                },
                {
                  value: "大雨",
                  kana: ["おおあめ"],
                  english: ["heavy rain"]
                }
              ],
              tags: ["weather"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "円",
              grade: 1,
              strokes: 4,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%86%86#Kanji",
              meanings: ["yen", "circle", "round"],
              readings: [
                {
                  value: "まる",
                  type: "kun"
                },
                {
                  value: "えん",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "円安",
                  kana: ["えんやす"],
                  english: ["cheap yen"]
                },
                {
                  value: "円相場",
                  kana: ["えんそうば"],
                  english: ["yen exchange rate"]
                },
                {
                  value: "円高",
                  kana: ["えんだか"],
                  english: ["valued yen"]
                },
                {
                  value: "円",
                  kana: ["まる", "えん"],
                  english: ["money", "Yen", "circle"]
                },
                {
                  value: "一円",
                  kana: ["いちえん"],
                  english: ["whole district", "one yen", "throughout"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "王",
              grade: 1,
              strokes: 4,
              jlpt: 2,
              source: "https://en.wiktionary.org/wiki/%E7%8E%8B#Kanji",
              meanings: ["rule", "king", "magnate"],
              readings: [
                {
                  value: "きみ",
                  type: "kun"
                },
                {
                  value: "おう",
                  type: "on"
                },
                {
                  value: "おおきみ",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "王",
                  kana: ["おう"],
                  english: ["sovereign", "ruler", "monarch", "king"]
                },
                {
                  value: "王座",
                  kana: ["おうざ"],
                  english: ["throne"]
                },
                {
                  value: "女王",
                  kana: ["じょおう"],
                  english: ["queen"]
                },
                {
                  value: "国王",
                  kana: ["こくおう"],
                  english: ["king"]
                },
                {
                  value: "王国",
                  kana: ["おうこく"],
                  english: ["monarchy", "kingdom"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "音",
              grade: 1,
              strokes: 9,
              jlpt: 3,
              source: "https://en.wiktionary.org/wiki/%E9%9F%B3#Kanji",
              meanings: ["noise", "sound"],
              readings: [
                {
                  value: "ね",
                  type: "kun"
                },
                {
                  value: "おん",
                  type: "on"
                },
                {
                  value: "いん",
                  type: "on"
                },
                {
                  value: "おと",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "本音",
                  kana: ["ほんね"],
                  english: ["real intention", "motive"]
                },
                {
                  value: "騒音",
                  kana: ["そうおん"],
                  english: ["noise"]
                },
                {
                  value: "音",
                  kana: ["おん", "おと", "ね"],
                  english: ["noise", "sound"]
                },
                {
                  value: "音声",
                  kana: ["おんせい, おんじょう"],
                  english: ["voice"]
                },
                {
                  value: "音楽",
                  kana: ["おんがく"],
                  english: ["musical movement", "music"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "下",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%8B#Kanji",
              meanings: ["descend", "low", "give", "inferior", "below", "down"],
              readings: [
                {
                  value: "もと",
                  type: "kun"
                },
                {
                  value: "げ",
                  type: "on"
                },
                {
                  value: "か",
                  type: "on"
                },
                {
                  value: "した",
                  type: "kun"
                },
                {
                  value: "しも",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "下げる",
                  kana: ["さげる"],
                  english: ["to lower", "to move back", "to wear", "to hang"]
                },
                {
                  value: "引き下げ",
                  kana: ["ひきさげ"],
                  english: ["reduction", "cut"]
                },
                {
                  value: "下り",
                  kana: ["くだり"],
                  english: ["train"]
                },
                {
                  value: "下院",
                  kana: ["かいん"],
                  english: ["house", "lower"]
                },
                {
                  value: "下",
                  kana: ["もと"],
                  english: ["under"]
                }
              ],
              tags: ["direction"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "火",
              grade: 1,
              strokes: 4,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E7%81%AB#Kanji",
              meanings: ["fire"],
              readings: [
                {
                  value: "か",
                  type: "on"
                },
                {
                  value: "ひ",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "火災",
                  kana: ["かさい"],
                  english: ["fire", "conflagration"]
                },
                {
                  value: "火山",
                  kana: ["かざん"],
                  english: ["volcano"]
                },
                {
                  value: "噴火",
                  kana: ["ふんか"],
                  english: ["eruption"]
                },
                {
                  value: "火砕流",
                  kana: ["かさいりゅう"],
                  english: ["pyroclastic flow"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "花",
              grade: 1,
              strokes: 7,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E8%8A%B1#Kanji",
              meanings: ["flower"],
              readings: [
                {
                  value: "はな",
                  type: "kun"
                },
                {
                  value: "か",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "花見",
                  kana: ["はなみ"],
                  english: ["flowing viewing", "cherry blossom viewing"]
                },
                {
                  value: "花火",
                  kana: ["はなび"],
                  english: ["fireworks"]
                },
                {
                  value: "花",
                  kana: ["はな"],
                  english: ["petal", "bloom", "blossom", "flower"]
                },
                {
                  value: "花びら",
                  kana: ["はなびら", "かべん"],
                  english: ["flower petal"]
                },
                {
                  value: "花園",
                  kana: ["はなぞの", "かえん"],
                  english: ["flower garden"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "貝",
              grade: 1,
              strokes: 7,
              jlpt: 2,
              source: "https://en.wiktionary.org/wiki/%E8%B2%9D#Kanji",
              meanings: ["shellfish"],
              readings: [
                {
                  value: "ばい",
                  type: "on"
                },
                {
                  value: "かい",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "貝",
                  kana: ["かい"],
                  english: ["shell", "shellfish"]
                },
                {
                  value: "貝",
                  kana: ["ばい", "バイ"],
                  english: ["Japanese babylon (species of shelled mollusk)"]
                },
                {
                  value: "巻き貝",
                  kana: ["まきがい"],
                  english: ["snail", "spiral shell"]
                },
                {
                  value: "貝殻",
                  kana: ["かいがら"],
                  english: ["shell"]
                },
                {
                  value: "貝塚",
                  kana: ["かいづか", "かいずか"],
                  english: ["shell mound", "kitchen midden", "shell heap"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "学",
              grade: 1,
              strokes: 8,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%AD%A6#Kanji",
              meanings: ["study", "learning", "science"],
              readings: [
                {
                  value: "まなぶ",
                  type: "kun"
                },
                {
                  value: "がく",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "科学",
                  kana: ["かがく"],
                  english: ["science"]
                },
                {
                  value: "学校",
                  kana: ["がっこう"],
                  english: ["school"]
                },
                {
                  value: "医学",
                  kana: ["いがく"],
                  english: ["medicine", "medical science"]
                },
                {
                  value: "大学",
                  kana: ["だいがく"],
                  english: ["secondary school"]
                },
                {
                  value: "学生",
                  kana: ["がくせい"],
                  english: ["student"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "気",
              grade: 1,
              strokes: 6,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E6%B0%97#Kanji",
              meanings: ["mood", "spirit", "atmosphere", "air", "mind"],
              readings: [
                {
                  value: "いき",
                  type: "kun"
                },
                {
                  value: "き",
                  type: "on"
                },
                {
                  value: "け",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "気持ち",
                  kana: ["きもち"],
                  english: ["mood", "sensation", "feeling"]
                },
                {
                  value: "人気",
                  kana: ["にんき"],
                  english: ["popular feeling", "business conditions", "popular"]
                },
                {
                  value: "電気",
                  kana: ["でんき"],
                  english: ["light", "electricity"]
                },
                {
                  value: "気",
                  kana: ["き"],
                  english: ["heart", "spirit", "disposition", "mind", "nature"]
                },
                {
                  value: "景気",
                  kana: ["けいき"],
                  english: ["business", "state", "condition"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "休",
              grade: 1,
              strokes: 6,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%BC%91#Kanji",
              meanings: ["rest"],
              readings: [
                {
                  value: "やすむ",
                  type: "kun"
                },
                {
                  value: "きゅう",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "休暇",
                  kana: ["きゅうか"],
                  english: ["holiday", "day off", "furlough"]
                },
                {
                  value: "休業",
                  kana: ["きゅうぎょう"],
                  english: ["closed (e.g. store)", "business suspended"]
                },
                {
                  value: "休み",
                  kana: ["やすみ"],
                  english: ["holiday", "respite", "recess", "rest", "vacation"]
                },
                {
                  value: "夏休み",
                  kana: ["なつやすみ"],
                  english: ["summer holiday"]
                },
                {
                  value: "休日",
                  kana: ["きゅうかきゅうか"],
                  english: ["holiday", "day off"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "玉",
              grade: 1,
              strokes: 5,
              jlpt: 2,
              source: "https://en.wiktionary.org/wiki/%E7%8E%89#Kanji",
              meanings: ["jewel", "ball"],
              readings: [
                {
                  value: "たま",
                  type: "kun"
                },
                {
                  value: "ぎょく",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "玉",
                  kana: ["たま"],
                  english: ["pearl", "coin", "jewel", "testicles", "sphere", "ball"]
                },
                {
                  value: "お年玉",
                  kana: ["おとしだま"],
                  english: ["New Year’s gift"]
                },
                {
                  value: "替え玉",
                  kana: ["かえだま"],
                  english: ["double", "substitute"]
                },
                {
                  value: "玉虫色",
                  kana: ["たまむしいろ"],
                  english: ["iridescent", "ambivalent", "equivocal"]
                },
                {
                  value: "目玉",
                  kana: ["めだま"],
                  english: ["eyeball", "special feature", "centerpiece"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "金",
              grade: 1,
              strokes: 8,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E9%87%91#Kanji",
              meanings: ["money", "gold"],
              readings: [
                {
                  value: "かな",
                  type: "kun"
                },
                {
                  value: "こん",
                  type: "on"
                },
                {
                  value: "きん",
                  type: "on"
                },
                {
                  value: "かね",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "お金",
                  kana: ["おかね"],
                  english: ["money"]
                },
                {
                  value: "献金",
                  kana: ["けんきん"],
                  english: ["contribution", "offering", "donation"]
                },
                {
                  value: "金利",
                  kana: ["きんり"],
                  english: ["interest rates"]
                },
                {
                  value: "金融",
                  kana: ["きんゆう"],
                  english: ["financing", "credit transacting"]
                },
                {
                  value: "資金",
                  kana: ["しきん"],
                  english: ["funds", "capital"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "九",
              grade: 1,
              strokes: 2,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B9%9D#Kanji",
              meanings: ["nine"],
              readings: [
                {
                  value: "く",
                  type: "on"
                },
                {
                  value: "ここの",
                  type: "kun"
                },
                {
                  value: "きゅう",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "九",
                  kana: ["ここの", "ここ", "きゅう", "この", "く"],
                  english: ["nine"]
                },
                {
                  value: "十九",
                  kana: ["じゅうきゅう"],
                  english: ["nineteen"]
                },
                {
                  value: "九州",
                  kana: ["きゅうしゅう"],
                  english: ["Kyushu"]
                },
                {
                  value: "九十",
                  kana: ["くじゅう", "きゅうじゅう"],
                  english: ["ninety"]
                },
                {
                  value: "九月",
                  kana: ["くがつ"],
                  english: ["September"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "空",
              grade: 1,
              strokes: 8,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E7%A9%BA#Kanji",
              meanings: ["sky", "void", "empty"],
              readings: [
                {
                  value: "そら",
                  type: "kun"
                },
                {
                  value: "くう",
                  type: "on"
                },
                {
                  value: "く",
                  type: "on"
                },
                {
                  value: "あく",
                  type: "kun"
                },
                {
                  value: "から",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "航空",
                  kana: ["こうくう"],
                  english: ["aviation"]
                },
                {
                  value: "空",
                  kana: ["から"],
                  english: ["emptiness", "vacuum", "blank"]
                },
                {
                  value: "航空機",
                  kana: ["こうくうき"],
                  english: ["aircraft", "aeroplane", "airplane"]
                },
                {
                  value: "空港",
                  kana: ["くうこう"],
                  english: ["airport"]
                },
                {
                  value: "空気",
                  kana: ["くうき"],
                  english: ["atmosphere", "air"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "月",
              grade: 1,
              strokes: 4,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E6%9C%88#Kanji",
              meanings: ["moon", "month"],
              readings: [
                {
                  value: "げつ",
                  type: "on"
                },
                {
                  value: "がつ",
                  type: "on"
                },
                {
                  value: "つき",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "一月",
                  kana: ["いちがつ"],
                  english: ["January"]
                },
                {
                  value: "九月",
                  kana: ["くがつ"],
                  english: ["September"]
                },
                {
                  value: "三月",
                  kana: ["さんがつ"],
                  english: ["March"]
                },
                {
                  value: "五月",
                  kana: ["ごがつ"],
                  english: ["May"]
                },
                {
                  value: "今月",
                  kana: ["こんげつ"],
                  english: ["this month"]
                }
              ],
              tags: ["time"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "犬",
              grade: 1,
              strokes: 4,
              jlpt: 3,
              source: "https://en.wiktionary.org/wiki/%E7%8A%AC#Kanji",
              meanings: ["dog"],
              readings: [
                {
                  value: "いぬ",
                  type: "kun"
                },
                {
                  value: "けん",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "野犬",
                  kana: ["やけん"],
                  english: ["stray dog"]
                },
                {
                  value: "愛犬",
                  kana: ["あいけん"],
                  english: ["pet dog"]
                },
                {
                  value: "犬",
                  kana: ["いぬ"],
                  english: ["dog"]
                },
                {
                  value: "盲導犬",
                  kana: ["もうどうけん"],
                  english: ["guide dog for the blind"]
                },
                {
                  value: "飼い犬",
                  kana: ["かいいぬ"],
                  english: ["pet dog"]
                }
              ],
              tags: ["animal"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "見",
              grade: 1,
              strokes: 7,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E8%A6%8B#Kanji",
              meanings: ["see", "opinion"],
              readings: [
                {
                  value: "げん",
                  type: "on"
                },
                {
                  value: "けん",
                  type: "on"
                },
                {
                  value: "みる",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "会見",
                  kana: ["かいけん"],
                  english: ["audience", "interview"]
                },
                {
                  value: "見方",
                  kana: ["みかた"],
                  english: ["viewpoint"]
                },
                {
                  value: "見直し",
                  kana: ["みなおし"],
                  english: ["revision", "reconsideration", "review"]
                },
                {
                  value: "見通し",
                  kana: ["みとおし"],
                  english: ["outlook", "perspective", "unobstructed view"]
                },
                {
                  value: "意見",
                  kana: ["いけん"],
                  english: ["opinion", "view"]
                }
              ],
              tags: ["verb"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "五",
              grade: 1,
              strokes: 4,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%BA%94#Kanji",
              meanings: ["five"],
              readings: [
                {
                  value: "いつ",
                  type: "kun"
                },
                {
                  value: "ご",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "十五",
                  kana: ["じゅうご"],
                  english: ["fifteen"]
                },
                {
                  value: "五",
                  kana: ["い", "いつ", "ご"],
                  english: ["five"]
                },
                {
                  value: "五十",
                  kana: ["い", "ごじゅう", "いそ"],
                  english: ["fifty"]
                },
                {
                  value: "五輪",
                  kana: ["ごりん"],
                  english: ["the Olympics"]
                },
                {
                  value: "五月",
                  kana: ["ごがつ"],
                  english: ["May"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "口",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%8F%A3#Kanji",
              meanings: ["mouth"],
              readings: [
                {
                  value: "くち",
                  type: "kun"
                },
                {
                  value: "く",
                  type: "on"
                },
                {
                  value: "こう",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "人口",
                  kana: ["じんこう"],
                  english: ["common talk", "population"]
                },
                {
                  value: "窓口",
                  kana: ["まどぐち"],
                  english: ["teller window", "ticket window", "counter"]
                },
                {
                  value: "口",
                  kana: ["くち"],
                  english: ["hole", "orifice", "mouth", "opening", "gap"]
                },
                {
                  value: "入り口",
                  kana: ["いりくち", "は", "はいりぐち", "いりぐち"],
                  english: ["approach", "entrance", "mouth", "entry", "gate"]
                },
                {
                  value: "口座",
                  kana: ["こうざ"],
                  english: ["account"]
                }
              ],
              tags: ["body"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "校",
              grade: 1,
              strokes: 10,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E6%A0%A1#Kanji",
              meanings: ["school", "printing", "exam"],
              readings: [
                {
                  value: "きょう",
                  type: "on"
                },
                {
                  value: "こう",
                  type: "on"
                },
                {
                  value: "かせ",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "高校",
                  kana: ["こうこう"],
                  english: ["senior high school"]
                },
                {
                  value: "高校生",
                  kana: ["こうこうせい"],
                  english: ["senior high school student"]
                },
                {
                  value: "学校",
                  kana: ["がっこう"],
                  english: ["school"]
                },
                {
                  value: "小学校",
                  kana: ["しょうがっこう"],
                  english: ["primary school", "elementary school"]
                },
                {
                  value: "校長",
                  kana: ["こうちょう"],
                  english: ["headmaster", "principal"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "左",
              grade: 1,
              strokes: 5,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%B7%A6#Kanji",
              meanings: ["left"],
              readings: [
                {
                  value: "さ",
                  type: "on"
                },
                {
                  value: "ひだり",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "左右",
                  kana: ["さゆう"],
                  english: ["control", "influence", "left and right"]
                },
                {
                  value: "向かって左",
                  kana: ["むかってひだり"],
                  english: ["on the left as one faces it"]
                },
                {
                  value: "左翼",
                  kana: ["さよく"],
                  english: ["left wing (political)"]
                }
              ],
              tags: ["direction"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "三",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%89#Kanji",
              meanings: ["three"],
              readings: [
                {
                  value: "み",
                  type: "kun"
                },
                {
                  value: "さん",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "三人",
                  kana: ["みたり", "さんにん"],
                  english: ["three people"]
                },
                {
                  value: "三",
                  kana: ["さん", "み"],
                  english: ["three"]
                },
                {
                  value: "三つ",
                  kana: ["みっつ"],
                  english: ["three things"]
                },
                {
                  value: "三月",
                  kana: ["さんがつ"],
                  english: ["March"]
                },
                {
                  value: "十三",
                  kana: ["じゅうさん"],
                  english: ["thirteen"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "山",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%B1%B1#Kanji",
              meanings: ["mountain"],
              readings: [
                {
                  value: "さん",
                  type: "on"
                },
                {
                  value: "せん",
                  type: "on"
                },
                {
                  value: "やま",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "登山",
                  kana: ["とざん"],
                  english: ["mountain climbing"]
                },
                {
                  value: "山形",
                  kana: ["やまがた"],
                  english: ["mountain shaped"]
                },
                {
                  value: "青山",
                  kana: ["せいざん"],
                  english: ["blue or green mountain", "grave", "burial place"]
                },
                {
                  value: "火山",
                  kana: ["かざん"],
                  english: ["volcano"]
                },
                {
                  value: "山",
                  kana: ["やま"],
                  english: ["pile", "heap", "mountain", "climax", "critical point"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "四",
              grade: 1,
              strokes: 5,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%9B%9B#Kanji",
              meanings: ["four"],
              readings: [
                {
                  value: "よん",
                  type: "kun"
                },
                {
                  value: "よつ",
                  type: "kun"
                },
                {
                  value: "し",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "四十",
                  kana: ["よそ", "よんじゅう", "しじゅう"],
                  english: ["forty"]
                },
                {
                  value: "四",
                  kana: ["し", "よ", "よん"],
                  english: ["four"]
                },
                {
                  value: "四つ",
                  kana: ["よっつ"],
                  english: ["four things"]
                },
                {
                  value: "十四",
                  kana: ["じゅうよん", "じゅうし"],
                  english: ["fourteen"]
                },
                {
                  value: "四月",
                  kana: ["しがつ"],
                  english: ["April"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "子",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%AD%90#Kanji",
              meanings: ["child", "sign of the rat"],
              readings: [
                {
                  value: "す",
                  type: "on"
                },
                {
                  value: "こ",
                  type: "kun"
                },
                {
                  value: "し",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "子供",
                  kana: ["こども"],
                  english: ["children"]
                },
                {
                  value: "原子力",
                  kana: ["げんしりょく"],
                  english: ["atomic", "energy"]
                },
                {
                  value: "子",
                  kana: ["こ"],
                  english: ["child"]
                },
                {
                  value: "男子",
                  kana: ["だんし"],
                  english: ["young man", "youth"]
                },
                {
                  value: "女子",
                  kana: ["おなご", "じょし"],
                  english: ["women", "girl"]
                }
              ],
              tags: ["family"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "糸",
              grade: 1,
              strokes: 6,
              jlpt: 2,
              source: "https://en.wiktionary.org/wiki/%E7%B3%B8#Kanji",
              meanings: ["thread"],
              readings: [
                {
                  value: "いと",
                  type: "kun"
                },
                {
                  value: "し",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "生糸",
                  kana: ["きいと"],
                  english: ["raw silk thread"]
                },
                {
                  value: "糸口",
                  kana: ["いとぐち"],
                  english: ["thread end", "beginning", "clue"]
                },
                {
                  value: "毛糸",
                  kana: ["けいと"],
                  english: ["knitting wool"]
                },
                {
                  value: "糸",
                  kana: ["いと"],
                  english: ["thread", "yarn", "string"]
                },
                {
                  value: "撚糸",
                  kana: ["ねんし"],
                  english: ["twisted thread or yarn"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "字",
              grade: 1,
              strokes: 6,
              jlpt: 3,
              source: "https://en.wiktionary.org/wiki/%E5%AD%97#Kanji",
              meanings: ["word", "letter", "section of village", "character"],
              readings: [
                {
                  value: "あざ",
                  type: "kun"
                },
                {
                  value: "じ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "黒字",
                  kana: ["くろじ"],
                  english: ["figure in black", "balance"]
                },
                {
                  value: "赤字",
                  kana: ["あかじ"],
                  english: ["deficit"]
                },
                {
                  value: "字",
                  kana: ["あざ"],
                  english: ["section of village"]
                },
                {
                  value: "文字",
                  kana: ["もんじ", "もじ"],
                  english: ["letter (of alphabet", "character"]
                },
                {
                  value: "数字",
                  kana: ["すうじ"],
                  english: ["numeral", "numeric character", "figure", "digit"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "耳",
              grade: 1,
              strokes: 6,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E8%80%B3#Kanji",
              meanings: ["ear"],
              readings: [
                {
                  value: "に",
                  type: "on"
                },
                {
                  value: "みみ",
                  type: "kun"
                },
                {
                  value: "じ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "耳",
                  kana: ["みみ"],
                  english: ["crust", "hearing", "edge", "ear"]
                },
                {
                  value: "耳目",
                  kana: ["じもく"],
                  english: ["one’s interest", "one’s attention", "eye and ear"]
                },
                {
                  value: "中耳炎",
                  kana: ["ちゅうじえん"],
                  english: ["tympanitis (inflammation of middle ear)"]
                },
                {
                  value: "耳打ち",
                  kana: ["みみうち"],
                  english: ["whisper into a person’s ear"]
                },
                {
                  value: "耳鼻咽喉科",
                  kana: ["じびいんこうか"],
                  english: ["otorhinolaryngology", "nose and throat", "ear"]
                }
              ],
              tags: ["body"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "七",
              grade: 1,
              strokes: 2,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%83#Kanji",
              meanings: ["seven"],
              readings: [
                {
                  value: "なな",
                  type: "kun"
                },
                {
                  value: "しち",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "七",
                  kana: ["なな", "な", "しち"],
                  english: ["seven"]
                },
                {
                  value: "七十",
                  kana: ["ななじゅう", "ななそ", "しちじゅう"],
                  english: ["seventy"]
                },
                {
                  value: "四十七士",
                  kana: ["しじゅうしちし"],
                  english: ["The 47 Ronin"]
                },
                {
                  value: "七月",
                  kana: ["しちがつ"],
                  english: ["July"]
                },
                {
                  value: "十七",
                  kana: ["じゅうなな", "じゅうしち"],
                  english: ["seventeen"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "車",
              grade: 1,
              strokes: 7,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E8%BB%8A#Kanji",
              meanings: ["car", "vehicle"],
              readings: [
                {
                  value: "くるま",
                  type: "kun"
                },
                {
                  value: "しゃ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "自転車",
                  kana: ["じてんしゃ"],
                  english: ["bicycle"]
                },
                {
                  value: "乗用車",
                  kana: ["じょうようしゃ"],
                  english: ["passenger vehicle", "automobile"]
                },
                {
                  value: "自動車",
                  kana: ["じどうしゃ"],
                  english: ["automobile"]
                },
                {
                  value: "下車",
                  kana: ["げしゃ"],
                  english: ["alighting (from train, bus, etc.)"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "手",
              grade: 1,
              strokes: 4,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E6%89%8B#Kanji",
              meanings: ["hand"],
              readings: [
                {
                  value: "て",
                  type: "kun"
                },
                {
                  value: "しゅ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "選手",
                  kana: ["せんしゅ"],
                  english: ["player (in game)", "team member"]
                },
                {
                  value: "相手",
                  kana: ["あいて"],
                  english: ["companion", "company", "partner", "other party"]
                },
                {
                  value: "大手",
                  kana: ["おおて"],
                  english: ["front castle gate", "both arms open"]
                },
                {
                  value: "選手権",
                  kana: ["せんしゅけん"],
                  english: ["championship", "title (of champion)"]
                }
              ],
              tags: ["body"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "十",
              grade: 1,
              strokes: 2,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
              meanings: ["ten"],
              readings: [
                {
                  value: "と",
                  type: "kun"
                },
                {
                  value: "じゅう",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "十一",
                  kana: ["じゅういち", "ジュウイチ"],
                  english: ["eleven"]
                },
                {
                  value: "十月",
                  kana: ["じゅうがつ"],
                  english: ["October"]
                },
                {
                  value: "十",
                  kana: ["じゅう", "と", "とお"],
                  english: ["ten"]
                },
                {
                  value: "十九",
                  kana: ["じゅうきゅう"],
                  english: ["nineteen"]
                },
                {
                  value: "十一月",
                  kana: ["じゅういちがつ"],
                  english: ["November"]
                }
              ],
              tags: ["number"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "出",
              grade: 1,
              strokes: 5,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
              meanings: ["leave", "exit"],
              readings: [
                {
                  value: "で",
                  type: "kun"
                },
                {
                  value: "でる",
                  type: "kun"
                },
                {
                  value: "だす",
                  type: "kun"
                },
                {
                  value: "しゅつ",
                  type: "on"
                },
                {
                  value: "しゅち",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "出す",
                  kana: ["だす"],
                  english: ["to put out", "to take out", "to get out"]
                },
                {
                  value: "進出",
                  kana: ["しんしゅつ"],
                  english: ["step forward", "advance"]
                },
                {
                  value: "輸出",
                  kana: ["ゆしゅつ", "しゅしゅつ"],
                  english: ["export"]
                },
                {
                  value: "出身",
                  kana: ["しゅっしん"],
                  english: ["person’s origin (town, city, country, etc.)"]
                },
                {
                  value: "出場",
                  kana: ["しゅつじょう"],
                  english: ["(stage) appearance", "participation"]
                }
              ],
              tags: []
            }
          },
          {
            field: "meaning",
            value: {
              character: "女",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%A5%B3#Kanji",
              meanings: ["women", "female"],
              readings: [
                {
                  value: "じょ",
                  type: "on"
                },
                {
                  value: "おんな",
                  type: "kun"
                },
                {
                  value: "にょ",
                  type: "on"
                }
              ],
              examples: [
                {
                  value: "女性",
                  kana: ["じょせい"],
                  english: ["women", "female", "feminine gender"]
                },
                {
                  value: "男女",
                  kana: ["だんじょ"],
                  english: ["man and women"]
                },
                {
                  value: "女",
                  kana: ["おんな"],
                  english: ["women"]
                },
                {
                  value: "女子",
                  kana: ["おなご", "じょし"],
                  english: ["girl"]
                },
                {
                  value: "彼女",
                  kana: ["かのじょ"],
                  english: ["sweetheart", "she", "girlfriend"]
                }
              ],
              tags: ["family"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "小",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
              meanings: ["little", "small"],
              readings: [
                {
                  value: "お",
                  type: "kun"
                },
                {
                  value: "しょう",
                  type: "on"
                },
                {
                  value: "こ",
                  type: "kun"
                },
                {
                  value: "ちいさい",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "小説",
                  kana: ["しょうせつ"],
                  english: ["novel", "short story"]
                },
                {
                  value: "小選挙区",
                  kana: ["しょうせんきょく"],
                  english: ["small electoral district"]
                },
                {
                  value: "小学校",
                  kana: ["しょうがっこう"],
                  english: ["primary school", "elementary school"]
                },
                {
                  value: "中小企業",
                  kana: ["ちゅうしょうきぎょう"],
                  english: ["small to medium enterprises"]
                },
                {
                  value: "小学生",
                  kana: ["しょうがくせい"],
                  english: ["elementary school student"]
                }
              ],
              tags: ["size"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "上",
              grade: 1,
              strokes: 3,
              jlpt: 4,
              source: "https://en.wiktionary.org/wiki/%E4%B8%8A#Kanji",
              meanings: ["up", "above"],
              readings: [
                {
                  value: "じょう",
                  type: "on"
                },
                {
                  value: "うえ",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "史上",
                  kana: ["しじょう"],
                  english: ["historical"]
                },
                {
                  value: "上がったり",
                  kana: ["あがったり"],
                  english: ["in a bad state", "poor", "doomed"]
                },
                {
                  value: "事実上",
                  kana: ["じじつじょう"],
                  english: ["actually", "(as a) matter of fact", "in reality"]
                },
                {
                  value: "上昇",
                  kana: ["じょうしょう"],
                  english: ["ascending", "climbing", "rising"]
                },
                {
                  value: "上げ",
                  kana: ["あげ"],
                  english: ["rise in price", "making a tuck"]
                }
              ],
              tags: ["direction"]
            }
          },
          {
            field: "meaning",
            value: {
              character: "森",
              grade: 1,
              strokes: 12,
              jlpt: 3,
              source: "https://en.wiktionary.org/wiki/%E6%A3%AE#Kanji",
              meanings: ["woods", "forest"],
              readings: [
                {
                  value: "しん",
                  type: "on"
                },
                {
                  value: "もり",
                  type: "kun"
                }
              ],
              examples: [
                {
                  value: "森羅万象",
                  kana: ["しんらばんしょう"],
                  english: ["all things in nature", "the whole creation"]
                },
                {
                  value: "森厳",
                  kana: ["しんげん"],
                  english: ["solemn"]
                },
                {
                  value: "森林",
                  kana: ["しんりん"],
                  english: ["woods", "forest"]
                },
                {
                  value: "森",
                  kana: ["もり"],
                  english: ["forest", "grove"]
                },
                {
                  value: "森閑",
                  kana: ["しんかん"],
                  english: ["silence"]
                }
              ],
              tags: []
            }
          }
        ],
        pages: 75,
        total: 2998
      })
    )
  })
]
