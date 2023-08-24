const BookModel = require('../models/bookModel');

function getBooks(req, res) {
    res.json(BookModel.getAllBooks());
}

function addNewBook(req, res) {
    const newBook = BookModel.addBook(req.body);
    res.json({ message: 'Book added!', book: newBook });
}

function updateExistingBook(req, res) {
    const updatedBook = BookModel.updateBook(parseInt(req.params.id), req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });
    res.json({ message: 'Book updated!', book: updatedBook });
}

function removeBook(req, res) {
    const success = BookModel.deleteBook(parseInt(req.params.id));
    if (!success) return res.status(404).json({ message: 'Book not found!' });
    res.json({ message: `Book deleted!` });
}

module.exports = {
    getBooks,
    addNewBook,
    updateExistingBook,
    removeBook
};
