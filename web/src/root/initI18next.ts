import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// Locale Files
import en from "@/locales/en.json"
import ja from "@/locales/ja.json"

// Set types
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation',
    resources: {
      translation: typeof en
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja }
    },
    
    fallbackLng: "en"
  })
