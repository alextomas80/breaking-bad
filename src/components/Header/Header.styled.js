import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Background = styled.div`
  align-items: center;
  background-image: url(${(props) => props.src});
  background-position: center center;
  background-size: cover;
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;

  ${up("sm")} {
    height: 125px;
    padding: 0 1.5rem;
  }

  ${up("lg")} {
    height: 150px;
    padding: 0 2rem;
  }

  &:before {
    background-color: rgba(0, 0, 0, 0.3);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  z-index: 11;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${up("sm")} {
    font-size: 2rem;
  }

  ${up("lg")} {
    font-size: 3rem;
  }
`;
