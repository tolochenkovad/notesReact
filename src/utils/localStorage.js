export const getNotesStorage = () => {
    return JSON.parse(localStorage.getItem("notes"))
}

export const getTagsStorage = () => {
    return JSON.parse(localStorage.getItem("tags"))
}

export const getCategoryStorage = () => {
    return JSON.parse(localStorage.getItem("category"))
}

export const setNoteStorage = (element) => {
   return localStorage.setItem("notes", JSON.stringify(element));
}

export const setTagsStorage = (element) => {
    return localStorage.setItem("tags", JSON.stringify(element));
}

export const setCategoryStorage = (element) => {
    return localStorage.setItem("category", JSON.stringify(element));
}