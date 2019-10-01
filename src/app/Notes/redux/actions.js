import {
    ADD_NOTE_SAGA, CHANGE_CURRENT_ID_NOTE, CHANGE_NOTE_VALUE, CHECKING_CATEGORY_SAGA,
    CHECKING_TAGS_SAGA,
    EDIT_NOTE_SAGA, REMOVE_CATEGORY_OF_NOTE_SAGA,
    REMOVE_NOTE_SAGA,
    REMOVE_TAG_OF_NOTE_SAGA
} from './constants';

export const addNoteAC = (text, tagsNote, categoriesNote, color) => ({ type: ADD_NOTE_SAGA, text, tagsNote, categoriesNote, color });
export const removeNoteAC = (id) => ({ type: REMOVE_NOTE_SAGA, id });
export const changeNoteAC = (id, text, tagsNote, categoriesNote, colorNote) => ({type: EDIT_NOTE_SAGA, id, text, tagsNote, categoriesNote, colorNote});
export const checkTagsNoteAC = (id, tag, currentTag) => ({type: CHECKING_TAGS_SAGA, id, tag, currentTag});
export const removeTagOfNoteAC = (currentTag) => ({type: REMOVE_TAG_OF_NOTE_SAGA, currentTag});
export const changeNoteValueAC = (text) => ({type: CHANGE_NOTE_VALUE, text});
export const changeCurrentIdNoteAC = (id) => ({type: CHANGE_CURRENT_ID_NOTE, id});
export const removeCategoryOfNoteAC = (currentCategoryDel) => ({type: REMOVE_CATEGORY_OF_NOTE_SAGA, currentCategoryDel});
export const checkCategoriesNoteAC = (id, categoryValue, currentCategory) => ({type: CHECKING_CATEGORY_SAGA, id, categoryValue, currentCategory});
