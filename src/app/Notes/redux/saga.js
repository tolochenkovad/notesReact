import {takeLatest, put, select} from "redux-saga/effects";
import {
    ADD_NOTE_SAGA,
    ADD_NOTE,
    REMOVE_NOTE_SAGA,
    REMOVE_NOTE,
    EDIT_NOTE,
    CHECKING_TAGS_SAGA,
    CHECKING_TAGS,
    REMOVE_TAG_OF_NOTE_SAGA,
    REMOVE_TAG_OF_NOTE,
    REMOVE_CATEGORY_OF_NOTE_SAGA,
    REMOVE_CATEGORY_OF_NOTE, CHECKING_CATEGORY_SAGA, CHECKING_CATEGORY
} from './constants';
import {getNote} from "./selectors";
import {setStorage} from "../../../utils/localStorage";

function* addNote(action) {
    const notes = yield select(getNote);
    if (notes.some(note => note.id === action.payload.id)) {
        yield put({type: EDIT_NOTE, action});
        const notes2 = yield select(getNote);
        setStorage("notes", notes2);
        return;
    }
    yield put({type: ADD_NOTE, action});
    let newNotes = yield select(getNote);
    setStorage("notes", newNotes);
}

function* removeNote(action) {
    yield put({type: REMOVE_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
}

function* changeTagOfNote(action) {
    yield put({type: CHECKING_TAGS, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
}

function* changeCategoryOfNote(action) {
    yield put({type: CHECKING_CATEGORY, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
}

function* removeTagOfNote(action) {
    yield put({type: REMOVE_TAG_OF_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
}

function* removeCategoryOfNote(action) {
    yield put({type: REMOVE_CATEGORY_OF_NOTE, action});
    const notes = yield select(getNote);
    setStorage("notes", notes);
}


function* notesSaga() {
    yield takeLatest(ADD_NOTE_SAGA, addNote);
    yield takeLatest(REMOVE_NOTE_SAGA, removeNote);
    yield takeLatest(CHECKING_TAGS_SAGA, changeTagOfNote);
    yield takeLatest(CHECKING_CATEGORY_SAGA, changeCategoryOfNote);
    yield takeLatest(REMOVE_TAG_OF_NOTE_SAGA, removeTagOfNote);
    yield takeLatest(REMOVE_CATEGORY_OF_NOTE_SAGA, removeCategoryOfNote);

}

export default notesSaga;