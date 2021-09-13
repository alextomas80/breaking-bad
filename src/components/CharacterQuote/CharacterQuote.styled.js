import styled from "styled-components";

export const ContainerQuote = styled.div`
  align-items: flex-start;
  background-color: lightgray;
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  display: flex;
  flex-flow: column;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 2rem;
  padding: 1rem;
`;

export const Button = styled.button`
  align-self: flex-end;
  background-color: white;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
