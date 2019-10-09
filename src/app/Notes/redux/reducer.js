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
import moment from "moment";


let initialState = {
    notes: [],
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
                    text: action.payload.text,
                    tags: action.payload.tagsNote,
                    categories: action.payload.categoriesNote,
                    color: action.payload.color,
                    date: date
                }]
            };
        case REMOVE_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note => note.id !== action.payload)
            };
        case EDIT_NOTE:
            let newDate = moment().format('lll');
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    if (note.id === action.payload.id) {
                        if (note.text !== action.payload.text) note.date = newDate;
                        note.text = action.payload.text;
                        note.tags = action.payload.tagsNote;
                        note.categories = action.payload.categoriesNote;
                        note.color = action.payload.color;
                    }
                    return note;
                })]
            };
        case CHECKING_TAGS:
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    note.tags.map(item =>
                        item.tag === action.payload.currentTag
                            ?
                            item.tag = action.payload.tag
                            : null
                    );
                    return note;
                })]
            };
        case CHECKING_CATEGORY:
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    note.categories.map(item =>
                        item.category === action.payload.currentCategory
                            ?
                            item.category = action.payload.categoryValue
                            : null
                    );
                    return note;
                })]
            };
        case REMOVE_TAG_OF_NOTE:
            return {
                ...state,
                notes: [...state.notes].filter(note =>
                    note.tags = [...note.tags.filter(t => t.tag !== action.payload)]
                )
            };
        case REMOVE_CATEGORY_OF_NOTE:
            return {
                ...state,
                notes: [...state.notes.map(note => {
                    note.categories = note.categories.filter(t => t.category !== action.payload);
                    return note;
                })]
            };
        case CHANGE_NOTE_VALUE:
            return {
                ...state,
                noteValue: action.payload
            };
        case CHANGE_CURRENT_ID_NOTE:
            return {
                ...state,
                currentIdNote: action.payload
            };
        case CHANGE_COLOR_VALUE:
            return {
                ...state,
                colorValue: action.payload
            };
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload
            };
        default:
            return state;
    }
};

export default notesReducer;