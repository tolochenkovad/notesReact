import {
    ADD_NOTE_SAGA,
    CHANGE_COLOR_VALUE,
    CHANGE_CURRENT_ID_NOTE,
    CHANGE_NOTE_VALUE,
    CHANGE_SEARCH_VALUE,
    CHECKING_CATEGORY_SAGA,
    CHECKING_TAGS_SAGA,
    REMOVE_CATEGORY_OF_NOTE_SAGA,
    REMOVE_NOTE_SAGA,
    REMOVE_TAG_OF_NOTE_SAGA
} from './constants';

export const addNoteAC = (id, text, tagsNote, categoriesNote, color) => ({
    type: ADD_NOTE_SAGA,
    payload: {
        id,
        text,
        tagsNote,
        categoriesNote,
        color
    }
});

export const removeNoteAC = (id) => ({
    type: REMOVE_NOTE_SAGA,
    payload: id
});

export const checkTagsNoteAC = (id, tag, currentTag) => ({
    type: CHECKING_TAGS_SAGA,
    payload: {
        id,
        tag,
        currentTag
    }
});

export const removeTagOfNoteAC = (currentTag) => ({
    type: REMOVE_TAG_OF_NOTE_SAGA,
    payload: currentTag
});

export const changeNoteValueAC = (text) => ({
    type: CHANGE_NOTE_VALUE,
    payload: text
});

export const changeCurrentIdNoteAC = (id) => ({
    type: CHANGE_CURRENT_ID_NOTE,
    payload: id
});

export const removeCategoryOfNoteAC = (currentCategoryDel) => ({
    type: REMOVE_CATEGORY_OF_NOTE_SAGA,
    payload: currentCategoryDel
});

export const checkCategoriesNoteAC = (id, categoryValue, currentCategory) => ({
    type: CHECKING_CATEGORY_SAGA,
    payload: {
        id,
        categoryValue,
        currentCategory
    }
});

export const changeColorValueAC = (color) => ({
    type: CHANGE_COLOR_VALUE,
    payload: color
});

export const changeSearchValueAC = (value) => ({
    type: CHANGE_SEARCH_VALUE,
    payload: value
});

