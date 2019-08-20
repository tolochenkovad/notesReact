export const getNotesStorage = () => {
    return JSON.parse(localStorage.getItem("notes"))
}

export const getTagsStorage = () => {
    return JSON.parse(localStorage.getItem("tags"))
}

export const setNoteStorage = (element) => {
   return localStorage.setItem("notes", JSON.stringify(element));
}

export const setTagsStorage = (element) => {
    return localStorage.setItem("tags", JSON.stringify(element));
}