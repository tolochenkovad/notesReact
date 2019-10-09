export const getTags = (state) => {
    return state.tags.tags;
};

export const getTagsOfNote = (state) => {
    return state.tags.tagsArrNote;
};

export const getTagValue = (state) => {
    return state.tags.tagValue;
};

export const getCurrentIdTag = (state) => {
    return state.tags.currentIdTag;
};
export const getActiveTag = (state) => {
    return state.tags.activeTag;
};

export const getCurrentTag = (state) => {
    return state.tags.currentTag;
};


