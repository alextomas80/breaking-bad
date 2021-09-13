import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  flex-flow: column;

  ${up("sm")} {
    flex-flow: row;
  }
`;

export const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: 1.5em;
  margin-top: 0;
  svg {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    margin-right: 1rem;
  }
`;

export const BasicInfo = styled.div`
  order: 2;
  width: 100%;
  ${up("sm")} {
    order: 1;
    width: 25%;
  }
`;

export const DetailedInformation = styled.div`
  flex: 1;
  order: 1;
  padding: 1rem 0;
  ${up("sm")} {
    order: 2;
    padding: 0 1rem;
  }
`;

export const SeasonNumber = styled.span`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
  color: white;
  display: inline-flex;
  font-size: 12px;
  height: 20px;
  justify-content: center;
  width: 20px;
  &:not(:last-child) {
    margin-right: 3px;
  }
`;
