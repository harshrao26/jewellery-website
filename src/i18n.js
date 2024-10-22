import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from '../public/locales/en/translation.json';
import translationFR from '../public/locales/fr/translation.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          translation: translationEN,
        },
      },
      hi: {
        translation: {
          "hello world": "नमस्ते दुनिया",
        },
      },
      fr: {
        translation: {
          translation: translationFR,
        },
      },
    },
    lng: "en", // Default language
    debug: true,

  });
