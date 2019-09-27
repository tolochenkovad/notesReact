import { takeLatest, put } from "redux-saga/effects";
import { ADD_NOTE_SAGA, ADD_NOTE } from './constants';

function* addNote(action) {
  yield put({ type: ADD_NOTE, action});
}

function* notesSaga() {
  yield takeLatest(ADD_NOTE_SAGA, addNote);
};

export default notesSaga;