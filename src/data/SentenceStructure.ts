import { AdjectiveData } from "./DataTypes";
import { AdjectiveType } from "../types/kana/AdjectiveType";

export function adjectives(): AdjectiveData[] {
    return [
        {
            meanings: ["new"],
            kana: "あたらしい",
            kanjiForm: "新しい",
            type: AdjectiveType.I
        },
        {
            meanings: ["old (thing)"],
            kana: "ふるい",
            kanjiForm: "古い",
            type: AdjectiveType.I
        },
        {
            meanings: ["hot (weather)"],
            kana: "あつい",
            kanjiForm: "暑い",
            type: AdjectiveType.I
        },
        {
            meanings: ["cold (weather)"],
            kana: "さむい",
            kanjiForm: "寒い",
            type: AdjectiveType.I
        },
        {
            meanings: ["hot (thing)"],
            kana: "あつい",
            kanjiForm: "熱い",
            type: AdjectiveType.I
        },
        {
            meanings: ["busy (people/days)"],
            kana: "いそがしい",
            kanjiForm: "忙しい",
            type: AdjectiveType.I
        },
        {
            meanings: ["large"],
            kana: "おおきい",
            kanjiForm: "大きい",
            type: AdjectiveType.I
        },
        {
            meanings: ["small"],
            kana: "ちいさい",
            kanjiForm: "小さい",
            type: AdjectiveType.I
        },
        {
            meanings: ["interesting", "funny"],
            kana: "おもしろい",
            kanjiForm: "面白い",
            type: AdjectiveType.I
        },
        {
            meanings: ["boring"],
            kana: "つまらない",
            type: AdjectiveType.I
        },
        {
            meanings: ["easy", "kind"],
            kana: "やさしい",
            type: AdjectiveType.I
        },
        {
            meanings: ["difficult"],
            kana: "むずかしい",
            kanjiForm: "難しい",
            type: AdjectiveType.I
        },
        {
            meanings: ["good-looking (man)"],
            kana: "かっこいい",
            type: AdjectiveType.I
        },
        {
            meanings: ["frightening"],
            kana: "こわい",
            kanjiForm: "怖い",
            type: AdjectiveType.I
        },
        {
            meanings: ["fun"],
            kana: "たのしい",
            kanjiForm: "楽しい",
            type: AdjectiveType.I
        },
        {
            meanings: ["cheap", "inexpensive"],
            kana: "やすい",
            kanjiForm: "安い",
            type: AdjectiveType.I
        },
        {
            meanings: ["to like"],
            kana: "すきな",
            kanjiForm: "好き",
            type: AdjectiveType.NA
        },
        {
            meanings: ["to dislike", "disgusted with"],
            kana: "きらいな",
            kanjiForm: "嫌い",
            type: AdjectiveType.NA
        },
        {
            meanings: ["very fond of", "to love"],
            kana: "だいすきな",
            kanjiForm: "大好き",
            type: AdjectiveType.NA
        },
        {
            meanings: ["to hate"],
            kana: "だいきらいな",
            kanjiForm: "大嫌い",
            type: AdjectiveType.NA
        },
        {
            meanings: ["beautiful", "clean"],
            kana: "きれいな",
            type: AdjectiveType.NA
        },
        {
            meanings: ["healthy", "energetic"],
            kana: "げんきな",
            kanjiForm: "元気",
            type: AdjectiveType.NA
        },
        {
            meanings: ["quiet"],
            kana: "しずかな",
            kanjiForm: "静か",
            type: AdjectiveType.NA
        },
        {
            meanings: ["lively"],
            kana: "にぎやかな",
            type: AdjectiveType.NA
        },
        {
            meanings: ["free", "not busy"],
            kana: "ひまな",
            kanjiForm: "暇",
            type: AdjectiveType.NA
        },
    ];
}