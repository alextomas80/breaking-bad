import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TRANSLATIONS from "./locales";

i18n.use(initReactI18next).init({
  resources: TRANSLATIONS,
  lng: "es",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
