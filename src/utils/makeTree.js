 export const buildTree = (items, parent) => {
    parent = parent || null;
    let result = [];

    items.forEach((item) => {
        if (item.parent === parent) {
            result.push(item);
            item.children = buildTree(items, item.id);

            if (!item.children.length) {
                delete item.children;
            }
        }
    });
    
    return result;
}