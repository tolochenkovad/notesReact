import { takeLatest, put, select } from "redux-saga/effects";
import {
    ADD_NOTE_SAGA,
    ADD_NOTE,
    REMOVE_NOTE_SAGA,
    REMOVE_NOTE,
    EDIT_NOTE_SAGA,
    EDIT_NOTE,
    CHECKING_TAGS_SAGA, CHECKING_TAGS, REMOVE_TAG_OF_NOTE_SAGA, REMOVE_TAG_OF_NOTE
} from './constants';
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

function* changeNote(action) {
    yield put({ type: EDIT_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
};

function* changeTagOfNote(action) {
    yield put({ type: CHECKING_TAGS, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
};

function* removeTagOfNote(action) {
    yield put({ type: REMOVE_TAG_OF_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
};


function* notesSaga() {
    yield takeLatest(ADD_NOTE_SAGA, addNote);
    yield takeLatest(REMOVE_NOTE_SAGA, removeNote);
    yield takeLatest(EDIT_NOTE_SAGA, changeNote);
    yield takeLatest(CHECKING_TAGS_SAGA, changeTagOfNote);
    yield takeLatest(REMOVE_TAG_OF_NOTE_SAGA, changeTagOfNote);

};

export default notesSaga;