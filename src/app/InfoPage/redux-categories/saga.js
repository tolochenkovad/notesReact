import { takeLatest, put, select } from "redux-saga/effects";
import {setStorage} from "../../../utils/localStorage";
import {
    ADD_CATEGORY, ADD_CATEGORY_OF_NOTE, ADD_CATEGORY_OF_NOTE_SAGA,
    ADD_CATEGORY_SAGA, ADD_CHILD_CATEGORY_SAGA,
    CHANGE_CURRENT_CATEGORY,
    REMOVE_CATEGORY,
    REMOVE_CATEGORY_SAGA, SET_ID_PARENT
} from "./constants";
import {getCategories, getCategoriesArrNote, getParentCategory} from "./selectors";
import store from '../../../store/store';

function* removeCategory({payload}) {
    yield put({ type: REMOVE_CATEGORY, payload});
    const categories = yield select(getCategories);
    setStorage("categories", categories);
}

function* addCategory({payload}) {
    const category = yield select(getCategories);
    if ( category.some(item => item.categoryValue === payload.value) ) {
        alert('This category is already added!');
        return false;
    }else if ( category.some(item => item.id === payload.id) ) {
        yield put({ type: CHANGE_CURRENT_CATEGORY, payload});
        const category2 = yield select(getCategories);
        setStorage("categories", category2);
        return false;
    } else {
        yield put({ type: ADD_CATEGORY, payload});
        const categories = yield select(getCategories);
        setStorage("categories", categories);
    }
}

function* addCategoryOfNote({payload}) {
    const categoryArrNote = yield select(getCategoriesArrNote);
    if ( categoryArrNote.some(item =>  item.category === payload.currentCategory) ) {
        alert('This category is already added!');
        return;
    }
    yield put({ type: ADD_CATEGORY_OF_NOTE, payload});
}

function* addChildCategory({payload}) {
    const category = yield select(getCategories);
    const parentCategory = yield select(getParentCategory);
    const newCategory = [...category];
    let parentId = null;
    newCategory.forEach(item => {
        if (item.categoryValue === parentCategory){
            parentId = item.id
            payload.parent = parentId;
            store.dispatch({ type: ADD_CATEGORY_SAGA, payload})
        }
    });
    payload.parent = parentId;
    yield put({ type: SET_ID_PARENT, payload});
}

function* categoriesSaga() {
    yield takeLatest(REMOVE_CATEGORY_SAGA, removeCategory);
    yield takeLatest(ADD_CATEGORY_SAGA, addCategory);
    yield takeLatest(ADD_CATEGORY_OF_NOTE_SAGA, addCategoryOfNote);
    yield takeLatest(ADD_CHILD_CATEGORY_SAGA, addChildCategory);
}

export default categoriesSaga;