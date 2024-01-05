import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from 'locales/en/translation.json'
import japanese from 'locales/jp/translation.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english
    },
    jp: {
      translation: japanese
    }
  },
  lng: 'en',
  fallbackLng: "jp",
  interpolation: {
    escapeValue: false
  }
}).then(() => {
  console.debug('React i18n has been initialised.')
}).catch(e => {
  console.error('Failed to initialise React i18n.', e)
})