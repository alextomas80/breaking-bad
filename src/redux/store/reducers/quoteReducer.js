import {
  ERROR_GET_QUOTE,
  REMOVE_QUOTE,
  START_GET_QUOTE,
  SUCCESS_GET_QUOTE,
} from "redux/store/types";

const initialState = {
  loading: true,
  quote: {},
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GET_QUOTE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_GET_QUOTE:
      const [quote] = action.quote;
      return {
        ...state,
        quote,
        loading: false,
      };
    case REMOVE_QUOTE:
      return {
        ...state,
        quote: {},
        loading: false,
      };
    case ERROR_GET_QUOTE:
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

export default quoteReducer;
