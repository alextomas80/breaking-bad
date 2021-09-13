import LanguageSelect from "../LanguageSelect";
import { Background, Title } from "./Header.styled";

const Header = () => {
  return (
    <Background src="/header.jpg" alt="Breaking Bad App">
      <Title>Breaking Bad App</Title>
      <LanguageSelect />
    </Background>
  );
};

export default Header;
