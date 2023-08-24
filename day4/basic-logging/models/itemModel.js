class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let items = [];

function getAllItems() {
    return items;
}

function createItem(name) {
    const newItem = new Item(items.length + 1, name);
    items.push(newItem);
    return newItem;
}

function getItemById(id) {
    return items.find(item => item.id === id);
}

function updateItem(id, name) {
    const item = getItemById(id);
    if (item) {
        item.name = name;
    }
    return item;
}

function deleteItem(id) {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
    }
    return index !== -1;
}

module.exports = {
    getAllItems,
    createItem,
    getItemById,
    updateItem,
    deleteItem
};
