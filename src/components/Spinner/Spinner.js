import React from "react";
import { SpinnerContainer } from "./Spinner.styled";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <img src="/loading.gif" alt="Loading" width={250} />
    </SpinnerContainer>
  );
};

export default Spinner;
