import {ADD_NOTE_SAGA, REMOVE_NOTE_SAGA} from './constants';

export const addNoteAC = (text, tagsNote, categoriesNote, color) => ({ type: ADD_NOTE_SAGA, text, tagsNote, categoriesNote, color });
export const removeNoteAC = (id) => ({ type: REMOVE_NOTE_SAGA, id });