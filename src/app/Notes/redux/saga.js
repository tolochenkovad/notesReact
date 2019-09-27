import { takeLatest, put } from "redux-saga/effects";
import { ADD_NOTE_SAGA, ADD_NOTE } from './constants';

function* addNote({text, tagsNote, categoriesNote, color}) {
  yield put({ type: ADD_NOTE, text, tagsNote, categoriesNote, color});
}

function* notesSaga() {
  yield takeLatest(ADD_NOTE_SAGA, addNote);
};

export default notesSaga;