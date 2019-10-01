import {getStorage} from "../../../utils/localStorage";
import {
    ADD_CATEGORY,
    ADD_CATEGORY_OF_NOTE,
    CHANGE_CATEGORY_OF_NOTE,
    CHANGE_CURRENT_CATEGORY,
    REMOVE_CATEGORY
} from "./constants";

let initialState = {
    category: getStorage("categories") || [],
    categoryArrNote: []
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, {
                    id: action.action.id,
                    categoryValue: action.action.value,
                    parent: action.action.parent
                }]
            };
        case CHANGE_CURRENT_CATEGORY:
            return {
                ...state,
                category: [...state.category].map(item => {
                    if (item.id === action.action.id) item.categoryValue = action.action.text
                    return item;
                })
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                category: [...state.category.filter(category => category.id !== action.action.id)]
            }
        case ADD_CATEGORY_OF_NOTE:
            let currentId = action.id;
            let currentParent = action.parent;
            let newCategory = [...state.category];
            let newCategoryArrNote = [...state.categoryArrNote];
            newCategory.map(c => {
                if (c.categoryValue === action.currentCategory) {
                    currentId = c.id;
                    currentParent = c.parent
                }
                return c;
            })
            newCategoryArrNote.map(item => {
                    if (item.id === currentParent){
                        item.category = action.currentCategory;
                        item.id = currentId
                    }
                    return item;
                }

            );

            if ( [...state.categoryArrNote].some(item => item.category === action.currentCategory) ) {
                return;
            }
            return {
                ...state,
                categoryArrNote: [...state.categoryArrNote,{
                    id: currentId,
                    category: action.currentCategory,
                    parent: currentParent
                }]
            };
        case CHANGE_CATEGORY_OF_NOTE:
            return {
                ...state,
                categoryArrNote: [...action.categories]
            };
        default:
            return state;
    }
};

export default categoriesReducer;