import { START_GET_CHARACTERS } from "redux/store/types";

export const startGetCharacters = (payload) => {
  return {
    type: START_GET_CHARACTERS,
    ...payload,
  };
};
