import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "../public/locales/pt-BR/translation.json";
import en from "../public/locales/en/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      "en": { translation: en },
    },
    lng: "pt-BR",
    fallbackLng: "pt-BR",
    interpolation: { escapeValue: false },
  });

export default i18n;
