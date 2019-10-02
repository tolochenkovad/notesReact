import {
    ADD_TAG, ADD_TAG_OF_NOTE, ADD_TAG_OF_NOTE_SAGA,
    ADD_TAG_SAGA,
    CHANGE_CURRENT_TAG,
    REMOVE_TAG,
    REMOVE_TAG_SAGA
} from "./constants";
import { takeLatest, put, select } from "redux-saga/effects";
import {setStorage} from "../../../utils/localStorage";
import {getTags, getTagsOfNote} from "./selectors";

function* addTag(action) {
    const tags = yield select(getTags);
    if ( tags.some(item => item.id === action.id) ) {
        yield put({ type: CHANGE_CURRENT_TAG, action});
        const tags2 = yield select(getTags);
        setStorage("tags", tags2);
        return;
    }
    yield put({ type: ADD_TAG, action});
    const tags3 = yield select(getTags);
    setStorage("tags", tags3);
}

function* addTagOfNote(action) {
    const tagsArrNote = yield select(getTagsOfNote);
    if ( tagsArrNote.some(item =>  item.tag === action.tag) ) {
        alert('This tags is already added!');
        return;
    }
    yield put({ type: ADD_TAG_OF_NOTE, action});
}

function* removeTag(action) {
    yield put({ type: REMOVE_TAG, action});
    const tags = yield select(getTags);
    setStorage("tags", tags);
}


function* tagsSaga() {
    yield takeLatest(ADD_TAG_SAGA, addTag);
    yield takeLatest(ADD_TAG_OF_NOTE_SAGA, addTagOfNote);
    yield takeLatest(REMOVE_TAG_SAGA, removeTag);
}

export default tagsSaga;