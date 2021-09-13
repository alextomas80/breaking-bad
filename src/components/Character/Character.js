import {
  BoxDetail,
  CharacterContainer,
  Image,
  Name,
  Nickname,
} from "./Character.styled";

const Character = ({ character }) => {
  const { char_id, name, nickname, img } = character;
  return (
    <CharacterContainer
      key={char_id}
      to={{
        pathname: `/character/${char_id}`,
        state: { character },
      }}
    >
      <Image className="image" src={img} alt={name} />
      <BoxDetail>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
      </BoxDetail>
    </CharacterContainer>
  );
};

export default Character;
