import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharacterContainer = styled(Link).attrs(() => ({
  "aria-label": "CharacterCard",
}))`
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  &:hover {
    .image {
      transform: scale(1.03);
      transition: all 0.1s linear;
    }
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-position: top center;
  background-size: cover;
  height: 250px;
  width: 100%;
  transition: all 0.1s linear;
`;

export const BoxDetail = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: white;
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
`;

export const Name = styled.div`
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Nickname = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
