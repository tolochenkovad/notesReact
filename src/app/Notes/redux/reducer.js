import {ADD_NOTE, REMOVE_NOTE} from './constants';
import {getStorage} from "../../../utils/localStorage";


let initialState = getStorage("notes") || [];

const notesReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_NOTE:
            let dataNote = new Date().toLocaleDateString();
            let timeNote = new Date().toLocaleTimeString().toString().substring(0,5);
            let currentData = new Date();
            let curData = `${dataNote}   ${timeNote}`;
            let date = {
                dateInt: currentData,
                dateString: curData
            };
            return [
                ...state,
                    {
                        id: Date.now(),
                        text: action.action.text,
                        tags: action.action.tagsNote,
                        categories: action.action.categoriesNote,
                        color: action.action.color,
                        date: date
                    }
            ];
        case REMOVE_NOTE:
            return [...state].filter(note => note.id !== action.action.id);
        default:
            return state;
    }
};

export default notesReducer;