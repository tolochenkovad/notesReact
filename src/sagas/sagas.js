import { all, spawn } from 'redux-saga/effects';
import notesSaga from '../app/Notes/redux/saga';

function* rootSaga() {
  yield all([

    spawn(notesSaga),
  ]);
};

export default rootSaga;