import { http, HttpResponse } from "msw";
import { api } from "../util"

export const handlers = [
  http.get(`${api}/genki/all`, () => {
    return HttpResponse.json([
      {
        lesson: 1,
        meaning: "um...",
        kana: "あの",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "now",
        kana: "いま",
        kanji: "今"
      },
      {
        lesson: 1,
        meaning: "English (language)",
        kana: "えいご",
        kanji: "英語"
      },
      {
        lesson: 1,
        meaning: "student",
        kana: "がくせい",
        kanji: "学生"
      },
      {
        lesson: 1,
        meaning: "language",
        kana: "〜ご",
        kanji: "〜語"
      },
      {
        lesson: 1,
        meaning: "high school",
        kana: "こうこう",
        kanji: "高校"
      },
      {
        lesson: 1,
        meaning: "P.M.",
        kana: "ごご",
        kanji: "午後"
      },
      {
        lesson: 1,
        meaning: "A.M.",
        kana: "ごぜん",
        kanji: "午前"
      },
      {
        lesson: 1,
        meaning: "...years old",
        kana: "〜さい",
        kanji: "〜歳"
      },
      {
        lesson: 1,
        meaning: "Mr./Ms....",
        kana: "〜さん",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "o'clock",
        kana: "〜じ",
        kanji: "〜時"
      },
      {
        lesson: 1,
        meaning: "people",
        kana: "〜じん",
        kanji: "〜人"
      },
      {
        lesson: 1,
        meaning: "teacher, Professor...",
        kana: "せんせい",
        kanji: "先生"
      },
      {
        lesson: 1,
        meaning: "major",
        kana: "せんもん",
        kanji: "専門"
      },
      {
        lesson: 1,
        meaning: "That's right.",
        kana: "そうです",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "college, university",
        kana: "だいがく",
        kanji: "大学"
      },
      {
        lesson: 1,
        meaning: "telephone",
        kana: "でんわ",
        kanji: "電話"
      },
      {
        lesson: 1,
        meaning: "friend",
        kana: "ともだち",
        kanji: "友達"
      },
      {
        lesson: 1,
        meaning: "name",
        kana: "なまえ",
        kanji: "名前"
      },
      {
        lesson: 1,
        meaning: "what",
        kana: "なん／なに",
        kanji: "何"
      },
      {
        lesson: 1,
        meaning: "Japan",
        kana: "にほん",
        kanji: "日本"
      },
      {
        lesson: 1,
        meaning: "...year student",
        kana: "〜ねんせい",
        kanji: "〜年生"
      },
      {
        lesson: 1,
        meaning: "yes",
        kana: "はい",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "half",
        kana: "はん",
        kanji: "半"
      },
      {
        lesson: 1,
        meaning: "number",
        kana: "ばんごう",
        kanji: "番号"
      },
      {
        lesson: 1,
        meaning: "international student",
        kana: "りゅうがくせい",
        kanji: "留学生"
      },
      {
        lesson: 1,
        meaning: "I",
        kana: "わたし",
        kanji: "私"
      },
      {
        lesson: 1,
        meaning: "U.S.A.",
        kana: "アメリカ",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "Britain",
        kana: "イギリス",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "Australia",
        kana: "オーストラリア",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "Korea",
        kana: "かんこく",
        kanji: "韓国"
      },
      {
        lesson: 1,
        meaning: "Sweden",
        kana: "スウェーデン",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "China",
        kana: "ちゅうごく",
        kanji: "中国"
      },
      {
        lesson: 1,
        meaning: "science",
        kana: "かがく",
        kanji: "科学"
      },
      {
        lesson: 1,
        meaning: "Asian studies",
        kana: "アジアけんきゅう",
        kanji: "アジア研究"
      },
      {
        lesson: 1,
        meaning: "international relations",
        kana: "こくさいかんけい",
        kanji: "国際関係"
      },
      {
        lesson: 1,
        meaning: "computer",
        kana: "コンピューター",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "anthropology",
        kana: "じんるいがく",
        kanji: "人類学"
      },
      {
        lesson: 1,
        meaning: "politics",
        kana: "せいじ",
        kanji: "政治"
      },
      {
        lesson: 1,
        meaning: "business",
        kana: "ビジネス",
        kanji: null
      },
      {
        lesson: 1,
        meaning: "literature",
        kana: "ぶんがく",
        kanji: "文学"
      },
      {
        lesson: 1,
        meaning: "history",
        kana: "れきし",
        kanji: "歴史"
      },
      {
        lesson: 1,
        meaning: "job, work, occupation",
        kana: "しごと",
        kanji: "仕事"
      },
      {
        lesson: 1,
        meaning: "doctor",
        kana: "いしゃ",
        kanji: "医者"
      },
      {
        lesson: 1,
        meaning: "office worker",
        kana: "かいしゃいん",
        kanji: "会社員"
      },
      {
        lesson: 1,
        meaning: "high school student",
        kana: "こうこうせい",
        kanji: "高校生"
      },
      {
        lesson: 1,
        meaning: "housewife",
        kana: "しゅふ",
        kanji: "主婦"
      },
      {
        lesson: 1,
        meaning: "graduate student",
        kana: "だいがくいんせい",
        kanji: "大学院生"
      },
      {
        lesson: 1,
        meaning: "college student",
        kana: "だいがくせい",
        kanji: "大学生"
      },
      {
        lesson: 1,
        meaning: "lawyer",
        kana: "べんごし",
        kanji: "弁護士"
      },
      {
        lesson: 1,
        meaning: "mother",
        kana: "おかあさん",
        kanji: "お母さん"
      },
      {
        lesson: 1,
        meaning: "father",
        kana: "おとうさん",
        kanji: "お父さん"
      },
      {
        lesson: 1,
        meaning: "older sister",
        kana: "おねえさん",
        kanji: "お姉さん"
      },
      {
        lesson: 1,
        meaning: "older brother",
        kana: "おにいさん",
        kanji: "お兄さん"
      },
      {
        lesson: 1,
        meaning: "younger sister",
        kana: "いもうと",
        kanji: "妹"
      },
      {
        lesson: 1,
        meaning: "younger brother",
        kana: "おとうと",
        kanji: "弟"
      },
      {
        lesson: 2,
        meaning: "this one",
        kana: "これ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "that one",
        kana: "それ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "that one (over there)",
        kana: "あれ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "which one",
        kana: "どれ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "this...",
        kana: "この",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "that...",
        kana: "その",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "that... (over there)",
        kana: "あの",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "which...",
        kana: "どの",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "over there",
        kana: "あそこ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "where",
        kana: "どこ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "who",
        kana: "だれ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "delicious",
        kana: "おいしい",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "fish",
        kana: "さかな",
        kanji: "魚"
      },
      {
        lesson: 2,
        meaning: "pork cutlet",
        kana: "とんかつ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "meat",
        kana: "にく",
        kanji: "肉"
      },
      {
        lesson: 2,
        meaning: "menu",
        kana: "メニュー",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "vegetable",
        kana: "やさい",
        kanji: "野菜"
      },
      {
        lesson: 2,
        meaning: "pencil",
        kana: "えんぴつ",
        kanji: "鉛筆"
      },
      {
        lesson: 2,
        meaning: "umbrella",
        kana: "かさ",
        kanji: "傘"
      },
      {
        lesson: 2,
        meaning: "bag",
        kana: "かばん",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "shoes",
        kana: "くつ",
        kanji: "靴"
      },
      {
        lesson: 2,
        meaning: "wallet",
        kana: "さいふ",
        kanji: "財布"
      },
      {
        lesson: 2,
        meaning: "jeans",
        kana: "ジーンズ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "dictionary",
        kana: "じしょ",
        kanji: "辞書"
      },
      {
        lesson: 2,
        meaning: "bicycle",
        kana: "じてんしゃ",
        kanji: "自転車"
      },
      {
        lesson: 2,
        meaning: "newspaper",
        kana: "しんぶん",
        kanji: "新聞"
      },
      {
        lesson: 2,
        meaning: "tape",
        kana: "テープ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "watch, clock",
        kana: "とけい",
        kanji: "時計"
      },
      {
        lesson: 2,
        meaning: "sweat shirt",
        kana: "トレーナー",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "notebook",
        kana: "ノート",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "pen",
        kana: "ペン",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "hat, cap",
        kana: "ぼうし",
        kanji: "帽子"
      },
      {
        lesson: 2,
        meaning: "book",
        kana: "ほん",
        kanji: "本"
      },
      {
        lesson: 2,
        meaning: "restroom",
        kana: "おてあらい",
        kanji: "お手洗い"
      },
      {
        lesson: 2,
        meaning: "cafe",
        kana: "きっさてん",
        kanji: "喫茶店"
      },
      {
        lesson: 2,
        meaning: "bank",
        kana: "ぎんこう",
        kanji: "銀行"
      },
      {
        lesson: 2,
        meaning: "library",
        kana: "としょかん",
        kanji: "図書館"
      },
      {
        lesson: 2,
        meaning: "post office",
        kana: "ゆうびんきょく",
        kanji: "郵便局"
      },
      {
        lesson: 2,
        meaning: "economics",
        kana: "けいざい",
        kanji: "経済"
      },
      {
        lesson: 2,
        meaning: "how much",
        kana: "いくら",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "...yen",
        kana: "〜えん",
        kanji: "〜円"
      },
      {
        lesson: 2,
        meaning: "expensive",
        kana: "たかい",
        kanji: "高い"
      },
      {
        lesson: 2,
        meaning: "Welcome (to our store)",
        kana: "いらっしゃいませ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "..., please.",
        kana: "（〜を）おねがいします",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "Please give me...",
        kana: "（〜を）ください",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "then..., if that is the case,...",
        kana: "じゃあ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "Here it is.",
        kana: "（〜を）どうぞ",
        kanji: null
      },
      {
        lesson: 2,
        meaning: "Thank you.",
        kana: "どうも",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "movie",
        kana: "えいが",
        kanji: "映画"
      },
      {
        lesson: 3,
        meaning: "music",
        kana: "おんがく",
        kanji: "音楽"
      },
      {
        lesson: 3,
        meaning: "magazine",
        kana: "ざっし",
        kanji: "雑誌"
      },
      {
        lesson: 3,
        meaning: "sports",
        kana: "スポーツ",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "date (romantic, not calendar)",
        kana: "デート",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "tennis",
        kana: "テニス",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "TV",
        kana: "テレビ",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "video tape, VCR",
        kana: "ビデオ",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "breakfast",
        kana: "あさごはん",
        kanji: "朝御飯"
      },
      {
        lesson: 3,
        meaning: "sake, alcohol",
        kana: "おさけ",
        kanji: "お酒"
      },
      {
        lesson: 3,
        meaning: "green tea",
        kana: "おちゃ",
        kanji: "お茶"
      },
      {
        lesson: 3,
        meaning: "coffee",
        kana: "コーヒー",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "dinner",
        kana: "ばんごはん",
        kanji: "晩御飯"
      },
      {
        lesson: 3,
        meaning: "hamburger",
        kana: "ハンバーガー",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "lunch",
        kana: "ひるごはん",
        kanji: "昼御飯"
      },
      {
        lesson: 3,
        meaning: "water",
        kana: "みず",
        kanji: "水"
      },
      {
        lesson: 3,
        meaning: "home, house",
        kana: "いえ",
        kanji: "家"
      },
      {
        lesson: 3,
        meaning: "home, house, my place",
        kana: "うち",
        kanji: "家"
      },
      {
        lesson: 3,
        meaning: "language lab",
        kana: "LL（エルエル）",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "school",
        kana: "がっこう",
        kanji: "学校"
      },
      {
        lesson: 3,
        meaning: "morning",
        kana: "あさ",
        kanji: "朝"
      },
      {
        lesson: 3,
        meaning: "tomorrow",
        kana: "あした",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "when",
        kana: "いつ",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "today",
        kana: "きょう",
        kanji: "今日"
      },
      {
        lesson: 3,
        meaning: "at about",
        kana: "〜ごろ",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "tonight",
        kana: "こんばん",
        kanji: "今晩"
      },
      {
        lesson: 3,
        meaning: "weekend",
        kana: "しゅうまつ",
        kanji: "週末"
      },
      {
        lesson: 3,
        meaning: "Saturday",
        kana: "どようび",
        kanji: "土曜日"
      },
      {
        lesson: 3,
        meaning: "Sunday",
        kana: "にちようび",
        kanji: "日曜日"
      },
      {
        lesson: 3,
        meaning: "every day",
        kana: "まいにち",
        kanji: "毎日"
      },
      {
        lesson: 3,
        meaning: "every night",
        kana: "まいばん",
        kanji: "毎晩"
      },
      {
        lesson: 3,
        meaning: "to go",
        kana: "いく",
        kanji: "行く"
      },
      {
        lesson: 3,
        meaning: "to go back, to return",
        kana: "かえる",
        kanji: "帰る"
      },
      {
        lesson: 3,
        meaning: "to listen, to hear",
        kana: "きく",
        kanji: "聞く"
      },
      {
        lesson: 3,
        meaning: "to drink",
        kana: "のむ",
        kanji: "飲む"
      },
      {
        lesson: 3,
        meaning: "to speak, to talk",
        kana: "はなす",
        kanji: "話す"
      },
      {
        lesson: 3,
        meaning: "to read",
        kana: "よむ",
        kanji: "読む"
      },
      {
        lesson: 3,
        meaning: "to get up",
        kana: "おきる",
        kanji: "起きる"
      },
      {
        lesson: 3,
        meaning: "to eat",
        kana: "たべる",
        kanji: "食べる"
      },
      {
        lesson: 3,
        meaning: "to sleep, to go to sleep",
        kana: "ねる",
        kanji: "寝る"
      },
      {
        lesson: 3,
        meaning: "to see, to look at, to watch",
        kana: "みる",
        kanji: "見る"
      },
      {
        lesson: 3,
        meaning: "to come",
        kana: "くる",
        kanji: "来る"
      },
      {
        lesson: 3,
        meaning: "to do",
        kana: "する",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "to study",
        kana: "べんきょうする",
        kanji: "勉強する"
      },
      {
        lesson: 3,
        meaning: "good",
        kana: "いい",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "early",
        kana: "はやい",
        kanji: "早い"
      },
      {
        lesson: 3,
        meaning: "not much",
        kana: "あまり+ negative",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "not at all",
        kana: "ぜんぜん + negative",
        kanji: "全然"
      },
      {
        lesson: 3,
        meaning: "usually",
        kana: "たいてい",
        kanji: "大抵"
      },
      {
        lesson: 3,
        meaning: "a little",
        kana: "ちょっと",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "sometimes",
        kana: "ときどき",
        kanji: "時々"
      },
      {
        lesson: 3,
        meaning: "often, much",
        kana: "よく",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "That's right., Let me see.",
        kana: "そうですね",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "but",
        kana: "でも",
        kanji: null
      },
      {
        lesson: 3,
        meaning: "How about...?, How is...?",
        kana: "どうですか",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "part-time job",
        kana: "アルバイト",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "shopping",
        kana: "かいもの",
        kanji: "買い物"
      },
      {
        lesson: 4,
        meaning: "class",
        kana: "クラス",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "you",
        kana: "あなた",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "dog",
        kana: "いぬ",
        kanji: "犬"
      },
      {
        lesson: 4,
        meaning: "souvenir",
        kana: "おみやげ",
        kanji: "お土産"
      },
      {
        lesson: 4,
        meaning: "child",
        kana: "こども",
        kanji: "子供"
      },
      {
        lesson: 4,
        meaning: "rice, meal",
        kana: "ごはん",
        kanji: "御飯"
      },
      {
        lesson: 4,
        meaning: "picture, photograph",
        kana: "しゃしん",
        kanji: "写真"
      },
      {
        lesson: 4,
        meaning: "desk",
        kana: "つくえ",
        kanji: "机"
      },
      {
        lesson: 4,
        meaning: "letter",
        kana: "てがみ",
        kanji: "手紙"
      },
      {
        lesson: 4,
        meaning: "cat",
        kana: "ねこ",
        kanji: "猫"
      },
      {
        lesson: 4,
        meaning: "bread",
        kana: "パン",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "person",
        kana: "ひと",
        kanji: "人"
      },
      {
        lesson: 4,
        meaning: "temple",
        kana: "おてら",
        kanji: "お寺"
      },
      {
        lesson: 4,
        meaning: "park",
        kana: "こうえん",
        kanji: "公園"
      },
      {
        lesson: 4,
        meaning: "supermarket",
        kana: "スーパー",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "department store",
        kana: "デパート",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "bus stop",
        kana: "バスてい",
        kanji: "バス停"
      },
      {
        lesson: 4,
        meaning: "hospital",
        kana: "びょういん",
        kanji: "病院"
      },
      {
        lesson: 4,
        meaning: "hotel",
        kana: "ホテル",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "bookstore",
        kana: "ほんや",
        kanji: "本屋"
      },
      {
        lesson: 4,
        meaning: "town, city",
        kana: "まち",
        kanji: "町"
      },
      {
        lesson: 4,
        meaning: "restaurant",
        kana: "レストラン",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "yesterday",
        kana: "きのう",
        kanji: "昨日"
      },
      {
        lesson: 4,
        meaning: "a little while ago",
        kana: "さっき",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "hour",
        kana: "〜じかん",
        kanji: "〜時間"
      },
      {
        lesson: 4,
        meaning: "one hour",
        kana: "いちじかん",
        kanji: "一時間"
      },
      {
        lesson: 4,
        meaning: "last week",
        kana: "せんしゅう",
        kanji: "先週"
      },
      {
        lesson: 4,
        meaning: "when..., at the time of...",
        kana: "とき",
        kanji: "時"
      },
      {
        lesson: 4,
        meaning: "Tuesday",
        kana: "かようび",
        kanji: "火曜日"
      },
      {
        lesson: 4,
        meaning: "Wednesday",
        kana: "すいようび",
        kanji: "水曜日"
      },
      {
        lesson: 4,
        meaning: "Thursday",
        kana: "もくようび",
        kanji: "木曜日"
      },
      {
        lesson: 4,
        meaning: "Friday",
        kana: "きんようび",
        kanji: "金曜日"
      },
      {
        lesson: 4,
        meaning: "to meet, to see (a person)",
        kana: "あう",
        kanji: "会う"
      },
      {
        lesson: 4,
        meaning: "there is...",
        kana: "ある",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "to buy",
        kana: "かう",
        kanji: "買う"
      },
      {
        lesson: 4,
        meaning: "to write",
        kana: "かく",
        kanji: "書く"
      },
      {
        lesson: 4,
        meaning: "to take (pictures)",
        kana: "とる",
        kanji: "撮る"
      },
      {
        lesson: 4,
        meaning: "to wait",
        kana: "まつ",
        kanji: "待つ"
      },
      {
        lesson: 4,
        meaning: "to understand",
        kana: "わかる",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "(a person) is in..., stays at...",
        kana: "いる",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "about (approximate measurement)",
        kana: "〜ぐらい",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "I'm sorry.",
        kana: "ごめんなさい",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "so, therefore",
        kana: "だから",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "many, a lot",
        kana: "たくさん",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "together with (a person)",
        kana: "〜と",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "why",
        kana: "どうして",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "alone",
        kana: "ひとりで",
        kanji: "一人で"
      },
      {
        lesson: 4,
        meaning: "Hello? (used on the phone)",
        kana: "もしもし",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "right",
        kana: "みぎ",
        kanji: "右"
      },
      {
        lesson: 4,
        meaning: "left",
        kana: "ひだり",
        kanji: "左"
      },
      {
        lesson: 4,
        meaning: "front",
        kana: "まえ",
        kanji: "前"
      },
      {
        lesson: 4,
        meaning: "back",
        kana: "うしろ",
        kanji: "後ろ"
      },
      {
        lesson: 4,
        meaning: "inside",
        kana: "なか",
        kanji: "中"
      },
      {
        lesson: 4,
        meaning: "on",
        kana: "うえ",
        kanji: "上"
      },
      {
        lesson: 4,
        meaning: "under",
        kana: "した",
        kanji: "下"
      },
      {
        lesson: 4,
        meaning: "near",
        kana: "そば",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "next",
        kana: "となり",
        kanji: "隣"
      },
      {
        lesson: 4,
        meaning: "between",
        kana: "あいだ",
        kanji: "間"
      },
      {
        lesson: 4,
        meaning: "there",
        kana: "そこ",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "here",
        kana: "ここ",
        kanji: null
      },
      {
        lesson: 4,
        meaning: "Monday",
        kana: "げつようび",
        kanji: "月曜日"
      },
      {
        lesson: 5,
        meaning: "sea",
        kana: "うみ",
        kanji: "海"
      },
      {
        lesson: 5,
        meaning: "postal stamps",
        kana: "きって",
        kanji: "切手"
      },
      {
        lesson: 5,
        meaning: "ticket",
        kana: "きっぷ",
        kanji: "切符"
      },
      {
        lesson: 5,
        meaning: "surfing",
        kana: "サーフィン",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "homework",
        kana: "しゅくだい",
        kanji: "宿題"
      },
      {
        lesson: 5,
        meaning: "food",
        kana: "たべもの",
        kanji: "食べ物"
      },
      {
        lesson: 5,
        meaning: "birthday",
        kana: "たんじょうび",
        kanji: "誕生日"
      },
      {
        lesson: 5,
        meaning: "test",
        kana: "テスト",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "weather",
        kana: "てんき",
        kanji: "天気"
      },
      {
        lesson: 5,
        meaning: "drink",
        kana: "のみもの",
        kanji: "飲み物"
      },
      {
        lesson: 5,
        meaning: "postcard",
        kana: "はがき",
        kanji: "葉書"
      },
      {
        lesson: 5,
        meaning: "bus",
        kana: "バス",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "airplane",
        kana: "ひこうき",
        kanji: "飛行機"
      },
      {
        lesson: 5,
        meaning: "room",
        kana: "へや",
        kanji: "部屋"
      },
      {
        lesson: 5,
        meaning: "I (used by men)",
        kana: "ぼく",
        kanji: "僕"
      },
      {
        lesson: 5,
        meaning: "holiday, day off, absence",
        kana: "やすみ",
        kanji: "休み"
      },
      {
        lesson: 5,
        meaning: "travel",
        kana: "りょこう",
        kanji: "旅行"
      },
      {
        lesson: 5,
        meaning: "new",
        kana: "あたらしい",
        kanji: "新しい"
      },
      {
        lesson: 5,
        meaning: "hot (weather)",
        kana: "あつい",
        kanji: "暑い"
      },
      {
        lesson: 5,
        meaning: "hot (objects)",
        kana: "あつい",
        kanji: "熱い"
      },
      {
        lesson: 5,
        meaning: "busy (people/days)",
        kana: "いそがしい",
        kanji: "忙しい"
      },
      {
        lesson: 5,
        meaning: "large",
        kana: "おおきい",
        kanji: "大きい"
      },
      {
        lesson: 5,
        meaning: "interesting",
        kana: "おもしろい",
        kanji: "面白い"
      },
      {
        lesson: 5,
        meaning: "frightening",
        kana: "こわい",
        kanji: "怖い"
      },
      {
        lesson: 5,
        meaning: "cold (weather-not used for objects)",
        kana: "さむい",
        kanji: "寒い"
      },
      {
        lesson: 5,
        meaning: "fun",
        kana: "たのしい",
        kanji: "楽しい"
      },
      {
        lesson: 5,
        meaning: "small",
        kana: "ちいさい",
        kanji: "小さい"
      },
      {
        lesson: 5,
        meaning: "boring",
        kana: "つまらない",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "old (thing - not used for people)",
        kana: "ふるい",
        kanji: "古い"
      },
      {
        lesson: 5,
        meaning: "difficult",
        kana: "むずかしい",
        kanji: "難しい"
      },
      {
        lesson: 5,
        meaning: "easy (problem), kind (person)",
        kana: "やさしい",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "inexpensive, cheap (thing)",
        kana: "やすい",
        kanji: "安い"
      },
      {
        lesson: 5,
        meaning: "disgusted with, to dislike",
        kana: "きらい（な）",
        kanji: "嫌い"
      },
      {
        lesson: 5,
        meaning: "beautiful, clean",
        kana: "きれい（な）",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "healthy, energetic",
        kana: "げんき（な）",
        kanji: "元気"
      },
      {
        lesson: 5,
        meaning: "quiet",
        kana: "しずか（な）",
        kanji: "静か"
      },
      {
        lesson: 5,
        meaning: "fond of, to like",
        kana: "すき（な）",
        kanji: "好き"
      },
      {
        lesson: 5,
        meaning: "to hate",
        kana: "だいきらい（な）",
        kanji: "大嫌い"
      },
      {
        lesson: 5,
        meaning: "very fond of, to love",
        kana: "だいすき（な）",
        kanji: "大好き"
      },
      {
        lesson: 5,
        meaning: "lively",
        kana: "にぎやか（な）",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "handsome",
        kana: "ハンサム（な）",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "not busy, to have a lot of free time",
        kana: "ひま（な）",
        kanji: "暇"
      },
      {
        lesson: 5,
        meaning: "to swim",
        kana: "およぐ",
        kanji: "泳ぐ"
      },
      {
        lesson: 5,
        meaning: "to ask",
        kana: "きく",
        kanji: "聞く"
      },
      {
        lesson: 5,
        meaning: "to ride, to board",
        kana: "のる",
        kanji: "乗る"
      },
      {
        lesson: 5,
        meaning: "to do, to perform",
        kana: "やる",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "to go out",
        kana: "でかける",
        kanji: "出かける"
      },
      {
        lesson: 5,
        meaning: "together",
        kana: "いっしょに",
        kanji: "一緒に"
      },
      {
        lesson: 5,
        meaning: "and then",
        kana: "それから",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "It's okay., Not to worry., Everything is under control.",
        kana: "だいじょうぶ",
        kanji: "大丈夫"
      },
      {
        lesson: 5,
        meaning: "very",
        kana: "とても",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "what kind of...",
        kana: "どんな",
        kanji: null
      },
      {
        lesson: 5,
        meaning: "[counter for flat objects]",
        kana: "〜まい",
        kanji: "〜枚"
      },
      {
        lesson: 5,
        meaning: "to (a place), as far as (a place), till (a time)",
        kana: "〜まで",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "money",
        kana: "おかね",
        kanji: "お金"
      },
      {
        lesson: 6,
        meaning: "grandmother, old woman",
        kana: "おばあさん",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "bath",
        kana: "おふろ",
        kanji: "お風呂"
      },
      {
        lesson: 6,
        meaning: "kanji, Chinese character",
        kana: "かんじ",
        kanji: "漢字"
      },
      {
        lesson: 6,
        meaning: "textbook",
        kana: "きょうかしょ",
        kanji: "教科書"
      },
      {
        lesson: 6,
        meaning: "this week",
        kana: "こんしゅう",
        kanji: "今週"
      },
      {
        lesson: 6,
        meaning: "Municipal Hospital",
        kana: "しみんびょういん",
        kanji: "市民病院"
      },
      {
        lesson: 6,
        meaning: "next",
        kana: "つぎ",
        kanji: "次"
      },
      {
        lesson: 6,
        meaning: "video game",
        kana: "テレビゲーム",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "electricity",
        kana: "でんき",
        kanji: "電気"
      },
      {
        lesson: 6,
        meaning: "train",
        kana: "でんしゃ",
        kanji: "電車"
      },
      {
        lesson: 6,
        meaning: "baggage",
        kana: "にもつ",
        kanji: "荷物"
      },
      {
        lesson: 6,
        meaning: "page",
        kana: "ページ",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "window",
        kana: "まど",
        kanji: "窓"
      },
      {
        lesson: 6,
        meaning: "night",
        kana: "よる",
        kanji: "夜"
      },
      {
        lesson: 6,
        meaning: "next week",
        kana: "らいしゅう",
        kanji: "来週"
      },
      {
        lesson: 6,
        meaning: "next year",
        kana: "らいねん",
        kanji: "来年"
      },
      {
        lesson: 6,
        meaning: "tough (situation)",
        kana: "たいへん（な）",
        kanji: "大変"
      },
      {
        lesson: 6,
        meaning: "to play, to spend time pleasantly",
        kana: "あそぶ",
        kanji: "遊ぶ"
      },
      {
        lesson: 6,
        meaning: "to hurry",
        kana: "いそぐ",
        kanji: "急ぐ"
      },
      {
        lesson: 6,
        meaning: "to take a bath",
        kana: "おふろにはいる",
        kanji: "お風呂に入る"
      },
      {
        lesson: 6,
        meaning: "to return (things)",
        kana: "かえす",
        kanji: "返す"
      },
      {
        lesson: 6,
        meaning: "to turn off, to erase",
        kana: "けす",
        kanji: "消す"
      },
      {
        lesson: 6,
        meaning: "to die",
        kana: "しぬ",
        kanji: "死ぬ"
      },
      {
        lesson: 6,
        meaning: "to sit down",
        kana: "すわる",
        kanji: "座る"
      },
      {
        lesson: 6,
        meaning: "to stand up",
        kana: "たつ",
        kanji: "立つ"
      },
      {
        lesson: 6,
        meaning: "to smoke",
        kana: "たばこをすう",
        kanji: "たばこを吸う"
      },
      {
        lesson: 6,
        meaning: "to use",
        kana: "つかう",
        kanji: "使う"
      },
      {
        lesson: 6,
        meaning: "to help",
        kana: "てつだう",
        kanji: "手伝う"
      },
      {
        lesson: 6,
        meaning: "to enter",
        kana: "はいる",
        kanji: "入る"
      },
      {
        lesson: 6,
        meaning: "to carry, to hold",
        kana: "もつ",
        kanji: "持つ"
      },
      {
        lesson: 6,
        meaning: "to be absent (from...), to rest",
        kana: "やすむ",
        kanji: "休む"
      },
      {
        lesson: 6,
        meaning: "to open (something)",
        kana: "あける",
        kanji: "開ける"
      },
      {
        lesson: 6,
        meaning: "to teach, to instruct",
        kana: "おしえる",
        kanji: "教える"
      },
      {
        lesson: 6,
        meaning: "to get off",
        kana: "おりる",
        kanji: "降りる"
      },
      {
        lesson: 6,
        meaning: "to borrow",
        kana: "かりる",
        kanji: "借りる"
      },
      {
        lesson: 6,
        meaning: "to close (something)",
        kana: "しめる",
        kanji: "閉める"
      },
      {
        lesson: 6,
        meaning: "to turn on",
        kana: "つける",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "to make a phone call",
        kana: "でんわをかける",
        kanji: "電話をかける"
      },
      {
        lesson: 6,
        meaning: "to forget, to leave behind",
        kana: "わすれる",
        kanji: "忘れる"
      },
      {
        lesson: 6,
        meaning: "to bring (a person)",
        kana: "つれてくる",
        kanji: "連れてくる"
      },
      {
        lesson: 6,
        meaning: "to bring (a thing)",
        kana: "もってくる",
        kanji: "持ってくる"
      },
      {
        lesson: 6,
        meaning: "later on",
        kana: "あとで",
        kanji: "後で"
      },
      {
        lesson: 6,
        meaning: "(do something) late",
        kana: "おそく",
        kanji: "遅く"
      },
      {
        lesson: 6,
        meaning: "because...",
        kana: "〜から",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "That would be fine., That wouldn't be necessary.",
        kana: "けっこうです",
        kanji: "結構です"
      },
      {
        lesson: 6,
        meaning: "right away",
        kana: "すぐ",
        kanji: null
      },
      {
        lesson: 6,
        meaning: "Really?",
        kana: "ほんとうですか",
        kanji: "本当ですか"
      },
      {
        lesson: 6,
        meaning: "slowly, leisurely, unhurriedly",
        kana: "ゆっくり",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "(my) older sister",
        kana: "あね",
        kanji: "姉"
      },
      {
        lesson: 7,
        meaning: "apartment",
        kana: "アパート",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "younger sister",
        kana: "いもうと",
        kanji: "妹"
      },
      {
        lesson: 7,
        meaning: "song",
        kana: "うた",
        kanji: "歌"
      },
      {
        lesson: 7,
        meaning: "younger brother",
        kana: "おとうと",
        kanji: "弟"
      },
      {
        lesson: 7,
        meaning: "man",
        kana: "おとこのひと",
        kanji: "男の人"
      },
      {
        lesson: 7,
        meaning: "older brother",
        kana: "おにいさん",
        kanji: "お兄さん"
      },
      {
        lesson: 7,
        meaning: "older sister",
        kana: "おねえさん",
        kanji: "お姉さん"
      },
      {
        lesson: 7,
        meaning: "woman",
        kana: "おんなのひと",
        kanji: "女の人"
      },
      {
        lesson: 7,
        meaning: "company",
        kana: "かいしゃ",
        kanji: "会社"
      },
      {
        lesson: 7,
        meaning: "family",
        kana: "かぞく",
        kanji: "家族"
      },
      {
        lesson: 7,
        meaning: "hair",
        kana: "かみ",
        kanji: "髪"
      },
      {
        lesson: 7,
        meaning: "brothers and sisters",
        kana: "きょうだい",
        kanji: "兄弟"
      },
      {
        lesson: 7,
        meaning: "country, place of origin",
        kana: "くに",
        kanji: "国"
      },
      {
        lesson: 7,
        meaning: "car",
        kana: "くるま",
        kanji: "車"
      },
      {
        lesson: 7,
        meaning: "convenience store",
        kana: "コンビニ",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "cafeteria, dining commons",
        kana: "しょくどう",
        kanji: "食堂"
      },
      {
        lesson: 7,
        meaning: "(my) father",
        kana: "ちち",
        kanji: "父"
      },
      {
        lesson: 7,
        meaning: "T-shirt",
        kana: "Tシャツ",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "eye",
        kana: "め",
        kanji: "目"
      },
      {
        lesson: 7,
        meaning: "glasses",
        kana: "めがね",
        kanji: "眼鏡"
      },
      {
        lesson: 7,
        meaning: "bright, smart, clever",
        kana: "あたまがいい",
        kanji: "頭がいい"
      },
      {
        lesson: 7,
        meaning: "great-looking",
        kana: "かっこいい",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "cute",
        kana: "かわいい",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "tall",
        kana: "せがたかい",
        kanji: "背が高い"
      },
      {
        lesson: 7,
        meaning: "short (stature)",
        kana: "せがひくい",
        kanji: "背が低い"
      },
      {
        lesson: 7,
        meaning: "long",
        kana: "ながい",
        kanji: "長い"
      },
      {
        lesson: 7,
        meaning: "fast",
        kana: "はやい",
        kanji: "早い"
      },
      {
        lesson: 7,
        meaning: "short (length)",
        kana: "みじかい",
        kanji: "短い"
      },
      {
        lesson: 7,
        meaning: "kind",
        kana: "しんせつ",
        kanji: "親切"
      },
      {
        lesson: 7,
        meaning: "convenient",
        kana: "べんり",
        kanji: "便利"
      },
      {
        lesson: 7,
        meaning: "to sing",
        kana: "うたう",
        kanji: "歌う"
      },
      {
        lesson: 7,
        meaning: "to put on (a hat)",
        kana: "かぶる",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "to get to know",
        kana: "しる",
        kanji: "知る"
      },
      {
        lesson: 7,
        meaning: "I know",
        kana: "しっています",
        kanji: "知っています"
      },
      {
        lesson: 7,
        meaning: "I do not know",
        kana: "しりません",
        kanji: "知りません"
      },
      {
        lesson: 7,
        meaning: "to live",
        kana: "すむ",
        kanji: "住む"
      },
      {
        lesson: 7,
        meaning: "to put on (items below your waist)",
        kana: "はく",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "to gain weight",
        kana: "ふとる",
        kanji: "太る"
      },
      {
        lesson: 7,
        meaning: "to be on the heavy side",
        kana: "ふとっています",
        kanji: "太っています"
      },
      {
        lesson: 7,
        meaning: "to put on glasses",
        kana: "めがねをかける",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "to put on (clothes above your waist)",
        kana: "きる",
        kanji: "着る"
      },
      {
        lesson: 7,
        meaning: "to lose weight",
        kana: "やせる",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "to be thin",
        kana: "やせています",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "to get married",
        kana: "けっこんする",
        kanji: "結婚する"
      },
      {
        lesson: 7,
        meaning: "but",
        kana: "が",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "one person",
        kana: "ひとり",
        kanji: "一人"
      },
      {
        lesson: 7,
        meaning: "two people",
        kana: "ふたり",
        kanji: "二人"
      },
      {
        lesson: 7,
        meaning: "of course",
        kana: "もちろん",
        kanji: null
      },
      {
        lesson: 7,
        meaning: "if you like",
        kana: "よかったら",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "That's too bad.",
        kana: "ざんねんですね",
        kanji: "残念ですね"
      },
      {
        lesson: 8,
        meaning: "the day after tomorrow",
        kana: "あさって",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "rain",
        kana: "あめ",
        kanji: "雨"
      },
      {
        lesson: 8,
        meaning: "office worker",
        kana: "かいしゃいん",
        kanji: "会社員"
      },
      {
        lesson: 8,
        meaning: "camera",
        kana: "カメラ",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "karaoke",
        kana: "カラオケ",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "air",
        kana: "くうき",
        kanji: "空気"
      },
      {
        lesson: 8,
        meaning: "this morning",
        kana: "けさ",
        kanji: "今朝"
      },
      {
        lesson: 8,
        meaning: "this month",
        kana: "こんげつ",
        kanji: "今月"
      },
      {
        lesson: 8,
        meaning: "job, work, occupation",
        kana: "しごと",
        kanji: "仕事"
      },
      {
        lesson: 8,
        meaning: "college student",
        kana: "だいがくせい",
        kanji: "大学生"
      },
      {
        lesson: 8,
        meaning: "disco",
        kana: "ディスコ",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "weather forecast",
        kana: "てんきよほう",
        kanji: "天気予報"
      },
      {
        lesson: 8,
        meaning: "place",
        kana: "ところ",
        kanji: "所"
      },
      {
        lesson: 8,
        meaning: "tomato",
        kana: "トマト",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "summer",
        kana: "なつ",
        kanji: "夏"
      },
      {
        lesson: 8,
        meaning: "something",
        kana: "なにか",
        kanji: "何か"
      },
      {
        lesson: 8,
        meaning: "party",
        kana: "パーティー",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "barbecue",
        kana: "バーベキュー",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "chopsticks",
        kana: "はし",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "winter",
        kana: "ふゆ",
        kanji: "冬"
      },
      {
        lesson: 8,
        meaning: "homestay, living with a local family",
        kana: "ホームステイ",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "every week",
        kana: "まいしゅう",
        kanji: "毎週"
      },
      {
        lesson: 8,
        meaning: "next month",
        kana: "らいげつ",
        kanji: "来月"
      },
      {
        lesson: 8,
        meaning: "skillful, good at...",
        kana: "じょうず",
        kanji: "上手"
      },
      {
        lesson: 8,
        meaning: "clumsy, poor at...",
        kana: "へた",
        kanji: "下手"
      },
      {
        lesson: 8,
        meaning: "famous",
        kana: "ゆうめい",
        kanji: "有名"
      },
      {
        lesson: 8,
        meaning: "it rains",
        kana: "あめがふる",
        kanji: "雨が降る"
      },
      {
        lesson: 8,
        meaning: "to wash",
        kana: "あらう",
        kanji: "洗う"
      },
      {
        lesson: 8,
        meaning: "to say",
        kana: "いう",
        kanji: "言う"
      },
      {
        lesson: 8,
        meaning: "to need",
        kana: "いる",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "to be late (for...)",
        kana: "おそくなる",
        kanji: "遅くなる"
      },
      {
        lesson: 8,
        meaning: "to think",
        kana: "おもう",
        kanji: "思う"
      },
      {
        lesson: 8,
        meaning: "to cut",
        kana: "きる",
        kanji: "切る"
      },
      {
        lesson: 8,
        meaning: "to make",
        kana: "つくる",
        kanji: "作る"
      },
      {
        lesson: 8,
        meaning: "to take (something)",
        kana: "もっていく",
        kanji: "持っていく"
      },
      {
        lesson: 8,
        meaning: "to stare (at...)",
        kana: "じろじろみる",
        kanji: "じろじろ見る"
      },
      {
        lesson: 8,
        meaning: "to begin",
        kana: "はじめる",
        kanji: "始める"
      },
      {
        lesson: 8,
        meaning: "to drive",
        kana: "うんてんする",
        kanji: "運転する"
      },
      {
        lesson: 8,
        meaning: "to do laundry",
        kana: "せんたくする",
        kanji: "洗濯する"
      },
      {
        lesson: 8,
        meaning: "to clean",
        kana: "そうじする",
        kanji: "掃除する"
      },
      {
        lesson: 8,
        meaning: "to cook",
        kana: "りょうりする",
        kanji: "料理する"
      },
      {
        lesson: 8,
        meaning: "uh-uh, no",
        kana: "ううん",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "uh-huh, yes",
        kana: "うん",
        kanji: null
      },
      {
        lesson: 8,
        meaning: "Cheers! (a toast)",
        kana: "かんぱい",
        kanji: "乾杯"
      },
      {
        lesson: 8,
        meaning: "all (of the people) together",
        kana: "みんなで",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "good child",
        kana: "いいこ",
        kanji: "いい子"
      },
      {
        lesson: 9,
        meaning: "color",
        kana: "いろ",
        kanji: "色"
      },
      {
        lesson: 9,
        meaning: "boxed lunch",
        kana: "おべんとう",
        kanji: "お弁当"
      },
      {
        lesson: 9,
        meaning: "spa, hot spring",
        kana: "おんせん",
        kanji: "温泉"
      },
      {
        lesson: 9,
        meaning: "Kabuki, traditional Japanese theatrical art",
        kana: "かぶき",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "guitar",
        kana: "ギター",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "medicine",
        kana: "くすり",
        kanji: "薬"
      },
      {
        lesson: 9,
        meaning: "to take medicine",
        kana: "くすりをのむ",
        kanji: "薬を飲む"
      },
      {
        lesson: 9,
        meaning: "concert",
        kana: "コンサート",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "near future",
        kana: "こんど",
        kanji: "今度"
      },
      {
        lesson: 9,
        meaning: "essay, composition",
        kana: "さくぶん",
        kanji: "作文"
      },
      {
        lesson: 9,
        meaning: "exam",
        kana: "しけん",
        kanji: "試験"
      },
      {
        lesson: 9,
        meaning: "Shinkansen, ",
        kana: "しんかんせん",
        kanji: "新幹線"
      },
      {
        lesson: 9,
        meaning: "ski",
        kana: "スキー",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "last month",
        kana: "せんげつ",
        kanji: "先月"
      },
      {
        lesson: 9,
        meaning: "word, vocabulary",
        kana: "たんご",
        kanji: "単語"
      },
      {
        lesson: 9,
        meaning: "piano",
        kana: "ピアノ",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "illness, sickness",
        kana: "びょうき",
        kanji: "病気"
      },
      {
        lesson: 9,
        meaning: "blue",
        kana: "あおい",
        kanji: "青い"
      },
      {
        lesson: 9,
        meaning: "red",
        kana: "あかい",
        kanji: "赤い"
      },
      {
        lesson: 9,
        meaning: "black",
        kana: "くろい",
        kanji: "黒い"
      },
      {
        lesson: 9,
        meaning: "lonely",
        kana: "さびしい",
        kanji: "寂しい"
      },
      {
        lesson: 9,
        meaning: "white",
        kana: "しろい",
        kanji: "白い"
      },
      {
        lesson: 9,
        meaning: "young",
        kana: "わかい",
        kanji: "若い"
      },
      {
        lesson: 9,
        meaning: "mean-spirited",
        kana: "いじわる",
        kanji: "意地悪"
      },
      {
        lesson: 9,
        meaning: "to dance",
        kana: "おどる",
        kanji: "踊る"
      },
      {
        lesson: 9,
        meaning: "(something) ends",
        kana: "おわる",
        kanji: "終わる"
      },
      {
        lesson: 9,
        meaning: "to be popular",
        kana: "にんきがある",
        kanji: "人気がある"
      },
      {
        lesson: 9,
        meaning: "(something) begins",
        kana: "はじまる",
        kanji: "始まる"
      },
      {
        lesson: 9,
        meaning: "to play (a string instrument or piano)",
        kana: "ひく",
        kanji: "弾く"
      },
      {
        lesson: 9,
        meaning: "to get (from somebody)",
        kana: "もらう",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "to memorize",
        kana: "おぼえる",
        kanji: "覚える"
      },
      {
        lesson: 9,
        meaning: "(1) to appear, to attend (2) to exit",
        kana: "でる",
        kanji: "出る"
      },
      {
        lesson: 9,
        meaning: "to do physical exercises",
        kana: "うんどうする",
        kanji: "運動する"
      },
      {
        lesson: 9,
        meaning: "to take a walk",
        kana: "さんぽする",
        kanji: "散歩する"
      },
      {
        lesson: 9,
        meaning: "by all means",
        kana: "ぜひ",
        kanji: "是非"
      },
      {
        lesson: 9,
        meaning: "all",
        kana: "みんな",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "already",
        kana: "もう",
        kanji: null
      },
      {
        lesson: 9,
        meaning: "one",
        kana: "ひとつ",
        kanji: "一つ"
      },
      {
        lesson: 9,
        meaning: "two",
        kana: "ふたつ",
        kanji: "二つ"
      },
      {
        lesson: 9,
        meaning: "three",
        kana: "みっつ",
        kanji: "三つ"
      },
      {
        lesson: 9,
        meaning: "four",
        kana: "よっつ",
        kanji: "四つ"
      },
      {
        lesson: 9,
        meaning: "five",
        kana: "いつつ",
        kanji: "五つ"
      },
      {
        lesson: 9,
        meaning: "six",
        kana: "むっつ",
        kanji: "六つ"
      },
      {
        lesson: 9,
        meaning: "seven",
        kana: "ななつ",
        kanji: "七つ"
      },
      {
        lesson: 9,
        meaning: "eight",
        kana: "やっつ",
        kanji: "八つ"
      },
      {
        lesson: 9,
        meaning: "nine",
        kana: "ここのつ",
        kanji: "九つ"
      },
      {
        lesson: 9,
        meaning: "ten",
        kana: "とお",
        kanji: "十"
      },
      {
        lesson: 10,
        meaning: "fall",
        kana: "あき",
        kanji: "秋"
      },
      {
        lesson: 10,
        meaning: "station",
        kana: "えき",
        kanji: "駅"
      },
      {
        lesson: 10,
        meaning: "rich person",
        kana: "おかねもち",
        kanji: "お金持ち"
      },
      {
        lesson: 10,
        meaning: "face",
        kana: "かお",
        kanji: "顔"
      },
      {
        lesson: 10,
        meaning: "season",
        kana: "きせつ",
        kanji: "季節"
      },
      {
        lesson: 10,
        meaning: "credit card",
        kana: "クレジットカード",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "this year",
        kana: "ことし",
        kanji: "今年"
      },
      {
        lesson: 10,
        meaning: "soccer",
        kana: "サッカー",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "shirt",
        kana: "シャツ",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "life, living",
        kana: "せいかつ",
        kanji: "生活"
      },
      {
        lesson: 10,
        meaning: "world",
        kana: "せかい",
        kanji: "世界"
      },
      {
        lesson: 10,
        meaning: "subway",
        kana: "ちかてつ",
        kanji: "地下鉄"
      },
      {
        lesson: 10,
        meaning: "gloves",
        kana: "てぶくろ",
        kanji: "手袋"
      },
      {
        lesson: 10,
        meaning: "barber's",
        kana: "とこや",
        kanji: "床屋"
      },
      {
        lesson: 10,
        meaning: "spring",
        kana: "はる",
        kanji: "春"
      },
      {
        lesson: 10,
        meaning: "pants",
        kana: "パンツ",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "beauty parlor",
        kana: "びよういん",
        kanji: "美容院"
      },
      {
        lesson: 10,
        meaning: "flight",
        kana: "びん",
        kanji: "便"
      },
      {
        lesson: 10,
        meaning: "ship, boat",
        kana: "ふね",
        kanji: "船"
      },
      {
        lesson: 10,
        meaning: "baseball",
        kana: "やきゅう",
        kanji: "野球"
      },
      {
        lesson: 10,
        meaning: "celebrity",
        kana: "ゆうめいじん",
        kanji: "有名人"
      },
      {
        lesson: 10,
        meaning: "reservation",
        kana: "よやく",
        kanji: "予約"
      },
      {
        lesson: 10,
        meaning: "next semester",
        kana: "らいがっき",
        kanji: "来学期"
      },
      {
        lesson: 10,
        meaning: "apple",
        kana: "りんご",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "warm",
        kana: "あたたかい",
        kanji: "暖かい"
      },
      {
        lesson: 10,
        meaning: "slow, late",
        kana: "おそい",
        kanji: "遅い"
      },
      {
        lesson: 10,
        meaning: "cool (weather)",
        kana: "すずしい",
        kanji: "涼しい"
      },
      {
        lesson: 10,
        meaning: "cold (thing/people)",
        kana: "つめたい",
        kanji: "冷たい"
      },
      {
        lesson: 10,
        meaning: "sleepy",
        kana: "ねむい",
        kanji: "眠い"
      },
      {
        lesson: 10,
        meaning: "easy, simple",
        kana: "かんたん",
        kanji: "簡単"
      },
      {
        lesson: 10,
        meaning: "to take (amount of time / money)",
        kana: "かかる",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "to stay (at a hotel, etc.)",
        kana: "とまる",
        kanji: "泊まる"
      },
      {
        lesson: 10,
        meaning: "to become",
        kana: "なる",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "to pay",
        kana: "はらう",
        kanji: "払う"
      },
      {
        lesson: 10,
        meaning: "to decide",
        kana: "きめる",
        kanji: "決める"
      },
      {
        lesson: 10,
        meaning: "to practice",
        kana: "れんしゅうする",
        kanji: "練習する"
      },
      {
        lesson: 10,
        meaning: "on foot",
        kana: "あるいて",
        kanji: "歩いて"
      },
      {
        lesson: 10,
        meaning: "best",
        kana: "いちばん",
        kanji: "一番"
      },
      {
        lesson: 10,
        meaning: "these days",
        kana: "このごろ",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "how, by what means",
        kana: "どうやって",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "which",
        kana: "どちら",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "how much, how long",
        kana: "どのぐらい",
        kanji: null
      },
      {
        lesson: 10,
        meaning: "(do something) early, fast",
        kana: "はやく",
        kanji: "早く"
      },
      {
        lesson: 11,
        meaning: "snack, sweets",
        kana: "おかし",
        kanji: "お菓子"
      },
      {
        lesson: 11,
        meaning: "New Year's",
        kana: "おしょうがつ",
        kanji: "お正月"
      },
      {
        lesson: 11,
        meaning: "boy",
        kana: "おとこのこ",
        kanji: "男の子"
      },
      {
        lesson: 11,
        meaning: "toy",
        kana: "おもちゃ",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "girl",
        kana: "おんなのこ",
        kanji: "女の子"
      },
      {
        lesson: 11,
        meaning: "foreign country",
        kana: "がいこく",
        kanji: "外国"
      },
      {
        lesson: 11,
        meaning: "singer",
        kana: "かしゅ",
        kanji: "歌手"
      },
      {
        lesson: 11,
        meaning: "camp",
        kana: "キャンプ",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "this person (polite)",
        kana: "こちら",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "this semester",
        kana: "こんがっき",
        kanji: "今学期"
      },
      {
        lesson: 11,
        meaning: "president of a company",
        kana: "しゃちょう",
        kanji: "社長"
      },
      {
        lesson: 11,
        meaning: "class",
        kana: "じゅぎょう",
        kanji: "授業"
      },
      {
        lesson: 11,
        meaning: "future",
        kana: "しょうらい",
        kanji: "将来"
      },
      {
        lesson: 11,
        meaning: "drive",
        kana: "ドライブ",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "beer",
        kana: "ビール",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "art museum",
        kana: "びじゅつかん",
        kanji: "美術館"
      },
      {
        lesson: 11,
        meaning: "host family",
        kana: "ホストファミリー",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "lake",
        kana: "みずうみ",
        kanji: "湖"
      },
      {
        lesson: 11,
        meaning: "mountain",
        kana: "やま",
        kanji: "山"
      },
      {
        lesson: 11,
        meaning: "dream",
        kana: "ゆめ",
        kanji: "夢"
      },
      {
        lesson: 11,
        meaning: "roommate",
        kana: "ルームメート",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to tell a lie",
        kana: "うそをつく",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to become hungry",
        kana: "おなかがすく",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to own (a pet)",
        kana: "かう",
        kanji: "飼う"
      },
      {
        lesson: 11,
        meaning: "to cut classes",
        kana: "サボる",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to take (a class), to get (a grade)",
        kana: "とる",
        kanji: "取る"
      },
      {
        lesson: 11,
        meaning: "to learn",
        kana: "ならう",
        kanji: "習う"
      },
      {
        lesson: 11,
        meaning: "to climb",
        kana: "のぼる",
        kanji: "登る"
      },
      {
        lesson: 11,
        meaning: "to work",
        kana: "はたらく",
        kanji: "働く"
      },
      {
        lesson: 11,
        meaning: "to get tired",
        kana: "つかれる",
        kanji: "疲れる"
      },
      {
        lesson: 11,
        meaning: "to quit",
        kana: "やめる",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to have a fight, to quarrel",
        kana: "けんかする",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to introduce",
        kana: "しょうかいする",
        kanji: "紹介する"
      },
      {
        lesson: 11,
        meaning: "to go on a diet",
        kana: "ダイエットする",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "to be late (for an appointment)",
        kana: "ちこくする",
        kanji: "遅刻する"
      },
      {
        lesson: 11,
        meaning: "to study abroad",
        kana: "りゅうがくする",
        kanji: "留学する"
      },
      {
        lesson: 11,
        meaning: "after (an event)",
        kana: "あと",
        kanji: "後"
      },
      {
        lesson: 11,
        meaning: "coming from",
        kana: "しゅっしん",
        kanji: "出身"
      },
      {
        lesson: 11,
        meaning: "very",
        kana: "すごく",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "and then",
        kana: "そして",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "it has been a long time",
        kana: "ひさしぶり",
        kanji: "久しぶり"
      },
      {
        lesson: 11,
        meaning: "okay, so-so",
        kana: "まあまあ",
        kanji: null
      },
      {
        lesson: 11,
        meaning: "more",
        kana: "もっと",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "leg, foot",
        kana: "あし",
        kanji: "足"
      },
      {
        lesson: 12,
        meaning: "meaning",
        kana: "いみ",
        kanji: "意味"
      },
      {
        lesson: 12,
        meaning: "stomach",
        kana: "おなか",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "cold",
        kana: "かぜ",
        kanji: "風"
      },
      {
        lesson: 12,
        meaning: "girlfriend",
        kana: "かのじょ",
        kanji: "彼女"
      },
      {
        lesson: 12,
        meaning: "boyfriend",
        kana: "かれ",
        kanji: "彼"
      },
      {
        lesson: 12,
        meaning: "temperature (weather)",
        kana: "きおん",
        kanji: "気温"
      },
      {
        lesson: 12,
        meaning: "cloudy weather",
        kana: "くもり",
        kanji: "曇り"
      },
      {
        lesson: 12,
        meaning: "match, game",
        kana: "しあい",
        kanji: "試合"
      },
      {
        lesson: 12,
        meaning: "juice",
        kana: "ジュース",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "grade (on a test, etc.)",
        kana: "せいせき",
        kanji: "成績"
      },
      {
        lesson: 12,
        meaning: "cough",
        kana: "せき",
        kanji: "咳"
      },
      {
        lesson: 12,
        meaning: "throat",
        kana: "のど",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "tooth",
        kana: "は",
        kanji: "歯"
      },
      {
        lesson: 12,
        meaning: "flower",
        kana: "はな",
        kanji: "花"
      },
      {
        lesson: 12,
        meaning: "sunny weather",
        kana: "はれ",
        kanji: "晴れ"
      },
      {
        lesson: 12,
        meaning: "clothes",
        kana: "ふく",
        kanji: "服"
      },
      {
        lesson: 12,
        meaning: "hangover",
        kana: "ふつかよい",
        kanji: "二日酔い"
      },
      {
        lesson: 12,
        meaning: "present",
        kana: "プレゼント",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "homesickness",
        kana: "ホームシック",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "thing (concrete object)",
        kana: "もの",
        kanji: "物"
      },
      {
        lesson: 12,
        meaning: "snow",
        kana: "ゆき",
        kanji: "雪"
      },
      {
        lesson: 12,
        meaning: "business to take care of",
        kana: "ようじ",
        kanji: "用事"
      },
      {
        lesson: 12,
        meaning: "sweet",
        kana: "あまい",
        kanji: "甘い"
      },
      {
        lesson: 12,
        meaning: "hurt, painful",
        kana: "いたい",
        kanji: "痛い"
      },
      {
        lesson: 12,
        meaning: "there are many...",
        kana: "おおい",
        kanji: "多い"
      },
      {
        lesson: 12,
        meaning: "narrow, not spacious",
        kana: "せまい",
        kanji: "狭い"
      },
      {
        lesson: 12,
        meaning: "inconvenient, to have a scheduling conflict",
        kana: "つごうがわるい",
        kanji: "都合が悪い"
      },
      {
        lesson: 12,
        meaning: "bad",
        kana: "わるい",
        kanji: "悪い"
      },
      {
        lesson: 12,
        meaning: "fantastic",
        kana: "すてき",
        kanji: "素敵"
      },
      {
        lesson: 12,
        meaning: "to catch a cold",
        kana: "かぜをひく",
        kanji: "風邪をひく"
      },
      {
        lesson: 12,
        meaning: "to be interested (in...)",
        kana: "きょうみがある",
        kanji: "興味がある"
      },
      {
        lesson: 12,
        meaning: "to lose",
        kana: "なくす",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "to become thirsty",
        kana: "のどがかわく",
        kanji: "のどが渇く"
      },
      {
        lesson: 12,
        meaning: "to have a fever",
        kana: "ねつがある",
        kanji: "熱がある"
      },
      {
        lesson: 12,
        meaning: "to cough",
        kana: "せきがでる",
        kanji: "せきが出る"
      },
      {
        lesson: 12,
        meaning: "to break up, to separate",
        kana: "わかれる",
        kanji: "別れる"
      },
      {
        lesson: 12,
        meaning: "to get nervous",
        kana: "きんちょうする",
        kanji: "緊張する"
      },
      {
        lesson: 12,
        meaning: "to worry",
        kana: "しんぱいする",
        kanji: "心配する"
      },
      {
        lesson: 12,
        meaning: "always",
        kana: "いつも",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "Get well soon.",
        kana: "おだいじに",
        kanji: "お大事に"
      },
      {
        lesson: 12,
        meaning: "don't look well",
        kana: "げんきがない",
        kanji: "元気がない"
      },
      {
        lesson: 12,
        meaning: "probably, maybe",
        kana: "たぶん",
        kanji: "多分"
      },
      {
        lesson: 12,
        meaning: "as much as possible",
        kana: "できるだけ",
        kanji: null
      },
      {
        lesson: 12,
        meaning: "for two to three days",
        kana: "にさんにち",
        kanji: "二三日"
      },
      {
        lesson: 12,
        meaning: "for the first time",
        kana: "はじめて",
        kanji: "初めて"
      },
      {
        lesson: 12,
        meaning: "very soon, in a few moments/days",
        kana: "もうすぐ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "waiter",
        kana: "ウェイター",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "grandfather, old man",
        kana: "おじいさん",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "adult",
        kana: "おとな",
        kanji: "大人"
      },
      {
        lesson: 13,
        meaning: "foreign language",
        kana: "がいこくご",
        kanji: "外国語"
      },
      {
        lesson: 13,
        meaning: "musical instrument",
        kana: "がっき",
        kanji: "楽器"
      },
      {
        lesson: 13,
        meaning: "karate",
        kana: "からて",
        kanji: "空手"
      },
      {
        lesson: 13,
        meaning: "curry",
        kana: "カレー",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "kimono, Japanese traditional dress",
        kana: "きもの",
        kanji: "着物"
      },
      {
        lesson: 13,
        meaning: "cake",
        kana: "ケーキ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "advertisement",
        kana: "こうこく",
        kanji: "広告"
      },
      {
        lesson: 13,
        meaning: "tea (black tea)",
        kana: "こうちゃ",
        kanji: "紅茶"
      },
      {
        lesson: 13,
        meaning: "language",
        kana: "ことば",
        kanji: "言葉"
      },
      {
        lesson: 13,
        meaning: "golf",
        kana: "ゴルフ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "sweater",
        kana: "セーター",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "elephant",
        kana: "ぞう",
        kanji: "象"
      },
      {
        lesson: 13,
        meaning: "violin",
        kana: "バイオリン",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "motorbike",
        kana: "バイク",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "(consumer) prices",
        kana: "ぶっか",
        kanji: "物価"
      },
      {
        lesson: 13,
        meaning: "grammar",
        kana: "ぶんぽう",
        kanji: "文法"
      },
      {
        lesson: 13,
        meaning: "lawyer",
        kana: "べんごし",
        kanji: "弁護士"
      },
      {
        lesson: 13,
        meaning: "recruitment",
        kana: "ぼしゅう",
        kanji: "募集"
      },
      {
        lesson: 13,
        meaning: "shop, store",
        kana: "みせ",
        kanji: "店"
      },
      {
        lesson: 13,
        meaning: "yakuza, gangster",
        kana: "やくざ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "promise, appointment",
        kana: "やくそく",
        kanji: "約束"
      },
      {
        lesson: 13,
        meaning: "(term) paper",
        kana: "レポート",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "I (formal)",
        kana: "わたくし",
        kanji: "私"
      },
      {
        lesson: 13,
        meaning: "glad",
        kana: "うれしい",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "sad",
        kana: "かなしい",
        kanji: "悲しい"
      },
      {
        lesson: 13,
        meaning: "hot and spicy, salty",
        kana: "からい",
        kanji: "辛い"
      },
      {
        lesson: 13,
        meaning: "strict",
        kana: "きびしい",
        kanji: "厳しい"
      },
      {
        lesson: 13,
        meaning: "close, near",
        kana: "ちかい",
        kanji: "近い"
      },
      {
        lesson: 13,
        meaning: "various, different kinds of",
        kana: "いろいろ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "happy (lasting happiness)",
        kana: "しあわせ",
        kanji: "幸せ"
      },
      {
        lesson: 13,
        meaning: "no good",
        kana: "だめ",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "to knit",
        kana: "あむ",
        kanji: "編む"
      },
      {
        lesson: 13,
        meaning: "to lend, to rent",
        kana: "かす",
        kanji: "貸す"
      },
      {
        lesson: 13,
        meaning: "to do one's best, to try hard",
        kana: "がんばる",
        kanji: "頑張る"
      },
      {
        lesson: 13,
        meaning: "to cry",
        kana: "なく",
        kanji: "泣く"
      },
      {
        lesson: 13,
        meaning: "to brush (teeth), to polish",
        kana: "みがく",
        kanji: "磨く"
      },
      {
        lesson: 13,
        meaning: "to keep a promise",
        kana: "やくそくをまもる",
        kanji: "約束を守る"
      },
      {
        lesson: 13,
        meaning: "to be moved/touched (by...)",
        kana: "かんどうする",
        kanji: "感動する"
      },
      {
        lesson: 13,
        meaning: "(someone honorable) is present/home",
        kana: "いらっしゃいます",
        kanji: null
      },
      {
        lesson: 13,
        meaning: "as a matter of fact,...",
        kana: "じつは",
        kanji: "実は"
      },
      {
        lesson: 13,
        meaning: "all",
        kana: "ぜんぶ",
        kanji: "全部"
      },
      {
        lesson: 13,
        meaning: "one day",
        kana: "いちにち",
        kanji: "一日"
      },
      {
        lesson: 13,
        meaning: "two days",
        kana: "ふつか",
        kanji: "二日"
      },
      {
        lesson: 13,
        meaning: "three days",
        kana: "みっか",
        kanji: "三日"
      },
      {
        lesson: 13,
        meaning: "four days",
        kana: "よっか",
        kanji: "四日"
      },
      {
        lesson: 13,
        meaning: "five days",
        kana: "いつか",
        kanji: "五日"
      },
      {
        lesson: 13,
        meaning: "six days",
        kana: "むいか",
        kanji: "六日"
      },
      {
        lesson: 13,
        meaning: "seven days",
        kana: "なのか",
        kanji: "七日"
      },
      {
        lesson: 13,
        meaning: "eight days",
        kana: "ようか",
        kanji: "八日"
      },
      {
        lesson: 13,
        meaning: "nine days",
        kana: "ここのか",
        kanji: "九日"
      },
      {
        lesson: 13,
        meaning: "ten days",
        kana: "とおか",
        kanji: "十日"
      },
      {
        lesson: 13,
        meaning: "Thank you (in advance)",
        kana: "よろしくおねがいします",
        kanji: "よろしくお願いします"
      },
      {
        lesson: 14,
        meaning: "stuffed animal (e.g., teddy bear)",
        kana: "ぬいぐるみ",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "(my) older brother",
        kana: "あに",
        kanji: "兄"
      },
      {
        lesson: 14,
        meaning: "landlord",
        kana: "おおやさん",
        kanji: "大家さん"
      },
      {
        lesson: 14,
        meaning: "return (as a token of gratitude)",
        kana: "おかえし",
        kanji: "お返し"
      },
      {
        lesson: 14,
        meaning: "(your/his) wife",
        kana: "おくさん",
        kanji: "奥さん"
      },
      {
        lesson: 14,
        meaning: "uncle, middle-aged man",
        kana: "おじさん",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "aunt, middle-aged woman",
        kana: "おばさん",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "club, student society",
        kana: "クラブ",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "Christmas",
        kana: "クリスマス",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "(your/her) husband",
        kana: "ごしゅじん",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "tumbler, glass",
        kana: "コップ",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "plate, dish",
        kana: "さら",
        kanji: "皿"
      },
      {
        lesson: 14,
        meaning: "time",
        kana: "じかん",
        kanji: "時間"
      },
      {
        lesson: 14,
        meaning: "chocolate",
        kana: "チョコレート",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "e-mail",
        kana: "でんしメール",
        kanji: "電子メール"
      },
      {
        lesson: 14,
        meaning: "necktie",
        kana: "ネクタイ",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "(my) mother",
        kana: "はは",
        kanji: "母"
      },
      {
        lesson: 14,
        meaning: "St. Valentine's Day",
        kana: "バレンタインデー",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "camcorder",
        kana: "ビデオカメラ",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "married couple, husband and wife",
        kana: "ふうふ",
        kanji: "夫婦"
      },
      {
        lesson: 14,
        meaning: "White Day",
        kana: "ホワイトデー",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "winter scarf",
        kana: "マフラー",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "comic book",
        kana: "まんが",
        kanji: "漫画"
      },
      {
        lesson: 14,
        meaning: "multistory apartment, condominium",
        kana: "マンション",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "mandarin",
        kana: "みかん",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "ring",
        kana: "ゆびわ",
        kanji: "指輪"
      },
      {
        lesson: 14,
        meaning: "parents",
        kana: "りょうしん",
        kanji: "両親"
      },
      {
        lesson: 14,
        meaning: "resume",
        kana: "りれきしょ",
        kanji: "履歴書"
      },
      {
        lesson: 14,
        meaning: "to want",
        kana: "ほしい",
        kanji: "欲しい"
      },
      {
        lesson: 14,
        meaning: "stingy, cheap",
        kana: "けち",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "to send",
        kana: "おくる",
        kanji: "送る"
      },
      {
        lesson: 14,
        meaning: "to look good (on somebody)",
        kana: "にあう",
        kanji: "似合う"
      },
      {
        lesson: 14,
        meaning: "to give up",
        kana: "あきらめる",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "to give (to others)",
        kana: "あげる",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "to give (me)",
        kana: "くれる",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "to come into existence, to be made",
        kana: "できる",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "to consult",
        kana: "そうだんする",
        kanji: "相談する"
      },
      {
        lesson: 14,
        meaning: "to propose marriage",
        kana: "プロポーズする",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "same",
        kana: "おなじ",
        kanji: "同じ"
      },
      {
        lesson: 14,
        meaning: "last year",
        kana: "きょねん",
        kanji: "去年"
      },
      {
        lesson: 14,
        meaning: "we",
        kana: "わたしたち",
        kanji: "私たち"
      },
      {
        lesson: 14,
        meaning: "exactly",
        kana: "ちょうど",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "well",
        kana: "よく",
        kanji: null
      },
      {
        lesson: 14,
        meaning: "[generic counter for smaller items]",
        kana: "こ",
        kanji: "個"
      },
      {
        lesson: 14,
        meaning: "[counter for bound volumes]",
        kana: "さつ",
        kanji: "冊"
      },
      {
        lesson: 14,
        meaning: "[counter for equipment]",
        kana: "だい",
        kanji: "台"
      },
      {
        lesson: 14,
        meaning: "[counter for smaller animals]",
        kana: "ひき",
        kanji: "匹"
      },
      {
        lesson: 14,
        meaning: "[counter for long objects]",
        kana: "ぽん",
        kanji: "本"
      },
      {
        lesson: 15,
        meaning: "painting, picture, drawing",
        kana: "え",
        kanji: "絵"
      },
      {
        lesson: 15,
        meaning: "movie theater",
        kana: "えいがかん",
        kanji: "映画館"
      },
      {
        lesson: 15,
        meaning: "foreigner",
        kana: "がいこくじん",
        kanji: "外国人"
      },
      {
        lesson: 15,
        meaning: "furniture",
        kana: "かぐ",
        kanji: "家具"
      },
      {
        lesson: 15,
        meaning: "sightseeing",
        kana: "かんこう",
        kanji: "観光"
      },
      {
        lesson: 15,
        meaning: "wedding",
        kana: "けっこんしき",
        kanji: "結婚式"
      },
      {
        lesson: 15,
        meaning: "earthquake",
        kana: "じしん",
        kanji: "地震"
      },
      {
        lesson: 15,
        meaning: "deadline",
        kana: "しめきり",
        kanji: "締め切り"
      },
      {
        lesson: 15,
        meaning: "jacket",
        kana: "ジャケット",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "custom",
        kana: "しゅうかん",
        kanji: "習慣"
      },
      {
        lesson: 15,
        meaning: "tax",
        kana: "ぜいきん",
        kanji: "税金"
      },
      {
        lesson: 15,
        meaning: "graduation ceremony",
        kana: "そつぎょうしき",
        kanji: "卒業式"
      },
      {
        lesson: 15,
        meaning: "Japanese buckwheat noodle",
        kana: "そば",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "map",
        kana: "ちず",
        kanji: "地図"
      },
      {
        lesson: 15,
        meaning: "battery",
        kana: "でんち",
        kanji: "電池"
      },
      {
        lesson: 15,
        meaning: "garden",
        kana: "にわ",
        kanji: "庭"
      },
      {
        lesson: 15,
        meaning: "presentation",
        kana: "はっぴょう",
        kanji: "発表"
      },
      {
        lesson: 15,
        meaning: "broadcast program",
        kana: "ばんぐみ",
        kanji: "番組"
      },
      {
        lesson: 15,
        meaning: "swimming pool",
        kana: "プール",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "pet",
        kana: "ペット",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "schedule",
        kana: "よてい",
        kanji: "予定"
      },
      {
        lesson: 15,
        meaning: "inn",
        kana: "りょかん",
        kanji: "旅館"
      },
      {
        lesson: 15,
        meaning: "discount coupon",
        kana: "わりびきけん",
        kanji: "割引券"
      },
      {
        lesson: 15,
        meaning: "spacious, wide",
        kana: "ひろい",
        kanji: "広い"
      },
      {
        lesson: 15,
        meaning: "to sell",
        kana: "うる",
        kanji: "売る"
      },
      {
        lesson: 15,
        meaning: "to withdraw (money)",
        kana: "おろす",
        kanji: "下ろす"
      },
      {
        lesson: 15,
        meaning: "to draw, to paint",
        kana: "かく",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "to look for",
        kana: "さがす",
        kanji: "探す"
      },
      {
        lesson: 15,
        meaning: "to invite",
        kana: "さそう",
        kanji: "誘う"
      },
      {
        lesson: 15,
        meaning: "(1) to date (someone) (2) to keep company",
        kana: "つきあう",
        kanji: "付き合う"
      },
      {
        lesson: 15,
        meaning: "to arrive",
        kana: "つく",
        kanji: "着く"
      },
      {
        lesson: 15,
        meaning: "to buy insurance",
        kana: "ほけんにはいる",
        kanji: "保険に入る"
      },
      {
        lesson: 15,
        meaning: "to be cautious/careful",
        kana: "きをつける",
        kanji: "気をつける"
      },
      {
        lesson: 15,
        meaning: "to look into (a matter)",
        kana: "しらべる",
        kanji: "調べる"
      },
      {
        lesson: 15,
        meaning: "to throw away",
        kana: "すてる",
        kanji: "捨てる"
      },
      {
        lesson: 15,
        meaning: "to be visible",
        kana: "みえる",
        kanji: "見える"
      },
      {
        lesson: 15,
        meaning: "to decide on (an item)",
        kana: "する",
        kanji: null
      },
      {
        lesson: 15,
        meaning: "to graduate (from...)",
        kana: "そつぎょうする",
        kanji: "卒業する"
      },
      {
        lesson: 15,
        meaning: "to reserve",
        kana: "よやくする",
        kanji: "予約する"
      },
      {
        lesson: 15,
        meaning: "all day long",
        kana: "いちにちじゅう",
        kanji: "一日中"
      },
      {
        lesson: 15,
        meaning: "recently",
        kana: "さいきん",
        kanji: "最近"
      },
      {
        lesson: 16,
        meaning: "station attendant",
        kana: "えきいん",
        kanji: "駅員"
      },
      {
        lesson: 16,
        meaning: "parent",
        kana: "おや",
        kanji: "親"
      },
      {
        lesson: 16,
        meaning: "garbage",
        kana: "ごみ",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "sugar",
        kana: "さとう",
        kanji: "砂糖"
      },
      {
        lesson: 16,
        meaning: "scholarship",
        kana: "しょうがくきん",
        kanji: "奨学金"
      },
      {
        lesson: 16,
        meaning: "relatives",
        kana: "しんせき",
        kanji: "親せき"
      },
      {
        lesson: 16,
        meaning: "letter of recommendation",
        kana: "すいせんじょう",
        kanji: "推薦状"
      },
      {
        lesson: 16,
        meaning: "graduate school",
        kana: "だいがくいん",
        kanji: "大学院"
      },
      {
        lesson: 16,
        meaning: "typhoon",
        kana: "たいふう",
        kanji: "台風"
      },
      {
        lesson: 16,
        meaning: "day",
        kana: "ひ",
        kanji: "日"
      },
      {
        lesson: 16,
        meaning: "file, portfolio",
        kana: "ファイル",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "way, road, directions",
        kana: "みち",
        kanji: "道"
      },
      {
        lesson: 16,
        meaning: "alarm clock",
        kana: "めざましどけい",
        kanji: "目覚まし時計"
      },
      {
        lesson: 16,
        meaning: "dirty",
        kana: "きたない",
        kanji: "汚い"
      },
      {
        lesson: 16,
        meaning: "to wake (someone) up",
        kana: "おこす",
        kanji: "起こす"
      },
      {
        lesson: 16,
        meaning: "to treat (someone) to a meal",
        kana: "おごる",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "to get depressed",
        kana: "おちこむ",
        kanji: "落ち込む"
      },
      {
        lesson: 16,
        meaning: "to have difficulty",
        kana: "こまる",
        kanji: "困る"
      },
      {
        lesson: 16,
        meaning: "to take (something) out, to hand in (something)",
        kana: "だす",
        kanji: "出す"
      },
      {
        lesson: 16,
        meaning: "to take (someone) to (a place)",
        kana: "つれていく",
        kanji: "連れていく"
      },
      {
        lesson: 16,
        meaning: "to correct, to fix",
        kana: "なおす",
        kanji: "直す"
      },
      {
        lesson: 16,
        meaning: "to become lost, to lose one's way",
        kana: "みちにまよう",
        kanji: "道に迷う"
      },
      {
        lesson: 16,
        meaning: "to translate",
        kana: "やくす",
        kanji: "訳す"
      },
      {
        lesson: 16,
        meaning: "to laugh",
        kana: "わらう",
        kanji: "笑う"
      },
      {
        lesson: 16,
        meaning: "to iron (clothes)",
        kana: "アイロンをかける",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "to collect",
        kana: "あつめる",
        kanji: "集める"
      },
      {
        lesson: 16,
        meaning: "to put (something) in",
        kana: "いれる",
        kanji: "入れる"
      },
      {
        lesson: 16,
        meaning: "to miss (a train, bus, etc.)",
        kana: "のりおくれる",
        kanji: "乗り遅れる"
      },
      {
        lesson: 16,
        meaning: "to show",
        kana: "みせる",
        kanji: "見せる"
      },
      {
        lesson: 16,
        meaning: "to oversleep",
        kana: "あさねぼうする",
        kanji: "朝寝坊する"
      },
      {
        lesson: 16,
        meaning: "to show (someone) around",
        kana: "あんないする",
        kanji: "案内する"
      },
      {
        lesson: 16,
        meaning: "to explain",
        kana: "せつめいする",
        kanji: "説明する"
      },
      {
        lesson: 16,
        meaning: "to come to pick up (someone)",
        kana: "むかえにくる",
        kanji: "迎えに来る"
      },
      {
        lesson: 16,
        meaning: "well..., let me see...",
        kana: "ええと",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "by the end of today",
        kana: "きょうじゅうに",
        kanji: "今日中に"
      },
      {
        lesson: 16,
        meaning: "the other day",
        kana: "このあいだ",
        kanji: "この間"
      },
      {
        lesson: 16,
        meaning: "about this much",
        kana: "このぐらい",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "I'm sorry. (casual)",
        kana: "ごめん",
        kanji: null
      },
      {
        lesson: 16,
        meaning: "Excuse me.., Sorry to interrupt you.",
        kana: "しつれいします",
        kanji: "失礼します"
      },
      {
        lesson: 16,
        meaning: "(do something) oneself",
        kana: "じぶんで",
        kanji: "自分で"
      },
      {
        lesson: 16,
        meaning: "in class, during the class",
        kana: "じゅぎょうちゅうに",
        kanji: "授業中に"
      },
      {
        lesson: 16,
        meaning: "other",
        kana: "ほかの",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "guest, visitor, client, customer",
        kana: "おきゃくさん",
        kanji: "お客さん"
      },
      {
        lesson: 17,
        meaning: "man",
        kana: "おとこ",
        kanji: "男"
      },
      {
        lesson: 17,
        meaning: "hot water",
        kana: "おゆ",
        kanji: "お湯"
      },
      {
        lesson: 17,
        meaning: "woman",
        kana: "おんな",
        kanji: "女"
      },
      {
        lesson: 17,
        meaning: "key",
        kana: "かぎ",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "paper",
        kana: "かみ",
        kanji: "紙"
      },
      {
        lesson: 17,
        meaning: "salary",
        kana: "きゅうりょう",
        kanji: "給料"
      },
      {
        lesson: 17,
        meaning: "contact lenses",
        kana: "コンタクト",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "the lowest, the worst",
        kana: "さいてい",
        kanji: "最低"
      },
      {
        lesson: 17,
        meaning: "salaryman, company employee",
        kana: "サラリーマン",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "overtime work",
        kana: "ざんぎょう",
        kanji: "残業"
      },
      {
        lesson: 17,
        meaning: "heater",
        kana: "ストーブ",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "lottery",
        kana: "たからくじ",
        kanji: "宝くじ"
      },
      {
        lesson: 17,
        meaning: "difference",
        kana: "ちがい",
        kanji: "違い"
      },
      {
        lesson: 17,
        meaning: "news",
        kana: "ニュース",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "beard",
        kana: "ひげ",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "secret",
        kana: "ひみつ",
        kanji: "秘密"
      },
      {
        lesson: 17,
        meaning: "dormitory",
        kana: "りょう",
        kanji: "寮"
      },
      {
        lesson: 17,
        meaning: "travel agency",
        kana: "りょこうがいしゃ",
        kanji: "旅行会社"
      },
      {
        lesson: 17,
        meaning: "envious",
        kana: "うらやましい",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "a little, a few",
        kana: "すくない",
        kanji: "少ない"
      },
      {
        lesson: 17,
        meaning: "strong",
        kana: "つよい",
        kanji: "強い"
      },
      {
        lesson: 17,
        meaning: "to choose, to select",
        kana: "えらぶ",
        kanji: "選ぶ"
      },
      {
        lesson: 17,
        meaning: "to comb one's hair",
        kana: "かみをとかす",
        kanji: "髪をとかす"
      },
      {
        lesson: 17,
        meaning: "to boil water",
        kana: "おゆをわかす",
        kanji: "お湯を沸かす"
      },
      {
        lesson: 17,
        meaning: "to get crowded",
        kana: "こむ",
        kanji: "込む"
      },
      {
        lesson: 17,
        meaning: "to win a lottery",
        kana: "たからくじにあたる",
        kanji: "宝くじに当たる"
      },
      {
        lesson: 17,
        meaning: "to take off (clothes)",
        kana: "ぬぐ",
        kanji: "脱ぐ"
      },
      {
        lesson: 17,
        meaning: "to shave one's beard",
        kana: "ひげをそる",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "to make tea, coffee, etc.",
        kana: "いれる",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "to lock",
        kana: "かぎをかける",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "to be sufficient, to be enough",
        kana: "たりる",
        kanji: "足りる"
      },
      {
        lesson: 17,
        meaning: "to get used to...",
        kana: "なれる",
        kanji: "慣れる"
      },
      {
        lesson: 17,
        meaning: "to put makeup on",
        kana: "けしょうする",
        kanji: "化粧する"
      },
      {
        lesson: 17,
        meaning: "to get a full-time job (at...)",
        kana: "しゅうしょくする",
        kanji: "就職する"
      },
      {
        lesson: 17,
        meaning: "to wear small items (necktie, watch, etc.)",
        kana: "する",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "to get a divorce",
        kana: "りこんする",
        kanji: "離婚する"
      },
      {
        lesson: 17,
        meaning: "Congratulations!",
        kana: "おめでとうございます",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "oneself",
        kana: "じぶん",
        kanji: "自分"
      },
      {
        lesson: 17,
        meaning: "very",
        kana: "ずいぶん",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "I see. (casual)",
        kana: "そうか",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "moreover,...",
        kana: "それに",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "for example",
        kana: "たとえば",
        kanji: "例えば"
      },
      {
        lesson: 17,
        meaning: "compared with...",
        kana: "〜にくらべて",
        kanji: "〜に比べて"
      },
      {
        lesson: 17,
        meaning: "according to...",
        kana: "〜によると",
        kanji: null
      },
      {
        lesson: 17,
        meaning: "before...",
        kana: "まえ",
        kanji: "前"
      },
      {
        lesson: 17,
        meaning: "after all",
        kana: "やっぱり",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "the rest",
        kana: "あと",
        kanji: "後"
      },
      {
        lesson: 18,
        meaning: "air conditioner",
        kana: "エアコン",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "curtain",
        kana: "カーテン",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "milk",
        kana: "ぎゅうにゅう",
        kanji: "牛乳"
      },
      {
        lesson: 18,
        meaning: "shampoo",
        kana: "シャンプー",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "switch",
        kana: "スイッチ",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "skirt",
        kana: "スカート",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "soy sauce",
        kana: "しょうゆ",
        kanji: "しょう油"
      },
      {
        lesson: 18,
        meaning: "outside",
        kana: "そと",
        kanji: "外"
      },
      {
        lesson: 18,
        meaning: "towel",
        kana: "タオル",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "diary",
        kana: "にっき",
        kanji: "日記"
      },
      {
        lesson: 18,
        meaning: "popcorn",
        kana: "ポップコーン",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "rent",
        kana: "やちん",
        kanji: "家賃"
      },
      {
        lesson: 18,
        meaning: "evening",
        kana: "ゆうがた",
        kanji: "夕方"
      },
      {
        lesson: 18,
        meaning: "cassette player with a radio",
        kana: "ラジカセ",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "answering machine",
        kana: "るすばんでんわ",
        kanji: "留守番電話"
      },
      {
        lesson: 18,
        meaning: "refrigerator",
        kana: "れいぞうこ",
        kanji: "冷蔵庫"
      },
      {
        lesson: 18,
        meaning: "candle",
        kana: "ろうそく",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "bright",
        kana: "あかるい",
        kanji: "明るい"
      },
      {
        lesson: 18,
        meaning: "to feel sick",
        kana: "きぶんがわるい",
        kanji: "気分が悪い"
      },
      {
        lesson: 18,
        meaning: "embarassing, to feel embarassed",
        kana: "はずかしい",
        kanji: "恥ずかしい"
      },
      {
        lesson: 18,
        meaning: "(something) opens",
        kana: "あく",
        kanji: "開く"
      },
      {
        lesson: 18,
        meaning: "to apologize",
        kana: "あやまる",
        kanji: "謝る"
      },
      {
        lesson: 18,
        meaning: "to press, to push",
        kana: "おす",
        kanji: "押す"
      },
      {
        lesson: 18,
        meaning: "to drop (something)",
        kana: "おとす",
        kanji: "落とす"
      },
      {
        lesson: 18,
        meaning: "water boils",
        kana: "おゆがわく",
        kanji: "お湯が沸く"
      },
      {
        lesson: 18,
        meaning: "to fall down",
        kana: "ころぶ",
        kanji: "転ぶ"
      },
      {
        lesson: 18,
        meaning: "to break (something)",
        kana: "こわす",
        kanji: "壊す"
      },
      {
        lesson: 18,
        meaning: "to bloom",
        kana: "さく",
        kanji: "咲く"
      },
      {
        lesson: 18,
        meaning: "(something) closes",
        kana: "しまる",
        kanji: "閉まる"
      },
      {
        lesson: 18,
        meaning: "to be saved, to be helped",
        kana: "たすかる",
        kanji: "助かる"
      },
      {
        lesson: 18,
        meaning: "to ask (a favor)",
        kana: "たのむ",
        kanji: "頼む"
      },
      {
        lesson: 18,
        meaning: "(something) turns on",
        kana: "つく",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "to make dirty",
        kana: "よごす",
        kanji: "汚す"
      },
      {
        lesson: 18,
        meaning: "(something) drops",
        kana: "おちる",
        kanji: "落ちる"
      },
      {
        lesson: 18,
        meaning: "to think (about), to consider",
        kana: "かんがえる",
        kanji: "考える"
      },
      {
        lesson: 18,
        meaning: "(something) goes off",
        kana: "きえる",
        kanji: "消える"
      },
      {
        lesson: 18,
        meaning: "(something) breaks",
        kana: "こわれる",
        kanji: "壊れる"
      },
      {
        lesson: 18,
        meaning: "to become dirty",
        kana: "よごれる",
        kanji: "汚れる"
      },
      {
        lesson: 18,
        meaning: "to place an order",
        kana: "ちゅうもんする",
        kanji: "注文する"
      },
      {
        lesson: 18,
        meaning: "right away",
        kana: "いますぐ",
        kanji: "今すぐ"
      },
      {
        lesson: 18,
        meaning: "thanks to...",
        kana: "おかげで",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "See you. (lit., I'm leaving ahead of you.)",
        kana: "おさきにしつれいします",
        kanji: "お先に失礼します"
      },
      {
        lesson: 18,
        meaning: "You must be tired after working so hard. (ritualistic expression)",
        kana: "おつかれさまでした",
        kanji: "お疲れ様でした"
      },
      {
        lesson: 18,
        meaning: "really",
        kana: "ほんとうに",
        kanji: "本当に"
      },
      {
        lesson: 18,
        meaning: "first of all",
        kana: "まず",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "by (time/date)",
        kana: "〜までに",
        kanji: null
      },
      {
        lesson: 18,
        meaning: "What should I/we do?",
        kana: "どうしよう",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to invite someone (to an event/a place)",
        kana: "しょうたいする",
        kanji: "招待する"
      },
      {
        lesson: 19,
        meaning: "(your/his) wife (polite)",
        kana: "おくさま",
        kanji: "奥様"
      },
      {
        lesson: 19,
        meaning: "(your/their) child (polite)",
        kana: "おこさん",
        kanji: "お子さん"
      },
      {
        lesson: 19,
        meaning: "expression of gratitude",
        kana: "おれい",
        kanji: "お礼"
      },
      {
        lesson: 19,
        meaning: "honorific language",
        kana: "けいご",
        kanji: "敬語"
      },
      {
        lesson: 19,
        meaning: "this way (polite)",
        kana: "こちら",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "business trip",
        kana: "しゅっちょう",
        kanji: "出張"
      },
      {
        lesson: 19,
        meaning: "a kind, a sort",
        kana: "しゅるい",
        kanji: "種類"
      },
      {
        lesson: 19,
        meaning: "personality",
        kana: "せいかく",
        kanji: "性格"
      },
      {
        lesson: 19,
        meaning: "junior high school student",
        kana: "ちゅうがくせい",
        kanji: "中学生"
      },
      {
        lesson: 19,
        meaning: "where (polite)",
        kana: "どちら",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "lazy person",
        kana: "なまけもの",
        kanji: "怠け者"
      },
      {
        lesson: 19,
        meaning: "worry",
        kana: "なやみ",
        kanji: "悩み"
      },
      {
        lesson: 19,
        meaning: "shy person",
        kana: "はずかしがりや",
        kanji: "恥ずかしがり屋"
      },
      {
        lesson: 19,
        meaning: "chat, talk",
        kana: "はなし",
        kanji: "話"
      },
      {
        lesson: 19,
        meaning: "department manager",
        kana: "ぶちょう",
        kanji: "部長"
      },
      {
        lesson: 19,
        meaning: "culture",
        kana: "ぶんか",
        kanji: "文化"
      },
      {
        lesson: 19,
        meaning: "mistake",
        kana: "まちがい",
        kanji: "間違い"
      },
      {
        lesson: 19,
        meaning: "be on good/close terms, to get along well",
        kana: "なかがいい",
        kanji: "仲がいい"
      },
      {
        lesson: 19,
        meaning: "serious, sober, diligent",
        kana: "まじめ",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "honorific expression for いく, くる, and いる",
        kana: "いらっしゃる",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to walk/drive (someone)",
        kana: "おくる",
        kanji: "送る"
      },
      {
        lesson: 19,
        meaning: "to get angry",
        kana: "おこる",
        kanji: "怒る"
      },
      {
        lesson: 19,
        meaning: "honorific expression for いう",
        kana: "おっしゃる",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "honorific expression for ねる",
        kana: "おやすみになる",
        kanji: "お休みになる"
      },
      {
        lesson: 19,
        meaning: "to be decided",
        kana: "きまる",
        kanji: "決まる"
      },
      {
        lesson: 19,
        meaning: "honorific expression for くれる",
        kana: "くださる",
        kanji: "下さる"
      },
      {
        lesson: 19,
        meaning: "honorific expression for みる",
        kana: "ごらんになる",
        kanji: "ご覧になる"
      },
      {
        lesson: 19,
        meaning: "to get aquainted with",
        kana: "しりあう",
        kanji: "知り合う"
      },
      {
        lesson: 19,
        meaning: "honorific expression for 〜ている",
        kana: "〜ていらっしゃる",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "honorific expression for する",
        kana: "なさる",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to move (to another place to live)",
        kana: "ひっこす",
        kanji: "引っ越す"
      },
      {
        lesson: 19,
        meaning: "honorific expression for たべる and のむ",
        kana: "めしあがる",
        kanji: "召し上がる"
      },
      {
        lesson: 19,
        meaning: "to call (one's name), to invite",
        kana: "よぶ",
        kanji: "呼ぶ"
      },
      {
        lesson: 19,
        meaning: "to stop by",
        kana: "よる",
        kanji: "寄る"
      },
      {
        lesson: 19,
        meaning: "to become late",
        kana: "おくれる",
        kanji: "遅れる"
      },
      {
        lesson: 19,
        meaning: "to sit down",
        kana: "かける",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to become sunny",
        kana: "はれる",
        kanji: "晴れる"
      },
      {
        lesson: 19,
        meaning: "to be popular (in terms of romantic interest)",
        kana: "もてる",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to hold back for the time being, to refrain from",
        kana: "えんりょする",
        kanji: "遠慮する"
      },
      {
        lesson: 19,
        meaning: "to treat/invite (someone) to a meal",
        kana: "ごちそうする",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "to watch out, to give warning",
        kana: "ちゅういする",
        kanji: "注意する"
      },
      {
        lesson: 19,
        meaning: "to have a talk",
        kana: "はなしをする",
        kanji: "話をする"
      },
      {
        lesson: 19,
        meaning: "the day before yesterday",
        kana: "おととい",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "why (=どうして)",
        kana: "なぜ",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "in fact, originally",
        kana: "ほんとうは",
        kanji: "本当は"
      },
      {
        lesson: 19,
        meaning: "every morning",
        kana: "まいあさ",
        kanji: "毎朝"
      },
      {
        lesson: 19,
        meaning: "still",
        kana: "まだ",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "party of... people",
        kana: "〜めいさま",
        kanji: "〜名様"
      },
      {
        lesson: 19,
        meaning: "Welcome.",
        kana: "ようこそ",
        kanji: null
      },
      {
        lesson: 19,
        meaning: "Please give my best regards (to...)",
        kana: "よろしくおつたえください",
        kanji: "よろしくお伝えください"
      },
      {
        lesson: 20,
        meaning: "this way (polite)",
        kana: "あちら",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "space alien",
        kana: "うちゅうじん",
        kanji: "宇宙人"
      },
      {
        lesson: 20,
        meaning: "sound",
        kana: "おと",
        kanji: "音"
      },
      {
        lesson: 20,
        meaning: "our person in charge",
        kana: "かかりのもの",
        kanji: "係の者"
      },
      {
        lesson: 20,
        meaning: "corner",
        kana: "かど",
        kanji: "角"
      },
      {
        lesson: 20,
        meaning: "God",
        kana: "かみさま",
        kanji: "神様"
      },
      {
        lesson: 20,
        meaning: "airport",
        kana: "くうこう",
        kanji: "空港"
      },
      {
        lesson: 20,
        meaning: "letter, character",
        kana: "じ",
        kanji: "字"
      },
      {
        lesson: 20,
        meaning: "branch office",
        kana: "してん",
        kanji: "支店"
      },
      {
        lesson: 20,
        meaning: "hobby, pastime",
        kana: "しゅみ",
        kanji: "趣味"
      },
      {
        lesson: 20,
        meaning: "novel",
        kana: "しょうせつ",
        kanji: "小説"
      },
      {
        lesson: 20,
        meaning: "traffic light",
        kana: "しんごう",
        kanji: "信号"
      },
      {
        lesson: 20,
        meaning: "sneakers",
        kana: "スニーカー",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "fan",
        kana: "せんす",
        kanji: "扇子"
      },
      {
        lesson: 20,
        meaning: "moon",
        kana: "つき",
        kanji: "月"
      },
      {
        lesson: 20,
        meaning: "high heels",
        kana: "ハイヒール",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "last night",
        kana: "ゆうべ",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "heavy, serious (illness)",
        kana: "おもい",
        kanji: "重い"
      },
      {
        lesson: 20,
        meaning: "to walk",
        kana: "あるく",
        kanji: "歩く"
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for する",
        kana: "いたす",
        kanji: "致す"
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for たべる and のむ",
        kana: "いただく",
        kanji: "頂く"
      },
      {
        lesson: 20,
        meaning: "humble expression for もらう",
        kana: "いただく",
        kanji: "頂く"
      },
      {
        lesson: 20,
        meaning: "to humbly visit, to humbly ask",
        kana: "うかがう",
        kanji: "伺う"
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for いる",
        kana: "おる",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for ある",
        kana: "ござる",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for 〜ている",
        kana: "〜ておる",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for です",
        kana: "〜でござる",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for いく and くる",
        kana: "まいる",
        kanji: "参る"
      },
      {
        lesson: 20,
        meaning: "to turn (right/left)",
        kana: "まがる",
        kanji: "曲がる"
      },
      {
        lesson: 20,
        meaning: "extra-modest expression for いう",
        kana: "もうす",
        kanji: "申す"
      },
      {
        lesson: 20,
        meaning: "to return, to come back",
        kana: "もどる",
        kanji: "戻る"
      },
      {
        lesson: 20,
        meaning: "to be audible",
        kana: "きこえる",
        kanji: "聞こえる"
      },
      {
        lesson: 20,
        meaning: "humble expression for あげる",
        kana: "さしあげる",
        kanji: "差し上げる"
      },
      {
        lesson: 20,
        meaning: "to convey (message)",
        kana: "つたえる",
        kanji: "伝える"
      },
      {
        lesson: 20,
        meaning: "to keep (someone) waiting",
        kana: "またせる",
        kanji: "待たせる"
      },
      {
        lesson: 20,
        meaning: "to exchange",
        kana: "こうかんする",
        kanji: "交換する"
      },
      {
        lesson: 20,
        meaning: "to lead a life",
        kana: "せいかつする",
        kanji: "生活する"
      },
      {
        lesson: 20,
        meaning: "to return (merchandise)",
        kana: "へんぴんする",
        kanji: "返品する"
      },
      {
        lesson: 20,
        meaning: "Oh!",
        kana: "おや",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "...th floor",
        kana: "〜かい",
        kanji: "〜階"
      },
      {
        lesson: 20,
        meaning: "Certainly.",
        kana: "かしこまりました",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "I am not sure,...",
        kana: "さあ",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "I'm very sorry",
        kana: "しつれいしました",
        kanji: "失礼しました"
      },
      {
        lesson: 20,
        meaning: "a few seconds",
        kana: "しょうしょう",
        kanji: "少々"
      },
      {
        lesson: 20,
        meaning: "if that is the case,...",
        kana: "それでは",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "if possible",
        kana: "できれば",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "really (very polite)",
        kana: "まことに",
        kanji: "誠に"
      },
      {
        lesson: 20,
        meaning: "again",
        kana: "また",
        kanji: null
      },
      {
        lesson: 20,
        meaning: "You have my apologies.",
        kana: "もうしわけありません",
        kanji: "申し訳ありません"
      },
      {
        lesson: 20,
        meaning: "if it is okay (polite)",
        kana: "よろしかったら",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "baby",
        kana: "あかちゃん",
        kanji: "赤ちゃん"
      },
      {
        lesson: 21,
        meaning: "mosquito",
        kana: "か",
        kanji: "蚊"
      },
      {
        lesson: 21,
        meaning: "business meeting, conference",
        kana: "かいぎ",
        kanji: "会議"
      },
      {
        lesson: 21,
        meaning: "gasoline",
        kana: "ガソリン",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "environment",
        kana: "かんきょう",
        kanji: "環境"
      },
      {
        lesson: 21,
        meaning: "police, police station",
        kana: "けいさつ",
        kanji: "警察"
      },
      {
        lesson: 21,
        meaning: "factory",
        kana: "こうじょう",
        kanji: "工場"
      },
      {
        lesson: 21,
        meaning: "things, matters",
        kana: "こと",
        kanji: "事"
      },
      {
        lesson: 21,
        meaning: "last train",
        kana: "しゅうでん",
        kanji: "終電"
      },
      {
        lesson: 21,
        meaning: "speech",
        kana: "スピーチ",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "government",
        kana: "せいふ",
        kanji: "政府"
      },
      {
        lesson: 21,
        meaning: "sexual offender, lascivious man",
        kana: "ちかん",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "burgular",
        kana: "どろぼう",
        kanji: "泥棒"
      },
      {
        lesson: 21,
        meaning: "abbreviation of アルバイト",
        kana: "バイト",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "criminal",
        kana: "はんにん",
        kanji: "犯人"
      },
      {
        lesson: 21,
        meaning: "poster",
        kana: "ポスター",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "old days, past",
        kana: "むかし",
        kanji: "昔"
      },
      {
        lesson: 21,
        meaning: "complaint",
        kana: "もんく",
        kanji: "文句"
      },
      {
        lesson: 21,
        meaning: "to complain",
        kana: "もんくをいう",
        kanji: "文句を言う"
      },
      {
        lesson: 21,
        meaning: "absence, not at home",
        kana: "るす",
        kanji: "留守"
      },
      {
        lesson: 21,
        meaning: "far (away)",
        kana: "とおい",
        kanji: "遠い"
      },
      {
        lesson: 21,
        meaning: "awful",
        kana: "ひどい",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "safe",
        kana: "あんぜん",
        kanji: "安全"
      },
      {
        lesson: 21,
        meaning: "precious, valuable",
        kana: "たいせつ",
        kanji: "大切"
      },
      {
        lesson: 21,
        meaning: "messy, disorganized",
        kana: "めちゃくちゃ",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to put, to lay, to place",
        kana: "おく",
        kanji: "置く"
      },
      {
        lesson: 21,
        meaning: "to notice",
        kana: "きがつく",
        kanji: "気が付く"
      },
      {
        lesson: 21,
        meaning: "to kick",
        kana: "ける",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to sting, to bite (bug), to stab",
        kana: "さす",
        kanji: "刺す"
      },
      {
        lesson: 21,
        meaning: "to touch",
        kana: "さわる",
        kanji: "触る"
      },
      {
        lesson: 21,
        meaning: "to be arrested, to be caught",
        kana: "つかまる",
        kanji: "捕まる"
      },
      {
        lesson: 21,
        meaning: "to wrap, to cover",
        kana: "つつむ",
        kanji: "包む"
      },
      {
        lesson: 21,
        meaning: "to strike, to hit, to punch",
        kana: "なぐる",
        kanji: "殴る"
      },
      {
        lesson: 21,
        meaning: "to steal, to rob",
        kana: "ぬすむ",
        kanji: "盗む"
      },
      {
        lesson: 21,
        meaning: "to post",
        kana: "はる",
        kanji: "貼る"
      },
      {
        lesson: 21,
        meaning: "to step on",
        kana: "ふむ",
        kanji: "踏む"
      },
      {
        lesson: 21,
        meaning: "to turn down (somebody), to reject, to jilt",
        kana: "ふる",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to bake",
        kana: "やく",
        kanji: "焼く"
      },
      {
        lesson: 21,
        meaning: "to give (to pets, plants, younger siblings, etc.)",
        kana: "やる",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to bully",
        kana: "いじめる",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to change clothes",
        kana: "きがえる",
        kanji: "着替える"
      },
      {
        lesson: 21,
        meaning: "to save money",
        kana: "ためる",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to continue",
        kana: "つづける",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to praise, to say nice things",
        kana: "ほめる",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to make a mistake",
        kana: "まちがえる",
        kanji: "間違える"
      },
      {
        lesson: 21,
        meaning: "to find",
        kana: "みつける",
        kanji: "見つける"
      },
      {
        lesson: 21,
        meaning: "to prepare",
        kana: "じゅんびする",
        kanji: "準備する"
      },
      {
        lesson: 21,
        meaning: "to insult, to make a fool of...",
        kana: "ばかにする",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to be surprised",
        kana: "びっくりする",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "to take a nap",
        kana: "ひるねをする",
        kanji: "昼寝をする"
      },
      {
        lesson: 21,
        meaning: "to contact",
        kana: "れんらくする",
        kanji: "連絡する"
      },
      {
        lesson: 21,
        meaning: "while...",
        kana: "〜あいだに",
        kanji: "〜間に"
      },
      {
        lesson: 21,
        meaning: "time of..., when...",
        kana: "ころ",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "a little",
        kana: "すこし",
        kanji: "少し"
      },
      {
        lesson: 21,
        meaning: "anyhow, anyway",
        kana: "とにかく",
        kanji: null
      },
      {
        lesson: 21,
        meaning: "colleague",
        kana: "どうりょう",
        kanji: "同僚"
      },
      {
        lesson: 22,
        meaning: "partner",
        kana: "あいて",
        kanji: "相手"
      },
      {
        lesson: 22,
        meaning: "reception desk",
        kana: "うけつけ",
        kanji: "受付"
      },
      {
        lesson: 22,
        meaning: "English conversation",
        kana: "えいかいわ",
        kanji: "英会話"
      },
      {
        lesson: 22,
        meaning: "(someone's) daughter (polite)",
        kana: "おじょうさん",
        kanji: "お嬢さん"
      },
      {
        lesson: 22,
        meaning: "household matters",
        kana: "かじ",
        kanji: "家事"
      },
      {
        lesson: 22,
        meaning: "wind",
        kana: "かぜ",
        kanji: "風"
      },
      {
        lesson: 22,
        meaning: "tree",
        kana: "き",
        kanji: "木"
      },
      {
        lesson: 22,
        meaning: "final examination",
        kana: "きまつしけん",
        kanji: "期末試験"
      },
      {
        lesson: 22,
        meaning: "junior members of a group",
        kana: "こうはい",
        kanji: "後輩"
      },
      {
        lesson: 22,
        meaning: "monkey",
        kana: "さる",
        kanji: "猿"
      },
      {
        lesson: 22,
        meaning: "freedom",
        kana: "じゆう",
        kanji: "自由"
      },
      {
        lesson: 22,
        meaning: "cram school",
        kana: "じゅく",
        kanji: "塾"
      },
      {
        lesson: 22,
        meaning: "document",
        kana: "しょるい",
        kanji: "書類"
      },
      {
        lesson: 22,
        meaning: "senior members of a group",
        kana: "せんぱい",
        kanji: "先輩"
      },
      {
        lesson: 22,
        meaning: "living alone",
        kana: "ひとりぐらし",
        kanji: "一人暮らし"
      },
      {
        lesson: 22,
        meaning: "subordinate",
        kana: "ぶか",
        kanji: "部下"
      },
      {
        lesson: 22,
        meaning: "review of lessons",
        kana: "ふくしゅう",
        kanji: "復習"
      },
      {
        lesson: 22,
        meaning: "project",
        kana: "プロジェクト",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "ball",
        kana: "ボール",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "waste (money)",
        kana: "むだづかい",
        kanji: "無駄遣い"
      },
      {
        lesson: 22,
        meaning: "license",
        kana: "めんきょ",
        kanji: "免許"
      },
      {
        lesson: 22,
        meaning: "preparation of lessons",
        kana: "よしゅう",
        kanji: "予習"
      },
      {
        lesson: 22,
        meaning: "noisy, annoying",
        kana: "うるさい",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "worried about",
        kana: "しんぱい",
        kanji: "心配"
      },
      {
        lesson: 22,
        meaning: "poor",
        kana: "びんぼう",
        kanji: "貧乏"
      },
      {
        lesson: 22,
        meaning: "fluent",
        kana: "ペラペラ",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "strange, unusual",
        kana: "へん",
        kanji: "変"
      },
      {
        lesson: 22,
        meaning: "easy, comfortable",
        kana: "らく",
        kanji: "楽"
      },
      {
        lesson: 22,
        meaning: "to win",
        kana: "かつ",
        kanji: "勝つ"
      },
      {
        lesson: 22,
        meaning: "to make a photocopy",
        kana: "コピーをとる",
        kanji: "コピーを取る"
      },
      {
        lesson: 22,
        meaning: "to carry from one place to another, transport",
        kana: "はこぶ",
        kanji: "運ぶ"
      },
      {
        lesson: 22,
        meaning: "to run",
        kana: "はしる",
        kanji: "走る"
      },
      {
        lesson: 22,
        meaning: "to pick up (something)",
        kana: "ひろう",
        kanji: "拾う"
      },
      {
        lesson: 22,
        meaning: "to blow",
        kana: "ふく",
        kanji: "吹く"
      },
      {
        lesson: 22,
        meaning: "to leave (someone/something) alone, to neglect",
        kana: "ほうっておく",
        kanji: "放っておく"
      },
      {
        lesson: 22,
        meaning: "to be in time for",
        kana: "まにあう",
        kanji: "間に合う"
      },
      {
        lesson: 22,
        meaning: "to go to pick up (someone)",
        kana: "むかえにいく",
        kanji: "迎えに行く"
      },
      {
        lesson: 22,
        meaning: "to make a plan",
        kana: "けいかくをたてる",
        kanji: "計画を立てる"
      },
      {
        lesson: 22,
        meaning: "to raise, to bring up",
        kana: "そだてる",
        kanji: "育てる"
      },
      {
        lesson: 22,
        meaning: "to help, to rescue",
        kana: "たすける",
        kanji: "助ける"
      },
      {
        lesson: 22,
        meaning: "to lose (a match)",
        kana: "まける",
        kanji: "負ける"
      },
      {
        lesson: 22,
        meaning: "to pray for help",
        kana: "おねがいする",
        kanji: "お願いする"
      },
      {
        lesson: 22,
        meaning: "to agree",
        kana: "さんせいする",
        kanji: "賛成する"
      },
      {
        lesson: 22,
        meaning: "to fail, to be unsuccessful",
        kana: "しっぱいする",
        kanji: "失敗する"
      },
      {
        lesson: 22,
        meaning: "to stay up all night",
        kana: "てつやする",
        kanji: "徹夜する"
      },
      {
        lesson: 22,
        meaning: "to oppose, to object to",
        kana: "はんたいする",
        kanji: "反対する"
      },
      {
        lesson: 22,
        meaning: "to translate",
        kana: "ほんやくする",
        kanji: "翻訳する"
      },
      {
        lesson: 22,
        meaning: "in this way",
        kana: "こんなふう",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "for a long time, all the time",
        kana: "ずっと",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "definitely",
        kana: "ぜったいに",
        kanji: "絶対に"
      },
      {
        lesson: 22,
        meaning: "I don't think so.",
        kana: "そんなことはない",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "...for example",
        kana: "〜とか",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "many times",
        kana: "なんども",
        kanji: "何度も"
      },
      {
        lesson: 22,
        meaning: "in a leisurely way",
        kana: "のんびり",
        kanji: null
      },
      {
        lesson: 22,
        meaning: "a little more",
        kana: "もうすこし",
        kanji: "もう少し"
      },
      {
        lesson: 23,
        meaning: "memory",
        kana: "おもいで",
        kanji: "思い出"
      },
      {
        lesson: 23,
        meaning: "trip to a foreign country",
        kana: "かいがいりょこう",
        kanji: "海外旅行"
      },
      {
        lesson: 23,
        meaning: "body",
        kana: "からだ",
        kanji: "体"
      },
      {
        lesson: 23,
        meaning: "socks",
        kana: "くつした",
        kanji: "靴下"
      },
      {
        lesson: 23,
        meaning: "international call",
        kana: "こくさいでんわ",
        kanji: "国際電話"
      },
      {
        lesson: 23,
        meaning: "tuition",
        kana: "じゅぎょうりょう",
        kanji: "授業料"
      },
      {
        lesson: 23,
        meaning: "elementary school",
        kana: "しょうがっこう",
        kanji: "小学校"
      },
      {
        lesson: 23,
        meaning: "election",
        kana: "せんきょ",
        kanji: "選挙"
      },
      {
        lesson: 23,
        meaning: "tire",
        kana: "タイヤ",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "free of charge",
        kana: "ただ",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "place",
        kana: "ばしょ",
        kanji: "場所"
      },
      {
        lesson: 23,
        meaning: "villa, vacation home",
        kana: "べっそう",
        kanji: "別荘"
      },
      {
        lesson: 23,
        meaning: "bonus",
        kana: "ボーナス",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "Bon dance (Japanese traditional dance)",
        kana: "ぼんおどり",
        kanji: "盆踊り"
      },
      {
        lesson: 23,
        meaning: "interview",
        kana: "めんせつ",
        kanji: "面接"
      },
      {
        lesson: 23,
        meaning: "dinner",
        kana: "ゆうしょく",
        kanji: "夕食"
      },
      {
        lesson: 23,
        meaning: "ideal",
        kana: "りそう",
        kanji: "理想"
      },
      {
        lesson: 23,
        meaning: "looking after a house during one's absence",
        kana: "るすばん",
        kanji: "留守番"
      },
      {
        lesson: 23,
        meaning: "(food is) terrible",
        kana: "まずい",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "the rain stops",
        kana: "あめがやむ",
        kanji: "雨がやむ"
      },
      {
        lesson: 23,
        meaning: "(someone) is gone, to disappear",
        kana: "いなくなる",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "to be in someone's care",
        kana: "おせわになる",
        kanji: "お世話になる"
      },
      {
        lesson: 23,
        meaning: "to have a stomachache",
        kana: "おなかをこわす",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "to be different, wrong",
        kana: "ちがう",
        kanji: "違う"
      },
      {
        lesson: 23,
        meaning: "to be lost, to disappear",
        kana: "なくなる",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "to talk behind someone's back",
        kana: "わるぐちをいう",
        kanji: "悪口を言う"
      },
      {
        lesson: 23,
        meaning: "to take (an examination, interview, etc.)",
        kana: "うける",
        kanji: "受ける"
      },
      {
        lesson: 23,
        meaning: "to change",
        kana: "かえる",
        kanji: "換える"
      },
      {
        lesson: 23,
        meaning: "(something/someone) separates, parts from",
        kana: "はなれる",
        kanji: "離れる"
      },
      {
        lesson: 23,
        meaning: "to look...(facial expression)",
        kana: "〜かおをする",
        kanji: "〜顔をする"
      },
      {
        lesson: 23,
        meaning: "to be disappointed",
        kana: "がっかりする",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "to be tolerant/patient",
        kana: "がまんする",
        kanji: "我慢する"
      },
      {
        lesson: 23,
        meaning: "to take care of...",
        kana: "せわをする",
        kanji: "世話をする"
      },
      {
        lesson: 23,
        meaning: "to sympathize",
        kana: "どうじょうする",
        kanji: "同情する"
      },
      {
        lesson: 23,
        meaning: "(tire) goes flat",
        kana: "パンクする",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "(something/someone) comes back",
        kana: "もどってくる",
        kanji: "戻ってくる"
      },
      {
        lesson: 23,
        meaning: "to win a championship",
        kana: "ゆうしょうする",
        kanji: "優勝する"
      },
      {
        lesson: 23,
        meaning: "no",
        kana: "いや",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "Take care of yourself.",
        kana: "げんきでね",
        kanji: "元気でね"
      },
      {
        lesson: 23,
        meaning: "You are right.",
        kana: "そうそう",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "it is about time to...",
        kana: "そろそろ",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "such..., that kind of...",
        kana: "そんな〜",
        kanji: null
      },
      {
        lesson: 23,
        meaning: "extremely",
        kana: "ものすごく",
        kanji: null
      }
    ])
  })
]
