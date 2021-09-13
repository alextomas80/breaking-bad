import { combineReducers } from "redux";

import charactersReducer from "./charactersReducer";
import quoteReducer from "./quoteReducer";

const rootReducer = combineReducers({
  characters: charactersReducer,
  quote: quoteReducer,
});

export default rootReducer;
