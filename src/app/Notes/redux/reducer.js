import {ADD_NOTE, EDIT_NOTE, REMOVE_NOTE} from './constants';
import {getStorage} from "../../../utils/localStorage";


let initialState = getStorage("notes") || [];

const createDate = () => {
    let dataNote = new Date().toLocaleDateString();
    let timeNote = new Date().toLocaleTimeString().toString().substring(0,5);
    let currentDate = new Date();
    let curDate = `${dataNote}   ${timeNote}`;
    let date = {
        dateInt: currentDate,
        dateString: curDate
    };
    return date;
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_NOTE:
            let date = createDate();
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
        case EDIT_NOTE:
            let newDate = createDate();
            let newState = [...state];

            newState.forEach(note => {
                if (note.id === action.action.id){
                    if (note.text !== action.action.text) note.date = newDate;
                    note.text = action.action.text
                    note.tags = action.action.tagsNote
                    note.categories = action.action.categoriesNote
                    note.color = action.action.colorNote
                }
            });
            return newState;
        default:
            return state;
    }
};

export default notesReducer;