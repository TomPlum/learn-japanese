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
                    "genki-dict": "Genki Knowledge Bank"
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
                    "home": "ホームページ",
                    "learn": "習う",
                    "help": "ヘルプ",
                    "kanji-dict": "漢字辞書",
                    "kana-dict": "仮名辞書",
                    "genki-dict": "げんきの要約"
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
