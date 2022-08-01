import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            landing: {
                button: {
                    "learn": "Learn"
                }
            },
            navigation: {
                button: {
                    "home": "Home",
                    "learn": "Learn",
                    "help": "Help",
                    "kanji-dict": "Kanji Dictionary",
                    "kana-dict": "Kana Dictionary",
                    "genki-dict": "Genki Knowledge Bank",
                    "faq": "Frequently Asked Questions",
                    "sm2": "SuperMemo2 Algorithm"
                }
            },
            dashboard: {
                card: {
                    play: {
                        "start": "Start Session",
                        "last-play": "Last Play Session",
                        "last-learn": "Last Learn Session",
                        "default-title": "Custom Session",
                        "play-title": "You've not played anything recently.",
                        "learn-title": "You've not practiced anything recently."
                    },
                    profile: {
                        "go": "Go to profile",
                        "register": "Register",
                        "notifications": "Notification Centre",
                        "user-settings": "Account Settings",
                        "tour": "Show Me Around"
                    },
                    settings: {
                        "title": "Settings",
                        "general": "General Settings",
                        "learn": "Learn Settings",
                        "play": "Play Settings",
                        "interface": "Interface Settings",
                        "notification": "Notification Settings",
                        "user": "User Settings"
                    },
                    "kanji-showcase": {
                        "title": "Kanji Showcase",
                        "search": "search all kanji",
                        "on": {
                            "short": "on",
                            "long": "On'Yomi Readings"
                        },
                        "kun": {
                            "short": "kun",
                            "long": "Kun'Yomi Readings"
                        },
                        "grade": "Kyōiku Grade",
                        "jlpt": "JLPT Level",
                        "strokes": "Brush Strokes",
                        "examples": "Examples",
                        "shuffle": "Shuffle",
                        "meaning": "Meanings"
                    }
                }
            }
        }
    },
    jp: {
        translation: {
            landing: {
                button: {
                    "learn": "習う"
                }
            },
            navigation: {
                button: {
                    "home": "ホーム",
                    "learn": "習う",
                    "help": "ヘルプ",
                    "kanji-dict": "漢字辞書",
                    "kana-dict": "仮名辞書",
                    "genki-dict": "げんきの要約",
                    "faq": "よくある質問",
                    "sm2": "「スーパーメモ」 アルゴリズム"
                }
            },
            dashboard: {
                card: {
                    play: {
                        "start": "スタートセッション",
                        "last-play": "前のゲームセッション",
                        "last-learn": "前の学習セッション",
                        "default-title": "カスタムセッション",
                        "play-title": "最近ゲームをしていません",
                        "learn-title": "最近何も練習していません"
                    },
                    profile: {
                        "go": "プロフィールを入る",
                        "register": "登録する",
                        "notifications": "通知",
                        "user-settings": "アカウント設定",
                        "tour": "見せて"
                    },
                    settings: {
                        "title": "設定",
                        "general": "一般設定",
                        "learn": "学習設定",
                        "play": "ゲーム設定",
                        "interface": "設計設定",
                        "notification": "通知設定",
                        "user": "ユーザー設定"
                    },
                    "kanji-showcase": {
                        "title": "漢字ショーケース",
                        "search": "すべての漢字を検索",
                        "on": {
                            "short": "音",
                            "long": "音読み"
                        },
                        "kun": {
                            "short": "訓",
                            "long": "訓読み"
                        },
                        "grade": "教育の学年",
                        "jlpt": "JLPTレベル",
                        "strokes": "刷毛の量",
                        "examples": "例",
                        "shuffle": "シャッフル",
                        "meaning": "意味"
                    }
                }
            }
        }
    }
};

i18n.use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
    });

export default i18n;
