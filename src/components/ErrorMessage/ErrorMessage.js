import { Error } from "components/Icons";
import React from "react";

import { ErrorContainer, TextDetail } from "./ErrorMessage.styled";

const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <Error width={40} color="tomato" />
      <TextDetail>{error}</TextDetail>
    </ErrorContainer>
  );
};

export default ErrorMessage;
