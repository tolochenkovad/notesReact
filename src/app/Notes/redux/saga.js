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

function* addNote({payload}) {
    const notes = yield select(getNote);
    if (notes.some(note => note.id === payload.id)) {
        yield put({type: EDIT_NOTE, payload});
        return;
    }
    yield put({type: ADD_NOTE, payload});
}

function* removeNote({payload}) {
    yield put({type: REMOVE_NOTE, payload});
}

function* changeTagOfNote({payload}) {
    yield put({type: CHECKING_TAGS, payload});
}

function* changeCategoryOfNote({payload}) {
    yield put({type: CHECKING_CATEGORY, payload});
}

function* removeTagOfNote({payload}) {
    yield put({type: REMOVE_TAG_OF_NOTE, payload});
}

function* removeCategoryOfNote({payload}) {
    yield put({type: REMOVE_CATEGORY_OF_NOTE, payload});
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