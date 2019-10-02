import {
    ADD_NOTE, CHANGE_COLOR_VALUE,
    CHANGE_CURRENT_ID_NOTE,
    CHANGE_NOTE_VALUE, CHANGE_SEARCH_VALUE, CHECKING_CATEGORY,
    CHECKING_TAGS,
    EDIT_NOTE, REMOVE_CATEGORY_OF_NOTE,
    REMOVE_NOTE,
    REMOVE_TAG_OF_NOTE
} from './constants';
import {getStorage} from "../../../utils/localStorage";


let initialState = {
    notes:  getStorage("notes") || [],
    noteValue: '',
    currentIdNote: null,
    colorValue: 'orange',
    searchValue: '',
    colorArr: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
}


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
            return {
                ...state,
                notes: [...state.notes, {
                    id: Date.now(),
                    text: action.action.text,
                    tags: action.action.tagsNote,
                    categories: action.action.categoriesNote,
                    color: action.action.color,
                    date: date
                }]
            };
        case REMOVE_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.action.id)
            }
        case EDIT_NOTE:
            let newDate = createDate();
            let newState = {...state};
            newState.notes.forEach(note => {
                if (note.id === action.action.id){
                    if (note.text !== action.action.text) note.date = newDate;
                    note.text = action.action.text
                    note.tags = action.action.tagsNote
                    note.categories = action.action.categoriesNote
                    note.color = action.action.color
                }
            });
            return newState;
        case CHECKING_TAGS:
            let newState2 = {...state};
            newState2.notes.map(note =>
                note.tags.map( item =>
                    item.tag === action.action.currentTag
                    ?
                        item.tag = action.action.tag
                    :   null
                )
            );
            return newState2;
        case CHECKING_CATEGORY:
            let newState5 = {...state};
            newState5.notes.map(note =>
                note.categories.map( item =>
                    item.category === action.action.currentCategory
                        ?
                        item.category = action.action.categoryValue
                        :   null
                )
            );
            return newState5;
        case REMOVE_TAG_OF_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note =>
                    note.tags = [...note.tags.filter( t => t.tag !== action.action.currentTag)]
                )
            };
        case REMOVE_CATEGORY_OF_NOTE:
            let newState4 = {...state};
            newState4.notes.map(note =>
                note.categories = note.categories.filter( t => t.category !== action.action.currentCategoryDel));
            return newState4;
        case CHANGE_NOTE_VALUE:
            return {
                ...state,
                noteValue: action.text
            };
        case CHANGE_CURRENT_ID_NOTE:
            return {
                ...state,
                currentIdNote: action.id
            };
        case CHANGE_COLOR_VALUE:
            return {
                ...state,
                colorValue: action.color
            }
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.value
            }
        default:
            return state;
    }
};

export default notesReducer;