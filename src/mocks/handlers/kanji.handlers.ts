import {rest} from 'msw'
import {api} from "../util";

// @ts-ignore
const kanji = [
    {
        "name": "一",
        "on": [
            "いち",
            "いつ"
        ],
        "kun": [
            "ひと",
            "ひとつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
        "meanings": [
            "one"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 1,
        "examples": [
            {
                "value": "一つ",
                "kana": [
                    "ひとつ"
                ],
                "english": [
                    "one"
                ]
            },
            {
                "value": "一月",
                "kana": [
                    "いちがつ"
                ],
                "english": [
                    "January"
                ]
            },
            {
                "value": "一般",
                "kana": [
                    "いっぱん"
                ],
                "english": [
                    "general",
                    "liberal",
                    "universal",
                    "ordinary"
                ]
            },
            {
                "value": "一番",
                "kana": [
                    "いちばん"
                ],
                "english": [
                    "best",
                    "first",
                    "number one",
                    "game",
                    "round",
                    "bout"
                ]
            },
            {
                "value": "一部",
                "kana": [
                    "いちぶ"
                ],
                "english": [
                    "one part",
                    "one portion",
                    "one section",
                    "some"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "右",
        "on": [
            "う",
            "ゆう"
        ],
        "kun": [
            "みぎ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%B3#Kanji",
        "meanings": [
            "right"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "右翼",
                "kana": [
                    "うよく"
                ],
                "english": [
                    "right wing (political)"
                ]
            },
            {
                "value": "左右",
                "kana": [
                    "さゆう"
                ],
                "english": [
                    "left and right",
                    "influence",
                    "control"
                ]
            },
            {
                "value": "右手",
                "kana": [
                    "みぎて"
                ],
                "english": [
                    "right hand"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "雨",
        "on": [
            "う"
        ],
        "kun": [
            "あめ",
            "あま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9B%A8#Kanji",
        "meanings": [
            "rain"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "雨",
                "kana": [
                    "あめ"
                ],
                "english": [
                    "rain"
                ]
            },
            {
                "value": "大雨",
                "kana": [
                    "おおあめ"
                ],
                "english": [
                    "heavy rain"
                ]
            },
            {
                "value": "梅雨",
                "kana": [
                    "ばいう",
                    "つゆ"
                ],
                "english": [
                    "rainy season"
                ]
            },
            {
                "value": "雨水",
                "kana": [
                    "あまみず",
                    "うすい"
                ],
                "english": [
                    "rain water"
                ]
            },
            {
                "value": "雨量",
                "kana": [
                    "うりょう"
                ],
                "english": [
                    "rainfall"
                ]
            }
        ],
        "tags": [
            "weather"
        ]
    },
    {
        "name": "円",
        "on": [
            "えん"
        ],
        "kun": [
            "まる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%86%86#Kanji",
        "meanings": [
            "circle",
            "yen",
            "round"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "円",
                "kana": [
                    "えん",
                    "まる"
                ],
                "english": [
                    "Yen",
                    "money",
                    "circle"
                ]
            },
            {
                "value": "円高",
                "kana": [
                    "えんだか"
                ],
                "english": [
                    "valued yen"
                ]
            },
            {
                "value": "円安",
                "kana": [
                    "えんやす"
                ],
                "english": [
                    "cheap yen"
                ]
            },
            {
                "value": "円相場",
                "kana": [
                    "えんそうば"
                ],
                "english": [
                    "yen exchange rate"
                ]
            },
            {
                "value": "一円",
                "kana": [
                    "いちえん"
                ],
                "english": [
                    "whole district",
                    "one yen",
                    "throughout"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "王",
        "on": [
            "おう"
        ],
        "kun": [
            "おおきみ",
            "きみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%8E%8B#Kanji",
        "meanings": [
            "king",
            "rule",
            "magnate"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "王",
                "kana": [
                    "おう"
                ],
                "english": [
                    "king",
                    "ruler",
                    "sovereign",
                    "monarch"
                ]
            },
            {
                "value": "国王",
                "kana": [
                    "こくおう"
                ],
                "english": [
                    "king"
                ]
            },
            {
                "value": "女王",
                "kana": [
                    "じょおう"
                ],
                "english": [
                    "queen"
                ]
            },
            {
                "value": "王国",
                "kana": [
                    "おうこく"
                ],
                "english": [
                    "kingdom",
                    "monarchy"
                ]
            },
            {
                "value": "王座",
                "kana": [
                    "おうざ"
                ],
                "english": [
                    "throne"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "音",
        "on": [
            "おん",
            "いん"
        ],
        "kun": [
            "おと",
            "ね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9F%B3#Kanji",
        "meanings": [
            "sound",
            "noise"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "音",
                "kana": [
                    "おと",
                    "ね",
                    "おん"
                ],
                "english": [
                    "sound",
                    "noise"
                ]
            },
            {
                "value": "音楽",
                "kana": [
                    "おんがく"
                ],
                "english": [
                    "music",
                    "musical movement"
                ]
            },
            {
                "value": "本音",
                "kana": [
                    "ほんね"
                ],
                "english": [
                    "real intention",
                    "motive"
                ]
            },
            {
                "value": "騒音",
                "kana": [
                    "そうおん"
                ],
                "english": [
                    "noise"
                ]
            },
            {
                "value": "音声",
                "kana": [
                    "おんせい, おんじょう"
                ],
                "english": [
                    "voice"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "下",
        "on": [
            "げ",
            "か"
        ],
        "kun": [
            "した",
            "しも",
            "もと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%8B#Kanji",
        "meanings": [
            "below",
            "down",
            "descend",
            "give",
            "low",
            "inferior"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "下",
                "kana": [
                    "もと"
                ],
                "english": [
                    "under"
                ]
            },
            {
                "value": "下げる",
                "kana": [
                    "さげる"
                ],
                "english": [
                    "to hang",
                    "to lower",
                    "to move back",
                    "to wear"
                ]
            },
            {
                "value": "引き下げ",
                "kana": [
                    "ひきさげ"
                ],
                "english": [
                    "reduction",
                    "cut"
                ]
            },
            {
                "value": "下り",
                "kana": [
                    "くだり"
                ],
                "english": [
                    "train"
                ]
            },
            {
                "value": "下院",
                "kana": [
                    "かいん"
                ],
                "english": [
                    "lower",
                    "house",
                    "lower"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "火",
        "on": [
            "か"
        ],
        "kun": [
            "ひ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%81%AB#Kanji",
        "meanings": [
            "fire"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "火山",
                "kana": [
                    "かざん"
                ],
                "english": [
                    "volcano"
                ]
            },
            {
                "value": "火災",
                "kana": [
                    "かさい"
                ],
                "english": [
                    "conflagration",
                    "fire"
                ]
            },
            {
                "value": "噴火",
                "kana": [
                    "ふんか"
                ],
                "english": [
                    "eruption"
                ]
            },
            {
                "value": "火砕流",
                "kana": [
                    "かさいりゅう"
                ],
                "english": [
                    "pyroclastic flow"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "花",
        "on": [
            "か"
        ],
        "kun": [
            "はな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%8A%B1#Kanji",
        "meanings": [
            "flower"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "花",
                "kana": [
                    "はな"
                ],
                "english": [
                    "flower",
                    "blossom",
                    "bloom",
                    "petal"
                ]
            },
            {
                "value": "花火",
                "kana": [
                    "はなび"
                ],
                "english": [
                    "fireworks"
                ]
            },
            {
                "value": "花びら",
                "kana": [
                    "はなびら",
                    "かべん"
                ],
                "english": [
                    "flower petal"
                ]
            },
            {
                "value": "花見",
                "kana": [
                    "はなみ"
                ],
                "english": [
                    "cherry blossom viewing",
                    "flowing viewing"
                ]
            },
            {
                "value": "花園",
                "kana": [
                    "はなぞの",
                    "かえん"
                ],
                "english": [
                    "flower garden"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "貝",
        "on": [
            "ばい"
        ],
        "kun": [
            "かい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B2%9D#Kanji",
        "meanings": [
            "shellfish"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "貝",
                "kana": [
                    "かい"
                ],
                "english": [
                    "shell",
                    "shellfish"
                ]
            },
            {
                "value": "貝殻",
                "kana": [
                    "かいがら"
                ],
                "english": [
                    "shell"
                ]
            },
            {
                "value": "貝塚",
                "kana": [
                    "かいずか",
                    "かいづか"
                ],
                "english": [
                    "shell heap",
                    "shell mound",
                    "kitchen midden"
                ]
            },
            {
                "value": "貝",
                "kana": [
                    "ばい",
                    "バイ"
                ],
                "english": [
                    "Japanese babylon (species of shelled mollusk)"
                ]
            },
            {
                "value": "巻き貝",
                "kana": [
                    "まきがい"
                ],
                "english": [
                    "snail",
                    "spiral shell"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "学",
        "on": [
            "がく"
        ],
        "kun": [
            "まなぶ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AD%A6#Kanji",
        "meanings": [
            "study",
            "learning",
            "science"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "学校",
                "kana": [
                    "がっこう"
                ],
                "english": [
                    "school"
                ]
            },
            {
                "value": "学生",
                "kana": [
                    "がくせい"
                ],
                "english": [
                    "student"
                ]
            },
            {
                "value": "大学",
                "kana": [
                    "だいがく"
                ],
                "english": [
                    "secondary school"
                ]
            },
            {
                "value": "医学",
                "kana": [
                    "いがく"
                ],
                "english": [
                    "medical science",
                    "medicine"
                ]
            },
            {
                "value": "科学",
                "kana": [
                    "かがく"
                ],
                "english": [
                    "science"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "気",
        "on": [
            "け",
            "き"
        ],
        "kun": [
            "いき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B0%97#Kanji",
        "meanings": [
            "spirit",
            "mind",
            "air",
            "atmosphere",
            "mood"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "気",
                "kana": [
                    "き"
                ],
                "english": [
                    "spirit",
                    "mind",
                    "heart",
                    "nature",
                    "disposition"
                ]
            },
            {
                "value": "景気",
                "kana": [
                    "けいき"
                ],
                "english": [
                    "condition",
                    "state",
                    "business"
                ]
            },
            {
                "value": "人気",
                "kana": [
                    "にんき"
                ],
                "english": [
                    "popular",
                    "popular feeling",
                    "business conditions"
                ]
            },
            {
                "value": "気持ち",
                "kana": [
                    "きもち"
                ],
                "english": [
                    "feeling",
                    "sensation",
                    "mood"
                ]
            },
            {
                "value": "電気",
                "kana": [
                    "でんき"
                ],
                "english": [
                    "electricity",
                    "light"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "休",
        "on": [
            "きゅう"
        ],
        "kun": [
            "やすむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BC%91#Kanji",
        "meanings": [
            "rest"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "休み",
                "kana": [
                    "やすみ"
                ],
                "english": [
                    "rest",
                    "recess",
                    "respite",
                    "vacation",
                    "holiday"
                ]
            },
            {
                "value": "夏休み",
                "kana": [
                    "なつやすみ"
                ],
                "english": [
                    "summer holiday"
                ]
            },
            {
                "value": "休暇",
                "kana": [
                    "きゅうか"
                ],
                "english": [
                    "holiday",
                    "day off",
                    "furlough"
                ]
            },
            {
                "value": "休日",
                "kana": [
                    "きゅうかきゅうか"
                ],
                "english": [
                    "holiday",
                    "day off"
                ]
            },
            {
                "value": "休業",
                "kana": [
                    "きゅうぎょう"
                ],
                "english": [
                    "closed (e.g. store)",
                    "business suspended"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "玉",
        "on": [
            "ぎょく"
        ],
        "kun": [
            "たま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%8E%89#Kanji",
        "meanings": [
            "jewel",
            "ball"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 5,
        "examples": [
            {
                "value": "玉",
                "kana": [
                    "たま"
                ],
                "english": [
                    "ball",
                    "sphere",
                    "coin",
                    "jewel",
                    "pearl",
                    "testicles"
                ]
            },
            {
                "value": "目玉",
                "kana": [
                    "めだま"
                ],
                "english": [
                    "eyeball",
                    "special feature",
                    "centerpiece"
                ]
            },
            {
                "value": "替え玉",
                "kana": [
                    "かえだま"
                ],
                "english": [
                    "substitute",
                    "double"
                ]
            },
            {
                "value": "玉虫色",
                "kana": [
                    "たまむしいろ"
                ],
                "english": [
                    "iridescent",
                    "equivocal",
                    "ambivalent"
                ]
            },
            {
                "value": "お年玉",
                "kana": [
                    "おとしだま"
                ],
                "english": [
                    "New Year’s gift"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "金",
        "on": [
            "こん",
            "きん"
        ],
        "kun": [
            "かね",
            "かな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%87%91#Kanji",
        "meanings": [
            "gold",
            "money"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "お金",
                "kana": [
                    "おかね"
                ],
                "english": [
                    "money"
                ]
            },
            {
                "value": "金融",
                "kana": [
                    "きんゆう"
                ],
                "english": [
                    "financing",
                    "credit transacting"
                ]
            },
            {
                "value": "金利",
                "kana": [
                    "きんり"
                ],
                "english": [
                    "interest rates"
                ]
            },
            {
                "value": "献金",
                "kana": [
                    "けんきん"
                ],
                "english": [
                    "donation",
                    "contribution",
                    "offering"
                ]
            },
            {
                "value": "資金",
                "kana": [
                    "しきん"
                ],
                "english": [
                    "funds",
                    "capital"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "九",
        "on": [
            "きゅう",
            "く"
        ],
        "kun": [
            "ここの"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B9%9D#Kanji",
        "meanings": [
            "nine"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "九",
                "kana": [
                    "きゅう",
                    "く",
                    "ここの",
                    "この",
                    "ここ"
                ],
                "english": [
                    "nine"
                ]
            },
            {
                "value": "九月",
                "kana": [
                    "くがつ"
                ],
                "english": [
                    "September"
                ]
            },
            {
                "value": "十九",
                "kana": [
                    "じゅうきゅう"
                ],
                "english": [
                    "nineteen"
                ]
            },
            {
                "value": "九州",
                "kana": [
                    "きゅうしゅう"
                ],
                "english": [
                    "Kyushu"
                ]
            },
            {
                "value": "九十",
                "kana": [
                    "きゅうじゅう",
                    "くじゅう"
                ],
                "english": [
                    "ninety"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "空",
        "on": [
            "く",
            "くう"
        ],
        "kun": [
            "あく",
            "から",
            "そら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A9%BA#Kanji",
        "meanings": [
            "empty",
            "sky",
            "void"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "空",
                "kana": [
                    "から"
                ],
                "english": [
                    "emptiness",
                    "vacuum",
                    "blank"
                ]
            },
            {
                "value": "空港",
                "kana": [
                    "くうこう"
                ],
                "english": [
                    "airport"
                ]
            },
            {
                "value": "航空",
                "kana": [
                    "こうくう"
                ],
                "english": [
                    "aviation"
                ]
            },
            {
                "value": "空気",
                "kana": [
                    "くうき"
                ],
                "english": [
                    "air",
                    "atmosphere"
                ]
            },
            {
                "value": "航空機",
                "kana": [
                    "こうくうき"
                ],
                "english": [
                    "aircraft",
                    "aeroplane",
                    "airplane"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "月",
        "on": [
            "がつ",
            "げつ"
        ],
        "kun": [
            "つき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%88#Kanji",
        "meanings": [
            "month",
            "moon"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "一月",
                "kana": [
                    "いちがつ"
                ],
                "english": [
                    "January"
                ]
            },
            {
                "value": "九月",
                "kana": [
                    "くがつ"
                ],
                "english": [
                    "September"
                ]
            },
            {
                "value": "五月",
                "kana": [
                    "ごがつ"
                ],
                "english": [
                    "May"
                ]
            },
            {
                "value": "今月",
                "kana": [
                    "こんげつ"
                ],
                "english": [
                    "this month"
                ]
            },
            {
                "value": "三月",
                "kana": [
                    "さんがつ"
                ],
                "english": [
                    "March"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "犬",
        "on": [
            "けん"
        ],
        "kun": [
            "いぬ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%8A%AC#Kanji",
        "meanings": [
            "dog"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "犬",
                "kana": [
                    "いぬ"
                ],
                "english": [
                    "dog"
                ]
            },
            {
                "value": "盲導犬",
                "kana": [
                    "もうどうけん"
                ],
                "english": [
                    "guide dog for the blind"
                ]
            },
            {
                "value": "愛犬",
                "kana": [
                    "あいけん"
                ],
                "english": [
                    "pet dog"
                ]
            },
            {
                "value": "飼い犬",
                "kana": [
                    "かいいぬ"
                ],
                "english": [
                    "pet dog"
                ]
            },
            {
                "value": "野犬",
                "kana": [
                    "やけん"
                ],
                "english": [
                    "stray dog"
                ]
            }
        ],
        "tags": [
            "animal"
        ]
    },
    {
        "name": "見",
        "on": [
            "けん",
            "げん"
        ],
        "kun": [
            "みる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A6%8B#Kanji",
        "meanings": [
            "see",
            "opinion"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "意見",
                "kana": [
                    "いけん"
                ],
                "english": [
                    "opinion",
                    "view"
                ]
            },
            {
                "value": "会見",
                "kana": [
                    "かいけん"
                ],
                "english": [
                    "interview",
                    "audience"
                ]
            },
            {
                "value": "見直し",
                "kana": [
                    "みなおし"
                ],
                "english": [
                    "review",
                    "reconsideration",
                    "revision"
                ]
            },
            {
                "value": "見方",
                "kana": [
                    "みかた"
                ],
                "english": [
                    "viewpoint"
                ]
            },
            {
                "value": "見通し",
                "kana": [
                    "みとおし"
                ],
                "english": [
                    "perspective",
                    "unobstructed view",
                    "outlook"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "五",
        "on": [
            "ご"
        ],
        "kun": [
            "いつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%94#Kanji",
        "meanings": [
            "five"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "五",
                "kana": [
                    "ご",
                    "いつ",
                    "い"
                ],
                "english": [
                    "five"
                ]
            },
            {
                "value": "五月",
                "kana": [
                    "ごがつ"
                ],
                "english": [
                    "May"
                ]
            },
            {
                "value": "十五",
                "kana": [
                    "じゅうご"
                ],
                "english": [
                    "fifteen"
                ]
            },
            {
                "value": "五輪",
                "kana": [
                    "ごりん"
                ],
                "english": [
                    "the Olympics"
                ]
            },
            {
                "value": "五十",
                "kana": [
                    "ごじゅう",
                    "いそ",
                    "い"
                ],
                "english": [
                    "fifty"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "口",
        "on": [
            "く",
            "こう"
        ],
        "kun": [
            "くち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%A3#Kanji",
        "meanings": [
            "mouth"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "口",
                "kana": [
                    "くち"
                ],
                "english": [
                    "mouth",
                    "opening",
                    "hole",
                    "gap",
                    "orifice"
                ]
            },
            {
                "value": "人口",
                "kana": [
                    "じんこう"
                ],
                "english": [
                    "population",
                    "common talk"
                ]
            },
            {
                "value": "窓口",
                "kana": [
                    "まどぐち"
                ],
                "english": [
                    "ticket window",
                    "teller window",
                    "counter"
                ]
            },
            {
                "value": "口座",
                "kana": [
                    "こうざ"
                ],
                "english": [
                    "account"
                ]
            },
            {
                "value": "入り口",
                "kana": [
                    "いりぐち",
                    "いりくち",
                    "はいりぐち",
                    "は",
                    "いりくち"
                ],
                "english": [
                    "entrance",
                    "entry",
                    "gate",
                    "approach",
                    "mouth"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "校",
        "on": [
            "きょう",
            "こう"
        ],
        "kun": [
            "かせ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%A0%A1#Kanji",
        "meanings": [
            "school",
            "exam",
            "printing"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 10,
        "examples": [
            {
                "value": "学校",
                "kana": [
                    "がっこう"
                ],
                "english": [
                    "school"
                ]
            },
            {
                "value": "高校",
                "kana": [
                    "こうこう"
                ],
                "english": [
                    "senior high school"
                ]
            },
            {
                "value": "校長",
                "kana": [
                    "こうちょう"
                ],
                "english": [
                    "principal",
                    "headmaster"
                ]
            },
            {
                "value": "高校生",
                "kana": [
                    "こうこうせい"
                ],
                "english": [
                    "senior high school student"
                ]
            },
            {
                "value": "小学校",
                "kana": [
                    "しょうがっこう"
                ],
                "english": [
                    "primary school",
                    "elementary school"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "左",
        "on": [
            "さ"
        ],
        "kun": [
            "ひだり"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B7%A6#Kanji",
        "meanings": [
            "left"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "向かって左",
                "kana": [
                    "むかってひだり"
                ],
                "english": [
                    "on the left as one faces it"
                ]
            },
            {
                "value": "左翼",
                "kana": [
                    "さよく"
                ],
                "english": [
                    "left wing (political)"
                ]
            },
            {
                "value": "左右",
                "kana": [
                    "さゆう"
                ],
                "english": [
                    "left and right",
                    "influence",
                    "control"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "三",
        "on": [
            "さん"
        ],
        "kun": [
            "み"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%89#Kanji",
        "meanings": [
            "three"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "三",
                "kana": [
                    "さん",
                    "み"
                ],
                "english": [
                    "three"
                ]
            },
            {
                "value": "三つ",
                "kana": [
                    "みっつ"
                ],
                "english": [
                    "three things"
                ]
            },
            {
                "value": "三月",
                "kana": [
                    "さんがつ"
                ],
                "english": [
                    "March"
                ]
            },
            {
                "value": "三人",
                "kana": [
                    "さんにん",
                    "みたり"
                ],
                "english": [
                    "three people"
                ]
            },
            {
                "value": "十三",
                "kana": [
                    "じゅうさん"
                ],
                "english": [
                    "thirteen"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "山",
        "on": [
            "せん",
            "さん"
        ],
        "kun": [
            "やま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B1%B1#Kanji",
        "meanings": [
            "mountain"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "山",
                "kana": [
                    "やま"
                ],
                "english": [
                    "mountain",
                    "pile",
                    "heap",
                    "climax",
                    "critical point"
                ]
            },
            {
                "value": "火山",
                "kana": [
                    "かざん"
                ],
                "english": [
                    "volcano"
                ]
            },
            {
                "value": "青山",
                "kana": [
                    "せいざん"
                ],
                "english": [
                    "blue or green mountain",
                    "grave",
                    "burial place"
                ]
            },
            {
                "value": "山形",
                "kana": [
                    "やまがた"
                ],
                "english": [
                    "mountain shaped"
                ]
            },
            {
                "value": "登山",
                "kana": [
                    "とざん"
                ],
                "english": [
                    "mountain climbing"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "四",
        "on": [
            "し"
        ],
        "kun": [
            "よん",
            "よつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9B%9B#Kanji",
        "meanings": [
            "four"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "四",
                "kana": [
                    "よん",
                    "し",
                    "よ"
                ],
                "english": [
                    "four"
                ]
            },
            {
                "value": "四つ",
                "kana": [
                    "よっつ"
                ],
                "english": [
                    "four things"
                ]
            },
            {
                "value": "四月",
                "kana": [
                    "しがつ"
                ],
                "english": [
                    "April"
                ]
            },
            {
                "value": "十四",
                "kana": [
                    "じゅうし",
                    "じゅうよん"
                ],
                "english": [
                    "fourteen"
                ]
            },
            {
                "value": "四十",
                "kana": [
                    "よんじゅう",
                    "しじゅう",
                    "よそ"
                ],
                "english": [
                    "forty"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "子",
        "on": [
            "し",
            "す"
        ],
        "kun": [
            "こ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AD%90#Kanji",
        "meanings": [
            "child",
            "sign of the rat"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "子",
                "kana": [
                    "こ"
                ],
                "english": [
                    "child"
                ]
            },
            {
                "value": "子供",
                "kana": [
                    "こども"
                ],
                "english": [
                    "children"
                ]
            },
            {
                "value": "女子",
                "kana": [
                    "じょし",
                    "おなご"
                ],
                "english": [
                    "women",
                    "girl"
                ]
            },
            {
                "value": "男子",
                "kana": [
                    "だんし"
                ],
                "english": [
                    "youth",
                    "young man"
                ]
            },
            {
                "value": "原子力",
                "kana": [
                    "げんしりょく"
                ],
                "english": [
                    "atomic",
                    "energy"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "糸",
        "on": [
            "し"
        ],
        "kun": [
            "いと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B3%B8#Kanji",
        "meanings": [
            "thread"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "糸",
                "kana": [
                    "いと"
                ],
                "english": [
                    "thread",
                    "yarn",
                    "string"
                ]
            },
            {
                "value": "糸口",
                "kana": [
                    "いとぐち"
                ],
                "english": [
                    "thread end",
                    "beginning",
                    "clue"
                ]
            },
            {
                "value": "毛糸",
                "kana": [
                    "けいと"
                ],
                "english": [
                    "knitting wool"
                ]
            },
            {
                "value": "撚糸",
                "kana": [
                    "ねんし"
                ],
                "english": [
                    "twisted thread or yarn"
                ]
            },
            {
                "value": "生糸",
                "kana": [
                    "きいと"
                ],
                "english": [
                    "raw silk thread"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "字",
        "on": [
            "じ"
        ],
        "kun": [
            "あざ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AD%97#Kanji",
        "meanings": [
            "character",
            "letter",
            "word",
            "section of village"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "字",
                "kana": [
                    "あざ"
                ],
                "english": [
                    "section of village"
                ]
            },
            {
                "value": "黒字",
                "kana": [
                    "くろじ"
                ],
                "english": [
                    "balance",
                    "figure in black"
                ]
            },
            {
                "value": "数字",
                "kana": [
                    "すうじ"
                ],
                "english": [
                    "numeral",
                    "figure",
                    "digit",
                    "numeric character"
                ]
            },
            {
                "value": "赤字",
                "kana": [
                    "あかじ"
                ],
                "english": [
                    "deficit"
                ]
            },
            {
                "value": "文字",
                "kana": [
                    "もじ",
                    "もんじ"
                ],
                "english": [
                    "letter (of alphabet",
                    "character"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "耳",
        "on": [
            "じ",
            "に"
        ],
        "kun": [
            "みみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%80%B3#Kanji",
        "meanings": [
            "ear"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "耳",
                "kana": [
                    "みみ"
                ],
                "english": [
                    "ear",
                    "hearing",
                    "edge",
                    "crust"
                ]
            },
            {
                "value": "耳目",
                "kana": [
                    "じもく"
                ],
                "english": [
                    "eye and ear",
                    "one’s attention",
                    "one’s interest"
                ]
            },
            {
                "value": "中耳炎",
                "kana": [
                    "ちゅうじえん"
                ],
                "english": [
                    "tympanitis (inflammation of middle ear)"
                ]
            },
            {
                "value": "耳打ち",
                "kana": [
                    "みみうち"
                ],
                "english": [
                    "whisper into a person’s ear"
                ]
            },
            {
                "value": "耳鼻咽喉科",
                "kana": [
                    "じびいんこうか"
                ],
                "english": [
                    "otorhinolaryngology",
                    "ear",
                    "nose and throat"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "七",
        "on": [
            "しち"
        ],
        "kun": [
            "なな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%83#Kanji",
        "meanings": [
            "seven"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "七",
                "kana": [
                    "しち",
                    "なな",
                    "な"
                ],
                "english": [
                    "seven"
                ]
            },
            {
                "value": "七月",
                "kana": [
                    "しちがつ"
                ],
                "english": [
                    "July"
                ]
            },
            {
                "value": "十七",
                "kana": [
                    "じゅうしち",
                    "じゅうなな"
                ],
                "english": [
                    "seventeen"
                ]
            },
            {
                "value": "七十",
                "kana": [
                    "しちじゅう",
                    "ななじゅう",
                    "ななそ"
                ],
                "english": [
                    "seventy"
                ]
            },
            {
                "value": "四十七士",
                "kana": [
                    "しじゅうしちし"
                ],
                "english": [
                    "The 47 Ronin"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "車",
        "on": [
            "しゃ"
        ],
        "kun": [
            "くるま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%BB%8A#Kanji",
        "meanings": [
            "vehicle",
            "car"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "自動車",
                "kana": [
                    "じどうしゃ"
                ],
                "english": [
                    "automobile"
                ]
            },
            {
                "value": "下車",
                "kana": [
                    "げしゃ"
                ],
                "english": [
                    "alighting (from train, bus, etc.)"
                ]
            },
            {
                "value": "乗用車",
                "kana": [
                    "じょうようしゃ"
                ],
                "english": [
                    "passenger vehicle",
                    "automobile"
                ]
            },
            {
                "value": "自転車",
                "kana": [
                    "じてんしゃ"
                ],
                "english": [
                    "bicycle"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "手",
        "on": [
            "しゅ"
        ],
        "kun": [
            "て"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%89%8B#Kanji",
        "meanings": [
            "hand"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "選手",
                "kana": [
                    "せんしゅ"
                ],
                "english": [
                    "player (in game)",
                    "team member"
                ]
            },
            {
                "value": "選手権",
                "kana": [
                    "せんしゅけん"
                ],
                "english": [
                    "championship",
                    "title (of champion)"
                ]
            },
            {
                "value": "相手",
                "kana": [
                    "あいて"
                ],
                "english": [
                    "companion",
                    "partner",
                    "company",
                    "other party"
                ]
            },
            {
                "value": "大手",
                "kana": [
                    "おおて"
                ],
                "english": [
                    "front castle gate",
                    "both arms open"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "十",
        "on": [
            "じゅう"
        ],
        "kun": [
            "と"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8D%81#Kanji",
        "meanings": [
            "ten"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "十",
                "kana": [
                    "じゅう",
                    "と",
                    "とお"
                ],
                "english": [
                    "ten"
                ]
            },
            {
                "value": "十一",
                "kana": [
                    "じゅういち",
                    "ジュウイチ"
                ],
                "english": [
                    "eleven"
                ]
            },
            {
                "value": "十一月",
                "kana": [
                    "じゅういちがつ"
                ],
                "english": [
                    "November"
                ]
            },
            {
                "value": "十九",
                "kana": [
                    "じゅうきゅう"
                ],
                "english": [
                    "nineteen"
                ]
            },
            {
                "value": "十月",
                "kana": [
                    "じゅうがつ"
                ],
                "english": [
                    "October"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "出",
        "on": [
            "しゅち",
            "しゅつ"
        ],
        "kun": [
            "で",
            "でる",
            "だす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%87%BA#Kanji",
        "meanings": [
            "exit",
            "leave"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "出す",
                "kana": [
                    "だす"
                ],
                "english": [
                    "to take out",
                    "to get out",
                    "to put out"
                ]
            },
            {
                "value": "出身",
                "kana": [
                    "しゅっしん"
                ],
                "english": [
                    "person’s origin (town, city, country, etc.)"
                ]
            },
            {
                "value": "輸出",
                "kana": [
                    "ゆしゅつ",
                    "しゅしゅつ"
                ],
                "english": [
                    "export"
                ]
            },
            {
                "value": "出場",
                "kana": [
                    "しゅつじょう"
                ],
                "english": [
                    "(stage) appearance",
                    "participation"
                ]
            },
            {
                "value": "進出",
                "kana": [
                    "しんしゅつ"
                ],
                "english": [
                    "advance",
                    "step forward"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "女",
        "on": [
            "にょ",
            "じょ"
        ],
        "kun": [
            "おんな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A5%B3#Kanji",
        "meanings": [
            "women",
            "female"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "女",
                "kana": [
                    "おんな"
                ],
                "english": [
                    "women"
                ]
            },
            {
                "value": "女子",
                "kana": [
                    "じょし",
                    "おなご"
                ],
                "english": [
                    "girl"
                ]
            },
            {
                "value": "女性",
                "kana": [
                    "じょせい"
                ],
                "english": [
                    "women",
                    "female",
                    "feminine gender"
                ]
            },
            {
                "value": "男女",
                "kana": [
                    "だんじょ"
                ],
                "english": [
                    "man and women"
                ]
            },
            {
                "value": "彼女",
                "kana": [
                    "かのじょ"
                ],
                "english": [
                    "she",
                    "girlfriend",
                    "sweetheart"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "小",
        "on": [
            "しょう"
        ],
        "kun": [
            "ちいさい",
            "こ",
            "お"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B0%8F#Kanji",
        "meanings": [
            "small",
            "little"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "小選挙区",
                "kana": [
                    "しょうせんきょく"
                ],
                "english": [
                    "small electoral district"
                ]
            },
            {
                "value": "小学校",
                "kana": [
                    "しょうがっこう"
                ],
                "english": [
                    "primary school",
                    "elementary school"
                ]
            },
            {
                "value": "小説",
                "kana": [
                    "しょうせつ"
                ],
                "english": [
                    "novel",
                    "short story"
                ]
            },
            {
                "value": "小学生",
                "kana": [
                    "しょうがくせい"
                ],
                "english": [
                    "elementary school student"
                ]
            },
            {
                "value": "中小企業",
                "kana": [
                    "ちゅうしょうきぎょう"
                ],
                "english": [
                    "small to medium enterprises"
                ]
            }
        ],
        "tags": [
            "size"
        ]
    },
    {
        "name": "上",
        "on": [
            "じょう"
        ],
        "kun": [
            "うえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%8A#Kanji",
        "meanings": [
            "above",
            "up"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "上がったり",
                "kana": [
                    "あがったり"
                ],
                "english": [
                    "doomed",
                    "in a bad state",
                    "poor"
                ]
            },
            {
                "value": "史上",
                "kana": [
                    "しじょう"
                ],
                "english": [
                    "historical"
                ]
            },
            {
                "value": "事実上",
                "kana": [
                    "じじつじょう"
                ],
                "english": [
                    "(as a) matter of fact",
                    "actually",
                    "in reality"
                ]
            },
            {
                "value": "上げ",
                "kana": [
                    "あげ"
                ],
                "english": [
                    "rise in price",
                    "making a tuck"
                ]
            },
            {
                "value": "上昇",
                "kana": [
                    "じょうしょう"
                ],
                "english": [
                    "rising",
                    "ascending",
                    "climbing"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "森",
        "on": [
            "しん"
        ],
        "kun": [
            "もり"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%A3%AE#Kanji",
        "meanings": [
            "forest",
            "woods"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "森",
                "kana": [
                    "もり"
                ],
                "english": [
                    "forest",
                    "grove"
                ]
            },
            {
                "value": "森林",
                "kana": [
                    "しんりん"
                ],
                "english": [
                    "forest",
                    "woods"
                ]
            },
            {
                "value": "森閑",
                "kana": [
                    "しんかん"
                ],
                "english": [
                    "silence"
                ]
            },
            {
                "value": "森厳",
                "kana": [
                    "しんげん"
                ],
                "english": [
                    "solemn"
                ]
            },
            {
                "value": "森羅万象",
                "kana": [
                    "しんらばんしょう"
                ],
                "english": [
                    "all things in nature",
                    "the whole creation"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "人",
        "on": [
            "じん",
            "にん"
        ],
        "kun": [
            "ひと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
        "meanings": [
            "person"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "外国人",
                "kana": [
                    "がいこくじん"
                ],
                "english": [
                    "foreigner"
                ]
            },
            {
                "value": "個人",
                "kana": [
                    "こじん"
                ],
                "english": [
                    "individual",
                    "private person",
                    "personal",
                    "private"
                ]
            },
            {
                "value": "三人",
                "kana": [
                    "さんにん",
                    "みたり"
                ],
                "english": [
                    "three people"
                ]
            },
            {
                "value": "人間",
                "kana": [
                    "にんげん"
                ],
                "english": [
                    "human being",
                    "man",
                    "person"
                ]
            },
            {
                "value": "人気",
                "kana": [
                    "にんき"
                ],
                "english": [
                    "popular",
                    "popular feeling",
                    "business conditions"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "水",
        "on": [
            "すい"
        ],
        "kun": [
            "みず"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B0%B4#Kanji",
        "meanings": [
            "water"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "水",
                "kana": [
                    "みず"
                ],
                "english": [
                    "water (cold, fresh)"
                ]
            },
            {
                "value": "水準",
                "kana": [
                    "すいじゅん"
                ],
                "english": [
                    "water level"
                ]
            },
            {
                "value": "水道",
                "kana": [
                    "すいどう"
                ],
                "english": [
                    "water service",
                    "water supply"
                ]
            },
            {
                "value": "水面",
                "kana": [
                    "すいめん",
                    "みなも",
                    "みのも"
                ],
                "english": [
                    "water's surface"
                ]
            },
            {
                "value": "水泳",
                "kana": [
                    "すいえい"
                ],
                "english": [
                    "swimming"
                ]
            }
        ],
        "tags": [
            "food"
        ]
    },
    {
        "name": "正",
        "on": [
            "しょう",
            "せい"
        ],
        "kun": [
            "ただしい",
            "まさ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AD%A3#Kanji",
        "meanings": [
            "correct",
            "justice",
            "righteous"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "正",
                "kana": [
                    "せい"
                ],
                "english": [
                    "true",
                    "regular",
                    "original"
                ]
            },
            {
                "value": "改正",
                "kana": [
                    "かいせい"
                ],
                "english": [
                    "revision",
                    "amendment",
                    "alteration"
                ]
            },
            {
                "value": "修正",
                "kana": [
                    "しゅうせい"
                ],
                "english": [
                    "amendment",
                    "correction",
                    "revision",
                    "modification"
                ]
            },
            {
                "value": "正式",
                "kana": [
                    "せいしき"
                ],
                "english": [
                    "due form",
                    "official",
                    "formality"
                ]
            },
            {
                "value": "正常",
                "kana": [
                    "せいじょう"
                ],
                "english": [
                    "normalcy",
                    "normality",
                    "normal"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "生",
        "on": [
            "しょう",
            "せい"
        ],
        "kun": [
            "いきる",
            "うむ",
            "なま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%9F#Kanji",
        "meanings": [
            "life",
            "genuine",
            "birth"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "生きる",
                "kana": [
                    "いきる"
                ],
                "english": [
                    "to live",
                    "to exist"
                ]
            },
            {
                "value": "学生",
                "kana": [
                    "がくせい"
                ],
                "english": [
                    "student"
                ]
            },
            {
                "value": "生活",
                "kana": [
                    "せいかつ"
                ],
                "english": [
                    "living",
                    "life"
                ]
            },
            {
                "value": "生産",
                "kana": [
                    "せいさん"
                ],
                "english": [
                    "production",
                    "manufacture"
                ]
            },
            {
                "value": "厚生省",
                "kana": [
                    "こうせいしょう"
                ],
                "english": [
                    "Ministry of Health, Labour and Welfare"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "青",
        "on": [
            "しょう"
        ],
        "kun": [
            "あお"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9D%92#Kanji",
        "meanings": [
            "blue"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "青",
                "kana": [
                    "あお"
                ],
                "english": [
                    "blue",
                    "green",
                    "green light"
                ]
            },
            {
                "value": "青年",
                "kana": [
                    "せいねん"
                ],
                "english": [
                    "youth",
                    "young man"
                ]
            },
            {
                "value": "青山",
                "kana": [
                    "せいざん"
                ],
                "english": [
                    "blue or green mountain",
                    "grave",
                    "burial place"
                ]
            },
            {
                "value": "青木",
                "kana": [
                    "あおき",
                    "アオキ"
                ],
                "english": [
                    "Japanese laurel",
                    "spotted laurel"
                ]
            },
            {
                "value": "青春",
                "kana": [
                    "せいしゅん"
                ],
                "english": [
                    "youth",
                    "springtime of life",
                    "adolescent"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "石",
        "on": [
            "じゃく",
            "せき"
        ],
        "kun": [
            "いし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9F%B3#Kanji",
        "meanings": [
            "stone"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 5,
        "examples": [
            {
                "value": "石",
                "kana": [
                    "こく"
                ],
                "english": [
                    "measure of volume"
                ]
            },
            {
                "value": "石油",
                "kana": [
                    "せきゆ"
                ],
                "english": [
                    "oil",
                    "petroleum",
                    "kerosene"
                ]
            },
            {
                "value": "化石",
                "kana": [
                    "かせき"
                ],
                "english": [
                    "fossil",
                    "petrification",
                    "fossilization"
                ]
            },
            {
                "value": "石炭",
                "kana": [
                    "せきたん"
                ],
                "english": [
                    "coal"
                ]
            },
            {
                "value": "石橋",
                "kana": [
                    "いしばし",
                    "せっきょう"
                ],
                "english": [
                    "stone bridge"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "赤",
        "on": [
            "しゃく"
        ],
        "kun": [
            "あか"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B5%A4#Kanji",
        "meanings": [
            "red"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "赤ちゃん",
                "kana": [
                    "あかちゃん"
                ],
                "english": [
                    "baby",
                    "infant"
                ]
            },
            {
                "value": "赤字",
                "kana": [
                    "あかじ"
                ],
                "english": [
                    "deficit"
                ]
            },
            {
                "value": "赤松",
                "kana": [
                    "あかまつ"
                ],
                "english": [
                    "Japanese red pine"
                ]
            },
            {
                "value": "赤い",
                "kana": [
                    "あかい"
                ],
                "english": [
                    "Red (i.e. communist)"
                ]
            },
            {
                "value": "真っ赤",
                "kana": [
                    "まっか"
                ],
                "english": [
                    "bright red",
                    "deep red",
                    "flushed"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "先",
        "on": [
            "せん"
        ],
        "kun": [
            "さき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%88#Kanji",
        "meanings": [
            "before",
            "ahead",
            "previous",
            "future"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "先に",
                "kana": [
                    "さきに"
                ],
                "english": [
                    "before",
                    "earlier than",
                    "ahead",
                    "beyond"
                ]
            },
            {
                "value": "先月",
                "kana": [
                    "せんげつ"
                ],
                "english": [
                    "last month"
                ]
            },
            {
                "value": "先進国",
                "kana": [
                    "せんしんこく"
                ],
                "english": [
                    "advance"
                ]
            },
            {
                "value": "先生",
                "kana": [
                    "せんせい"
                ],
                "english": [
                    "teacher",
                    "master",
                    "doctor"
                ]
            },
            {
                "value": "先発",
                "kana": [
                    "せんぱつ"
                ],
                "english": [
                    "forerunner",
                    "advance party",
                    "going on ahead"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "千",
        "on": [
            "せん"
        ],
        "kun": [
            "ち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8D%83#Kanji",
        "meanings": [
            "thousand"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "三千",
                "kana": [
                    "さんぜん"
                ],
                "english": [
                    "three thousand"
                ]
            },
            {
                "value": "四千",
                "kana": [
                    "よんせん"
                ],
                "english": [
                    "four thousand"
                ]
            },
            {
                "value": "千代",
                "kana": [
                    "せんだい"
                ],
                "english": [
                    "thousand years",
                    "very long",
                    "forever"
                ]
            },
            {
                "value": "千里",
                "kana": [
                    "せんり"
                ],
                "english": [
                    "1000 ri",
                    "a very long distance"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "川",
        "on": [
            "せん"
        ],
        "kun": [
            "かわ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B7%9D#Kanji",
        "meanings": [
            "stream",
            "river"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "川",
                "kana": [
                    "かわ",
                    "がわ"
                ],
                "english": [
                    "river",
                    "stream"
                ]
            },
            {
                "value": "小川",
                "kana": [
                    "おがわ"
                ],
                "english": [
                    "streamlet",
                    "brook"
                ]
            },
            {
                "value": "河川",
                "kana": [
                    "かせん"
                ],
                "english": [
                    "rivers"
                ]
            },
            {
                "value": "谷川",
                "kana": [
                    "たにがわ"
                ],
                "english": [
                    "mountain stream"
                ]
            },
            {
                "value": "江戸川",
                "kana": [
                    "えどがわ"
                ],
                "english": [
                    "Edo River"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "早",
        "on": [
            "そう",
            "せい"
        ],
        "kun": [
            "はやい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%97%A9#Kanji",
        "meanings": [
            "early",
            "fast"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "早期",
                "kana": [
                    "そうき"
                ],
                "english": [
                    "early stage"
                ]
            },
            {
                "value": "早",
                "kana": [
                    "はや"
                ],
                "english": [
                    "already",
                    "now",
                    "by this time"
                ]
            },
            {
                "value": "早急",
                "kana": [
                    "さっきゅう",
                    "そうきゅう"
                ],
                "english": [
                    "urgent"
                ]
            },
            {
                "value": "早朝",
                "kana": [
                    "そうちょう"
                ],
                "english": [
                    "early morning"
                ]
            },
            {
                "value": "早める",
                "kana": [
                    "はやめる"
                ],
                "english": [
                    "to hasten",
                    "to quicken",
                    "to expedite"
                ]
            }
        ],
        "tags": [
            "adjective"
        ]
    },
    {
        "name": "草",
        "on": [
            "そう"
        ],
        "kun": [
            "くさ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%8D%89#Kanji",
        "meanings": [
            "grass",
            "weeds",
            "herbs",
            "pasture",
            "write",
            "draft"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "草",
                "kana": [
                    "くさ"
                ],
                "english": [
                    "grass"
                ]
            },
            {
                "value": "草案",
                "kana": [
                    "そうあん"
                ],
                "english": [
                    "draft",
                    "draught"
                ]
            },
            {
                "value": "草の根",
                "kana": [
                    "くさのね"
                ],
                "english": [
                    "grassroots",
                    "rank and file",
                    "the roots of grass"
                ]
            },
            {
                "value": "草原",
                "kana": [
                    "そうげん",
                    "くさはら"
                ],
                "english": [
                    "plain",
                    "grasslands",
                    "meadows"
                ]
            },
            {
                "value": "起草",
                "kana": [
                    "きそう"
                ],
                "english": [
                    "drafting",
                    "draughting",
                    "drawing up a bill"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "足",
        "on": [
            "す",
            "そく"
        ],
        "kun": [
            "あし",
            "たる",
            "たす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B6%B3#Kanji",
        "meanings": [
            "leg",
            "foot"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "足",
                "kana": [
                    "あし"
                ],
                "english": [
                    "foot",
                    "leg",
                    "pace"
                ]
            },
            {
                "value": "不足",
                "kana": [
                    "ふそく"
                ],
                "english": [
                    "insufficiency",
                    "shortage",
                    "deficiency",
                    "lack"
                ]
            },
            {
                "value": "発足",
                "kana": [
                    "ほっそく",
                    "はっそく"
                ],
                "english": [
                    "starting",
                    "inauguration",
                    "launch",
                    "founding"
                ]
            },
            {
                "value": "満足",
                "kana": [
                    "まんぞく"
                ],
                "english": [
                    "satisfaction",
                    "sufficiency"
                ]
            },
            {
                "value": "足並み",
                "kana": [
                    "あしなみ"
                ],
                "english": [
                    "pace",
                    "step"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "村",
        "on": [
            "そん"
        ],
        "kun": [
            "むら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9D%91#Kanji",
        "meanings": [
            "village"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "村",
                "kana": [
                    "むら"
                ],
                "english": [
                    "village"
                ]
            },
            {
                "value": "市町村",
                "kana": [
                    "しちょうそん"
                ],
                "english": [
                    "cities",
                    "towns and villages",
                    "municipalities"
                ]
            },
            {
                "value": "農村",
                "kana": [
                    "のうそん"
                ],
                "english": [
                    "agricultural community",
                    "farm village",
                    "rural"
                ]
            },
            {
                "value": "山村",
                "kana": [
                    "さんそん"
                ],
                "english": [
                    "mountain village"
                ]
            },
            {
                "value": "村長",
                "kana": [
                    "そんちょう"
                ],
                "english": [
                    "village headman"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "大",
        "on": [
            "だ",
            "だい",
            "たい"
        ],
        "kun": [
            "おお",
            "おおきい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%A7#Kanji",
        "meanings": [
            "large"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "大きな",
                "kana": [
                    "おおきな"
                ],
                "english": [
                    "big",
                    "large",
                    "great"
                ]
            },
            {
                "value": "拡大",
                "kana": [
                    "かくだい"
                ],
                "english": [
                    "magnification",
                    "enlargement",
                    "expansion"
                ]
            },
            {
                "value": "最大",
                "kana": [
                    "さいだい"
                ],
                "english": [
                    "greatest",
                    "largest",
                    "maximum"
                ]
            },
            {
                "value": "大いに",
                "kana": [
                    "おおいに",
                    "にっぽんじん"
                ],
                "english": [
                    "very",
                    "much",
                    "greatly",
                    "a lot of"
                ]
            },
            {
                "value": "大会",
                "kana": [
                    "たいかい"
                ],
                "english": [
                    "convention",
                    "mass meeting",
                    "rally"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "男",
        "on": [
            "なん",
            "だん"
        ],
        "kun": [
            "おとこ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%B7#Kanji",
        "meanings": [
            "male"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "男子",
                "kana": [
                    "だんし"
                ],
                "english": [
                    "youth",
                    "young man"
                ]
            },
            {
                "value": "男性",
                "kana": [
                    "だんせい"
                ],
                "english": [
                    "male",
                    "masculine gender"
                ]
            },
            {
                "value": "長男",
                "kana": [
                    "ちょうなん"
                ],
                "english": [
                    "eldest son"
                ]
            },
            {
                "value": "男女",
                "kana": [
                    "だんじょ"
                ],
                "english": [
                    "man and woman",
                    "men and women"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "竹",
        "on": [
            "ちく"
        ],
        "kun": [
            "たけ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%AB%B9#Kanji",
        "meanings": [
            "bamboo"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "竹",
                "kana": [
                    "たけ"
                ],
                "english": [
                    "bamboo"
                ]
            },
            {
                "value": "爆竹",
                "kana": [
                    "ばくちく"
                ],
                "english": [
                    "firecracker"
                ]
            },
            {
                "value": "竹林",
                "kana": [
                    "ちくりん",
                    "たけばやし"
                ],
                "english": [
                    "bamboo thicket"
                ]
            },
            {
                "value": "竹刀",
                "kana": [
                    "しない"
                ],
                "english": [
                    "fencing stick"
                ]
            },
            {
                "value": "青竹",
                "kana": [
                    "あおだけ"
                ],
                "english": [
                    "green bamboo"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "中",
        "on": [
            "ちゅう",
            "じゅう"
        ],
        "kun": [
            "なか"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%AD#Kanji",
        "meanings": [
            "inside",
            "middle"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "中央",
                "kana": [
                    "ちゅうおう"
                ],
                "english": [
                    "centre",
                    "central"
                ]
            },
            {
                "value": "中国",
                "kana": [
                    "ちゅうごく"
                ],
                "english": [
                    "China"
                ]
            },
            {
                "value": "中心",
                "kana": [
                    "ちゅうしん"
                ],
                "english": [
                    "center",
                    "centre",
                    "middle",
                    "heart",
                    "core",
                    "focus"
                ]
            },
            {
                "value": "中でも",
                "kana": [
                    "なかでも",
                    "にっぽんじん"
                ],
                "english": [
                    "among (other things)",
                    "inter alia"
                ]
            },
            {
                "value": "中間",
                "kana": [
                    "ちゅうかん"
                ],
                "english": [
                    "middle",
                    "midway",
                    "interim"
                ]
            }
        ],
        "tags": [
            "position"
        ]
    },
    {
        "name": "虫",
        "on": [
            "ちゅう"
        ],
        "kun": [
            "むし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%99%AB#Kanji",
        "meanings": [
            "insect",
            "bug",
            "temper"
        ],
        "grade": 1,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "虫",
                "kana": [
                    "むし"
                ],
                "english": [
                    "insect"
                ]
            },
            {
                "value": "昆虫",
                "kana": [
                    "こんちゅう"
                ],
                "english": [
                    "insect",
                    "bug"
                ]
            },
            {
                "value": "殺虫剤",
                "kana": [
                    "さっちゅうざい"
                ],
                "english": [
                    "insecticide",
                    "pesticide"
                ]
            },
            {
                "value": "虫歯",
                "kana": [
                    "むしば",
                    "うし"
                ],
                "english": [
                    "cavity",
                    "tooth decay",
                    "decayed tooth",
                    "caries"
                ]
            },
            {
                "value": "玉虫色",
                "kana": [
                    "たまむしいろ"
                ],
                "english": [
                    "iridescent",
                    "equivocal",
                    "ambivalent"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "町",
        "on": [
            "ちょう"
        ],
        "kun": [
            "まち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%BA#Kanji",
        "meanings": [
            "town",
            "block",
            "street"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "町",
                "kana": [
                    "まち, ちょう"
                ],
                "english": [
                    "town",
                    "block",
                    "neighbourhood"
                ]
            },
            {
                "value": "市町村",
                "kana": [
                    "しちょうそん"
                ],
                "english": [
                    "cities",
                    "municipalities"
                ]
            },
            {
                "value": "同町",
                "kana": [
                    "どうちょう"
                ],
                "english": [
                    "the same town",
                    "that town"
                ]
            },
            {
                "value": "町長",
                "kana": [
                    "ちょうちょう"
                ],
                "english": [
                    "town headman",
                    "town mayor"
                ]
            },
            {
                "value": "町内",
                "kana": [
                    "ちょうない"
                ],
                "english": [
                    "neighbourhood",
                    "street",
                    "block"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "天",
        "on": [
            "てん"
        ],
        "kun": [
            "あま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%A9#Kanji",
        "meanings": [
            "heaven",
            "sky"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "天皇",
                "kana": [
                    "てんのう",
                    "すめらぎ"
                ],
                "english": [
                    "Emperor of Japan"
                ]
            },
            {
                "value": "天気",
                "kana": [
                    "てんき"
                ],
                "english": [
                    "weather",
                    "the elements",
                    "fair weather"
                ]
            },
            {
                "value": "天皇陛下",
                "kana": [
                    "てんのうへいか"
                ],
                "english": [
                    "His Majesty the Emperor"
                ]
            },
            {
                "value": "天井",
                "kana": [
                    "てんじょう"
                ],
                "english": [
                    "ceiling",
                    "ceiling price"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "田",
        "on": [
            "でん"
        ],
        "kun": [
            "た",
            "だ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%B0#Kanji",
        "meanings": [
            "rice field",
            "rice paddy"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "上田",
                "kana": [
                    "じょうでん"
                ],
                "english": [
                    "high rice field",
                    "very fertile rice field"
                ]
            },
            {
                "value": "水田",
                "kana": [
                    "すいでん"
                ],
                "english": [
                    "water filled paddy field"
                ]
            },
            {
                "value": "油田",
                "kana": [
                    "ゆでん"
                ],
                "english": [
                    "oil field"
                ]
            },
            {
                "value": "田舎",
                "kana": [
                    "いなか"
                ],
                "english": [
                    "rural area",
                    "countryside",
                    "the sticks",
                    "hometown"
                ]
            },
            {
                "value": "桑田",
                "kana": [
                    "そうでん"
                ],
                "english": [
                    "mulberry plantation"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "土",
        "on": [
            "と",
            "ど"
        ],
        "kun": [
            "つち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9C%9F#Kanji",
        "meanings": [
            "soil",
            "earth"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "土地",
                "kana": [
                    "とち"
                ],
                "english": [
                    "plot of land"
                ]
            },
            {
                "value": "領土",
                "kana": [
                    "りょうど"
                ],
                "english": [
                    "dominion",
                    "territory",
                    "position"
                ]
            },
            {
                "value": "土曜",
                "kana": [
                    "どよう"
                ],
                "english": [
                    "Saturday"
                ]
            },
            {
                "value": "国土",
                "kana": [
                    "こくど"
                ],
                "english": [
                    "country",
                    "territory",
                    "domain",
                    "realm"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "二",
        "on": [
            "に"
        ],
        "kun": [
            "ふた",
            "ふたつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%8C#Kanji",
        "meanings": [
            "two"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "二",
                "kana": [
                    "に",
                    "ふた",
                    "ふ",
                    "ふう"
                ],
                "english": [
                    "two"
                ]
            },
            {
                "value": "二つ",
                "kana": [
                    "ふたつ"
                ],
                "english": [
                    "two things"
                ]
            },
            {
                "value": "十二",
                "kana": [
                    "じゅうに"
                ],
                "english": [
                    "twelve"
                ]
            },
            {
                "value": "十二月",
                "kana": [
                    "じゅうにがつ"
                ],
                "english": [
                    "December"
                ]
            },
            {
                "value": "二月",
                "kana": [
                    "にがつ"
                ],
                "english": [
                    "February"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "日",
        "on": [
            "にち",
            "じつ"
        ],
        "kun": [
            "ひ",
            "か"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%97%A5#Kanji",
        "meanings": [
            "day",
            "sun"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "日",
                "kana": [
                    "ひ"
                ],
                "english": [
                    "day",
                    "days",
                    "sun",
                    "sunshine",
                    "sunlight"
                ]
            },
            {
                "value": "同日",
                "kana": [
                    "どうじつ"
                ],
                "english": [
                    "the same day"
                ]
            },
            {
                "value": "日米",
                "kana": [
                    "にちべい"
                ],
                "english": [
                    "Japan"
                ]
            },
            {
                "value": "日本人",
                "kana": [
                    "にほんじん",
                    "にっぽんじん"
                ],
                "english": [
                    "Japanese person (people)"
                ]
            },
            {
                "value": "毎日",
                "kana": [
                    "まいにち"
                ],
                "english": [
                    "every day"
                ]
            }
        ],
        "tags": [
            "calendar"
        ]
    },
    {
        "name": "入",
        "on": [
            "にゅう"
        ],
        "kun": [
            "いる",
            "はいる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%A5#Kanji",
        "meanings": [
            "enter",
            "insert"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "入り",
                "kana": [
                    "いり"
                ],
                "english": [
                    "entering",
                    "containing"
                ]
            },
            {
                "value": "輸入",
                "kana": [
                    "ゆにゅう",
                    "しゅにゅう"
                ],
                "english": [
                    "important",
                    "import",
                    "introduction"
                ]
            },
            {
                "value": "購入",
                "kana": [
                    "こうにゅう"
                ],
                "english": [
                    "purchase",
                    "busy"
                ]
            },
            {
                "value": "収入",
                "kana": [
                    "しゅうにゅう"
                ],
                "english": [
                    "income",
                    "receipts",
                    "revenue"
                ]
            },
            {
                "value": "導入",
                "kana": [
                    "どうにゅう"
                ],
                "english": [
                    "introduction",
                    "bringing in",
                    "leading in"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "年",
        "on": [
            "ねん"
        ],
        "kun": [
            "とし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B9%B4#Kanji",
        "meanings": [
            "year"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "年",
                "kana": [
                    "とし"
                ],
                "english": [
                    "year",
                    "age"
                ]
            },
            {
                "value": "昨年",
                "kana": [
                    "さくねん"
                ],
                "english": [
                    "last year"
                ]
            },
            {
                "value": "前年",
                "kana": [
                    "ぜんねん"
                ],
                "english": [
                    "the preceding year",
                    "the previous year"
                ]
            },
            {
                "value": "年間",
                "kana": [
                    "ねんかん"
                ],
                "english": [
                    "year (period of)"
                ]
            },
            {
                "value": "来年",
                "kana": [
                    "らいねん"
                ],
                "english": [
                    "next year"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "白",
        "on": [
            "びゃく",
            "はく"
        ],
        "kun": [
            "しろ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%99%BD#Kanji",
        "meanings": [
            "white"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "白書",
                "kana": [
                    "はくしょ"
                ],
                "english": [
                    "white paper"
                ]
            },
            {
                "value": "白人",
                "kana": [
                    "はくじん"
                ],
                "english": [
                    "white person",
                    "Caucasian"
                ]
            },
            {
                "value": "空白",
                "kana": [
                    "くうはく"
                ],
                "english": [
                    "blank space",
                    "vacuum",
                    "space",
                    "null"
                ]
            },
            {
                "value": "白紙",
                "kana": [
                    "はくし"
                ],
                "english": [
                    "blank paper",
                    "white paper"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "八",
        "on": [
            "はち"
        ],
        "kun": [
            "や"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%AB#Kanji",
        "meanings": [
            "eight"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 2,
        "examples": [
            {
                "value": "八",
                "kana": [
                    "はち",
                    "や"
                ],
                "english": [
                    "eight"
                ]
            },
            {
                "value": "十八",
                "kana": [
                    "じゅうはち"
                ],
                "english": [
                    "eighteen"
                ]
            },
            {
                "value": "八月",
                "kana": [
                    "はちがつ"
                ],
                "english": [
                    "August"
                ]
            },
            {
                "value": "八十",
                "kana": [
                    "はちじゅう",
                    "やそ"
                ],
                "english": [
                    "eighty"
                ]
            },
            {
                "value": "三十八度線",
                "kana": [
                    "さんじゅうはちどせん"
                ],
                "english": [
                    "eighth parallel"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "百",
        "on": [
            "ひゃく"
        ],
        "kun": [
            "もも"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%99%BE#Kanji",
        "meanings": [
            "hundred"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "百",
                "kana": [
                    "ひゃく",
                    "もも"
                ],
                "english": [
                    "hundred"
                ]
            },
            {
                "value": "二百",
                "kana": [
                    "にひゃく"
                ],
                "english": [
                    "two hundred"
                ]
            },
            {
                "value": "三百",
                "kana": [
                    "さんびゃく"
                ],
                "english": [
                    "three hundred"
                ]
            },
            {
                "value": "百貨店",
                "kana": [
                    "ひゃっかてん"
                ],
                "english": [
                    "cleric desk"
                ]
            },
            {
                "value": "百万",
                "kana": [
                    "ひゃくまん"
                ],
                "english": [
                    "one million"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "文",
        "on": [
            "もん",
            "ぶん"
        ],
        "kun": [
            "ふみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%96%87#Kanji",
        "meanings": [
            "text",
            "sentence",
            "literature",
            "style",
            "art"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "文",
                "kana": [
                    "ふみ"
                ],
                "english": [
                    "letter",
                    "writings"
                ]
            },
            {
                "value": "文化",
                "kana": [
                    "ぶんか"
                ],
                "english": [
                    "culture",
                    "civilization",
                    "civilisation"
                ]
            },
            {
                "value": "文学",
                "kana": [
                    "ぶんがく"
                ],
                "english": [
                    "literature"
                ]
            },
            {
                "value": "文書",
                "kana": [
                    "ぶんしょ",
                    "もんじょ"
                ],
                "english": [
                    "document",
                    "writing",
                    "letter",
                    "paperwork",
                    "note"
                ]
            },
            {
                "value": "文字",
                "kana": [
                    "もじ",
                    "もんじ"
                ],
                "english": [
                    "letter (of alphabet)",
                    "character (literal)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "本",
        "on": [
            "ほん"
        ],
        "kun": [
            "もと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%AC#Kanji",
        "meanings": [
            "book"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "基本",
                "kana": [
                    "きほん"
                ],
                "english": [
                    "foundation",
                    "basis",
                    "standard"
                ]
            },
            {
                "value": "日本人",
                "kana": [
                    "にほんじん",
                    "にっぽんじん"
                ],
                "english": [
                    "Japanese person",
                    "Japanese people"
                ]
            },
            {
                "value": "本社",
                "kana": [
                    "ほんしゃ",
                    "ほんじゃ"
                ],
                "english": [
                    "head office",
                    "main office",
                    "headquarters"
                ]
            },
            {
                "value": "本部",
                "kana": [
                    "ほんぶ"
                ],
                "english": [
                    "headquarters"
                ]
            },
            {
                "value": "本の",
                "kana": [
                    "ほんの"
                ],
                "english": [
                    "mere",
                    "only, just"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "名",
        "on": [
            "みょう",
            "めい"
        ],
        "kun": [
            "な"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%90%8D#Kanji",
        "meanings": [
            "name"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "名前",
                "kana": [
                    "なまえ"
                ],
                "english": [
                    "name",
                    "full name"
                ]
            },
            {
                "value": "名誉",
                "kana": [
                    "めいよ"
                ],
                "english": [
                    "honour",
                    "prestige"
                ]
            },
            {
                "value": "指名",
                "kana": [
                    "しめい"
                ],
                "english": [
                    "nominate",
                    "designate"
                ]
            },
            {
                "value": "氏名",
                "kana": [
                    "しめい"
                ],
                "english": [
                    "full name",
                    "identity"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "木",
        "on": [
            "もく",
            "ぼく"
        ],
        "kun": [
            "き"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%A8#Kanji",
        "meanings": [
            "tree",
            "wood"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "青木",
                "kana": [
                    "あおき"
                ],
                "english": [
                    "Japanese laurel",
                    "spotted laurel"
                ]
            },
            {
                "value": "木造",
                "kana": [
                    "もくぞう"
                ],
                "english": [
                    "wooden",
                    "made of wood"
                ]
            },
            {
                "value": "土木",
                "kana": [
                    "どぼく"
                ],
                "english": [
                    "public works"
                ]
            },
            {
                "value": "木材",
                "kana": [
                    "もくざい"
                ],
                "english": [
                    "lumber",
                    "timber",
                    "wood"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "目",
        "on": [
            "もく"
        ],
        "kun": [
            "め"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9B%AE#Kanji",
        "meanings": [
            "eye",
            "look"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "目的",
                "kana": [
                    "もくてき"
                ],
                "english": [
                    "purpose",
                    "goal",
                    "aim",
                    "objective",
                    "intention"
                ]
            },
            {
                "value": "目標",
                "kana": [
                    "もくひょう"
                ],
                "english": [
                    "mark",
                    "objective",
                    "target"
                ]
            },
            {
                "value": "注目",
                "kana": [
                    "ちゅうもく"
                ],
                "english": [
                    "notice",
                    "attention",
                    "observation"
                ]
            },
            {
                "value": "項目",
                "kana": [
                    "こうもく"
                ],
                "english": [
                    "item, entry"
                ]
            },
            {
                "value": "名目",
                "kana": [
                    "めいもく",
                    "みょうもく"
                ],
                "english": [
                    "name",
                    "title",
                    "appellation"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "夕",
        "on": [
            "せき"
        ],
        "kun": [
            "ゆう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%95#Kanji",
        "meanings": [
            "evening"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 3,
        "examples": [
            {
                "value": "夕",
                "kana": [
                    "ゆう",
                    "ゆうべ",
                    "さくや"
                ],
                "english": [
                    "evening",
                    "last night"
                ]
            },
            {
                "value": "夕食",
                "kana": [
                    "ゆうしょく"
                ],
                "english": [
                    "evening meal",
                    "dinner"
                ]
            },
            {
                "value": "夕方",
                "kana": [
                    "ゆうがた"
                ],
                "english": [
                    "evening"
                ]
            },
            {
                "value": "夕刊",
                "kana": [
                    "ゆうかん"
                ],
                "english": [
                    "evening paper"
                ]
            },
            {
                "value": "夕べ",
                "kana": [
                    "ゆう",
                    "ゆうべ",
                    "さくや"
                ],
                "english": [
                    "evening",
                    "last night"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "立",
        "on": [
            "りつ"
        ],
        "kun": [
            "たつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%AB%8B#Kanji",
        "meanings": [
            "stand up"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "立場",
                "kana": [
                    "たちば"
                ],
                "english": [
                    "standpoint",
                    "position",
                    "situation"
                ]
            },
            {
                "value": "連立",
                "kana": [
                    "れんりつ"
                ],
                "english": [
                    "alliance",
                    "coalition"
                ]
            },
            {
                "value": "国立",
                "kana": [
                    "こくりつ"
                ],
                "english": [
                    "national"
                ]
            },
            {
                "value": "成立",
                "kana": [
                    "せいりつ"
                ],
                "english": [
                    "coming into existence",
                    "arrangements"
                ]
            },
            {
                "value": "対立",
                "kana": [
                    "たいりつ"
                ],
                "english": [
                    "confrontation",
                    "opposition",
                    "antagonism"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "力",
        "on": [
            "りき",
            "りょく"
        ],
        "kun": [
            "ちから"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8A%9B#Kanji",
        "meanings": [
            "power",
            "strong"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 2,
        "examples": [
            {
                "value": "勢力",
                "kana": [
                    "せいりょく"
                ],
                "english": [
                    "influence",
                    "power",
                    "might",
                    "strength",
                    "potency"
                ]
            },
            {
                "value": "努力",
                "kana": [
                    "どりょく"
                ],
                "english": [
                    "great effort",
                    "exertion",
                    "endeavour",
                    "endeavor"
                ]
            },
            {
                "value": "協力",
                "kana": [
                    "きょうりょく"
                ],
                "english": [
                    "cooperation",
                    "collaboration"
                ]
            },
            {
                "value": "権力",
                "kana": [
                    "けんりょく"
                ],
                "english": [
                    "(political) power",
                    "authority",
                    "influence"
                ]
            },
            {
                "value": "原子力",
                "kana": [
                    "げんしりょく"
                ],
                "english": [
                    "atomic energy"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "林",
        "on": [
            "りん"
        ],
        "kun": [
            "はやし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9E%97#Kanji",
        "meanings": [
            "woods",
            "grove"
        ],
        "grade": 1,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "林",
                "kana": [
                    "はやし"
                ],
                "english": [
                    "woods",
                    "forest",
                    "copse",
                    "thicket"
                ]
            },
            {
                "value": "森林",
                "kana": [
                    "しんりん"
                ],
                "english": [
                    "forest",
                    "woods"
                ]
            },
            {
                "value": "農林",
                "kana": [
                    "のうりん"
                ],
                "english": [
                    "agriculture and forestry"
                ]
            },
            {
                "value": "山林",
                "kana": [
                    "さんりん"
                ],
                "english": [
                    "mountain forest",
                    "mountains and forest"
                ]
            },
            {
                "value": "林業",
                "kana": [
                    "りんぎょう"
                ],
                "english": [
                    "forestry"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "六",
        "on": [
            "ろく"
        ],
        "kun": [
            "む"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%AD#Kanji",
        "meanings": [
            "six"
        ],
        "grade": 1,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "六",
                "kana": [
                    "ろく",
                    "む",
                    "むう"
                ],
                "english": [
                    "six"
                ]
            },
            {
                "value": "六月",
                "kana": [
                    "ろくがつ"
                ],
                "english": [
                    "June"
                ]
            },
            {
                "value": "六十",
                "kana": [
                    "ろくじゅう",
                    "むそ"
                ],
                "english": [
                    "sixty"
                ]
            },
            {
                "value": "六十四分音符",
                "kana": [
                    "ろくじゅうしぶおんぷ"
                ],
                "english": [
                    "64th note"
                ]
            },
            {
                "value": "十六",
                "kana": [
                    "じゅうろく"
                ],
                "english": [
                    "sixteen"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "引",
        "on": [
            "いん"
        ],
        "kun": [
            "ひく",
            "ひける"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%95#Kanji",
        "meanings": [
            "pull",
            "tug",
            "jerk",
            "admit",
            "install",
            "quote",
            "refer to"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "取引",
                "kana": [
                    "とりひき"
                ],
                "english": [
                    "transactions",
                    "dealings",
                    "business"
                ]
            },
            {
                "value": "引き下げ",
                "kana": [
                    "ひきさげ"
                ],
                "english": [
                    "reduction",
                    "cut"
                ]
            },
            {
                "value": "引き上げ",
                "kana": [
                    "ひきあげ"
                ],
                "english": [
                    "pulling up",
                    "drawing up",
                    "salvage"
                ]
            },
            {
                "value": "引退",
                "kana": [
                    "いんたい"
                ],
                "english": [
                    "retire"
                ]
            },
            {
                "value": "隠し引き出し",
                "kana": [
                    "かくしひきだし"
                ],
                "english": [
                    "secret withdrawal"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "羽",
        "on": [
            "う"
        ],
        "kun": [
            "は",
            "はね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%BE%BD#Kanji",
        "meanings": [
            "feathers",
            "counter for birds",
            "rabbits"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "羽",
                "kana": [
                    "わ",
                    "ば",
                    "ぱ"
                ],
                "english": [
                    "counter for birds and rabbits"
                ]
            },
            {
                "value": "羽根",
                "kana": [
                    "はね"
                ],
                "english": [
                    "feather",
                    "plume",
                    "wing",
                    "blade",
                    "fan",
                    "propeller"
                ]
            },
            {
                "value": "羽毛",
                "kana": [
                    "うもう"
                ],
                "english": [
                    "feathers",
                    "plumage",
                    "down"
                ]
            },
            {
                "value": "羽目",
                "kana": [
                    "はめ"
                ],
                "english": [
                    "panel",
                    "wainscoting",
                    "wainscotting",
                    "plight",
                    "fix"
                ]
            },
            {
                "value": "白羽",
                "kana": [
                    "しらは"
                ],
                "english": [
                    "white feather"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "雲",
        "on": [
            "うん"
        ],
        "kun": [
            "くも"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9B%B2#Kanji",
        "meanings": [
            "cloud"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "雲",
                "kana": [
                    "くも"
                ],
                "english": [
                    "cloud"
                ]
            },
            {
                "value": "暗雲",
                "kana": [
                    "あんうん"
                ],
                "english": [
                    "dark clouds"
                ]
            },
            {
                "value": "雲行き",
                "kana": [
                    "くもゆき"
                ],
                "english": [
                    "weather",
                    "look of the sky",
                    "situation"
                ]
            },
            {
                "value": "青雲",
                "kana": [
                    "せいうん"
                ],
                "english": [
                    "blue sky",
                    "high rank"
                ]
            },
            {
                "value": "星雲",
                "kana": [
                    "せいうん"
                ],
                "english": [
                    "nebula",
                    "galaxy"
                ]
            }
        ],
        "tags": [
            "weather"
        ]
    },
    {
        "name": "園",
        "on": [
            "えん"
        ],
        "kun": [
            "その"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9C%92#Kanji",
        "meanings": [
            "park",
            "garden",
            "yard",
            "farm"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 13,
        "examples": [
            {
                "value": "園",
                "kana": [
                    "その",
                    "えん"
                ],
                "english": [
                    "garden",
                    "orchard",
                    "park"
                ]
            },
            {
                "value": "公園",
                "kana": [
                    "こうえん"
                ],
                "english": [
                    "(public) park"
                ]
            },
            {
                "value": "学園",
                "kana": [
                    "がくえん"
                ],
                "english": [
                    "academy",
                    "campus"
                ]
            },
            {
                "value": "動物園",
                "kana": [
                    "どうぶつえん"
                ],
                "english": [
                    "zoo",
                    "zoological gardens"
                ]
            },
            {
                "value": "幼稚園",
                "kana": [
                    "ようちえん"
                ],
                "english": [
                    "kindergarten"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "遠",
        "on": [
            "えん",
            "おん"
        ],
        "kun": [
            "とおい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%81%A0#Kanji",
        "meanings": [
            "distant",
            "far"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "遠",
                "kana": [
                    "とお"
                ],
                "english": [
                    "distant"
                ]
            },
            {
                "value": "永遠",
                "kana": [
                    "えいえん"
                ],
                "english": [
                    "eternity",
                    "perpetuity",
                    "immortality",
                    "permanence"
                ]
            },
            {
                "value": "遠征",
                "kana": [
                    "えんせい"
                ],
                "english": [
                    "expedition",
                    "campaign",
                    "(performer’s) tour"
                ]
            },
            {
                "value": "望遠鏡",
                "kana": [
                    "ぼうえんきょう"
                ],
                "english": [
                    "telescope"
                ]
            },
            {
                "value": "遠隔",
                "kana": [
                    "えんかく"
                ],
                "english": [
                    "distant",
                    "remote",
                    "isolated"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "黄",
        "on": [
            "おう",
            "こう"
        ],
        "kun": [
            "き",
            "こ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%BB%84#Kanji",
        "meanings": [
            "yellow"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "黄",
                "kana": [
                    "き"
                ],
                "english": [
                    "yellow"
                ]
            },
            {
                "value": "黄金",
                "kana": [
                    "おうごん",
                    "こがね",
                    "きがね",
                    "くがね"
                ],
                "english": [
                    "gold"
                ]
            },
            {
                "value": "硫黄",
                "kana": [
                    "いおう"
                ],
                "english": [
                    "sulfur (S), sulphur"
                ]
            },
            {
                "value": "黄色",
                "kana": [
                    "きいろ",
                    "こうしょく",
                    "おうしょく"
                ],
                "english": [
                    "yellow, amber"
                ]
            },
            {
                "value": "黄金時代",
                "kana": [
                    "おうごんじだい"
                ],
                "english": [
                    "Golden Age"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "何",
        "on": [
            "か"
        ],
        "kun": [
            "なに"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BD%95#Kanji",
        "meanings": [
            "what"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "何",
                "kana": [
                    "なに",
                    "なん"
                ],
                "english": [
                    "what how many (some counter)"
                ]
            },
            {
                "value": "何か",
                "kana": [
                    "なにか",
                    "なんか"
                ],
                "english": [
                    "something"
                ]
            },
            {
                "value": "何も",
                "kana": [
                    "なにも"
                ],
                "english": [
                    "nothing",
                    "not any"
                ]
            },
            {
                "value": "何とか",
                "kana": [
                    "なんとか"
                ],
                "english": [
                    "something",
                    "something or other"
                ]
            },
            {
                "value": "何の",
                "kana": [
                    "どの"
                ],
                "english": [
                    "which",
                    "what (way)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "夏",
        "on": [
            "げ",
            "か"
        ],
        "kun": [
            "なつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%8F#Kanji",
        "meanings": [
            "summer"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "夏",
                "kana": [
                    "なつ"
                ],
                "english": [
                    "summer"
                ]
            },
            {
                "value": "夏休み",
                "kana": [
                    "なつやすみ"
                ],
                "english": [
                    "summer vacation",
                    "summer holiday"
                ]
            },
            {
                "value": "今夏",
                "kana": [
                    "こんか"
                ],
                "english": [
                    "this summer",
                    "next summer",
                    "last summer"
                ]
            },
            {
                "value": "冷夏",
                "kana": [
                    "れいか"
                ],
                "english": [
                    "a cool summer"
                ]
            },
            {
                "value": "夏場",
                "kana": [
                    "なつば"
                ],
                "english": [
                    "summertime"
                ]
            }
        ],
        "tags": [
            "season"
        ]
    },
    {
        "name": "家",
        "on": [
            "け",
            "か"
        ],
        "kun": [
            "いえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AE%B6#Kanji",
        "meanings": [
            "house",
            "home"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "家族",
                "kana": [
                    "かぞく"
                ],
                "english": [
                    "family",
                    "members of a family"
                ]
            },
            {
                "value": "家庭",
                "kana": [
                    "かてい"
                ],
                "english": [
                    "home",
                    "family",
                    "household"
                ]
            },
            {
                "value": "国家",
                "kana": [
                    "こっか"
                ],
                "english": [
                    "state",
                    "country",
                    "nation"
                ]
            },
            {
                "value": "政治家",
                "kana": [
                    "せいじか"
                ],
                "english": [
                    "politician",
                    "statesman"
                ]
            },
            {
                "value": "作家",
                "kana": [
                    "さっか"
                ],
                "english": [
                    "author",
                    "writer",
                    "novelist",
                    "artist"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "科",
        "on": [
            "か"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E7%A7%91#Kanji",
        "meanings": [
            "section",
            "department",
            "course"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "科",
                "kana": [
                    "か"
                ],
                "english": [
                    "department",
                    "section"
                ]
            },
            {
                "value": "科学",
                "kana": [
                    "かがく"
                ],
                "english": [
                    "science"
                ]
            },
            {
                "value": "教科書",
                "kana": [
                    "きょうかしょ"
                ],
                "english": [
                    "textbook",
                    "text book"
                ]
            },
            {
                "value": "学科",
                "kana": [
                    "がっか"
                ],
                "english": [
                    "study subject",
                    "course of study"
                ]
            },
            {
                "value": "外科",
                "kana": [
                    "げか"
                ],
                "english": [
                    "surgical department"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "歌",
        "on": [
            "か"
        ],
        "kun": [
            "うた",
            "うたう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AD%8C#Kanji",
        "meanings": [
            "song",
            "sing"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 14,
        "examples": [
            {
                "value": "歌",
                "kana": [
                    "うた"
                ],
                "english": [
                    "song",
                    "classical Japanese poetry (esp. tanka)"
                ]
            },
            {
                "value": "歌手",
                "kana": [
                    "かしゅ"
                ],
                "english": [
                    "singer"
                ]
            },
            {
                "value": "歌舞伎",
                "kana": [
                    "かぶき"
                ],
                "english": [
                    "kabuki",
                    "Japanese classical drama"
                ]
            },
            {
                "value": "短歌",
                "kana": [
                    "たんか"
                ],
                "english": [
                    "tanka",
                    "syllable Japanese poem"
                ]
            },
            {
                "value": "歌劇",
                "kana": [
                    "かげき"
                ],
                "english": [
                    "opera"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "画",
        "on": [
            "が",
            "かく"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E7%94%BB#Kanji",
        "meanings": [
            "brush",
            "stroke"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "画",
                "kana": [
                    "かく"
                ],
                "english": [
                    "stroke (of a kanji)"
                ]
            },
            {
                "value": "映画",
                "kana": [
                    "えいが"
                ],
                "english": [
                    "movie",
                    "film"
                ]
            },
            {
                "value": "計画",
                "kana": [
                    "けいかく"
                ],
                "english": [
                    "plan",
                    "project",
                    "schedule",
                    "scheme",
                    "program"
                ]
            },
            {
                "value": "企画",
                "kana": [
                    "きかく"
                ],
                "english": [
                    "planning",
                    "project",
                    "plan",
                    "design"
                ]
            },
            {
                "value": "絵画",
                "kana": [
                    "かいが"
                ],
                "english": [
                    "picture",
                    "painting"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "会",
        "on": [
            "え",
            "かい"
        ],
        "kun": [
            "あう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BC%9A#Kanji",
        "meanings": [
            "meet",
            "party",
            "association"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "委員会",
                "kana": [
                    "いいんかい"
                ],
                "english": [
                    "committee",
                    "commission",
                    "board",
                    "panel"
                ]
            },
            {
                "value": "会員",
                "kana": [
                    "かいいん"
                ],
                "english": [
                    "member",
                    "the membership"
                ]
            },
            {
                "value": "会議",
                "kana": [
                    "かいぎ"
                ],
                "english": [
                    "meeting",
                    "conference",
                    "session",
                    "assembly"
                ]
            },
            {
                "value": "会見",
                "kana": [
                    "かいけん"
                ],
                "english": [
                    "interview",
                    "audience"
                ]
            },
            {
                "value": "会社",
                "kana": [
                    "かいしゃ"
                ],
                "english": [
                    "company",
                    "corporation",
                    "workplace"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "回",
        "on": [
            "え",
            "かい"
        ],
        "kun": [
            "まわす",
            "まわる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9B%9E#Kanji",
        "meanings": [
            "times",
            "round",
            "game",
            "revolve",
            "counter for occurrences"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "回",
                "kana": [
                    "かい"
                ],
                "english": [
                    "counter for occurrences"
                ]
            },
            {
                "value": "回復",
                "kana": [
                    "かいふく"
                ],
                "english": [
                    "recovery (from illness)",
                    "improvement"
                ]
            },
            {
                "value": "今回",
                "kana": [
                    "こんかい"
                ],
                "english": [
                    "now",
                    "this time",
                    "lately"
                ]
            },
            {
                "value": "回答",
                "kana": [
                    "かいとう"
                ],
                "english": [
                    "reply",
                    "answer"
                ]
            },
            {
                "value": "前回",
                "kana": [
                    "ぜんかい"
                ],
                "english": [
                    "last time",
                    "last installment"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "海",
        "on": [
            "かい"
        ],
        "kun": [
            "うみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B5%B7#Kanji",
        "meanings": [
            "sea",
            "ocean"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "海",
                "kana": [
                    "うみ",
                    "み",
                    "わた",
                    "わだ"
                ],
                "english": [
                    "sea",
                    "beach"
                ]
            },
            {
                "value": "海外",
                "kana": [
                    "かいがい"
                ],
                "english": [
                    "foreign",
                    "abroad",
                    "overseas"
                ]
            },
            {
                "value": "北海道",
                "kana": [
                    "ほっかいどう"
                ],
                "english": [
                    "Hokkaido"
                ]
            },
            {
                "value": "東海",
                "kana": [
                    "とうかい"
                ],
                "english": [
                    "region south of Tokyo on Pacific Ocean side of Japan, eastern sea"
                ]
            },
            {
                "value": "海軍",
                "kana": [
                    "かいぐん"
                ],
                "english": [
                    "navy"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "絵",
        "on": [
            "え",
            "かい"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E7%B5%B5#Kanji",
        "meanings": [
            "picture",
            "drawing",
            "painting",
            "sketch"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "絵",
                "kana": [
                    "え"
                ],
                "english": [
                    "picture",
                    "drawing",
                    "painting",
                    "sketch"
                ]
            },
            {
                "value": "絵画",
                "kana": [
                    "かいが"
                ],
                "english": [
                    "picture",
                    "painting"
                ]
            },
            {
                "value": "絵本",
                "kana": [
                    "えほん"
                ],
                "english": [
                    "picture book"
                ]
            },
            {
                "value": "絵の具",
                "kana": [
                    "えのぐ"
                ],
                "english": [
                    "colours, paints"
                ]
            },
            {
                "value": "浮世絵",
                "kana": [
                    "うきよえ"
                ],
                "english": [
                    "ukiyoe (colour print of everyday life in the Edoperiod)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "外",
        "on": [
            "がい"
        ],
        "kun": [
            "そと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%96#Kanji",
        "meanings": [
            "outside"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "外",
                "kana": [
                    "ほか"
                ],
                "english": [
                    "other places and things",
                    "the rest"
                ]
            },
            {
                "value": "海外",
                "kana": [
                    "かいがい"
                ],
                "english": [
                    "foreign",
                    "abroad",
                    "overseas"
                ]
            },
            {
                "value": "外交",
                "kana": [
                    "がいこう"
                ],
                "english": [
                    "diplomacy"
                ]
            },
            {
                "value": "外国",
                "kana": [
                    "がいこく"
                ],
                "english": [
                    "foreign country"
                ]
            },
            {
                "value": "外国人",
                "kana": [
                    "がいこくじん"
                ],
                "english": [
                    "foreigner"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "角",
        "on": [
            "かく"
        ],
        "kun": [
            "かど",
            "つの"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A7%92#Kanji",
        "meanings": [
            "angle",
            "corner",
            "square",
            "horn",
            "antlers"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "角",
                "kana": [
                    "かど"
                ],
                "english": [
                    "corner",
                    "edge"
                ]
            },
            {
                "value": "多角",
                "kana": [
                    "たかく"
                ],
                "english": [
                    "many sided",
                    "versatile",
                    "polygonal",
                    "diversified"
                ]
            },
            {
                "value": "一角",
                "kana": [
                    "いっかく",
                    "イッカク"
                ],
                "english": [
                    "corner",
                    "section",
                    "point",
                    "one horn"
                ]
            },
            {
                "value": "角度",
                "kana": [
                    "かくど"
                ],
                "english": [
                    "angle"
                ]
            },
            {
                "value": "内角",
                "kana": [
                    "ないかく"
                ],
                "english": [
                    "interior angle",
                    "inside corner"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "楽",
        "on": [
            "がく",
            "らく"
        ],
        "kun": [
            "たのしい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%A5%BD#Kanji",
        "meanings": [
            "music",
            "pleasure",
            "comfort"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 13,
        "examples": [
            {
                "value": "楽しみ",
                "kana": [
                    "たのしみ"
                ],
                "english": [
                    "enjoyment",
                    "pleasure",
                    "diversion",
                    "amusement"
                ]
            },
            {
                "value": "音楽",
                "kana": [
                    "おんがく"
                ],
                "english": [
                    "music",
                    "musical movement"
                ]
            },
            {
                "value": "楽",
                "kana": [
                    "らく"
                ],
                "english": [
                    "comfort",
                    "ease"
                ]
            },
            {
                "value": "楽器",
                "kana": [
                    "がっき"
                ],
                "english": [
                    "musical instrument"
                ]
            },
            {
                "value": "倶楽部",
                "kana": [
                    "くらぶ",
                    "クラブ"
                ],
                "english": [
                    "club",
                    "fraternity",
                    "sorority",
                    "clubhouse"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "活",
        "on": [
            "かつ"
        ],
        "kun": [
            "いきる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B4%BB#Kanji",
        "meanings": [
            "active",
            "lively",
            "living",
            "being helped"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "活動",
                "kana": [
                    "かつどう"
                ],
                "english": [
                    "action",
                    "activity"
                ]
            },
            {
                "value": "生活",
                "kana": [
                    "せいかつ"
                ],
                "english": [
                    "living",
                    "life (one’s daily existence)"
                ]
            },
            {
                "value": "活発",
                "kana": [
                    "かっぱつ"
                ],
                "english": [
                    "vigour",
                    "active",
                    "lively"
                ]
            },
            {
                "value": "活性",
                "kana": [
                    "かっせい"
                ],
                "english": [
                    "activity"
                ]
            },
            {
                "value": "活躍",
                "kana": [
                    "かつやく"
                ],
                "english": [
                    "activity (esp. energetic)",
                    "great efforts"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "間",
        "on": [
            "かん",
            "けん"
        ],
        "kun": [
            "あいだ",
            "ま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%96%93#Kanji",
        "meanings": [
            "interval",
            "space"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 12,
        "examples": [
            {
                "value": "間",
                "kana": [
                    "あいだ"
                ],
                "english": [
                    "space (between)",
                    "gap",
                    "interval",
                    "distance"
                ]
            },
            {
                "value": "間もなく",
                "kana": [
                    "まもなく"
                ],
                "english": [
                    "soon",
                    "before long",
                    "in a short time"
                ]
            },
            {
                "value": "期間",
                "kana": [
                    "きかん"
                ],
                "english": [
                    "period",
                    "term",
                    "interval"
                ]
            },
            {
                "value": "時間",
                "kana": [
                    "じかん"
                ],
                "english": [
                    "time",
                    "hours"
                ]
            },
            {
                "value": "人間",
                "kana": [
                    "にんげん"
                ],
                "english": [
                    "human being",
                    "man",
                    "person"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "丸",
        "on": [
            "がん"
        ],
        "kun": [
            "まる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%B8#Kanji",
        "meanings": [
            "circle",
            "round",
            "full",
            "month",
            "perfection"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 3,
        "examples": [
            {
                "value": "日の丸",
                "kana": [
                    "ひのまる"
                ],
                "english": [
                    "outline of the sun (esp. represented as a redcircle)",
                    "Japanese flag"
                ]
            },
            {
                "value": "丸刈り",
                "kana": [
                    "まるがり"
                ],
                "english": [
                    "close clipping"
                ]
            },
            {
                "value": "丸い",
                "kana": [
                    "まるい",
                    "まろい"
                ],
                "english": [
                    "round",
                    "circular",
                    "spherical",
                    "harmonious",
                    "calm"
                ]
            },
            {
                "value": "丸ごと",
                "kana": [
                    "丸ごと"
                ],
                "english": [
                    "in its entirety",
                    "whole, wholly"
                ]
            },
            {
                "value": "丸太",
                "kana": [
                    "まるた"
                ],
                "english": [
                    "log"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "岩",
        "on": [
            "がん"
        ],
        "kun": [
            "いわ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B2%A9#Kanji",
        "meanings": [
            "boulder",
            "rock",
            "cliff"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "岩",
                "kana": [
                    "いわ",
                    "いわお"
                ],
                "english": [
                    "rock",
                    "crag"
                ]
            },
            {
                "value": "溶岩",
                "kana": [
                    "ようがん"
                ],
                "english": [
                    "lava"
                ]
            },
            {
                "value": "岩間",
                "kana": [
                    "いわま"
                ],
                "english": [
                    "among rocks"
                ]
            },
            {
                "value": "一枚岩",
                "kana": [
                    "いちまいいわ"
                ],
                "english": [
                    "monolithic"
                ]
            },
            {
                "value": "岩石",
                "kana": [
                    "がんせき"
                ],
                "english": [
                    "rock"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "顔",
        "on": [
            "がん"
        ],
        "kun": [
            "かお"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A1%94#Kanji",
        "meanings": [
            "face",
            "expression"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 18,
        "examples": [
            {
                "value": "顔",
                "kana": [
                    "かお"
                ],
                "english": [
                    "face (person)"
                ]
            },
            {
                "value": "知らん顔",
                "kana": [
                    "しらんかお"
                ],
                "english": [
                    "unconcerned air",
                    "indifference"
                ]
            },
            {
                "value": "笑顔",
                "kana": [
                    "えがお"
                ],
                "english": [
                    "smiling face",
                    "smile"
                ]
            },
            {
                "value": "顔ぶれ",
                "kana": [
                    "かおぶれ"
                ],
                "english": [
                    "personnel",
                    "member"
                ]
            },
            {
                "value": "似顔",
                "kana": [
                    "にがお"
                ],
                "english": [
                    "portrait",
                    "likeness"
                ]
            }
        ],
        "tags": [
            "body"
        ]
    },
    {
        "name": "帰",
        "on": [
            "き"
        ],
        "kun": [
            "かえる",
            "かえす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B8%B0#Kanji",
        "meanings": [
            "return",
            "homecoming",
            "arrive at",
            "lead to"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "帰り",
                "kana": [
                    "かえり"
                ],
                "english": [
                    "return",
                    "coming back"
                ]
            },
            {
                "value": "帰国",
                "kana": [
                    "きこく"
                ],
                "english": [
                    "return to one’s country"
                ]
            },
            {
                "value": "復帰",
                "kana": [
                    "ふっき"
                ],
                "english": [
                    "return",
                    "comeback",
                    "reinstatement"
                ]
            },
            {
                "value": "帰還",
                "kana": [
                    "きかん"
                ],
                "english": [
                    "repatriation",
                    "(electrical) feedback"
                ]
            },
            {
                "value": "帰宅",
                "kana": [
                    "きたく"
                ],
                "english": [
                    "returning home"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "汽",
        "on": [
            "き"
        ],
        "kun": [
            "みずけ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B1%BD#Kanji",
        "meanings": [
            "vapour",
            "steam"
        ],
        "grade": 2,
        "jlpt": 1,
        "strokes": 7,
        "examples": [
            {
                "value": "汽車",
                "kana": [
                    "きしゃ"
                ],
                "english": [
                    "train (steam)"
                ]
            },
            {
                "value": "汽船",
                "kana": [
                    "きせん"
                ],
                "english": [
                    "steamship",
                    "steamboat",
                    "steamer"
                ]
            },
            {
                "value": "汽笛",
                "kana": [
                    "きてき"
                ],
                "english": [
                    "steam whistle"
                ]
            },
            {
                "value": "汽車賃",
                "kana": [
                    "きしゃちん"
                ],
                "english": [
                    "train fare"
                ]
            },
            {
                "value": "汽水",
                "kana": [
                    "きすい"
                ],
                "english": [
                    "brackish water"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "記",
        "on": [
            "き"
        ],
        "kun": [
            "しるす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A8%98#Kanji",
        "meanings": [
            "record",
            "scribe",
            "account",
            "narrative"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "記事",
                "kana": [
                    "きじ"
                ],
                "english": [
                    "article",
                    "news story",
                    "report",
                    "account"
                ]
            },
            {
                "value": "記者",
                "kana": [
                    "きしゃ"
                ],
                "english": [
                    "reporter"
                ]
            },
            {
                "value": "記録",
                "kana": [
                    "きろく"
                ],
                "english": [
                    "record",
                    "minutes",
                    "document"
                ]
            },
            {
                "value": "書記",
                "kana": [
                    "しょき"
                ],
                "english": [
                    "clerk",
                    "secretary"
                ]
            },
            {
                "value": "記念",
                "kana": [
                    "きねん"
                ],
                "english": [
                    "commemoration",
                    "memory"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "弓",
        "on": [
            "きゅう"
        ],
        "kun": [
            "たらし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%93#Kanji",
        "meanings": [
            "bow"
        ],
        "grade": 2,
        "jlpt": 1,
        "strokes": 3,
        "examples": [
            {
                "value": "弓",
                "kana": [
                    "ゆみ"
                ],
                "english": [
                    "bow (and arrow)"
                ]
            },
            {
                "value": "洋弓",
                "kana": [
                    "ようきゅう"
                ],
                "english": [
                    "Western style archery"
                ]
            },
            {
                "value": "弓道",
                "kana": [
                    "きゅうどう"
                ],
                "english": [
                    "(Japanese) archery"
                ]
            },
            {
                "value": "弓矢",
                "kana": [
                    "ゆみや",
                    "きゅうし"
                ],
                "english": [
                    "bow and arrow"
                ]
            },
            {
                "value": "弓のこ",
                "kana": [
                    "ゆみのこ"
                ],
                "english": [
                    "hacksaw"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "牛",
        "on": [
            "ぎゅう"
        ],
        "kun": [
            "うし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%89%9B#Kanji",
        "meanings": [
            "cow"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "牛",
                "kana": [
                    "うし",
                    "ぎゅう"
                ],
                "english": [
                    "cattle",
                    "cow",
                    "ox",
                    "oxen",
                    "beef"
                ]
            },
            {
                "value": "牛肉",
                "kana": [
                    "ぎゅうにく"
                ],
                "english": [
                    "beef"
                ]
            },
            {
                "value": "牛乳",
                "kana": [
                    "ぎゅうにゅう"
                ],
                "english": [
                    "cow's milk"
                ]
            },
            {
                "value": "牛歩",
                "kana": [
                    "ぎゅうほ"
                ],
                "english": [
                    "snail’s pace",
                    "slow progress"
                ]
            },
            {
                "value": "和牛",
                "kana": [
                    "わぎゅう"
                ],
                "english": [
                    "Wagyu beef",
                    "Japanese beef"
                ]
            }
        ],
        "tags": [
            "animal"
        ]
    },
    {
        "name": "魚",
        "on": [
            "ご",
            "ぎょ"
        ],
        "kun": [
            "うお",
            "さかな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%AD%9A#Kanji",
        "meanings": [
            "fish"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 11,
        "examples": [
            {
                "value": "魚",
                "kana": [
                    "さかな",
                    "うお"
                ],
                "english": [
                    "fish"
                ]
            },
            {
                "value": "魚介類",
                "kana": [
                    "ぎょかいるい"
                ],
                "english": [
                    "marine products",
                    "seafood",
                    "fish and shellfish"
                ]
            },
            {
                "value": "金魚",
                "kana": [
                    "きんぎょ"
                ],
                "english": [
                    "goldfish"
                ]
            },
            {
                "value": "魚類",
                "kana": [
                    "ぎょるい"
                ],
                "english": [
                    "the fishes"
                ]
            },
            {
                "value": "稚魚",
                "kana": [
                    "ちぎょ"
                ],
                "english": [
                    "fry (young fish)"
                ]
            }
        ],
        "tags": [
            "animal"
        ]
    },
    {
        "name": "京",
        "on": [
            "きょう",
            "けい"
        ],
        "kun": [
            "みやこ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%AC#Kanji",
        "meanings": [
            "capital",
            "x10^16"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "京",
                "kana": [
                    "きょう",
                    "けい"
                ],
                "english": [
                    "imperial captial"
                ]
            },
            {
                "value": "東京",
                "kana": [
                    "とうきょう"
                ],
                "english": [
                    "Tokyo"
                ]
            },
            {
                "value": "北京",
                "kana": [
                    "ぺきん"
                ],
                "english": [
                    "Beijing (China)",
                    "Peking"
                ]
            },
            {
                "value": "京都",
                "kana": [
                    "きょうと"
                ],
                "english": [
                    "Kyoto"
                ]
            },
            {
                "value": "東京証券取引所",
                "kana": [
                    "うきょうしょうけんとりひきじょ"
                ],
                "english": [
                    "Tokyo Stock Exchange (TSE)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "強",
        "on": [
            "きょう"
        ],
        "kun": [
            "つよい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%B7#Kanji",
        "meanings": [
            "strong"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "強さ",
                "kana": [
                    "つよさ"
                ],
                "english": [
                    "strength",
                    "power"
                ]
            },
            {
                "value": "強化",
                "kana": [
                    "きょうか"
                ],
                "english": [
                    "strengthen",
                    "intensify",
                    "reinforce",
                    "solidify"
                ]
            },
            {
                "value": "強制",
                "kana": [
                    "きょうせい"
                ],
                "english": [
                    "obligation",
                    "coercion",
                    "compulsion",
                    "enforcement"
                ]
            },
            {
                "value": "勉強",
                "kana": [
                    "べんきょう"
                ],
                "english": [
                    "study",
                    "diligence",
                    "discount",
                    "reduction"
                ]
            },
            {
                "value": "強める",
                "kana": [
                    "つよめる"
                ],
                "english": [
                    "to strengthen",
                    "to emphasise"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "教",
        "on": [
            "きょう"
        ],
        "kun": [
            "おしえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%95%99#Kanji",
        "meanings": [
            "teach",
            "faith",
            "doctorine"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "教育",
                "kana": [
                    "きょういく"
                ],
                "english": [
                    "training",
                    "education"
                ]
            },
            {
                "value": "教授",
                "kana": [
                    "きょうじゅ"
                ],
                "english": [
                    "professor",
                    "teaching",
                    "instruction"
                ]
            },
            {
                "value": "教師",
                "kana": [
                    "きょうし"
                ],
                "english": [
                    "teacher (classroom)"
                ]
            },
            {
                "value": "宗教",
                "kana": [
                    "しゅうきょう"
                ],
                "english": [
                    "religion"
                ]
            },
            {
                "value": "教室",
                "kana": [
                    "きょうしつ"
                ],
                "english": [
                    "classroom"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "近",
        "on": [
            "きん"
        ],
        "kun": [
            "ちかい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%BF%91#Kanji",
        "meanings": [
            "near",
            "early",
            "akin",
            "tantamount"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "最近",
                "kana": [
                    "さいきん"
                ],
                "english": [
                    "latest",
                    "most recent",
                    "nowadays"
                ]
            },
            {
                "value": "近代",
                "kana": [
                    "きんだい"
                ],
                "english": [
                    "present day",
                    "modern times"
                ]
            },
            {
                "value": "付近",
                "kana": [
                    "ふきん"
                ],
                "english": [
                    "neighbourhood",
                    "vicinity"
                ]
            },
            {
                "value": "近鉄",
                "kana": [
                    "きんてつ"
                ],
                "english": [
                    "Kinki Nippon Tetsudou (railway co.)"
                ]
            },
            {
                "value": "側近",
                "kana": [
                    "そっきん"
                ],
                "english": [
                    "close associate",
                    "close aide"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "兄",
        "on": [
            "きょう",
            "けい"
        ],
        "kun": [
            "あに"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%84#Kanji",
        "meanings": [
            "older brother"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "兄",
                "kana": [
                    "あに"
                ],
                "english": [
                    "older brother"
                ]
            },
            {
                "value": "兄弟",
                "kana": [
                    "きょうだい",
                    "けいてい"
                ],
                "english": [
                    "siblings",
                    "brothers and sisters"
                ]
            },
            {
                "value": "兄ちゃん",
                "kana": [
                    "あんちゃん"
                ],
                "english": [
                    "(my) older brother"
                ]
            },
            {
                "value": "兄さん",
                "kana": [
                    "にいさん",
                    "あにさん"
                ],
                "english": [
                    "older brother",
                    "elder brother"
                ]
            },
            {
                "value": "実兄",
                "kana": [
                    "じっけい"
                ],
                "english": [
                    "one’s own elder brother"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "形",
        "on": [
            "ぎょう",
            "けい"
        ],
        "kun": [
            "かた",
            "かたち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BD%A2#Kanji",
        "meanings": [
            "shape",
            "form",
            "style"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "形",
                "kana": [
                    "かたち",
                    "よう"
                ],
                "english": [
                    "form",
                    "shape",
                    "figure",
                    "visage"
                ]
            },
            {
                "value": "形式",
                "kana": [
                    "けいしき"
                ],
                "english": [
                    "form (as opposed to substance)",
                    "formality"
                ]
            },
            {
                "value": "形成",
                "kana": [
                    "けいせい"
                ],
                "english": [
                    "formation",
                    "molding",
                    "taking form"
                ]
            },
            {
                "value": "形態",
                "kana": [
                    "けいたい"
                ],
                "english": [
                    "form",
                    "shape",
                    "figure"
                ]
            },
            {
                "value": "人形",
                "kana": [
                    "にんぎょう"
                ],
                "english": [
                    "doll",
                    "puppet",
                    "figure"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "計",
        "on": [
            "けい"
        ],
        "kun": [
            "はかる",
            "はからう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A8%88#Kanji",
        "meanings": [
            "plot",
            "plan",
            "scheme",
            "measure"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "計",
                "kana": [
                    "けい"
                ],
                "english": [
                    "plan",
                    "meter",
                    "measuring device"
                ]
            },
            {
                "value": "計画",
                "kana": [
                    "けいかく"
                ],
                "english": [
                    "plan",
                    "project",
                    "schedule",
                    "scheme",
                    "program"
                ]
            },
            {
                "value": "合計",
                "kana": [
                    "ごうけい"
                ],
                "english": [
                    "sum total",
                    "total amount"
                ]
            },
            {
                "value": "設計",
                "kana": [
                    "せっけい"
                ],
                "english": [
                    "plan, design",
                    "layout"
                ]
            },
            {
                "value": "計算",
                "kana": [
                    "けいさん"
                ],
                "english": [
                    "calculation",
                    "reckoning",
                    "count",
                    "forecast"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "元",
        "on": [
            "げん",
            "げん"
        ],
        "kun": [
            "もと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%83#Kanji",
        "meanings": [
            "beginning",
            "former time",
            "origin"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "元",
                "kana": [
                    "もと"
                ],
                "english": [
                    "concern",
                    "interest"
                ]
            },
            {
                "value": "地元",
                "kana": [
                    "じもと"
                ],
                "english": [
                    "centre",
                    "middle",
                    "heart",
                    "core",
                    "focus"
                ]
            },
            {
                "value": "元首",
                "kana": [
                    "げんしゅ"
                ],
                "english": [
                    "heart failure"
                ]
            },
            {
                "value": "元気",
                "kana": [
                    "げんき"
                ],
                "english": [
                    "from the bottom of one’s heart"
                ]
            },
            {
                "value": "元日",
                "kana": [
                    "がんじつ",
                    "がんにち"
                ],
                "english": [
                    "heart"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "原",
        "on": [
            "げん"
        ],
        "kun": [
            "はら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8E%9F#Kanji",
        "meanings": [
            "meadow",
            "original",
            "primitive",
            "field",
            "plain",
            "tundra"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "原因",
                "kana": [
                    "げんいん"
                ],
                "english": [
                    "cause",
                    "origin",
                    "source"
                ]
            },
            {
                "value": "原則",
                "kana": [
                    "げんそく"
                ],
                "english": [
                    "principle",
                    "general rule"
                ]
            },
            {
                "value": "原子力",
                "kana": [
                    "げんしりょく"
                ],
                "english": [
                    "atomic energy"
                ]
            },
            {
                "value": "原告",
                "kana": [
                    "げんこく"
                ],
                "english": [
                    "plaintiff",
                    "accuser",
                    "prosecutor"
                ]
            },
            {
                "value": "原発",
                "kana": [
                    "げんぱつ"
                ],
                "english": [
                    "nuclear power plant",
                    "nuclear power supply"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "言",
        "on": [
            "げん",
            "ごん"
        ],
        "kun": [
            "こと",
            "いう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A8%80#Kanji",
        "meanings": [
            "say"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "言わば",
                "kana": [
                    "いわば"
                ],
                "english": [
                    "so to speak",
                    "so to call it",
                    "as it were"
                ]
            },
            {
                "value": "言う",
                "kana": [
                    "いう",
                    "ゆう"
                ],
                "english": [
                    "to say",
                    "to call (i.e. to give a name)"
                ]
            },
            {
                "value": "言",
                "kana": [
                    "げん",
                    "こと"
                ],
                "english": [
                    "word",
                    "remark",
                    "statement"
                ]
            },
            {
                "value": "言葉",
                "kana": [
                    "ことば",
                    "けとば"
                ],
                "english": [
                    "language",
                    "dialect",
                    "word",
                    "phrase",
                    "term"
                ]
            },
            {
                "value": "宣言",
                "kana": [
                    "せんげん"
                ],
                "english": [
                    "declaration",
                    "proclamation",
                    "announcement"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "古",
        "on": [
            "こ"
        ],
        "kun": [
            "ふるい",
            "ふるす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%A4#Kanji",
        "meanings": [
            "old"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "古",
                "kana": [
                    "いにしえ"
                ],
                "english": [
                    "antiquity",
                    "ancient times"
                ]
            },
            {
                "value": "古代",
                "kana": [
                    "こだい"
                ],
                "english": [
                    "ancient times"
                ]
            },
            {
                "value": "古典",
                "kana": [
                    "こてん"
                ],
                "english": [
                    "old book",
                    "classics",
                    "classic"
                ]
            },
            {
                "value": "古墳",
                "kana": [
                    "こふん"
                ],
                "english": [
                    "ancient tomb"
                ]
            },
            {
                "value": "考古学",
                "kana": [
                    "こうこがく"
                ],
                "english": [
                    "archaeology"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "戸",
        "on": [
            "こ"
        ],
        "kun": [
            "と"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%88%B8#Kanji",
        "meanings": [
            "door",
            "counter for houses"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "戸",
                "kana": [
                    "と"
                ],
                "english": [
                    "door (esp. Japanese style)"
                ]
            },
            {
                "value": "江戸",
                "kana": [
                    "えど"
                ],
                "english": [
                    "old name of Tokyo"
                ]
            },
            {
                "value": "江戸川",
                "kana": [
                    "えどがわ"
                ],
                "english": [
                    "Edo River"
                ]
            },
            {
                "value": "井戸",
                "kana": [
                    "いど"
                ],
                "english": [
                    "water well"
                ]
            },
            {
                "value": "戸惑い",
                "kana": [
                    "とまどい"
                ],
                "english": [
                    "being at sea",
                    "losing one’s bearings"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "午",
        "on": [
            "ご"
        ],
        "kun": [
            "うま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8D%88#Kanji",
        "meanings": [
            "noon",
            "sign of the horse"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "午後",
                "kana": [
                    "ごご"
                ],
                "english": [
                    "afternoon",
                    "p.m"
                ]
            },
            {
                "value": "午前",
                "kana": [
                    "ごぜん"
                ],
                "english": [
                    "morning",
                    "a.m"
                ]
            },
            {
                "value": "正午",
                "kana": [
                    "しょうご"
                ],
                "english": [
                    "noon",
                    "midday"
                ]
            },
            {
                "value": "午",
                "kana": [
                    "うま"
                ],
                "english": [
                    "seventh sign of the Chinese zodiac"
                ]
            },
            {
                "value": "午",
                "kana": [
                    "ひる"
                ],
                "english": [
                    "noon",
                    "midday",
                    "daytime",
                    "lunch"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "後",
        "on": [
            "ご",
            "こう"
        ],
        "kun": [
            "あと",
            "うしろ",
            "のち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BE%8C#Kanji",
        "meanings": [
            "behind",
            "after",
            "back",
            "later"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 9,
        "examples": [
            {
                "value": "後",
                "kana": [
                    "あと"
                ],
                "english": [
                    "behind",
                    "rear",
                    "after",
                    "later",
                    "after one’s death"
                ]
            },
            {
                "value": "午後",
                "kana": [
                    "ごご"
                ],
                "english": [
                    "afternoon",
                    "P.M"
                ]
            },
            {
                "value": "後ろ",
                "kana": [
                    "うしろ"
                ],
                "english": [
                    "back",
                    "behind",
                    "rear"
                ]
            },
            {
                "value": "今後",
                "kana": [
                    "こんご"
                ],
                "english": [
                    "from now on",
                    "hereafter"
                ]
            },
            {
                "value": "最後",
                "kana": [
                    "さいご"
                ],
                "english": [
                    "last",
                    "end",
                    "conclusion"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "語",
        "on": [
            "ご"
        ],
        "kun": [
            "かたらう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%AA%9E#Kanji",
        "meanings": [
            "word",
            "speech",
            "language"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 14,
        "examples": [
            {
                "value": "英語",
                "kana": [
                    "えいご"
                ],
                "english": [
                    "English (language)"
                ]
            },
            {
                "value": "日本語",
                "kana": [
                    "にほんご",
                    "にっぽんご"
                ],
                "english": [
                    "Japanese (language)"
                ]
            },
            {
                "value": "物語",
                "kana": [
                    "ものがたり"
                ],
                "english": [
                    "tale",
                    "story",
                    "legend"
                ]
            },
            {
                "value": "語らう",
                "kana": [
                    "かたらう"
                ],
                "english": [
                    "to talk",
                    "to tell",
                    "to recite",
                    "to pledge"
                ]
            },
            {
                "value": "語る",
                "kana": [
                    "かたる"
                ],
                "english": [
                    "to talk",
                    "to tell",
                    "to recite"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "交",
        "on": [
            "こう"
        ],
        "kun": [
            "まじわる",
            "まじる",
            "かう",
            "かわす",
            "まじえる",
            "まぜる",
            "まざる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%A4#Kanji",
        "meanings": [
            "intersect",
            "mingle",
            "mixing",
            "association"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "外交",
                "kana": [
                    "がいこう"
                ],
                "english": [
                    "diplomacy"
                ]
            },
            {
                "value": "交渉",
                "kana": [
                    "こうしょう"
                ],
                "english": [
                    "negotiations",
                    "discussions",
                    "connection"
                ]
            },
            {
                "value": "交流",
                "kana": [
                    "こうりゅう"
                ],
                "english": [
                    "intercourse",
                    "(cultural) exchange"
                ]
            },
            {
                "value": "交換",
                "kana": [
                    "こうかん"
                ],
                "english": [
                    "exchange",
                    "interchange",
                    "switching",
                    "reciprocity"
                ]
            },
            {
                "value": "交通",
                "kana": [
                    "こうつう"
                ],
                "english": [
                    "communication",
                    "transportation",
                    "traffic"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "光",
        "on": [
            "こう"
        ],
        "kun": [
            "ひかり",
            "ひかる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%89#Kanji",
        "meanings": [
            "light",
            "ray"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "光",
                "kana": [
                    "ひかり"
                ],
                "english": [
                    "light"
                ]
            },
            {
                "value": "観光",
                "kana": [
                    "かんこう"
                ],
                "english": [
                    "sightseeing"
                ]
            },
            {
                "value": "光景",
                "kana": [
                    "こうけい"
                ],
                "english": [
                    "scene",
                    "spectacle"
                ]
            },
            {
                "value": "日光",
                "kana": [
                    "にっこう"
                ],
                "english": [
                    "sunlight"
                ]
            },
            {
                "value": "脚光",
                "kana": [
                    "きゃっこう"
                ],
                "english": [
                    "footlight",
                    "limelight"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "公",
        "on": [
            "こう"
        ],
        "kun": [
            "おおやけ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%AC#Kanji",
        "meanings": [
            "public",
            "prince",
            "official",
            "governmental"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "公園",
                "kana": [
                    "こうえん"
                ],
                "english": [
                    "(public) park"
                ]
            },
            {
                "value": "公演",
                "kana": [
                    "こうえん"
                ],
                "english": [
                    "public performance"
                ]
            },
            {
                "value": "公開",
                "kana": [
                    "こうかい"
                ],
                "english": [
                    "open to the public"
                ]
            },
            {
                "value": "公共",
                "kana": [
                    "こうきょう"
                ],
                "english": [
                    "public",
                    "community",
                    "public service",
                    "society"
                ]
            },
            {
                "value": "公式",
                "kana": [
                    "こうしき"
                ],
                "english": [
                    "formality",
                    "formal",
                    "official",
                    "formula"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "工",
        "on": [
            "こう",
            "く"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E5%B7%A5#Kanji",
        "meanings": [
            "craft",
            "construction",
            "katakana e radical (no.48)"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 3,
        "examples": [
            {
                "value": "工場",
                "kana": [
                    "こうじょう",
                    "こうば"
                ],
                "english": [
                    "factory",
                    "plant, mill",
                    "workshop"
                ]
            },
            {
                "value": "工業",
                "kana": [
                    "こうぎょう"
                ],
                "english": [
                    "(manufacturing) industry"
                ]
            },
            {
                "value": "工事",
                "kana": [
                    "こうじ"
                ],
                "english": [
                    "construction work"
                ]
            },
            {
                "value": "工作",
                "kana": [
                    "こうさく"
                ],
                "english": [
                    "work",
                    "construction",
                    "handicraft",
                    "maneuvering"
                ]
            },
            {
                "value": "加工",
                "kana": [
                    "かこう"
                ],
                "english": [
                    "manufacturing",
                    "processing",
                    "treatment"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "広",
        "on": [
            "こう"
        ],
        "kun": [
            "ひろい",
            "ひろまる",
            "ひろめる",
            "ひろがる",
            "ひろげる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BA%83#Kanji",
        "meanings": [
            "wide",
            "broad",
            "spacious"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "広い",
                "kana": [
                    "ひろい"
                ],
                "english": [
                    "spacious",
                    "vast",
                    "wide"
                ]
            },
            {
                "value": "広がり",
                "kana": [
                    "ひろがり"
                ],
                "english": [
                    "spread",
                    "span"
                ]
            },
            {
                "value": "広告",
                "kana": [
                    "こうこく"
                ],
                "english": [
                    "advertisement"
                ]
            },
            {
                "value": "広げる",
                "kana": [
                    "ひろげる"
                ],
                "english": [
                    "to spread",
                    "to extend",
                    "to expand",
                    "to enlarge"
                ]
            },
            {
                "value": "広がった枝",
                "kana": [
                    "ひろがったえだ"
                ],
                "english": [
                    "spreading branches"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "考",
        "on": [
            "こう"
        ],
        "kun": [
            "かんがえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%80%83#Kanji",
        "meanings": [
            "consider",
            "think over"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "考え",
                "kana": [
                    "かんがえ"
                ],
                "english": [
                    "thinking",
                    "thought",
                    "ideas",
                    "intention"
                ]
            },
            {
                "value": "考え方",
                "kana": [
                    "かんがえかた"
                ],
                "english": [
                    "way of thinking"
                ]
            },
            {
                "value": "参考",
                "kana": [
                    "さんこう"
                ],
                "english": [
                    "reference, consultation"
                ]
            },
            {
                "value": "選考",
                "kana": [
                    "せんこう"
                ],
                "english": [
                    "selection, screening"
                ]
            },
            {
                "value": "元日",
                "kana": [
                    "かんがえる"
                ],
                "english": [
                    "to consider",
                    "to think about"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "行",
        "on": [
            "こう",
            "ぎょう"
        ],
        "kun": [
            "いく",
            "ゆく",
            "おこなう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A1%8C#Kanji",
        "meanings": [
            "go",
            "going",
            "journey"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "行う",
                "kana": [
                    "おこなう"
                ],
                "english": [
                    "to perform",
                    "to do",
                    "to conduct oneself"
                ]
            },
            {
                "value": "行",
                "kana": [
                    "ぎょう"
                ],
                "english": [
                    "line (i.e. of text)",
                    "row",
                    "verse"
                ]
            },
            {
                "value": "銀行",
                "kana": [
                    "ぎんこう"
                ],
                "english": [
                    "bank"
                ]
            },
            {
                "value": "行政",
                "kana": [
                    "ぎょうせい"
                ],
                "english": [
                    "administration"
                ]
            },
            {
                "value": "行動",
                "kana": [
                    "こうどう"
                ],
                "english": [
                    "action",
                    "conduct",
                    "behaviour"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "高",
        "on": [
            "こう"
        ],
        "kun": [
            "たかい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%AB%98#Kanji",
        "meanings": [
            "tall",
            "high",
            "expensive"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 10,
        "examples": [
            {
                "value": "高さ",
                "kana": [
                    "たかさ"
                ],
                "english": [
                    "height"
                ]
            },
            {
                "value": "高校",
                "kana": [
                    "こうこう"
                ],
                "english": [
                    "senior high school"
                ]
            },
            {
                "value": "最高",
                "kana": [
                    "さいこう"
                ],
                "english": [
                    "highest",
                    "supreme",
                    "the most"
                ]
            },
            {
                "value": "円高",
                "kana": [
                    "えんだか"
                ],
                "english": [
                    "high valued yen"
                ]
            },
            {
                "value": "高",
                "kana": [
                    "たか",
                    "だか"
                ],
                "english": [
                    "quantity",
                    "amount",
                    "volume",
                    "number"
                ]
            }
        ],
        "tags": [
            "adjective"
        ]
    },
    {
        "name": "合",
        "on": [
            "ごう"
        ],
        "kun": [
            "あう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%90%88#Kanji",
        "meanings": [
            "fit",
            "suit",
            "join"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "合",
                "kana": [
                    "ごう"
                ],
                "english": [
                    "0.18039 litres"
                ]
            },
            {
                "value": "合意",
                "kana": [
                    "ごうい"
                ],
                "english": [
                    "agreement",
                    "consent",
                    "mutual understanding"
                ]
            },
            {
                "value": "試合",
                "kana": [
                    "しあい"
                ],
                "english": [
                    "match",
                    "game",
                    "bout",
                    "contest"
                ]
            },
            {
                "value": "連合",
                "kana": [
                    "れんごう"
                ],
                "english": [
                    "union, alliance",
                    "combination"
                ]
            },
            {
                "value": "総合",
                "kana": [
                    "そうごう"
                ],
                "english": [
                    "synthesis",
                    "coordination",
                    "putting together"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "国",
        "on": [
            "こく"
        ],
        "kun": [
            "くに"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9B%BD#Kanji",
        "meanings": [
            "country"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "国",
                "kana": [
                    "くに"
                ],
                "english": [
                    "country",
                    "state",
                    "region"
                ]
            },
            {
                "value": "外国",
                "kana": [
                    "がいこく"
                ],
                "english": [
                    "foreign country"
                ]
            },
            {
                "value": "外国人",
                "kana": [
                    "がいこくじん"
                ],
                "english": [
                    "foreigner"
                ]
            },
            {
                "value": "韓国",
                "kana": [
                    "かんこく"
                ],
                "english": [
                    "(South) Korea"
                ]
            },
            {
                "value": "国家",
                "kana": [
                    "こっか"
                ],
                "english": [
                    "state",
                    "country",
                    "nation"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "黒",
        "on": [
            "こく"
        ],
        "kun": [
            "くろ",
            "くろい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%BB%92#Kanji",
        "meanings": [
            "black"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "黒",
                "kana": [
                    "くろ"
                ],
                "english": [
                    "black",
                    "dark",
                    "bad guy"
                ]
            },
            {
                "value": "黒字",
                "kana": [
                    "くろじ"
                ],
                "english": [
                    "balance (figure) in the black"
                ]
            },
            {
                "value": "黒人",
                "kana": [
                    "こくじん"
                ],
                "english": [
                    "black person"
                ]
            },
            {
                "value": "黒海",
                "kana": [
                    "こっかい"
                ],
                "english": [
                    "Black Sea"
                ]
            },
            {
                "value": "黒い",
                "kana": [
                    "くろい"
                ],
                "english": [
                    "black",
                    "dark",
                    "illicit",
                    "wicked",
                    "underground"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "今",
        "on": [
            "こん"
        ],
        "kun": [
            "いま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BB%8A#Kanji",
        "meanings": [
            "now"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "今",
                "kana": [
                    "いま"
                ],
                "english": [
                    "now",
                    "the present time",
                    "just now",
                    "soon"
                ]
            },
            {
                "value": "今や",
                "kana": [
                    "いまや"
                ],
                "english": [
                    "now"
                ]
            },
            {
                "value": "今回",
                "kana": [
                    "こんかい"
                ],
                "english": [
                    "now",
                    "this time",
                    "lately"
                ]
            },
            {
                "value": "今月",
                "kana": [
                    "こんげつ"
                ],
                "english": [
                    "this month"
                ]
            },
            {
                "value": "今後",
                "kana": [
                    "こんご"
                ],
                "english": [
                    "from now on",
                    "hereafter"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "才",
        "on": [
            "さい"
        ],
        "kun": [
            "わずかに"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%89%8D#Kanji",
        "meanings": [
            "genius",
            "years old",
            "cubic shaku",
            "ability"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 3,
        "examples": [
            {
                "value": "才",
                "kana": [
                    "さい"
                ],
                "english": [
                    "years old",
                    "ability",
                    "gift",
                    "talent",
                    "aptitude"
                ]
            },
            {
                "value": "才能",
                "kana": [
                    "さいのう"
                ],
                "english": [
                    "talent",
                    "ability"
                ]
            },
            {
                "value": "天才",
                "kana": [
                    "てんさい"
                ],
                "english": [
                    "genius",
                    "prodigy",
                    "natural gift"
                ]
            },
            {
                "value": "漫才",
                "kana": [
                    "まんざい"
                ],
                "english": [
                    "comedian",
                    "comic dialogue"
                ]
            },
            {
                "value": "秀才",
                "kana": [
                    "しゅうさい"
                ],
                "english": [
                    "prodigy"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "細",
        "on": [
            "さい"
        ],
        "kun": [
            "ほそい",
            "こまかい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B4%B0#Kanji",
        "meanings": [
            "dainty",
            "get thin",
            "taper",
            "slender",
            "narrow"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "細かい",
                "kana": [
                    "こまかい"
                ],
                "english": [
                    "small",
                    "fine",
                    "minute",
                    "minor",
                    "trivial"
                ]
            },
            {
                "value": "細胞",
                "kana": [
                    "さいぼう",
                    "さいほう"
                ],
                "english": [
                    "cell (biology)"
                ]
            },
            {
                "value": "細かく",
                "kana": [
                    "こまかく"
                ],
                "english": [
                    "minutely",
                    "finely"
                ]
            },
            {
                "value": "細か",
                "kana": [
                    "こまか"
                ],
                "english": [
                    "small",
                    "fine",
                    "detailed",
                    "stingy"
                ]
            },
            {
                "value": "詳細",
                "kana": [
                    "しょうさい"
                ],
                "english": [
                    "detail",
                    "particulars"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "作",
        "on": [
            "さく"
        ],
        "kun": [
            "つくる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BD%9C#Kanji",
        "meanings": [
            "make",
            "production",
            "prepare",
            "build"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "作",
                "kana": [
                    "さく"
                ],
                "english": [
                    "a work",
                    "a harvest"
                ]
            },
            {
                "value": "作る",
                "kana": [
                    "つくる"
                ],
                "english": [
                    "to make",
                    "to produce",
                    "to manufacture",
                    "to build"
                ]
            },
            {
                "value": "作り",
                "kana": [
                    "つくり"
                ],
                "english": [
                    "making",
                    "producing",
                    "manufacturing",
                    "building"
                ]
            },
            {
                "value": "作業",
                "kana": [
                    "さぎょう"
                ],
                "english": [
                    "work",
                    "operation",
                    "manufacturing",
                    "fatigue duty"
                ]
            },
            {
                "value": "作品",
                "kana": [
                    "さくひん"
                ],
                "english": [
                    "work (e.g. book, film, composition, etc.)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "算",
        "on": [
            "さん"
        ],
        "kun": [
            "かぞえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%AE%97#Kanji",
        "meanings": [
            "calculate",
            "divining",
            "number",
            "abacus",
            "probability"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 14,
        "examples": [
            {
                "value": "予算",
                "kana": [
                    "よさん"
                ],
                "english": [
                    "estimate",
                    "budget"
                ]
            },
            {
                "value": "決算",
                "kana": [
                    "けっさん"
                ],
                "english": [
                    "balance sheet",
                    "settlement of accounts"
                ]
            },
            {
                "value": "通算",
                "kana": [
                    "つうさん"
                ],
                "english": [
                    "total"
                ]
            },
            {
                "value": "計算",
                "kana": [
                    "けいさん"
                ],
                "english": [
                    "calculation",
                    "reckoning",
                    "count",
                    "forecast"
                ]
            },
            {
                "value": "補正予算",
                "kana": [
                    "ほせいよさん"
                ],
                "english": [
                    "revised or supplementary budget"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "姉",
        "on": [
            "し"
        ],
        "kun": [
            "あね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A7%89#Kanji",
        "meanings": [
            "older sister"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "姉",
                "kana": [
                    "あね"
                ],
                "english": [
                    "older sister",
                    "elder sister"
                ]
            },
            {
                "value": "姉妹",
                "kana": [
                    "しまい",
                    "きょうだい"
                ],
                "english": [
                    "sisters"
                ]
            },
            {
                "value": "姉さん",
                "kana": [
                    "ねえさん",
                    "あねさん"
                ],
                "english": [
                    "elder sister",
                    "young lady"
                ]
            },
            {
                "value": "義姉",
                "kana": [
                    "ぎし",
                    "あね"
                ],
                "english": [
                    "sister in-law"
                ]
            },
            {
                "value": "姉",
                "kana": [
                    "し"
                ],
                "english": [
                    "honorific suffix used after the name of a woman of equal or higher status"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "市",
        "on": [
            "し"
        ],
        "kun": [
            "いち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B8%82#Kanji",
        "meanings": [
            "market",
            "city",
            "town"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "市場",
                "kana": [
                    "いちば"
                ],
                "english": [
                    "(town) market",
                    "the marketplace"
                ]
            },
            {
                "value": "市内",
                "kana": [
                    "しない"
                ],
                "english": [
                    "within a city",
                    "local"
                ]
            },
            {
                "value": "市民",
                "kana": [
                    "しみん"
                ],
                "english": [
                    "citizen",
                    "townspeople"
                ]
            },
            {
                "value": "都市",
                "kana": [
                    "とし"
                ],
                "english": [
                    "town",
                    "city",
                    "municipal",
                    "urban"
                ]
            },
            {
                "value": "同市",
                "kana": [
                    "どうし"
                ],
                "english": [
                    "same city"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "思",
        "on": [
            "し"
        ],
        "kun": [
            "おもう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%80%9D#Kanji",
        "meanings": [
            "think"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "思わず",
                "kana": [
                    "おもわず"
                ],
                "english": [
                    "unintentionally",
                    "reflexively",
                    "spontaneously"
                ]
            },
            {
                "value": "思い",
                "kana": [
                    "おもい"
                ],
                "english": [
                    "thought",
                    "mind",
                    "heart",
                    "feelings",
                    "emotion"
                ]
            },
            {
                "value": "思う",
                "kana": [
                    "おもう"
                ],
                "english": [
                    "to think",
                    "to consider",
                    "to believe"
                ]
            },
            {
                "value": "意思",
                "kana": [
                    "いし"
                ],
                "english": [
                    "intention",
                    "purpose"
                ]
            },
            {
                "value": "思想",
                "kana": [
                    "しそう"
                ],
                "english": [
                    "thought",
                    "idea",
                    "ideology"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "止",
        "on": [
            "し"
        ],
        "kun": [
            "とまる",
            "とめる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AD%A2#Kanji",
        "meanings": [
            "stop",
            "halt"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "禁止",
                "kana": [
                    "きんし"
                ],
                "english": [
                    "prohibition",
                    "inhibition",
                    "ban"
                ]
            },
            {
                "value": "停止",
                "kana": [
                    "ていし"
                ],
                "english": [
                    "suspension",
                    "interruption",
                    "stoppage",
                    "ban"
                ]
            },
            {
                "value": "防止",
                "kana": [
                    "ぼうし"
                ],
                "english": [
                    "prevention",
                    "check"
                ]
            },
            {
                "value": "中止",
                "kana": [
                    "ちゅうし"
                ],
                "english": [
                    "suspension",
                    "stoppage",
                    "discontinuance"
                ]
            },
            {
                "value": "廃止",
                "kana": [
                    "はいし"
                ],
                "english": [
                    "abolition",
                    "repeal"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "紙",
        "on": [
            "し"
        ],
        "kun": [
            "かみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B4%99#Kanji",
        "meanings": [
            "paper"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "紙",
                "kana": [
                    "かみ"
                ],
                "english": [
                    "paper"
                ]
            },
            {
                "value": "手紙",
                "kana": [
                    "てがみ"
                ],
                "english": [
                    "letter"
                ]
            },
            {
                "value": "用紙",
                "kana": [
                    "ようし"
                ],
                "english": [
                    "blank form"
                ]
            },
            {
                "value": "紙面",
                "kana": [
                    "しめん"
                ],
                "english": [
                    "space (page)"
                ]
            },
            {
                "value": "白紙",
                "kana": [
                    "はくし"
                ],
                "english": [
                    "blank paper",
                    "white paper"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "寺",
        "on": [
            "じ"
        ],
        "kun": [
            "てら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AF%BA#Kanji",
        "meanings": [
            "Buddhist Temple"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "寺",
                "kana": [
                    "てら"
                ],
                "english": [
                    "temple (Buddhist)"
                ]
            },
            {
                "value": "寺院",
                "kana": [
                    "じいん"
                ],
                "english": [
                    "temple"
                ]
            },
            {
                "value": "国分寺",
                "kana": [
                    "こくぶんじ"
                ],
                "english": [
                    "(Nara Era) state provincial temples"
                ]
            },
            {
                "value": "禅寺",
                "kana": [
                    "ぜんでら"
                ],
                "english": [
                    "Zen temple"
                ]
            },
            {
                "value": "寺子屋",
                "kana": [
                    "てらこや"
                ],
                "english": [
                    "temple elementary school (during the Edoperiod)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "時",
        "on": [
            "じ"
        ],
        "kun": [
            "とき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%99%82#Kanji",
        "meanings": [
            "time",
            "hour"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 10,
        "examples": [
            {
                "value": "時",
                "kana": [
                    "とき"
                ],
                "english": [
                    "time",
                    "hour",
                    "occasion",
                    "moment"
                ]
            },
            {
                "value": "時間",
                "kana": [
                    "じかん"
                ],
                "english": [
                    "time",
                    "hours"
                ]
            },
            {
                "value": "時期",
                "kana": [
                    "じき"
                ],
                "english": [
                    "time",
                    "season",
                    "period",
                    "soon",
                    "shortly"
                ]
            },
            {
                "value": "時代",
                "kana": [
                    "じだい"
                ],
                "english": [
                    "period",
                    "epoch",
                    "era",
                    "age",
                    "the times"
                ]
            },
            {
                "value": "当時",
                "kana": [
                    "とうじ"
                ],
                "english": [
                    "at that time",
                    "in those days"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "自",
        "on": [
            "じ",
            "し"
        ],
        "kun": [
            "みずから"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%87%AA#Kanji",
        "meanings": [
            "oneself"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "自ら",
                "kana": [
                    "みずから"
                ],
                "english": [
                    "for one’s self",
                    "personally"
                ]
            },
            {
                "value": "自衛隊",
                "kana": [
                    "じえいたい"
                ],
                "english": [
                    "self defence"
                ]
            },
            {
                "value": "自身",
                "kana": [
                    "じしん"
                ],
                "english": [
                    "by oneself",
                    "personally"
                ]
            },
            {
                "value": "自然",
                "kana": [
                    "しぜん"
                ],
                "english": [
                    "nature",
                    "spontaneity",
                    "naturally",
                    "spontaneously"
                ]
            },
            {
                "value": "自宅",
                "kana": [
                    "じたく"
                ],
                "english": [
                    "one’s home"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "室",
        "on": [
            "しつ",
            "しち"
        ],
        "kun": [
            "むろ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AE%A4#Kanji",
        "meanings": [
            "room",
            "apartment",
            "chamber",
            "greenhouse",
            "cellar"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "教室",
                "kana": [
                    "きょうしつ"
                ],
                "english": [
                    "classroom"
                ]
            },
            {
                "value": "室長",
                "kana": [
                    "しつちょう"
                ],
                "english": [
                    "room monitor"
                ]
            },
            {
                "value": "室内",
                "kana": [
                    "しつない"
                ],
                "english": [
                    "indoor",
                    "inside the room"
                ]
            },
            {
                "value": "皇室",
                "kana": [
                    "こうしつ"
                ],
                "english": [
                    "Imperial household"
                ]
            },
            {
                "value": "会議室",
                "kana": [
                    "かいぎしつ"
                ],
                "english": [
                    "conference room",
                    "council room"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "社",
        "on": [
            "しゃ"
        ],
        "kun": [
            "やしろ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A4%BE#Kanji",
        "meanings": [
            "company",
            "fire",
            "office",
            "association"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "会社",
                "kana": [
                    "かいしゃ"
                ],
                "english": [
                    "company",
                    "corporation",
                    "workplace"
                ]
            },
            {
                "value": "社会",
                "kana": [
                    "しゃかい"
                ],
                "english": [
                    "society, public"
                ]
            },
            {
                "value": "社会党",
                "kana": [
                    "しゃかいとう"
                ],
                "english": [
                    "Socialist Party"
                ]
            },
            {
                "value": "社長",
                "kana": [
                    "しゃちょう"
                ],
                "english": [
                    "company president",
                    "manager",
                    "director"
                ]
            },
            {
                "value": "同社",
                "kana": [
                    "どうしゃ"
                ],
                "english": [
                    "the same firm"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "弱",
        "on": [
            "じゃく"
        ],
        "kun": [
            "よわい",
            "よわる",
            "よわまる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%B1#Kanji",
        "meanings": [
            "weak",
            "frail"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "弱点",
                "kana": [
                    "じゃくてん"
                ],
                "english": [
                    "weak point",
                    "weakness"
                ]
            },
            {
                "value": "弱者",
                "kana": [
                    "じゃくしゃ"
                ],
                "english": [
                    "weak person"
                ]
            },
            {
                "value": "弱体",
                "kana": [
                    "じゃくたい"
                ],
                "english": [
                    "weak (organisation)"
                ]
            },
            {
                "value": "弱み",
                "kana": [
                    "よわみ"
                ],
                "english": [
                    "weakness"
                ]
            },
            {
                "value": "弱気",
                "kana": [
                    "よわき"
                ],
                "english": [
                    "timid",
                    "faint hearted"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "首",
        "on": [
            "しゅ"
        ],
        "kun": [
            "くび"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A6%96#Kanji",
        "meanings": [
            "neck",
            "counter for songs and poems"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "首",
                "kana": [
                    "くび",
                    "クビ"
                ],
                "english": [
                    "neck",
                    "head",
                    "unemployed person"
                ]
            },
            {
                "value": "首相",
                "kana": [
                    "しゅしょう"
                ],
                "english": [
                    "Prime Minister",
                    "Chancellor (Germany, Austria)"
                ]
            },
            {
                "value": "首脳",
                "kana": [
                    "しゅのう"
                ],
                "english": [
                    "head",
                    "brains",
                    "leading spirit"
                ]
            },
            {
                "value": "首都",
                "kana": [
                    "しゅと"
                ],
                "english": [
                    "capital city",
                    "metropolis"
                ]
            },
            {
                "value": "党首",
                "kana": [
                    "とうしゅ"
                ],
                "english": [
                    "party leader"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "秋",
        "on": [
            "しゅう"
        ],
        "kun": [
            "あき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A7%8B#Kanji",
        "meanings": [
            "autumn"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "秋",
                "kana": [
                    "あき"
                ],
                "english": [
                    "autumn",
                    "fall"
                ]
            },
            {
                "value": "今秋",
                "kana": [
                    "こんしゅう"
                ],
                "english": [
                    "this (next, last) autumn (fall)"
                ]
            },
            {
                "value": "昨秋",
                "kana": [
                    "さくしゅう"
                ],
                "english": [
                    "autumn of last year",
                    "fall of last year"
                ]
            },
            {
                "value": "春秋",
                "kana": [
                    "しゅんじゅう",
                    "はるあき"
                ],
                "english": [
                    "spring and autumn",
                    "spring and fall"
                ]
            },
            {
                "value": "千秋楽",
                "kana": [
                    "せんしゅうらく"
                ],
                "english": [
                    "concluding festivities"
                ]
            }
        ],
        "tags": [
            "season"
        ]
    },
    {
        "name": "週",
        "on": [
            "しゅう"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E9%80%B1#Kanji",
        "meanings": [
            "week"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 10,
        "examples": [
            {
                "value": "週",
                "kana": [
                    "しゅう"
                ],
                "english": [
                    "week"
                ]
            },
            {
                "value": "週刊",
                "kana": [
                    "しゅうかん"
                ],
                "english": [
                    "published weekly"
                ]
            },
            {
                "value": "一週間",
                "kana": [
                    "いっしゅうかん"
                ],
                "english": [
                    "one week"
                ]
            },
            {
                "value": "今週",
                "kana": [
                    "こんしゅう"
                ],
                "english": [
                    "this week"
                ]
            },
            {
                "value": "先週",
                "kana": [
                    "せんしゅう"
                ],
                "english": [
                    "last week",
                    "the week before"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "春",
        "on": [
            "しゅん"
        ],
        "kun": [
            "はる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%98%A5#Kanji",
        "meanings": [
            "spring (season)"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "春",
                "kana": [
                    "はる"
                ],
                "english": [
                    "spring",
                    "springtime",
                    "new year"
                ]
            },
            {
                "value": "今春",
                "kana": [
                    "こんしゅん"
                ],
                "english": [
                    "this spring",
                    "spring this year"
                ]
            },
            {
                "value": "春闘",
                "kana": [
                    "しゅんとう"
                ],
                "english": [
                    "spring offensive (Japanese unions)"
                ]
            },
            {
                "value": "来春",
                "kana": [
                    "らいしゅん",
                    "らいはる"
                ],
                "english": [
                    "next spring"
                ]
            },
            {
                "value": "青春",
                "kana": [
                    "せいしゅん"
                ],
                "english": [
                    "youth",
                    "springtime of life",
                    "adolescent"
                ]
            }
        ],
        "tags": [
            "season"
        ]
    },
    {
        "name": "書",
        "on": [
            "しょ"
        ],
        "kun": [
            "かく"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9B%B8#Kanji",
        "meanings": [
            "write"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 10,
        "examples": [
            {
                "value": "書記",
                "kana": [
                    "きた"
                ],
                "english": [
                    "clerk",
                    "secretary"
                ]
            },
            {
                "value": "秘書",
                "kana": [
                    "ほっかいどう"
                ],
                "english": [
                    "private secretary"
                ]
            },
            {
                "value": "報告書",
                "kana": [
                    "ぺきん"
                ],
                "english": [
                    "written report"
                ]
            },
            {
                "value": "文書",
                "kana": [
                    "きたちょうせん"
                ],
                "english": [
                    "document",
                    "writing",
                    "letter",
                    "paperwork"
                ]
            },
            {
                "value": "教科書",
                "kana": [
                    "とうほく",
                    "ひがしきた"
                ],
                "english": [
                    "textbook"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "少",
        "on": [
            "しょう"
        ],
        "kun": [
            "すくない",
            "すこし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B0%91#Kanji",
        "meanings": [
            "few",
            "little"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "少し",
                "kana": [
                    "すこし"
                ],
                "english": [
                    "small quantity",
                    "little",
                    "few, something"
                ]
            },
            {
                "value": "少なくとも",
                "kana": [
                    "すくなくとも"
                ],
                "english": [
                    "at least"
                ]
            },
            {
                "value": "少年",
                "kana": [
                    "しょうねん"
                ],
                "english": [
                    "boys, juveniles"
                ]
            },
            {
                "value": "減少",
                "kana": [
                    "げんしょう"
                ],
                "english": [
                    "decrease, reduction, decline"
                ]
            },
            {
                "value": "少数",
                "kana": [
                    "しょうすう"
                ],
                "english": [
                    "minority, few"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "場",
        "on": [
            "じょう"
        ],
        "kun": [
            "ば"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A0%B4#Kanji",
        "meanings": [
            "location",
            "place"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "現場",
                "kana": [
                    "げんば",
                    "げんじょう"
                ],
                "english": [
                    "actual spot",
                    "scene",
                    "scene of the crime"
                ]
            },
            {
                "value": "市場",
                "kana": [
                    "いちば"
                ],
                "english": [
                    "(town) market",
                    "(the) marketplace"
                ]
            },
            {
                "value": "場所",
                "kana": [
                    "ばしょ"
                ],
                "english": [
                    "place",
                    "location"
                ]
            },
            {
                "value": "立場",
                "kana": [
                    "たちば"
                ],
                "english": [
                    "standpoint",
                    "position",
                    "situation"
                ]
            },
            {
                "value": "工場",
                "kana": [
                    "こうじょう",
                    "こうば"
                ],
                "english": [
                    "factory",
                    "plant",
                    "mill",
                    "workshop"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "色",
        "on": [
            "しょく",
            "しき"
        ],
        "kun": [
            "いろ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%89%B2#Kanji",
        "meanings": [
            "colour"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "色",
                "kana": [
                    "いろ"
                ],
                "english": [
                    "colour",
                    "complexion",
                    "appearance, look"
                ]
            },
            {
                "value": "色彩",
                "kana": [
                    "しきさい"
                ],
                "english": [
                    "colour",
                    "hue",
                    "tints"
                ]
            },
            {
                "value": "特色",
                "kana": [
                    "とくしょく"
                ],
                "english": [
                    "characteristic",
                    "feature",
                    "idiosyncrasy"
                ]
            },
            {
                "value": "難色",
                "kana": [
                    "なんしょく"
                ],
                "english": [
                    "disapproval"
                ]
            },
            {
                "value": "黄色",
                "kana": [
                    "きいろ",
                    "こうしょく",
                    "おうしょく"
                ],
                "english": [
                    "yellow",
                    "amber"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "食",
        "on": [
            "しょく"
        ],
        "kun": [
            "たべる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A3%9F#Kanji",
        "meanings": [
            "eat",
            "food"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 9,
        "examples": [
            {
                "value": "食",
                "kana": [
                    "しょく"
                ],
                "english": [
                    "meal",
                    "food"
                ]
            },
            {
                "value": "食事",
                "kana": [
                    "しょくじ"
                ],
                "english": [
                    "meal to eat"
                ]
            },
            {
                "value": "食品",
                "kana": [
                    "しょくひん"
                ],
                "english": [
                    "commodity",
                    "foodstuff"
                ]
            },
            {
                "value": "食料",
                "kana": [
                    "しょくりょう"
                ],
                "english": [
                    "food"
                ]
            },
            {
                "value": "食糧",
                "kana": [
                    "しょくりょう"
                ],
                "english": [
                    "provisions",
                    "rations",
                    "food supply"
                ]
            }
        ],
        "tags": [
            "verb",
            "food"
        ]
    },
    {
        "name": "心",
        "on": [
            "しん"
        ],
        "kun": [
            "こころ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BF%83#Kanji",
        "meanings": [
            "heart",
            "mind",
            "spirit",
            "heart radical"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "関心",
                "kana": [
                    "かんしん"
                ],
                "english": [
                    "concern",
                    "interest"
                ]
            },
            {
                "value": "中心",
                "kana": [
                    "ちゅうしん"
                ],
                "english": [
                    "centre",
                    "middle",
                    "heart",
                    "core",
                    "focus"
                ]
            },
            {
                "value": "心不全",
                "kana": [
                    "しんふぜん"
                ],
                "english": [
                    "heart failure"
                ]
            },
            {
                "value": "心から",
                "kana": [
                    "しんから",
                    "こころから"
                ],
                "english": [
                    "from the bottom of one’s heart"
                ]
            },
            {
                "value": "心臓",
                "kana": [
                    "しんぞう"
                ],
                "english": [
                    "heart"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "新",
        "on": [
            "しん"
        ],
        "kun": [
            "あたらしい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%96%B0#Kanji",
        "meanings": [
            "new"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 13,
        "examples": [
            {
                "value": "新た",
                "kana": [
                    "あらた"
                ],
                "english": [
                    "new",
                    "fresh",
                    "novel",
                    "newly",
                    "freshly"
                ]
            },
            {
                "value": "新党",
                "kana": [
                    "しんとう"
                ],
                "english": [
                    "new (political) party"
                ]
            },
            {
                "value": "新聞",
                "kana": [
                    "しんぶん"
                ],
                "english": [
                    "newspaper"
                ]
            },
            {
                "value": "新人",
                "kana": [
                    "しんじん"
                ],
                "english": [
                    "new face",
                    "newcomer"
                ]
            },
            {
                "value": "新生",
                "kana": [
                    "しんせい"
                ],
                "english": [
                    "rebirth",
                    "new birth",
                    "nascent"
                ]
            }
        ],
        "tags": [
            "adjective"
        ]
    },
    {
        "name": "親",
        "on": [
            "しん"
        ],
        "kun": [
            "おや",
            "したしい",
            "したしむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A6%AA#Kanji",
        "meanings": [
            "parent",
            "intimacy",
            "relative",
            "familiarity"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 16,
        "examples": [
            {
                "value": "親",
                "kana": [
                    "おや"
                ],
                "english": [
                    "parent",
                    "dealer (in cards)",
                    "founder"
                ]
            },
            {
                "value": "父親",
                "kana": [
                    "ちちおや"
                ],
                "english": [
                    "father"
                ]
            },
            {
                "value": "母親",
                "kana": [
                    "ははおや"
                ],
                "english": [
                    "mother"
                ]
            },
            {
                "value": "両親",
                "kana": [
                    "りょうしん",
                    "ふたおや"
                ],
                "english": [
                    "parents, both parents"
                ]
            },
            {
                "value": "親子",
                "kana": [
                    "おやこ",
                    "しんし"
                ],
                "english": [
                    "parent and child"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "図",
        "on": [
            "ず",
            "と"
        ],
        "kun": [
            "はかる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9B%B3#Kanji",
        "meanings": [
            "map",
            "drawing"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "図",
                "kana": [
                    "ず"
                ],
                "english": [
                    "figure (e.g. Fig 1)",
                    "drawing",
                    "picture"
                ]
            },
            {
                "value": "意図",
                "kana": [
                    "いと"
                ],
                "english": [
                    "intention",
                    "aim",
                    "design"
                ]
            },
            {
                "value": "構図",
                "kana": [
                    "こうず"
                ],
                "english": [
                    "composition"
                ]
            },
            {
                "value": "図書館",
                "kana": [
                    "としょかん",
                    "ずしょかん"
                ],
                "english": [
                    "library"
                ]
            },
            {
                "value": "地図",
                "kana": [
                    "ちず"
                ],
                "english": [
                    "map"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "数",
        "on": [
            "す",
            "すう"
        ],
        "kun": [
            "かぞえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%95%B0#Kanji",
        "meanings": [
            "number",
            "strength",
            "fate",
            "law",
            "figures"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 13,
        "examples": [
            {
                "value": "数",
                "kana": [
                    "かず"
                ],
                "english": [
                    "number",
                    "amount"
                ]
            },
            {
                "value": "数字",
                "kana": [
                    "すうじ"
                ],
                "english": [
                    "numeral",
                    "figure",
                    "digit",
                    "numeric character"
                ]
            },
            {
                "value": "多数",
                "kana": [
                    "たすう"
                ],
                "english": [
                    "great number",
                    "countless",
                    "majority"
                ]
            },
            {
                "value": "定数",
                "kana": [
                    "ていすう"
                ],
                "english": [
                    "constant",
                    "literal"
                ]
            },
            {
                "value": "少数",
                "kana": [
                    "しょうすう"
                ],
                "english": [
                    "minority",
                    "few"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "星",
        "on": [
            "せい",
            "しょう"
        ],
        "kun": [
            "ほし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%98%9F#Kanji",
        "meanings": [
            "star",
            "spot",
            "dot",
            "mark"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "星",
                "kana": [
                    "ほし"
                ],
                "english": [
                    "star"
                ]
            },
            {
                "value": "衛星",
                "kana": [
                    "えいせい"
                ],
                "english": [
                    "satellite"
                ]
            },
            {
                "value": "通信衛星",
                "kana": [
                    "つうしんえいせい"
                ],
                "english": [
                    "communication satellite"
                ]
            },
            {
                "value": "木星",
                "kana": [
                    "もくせい"
                ],
                "english": [
                    "Jupiter (planet)"
                ]
            },
            {
                "value": "惑星",
                "kana": [
                    "わくせい"
                ],
                "english": [
                    "planet"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "晴",
        "on": [
            "せい"
        ],
        "kun": [
            "はれる",
            "はれ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%99%B4#Kanji",
        "meanings": [
            "clear"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "晴れ",
                "kana": [
                    "はれ"
                ],
                "english": [
                    "clear weather",
                    "public",
                    "formal"
                ]
            },
            {
                "value": "素晴らしい",
                "kana": [
                    "すばらしい",
                    "すんばらしい"
                ],
                "english": [
                    "wonderful",
                    "splendid",
                    "magnificent"
                ]
            },
            {
                "value": "晴れる",
                "kana": [
                    "はれる"
                ],
                "english": [
                    "to clear up",
                    "to clear away",
                    "to be sunny"
                ]
            },
            {
                "value": "快晴",
                "kana": [
                    "かいせい"
                ],
                "english": [
                    "good weather"
                ]
            },
            {
                "value": "晴天",
                "kana": [
                    "せいてん"
                ],
                "english": [
                    "fine weather"
                ]
            }
        ],
        "tags": [
            "weather"
        ]
    },
    {
        "name": "声",
        "on": [
            "しょう",
            "せい"
        ],
        "kun": [
            "こえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A3%B0#Kanji",
        "meanings": [
            "voice"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "声",
                "kana": [
                    "こえ"
                ],
                "english": [
                    "voice"
                ]
            },
            {
                "value": "声明",
                "kana": [
                    "せいめい"
                ],
                "english": [
                    "declaration",
                    "statement",
                    "proclamation"
                ]
            },
            {
                "value": "音声",
                "kana": [
                    "おんせい",
                    "おんじょう"
                ],
                "english": [
                    "voice",
                    "(the concept of) sound"
                ]
            },
            {
                "value": "歓声",
                "kana": [
                    "かんせい"
                ],
                "english": [
                    "cheer",
                    "shout of joy"
                ]
            },
            {
                "value": "声援",
                "kana": [
                    "せいえん"
                ],
                "english": [
                    "encouragement",
                    "cheering",
                    "support"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "西",
        "on": [
            "せい"
        ],
        "kun": [
            "にし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A5%BF#Kanji",
        "meanings": [
            "west",
            "Spain"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "西",
                "kana": [
                    "にし"
                ],
                "english": [
                    "west"
                ]
            },
            {
                "value": "関西",
                "kana": [
                    "かんさい",
                    "かんせい"
                ],
                "english": [
                    "Kansai"
                ]
            },
            {
                "value": "西側",
                "kana": [
                    "にしがわ"
                ],
                "english": [
                    "west side",
                    "west bank"
                ]
            },
            {
                "value": "東西",
                "kana": [
                    "とうざい"
                ],
                "english": [
                    "East and West"
                ]
            },
            {
                "value": "西欧",
                "kana": [
                    "せいおう"
                ],
                "english": [
                    "Western Europe"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "切",
        "on": [
            "せつ",
            "せつ"
        ],
        "kun": [
            "きる",
            "きれる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%88%87#Kanji",
        "meanings": [
            "cut"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "大切",
                "kana": [
                    "たいせつ"
                ],
                "english": [
                    "important",
                    "valuable",
                    "worthy of care"
                ]
            },
            {
                "value": "切っ掛け",
                "kana": [
                    "きっかけ"
                ],
                "english": [
                    "chance",
                    "start",
                    "cue",
                    "excuse",
                    "motive",
                    "impetus"
                ]
            },
            {
                "value": "一切",
                "kana": [
                    "いっさい"
                ],
                "english": [
                    "all",
                    "everything",
                    "without exception",
                    "the whole"
                ]
            },
            {
                "value": "適切",
                "kana": [
                    "てきせつ"
                ],
                "english": [
                    "pertinent",
                    "appropriate",
                    "adequate",
                    "relevance"
                ]
            },
            {
                "value": "切り",
                "kana": [
                    "きり"
                ],
                "english": [
                    "limits",
                    "end",
                    "bounds",
                    "period"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "雪",
        "on": [
            "せつ"
        ],
        "kun": [
            "ゆき"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9B%AA#Kanji",
        "meanings": [
            "snow"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "雪",
                "kana": [
                    "ゆき"
                ],
                "english": [
                    "snow"
                ]
            },
            {
                "value": "雪辱",
                "kana": [
                    "せつじょく"
                ],
                "english": [
                    "vindication of honour"
                ]
            },
            {
                "value": "積雪",
                "kana": [
                    "せきせつ"
                ],
                "english": [
                    "fallen snow"
                ]
            },
            {
                "value": "大雪",
                "kana": [
                    "おおゆき",
                    "たいせつ"
                ],
                "english": [
                    "heavy snow"
                ]
            },
            {
                "value": "吹雪",
                "kana": [
                    "ふぶき"
                ],
                "english": [
                    "snow storm",
                    "blizzard"
                ]
            }
        ],
        "tags": [
            "weather"
        ]
    },
    {
        "name": "線",
        "on": [
            "せん"
        ],
        "kun": [
            "いと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B7%9A#Kanji",
        "meanings": [
            "line",
            "track"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 15,
        "examples": [
            {
                "value": "線",
                "kana": [
                    "せん"
                ],
                "english": [
                    "line (also telephone, railway)",
                    "wire",
                    "beam"
                ]
            },
            {
                "value": "路線",
                "kana": [
                    "ろせん"
                ],
                "english": [
                    "route, line",
                    "alignment"
                ]
            },
            {
                "value": "新幹線",
                "kana": [
                    "しんかんせん"
                ],
                "english": [
                    "bullet train (very high speed)",
                    "Shinkansen"
                ]
            },
            {
                "value": "打線",
                "kana": [
                    "だせん"
                ],
                "english": [
                    "baseball lineup"
                ]
            },
            {
                "value": "戦線",
                "kana": [
                    "せんせん"
                ],
                "english": [
                    "war front"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "船",
        "on": [
            "せん"
        ],
        "kun": [
            "ふな",
            "ふね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%88%B9#Kanji",
        "meanings": [
            "ship",
            "boat"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "船",
                "kana": [
                    "ふね"
                ],
                "english": [
                    "ship",
                    "boat",
                    "watercraft",
                    "vessel",
                    "steamship"
                ]
            },
            {
                "value": "漁船",
                "kana": [
                    "ぎょせん"
                ],
                "english": [
                    "fishing boat"
                ]
            },
            {
                "value": "船長",
                "kana": [
                    "せんちょう"
                ],
                "english": [
                    "ship’s captain"
                ]
            },
            {
                "value": "船舶",
                "kana": [
                    "せんぱく"
                ],
                "english": [
                    "ship"
                ]
            },
            {
                "value": "造船",
                "kana": [
                    "ぞうせん"
                ],
                "english": [
                    "shipbuilding"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "前",
        "on": [
            "ぜん"
        ],
        "kun": [
            "まえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%89%8D#Kanji",
        "meanings": [
            "before",
            "in-front"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 9,
        "examples": [
            {
                "value": "午前",
                "kana": [
                    "ごぜん"
                ],
                "english": [
                    "morning",
                    "A.M"
                ]
            },
            {
                "value": "前年",
                "kana": [
                    "ぜんねん"
                ],
                "english": [
                    "the previous year"
                ]
            },
            {
                "value": "前回",
                "kana": [
                    "ぜんかい"
                ],
                "english": [
                    "last time"
                ]
            },
            {
                "value": "前提",
                "kana": [
                    "ぜんてい"
                ],
                "english": [
                    "preamble",
                    "premise",
                    "reason"
                ]
            },
            {
                "value": "前日",
                "kana": [
                    "ぜんじつ",
                    "まえび"
                ],
                "english": [
                    "previous day"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "組",
        "on": [
            "そ"
        ],
        "kun": [
            "くみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B5%84#Kanji",
        "meanings": [
            "team",
            "association",
            "braid",
            "plait",
            "construct",
            "unite",
            "cooperate",
            "grapple"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "組",
                "kana": [
                    "くみ"
                ],
                "english": [
                    "set (of items)",
                    "group (of people)"
                ]
            },
            {
                "value": "組織",
                "kana": [
                    "そしき"
                ],
                "english": [
                    "organisation",
                    "structure"
                ]
            },
            {
                "value": "番組",
                "kana": [
                    "ばんぐみ"
                ],
                "english": [
                    "program (e.g. TV)",
                    "programme"
                ]
            },
            {
                "value": "組合",
                "kana": [
                    "くみあい"
                ],
                "english": [
                    "association",
                    "union"
                ]
            },
            {
                "value": "労組",
                "kana": [
                    "ろうそ",
                    "ろうくみ"
                ],
                "english": [
                    "labour union"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "走",
        "on": [
            "そう"
        ],
        "kun": [
            "はしる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B5%B0#Kanji",
        "meanings": [
            "run"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "走り",
                "kana": [
                    "はしり"
                ],
                "english": [
                    "the first (harvest)"
                ]
            },
            {
                "value": "走る",
                "kana": [
                    "はしる"
                ],
                "english": [
                    "to run",
                    "to travel (movement of vehicles)"
                ]
            },
            {
                "value": "走者",
                "kana": [
                    "そうしゃ"
                ],
                "english": [
                    "runner"
                ]
            },
            {
                "value": "走行",
                "kana": [
                    "そうこう"
                ],
                "english": [
                    "running a wheeled vehicle (e.g. car)"
                ]
            },
            {
                "value": "滑走",
                "kana": [
                    "かっそう"
                ],
                "english": [
                    "glide",
                    "volplane"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "多",
        "on": [
            "た"
        ],
        "kun": [
            "おおい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%9A#Kanji",
        "meanings": [
            "many",
            "frequent",
            "much"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "多数",
                "kana": [
                    "たすう"
                ],
                "english": [
                    "great number",
                    "countless",
                    "majority"
                ]
            },
            {
                "value": "多様",
                "kana": [
                    "たよう"
                ],
                "english": [
                    "diverse",
                    "varied"
                ]
            },
            {
                "value": "多角",
                "kana": [
                    "たかく"
                ],
                "english": [
                    "many sided",
                    "versatile",
                    "polygonal",
                    "diversified"
                ]
            },
            {
                "value": "最多",
                "kana": [
                    "さいた"
                ],
                "english": [
                    "the most"
                ]
            },
            {
                "value": "多額",
                "kana": [
                    "たがく"
                ],
                "english": [
                    "large amount of money"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "太",
        "on": [
            "た",
            "たい"
        ],
        "kun": [
            "ふとい",
            "ふとる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%AA#Kanji",
        "meanings": [
            "plump",
            "thick",
            "big around"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "太平洋",
                "kana": [
                    "たいへいよう"
                ],
                "english": [
                    "Pacific Ocean"
                ]
            },
            {
                "value": "皇太子",
                "kana": [
                    "こうたいし"
                ],
                "english": [
                    "crown prince"
                ]
            },
            {
                "value": "太陽",
                "kana": [
                    "たいよう"
                ],
                "english": [
                    "sun",
                    "solar"
                ]
            },
            {
                "value": "太平洋戦争",
                "kana": [
                    "たいへいようせんそう"
                ],
                "english": [
                    "the Pacific War"
                ]
            },
            {
                "value": "太鼓",
                "kana": [
                    "たいこ"
                ],
                "english": [
                    "drum"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "体",
        "on": [
            "たい"
        ],
        "kun": [
            "からだ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BD%93#Kanji",
        "meanings": [
            "body",
            "substance",
            "object"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "体",
                "kana": [
                    "からだ",
                    "しんたい"
                ],
                "english": [
                    "body",
                    "health"
                ]
            },
            {
                "value": "具体的",
                "kana": [
                    "ぐたいてき"
                ],
                "english": [
                    "concrete",
                    "tangible",
                    "definite",
                    "specific"
                ]
            },
            {
                "value": "全体",
                "kana": [
                    "ぜんたい"
                ],
                "english": [
                    "whole",
                    "entirety",
                    "whatever (is the matter)"
                ]
            },
            {
                "value": "体制",
                "kana": [
                    "たいせい"
                ],
                "english": [
                    "order",
                    "system",
                    "structure"
                ]
            },
            {
                "value": "団体",
                "kana": [
                    "だんたい"
                ],
                "english": [
                    "organization",
                    "organisation",
                    "association"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "台",
        "on": [
            "だい",
            "たい"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%B0#Kanji",
        "meanings": [
            "pedestal",
            "a stand",
            "counter for machines and vehicles"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "台",
                "kana": [
                    "だい"
                ],
                "english": [
                    "stand",
                    "rack",
                    "table",
                    "support",
                    "belt"
                ]
            },
            {
                "value": "台湾",
                "kana": [
                    "たいわん"
                ],
                "english": [
                    "Taiwan"
                ]
            },
            {
                "value": "舞台",
                "kana": [
                    "ぶたい"
                ],
                "english": [
                    "stage (theatre, theater)"
                ]
            },
            {
                "value": "台風",
                "kana": [
                    "たいふう"
                ],
                "english": [
                    "typhoon, hurricane"
                ]
            },
            {
                "value": "台所",
                "kana": [
                    "だいどころ",
                    "だいどこ"
                ],
                "english": [
                    "kitchen"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "谷",
        "on": [
            "こく"
        ],
        "kun": [
            "たに"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B0%B7#Kanji",
        "meanings": [
            "valley"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "谷",
                "kana": [
                    "たに"
                ],
                "english": [
                    "valley"
                ]
            },
            {
                "value": "谷川",
                "kana": [
                    "たにがわ"
                ],
                "english": [
                    "mountain stream"
                ]
            },
            {
                "value": "谷間",
                "kana": [
                    "たにま",
                    "たにあい"
                ],
                "english": [
                    "valley",
                    "ravine",
                    "chasm",
                    "dell",
                    "cleavage"
                ]
            },
            {
                "value": "渓谷",
                "kana": [
                    "けいこく"
                ],
                "english": [
                    "valley",
                    "ravine",
                    "canyon"
                ]
            },
            {
                "value": "峡谷",
                "kana": [
                    "きょうこく"
                ],
                "english": [
                    "glen",
                    "ravine",
                    "gorge",
                    "canyon"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "知",
        "on": [
            "ち"
        ],
        "kun": [
            "しる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9F%A5#Kanji",
        "meanings": [
            "know",
            "wisdom"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "知る",
                "kana": [
                    "しる"
                ],
                "english": [
                    "to know",
                    "to understand",
                    "to be acquainted with"
                ]
            },
            {
                "value": "知事",
                "kana": [
                    "ちじ"
                ],
                "english": [
                    "prefectural governor"
                ]
            },
            {
                "value": "知らん顔",
                "kana": [
                    "しらんかお"
                ],
                "english": [
                    "unconcerned air",
                    "indifference"
                ]
            },
            {
                "value": "県知事",
                "kana": [
                    "けんちじ"
                ],
                "english": [
                    "prefectural governor"
                ]
            },
            {
                "value": "知識",
                "kana": [
                    "ちしき"
                ],
                "english": [
                    "knowledge",
                    "information"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "地",
        "on": [
            "じ",
            "ち"
        ],
        "kun": [
            "つち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%9C%B0#Kanji",
        "meanings": [
            "ground",
            "earth"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "地",
                "kana": [
                    "ち"
                ],
                "english": [
                    "earth",
                    "ground",
                    "land",
                    "soil",
                    "territory"
                ]
            },
            {
                "value": "現地",
                "kana": [
                    "げんち"
                ],
                "english": [
                    "actual place",
                    "local"
                ]
            },
            {
                "value": "地域",
                "kana": [
                    "ちいき"
                ],
                "english": [
                    "area",
                    "region"
                ]
            },
            {
                "value": "地球",
                "kana": [
                    "ちきゅう"
                ],
                "english": [
                    "the earth"
                ]
            },
            {
                "value": "地区",
                "kana": [
                    "ちく"
                ],
                "english": [
                    "district",
                    "section",
                    "sector"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "池",
        "on": [
            "ち"
        ],
        "kun": [
            "いけ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B1%A0#Kanji",
        "meanings": [
            "pond",
            "cistern",
            "pool",
            "reservoir"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "池",
                "kana": [
                    "いけ"
                ],
                "english": [
                    "pond"
                ]
            },
            {
                "value": "電池",
                "kana": [
                    "でんち"
                ],
                "english": [
                    "battery"
                ]
            },
            {
                "value": "太陽電池",
                "kana": [
                    "たいようでんち"
                ],
                "english": [
                    "solar battery"
                ]
            },
            {
                "value": "乾電池",
                "kana": [
                    "かんでんち"
                ],
                "english": [
                    "dry cell",
                    "battery"
                ]
            },
            {
                "value": "貯水池",
                "kana": [
                    "ちょすいち"
                ],
                "english": [
                    "reservoir"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "茶",
        "on": [
            "ちゃ",
            "さ"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E8%8C%B6#Kanji",
        "meanings": [
            "tea"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "茶",
                "kana": [
                    "ちゃ"
                ],
                "english": [
                    "tea",
                    "tea plant"
                ]
            },
            {
                "value": "お茶",
                "kana": [
                    "おちゃ"
                ],
                "english": [
                    "tea",
                    "tea break"
                ]
            },
            {
                "value": "喫茶店",
                "kana": [
                    "きっさてん"
                ],
                "english": [
                    "coffee lounge",
                    "coffee shop"
                ]
            },
            {
                "value": "紅茶",
                "kana": [
                    "こうちゃ"
                ],
                "english": [
                    "black tea"
                ]
            },
            {
                "value": "茶色",
                "kana": [
                    "ちゃいろ"
                ],
                "english": [
                    "light brown",
                    "tawny"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "昼",
        "on": [
            "ちゅう"
        ],
        "kun": [
            "ひる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%98%BC#Kanji",
        "meanings": [
            "daytime",
            "noon"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "昼",
                "kana": [
                    "ひる"
                ],
                "english": [
                    "noon",
                    "midday",
                    "daytime",
                    "lunch"
                ]
            },
            {
                "value": "昼食",
                "kana": [
                    "ちゅうしょく",
                    "ちゅうじき",
                    "ひるげ"
                ],
                "english": [
                    "lunch",
                    "midday meal"
                ]
            },
            {
                "value": "昼間",
                "kana": [
                    "ひるま",
                    "ちゅうかん"
                ],
                "english": [
                    "daytime",
                    "during the day"
                ]
            },
            {
                "value": "昼過ぎ",
                "kana": [
                    "ひるすぎ"
                ],
                "english": [
                    "afternoon"
                ]
            },
            {
                "value": "昼夜",
                "kana": [
                    "ちゅうや"
                ],
                "english": [
                    "day and night"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "朝",
        "on": [
            "ちょう"
        ],
        "kun": [
            "あさ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%9D#Kanji",
        "meanings": [
            "morning",
            "dynasty",
            "regime",
            "epoch",
            "period",
            "(North) Korea"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "朝",
                "kana": [
                    "あさ",
                    "あした"
                ],
                "english": [
                    "morning"
                ]
            },
            {
                "value": "北朝鮮",
                "kana": [
                    "きたちょうせん"
                ],
                "english": [
                    "North Korea"
                ]
            },
            {
                "value": "朝鮮",
                "kana": [
                    "ちょうせん"
                ],
                "english": [
                    "Korea"
                ]
            },
            {
                "value": "朝鮮民主主義人民共和国",
                "kana": [
                    "ちょうせんみんしゅしゅぎじんみんきょうわこく"
                ],
                "english": [
                    "Democratic People’s Republic of Korea (North Korea), DPRK"
                ]
            },
            {
                "value": "朝鮮半島",
                "kana": [
                    "ちょうせんはんとう"
                ],
                "english": [
                    "Korean peninsula"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "長",
        "on": [
            "ちょう"
        ],
        "kun": [
            "ながい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%95%B7#Kanji",
        "meanings": [
            "long",
            "leader"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "長",
                "kana": [
                    "ちょう",
                    "おさ"
                ],
                "english": [
                    "chief",
                    "head"
                ]
            },
            {
                "value": "委員長",
                "kana": [
                    "いいんちょう"
                ],
                "english": [
                    "committee chairman"
                ]
            },
            {
                "value": "会長",
                "kana": [
                    "かいちょう"
                ],
                "english": [
                    "president (of a society), chairman"
                ]
            },
            {
                "value": "議長",
                "kana": [
                    "ぎちょう"
                ],
                "english": [
                    "chairman",
                    "speaker"
                ]
            },
            {
                "value": "社長",
                "kana": [
                    "しゃちょう"
                ],
                "english": [
                    "company president",
                    "manager",
                    "director"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "鳥",
        "on": [
            "ちょう"
        ],
        "kun": [
            "とり"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%B3%A5#Kanji",
        "meanings": [
            "bird",
            "chicken"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "鳥",
                "kana": [
                    "とり"
                ],
                "english": [
                    "bird meat",
                    "fowl"
                ]
            },
            {
                "value": "野鳥",
                "kana": [
                    "やちょう"
                ],
                "english": [
                    "wild bird"
                ]
            },
            {
                "value": "鳥類",
                "kana": [
                    "ちょうるい"
                ],
                "english": [
                    "birds"
                ]
            },
            {
                "value": "白鳥",
                "kana": [
                    "はくちょう",
                    "しろとり",
                    "しらとり"
                ],
                "english": [
                    "swan"
                ]
            },
            {
                "value": "渡り鳥",
                "kana": [
                    "わたりどり"
                ],
                "english": [
                    "migratory bird",
                    "bird of passage"
                ]
            }
        ],
        "tags": [
            "animal"
        ]
    },
    {
        "name": "直",
        "on": [
            "じき",
            "ちょく"
        ],
        "kun": [
            "ただちに",
            "なおす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9B%B4#Kanji",
        "meanings": [
            "straightaway",
            "honesty",
            "frankness",
            "fix",
            "repair"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "直",
                "kana": [
                    "じき"
                ],
                "english": [
                    "soon",
                    "in a moment",
                    "before long",
                    "shortly"
                ]
            },
            {
                "value": "直ちに",
                "kana": [
                    "ただちに"
                ],
                "english": [
                    "at once",
                    "immediately",
                    "directly",
                    "in person"
                ]
            },
            {
                "value": "見直し",
                "kana": [
                    "みなおし"
                ],
                "english": [
                    "review",
                    "reconsideration",
                    "revision"
                ]
            },
            {
                "value": "直後",
                "kana": [
                    "ちょくご"
                ],
                "english": [
                    "immediately following"
                ]
            },
            {
                "value": "直接",
                "kana": [
                    "ちょくせつ"
                ],
                "english": [
                    "direct",
                    "immediate",
                    "personal",
                    "firsthand"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "通",
        "on": [
            "つう"
        ],
        "kun": [
            "とおる",
            "かよう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%80%9A#Kanji",
        "meanings": [
            "pass-through",
            "commute",
            "traffic",
            "documents",
            "notes"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "通り",
                "kana": [
                    "どおり"
                ],
                "english": [
                    "in accordance with...",
                    "following..."
                ]
            },
            {
                "value": "通信",
                "kana": [
                    "つうしん"
                ],
                "english": [
                    "correspondence",
                    "communication",
                    "transmission"
                ]
            },
            {
                "value": "見通し",
                "kana": [
                    "みとおし"
                ],
                "english": [
                    "perspective",
                    "unobstructed view",
                    "outlook"
                ]
            },
            {
                "value": "共通",
                "kana": [
                    "きょうつう"
                ],
                "english": [
                    "commonness",
                    "community"
                ]
            },
            {
                "value": "交通",
                "kana": [
                    "こうつう"
                ],
                "english": [
                    "communication",
                    "transportation",
                    "traffic"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "弟",
        "on": [
            "だい",
            "てい"
        ],
        "kun": [
            "おとうと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%9F#Kanji",
        "meanings": [
            "younger brother"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "弟",
                "kana": [
                    "おとうと",
                    "おと",
                    "おとと",
                    "てい"
                ],
                "english": [
                    "younger brother",
                    "pupil",
                    "apprentice"
                ]
            },
            {
                "value": "兄弟",
                "kana": [
                    "きょうだい",
                    "けいてい"
                ],
                "english": [
                    "siblings",
                    "brothers and sisters"
                ]
            },
            {
                "value": "弟子",
                "kana": [
                    "でし",
                    "ていし"
                ],
                "english": [
                    "pupil",
                    "disciple",
                    "adherent",
                    "follower"
                ]
            },
            {
                "value": "実弟",
                "kana": [
                    "じってい"
                ],
                "english": [
                    "one’s (biological) younger brother"
                ]
            },
            {
                "value": "子弟",
                "kana": [
                    "してい"
                ],
                "english": [
                    "young(er) people"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "店",
        "on": [
            "てん"
        ],
        "kun": [
            "みせ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BA%97#Kanji",
        "meanings": [
            "store",
            "shop"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "支店",
                "kana": [
                    "してん"
                ],
                "english": [
                    "branch store (office)"
                ]
            },
            {
                "value": "百貨店",
                "kana": [
                    "ひゃっかてん"
                ],
                "english": [
                    "(department) store(s)"
                ]
            },
            {
                "value": "書店",
                "kana": [
                    "しょてん"
                ],
                "english": [
                    "bookshop, bookstore"
                ]
            },
            {
                "value": "店舗",
                "kana": [
                    "てんぽ"
                ],
                "english": [
                    "shop",
                    "store"
                ]
            },
            {
                "value": "商店",
                "kana": [
                    "しょうてん"
                ],
                "english": [
                    "shop",
                    "small store",
                    "business",
                    "firm"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "点",
        "on": [
            "てん"
        ],
        "kun": [
            "ぼち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%82%B9#Kanji",
        "meanings": [
            "point",
            "spot",
            "mark",
            "speck",
            "decimal point"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "点",
                "kana": [
                    "てん"
                ],
                "english": [
                    "spot",
                    "mark",
                    "point",
                    "dot",
                    "mark (e.g. in exam)"
                ]
            },
            {
                "value": "焦点",
                "kana": [
                    "しょうてん"
                ],
                "english": [
                    "focus (e.g. photographic)",
                    "focal point"
                ]
            },
            {
                "value": "拠点",
                "kana": [
                    "きょてん"
                ],
                "english": [
                    "position",
                    "location",
                    "base",
                    "point"
                ]
            },
            {
                "value": "時点",
                "kana": [
                    "じてん"
                ],
                "english": [
                    "point in time",
                    "occasion"
                ]
            },
            {
                "value": "得点",
                "kana": [
                    "とくてん"
                ],
                "english": [
                    "score",
                    "points made",
                    "marks obtained",
                    "runs"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "電",
        "on": [
            "でん"
        ],
        "kun": [
            "いなずま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9B%BB#Kanji",
        "meanings": [
            "electricity"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 13,
        "examples": [
            {
                "value": "電話",
                "kana": [
                    "でんわ"
                ],
                "english": [
                    "telephone"
                ]
            },
            {
                "value": "電気",
                "kana": [
                    "でんき"
                ],
                "english": [
                    "electricity",
                    "electric light"
                ]
            },
            {
                "value": "電力",
                "kana": [
                    "でんりょく"
                ],
                "english": [
                    "electric power"
                ]
            },
            {
                "value": "電子",
                "kana": [
                    "でんし"
                ],
                "english": [
                    "electron",
                    "electronic"
                ]
            },
            {
                "value": "電車",
                "kana": [
                    "でんしゃ"
                ],
                "english": [
                    "electric train"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "冬",
        "on": [
            "とう"
        ],
        "kun": [
            "ふゆ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%86%AC#Kanji",
        "meanings": [
            "winter"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "冬",
                "kana": [
                    "ふゆ"
                ],
                "english": [
                    "winter"
                ]
            },
            {
                "value": "冬季",
                "kana": [
                    "とうき"
                ],
                "english": [
                    "season of winter"
                ]
            },
            {
                "value": "暖冬",
                "kana": [
                    "だんとう"
                ],
                "english": [
                    "mild winter",
                    "warm winter"
                ]
            },
            {
                "value": "冬場",
                "kana": [
                    "ふゆば"
                ],
                "english": [
                    "the winter season"
                ]
            },
            {
                "value": "越冬",
                "kana": [
                    "えっとう"
                ],
                "english": [
                    "passing the winter"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "刀",
        "on": [
            "とう"
        ],
        "kun": [
            "かたな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%88%80#Kanji",
        "meanings": [
            "sword",
            "saber",
            "knife"
        ],
        "grade": 2,
        "jlpt": 1,
        "strokes": 2,
        "examples": [
            {
                "value": "刀",
                "kana": [
                    "かたな",
                    "とう"
                ],
                "english": [
                    "single edged sword",
                    "katana",
                    "dagger",
                    "knife"
                ]
            },
            {
                "value": "太刀打ち",
                "kana": [
                    "たちうち"
                ],
                "english": [
                    "crossing swords",
                    "opposition",
                    "contention"
                ]
            },
            {
                "value": "宝刀",
                "kana": [
                    "ほうとう"
                ],
                "english": [
                    "treasured sword"
                ]
            },
            {
                "value": "日本刀",
                "kana": [
                    "にほんとう"
                ],
                "english": [
                    "Japanese sword"
                ]
            },
            {
                "value": "刀剣",
                "kana": [
                    "とうけん"
                ],
                "english": [
                    "swords",
                    "cold steel"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "東",
        "on": [
            "とう"
        ],
        "kun": [
            "ひがし",
            "あずま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9D%B1#Kanji",
        "meanings": [
            "east"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 8,
        "examples": [
            {
                "value": "東",
                "kana": [
                    "ひがし",
                    "ひむかし",
                    "ひんがし"
                ],
                "english": [
                    "east"
                ]
            },
            {
                "value": "東京",
                "kana": [
                    "とうきょう"
                ],
                "english": [
                    "Tokyo"
                ]
            },
            {
                "value": "中東",
                "kana": [
                    "ちゅうとう"
                ],
                "english": [
                    "Middle East"
                ]
            },
            {
                "value": "東海",
                "kana": [
                    "とうかい"
                ],
                "english": [
                    "region south of Tokyo"
                ]
            },
            {
                "value": "東北",
                "kana": [
                    "とうほく",
                    "ひがしきた"
                ],
                "english": [
                    "Northeast China"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "当",
        "on": [
            "とう"
        ],
        "kun": [
            "あたる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BD%93#Kanji",
        "meanings": [
            "hit",
            "right",
            "appropriate",
            "himself"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "当局",
                "kana": [
                    "とうきょく"
                ],
                "english": [
                    "authorities",
                    "this office"
                ]
            },
            {
                "value": "当時",
                "kana": [
                    "とうじ"
                ],
                "english": [
                    "at that time",
                    "in those days"
                ]
            },
            {
                "value": "当初",
                "kana": [
                    "とうしょ"
                ],
                "english": [
                    "at first"
                ]
            },
            {
                "value": "担当",
                "kana": [
                    "たんとう"
                ],
                "english": [
                    "(in) charge"
                ]
            },
            {
                "value": "当たり",
                "kana": [
                    "あたり"
                ],
                "english": [
                    "hit",
                    "success",
                    "reaching the mark"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "答",
        "on": [
            "とう"
        ],
        "kun": [
            "こたえる",
            "こたえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%AD%94#Kanji",
        "meanings": [
            "answer",
            "solution"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "答え",
                "kana": [
                    "こたえ",
                    "いらえ"
                ],
                "english": [
                    "response",
                    "reply",
                    "answer",
                    "solution"
                ]
            },
            {
                "value": "回答",
                "kana": [
                    "かいとう"
                ],
                "english": [
                    "reply",
                    "answer"
                ]
            },
            {
                "value": "答申",
                "kana": [
                    "とうしん"
                ],
                "english": [
                    "report",
                    "reply",
                    "findings"
                ]
            },
            {
                "value": "答弁",
                "kana": [
                    "とうべん"
                ],
                "english": [
                    "response",
                    "reply",
                    "answer",
                    "defence",
                    "defense"
                ]
            },
            {
                "value": "応答",
                "kana": [
                    "おうとう"
                ],
                "english": [
                    "reply",
                    "answer",
                    "response"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "頭",
        "on": [
            "ず",
            "とう",
            "と"
        ],
        "kun": [
            "あたま",
            "かしら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A0%AD#Kanji",
        "meanings": [
            "head",
            "counter for large animals"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 16,
        "examples": [
            {
                "value": "冒頭",
                "kana": [
                    "ぼうとう"
                ],
                "english": [
                    "beginning",
                    "start",
                    "outset"
                ]
            },
            {
                "value": "先頭",
                "kana": [
                    "せんとう"
                ],
                "english": [
                    "head",
                    "lead",
                    "vanguard",
                    "first"
                ]
            },
            {
                "value": "店頭",
                "kana": [
                    "てんとう"
                ],
                "english": [
                    "shop front",
                    "counter",
                    "shop"
                ]
            },
            {
                "value": "頭取",
                "kana": [
                    "とうどり"
                ],
                "english": [
                    "bank",
                    "president"
                ]
            },
            {
                "value": "街頭",
                "kana": [
                    "がいとう"
                ],
                "english": [
                    "in the street"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "同",
        "on": [
            "どう"
        ],
        "kun": [
            "おなじ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%90%8C#Kanji",
        "meanings": [
            "same",
            "agree",
            "equal"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "同時",
                "kana": [
                    "どうじ"
                ],
                "english": [
                    "simultaneous(ly)",
                    "concurrent",
                    "same time"
                ]
            },
            {
                "value": "同社",
                "kana": [
                    "どうしゃ"
                ],
                "english": [
                    "the same firm"
                ]
            },
            {
                "value": "同日",
                "kana": [
                    "どうじつ"
                ],
                "english": [
                    "the same day"
                ]
            },
            {
                "value": "共同",
                "kana": [
                    "きょうどう"
                ],
                "english": [
                    "doing together (as equals)",
                    "sharing"
                ]
            },
            {
                "value": "同市",
                "kana": [
                    "どうし"
                ],
                "english": [
                    "same city"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "道",
        "on": [
            "どう",
            "とう"
        ],
        "kun": [
            "みち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%81%93#Kanji",
        "meanings": [
            "road",
            "street",
            "district",
            "journey",
            "course"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 11,
        "examples": [
            {
                "value": "道",
                "kana": [
                    "みち"
                ],
                "english": [
                    "road",
                    "street",
                    "way",
                    "path",
                    "course",
                    "route",
                    "lane"
                ]
            },
            {
                "value": "報道",
                "kana": [
                    "ほうどう"
                ],
                "english": [
                    "information",
                    "report",
                    "journalism"
                ]
            },
            {
                "value": "北海道",
                "kana": [
                    "ほっかいどう"
                ],
                "english": [
                    "Hokkaido"
                ]
            },
            {
                "value": "道路",
                "kana": [
                    "どうろ"
                ],
                "english": [
                    "road",
                    "highway"
                ]
            },
            {
                "value": "鉄道",
                "kana": [
                    "てつどう"
                ],
                "english": [
                    "railroad"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "読",
        "on": [
            "どく"
        ],
        "kun": [
            "よむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%AA%AD#Kanji",
        "meanings": [
            "read"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 14,
        "examples": [
            {
                "value": "読み",
                "kana": [
                    "よみ"
                ],
                "english": [
                    "reading"
                ]
            },
            {
                "value": "読者",
                "kana": [
                    "どくしゃ"
                ],
                "english": [
                    "reader"
                ]
            },
            {
                "value": "読書",
                "kana": [
                    "どくしょ",
                    "とくしょ"
                ],
                "english": [
                    "reading"
                ]
            },
            {
                "value": "読む",
                "kana": [
                    "よむ"
                ],
                "english": [
                    "to read"
                ]
            },
            {
                "value": "積ん読",
                "kana": [
                    "つんどく"
                ],
                "english": [
                    "buying books and not reading them"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "内",
        "on": [
            "ない",
            "だい"
        ],
        "kun": [
            "うち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%86%85#Kanji",
        "meanings": [
            "inside",
            "within",
            "between",
            "among",
            "house"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "内",
                "kana": [
                    "うち"
                ],
                "english": [
                    "inside",
                    "within",
                    "while",
                    "among",
                    "amongst"
                ]
            },
            {
                "value": "国内",
                "kana": [
                    "こくない"
                ],
                "english": [
                    "internal",
                    "domestic"
                ]
            },
            {
                "value": "市内",
                "kana": [
                    "しない"
                ],
                "english": [
                    "(within a) city",
                    "local"
                ]
            },
            {
                "value": "都内",
                "kana": [
                    "とない"
                ],
                "english": [
                    "metropolitan area"
                ]
            },
            {
                "value": "内閣",
                "kana": [
                    "ないかく"
                ],
                "english": [
                    "cabinet",
                    "(government) ministry"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "南",
        "on": [
            "なん"
        ],
        "kun": [
            "みなみ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8D%97#Kanji",
        "meanings": [
            "south"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 9,
        "examples": [
            {
                "value": "南",
                "kana": [
                    "みなみ"
                ],
                "english": [
                    "south"
                ]
            },
            {
                "value": "南アフリカ",
                "kana": [
                    "みなみアフリカ"
                ],
                "english": [
                    "South Africa"
                ]
            },
            {
                "value": "南北",
                "kana": [
                    "なんぼく"
                ],
                "english": [
                    "south and north"
                ]
            },
            {
                "value": "東南",
                "kana": [
                    "とうなん",
                    "ひがしみなみ"
                ],
                "english": [
                    "south east"
                ]
            },
            {
                "value": "南部",
                "kana": [
                    "なんぶ"
                ],
                "english": [
                    "southern part"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "肉",
        "on": [
            "にく"
        ],
        "kun": [
            "しし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%82%89#Kanji",
        "meanings": [
            "meat"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "肉",
                "kana": [
                    "にく",
                    "しし"
                ],
                "english": [
                    "flesh",
                    "meat"
                ]
            },
            {
                "value": "牛肉",
                "kana": [
                    "ぎゅうにく"
                ],
                "english": [
                    "beef"
                ]
            },
            {
                "value": "筋肉",
                "kana": [
                    "きんにく"
                ],
                "english": [
                    "muscle",
                    "sinew"
                ]
            },
            {
                "value": "肉親",
                "kana": [
                    "にくしん"
                ],
                "english": [
                    "blood relationship",
                    "blood relative"
                ]
            },
            {
                "value": "肉体",
                "kana": [
                    "にくたい"
                ],
                "english": [
                    "the body",
                    "the flesh"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "馬",
        "on": [
            "ば"
        ],
        "kun": [
            "うま",
            "ま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A6%AC#Kanji",
        "meanings": [
            "horse"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "馬",
                "kana": [
                    "うま"
                ],
                "english": [
                    "horse",
                    "promoted bishop (shogi)"
                ]
            },
            {
                "value": "出馬",
                "kana": [
                    "しゅつば"
                ],
                "english": [
                    "going on horseback",
                    "going in person"
                ]
            },
            {
                "value": "競馬",
                "kana": [
                    "けいば"
                ],
                "english": [
                    "horse racing"
                ]
            },
            {
                "value": "馬場",
                "kana": [
                    "ばば"
                ],
                "english": [
                    "horse riding ground"
                ]
            },
            {
                "value": "競馬場",
                "kana": [
                    "けいばじょう"
                ],
                "english": [
                    "racecourse",
                    "race track"
                ]
            }
        ],
        "tags": [
            "animal"
        ]
    },
    {
        "name": "買",
        "on": [
            "ばい"
        ],
        "kun": [
            "かう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B2%B7#Kanji",
        "meanings": [
            "buy"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 12,
        "examples": [
            {
                "value": "買い",
                "kana": [
                    "かい"
                ],
                "english": [
                    "buying",
                    "buyer",
                    "purchase"
                ]
            },
            {
                "value": "売買",
                "kana": [
                    "ばいばい"
                ],
                "english": [
                    "trade",
                    "buying and selling"
                ]
            },
            {
                "value": "買う",
                "kana": [
                    "かう"
                ],
                "english": [
                    "to buy",
                    "to value",
                    "to have a high opinion"
                ]
            },
            {
                "value": "買収",
                "kana": [
                    "ばいしゅう"
                ],
                "english": [
                    "buying",
                    "purchase",
                    "corruption",
                    "bribery"
                ]
            },
            {
                "value": "買い物",
                "kana": [
                    "かいもの"
                ],
                "english": [
                    "shopping",
                    "purchased goods"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "売",
        "on": [
            "ばい"
        ],
        "kun": [
            "うる",
            "うれる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A3%B2#Kanji",
        "meanings": [
            "sell"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "販売",
                "kana": [
                    "はんばい"
                ],
                "english": [
                    "sales",
                    "selling",
                    "marketing"
                ]
            },
            {
                "value": "売り",
                "kana": [
                    "うり"
                ],
                "english": [
                    "sale",
                    "selling",
                    "selling point",
                    "gimmick"
                ]
            },
            {
                "value": "売る",
                "kana": [
                    "うる"
                ],
                "english": [
                    "to sell"
                ]
            },
            {
                "value": "売買",
                "kana": [
                    "ばいばい"
                ],
                "english": [
                    "trade",
                    "buying and selling"
                ]
            },
            {
                "value": "発売",
                "kana": [
                    "はつばい"
                ],
                "english": [
                    "sale",
                    "offering for sale",
                    "release (for sale)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "麦",
        "on": [
            "ばく"
        ],
        "kun": [
            "むぎ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%BA%A6#Kanji",
        "meanings": [
            "barley",
            "wheat"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "麦",
                "kana": [
                    "むぎ"
                ],
                "english": [
                    "wheat",
                    "barley",
                    "oat"
                ]
            },
            {
                "value": "小麦",
                "kana": [
                    "こむぎ"
                ],
                "english": [
                    "wheat"
                ]
            },
            {
                "value": "小麦粉",
                "kana": [
                    "こむぎこ"
                ],
                "english": [
                    "wheat flour"
                ]
            },
            {
                "value": "麦芽",
                "kana": [
                    "ばくが"
                ],
                "english": [
                    "malt"
                ]
            },
            {
                "value": "大麦",
                "kana": [
                    "おおむぎ"
                ],
                "english": [
                    "barley (Hordeum vulgare)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "半",
        "on": [
            "はん"
        ],
        "kun": [
            "なかば"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8D%8A#Kanji",
        "meanings": [
            "half",
            "middle",
            "odd number"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "半",
                "kana": [
                    "はん"
                ],
                "english": [
                    "half"
                ]
            },
            {
                "value": "時半",
                "kana": [
                    "じはん"
                ],
                "english": [
                    "about an hour",
                    "short time"
                ]
            },
            {
                "value": "後半",
                "kana": [
                    "こうはん"
                ],
                "english": [
                    "second half",
                    "latter half"
                ]
            },
            {
                "value": "半ば",
                "kana": [
                    "なかば"
                ],
                "english": [
                    "middle",
                    "half",
                    "semi",
                    "halfway",
                    "partly"
                ]
            },
            {
                "value": "半分",
                "kana": [
                    "はんぶん"
                ],
                "english": [
                    "half"
                ]
            }
        ],
        "tags": [
            "time",
            "size"
        ]
    },
    {
        "name": "番",
        "on": [
            "ばん"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E7%95%AA#Kanji",
        "meanings": [
            "number",
            "turn",
            "number in a series"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "一番",
                "kana": [
                    "いちばん"
                ],
                "english": [
                    "best",
                    "first",
                    "number one",
                    "game",
                    "round",
                    "bout"
                ]
            },
            {
                "value": "番組",
                "kana": [
                    "ばんぐみ"
                ],
                "english": [
                    "program (e.g. TV)",
                    "programme"
                ]
            },
            {
                "value": "番号",
                "kana": [
                    "ばんごう"
                ],
                "english": [
                    "number",
                    "series of digits"
                ]
            },
            {
                "value": "本番",
                "kana": [
                    "ほんばん"
                ],
                "english": [
                    "performance",
                    "take"
                ]
            },
            {
                "value": "番手",
                "kana": [
                    "ばんて"
                ],
                "english": [
                    "(yarn) count",
                    "nth place (e.g. in a race)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "父",
        "on": [
            "ふ"
        ],
        "kun": [
            "ちち"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%88%B6#Kanji",
        "meanings": [
            "father"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "父",
                "kana": [
                    "ちち"
                ],
                "english": [
                    "father (your own)"
                ]
            },
            {
                "value": "お父さん",
                "kana": [
                    "おとうさん"
                ],
                "english": [
                    "father (someone elses)"
                ]
            },
            {
                "value": "父親",
                "kana": [
                    "ちちおや"
                ],
                "english": [
                    "father"
                ]
            },
            {
                "value": "父母",
                "kana": [
                    "ふぼ",
                    "ちちはは"
                ],
                "english": [
                    "father and mother",
                    "parents"
                ]
            },
            {
                "value": "祖父",
                "kana": [
                    "そふ",
                    "じじ",
                    "じい"
                ],
                "english": [
                    "grandfather",
                    "old man"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "風",
        "on": [
            "ふ",
            "ふう"
        ],
        "kun": [
            "かぜ",
            "かざ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A2%A8#Kanji",
        "meanings": [
            "wind",
            "air",
            "style",
            "manner"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "風景",
                "kana": [
                    "ふうけい"
                ],
                "english": [
                    "scenery"
                ]
            },
            {
                "value": "台風",
                "kana": [
                    "たいふう"
                ],
                "english": [
                    "typhoon",
                    "hurricane"
                ]
            },
            {
                "value": "風土",
                "kana": [
                    "ふうど"
                ],
                "english": [
                    "natural features",
                    "topography",
                    "climate"
                ]
            },
            {
                "value": "風速",
                "kana": [
                    "ふうそく"
                ],
                "english": [
                    "wind speed"
                ]
            },
            {
                "value": "風潮",
                "kana": [
                    "ふうちょう"
                ],
                "english": [
                    "tide",
                    "current",
                    "tendency"
                ]
            }
        ],
        "tags": [
            "weather"
        ]
    },
    {
        "name": "分",
        "on": [
            "ふん",
            "ぶん"
        ],
        "kun": [
            "わかる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%88%86#Kanji",
        "meanings": [
            "minute",
            "understand"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "分け",
                "kana": [
                    "わけ"
                ],
                "english": [
                    "sharing",
                    "division",
                    "draw",
                    "tie"
                ]
            },
            {
                "value": "分ける",
                "kana": [
                    "わける"
                ],
                "english": [
                    "to divide",
                    "to separate",
                    "to make distinctions"
                ]
            },
            {
                "value": "自分",
                "kana": [
                    "じぶん"
                ],
                "english": [
                    "myself",
                    "yourself",
                    "oneself",
                    "himself",
                    "herself"
                ]
            },
            {
                "value": "部分",
                "kana": [
                    "ぶぶん"
                ],
                "english": [
                    "portion",
                    "section",
                    "part"
                ]
            },
            {
                "value": "分野",
                "kana": [
                    "ぶんや"
                ],
                "english": [
                    "field",
                    "sphere",
                    "realm",
                    "division",
                    "branch"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "聞",
        "on": [
            "もん"
        ],
        "kun": [
            "きく"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%81%9E#Kanji",
        "meanings": [
            "hear",
            "ask",
            "listen"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 14,
        "examples": [
            {
                "value": "聞かす",
                "kana": [
                    "きかす"
                ],
                "english": [
                    "to inform about",
                    "to read to",
                    "to sing for"
                ]
            },
            {
                "value": "新聞",
                "kana": [
                    "しんぶん"
                ],
                "english": [
                    "newspaper"
                ]
            },
            {
                "value": "新聞社",
                "kana": [
                    "しんぶんしゃ"
                ],
                "english": [
                    "newspaper company"
                ]
            },
            {
                "value": "聞き手",
                "kana": [
                    "ききて"
                ],
                "english": [
                    "hearer",
                    "listener",
                    "audience",
                    "interviewer"
                ]
            },
            {
                "value": "新聞紙",
                "kana": [
                    "しんぶんし"
                ],
                "english": [
                    "newsprint",
                    "newspaper"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "米",
        "on": [
            "まい",
            "べい"
        ],
        "kun": [
            "こめ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B1%B3#Kanji",
        "meanings": [
            "rice",
            "USA",
            "metre"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "日米",
                "kana": [
                    "にちべい"
                ],
                "english": [
                    "Japan",
                    "America"
                ]
            },
            {
                "value": "米国",
                "kana": [
                    "べいこく"
                ],
                "english": [
                    "America",
                    "USA"
                ]
            },
            {
                "value": "全米",
                "kana": [
                    "ぜんべい"
                ],
                "english": [
                    "American"
                ]
            },
            {
                "value": "対米",
                "kana": [
                    "たいべい"
                ],
                "english": [
                    "relating to the USA",
                    "toward America"
                ]
            },
            {
                "value": "訪米",
                "kana": [
                    "ほうべい"
                ],
                "english": [
                    "visit to America"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "歩",
        "on": [
            "ほ",
            "ぶ",
            "ふ"
        ],
        "kun": [
            "あるく",
            "あゆむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AD%A9#Kanji",
        "meanings": [
            "walk",
            "counter for steps"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "歩",
                "kana": [
                    "ほ"
                ],
                "english": [
                    "step",
                    "stride",
                    "counter for steps"
                ]
            },
            {
                "value": "公定歩合",
                "kana": [
                    "こうていぶあい"
                ],
                "english": [
                    "official discount (bank) rate"
                ]
            },
            {
                "value": "一歩",
                "kana": [
                    "いっぽ"
                ],
                "english": [
                    "(a) step",
                    "level",
                    "stage",
                    "small degree"
                ]
            },
            {
                "value": "譲歩",
                "kana": [
                    "じょうほ"
                ],
                "english": [
                    "concession",
                    "conciliation",
                    "compromise"
                ]
            },
            {
                "value": "歩み",
                "kana": [
                    "あゆみ"
                ],
                "english": [
                    "walking",
                    "progress",
                    "advance"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "母",
        "on": [
            "ぼう"
        ],
        "kun": [
            "はは"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AF%8D#Kanji",
        "meanings": [
            "mother"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "母",
                "kana": [
                    "はは"
                ],
                "english": [
                    "mother"
                ]
            },
            {
                "value": "お母さん",
                "kana": [
                    "おかあさん"
                ],
                "english": [
                    "mother"
                ]
            },
            {
                "value": "母親",
                "kana": [
                    "ははおや"
                ],
                "english": [
                    "mother"
                ]
            },
            {
                "value": "父母",
                "kana": [
                    "ふぼ",
                    "ちちはは"
                ],
                "english": [
                    "father and mother, parents"
                ]
            },
            {
                "value": "母体",
                "kana": [
                    "ぼたい"
                ],
                "english": [
                    "mother’s body"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "方",
        "on": [
            "ほう"
        ],
        "kun": [
            "かた"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%96%B9#Kanji",
        "meanings": [
            "direction",
            "person",
            "alternative"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "一方",
                "kana": [
                    "いっぽう"
                ],
                "english": [
                    "one (esp. of two)",
                    "the other",
                    "one way"
                ]
            },
            {
                "value": "見方",
                "kana": [
                    "みかた"
                ],
                "english": [
                    "viewpoint"
                ]
            },
            {
                "value": "地方",
                "kana": [
                    "ちほう",
                    "じかた"
                ],
                "english": [
                    "area",
                    "locality",
                    "district",
                    "region",
                    "province"
                ]
            },
            {
                "value": "方向",
                "kana": [
                    "ほうこう"
                ],
                "english": [
                    "direction, orientation, bearing, way"
                ]
            },
            {
                "value": "方針",
                "kana": [
                    "ほうしん"
                ],
                "english": [
                    "objective, plan, policy"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "北",
        "on": [
            "ほく"
        ],
        "kun": [
            "きた"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8C%97#Kanji",
        "meanings": [
            "north"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 5,
        "examples": [
            {
                "value": "北",
                "kana": [
                    "きた"
                ],
                "english": [
                    "north"
                ]
            },
            {
                "value": "北海道",
                "kana": [
                    "ほっかいどう"
                ],
                "english": [
                    "Hokkaido"
                ]
            },
            {
                "value": "北京",
                "kana": [
                    "ぺきん"
                ],
                "english": [
                    "Beijing"
                ]
            },
            {
                "value": "北朝鮮",
                "kana": [
                    "きたちょうせん"
                ],
                "english": [
                    "North Korea"
                ]
            },
            {
                "value": "東北",
                "kana": [
                    "とうほく",
                    "ひがしきた"
                ],
                "english": [
                    "north east"
                ]
            }
        ],
        "tags": [
            "direction"
        ]
    },
    {
        "name": "妹",
        "on": [
            "まい",
            "ばい"
        ],
        "kun": [
            "いもうと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A6%B9#Kanji",
        "meanings": [
            "younger sister"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "妹",
                "kana": [
                    "いもうと"
                ],
                "english": [
                    "younger sister"
                ]
            },
            {
                "value": "姉妹",
                "kana": [
                    "しまい",
                    "きょうだい"
                ],
                "english": [
                    "sisters"
                ]
            },
            {
                "value": "弟妹",
                "kana": [
                    "ていまい"
                ],
                "english": [
                    "younger brother and sister"
                ]
            },
            {
                "value": "義妹",
                "kana": [
                    "ぎまい",
                    "いもうと"
                ],
                "english": [
                    "sister in law (younger)"
                ]
            },
            {
                "value": "実妹",
                "kana": [
                    "じつまい"
                ],
                "english": [
                    "one’s younger sister"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "毎",
        "on": [
            "まい"
        ],
        "kun": [
            "ごと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AF%8E#Kanji",
        "meanings": [
            "every"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "毎日",
                "kana": [
                    "まいにち"
                ],
                "english": [
                    "every day"
                ]
            },
            {
                "value": "毎年",
                "kana": [
                    "まいとし",
                    "まいねん"
                ],
                "english": [
                    "every year",
                    "yearly",
                    "annually"
                ]
            },
            {
                "value": "毎週",
                "kana": [
                    "まいしゅう"
                ],
                "english": [
                    "every week"
                ]
            },
            {
                "value": "毎月",
                "kana": [
                    "まいげつ",
                    "まいつき"
                ],
                "english": [
                    "every month",
                    "each month",
                    "monthly"
                ]
            },
            {
                "value": "毎回",
                "kana": [
                    "まいかい"
                ],
                "english": [
                    "every time",
                    "each round"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "万",
        "on": [
            "まん"
        ],
        "kun": [
            "よろず"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%87#Kanji",
        "meanings": [
            "ten thousand"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 3,
        "examples": [
            {
                "value": "十万",
                "kana": [
                    "じゅうまん"
                ],
                "english": [
                    "100,000",
                    "hundred thousand"
                ]
            },
            {
                "value": "百万",
                "kana": [
                    "ひゃくまん"
                ],
                "english": [
                    "1,000,000",
                    "one million",
                    "many"
                ]
            },
            {
                "value": "万全",
                "kana": [
                    "ばんぜん"
                ],
                "english": [
                    "perfection",
                    "flawlessness"
                ]
            },
            {
                "value": "数万",
                "kana": [
                    "すうまん"
                ],
                "english": [
                    "tens of thousands"
                ]
            },
            {
                "value": "万里",
                "kana": [
                    "ばんり"
                ],
                "english": [
                    "thousands of miles"
                ]
            }
        ],
        "tags": [
            "number"
        ]
    },
    {
        "name": "明",
        "on": [
            "めい"
        ],
        "kun": [
            "あかるい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%98%8E#Kanji",
        "meanings": [
            "bright",
            "light"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "新た",
                "kana": [
                    "あらた"
                ],
                "english": [
                    "obvious",
                    "evident",
                    "clear",
                    "plain"
                ]
            },
            {
                "value": "新党",
                "kana": [
                    "しんとう"
                ],
                "english": [
                    "declaration",
                    "statement",
                    "proclamation"
                ]
            },
            {
                "value": "新聞",
                "kana": [
                    "しんぶん"
                ],
                "english": [
                    "explanation",
                    "exposition"
                ]
            },
            {
                "value": "新人",
                "kana": [
                    "しんじん"
                ],
                "english": [
                    "unknown",
                    "obscure",
                    "indistinct",
                    "uncertain"
                ]
            },
            {
                "value": "新生",
                "kana": [
                    "しんせい"
                ],
                "english": [
                    "clear up",
                    "clarify",
                    "define"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "鳴",
        "on": [
            "めい"
        ],
        "kun": [
            "なく",
            "なる",
            "ならす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%B3%B4#Kanji",
        "meanings": [
            "chirp",
            "cry",
            "bark",
            "sound",
            "ring",
            "echo",
            "honk"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 14,
        "examples": [
            {
                "value": "鳴り",
                "kana": [
                    "なり"
                ],
                "english": [
                    "ringing",
                    "sound"
                ]
            },
            {
                "value": "悲鳴",
                "kana": [
                    "ひめい"
                ],
                "english": [
                    "shriek",
                    "scream"
                ]
            },
            {
                "value": "鳴き声",
                "kana": [
                    "なきごえ"
                ],
                "english": [
                    "cry (esp. animal)",
                    "roar"
                ]
            },
            {
                "value": "鳴門",
                "kana": [
                    "なると",
                    "なるとまき"
                ],
                "english": [
                    "steamed fish",
                    "paste cake"
                ]
            },
            {
                "value": "怒鳴り込む",
                "kana": [
                    "どなりこむ"
                ],
                "english": [
                    "to storm in with a yell"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "毛",
        "on": [
            "もう"
        ],
        "kun": [
            "け"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AF%9B#Kanji",
        "meanings": [
            "hair",
            "fur",
            "feather"
        ],
        "grade": 2,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "毛",
                "kana": [
                    "け"
                ],
                "english": [
                    "hair",
                    "fur"
                ]
            },
            {
                "value": "毛布",
                "kana": [
                    "もうふ"
                ],
                "english": [
                    "blanket"
                ]
            },
            {
                "value": "毛皮",
                "kana": [
                    "けがわ",
                    "もうひ"
                ],
                "english": [
                    "fur",
                    "skin",
                    "pelt"
                ]
            },
            {
                "value": "髪の毛",
                "kana": [
                    "かみのけ"
                ],
                "english": [
                    "hair (head)"
                ]
            },
            {
                "value": "羽毛",
                "kana": [
                    "うもう"
                ],
                "english": [
                    "feathers",
                    "plumage",
                    "down"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "門",
        "on": [
            "もん"
        ],
        "kun": [
            "かど"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%96%80#Kanji",
        "meanings": [
            "gate",
            "counter for cannons"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "門",
                "kana": [
                    "かど, もん"
                ],
                "english": [
                    "gate"
                ]
            },
            {
                "value": "部門",
                "kana": [
                    "ぶもん"
                ],
                "english": [
                    "class",
                    "group",
                    "category",
                    "department",
                    "field"
                ]
            },
            {
                "value": "専門",
                "kana": [
                    "せんもん"
                ],
                "english": [
                    "speciality",
                    "subject of study"
                ]
            },
            {
                "value": "専門家",
                "kana": [
                    "せんもんか"
                ],
                "english": [
                    "specialist"
                ]
            },
            {
                "value": "専門学校",
                "kana": [
                    "せんもんがっこう",
                    "せんもんガッコウ",
                    "せんもんガッコ"
                ],
                "english": [
                    "vocational school",
                    "technical school"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "夜",
        "on": [
            "や"
        ],
        "kun": [
            "よる",
            "よ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A4%9C#Kanji",
        "meanings": [
            "night",
            "evening"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "夜",
                "kana": [
                    "よる",
                    "よ"
                ],
                "english": [
                    "evening",
                    "night"
                ]
            },
            {
                "value": "深夜",
                "kana": [
                    "しんや"
                ],
                "english": [
                    "late at night"
                ]
            },
            {
                "value": "日夜",
                "kana": [
                    "にちや"
                ],
                "english": [
                    "day and night",
                    "always"
                ]
            },
            {
                "value": "夜間",
                "kana": [
                    "やかん"
                ],
                "english": [
                    "at night",
                    "nighttime"
                ]
            },
            {
                "value": "前夜",
                "kana": [
                    "ぜんや"
                ],
                "english": [
                    "last night",
                    "the previous night"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "野",
        "on": [
            "や"
        ],
        "kun": [
            "の"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%87%8E#Kanji",
        "meanings": [
            "field",
            "plains",
            "rustic",
            "civilian life"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "野",
                "kana": [
                    "の",
                    "や",
                    "ぬ"
                ],
                "english": [
                    "plain",
                    "field",
                    "hidden (structural) member"
                ]
            },
            {
                "value": "分野",
                "kana": [
                    "ぶんや"
                ],
                "english": [
                    "field",
                    "sphere",
                    "realm",
                    "division",
                    "branch"
                ]
            },
            {
                "value": "野球",
                "kana": [
                    "やきゅう"
                ],
                "english": [
                    "baseball"
                ]
            },
            {
                "value": "野党",
                "kana": [
                    "やとう"
                ],
                "english": [
                    "opposition party",
                    "political opposition"
                ]
            },
            {
                "value": "与野党",
                "kana": [
                    "よやとう"
                ],
                "english": [
                    "(political) parties in and out of power"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "矢",
        "on": [
            "し"
        ],
        "kun": [
            "や"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9F%A2#Kanji",
        "meanings": [
            "dart",
            "arrow"
        ],
        "grade": 2,
        "jlpt": 1,
        "strokes": 5,
        "examples": [
            {
                "value": "矢",
                "kana": [
                    "や",
                    "さ"
                ],
                "english": [
                    "arrow"
                ]
            },
            {
                "value": "矢先",
                "kana": [
                    "やさき"
                ],
                "english": [
                    "arrowhead",
                    "brunt",
                    "target"
                ]
            },
            {
                "value": "矢面",
                "kana": [
                    "やおもて"
                ],
                "english": [
                    "bearing the full brunt of something"
                ]
            },
            {
                "value": "矢継ぎ早",
                "kana": [
                    "やつぎばや"
                ],
                "english": [
                    "rapid succession (e.g. questions)"
                ]
            },
            {
                "value": "一矢",
                "kana": [
                    "いっし"
                ],
                "english": [
                    "an arrow, (a) retort"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "友",
        "on": [
            "ゆう"
        ],
        "kun": [
            "とも"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%8B#Kanji",
        "meanings": [
            "friend"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 4,
        "examples": [
            {
                "value": "友",
                "kana": [
                    "とも"
                ],
                "english": [
                    "friend",
                    "companion",
                    "pal"
                ]
            },
            {
                "value": "友人",
                "kana": [
                    "ゆうじん"
                ],
                "english": [
                    "friend"
                ]
            },
            {
                "value": "友好",
                "kana": [
                    "ゆうこう"
                ],
                "english": [
                    "friendship"
                ]
            },
            {
                "value": "友達",
                "kana": [
                    "ともだち"
                ],
                "english": [
                    "friend",
                    "companion"
                ]
            },
            {
                "value": "住友",
                "kana": [
                    "すみとも"
                ],
                "english": [
                    "Sumitomo (company)"
                ]
            }
        ],
        "tags": [
            "family"
        ]
    },
    {
        "name": "曜",
        "on": [
            "よう"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E6%9B%9C#Kanji",
        "meanings": [
            "weekday"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 18,
        "examples": [
            {
                "value": "土曜",
                "kana": [
                    "どよう"
                ],
                "english": [
                    "Saturday"
                ]
            },
            {
                "value": "曜日",
                "kana": [
                    "ようび"
                ],
                "english": [
                    "Day of the week"
                ]
            },
            {
                "value": "日曜",
                "kana": [
                    "にちよう"
                ],
                "english": [
                    "Sunday"
                ]
            },
            {
                "value": "金曜",
                "kana": [
                    "きんよう"
                ],
                "english": [
                    "Friday"
                ]
            },
            {
                "value": "月曜",
                "kana": [
                    "げつよう"
                ],
                "english": [
                    "Monday"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "用",
        "on": [
            "よう"
        ],
        "kun": [
            "もちいる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%A8#Kanji",
        "meanings": [
            "use",
            "business",
            "service",
            "employ"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "雇用",
                "kana": [
                    "こよう"
                ],
                "english": [
                    "employment (long term)",
                    "hire"
                ]
            },
            {
                "value": "採用",
                "kana": [
                    "さいよう"
                ],
                "english": [
                    "use",
                    "adoption",
                    "acceptance",
                    "appointment"
                ]
            },
            {
                "value": "使用",
                "kana": [
                    "しよう"
                ],
                "english": [
                    "use",
                    "application",
                    "employment",
                    "utilisation"
                ]
            },
            {
                "value": "費用",
                "kana": [
                    "ひよう"
                ],
                "english": [
                    "cost",
                    "expense"
                ]
            },
            {
                "value": "利用",
                "kana": [
                    "りよう"
                ],
                "english": [
                    "use",
                    "utilisation",
                    "application"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "来",
        "on": [
            "らい"
        ],
        "kun": [
            "くる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9D%A5#Kanji",
        "meanings": [
            "come",
            "due",
            "next",
            "cause",
            "become"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 7,
        "examples": [
            {
                "value": "来",
                "kana": [
                    "らい"
                ],
                "english": [
                    "next"
                ]
            },
            {
                "value": "以来",
                "kana": [
                    "いらい"
                ],
                "english": [
                    "since",
                    "henceforth"
                ]
            },
            {
                "value": "従来",
                "kana": [
                    "じゅうらい"
                ],
                "english": [
                    "up to now",
                    "so far",
                    "traditional"
                ]
            },
            {
                "value": "将来",
                "kana": [
                    "しょうらい"
                ],
                "english": [
                    "future",
                    "prospects"
                ]
            },
            {
                "value": "来年",
                "kana": [
                    "らいねん"
                ],
                "english": [
                    "next year"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "理",
        "on": [
            "り"
        ],
        "kun": [
            "ことわり"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%90%86#Kanji",
        "meanings": [
            "reason",
            "logic",
            "arrangement",
            "justice",
            "truth"
        ],
        "grade": 2,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "理",
                "kana": [
                    "り"
                ],
                "english": [
                    "reason",
                    "principle",
                    "logic"
                ]
            },
            {
                "value": "管理",
                "kana": [
                    "かんり"
                ],
                "english": [
                    "control",
                    "management (e.g. of a business)"
                ]
            },
            {
                "value": "理事",
                "kana": [
                    "りじ"
                ],
                "english": [
                    "director",
                    "board of directors"
                ]
            },
            {
                "value": "理由",
                "kana": [
                    "りゆう"
                ],
                "english": [
                    "reason",
                    "pretext",
                    "motive"
                ]
            },
            {
                "value": "処理",
                "kana": [
                    "しょり"
                ],
                "english": [
                    "processing",
                    "dealing with",
                    "treatment"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "里",
        "on": [
            "り"
        ],
        "kun": [
            "さと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%87%8C#Kanji",
        "meanings": [
            "ri",
            "village",
            "parent's home",
            "league"
        ],
        "grade": 2,
        "jlpt": 1,
        "strokes": 7,
        "examples": [
            {
                "value": "里",
                "kana": [
                    "り"
                ],
                "english": [
                    "ri (old Japanese unit of distance)"
                ]
            },
            {
                "value": "千里",
                "kana": [
                    "せんり"
                ],
                "english": [
                    "1000 ri, (a) long distance"
                ]
            },
            {
                "value": "郷里",
                "kana": [
                    "きょうり"
                ],
                "english": [
                    "birth place",
                    "home town"
                ]
            },
            {
                "value": "万里",
                "kana": [
                    "ばんり"
                ],
                "english": [
                    "thousands of miles"
                ]
            },
            {
                "value": "里子",
                "kana": [
                    "さとご"
                ],
                "english": [
                    "foster child"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "話",
        "on": [
            "わ"
        ],
        "kun": [
            "はなし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A9%B1#Kanji",
        "meanings": [
            "tale",
            "talk"
        ],
        "grade": 2,
        "jlpt": 4,
        "strokes": 13,
        "examples": [
            {
                "value": "話",
                "kana": [
                    "はなし"
                ],
                "english": [
                    "talk",
                    "speech",
                    "chat",
                    "story",
                    "conversation"
                ]
            },
            {
                "value": "電話",
                "kana": [
                    "でんわ"
                ],
                "english": [
                    "telephone"
                ]
            },
            {
                "value": "対話",
                "kana": [
                    "たいわ"
                ],
                "english": [
                    "interactive",
                    "interaction",
                    "conversation"
                ]
            },
            {
                "value": "話題",
                "kana": [
                    "わだい"
                ],
                "english": [
                    "topic",
                    "subject"
                ]
            },
            {
                "value": "話し合い",
                "kana": [
                    "はなしあい"
                ],
                "english": [
                    "discussion",
                    "conference"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "悪",
        "on": [
            "あく"
        ],
        "kun": [
            "わるい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%82%AA#Kanji",
        "meanings": [
            "bad",
            "vice",
            "rascal",
            "false",
            "evil",
            "wrong"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "悪",
                "kana": [
                    "あく"
                ],
                "english": [
                    "evil",
                    "wickedness"
                ]
            },
            {
                "value": "悪化",
                "kana": [
                    "あっか"
                ],
                "english": [
                    "(suffer) deterioration",
                    "growing worse"
                ]
            },
            {
                "value": "最悪",
                "kana": [
                    "さいあく"
                ],
                "english": [
                    "the worst"
                ]
            },
            {
                "value": "悪さ",
                "kana": [
                    "わるさ"
                ],
                "english": [
                    "badness",
                    "mean mischief"
                ]
            },
            {
                "value": "悪質",
                "kana": [
                    "あくしつ"
                ],
                "english": [
                    "bad quality",
                    "malignancy",
                    "vicious",
                    "malignant"
                ]
            }
        ],
        "tags": [
            "adjective"
        ]
    },
    {
        "name": "安",
        "on": [
            "あん"
        ],
        "kun": [
            "やすい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AE%89#Kanji",
        "meanings": [
            "relax",
            "cheap",
            "low",
            "quiet",
            "rested",
            "contented",
            "peaceful"
        ],
        "grade": 3,
        "jlpt": 4,
        "strokes": 6,
        "examples": [
            {
                "value": "安全",
                "kana": [
                    "あんぜん"
                ],
                "english": [
                    "safety",
                    "security"
                ]
            },
            {
                "value": "安保",
                "kana": [
                    "あんぽ"
                ],
                "english": [
                    "US Japan Security Treaty",
                    "safety",
                    "security"
                ]
            },
            {
                "value": "安全保障",
                "kana": [
                    "あんぜんほしょう"
                ],
                "english": [
                    "security guarantee (e.g. military security"
                ]
            },
            {
                "value": "安定",
                "kana": [
                    "あんてい"
                ],
                "english": [
                    "stability",
                    "equilibrium"
                ]
            },
            {
                "value": "不安",
                "kana": [
                    "ふあん"
                ],
                "english": [
                    "anxiety",
                    "uneasiness",
                    "insecurity",
                    "suspense"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "暗",
        "on": [
            "アン"
        ],
        "kun": [
            "くらい",
            "くらむ",
            "くれる"
        ],
        "source": "",
        "meanings": [
            "darkness",
            "disappear",
            "shade",
            "informal",
            "grow dark",
            "be blinded"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "委",
        "on": [
            "い"
        ],
        "kun": [
            "ゆだねる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A7%94#Kanji",
        "meanings": [
            "committee",
            "entrust to",
            "leave to",
            "devote",
            "discard"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "委員",
                "kana": [
                    "いいん"
                ],
                "english": [
                    "committee member"
                ]
            },
            {
                "value": "委員会",
                "kana": [
                    "いいんかい"
                ],
                "english": [
                    "committee",
                    "commission",
                    "board",
                    "panel"
                ]
            },
            {
                "value": "委員長",
                "kana": [
                    "いいんちょう"
                ],
                "english": [
                    "committee chairman"
                ]
            },
            {
                "value": "公取委",
                "kana": [
                    "こうとりい"
                ],
                "english": [
                    "Fair Trade Commission"
                ]
            },
            {
                "value": "委託",
                "kana": [
                    "いたく"
                ],
                "english": [
                    "consign (goods (for sale) to a firm)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "意",
        "on": [
            "い"
        ],
        "kun": [
            "こころ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%84%8F#Kanji",
        "meanings": [
            "idea",
            "mind",
            "heart",
            "taste",
            "thought",
            "desire",
            "care",
            "liking"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 13,
        "examples": [
            {
                "value": "意見",
                "kana": [
                    "いけん"
                ],
                "english": [
                    "opinion",
                    "view"
                ]
            },
            {
                "value": "意味",
                "kana": [
                    "いみ"
                ],
                "english": [
                    "meaning",
                    "significance"
                ]
            },
            {
                "value": "合意",
                "kana": [
                    "ごうい"
                ],
                "english": [
                    "agreement",
                    "consent",
                    "mutual understanding"
                ]
            },
            {
                "value": "意向",
                "kana": [
                    "いこう"
                ],
                "english": [
                    "intention",
                    "idea",
                    "inclination"
                ]
            },
            {
                "value": "意思",
                "kana": [
                    "いし"
                ],
                "english": [
                    "intention",
                    "purpose"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "医",
        "on": [
            "い"
        ],
        "kun": [
            "いやす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8C%BB#Kanji",
        "meanings": [
            "doctor",
            "medicine"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "医療",
                "kana": [
                    "いりょう"
                ],
                "english": [
                    "medical care",
                    "medical treatment"
                ]
            },
            {
                "value": "医学",
                "kana": [
                    "いがく"
                ],
                "english": [
                    "medical science",
                    "medicine"
                ]
            },
            {
                "value": "医師",
                "kana": [
                    "いし"
                ],
                "english": [
                    "doctor",
                    "physician"
                ]
            },
            {
                "value": "医",
                "kana": [
                    "い"
                ],
                "english": [
                    "medicine",
                    "the healing art",
                    "healing",
                    "curing"
                ]
            },
            {
                "value": "医薬品",
                "kana": [
                    "いやくひん"
                ],
                "english": [
                    "medical supplies"
                ]
            }
        ],
        "tags": [
            "occupation"
        ]
    },
    {
        "name": "育",
        "on": [
            "いく"
        ],
        "kun": [
            "そだつ",
            "そだてる",
            "はぐくむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%82%B2#Kanji",
        "meanings": [
            "bring up",
            "grow up",
            "raise",
            "rear"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "教育",
                "kana": [
                    "きょういく"
                ],
                "english": [
                    "training",
                    "education"
                ]
            },
            {
                "value": "体育",
                "kana": [
                    "たいいく"
                ],
                "english": [
                    "physical education",
                    "gymnastics",
                    "athletics"
                ]
            },
            {
                "value": "育児",
                "kana": [
                    "いくじ"
                ],
                "english": [
                    "childcare",
                    "nursing",
                    "upbringing"
                ]
            },
            {
                "value": "保育",
                "kana": [
                    "ほいく"
                ],
                "english": [
                    "nursing",
                    "nurturing",
                    "rearing",
                    "lactation"
                ]
            },
            {
                "value": "育成",
                "kana": [
                    "いくせい"
                ],
                "english": [
                    "rearing",
                    "training",
                    "nurture",
                    "cultivation"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "員",
        "on": [
            "いん"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E5%93%A1",
        "meanings": [
            "employee",
            "member",
            "number"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "委員",
                "kana": [
                    "いいん"
                ],
                "english": [
                    "committee member"
                ]
            },
            {
                "value": "委員会",
                "kana": [
                    "いいんかい"
                ],
                "english": [
                    "committee",
                    "commission",
                    "board",
                    "panel"
                ]
            },
            {
                "value": "委員長",
                "kana": [
                    "いいんちょう"
                ],
                "english": [
                    "committee chairman"
                ]
            },
            {
                "value": "会員",
                "kana": [
                    "かいいん"
                ],
                "english": [
                    "member",
                    "the membership"
                ]
            },
            {
                "value": "議員",
                "kana": [
                    "ぎいん"
                ],
                "english": [
                    "member of the Diet",
                    "congress or parliament"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "飲",
        "on": [
            "いん"
        ],
        "kun": [
            "のむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A3%B2#Kanji",
        "meanings": [
            "drink",
            "smoke",
            "take"
        ],
        "grade": 3,
        "jlpt": 4,
        "strokes": 12,
        "examples": [
            {
                "value": "飲食",
                "kana": [
                    "いんしょく"
                ],
                "english": [
                    "food and drink",
                    "eating and drinking"
                ]
            },
            {
                "value": "飲料",
                "kana": [
                    "いんりょう"
                ],
                "english": [
                    "a drink"
                ]
            },
            {
                "value": "飲酒",
                "kana": [
                    "いんしゅ"
                ],
                "english": [
                    "drinking alcohol (sake)"
                ]
            },
            {
                "value": "飲み物",
                "kana": [
                    "のみもの"
                ],
                "english": [
                    "drink",
                    "beverage"
                ]
            },
            {
                "value": "飲み水",
                "kana": [
                    "のみみず"
                ],
                "english": [
                    "drinking water"
                ]
            }
        ],
        "tags": [
            "verb",
            "food"
        ]
    },
    {
        "name": "院",
        "on": [
            "えん"
        ],
        "kun": [
            "いん"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%99%A2#Kanji",
        "meanings": [
            "Institution",
            "temple",
            "mansion",
            "school"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "参院",
                "kana": [
                    "さんいん"
                ],
                "english": [
                    "House of Councillors"
                ]
            },
            {
                "value": "衆院",
                "kana": [
                    "しゅういん"
                ],
                "english": [
                    "lower house of the Diet"
                ]
            },
            {
                "value": "病院",
                "kana": [
                    "びょういん"
                ],
                "english": [
                    "hospital"
                ]
            },
            {
                "value": "下院",
                "kana": [
                    "かいん"
                ],
                "english": [
                    "lower house",
                    "lower (legislative) body"
                ]
            },
            {
                "value": "上院",
                "kana": [
                    "じょういん"
                ],
                "english": [
                    "Upper House",
                    "Senate",
                    "Lords"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "運",
        "on": [
            "うん"
        ],
        "kun": [
            "はこぶ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%81%8B#Kanji",
        "meanings": [
            "carry",
            "luck",
            "destiny",
            "fate",
            "lot",
            "transport",
            "progress",
            "advance"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "運",
                "kana": [
                    "うん"
                ],
                "english": [
                    "fortune",
                    "luck"
                ]
            },
            {
                "value": "運ぶ",
                "kana": [
                    "はこぶ"
                ],
                "english": [
                    "to carry",
                    "to transport",
                    "to move",
                    "to convey"
                ]
            },
            {
                "value": "運動",
                "kana": [
                    "うんどう"
                ],
                "english": [
                    "motion",
                    "exercise"
                ]
            },
            {
                "value": "運営",
                "kana": [
                    "うんえい"
                ],
                "english": [
                    "management",
                    "administration",
                    "operation"
                ]
            },
            {
                "value": "運転",
                "kana": [
                    "うんてん"
                ],
                "english": [
                    "operation",
                    "motion",
                    "driving"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "泳",
        "on": [
            "エイ"
        ],
        "kun": [
            "およぐ"
        ],
        "source": "",
        "meanings": [
            "swim"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "駅",
        "on": [
            "えき"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E9%A7%85#Kanji",
        "meanings": [
            "station"
        ],
        "grade": 3,
        "jlpt": 4,
        "strokes": 14,
        "examples": [
            {
                "value": "駅",
                "kana": [
                    "えき"
                ],
                "english": [
                    "station"
                ]
            },
            {
                "value": "駅前",
                "kana": [
                    "えきまえ"
                ],
                "english": [
                    "in front of station"
                ]
            },
            {
                "value": "駅伝",
                "kana": [
                    "えきでん"
                ],
                "english": [
                    "stagecoach",
                    "post horse"
                ]
            },
            {
                "value": "宿駅",
                "kana": [
                    "しゅくえき"
                ],
                "english": [
                    "post town",
                    "relay station",
                    "stage"
                ]
            },
            {
                "value": "駅員",
                "kana": [
                    "えきいん"
                ],
                "english": [
                    "station attendant"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "央",
        "on": [
            "オウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "center",
            "middle"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "横",
        "on": [
            "オウ"
        ],
        "kun": [
            "よこ"
        ],
        "source": "",
        "meanings": [
            "sideways",
            "side",
            "horizontal",
            "width",
            "woof",
            "unreasonable",
            "perverse"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "屋",
        "on": [
            "おく"
        ],
        "kun": [
            "や"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B1%8B#Kanji",
        "meanings": [
            "roof",
            "house",
            "shop",
            "dealer",
            "seller"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "部屋",
                "kana": [
                    "へや"
                ],
                "english": [
                    "room",
                    "sumo stable"
                ]
            },
            {
                "value": "屋根",
                "kana": [
                    "やね"
                ],
                "english": [
                    "roof"
                ]
            },
            {
                "value": "総会屋",
                "kana": [
                    "そうかいや"
                ],
                "english": [
                    "extortionist that threatens to disruptstock"
                ]
            },
            {
                "value": "小屋",
                "kana": [
                    "こや"
                ],
                "english": [
                    "hut",
                    "cabin",
                    "shed",
                    "(animal) pen"
                ]
            },
            {
                "value": "屋上",
                "kana": [
                    "おくじょう"
                ],
                "english": [
                    "rooftop"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "温",
        "on": [
            "オン"
        ],
        "kun": [
            "あたたか",
            "あたたかい",
            "あたたまる",
            "あたためる",
            "ぬく"
        ],
        "source": "",
        "meanings": [
            "warm"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "化",
        "on": [
            "か",
            "け"
        ],
        "kun": [
            "ばける",
            "ばかす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8C%96#Kanji",
        "meanings": [
            "change",
            "take the form of",
            "influence",
            "enchant",
            "delude"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "強化",
                "kana": [
                    "きょうか"
                ],
                "english": [
                    "strengthen",
                    "intensify",
                    "reinforce",
                    "solidify"
                ]
            },
            {
                "value": "文化",
                "kana": [
                    "ぶんか"
                ],
                "english": [
                    "culture",
                    "civilisation"
                ]
            },
            {
                "value": "変化",
                "kana": [
                    "へんか"
                ],
                "english": [
                    "change",
                    "variation",
                    "alteration",
                    "mutation"
                ]
            },
            {
                "value": "悪化",
                "kana": [
                    "あっか"
                ],
                "english": [
                    "(suffer) deterioration",
                    "growing worse"
                ]
            },
            {
                "value": "化学",
                "kana": [
                    "かがく",
                    "ばけがく"
                ],
                "english": [
                    "chemistry"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "荷",
        "on": [
            "カ"
        ],
        "kun": [
            "に"
        ],
        "source": "",
        "meanings": [
            "baggage",
            "shoulder-pole load",
            "bear (a burden)",
            "shoulder (a gun)",
            "load",
            "cargo",
            "freight"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "界",
        "on": [
            "かい"
        ],
        "kun": [
            "さかい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%95%8C#Kanji",
        "meanings": [
            "world"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "業界",
                "kana": [
                    "ぎょうかい"
                ],
                "english": [
                    "industry, business"
                ]
            },
            {
                "value": "世界",
                "kana": [
                    "せかい"
                ],
                "english": [
                    "the world, society, the universe"
                ]
            },
            {
                "value": "政界",
                "kana": [
                    "せいかい"
                ],
                "english": [
                    "political world"
                ]
            },
            {
                "value": "財界",
                "kana": [
                    "ざいかい"
                ],
                "english": [
                    "financial world"
                ]
            },
            {
                "value": "限界",
                "kana": [
                    "げんかい"
                ],
                "english": [
                    "limit, bound"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "開",
        "on": [
            "かい"
        ],
        "kun": [
            "あける",
            "ひらく",
            "ひらける",
            "あく"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%96%8B#Kanji",
        "meanings": [
            "open",
            "unfold",
            "unseal"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "開発",
                "kana": [
                    "かいはつ"
                ],
                "english": [
                    "development",
                    "exploitation"
                ]
            },
            {
                "value": "開催",
                "kana": [
                    "かいさい"
                ],
                "english": [
                    "holding a meeting",
                    "open an exhibition"
                ]
            },
            {
                "value": "開始",
                "kana": [
                    "かいし"
                ],
                "english": [
                    "start",
                    "commencement",
                    "beginning",
                    "initiation"
                ]
            },
            {
                "value": "開放",
                "kana": [
                    "かいほう"
                ],
                "english": [
                    "open",
                    "throw open",
                    "liberalization"
                ]
            },
            {
                "value": "公開",
                "kana": [
                    "こうかい"
                ],
                "english": [
                    "open to the public"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "階",
        "on": [
            "カイ"
        ],
        "kun": [
            "きざはし"
        ],
        "source": "",
        "meanings": [
            "storey",
            "stair",
            "counter for storeys of a building"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "寒",
        "on": [
            "カン"
        ],
        "kun": [
            "さむい"
        ],
        "source": "",
        "meanings": [
            "cold"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "感",
        "on": [
            "かん"
        ],
        "kun": [
            "かんじる",
            "かまける"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%84%9F#Kanji",
        "meanings": [
            "emotion",
            "feeling",
            "sensation"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [
            {
                "value": "感じ",
                "kana": [
                    "かんじ"
                ],
                "english": [
                    "feeling",
                    "sense",
                    "impression"
                ]
            },
            {
                "value": "感覚",
                "kana": [
                    "かんかく"
                ],
                "english": [
                    "sense",
                    "sensation",
                    "feeling"
                ]
            },
            {
                "value": "感染",
                "kana": [
                    "かんせん"
                ],
                "english": [
                    "infection",
                    "contagion"
                ]
            },
            {
                "value": "感じる",
                "kana": [
                    "かんじる"
                ],
                "english": [
                    "to feel",
                    "to sense",
                    "to experience"
                ]
            },
            {
                "value": "感情",
                "kana": [
                    "かんじょう"
                ],
                "english": [
                    "emotion",
                    "feeling",
                    "feelings",
                    "sentiment"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "漢",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "Sino-",
            "China"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "館",
        "on": [
            "かん"
        ],
        "kun": [
            "やかた",
            "たて"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A4%A8#Kanji",
        "meanings": [
            "building",
            "mansion",
            "large building",
            "palace"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 16,
        "examples": [
            {
                "value": "会館",
                "kana": [
                    "かいかん"
                ],
                "english": [
                    "meeting hall",
                    "assembly hall"
                ]
            },
            {
                "value": "大使館",
                "kana": [
                    "たいしかん"
                ],
                "english": [
                    "embassy"
                ]
            },
            {
                "value": "美術館",
                "kana": [
                    "びじゅつかん"
                ],
                "english": [
                    "art gallery",
                    "art museum"
                ]
            },
            {
                "value": "博物館",
                "kana": [
                    "はくぶつかん"
                ],
                "english": [
                    "museum"
                ]
            },
            {
                "value": "図書館",
                "kana": [
                    "としょかん",
                    "ずしょかん"
                ],
                "english": [
                    "library"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "岸",
        "on": [
            "ガン"
        ],
        "kun": [
            "きし"
        ],
        "source": "",
        "meanings": [
            "beach"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "期",
        "on": [
            "き"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%9F#Kanji",
        "meanings": [
            "period",
            "time",
            "date",
            "term"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "期間",
                "kana": [
                    "きかん"
                ],
                "english": [
                    "period",
                    "term",
                    "interval"
                ]
            },
            {
                "value": "期待",
                "kana": [
                    "きたい"
                ],
                "english": [
                    "expectation",
                    "anticipation",
                    "hope"
                ]
            },
            {
                "value": "時期",
                "kana": [
                    "じき"
                ],
                "english": [
                    "time",
                    "season",
                    "period",
                    "soon",
                    "shortly"
                ]
            },
            {
                "value": "早期",
                "kana": [
                    "そうき"
                ],
                "english": [
                    "early stage"
                ]
            },
            {
                "value": "長期",
                "kana": [
                    "ちょうき"
                ],
                "english": [
                    "long time period"
                ]
            }
        ],
        "tags": [
            "time"
        ]
    },
    {
        "name": "起",
        "on": [
            "き"
        ],
        "kun": [
            "おきる",
            "おこる",
            "おこす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%B5%B7#Kanji",
        "meanings": [
            "rouse",
            "wake up",
            "get up"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "起訴",
                "kana": [
                    "きそ"
                ],
                "english": [
                    "prosecution",
                    "indictment"
                ]
            },
            {
                "value": "起こす",
                "kana": [
                    "おこす"
                ],
                "english": [
                    "to raise, to cause",
                    "to wake someone"
                ]
            },
            {
                "value": "起用",
                "kana": [
                    "きよう"
                ],
                "english": [
                    "appointment (to a position, job, etc.)"
                ]
            },
            {
                "value": "起こる",
                "kana": [
                    "おこる"
                ],
                "english": [
                    "to occur",
                    "to happen"
                ]
            },
            {
                "value": "提起",
                "kana": [
                    "ていき"
                ],
                "english": [
                    "bring suit",
                    "file a claim",
                    "raise a question"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "客",
        "on": [
            "キャク",
            "カク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "guest",
            "visitor",
            "customer",
            "client"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "宮",
        "on": [
            "キュウ",
            "グウ",
            "ク",
            "クウ"
        ],
        "kun": [
            "みや"
        ],
        "source": "",
        "meanings": [
            "Shinto shrine",
            "constellations",
            "palace",
            "princess"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "急",
        "on": [
            "きゅう"
        ],
        "kun": [
            "いそぐ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%80%A5#Kanji",
        "meanings": [
            "hurry",
            "emergency",
            "sudden",
            "steep"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "急",
                "kana": [
                    "きゅう"
                ],
                "english": [
                    "urgent",
                    "sudden",
                    "abrupt",
                    "sharp",
                    "steep"
                ]
            },
            {
                "value": "急いで",
                "kana": [
                    "いそいで"
                ],
                "english": [
                    "hurriedly"
                ]
            },
            {
                "value": "急きょ",
                "kana": [
                    "きゅうきょ"
                ],
                "english": [
                    "hurriedly",
                    "in a hurry"
                ]
            },
            {
                "value": "緊急",
                "kana": [
                    "きんきゅう"
                ],
                "english": [
                    "urgent",
                    "pressing",
                    "emergency"
                ]
            },
            {
                "value": "急速",
                "kana": [
                    "きゅうそく"
                ],
                "english": [
                    "rapid (e.g. progress)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "球",
        "on": [
            "きゅう"
        ],
        "kun": [
            "たま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%90%83#Kanji",
        "meanings": [
            "ball",
            "sphere"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "球",
                "kana": [
                    "きゅう",
                    "たま"
                ],
                "english": [
                    "globe",
                    "sphere",
                    "ball"
                ]
            },
            {
                "value": "地球",
                "kana": [
                    "ちきゅう"
                ],
                "english": [
                    "the earth"
                ]
            },
            {
                "value": "野球",
                "kana": [
                    "やきゅう"
                ],
                "english": [
                    "baseball"
                ]
            },
            {
                "value": "球場",
                "kana": [
                    "きゅうじょう"
                ],
                "english": [
                    "baseball stadium"
                ]
            },
            {
                "value": "球団",
                "kana": [
                    "きゅうだん"
                ],
                "english": [
                    "baseball team"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "究",
        "on": [
            "きゅう"
        ],
        "kun": [
            "きわめる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A9%B6#Kanji",
        "meanings": [
            "research",
            "study"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "研究",
                "kana": [
                    "けんきゅう"
                ],
                "english": [
                    "study",
                    "research",
                    "investigation"
                ]
            },
            {
                "value": "研究所",
                "kana": [
                    "けんきゅうしょ",
                    "けんきゅうじょ"
                ],
                "english": [
                    "research establishment"
                ]
            },
            {
                "value": "研究者",
                "kana": [
                    "けんきゅうしゃ"
                ],
                "english": [
                    "researcher"
                ]
            },
            {
                "value": "究明",
                "kana": [
                    "きゅうめい"
                ],
                "english": [
                    "investigation (esp. in academic and scientific contexts)"
                ]
            },
            {
                "value": "研究員",
                "kana": [
                    "けんきゅういん"
                ],
                "english": [
                    "researcher"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "級",
        "on": [
            "キュウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "class",
            "rank",
            "grade"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "去",
        "on": [
            "きょ",
            "こ"
        ],
        "kun": [
            "さる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8E%BB#Kanji",
        "meanings": [
            "gone",
            "past",
            "quit",
            "leave",
            "elapse",
            "eliminate",
            "divorce"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "過去",
                "kana": [
                    "かこ"
                ],
                "english": [
                    "the past",
                    "bygone days",
                    "the previous"
                ]
            },
            {
                "value": "死去",
                "kana": [
                    "しきょ"
                ],
                "english": [
                    "death"
                ]
            },
            {
                "value": "撤去",
                "kana": [
                    "てっきょ"
                ],
                "english": [
                    "withdrawal",
                    "revocation",
                    "repeal",
                    "demolition"
                ]
            },
            {
                "value": "除去",
                "kana": [
                    "じょきょ"
                ],
                "english": [
                    "removal",
                    "getting rid of"
                ]
            },
            {
                "value": "去年",
                "kana": [
                    "きょねん",
                    "こぞ"
                ],
                "english": [
                    "last year"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "橋",
        "on": [
            "キョウ"
        ],
        "kun": [
            "はし"
        ],
        "source": "",
        "meanings": [
            "bridge"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "業",
        "on": [
            "ぎょう",
            "ごう"
        ],
        "kun": [
            "わざ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%A5%AD#Kanji",
        "meanings": [
            "business",
            "vocation",
            "arts",
            "performance"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 13,
        "examples": [
            {
                "value": "業",
                "kana": [
                    "ごう"
                ],
                "english": [
                    "karma (i.e. actions committed in a former life)"
                ]
            },
            {
                "value": "企業",
                "kana": [
                    "きぎょう"
                ],
                "english": [
                    "enterprise",
                    "undertaking",
                    "corporation"
                ]
            },
            {
                "value": "業界",
                "kana": [
                    "ぎょうかい"
                ],
                "english": [
                    "industry",
                    "business"
                ]
            },
            {
                "value": "業者",
                "kana": [
                    "ぎょうしゃ"
                ],
                "english": [
                    "trader",
                    "merchant"
                ]
            },
            {
                "value": "作業",
                "kana": [
                    "さぎょう"
                ],
                "english": [
                    "work",
                    "operation",
                    "manufacturing",
                    "fatigue duty"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "局",
        "on": [
            "きょく"
        ],
        "kun": [
            "つぼね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B1%80#Kanji",
        "meanings": [
            "office"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "局",
                "kana": [
                    "きょく"
                ],
                "english": [
                    "channel (i.e. TV or radio)",
                    "station"
                ]
            },
            {
                "value": "事務局",
                "kana": [
                    "じむきょく"
                ],
                "english": [
                    "secretariat",
                    "executive office"
                ]
            },
            {
                "value": "当局",
                "kana": [
                    "とうきょく"
                ],
                "english": [
                    "authorities",
                    "this office"
                ]
            },
            {
                "value": "局長",
                "kana": [
                    "きょくちょう"
                ],
                "english": [
                    "bureau director",
                    "office chief"
                ]
            },
            {
                "value": "結局",
                "kana": [
                    "けっきょく"
                ],
                "english": [
                    "after all",
                    "eventually"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "曲",
        "on": [
            "キョク"
        ],
        "kun": [
            "まがる",
            "まげる",
            "くま"
        ],
        "source": "",
        "meanings": [
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
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "銀",
        "on": [
            "ぎん"
        ],
        "kun": [
            "しろがね"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%8A%80#Kanji",
        "meanings": [
            "silver"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 14,
        "examples": [
            {
                "value": "銀",
                "kana": [
                    "ぎん",
                    "しろがね"
                ],
                "english": [
                    "silver",
                    "silver coin",
                    "silver paint"
                ]
            },
            {
                "value": "銀行",
                "kana": [
                    "ぎんこう"
                ],
                "english": [
                    "bank"
                ]
            },
            {
                "value": "銀座",
                "kana": [
                    "ぎんざ"
                ],
                "english": [
                    "Ginza (shopping district in Tokyo)"
                ]
            },
            {
                "value": "住友銀行",
                "kana": [
                    "すみともぎんこう"
                ],
                "english": [
                    "Sumitomo Bank"
                ]
            },
            {
                "value": "日本銀行",
                "kana": [
                    "にっぽんぎんこう",
                    "にほんぎんこ"
                ],
                "english": [
                    "Bank of Japan"
                ]
            }
        ],
        "tags": [
            "colour"
        ]
    },
    {
        "name": "区",
        "on": [
            "く"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E5%8C%BA#Kanji",
        "meanings": [
            "ward",
            "district"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 4,
        "examples": [
            {
                "value": "区",
                "kana": [
                    "く"
                ],
                "english": [
                    "ward",
                    "district",
                    "section"
                ]
            },
            {
                "value": "地区",
                "kana": [
                    "ちく"
                ],
                "english": [
                    "district",
                    "section",
                    "sector"
                ]
            },
            {
                "value": "小選挙区",
                "kana": [
                    "しょうせんきょく"
                ],
                "english": [
                    "small electoral district"
                ]
            },
            {
                "value": "区内",
                "kana": [
                    "くない"
                ],
                "english": [
                    "in the ward or borough"
                ]
            },
            {
                "value": "区域",
                "kana": [
                    "くいき"
                ],
                "english": [
                    "limits",
                    "boundary",
                    "domain",
                    "zone",
                    "sphere"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "苦",
        "on": [
            "ク"
        ],
        "kun": [
            "くるしい",
            "ぐるしい",
            "くるしむ",
            "くるしめる",
            "にがい",
            "にがる"
        ],
        "source": "",
        "meanings": [
            "suffering",
            "trial",
            "worry",
            "hardship",
            "feel bitter",
            "scowl"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "具",
        "on": [
            "グ"
        ],
        "kun": [
            "そなえる",
            "つぶさに"
        ],
        "source": "",
        "meanings": [
            "tool",
            "utensil",
            "means",
            "possess",
            "ingredients",
            "counter for armor",
            "suits",
            "sets of furniture"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "君",
        "on": [
            "クン"
        ],
        "kun": [
            "きみ",
            "ぎみ"
        ],
        "source": "",
        "meanings": [
            "mister",
            "you",
            "ruler",
            "male name suffix"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "係",
        "on": [
            "けい"
        ],
        "kun": [
            "かかる",
            "かかり"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BF%82#Kanji",
        "meanings": [
            "person in charge",
            "connection",
            "duty",
            "concern oneself"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "係",
                "kana": [
                    "かかり"
                ],
                "english": [
                    "official",
                    "duty",
                    "person in charge"
                ]
            },
            {
                "value": "関係",
                "kana": [
                    "かんけい"
                ],
                "english": [
                    "relation",
                    "connection"
                ]
            },
            {
                "value": "関係者",
                "kana": [
                    "かんけいしゃ"
                ],
                "english": [
                    "authorised people"
                ]
            },
            {
                "value": "人間関係",
                "kana": [
                    "にんげんかんけい"
                ],
                "english": [
                    "human relations"
                ]
            },
            {
                "value": "係長",
                "kana": [
                    "かかりちょう"
                ],
                "english": [
                    "chief clerk"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "軽",
        "on": [
            "ケイ",
            "キョウ",
            "キン"
        ],
        "kun": [
            "かるい",
            "かろやか",
            "かろんじる"
        ],
        "source": "",
        "meanings": [
            "lightly",
            "trifling",
            "unimportant"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "決",
        "on": [
            "けつ"
        ],
        "kun": [
            "きまる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B1%BA#Kanji",
        "meanings": [
            "decide",
            "fix",
            "agree upon",
            "appoint"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "決まって",
                "kana": [
                    "きまって"
                ],
                "english": [
                    "always",
                    "without fail",
                    "usually",
                    "regularly"
                ]
            },
            {
                "value": "決して",
                "kana": [
                    "けっして, けして"
                ],
                "english": [
                    "never",
                    "by no means",
                    "decidedly",
                    "indisputably"
                ]
            },
            {
                "value": "解決",
                "kana": [
                    "かいけつ"
                ],
                "english": [
                    "settlement",
                    "solution",
                    "resolution"
                ]
            },
            {
                "value": "決議",
                "kana": [
                    "けつぎ"
                ],
                "english": [
                    "resolution",
                    "vote",
                    "decision"
                ]
            },
            {
                "value": "決定",
                "kana": [
                    "けってい"
                ],
                "english": [
                    "decision",
                    "determination"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "血",
        "on": [
            "ケツ"
        ],
        "kun": [
            "ち"
        ],
        "source": "",
        "meanings": [
            "blood"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "研",
        "on": [
            "げん"
        ],
        "kun": [
            "けん",
            "とぐ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A0%94#Kanji",
        "meanings": [
            "polish",
            "study of",
            "sharpen"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "研究",
                "kana": [
                    "けんきゅう"
                ],
                "english": [
                    "study",
                    "research",
                    "investigation"
                ]
            },
            {
                "value": "研究所",
                "kana": [
                    "けんきゅうしょ",
                    "けんきゅうじょ"
                ],
                "english": [
                    "research establishment (institute",
                    "laboratory"
                ]
            },
            {
                "value": "研修",
                "kana": [
                    "けんしゅう"
                ],
                "english": [
                    "training (esp. in?service)",
                    "induction course"
                ]
            },
            {
                "value": "研究者",
                "kana": [
                    "けんきゅうしゃ"
                ],
                "english": [
                    "researcher"
                ]
            },
            {
                "value": "研究員",
                "kana": [
                    "けんきゅういん"
                ],
                "english": [
                    "researcher"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "県",
        "on": [
            "けん"
        ],
        "kun": [
            "かける"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9C%8C#Kanji",
        "meanings": [
            "prefecture"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "県警",
                "kana": [
                    "けんけい"
                ],
                "english": [
                    "prefectural police"
                ]
            },
            {
                "value": "同県",
                "kana": [
                    "どうけん"
                ],
                "english": [
                    "the same prefecture"
                ]
            },
            {
                "value": "県知事",
                "kana": [
                    "けんちじ"
                ],
                "english": [
                    "prefectural governor"
                ]
            },
            {
                "value": "県内",
                "kana": [
                    "けんない"
                ],
                "english": [
                    "within the prefecture"
                ]
            },
            {
                "value": "都道府県",
                "kana": [
                    "とどうふけん"
                ],
                "english": [
                    "administrative divisions of Japan:"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "庫",
        "on": [
            "コ",
            "ク"
        ],
        "kun": [
            "くら"
        ],
        "source": "",
        "meanings": [
            "warehouse",
            "storehouse"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "湖",
        "on": [
            "コ"
        ],
        "kun": [
            "みずうみ"
        ],
        "source": "",
        "meanings": [
            "lake"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "向",
        "on": [
            "こう"
        ],
        "kun": [
            "むく",
            "むける",
            "むかう",
            "むこう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%90%91#Kanji",
        "meanings": [
            "yonder",
            "facing",
            "beyond",
            "confront",
            "defy",
            "tend",
            "toward",
            "approach"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "方向",
                "kana": [
                    "ほうこう"
                ],
                "english": [
                    "direction, orientation",
                    "bearing",
                    "way"
                ]
            },
            {
                "value": "意向",
                "kana": [
                    "いこう"
                ],
                "english": [
                    "intention",
                    "idea",
                    "inclination"
                ]
            },
            {
                "value": "傾向",
                "kana": [
                    "けいこう"
                ],
                "english": [
                    "tendency",
                    "trend",
                    "inclination"
                ]
            },
            {
                "value": "向き",
                "kana": [
                    "むき"
                ],
                "english": [
                    "direction",
                    "orientation",
                    "aspect",
                    "situation"
                ]
            },
            {
                "value": "向上",
                "kana": [
                    "こうじょう"
                ],
                "english": [
                    "elevation",
                    "rise",
                    "improvement",
                    "advancement"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "幸",
        "on": [
            "コウ"
        ],
        "kun": [
            "さいわい",
            "さち",
            "しあわせ"
        ],
        "source": "",
        "meanings": [
            "happiness",
            "blessing",
            "fortune"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "港",
        "on": [
            "コウ"
        ],
        "kun": [
            "みなと"
        ],
        "source": "",
        "meanings": [
            "harbor"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "号",
        "on": [
            "ゴウ"
        ],
        "kun": [
            "さけぶ",
            "よびな"
        ],
        "source": "",
        "meanings": [
            "nickname",
            "number",
            "item",
            "title",
            "pseudonym",
            "name",
            "call"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "根",
        "on": [
            "コン"
        ],
        "kun": [
            "ね",
            "ね"
        ],
        "source": "",
        "meanings": [
            "root",
            "radical",
            "head (pimple)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "祭",
        "on": [
            "サイ"
        ],
        "kun": [
            "まつる",
            "まつり",
            "まつり"
        ],
        "source": "",
        "meanings": [
            "ritual",
            "offer prayers",
            "celebrate",
            "deify",
            "enshrine",
            "worship"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "坂",
        "on": [
            "ハン"
        ],
        "kun": [
            "さか"
        ],
        "source": "",
        "meanings": [
            "slope",
            "incline",
            "hill"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "皿",
        "on": [
            "ベイ"
        ],
        "kun": [
            "さら"
        ],
        "source": "",
        "meanings": [
            "dish",
            "a helping",
            "plate"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "仕",
        "on": [
            "し",
            "じ"
        ],
        "kun": [
            "つかえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BB%95#Kanji",
        "meanings": [
            "serve",
            "attend",
            "doing",
            "official"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "仕事",
                "kana": [
                    "しごと"
                ],
                "english": [
                    "work",
                    "job",
                    "business",
                    "occupation",
                    "employment"
                ]
            },
            {
                "value": "仕組み",
                "kana": [
                    "しくみ"
                ],
                "english": [
                    "structure",
                    "construction",
                    "arrangement"
                ]
            },
            {
                "value": "仕方",
                "kana": [
                    "しかた"
                ],
                "english": [
                    "way",
                    "method",
                    "means",
                    "resource",
                    "course"
                ]
            },
            {
                "value": "仕掛け",
                "kana": [
                    "しかけ"
                ],
                "english": [
                    "device",
                    "trick",
                    "mechanism",
                    "gadget"
                ]
            },
            {
                "value": "仕手",
                "kana": [
                    "して"
                ],
                "english": [
                    "doer",
                    "performer"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "使",
        "on": [
            "し"
        ],
        "kun": [
            "つかう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BD%BF#Kanji",
        "meanings": [
            "use"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "使わす",
                "kana": [
                    "つかわす"
                ],
                "english": [
                    "to send",
                    "to dispatch"
                ]
            },
            {
                "value": "使う",
                "kana": [
                    "つかう"
                ],
                "english": [
                    "to use (a thing, method, etc.)"
                ]
            },
            {
                "value": "使用",
                "kana": [
                    "しよう"
                ],
                "english": [
                    "use",
                    "application",
                    "employment",
                    "utilisation"
                ]
            },
            {
                "value": "大使",
                "kana": [
                    "たいし"
                ],
                "english": [
                    "ambassador"
                ]
            },
            {
                "value": "行使",
                "kana": [
                    "こうし"
                ],
                "english": [
                    "use",
                    "exercise"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "始",
        "on": [
            "し"
        ],
        "kun": [
            "はじめる",
            "はじまる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%A7%8B#Kanji",
        "meanings": [
            "begin",
            "commerce"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "開始",
                "kana": [
                    "かいし"
                ],
                "english": [
                    "start",
                    "commencement",
                    "beginning",
                    "initiation"
                ]
            },
            {
                "value": "始まり",
                "kana": [
                    "はじまり"
                ],
                "english": [
                    "origin",
                    "beginning"
                ]
            },
            {
                "value": "終始",
                "kana": [
                    "しゅうし"
                ],
                "english": [
                    "from beginning to end"
                ]
            },
            {
                "value": "始める",
                "kana": [
                    "はじめる"
                ],
                "english": [
                    "to start",
                    "to begin",
                    "to commence",
                    "to initiate"
                ]
            },
            {
                "value": "始め",
                "kana": [
                    "はじめ"
                ],
                "english": [
                    "beginning",
                    "start",
                    "origin"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "指",
        "on": [
            "し"
        ],
        "kun": [
            "ゆび",
            "さす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%8C%87#Kanji",
        "meanings": [
            "finger",
            "point"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "指",
                "kana": [
                    "ゆび",
                    "および",
                    "おゆび"
                ],
                "english": [
                    "finger",
                    "toe",
                    "digit"
                ]
            },
            {
                "value": "指導",
                "kana": [
                    "しどう"
                ],
                "english": [
                    "leadership",
                    "guidance",
                    "coaching"
                ]
            },
            {
                "value": "指揮",
                "kana": [
                    "しき"
                ],
                "english": [
                    "command",
                    "direction"
                ]
            },
            {
                "value": "指定",
                "kana": [
                    "してい"
                ],
                "english": [
                    "designation",
                    "specification",
                    "assignment"
                ]
            },
            {
                "value": "指名",
                "kana": [
                    "しめい"
                ],
                "english": [
                    "name",
                    "nominate",
                    "designate"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "死",
        "on": [
            "し"
        ],
        "kun": [
            "しぬ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AD%BB#Kanji",
        "meanings": [
            "death",
            "die"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "死",
                "kana": [
                    "し"
                ],
                "english": [
                    "death",
                    "decease"
                ]
            },
            {
                "value": "死者",
                "kana": [
                    "ししゃ"
                ],
                "english": [
                    "casualty",
                    "deceased"
                ]
            },
            {
                "value": "脳死",
                "kana": [
                    "のうし"
                ],
                "english": [
                    "brain death"
                ]
            },
            {
                "value": "死亡",
                "kana": [
                    "しぼう"
                ],
                "english": [
                    "death",
                    "mortality"
                ]
            },
            {
                "value": "二死",
                "kana": [
                    "にし"
                ],
                "english": [
                    "two out (e.g. in baseball)"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "詩",
        "on": [
            "シ"
        ],
        "kun": [
            "うた"
        ],
        "source": "",
        "meanings": [
            "poem",
            "poetry"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "歯",
        "on": [
            "シ"
        ],
        "kun": [
            "よわい",
            "は",
            "よわい",
            "よわいする"
        ],
        "source": "",
        "meanings": [
            "tooth",
            "cog"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "事",
        "on": [
            "じ"
        ],
        "kun": [
            "こと"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%8B#Kanji",
        "meanings": [
            "matter",
            "thing",
            "fact",
            "business",
            "reason",
            "possibly"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "事",
                "kana": [
                    "こと"
                ],
                "english": [
                    "thing",
                    "matter",
                    "fact",
                    "circumstances",
                    "business"
                ]
            },
            {
                "value": "幹事",
                "kana": [
                    "かんじ"
                ],
                "english": [
                    "executive secretary",
                    "coordinator",
                    "organizer"
                ]
            },
            {
                "value": "記事",
                "kana": [
                    "きじ"
                ],
                "english": [
                    "article",
                    "news story",
                    "report",
                    "account"
                ]
            },
            {
                "value": "軍事",
                "kana": [
                    "ぐんじ"
                ],
                "english": [
                    "military affairs"
                ]
            },
            {
                "value": "仕事",
                "kana": [
                    "しごと"
                ],
                "english": [
                    "work",
                    "job",
                    "business",
                    "occupation",
                    "employment"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "持",
        "on": [
            "じ"
        ],
        "kun": [
            "もつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%8C%81#Kanji",
        "meanings": [
            "hold",
            "have"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "維持",
                "kana": [
                    "いじ"
                ],
                "english": [
                    "maintenance",
                    "preservation",
                    "improvement"
                ]
            },
            {
                "value": "支持",
                "kana": [
                    "しじ"
                ],
                "english": [
                    "support",
                    "maintenance"
                ]
            },
            {
                "value": "気持ち",
                "kana": [
                    "きもち"
                ],
                "english": [
                    "feeling",
                    "sensation",
                    "mood"
                ]
            },
            {
                "value": "持ち",
                "kana": [
                    "もち"
                ],
                "english": [
                    "hold",
                    "charge",
                    "keep possession",
                    "in charge"
                ]
            },
            {
                "value": "持つ",
                "kana": [
                    "もつ"
                ],
                "english": [
                    "to hold",
                    "to carry",
                    "to possess"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "次",
        "on": [
            "じ",
            "し"
        ],
        "kun": [
            "つぐ",
            "つぎ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%AC%A1#Kanji",
        "meanings": [
            "next",
            "order",
            "sequence"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "次官",
                "kana": [
                    "じかん"
                ],
                "english": [
                    "vice-minister",
                    "undersecretary"
                ]
            },
            {
                "value": "事務次官",
                "kana": [
                    "じむじかん"
                ],
                "english": [
                    "permanent vice-president",
                    "undersecretary"
                ]
            },
            {
                "value": "次期",
                "kana": [
                    "じき"
                ],
                "english": [
                    "next term",
                    "next period",
                    "next version"
                ]
            },
            {
                "value": "次長",
                "kana": [
                    "じちょう"
                ],
                "english": [
                    "vice",
                    "assistant director",
                    "vice-director"
                ]
            },
            {
                "value": "次々",
                "kana": [
                    "つぎつぎ"
                ],
                "english": [
                    "in succession",
                    "one by one"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "式",
        "on": [
            "しき"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E5%BC%8F#Kanji",
        "meanings": [
            "style",
            "ceremony",
            "rite",
            "function",
            "method",
            "system",
            "form",
            "expression"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "株式",
                "kana": [
                    "かぶしき"
                ],
                "english": [
                    "stock (company)"
                ]
            },
            {
                "value": "公式",
                "kana": [
                    "こうしき"
                ],
                "english": [
                    "formality",
                    "formal",
                    "official",
                    "formula"
                ]
            },
            {
                "value": "正式",
                "kana": [
                    "せいしき"
                ],
                "english": [
                    "due form",
                    "official",
                    "formality"
                ]
            },
            {
                "value": "方式",
                "kana": [
                    "ほうしき"
                ],
                "english": [
                    "form",
                    "method",
                    "system",
                    "formula"
                ]
            },
            {
                "value": "形式",
                "kana": [
                    "けいしき"
                ],
                "english": [
                    "form (as opposed to substance)",
                    "formality"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "実",
        "on": [
            "じつ"
        ],
        "kun": [
            "み",
            "みのる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AE%9F#Kanji",
        "meanings": [
            "reality",
            "truth"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "実",
                "kana": [
                    "じつ",
                    "じち"
                ],
                "english": [
                    "truth",
                    "reality",
                    "sincerity",
                    "honesty",
                    "fidelity"
                ]
            },
            {
                "value": "実は",
                "kana": [
                    "じつは"
                ],
                "english": [
                    "as a matter of fact",
                    "by the way"
                ]
            },
            {
                "value": "実に",
                "kana": [
                    "じつに",
                    "まことに",
                    "げに",
                    "しんに"
                ],
                "english": [
                    "indeed",
                    "really",
                    "absolutely",
                    "truly",
                    "actually"
                ]
            },
            {
                "value": "現実",
                "kana": [
                    "げんじつ"
                ],
                "english": [
                    "reality"
                ]
            },
            {
                "value": "事実",
                "kana": [
                    "じじつ"
                ],
                "english": [
                    "fact",
                    "truth",
                    "reality"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "写",
        "on": [
            "しゃ"
        ],
        "kun": [
            "うつす",
            "うつる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%86%99#Kanji",
        "meanings": [
            "copy",
            "be photographed",
            "describe"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "写真",
                "kana": [
                    "しゃしん"
                ],
                "english": [
                    "photograph",
                    "photo",
                    "movie"
                ]
            },
            {
                "value": "写真集",
                "kana": [
                    "しゃしんしゅう"
                ],
                "english": [
                    "collection of photographs",
                    "photoalbum"
                ]
            },
            {
                "value": "写る",
                "kana": [
                    "うつる"
                ],
                "english": [
                    "to be photographed",
                    "to be projected"
                ]
            },
            {
                "value": "描写",
                "kana": [
                    "びょうしゃ"
                ],
                "english": [
                    "depiction",
                    "description",
                    "portrayal"
                ]
            },
            {
                "value": "青写真",
                "kana": [
                    "あおじゃしん"
                ],
                "english": [
                    "blueprint",
                    "plan"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "者",
        "on": [
            "しゃ"
        ],
        "kun": [
            "もの"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%80%85#Kanji",
        "meanings": [
            "someone",
            "person"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "患者",
                "kana": [
                    "かんじゃ"
                ],
                "english": [
                    "a patient"
                ]
            },
            {
                "value": "関係者",
                "kana": [
                    "かんけいしゃ"
                ],
                "english": [
                    "authorised people"
                ]
            },
            {
                "value": "記者",
                "kana": [
                    "きしゃ"
                ],
                "english": [
                    "reporter"
                ]
            },
            {
                "value": "業者",
                "kana": [
                    "ぎょうしゃ"
                ],
                "english": [
                    "trader",
                    "merchant"
                ]
            },
            {
                "value": "容疑者",
                "kana": [
                    "ようぎしゃ"
                ],
                "english": [
                    "suspect person"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "主",
        "on": [
            "しゅ"
        ],
        "kun": [
            "おも",
            "ぬし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%BB#Kanji",
        "meanings": [
            "lord",
            "chief",
            "master",
            "main thing",
            "principal"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "主に",
                "kana": [
                    "おもに"
                ],
                "english": [
                    "mainly",
                    "primarily"
                ]
            },
            {
                "value": "喪主",
                "kana": [
                    "もしゅ"
                ],
                "english": [
                    "chief mourner"
                ]
            },
            {
                "value": "民主",
                "kana": [
                    "みんしゅ"
                ],
                "english": [
                    "democracy",
                    "popular sovereignty",
                    "democratic"
                ]
            },
            {
                "value": "主義",
                "kana": [
                    "しゅぎ"
                ],
                "english": [
                    "doctrine",
                    "rule",
                    "principle"
                ]
            },
            {
                "value": "主催",
                "kana": [
                    "しゅさい"
                ],
                "english": [
                    "organisation",
                    "sponsorship"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "取",
        "on": [
            "しゅ"
        ],
        "kun": [
            "とる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%96#Kanji",
        "meanings": [
            "take",
            "fetch",
            "take up"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "取る",
                "kana": [
                    "とる"
                ],
                "english": [
                    "to take",
                    "to pick up",
                    "to harvest",
                    "to earn"
                ]
            },
            {
                "value": "取引",
                "kana": [
                    "とりひき"
                ],
                "english": [
                    "transactions",
                    "dealings",
                    "business"
                ]
            },
            {
                "value": "取材",
                "kana": [
                    "しゅざい"
                ],
                "english": [
                    "collecting data (e.g. for a newspaper article)",
                    "covering an event"
                ]
            },
            {
                "value": "取っ手",
                "kana": [
                    "とって",
                    "はしゅ"
                ],
                "english": [
                    "handle",
                    "grip",
                    "knob"
                ]
            },
            {
                "value": "取締役",
                "kana": [
                    "とりしまりやく"
                ],
                "english": [
                    "company director",
                    "board member"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "守",
        "on": [
            "シュ",
            "ス"
        ],
        "kun": [
            "まもる",
            "まもり",
            "もり",
            "もり",
            "かみ"
        ],
        "source": "",
        "meanings": [
            "guard",
            "protect",
            "defend",
            "obey"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "酒",
        "on": [
            "シュ"
        ],
        "kun": [
            "さけ",
            "さか"
        ],
        "source": "",
        "meanings": [
            "sake",
            "alcohol"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "受",
        "on": [
            "じゅ"
        ],
        "kun": [
            "うける",
            "うかる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%97#Kanji",
        "meanings": [
            "accept",
            "undergo",
            "answer (phone)",
            "take",
            "get",
            "catch",
            "receive"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "受け",
                "kana": [
                    "うけ"
                ],
                "english": [
                    "popularity",
                    "favour",
                    "reception",
                    "defense"
                ]
            },
            {
                "value": "受験",
                "kana": [
                    "じゅけん"
                ],
                "english": [
                    "taking an examination"
                ]
            },
            {
                "value": "受け入れ",
                "kana": [
                    "うけいれ"
                ],
                "english": [
                    "receiving",
                    "acceptance"
                ]
            },
            {
                "value": "受賞",
                "kana": [
                    "じゅしょう"
                ],
                "english": [
                    "winning (a prize)"
                ]
            },
            {
                "value": "受注",
                "kana": [
                    "じゅちゅう"
                ],
                "english": [
                    "accepting orders"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "州",
        "on": [
            "しゅう"
        ],
        "kun": [
            "す"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B7%9E#Kanji",
        "meanings": [
            "state",
            "province"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "州",
                "kana": [
                    "しゅう"
                ],
                "english": [
                    "state",
                    "province",
                    "county (UK)"
                ]
            },
            {
                "value": "欧州",
                "kana": [
                    "おうしゅう"
                ],
                "english": [
                    "Europe"
                ]
            },
            {
                "value": "九州",
                "kana": [
                    "きゅうしゅう"
                ],
                "english": [
                    "Kyushu (southernmost of the four main islandsof Japan)"
                ]
            },
            {
                "value": "州都",
                "kana": [
                    "しゅうと"
                ],
                "english": [
                    "capital (city) of a state"
                ]
            },
            {
                "value": "州政府",
                "kana": [
                    "しゅうせいふ"
                ],
                "english": [
                    "state government"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "拾",
        "on": [
            "シュウ",
            "ジュウ"
        ],
        "kun": [
            "ひろう"
        ],
        "source": "",
        "meanings": [
            "pick up",
            "gather",
            "find",
            "go on foot",
            "ten"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "終",
        "on": [
            "しゅう"
        ],
        "kun": [
            "おわる",
            "おえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%B5%82#Kanji",
        "meanings": [
            "end",
            "finish"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "終わり",
                "kana": [
                    "おわり"
                ],
                "english": [
                    "the end"
                ]
            },
            {
                "value": "最終",
                "kana": [
                    "さいしゅう"
                ],
                "english": [
                    "last",
                    "final",
                    "closing"
                ]
            },
            {
                "value": "終える",
                "kana": [
                    "おえる"
                ],
                "english": [
                    "to finish"
                ]
            },
            {
                "value": "終結",
                "kana": [
                    "しゅうけつ"
                ],
                "english": [
                    "end",
                    "close"
                ]
            },
            {
                "value": "最終的",
                "kana": [
                    "さいしゅうてき"
                ],
                "english": [
                    "finally"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "習",
        "on": [
            "しゅう"
        ],
        "kun": [
            "ならう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%BF%92#Kanji",
        "meanings": [
            "learn"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "練習",
                "kana": [
                    "れんしゅう"
                ],
                "english": [
                    "practice",
                    "practise"
                ]
            },
            {
                "value": "学習",
                "kana": [
                    "がくしゅう"
                ],
                "english": [
                    "study",
                    "learning",
                    "tutorial"
                ]
            },
            {
                "value": "演習",
                "kana": [
                    "えんしゅう"
                ],
                "english": [
                    "practice",
                    "exercises",
                    "manoeuvres"
                ]
            },
            {
                "value": "習慣",
                "kana": [
                    "しゅうかん"
                ],
                "english": [
                    "custom",
                    "habit",
                    "manners"
                ]
            },
            {
                "value": "講習",
                "kana": [
                    "こうしゅう"
                ],
                "english": [
                    "short course",
                    "training"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "集",
        "on": [
            "しゅう"
        ],
        "kun": [
            "あつまる",
            "あつめる",
            "つどう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9B%86#Kanji",
        "meanings": [
            "gather",
            "meet",
            "congregate",
            "swarm",
            "flock"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "集める",
                "kana": [
                    "あつめる"
                ],
                "english": [
                    "to collect",
                    "to assemble",
                    "to gather"
                ]
            },
            {
                "value": "集会",
                "kana": [
                    "しゅうかい"
                ],
                "english": [
                    "meeting",
                    "assembly"
                ]
            },
            {
                "value": "集団",
                "kana": [
                    "しゅうだん"
                ],
                "english": [
                    "group",
                    "mass"
                ]
            },
            {
                "value": "編集",
                "kana": [
                    "へんしゅう"
                ],
                "english": [
                    "editing",
                    "compilation"
                ]
            },
            {
                "value": "集中",
                "kana": [
                    "しゅうちゅう"
                ],
                "english": [
                    "concentration",
                    "convergence",
                    "centralization"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "住",
        "on": [
            "じゅう"
        ],
        "kun": [
            "すむ",
            "すまう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BD%8F#Kanji",
        "meanings": [
            "dwell",
            "reside",
            "live",
            "inhabit"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "住",
                "kana": [
                    "じゅう"
                ],
                "english": [
                    "dwelling",
                    "living"
                ]
            },
            {
                "value": "住宅",
                "kana": [
                    "じゅうたく"
                ],
                "english": [
                    "residence",
                    "housing",
                    "residential building"
                ]
            },
            {
                "value": "住民",
                "kana": [
                    "じゅうみん"
                ],
                "english": [
                    "citizens",
                    "inhabitants",
                    "residents",
                    "population"
                ]
            },
            {
                "value": "住所",
                "kana": [
                    "じゅうしょ"
                ],
                "english": [
                    "address (e.g. of house)",
                    "residence",
                    "domicile"
                ]
            },
            {
                "value": "在住",
                "kana": [
                    "ざいじゅう"
                ],
                "english": [
                    "resident"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "重",
        "on": [
            "じゅう",
            "ちょう"
        ],
        "kun": [
            "え",
            "かさなる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%87%8D#Kanji",
        "meanings": [
            "heavy",
            "heap up",
            "pile up",
            "nest of boxes",
            "fold"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "重さ",
                "kana": [
                    "おもさ"
                ],
                "english": [
                    "weight"
                ]
            },
            {
                "value": "重要",
                "kana": [
                    "じゅうよう"
                ],
                "english": [
                    "important",
                    "momentous",
                    "essential",
                    "principal"
                ]
            },
            {
                "value": "重大",
                "kana": [
                    "じゅうだい"
                ],
                "english": [
                    "serious",
                    "important",
                    "significant",
                    "grave"
                ]
            },
            {
                "value": "重み",
                "kana": [
                    "おもみ"
                ],
                "english": [
                    "importance",
                    "weight",
                    "dignity",
                    "emphasis"
                ]
            },
            {
                "value": "貴重",
                "kana": [
                    "きちょう"
                ],
                "english": [
                    "precious",
                    "valuable"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "宿",
        "on": [
            "シュク"
        ],
        "kun": [
            "やど",
            "やどる",
            "やどす"
        ],
        "source": "",
        "meanings": [
            "inn",
            "lodging",
            "relay station",
            "dwell",
            "lodge",
            "be pregnant",
            "home",
            "dwelling"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "所",
        "on": [
            "しょ"
        ],
        "kun": [
            "ところ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%89%80#Kanji",
        "meanings": [
            "place"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "事務所",
                "kana": [
                    "じむしょ"
                ],
                "english": [
                    "office"
                ]
            },
            {
                "value": "場所",
                "kana": [
                    "ばしょ"
                ],
                "english": [
                    "place",
                    "location"
                ]
            },
            {
                "value": "研究所",
                "kana": [
                    "けんきゅうしょ",
                    "けんきゅうじょ"
                ],
                "english": [
                    "research establishment (institute, laboratory)"
                ]
            },
            {
                "value": "所得",
                "kana": [
                    "しょとく"
                ],
                "english": [
                    "income",
                    "earnings"
                ]
            },
            {
                "value": "住所",
                "kana": [
                    "じゅうしょ"
                ],
                "english": [
                    "address (e.g. of house)",
                    "residence",
                    "domicile"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "暑",
        "on": [
            "ショ"
        ],
        "kun": [
            "あつい"
        ],
        "source": "",
        "meanings": [
            "sultry",
            "hot",
            "summer heat"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "助",
        "on": [
            "じょ"
        ],
        "kun": [
            "たすける",
            "たすかる",
            "すけ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8A%A9#Kanji",
        "meanings": [
            "help",
            "rescue",
            "assist"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "援助",
                "kana": [
                    "えんじょ"
                ],
                "english": [
                    "assistance",
                    "aid",
                    "support"
                ]
            },
            {
                "value": "補助",
                "kana": [
                    "ほじょ"
                ],
                "english": [
                    "assistance",
                    "support",
                    "aid",
                    "auxiliary"
                ]
            },
            {
                "value": "助教授",
                "kana": [
                    "じょきょうじゅ"
                ],
                "english": [
                    "assistant professor"
                ]
            },
            {
                "value": "助成",
                "kana": [
                    "じょせい"
                ],
                "english": [
                    "assisting",
                    "assistance",
                    "fostering",
                    "aiding"
                ]
            },
            {
                "value": "助手",
                "kana": [
                    "じょしゅ",
                    "すけて"
                ],
                "english": [
                    "helper",
                    "helpmeet",
                    "assistant",
                    "tutor"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "勝",
        "on": [
            "しょう"
        ],
        "kun": [
            "かつ",
            "すぐれる",
            "まさる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8B%9D#Kanji",
        "meanings": [
            "win"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [
            {
                "value": "勝る",
                "kana": [
                    "まさる"
                ],
                "english": [
                    "to excel",
                    "to surpass",
                    "to exceed"
                ]
            },
            {
                "value": "勝ち",
                "kana": [
                    "かち"
                ],
                "english": [
                    "win",
                    "victory"
                ]
            },
            {
                "value": "優勝",
                "kana": [
                    "ゆうしょう"
                ],
                "english": [
                    "overall victory",
                    "championship"
                ]
            },
            {
                "value": "決勝",
                "kana": [
                    "けっしょう"
                ],
                "english": [
                    "decision of a contest",
                    "finals (in sports)"
                ]
            },
            {
                "value": "勝利",
                "kana": [
                    "しょうり"
                ],
                "english": [
                    "victory",
                    "triumph",
                    "conquest",
                    "success",
                    "win"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "商",
        "on": [
            "しょう"
        ],
        "kun": [
            "あきなう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%95%86#Kanji",
        "meanings": [
            "make a deal",
            "selling",
            "dealing in",
            "merchant"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [
            {
                "value": "商",
                "kana": [
                    "しょう"
                ],
                "english": [
                    "quotient",
                    "dealing",
                    "dealer",
                    "store"
                ]
            },
            {
                "value": "商品",
                "kana": [
                    "しょうひん"
                ],
                "english": [
                    "commodity",
                    "article of commerce",
                    "goods",
                    "stock"
                ]
            },
            {
                "value": "商業",
                "kana": [
                    "しょうぎょう"
                ],
                "english": [
                    "commerce",
                    "trade",
                    "business"
                ]
            },
            {
                "value": "商社",
                "kana": [
                    "しょうしゃ"
                ],
                "english": [
                    "trading company",
                    "firm"
                ]
            },
            {
                "value": "通商",
                "kana": [
                    "つうしょう"
                ],
                "english": [
                    "commerce",
                    "trade"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "昭",
        "on": [
            "ショウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "shining",
            "bright"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "消",
        "on": [
            "しょう"
        ],
        "kun": [
            "きえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B6%88#Kanji",
        "meanings": [
            "extinguish",
            "blow out",
            "turn off",
            "neutralize",
            "cancel"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "消費",
                "kana": [
                    "しょうひ"
                ],
                "english": [
                    "consumption",
                    "expenditure"
                ]
            },
            {
                "value": "消費者",
                "kana": [
                    "しょうひしゃ"
                ],
                "english": [
                    "consumer"
                ]
            },
            {
                "value": "消費税",
                "kana": [
                    "しょうひぜい"
                ],
                "english": [
                    "consumption tax (incl. sales tax, VAT"
                ]
            },
            {
                "value": "解消",
                "kana": [
                    "かいしょう"
                ],
                "english": [
                    "cancellation",
                    "liquidation",
                    "resolution"
                ]
            },
            {
                "value": "消極的",
                "kana": [
                    "しょうきょくてき"
                ],
                "english": [
                    "negative",
                    "half-hearted",
                    "passive",
                    "unmotivated"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "章",
        "on": [
            "ショウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "badge",
            "chapter",
            "composition",
            "poem",
            "design"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "乗",
        "on": [
            "じょう"
        ],
        "kun": [
            "のる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B9%97#Kanji",
        "meanings": [
            "ride",
            "power",
            "multiplication",
            "record",
            "counter for vehicles",
            "board",
            "mount",
            "join"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "乗り",
                "kana": [
                    "のり"
                ],
                "english": [
                    "riding",
                    "ride",
                    "spread (of paints)"
                ]
            },
            {
                "value": "乗用車",
                "kana": [
                    "じょうようしゃ"
                ],
                "english": [
                    "passenger vehicle",
                    "automobile"
                ]
            },
            {
                "value": "乗客",
                "kana": [
                    "じょうきゃく",
                    "じょうかく"
                ],
                "english": [
                    "passenger"
                ]
            },
            {
                "value": "乗せる",
                "kana": [
                    "のせる"
                ],
                "english": [
                    "to place on (something)",
                    "to take on board"
                ]
            },
            {
                "value": "乗員",
                "kana": [
                    "じょういん"
                ],
                "english": [
                    "crew"
                ]
            }
        ],
        "tags": [
            "counter",
            "verb"
        ]
    },
    {
        "name": "植",
        "on": [
            "ショク"
        ],
        "kun": [
            "うえる",
            "うわる"
        ],
        "source": "",
        "meanings": [
            "plant"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "深",
        "on": [
            "シン"
        ],
        "kun": [
            "ふかい",
            "ぶかい",
            "ふかまる",
            "ふかめる",
            "み"
        ],
        "source": "",
        "meanings": [
            "deep",
            "heighten",
            "intensify",
            "strengthen"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "申",
        "on": [
            "シン"
        ],
        "kun": [
            "もうす",
            "もうし",
            "さる"
        ],
        "source": "",
        "meanings": [
            "have the honor to",
            "sign of the monkey",
            "3-5PM",
            "ninth sign of Chinese zodiac"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "真",
        "on": [
            "しん"
        ],
        "kun": [
            "ま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9C%9F#Kanji",
        "meanings": [
            "true",
            "reality"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "写真",
                "kana": [
                    "しゃしん"
                ],
                "english": [
                    "photograph",
                    "photo",
                    "movie"
                ]
            },
            {
                "value": "真の",
                "kana": [
                    "しんの"
                ],
                "english": [
                    "true",
                    "real",
                    "genuine",
                    "proper",
                    "utter"
                ]
            },
            {
                "value": "真相",
                "kana": [
                    "しんそう"
                ],
                "english": [
                    "truth",
                    "real situation"
                ]
            },
            {
                "value": "真実",
                "kana": [
                    "しんじつ",
                    "さな",
                    "さね"
                ],
                "english": [
                    "truth",
                    "reality"
                ]
            },
            {
                "value": "真ん中",
                "kana": [
                    "まんなか",
                    "まなか"
                ],
                "english": [
                    "middle",
                    "centre"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "神",
        "on": [
            "しん",
            "じん"
        ],
        "kun": [
            "かみ",
            "かん",
            "こう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A5%9E#Kanji",
        "meanings": [
            "gods",
            "mind",
            "soul"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "神",
                "kana": [
                    "かみ"
                ],
                "english": [
                    "god",
                    "deity",
                    "divinity",
                    "spirit",
                    "kami"
                ]
            },
            {
                "value": "精神",
                "kana": [
                    "せいしん"
                ],
                "english": [
                    "mind",
                    "soul",
                    "heart",
                    "spirit",
                    "intention"
                ]
            },
            {
                "value": "阪神",
                "kana": [
                    "はんしん"
                ],
                "english": [
                    "Osaka-Kobe Hanshin (company name: rail-way)"
                ]
            },
            {
                "value": "神経",
                "kana": [
                    "しんけい"
                ],
                "english": [
                    "nerve",
                    "sensitivity"
                ]
            },
            {
                "value": "神社",
                "kana": [
                    "じんじゃ"
                ],
                "english": [
                    "Shinto shrine"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "身",
        "on": [
            "しん"
        ],
        "kun": [
            "み"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%BA%AB#Kanji",
        "meanings": [
            "somebody",
            "person",
            "one’s station in life"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "身",
                "kana": [
                    "み"
                ],
                "english": [
                    "body",
                    "oneself",
                    "one’s place",
                    "one’s position"
                ]
            },
            {
                "value": "自身",
                "kana": [
                    "じしん"
                ],
                "english": [
                    "by oneself",
                    "personally"
                ]
            },
            {
                "value": "出身",
                "kana": [
                    "しゅっしん"
                ],
                "english": [
                    "person’s origin (town, city, country, etc.)"
                ]
            },
            {
                "value": "中身",
                "kana": [
                    "なかみ"
                ],
                "english": [
                    "contents",
                    "interior",
                    "substance",
                    "filling"
                ]
            },
            {
                "value": "身長",
                "kana": [
                    "しんちょう"
                ],
                "english": [
                    "height (of body)",
                    "stature"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "進",
        "on": [
            "しん"
        ],
        "kun": [
            "すすむ",
            "すすめる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%80%B2#Kanji",
        "meanings": [
            "advance",
            "proceed",
            "progress",
            "promote"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "推進",
                "kana": [
                    "すいしん"
                ],
                "english": [
                    "propulsion",
                    "driving force",
                    "implementation"
                ]
            },
            {
                "value": "進出",
                "kana": [
                    "しんしゅつ"
                ],
                "english": [
                    "advance",
                    "step forward"
                ]
            },
            {
                "value": "先進国",
                "kana": [
                    "せんしんこく"
                ],
                "english": [
                    "advanced (developed) country"
                ]
            },
            {
                "value": "進展",
                "kana": [
                    "しんてん"
                ],
                "english": [
                    "progress",
                    "development"
                ]
            },
            {
                "value": "促進",
                "kana": [
                    "そくしん"
                ],
                "english": [
                    "promotion",
                    "acceleration",
                    "encouragement"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "世",
        "on": [
            "せ",
            "せい"
        ],
        "kun": [
            "よ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%96#Kanji",
        "meanings": [
            "generation",
            "world",
            "society",
            "public"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "世",
                "kana": [
                    "よ"
                ],
                "english": [
                    "world",
                    "society",
                    "age",
                    "generation"
                ]
            },
            {
                "value": "世界",
                "kana": [
                    "せかい"
                ],
                "english": [
                    "the world",
                    "society",
                    "the universe"
                ]
            },
            {
                "value": "世代",
                "kana": [
                    "せだい"
                ],
                "english": [
                    "generation",
                    "the world",
                    "the age"
                ]
            },
            {
                "value": "世論",
                "kana": [
                    "せろん, よろん"
                ],
                "english": [
                    "public opinion"
                ]
            },
            {
                "value": "世界的",
                "kana": [
                    "せかいてき"
                ],
                "english": [
                    "global",
                    "international",
                    "world famous"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "整",
        "on": [
            "セイ"
        ],
        "kun": [
            "ととのえる",
            "ととのう"
        ],
        "source": "",
        "meanings": [
            "organize",
            "arranging",
            "tune",
            "tone",
            "meter",
            "key (music)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "昔",
        "on": [
            "セキ",
            "シャク"
        ],
        "kun": [
            "むかし"
        ],
        "source": "",
        "meanings": [
            "once upon a time",
            "antiquity",
            "old times"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "全",
        "on": [
            "ぜん"
        ],
        "kun": [
            "すべて",
            "まったく"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%85%A8#Kanji",
        "meanings": [
            "whole",
            "entire",
            "all",
            "complete",
            "fulfill"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "安全",
                "kana": [
                    "あんぜん"
                ],
                "english": [
                    "safety",
                    "security"
                ]
            },
            {
                "value": "全体",
                "kana": [
                    "ぜんたい"
                ],
                "english": [
                    "whole",
                    "entirety",
                    "whatever (is the matter)"
                ]
            },
            {
                "value": "全国",
                "kana": [
                    "ぜんこく",
                    "ぜんごく"
                ],
                "english": [
                    "country wide",
                    "nation wide",
                    "whole country"
                ]
            },
            {
                "value": "安全保障",
                "kana": [
                    "あんぜんほしょう"
                ],
                "english": [
                    "security guarantee (e.g. military security"
                ]
            },
            {
                "value": "全員",
                "kana": [
                    "ぜんいん"
                ],
                "english": [
                    "all members (unanimity)",
                    "all hands"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "想",
        "on": [
            "そう"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E6%83%B3#Kanji",
        "meanings": [
            "concept",
            "think",
            "idea",
            "thought"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [
            {
                "value": "構想",
                "kana": [
                    "こうそう"
                ],
                "english": [
                    "plan",
                    "plot",
                    "idea",
                    "conception"
                ]
            },
            {
                "value": "予想",
                "kana": [
                    "よそう"
                ],
                "english": [
                    "expectation",
                    "anticipation",
                    "prediction"
                ]
            },
            {
                "value": "思想",
                "kana": [
                    "しそう"
                ],
                "english": [
                    "thought",
                    "idea",
                    "ideology"
                ]
            },
            {
                "value": "感想",
                "kana": [
                    "かんそう"
                ],
                "english": [
                    "impressions",
                    "thoughts"
                ]
            },
            {
                "value": "発想",
                "kana": [
                    "はっそう"
                ],
                "english": [
                    "expression (e.g. in music)",
                    "idea",
                    "conception"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "相",
        "on": [
            "そう",
            "しょう"
        ],
        "kun": [
            "あい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9B%B8#Kanji",
        "meanings": [
            "mutual",
            "together",
            "each other",
            "minister of state",
            "councillor",
            "aspect",
            "phase",
            "physiognomy"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "外相",
                "kana": [
                    "がいしょう"
                ],
                "english": [
                    "Foreign Minister"
                ]
            },
            {
                "value": "首相",
                "kana": [
                    "しゅしょう"
                ],
                "english": [
                    "Prime Minister",
                    "Chancellor (Germany, Austria"
                ]
            },
            {
                "value": "相手",
                "kana": [
                    "あいて"
                ],
                "english": [
                    "companion",
                    "partner",
                    "company",
                    "other party"
                ]
            },
            {
                "value": "相談",
                "kana": [
                    "そうだん"
                ],
                "english": [
                    "consultation, discussion"
                ]
            },
            {
                "value": "蔵相",
                "kana": [
                    "ぞうしょう"
                ],
                "english": [
                    "Minister of Finance"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "送",
        "on": [
            "す",
            "そう"
        ],
        "kun": [
            "おくる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%80%81#Kanji",
        "meanings": [
            "escort",
            "send"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "送る",
                "kana": [
                    "おくる"
                ],
                "english": [
                    "to send (a thing)",
                    "to dispatch"
                ]
            },
            {
                "value": "放送",
                "kana": [
                    "ほうそう"
                ],
                "english": [
                    "broadcast",
                    "broadcasting"
                ]
            },
            {
                "value": "輸送",
                "kana": [
                    "ゆそう"
                ],
                "english": [
                    "transport",
                    "transportation"
                ]
            },
            {
                "value": "送り",
                "kana": [
                    "おくり"
                ],
                "english": [
                    "seeing off",
                    "sending off",
                    "funeral",
                    "escapement"
                ]
            },
            {
                "value": "先送り",
                "kana": [
                    "さきおくり"
                ],
                "english": [
                    "postpone"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "息",
        "on": [
            "ソク"
        ],
        "kun": [
            "いき"
        ],
        "source": "",
        "meanings": [
            "breath",
            "respiration",
            "son",
            "interest (on money)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "速",
        "on": [
            "ソク"
        ],
        "kun": [
            "はやい",
            "はや",
            "はやめる",
            "すみやか"
        ],
        "source": "",
        "meanings": [
            "quick",
            "fast"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "族",
        "on": [
            "ぞく"
        ],
        "kun": [
            "やから"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%97%8F#Kanji",
        "meanings": [
            "tribe",
            "family"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "家族",
                "kana": [
                    "かぞく"
                ],
                "english": [
                    "family",
                    "members of a family"
                ]
            },
            {
                "value": "族",
                "kana": [
                    "ぞく"
                ],
                "english": [
                    "tribe",
                    "clan",
                    "band"
                ]
            },
            {
                "value": "民族",
                "kana": [
                    "みんぞく"
                ],
                "english": [
                    "people",
                    "race",
                    "nation"
                ]
            },
            {
                "value": "遺族",
                "kana": [
                    "いぞく"
                ],
                "english": [
                    "bereaved family"
                ]
            },
            {
                "value": "民族主義",
                "kana": [
                    "みんぞくしゅぎ"
                ],
                "english": [
                    "nationalism"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "他",
        "on": [
            "タ"
        ],
        "kun": [
            "ほか"
        ],
        "source": "",
        "meanings": [
            "other",
            "another",
            "the others"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "打",
        "on": [
            "だ"
        ],
        "kun": [
            "うつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%89%93#Kanji",
        "meanings": [
            "strike",
            "hit",
            "knock",
            "pound",
            "dozen"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [
            {
                "value": "打つ",
                "kana": [
                    "うつ"
                ],
                "english": [
                    "to hit (something inanimate)",
                    "to strike"
                ]
            },
            {
                "value": "本塁打",
                "kana": [
                    "ほんるいだ"
                ],
                "english": [
                    "home run (baseball)"
                ]
            },
            {
                "value": "打撃",
                "kana": [
                    "だげき"
                ],
                "english": [
                    "blow",
                    "shock",
                    "strike",
                    "damage"
                ]
            },
            {
                "value": "打線",
                "kana": [
                    "だせん"
                ],
                "english": [
                    "baseball lineup"
                ]
            },
            {
                "value": "安打",
                "kana": [
                    "あんだ"
                ],
                "english": [
                    "safe hit (baseball)"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "対",
        "on": [
            "たい"
        ],
        "kun": [
            "つい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AF%BE#Kanji",
        "meanings": [
            "opposite",
            "even",
            "equal",
            "versus",
            "anti",
            "compare"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "対応",
                "kana": [
                    "たいおう"
                ],
                "english": [
                    "interaction",
                    "correspondence",
                    "coping with"
                ]
            },
            {
                "value": "対策",
                "kana": [
                    "たいさく"
                ],
                "english": [
                    "counter plan",
                    "counter",
                    "measure"
                ]
            },
            {
                "value": "対象",
                "kana": [
                    "たいしょう"
                ],
                "english": [
                    "target",
                    "object (of worship, study, etc.)"
                ]
            },
            {
                "value": "反対",
                "kana": [
                    "はんたい"
                ],
                "english": [
                    "opposition",
                    "resistance",
                    "antagonism",
                    "hostility"
                ]
            },
            {
                "value": "対立",
                "kana": [
                    "たいりつ"
                ],
                "english": [
                    "confrontation, opposition, antagonism"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "待",
        "on": [
            "だい",
            "たい"
        ],
        "kun": [
            "まつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BE%85#Kanji",
        "meanings": [
            "wait",
            "depend on"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "期待",
                "kana": [
                    "きたい"
                ],
                "english": [
                    "expectation",
                    "anticipation",
                    "hope"
                ]
            },
            {
                "value": "招待",
                "kana": [
                    "しょうたい"
                ],
                "english": [
                    "invitation"
                ]
            },
            {
                "value": "待遇",
                "kana": [
                    "たいぐう"
                ],
                "english": [
                    "treatment",
                    "reception"
                ]
            },
            {
                "value": "待ち",
                "kana": [
                    "まち"
                ],
                "english": [
                    "waiting",
                    "waiting time"
                ]
            },
            {
                "value": "接待",
                "kana": [
                    "せったい"
                ],
                "english": [
                    "reception",
                    "welcome",
                    "serving (food)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "代",
        "on": [
            "だい",
            "たい"
        ],
        "kun": [
            "かわる",
            "よ",
            "かえる",
            "しろ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BB%A3#Kanji",
        "meanings": [
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
        "grade": 3,
        "jlpt": 3,
        "strokes": 5,
        "examples": [
            {
                "value": "代わり",
                "kana": [
                    "かわり",
                    "がわり"
                ],
                "english": [
                    "substitute",
                    "deputy",
                    "proxy",
                    "alternate",
                    "relief"
                ]
            },
            {
                "value": "時代",
                "kana": [
                    "じだい"
                ],
                "english": [
                    "period",
                    "epoch",
                    "era",
                    "age",
                    "the times"
                ]
            },
            {
                "value": "代表",
                "kana": [
                    "だいひょう"
                ],
                "english": [
                    "representative",
                    "representation",
                    "delegation"
                ]
            },
            {
                "value": "現代",
                "kana": [
                    "げんだい"
                ],
                "english": [
                    "nowadays",
                    "modern era",
                    "modern times"
                ]
            },
            {
                "value": "世代",
                "kana": [
                    "せだい"
                ],
                "english": [
                    "generation",
                    "the world",
                    "the age"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "第",
        "on": [
            "ダイ",
            "テイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "No.",
            "residence"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "題",
        "on": [
            "だい"
        ],
        "kun": [
            "ひたい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%A1%8C#Kanji",
        "meanings": [
            "topic",
            "subject"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 18,
        "examples": [
            {
                "value": "課題",
                "kana": [
                    "かだい"
                ],
                "english": [
                    "subject",
                    "theme",
                    "task",
                    "challenge",
                    "issue"
                ]
            },
            {
                "value": "問題",
                "kana": [
                    "もんだい"
                ],
                "english": [
                    "problem",
                    "question"
                ]
            },
            {
                "value": "話題",
                "kana": [
                    "わだい"
                ],
                "english": [
                    "topic",
                    "subject"
                ]
            },
            {
                "value": "題",
                "kana": [
                    "だい"
                ],
                "english": [
                    "title",
                    "subject",
                    "theme",
                    "topic"
                ]
            },
            {
                "value": "問題点",
                "kana": [
                    "もんだいてん"
                ],
                "english": [
                    "the point at issue"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "炭",
        "on": [
            "タン"
        ],
        "kun": [
            "すみ"
        ],
        "source": "",
        "meanings": [
            "charcoal",
            "coal"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "短",
        "on": [
            "タン"
        ],
        "kun": [
            "みじかい"
        ],
        "source": "",
        "meanings": [
            "short",
            "brevity",
            "fault",
            "defect",
            "weak point"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "談",
        "on": [
            "だん"
        ],
        "kun": [
            "かたる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%AB%87#Kanji",
        "meanings": [
            "discuss",
            "talk"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 15,
        "examples": [
            {
                "value": "会談",
                "kana": [
                    "かいだん"
                ],
                "english": [
                    "conversation",
                    "conference",
                    "discussion"
                ]
            },
            {
                "value": "相談",
                "kana": [
                    "そうだん"
                ],
                "english": [
                    "consultation",
                    "discussion"
                ]
            },
            {
                "value": "懇談",
                "kana": [
                    "こんだん"
                ],
                "english": [
                    "informal talk"
                ]
            },
            {
                "value": "談合",
                "kana": [
                    "だんごう"
                ],
                "english": [
                    "consultation",
                    "discussion",
                    "conference"
                ]
            },
            {
                "value": "相談役",
                "kana": [
                    "そうだんやく"
                ],
                "english": [
                    "counselor",
                    "counsellor",
                    "adviser",
                    "advisor"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "着",
        "on": [
            "じゃく",
            "ちゃく"
        ],
        "kun": [
            "つく",
            "つける"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%9D%80#Kanji",
        "meanings": [
            "don",
            "arrive",
            "wear",
            "counter for suits of clothing"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 12,
        "examples": [
            {
                "value": "決着",
                "kana": [
                    "けっちゃく"
                ],
                "english": [
                    "conclusion",
                    "decision",
                    "end",
                    "settlement"
                ]
            },
            {
                "value": "着実",
                "kana": [
                    "ちゃくじつ"
                ],
                "english": [
                    "steady",
                    "sound",
                    "trustworthy",
                    "solid"
                ]
            },
            {
                "value": "落ち着いた",
                "kana": [
                    "おちついた"
                ],
                "english": [
                    "quiet",
                    "calm",
                    "composed"
                ]
            },
            {
                "value": "癒着",
                "kana": [
                    "ゆちゃく"
                ],
                "english": [
                    "adhesion"
                ]
            },
            {
                "value": "着る",
                "kana": [
                    "きる"
                ],
                "english": [
                    "to wear (in modern Japanese)"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "柱",
        "on": [
            "チュウ"
        ],
        "kun": [
            "はしら"
        ],
        "source": "",
        "meanings": [
            "pillar",
            "post",
            "cylinder",
            "support"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "注",
        "on": [
            "ちゅう"
        ],
        "kun": [
            "そそぐ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B3%A8#Kanji",
        "meanings": [
            "pour",
            "irrigate",
            "shed (tears)",
            "flow into",
            "concentrate on",
            "notes",
            "comment",
            "annotate"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "注",
                "kana": [
                    "ちゅう"
                ],
                "english": [
                    "annotation",
                    "explanatory note",
                    "comment"
                ]
            },
            {
                "value": "注目",
                "kana": [
                    "ちゅうもく"
                ],
                "english": [
                    "notice",
                    "attention",
                    "observation"
                ]
            },
            {
                "value": "受注",
                "kana": [
                    "じゅちゅう"
                ],
                "english": [
                    "accepting orders"
                ]
            },
            {
                "value": "注意",
                "kana": [
                    "ちゅうい"
                ],
                "english": [
                    "caution",
                    "being careful",
                    "attention (heed)"
                ]
            },
            {
                "value": "注文",
                "kana": [
                    "ちゅうもん"
                ],
                "english": [
                    "order",
                    "request"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "丁",
        "on": [
            "チョウ",
            "テイ",
            "チン",
            "トウ",
            "チ"
        ],
        "kun": [
            "ひのと"
        ],
        "source": "",
        "meanings": [
            "street",
            "ward",
            "town",
            "counter for guns",
            "tools",
            "leaves or cakes of something",
            "even number",
            "4th calendar sign"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 2,
        "examples": [],
        "tags": []
    },
    {
        "name": "帳",
        "on": [
            "チョウ"
        ],
        "kun": [
            "とばり"
        ],
        "source": "",
        "meanings": [
            "notebook",
            "account book",
            "album",
            "curtain",
            "veil",
            "net",
            "tent"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "調",
        "on": [
            "ちょう"
        ],
        "kun": [
            "しらべる",
            "ととのう",
            "ととのえる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%AA%BF#Kanji",
        "meanings": [
            "tune",
            "tone",
            "meter",
            "key (music)",
            "writing",
            "style",
            "prepare",
            "exorcise",
            "investigate"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 15,
        "examples": [
            {
                "value": "調べ",
                "kana": [
                    "しらべ"
                ],
                "english": [
                    "investigation",
                    "inspection",
                    "examination",
                    "tune"
                ]
            },
            {
                "value": "調査",
                "kana": [
                    "ちょうさ"
                ],
                "english": [
                    "investigation",
                    "examination",
                    "inquiry",
                    "enquiry"
                ]
            },
            {
                "value": "調整",
                "kana": [
                    "ちょうせい"
                ],
                "english": [
                    "regulation",
                    "adjustment",
                    "tuning",
                    "modification"
                ]
            },
            {
                "value": "協調",
                "kana": [
                    "きょうちょう"
                ],
                "english": [
                    "cooperation",
                    "conciliation",
                    "harmony"
                ]
            },
            {
                "value": "好調",
                "kana": [
                    "こうちょう"
                ],
                "english": [
                    "favourable",
                    "favorable",
                    "promising"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "追",
        "on": [
            "つい"
        ],
        "kun": [
            "おう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%BF%BD#Kanji",
        "meanings": [
            "chase",
            "drive away",
            "follow",
            "pursue",
            "mean-while"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "追う",
                "kana": [
                    "おう"
                ],
                "english": [
                    "to chase",
                    "to run after",
                    "to pursue"
                ]
            },
            {
                "value": "追加",
                "kana": [
                    "ついか"
                ],
                "english": [
                    "addition",
                    "supplement",
                    "append (e.g. to a file)"
                ]
            },
            {
                "value": "追い込む",
                "kana": [
                    "おいこむ"
                ],
                "english": [
                    "to herd",
                    "to corner",
                    "to drive"
                ]
            },
            {
                "value": "追及",
                "kana": [
                    "ついきゅう"
                ],
                "english": [
                    "investigation (e.g. into someone’s guilt)"
                ]
            },
            {
                "value": "追放",
                "kana": [
                    "ついほう"
                ],
                "english": [
                    "exile",
                    "banishment"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "定",
        "on": [
            "じょう",
            "てい"
        ],
        "kun": [
            "さだむ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%AE%9A#Kanji",
        "meanings": [
            "determine",
            "fix",
            "establish",
            "decide"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "協定",
                "kana": [
                    "きょうてい"
                ],
                "english": [
                    "arrangement",
                    "pact",
                    "agreement"
                ]
            },
            {
                "value": "決定",
                "kana": [
                    "けってい"
                ],
                "english": [
                    "decision",
                    "determination"
                ]
            },
            {
                "value": "予定",
                "kana": [
                    "よてい"
                ],
                "english": [
                    "plans",
                    "arrangement",
                    "schedule",
                    "program"
                ]
            },
            {
                "value": "安定",
                "kana": [
                    "あんてい"
                ],
                "english": [
                    "stability",
                    "equilibrium"
                ]
            },
            {
                "value": "暫定",
                "kana": [
                    "ざんてい"
                ],
                "english": [
                    "tentative",
                    "temporary"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "庭",
        "on": [
            "テイ"
        ],
        "kun": [
            "にわ"
        ],
        "source": "",
        "meanings": [
            "courtyard",
            "garden",
            "yard"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "笛",
        "on": [
            "テキ"
        ],
        "kun": [
            "ふえ"
        ],
        "source": "",
        "meanings": [
            "flute",
            "clarinet",
            "pipe",
            "whistle",
            "bagpipe",
            "piccolo"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "鉄",
        "on": [
            "テツ"
        ],
        "kun": [
            "くろがね"
        ],
        "source": "",
        "meanings": [
            "iron"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "転",
        "on": [
            "てん"
        ],
        "kun": [
            "ころぶ",
            "ころがす",
            "ころがる",
            "めぐる",
            "ころげる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%BB%A2#Kanji",
        "meanings": [
            "revolve",
            "turn around",
            "change"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "運転",
                "kana": [
                    "うんてん"
                ],
                "english": [
                    "operation",
                    "motion",
                    "driving"
                ]
            },
            {
                "value": "転換",
                "kana": [
                    "てんかん"
                ],
                "english": [
                    "convert",
                    "divert"
                ]
            },
            {
                "value": "逆転",
                "kana": [
                    "ぎゃくてん"
                ],
                "english": [
                    "(sudden) change",
                    "reversal",
                    "turn around"
                ]
            },
            {
                "value": "移転",
                "kana": [
                    "いてん"
                ],
                "english": [
                    "moving",
                    "transfer",
                    "demise"
                ]
            },
            {
                "value": "運転手",
                "kana": [
                    "うんてんしゅ"
                ],
                "english": [
                    "driver",
                    "chauffeur"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "登",
        "on": [
            "トウ",
            "ト",
            "ドウ",
            "ショウ",
            "チョウ"
        ],
        "kun": [
            "のぼる",
            "あがる"
        ],
        "source": "",
        "meanings": [
            "ascend",
            "climb up"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "都",
        "on": [
            "と",
            "つ"
        ],
        "kun": [
            "みやこ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%83%BD#Kanji",
        "meanings": [
            "metropolis",
            "capital"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "都",
                "kana": [
                    "みやこ"
                ],
                "english": [
                    "capital",
                    "metropolis"
                ]
            },
            {
                "value": "都市",
                "kana": [
                    "とし"
                ],
                "english": [
                    "town",
                    "city",
                    "municipal",
                    "urban"
                ]
            },
            {
                "value": "都内",
                "kana": [
                    "とない"
                ],
                "english": [
                    "metropolitan area"
                ]
            },
            {
                "value": "京都",
                "kana": [
                    "きょうと"
                ],
                "english": [
                    "Kyoto"
                ]
            },
            {
                "value": "首都",
                "kana": [
                    "しゅと"
                ],
                "english": [
                    "capital city",
                    "metropolis"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "度",
        "on": [
            "ど",
            "と",
            "たく"
        ],
        "kun": [
            "たび"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BA%A6#Kanji",
        "meanings": [
            "degrees",
            "occurrence",
            "time",
            "counter for occurrences"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "制度",
                "kana": [
                    "せいど"
                ],
                "english": [
                    "system",
                    "institution",
                    "organization"
                ]
            },
            {
                "value": "程度",
                "kana": [
                    "ていど"
                ],
                "english": [
                    "degree",
                    "amount",
                    "grade",
                    "standard"
                ]
            },
            {
                "value": "今度",
                "kana": [
                    "こんど"
                ],
                "english": [
                    "now, this time",
                    "next time",
                    "another time"
                ]
            },
            {
                "value": "態度",
                "kana": [
                    "たいど"
                ],
                "english": [
                    "attitude",
                    "manner",
                    "behaviour"
                ]
            },
            {
                "value": "何度",
                "kana": [
                    "なんど"
                ],
                "english": [
                    "how many times?",
                    "how often?"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "島",
        "on": [
            "とう"
        ],
        "kun": [
            "しま"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B3%B6#Kanji",
        "meanings": [
            "island"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "島",
                "kana": [
                    "しま"
                ],
                "english": [
                    "island",
                    "territory (of a prostitute)"
                ]
            },
            {
                "value": "朝鮮半島",
                "kana": [
                    "ちょうせんはんとう"
                ],
                "english": [
                    "Korean peninsula"
                ]
            },
            {
                "value": "中島",
                "kana": [
                    "なかじま"
                ],
                "english": [
                    "island in a pond or river"
                ]
            },
            {
                "value": "小島",
                "kana": [
                    "こじま"
                ],
                "english": [
                    "small island",
                    "islet"
                ]
            },
            {
                "value": "半島",
                "kana": [
                    "はんとう"
                ],
                "english": [
                    "peninsula"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "投",
        "on": [
            "とう"
        ],
        "kun": [
            "なげる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%8A%95#Kanji",
        "meanings": [
            "throw",
            "discard",
            "abandon",
            "launch into",
            "join",
            "invest in",
            "hurl",
            "give up",
            "sell at a loss"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "投資",
                "kana": [
                    "とうし"
                ],
                "english": [
                    "investment"
                ]
            },
            {
                "value": "投手",
                "kana": [
                    "とうしゅ"
                ],
                "english": [
                    "(baseball) pitcher"
                ]
            },
            {
                "value": "投票",
                "kana": [
                    "とうひょう"
                ],
                "english": [
                    "voting",
                    "poll"
                ]
            },
            {
                "value": "国民投票",
                "kana": [
                    "こくみんとうひょう"
                ],
                "english": [
                    "national referendum"
                ]
            },
            {
                "value": "投球",
                "kana": [
                    "とうきゅう"
                ],
                "english": [
                    "pitching",
                    "throwing a ball"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "湯",
        "on": [
            "トウ"
        ],
        "kun": [
            "ゆ"
        ],
        "source": "",
        "meanings": [
            "hot water",
            "bath",
            "hot spring"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "等",
        "on": [
            "トウ"
        ],
        "kun": [
            "ひとしい",
            "など",
            "ら"
        ],
        "source": "",
        "meanings": [
            "etc.",
            "and so forth",
            "class (first)",
            "quality",
            "equal",
            "similar"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "豆",
        "on": [
            "トウ",
            "ズ"
        ],
        "kun": [
            "まめ",
            "まめ"
        ],
        "source": "",
        "meanings": [
            "beans",
            "pea",
            "midget"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "動",
        "on": [
            "どう"
        ],
        "kun": [
            "うごく",
            "うごかす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8B%95#Kanji",
        "meanings": [
            "move",
            "motion",
            "change",
            "confusion",
            "shift",
            "shake"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "動",
                "kana": [
                    "どう"
                ],
                "english": [
                    "motion",
                    "change",
                    "confusion"
                ]
            },
            {
                "value": "動き",
                "kana": [
                    "うごき"
                ],
                "english": [
                    "movement",
                    "activity",
                    "trend",
                    "development"
                ]
            },
            {
                "value": "運動",
                "kana": [
                    "うんどう"
                ],
                "english": [
                    "motion",
                    "exercise"
                ]
            },
            {
                "value": "活動",
                "kana": [
                    "かつどう"
                ],
                "english": [
                    "action",
                    "activity"
                ]
            },
            {
                "value": "行動",
                "kana": [
                    "こうどう"
                ],
                "english": [
                    "action",
                    "conduct",
                    "behaviour"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "童",
        "on": [
            "ドウ"
        ],
        "kun": [
            "わらべ"
        ],
        "source": "",
        "meanings": [
            "juvenile",
            "child"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "農",
        "on": [
            "のう"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E8%BE%B2#Kanji",
        "meanings": [
            "agriculture",
            "farmers"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [
            {
                "value": "農",
                "kana": [
                    "のう"
                ],
                "english": [
                    "farming",
                    "agriculture"
                ]
            },
            {
                "value": "農業",
                "kana": [
                    "のうぎょう"
                ],
                "english": [
                    "agriculture"
                ]
            },
            {
                "value": "農家",
                "kana": [
                    "のうか"
                ],
                "english": [
                    "farmer",
                    "farm family"
                ]
            },
            {
                "value": "農協",
                "kana": [
                    "のうきょう"
                ],
                "english": [
                    "agricultural cooperative"
                ]
            },
            {
                "value": "農村",
                "kana": [
                    "のうそん"
                ],
                "english": [
                    "agricultural community",
                    "farm village",
                    "rural"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "波",
        "on": [
            "ハ"
        ],
        "kun": [
            "なみ"
        ],
        "source": "",
        "meanings": [
            "waves",
            "billows",
            "Poland"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "配",
        "on": [
            "はい"
        ],
        "kun": [
            "くばる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%85%8D#Kanji",
        "meanings": [
            "distribute",
            "spouse",
            "exile",
            "rationing"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "支配",
                "kana": [
                    "しはい"
                ],
                "english": [
                    "rule",
                    "control",
                    "direction"
                ]
            },
            {
                "value": "心配",
                "kana": [
                    "しんぱい"
                ],
                "english": [
                    "worry",
                    "concern",
                    "anxiety",
                    "care",
                    "help",
                    "aid"
                ]
            },
            {
                "value": "配分",
                "kana": [
                    "はいぶん"
                ],
                "english": [
                    "distribution",
                    "allotment"
                ]
            },
            {
                "value": "配慮",
                "kana": [
                    "はいりょ"
                ],
                "english": [
                    "consideration",
                    "concern",
                    "forethought"
                ]
            },
            {
                "value": "配当",
                "kana": [
                    "はいとう"
                ],
                "english": [
                    "dividend",
                    "share"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "倍",
        "on": [
            "バイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "double",
            "twice",
            "times",
            "fold"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "箱",
        "on": [
            "ソウ"
        ],
        "kun": [
            "はこ"
        ],
        "source": "",
        "meanings": [
            "box",
            "chest",
            "case",
            "bin",
            "railway car"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "畑",
        "on": [],
        "kun": [
            "はた",
            "はたけ",
            "ばたけ"
        ],
        "source": "",
        "meanings": [
            "farm",
            "field",
            "garden",
            "one's specialty",
            "(kokuji)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "発",
        "on": [
            "はつ"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E7%99%BA#Kanji",
        "meanings": [
            "discharge",
            "departure",
            "publish",
            "emit",
            "start from",
            "disclose",
            "counter for gunshots"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "発",
                "kana": [
                    "はつ"
                ],
                "english": [
                    "departure",
                    "departing (from ...)"
                ]
            },
            {
                "value": "開発",
                "kana": [
                    "かいはつ"
                ],
                "english": [
                    "development",
                    "exploitation"
                ]
            },
            {
                "value": "発言",
                "kana": [
                    "はつげん"
                ],
                "english": [
                    "utterance",
                    "speech",
                    "proposal"
                ]
            },
            {
                "value": "発行",
                "kana": [
                    "はっこう"
                ],
                "english": [
                    "issue (publications)",
                    "publishing"
                ]
            },
            {
                "value": "発展",
                "kana": [
                    "はってん"
                ],
                "english": [
                    "development",
                    "growth"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "反",
        "on": [
            "ほん",
            "はん"
        ],
        "kun": [
            "たん",
            "そらす",
            "そる"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%8F%8D#Kanji",
        "meanings": [
            "anti"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "違反",
                "kana": [
                    "いはん"
                ],
                "english": [
                    "violation (of law), transgression"
                ]
            },
            {
                "value": "反対",
                "kana": [
                    "はんたい"
                ],
                "english": [
                    "opposition",
                    "resistance",
                    "antagonism",
                    "hostility"
                ]
            },
            {
                "value": "反発",
                "kana": [
                    "はんぱつ"
                ],
                "english": [
                    "to repel",
                    "to oppose",
                    "to revolt"
                ]
            },
            {
                "value": "反応",
                "kana": [
                    "はんのう"
                ],
                "english": [
                    "reaction",
                    "response"
                ]
            },
            {
                "value": "反省",
                "kana": [
                    "はんせい"
                ],
                "english": [
                    "reflection",
                    "reconsideration",
                    "introspection"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "板",
        "on": [
            "ハン",
            "バン"
        ],
        "kun": [
            "いた"
        ],
        "source": "",
        "meanings": [
            "plank",
            "board",
            "plate",
            "stage"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "悲",
        "on": [
            "ヒ"
        ],
        "kun": [
            "かなしい",
            "かなしむ"
        ],
        "source": "",
        "meanings": [
            "grieve",
            "sad",
            "deplore",
            "regret"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "皮",
        "on": [
            "ヒ"
        ],
        "kun": [
            "かわ"
        ],
        "source": "",
        "meanings": [
            "pelt",
            "skin",
            "hide",
            "leather",
            "skin radical (no. 107)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "美",
        "on": [
            "ビ",
            "ミ"
        ],
        "kun": [
            "うつくしい"
        ],
        "source": "",
        "meanings": [
            "beauty",
            "beautiful"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "鼻",
        "on": [
            "ビ"
        ],
        "kun": [
            "はな"
        ],
        "source": "",
        "meanings": [
            "nose",
            "snout"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "筆",
        "on": [
            "ヒツ"
        ],
        "kun": [
            "ふで"
        ],
        "source": "",
        "meanings": [
            "writing brush",
            "writing",
            "painting brush",
            "handwriting"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "氷",
        "on": [
            "ヒョウ"
        ],
        "kun": [
            "こおり",
            "ひ",
            "こおる"
        ],
        "source": "",
        "meanings": [
            "icicle",
            "ice",
            "hail",
            "freeze",
            "congeal"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "表",
        "on": [
            "ひょう"
        ],
        "kun": [
            "あらわす",
            "あらわれる",
            "おもて"
        ],
        "source": "https://en.wiktionary.org/wiki/%E8%A1%A8#Kanji",
        "meanings": [
            "surface",
            "table",
            "chart",
            "diagram"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "表",
                "kana": [
                    "おもて"
                ],
                "english": [
                    "surface"
                ]
            },
            {
                "value": "代表",
                "kana": [
                    "だいひょう"
                ],
                "english": [
                    "representative",
                    "representation",
                    "delegation"
                ]
            },
            {
                "value": "発表",
                "kana": [
                    "はっぴょう"
                ],
                "english": [
                    "announcement",
                    "publication"
                ]
            },
            {
                "value": "表現",
                "kana": [
                    "ひょうげん"
                ],
                "english": [
                    "expression",
                    "presentation",
                    "representation"
                ]
            },
            {
                "value": "表情",
                "kana": [
                    "ひょうじょう"
                ],
                "english": [
                    "facial expression"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "病",
        "on": [
            "びょう",
            "へい"
        ],
        "kun": [
            "やむ",
            "やまい"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%97%85#Kanji",
        "meanings": [
            "ill",
            "sick"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "病院",
                "kana": [
                    "びょういん"
                ],
                "english": [
                    "hospital"
                ]
            },
            {
                "value": "病気",
                "kana": [
                    "びょうき"
                ],
                "english": [
                    "illness",
                    "disease",
                    "sickness"
                ]
            },
            {
                "value": "水俣病",
                "kana": [
                    "みなまたびょう"
                ],
                "english": [
                    "Minamata disease"
                ]
            },
            {
                "value": "糖尿病",
                "kana": [
                    "とうにょうびょう"
                ],
                "english": [
                    "diabetes mellitus",
                    "sugar diabetes"
                ]
            },
            {
                "value": "白血病",
                "kana": [
                    "はっけつびょう"
                ],
                "english": [
                    "leukemia"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "秒",
        "on": [
            "ビョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "second (1/60 minute)"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "品",
        "on": [
            "ひん"
        ],
        "kun": [
            "しな"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%93%81#Kanji",
        "meanings": [
            "article",
            "counter for meal courses",
            "goods"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "作品",
                "kana": [
                    "さくひん"
                ],
                "english": [
                    "work (e.g. book, film, composition, etc.)"
                ]
            },
            {
                "value": "商品",
                "kana": [
                    "しょうひん"
                ],
                "english": [
                    "commodity",
                    "article of commerce",
                    "goods",
                    "stock"
                ]
            },
            {
                "value": "製品",
                "kana": [
                    "せいひん"
                ],
                "english": [
                    "manufactured goods",
                    "finished goods",
                    "product"
                ]
            },
            {
                "value": "食品",
                "kana": [
                    "しょくひん"
                ],
                "english": [
                    "commodity",
                    "foodstuff"
                ]
            },
            {
                "value": "部品",
                "kana": [
                    "ぶひん"
                ],
                "english": [
                    "parts",
                    "accessories"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "負",
        "on": [
            "フ"
        ],
        "kun": [
            "まける",
            "まかす",
            "おう"
        ],
        "source": "",
        "meanings": [
            "defeat",
            "negative",
            "-",
            "minus",
            "bear",
            "owe",
            "assume a responsibility"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "部",
        "on": [
            "ぶ"
        ],
        "kun": [
            "わける"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%83%A8#Kanji",
        "meanings": [
            "section",
            "bureau",
            "dept",
            "class",
            "copy",
            "part",
            "portion",
            "counter for copies of a newspaper or magazine"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "一部",
                "kana": [
                    "いちぶ"
                ],
                "english": [
                    "one part",
                    "one portion",
                    "one section",
                    "some"
                ]
            },
            {
                "value": "幹部",
                "kana": [
                    "かんぶ"
                ],
                "english": [
                    "management",
                    "(executive) staff",
                    "leaders"
                ]
            },
            {
                "value": "部長",
                "kana": [
                    "ぶちょう"
                ],
                "english": [
                    "head (chief"
                ]
            },
            {
                "value": "部分",
                "kana": [
                    "ぶぶん"
                ],
                "english": [
                    "portion",
                    "section",
                    "part"
                ]
            },
            {
                "value": "部門",
                "kana": [
                    "ぶもん"
                ],
                "english": [
                    "class",
                    "group",
                    "category",
                    "department",
                    "field"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "服",
        "on": [
            "ふく"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%8D#Kanji",
        "meanings": [
            "clothing",
            "admit",
            "obey",
            "discharge"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "服",
                "kana": [
                    "ふく"
                ],
                "english": [
                    "clothes (esp. Western clothes)"
                ]
            },
            {
                "value": "制服",
                "kana": [
                    "せいふく"
                ],
                "english": [
                    "uniform"
                ]
            },
            {
                "value": "服装",
                "kana": [
                    "ふくそう"
                ],
                "english": [
                    "garments"
                ]
            },
            {
                "value": "不服",
                "kana": [
                    "ふふく"
                ],
                "english": [
                    "dissatisfaction",
                    "discontent",
                    "disapproval"
                ]
            },
            {
                "value": "洋服",
                "kana": [
                    "ようふく"
                ],
                "english": [
                    "Western-style clothes (cf traditional Japanese clothes)"
                ]
            }
        ],
        "tags": [
            "clothes"
        ]
    },
    {
        "name": "福",
        "on": [
            "フク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "blessing",
            "fortune",
            "luck",
            "wealth"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "物",
        "on": [
            "もつ",
            "ぶつ"
        ],
        "kun": [
            "もの"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%89%A9#Kanji",
        "meanings": [
            "thing",
            "object",
            "matter"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "人物",
                "kana": [
                    "じんぶつ"
                ],
                "english": [
                    "character",
                    "personality",
                    "person",
                    "man"
                ]
            },
            {
                "value": "動物",
                "kana": [
                    "どうぶつ"
                ],
                "english": [
                    "animal"
                ]
            },
            {
                "value": "建物",
                "kana": [
                    "たてもの"
                ],
                "english": [
                    "building"
                ]
            },
            {
                "value": "物価",
                "kana": [
                    "ぶっか"
                ],
                "english": [
                    "prices of commodities",
                    "prices (in general)"
                ]
            },
            {
                "value": "物語",
                "kana": [
                    "ものがたり"
                ],
                "english": [
                    "tale",
                    "story",
                    "legend"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "平",
        "on": [
            "へい",
            "びょう"
        ],
        "kun": [
            "ひら",
            "たいら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%B9%B3#Kanji",
        "meanings": [
            "even",
            "flat",
            "peace"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [
            {
                "value": "平和",
                "kana": [
                    "へいわ"
                ],
                "english": [
                    "peace",
                    "harmony"
                ]
            },
            {
                "value": "和平",
                "kana": [
                    "わへい"
                ],
                "english": [
                    "peace"
                ]
            },
            {
                "value": "平均",
                "kana": [
                    "へいきん",
                    "へいぎん"
                ],
                "english": [
                    "average",
                    "mean",
                    "balance",
                    "equilibrium"
                ]
            },
            {
                "value": "太平洋",
                "kana": [
                    "たいへいよう"
                ],
                "english": [
                    "Pacific Ocean"
                ]
            },
            {
                "value": "平成",
                "kana": [
                    "へいせい"
                ],
                "english": [
                    "Heisei era (1989.1.8?)"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "返",
        "on": [
            "ヘン"
        ],
        "kun": [
            "かえす",
            "かえす",
            "かえる",
            "かえる"
        ],
        "source": "",
        "meanings": [
            "return",
            "answer",
            "fade",
            "repay"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "勉",
        "on": [
            "ベン"
        ],
        "kun": [
            "つとめる"
        ],
        "source": "",
        "meanings": [
            "exertion",
            "endeavour",
            "encourage",
            "strive",
            "make effort",
            "diligent"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "放",
        "on": [
            "ほう"
        ],
        "kun": [
            "はなす",
            "はなつ",
            "はなれる",
            "ほうる",
            "ゆるす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%94%BE#Kanji",
        "meanings": [
            "set free",
            "release",
            "fire",
            "shoot",
            "emit",
            "banish",
            "liberate"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "放る",
                "kana": [
                    "ほうる",
                    "ほる"
                ],
                "english": [
                    "to let go, to abandon",
                    "to leave undone"
                ]
            },
            {
                "value": "放送",
                "kana": [
                    "ほうそう"
                ],
                "english": [
                    "broadcast",
                    "broadcasting"
                ]
            },
            {
                "value": "開放",
                "kana": [
                    "かいほう"
                ],
                "english": [
                    "open",
                    "throw open",
                    "liberalization"
                ]
            },
            {
                "value": "解放",
                "kana": [
                    "かいほう"
                ],
                "english": [
                    "release",
                    "unleashing",
                    "liberation",
                    "emancipation"
                ]
            },
            {
                "value": "民放",
                "kana": [
                    "みんぽう"
                ],
                "english": [
                    "commercial broadcast"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "味",
        "on": [
            "み"
        ],
        "kun": [
            "あじ",
            "あじわう"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%91%B3#Kanji",
        "meanings": [
            "flavour",
            "taste"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 8,
        "examples": [
            {
                "value": "味",
                "kana": [
                    "あじ"
                ],
                "english": [
                    "flavour",
                    "taste",
                    "charm",
                    "style"
                ]
            },
            {
                "value": "意味",
                "kana": [
                    "いみ"
                ],
                "english": [
                    "meaning",
                    "significance"
                ]
            },
            {
                "value": "興味",
                "kana": [
                    "きょうみ"
                ],
                "english": [
                    "interest (in something)"
                ]
            },
            {
                "value": "趣味",
                "kana": [
                    "しゅみ"
                ],
                "english": [
                    "hobby",
                    "tastes",
                    "preference"
                ]
            },
            {
                "value": "味わい",
                "kana": [
                    "あじわい"
                ],
                "english": [
                    "flavour",
                    "meaning",
                    "significance"
                ]
            }
        ],
        "tags": [
            "food"
        ]
    },
    {
        "name": "命",
        "on": [
            "メイ",
            "ミョウ"
        ],
        "kun": [
            "いのち"
        ],
        "source": "",
        "meanings": [
            "fate",
            "command",
            "decree",
            "destiny",
            "life",
            "appoint"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "面",
        "on": [
            "めん"
        ],
        "kun": [
            "おも",
            "おもて",
            "つら"
        ],
        "source": "https://en.wiktionary.org/wiki/%E9%9D%A2#Kanji",
        "meanings": [
            "mask",
            "face",
            "features",
            "surface"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 9,
        "examples": [
            {
                "value": "面",
                "kana": [
                    "つら"
                ],
                "english": [
                    "face (often derog. or vulg.)",
                    "mug",
                    "surface"
                ]
            },
            {
                "value": "全面",
                "kana": [
                    "ぜんめん"
                ],
                "english": [
                    "whole surface",
                    "entire"
                ]
            },
            {
                "value": "当面",
                "kana": [
                    "とうめん"
                ],
                "english": [
                    "current",
                    "urgent",
                    "pressing",
                    "impending"
                ]
            },
            {
                "value": "場面",
                "kana": [
                    "ばめん"
                ],
                "english": [
                    "scene",
                    "setting (e.g. of novel)"
                ]
            },
            {
                "value": "画面",
                "kana": [
                    "がめん"
                ],
                "english": [
                    "terminal screen",
                    "scene",
                    "picture"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "問",
        "on": [
            "もん"
        ],
        "kun": [
            "とう",
            "とん"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%95%8F#Kanji",
        "meanings": [
            "question",
            "ask",
            "problem"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 11,
        "examples": [
            {
                "value": "問う",
                "kana": [
                    "とう"
                ],
                "english": [
                    "to ask",
                    "to question",
                    "to inquire"
                ]
            },
            {
                "value": "問",
                "kana": [
                    "もん"
                ],
                "english": [
                    "counter for questions"
                ]
            },
            {
                "value": "質問",
                "kana": [
                    "しつもん"
                ],
                "english": [
                    "question",
                    "inquiry",
                    "enquiry"
                ]
            },
            {
                "value": "訪問",
                "kana": [
                    "ほうもん"
                ],
                "english": [
                    "call",
                    "visit"
                ]
            },
            {
                "value": "問題",
                "kana": [
                    "もんだい"
                ],
                "english": [
                    "problem",
                    "question"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "役",
        "on": [
            "やく",
            "えき"
        ],
        "kun": [
            "つとめ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%BD%B9#Kanji",
        "meanings": [
            "duty",
            "war",
            "campaign",
            "drafted labor",
            "office",
            "service",
            "role"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 7,
        "examples": [
            {
                "value": "役",
                "kana": [
                    "やく"
                ],
                "english": [
                    "use",
                    "service",
                    "role",
                    "position"
                ]
            },
            {
                "value": "役割",
                "kana": [
                    "やくわり"
                ],
                "english": [
                    "part",
                    "assigning (allotment of) parts",
                    "role"
                ]
            },
            {
                "value": "役員",
                "kana": [
                    "やくいん"
                ],
                "english": [
                    "officer",
                    "official",
                    "executive",
                    "staff"
                ]
            },
            {
                "value": "取締役",
                "kana": [
                    "とりしまりやく"
                ],
                "english": [
                    "company director",
                    "board member"
                ]
            },
            {
                "value": "懲役",
                "kana": [
                    "ちょうえき"
                ],
                "english": [
                    "penal servitude"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "薬",
        "on": [
            "ヤク"
        ],
        "kun": [
            "くすり"
        ],
        "source": "",
        "meanings": [
            "medicine",
            "chemical",
            "enamel",
            "gunpowder",
            "benefit"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "油",
        "on": [
            "ユ",
            "ユウ"
        ],
        "kun": [
            "あぶら"
        ],
        "source": "",
        "meanings": [
            "oil",
            "fat"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "有",
        "on": [
            "ゆう",
            "う"
        ],
        "kun": [
            "ある"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%89#Kanji",
        "meanings": [
            "possess",
            "have",
            "exist",
            "happen",
            "occur",
            "approx"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 6,
        "examples": [
            {
                "value": "有",
                "kana": [
                    "ゆう"
                ],
                "english": [
                    "existence",
                    "possession",
                    "having"
                ]
            },
            {
                "value": "有効",
                "kana": [
                    "ゆうこう"
                ],
                "english": [
                    "validity",
                    "legality",
                    "availability"
                ]
            },
            {
                "value": "有力",
                "kana": [
                    "ゆうりょく"
                ],
                "english": [
                    "influential",
                    "prominent",
                    "strong",
                    "likely"
                ]
            },
            {
                "value": "有権者",
                "kana": [
                    "ゆうけんしゃ"
                ],
                "english": [
                    "voter",
                    "constituent"
                ]
            },
            {
                "value": "有名",
                "kana": [
                    "ゆうめい"
                ],
                "english": [
                    "famous",
                    "fame"
                ]
            }
        ],
        "tags": [
            "verb"
        ]
    },
    {
        "name": "由",
        "on": [
            "ゆ",
            "ゆう"
        ],
        "kun": [
            "ゆい",
            "よし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%94%B1#Kanji",
        "meanings": [
            "wherefore",
            "a reason"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [
            {
                "value": "由",
                "kana": [
                    "よし"
                ],
                "english": [
                    "reason",
                    "significance",
                    "cause"
                ]
            },
            {
                "value": "自由",
                "kana": [
                    "じゆう"
                ],
                "english": [
                    "freedom",
                    "liberty",
                    "as it pleases you"
                ]
            },
            {
                "value": "理由",
                "kana": [
                    "りゆう"
                ],
                "english": [
                    "reason",
                    "pretext",
                    "motive"
                ]
            },
            {
                "value": "経由",
                "kana": [
                    "けいゆ"
                ],
                "english": [
                    "go by the way",
                    "via"
                ]
            },
            {
                "value": "不自由",
                "kana": [
                    "ふじゆう"
                ],
                "english": [
                    "discomfort",
                    "inconvenience",
                    "poverty",
                    "want"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "遊",
        "on": [
            "ユウ",
            "ユ"
        ],
        "kun": [
            "あそぶ",
            "あそばす"
        ],
        "source": "",
        "meanings": [
            "play"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "予",
        "on": [
            "よ"
        ],
        "kun": [
            "あらかじめ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%BA%88#Kanji_1",
        "meanings": [
            "beforehand"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 4,
        "examples": [
            {
                "value": "予算",
                "kana": [
                    "よさん"
                ],
                "english": [
                    "estimate",
                    "budget"
                ]
            },
            {
                "value": "予定",
                "kana": [
                    "よてい"
                ],
                "english": [
                    "plans",
                    "arrangement",
                    "schedule",
                    "program"
                ]
            },
            {
                "value": "予選",
                "kana": [
                    "よせん"
                ],
                "english": [
                    "nomination",
                    "primary",
                    "preliminary contest"
                ]
            },
            {
                "value": "予想",
                "kana": [
                    "よそう"
                ],
                "english": [
                    "expectation",
                    "anticipation",
                    "prediction"
                ]
            },
            {
                "value": "予測",
                "kana": [
                    "よそく"
                ],
                "english": [
                    "prediction",
                    "estimation"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "様",
        "on": [
            "ヨウ",
            "ショウ"
        ],
        "kun": [
            "さま",
            "さん"
        ],
        "source": "",
        "meanings": [
            "Esq.",
            "way",
            "manner",
            "situation",
            "polite suffix"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "洋",
        "on": [
            "よう"
        ],
        "kun": [],
        "source": "https://en.wiktionary.org/wiki/%E6%B4%8B#Kanji",
        "meanings": [
            "ocean",
            "western style"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 9,
        "examples": [
            {
                "value": "太平洋",
                "kana": [
                    "たいへいよう"
                ],
                "english": [
                    "Pacific Ocean"
                ]
            },
            {
                "value": "東洋",
                "kana": [
                    "とうよう"
                ],
                "english": [
                    "Orient"
                ]
            },
            {
                "value": "海洋",
                "kana": [
                    "かいよう"
                ],
                "english": [
                    "ocean"
                ]
            },
            {
                "value": "大西洋",
                "kana": [
                    "たいせいよう"
                ],
                "english": [
                    "Atlantic Ocean"
                ]
            },
            {
                "value": "西洋",
                "kana": [
                    "せいよう"
                ],
                "english": [
                    "the west, Western countries"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "羊",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "ひつじ"
        ],
        "source": "",
        "meanings": [
            "sheep"
        ],
        "grade": 3,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "葉",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "は"
        ],
        "source": "",
        "meanings": [
            "leaf",
            "plane",
            "lobe",
            "needle",
            "blade",
            "spear",
            "counter for flat things",
            "fragment",
            "piece"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "陽",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "ひ"
        ],
        "source": "",
        "meanings": [
            "sunshine",
            "yang principle",
            "positive",
            "male",
            "heaven",
            "daytime"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "落",
        "on": [
            "ラク"
        ],
        "kun": [
            "おちる",
            "おち",
            "おとす"
        ],
        "source": "",
        "meanings": [
            "fall",
            "drop",
            "come down",
            "village",
            "hamlet"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "流",
        "on": [
            "る",
            "りゅう"
        ],
        "kun": [
            "ながれる",
            "ながす"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%B5%81#Kanji",
        "meanings": [
            "current",
            "a sink",
            "flow",
            "forfeit"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 10,
        "examples": [
            {
                "value": "流れ",
                "kana": [
                    "ながれ"
                ],
                "english": [
                    "stream",
                    "current",
                    "flow"
                ]
            },
            {
                "value": "交流",
                "kana": [
                    "こうりゅう"
                ],
                "english": [
                    "intercourse",
                    "(cultural) exchange"
                ]
            },
            {
                "value": "流す",
                "kana": [
                    "ながす"
                ],
                "english": [
                    "to drain",
                    "to pour",
                    "to spill",
                    "to shed (blood"
                ]
            },
            {
                "value": "流通",
                "kana": [
                    "りゅうつう"
                ],
                "english": [
                    "circulation of money or goods"
                ]
            },
            {
                "value": "主流",
                "kana": [
                    "しゅりゅう"
                ],
                "english": [
                    "main current (stream)",
                    "mainline",
                    "mainstream"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "旅",
        "on": [
            "ろ",
            "りょ"
        ],
        "kun": [
            "たび"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%97%85#Kanji",
        "meanings": [
            "trip",
            "travel"
        ],
        "grade": 3,
        "jlpt": 3,
        "strokes": 10,
        "examples": [
            {
                "value": "旅",
                "kana": [
                    "たび"
                ],
                "english": [
                    "travel",
                    "trip",
                    "journey"
                ]
            },
            {
                "value": "旅行",
                "kana": [
                    "りょこう"
                ],
                "english": [
                    "travel",
                    "trip"
                ]
            },
            {
                "value": "旅客",
                "kana": [
                    "りょかく",
                    "りょきゃく"
                ],
                "english": [
                    "passenger (transport)"
                ]
            },
            {
                "value": "旅館",
                "kana": [
                    "りょかん"
                ],
                "english": [
                    "Japanese hotel",
                    "inn",
                    "ryokan"
                ]
            },
            {
                "value": "旅客機",
                "kana": [
                    "りょかくき",
                    "りょかっき"
                ],
                "english": [
                    "passenger plane"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "両",
        "on": [
            "りょう"
        ],
        "kun": [
            "ふたつ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E4%B8%A1#Kanji_1",
        "meanings": [
            "both",
            "old Japanese coin",
            "counter for carriages",
            "two"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "両国",
                "kana": [
                    "りょうこく",
                    "りょうごく"
                ],
                "english": [
                    "both countries"
                ]
            },
            {
                "value": "両党",
                "kana": [
                    "りょうとう"
                ],
                "english": [
                    "both political parties"
                ]
            },
            {
                "value": "両親",
                "kana": [
                    "りょうしん",
                    "ふたおや"
                ],
                "english": [
                    "parents",
                    "both parents"
                ]
            },
            {
                "value": "車両",
                "kana": [
                    "しゃりょう"
                ],
                "english": [
                    "rolling stock",
                    "railroad cars",
                    "vehicles"
                ]
            },
            {
                "value": "両院",
                "kana": [
                    "りょういん"
                ],
                "english": [
                    "both Houses of Parliament"
                ]
            }
        ],
        "tags": [
            "counter"
        ]
    },
    {
        "name": "緑",
        "on": [
            "リョク",
            "ロク"
        ],
        "kun": [
            "みどり"
        ],
        "source": "",
        "meanings": [
            "green"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "礼",
        "on": [
            "レイ",
            "ライ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "salute",
            "bow",
            "ceremony",
            "thanks",
            "remuneration"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "列",
        "on": [
            "レツ",
            "レ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "file",
            "row",
            "rank",
            "tier",
            "column"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "練",
        "on": [
            "レン"
        ],
        "kun": [
            "ねる",
            "ねり"
        ],
        "source": "",
        "meanings": [
            "practice",
            "gloss",
            "train",
            "drill",
            "polish",
            "refine"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "路",
        "on": [
            "ロ",
            "ル"
        ],
        "kun": [
            "じ",
            "みち"
        ],
        "source": "",
        "meanings": [
            "path",
            "route",
            "road",
            "distance"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "和",
        "on": [
            "わ"
        ],
        "kun": [
            "やわらぐ",
            "なごやか"
        ],
        "source": "https://en.wiktionary.org/wiki/%E5%92%8C#Kanji",
        "meanings": [
            "harmony",
            "Japanese style",
            "peace",
            "soften",
            "Japan"
        ],
        "grade": 3,
        "jlpt": 2,
        "strokes": 8,
        "examples": [
            {
                "value": "平和",
                "kana": [
                    "へいわ"
                ],
                "english": [
                    "peace",
                    "harmony"
                ]
            },
            {
                "value": "和平",
                "kana": [
                    "わへい"
                ],
                "english": [
                    "peace"
                ]
            },
            {
                "value": "グアテマラ共和国",
                "kana": [
                    "グアテマラきょうわこく"
                ],
                "english": [
                    "Republic of Guatemala"
                ]
            },
            {
                "value": "緩和",
                "kana": [
                    "かんわ"
                ],
                "english": [
                    "relief",
                    "mitigation",
                    "alleviation",
                    "relaxation"
                ]
            },
            {
                "value": "朝鮮民主主義人民共和国",
                "kana": [
                    "ちょうせんみんしゅしゅぎじんみんきょうわこく"
                ],
                "english": [
                    "Democratic People’s Republic of Korea (NorthKorea)",
                    "DPRK"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "愛",
        "on": [
            "アイ"
        ],
        "kun": [
            "いとしい",
            "かなしい",
            "めでる",
            "おしむ",
            "まな"
        ],
        "source": "",
        "meanings": [
            "love",
            "affection",
            "favourite"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "案",
        "on": [
            "アン"
        ],
        "kun": [
            "つくえ"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "以",
        "on": [
            "イ"
        ],
        "kun": [
            "もって"
        ],
        "source": "",
        "meanings": [
            "by means of",
            "because",
            "in view of",
            "compared with"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "位",
        "on": [
            "イ"
        ],
        "kun": [
            "くらい",
            "ぐらい"
        ],
        "source": "",
        "meanings": [
            "rank",
            "grade",
            "throne",
            "crown",
            "about",
            "some"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "囲",
        "on": [
            "イ"
        ],
        "kun": [
            "かこむ",
            "かこう",
            "かこい"
        ],
        "source": "",
        "meanings": [
            "surround",
            "besiege",
            "store",
            "paling",
            "enclosure",
            "encircle",
            "preserve",
            "keep"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "胃",
        "on": [
            "イ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "stomach",
            "paunch",
            "crop",
            "craw"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "衣",
        "on": [
            "イ",
            "エ"
        ],
        "kun": [
            "ころも",
            "きぬ",
            "ぎ"
        ],
        "source": "",
        "meanings": [
            "garment",
            "clothes",
            "dressing"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "井",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "い"
        ],
        "source": "",
        "meanings": [
            "well",
            "well crib",
            "town",
            "community"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "茨",
        "on": [
            "シ",
            "ジ"
        ],
        "kun": [
            "いばら",
            "かや",
            "くさぶき"
        ],
        "source": "",
        "meanings": [
            "briar",
            "thorn"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "印",
        "on": [
            "イン"
        ],
        "kun": [
            "しるし",
            "じるし",
            "しるす"
        ],
        "source": "",
        "meanings": [
            "stamp",
            "seal",
            "mark",
            "imprint",
            "symbol",
            "emblem",
            "trademark",
            "evidence",
            "souvenir",
            "India"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "栄",
        "on": [
            "エイ",
            "ヨウ"
        ],
        "kun": [
            "さかえる",
            "はえ",
            "ばえ",
            "はえる",
            "え"
        ],
        "source": "",
        "meanings": [
            "flourish",
            "prosperity",
            "honor",
            "glory",
            "splendor"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "英",
        "on": [
            "エイ"
        ],
        "kun": [
            "はなぶさ"
        ],
        "source": "",
        "meanings": [
            "England",
            "English",
            "hero",
            "outstanding",
            "calyx"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "塩",
        "on": [
            "エン"
        ],
        "kun": [
            "しお"
        ],
        "source": "",
        "meanings": [
            "salt"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "岡",
        "on": [
            "コウ"
        ],
        "kun": [
            "おか"
        ],
        "source": "",
        "meanings": [
            "mount",
            "hill",
            "knoll"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "沖",
        "on": [
            "チュウ"
        ],
        "kun": [
            "おき",
            "おきつ",
            "ちゅうする",
            "わく"
        ],
        "source": "",
        "meanings": [
            "open sea",
            "offing",
            "rise high into sky"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "億",
        "on": [
            "オク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "hundred million",
            "10**8"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "加",
        "on": [
            "カ"
        ],
        "kun": [
            "くわえる",
            "くわわる"
        ],
        "source": "",
        "meanings": [
            "add",
            "addition",
            "increase",
            "join",
            "include",
            "Canada"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "果",
        "on": [
            "カ"
        ],
        "kun": [
            "はたす",
            "はたす",
            "はたす",
            "はてる",
            "はてる",
            "はて"
        ],
        "source": "",
        "meanings": [
            "fruit",
            "reward",
            "carry out",
            "achieve",
            "complete",
            "end",
            "finish",
            "succeed"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "課",
        "on": [
            "カ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "chapter",
            "lesson",
            "section",
            "department",
            "division",
            "counter for chapters (of a book)"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "貨",
        "on": [
            "カ"
        ],
        "kun": [
            "たから"
        ],
        "source": "",
        "meanings": [
            "freight",
            "goods",
            "property"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "芽",
        "on": [
            "ガ"
        ],
        "kun": [
            "め"
        ],
        "source": "",
        "meanings": [
            "bud",
            "sprout",
            "spear",
            "germ"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "改",
        "on": [
            "カイ"
        ],
        "kun": [
            "あらためる",
            "あらたまる"
        ],
        "source": "",
        "meanings": [
            "reformation",
            "change",
            "modify",
            "mend",
            "renew",
            "examine",
            "inspect",
            "search"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "械",
        "on": [
            "カイ"
        ],
        "kun": [
            "かせ"
        ],
        "source": "",
        "meanings": [
            "contraption",
            "fetter",
            "machine",
            "instrument"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "害",
        "on": [
            "ガイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "harm",
            "injury"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "街",
        "on": [
            "ガイ",
            "カイ"
        ],
        "kun": [
            "まち"
        ],
        "source": "",
        "meanings": [
            "boulevard",
            "street",
            "town"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "各",
        "on": [
            "カク"
        ],
        "kun": [
            "おのおの"
        ],
        "source": "",
        "meanings": [
            "each",
            "every",
            "either"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "覚",
        "on": [
            "カク"
        ],
        "kun": [
            "おぼえる",
            "さます",
            "さめる",
            "さとる"
        ],
        "source": "",
        "meanings": [
            "memorize",
            "learn",
            "remember",
            "awake",
            "sober up"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "潟",
        "on": [
            "セキ"
        ],
        "kun": [
            "かた",
            "がた"
        ],
        "source": "",
        "meanings": [
            "lagoon"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "完",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "perfect",
            "completion",
            "end"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "官",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "bureaucrat",
            "the government",
            "organ"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "管",
        "on": [
            "カン"
        ],
        "kun": [
            "くだ"
        ],
        "source": "",
        "meanings": [
            "pipe",
            "tube",
            "wind instrument",
            "drunken talk",
            "control",
            "jurisdiction"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "観",
        "on": [
            "カン"
        ],
        "kun": [
            "みる",
            "しめす"
        ],
        "source": "",
        "meanings": [
            "outlook",
            "look",
            "appearance",
            "condition",
            "view"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "関",
        "on": [
            "カン"
        ],
        "kun": [
            "せき",
            "ぜき",
            "かかわる",
            "からくり",
            "かんぬき"
        ],
        "source": "",
        "meanings": [
            "connection",
            "barrier",
            "gateway",
            "involve",
            "concerning"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "願",
        "on": [
            "ガン"
        ],
        "kun": [
            "ねがう",
            "ねがい"
        ],
        "source": "",
        "meanings": [
            "petition",
            "request",
            "vow",
            "wish",
            "hope"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "喜",
        "on": [
            "キ"
        ],
        "kun": [
            "よろこぶ",
            "よろこばす"
        ],
        "source": "",
        "meanings": [
            "rejoice",
            "take pleasure in"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "器",
        "on": [
            "キ"
        ],
        "kun": [
            "うつわ"
        ],
        "source": "",
        "meanings": [
            "utensil",
            "vessel",
            "receptacle",
            "implement",
            "instrument",
            "ability",
            "container",
            "tool",
            "set"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "岐",
        "on": [
            "キ",
            "ギ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "branch off",
            "fork in road",
            "scene",
            "arena",
            "theater"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "希",
        "on": [
            "キ",
            "ケ"
        ],
        "kun": [
            "まれ",
            "こいねがう"
        ],
        "source": "",
        "meanings": [
            "hope",
            "beg",
            "request",
            "pray",
            "beseech",
            "Greece",
            "dilute (acid)",
            "rare",
            "few",
            "phenomenal"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "旗",
        "on": [
            "キ"
        ],
        "kun": [
            "はた"
        ],
        "source": "",
        "meanings": [
            "national flag",
            "banner",
            "standard"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "機",
        "on": [
            "キ"
        ],
        "kun": [
            "はた"
        ],
        "source": "",
        "meanings": [
            "loom",
            "mechanism",
            "machine",
            "airplane",
            "opportunity",
            "potency",
            "efficacy",
            "occasion"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "季",
        "on": [
            "キ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "seasons"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "紀",
        "on": [
            "キ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "chronicle",
            "account",
            "narrative",
            "history",
            "annals",
            "geologic period"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "議",
        "on": [
            "ギ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "deliberation",
            "consultation",
            "debate",
            "consideration"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 20,
        "examples": [],
        "tags": []
    },
    {
        "name": "救",
        "on": [
            "キュウ"
        ],
        "kun": [
            "すくう"
        ],
        "source": "",
        "meanings": [
            "salvation",
            "save",
            "help",
            "rescue",
            "reclaim"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "求",
        "on": [
            "キュウ",
            "グ"
        ],
        "kun": [
            "もとめる"
        ],
        "source": "",
        "meanings": [
            "request",
            "want",
            "wish for",
            "require",
            "demand"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "泣",
        "on": [
            "キュウ"
        ],
        "kun": [
            "なく"
        ],
        "source": "",
        "meanings": [
            "cry",
            "weep",
            "moan"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "給",
        "on": [
            "キュウ"
        ],
        "kun": [
            "たまう",
            "たもう",
            "たまえ"
        ],
        "source": "",
        "meanings": [
            "salary",
            "wage",
            "gift",
            "allow",
            "grant",
            "bestow on"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "挙",
        "on": [
            "キョ"
        ],
        "kun": [
            "あげる",
            "あがる",
            "こぞる"
        ],
        "source": "",
        "meanings": [
            "raise",
            "plan",
            "project",
            "behavior",
            "actions"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "漁",
        "on": [
            "ギョ",
            "リョウ"
        ],
        "kun": [
            "あさる"
        ],
        "source": "",
        "meanings": [
            "fishing",
            "fishery"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "競",
        "on": [
            "キョウ",
            "ケイ"
        ],
        "kun": [
            "きそう",
            "せる",
            "くらべる"
        ],
        "source": "",
        "meanings": [
            "emulate",
            "compete with",
            "bid",
            "sell at auction",
            "bout",
            "contest",
            "race"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 20,
        "examples": [],
        "tags": []
    },
    {
        "name": "共",
        "on": [
            "キョウ"
        ],
        "kun": [
            "とも",
            "ともに",
            "ども"
        ],
        "source": "",
        "meanings": [
            "together",
            "both",
            "neither",
            "all",
            "and",
            "alike",
            "with"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "協",
        "on": [
            "キョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "co-",
            "cooperation"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "鏡",
        "on": [
            "キョウ",
            "ケイ"
        ],
        "kun": [
            "かがみ"
        ],
        "source": "",
        "meanings": [
            "mirror",
            "speculum",
            "barrel-head",
            "round rice-cake offering"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "極",
        "on": [
            "キョク",
            "ゴク"
        ],
        "kun": [
            "きわめる",
            "きわまる",
            "きわまり",
            "きわみ",
            "きめる",
            "ぎめ",
            "きまる"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "熊",
        "on": [
            "ユウ"
        ],
        "kun": [
            "くま"
        ],
        "source": "",
        "meanings": [
            "bear"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "訓",
        "on": [
            "クン",
            "キン"
        ],
        "kun": [
            "おしえる",
            "よむ",
            "くんずる"
        ],
        "source": "",
        "meanings": [
            "instruction",
            "Japanese character reading",
            "explanation",
            "read"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "軍",
        "on": [
            "グン"
        ],
        "kun": [
            "いくさ"
        ],
        "source": "",
        "meanings": [
            "army",
            "force",
            "troops",
            "war",
            "battle"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "郡",
        "on": [
            "グン"
        ],
        "kun": [
            "こおり"
        ],
        "source": "",
        "meanings": [
            "county",
            "district"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "型",
        "on": [
            "ケイ"
        ],
        "kun": [
            "かた",
            "がた"
        ],
        "source": "",
        "meanings": [
            "mould",
            "type",
            "model"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "径",
        "on": [
            "ケイ"
        ],
        "kun": [
            "みち",
            "こみち",
            "さしわたし",
            "ただちに"
        ],
        "source": "",
        "meanings": [
            "diameter",
            "path",
            "method"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "景",
        "on": [
            "ケイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "scenery",
            "view"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "芸",
        "on": [
            "ゲイ",
            "ウン"
        ],
        "kun": [
            "うえる",
            "のり",
            "わざ"
        ],
        "source": "",
        "meanings": [
            "technique",
            "art",
            "craft",
            "performance",
            "acting",
            "trick",
            "stunt"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "欠",
        "on": [
            "ケツ",
            "ケン"
        ],
        "kun": [
            "かける",
            "かく"
        ],
        "source": "",
        "meanings": [
            "lack",
            "gap",
            "fail",
            "yawning radical (no. 76)"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "結",
        "on": [
            "ケツ",
            "ケチ"
        ],
        "kun": [
            "むすぶ",
            "ゆう",
            "ゆわえる"
        ],
        "source": "",
        "meanings": [
            "tie",
            "bind",
            "contract",
            "join",
            "organize",
            "do up hair",
            "fasten"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "健",
        "on": [
            "ケン"
        ],
        "kun": [
            "すこやか"
        ],
        "source": "",
        "meanings": [
            "healthy",
            "health",
            "strength",
            "persistence"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "建",
        "on": [
            "ケン",
            "コン"
        ],
        "kun": [
            "たてる",
            "たて",
            "だて",
            "たつ"
        ],
        "source": "",
        "meanings": [
            "build"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "験",
        "on": [
            "ケン",
            "ゲン"
        ],
        "kun": [
            "あかし",
            "しるし",
            "ためす",
            "ためし"
        ],
        "source": "",
        "meanings": [
            "verification",
            "effect",
            "testing"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "固",
        "on": [
            "コ"
        ],
        "kun": [
            "かためる",
            "かたまる",
            "かたまり",
            "かたい"
        ],
        "source": "",
        "meanings": [
            "harden",
            "set",
            "clot",
            "curdle"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "候",
        "on": [
            "コウ"
        ],
        "kun": [
            "そうろう"
        ],
        "source": "",
        "meanings": [
            "climate",
            "season",
            "weather",
            "wait for",
            "expect"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "功",
        "on": [
            "コウ",
            "ク"
        ],
        "kun": [
            "いさお"
        ],
        "source": "",
        "meanings": [
            "achievement",
            "merits",
            "success",
            "honor",
            "credit"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "好",
        "on": [
            "コウ"
        ],
        "kun": [
            "このむ",
            "すく",
            "よい",
            "いい"
        ],
        "source": "",
        "meanings": [
            "fond",
            "pleasing",
            "like something"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "康",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "ease",
            "peace"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "航",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "navigate",
            "sail",
            "cruise",
            "fly"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "香",
        "on": [
            "コウ",
            "キョウ"
        ],
        "kun": [
            "か",
            "かおり",
            "かおる"
        ],
        "source": "",
        "meanings": [
            "incense",
            "smell",
            "perfume"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "告",
        "on": [
            "コク"
        ],
        "kun": [
            "つげる"
        ],
        "source": "",
        "meanings": [
            "revelation",
            "tell",
            "inform",
            "announce"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "佐",
        "on": [
            "サ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "assistant",
            "help"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "差",
        "on": [
            "サ"
        ],
        "kun": [
            "さす",
            "さし"
        ],
        "source": "",
        "meanings": [
            "distinction",
            "difference",
            "variation",
            "discrepancy",
            "margin",
            "balance"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "最",
        "on": [
            "サイ",
            "シュ"
        ],
        "kun": [
            "もっとも",
            "つま"
        ],
        "source": "",
        "meanings": [
            "utmost",
            "most",
            "extreme"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "菜",
        "on": [
            "サイ"
        ],
        "kun": [
            "な"
        ],
        "source": "",
        "meanings": [
            "vegetable",
            "side dish",
            "greens"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "材",
        "on": [
            "ザイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "lumber",
            "log",
            "timber",
            "wood",
            "materials",
            "ingredients",
            "talent"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "阪",
        "on": [
            "ハン"
        ],
        "kun": [
            "さか"
        ],
        "source": "",
        "meanings": [
            "heights",
            "slope"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "崎",
        "on": [
            "キ"
        ],
        "kun": [
            "さき",
            "さい",
            "みさき"
        ],
        "source": "",
        "meanings": [
            "promontory",
            "cape",
            "spit"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "埼",
        "on": [
            "キ"
        ],
        "kun": [
            "さき",
            "さい",
            "みさき"
        ],
        "source": "",
        "meanings": [
            "cape",
            "spit",
            "promontory"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "昨",
        "on": [
            "サク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "yesterday",
            "previous"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "刷",
        "on": [
            "サツ"
        ],
        "kun": [
            "する",
            "ずり",
            "ずり",
            "はく"
        ],
        "source": "",
        "meanings": [
            "printing",
            "print",
            "brush"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "察",
        "on": [
            "サツ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "guess",
            "presume",
            "surmise",
            "judge",
            "understand"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "札",
        "on": [
            "サツ"
        ],
        "kun": [
            "ふだ"
        ],
        "source": "",
        "meanings": [
            "tag",
            "paper money",
            "counter for bonds",
            "placard",
            "bid"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "殺",
        "on": [
            "サツ",
            "サイ",
            "セツ"
        ],
        "kun": [
            "ころす",
            "ごろし",
            "そぐ"
        ],
        "source": "",
        "meanings": [
            "kill",
            "murder",
            "butcher",
            "slice off",
            "split",
            "diminish",
            "reduce",
            "spoil"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "参",
        "on": [
            "サン",
            "シン"
        ],
        "kun": [
            "まいる",
            "まい",
            "まじわる",
            "みつ"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "散",
        "on": [
            "サン"
        ],
        "kun": [
            "ちる",
            "ちらす",
            "ちらす",
            "ちらかす",
            "ちらかる",
            "ちらばる",
            "ばら",
            "ばらける"
        ],
        "source": "",
        "meanings": [
            "scatter",
            "disperse",
            "spend",
            "squander"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "産",
        "on": [
            "サン"
        ],
        "kun": [
            "うむ",
            "うまれる",
            "うぶ",
            "むす"
        ],
        "source": "",
        "meanings": [
            "products",
            "bear",
            "give birth",
            "yield",
            "childbirth",
            "native",
            "property"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "残",
        "on": [
            "ザン",
            "サン"
        ],
        "kun": [
            "のこる",
            "のこす",
            "そこなう",
            "のこり"
        ],
        "source": "",
        "meanings": [
            "remainder",
            "leftover",
            "balance"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "司",
        "on": [
            "シ"
        ],
        "kun": [
            "つかさどる"
        ],
        "source": "",
        "meanings": [
            "director",
            "official",
            "govt office",
            "rule",
            "administer"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "史",
        "on": [
            "シ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "history",
            "chronicle"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "士",
        "on": [
            "シ"
        ],
        "kun": [
            "さむらい"
        ],
        "source": "",
        "meanings": [
            "gentleman",
            "scholar",
            "samurai",
            "samurai radical (no. 33)"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "氏",
        "on": [
            "シ"
        ],
        "kun": [
            "うじ",
            "うじ"
        ],
        "source": "",
        "meanings": [
            "family name",
            "surname",
            "clan"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "試",
        "on": [
            "シ"
        ],
        "kun": [
            "こころみる",
            "ためす"
        ],
        "source": "",
        "meanings": [
            "test",
            "try",
            "attempt",
            "experiment",
            "ordeal"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "児",
        "on": [
            "ジ",
            "ニ",
            "ゲイ"
        ],
        "kun": [
            "こ",
            "こ",
            "っこ"
        ],
        "source": "",
        "meanings": [
            "newborn babe",
            "child",
            "young of animals"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "滋",
        "on": [
            "ジ",
            "シ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "nourishing",
            "more & more",
            "be luxuriant",
            "planting",
            "turbidity"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "治",
        "on": [
            "ジ",
            "チ"
        ],
        "kun": [
            "おさめる",
            "おさまる",
            "なおる",
            "なおす"
        ],
        "source": "",
        "meanings": [
            "reign",
            "be at peace",
            "calm down",
            "subdue",
            "quell",
            "govt",
            "cure",
            "heal",
            "rule",
            "conserve"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "辞",
        "on": [
            "ジ"
        ],
        "kun": [
            "やめる",
            "いなむ"
        ],
        "source": "",
        "meanings": [
            "resign",
            "word",
            "term",
            "expression"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "鹿",
        "on": [
            "ロク"
        ],
        "kun": [
            "しか",
            "か"
        ],
        "source": "",
        "meanings": [
            "deer"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "失",
        "on": [
            "シツ"
        ],
        "kun": [
            "うしなう",
            "うせる"
        ],
        "source": "",
        "meanings": [
            "lose",
            "error",
            "fault",
            "disadvantage",
            "loss"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "借",
        "on": [
            "シャク"
        ],
        "kun": [
            "かりる"
        ],
        "source": "",
        "meanings": [
            "borrow",
            "rent"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "種",
        "on": [
            "シュ"
        ],
        "kun": [
            "たね",
            "ぐさ"
        ],
        "source": "",
        "meanings": [
            "species",
            "kind",
            "class",
            "variety",
            "seed"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "周",
        "on": [
            "シュウ"
        ],
        "kun": [
            "まわり"
        ],
        "source": "",
        "meanings": [
            "circumference",
            "circuit",
            "lap"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "祝",
        "on": [
            "シュク",
            "シュウ"
        ],
        "kun": [
            "いわう"
        ],
        "source": "",
        "meanings": [
            "celebrate",
            "congratulate"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "順",
        "on": [
            "ジュン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "obey",
            "order",
            "turn",
            "right",
            "docility",
            "occasion"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "初",
        "on": [
            "ショ"
        ],
        "kun": [
            "はじめ",
            "はじめて",
            "はつ",
            "はつ",
            "うい",
            "そめる",
            "ぞめ"
        ],
        "source": "",
        "meanings": [
            "first time",
            "beginning"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "唱",
        "on": [
            "ショウ"
        ],
        "kun": [
            "となえる"
        ],
        "source": "",
        "meanings": [
            "chant",
            "recite",
            "call upon",
            "yell"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "松",
        "on": [
            "ショウ"
        ],
        "kun": [
            "まつ"
        ],
        "source": "",
        "meanings": [
            "pine tree"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "焼",
        "on": [
            "ショウ"
        ],
        "kun": [
            "やく",
            "やき",
            "やき",
            "やき",
            "やける"
        ],
        "source": "",
        "meanings": [
            "bake",
            "burning"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "照",
        "on": [
            "ショウ"
        ],
        "kun": [
            "てる",
            "てらす",
            "てれる"
        ],
        "source": "",
        "meanings": [
            "illuminate",
            "shine",
            "compare",
            "bashful"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "省",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "かえりみる",
            "はぶく"
        ],
        "source": "",
        "meanings": [
            "focus",
            "government ministry",
            "conserve"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "笑",
        "on": [
            "ショウ"
        ],
        "kun": [
            "わらう",
            "えむ"
        ],
        "source": "",
        "meanings": [
            "laugh"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "象",
        "on": [
            "ショウ",
            "ゾウ"
        ],
        "kun": [
            "かたどる"
        ],
        "source": "",
        "meanings": [
            "elephant",
            "pattern after",
            "imitate",
            "image",
            "shape",
            "sign (of the times)"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "賞",
        "on": [
            "ショウ"
        ],
        "kun": [
            "ほめる"
        ],
        "source": "",
        "meanings": [
            "prize",
            "reward",
            "praise"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "信",
        "on": [
            "シン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "faith",
            "truth",
            "fidelity",
            "trust"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "臣",
        "on": [
            "シン",
            "ジン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "retainer",
            "subject"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "成",
        "on": [
            "セイ",
            "ジョウ"
        ],
        "kun": [
            "なる",
            "なす",
            "なす"
        ],
        "source": "",
        "meanings": [
            "turn into",
            "become",
            "get",
            "grow",
            "elapse",
            "reach"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "清",
        "on": [
            "セイ",
            "ショウ",
            "シン"
        ],
        "kun": [
            "きよい",
            "きよまる",
            "きよめる"
        ],
        "source": "",
        "meanings": [
            "pure",
            "purify",
            "cleanse",
            "exorcise",
            "Manchu dynasty"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "静",
        "on": [
            "セイ",
            "ジョウ"
        ],
        "kun": [
            "しず",
            "しずか",
            "しずまる",
            "しずめる"
        ],
        "source": "",
        "meanings": [
            "quiet"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "席",
        "on": [
            "セキ"
        ],
        "kun": [
            "むしろ"
        ],
        "source": "",
        "meanings": [
            "seat",
            "mat",
            "occasion",
            "place"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "積",
        "on": [
            "セキ"
        ],
        "kun": [
            "つむ",
            "づみ",
            "つもる",
            "つもり"
        ],
        "source": "",
        "meanings": [
            "volume",
            "product (x*y)",
            "acreage",
            "contents",
            "pile up",
            "stack",
            "load",
            "amass"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "折",
        "on": [
            "セツ",
            "シャク"
        ],
        "kun": [
            "おる",
            "おり",
            "おり",
            "おり",
            "おれる"
        ],
        "source": "",
        "meanings": [
            "fold",
            "break",
            "fracture",
            "bend",
            "yield",
            "submit"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "節",
        "on": [
            "セツ",
            "セチ"
        ],
        "kun": [
            "ふし",
            "ぶし",
            "のっと"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "説",
        "on": [
            "セツ",
            "ゼイ"
        ],
        "kun": [
            "とく"
        ],
        "source": "",
        "meanings": [
            "opinion",
            "theory",
            "explanation",
            "rumor"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "戦",
        "on": [
            "セン"
        ],
        "kun": [
            "いくさ",
            "たたかう",
            "おののく",
            "そよぐ",
            "わななく"
        ],
        "source": "",
        "meanings": [
            "war",
            "battle",
            "match"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "浅",
        "on": [
            "セン"
        ],
        "kun": [
            "あさい"
        ],
        "source": "",
        "meanings": [
            "shallow",
            "superficial",
            "frivolous",
            "wretched",
            "shameful"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "選",
        "on": [
            "セン"
        ],
        "kun": [
            "えらぶ",
            "える",
            "よる"
        ],
        "source": "",
        "meanings": [
            "elect",
            "select",
            "choose",
            "prefer"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "然",
        "on": [
            "ゼン",
            "ネン"
        ],
        "kun": [
            "しか",
            "しかり",
            "しかし",
            "さ"
        ],
        "source": "",
        "meanings": [
            "sort of thing",
            "so",
            "if so",
            "in that case",
            "well"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "倉",
        "on": [
            "ソウ"
        ],
        "kun": [
            "くら"
        ],
        "source": "",
        "meanings": [
            "godown",
            "warehouse",
            "storehouse",
            "cellar",
            "treasury"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "巣",
        "on": [
            "ソウ"
        ],
        "kun": [
            "す",
            "すくう"
        ],
        "source": "",
        "meanings": [
            "nest",
            "rookery",
            "hive",
            "cobweb",
            "den"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "争",
        "on": [
            "ソウ"
        ],
        "kun": [
            "あらそう",
            "いかでか"
        ],
        "source": "",
        "meanings": [
            "contend",
            "dispute",
            "argue"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "側",
        "on": [
            "ソク"
        ],
        "kun": [
            "かわ",
            "がわ",
            "そば"
        ],
        "source": "",
        "meanings": [
            "side",
            "lean",
            "oppose",
            "regret"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "束",
        "on": [
            "ソク"
        ],
        "kun": [
            "たば",
            "たばねる",
            "つか",
            "つかねる"
        ],
        "source": "",
        "meanings": [
            "bundle",
            "sheaf",
            "ream",
            "tie in bundles",
            "govern",
            "manage",
            "control"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "続",
        "on": [
            "ゾク",
            "ショク",
            "コウ",
            "キョウ"
        ],
        "kun": [
            "つづく",
            "つづける",
            "つぐない"
        ],
        "source": "",
        "meanings": [
            "continue",
            "series",
            "sequel"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "卒",
        "on": [
            "ソツ",
            "シュツ"
        ],
        "kun": [
            "そっする",
            "おえる",
            "おわる",
            "ついに",
            "にわか"
        ],
        "source": "",
        "meanings": [
            "graduate",
            "soldier",
            "private",
            "die"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "孫",
        "on": [
            "ソン"
        ],
        "kun": [
            "まご"
        ],
        "source": "",
        "meanings": [
            "grandchild",
            "descendants"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "帯",
        "on": [
            "タイ"
        ],
        "kun": [
            "おびる",
            "おび"
        ],
        "source": "",
        "meanings": [
            "sash",
            "belt",
            "obi",
            "zone",
            "region"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "隊",
        "on": [
            "タイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "regiment",
            "party",
            "company",
            "squad"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "達",
        "on": [
            "タツ",
            "ダ"
        ],
        "kun": [
            "たち"
        ],
        "source": "",
        "meanings": [
            "accomplished",
            "reach",
            "arrive",
            "attain"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "単",
        "on": [
            "タン"
        ],
        "kun": [
            "ひとえ"
        ],
        "source": "",
        "meanings": [
            "simple",
            "one",
            "single",
            "merely"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "置",
        "on": [
            "チ"
        ],
        "kun": [
            "おく",
            "おき"
        ],
        "source": "",
        "meanings": [
            "placement",
            "put",
            "set",
            "deposit",
            "leave behind",
            "keep",
            "employ",
            "pawn"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "仲",
        "on": [
            "チュウ"
        ],
        "kun": [
            "なか"
        ],
        "source": "",
        "meanings": [
            "go-between",
            "relationship"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "貯",
        "on": [
            "チョ"
        ],
        "kun": [
            "ためる",
            "たくわえる"
        ],
        "source": "",
        "meanings": [
            "savings",
            "store",
            "lay in",
            "keep",
            "wear mustache"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "兆",
        "on": [
            "チョウ"
        ],
        "kun": [
            "きざす",
            "きざし"
        ],
        "source": "",
        "meanings": [
            "portent",
            "10**12",
            "trillion",
            "sign",
            "omen",
            "symptoms"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "腸",
        "on": [
            "チョウ"
        ],
        "kun": [
            "はらわた",
            "わた"
        ],
        "source": "",
        "meanings": [
            "intestines",
            "guts",
            "bowels",
            "viscera"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "低",
        "on": [
            "テイ"
        ],
        "kun": [
            "ひくい",
            "ひくめる",
            "ひくまる"
        ],
        "source": "",
        "meanings": [
            "lower",
            "short",
            "humble"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "停",
        "on": [
            "テイ"
        ],
        "kun": [
            "とめる",
            "とまる"
        ],
        "source": "",
        "meanings": [
            "halt",
            "stopping"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "底",
        "on": [
            "テイ"
        ],
        "kun": [
            "そこ"
        ],
        "source": "",
        "meanings": [
            "bottom",
            "sole",
            "depth",
            "bottom price",
            "base",
            "kind",
            "sort"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "的",
        "on": [
            "テキ"
        ],
        "kun": [
            "まと"
        ],
        "source": "",
        "meanings": [
            "bull's eye",
            "mark",
            "target",
            "object",
            "adjective ending"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "典",
        "on": [
            "テン",
            "デン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "code",
            "ceremony",
            "law",
            "rule"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "伝",
        "on": [
            "デン",
            "テン"
        ],
        "kun": [
            "つたわる",
            "つたえる",
            "つたう",
            "つだう",
            "づたい",
            "つて"
        ],
        "source": "",
        "meanings": [
            "transmit",
            "go along",
            "walk along",
            "follow",
            "report",
            "communicate",
            "legend",
            "tradition"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "徒",
        "on": [
            "ト"
        ],
        "kun": [
            "いたずら",
            "あだ"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "努",
        "on": [
            "ド"
        ],
        "kun": [
            "つとめる"
        ],
        "source": "",
        "meanings": [
            "toil",
            "diligent",
            "as much as possible"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "灯",
        "on": [
            "トウ"
        ],
        "kun": [
            "ひ",
            "ほ",
            "ともしび",
            "ともす",
            "あかり"
        ],
        "source": "",
        "meanings": [
            "lamp",
            "a light",
            "light",
            "counter for lights"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "働",
        "on": [
            "ドウ"
        ],
        "kun": [
            "はたらく"
        ],
        "source": "",
        "meanings": [
            "work",
            "(kokuji)"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "堂",
        "on": [
            "ドウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "public chamber",
            "hall"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "得",
        "on": [
            "トク"
        ],
        "kun": [
            "える",
            "うる"
        ],
        "source": "",
        "meanings": [
            "gain",
            "get",
            "find",
            "earn",
            "acquire",
            "can",
            "may",
            "able to",
            "profit",
            "advantage",
            "benefit"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "特",
        "on": [
            "トク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "special"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "毒",
        "on": [
            "ドク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "poison",
            "virus",
            "venom",
            "germ",
            "harm",
            "injury",
            "spite"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "栃",
        "on": [],
        "kun": [
            "とち"
        ],
        "source": "",
        "meanings": [
            "horse chestnut",
            "(kokuji)"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "奈",
        "on": [
            "ナ",
            "ナイ",
            "ダイ"
        ],
        "kun": [
            "いかん",
            "からなし"
        ],
        "source": "",
        "meanings": [
            "Nara",
            "what?"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "縄",
        "on": [
            "ジョウ"
        ],
        "kun": [
            "なわ",
            "ただす"
        ],
        "source": "",
        "meanings": [
            "straw rope",
            "cord"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "熱",
        "on": [
            "ネツ"
        ],
        "kun": [
            "あつい"
        ],
        "source": "",
        "meanings": [
            "heat",
            "temperature",
            "fever",
            "mania",
            "passion"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "念",
        "on": [
            "ネン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "wish",
            "sense",
            "idea",
            "thought",
            "feeling",
            "desire",
            "attention"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "敗",
        "on": [
            "ハイ"
        ],
        "kun": [
            "やぶれる"
        ],
        "source": "",
        "meanings": [
            "failure",
            "defeat",
            "reversal"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "梅",
        "on": [
            "バイ"
        ],
        "kun": [
            "うめ"
        ],
        "source": "",
        "meanings": [
            "plum"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "博",
        "on": [
            "ハク",
            "バク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "Dr.",
            "command",
            "esteem",
            "win acclaim",
            "Ph.D.",
            "exposition",
            "fair"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "飯",
        "on": [
            "ハン"
        ],
        "kun": [
            "めし"
        ],
        "source": "",
        "meanings": [
            "meal",
            "boiled rice"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "費",
        "on": [
            "ヒ"
        ],
        "kun": [
            "ついやす",
            "ついえる"
        ],
        "source": "",
        "meanings": [
            "expense",
            "cost",
            "spend",
            "consume",
            "waste"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "飛",
        "on": [
            "ヒ"
        ],
        "kun": [
            "とぶ",
            "とばす",
            "とばす"
        ],
        "source": "",
        "meanings": [
            "fly",
            "skip (pages)",
            "scatter"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "必",
        "on": [
            "ヒツ"
        ],
        "kun": [
            "かならず"
        ],
        "source": "",
        "meanings": [
            "invariably",
            "certain",
            "inevitable"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "媛",
        "on": [
            "エン"
        ],
        "kun": [
            "ひめ"
        ],
        "source": "",
        "meanings": [
            "beautiful woman",
            "princess"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "標",
        "on": [
            "ヒョウ"
        ],
        "kun": [
            "しるべ",
            "しるし"
        ],
        "source": "",
        "meanings": [
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
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "票",
        "on": [
            "ヒョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "ballot",
            "label",
            "ticket",
            "sign"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "不",
        "on": [
            "フ",
            "ブ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "negative",
            "non-",
            "bad",
            "ugly",
            "clumsy"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "付",
        "on": [
            "フ"
        ],
        "kun": [
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
        "source": "",
        "meanings": [
            "adhere",
            "attach",
            "refer to",
            "append"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "夫",
        "on": [
            "フ",
            "フウ",
            "ブ"
        ],
        "kun": [
            "おっと",
            "それ"
        ],
        "source": "",
        "meanings": [
            "husband",
            "man"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "府",
        "on": [
            "フ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "borough",
            "urban prefecture",
            "govt office",
            "representative body",
            "storehouse"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "阜",
        "on": [
            "フ",
            "フウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "hill",
            "mound",
            "left village radical (no. 170)"
        ],
        "grade": 4,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "副",
        "on": [
            "フク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "vice-",
            "assistant",
            "aide",
            "duplicate",
            "copy"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "粉",
        "on": [
            "フン"
        ],
        "kun": [
            "デシメートル",
            "こ",
            "こな"
        ],
        "source": "",
        "meanings": [
            "flour",
            "powder",
            "dust"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "兵",
        "on": [
            "ヘイ",
            "ヒョウ"
        ],
        "kun": [
            "つわもの"
        ],
        "source": "",
        "meanings": [
            "soldier",
            "private",
            "troops",
            "army",
            "warfare",
            "strategy",
            "tactics"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "別",
        "on": [
            "ベツ"
        ],
        "kun": [
            "わかれる",
            "わける"
        ],
        "source": "",
        "meanings": [
            "separate",
            "branch off",
            "diverge",
            "fork",
            "another",
            "extra",
            "specially"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "変",
        "on": [
            "ヘン"
        ],
        "kun": [
            "かわる",
            "かわり",
            "かえる"
        ],
        "source": "",
        "meanings": [
            "unusual",
            "change",
            "strange"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "辺",
        "on": [
            "ヘン"
        ],
        "kun": [
            "あたり",
            "ほとり",
            "べ"
        ],
        "source": "",
        "meanings": [
            "environs",
            "boundary",
            "border",
            "vicinity"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "便",
        "on": [
            "ベン",
            "ビン"
        ],
        "kun": [
            "たより"
        ],
        "source": "",
        "meanings": [
            "convenience",
            "facility",
            "excrement",
            "feces",
            "letter",
            "chance"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "包",
        "on": [
            "ホウ"
        ],
        "kun": [
            "つつむ",
            "くるむ"
        ],
        "source": "",
        "meanings": [
            "wrap",
            "pack up",
            "cover",
            "conceal"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "法",
        "on": [
            "ホウ",
            "ハッ",
            "ホッ",
            "フラン"
        ],
        "kun": [
            "のり"
        ],
        "source": "",
        "meanings": [
            "method",
            "law",
            "rule",
            "principle",
            "model",
            "system"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "望",
        "on": [
            "ボウ",
            "モウ"
        ],
        "kun": [
            "のぞむ",
            "もち"
        ],
        "source": "",
        "meanings": [
            "ambition",
            "full moon",
            "hope",
            "desire",
            "aspire to",
            "expect"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "牧",
        "on": [
            "ボク"
        ],
        "kun": [
            "まき"
        ],
        "source": "",
        "meanings": [
            "breed",
            "care for",
            "shepherd",
            "feed",
            "pasture"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "末",
        "on": [
            "マツ",
            "バツ"
        ],
        "kun": [
            "すえ",
            "うら",
            "うれ"
        ],
        "source": "",
        "meanings": [
            "end",
            "close",
            "tip",
            "powder",
            "posterity"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "満",
        "on": [
            "マン",
            "バン"
        ],
        "kun": [
            "みちる",
            "みつ",
            "みたす"
        ],
        "source": "",
        "meanings": [
            "full",
            "fullness",
            "enough",
            "satisfy"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "未",
        "on": [
            "ミ",
            "ビ"
        ],
        "kun": [
            "いまだ",
            "まだ",
            "ひつじ"
        ],
        "source": "",
        "meanings": [
            "un-",
            "not yet",
            "hitherto",
            "still",
            "even now",
            "sign of the ram",
            "1-3PM",
            "eighth sign of Chinese zodiac"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "脈",
        "on": [
            "ミャク"
        ],
        "kun": [
            "すじ"
        ],
        "source": "",
        "meanings": [
            "vein",
            "pulse",
            "hope"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "民",
        "on": [
            "ミン"
        ],
        "kun": [
            "たみ"
        ],
        "source": "",
        "meanings": [
            "people",
            "nation",
            "subjects"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "無",
        "on": [
            "ム",
            "ブ"
        ],
        "kun": [
            "ない"
        ],
        "source": "",
        "meanings": [
            "nothingness",
            "none",
            "ain't",
            "nothing",
            "nil",
            "not"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "約",
        "on": [
            "ヤク"
        ],
        "kun": [
            "つづまる",
            "つづめる",
            "つづまやか"
        ],
        "source": "",
        "meanings": [
            "promise",
            "approximately",
            "shrink"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "勇",
        "on": [
            "ユウ"
        ],
        "kun": [
            "いさむ"
        ],
        "source": "",
        "meanings": [
            "courage",
            "cheer up",
            "be in high spirits",
            "bravery",
            "heroism"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "要",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "いる",
            "かなめ"
        ],
        "source": "",
        "meanings": [
            "need",
            "main point",
            "essence",
            "pivot",
            "key to"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "養",
        "on": [
            "ヨウ",
            "リョウ"
        ],
        "kun": [
            "やしなう"
        ],
        "source": "",
        "meanings": [
            "foster",
            "bring up",
            "rear",
            "develop",
            "nurture"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "浴",
        "on": [
            "ヨク"
        ],
        "kun": [
            "あびる",
            "あびせる"
        ],
        "source": "",
        "meanings": [
            "bathe",
            "be favored with",
            "bask in"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "利",
        "on": [
            "リ"
        ],
        "kun": [
            "きく"
        ],
        "source": "",
        "meanings": [
            "profit",
            "advantage",
            "benefit"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "梨",
        "on": [
            "リ"
        ],
        "kun": [
            "なし"
        ],
        "source": "",
        "meanings": [
            "pear tree"
        ],
        "grade": 4,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "陸",
        "on": [
            "リク",
            "ロク"
        ],
        "kun": [
            "おか"
        ],
        "source": "",
        "meanings": [
            "land",
            "six"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "料",
        "on": [
            "リョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "fee",
            "materials"
        ],
        "grade": 4,
        "jlpt": 3,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "良",
        "on": [
            "リョウ"
        ],
        "kun": [
            "よい",
            "よい",
            "いい",
            "いい"
        ],
        "source": "",
        "meanings": [
            "good",
            "pleasing",
            "skilled"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "量",
        "on": [
            "リョウ"
        ],
        "kun": [
            "はかる"
        ],
        "source": "",
        "meanings": [
            "quantity",
            "measure",
            "weight",
            "amount",
            "consider",
            "estimate",
            "surmise"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "輪",
        "on": [
            "リン"
        ],
        "kun": [
            "わ"
        ],
        "source": "",
        "meanings": [
            "wheel",
            "ring",
            "circle",
            "link",
            "loop",
            "counter for wheels and flowers"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "類",
        "on": [
            "ルイ"
        ],
        "kun": [
            "たぐい"
        ],
        "source": "",
        "meanings": [
            "sort",
            "kind",
            "variety",
            "class",
            "genus"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "令",
        "on": [
            "レイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "orders",
            "laws",
            "command",
            "decree",
            "good"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "例",
        "on": [
            "レイ"
        ],
        "kun": [
            "たとえる"
        ],
        "source": "",
        "meanings": [
            "example",
            "custom",
            "usage",
            "precedent"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "冷",
        "on": [
            "レイ"
        ],
        "kun": [
            "つめたい",
            "ひえる",
            "ひや",
            "ひややか",
            "ひやす",
            "ひやかす",
            "さめる",
            "さます"
        ],
        "source": "",
        "meanings": [
            "cool",
            "cold (beer",
            "person)",
            "chill"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "歴",
        "on": [
            "レキ",
            "レッキ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "curriculum",
            "continuation",
            "passage of time"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "連",
        "on": [
            "レン"
        ],
        "kun": [
            "つらなる",
            "つらねる",
            "つれる",
            "づれ"
        ],
        "source": "",
        "meanings": [
            "take along",
            "lead",
            "join",
            "connect",
            "party",
            "gang",
            "clique"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "労",
        "on": [
            "ロウ"
        ],
        "kun": [
            "ろうする",
            "いたわる",
            "いたずき",
            "ねぎら",
            "つかれる",
            "ねぎらう"
        ],
        "source": "",
        "meanings": [
            "labor",
            "thank for",
            "reward for",
            "toil",
            "trouble"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "老",
        "on": [
            "ロウ"
        ],
        "kun": [
            "おいる",
            "ふける"
        ],
        "source": "",
        "meanings": [
            "old man",
            "old age",
            "grow old"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "録",
        "on": [
            "ロク"
        ],
        "kun": [
            "しるす",
            "とる"
        ],
        "source": "",
        "meanings": [
            "record"
        ],
        "grade": 4,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "圧",
        "on": [
            "アツ",
            "エン",
            "オウ"
        ],
        "kun": [
            "おす",
            "へす",
            "おさえる",
            "おさえる"
        ],
        "source": "",
        "meanings": [
            "pressure",
            "push",
            "overwhelm",
            "oppress",
            "dominate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "易",
        "on": [
            "エキ",
            "イ"
        ],
        "kun": [
            "やさしい",
            "やすい"
        ],
        "source": "",
        "meanings": [
            "easy",
            "ready to",
            "simple",
            "fortune-telling",
            "divination"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "移",
        "on": [
            "イ"
        ],
        "kun": [
            "うつる",
            "うつす"
        ],
        "source": "",
        "meanings": [
            "shift",
            "move",
            "change",
            "drift",
            "catch (cold",
            "fire)",
            "pass into"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "因",
        "on": [
            "イン"
        ],
        "kun": [
            "よる",
            "ちなむ"
        ],
        "source": "",
        "meanings": [
            "cause",
            "factor",
            "be associated with",
            "depend on",
            "be limited to"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "営",
        "on": [
            "エイ"
        ],
        "kun": [
            "いとなむ",
            "いとなみ"
        ],
        "source": "",
        "meanings": [
            "occupation",
            "camp",
            "perform",
            "build",
            "conduct (business)"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "永",
        "on": [
            "エイ"
        ],
        "kun": [
            "ながい"
        ],
        "source": "",
        "meanings": [
            "eternity",
            "long",
            "lengthy"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "衛",
        "on": [
            "エイ",
            "エ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "defense",
            "protection"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "液",
        "on": [
            "エキ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "fluid",
            "liquid",
            "juice",
            "sap",
            "secretion"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "益",
        "on": [
            "エキ",
            "ヤク"
        ],
        "kun": [
            "ます"
        ],
        "source": "",
        "meanings": [
            "benefit",
            "gain",
            "profit",
            "advantage"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "演",
        "on": [
            "エン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "performance",
            "act",
            "play",
            "render",
            "stage"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "往",
        "on": [
            "オウ"
        ],
        "kun": [
            "いく",
            "いにしえ",
            "さきに",
            "ゆく"
        ],
        "source": "",
        "meanings": [
            "journey",
            "travel",
            "chase away",
            "let go",
            "going",
            "before",
            "formerly"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "応",
        "on": [
            "オウ",
            "ヨウ",
            "ノウ"
        ],
        "kun": [
            "あたる",
            "まさに",
            "こたえる"
        ],
        "source": "",
        "meanings": [
            "apply",
            "answer",
            "yes",
            "OK",
            "reply",
            "accept"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "恩",
        "on": [
            "オン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "grace",
            "kindness",
            "goodness",
            "favor",
            "mercy",
            "blessing",
            "benefit"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "仮",
        "on": [
            "カ",
            "ケ"
        ],
        "kun": [
            "かり",
            "かり"
        ],
        "source": "",
        "meanings": [
            "sham",
            "temporary",
            "interim",
            "assumed (name)",
            "informal"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "価",
        "on": [
            "カ",
            "ケ"
        ],
        "kun": [
            "あたい"
        ],
        "source": "",
        "meanings": [
            "value",
            "price"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "可",
        "on": [
            "カ",
            "コク"
        ],
        "kun": [
            "べき",
            "べし"
        ],
        "source": "",
        "meanings": [
            "can",
            "passable",
            "mustn't",
            "should not",
            "do not"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "河",
        "on": [
            "カ"
        ],
        "kun": [
            "かわ"
        ],
        "source": "",
        "meanings": [
            "river"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "過",
        "on": [
            "カ"
        ],
        "kun": [
            "すぎる",
            "すごす",
            "あやまち",
            "あやまつ",
            "よぎる",
            "よぎる"
        ],
        "source": "",
        "meanings": [
            "overdo",
            "exceed",
            "go beyond",
            "error"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "賀",
        "on": [
            "ガ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "congratulations",
            "joy"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "解",
        "on": [
            "カイ",
            "ゲ"
        ],
        "kun": [
            "とく",
            "とかす",
            "とける",
            "ほどく",
            "ほどける",
            "わかる",
            "さとる"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "快",
        "on": [
            "カイ"
        ],
        "kun": [
            "こころよい"
        ],
        "source": "",
        "meanings": [
            "cheerful",
            "pleasant",
            "agreeable",
            "comfortable"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "格",
        "on": [
            "カク",
            "コウ",
            "キャク",
            "ゴウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "status",
            "rank",
            "capacity",
            "character",
            "case (law",
            "grammar)"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "確",
        "on": [
            "カク",
            "コウ"
        ],
        "kun": [
            "たしか",
            "たしかめる"
        ],
        "source": "",
        "meanings": [
            "assurance",
            "firm",
            "tight",
            "hard",
            "solid",
            "confirm",
            "clear",
            "evident"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "額",
        "on": [
            "ガク"
        ],
        "kun": [
            "ひたい"
        ],
        "source": "",
        "meanings": [
            "forehead",
            "tablet",
            "plaque",
            "framed picture",
            "sum",
            "amount",
            "volume"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "刊",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "publish",
            "carve",
            "engrave"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "幹",
        "on": [
            "カン"
        ],
        "kun": [
            "みき"
        ],
        "source": "",
        "meanings": [
            "tree trunk",
            "main part",
            "talent",
            "capability"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "慣",
        "on": [
            "カン"
        ],
        "kun": [
            "なれる",
            "ならす"
        ],
        "source": "",
        "meanings": [
            "accustomed",
            "get used to",
            "become experienced"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "眼",
        "on": [
            "ガン",
            "ゲン"
        ],
        "kun": [
            "まなこ",
            "め"
        ],
        "source": "",
        "meanings": [
            "eyeball"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "基",
        "on": [
            "キ"
        ],
        "kun": [
            "もと",
            "もとい"
        ],
        "source": "",
        "meanings": [
            "fundamentals",
            "radical (chem)",
            "counter for machines",
            "foundation"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "寄",
        "on": [
            "キ"
        ],
        "kun": [
            "よる",
            "より",
            "よせる"
        ],
        "source": "",
        "meanings": [
            "draw near",
            "stop in",
            "bring near",
            "gather",
            "collect",
            "send",
            "forward"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "規",
        "on": [
            "キ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "standard",
            "measure"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "技",
        "on": [
            "ギ"
        ],
        "kun": [
            "わざ"
        ],
        "source": "",
        "meanings": [
            "skill",
            "art",
            "craft",
            "ability",
            "feat",
            "performance",
            "vocation",
            "arts"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "義",
        "on": [
            "ギ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "righteousness",
            "justice",
            "morality",
            "honor",
            "loyalty",
            "meaning"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "逆",
        "on": [
            "ギャク",
            "ゲキ"
        ],
        "kun": [
            "さか",
            "さかさ",
            "さからう"
        ],
        "source": "",
        "meanings": [
            "inverted",
            "reverse",
            "opposite",
            "wicked"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "久",
        "on": [
            "キュウ",
            "ク"
        ],
        "kun": [
            "ひさしい"
        ],
        "source": "",
        "meanings": [
            "long time",
            "old story"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "旧",
        "on": [
            "キュウ"
        ],
        "kun": [
            "ふるい",
            "もと"
        ],
        "source": "",
        "meanings": [
            "old times",
            "old things",
            "old friend",
            "former",
            "ex-"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "居",
        "on": [
            "キョ",
            "コ"
        ],
        "kun": [
            "いる",
            "い",
            "おる"
        ],
        "source": "",
        "meanings": [
            "reside",
            "to be",
            "exist",
            "live with"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "許",
        "on": [
            "キョ"
        ],
        "kun": [
            "ゆるす",
            "もと"
        ],
        "source": "",
        "meanings": [
            "permit",
            "approve"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "境",
        "on": [
            "キョウ",
            "ケイ"
        ],
        "kun": [
            "さかい"
        ],
        "source": "",
        "meanings": [
            "boundary",
            "border",
            "region"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "興",
        "on": [
            "コウ",
            "キョウ"
        ],
        "kun": [
            "おこる",
            "おこす"
        ],
        "source": "",
        "meanings": [
            "entertain",
            "revive",
            "retrieve",
            "interest",
            "pleasure"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "均",
        "on": [
            "キン"
        ],
        "kun": [
            "ならす"
        ],
        "source": "",
        "meanings": [
            "level",
            "average"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "禁",
        "on": [
            "キン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "prohibition",
            "ban",
            "forbid"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "句",
        "on": [
            "ク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "phrase",
            "clause",
            "sentence",
            "passage",
            "paragraph",
            "counter for haiku"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "群",
        "on": [
            "グン"
        ],
        "kun": [
            "むれる",
            "むれ",
            "むら",
            "むらがる"
        ],
        "source": "",
        "meanings": [
            "flock",
            "group",
            "crowd",
            "herd",
            "swarm",
            "cluster"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "経",
        "on": [
            "ケイ",
            "キョウ",
            "キン"
        ],
        "kun": [
            "へる",
            "たつ",
            "たていと",
            "はかる",
            "のり"
        ],
        "source": "",
        "meanings": [
            "sutra",
            "longitude",
            "pass thru",
            "expire",
            "warp"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "潔",
        "on": [
            "ケツ"
        ],
        "kun": [
            "いさぎよい"
        ],
        "source": "",
        "meanings": [
            "undefiled",
            "pure",
            "clean",
            "righteous",
            "gallant"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "件",
        "on": [
            "ケン"
        ],
        "kun": [
            "くだん"
        ],
        "source": "",
        "meanings": [
            "affair",
            "case",
            "matter",
            "item"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "券",
        "on": [
            "ケン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "ticket"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "検",
        "on": [
            "ケン"
        ],
        "kun": [
            "しらべる"
        ],
        "source": "",
        "meanings": [
            "examination",
            "investigate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "険",
        "on": [
            "ケン"
        ],
        "kun": [
            "けわしい"
        ],
        "source": "",
        "meanings": [
            "precipitous",
            "inaccessible place",
            "impregnable position",
            "steep place",
            "sharp eyes"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "減",
        "on": [
            "ゲン"
        ],
        "kun": [
            "へる",
            "へらす"
        ],
        "source": "",
        "meanings": [
            "dwindle",
            "decrease",
            "reduce",
            "decline",
            "curtail",
            "get hungry"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "現",
        "on": [
            "ゲン"
        ],
        "kun": [
            "あらわれる",
            "あらわす",
            "うつつ",
            "うつつ"
        ],
        "source": "",
        "meanings": [
            "present",
            "existing",
            "actual"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "限",
        "on": [
            "ゲン"
        ],
        "kun": [
            "かぎる",
            "かぎり",
            "かぎり"
        ],
        "source": "",
        "meanings": [
            "limit",
            "restrict",
            "to best of ability"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "個",
        "on": [
            "コ",
            "カ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "individual",
            "counter for articles"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "故",
        "on": [
            "コ"
        ],
        "kun": [
            "ゆえ",
            "ふるい",
            "もと"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "護",
        "on": [
            "ゴ"
        ],
        "kun": [
            "まもる"
        ],
        "source": "",
        "meanings": [
            "safeguard",
            "protect"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 20,
        "examples": [],
        "tags": []
    },
    {
        "name": "効",
        "on": [
            "コウ"
        ],
        "kun": [
            "きく",
            "ききめ",
            "ならう"
        ],
        "source": "",
        "meanings": [
            "merit",
            "efficacy",
            "efficiency",
            "benefit"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "厚",
        "on": [
            "コウ"
        ],
        "kun": [
            "あつい",
            "あか"
        ],
        "source": "",
        "meanings": [
            "thick",
            "heavy",
            "rich",
            "kind",
            "cordial",
            "brazen",
            "shameless"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "構",
        "on": [
            "コウ"
        ],
        "kun": [
            "かまえる",
            "かまう"
        ],
        "source": "",
        "meanings": [
            "posture",
            "build",
            "pretend"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "耕",
        "on": [
            "コウ"
        ],
        "kun": [
            "たがやす"
        ],
        "source": "",
        "meanings": [
            "till",
            "plow",
            "cultivate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "講",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "lecture",
            "club",
            "association"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "鉱",
        "on": [
            "コウ"
        ],
        "kun": [
            "あらがね"
        ],
        "source": "",
        "meanings": [
            "mineral",
            "ore"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "混",
        "on": [
            "コン"
        ],
        "kun": [
            "まじる",
            "まじり",
            "まざる",
            "まぜる",
            "こむ"
        ],
        "source": "",
        "meanings": [
            "mix",
            "blend",
            "confuse"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "査",
        "on": [
            "サ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "investigate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "再",
        "on": [
            "サイ",
            "サ"
        ],
        "kun": [
            "ふたたび"
        ],
        "source": "",
        "meanings": [
            "again",
            "twice",
            "second time"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "妻",
        "on": [
            "サイ"
        ],
        "kun": [
            "つま"
        ],
        "source": "",
        "meanings": [
            "wife",
            "spouse"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "採",
        "on": [
            "サイ"
        ],
        "kun": [
            "とる"
        ],
        "source": "",
        "meanings": [
            "pick",
            "take",
            "fetch",
            "take up"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "災",
        "on": [
            "サイ"
        ],
        "kun": [
            "わざわい"
        ],
        "source": "",
        "meanings": [
            "disaster",
            "calamity",
            "woe",
            "curse",
            "evil"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "際",
        "on": [
            "サイ"
        ],
        "kun": [
            "きわ",
            "ぎわ"
        ],
        "source": "",
        "meanings": [
            "occasion",
            "side",
            "edge",
            "verge",
            "dangerous",
            "adventurous",
            "indecent",
            "time",
            "when"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "在",
        "on": [
            "ザイ"
        ],
        "kun": [
            "ある"
        ],
        "source": "",
        "meanings": [
            "exist",
            "outskirts",
            "suburbs",
            "located in"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "罪",
        "on": [
            "ザイ"
        ],
        "kun": [
            "つみ"
        ],
        "source": "",
        "meanings": [
            "guilt",
            "sin",
            "crime",
            "fault",
            "blame",
            "offense"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "財",
        "on": [
            "ザイ",
            "サイ",
            "ゾク"
        ],
        "kun": [
            "たから"
        ],
        "source": "",
        "meanings": [
            "property",
            "money",
            "wealth",
            "assets"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "桜",
        "on": [
            "オウ",
            "ヨウ"
        ],
        "kun": [
            "さくら"
        ],
        "source": "",
        "meanings": [
            "cherry"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "雑",
        "on": [
            "ザツ",
            "ゾウ"
        ],
        "kun": [
            "まじえる",
            "まじる"
        ],
        "source": "",
        "meanings": [
            "miscellaneous"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "賛",
        "on": [
            "サン"
        ],
        "kun": [
            "たすける",
            "たたえる"
        ],
        "source": "",
        "meanings": [
            "approve",
            "praise",
            "title or inscription on picture",
            "assist",
            "agree with"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "酸",
        "on": [
            "サン"
        ],
        "kun": [
            "すい"
        ],
        "source": "",
        "meanings": [
            "acid",
            "bitterness",
            "sour",
            "tart"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "師",
        "on": [
            "シ"
        ],
        "kun": [
            "いくさ"
        ],
        "source": "",
        "meanings": [
            "expert",
            "teacher",
            "master",
            "model",
            "exemplar",
            "army (incl. counter)",
            "war"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "志",
        "on": [
            "シ"
        ],
        "kun": [
            "シリング",
            "こころざす",
            "こころざし"
        ],
        "source": "",
        "meanings": [
            "intention",
            "plan",
            "resolve",
            "aspire",
            "motive",
            "hopes",
            "shilling"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "支",
        "on": [
            "シ"
        ],
        "kun": [
            "ささえる",
            "つかえる",
            "かう"
        ],
        "source": "",
        "meanings": [
            "branch",
            "support",
            "sustain",
            "branch radical (no. 65)"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "枝",
        "on": [
            "シ"
        ],
        "kun": [
            "えだ"
        ],
        "source": "",
        "meanings": [
            "bough",
            "branch",
            "twig",
            "limb",
            "counter for branches"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "資",
        "on": [
            "シ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "assets",
            "resources",
            "capital",
            "funds",
            "data",
            "be conducive to",
            "contribute to"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "飼",
        "on": [
            "シ"
        ],
        "kun": [
            "かう"
        ],
        "source": "",
        "meanings": [
            "domesticate",
            "raise",
            "keep",
            "feed"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "似",
        "on": [
            "ジ"
        ],
        "kun": [
            "にる",
            "ひる"
        ],
        "source": "",
        "meanings": [
            "becoming",
            "resemble",
            "counterfeit",
            "imitate",
            "suitable"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "示",
        "on": [
            "ジ",
            "シ"
        ],
        "kun": [
            "しめす"
        ],
        "source": "",
        "meanings": [
            "show",
            "indicate",
            "point out",
            "express",
            "display"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "識",
        "on": [
            "シキ"
        ],
        "kun": [
            "しる",
            "しるす"
        ],
        "source": "",
        "meanings": [
            "discriminating",
            "know",
            "write"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "質",
        "on": [
            "シツ",
            "シチ",
            "チ"
        ],
        "kun": [
            "たち",
            "ただす",
            "もと",
            "わりふ"
        ],
        "source": "",
        "meanings": [
            "substance",
            "quality",
            "matter",
            "temperament"
        ],
        "grade": 5,
        "jlpt": 3,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "舎",
        "on": [
            "シャ",
            "セキ"
        ],
        "kun": [
            "やどる"
        ],
        "source": "",
        "meanings": [
            "cottage",
            "inn",
            "hut",
            "house",
            "mansion"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "謝",
        "on": [
            "シャ"
        ],
        "kun": [
            "あやまる"
        ],
        "source": "",
        "meanings": [
            "apologize",
            "thank",
            "refuse"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "授",
        "on": [
            "ジュ"
        ],
        "kun": [
            "さずける",
            "さずかる"
        ],
        "source": "",
        "meanings": [
            "impart",
            "instruct",
            "grant",
            "confer"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "修",
        "on": [
            "シュウ",
            "シュ"
        ],
        "kun": [
            "おさめる",
            "おさまる"
        ],
        "source": "",
        "meanings": [
            "discipline",
            "conduct oneself well",
            "study",
            "master"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "術",
        "on": [
            "ジュツ"
        ],
        "kun": [
            "すべ"
        ],
        "source": "",
        "meanings": [
            "art",
            "technique",
            "skill",
            "means",
            "trick",
            "resources",
            "magic"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "述",
        "on": [
            "ジュツ"
        ],
        "kun": [
            "のべる"
        ],
        "source": "",
        "meanings": [
            "mention",
            "state",
            "speak",
            "relate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "準",
        "on": [
            "ジュン"
        ],
        "kun": [
            "じゅんじる",
            "じゅんずる",
            "なぞらえる",
            "のり",
            "ひとしい",
            "みずもり"
        ],
        "source": "",
        "meanings": [
            "semi-",
            "correspond to",
            "proportionate to",
            "conform",
            "imitate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "序",
        "on": [
            "ジョ"
        ],
        "kun": [
            "ついで",
            "ついで"
        ],
        "source": "",
        "meanings": [
            "preface",
            "beginning",
            "order",
            "precedence",
            "occasion",
            "chance",
            "incidentally"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "承",
        "on": [
            "ショウ",
            "ジョウ"
        ],
        "kun": [
            "うけたまわる",
            "うける"
        ],
        "source": "",
        "meanings": [
            "acquiesce",
            "hear",
            "listen to",
            "be informed",
            "receive"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "招",
        "on": [
            "ショウ"
        ],
        "kun": [
            "まねく"
        ],
        "source": "",
        "meanings": [
            "beckon",
            "invite",
            "summon",
            "engage"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "証",
        "on": [
            "ショウ"
        ],
        "kun": [
            "あかし"
        ],
        "source": "",
        "meanings": [
            "evidence",
            "proof",
            "certificate"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "常",
        "on": [
            "ジョウ"
        ],
        "kun": [
            "つね",
            "とこ"
        ],
        "source": "",
        "meanings": [
            "usual",
            "ordinary",
            "normal",
            "common",
            "regular",
            "continually",
            "always",
            "long-lasting"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "情",
        "on": [
            "ジョウ",
            "セイ"
        ],
        "kun": [
            "なさけ"
        ],
        "source": "",
        "meanings": [
            "feelings",
            "emotion",
            "passion",
            "sympathy",
            "circumstances",
            "facts"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "条",
        "on": [
            "ジョウ",
            "チョウ",
            "デキ"
        ],
        "kun": [
            "えだ",
            "すじ"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "状",
        "on": [
            "ジョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "status quo",
            "conditions",
            "circumstances",
            "form",
            "appearance"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "織",
        "on": [
            "ショク",
            "シキ"
        ],
        "kun": [
            "おる",
            "おり",
            "おり",
            "おり",
            "おり"
        ],
        "source": "",
        "meanings": [
            "weave",
            "fabric"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "職",
        "on": [
            "ショク",
            "ソク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "post",
            "employment",
            "work"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "制",
        "on": [
            "セイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "system",
            "law",
            "rule"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "勢",
        "on": [
            "セイ",
            "ゼイ"
        ],
        "kun": [
            "いきおい",
            "はずみ"
        ],
        "source": "",
        "meanings": [
            "forces",
            "energy",
            "military strength"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "性",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "さが"
        ],
        "source": "",
        "meanings": [
            "sex",
            "gender",
            "nature"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "政",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "まつりごと",
            "まん"
        ],
        "source": "",
        "meanings": [
            "politics",
            "government"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "精",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "しらげる",
            "くわしい"
        ],
        "source": "",
        "meanings": [
            "refined",
            "ghost",
            "fairy",
            "energy",
            "vitality",
            "semen",
            "excellence",
            "purity",
            "skill"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "製",
        "on": [
            "セイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "made in...",
            "manufacture"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "税",
        "on": [
            "ゼイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "tax",
            "duty"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "績",
        "on": [
            "セキ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "exploits",
            "achievements",
            "unreeling cocoons"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "責",
        "on": [
            "セキ"
        ],
        "kun": [
            "せめる"
        ],
        "source": "",
        "meanings": [
            "blame",
            "condemn",
            "censure"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "接",
        "on": [
            "セツ",
            "ショウ"
        ],
        "kun": [
            "つぐ"
        ],
        "source": "",
        "meanings": [
            "touch",
            "contact",
            "adjoin",
            "piece together"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "設",
        "on": [
            "セツ"
        ],
        "kun": [
            "もうける"
        ],
        "source": "",
        "meanings": [
            "establishment",
            "provision",
            "prepare"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "絶",
        "on": [
            "ゼツ"
        ],
        "kun": [
            "たえる",
            "たやす",
            "たつ"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "舌",
        "on": [
            "ゼツ"
        ],
        "kun": [
            "した"
        ],
        "source": "",
        "meanings": [
            "tongue",
            "reed",
            "clapper"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "銭",
        "on": [
            "セン",
            "ゼン"
        ],
        "kun": [
            "ぜに",
            "すき"
        ],
        "source": "",
        "meanings": [
            "coin",
            ".01 yen",
            "money"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "祖",
        "on": [
            "ソ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "ancestor",
            "pioneer",
            "founder"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "素",
        "on": [
            "ソ",
            "ス"
        ],
        "kun": [
            "もと"
        ],
        "source": "",
        "meanings": [
            "elementary",
            "principle",
            "naked",
            "uncovered"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "総",
        "on": [
            "ソウ"
        ],
        "kun": [
            "すべて",
            "すべて",
            "ふさ"
        ],
        "source": "",
        "meanings": [
            "general",
            "whole",
            "all",
            "full",
            "total"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "像",
        "on": [
            "ゾウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "statue",
            "picture",
            "image",
            "figure",
            "portrait"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "増",
        "on": [
            "ゾウ"
        ],
        "kun": [
            "ます",
            "まし",
            "ふえる",
            "ふやす"
        ],
        "source": "",
        "meanings": [
            "increase",
            "add",
            "augment",
            "gain",
            "promote"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "造",
        "on": [
            "ゾウ"
        ],
        "kun": [
            "つくる",
            "つくり",
            "づくり"
        ],
        "source": "",
        "meanings": [
            "create",
            "make",
            "structure",
            "physique"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "則",
        "on": [
            "ソク"
        ],
        "kun": [
            "のっとる"
        ],
        "source": "",
        "meanings": [
            "rule",
            "follow",
            "based on",
            "model after"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "測",
        "on": [
            "ソク"
        ],
        "kun": [
            "はかる"
        ],
        "source": "",
        "meanings": [
            "fathom",
            "plan",
            "scheme",
            "measure"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "属",
        "on": [
            "ゾク",
            "ショク"
        ],
        "kun": [
            "さかん",
            "つく",
            "やから"
        ],
        "source": "",
        "meanings": [
            "belong",
            "genus",
            "subordinate official",
            "affiliated"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "損",
        "on": [
            "ソン"
        ],
        "kun": [
            "そこなう",
            "そこなう",
            "そこなう",
            "そこねる",
            "そこねる"
        ],
        "source": "",
        "meanings": [
            "damage",
            "loss",
            "disadvantage",
            "hurt",
            "injure"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "態",
        "on": [
            "タイ"
        ],
        "kun": [
            "わざと"
        ],
        "source": "",
        "meanings": [
            "attitude",
            "condition",
            "figure",
            "appearance",
            "voice (of verbs)"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "貸",
        "on": [
            "タイ"
        ],
        "kun": [
            "かす",
            "かし",
            "かし"
        ],
        "source": "",
        "meanings": [
            "lend"
        ],
        "grade": 5,
        "jlpt": 3,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "退",
        "on": [
            "タイ"
        ],
        "kun": [
            "しりぞく",
            "しりぞける",
            "ひく",
            "のく",
            "のける",
            "どく"
        ],
        "source": "",
        "meanings": [
            "retreat",
            "withdraw",
            "retire",
            "resign",
            "repel",
            "expel",
            "reject"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "団",
        "on": [
            "ダン",
            "トン"
        ],
        "kun": [
            "かたまり",
            "まるい"
        ],
        "source": "",
        "meanings": [
            "group",
            "association"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "断",
        "on": [
            "ダン"
        ],
        "kun": [
            "たつ",
            "ことわる",
            "さだめる"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "築",
        "on": [
            "チク"
        ],
        "kun": [
            "きずく"
        ],
        "source": "",
        "meanings": [
            "fabricate",
            "build",
            "construct"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "張",
        "on": [
            "チョウ"
        ],
        "kun": [
            "はる",
            "はり",
            "ばり"
        ],
        "source": "",
        "meanings": [
            "lengthen",
            "counter for bows & stringed instruments",
            "stretch",
            "spread",
            "put up (tent)"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "提",
        "on": [
            "テイ",
            "チョウ",
            "ダイ"
        ],
        "kun": [
            "さげる"
        ],
        "source": "",
        "meanings": [
            "propose",
            "take along",
            "carry in hand"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "程",
        "on": [
            "テイ"
        ],
        "kun": [
            "ほど",
            "ほど"
        ],
        "source": "",
        "meanings": [
            "extent",
            "degree",
            "law",
            "formula",
            "distance",
            "limits",
            "amount"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "敵",
        "on": [
            "テキ"
        ],
        "kun": [
            "かたき",
            "あだ",
            "かなう"
        ],
        "source": "",
        "meanings": [
            "enemy",
            "foe",
            "opponent"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "適",
        "on": [
            "テキ"
        ],
        "kun": [
            "かなう"
        ],
        "source": "",
        "meanings": [
            "suitable",
            "occasional",
            "rare",
            "qualified",
            "capable"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "統",
        "on": [
            "トウ"
        ],
        "kun": [
            "すべる",
            "ほびる"
        ],
        "source": "",
        "meanings": [
            "overall",
            "relationship",
            "ruling",
            "governing"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "導",
        "on": [
            "ドウ"
        ],
        "kun": [
            "みちびく"
        ],
        "source": "",
        "meanings": [
            "guidance",
            "leading",
            "conduct",
            "usher"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "銅",
        "on": [
            "ドウ"
        ],
        "kun": [
            "あかがね"
        ],
        "source": "",
        "meanings": [
            "copper"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "徳",
        "on": [
            "トク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "benevolence",
            "virtue",
            "goodness",
            "commanding respect"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "独",
        "on": [
            "ドク",
            "トク"
        ],
        "kun": [
            "ひとり"
        ],
        "source": "",
        "meanings": [
            "single",
            "alone",
            "spontaneously",
            "Germany"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "任",
        "on": [
            "ニン"
        ],
        "kun": [
            "まかせる",
            "まかす"
        ],
        "source": "",
        "meanings": [
            "responsibility",
            "duty",
            "term",
            "entrust to",
            "appoint"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "燃",
        "on": [
            "ネン"
        ],
        "kun": [
            "もえる",
            "もやす",
            "もす"
        ],
        "source": "",
        "meanings": [
            "burn",
            "blaze",
            "glow"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "能",
        "on": [
            "ノウ"
        ],
        "kun": [
            "よく",
            "あたう"
        ],
        "source": "",
        "meanings": [
            "ability",
            "talent",
            "skill",
            "capacity"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "破",
        "on": [
            "ハ"
        ],
        "kun": [
            "やぶる",
            "やぶれる",
            "われる"
        ],
        "source": "",
        "meanings": [
            "rend",
            "rip",
            "tear",
            "break",
            "destroy",
            "defeat",
            "frustrate"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "判",
        "on": [
            "ハン",
            "バン"
        ],
        "kun": [
            "わかる"
        ],
        "source": "",
        "meanings": [
            "judgement",
            "signature",
            "stamp",
            "seal"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "版",
        "on": [
            "ハン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "printing block",
            "printing plate",
            "edition",
            "impression",
            "label"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "犯",
        "on": [
            "ハン",
            "ボン"
        ],
        "kun": [
            "おかす"
        ],
        "source": "",
        "meanings": [
            "crime",
            "sin",
            "offense"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "比",
        "on": [
            "ヒ"
        ],
        "kun": [
            "くらべる"
        ],
        "source": "",
        "meanings": [
            "compare",
            "race",
            "ratio",
            "Philippines"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "肥",
        "on": [
            "ヒ"
        ],
        "kun": [
            "こえる",
            "こえ",
            "こやす",
            "こやし",
            "ふとる"
        ],
        "source": "",
        "meanings": [
            "fertilizer",
            "get fat",
            "fertile",
            "manure",
            "pamper"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "非",
        "on": [
            "ヒ"
        ],
        "kun": [
            "あらず"
        ],
        "source": "",
        "meanings": [
            "un-",
            "mistake",
            "negative",
            "injustice",
            "non-"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "備",
        "on": [
            "ビ"
        ],
        "kun": [
            "そなえる",
            "そなわる",
            "つぶさに"
        ],
        "source": "",
        "meanings": [
            "equip",
            "provision",
            "preparation"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "俵",
        "on": [
            "ヒョウ"
        ],
        "kun": [
            "たわら"
        ],
        "source": "",
        "meanings": [
            "bag",
            "bale",
            "sack",
            "counter for bags"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "評",
        "on": [
            "ヒョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "evaluate",
            "criticism",
            "comment"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "貧",
        "on": [
            "ヒン",
            "ビン"
        ],
        "kun": [
            "まずしい"
        ],
        "source": "",
        "meanings": [
            "poverty",
            "poor"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "婦",
        "on": [
            "フ"
        ],
        "kun": [
            "よめ"
        ],
        "source": "",
        "meanings": [
            "lady",
            "woman",
            "wife",
            "bride"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "富",
        "on": [
            "フ",
            "フウ"
        ],
        "kun": [
            "とむ",
            "とみ"
        ],
        "source": "",
        "meanings": [
            "wealth",
            "enrich",
            "abundant"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "布",
        "on": [
            "フ",
            "ホ"
        ],
        "kun": [
            "ぬの",
            "しく",
            "きれ"
        ],
        "source": "",
        "meanings": [
            "linen",
            "cloth",
            "spread",
            "distribute"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "武",
        "on": [
            "ブ",
            "ム"
        ],
        "kun": [
            "たけ",
            "たけし"
        ],
        "source": "",
        "meanings": [
            "warrior",
            "military",
            "chivalry",
            "arms"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "復",
        "on": [
            "フク"
        ],
        "kun": [
            "また"
        ],
        "source": "",
        "meanings": [
            "restore",
            "return to",
            "revert",
            "resume"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "複",
        "on": [
            "フク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "duplicate",
            "double",
            "compound",
            "multiple"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "仏",
        "on": [
            "ブツ",
            "フツ"
        ],
        "kun": [
            "ほとけ"
        ],
        "source": "",
        "meanings": [
            "Buddha",
            "the dead",
            "France"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "編",
        "on": [
            "ヘン"
        ],
        "kun": [
            "あむ",
            "あみ"
        ],
        "source": "",
        "meanings": [
            "compilation",
            "knit",
            "plait",
            "braid",
            "twist",
            "editing",
            "completed poem",
            "part of a book"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "弁",
        "on": [
            "ベン",
            "ヘン"
        ],
        "kun": [
            "かんむり",
            "わきまえる",
            "わける",
            "はなびら",
            "あらそう"
        ],
        "source": "",
        "meanings": [
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
        "grade": 5,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "保",
        "on": [
            "ホ",
            "ホウ"
        ],
        "kun": [
            "たもつ"
        ],
        "source": "",
        "meanings": [
            "protect",
            "guarantee",
            "keep",
            "preserve",
            "sustain",
            "support"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "墓",
        "on": [
            "ボ"
        ],
        "kun": [
            "はか"
        ],
        "source": "",
        "meanings": [
            "grave",
            "tomb"
        ],
        "grade": 5,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "報",
        "on": [
            "ホウ"
        ],
        "kun": [
            "むくいる"
        ],
        "source": "",
        "meanings": [
            "report",
            "news",
            "reward",
            "retribution"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "豊",
        "on": [
            "ホウ",
            "ブ"
        ],
        "kun": [
            "ゆたか",
            "とよ"
        ],
        "source": "",
        "meanings": [
            "bountiful",
            "excellent",
            "rich"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "暴",
        "on": [
            "ボウ",
            "バク"
        ],
        "kun": [
            "あばく",
            "あばれる"
        ],
        "source": "",
        "meanings": [
            "outburst",
            "rave",
            "fret",
            "force",
            "violence",
            "cruelty",
            "outrage"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "貿",
        "on": [
            "ボウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "trade",
            "exchange"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "防",
        "on": [
            "ボウ"
        ],
        "kun": [
            "ふせぐ"
        ],
        "source": "",
        "meanings": [
            "ward off",
            "defend",
            "protect",
            "resist"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "務",
        "on": [
            "ム"
        ],
        "kun": [
            "つとめる"
        ],
        "source": "",
        "meanings": [
            "task",
            "duties"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "夢",
        "on": [
            "ム",
            "ボウ"
        ],
        "kun": [
            "ゆめ",
            "ゆめみる",
            "くらい"
        ],
        "source": "",
        "meanings": [
            "dream",
            "vision",
            "illusion"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "迷",
        "on": [
            "メイ"
        ],
        "kun": [
            "まよう"
        ],
        "source": "",
        "meanings": [
            "astray",
            "be perplexed",
            "in doubt",
            "lost",
            "err",
            "illusion"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "綿",
        "on": [
            "メン"
        ],
        "kun": [
            "わた"
        ],
        "source": "",
        "meanings": [
            "cotton"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "輸",
        "on": [
            "ユ",
            "シュ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "transport",
            "send",
            "be inferior"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "余",
        "on": [
            "ヨ"
        ],
        "kun": [
            "あまる",
            "あまり",
            "あます",
            "あんまり"
        ],
        "source": "",
        "meanings": [
            "too much",
            "myself",
            "surplus",
            "other",
            "remainder"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "預",
        "on": [
            "ヨ"
        ],
        "kun": [
            "あずける",
            "あずかる"
        ],
        "source": "",
        "meanings": [
            "deposit",
            "custody",
            "leave with",
            "entrust to"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "容",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "いれる"
        ],
        "source": "",
        "meanings": [
            "contain",
            "form",
            "looks"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "率",
        "on": [
            "ソツ",
            "リツ",
            "シュツ"
        ],
        "kun": [
            "ひきいる"
        ],
        "source": "",
        "meanings": [
            "ratio",
            "rate",
            "proportion",
            "%",
            "factor",
            "lead",
            "spearhead",
            "command"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "略",
        "on": [
            "リャク"
        ],
        "kun": [
            "ほぼ",
            "はぶく",
            "おかす",
            "おさめる",
            "はかりごと",
            "はかる"
        ],
        "source": "",
        "meanings": [
            "abbreviation",
            "omission",
            "outline",
            "shorten",
            "capture",
            "plunder"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "留",
        "on": [
            "リュウ",
            "ル"
        ],
        "kun": [
            "とめる",
            "とまる",
            "とどめる",
            "とどまる",
            "るうぶる"
        ],
        "source": "",
        "meanings": [
            "detain",
            "fasten",
            "halt",
            "stop"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "領",
        "on": [
            "リョウ"
        ],
        "kun": [
            "えり"
        ],
        "source": "",
        "meanings": [
            "jurisdiction",
            "dominion",
            "territory",
            "fief",
            "reign"
        ],
        "grade": 5,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "異",
        "on": [
            "イ"
        ],
        "kun": [
            "こと",
            "ことなる",
            "け"
        ],
        "source": "",
        "meanings": [
            "uncommon",
            "different",
            "queerness",
            "strangeness",
            "wonderful",
            "curious",
            "unusual"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "遺",
        "on": [
            "イ",
            "ユイ"
        ],
        "kun": [
            "のこす"
        ],
        "source": "",
        "meanings": [
            "bequeath",
            "leave behind",
            "reserve"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "域",
        "on": [
            "イキ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "range",
            "region",
            "limits",
            "stage",
            "level"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "宇",
        "on": [
            "ウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "eaves",
            "roof",
            "house",
            "heaven"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "映",
        "on": [
            "エイ"
        ],
        "kun": [
            "うつる",
            "うつす",
            "はえる",
            "ばえ"
        ],
        "source": "",
        "meanings": [
            "reflect",
            "reflection",
            "projection"
        ],
        "grade": 6,
        "jlpt": 3,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "延",
        "on": [
            "エン"
        ],
        "kun": [
            "のびる",
            "のべる",
            "のべ",
            "のばす"
        ],
        "source": "",
        "meanings": [
            "prolong",
            "stretching"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "沿",
        "on": [
            "エン"
        ],
        "kun": [
            "そう",
            "ぞい"
        ],
        "source": "",
        "meanings": [
            "run alongside",
            "follow along",
            "run along",
            "lie along"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "我",
        "on": [
            "ガ"
        ],
        "kun": [
            "われ",
            "わ",
            "わが",
            "わが"
        ],
        "source": "",
        "meanings": [
            "ego",
            "I",
            "selfish",
            "our",
            "oneself"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "灰",
        "on": [
            "カイ"
        ],
        "kun": [
            "はい"
        ],
        "source": "",
        "meanings": [
            "ashes",
            "puckery juice",
            "cremate"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "拡",
        "on": [
            "カク",
            "コウ"
        ],
        "kun": [
            "ひろがる",
            "ひろげる",
            "ひろめる"
        ],
        "source": "",
        "meanings": [
            "broaden",
            "extend",
            "expand",
            "enlarge"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "閣",
        "on": [
            "カク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "tower",
            "tall building",
            "palace"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "革",
        "on": [
            "カク"
        ],
        "kun": [
            "かわ"
        ],
        "source": "",
        "meanings": [
            "leather",
            "skin",
            "reform",
            "become serious"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "割",
        "on": [
            "カツ"
        ],
        "kun": [
            "わる",
            "わり",
            "わり",
            "われる",
            "さく"
        ],
        "source": "",
        "meanings": [
            "proportion",
            "comparatively",
            "divide",
            "cut",
            "separate",
            "split"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "株",
        "on": [
            "シュ"
        ],
        "kun": [
            "かぶ"
        ],
        "source": "",
        "meanings": [
            "stocks",
            "stump",
            "shares",
            "stock",
            "counter for small plants"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "巻",
        "on": [
            "カン",
            "ケン"
        ],
        "kun": [
            "まく",
            "まき",
            "まき"
        ],
        "source": "",
        "meanings": [
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
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "干",
        "on": [
            "カン"
        ],
        "kun": [
            "ほす",
            "ほし",
            "ぼし",
            "ひる"
        ],
        "source": "",
        "meanings": [
            "dry",
            "parch",
            "ebb",
            "recede",
            "interfere",
            "intercede"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "看",
        "on": [
            "カン"
        ],
        "kun": [
            "みる"
        ],
        "source": "",
        "meanings": [
            "watch over",
            "see"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "簡",
        "on": [
            "カン",
            "ケン"
        ],
        "kun": [
            "えらぶ",
            "ふだ"
        ],
        "source": "",
        "meanings": [
            "simplicity",
            "brevity"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "危",
        "on": [
            "キ"
        ],
        "kun": [
            "あぶない",
            "あやうい",
            "あやぶむ"
        ],
        "source": "",
        "meanings": [
            "dangerous",
            "fear",
            "uneasy"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "揮",
        "on": [
            "キ"
        ],
        "kun": [
            "ふるう"
        ],
        "source": "",
        "meanings": [
            "brandish",
            "wave",
            "wag",
            "swing",
            "shake"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "机",
        "on": [
            "き"
        ],
        "kun": [
            "つくえ"
        ],
        "source": "https://en.wiktionary.org/wiki/%E6%9C%BA#Kanji",
        "meanings": [
            "desk",
            "table"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [
            {
                "value": "机",
                "kana": [
                    "つくえ, つき"
                ],
                "english": [
                    "desk"
                ]
            },
            {
                "value": "机上",
                "kana": [
                    "きじょう"
                ],
                "english": [
                    "on the desk",
                    "theoretical",
                    "academic"
                ]
            },
            {
                "value": "机上の空論",
                "kana": [
                    "きじょうのくうろん"
                ],
                "english": [
                    "academic gossip",
                    "empty theory"
                ]
            },
            {
                "value": "事務机",
                "kana": [
                    "じむづくえ"
                ],
                "english": [
                    "cleric desk"
                ]
            },
            {
                "value": "書き物机",
                "kana": [
                    "かきものづくえ"
                ],
                "english": [
                    "writing desk"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "貴",
        "on": [
            "キ"
        ],
        "kun": [
            "たっとい",
            "とうとい",
            "たっとぶ",
            "とうとぶ"
        ],
        "source": "",
        "meanings": [
            "precious",
            "value",
            "prize",
            "esteem",
            "honor"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "疑",
        "on": [
            "ギ"
        ],
        "kun": [
            "うたがう"
        ],
        "source": "",
        "meanings": [
            "doubt",
            "distrust",
            "be suspicious",
            "question"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "吸",
        "on": [
            "キュウ"
        ],
        "kun": [
            "すう"
        ],
        "source": "",
        "meanings": [
            "suck",
            "imbibe",
            "inhale",
            "sip"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "供",
        "on": [
            "キョウ",
            "ク",
            "クウ",
            "グ"
        ],
        "kun": [
            "そなえる",
            "とも",
            "ども"
        ],
        "source": "",
        "meanings": [
            "submit",
            "offer",
            "present",
            "serve (meal)",
            "accompany"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "胸",
        "on": [
            "キョウ"
        ],
        "kun": [
            "むね",
            "むな"
        ],
        "source": "",
        "meanings": [
            "bosom",
            "breast",
            "chest",
            "heart",
            "feelings"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "郷",
        "on": [
            "キョウ",
            "ゴウ"
        ],
        "kun": [
            "さと"
        ],
        "source": "",
        "meanings": [
            "home town",
            "village",
            "native place",
            "district"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "勤",
        "on": [
            "キン",
            "ゴン"
        ],
        "kun": [
            "つとめる",
            "づとめ",
            "つとまる",
            "いそしむ"
        ],
        "source": "",
        "meanings": [
            "diligence",
            "become employed",
            "serve"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "筋",
        "on": [
            "キン"
        ],
        "kun": [
            "すじ"
        ],
        "source": "",
        "meanings": [
            "muscle",
            "sinew",
            "tendon",
            "fiber",
            "plot",
            "plan",
            "descent"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "敬",
        "on": [
            "ケイ",
            "キョウ"
        ],
        "kun": [
            "うやまう"
        ],
        "source": "",
        "meanings": [
            "awe",
            "respect",
            "honor",
            "revere"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "系",
        "on": [
            "ケイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "lineage",
            "system"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "警",
        "on": [
            "ケイ"
        ],
        "kun": [
            "いましめる"
        ],
        "source": "",
        "meanings": [
            "admonish",
            "commandment"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "劇",
        "on": [
            "ゲキ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "drama",
            "play"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "激",
        "on": [
            "ゲキ"
        ],
        "kun": [
            "はげしい"
        ],
        "source": "",
        "meanings": [
            "violent",
            "get excited",
            "enraged",
            "chafe",
            "incite"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "穴",
        "on": [
            "ケツ"
        ],
        "kun": [
            "あな"
        ],
        "source": "",
        "meanings": [
            "hole",
            "aperture",
            "slit",
            "cave",
            "den"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "憲",
        "on": [
            "ケン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "constitution",
            "law"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "権",
        "on": [
            "ケン",
            "ゴン"
        ],
        "kun": [
            "おもり",
            "かり",
            "はかる"
        ],
        "source": "",
        "meanings": [
            "authority",
            "power",
            "rights"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "絹",
        "on": [
            "ケン"
        ],
        "kun": [
            "きぬ"
        ],
        "source": "",
        "meanings": [
            "silk"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "厳",
        "on": [
            "ゲン",
            "ゴン"
        ],
        "kun": [
            "おごそか",
            "きびしい",
            "いかめしい",
            "いつくし"
        ],
        "source": "",
        "meanings": [
            "stern",
            "strictness",
            "severity",
            "rigidity"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "源",
        "on": [
            "ゲン"
        ],
        "kun": [
            "みなもと"
        ],
        "source": "",
        "meanings": [
            "source",
            "origin"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "呼",
        "on": [
            "コ"
        ],
        "kun": [
            "よぶ"
        ],
        "source": "",
        "meanings": [
            "call",
            "call out to",
            "invite"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "己",
        "on": [
            "コ",
            "キ"
        ],
        "kun": [
            "おのれ",
            "つちのと",
            "な"
        ],
        "source": "",
        "meanings": [
            "self"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "誤",
        "on": [
            "ゴ"
        ],
        "kun": [
            "あやまる",
            "あやまる"
        ],
        "source": "",
        "meanings": [
            "mistake",
            "err",
            "do wrong",
            "mislead"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "后",
        "on": [
            "コウ",
            "ゴ"
        ],
        "kun": [
            "きさき"
        ],
        "source": "",
        "meanings": [
            "empress",
            "queen",
            "after",
            "behind",
            "back",
            "later"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "孝",
        "on": [
            "コウ",
            "キョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "filial piety",
            "child's respect"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "皇",
        "on": [
            "コウ",
            "オウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "emperor"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "紅",
        "on": [
            "コウ",
            "ク"
        ],
        "kun": [
            "べに",
            "くれない",
            "あかい"
        ],
        "source": "",
        "meanings": [
            "crimson",
            "deep red"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "鋼",
        "on": [
            "コウ"
        ],
        "kun": [
            "はがね"
        ],
        "source": "",
        "meanings": [
            "steel"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "降",
        "on": [
            "コウ",
            "ゴ"
        ],
        "kun": [
            "おりる",
            "おろす",
            "ふる",
            "ふり",
            "くだる",
            "くだす"
        ],
        "source": "",
        "meanings": [
            "descend",
            "precipitate",
            "fall",
            "surrender"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "刻",
        "on": [
            "コク"
        ],
        "kun": [
            "きざむ",
            "きざみ"
        ],
        "source": "",
        "meanings": [
            "engrave",
            "cut fine",
            "chop",
            "hash",
            "mince",
            "time",
            "carving"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "穀",
        "on": [
            "コク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "cereals",
            "grain"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "骨",
        "on": [
            "コツ"
        ],
        "kun": [
            "ほね"
        ],
        "source": "",
        "meanings": [
            "skeleton",
            "bone",
            "remains",
            "frame"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "困",
        "on": [
            "コン"
        ],
        "kun": [
            "こまる"
        ],
        "source": "",
        "meanings": [
            "quandary",
            "become distressed",
            "annoyed"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "砂",
        "on": [
            "サ",
            "シャ"
        ],
        "kun": [
            "すな"
        ],
        "source": "",
        "meanings": [
            "sand"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "座",
        "on": [
            "ザ"
        ],
        "kun": [
            "すわる"
        ],
        "source": "",
        "meanings": [
            "squat",
            "seat",
            "cushion",
            "gathering",
            "sit"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "済",
        "on": [
            "サイ",
            "セイ"
        ],
        "kun": [
            "すむ",
            "ずみ",
            "ずみ",
            "すまない",
            "すます",
            "すます",
            "すくう",
            "なす",
            "わたし",
            "わたる"
        ],
        "source": "",
        "meanings": [
            "settle (debt",
            "etc.)",
            "relieve (burden)",
            "finish",
            "come to an end",
            "excusable",
            "need not"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "裁",
        "on": [
            "サイ"
        ],
        "kun": [
            "たつ",
            "さばく"
        ],
        "source": "",
        "meanings": [
            "tailor",
            "judge",
            "decision",
            "cut out (pattern)"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "策",
        "on": [
            "サク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "scheme",
            "plan",
            "policy",
            "step",
            "means"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "冊",
        "on": [
            "サツ",
            "サク"
        ],
        "kun": [
            "ふみ"
        ],
        "source": "",
        "meanings": [
            "tome",
            "counter for books",
            "volume"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "蚕",
        "on": [
            "サン",
            "テン"
        ],
        "kun": [
            "かいこ",
            "こ"
        ],
        "source": "",
        "meanings": [
            "silkworm"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "姿",
        "on": [
            "シ"
        ],
        "kun": [
            "すがた"
        ],
        "source": "",
        "meanings": [
            "figure",
            "form",
            "shape"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "私",
        "on": [
            "し"
        ],
        "kun": [
            "わたくし"
        ],
        "source": "https://en.wiktionary.org/wiki/%E7%A7%81#Kanji",
        "meanings": [
            "me",
            "I"
        ],
        "grade": 6,
        "jlpt": 3,
        "strokes": 7,
        "examples": [
            {
                "value": "私",
                "kana": [
                    "わたし",
                    "わたくし"
                ],
                "english": [
                    "I",
                    "me",
                    "personal matter"
                ]
            },
            {
                "value": "私立",
                "kana": [
                    "しりつ",
                    "わたくしりつ"
                ],
                "english": [
                    "private (establishment"
                ]
            },
            {
                "value": "私邸",
                "kana": [
                    "してい"
                ],
                "english": [
                    "private residence"
                ]
            },
            {
                "value": "私的",
                "kana": [
                    "してき"
                ],
                "english": [
                    "personal",
                    "private",
                    "proprietary"
                ]
            },
            {
                "value": "私鉄",
                "kana": [
                    "してつ"
                ],
                "english": [
                    "private railway"
                ]
            }
        ],
        "tags": []
    },
    {
        "name": "至",
        "on": [
            "シ"
        ],
        "kun": [
            "いたる"
        ],
        "source": "",
        "meanings": [
            "climax",
            "arrive",
            "proceed",
            "reach",
            "attain",
            "result in"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "視",
        "on": [
            "シ"
        ],
        "kun": [
            "みる"
        ],
        "source": "",
        "meanings": [
            "inspection",
            "regard as",
            "see",
            "look at"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "詞",
        "on": [
            "シ"
        ],
        "kun": [
            "ことば"
        ],
        "source": "",
        "meanings": [
            "part of speech",
            "words",
            "poetry"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "誌",
        "on": [
            "シ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "document",
            "records"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "磁",
        "on": [
            "ジ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "magnet",
            "porcelain"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "射",
        "on": [
            "シャ"
        ],
        "kun": [
            "いる",
            "さす",
            "うつ"
        ],
        "source": "",
        "meanings": [
            "shoot",
            "shine into",
            "onto",
            "archery"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "捨",
        "on": [
            "シャ"
        ],
        "kun": [
            "すてる"
        ],
        "source": "",
        "meanings": [
            "discard",
            "throw away",
            "abandon",
            "resign",
            "reject",
            "sacrifice"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "尺",
        "on": [
            "シャク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "shaku",
            "Japanese foot",
            "measure",
            "scale",
            "rule"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "若",
        "on": [
            "ジャク",
            "ニャク",
            "ニャ"
        ],
        "kun": [
            "わかい",
            "わか",
            "もしくわ",
            "もし",
            "もしくは",
            "ごとし"
        ],
        "source": "",
        "meanings": [
            "young",
            "if",
            "perhaps",
            "possibly",
            "low number",
            "immature"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "樹",
        "on": [
            "ジュ"
        ],
        "kun": [
            "き"
        ],
        "source": "",
        "meanings": [
            "timber",
            "trees",
            "wood",
            "establish",
            "set up"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "収",
        "on": [
            "シュウ"
        ],
        "kun": [
            "おさめる",
            "おさまる"
        ],
        "source": "",
        "meanings": [
            "income",
            "obtain",
            "reap",
            "pay",
            "supply",
            "store"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "宗",
        "on": [
            "シュウ",
            "ソウ"
        ],
        "kun": [
            "むね"
        ],
        "source": "",
        "meanings": [
            "religion",
            "sect",
            "denomination",
            "main point",
            "origin",
            "essence"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "就",
        "on": [
            "シュウ",
            "ジュ"
        ],
        "kun": [
            "つく",
            "つける"
        ],
        "source": "",
        "meanings": [
            "concerning",
            "settle",
            "take position",
            "depart",
            "study",
            "per"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "衆",
        "on": [
            "シュウ",
            "シュ"
        ],
        "kun": [
            "おおい"
        ],
        "source": "",
        "meanings": [
            "masses",
            "great numbers",
            "multitude",
            "populace"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "従",
        "on": [
            "ジュウ",
            "ショウ",
            "ジュ"
        ],
        "kun": [
            "したがう",
            "したがえる",
            "より"
        ],
        "source": "",
        "meanings": [
            "accompany",
            "obey",
            "submit to",
            "comply",
            "follow",
            "secondary",
            "incidental",
            "subordinate"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "縦",
        "on": [
            "ジュウ"
        ],
        "kun": [
            "たて"
        ],
        "source": "",
        "meanings": [
            "vertical",
            "length",
            "height",
            "self-indulgent",
            "wayward"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "縮",
        "on": [
            "シュク"
        ],
        "kun": [
            "ちぢむ",
            "ちぢまる",
            "ちぢめる",
            "ちぢれる",
            "ちぢらす"
        ],
        "source": "",
        "meanings": [
            "shrink",
            "contract",
            "shrivel",
            "wrinkle",
            "reduce"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "熟",
        "on": [
            "ジュク"
        ],
        "kun": [
            "うれる"
        ],
        "source": "",
        "meanings": [
            "mellow",
            "ripen",
            "mature",
            "acquire skill"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "純",
        "on": [
            "ジュン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "genuine",
            "purity",
            "innocence",
            "net (profit)"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "処",
        "on": [
            "ショ"
        ],
        "kun": [
            "ところ",
            "こ",
            "おる"
        ],
        "source": "",
        "meanings": [
            "dispose",
            "manage",
            "deal with",
            "sentence",
            "condemn",
            "act",
            "behave",
            "place"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "署",
        "on": [
            "ショ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "signature",
            "govt office",
            "police station"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "諸",
        "on": [
            "ショ"
        ],
        "kun": [
            "もろ"
        ],
        "source": "",
        "meanings": [
            "various",
            "many",
            "several",
            "together"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "除",
        "on": [
            "ジョ",
            "ジ"
        ],
        "kun": [
            "のぞく",
            "よけ"
        ],
        "source": "",
        "meanings": [
            "exclude",
            "division (x/3)",
            "remove",
            "abolish",
            "cancel",
            "except"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "傷",
        "on": [
            "ショウ"
        ],
        "kun": [
            "きず",
            "いたむ",
            "いためる"
        ],
        "source": "",
        "meanings": [
            "wound",
            "hurt",
            "injure",
            "impair",
            "pain",
            "injury",
            "cut",
            "gash",
            "scar",
            "weak point"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "将",
        "on": [
            "ショウ",
            "ソウ"
        ],
        "kun": [
            "まさに",
            "はた",
            "まさ",
            "ひきいる",
            "もって"
        ],
        "source": "",
        "meanings": [
            "leader",
            "commander",
            "general",
            "admiral",
            "or",
            "and again",
            "soon",
            "from now on",
            "just about"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "障",
        "on": [
            "ショウ"
        ],
        "kun": [
            "さわる"
        ],
        "source": "",
        "meanings": [
            "hinder",
            "hurt",
            "harm"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "城",
        "on": [
            "ジョウ",
            "セイ"
        ],
        "kun": [
            "しろ"
        ],
        "source": "",
        "meanings": [
            "castle"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "蒸",
        "on": [
            "ジョウ",
            "セイ"
        ],
        "kun": [
            "むす",
            "むれる",
            "むらす"
        ],
        "source": "",
        "meanings": [
            "steam",
            "heat",
            "sultry",
            "foment",
            "get musty"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "針",
        "on": [
            "シン"
        ],
        "kun": [
            "はり"
        ],
        "source": "",
        "meanings": [
            "needle",
            "pin",
            "staple",
            "stinger"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "仁",
        "on": [
            "ジン",
            "ニ",
            "ニン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "humanity",
            "virtue",
            "benevolence",
            "charity",
            "man",
            "kernel"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "垂",
        "on": [
            "スイ"
        ],
        "kun": [
            "たれる",
            "たらす",
            "たれ",
            "たれ",
            "なんなんとす"
        ],
        "source": "",
        "meanings": [
            "droop",
            "suspend",
            "hang",
            "slouch"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "推",
        "on": [
            "スイ"
        ],
        "kun": [
            "おす"
        ],
        "source": "",
        "meanings": [
            "conjecture",
            "infer",
            "guess",
            "suppose",
            "support",
            "push (for)"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "寸",
        "on": [
            "スン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "measurement",
            "tenth of a shaku",
            "a little",
            "small"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "盛",
        "on": [
            "セイ",
            "ジョウ"
        ],
        "kun": [
            "もる",
            "さかる",
            "さかん"
        ],
        "source": "",
        "meanings": [
            "boom",
            "prosper",
            "copulate"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "聖",
        "on": [
            "セイ",
            "ショウ"
        ],
        "kun": [
            "ひじり"
        ],
        "source": "",
        "meanings": [
            "holy",
            "saint",
            "sage",
            "master",
            "priest"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "誠",
        "on": [
            "セイ"
        ],
        "kun": [
            "まこと"
        ],
        "source": "",
        "meanings": [
            "sincerity",
            "admonish",
            "warn",
            "prohibit",
            "truth",
            "fidelity"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "宣",
        "on": [
            "セン"
        ],
        "kun": [
            "のたまう"
        ],
        "source": "",
        "meanings": [
            "proclaim",
            "say",
            "announce"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "専",
        "on": [
            "セン"
        ],
        "kun": [
            "もっぱら"
        ],
        "source": "",
        "meanings": [
            "specialty",
            "exclusive",
            "mainly",
            "solely"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "泉",
        "on": [
            "セン"
        ],
        "kun": [
            "いずみ"
        ],
        "source": "",
        "meanings": [
            "spring",
            "fountain"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "洗",
        "on": [
            "セン"
        ],
        "kun": [
            "あらう"
        ],
        "source": "",
        "meanings": [
            "wash",
            "inquire into",
            "probe"
        ],
        "grade": 6,
        "jlpt": 3,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "染",
        "on": [
            "セン"
        ],
        "kun": [
            "そめる",
            "そまる",
            "しみる",
            "しみ"
        ],
        "source": "",
        "meanings": [
            "dye",
            "color",
            "paint",
            "stain",
            "print"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "善",
        "on": [
            "ゼン"
        ],
        "kun": [
            "よい",
            "いい",
            "よく",
            "よしとする"
        ],
        "source": "",
        "meanings": [
            "virtuous",
            "good",
            "goodness"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "創",
        "on": [
            "ソウ",
            "ショウ"
        ],
        "kun": [
            "つくる",
            "はじめる",
            "きず",
            "けずしける"
        ],
        "source": "",
        "meanings": [
            "genesis",
            "wound",
            "injury",
            "hurt",
            "start",
            "originate"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "奏",
        "on": [
            "ソウ"
        ],
        "kun": [
            "かなでる"
        ],
        "source": "",
        "meanings": [
            "play music",
            "speak to a ruler",
            "complete"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "層",
        "on": [
            "ソウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "stratum",
            "social class",
            "layer",
            "story",
            "floor"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "操",
        "on": [
            "ソウ",
            "サン"
        ],
        "kun": [
            "みさお",
            "あやつる"
        ],
        "source": "",
        "meanings": [
            "maneuver",
            "manipulate",
            "operate",
            "steer",
            "chastity",
            "virginity",
            "fidelity"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "窓",
        "on": [
            "ソウ",
            "ス"
        ],
        "kun": [
            "まど",
            "てんまど",
            "けむだし"
        ],
        "source": "",
        "meanings": [
            "window",
            "pane"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "装",
        "on": [
            "ソウ",
            "ショウ"
        ],
        "kun": [
            "よそおう",
            "よそおい"
        ],
        "source": "",
        "meanings": [
            "attire",
            "dress",
            "pretend",
            "disguise",
            "profess"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "臓",
        "on": [
            "ゾウ"
        ],
        "kun": [
            "はらわた"
        ],
        "source": "",
        "meanings": [
            "entrails",
            "viscera",
            "bowels"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "蔵",
        "on": [
            "ゾウ",
            "ソウ"
        ],
        "kun": [
            "くら",
            "おさめる",
            "かくれる"
        ],
        "source": "",
        "meanings": [
            "storehouse",
            "hide",
            "own",
            "have",
            "possess"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "存",
        "on": [
            "ソン",
            "ゾン"
        ],
        "kun": [
            "ながらえる",
            "ある",
            "たもつ",
            "とう"
        ],
        "source": "",
        "meanings": [
            "exist",
            "suppose",
            "be aware of",
            "believe",
            "feel"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "尊",
        "on": [
            "ソン"
        ],
        "kun": [
            "たっとい",
            "とうとい",
            "たっとぶ",
            "とうとぶ"
        ],
        "source": "",
        "meanings": [
            "revered",
            "valuable",
            "precious",
            "noble",
            "exalted"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "宅",
        "on": [
            "タク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "home",
            "house",
            "residence",
            "our house",
            "my husband"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "担",
        "on": [
            "タン"
        ],
        "kun": [
            "かつぐ",
            "になう"
        ],
        "source": "",
        "meanings": [
            "shouldering",
            "carry",
            "raise",
            "bear"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "探",
        "on": [
            "タン"
        ],
        "kun": [
            "さぐる",
            "さがす"
        ],
        "source": "",
        "meanings": [
            "grope",
            "search",
            "look for"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "誕",
        "on": [
            "タン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "nativity",
            "be born",
            "declension",
            "lie",
            "be arbitrary"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "暖",
        "on": [
            "ダン",
            "ノン"
        ],
        "kun": [
            "あたたか",
            "あたたかい",
            "あたたまる",
            "あたためる"
        ],
        "source": "",
        "meanings": [
            "warmth"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "段",
        "on": [
            "ダン",
            "タン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "grade",
            "steps",
            "stairs"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "値",
        "on": [
            "チ"
        ],
        "kun": [
            "ね",
            "あたい"
        ],
        "source": "",
        "meanings": [
            "price",
            "cost",
            "value"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "宙",
        "on": [
            "チュウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "mid-air",
            "air",
            "space",
            "sky",
            "memorization",
            "interval of time"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "忠",
        "on": [
            "チュウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "loyalty",
            "fidelity",
            "faithfulness"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "著",
        "on": [
            "チョ",
            "チャク"
        ],
        "kun": [
            "あらわす",
            "いちじるしい"
        ],
        "source": "",
        "meanings": [
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
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "庁",
        "on": [
            "チョウ",
            "テイ"
        ],
        "kun": [
            "やくしょ"
        ],
        "source": "",
        "meanings": [
            "government office"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "潮",
        "on": [
            "チョウ"
        ],
        "kun": [
            "しお",
            "うしお"
        ],
        "source": "",
        "meanings": [
            "tide",
            "salt water",
            "opportunity"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "頂",
        "on": [
            "チョウ"
        ],
        "kun": [
            "いただく",
            "いただき"
        ],
        "source": "",
        "meanings": [
            "place on the head",
            "receive",
            "top of head",
            "top",
            "summit",
            "peak"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "賃",
        "on": [
            "チン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "fare",
            "fee",
            "hire",
            "rent",
            "wages",
            "charge"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "痛",
        "on": [
            "ツウ"
        ],
        "kun": [
            "いたい",
            "いたむ",
            "いたましい",
            "いためる"
        ],
        "source": "",
        "meanings": [
            "pain",
            "hurt",
            "damage",
            "bruise"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "展",
        "on": [
            "テン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "unfold",
            "expand"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "党",
        "on": [
            "トウ"
        ],
        "kun": [
            "なかま",
            "むら"
        ],
        "source": "",
        "meanings": [
            "party",
            "faction",
            "clique"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "糖",
        "on": [
            "トウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "sugar"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "討",
        "on": [
            "トウ"
        ],
        "kun": [
            "うつ"
        ],
        "source": "",
        "meanings": [
            "chastise",
            "attack",
            "defeat",
            "destroy",
            "conquer"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "届",
        "on": [
            "カイ"
        ],
        "kun": [
            "とどける",
            "とどけ",
            "とどく"
        ],
        "source": "",
        "meanings": [
            "deliver",
            "reach",
            "arrive",
            "report",
            "notify",
            "forward"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "難",
        "on": [
            "ナン"
        ],
        "kun": [
            "かたい",
            "がたい",
            "むずかしい",
            "むづかしい",
            "むつかしい",
            "にくい"
        ],
        "source": "",
        "meanings": [
            "difficult",
            "impossible",
            "trouble",
            "accident",
            "defect"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "乳",
        "on": [
            "ニュウ"
        ],
        "kun": [
            "ちち",
            "ち"
        ],
        "source": "",
        "meanings": [
            "milk",
            "breasts"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "認",
        "on": [
            "ニン"
        ],
        "kun": [
            "みとめる",
            "したためる"
        ],
        "source": "",
        "meanings": [
            "acknowledge",
            "witness",
            "discern",
            "recognize",
            "appreciate",
            "believe"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "納",
        "on": [
            "ノウ",
            "ナッ",
            "ナ",
            "ナン",
            "トウ"
        ],
        "kun": [
            "おさめる",
            "おさめる",
            "おさまる"
        ],
        "source": "",
        "meanings": [
            "settlement",
            "obtain",
            "reap",
            "pay",
            "supply",
            "store"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "脳",
        "on": [
            "ノウ",
            "ドウ"
        ],
        "kun": [
            "のうずる"
        ],
        "source": "",
        "meanings": [
            "brain",
            "memory"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "派",
        "on": [
            "ハ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "faction",
            "group",
            "party",
            "clique",
            "sect",
            "school"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "俳",
        "on": [
            "ハイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "haiku",
            "actor"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "拝",
        "on": [
            "ハイ"
        ],
        "kun": [
            "おがむ",
            "おろがむ"
        ],
        "source": "",
        "meanings": [
            "worship",
            "adore",
            "pray to"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "背",
        "on": [
            "ハイ"
        ],
        "kun": [
            "せ",
            "せい",
            "そむく",
            "そむける"
        ],
        "source": "",
        "meanings": [
            "stature",
            "height",
            "back",
            "behind",
            "disobey",
            "defy",
            "go back on",
            "rebel"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "肺",
        "on": [
            "ハイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "lungs"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "班",
        "on": [
            "ハン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "squad",
            "corps",
            "unit",
            "group"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "晩",
        "on": [
            "バン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "nightfall",
            "night"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "否",
        "on": [
            "ヒ"
        ],
        "kun": [
            "いな",
            "いや"
        ],
        "source": "",
        "meanings": [
            "negate",
            "no",
            "noes",
            "refuse",
            "decline",
            "deny"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "批",
        "on": [
            "ヒ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "criticism",
            "strike"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "秘",
        "on": [
            "ヒ"
        ],
        "kun": [
            "ひめる",
            "ひそか",
            "かくす"
        ],
        "source": "",
        "meanings": [
            "secret",
            "conceal"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "腹",
        "on": [
            "フク"
        ],
        "kun": [
            "はら"
        ],
        "source": "",
        "meanings": [
            "abdomen",
            "belly",
            "stomach"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "奮",
        "on": [
            "フン"
        ],
        "kun": [
            "ふるう"
        ],
        "source": "",
        "meanings": [
            "stirred up",
            "be invigorated",
            "flourish"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "並",
        "on": [
            "ヘイ",
            "ホウ"
        ],
        "kun": [
            "なみ",
            "なみ",
            "ならべる",
            "ならぶ",
            "ならびに"
        ],
        "source": "",
        "meanings": [
            "row",
            "and",
            "besides",
            "as well as",
            "line up",
            "rank with",
            "rival",
            "equal"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "閉",
        "on": [
            "ヘイ"
        ],
        "kun": [
            "とじる",
            "とざす",
            "しめる",
            "しまる",
            "たてる"
        ],
        "source": "",
        "meanings": [
            "closed",
            "shut"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "陛",
        "on": [
            "ヘイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "highness",
            "steps (of throne)"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "片",
        "on": [
            "ヘン"
        ],
        "kun": [
            "かた",
            "かた"
        ],
        "source": "",
        "meanings": [
            "one-sided",
            "leaf",
            "sheet",
            "right-side kata radical (no. 91)"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "補",
        "on": [
            "ホ"
        ],
        "kun": [
            "おぎなう"
        ],
        "source": "",
        "meanings": [
            "supplement",
            "supply",
            "make good",
            "offset",
            "compensate",
            "assistant",
            "learner"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "暮",
        "on": [
            "ボ"
        ],
        "kun": [
            "くれる",
            "くらす"
        ],
        "source": "",
        "meanings": [
            "evening",
            "twilight",
            "season's end",
            "livelihood",
            "make a living",
            "spend time"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "宝",
        "on": [
            "ホウ"
        ],
        "kun": [
            "たから"
        ],
        "source": "",
        "meanings": [
            "treasure",
            "wealth",
            "valuables"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "訪",
        "on": [
            "ホウ"
        ],
        "kun": [
            "おとずれる",
            "たずねる",
            "とう"
        ],
        "source": "",
        "meanings": [
            "call on",
            "visit",
            "look up",
            "offer sympathy"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "亡",
        "on": [
            "ボウ",
            "モウ"
        ],
        "kun": [
            "ない",
            "なき",
            "ほろびる",
            "ほろぶ",
            "ほろぼす"
        ],
        "source": "",
        "meanings": [
            "deceased",
            "the late",
            "dying",
            "perish"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "忘",
        "on": [
            "ボウ"
        ],
        "kun": [
            "わすれる"
        ],
        "source": "",
        "meanings": [
            "forget"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "棒",
        "on": [
            "ボウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "rod",
            "stick",
            "cane",
            "pole",
            "club",
            "line"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "枚",
        "on": [
            "マイ",
            "バイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "sheet of...",
            "counter for flat thin objects or sheets"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "幕",
        "on": [
            "マク",
            "バク"
        ],
        "kun": [
            "とばり"
        ],
        "source": "",
        "meanings": [
            "curtain",
            "bunting",
            "act of play"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "密",
        "on": [
            "ミツ"
        ],
        "kun": [
            "ひそか"
        ],
        "source": "",
        "meanings": [
            "secrecy",
            "density (pop)",
            "minuteness",
            "carefulness"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "盟",
        "on": [
            "メイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "alliance",
            "oath"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "模",
        "on": [
            "モ",
            "ボ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "imitation",
            "copy",
            "mock"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "訳",
        "on": [
            "ヤク"
        ],
        "kun": [
            "わけ"
        ],
        "source": "",
        "meanings": [
            "translate",
            "reason",
            "circumstance",
            "case"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "優",
        "on": [
            "ユウ",
            "ウ"
        ],
        "kun": [
            "やさしい",
            "すぐれる",
            "まさる"
        ],
        "source": "",
        "meanings": [
            "tenderness",
            "excel",
            "surpass",
            "actor",
            "superiority",
            "gentleness"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "郵",
        "on": [
            "ユウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "mail",
            "stagecoach stop"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "幼",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "おさない"
        ],
        "source": "",
        "meanings": [
            "infancy",
            "childhood"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "欲",
        "on": [
            "ヨク"
        ],
        "kun": [
            "ほっする",
            "ほしい"
        ],
        "source": "",
        "meanings": [
            "longing",
            "covetousness",
            "greed",
            "passion",
            "desire",
            "craving"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "翌",
        "on": [
            "ヨク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "the following",
            "next"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "乱",
        "on": [
            "ラン",
            "ロン"
        ],
        "kun": [
            "みだれる",
            "みだる",
            "みだす",
            "みだ",
            "おさめる",
            "わたる"
        ],
        "source": "",
        "meanings": [
            "riot",
            "war",
            "disorder",
            "disturb"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "卵",
        "on": [
            "ラン"
        ],
        "kun": [
            "たまご"
        ],
        "source": "",
        "meanings": [
            "egg",
            "ovum",
            "spawn",
            "roe"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "覧",
        "on": [
            "ラン"
        ],
        "kun": [
            "みる"
        ],
        "source": "",
        "meanings": [
            "perusal",
            "see"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "裏",
        "on": [
            "リ"
        ],
        "kun": [
            "うら"
        ],
        "source": "",
        "meanings": [
            "back",
            "amidst",
            "in",
            "reverse",
            "inside",
            "palm",
            "sole",
            "rear",
            "lining",
            "wrong side"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "律",
        "on": [
            "リツ",
            "リチ",
            "レツ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "rhythm",
            "law",
            "regulation",
            "gauge",
            "control"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "臨",
        "on": [
            "リン"
        ],
        "kun": [
            "のぞむ"
        ],
        "source": "",
        "meanings": [
            "look to",
            "face",
            "meet",
            "confront",
            "attend",
            "call on"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "朗",
        "on": [
            "ロウ"
        ],
        "kun": [
            "ほがらか",
            "あきらか"
        ],
        "source": "",
        "meanings": [
            "melodious",
            "clear",
            "bright",
            "serene",
            "cheerful"
        ],
        "grade": 6,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "論",
        "on": [
            "ロン"
        ],
        "kun": [
            "あげつらう"
        ],
        "source": "",
        "meanings": [
            "argument",
            "discourse"
        ],
        "grade": 6,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "亜",
        "on": [
            "ア"
        ],
        "kun": [
            "つぐ"
        ],
        "source": "",
        "meanings": [
            "Asia",
            "rank next",
            "come after",
            "-ous"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "哀",
        "on": [
            "アイ"
        ],
        "kun": [
            "あわれ",
            "あわれむ",
            "かなしい"
        ],
        "source": "",
        "meanings": [
            "pathetic",
            "grief",
            "sorrow",
            "pathos",
            "pity",
            "sympathize"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "挨",
        "on": [
            "アイ"
        ],
        "kun": [
            "ひらく"
        ],
        "source": "",
        "meanings": [
            "approach",
            "draw near",
            "push open"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "握",
        "on": [
            "アク"
        ],
        "kun": [
            "にぎる"
        ],
        "source": "",
        "meanings": [
            "grip",
            "hold",
            "mould sushi",
            "bribe"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "扱",
        "on": [
            "ソウ",
            "キュウ"
        ],
        "kun": [
            "あつかい",
            "あつかう",
            "あつかる",
            "こく"
        ],
        "source": "",
        "meanings": [
            "handle",
            "entertain",
            "thresh",
            "strip"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "宛",
        "on": [
            "エン"
        ],
        "kun": [
            "あてる",
            "あて",
            "づつ",
            "あたかも"
        ],
        "source": "",
        "meanings": [
            "address",
            "just like",
            "fortunately"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "闇",
        "on": [
            "アン",
            "オン"
        ],
        "kun": [
            "やみ",
            "くらい"
        ],
        "source": "",
        "meanings": [
            "get dark",
            "gloom",
            "disorder"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "依",
        "on": [
            "イ",
            "エ"
        ],
        "kun": [
            "よる"
        ],
        "source": "",
        "meanings": [
            "reliant",
            "depend on",
            "consequently",
            "therefore",
            "due to"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "偉",
        "on": [
            "イ"
        ],
        "kun": [
            "えらい"
        ],
        "source": "",
        "meanings": [
            "admirable",
            "greatness",
            "remarkable",
            "conceited",
            "famous",
            "excellent"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "威",
        "on": [
            "イ"
        ],
        "kun": [
            "おどす",
            "おどし",
            "おどかす"
        ],
        "source": "",
        "meanings": [
            "intimidate",
            "dignity",
            "majesty",
            "menace",
            "threaten"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "尉",
        "on": [
            "イ",
            "ジョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "military officer",
            "jailer",
            "old man",
            "rank"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "慰",
        "on": [
            "イ"
        ],
        "kun": [
            "なぐさめる",
            "なぐさむ"
        ],
        "source": "",
        "meanings": [
            "consolation",
            "amusement",
            "seduce",
            "cheer",
            "make sport of",
            "comfort",
            "console"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "椅",
        "on": [
            "イ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "chair"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "為",
        "on": [
            "イ"
        ],
        "kun": [
            "ため",
            "なる",
            "なす",
            "する",
            "たり",
            "つくる",
            "なり"
        ],
        "source": "",
        "meanings": [
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
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "畏",
        "on": [
            "イ"
        ],
        "kun": [
            "おそれる",
            "かしこまる",
            "かしこ",
            "かしこし"
        ],
        "source": "",
        "meanings": [
            "fear",
            "majestic",
            "graciously",
            "be apprehensive"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "維",
        "on": [
            "イ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "fiber",
            "tie",
            "rope"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "緯",
        "on": [
            "イ"
        ],
        "kun": [
            "よこいと",
            "ぬき"
        ],
        "source": "",
        "meanings": [
            "horizontal",
            "woof",
            "left & right",
            "(parallels of) latitude",
            "prediction"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "萎",
        "on": [
            "イ"
        ],
        "kun": [
            "な",
            "しおれる",
            "しなびる",
            "しぼむ",
            "なえる"
        ],
        "source": "",
        "meanings": [
            "wither",
            "droop",
            "lame"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "違",
        "on": [
            "イ"
        ],
        "kun": [
            "ちがう",
            "ちがい",
            "ちがえる",
            "ちがえる",
            "たがう",
            "たがえる"
        ],
        "source": "",
        "meanings": [
            "difference",
            "differ"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "壱",
        "on": [
            "イチ",
            "イツ"
        ],
        "kun": [
            "ひとつ"
        ],
        "source": "",
        "meanings": [
            "one (in documents)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "逸",
        "on": [
            "イツ"
        ],
        "kun": [
            "それる",
            "そらす",
            "はぐれる"
        ],
        "source": "",
        "meanings": [
            "deviate",
            "idleness",
            "leisure",
            "miss the mark",
            "evade",
            "elude",
            "parry",
            "diverge"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "稲",
        "on": [
            "トウ",
            "テ"
        ],
        "kun": [
            "いね",
            "いな"
        ],
        "source": "",
        "meanings": [
            "rice plant"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "芋",
        "on": [
            "ウ"
        ],
        "kun": [
            "いも"
        ],
        "source": "",
        "meanings": [
            "potato"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "咽",
        "on": [
            "イン",
            "エン",
            "エツ"
        ],
        "kun": [
            "むせぶ",
            "むせる",
            "のど",
            "のむ"
        ],
        "source": "",
        "meanings": [
            "throat",
            "choked",
            "smothered",
            "stuffy"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "姻",
        "on": [
            "イン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "matrimony",
            "marry"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "淫",
        "on": [
            "イン"
        ],
        "kun": [
            "ひたす",
            "ほしいまま",
            "みだら",
            "みだれる",
            "みだり"
        ],
        "source": "",
        "meanings": [
            "lewdness",
            "licentiousness"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "陰",
        "on": [
            "イン"
        ],
        "kun": [
            "かげ",
            "かげる"
        ],
        "source": "",
        "meanings": [
            "shade",
            "yin",
            "negative",
            "sex organs",
            "secret",
            "shadow"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "隠",
        "on": [
            "イン",
            "オン"
        ],
        "kun": [
            "かくす",
            "かくし",
            "かくれる",
            "かかす",
            "よる"
        ],
        "source": "",
        "meanings": [
            "conceal",
            "hide",
            "cover"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "韻",
        "on": [
            "イン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "rhyme",
            "elegance",
            "tone"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "臼",
        "on": [
            "キュウ",
            "グ"
        ],
        "kun": [
            "うす",
            "うすづく"
        ],
        "source": "",
        "meanings": [
            "mortar"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "渦",
        "on": [
            "カ"
        ],
        "kun": [
            "うず"
        ],
        "source": "",
        "meanings": [
            "whirlpool",
            "eddy",
            "vortex"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "唄",
        "on": [
            "バイ"
        ],
        "kun": [
            "うた",
            "うたう"
        ],
        "source": "",
        "meanings": [
            "song",
            "ballad"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "浦",
        "on": [
            "ホ"
        ],
        "kun": [
            "うら"
        ],
        "source": "",
        "meanings": [
            "bay",
            "creek",
            "inlet",
            "gulf",
            "beach",
            "seacoast"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "餌",
        "on": [
            "ジ",
            "ニ"
        ],
        "kun": [
            "え",
            "えば",
            "えさ",
            "もち"
        ],
        "source": "",
        "meanings": [
            "food",
            "bait",
            "prey",
            "tempting profit"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "影",
        "on": [
            "エイ"
        ],
        "kun": [
            "かげ"
        ],
        "source": "",
        "meanings": [
            "shadow",
            "silhouette",
            "phantom"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "詠",
        "on": [
            "エイ"
        ],
        "kun": [
            "よむ",
            "うたう"
        ],
        "source": "",
        "meanings": [
            "recitation",
            "poem",
            "song",
            "composing"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "鋭",
        "on": [
            "エイ"
        ],
        "kun": [
            "するどい"
        ],
        "source": "",
        "meanings": [
            "pointed",
            "sharpness",
            "edge",
            "weapon",
            "sharp",
            "violent"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "疫",
        "on": [
            "エキ",
            "ヤク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "epidemic"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "悦",
        "on": [
            "エツ"
        ],
        "kun": [
            "よろこぶ",
            "よろこばす"
        ],
        "source": "",
        "meanings": [
            "ecstasy",
            "joy",
            "rapture"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "謁",
        "on": [
            "エツ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "audience",
            "audience (with king)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "越",
        "on": [
            "エツ",
            "オツ"
        ],
        "kun": [
            "こす",
            "こす",
            "ごし",
            "こえる",
            "ごえ"
        ],
        "source": "",
        "meanings": [
            "surpass",
            "cross over",
            "move to",
            "exceed",
            "Vietnam"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "閲",
        "on": [
            "エツ"
        ],
        "kun": [
            "けみする"
        ],
        "source": "",
        "meanings": [
            "review",
            "inspection",
            "revision"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "宴",
        "on": [
            "エン"
        ],
        "kun": [
            "うたげ"
        ],
        "source": "",
        "meanings": [
            "banquet",
            "feast",
            "party"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "怨",
        "on": [
            "エン",
            "オン",
            "ウン"
        ],
        "kun": [
            "うらむ",
            "うらみ",
            "うらめしい"
        ],
        "source": "",
        "meanings": [
            "grudge",
            "show resentment",
            "be jealous"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "援",
        "on": [
            "エン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "abet",
            "help",
            "save"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "炎",
        "on": [
            "エン"
        ],
        "kun": [
            "ほのお"
        ],
        "source": "",
        "meanings": [
            "inflammation",
            "flame",
            "blaze"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "煙",
        "on": [
            "エン"
        ],
        "kun": [
            "けむる",
            "けむり",
            "けむい"
        ],
        "source": "",
        "meanings": [
            "smoke"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "猿",
        "on": [
            "エン"
        ],
        "kun": [
            "さる"
        ],
        "source": "",
        "meanings": [
            "monkey"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "縁",
        "on": [
            "エン",
            "ネン"
        ],
        "kun": [
            "ふち",
            "ふちどる",
            "ゆかり",
            "よすが",
            "へり",
            "えにし"
        ],
        "source": "",
        "meanings": [
            "affinity",
            "relation",
            "connection",
            "edge",
            "border",
            "verge",
            "brink"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "艶",
        "on": [
            "エン"
        ],
        "kun": [
            "つや",
            "なまめかしい",
            "あでやか",
            "つやめく",
            "なまめく"
        ],
        "source": "",
        "meanings": [
            "glossy",
            "luster",
            "glaze",
            "polish",
            "charm",
            "colorful",
            "captivating"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "鉛",
        "on": [
            "エン"
        ],
        "kun": [
            "なまり"
        ],
        "source": "",
        "meanings": [
            "lead"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "汚",
        "on": [
            "オ"
        ],
        "kun": [
            "けがす",
            "けがれる",
            "けがらわしい",
            "よごす",
            "よごれる",
            "きたない"
        ],
        "source": "",
        "meanings": [
            "dirty",
            "pollute",
            "disgrace",
            "rape",
            "defile"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "凹",
        "on": [
            "オウ"
        ],
        "kun": [
            "くぼむ",
            "へこむ",
            "ぼこ"
        ],
        "source": "",
        "meanings": [
            "concave",
            "hollow",
            "sunken"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "奥",
        "on": [
            "オウ"
        ],
        "kun": [
            "おく",
            "おくまる",
            "くま"
        ],
        "source": "",
        "meanings": [
            "heart",
            "interior"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "押",
        "on": [
            "オウ"
        ],
        "kun": [
            "おす",
            "おし",
            "おっ",
            "おさえる",
            "おさえる"
        ],
        "source": "",
        "meanings": [
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
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "旺",
        "on": [
            "オウ",
            "キョウ",
            "ゴウ"
        ],
        "kun": [
            "かがやき",
            "うつくしい",
            "さかん"
        ],
        "source": "",
        "meanings": [
            "flourishing",
            "successful",
            "beautiful",
            "vigorous"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "欧",
        "on": [
            "オウ"
        ],
        "kun": [
            "うたう",
            "はく"
        ],
        "source": "",
        "meanings": [
            "Europe"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "殴",
        "on": [
            "オウ"
        ],
        "kun": [
            "なぐる"
        ],
        "source": "",
        "meanings": [
            "assault",
            "hit",
            "beat",
            "thrash"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "翁",
        "on": [
            "オウ"
        ],
        "kun": [
            "おきな"
        ],
        "source": "",
        "meanings": [
            "venerable old man"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "憶",
        "on": [
            "オク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "recollection",
            "think",
            "remember"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "臆",
        "on": [
            "オク",
            "ヨク"
        ],
        "kun": [
            "むね",
            "おくする"
        ],
        "source": "",
        "meanings": [
            "timidity",
            "heart",
            "mind",
            "fear",
            "cowardly"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "乙",
        "on": [
            "オツ",
            "イツ"
        ],
        "kun": [
            "おと",
            "きのと"
        ],
        "source": "",
        "meanings": [
            "the latter",
            "duplicate",
            "strange",
            "witty",
            "fishhook radical (no. 5)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 1,
        "examples": [],
        "tags": []
    },
    {
        "name": "俺",
        "on": [
            "エン"
        ],
        "kun": [
            "おれ",
            "われ"
        ],
        "source": "",
        "meanings": [
            "I",
            "myself"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "卸",
        "on": [
            "シャ"
        ],
        "kun": [
            "おろす",
            "おろし",
            "おろし"
        ],
        "source": "",
        "meanings": [
            "wholesale"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "穏",
        "on": [
            "オン"
        ],
        "kun": [
            "おだやか"
        ],
        "source": "",
        "meanings": [
            "calm",
            "quiet",
            "moderation"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "佳",
        "on": [
            "カ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "excellent",
            "beautiful",
            "good",
            "pleasing",
            "skilled"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "嫁",
        "on": [
            "カ"
        ],
        "kun": [
            "よめ",
            "とつぐ",
            "いく",
            "ゆく"
        ],
        "source": "",
        "meanings": [
            "marry into",
            "bride"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "寡",
        "on": [
            "カ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "widow",
            "minority",
            "few"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "暇",
        "on": [
            "カ"
        ],
        "kun": [
            "ひま",
            "いとま"
        ],
        "source": "",
        "meanings": [
            "spare time",
            "rest",
            "leisure",
            "time",
            "leave of absence"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "架",
        "on": [
            "カ"
        ],
        "kun": [
            "かける",
            "かかる"
        ],
        "source": "",
        "meanings": [
            "erect",
            "frame",
            "mount",
            "support",
            "shelf",
            "construct"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "禍",
        "on": [
            "カ"
        ],
        "kun": [
            "わざわい"
        ],
        "source": "",
        "meanings": [
            "calamity",
            "misfortune",
            "evil",
            "curse"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "稼",
        "on": [
            "カ"
        ],
        "kun": [
            "かせぐ"
        ],
        "source": "",
        "meanings": [
            "earnings",
            "work",
            "earn money"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "箇",
        "on": [
            "カ",
            "コ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "counter for articles"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "苛",
        "on": [
            "カ"
        ],
        "kun": [
            "いじめる",
            "さいなむ",
            "いらだつ",
            "からい",
            "こまかい"
        ],
        "source": "",
        "meanings": [
            "torment",
            "scold",
            "chastise"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "華",
        "on": [
            "カ",
            "ケ"
        ],
        "kun": [
            "はな"
        ],
        "source": "",
        "meanings": [
            "splendor",
            "flower",
            "petal",
            "shine",
            "luster",
            "ostentatious",
            "showy",
            "gay",
            "gorgeous"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "菓",
        "on": [
            "カ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "candy",
            "cakes",
            "fruit"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "蚊",
        "on": [
            "ブン"
        ],
        "kun": [
            "か"
        ],
        "source": "",
        "meanings": [
            "mosquito"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "牙",
        "on": [
            "ガ",
            "ゲ"
        ],
        "kun": [
            "きば",
            "は"
        ],
        "source": "",
        "meanings": [
            "tusk",
            "fang",
            "tusk radical (no. 92)"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "雅",
        "on": [
            "ガ"
        ],
        "kun": [
            "みやび"
        ],
        "source": "",
        "meanings": [
            "gracious",
            "elegant",
            "graceful",
            "refined"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "餓",
        "on": [
            "ガ"
        ],
        "kun": [
            "うえる"
        ],
        "source": "",
        "meanings": [
            "starve",
            "hungry",
            "thirst"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "介",
        "on": [
            "カイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "jammed in",
            "shellfish",
            "mediate",
            "concern oneself with"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "塊",
        "on": [
            "カイ",
            "ケ"
        ],
        "kun": [
            "かたまり",
            "つちくれ"
        ],
        "source": "",
        "meanings": [
            "clod",
            "lump",
            "chunk",
            "clot",
            "mass"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "壊",
        "on": [
            "カイ",
            "エ"
        ],
        "kun": [
            "こわす",
            "こわれる",
            "やぶる"
        ],
        "source": "",
        "meanings": [
            "demolition",
            "break",
            "destroy"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "怪",
        "on": [
            "カイ",
            "ケ"
        ],
        "kun": [
            "あやしい",
            "あやしむ"
        ],
        "source": "",
        "meanings": [
            "suspicious",
            "mystery",
            "apparition"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "悔",
        "on": [
            "カイ"
        ],
        "kun": [
            "くいる",
            "くやむ",
            "くやしい"
        ],
        "source": "",
        "meanings": [
            "repent",
            "regret"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "懐",
        "on": [
            "カイ",
            "エ"
        ],
        "kun": [
            "ふところ",
            "なつかしい",
            "なつかしむ",
            "なつく",
            "なつける",
            "なずける",
            "いだく",
            "おもう"
        ],
        "source": "",
        "meanings": [
            "pocket",
            "feelings",
            "heart",
            "yearn",
            "miss someone",
            "become attached to",
            "bosom",
            "breast"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "戒",
        "on": [
            "カイ"
        ],
        "kun": [
            "いましめる"
        ],
        "source": "",
        "meanings": [
            "commandment"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "拐",
        "on": [
            "カイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "kidnap",
            "falsify"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "皆",
        "on": [
            "カイ"
        ],
        "kun": [
            "みな",
            "みんな"
        ],
        "source": "",
        "meanings": [
            "all",
            "everything"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "劾",
        "on": [
            "ガイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "censure",
            "criminal investigation"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "崖",
        "on": [
            "ガイ",
            "ゲ",
            "ギ"
        ],
        "kun": [
            "がけ",
            "きし",
            "はて"
        ],
        "source": "",
        "meanings": [
            "cliff",
            "bluff",
            "precipice"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "慨",
        "on": [
            "ガイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "rue",
            "be sad",
            "sigh",
            "lament"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "概",
        "on": [
            "ガイ"
        ],
        "kun": [
            "おおむね"
        ],
        "source": "",
        "meanings": [
            "outline",
            "condition",
            "approximation",
            "generally"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "涯",
        "on": [
            "ガイ"
        ],
        "kun": [
            "はて"
        ],
        "source": "",
        "meanings": [
            "horizon",
            "shore",
            "limit",
            "bound"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "蓋",
        "on": [
            "ガイ",
            "カイ",
            "コウ"
        ],
        "kun": [
            "ふた",
            "けだし",
            "おおう",
            "かさ",
            "かこう"
        ],
        "source": "",
        "meanings": [
            "cover",
            "lid",
            "flap"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "該",
        "on": [
            "ガイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "above-stated",
            "the said",
            "that specific"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "骸",
        "on": [
            "ガイ",
            "カイ"
        ],
        "kun": [
            "むくろ"
        ],
        "source": "",
        "meanings": [
            "bone",
            "body",
            "corpse"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "垣",
        "on": [
            "エン"
        ],
        "kun": [
            "かき"
        ],
        "source": "",
        "meanings": [
            "hedge",
            "fence",
            "wall"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "柿",
        "on": [
            "シ"
        ],
        "kun": [
            "かき"
        ],
        "source": "",
        "meanings": [
            "persimmon"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "嚇",
        "on": [
            "カク"
        ],
        "kun": [
            "おどす"
        ],
        "source": "",
        "meanings": [
            "menacing",
            "dignity",
            "majesty",
            "threaten"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "核",
        "on": [
            "カク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "nucleus",
            "core",
            "kernel"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "殻",
        "on": [
            "カク",
            "コク",
            "バイ"
        ],
        "kun": [
            "から",
            "がら"
        ],
        "source": "",
        "meanings": [
            "husk",
            "nut shell"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "獲",
        "on": [
            "カク"
        ],
        "kun": [
            "える"
        ],
        "source": "",
        "meanings": [
            "seize",
            "get",
            "find",
            "earn",
            "acquire",
            "can",
            "may",
            "able to"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "穫",
        "on": [
            "カク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "harvest",
            "reap"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "較",
        "on": [
            "カク",
            "コウ"
        ],
        "kun": [
            "くらべる"
        ],
        "source": "",
        "meanings": [
            "contrast",
            "compare"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "郭",
        "on": [
            "カク"
        ],
        "kun": [
            "くるわ"
        ],
        "source": "",
        "meanings": [
            "enclosure",
            "quarters",
            "fortification",
            "red-light district"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "隔",
        "on": [
            "カク"
        ],
        "kun": [
            "へだてる",
            "へだたる"
        ],
        "source": "",
        "meanings": [
            "isolate",
            "alternate",
            "distance",
            "separate",
            "gulf"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "岳",
        "on": [
            "ガク"
        ],
        "kun": [
            "たけ"
        ],
        "source": "",
        "meanings": [
            "point",
            "peak",
            "mountain"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "顎",
        "on": [
            "ガク"
        ],
        "kun": [
            "あご",
            "あぎと"
        ],
        "source": "",
        "meanings": [
            "jaw",
            "chin",
            "gill"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "掛",
        "on": [
            "カイ",
            "ケイ"
        ],
        "kun": [
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
        "source": "",
        "meanings": [
            "hang",
            "suspend",
            "depend",
            "arrive at",
            "tax",
            "pour"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "喝",
        "on": [
            "カツ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "hoarse",
            "scold"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "括",
        "on": [
            "カツ"
        ],
        "kun": [
            "くくる"
        ],
        "source": "",
        "meanings": [
            "fasten",
            "tie up",
            "arrest",
            "constrict"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "渇",
        "on": [
            "カツ"
        ],
        "kun": [
            "かわく"
        ],
        "source": "",
        "meanings": [
            "thirst",
            "dry up",
            "parch"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "滑",
        "on": [
            "カツ",
            "コツ"
        ],
        "kun": [
            "すべる",
            "なめらか"
        ],
        "source": "",
        "meanings": [
            "slippery",
            "slide",
            "slip",
            "fail exam"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "葛",
        "on": [
            "カツ",
            "カチ"
        ],
        "kun": [
            "つづら",
            "くず"
        ],
        "source": "",
        "meanings": [
            "arrowroot",
            "kudzu"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "褐",
        "on": [
            "カツ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "brown",
            "woollen kimono"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "轄",
        "on": [
            "カツ"
        ],
        "kun": [
            "くさび"
        ],
        "source": "",
        "meanings": [
            "control",
            "wedge"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "且",
        "on": [
            "ショ",
            "ソ",
            "ショウ"
        ],
        "kun": [
            "かつ"
        ],
        "source": "",
        "meanings": [
            "moreover",
            "also",
            "furthermore"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "釜",
        "on": [
            "フ"
        ],
        "kun": [
            "かま"
        ],
        "source": "",
        "meanings": [
            "kettle",
            "cauldron",
            "iron pot"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "鎌",
        "on": [
            "レン",
            "ケン"
        ],
        "kun": [
            "かま"
        ],
        "source": "",
        "meanings": [
            "sickle",
            "scythe",
            "trick"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "刈",
        "on": [
            "ガイ",
            "カイ"
        ],
        "kun": [
            "かる"
        ],
        "source": "",
        "meanings": [
            "reap",
            "cut",
            "clip",
            "trim",
            "prune"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "瓦",
        "on": [
            "ガ"
        ],
        "kun": [
            "かわら",
            "ぐらむ"
        ],
        "source": "",
        "meanings": [
            "tile",
            "gram"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "乾",
        "on": [
            "カン",
            "ケン"
        ],
        "kun": [
            "かわく",
            "かわかす",
            "ほす",
            "ひる",
            "いぬい"
        ],
        "source": "",
        "meanings": [
            "drought",
            "dry",
            "dessicate",
            "drink up",
            "heaven",
            "emperor"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "冠",
        "on": [
            "カン"
        ],
        "kun": [
            "かんむり"
        ],
        "source": "",
        "meanings": [
            "crown",
            "best",
            "peerless"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "勘",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "intuition",
            "perception",
            "check",
            "compare",
            "sixth sense"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "勧",
        "on": [
            "カン",
            "ケン"
        ],
        "kun": [
            "すすめる"
        ],
        "source": "",
        "meanings": [
            "persuade",
            "recommend",
            "advise",
            "encourage",
            "offer"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "喚",
        "on": [
            "カン"
        ],
        "kun": [
            "わめく"
        ],
        "source": "",
        "meanings": [
            "yell",
            "cry",
            "call",
            "scream",
            "summon"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "堪",
        "on": [
            "カン",
            "タン"
        ],
        "kun": [
            "たえる",
            "たまる",
            "こらえる",
            "こたえる"
        ],
        "source": "",
        "meanings": [
            "withstand",
            "endure",
            "support",
            "resist"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "寛",
        "on": [
            "カン"
        ],
        "kun": [
            "くつろぐ",
            "ひろい",
            "ゆるやか"
        ],
        "source": "",
        "meanings": [
            "tolerant",
            "leniency",
            "generosity",
            "relax",
            "feel at home",
            "be at ease",
            "broadminded"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "患",
        "on": [
            "カン"
        ],
        "kun": [
            "わずらう"
        ],
        "source": "",
        "meanings": [
            "afflicted",
            "disease",
            "suffer from",
            "be ill"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "憾",
        "on": [
            "カン"
        ],
        "kun": [
            "うらむ"
        ],
        "source": "",
        "meanings": [
            "remorse",
            "regret",
            "be sorry"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "換",
        "on": [
            "カン"
        ],
        "kun": [
            "かえる",
            "かえる",
            "かわる"
        ],
        "source": "",
        "meanings": [
            "interchange",
            "period",
            "change",
            "convert",
            "replace",
            "renew"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "敢",
        "on": [
            "カン"
        ],
        "kun": [
            "あえて",
            "あえない",
            "あえず"
        ],
        "source": "",
        "meanings": [
            "daring",
            "brave",
            "bold",
            "sad",
            "tragic",
            "pitiful"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "棺",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "coffin",
            "casket"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "款",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "goodwill",
            "article",
            "section",
            "friendship",
            "collusion"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "歓",
        "on": [
            "カン"
        ],
        "kun": [
            "よろこぶ"
        ],
        "source": "",
        "meanings": [
            "delight",
            "joy"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "汗",
        "on": [
            "カン"
        ],
        "kun": [
            "あせ"
        ],
        "source": "",
        "meanings": [
            "sweat",
            "perspire"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "環",
        "on": [
            "カン"
        ],
        "kun": [
            "わ"
        ],
        "source": "",
        "meanings": [
            "ring",
            "circle",
            "link",
            "wheel"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "甘",
        "on": [
            "カン"
        ],
        "kun": [
            "あまい",
            "あまえる",
            "あまやかす",
            "うまい"
        ],
        "source": "",
        "meanings": [
            "sweet",
            "coax",
            "pamper",
            "be content",
            "sugary"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "監",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "oversee",
            "official",
            "govt office",
            "rule",
            "administer"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "緩",
        "on": [
            "カン"
        ],
        "kun": [
            "ゆるい",
            "ゆるやか",
            "ゆるむ",
            "ゆるめる"
        ],
        "source": "",
        "meanings": [
            "slacken",
            "loosen",
            "relax",
            "lessen",
            "be moderate",
            "ease"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "缶",
        "on": [
            "カン"
        ],
        "kun": [
            "かま"
        ],
        "source": "",
        "meanings": [
            "tin can",
            "container",
            "jar radical (no. 121)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "肝",
        "on": [
            "カン"
        ],
        "kun": [
            "きも"
        ],
        "source": "",
        "meanings": [
            "liver",
            "pluck",
            "nerve",
            "chutzpah"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "艦",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "warship"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 21,
        "examples": [],
        "tags": []
    },
    {
        "name": "貫",
        "on": [
            "カン"
        ],
        "kun": [
            "つらぬく",
            "ぬく",
            "ぬき"
        ],
        "source": "",
        "meanings": [
            "pierce",
            "8 1/3lbs",
            "penetrate",
            "brace"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "還",
        "on": [
            "カン"
        ],
        "kun": [
            "かえる"
        ],
        "source": "",
        "meanings": [
            "send back",
            "return"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "鑑",
        "on": [
            "カン"
        ],
        "kun": [
            "かんがみる",
            "かがみ"
        ],
        "source": "",
        "meanings": [
            "specimen",
            "take warning from",
            "learn from"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 23,
        "examples": [],
        "tags": []
    },
    {
        "name": "閑",
        "on": [
            "カン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "leisure"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "陥",
        "on": [
            "カン"
        ],
        "kun": [
            "おちいる",
            "おとしいれる"
        ],
        "source": "",
        "meanings": [
            "collapse",
            "fall into",
            "cave in",
            "fall (castle)",
            "slide into"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "韓",
        "on": [
            "カン"
        ],
        "kun": [
            "から",
            "いげた"
        ],
        "source": "",
        "meanings": [
            "Korea"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "含",
        "on": [
            "ガン"
        ],
        "kun": [
            "ふくむ",
            "ふくめる"
        ],
        "source": "",
        "meanings": [
            "contain",
            "include",
            "hold in the mouth",
            "bear in mind",
            "understand",
            "cherish"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "玩",
        "on": [
            "ガン"
        ],
        "kun": [
            "もちあそぶ",
            "もてあそぶ"
        ],
        "source": "",
        "meanings": [
            "play",
            "take pleasure in",
            "trifle with",
            "make sport of"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "頑",
        "on": [
            "ガン"
        ],
        "kun": [
            "かたく"
        ],
        "source": "",
        "meanings": [
            "stubborn",
            "foolish",
            "firmly"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "企",
        "on": [
            "キ"
        ],
        "kun": [
            "くわだてる",
            "たくらむ"
        ],
        "source": "",
        "meanings": [
            "undertake",
            "scheme",
            "design",
            "attempt",
            "plan"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "伎",
        "on": [
            "ギ",
            "キ"
        ],
        "kun": [
            "わざ",
            "わざおぎ"
        ],
        "source": "",
        "meanings": [
            "deed",
            "skill"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "奇",
        "on": [
            "キ"
        ],
        "kun": [
            "くしき",
            "あやしい",
            "くし",
            "めずらしい"
        ],
        "source": "",
        "meanings": [
            "strange",
            "strangeness",
            "curiosity"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "幾",
        "on": [
            "キ"
        ],
        "kun": [
            "いく",
            "いくつ",
            "いくら"
        ],
        "source": "",
        "meanings": [
            "how many",
            "how much",
            "how far",
            "how long",
            "some",
            "several"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "忌",
        "on": [
            "キ"
        ],
        "kun": [
            "いむ",
            "いみ",
            "いまわしい"
        ],
        "source": "",
        "meanings": [
            "mourning",
            "abhor",
            "detestable",
            "death anniversary"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "既",
        "on": [
            "キ"
        ],
        "kun": [
            "すでに"
        ],
        "source": "",
        "meanings": [
            "previously",
            "already",
            "long ago"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "棋",
        "on": [
            "キ"
        ],
        "kun": [
            "ご"
        ],
        "source": "",
        "meanings": [
            "chess piece",
            "Japanese chess",
            "shogi"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "棄",
        "on": [
            "キ"
        ],
        "kun": [
            "すてる"
        ],
        "source": "",
        "meanings": [
            "abandon",
            "throw away",
            "discard",
            "resign",
            "reject",
            "sacrifice"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "畿",
        "on": [
            "キ"
        ],
        "kun": [
            "みやこ"
        ],
        "source": "",
        "meanings": [
            "capital",
            "suburbs of capital"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "祈",
        "on": [
            "キ"
        ],
        "kun": [
            "いのる"
        ],
        "source": "",
        "meanings": [
            "pray",
            "wish"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "軌",
        "on": [
            "キ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "rut",
            "wheel",
            "track",
            "model",
            "way of doing"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "輝",
        "on": [
            "キ"
        ],
        "kun": [
            "かがやく"
        ],
        "source": "",
        "meanings": [
            "radiance",
            "shine",
            "sparkle",
            "gleam",
            "twinkle"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "飢",
        "on": [
            "キ"
        ],
        "kun": [
            "うえる"
        ],
        "source": "",
        "meanings": [
            "hungry",
            "starve"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "騎",
        "on": [
            "キ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "equestrian",
            "riding on horses",
            "counter for equestrians"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "鬼",
        "on": [
            "キ"
        ],
        "kun": [
            "おに",
            "おに"
        ],
        "source": "",
        "meanings": [
            "ghost",
            "devil"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "亀",
        "on": [
            "キ",
            "キュウ",
            "キン"
        ],
        "kun": [
            "かめ"
        ],
        "source": "",
        "meanings": [
            "tortoise",
            "turtle"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "偽",
        "on": [
            "ギ",
            "カ"
        ],
        "kun": [
            "いつわる",
            "にせ",
            "いつわり"
        ],
        "source": "",
        "meanings": [
            "falsehood",
            "lie",
            "deceive",
            "pretend",
            "counterfeit",
            "forgery"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "儀",
        "on": [
            "ギ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "ceremony",
            "rule",
            "affair",
            "case",
            "a matter"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "宜",
        "on": [
            "ギ"
        ],
        "kun": [
            "よろしい",
            "よろしく"
        ],
        "source": "",
        "meanings": [
            "best regards",
            "good"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "戯",
        "on": [
            "ギ",
            "ゲ"
        ],
        "kun": [
            "たわむれる",
            "ざれる",
            "じゃれる"
        ],
        "source": "",
        "meanings": [
            "frolic",
            "play",
            "sport"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "擬",
        "on": [
            "ギ"
        ],
        "kun": [
            "まがい",
            "もどき"
        ],
        "source": "",
        "meanings": [
            "mimic",
            "aim (a gun) at",
            "nominate",
            "imitate"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "欺",
        "on": [
            "ギ"
        ],
        "kun": [
            "あざむく"
        ],
        "source": "",
        "meanings": [
            "deceit",
            "cheat",
            "delude"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "犠",
        "on": [
            "ギ",
            "キ"
        ],
        "kun": [
            "いけにえ"
        ],
        "source": "",
        "meanings": [
            "sacrifice"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "菊",
        "on": [
            "キク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "chrysanthemum"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "吉",
        "on": [
            "キチ",
            "キツ"
        ],
        "kun": [
            "よし"
        ],
        "source": "",
        "meanings": [
            "good luck",
            "joy",
            "congratulations"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "喫",
        "on": [
            "キツ"
        ],
        "kun": [
            "のむ"
        ],
        "source": "",
        "meanings": [
            "consume",
            "eat",
            "drink",
            "smoke",
            "receive (a blow)"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "詰",
        "on": [
            "キツ",
            "キチ"
        ],
        "kun": [
            "つめる",
            "つめ",
            "づめ",
            "つまる",
            "つむ"
        ],
        "source": "",
        "meanings": [
            "packed",
            "close",
            "pressed",
            "reprove",
            "rebuke",
            "blame"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "却",
        "on": [
            "キャク"
        ],
        "kun": [
            "かえって",
            "しりぞく",
            "しりぞける"
        ],
        "source": "",
        "meanings": [
            "instead",
            "on the contrary",
            "rather",
            "step back",
            "withdraw",
            "retreat"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "脚",
        "on": [
            "キャク",
            "キャ",
            "カク"
        ],
        "kun": [
            "あし"
        ],
        "source": "",
        "meanings": [
            "skids",
            "leg",
            "undercarriage",
            "lower part",
            "base"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "虐",
        "on": [
            "ギャク"
        ],
        "kun": [
            "しいたげる"
        ],
        "source": "",
        "meanings": [
            "tyrannize",
            "oppress"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "丘",
        "on": [
            "キュウ"
        ],
        "kun": [
            "おか"
        ],
        "source": "",
        "meanings": [
            "hill",
            "knoll"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "及",
        "on": [
            "キュウ"
        ],
        "kun": [
            "およぶ",
            "および",
            "および",
            "およぼす"
        ],
        "source": "",
        "meanings": [
            "reach out",
            "exert",
            "exercise",
            "cause"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "朽",
        "on": [
            "キュウ"
        ],
        "kun": [
            "くちる"
        ],
        "source": "",
        "meanings": [
            "decay",
            "rot",
            "remain in seclusion"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "窮",
        "on": [
            "キュウ",
            "キョウ"
        ],
        "kun": [
            "きわめる",
            "きわまる",
            "きわまり",
            "きわみ"
        ],
        "source": "",
        "meanings": [
            "hard up",
            "destitute",
            "suffer",
            "perplexed",
            "cornered"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "糾",
        "on": [
            "キュウ"
        ],
        "kun": [
            "ただす"
        ],
        "source": "",
        "meanings": [
            "twist",
            "ask",
            "investigate",
            "verify"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "巨",
        "on": [
            "キョ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "gigantic",
            "big",
            "large",
            "great"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "拒",
        "on": [
            "キョ",
            "ゴ"
        ],
        "kun": [
            "こばむ"
        ],
        "source": "",
        "meanings": [
            "repel",
            "refuse",
            "reject",
            "decline"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "拠",
        "on": [
            "キョ",
            "コ"
        ],
        "kun": [
            "よる"
        ],
        "source": "",
        "meanings": [
            "foothold",
            "based on",
            "follow",
            "therefore"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "虚",
        "on": [
            "キョ",
            "コ"
        ],
        "kun": [
            "むなしい",
            "うつろ"
        ],
        "source": "",
        "meanings": [
            "void",
            "emptiness",
            "unpreparedness",
            "crack",
            "fissure",
            "untruth"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "距",
        "on": [
            "キョ"
        ],
        "kun": [
            "へだたる",
            "けづめ"
        ],
        "source": "",
        "meanings": [
            "long-distance",
            "spur",
            "fetlock"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "享",
        "on": [
            "キョウ",
            "コウ"
        ],
        "kun": [
            "うける"
        ],
        "source": "",
        "meanings": [
            "enjoy",
            "receive",
            "undergo",
            "answer (phone)",
            "take",
            "get",
            "catch"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "凶",
        "on": [
            "キョウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "villain",
            "evil",
            "bad luck",
            "disaster"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "叫",
        "on": [
            "キョウ"
        ],
        "kun": [
            "さけぶ"
        ],
        "source": "",
        "meanings": [
            "shout",
            "exclaim",
            "yell"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "峡",
        "on": [
            "キョウ",
            "コウ"
        ],
        "kun": [
            "はざま"
        ],
        "source": "",
        "meanings": [
            "gorge",
            "ravine"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "恐",
        "on": [
            "キョウ"
        ],
        "kun": [
            "おそれる",
            "おそる",
            "おそろしい",
            "こわい",
            "こわがる"
        ],
        "source": "",
        "meanings": [
            "fear",
            "dread",
            "awe"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "恭",
        "on": [
            "キョウ"
        ],
        "kun": [
            "うやうやしい"
        ],
        "source": "",
        "meanings": [
            "respect",
            "reverent"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "挟",
        "on": [
            "キョウ",
            "ショウ"
        ],
        "kun": [
            "はさむ",
            "はさまる",
            "わきばさむ",
            "さしはさむ"
        ],
        "source": "",
        "meanings": [
            "pinch",
            "between"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "況",
        "on": [
            "キョウ"
        ],
        "kun": [
            "まして",
            "いわんや",
            "おもむき"
        ],
        "source": "",
        "meanings": [
            "condition",
            "situation"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "狂",
        "on": [
            "キョウ"
        ],
        "kun": [
            "くるう",
            "くるおしい",
            "くるおしい"
        ],
        "source": "",
        "meanings": [
            "lunatic",
            "insane",
            "crazy",
            "confuse"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "狭",
        "on": [
            "キョウ",
            "コウ"
        ],
        "kun": [
            "せまい",
            "せばめる",
            "せばまる",
            "さ"
        ],
        "source": "",
        "meanings": [
            "cramped",
            "narrow",
            "contract",
            "tight"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "矯",
        "on": [
            "キョウ"
        ],
        "kun": [
            "ためる"
        ],
        "source": "",
        "meanings": [
            "rectify",
            "straighten",
            "correct",
            "reform",
            "cure",
            "control",
            "pretend",
            "falsify"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "脅",
        "on": [
            "キョウ"
        ],
        "kun": [
            "おびやかす",
            "おどす",
            "おどかす"
        ],
        "source": "",
        "meanings": [
            "threaten",
            "coerce"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "響",
        "on": [
            "キョウ"
        ],
        "kun": [
            "ひびく"
        ],
        "source": "",
        "meanings": [
            "echo",
            "sound",
            "resound",
            "ring",
            "vibrate"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 20,
        "examples": [],
        "tags": []
    },
    {
        "name": "驚",
        "on": [
            "キョウ"
        ],
        "kun": [
            "おどろく",
            "おどろかす"
        ],
        "source": "",
        "meanings": [
            "wonder",
            "be surprised",
            "frightened",
            "amazed"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 22,
        "examples": [],
        "tags": []
    },
    {
        "name": "仰",
        "on": [
            "ギョウ",
            "コウ"
        ],
        "kun": [
            "あおぐ",
            "おおせ",
            "おっしゃる",
            "おっしゃる"
        ],
        "source": "",
        "meanings": [
            "face-up",
            "look up",
            "depend",
            "seek",
            "respect",
            "revere",
            "drink",
            "take"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "凝",
        "on": [
            "ギョウ"
        ],
        "kun": [
            "こる",
            "こらす",
            "こごらす",
            "こごらせる",
            "こごる"
        ],
        "source": "",
        "meanings": [
            "congeal",
            "freeze",
            "stiff",
            "be absorbed in"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "暁",
        "on": [
            "ギョウ",
            "キョウ"
        ],
        "kun": [
            "あかつき",
            "さとる"
        ],
        "source": "",
        "meanings": [
            "daybreak",
            "dawn",
            "in the event"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "僅",
        "on": [
            "キン",
            "ゴン"
        ],
        "kun": [
            "わずか"
        ],
        "source": "",
        "meanings": [
            "a wee bit"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "巾",
        "on": [
            "キン",
            "フク"
        ],
        "kun": [
            "おおい",
            "ちきり",
            "きれ"
        ],
        "source": "",
        "meanings": [
            "towel",
            "hanging scroll",
            "width",
            "cloth radical (no. 50)"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "錦",
        "on": [
            "キン"
        ],
        "kun": [
            "にしき"
        ],
        "source": "",
        "meanings": [
            "brocade",
            "fine dress",
            "honors"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "斤",
        "on": [
            "キン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "axe",
            "1.32 lb",
            "catty",
            "counter for loaves of bread",
            "axe radical (no. 69)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "琴",
        "on": [
            "キン",
            "ゴン"
        ],
        "kun": [
            "こと"
        ],
        "source": "",
        "meanings": [
            "harp",
            "koto"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "緊",
        "on": [
            "キン"
        ],
        "kun": [
            "しめる",
            "しまる"
        ],
        "source": "",
        "meanings": [
            "tense",
            "solid",
            "hard",
            "reliable",
            "tight"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "菌",
        "on": [
            "キン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "germ",
            "fungus",
            "bacteria"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "襟",
        "on": [
            "キン"
        ],
        "kun": [
            "えり"
        ],
        "source": "",
        "meanings": [
            "collar",
            "neck",
            "lapel",
            "one's inner feelings"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "謹",
        "on": [
            "キン"
        ],
        "kun": [
            "つつしむ"
        ],
        "source": "",
        "meanings": [
            "discreet",
            "reverently",
            "humbly"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "吟",
        "on": [
            "ギン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "versify",
            "singing",
            "recital"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "駆",
        "on": [
            "ク"
        ],
        "kun": [
            "かける",
            "かる"
        ],
        "source": "",
        "meanings": [
            "drive",
            "run",
            "gallop",
            "advance",
            "inspire",
            "impel"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "駒",
        "on": [
            "ク"
        ],
        "kun": [
            "こま"
        ],
        "source": "",
        "meanings": [
            "pony",
            "horse",
            "colt"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "愚",
        "on": [
            "グ"
        ],
        "kun": [
            "おろか"
        ],
        "source": "",
        "meanings": [
            "foolish",
            "folly",
            "absurdity",
            "stupid"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "虞",
        "on": [
            "グ"
        ],
        "kun": [
            "おそれ",
            "おもんぱかる",
            "はかる",
            "うれえる",
            "あざむく",
            "あやまる",
            "のぞむ",
            "たのしむ"
        ],
        "source": "",
        "meanings": [
            "fear",
            "uneasiness",
            "anxiety",
            "concern",
            "expectation",
            "consideration"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "偶",
        "on": [
            "グウ"
        ],
        "kun": [
            "たま"
        ],
        "source": "",
        "meanings": [
            "accidentally",
            "even number",
            "couple",
            "man & wife",
            "same kind"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "遇",
        "on": [
            "グウ"
        ],
        "kun": [
            "あう"
        ],
        "source": "",
        "meanings": [
            "meet",
            "encounter",
            "interview",
            "treat",
            "entertain",
            "receive",
            "deal with"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "隅",
        "on": [
            "グウ"
        ],
        "kun": [
            "すみ"
        ],
        "source": "",
        "meanings": [
            "corner",
            "nook"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "串",
        "on": [
            "カン",
            "ケン",
            "セン"
        ],
        "kun": [
            "くし",
            "つらぬく"
        ],
        "source": "",
        "meanings": [
            "spit",
            "skewer"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "屈",
        "on": [
            "クツ"
        ],
        "kun": [
            "かがむ",
            "かがめる"
        ],
        "source": "",
        "meanings": [
            "yield",
            "bend",
            "flinch",
            "submit"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "掘",
        "on": [
            "クツ"
        ],
        "kun": [
            "ほる"
        ],
        "source": "",
        "meanings": [
            "dig",
            "delve",
            "excavate"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "窟",
        "on": [
            "クツ",
            "コツ"
        ],
        "kun": [
            "いわや",
            "いはや",
            "あな"
        ],
        "source": "",
        "meanings": [
            "cavern"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "靴",
        "on": [
            "カ"
        ],
        "kun": [
            "くつ"
        ],
        "source": "",
        "meanings": [
            "shoes"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "繰",
        "on": [
            "ソウ"
        ],
        "kun": [
            "くる"
        ],
        "source": "",
        "meanings": [
            "winding",
            "reel",
            "spin",
            "turn (pages)",
            "look up",
            "refer to"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "桑",
        "on": [
            "ソウ"
        ],
        "kun": [
            "くわ"
        ],
        "source": "",
        "meanings": [
            "mulberry"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "勲",
        "on": [
            "クン"
        ],
        "kun": [
            "いさお"
        ],
        "source": "",
        "meanings": [
            "meritorious deed",
            "merit"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "薫",
        "on": [
            "クン"
        ],
        "kun": [
            "かおる"
        ],
        "source": "",
        "meanings": [
            "send forth fragrance",
            "fragrant",
            "be scented",
            "smoke (tobacco)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "傾",
        "on": [
            "ケイ"
        ],
        "kun": [
            "かたむく",
            "かたむける",
            "かたぶく",
            "かたげる",
            "かしげる"
        ],
        "source": "",
        "meanings": [
            "lean",
            "incline",
            "tilt",
            "trend",
            "wane",
            "sink",
            "ruin",
            "bias"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "刑",
        "on": [
            "ケイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "punish",
            "penalty",
            "sentence",
            "punishment"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "啓",
        "on": [
            "ケイ"
        ],
        "kun": [
            "ひらく",
            "さとす"
        ],
        "source": "",
        "meanings": [
            "disclose",
            "open",
            "say"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "契",
        "on": [
            "ケイ"
        ],
        "kun": [
            "ちぎる"
        ],
        "source": "",
        "meanings": [
            "pledge",
            "promise",
            "vow"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "恵",
        "on": [
            "ケイ",
            "エ"
        ],
        "kun": [
            "めぐむ",
            "めぐみ"
        ],
        "source": "",
        "meanings": [
            "favor",
            "blessing",
            "grace",
            "kindness"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "慶",
        "on": [
            "ケイ"
        ],
        "kun": [
            "よろこび"
        ],
        "source": "",
        "meanings": [
            "jubilation",
            "congratulate",
            "rejoice",
            "be happy"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "憩",
        "on": [
            "ケイ"
        ],
        "kun": [
            "いこい",
            "いこう"
        ],
        "source": "",
        "meanings": [
            "recess",
            "rest",
            "relax",
            "repose"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "掲",
        "on": [
            "ケイ"
        ],
        "kun": [
            "かかげる"
        ],
        "source": "",
        "meanings": [
            "put up (a notice)",
            "put up",
            "hoist",
            "display",
            "hang out",
            "publish",
            "describe"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "携",
        "on": [
            "ケイ"
        ],
        "kun": [
            "たずさえる",
            "たずさわる"
        ],
        "source": "",
        "meanings": [
            "portable",
            "carry (in hand)",
            "armed with",
            "bring along"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "渓",
        "on": [
            "ケイ"
        ],
        "kun": [
            "たに",
            "たにがわ"
        ],
        "source": "",
        "meanings": [
            "mountain stream",
            "valley"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "稽",
        "on": [
            "ケイ"
        ],
        "kun": [
            "かんがえる",
            "とどめる"
        ],
        "source": "",
        "meanings": [
            "think",
            "consider"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "継",
        "on": [
            "ケイ"
        ],
        "kun": [
            "つぐ",
            "まま"
        ],
        "source": "",
        "meanings": [
            "inherit",
            "succeed",
            "continue",
            "patch",
            "graft (tree)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "茎",
        "on": [
            "ケイ",
            "キョウ"
        ],
        "kun": [
            "くき"
        ],
        "source": "",
        "meanings": [
            "stalk",
            "stem"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "蛍",
        "on": [
            "ケイ"
        ],
        "kun": [
            "ほたる"
        ],
        "source": "",
        "meanings": [
            "lightning-bug",
            "firefly"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "詣",
        "on": [
            "ケイ",
            "ゲイ"
        ],
        "kun": [
            "けいする",
            "まいる",
            "いたる",
            "もうでる"
        ],
        "source": "",
        "meanings": [
            "visit a temple",
            "arrive",
            "attain"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "鶏",
        "on": [
            "ケイ"
        ],
        "kun": [
            "にわとり",
            "とり"
        ],
        "source": "",
        "meanings": [
            "chicken"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "迎",
        "on": [
            "ゲイ"
        ],
        "kun": [
            "むかえる"
        ],
        "source": "",
        "meanings": [
            "welcome",
            "meet",
            "greet"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "鯨",
        "on": [
            "ゲイ"
        ],
        "kun": [
            "くじら"
        ],
        "source": "",
        "meanings": [
            "whale"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 19,
        "examples": [],
        "tags": []
    },
    {
        "name": "撃",
        "on": [
            "ゲキ"
        ],
        "kun": [
            "うつ"
        ],
        "source": "",
        "meanings": [
            "beat",
            "attack",
            "defeat",
            "conquer"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "隙",
        "on": [
            "ゲキ",
            "キャク",
            "ケキ"
        ],
        "kun": [
            "すき",
            "すく",
            "すかす",
            "ひま"
        ],
        "source": "",
        "meanings": [
            "crevice",
            "fissure",
            "discord",
            "opportunity",
            "leisure"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "桁",
        "on": [
            "コウ"
        ],
        "kun": [
            "けた"
        ],
        "source": "",
        "meanings": [
            "beam",
            "girder",
            "spar",
            "unit or column (accounting)"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "傑",
        "on": [
            "ケツ"
        ],
        "kun": [
            "すぐれる"
        ],
        "source": "",
        "meanings": [
            "greatness",
            "excellence"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "倹",
        "on": [
            "ケン"
        ],
        "kun": [
            "つましい",
            "つづまやか"
        ],
        "source": "",
        "meanings": [
            "frugal",
            "economy",
            "thrifty"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "兼",
        "on": [
            "ケン"
        ],
        "kun": [
            "かねる",
            "かねる"
        ],
        "source": "",
        "meanings": [
            "concurrently",
            "and",
            "beforehand",
            "in advance"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "剣",
        "on": [
            "ケン"
        ],
        "kun": [
            "つるぎ"
        ],
        "source": "",
        "meanings": [
            "sabre",
            "sword",
            "blade",
            "clock hand"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "圏",
        "on": [
            "ケン"
        ],
        "kun": [
            "かこい"
        ],
        "source": "",
        "meanings": [
            "sphere",
            "circle",
            "radius",
            "range"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "堅",
        "on": [
            "ケン"
        ],
        "kun": [
            "かたい",
            "がたい"
        ],
        "source": "",
        "meanings": [
            "strict",
            "hard",
            "solid",
            "tough",
            "tight",
            "reliable"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "嫌",
        "on": [
            "ケン",
            "ゲン"
        ],
        "kun": [
            "きらう",
            "きらい",
            "いや"
        ],
        "source": "",
        "meanings": [
            "dislike",
            "detest",
            "hate"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "懸",
        "on": [
            "ケン",
            "ケ"
        ],
        "kun": [
            "かける",
            "かかる"
        ],
        "source": "",
        "meanings": [
            "state of suspension",
            "hang",
            "depend",
            "consult",
            "distant",
            "far apart"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 20,
        "examples": [],
        "tags": []
    },
    {
        "name": "拳",
        "on": [
            "ケン",
            "ゲン"
        ],
        "kun": [
            "こぶし"
        ],
        "source": "",
        "meanings": [
            "fist"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "献",
        "on": [
            "ケン",
            "コン"
        ],
        "kun": [
            "たてまつる"
        ],
        "source": "",
        "meanings": [
            "offering",
            "counter for drinks",
            "present",
            "offer"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "肩",
        "on": [
            "ケン"
        ],
        "kun": [
            "かた"
        ],
        "source": "",
        "meanings": [
            "shoulder"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "謙",
        "on": [
            "ケン"
        ],
        "kun": [
            "へりくだる"
        ],
        "source": "",
        "meanings": [
            "self-effacing",
            "humble oneself",
            "condescend",
            "be modest"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "賢",
        "on": [
            "ケン"
        ],
        "kun": [
            "かしこい"
        ],
        "source": "",
        "meanings": [
            "intelligent",
            "wise",
            "wisdom",
            "cleverness"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "軒",
        "on": [
            "ケン"
        ],
        "kun": [
            "のき"
        ],
        "source": "",
        "meanings": [
            "flats",
            "counter for houses",
            "eaves"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "遣",
        "on": [
            "ケン"
        ],
        "kun": [
            "つかう",
            "つかい",
            "づかい",
            "つかわす",
            "やる"
        ],
        "source": "",
        "meanings": [
            "dispatch",
            "despatch",
            "send",
            "give",
            "donate",
            "do",
            "undertake"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "鍵",
        "on": [
            "ケン"
        ],
        "kun": [
            "かぎ"
        ],
        "source": "",
        "meanings": [
            "key"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "顕",
        "on": [
            "ケン"
        ],
        "kun": [
            "あきらか",
            "あらわれる"
        ],
        "source": "",
        "meanings": [
            "appear",
            "existing"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "幻",
        "on": [
            "ゲン"
        ],
        "kun": [
            "まぼろし"
        ],
        "source": "",
        "meanings": [
            "phantasm",
            "vision",
            "dream",
            "illusion",
            "apparition"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "弦",
        "on": [
            "ゲン"
        ],
        "kun": [
            "つる"
        ],
        "source": "",
        "meanings": [
            "bowstring",
            "chord",
            "hypotenuse"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "玄",
        "on": [
            "ゲン"
        ],
        "kun": [
            "くろ",
            "くろい"
        ],
        "source": "",
        "meanings": [
            "mysterious",
            "occultness",
            "black",
            "deep",
            "profound"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "舷",
        "on": [
            "ゲン"
        ],
        "kun": [
            "ふなばた",
            "ふなべり"
        ],
        "source": "",
        "meanings": [
            "gunwale"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "孤",
        "on": [
            "コ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "orphan",
            "alone"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "弧",
        "on": [
            "コ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "arc",
            "arch",
            "bow"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "枯",
        "on": [
            "コ"
        ],
        "kun": [
            "かれる",
            "からす"
        ],
        "source": "",
        "meanings": [
            "wither",
            "die",
            "dry up",
            "be seasoned"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "股",
        "on": [
            "コ"
        ],
        "kun": [
            "また",
            "もも"
        ],
        "source": "",
        "meanings": [
            "thigh",
            "crotch"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "虎",
        "on": [
            "コ"
        ],
        "kun": [
            "とら"
        ],
        "source": "",
        "meanings": [
            "tiger",
            "drunkard"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "誇",
        "on": [
            "コ"
        ],
        "kun": [
            "ほこる"
        ],
        "source": "",
        "meanings": [
            "boast",
            "be proud",
            "pride",
            "triumphantly"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "雇",
        "on": [
            "コ"
        ],
        "kun": [
            "やとう"
        ],
        "source": "",
        "meanings": [
            "employ",
            "hire"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "顧",
        "on": [
            "コ"
        ],
        "kun": [
            "かえりみる"
        ],
        "source": "",
        "meanings": [
            "look back",
            "review",
            "examine oneself",
            "turn around"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 21,
        "examples": [],
        "tags": []
    },
    {
        "name": "鼓",
        "on": [
            "コ"
        ],
        "kun": [
            "つづみ"
        ],
        "source": "",
        "meanings": [
            "drum",
            "beat",
            "rouse",
            "muster"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "互",
        "on": [
            "ゴ"
        ],
        "kun": [
            "たがい",
            "かたみに"
        ],
        "source": "",
        "meanings": [
            "mutually",
            "reciprocally",
            "together"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "呉",
        "on": [
            "ゴ"
        ],
        "kun": [
            "くれる",
            "くれ"
        ],
        "source": "",
        "meanings": [
            "give",
            "do something for",
            "kingdom of Wu"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "娯",
        "on": [
            "ゴ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "recreation",
            "pleasure"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "御",
        "on": [
            "ギョ",
            "ゴ"
        ],
        "kun": [
            "おん",
            "お",
            "み"
        ],
        "source": "",
        "meanings": [
            "honorable",
            "manipulate",
            "govern"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "悟",
        "on": [
            "ゴ"
        ],
        "kun": [
            "さとる"
        ],
        "source": "",
        "meanings": [
            "enlightenment",
            "perceive",
            "discern",
            "realize",
            "understand"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "碁",
        "on": [
            "ゴ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "Go"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "乞",
        "on": [
            "コツ",
            "キツ",
            "キ",
            "キケ",
            "コチ"
        ],
        "kun": [
            "こう"
        ],
        "source": "",
        "meanings": [
            "beg",
            "invite",
            "ask"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 3,
        "examples": [],
        "tags": []
    },
    {
        "name": "侯",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "marquis",
            "lord",
            "daimyo"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "勾",
        "on": [
            "コウ",
            "ク"
        ],
        "kun": [
            "かぎ",
            "まがる"
        ],
        "source": "",
        "meanings": [
            "be bent",
            "slope",
            "capture"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "喉",
        "on": [
            "コウ"
        ],
        "kun": [
            "のど"
        ],
        "source": "",
        "meanings": [
            "throat",
            "voice"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "坑",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "pit",
            "hole"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "孔",
        "on": [
            "コウ",
            "ク"
        ],
        "kun": [
            "あな"
        ],
        "source": "",
        "meanings": [
            "cavity",
            "hole",
            "slit",
            "very",
            "great",
            "exceedingly"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "巧",
        "on": [
            "コウ"
        ],
        "kun": [
            "たくみ",
            "たくむ",
            "うまい"
        ],
        "source": "",
        "meanings": [
            "adroit",
            "skilled",
            "ingenuity"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "恒",
        "on": [
            "コウ"
        ],
        "kun": [
            "つね",
            "つねに"
        ],
        "source": "",
        "meanings": [
            "constancy",
            "always"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "慌",
        "on": [
            "コウ"
        ],
        "kun": [
            "あわてる",
            "あわただしい"
        ],
        "source": "",
        "meanings": [
            "disconcerted",
            "be confused",
            "lose one's head"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "抗",
        "on": [
            "コウ"
        ],
        "kun": [
            "あらがう"
        ],
        "source": "",
        "meanings": [
            "confront",
            "resist",
            "defy",
            "oppose"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "拘",
        "on": [
            "コウ"
        ],
        "kun": [
            "かかわる"
        ],
        "source": "",
        "meanings": [
            "arrest",
            "seize",
            "concerned",
            "adhere to",
            "despite"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "控",
        "on": [
            "コウ"
        ],
        "kun": [
            "ひかえる",
            "ひかえ"
        ],
        "source": "",
        "meanings": [
            "withdraw",
            "draw in",
            "hold back",
            "refrain from",
            "be moderate"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "攻",
        "on": [
            "コウ"
        ],
        "kun": [
            "せめる"
        ],
        "source": "",
        "meanings": [
            "aggression",
            "attack",
            "criticize",
            "polish"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "更",
        "on": [
            "コウ"
        ],
        "kun": [
            "さら",
            "さらに",
            "ふける",
            "ふかす"
        ],
        "source": "",
        "meanings": [
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
        "grade": 8,
        "jlpt": 2,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "梗",
        "on": [
            "コウ",
            "キョウ"
        ],
        "kun": [
            "ふさぐ",
            "やまにれ",
            "おおむね"
        ],
        "source": "",
        "meanings": [
            "for the most part",
            "close up",
            "flower stem"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "江",
        "on": [
            "コウ"
        ],
        "kun": [
            "え"
        ],
        "source": "",
        "meanings": [
            "creek",
            "inlet",
            "bay"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 6,
        "examples": [],
        "tags": []
    },
    {
        "name": "洪",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "deluge",
            "flood",
            "vast"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "溝",
        "on": [
            "コウ"
        ],
        "kun": [
            "みぞ"
        ],
        "source": "",
        "meanings": [
            "gutter",
            "ditch",
            "sewer",
            "drain",
            "10**32"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "甲",
        "on": [
            "コウ",
            "カン"
        ],
        "kun": [
            "きのえ"
        ],
        "source": "",
        "meanings": [
            "armor",
            "high (voice)",
            "A grade",
            "first class",
            "former",
            "instep",
            "carapace"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 5,
        "examples": [],
        "tags": []
    },
    {
        "name": "硬",
        "on": [
            "コウ"
        ],
        "kun": [
            "かたい"
        ],
        "source": "",
        "meanings": [
            "stiff",
            "hard"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "稿",
        "on": [
            "コウ"
        ],
        "kun": [
            "わら",
            "したがき"
        ],
        "source": "",
        "meanings": [
            "draft",
            "copy",
            "manuscript",
            "straw"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "絞",
        "on": [
            "コウ"
        ],
        "kun": [
            "しぼる",
            "しめる",
            "しまる"
        ],
        "source": "",
        "meanings": [
            "strangle",
            "constrict",
            "wring"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "綱",
        "on": [
            "コウ"
        ],
        "kun": [
            "つな"
        ],
        "source": "",
        "meanings": [
            "hawser",
            "class (genus)",
            "rope",
            "cord",
            "cable"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "肯",
        "on": [
            "コウ"
        ],
        "kun": [
            "がえんじる"
        ],
        "source": "",
        "meanings": [
            "agreement",
            "consent",
            "comply with"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "荒",
        "on": [
            "コウ"
        ],
        "kun": [
            "あらす",
            "あれる",
            "あらい",
            "すさぶ",
            "すさむ",
            "あらし"
        ],
        "source": "",
        "meanings": [
            "laid waste",
            "rough",
            "rude",
            "wild"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "衡",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "equilibrium",
            "measuring rod",
            "scale"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "貢",
        "on": [
            "コウ",
            "ク"
        ],
        "kun": [
            "みつぐ"
        ],
        "source": "",
        "meanings": [
            "tribute",
            "support",
            "finance"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "購",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "subscription",
            "buy"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "郊",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "outskirts",
            "suburbs",
            "rural area"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "酵",
        "on": [
            "コウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "fermentation"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "項",
        "on": [
            "コウ"
        ],
        "kun": [
            "うなじ"
        ],
        "source": "",
        "meanings": [
            "paragraph",
            "nape of neck",
            "clause",
            "item",
            "term (expression)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "剛",
        "on": [
            "ゴウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "sturdy",
            "strength"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "拷",
        "on": [
            "ゴウ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "torture",
            "beat"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "豪",
        "on": [
            "ゴウ"
        ],
        "kun": [
            "えらい"
        ],
        "source": "",
        "meanings": [
            "overpowering",
            "great",
            "powerful",
            "excelling",
            "Australia"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "克",
        "on": [
            "コク"
        ],
        "kun": [
            "かつ"
        ],
        "source": "",
        "meanings": [
            "overcome",
            "kindly",
            "skillfully"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "酷",
        "on": [
            "コク"
        ],
        "kun": [
            "ひどい"
        ],
        "source": "",
        "meanings": [
            "cruel",
            "severe",
            "atrocious",
            "unjust"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "獄",
        "on": [
            "ゴク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "prison",
            "jail"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "腰",
        "on": [
            "ヨウ"
        ],
        "kun": [
            "こし"
        ],
        "source": "",
        "meanings": [
            "loins",
            "hips",
            "waist",
            "low wainscoting"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "込",
        "on": [],
        "kun": [
            "こむ",
            "こむ",
            "こみ",
            "こみ",
            "こめる"
        ],
        "source": "",
        "meanings": [
            "crowded",
            "mixture",
            "in bulk",
            "included",
            "(kokuji)"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 4,
        "examples": [],
        "tags": []
    },
    {
        "name": "頃",
        "on": [
            "ケイ",
            "キョウ"
        ],
        "kun": [
            "ころ",
            "ごろ",
            "しばらく"
        ],
        "source": "",
        "meanings": [
            "time",
            "about",
            "toward"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "墾",
        "on": [
            "コン"
        ],
        "kun": [
            "はる",
            "ひらく"
        ],
        "source": "",
        "meanings": [
            "ground-breaking",
            "open up farmland"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "婚",
        "on": [
            "コン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "marriage"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "恨",
        "on": [
            "コン"
        ],
        "kun": [
            "うらむ",
            "うらめしい"
        ],
        "source": "",
        "meanings": [
            "regret",
            "bear a grudge",
            "resentment",
            "malice",
            "hatred"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "懇",
        "on": [
            "コン"
        ],
        "kun": [
            "ねんごろ"
        ],
        "source": "",
        "meanings": [
            "sociable",
            "kind",
            "courteous",
            "hospitable",
            "cordial"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "昆",
        "on": [
            "コン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "descendants",
            "elder brother",
            "insect"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "痕",
        "on": [
            "コン"
        ],
        "kun": [
            "あと"
        ],
        "source": "",
        "meanings": [
            "mark",
            "foot print"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "紺",
        "on": [
            "コン"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "dark blue",
            "navy"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "魂",
        "on": [
            "コン"
        ],
        "kun": [
            "たましい",
            "たま"
        ],
        "source": "",
        "meanings": [
            "soul",
            "spirit"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 14,
        "examples": [],
        "tags": []
    },
    {
        "name": "唆",
        "on": [
            "サ"
        ],
        "kun": [
            "そそる",
            "そそのかす"
        ],
        "source": "",
        "meanings": [
            "tempt",
            "seduce",
            "instigate",
            "promote"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "沙",
        "on": [
            "サ",
            "シャ"
        ],
        "kun": [
            "すな",
            "よなげる"
        ],
        "source": "",
        "meanings": [
            "sand"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 7,
        "examples": [],
        "tags": []
    },
    {
        "name": "詐",
        "on": [
            "サ"
        ],
        "kun": [
            "いつわる"
        ],
        "source": "",
        "meanings": [
            "lie",
            "falsehood",
            "deceive",
            "pretend"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "鎖",
        "on": [
            "サ"
        ],
        "kun": [
            "くさり",
            "とざす"
        ],
        "source": "",
        "meanings": [
            "chain",
            "irons",
            "connection"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 18,
        "examples": [],
        "tags": []
    },
    {
        "name": "挫",
        "on": [
            "ザ",
            "サ"
        ],
        "kun": [
            "くじく",
            "くじける"
        ],
        "source": "",
        "meanings": [
            "crush",
            "break",
            "sprain",
            "discourage"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "債",
        "on": [
            "サイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "bond",
            "loan",
            "debt"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "催",
        "on": [
            "サイ"
        ],
        "kun": [
            "もようす",
            "もよおす"
        ],
        "source": "",
        "meanings": [
            "sponsor",
            "hold (a meeting)",
            "give (a dinner)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "塞",
        "on": [
            "ソク",
            "サイ"
        ],
        "kun": [
            "ふさぐ",
            "とりで",
            "みちる"
        ],
        "source": "",
        "meanings": [
            "close",
            "shut",
            "cover",
            "block",
            "obstruct"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "宰",
        "on": [
            "サイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "superintend",
            "manager",
            "rule"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "彩",
        "on": [
            "サイ"
        ],
        "kun": [
            "いろどる"
        ],
        "source": "",
        "meanings": [
            "coloring",
            "paint",
            "makeup"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "栽",
        "on": [
            "サイ"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "plantation",
            "planting"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "歳",
        "on": [
            "サイ",
            "セイ"
        ],
        "kun": [
            "とし",
            "とせ",
            "よわい"
        ],
        "source": "",
        "meanings": [
            "year-end",
            "age",
            "occasion",
            "opportunity"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "采",
        "on": [
            "サイ"
        ],
        "kun": [
            "とる",
            "いろどり"
        ],
        "source": "",
        "meanings": [
            "dice",
            "form",
            "appearance",
            "take",
            "gather",
            "coloring"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 8,
        "examples": [],
        "tags": []
    },
    {
        "name": "砕",
        "on": [
            "サイ"
        ],
        "kun": [
            "くだく",
            "くだける"
        ],
        "source": "",
        "meanings": [
            "smash",
            "break",
            "crush",
            "familiar",
            "popular"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "斎",
        "on": [
            "サイ"
        ],
        "kun": [
            "とき",
            "つつしむ",
            "ものいみ",
            "いむ",
            "いわう",
            "いつく"
        ],
        "source": "",
        "meanings": [
            "purification",
            "Buddhist food",
            "room",
            "worship",
            "avoid",
            "alike"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "載",
        "on": [
            "サイ"
        ],
        "kun": [
            "のせる",
            "のる"
        ],
        "source": "",
        "meanings": [
            "ride",
            "board",
            "get on",
            "place",
            "spread",
            "10**44",
            "record",
            "publish"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "剤",
        "on": [
            "ザイ",
            "スイ",
            "セイ"
        ],
        "kun": [
            "かる",
            "けずる"
        ],
        "source": "",
        "meanings": [
            "dose",
            "medicine",
            "drug"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "咲",
        "on": [
            "ショウ"
        ],
        "kun": [
            "さく",
            "ざき"
        ],
        "source": "",
        "meanings": [
            "blossom",
            "bloom"
        ],
        "grade": 8,
        "jlpt": 2,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "削",
        "on": [
            "サク"
        ],
        "kun": [
            "けずる",
            "はつる",
            "そぐ"
        ],
        "source": "",
        "meanings": [
            "plane",
            "sharpen",
            "whittle",
            "pare",
            "shave"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "搾",
        "on": [
            "サク"
        ],
        "kun": [
            "しぼる"
        ],
        "source": "",
        "meanings": [
            "squeeze"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 13,
        "examples": [],
        "tags": []
    },
    {
        "name": "柵",
        "on": [
            "サク",
            "サン"
        ],
        "kun": [
            "しがらむ",
            "しがらみ",
            "とりで",
            "やらい"
        ],
        "source": "",
        "meanings": [
            "stockade",
            "fence",
            "weir",
            "entwine around"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "索",
        "on": [
            "サク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "cord",
            "rope",
            "searching",
            "inquiring"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "錯",
        "on": [
            "サク",
            "シャク"
        ],
        "kun": [],
        "source": "",
        "meanings": [
            "confused",
            "mix",
            "be in disorder"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 16,
        "examples": [],
        "tags": []
    },
    {
        "name": "拶",
        "on": [
            "サツ"
        ],
        "kun": [
            "せまる"
        ],
        "source": "",
        "meanings": [
            "be imminent",
            "draw close"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 9,
        "examples": [],
        "tags": []
    },
    {
        "name": "撮",
        "on": [
            "サツ"
        ],
        "kun": [
            "とる",
            "つまむ",
            "どり"
        ],
        "source": "",
        "meanings": [
            "snapshot",
            "take pictures"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "擦",
        "on": [
            "サツ"
        ],
        "kun": [
            "する",
            "すれる",
            "ずれ",
            "こする",
            "こすれる"
        ],
        "source": "",
        "meanings": [
            "grate",
            "rub",
            "scratch",
            "scrape",
            "chafe",
            "scour"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 17,
        "examples": [],
        "tags": []
    },
    {
        "name": "傘",
        "on": [
            "サン"
        ],
        "kun": [
            "かさ"
        ],
        "source": "",
        "meanings": [
            "umbrella"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 12,
        "examples": [],
        "tags": []
    },
    {
        "name": "惨",
        "on": [
            "サン",
            "ザン"
        ],
        "kun": [
            "みじめ",
            "いたむ",
            "むごい"
        ],
        "source": "",
        "meanings": [
            "wretched",
            "disaster",
            "cruelty",
            "harsh"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "桟",
        "on": [
            "サン",
            "セン"
        ],
        "kun": [
            "かけはし"
        ],
        "source": "",
        "meanings": [
            "scaffold",
            "cleat",
            "frame",
            "jetty",
            "bolt (door)"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 10,
        "examples": [],
        "tags": []
    },
    {
        "name": "斬",
        "on": [
            "ザン",
            "サン",
            "セン",
            "ゼン"
        ],
        "kun": [
            "きる"
        ],
        "source": "",
        "meanings": [
            "beheading",
            "kill",
            "murder"
        ],
        "grade": 8,
        "jlpt": null,
        "strokes": 11,
        "examples": [],
        "tags": []
    },
    {
        "name": "暫",
        "on": [
            "ザン"
        ],
        "kun": [
            "しばらく"
        ],
        "source": "",
        "meanings": [
            "temporarily",
            "a while",
            "moment",
            "long time"
        ],
        "grade": 8,
        "jlpt": 1,
        "strokes": 15,
        "examples": [],
        "tags": []
    },
    {
        "name": "伺",
        ],