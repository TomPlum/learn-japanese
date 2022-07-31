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
                    home: "Home"
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
                    home: "ホームページ"
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
