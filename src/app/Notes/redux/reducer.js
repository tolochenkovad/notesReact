import {
    ADD_NOTE,
    CHANGE_COLOR_VALUE,
    CHANGE_CURRENT_ID_NOTE,
    CHANGE_NOTE_VALUE,
    CHANGE_SEARCH_VALUE,
    CHECKING_CATEGORY,
    CHECKING_TAGS,
    EDIT_NOTE,
    REMOVE_CATEGORY_OF_NOTE,
    REMOVE_NOTE,
    REMOVE_TAG_OF_NOTE
} from './constants';
import {getStorage} from "../../../utils/localStorage";
import moment from "moment";


let initialState = {
    notes:  getStorage("notes") || [],
    noteValue: '',
    currentIdNote: null,
    colorValue: '#fdcb6e',
    searchValue: '',
    colorArr: ['#ff7675', '#fdcb6e', '#EE5A24', '#00b894', '#74b9ff', '#9980FA']
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            let date = moment().format('lll');
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
            };
        case EDIT_NOTE:
            let newDate = moment().format('lll');
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    if (note.id === action.action.id){
                        if (note.text !== action.action.text) note.date = newDate;
                        note.text = action.action.text;
                        note.tags = action.action.tagsNote;
                        note.categories = action.action.categoriesNote;
                        note.color = action.action.color;
                    }
                    return note;
                })]
            };
        case CHECKING_TAGS:
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    note.tags.map( item =>
                        item.tag === action.action.currentTag
                            ?
                            item.tag = action.action.tag
                            :   null
                    );
                    return note;
                })]
            };
        case CHECKING_CATEGORY:
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    note.categories.map( item =>
                        item.category === action.action.currentCategory
                            ?
                            item.category = action.action.categoryValue
                            :   null
                    );
                    return note;
                })]
            };
        case REMOVE_TAG_OF_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note =>
                    note.tags = [...note.tags.filter( t => t.tag !== action.action.currentTag)]
                )
            };
        case REMOVE_CATEGORY_OF_NOTE:
            return {
                ...state,
                notes: [...state.notes.map(note =>{
                        note.categories = note.categories.filter( t => t.category !== action.action.currentCategoryDel);
                        return note;
                    })]
            };
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
            };
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.value
            };
        default:
            return state;
    }
};

export default notesReducer;