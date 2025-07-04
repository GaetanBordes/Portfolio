import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fr from "./translations/fr.json";
import en from "./translations/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: "fr",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
