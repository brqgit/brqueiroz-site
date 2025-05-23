import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "../public/locales/pt-BR/translation.json";
import en from "../public/locales/en/translation.json";

let lng = "pt-BR";

if (typeof window !== "undefined") {
  if (window.location.hostname.endsWith(".com") || window.location.hostname.endsWith(".net")) {
    lng = "en";
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      "en": { translation: en },
    },
    lng,
    fallbackLng: "pt-BR",
    interpolation: { escapeValue: false },
  });

export default i18n;