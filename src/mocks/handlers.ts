import { rest } from 'msw'

const api = `${process.env.REACT_APP_API_HOST_URI}`

export const handlers = [
    rest.post('/user/login', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "username": "Tester",
                "email": "tester.testing@hotmail.co.uk",
                "nickname": "Demo",
                "roles": [
                    "admin"
                ],
                "locked": false,
                "expired": false,
                "credentialsExpired": false,
                "enabled": true,
                "creationDate": "2022-10-05",
                "token": "{STUBBED_JWT}",
                "refreshToken": "{STUBBED_REFRESH_TOKEN}",
                "preferences": {
                    "kanjiFont": "Gothic",
                    "theme": "Dark",
                    "language": "English",
                    "highScoresBehaviour": "Never Submit",
                    "defaultMode": "Play",
                    "flashCardsQuantity": 5,
                    "confidenceMenuStyle": "Numbers",
                    "profileVisibility": "Public",
                    "streakCardView": "Start Date",
                    "romajiVisibility": "Ask Each Time",
                    "activityFeedQuantity": 3,
                    "streakNotifications": false,
                    "mistakesReminders": false
                }
            })
        )
    }),
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