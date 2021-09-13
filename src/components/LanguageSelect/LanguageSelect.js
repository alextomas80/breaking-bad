import React from "react";
import { useTranslation } from "react-i18next";

import {
  StyledLanguagesContainer,
  StyledLanguage,
} from "./LanguageSelect.styled";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const languages = [
    { key: "es", name: "ES" },
    { key: "en", name: "EN" },
  ];

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const currentLanguage = () => {
    return (
      i18n.language ||
      (typeof window !== "undefined" && window.localStorage.i18nextLng) ||
      "es"
    );
  };

  return (
    <StyledLanguagesContainer>
      {languages.map((lang, i) => (
        <StyledLanguage
          onClick={() => changeLanguage(lang.key)}
          tabIndex={i + 1}
          className={`${currentLanguage() === lang.key && "active"}`}
          key={`language_${lang.key}`}
        >
          {lang.name}
        </StyledLanguage>
      ))}
    </StyledLanguagesContainer>
  );
};

export default LanguageSelect;
