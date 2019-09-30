import { takeLatest, put, select } from "redux-saga/effects";
import {ADD_NOTE_SAGA, ADD_NOTE, REMOVE_NOTE_SAGA, REMOVE_NOTE} from './constants';
import {getNote} from "./selectors";
import {setStorage} from "../../../utils/localStorage";

function* addNote(action) {
    yield put({ type: ADD_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
};

function* removeNote(action) {
    yield put({ type: REMOVE_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
};

function* notesSaga() {
    yield takeLatest(ADD_NOTE_SAGA, addNote);
    yield takeLatest(REMOVE_NOTE_SAGA, removeNote);
};

export default notesSaga;