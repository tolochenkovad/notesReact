import {getStorage} from "../../../utils/localStorage";
import {
    ADD_CATEGORY,
    ADD_CATEGORY_OF_NOTE,
    CHANGE_CATEGORY_OF_NOTE,
    CHANGE_CURRENT_CATEGORY,
    REMOVE_ARR_CATEGORY_OF_NOTE,
    REMOVE_CATEGORY,
    SET_ACTIVE_CATEGORY,
    SET_CATEGORY_VALUE,
    SET_CURRENT_CATEGORY,
    SET_CURRENT_ID_CATEGORY, SET_ID_PARENT,
    SET_PARENT_CATEGORY
} from "./constants";

let initialState = {
    category: getStorage("categories") || [],
    categoryArrNote: [],
    categoryValue: '',
    parentCategory: '',
    currentCategory: '',
    currentIdCategory: null,
    activeCategory: '',
    idParentCategory: null
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
                    if (item.id === action.action.id) item.categoryValue = action.action.value
                    return item;
                })
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                category: [...state.category.filter(category => category.id !== action.action.id)]
            }
        case ADD_CATEGORY_OF_NOTE:
            let currentId = action.action.id;
            let currentParent = action.action.parent;
            let newCategory = [...state.category];
            let newCategoryArrNote = [...state.categoryArrNote];
            newCategory.map(c => {
                if (c.categoryValue === action.action.currentCategory) {
                    currentId = c.id;
                    currentParent = c.parent
                }
                return c;
            })
            newCategoryArrNote.map(item => {
                    if (item.id === currentParent){
                        item.category = action.action.currentCategory;
                        item.id = currentId
                    }
                    return item;
                }

            );

            if ( [...state.categoryArrNote].some(item => item.category === action.action.currentCategory) ) {
                return;
            }
            return {
                ...state,
                categoryArrNote: [...state.categoryArrNote,{
                    id: currentId,
                    category: action.action.currentCategory,
                    parent: currentParent
                }]
            };
        case CHANGE_CATEGORY_OF_NOTE:
            return {
                ...state,
                categoryArrNote: [...action.categories]
            };
        case REMOVE_ARR_CATEGORY_OF_NOTE:
            return {
                ...state,
                categoryArrNote: [...state.categoryArrNote.filter(tag => tag.id !== action.id)]
            };
        case SET_CATEGORY_VALUE:
            return {
                ...state,
                categoryValue: action.text
            };
        case SET_PARENT_CATEGORY:
            return {
                ...state,
                parentCategory: action.value
            };
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        case SET_CURRENT_ID_CATEGORY:
            return {
                ...state,
                currentIdCategory: action.id
            };
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.category
            };
        case SET_ID_PARENT:
            return {
                ...state,
                idParentCategory: action.parent
            }
        default:
            return state;
    }
};

export default categoriesReducer;