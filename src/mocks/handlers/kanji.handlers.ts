import { rest } from 'msw'
import {api} from "../util";

export const handlers = [
    rest.get(`${api}/kanji/random`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "character": "化",
                "grade": 3,
                "strokes": 4,
                "jlpt": 2,
                "source": "https://en.wiktionary.org/wiki/%E5%8C%96#Kanji",
                "meanings": [
                    "take the form of",
                    "enchant",
                    "change",
                    "influence",
                    "delude"
                ],
                "readings": [
                    {
                        "value": "け",
                        "type": "on"
                    },
                    {
                        "value": "ばかす",
                        "type": "kun"
                    },
                    {
                        "value": "ばける",
                        "type": "kun"
                    },
                    {
                        "value": "か",
                        "type": "on"
                    }
                ],
                "examples": [
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
                        "value": "悪化",
                        "kana": [
                            "あっか"
                        ],
                        "english": [
                            "growing worse",
                            "(suffer) deterioration"
                        ]
                    },
                    {
                        "value": "強化",
                        "kana": [
                            "きょうか"
                        ],
                        "english": [
                            "intensify",
                            "solidify",
                            "strengthen",
                            "reinforce"
                        ]
                    },
                    {
                        "value": "変化",
                        "kana": [
                            "へんか"
                        ],
                        "english": [
                            "change",
                            "alteration",
                            "variation",
                            "mutation"
                        ]
                    },
                    {
                        "value": "化学",
                        "kana": [
                            "ばけがく",
                            "かがく"
                        ],
                        "english": [
                            "chemistry"
                        ]
                    }
                ],
                "tags": [
                    "verb"
                ]
            })
        )
    })
]