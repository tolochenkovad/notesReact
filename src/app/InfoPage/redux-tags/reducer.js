import {getStorage} from "../../../utils/localStorage";
import {
    ADD_TAG,
    ADD_TAG_OF_NOTE, CHANGE_ACTIVE_TAG, CHANGE_CURRENT_ID_TAG,
    CHANGE_CURRENT_TAG,
    CHANGE_TAG_OF_NOTE, CHANGE_TAG_VALUE, REMOVE_ARR_TAG_OF_NOTE,
    REMOVE_TAG, SET_CURRENT_TAG
} from "./constants";


let initialState = {
    tags: getStorage("tags") || [
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
        ],
    tagsArrNote:[],
    tagValue: '',
    currentIdTag: null,
    activeTag: '',
    currentTag: ''
};

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return {
            ...state,
                tags: [...state.tags, {
                    id: Date.now(),
                    tag: action.action.tag
                }]
            };
        case CHANGE_CURRENT_TAG:
            return {
                ...state,
                tags: [...state.tags].map(item => {
                    if (item.id === action.action.id) item.tag = action.action.tag;
                    return item;
                })
            };
        case REMOVE_TAG:
            return {
                ...state,
                tags: [...state.tags.filter(tag => tag.id !== action.action.id)]
            };
        case ADD_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...state.tagsArrNote, {
                    id: Date.now(),
                    tag: action.action.tag
                }]
            };
        case REMOVE_ARR_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...state.tagsArrNote.filter(tag => tag.id !== action.id)]
            };
        case CHANGE_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...action.tags]
            };
        case CHANGE_TAG_VALUE:
            return {
                ...state,
                tagValue: action.tag
            };
        case CHANGE_CURRENT_ID_TAG:
            return {
                ...state,
                currentIdTag: action.id
            };
        case CHANGE_ACTIVE_TAG:
            return {
                ...state,
                activeTag: action.tag
            };
        case SET_CURRENT_TAG:
            return {
                ...state,
                currentTag: action.currentTag
            };
        default:
            return state;
    }
};

export default tagsReducer;