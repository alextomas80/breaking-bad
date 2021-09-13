import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ContainerQuote, Button } from "./CharacterQuote.styled";

const CharacterQuote = ({ getQuote }) => {
  const { t } = useTranslation();

  const { quote: quoteData, loading } = useSelector((state) => state.quote);

  return (
    <>
      {quoteData && (
        <ContainerQuote>
          {loading ? <span>{t("loading-quote")}</span> : quoteData.quote}
          {!loading && <Button onClick={getQuote}>{t("reload-quote")}</Button>}
        </ContainerQuote>
      )}
    </>
  );
};

export default CharacterQuote;
