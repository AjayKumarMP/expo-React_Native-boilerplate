import { put, takeEvery, all } from "redux-saga/effects";
import {
  INIT_SUCCESS,
  INIT_CALL,
  GET_USER_DETAILS,
  USER_FETCH_SUCCESS,
} from "./constants";
import { GET } from "../../api";

function* _init() {
  const json = yield GET("https://localhost:3000");
  yield put({ type: INIT_SUCCESS, payload: json });
}

function* _init_watcher() {
  yield takeEvery(INIT_CALL, _init);
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* userDetails() {
  yield delay(1000);
  yield put({ type: USER_FETCH_SUCCESS, payload: { name: "kumar mfdgp" } });
}

function* getUserDetails() {
  yield takeEvery(GET_USER_DETAILS, userDetails);
}

export default function* mainSaga() {
  yield all([_init_watcher(), getUserDetails()]);
}
