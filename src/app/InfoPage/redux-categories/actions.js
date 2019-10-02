import {
    ADD_CATEGORY_OF_NOTE_SAGA,
    ADD_CATEGORY_SAGA, ADD_CHILD_CATEGORY_SAGA,
    CHANGE_CATEGORY_OF_NOTE,
    REMOVE_ARR_CATEGORY_OF_NOTE,
    REMOVE_CATEGORY_SAGA,
    SET_ACTIVE_CATEGORY,
    SET_CATEGORY_VALUE,
    SET_CURRENT_CATEGORY,
    SET_CURRENT_ID_CATEGORY,
    SET_PARENT_CATEGORY
} from "./constants";

export const removeCategoryAC = (id) => ({ type: REMOVE_CATEGORY_SAGA, id});
export const addCategoryOfNoteAC = (currentCategory, id, parent) => ({ type: ADD_CATEGORY_OF_NOTE_SAGA, currentCategory, id, parent});
export const changeCategoryOfNoteAC = (categories) => ({ type: CHANGE_CATEGORY_OF_NOTE, categories });
export const addCategoryAC = (id, value, parent) => ({ type: ADD_CATEGORY_SAGA, id, value, parent });
export const removeArrCategoryOfNoteAC = (id) => ({ type: REMOVE_ARR_CATEGORY_OF_NOTE, id });
export const setCategoryValueAC = (text) => ({ type: SET_CATEGORY_VALUE, text });
export const setParentCategoryAC = (value) => ({ type: SET_PARENT_CATEGORY, value });
export const setCurrentCategoryAC = (currentCategory) => ({ type: SET_CURRENT_CATEGORY, currentCategory });
export const setCurrentCategoryIdAC = (id) => ({ type: SET_CURRENT_ID_CATEGORY, id });
export const setActiveCategoryAC = (category) => ({ type: SET_ACTIVE_CATEGORY, category });
export const addChildCategoryAC = (id, value) => ({ type: ADD_CHILD_CATEGORY_SAGA, id, value });
