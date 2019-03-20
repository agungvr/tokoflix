import { takeLatest, select, put } from 'redux-saga/effects';
import { USER_BUY_MOVIE, setUserMovie, setUserSaldo } from "./actions";
import { getPrice } from "../../app/helpers/utils";

export function* userBuyMovieSaga(action) {
  const { id, vote_average } = action.payload;
  const price = getPrice(vote_average);
  yield put(setUserMovie(id));
  yield put(setUserSaldo(price));
}


export default function* getPhonesSaga() {
  yield takeLatest(USER_BUY_MOVIE, userBuyMovieSaga);
}
