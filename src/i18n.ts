import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
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

i18n.use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
