import { ADD_NOTE_SAGA } from './constants';

export const addNoteAC = (text, tagsNote, categoriesNote, color) => ({ type: ADD_NOTE_SAGA, text, tagsNote, categoriesNote, color })