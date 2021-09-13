import { START_GET_QUOTE, REMOVE_QUOTE } from "redux/store/types";

export const startGetQuote = (payload) => {
  return {
    type: START_GET_QUOTE,
    name: payload,
  };
};

export const removeQuote = () => {
  return {
    type: REMOVE_QUOTE,
  };
};
