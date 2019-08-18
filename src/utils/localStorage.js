export const getNotesStorage = () => {
    return JSON.parse(localStorage.getItem("notes"))
}

export const setNotesStorage = (notes) => {
   return localStorage.setItem('notes', JSON.stringify(notes));
}