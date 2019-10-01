import { takeLatest, put, select } from "redux-saga/effects";
import {setStorage} from "../../../utils/localStorage";
import {
    ADD_CATEGORY,
    ADD_CATEGORY_SAGA,
    CHANGE_CURRENT_CATEGORY,
    CHANGE_CURRENT_CATEGORY_SAGA,
    REMOVE_CATEGORY,
    REMOVE_CATEGORY_SAGA
} from "./constants";
import {getCategories} from "./selectors";

function* changeCurrentCategory(action) {
    yield put({ type: CHANGE_CURRENT_CATEGORY, action});
    const categories = yield select(getCategories);
    setStorage("categories", categories);
};

function* removeCategory(action) {
    yield put({ type: REMOVE_CATEGORY, action});
    const categories = yield select(getCategories);
    setStorage("categories", categories);
};

function* addCategory(action) {
    yield put({ type: ADD_CATEGORY, action});
    const categories = yield select(getCategories);
    // debugger;
    setStorage("categories", categories);
};


function* categoriesSaga() {
    yield takeLatest(CHANGE_CURRENT_CATEGORY_SAGA, changeCurrentCategory);
    yield takeLatest(REMOVE_CATEGORY_SAGA, removeCategory);
    yield takeLatest(ADD_CATEGORY_SAGA, addCategory);
};

export default categoriesSaga;