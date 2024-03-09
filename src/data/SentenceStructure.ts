import { AdjectiveData, AdverbData, ExpressionData, VerbData } from "./DataTypes"
import { AdjectiveType } from "types/sentence/AdjectiveType"
import { VerbType } from "types/sentence/VerbType"

export function adjectives(): AdjectiveData[] {
  return [
    {
      meanings: ["new"],
      kana: "あたらしい",
      kanjiForm: "新しい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["old (thing)"],
      kana: "ふるい",
      kanjiForm: "古い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["hot (weather)"],
      kana: "あつい",
      kanjiForm: "暑い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["cold (weather)"],
      kana: "さむい",
      kanjiForm: "寒い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["hot (thing)"],
      kana: "あつい",
      kanjiForm: "熱い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["busy (people/days)"],
      kana: "いそがしい",
      kanjiForm: "忙しい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["large"],
      kana: "おおきい",
      kanjiForm: "大きい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["small"],
      kana: "ちいさい",
      kanjiForm: "小さい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["interesting", "funny"],
      kana: "おもしろい",
      kanjiForm: "面白い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["boring"],
      kana: "つまらない",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["easy", "kind"],
      kana: "やさしい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["difficult"],
      kana: "むずかしい",
      kanjiForm: "難しい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["good-looking (man)"],
      kana: "かっこいい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["frightening"],
      kana: "こわい",
      kanjiForm: "怖い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["fun"],
      kana: "たのしい",
      kanjiForm: "楽しい",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["cheap", "inexpensive"],
      kana: "やすい",
      kanjiForm: "安い",
      type: AdjectiveType.I,
      genkiLesson: 5
    },
    {
      meanings: ["to like"],
      kana: "すきな",
      kanjiForm: "好き",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["to dislike", "disgusted with"],
      kana: "きらいな",
      kanjiForm: "嫌い",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["very fond of", "to love"],
      kana: "だいすきな",
      kanjiForm: "大好き",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["to hate"],
      kana: "だいきらいな",
      kanjiForm: "大嫌い",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["beautiful", "clean"],
      kana: "きれいな",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["healthy", "energetic"],
      kana: "げんきな",
      kanjiForm: "元気",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["quiet"],
      kana: "しずかな",
      kanjiForm: "静か",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["lively"],
      kana: "にぎやかな",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["free", "not busy"],
      kana: "ひまな",
      kanjiForm: "暇",
      type: AdjectiveType.NA,
      genkiLesson: 5
    },
    {
      meanings: ["tough (situation)"],
      kana: "たいへんな",
      kanjiForm: "大変",
      type: AdjectiveType.NA,
      genkiLesson: 6
    },
    {
      meanings: ["long"],
      kana: "ながい",
      kanjiForm: "長い",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["short (length)"],
      kana: "みじかい",
      kanjiForm: "短い",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["fast"],
      kana: "はやい",
      kanjiForm: "早い",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["tall (stature)"],
      kana: "せがたかい",
      kanjiForm: "背が高い",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["short (stature)"],
      kana: "せがひくい",
      kanjiForm: "背が低い",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["bright", "smart", "clever"],
      kana: "あたまがいい",
      kanjiForm: "頭がいい",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["cute"],
      kana: "かわいい",
      type: AdjectiveType.I,
      genkiLesson: 7
    },
    {
      meanings: ["kind"],
      kana: "しんせつな",
      kanjiForm: "親切",
      type: AdjectiveType.NA,
      genkiLesson: 7
    },
    {
      meanings: ["convenient"],
      kana: "べんりな",
      kanjiForm: "便利な",
      type: AdjectiveType.NA,
      genkiLesson: 7
    },
    {
      meanings: ["skillful", "good at"],
      kana: "じょうずな",
      kanjiForm: "上手",
      type: AdjectiveType.NA,
      genkiLesson: 8
    },
    {
      meanings: ["clumsy", "poor at"],
      kana: "へたな",
      kanjiForm: "下手",
      type: AdjectiveType.NA,
      genkiLesson: 8
    },
    {
      meanings: ["famous"],
      kana: "ゆうめいな",
      kanjiForm: "有名",
      type: AdjectiveType.NA,
      genkiLesson: 8
    },
    {
      meanings: ["blue"],
      kana: "あおい",
      kanjiForm: "青い",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["red"],
      kana: "あかい",
      kanjiForm: "赤い",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["black"],
      kana: "くろい",
      kanjiForm: "黒い",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["white"],
      kana: "しろい",
      kanjiForm: "白い",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["lonely"],
      kana: "さびしい",
      kanjiForm: "寂しい",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["young"],
      kana: "わかい",
      kanjiForm: "若い",
      type: AdjectiveType.I,
      genkiLesson: 9
    },
    {
      meanings: ["mean-spirited"],
      kana: "いじわるな",
      kanjiForm: "意地悪",
      type: AdjectiveType.NA,
      genkiLesson: 9
    }
  ]
}

export function verbs(): VerbData[] {
  return [
    {
      meanings: ["to play", "to spend time pleasantly"],
      kana: "あそぶ",
      kanjiForm: "遊ぶ",
      type: VerbType.BU,
      genkiLesson: 6
    },
    {
      meanings: ["to hurry"],
      kana: "いそぐ",
      kanjiForm: "急ぐ",
      type: VerbType.GU,
      genkiLesson: 6
    },
    {
      meanings: ["to return (a thing)"],
      kana: "かえす",
      kanjiForm: "返す",
      type: VerbType.SU,
      genkiLesson: 6
    },
    {
      meanings: ["to turn off", "to erase"],
      kana: "けす",
      kanjiForm: "消す",
      type: VerbType.SU,
      genkiLesson: 6
    },
    {
      meanings: ["to die"],
      kana: "しぬ",
      kanjiForm: "死ぬ",
      type: VerbType.NU,
      genkiLesson: 6
    },
    {
      meanings: ["to sit down"],
      kana: "すわる",
      kanjiForm: "座る",
      type: VerbType.RU_U,
      genkiLesson: 6
    },
    {
      meanings: ["to stand up"],
      kana: "たつ",
      kanjiForm: "立つ",
      type: VerbType.TSU,
      genkiLesson: 6
    },
    {
      meanings: ["to smoke"],
      kana: "たばこをすう",
      kanjiForm: "たばこを吸う",
      type: VerbType.U,
      genkiLesson: 6
    },
    {
      meanings: ["to use"],
      kana: "つかう",
      kanjiForm: "使う",
      type: VerbType.U,
      genkiLesson: 6
    },
    {
      meanings: ["to help (person/task)"],
      kana: "てつだう",
      kanjiForm: "手伝う",
      type: VerbType.U,
      genkiLesson: 6
    },
    {
      meanings: ["to enter"],
      kana: "はいる",
      kanjiForm: "入る",
      type: VerbType.RU_U,
      genkiLesson: 6
    },
    {
      meanings: ["to carry", "to hold"],
      kana: "もつ",
      kanjiForm: "持つ",
      type: VerbType.TSU,
      genkiLesson: 6
    },
    {
      meanings: ["to be absent", "to rest"],
      kana: "やすむ",
      kanjiForm: "休む",
      type: VerbType.MU,
      genkiLesson: 6
    },
    {
      meanings: ["to open"],
      kana: "あける",
      kanjiForm: "開ける",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to close"],
      kana: "しめる",
      kanjiForm: "閉める",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to teach", "to instruct"],
      kana: "おしえる",
      kanjiForm: "教える",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to forget", "to leave behind"],
      kana: "わすれる",
      kanjiForm: "忘れる",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to get off"],
      kana: "おりる",
      kanjiForm: "降りる",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to borrow"],
      kana: "かりる",
      kanjiForm: "借りる",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to take a shower"],
      kana: "シォワーをあびる",
      kanjiForm: "シォワーを浴びる",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to turn on"],
      kana: "つける",
      type: VerbType.RU,
      genkiLesson: 6
    },
    {
      meanings: ["to call"],
      kana: "でんわする",
      kanjiForm: "電話する",
      type: VerbType.IRREGULAR,
      genkiLesson: 6
    },
    {
      meanings: ["to bring (a person)"],
      kana: "つれてくる",
      kanjiForm: "連れてくる",
      type: VerbType.IRREGULAR,
      genkiLesson: 6
    },
    {
      meanings: ["to bring (a thing)"],
      kana: "もってくる",
      kanjiForm: "持ってくる",
      type: VerbType.IRREGULAR,
      genkiLesson: 6
    },
    {
      meanings: ["to sing"],
      kana: "うたう",
      kanjiForm: "歌う",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to put on (a hat)"],
      kana: "かぶる",
      type: VerbType.RU_U,
      genkiLesson: 7
    },
    {
      meanings: ["to put on (items below your waist)"],
      kana: "はく",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to get to know"],
      kana: "しる",
      kanjiForm: "知る",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to live"],
      kana: "すむ",
      kanjiForm: "住む",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to work"],
      kana: "はたらく",
      kanjiForm: "働く",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to gain weight"],
      kana: "ふとる",
      kanjiForm: "太る",
      type: VerbType.U,
      genkiLesson: 7
    },
    {
      meanings: ["to put on (glasses)"],
      kana: "(めがねを) かける",
      type: VerbType.RU,
      genkiLesson: 7
    },
    {
      meanings: ["to put on (clothes above your waist)"],
      kana: "きる",
      kanjiForm: "着る",
      type: VerbType.RU,
      genkiLesson: 7
    },
    {
      meanings: ["to lose weight"],
      kana: "やせる",
      type: VerbType.RU,
      genkiLesson: 7
    },
    {
      meanings: ["to get married"],
      kana: "けっこんする",
      kanjiForm: "結婚する",
      type: VerbType.IRREGULAR,
      genkiLesson: 7
    },
    {
      meanings: ["to wash"],
      kana: "あらう",
      kanjiForm: "洗う",
      type: VerbType.U,
      genkiLesson: 8
    },
    {
      meanings: ["to say"],
      kana: "いう",
      kanjiForm: "言う",
      type: VerbType.U,
      genkiLesson: 8
    },
    {
      meanings: ["to need"],
      kana: "いる",
      type: VerbType.U,
      genkiLesson: 8
    },
    {
      meanings: ["to be late"],
      kana: "おそくなる",
      kanjiForm: "遅くなる",
      type: VerbType.RU_U,
      genkiLesson: 8
    },
    {
      meanings: ["to take a bath"],
      kana: "おふろにはいる",
      kanjiForm: "お風呂に入る",
      type: VerbType.RU_U,
      genkiLesson: 8
    },
    {
      meanings: ["to think"],
      kana: "おもう",
      kanjiForm: "思う",
      type: VerbType.U,
      genkiLesson: 8
    },
    {
      meanings: ["to cut"],
      kana: "きる",
      kanjiForm: "切る",
      type: VerbType.RU_U,
      genkiLesson: 8
    },
    {
      meanings: ["to make"],
      kana: "つくる",
      kanjiForm: "作る",
      type: VerbType.RU_U,
      genkiLesson: 8
    },
    {
      meanings: ["(rain / snow) falls"],
      kana: "(あめ / ゆき　が) ふる",
      kanjiForm: "(雨 / 雪 が)　降る",
      type: VerbType.RU_U,
      genkiLesson: 8
    },
    {
      meanings: ["to take (a thing)"],
      kana: "もっていく",
      kanjiForm: "持っていく",
      type: VerbType.U,
      genkiLesson: 8
    },
    {
      meanings: ["to throw away"],
      kana: "すてる",
      kanjiForm: "捨てる",
      type: VerbType.RU,
      genkiLesson: 8
    },
    {
      meanings: ["to begin"],
      kana: "はじめる",
      kanjiForm: "始める",
      type: VerbType.RU,
      genkiLesson: 8
    },
    {
      meanings: ["to drive"],
      kana: "うんてんする",
      kanjiForm: "運転する",
      type: VerbType.IRREGULAR,
      genkiLesson: 8
    },
    {
      meanings: ["to do laundry"],
      kana: "せんたくする",
      kanjiForm: "洗濯する",
      type: VerbType.IRREGULAR,
      genkiLesson: 8
    },
    {
      meanings: ["to clean"],
      kana: "そうじする",
      kanjiForm: "掃除する",
      type: VerbType.IRREGULAR,
      genkiLesson: 8
    },
    {
      meanings: ["to cook"],
      kana: "りょうりする",
      kanjiForm: "料理する",
      type: VerbType.IRREGULAR,
      genkiLesson: 8
    },
    {
      meanings: ["to dance"],
      kana: "おどる",
      kanjiForm: "踊る",
      type: VerbType.RU_U,
      genkiLesson: 9
    },
    {
      meanings: ["something ends"],
      kana: "おわる",
      kanjiForm: "終わる",
      type: VerbType.RU_U,
      genkiLesson: 9
    },
    {
      meanings: ["to take medicine"],
      kana: "くすりをのむ",
      kanjiForm: "薬を飲む",
      type: VerbType.U,
      genkiLesson: 9
    },
    {
      meanings: ["to be popular"],
      kana: "にんきがある",
      kanjiForm: "人気がある",
      type: VerbType.RU_U,
      genkiLesson: 9
    },
    {
      meanings: ["something begins"],
      kana: "はじまる",
      kanjiForm: "始まる",
      type: VerbType.RU_U,
      genkiLesson: 9
    },
    {
      meanings: ["to play (an instrument)"],
      kana: "ひく",
      kanjiForm: "弾く",
      type: VerbType.U,
      genkiLesson: 9
    },
    {
      meanings: ["to get (from somebody)"],
      kana: "もらう",
      type: VerbType.U,
      genkiLesson: 9
    },
    {
      meanings: ["to memorise"],
      kana: "おぼえる",
      kanjiForm: "覚える",
      type: VerbType.RU,
      genkiLesson: 9
    },
    {
      meanings: ["to appear", "to attend", "to exit"],
      kana: "でる",
      kanjiForm: "出る",
      type: VerbType.RU,
      genkiLesson: 9
    },
    {
      meanings: ["to exercise"],
      kana: "うんどうする",
      kanjiForm: "運動する",
      type: VerbType.IRREGULAR,
      genkiLesson: 9
    },
    {
      meanings: ["to take a walk"],
      kana: "さんぽする",
      kanjiForm: "散歩する",
      type: VerbType.IRREGULAR,
      genkiLesson: 9
    }
  ]
}

export function adverbs(): AdverbData[] {
  return [
    {
      meanings: ["not much"],
      kana: "あまり~",
      genkiLesson: 3
    },
    {
      meanings: ["not at all"],
      kana: "ぜんぜん~",
      kanjiForm: "全然",
      genkiLesson: 3
    },
    {
      meanings: ["usually"],
      kana: "たいてい",
      genkiLesson: 3
    },
    {
      meanings: ["a little"],
      kana: "ちょっと",
      genkiLesson: 3
    },
    {
      meanings: ["sometimes"],
      kana: "ときどき",
      kanjiForm: "時々",
      genkiLesson: 3
    },
    {
      meanings: ["often", "much"],
      kana: "よく",
      genkiLesson: 3
    },
    {
      meanings: ["about"],
      kana: "~ぐらい",
      genkiLesson: 4
    },
    {
      meanings: ["so", "therefore"],
      kana: "だから",
      genkiLesson: 4
    },
    {
      meanings: ["many", "a lot"],
      kana: "たくさん",
      genkiLesson: 4
    },
    {
      meanings: ["and", "together (with a person)"],
      kana: "~と",
      genkiLesson: 4
    },
    {
      meanings: ["why"],
      kana: "どうして",
      genkiLesson: 4
    },
    {
      meanings: ["alone"],
      kana: "ひとりで",
      kanjiForm: "一人で",
      genkiLesson: 4
    },
    {
      meanings: ["together"],
      kana: "いっしょに",
      kanjiForm: "一緒に",
      genkiLesson: 5
    },
    {
      meanings: ["very"],
      kana: "とても",
      genkiLesson: 5
    },
    {
      meanings: ["extremely"],
      kana: "すごく",
      genkiLesson: 5
    },
    {
      meanings: ["slowly", "leisurely", "unhurriedly"],
      kana: "ゆっくり",
      genkiLesson: 6
    },
    {
      meanings: ["of course"],
      kana: "もちろん",
      genkiLesson: 7
    },
    {
      meanings: ["if you like"],
      kana: "よかったら",
      genkiLesson: 7
    },
    {
      meanings: ["always"],
      kana: "いつも",
      genkiLesson: 8
    },
    {
      meanings: ["everybody", "all people"],
      kana: "みんなで",
      genkiLesson: 8
    },
    {
      meanings: ["not...yet"],
      kana: "まだ + negative",
      genkiLesson: 8
    },
    {
      meanings: ["about...", "concerning..."],
      kana: "~について",
      genkiLesson: 8
    },
    {
      meanings: ["how"],
      kana: "どう",
      genkiLesson: 8
    },
    {
      meanings: ["already"],
      kana: "もう",
      genkiLesson: 9
    }
  ]
}

export function expressions(): ExpressionData[] {
  return [
    {
      meanings: ["That's right", "Let me see"],
      kana: "そうですね",
      genkiLesson: 3
    },
    {
      meanings: ["but"],
      kana: "でも",
      genkiLesson: 3
    },
    {
      meanings: ["How about...?", "How is...?"],
      kana: "どうですか",
      genkiLesson: 3
    },
    {
      meanings: ["yes"],
      kana: "ええ",
      genkiLesson: 3
    },
    {
      meanings: ["Hello? (On the phone)"],
      kana: "もしもし",
      genkiLesson: 4
    },
    {
      meanings: ["It's okay", "Not to worry", "Everything is under control"],
      kana: "だいじょうぶ",
      kanjiForm: "大丈夫",
      genkiLesson: 5
    },
    {
      meanings: ["What kind of..."],
      kana: "どんな",
      genkiLesson: 5
    },
    {
      meanings: ["later on"],
      kana: "あとで",
      kanjiForm: "後で",
      genkiLesson: 6
    },
    {
      meanings: ["right away"],
      kana: "すぐ",
      genkiLesson: 6
    },
    {
      meanings: ["That would be fine", "That wouldn't be necessary"],
      kana: "けっこうです",
      kanjiForm: "結構です",
      genkiLesson: 6
    },
    {
      meanings: ["Really?"],
      kana: "ほんとうですか",
      kanjiForm: "本当ですか",
      genkiLesson: 6
    },
    {
      meanings: ["Nothing in particular"],
      kana: "べつに + negative",
      kanjiForm: "別に",
      genkiLesson: 7
    },
    {
      meanings: ["uh-huh", "yes"],
      kana: "うん",
      genkiLesson: 8
    },
    {
      meanings: ["uh-uh", "no"],
      kana: "ううん",
      genkiLesson: 8
    },
    {
      meanings: ["do something (late)"],
      kana: "おそく",
      kanjiForm: "遅く",
      genkiLesson: 8
    },
    {
      meanings: ["Cheers! (a toast)"],
      kana: "かんぱい",
      kanjiForm: "乾杯",
      genkiLesson: 8
    },
    {
      meanings: ["That's too bad."],
      kana: "ざんねん (ですね)",
      kanjiForm: "残念",
      genkiLesson: 8
    },
    {
      meanings: ["(I think) so"],
      kana: "そう",
      genkiLesson: 9
    },
    {
      meanings: ["from..."],
      kana: "から",
      genkiLesson: 9
    },
    {
      meanings: ["to (a place/time)"],
      kana: "まで",
      genkiLesson: 9
    },
    {
      meanings: ["by all means"],
      kana: "ぜひ",
      kanjiForm: "是非",
      genkiLesson: 9
    },
    {
      meanings: ["by the way"],
      kana: "ところで",
      genkiLesson: 9
    },
    {
      meanings: ["all"],
      kana: "みんな",
      kanjiForm: "皆",
      genkiLesson: 9
    }
  ]
}
