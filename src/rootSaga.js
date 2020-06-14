import { all } from "redux-saga/effects";
import introSaga from "./pages/IntroPage/sagas";

export default function* rootSaga() {
  yield all([introSaga()]);
}
