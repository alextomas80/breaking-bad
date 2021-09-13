import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { Attribute } from "components/Attribute/Attribute";
import { getDate } from "utils";
import { removeQuote, startGetQuote } from "redux/store/actions/quote";
import Back from "components/Icons/Back";
import CharacterQuote from "components/CharacterQuote";

import {
  BasicInfo,
  Title,
  Container,
  DetailedInformation,
  SeasonNumber,
} from "./CharacterPage.styled";

const CharacterPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { characters } = useSelector((state) => state.characters);
  const [character] = characters.filter((c) => c.char_id === parseInt(id));
  const { quote } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(startGetQuote(character.name));
  }, [dispatch, character.name]);

  const getQuote = () => dispatch(startGetQuote(character.name));

  const handleClick = () => {
    dispatch(removeQuote());
    history.push("/");
  };

  const Season = ({ number }) => <SeasonNumber>{number}</SeasonNumber>;

  return (
    <>
      <Title>
        <Back width={30} onClick={handleClick} />
        {character.name}
      </Title>

      <Container>
        <BasicInfo>
          <img src={character.img} alt={character.name} width="100%" />
        </BasicInfo>

        <DetailedInformation>
          {quote?.quote && <CharacterQuote getQuote={getQuote} />}

          <Attribute text={t("name")}>{character.name}</Attribute>
          <Attribute text={t("nickname")}>{character.nickname}</Attribute>
          <Attribute text={t("birthday")}>
            {character.birthday !== "Unknown"
              ? getDate(character.birthday)
              : t("unknown")}
          </Attribute>
          <Attribute text={t("occupation")}>{character.occupation}</Attribute>
          <Attribute text={t("status")}>{character.status}</Attribute>
          <Attribute text={t("portrayed")}>{character.portrayed}</Attribute>
          <Attribute text={t("category")}>{character.category}</Attribute>
          <Attribute text={t("appearance")}>
            {character.appearance.map((number) => (
              <Season key={`season__${number}`} number={number} />
            ))}
          </Attribute>
        </DetailedInformation>
      </Container>
    </>
  );
};

export default CharacterPage;
