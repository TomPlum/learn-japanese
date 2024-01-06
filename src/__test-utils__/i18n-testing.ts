import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from "locales/en/translation.json"
import japanese from "locales/jp/translation.json"

i18n
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
