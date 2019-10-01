import {
    ADD_NOTE_SAGA,
    CHECKING_TAGS_SAGA,
    EDIT_NOTE_SAGA,
    REMOVE_NOTE_SAGA,
    REMOVE_TAG_OF_NOTE_SAGA
} from './constants';

export const addNoteAC = (text, tagsNote, categoriesNote, color) => ({ type: ADD_NOTE_SAGA, text, tagsNote, categoriesNote, color });
export const removeNoteAC = (id) => ({ type: REMOVE_NOTE_SAGA, id });
export const changeNoteAC = (id, text, tagsNote, categoriesNote, colorNote) => ({type: EDIT_NOTE_SAGA, id, text, tagsNote, categoriesNote, colorNote});
export const checkTagsNoteAC = (id, tag, currentTag) => ({type: CHECKING_TAGS_SAGA, id, tag, currentTag});
export const removeTagOfNoteAC = (currentTag) => ({type: REMOVE_TAG_OF_NOTE_SAGA, currentTag});
// export const removeTagOfNoteAC = (currentTag) => ({type: REMOVE_TAG_OF_NOTE_SAGA, currentTag});