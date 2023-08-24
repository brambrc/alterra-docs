const ItemModel = require('../models/itemModel');

function getAllItems(req, res) {
    const items = ItemModel.getAllItems();
    res.json(items);
}

function createItem(req, res) {
    const newItem = ItemModel.createItem(req.body.name);
    res.status(201).json(newItem);
}

function updateItem(req, res) {
    const updatedItem = ItemModel.updateItem(parseInt(req.params.id), req.body.name);
    if (!updatedItem) return res.status(404).send('Item not found.');
    res.json(updatedItem);
}

function deleteItem(req, res) {
    const success = ItemModel.deleteItem(parseInt(req.params.id));
    if (!success) return res.status(404).send('Item not found.');
    res.json({ message: 'Item deleted successfully.' });
}

module.exports = {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
};
