import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import common_en from './translations/en/common.json'
import common_es from './translations/es/common.json'
import common_zh from './translations/zh/common.json'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: common_en,
            },
            es: {
                translation: common_es,
            },
            zh: {
                translation: common_zh
            }
        },
        lng: "en",
        fallbackLng: "en",
        keySeparator: '.', // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n
