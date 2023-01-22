import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import english from "../../public/locales/en/translation.json"
import japanese from "../../public/locales/jp/translation.json"

i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    defaultNS: "translation",
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: english
      },
      jp: {
        translation: japanese
      }
    },
    react: {
      useSuspense: false
    }
  })
  .then(() => console.log("Initialised i18n test configuration"))

export default i18n
