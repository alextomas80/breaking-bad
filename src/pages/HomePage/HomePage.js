import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Character from "components/Character";
import { Title, CharacterContainer } from "./HomePage.styled";
import ErrorMessage from "components/ErrorMessage";

const HomePage = () => {
  const { t } = useTranslation();

  const { characters, error } = useSelector((state) => state.characters);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <Title>{t("select-character")}</Title>

      <CharacterContainer>
        {characters &&
          characters.map((character) => (
            <Character key={character.char_id} character={character} />
          ))}
      </CharacterContainer>
    </>
  );
};

export default HomePage;
