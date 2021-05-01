import { AdjectiveData, VerbData } from "./DataTypes";
import { AdjectiveType } from "../types/sentence/AdjectiveType";
import { VerbType } from "../types/sentence/VerbType";

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
    ];
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
            meanings: ["to turn off, to erase"],
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
    ];
}