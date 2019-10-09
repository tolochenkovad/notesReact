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
    category: [],
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
                    id: action.payload.id,
                    categoryValue: action.payload.value,
                    parent: action.payload.parent
                }]
            };
        case CHANGE_CURRENT_CATEGORY:
            return {
                ...state,
                category: [...state.category].map(item => {
                    if (item.id === action.payload.id) item.categoryValue = action.payload.value;
                    return item;
                })
            };
        case REMOVE_CATEGORY:
            return {
                ...state,
                category: [...state.category.filter(category => category.id !== action.payload)]
            };
        case ADD_CATEGORY_OF_NOTE:
            let currentId = action.payload.id;
            let currentParent = action.payload.parent;
            let newCategory = [...state.category];
            let newCategoryArrNote = [...state.categoryArrNote];
            newCategory.map(c => {
                if (c.categoryValue === action.payload.currentCategory) {
                    currentId = c.id;
                    currentParent = c.parent
                }
                return c;
            });
            newCategoryArrNote.map(item => {
                    if (item.id === currentParent) {
                        item.category = action.payload.currentCategory;
                        item.id = currentId
                    }
                    return item;
                }
            );

            if ([...state.categoryArrNote].some(item => item.category === action.payload.currentCategory)) {
                return {...state};
            }
            return {
                ...state,
                categoryArrNote: [...state.categoryArrNote, {
                    id: currentId,
                    category: action.payload.currentCategory,
                    parent: currentParent
                }]
            };
        case CHANGE_CATEGORY_OF_NOTE:
            return {
                ...state,
                categoryArrNote: [...action.payload]
            };
        case REMOVE_ARR_CATEGORY_OF_NOTE:
            return {
                ...state,
                categoryArrNote: [...state.categoryArrNote.filter(tag => tag.id !== action.payload)]
            };
        case SET_CATEGORY_VALUE:
            return {
                ...state,
                categoryValue: action.payload
            };
        case SET_PARENT_CATEGORY:
            return {
                ...state,
                parentCategory: action.payload
            };
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            };
        case SET_CURRENT_ID_CATEGORY:
            return {
                ...state,
                currentIdCategory: action.payload
            };
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            };
        case SET_ID_PARENT:
            return {
                ...state,
                idParentCategory: action.payload.parent
            };
        default:
            return state;
    }
};

export default categoriesReducer;