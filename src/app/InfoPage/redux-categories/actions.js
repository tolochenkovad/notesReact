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

export const removeCategoryAC = (id) => ({
    type: REMOVE_CATEGORY_SAGA,
    payload: id
});

export const addCategoryOfNoteAC = (currentCategory, id, parent) => ({
    type: ADD_CATEGORY_OF_NOTE_SAGA,
    payload: {
        currentCategory,
        id,
        parent
    }
});

export const changeCategoryOfNoteAC = (categories) => ({
    type: CHANGE_CATEGORY_OF_NOTE,
    payload: categories
});

export const addCategoryAC = (id, value, parent) => ({
    type: ADD_CATEGORY_SAGA,
    payload: {
        id,
        value,
        parent
    }

});

export const removeArrCategoryOfNoteAC = (id) => ({
    type: REMOVE_ARR_CATEGORY_OF_NOTE,
    payload: id
});

export const setCategoryValueAC = (text) => ({
    type: SET_CATEGORY_VALUE,
    payload: text
});

export const setParentCategoryAC = (value) => ({
    type: SET_PARENT_CATEGORY,
    payload: value
});

export const setCurrentCategoryAC = (currentCategory) => ({
    type: SET_CURRENT_CATEGORY,
    payload: currentCategory
});

export const setCurrentCategoryIdAC = (id) => ({
    type: SET_CURRENT_ID_CATEGORY,
    payload: id
});

export const setActiveCategoryAC = (category) => ({
    type: SET_ACTIVE_CATEGORY,
    payload: category
});

export const addChildCategoryAC = (id, value) => ({
    type: ADD_CHILD_CATEGORY_SAGA,
    payload: {
        id,
        value
    }
});
