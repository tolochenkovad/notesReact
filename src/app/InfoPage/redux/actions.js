import {ADD_TAG_SAGA, CHANGE_CURRENT_TAG_SAGA, REMOVE_TAG_SAGA} from "./constants";

export const changeCurrentTagAC = (id, tag) => ({ type: CHANGE_CURRENT_TAG_SAGA, id, tag });
export const addTagAC = (tag) => ({ type: ADD_TAG_SAGA, tag });
export const removeTagAC = (id) => ({ type: REMOVE_TAG_SAGA, id });