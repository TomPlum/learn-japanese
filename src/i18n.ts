import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}

i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    returnNull: false,
    defaultNS: "translation",
    fallbackLng: "en",
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
    },
    react: {
      useSuspense: false
    }
  })
  .then(() => console.log("Initialised React i18n"))

export default i18n
