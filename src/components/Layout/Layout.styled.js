import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Container = styled.div`
  margin: 1rem;

  ${up("lg")} {
    margin: 2rem auto;
    width: 90vw;
  }
`;
