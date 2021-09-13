import React from "react";
import { Container, Text, Value } from "./Attribute.styled";

export const Attribute = ({ children, text }) => {
  return (
    <Container>
      <Text>
        <span>{text}</span>
      </Text>
      <Value>{children}</Value>
    </Container>
  );
};
