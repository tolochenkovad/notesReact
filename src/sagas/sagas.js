import { all, spawn } from 'redux-saga/effects';
import notesSaga from '../app/Notes/redux/saga';
import tagsSaga from "../app/InfoPage/redux/saga";

function* rootSaga() {
  yield all([
    spawn(notesSaga),
    spawn(tagsSaga),
  ]);
};

export default rootSaga;