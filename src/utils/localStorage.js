export const getStorage = (el) => {
    return JSON.parse(localStorage.getItem(el))
}

export const setStorage = (key, element) => {
   return localStorage.setItem(key, JSON.stringify(element));
}
