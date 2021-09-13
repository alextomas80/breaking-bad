import styled from "styled-components/macro";

export const StyledLanguagesContainer = styled.div`
  display: flex;
`;

export const StyledLanguage = styled.div`
  color: white;
  cursor: pointer;
  font-size: 1rem;
  position: relative;

  &.active {
    &:before {
      background-color: rgba(255, 255, 255, 0.7);
      bottom: -2px;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  &:not(:last-child) {
    margin-right: 1rem;
    position: relative;

    &:after {
      background-color: rgba(255, 255, 255, 0.4);
      content: "";
      height: 15px;
      position: absolute;
      right: -0.5rem;
      top: 2px;
      width: 1px;
    }
  }
`;
