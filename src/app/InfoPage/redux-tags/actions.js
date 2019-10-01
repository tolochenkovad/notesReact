import {
    ADD_TAG_OF_NOTE_SAGA,
    ADD_TAG_SAGA, CHANGE_ACTIVE_TAG, CHANGE_CURRENT_ID_TAG,
    CHANGE_CURRENT_TAG_SAGA,
    CHANGE_TAG_OF_NOTE, CHANGE_TAG_VALUE,
    REMOVE_ARR_TAG_OF_NOTE,
    REMOVE_TAG_SAGA, SET_CURRENT_TAG
} from "./constants";

export const changeCurrentTagAC = (id, tag) => ({ type: CHANGE_CURRENT_TAG_SAGA, id, tag });
export const addTagAC = (id, tag) => ({ type: ADD_TAG_SAGA, id, tag });
export const removeTagAC = (id) => ({ type: REMOVE_TAG_SAGA, id });
export const addTagOfNoteAC = (tag) => ({ type: ADD_TAG_OF_NOTE_SAGA, tag });
export const removeArrTagOfNoteAC = (id) => ({ type: REMOVE_ARR_TAG_OF_NOTE, id });
export const changeTagOfNoteAC = (tags) => ({ type: CHANGE_TAG_OF_NOTE, tags });
export const changeTagsValueAC = (tag) => ({ type: CHANGE_TAG_VALUE, tag });
export const changeCurrentIdTagAC = (id) => ({ type: CHANGE_CURRENT_ID_TAG, id });
export const changeActiveTagAC = (tag) => ({ type: CHANGE_ACTIVE_TAG, tag });
export const setCurrentTagAC = (currentTag) => ({ type: SET_CURRENT_TAG, currentTag });