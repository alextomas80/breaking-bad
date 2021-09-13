import { all } from "redux-saga/effects";
import characters from "./characters";
import quote from "./quote";

export default function* rootSaga() {
  yield all([characters(), quote()]);
}
