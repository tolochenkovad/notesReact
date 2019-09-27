import { ADD_NOTE } from './constants';


let initialState = {
    notes:{}
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_NOTE:
            let dataNote = new Date().toLocaleDateString();
            let timeNote = new Date().toLocaleTimeString().toString().substring(0,5);
            let currentData = new Date();
            let curData = `${dataNote}   ${timeNote}`;
            let date = {
                dataInt: currentData,
                dataString: curData
            };
            return {
                ...state,
                notes:[...state.notes, 
                    {
                        id: Date.now(),
                        text: action.text,
                        tags: action.tagsNote,
                        categories: action.categoriesNote,
                        color: action.color,
                        date: date
                    }
                ] 
            }; 
        default:
            return state;
    }
};

export default notesReducer;