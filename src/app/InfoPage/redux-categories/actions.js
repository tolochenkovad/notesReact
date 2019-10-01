import {
    ADD_CATEGORY_OF_NOTE, ADD_CATEGORY_SAGA,
    CHANGE_CATEGORY_OF_NOTE,
    CHANGE_CURRENT_CATEGORY_SAGA,
    REMOVE_CATEGORY_SAGA
} from "./constants";

export const changeCurrentCategoryAC = (id, text) => ({ type: CHANGE_CURRENT_CATEGORY_SAGA, id, text });
export const removeCategoryAC = (id) => ({ type: REMOVE_CATEGORY_SAGA, id});
export const addCategoryOfNoteAC = (currentCategory, id, parent) => ({ type: ADD_CATEGORY_OF_NOTE, currentCategory, id, parent});
export const changeCategoryOfNoteAC = (categories) => ({ type: CHANGE_CATEGORY_OF_NOTE, categories });
export const addCategoryAC = (id, value, parent) => ({ type: ADD_CATEGORY_SAGA, id, value, parent });
