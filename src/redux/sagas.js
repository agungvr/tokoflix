import { fork } from 'redux-saga/effects';
import userSaga from './user/saga'

export default function* rootSaga() {
  yield fork(userSaga);
}
