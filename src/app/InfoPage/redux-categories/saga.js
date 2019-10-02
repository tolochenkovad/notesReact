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

function* removeCategory(action) {
    yield put({ type: REMOVE_CATEGORY, action});
    const categories = yield select(getCategories);
    setStorage("categories", categories);
};

function* addCategory(action) {
    const category = yield select(getCategories);
    if ( category.some(item => item.categoryValue === action.value) ) {
        alert('This category is already added!');
        return;
    }else if ( category.some(item => item.id === action.id) ) {
        yield put({ type: CHANGE_CURRENT_CATEGORY, action});
        const category2 = yield select(getCategories);
        setStorage("categories", category2);
        return;
    } else {
        yield put({ type: ADD_CATEGORY, action});
        const categories = yield select(getCategories);
        setStorage("categories", categories);
    }
};

function* addCategoryOfNote(action) {
    const categoryArrNote = yield select(getCategoriesArrNote);
    if ( categoryArrNote.some(item =>  item.category === action.currentCategory) ) {
        alert('This category is already added!');
        return;
    }
    yield put({ type: ADD_CATEGORY_OF_NOTE, action});
};

function* addChildCategory(action) {
    const category = yield select(getCategories);
    const parentCategory = yield select(getParentCategory);

    let parent = null;
    let newCategory = [...category];
    newCategory.forEach(item => {
        if (item.categoryValue === parentCategory){
            parent = item.id;
            let {id, value} = action;
            store.dispatch({ type: ADD_CATEGORY_SAGA, id, value, parent})
        }
    });
    yield put({ type: SET_ID_PARENT, parent});
};




function* categoriesSaga() {
    yield takeLatest(REMOVE_CATEGORY_SAGA, removeCategory);
    yield takeLatest(ADD_CATEGORY_SAGA, addCategory);
    yield takeLatest(ADD_CATEGORY_OF_NOTE_SAGA, addCategoryOfNote);
    yield takeLatest(ADD_CHILD_CATEGORY_SAGA, addChildCategory);
};

export default categoriesSaga;