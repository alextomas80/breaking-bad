import { put, call, takeLatest } from "redux-saga/effects";

import apiCall from "redux/api";
import {
  START_GET_CHARACTERS,
  SUCCESS_GET_CHARACTERS,
  ERROR_GET_CHARACTERS,
} from "redux/store/types";

function* getCharacters() {
  try {
    const results = yield call(
      apiCall,
      "GET",
      "https://breakingbadapi.com/api/characters"
    );

    yield put({ type: SUCCESS_GET_CHARACTERS, results });
  } catch (error) {
    const { message } = error;
    yield put({ type: ERROR_GET_CHARACTERS, error: message });
  }
}

export default function* characters() {
  yield takeLatest(START_GET_CHARACTERS, getCharacters);
}
