import {
  ERROR_GET_CHARACTERS,
  START_GET_CHARACTERS,
  SUCCESS_GET_CHARACTERS,
} from "redux/store/types";

const initialState = {
  characters: [],
  error: null,
  loading: true,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_GET_CHARACTERS:
      return {
        ...state,
        characters: action.results,
        loading: false,
      };
    case ERROR_GET_CHARACTERS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default charactersReducer;
