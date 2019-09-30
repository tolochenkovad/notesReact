import {
    ADD_TAG,
    ADD_TAG_SAGA,
    CHANGE_CURRENT_TAG,
    CHANGE_CURRENT_TAG_SAGA,
    REMOVE_TAG,
    REMOVE_TAG_SAGA
} from "./constants";
import { takeLatest, put, select } from "redux-saga/effects";
import {setStorage} from "../../../utils/localStorage";
import {getTags} from "./selectors";

function* changeCurrentTag(action) {
    yield put({ type: CHANGE_CURRENT_TAG, action});
    const tags = yield select(getTags);
    setStorage("tags", tags);
};

function* addTag(action) {
    yield put({ type: ADD_TAG, action});
    const tags = yield select(getTags);
    setStorage("tags", tags);
};

function* removeTag(action) {
    yield put({ type: REMOVE_TAG, action});
    const tags = yield select(getTags);
    setStorage("tags", tags);
};


function* tagsSaga() {
    yield takeLatest(ADD_TAG_SAGA, addTag);
    yield takeLatest(CHANGE_CURRENT_TAG_SAGA, changeCurrentTag);
    yield takeLatest(REMOVE_TAG_SAGA, removeTag);
};

export default tagsSaga;