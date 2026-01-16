// app/translations/i18n.client.ts
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: "pt",
    fallbackLng: "pt",

    resources: {
      en: { global: en },
      pt: { global: pt },
      es: { global: es }
    },

    ns: ["global"],
    defaultNS: "global",

    interpolation: {
      escapeValue: false
    },
  });
}

export default i18n;
