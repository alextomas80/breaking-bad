import { put, call, takeLatest } from "redux-saga/effects";

import apiCall from "redux/api";
import {
  ERROR_GET_QUOTE,
  START_GET_QUOTE,
  SUCCESS_GET_QUOTE,
} from "redux/store/types";

function* getQuote({ name }) {
  try {
    const quote = yield call(
      apiCall,
      "GET",
      `https://breakingbadapi.com/api/quote/random?author=${name}`
    );
    yield put({ type: SUCCESS_GET_QUOTE, quote });
  } catch (error) {
    const { message } = error;
    yield put({ type: ERROR_GET_QUOTE, error: message });
  }
}

export default function* quote() {
  yield takeLatest(START_GET_QUOTE, getQuote);
}
