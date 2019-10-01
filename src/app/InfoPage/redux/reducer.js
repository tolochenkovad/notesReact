import {getStorage} from "../../../utils/localStorage";
import {
    ADD_TAG,
    ADD_TAG_OF_NOTE,
    CHANGE_CURRENT_TAG,
    CHANGE_TAG_OF_NOTE,
    REMOVE_TAG,
    REMOVE_TAG_OF_NOTE
} from "./constants";


let initialState = {
    tags: getStorage("tags") || [
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
        ],
    tagsArrNote:[]
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
                    if (item.id === action.action.id) item.tag = action.action.tag
                    return item;
                })
            };
        case REMOVE_TAG:
            return {
                ...state,
                tags: [...state.tags.filter(tag => tag.id !== action.action.id)]
            }
        case ADD_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...state.tagsArrNote, {
                    id: Date.now(),
                    tag: action.tag
                }]
            };
        case REMOVE_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...state.tagsArrNote.filter(tag => tag.id !== action.id)]
            };
        case CHANGE_TAG_OF_NOTE:
            return {
                ...state,
                tagsArrNote: [...action.tags]
            }
        default:
            return state;
    }
};

export default tagsReducer;