import { AdjectiveData } from "./DataTypes";
import { AdjectiveType } from "../types/kana/AdjectiveType";

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