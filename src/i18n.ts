import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

i18n.use(detector)
    .use(Backend)
    .use(initReactI18next)
    .init({
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
