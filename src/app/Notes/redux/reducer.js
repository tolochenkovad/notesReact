import { ADD_NOTE } from './constants';


let initialState = {
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) { 
        case ADD_NOTE:
            // debugger;
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
                    id: Date.now(),
                    text: action.text,
                    tags: action.tagsNote,
                    categories: action.categoriesNote,
                    color: action.color,
                    date: date
            }; 
            // доделать стейт 
        default:
            return state;
    }
};

export default notesReducer;