import styled from "styled-components";

export const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: 1.5em;
  margin-top: 0;
  svg:global {
    border: 1px solid red;
  }
`;

export const CharacterContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
