import { rest } from "msw"
import { api } from "../util"

export const handlers = [
    rest.get(`${api}/learn/flash-cards/kanji`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    kanji: {
                        character: "一",
                        grade: 1,
                        strokes: 1,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
                        meanings: ["one"],
                        readings: [
                            {
                                value: "いち",
                                type: "on"
                            },
                            {
                                value: "いつ",
                                type: "on"
                            },
                            {
                                value: "ひとつ",
                                type: "kun"
                            },
                            {
                                value: "ひと",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "一番",
                                kana: ["いちばん"],
                                english: ["bout", "first", "number one", "best", "game", "round"]
                            },
                            {
                                value: "一部",
                                kana: ["いちぶ"],
                                english: ["one part", "one portion", "some", "one section"]
                            },
                            {
                                value: "一つ",
                                kana: ["ひとつ"],
                                english: ["one"]
                            },
                            {
                                value: "一般",
                                kana: ["いっぱん"],
                                english: ["liberal", "universal", "general", "ordinary"]
                            },
                            {
                                value: "一月",
                                kana: ["いちがつ"],
                                english: ["January"]
                            }
                        ],
                        tags: ["number"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 2,
                    kanji: {
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
                                value: "右手",
                                kana: ["みぎて"],
                                english: ["right hand"]
                            },
                            {
                                value: "右翼",
                                kana: ["うよく"],
                                english: ["right wing (political)"]
                            },
                            {
                                value: "左右",
                                kana: ["さゆう"],
                                english: ["control", "influence", "left and right"]
                            }
                        ],
                        tags: ["direction"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 3,
                    kanji: {
                        character: "雨",
                        grade: 1,
                        strokes: 8,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E9%9B%A8#Kanji",
                        meanings: ["rain"],
                        readings: [
                            {
                                value: "あま",
                                type: "kun"
                            },
                            {
                                value: "あめ",
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
                                kana: ["あまみず", "うすい"],
                                english: ["rain water"]
                            },
                            {
                                value: "梅雨",
                                kana: ["ばいう", "つゆ"],
                                english: ["rainy season"]
                            },
                            {
                                value: "大雨",
                                kana: ["おおあめ"],
                                english: ["heavy rain"]
                            },
                            {
                                value: "雨量",
                                kana: ["うりょう"],
                                english: ["rainfall"]
                            }
                        ],
                        tags: ["weather"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 4,
                    kanji: {
                        character: "円",
                        grade: 1,
                        strokes: 4,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E5%86%86#Kanji",
                        meanings: ["circle", "yen", "round"],
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
                                value: "円",
                                kana: ["まる", "えん"],
                                english: ["circle", "money", "Yen"]
                            },
                            {
                                value: "一円",
                                kana: ["いちえん"],
                                english: ["one yen", "throughout", "whole district"]
                            },
                            {
                                value: "円高",
                                kana: ["えんだか"],
                                english: ["valued yen"]
                            },
                            {
                                value: "円相場",
                                kana: ["えんそうば"],
                                english: ["yen exchange rate"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 5,
                    kanji: {
                        character: "王",
                        grade: 1,
                        strokes: 4,
                        jlpt: 2,
                        source: "https://en.wiktionary.org/wiki/%E7%8E%8B#Kanji",
                        meanings: ["rule", "magnate", "king"],
                        readings: [
                            {
                                value: "おおきみ",
                                type: "kun"
                            },
                            {
                                value: "きみ",
                                type: "kun"
                            },
                            {
                                value: "おう",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "王",
                                kana: ["おう"],
                                english: ["monarch", "king", "ruler", "sovereign"]
                            },
                            {
                                value: "女王",
                                kana: ["じょおう"],
                                english: ["queen"]
                            },
                            {
                                value: "王座",
                                kana: ["おうざ"],
                                english: ["throne"]
                            },
                            {
                                value: "王国",
                                kana: ["おうこく"],
                                english: ["kingdom", "monarchy"]
                            },
                            {
                                value: "国王",
                                kana: ["こくおう"],
                                english: ["king"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 6,
                    kanji: {
                        character: "音",
                        grade: 1,
                        strokes: 9,
                        jlpt: 3,
                        source: "https://en.wiktionary.org/wiki/%E9%9F%B3#Kanji",
                        meanings: ["sound", "noise"],
                        readings: [
                            {
                                value: "ね",
                                type: "kun"
                            },
                            {
                                value: "いん",
                                type: "on"
                            },
                            {
                                value: "おと",
                                type: "kun"
                            },
                            {
                                value: "おん",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "音",
                                kana: ["おと", "おん", "ね"],
                                english: ["sound", "noise"]
                            },
                            {
                                value: "音楽",
                                kana: ["おんがく"],
                                english: ["music", "musical movement"]
                            },
                            {
                                value: "騒音",
                                kana: ["そうおん"],
                                english: ["noise"]
                            },
                            {
                                value: "本音",
                                kana: ["ほんね"],
                                english: ["real intention", "motive"]
                            },
                            {
                                value: "音声",
                                kana: ["おんせい, おんじょう"],
                                english: ["voice"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 7,
                    kanji: {
                        character: "下",
                        grade: 1,
                        strokes: 3,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E4%B8%8B#Kanji",
                        meanings: ["descend", "give", "inferior", "down", "below", "low"],
                        readings: [
                            {
                                value: "げ",
                                type: "on"
                            },
                            {
                                value: "した",
                                type: "kun"
                            },
                            {
                                value: "か",
                                type: "on"
                            },
                            {
                                value: "しも",
                                type: "kun"
                            },
                            {
                                value: "もと",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "下げる",
                                kana: ["さげる"],
                                english: ["to wear", "to hang", "to move back", "to lower"]
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
                            },
                            {
                                value: "引き下げ",
                                kana: ["ひきさげ"],
                                english: ["cut", "reduction"]
                            }
                        ],
                        tags: ["direction"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 8,
                    kanji: {
                        character: "火",
                        grade: 1,
                        strokes: 4,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E7%81%AB#Kanji",
                        meanings: ["fire"],
                        readings: [
                            {
                                value: "ひ",
                                type: "kun"
                            },
                            {
                                value: "か",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "噴火",
                                kana: ["ふんか"],
                                english: ["eruption"]
                            },
                            {
                                value: "火災",
                                kana: ["かさい"],
                                english: ["conflagration", "fire"]
                            },
                            {
                                value: "火山",
                                kana: ["かざん"],
                                english: ["volcano"]
                            },
                            {
                                value: "火砕流",
                                kana: ["かさいりゅう"],
                                english: ["pyroclastic flow"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 9,
                    kanji: {
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
                                value: "花火",
                                kana: ["はなび"],
                                english: ["fireworks"]
                            },
                            {
                                value: "花",
                                kana: ["はな"],
                                english: ["bloom", "blossom", "flower", "petal"]
                            },
                            {
                                value: "花びら",
                                kana: ["かべん", "はなびら"],
                                english: ["flower petal"]
                            },
                            {
                                value: "花園",
                                kana: ["はなぞの", "かえん"],
                                english: ["flower garden"]
                            },
                            {
                                value: "花見",
                                kana: ["はなみ"],
                                english: ["cherry blossom viewing", "flowing viewing"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 10,
                    kanji: {
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
                                value: "貝殻",
                                kana: ["かいがら"],
                                english: ["shell"]
                            },
                            {
                                value: "巻き貝",
                                kana: ["まきがい"],
                                english: ["snail", "spiral shell"]
                            },
                            {
                                value: "貝塚",
                                kana: ["かいづか", "かいずか"],
                                english: ["shell mound", "kitchen midden", "shell heap"]
                            },
                            {
                                value: "貝",
                                kana: ["かい"],
                                english: ["shell", "shellfish"]
                            },
                            {
                                value: "貝",
                                kana: ["バイ", "ばい"],
                                english: ["Japanese babylon (species of shelled mollusk)"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 11,
                    kanji: {
                        character: "学",
                        grade: 1,
                        strokes: 8,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E5%AD%A6#Kanji",
                        meanings: ["learning", "science", "study"],
                        readings: [
                            {
                                value: "がく",
                                type: "on"
                            },
                            {
                                value: "まなぶ",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "学校",
                                kana: ["がっこう"],
                                english: ["school"]
                            },
                            {
                                value: "大学",
                                kana: ["だいがく"],
                                english: ["secondary school"]
                            },
                            {
                                value: "科学",
                                kana: ["かがく"],
                                english: ["science"]
                            },
                            {
                                value: "医学",
                                kana: ["いがく"],
                                english: ["medicine", "medical science"]
                            },
                            {
                                value: "学生",
                                kana: ["がくせい"],
                                english: ["student"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 12,
                    kanji: {
                        character: "気",
                        grade: 1,
                        strokes: 6,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E6%B0%97#Kanji",
                        meanings: ["mind", "mood", "atmosphere", "air", "spirit"],
                        readings: [
                            {
                                value: "け",
                                type: "on"
                            },
                            {
                                value: "いき",
                                type: "kun"
                            },
                            {
                                value: "き",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "気",
                                kana: ["き"],
                                english: ["mind", "disposition", "nature", "spirit", "heart"]
                            },
                            {
                                value: "景気",
                                kana: ["けいき"],
                                english: ["state", "business", "condition"]
                            },
                            {
                                value: "気持ち",
                                kana: ["きもち"],
                                english: ["mood", "sensation", "feeling"]
                            },
                            {
                                value: "電気",
                                kana: ["でんき"],
                                english: ["light", "electricity"]
                            },
                            {
                                value: "人気",
                                kana: ["にんき"],
                                english: ["popular", "business conditions", "popular feeling"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 13,
                    kanji: {
                        character: "休",
                        grade: 1,
                        strokes: 6,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E4%BC%91#Kanji",
                        meanings: ["rest"],
                        readings: [
                            {
                                value: "きゅう",
                                type: "on"
                            },
                            {
                                value: "やすむ",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "休み",
                                kana: ["やすみ"],
                                english: ["vacation", "rest", "recess", "holiday", "respite"]
                            },
                            {
                                value: "休暇",
                                kana: ["きゅうか"],
                                english: ["furlough", "holiday", "day off"]
                            },
                            {
                                value: "休業",
                                kana: ["きゅうぎょう"],
                                english: ["closed (e.g. store)", "business suspended"]
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
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 14,
                    kanji: {
                        character: "玉",
                        grade: 1,
                        strokes: 5,
                        jlpt: 2,
                        source: "https://en.wiktionary.org/wiki/%E7%8E%89#Kanji",
                        meanings: ["ball", "jewel"],
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
                                value: "お年玉",
                                kana: ["おとしだま"],
                                english: ["New Year’s gift"]
                            },
                            {
                                value: "目玉",
                                kana: ["めだま"],
                                english: ["centerpiece", "special feature", "eyeball"]
                            },
                            {
                                value: "玉虫色",
                                kana: ["たまむしいろ"],
                                english: ["iridescent", "ambivalent", "equivocal"]
                            },
                            {
                                value: "玉",
                                kana: ["たま"],
                                english: ["coin", "sphere", "testicles", "ball", "jewel", "pearl"]
                            },
                            {
                                value: "替え玉",
                                kana: ["かえだま"],
                                english: ["substitute", "double"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 15,
                    kanji: {
                        character: "金",
                        grade: 1,
                        strokes: 8,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E9%87%91#Kanji",
                        meanings: ["gold", "money"],
                        readings: [
                            {
                                value: "こん",
                                type: "on"
                            },
                            {
                                value: "かね",
                                type: "kun"
                            },
                            {
                                value: "かな",
                                type: "kun"
                            },
                            {
                                value: "きん",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "献金",
                                kana: ["けんきん"],
                                english: ["offering", "contribution", "donation"]
                            },
                            {
                                value: "お金",
                                kana: ["おかね"],
                                english: ["money"]
                            },
                            {
                                value: "金利",
                                kana: ["きんり"],
                                english: ["interest rates"]
                            },
                            {
                                value: "資金",
                                kana: ["しきん"],
                                english: ["capital", "funds"]
                            },
                            {
                                value: "金融",
                                kana: ["きんゆう"],
                                english: ["credit transacting", "financing"]
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 16,
                    kanji: {
                        character: "九",
                        grade: 1,
                        strokes: 2,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E4%B9%9D#Kanji",
                        meanings: ["nine"],
                        readings: [
                            {
                                value: "きゅう",
                                type: "on"
                            },
                            {
                                value: "く",
                                type: "on"
                            },
                            {
                                value: "ここの",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "九十",
                                kana: ["くじゅう", "きゅうじゅう"],
                                english: ["ninety"]
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
                                value: "九月",
                                kana: ["くがつ"],
                                english: ["September"]
                            },
                            {
                                value: "九",
                                kana: ["ここの", "この", "ここ", "きゅう", "く"],
                                english: ["nine"]
                            }
                        ],
                        tags: ["number"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 17,
                    kanji: {
                        character: "空",
                        grade: 1,
                        strokes: 8,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E7%A9%BA#Kanji",
                        meanings: ["sky", "empty", "void"],
                        readings: [
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
                            },
                            {
                                value: "そら",
                                type: "kun"
                            }
                        ],
                        examples: [
                            {
                                value: "航空機",
                                kana: ["こうくうき"],
                                english: ["aircraft", "aeroplane", "airplane"]
                            },
                            {
                                value: "空気",
                                kana: ["くうき"],
                                english: ["atmosphere", "air"]
                            },
                            {
                                value: "空",
                                kana: ["から"],
                                english: ["vacuum", "emptiness", "blank"]
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
                            }
                        ],
                        tags: []
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 18,
                    kanji: {
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
                                value: "つき",
                                type: "kun"
                            },
                            {
                                value: "がつ",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "今月",
                                kana: ["こんげつ"],
                                english: ["this month"]
                            },
                            {
                                value: "五月",
                                kana: ["ごがつ"],
                                english: ["May"]
                            },
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
                            }
                        ],
                        tags: ["time"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 19,
                    kanji: {
                        character: "犬",
                        grade: 1,
                        strokes: 4,
                        jlpt: 3,
                        source: "https://en.wiktionary.org/wiki/%E7%8A%AC#Kanji",
                        meanings: ["dog"],
                        readings: [
                            {
                                value: "けん",
                                type: "on"
                            },
                            {
                                value: "いぬ",
                                type: "kun"
                            }
                        ],
                        examples: [
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
                                value: "犬",
                                kana: ["いぬ"],
                                english: ["dog"]
                            },
                            {
                                value: "野犬",
                                kana: ["やけん"],
                                english: ["stray dog"]
                            },
                            {
                                value: "飼い犬",
                                kana: ["かいいぬ"],
                                english: ["pet dog"]
                            }
                        ],
                        tags: ["animal"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                },
                {
                    id: 20,
                    kanji: {
                        character: "見",
                        grade: 1,
                        strokes: 7,
                        jlpt: 4,
                        source: "https://en.wiktionary.org/wiki/%E8%A6%8B#Kanji",
                        meanings: ["opinion", "see"],
                        readings: [
                            {
                                value: "けん",
                                type: "on"
                            },
                            {
                                value: "みる",
                                type: "kun"
                            },
                            {
                                value: "げん",
                                type: "on"
                            }
                        ],
                        examples: [
                            {
                                value: "見方",
                                kana: ["みかた"],
                                english: ["viewpoint"]
                            },
                            {
                                value: "会見",
                                kana: ["かいけん"],
                                english: ["interview", "audience"]
                            },
                            {
                                value: "見通し",
                                kana: ["みとおし"],
                                english: ["unobstructed view", "outlook", "perspective"]
                            },
                            {
                                value: "意見",
                                kana: ["いけん"],
                                english: ["opinion", "view"]
                            },
                            {
                                value: "見直し",
                                kana: ["みなおし"],
                                english: ["revision", "reconsideration", "review"]
                            }
                        ],
                        tags: ["verb"]
                    },
                    dueDate: "2022-10-05",
                    easiness: 2.5,
                    repetition: 0,
                    interval: 0
                }
            ])
        )
    }),
    rest.post(`${api}/learn/flash-cards/kanji/update`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                ack: "abc123"
            })
        )
    })
]
