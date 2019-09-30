import {getStorage} from "../../../utils/localStorage";
import {ADD_TAG, CHANGE_CURRENT_TAG, REMOVE_TAG} from "./constants";


let initialState = getStorage("tags") || [
    {id: 1, tag: 'important'},
    {id: 2, tag: 'home'},
    {id: 3, tag: 'work'}
];

const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TAG:
            return [
                ...state,
                {
                    id: Date.now(),
                    tag: action.action.tag
                }
            ];
        case CHANGE_CURRENT_TAG:
            let newState = [...state];
            newState.forEach(item => {
                if (item.id === action.action.id) item.tag = action.action.tag
            });
            return newState;
        case REMOVE_TAG:
            return [...state].filter(tag => tag.id !== action.action.id);
        default:
            return state;
    }
};

export default tagsReducer;