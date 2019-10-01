import {
    ADD_TAG_OF_NOTE,
    ADD_TAG_SAGA,
    CHANGE_CURRENT_TAG_SAGA,
    CHANGE_TAG_OF_NOTE,
    REMOVE_TAG_OF_NOTE,
    REMOVE_TAG_SAGA
} from "./constants";

export const changeCurrentTagAC = (id, tag) => ({ type: CHANGE_CURRENT_TAG_SAGA, id, tag });
export const addTagAC = (tag) => ({ type: ADD_TAG_SAGA, tag });
export const removeTagAC = (id) => ({ type: REMOVE_TAG_SAGA, id });
export const addTagOfNoteAC = (tag) => ({ type: ADD_TAG_OF_NOTE, tag });
export const removeTagOfNoteAC = (id) => ({ type: REMOVE_TAG_OF_NOTE, id });
export const changeTagOfNoteAC = (tags) => ({ type: CHANGE_TAG_OF_NOTE, tags });