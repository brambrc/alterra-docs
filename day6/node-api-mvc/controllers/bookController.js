const BookModel = require('../models/bookModel');

class BookController {
  getBooks(req, res) {
    console.log(req.query.status)
    if (req.query.status == 'error') {
      return res.json({ message: 'Error occurred!' });
    } else {
        let books = BookModel.getAllBooks();
      res.json({
        message: 'Books retrieved!',
        books: books
    });
    }
    
  }

  addNewBook(req, res) {
    const newBook = BookModel.addBook(req.body);
    res.json({ message: 'Book added!', book: newBook });
  }

  updateExistingBook(req, res) {
    const updatedBook = BookModel.updateBook(parseInt(req.params.id), req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found!' });
    res.json({ message: 'Book updated!', book: updatedBook });
  }

  removeBook(req, res) {
    const success = BookModel.deleteBook(parseInt(req.params.id));
    if (!success) return res.status(404).json({ message: 'Book not found!' });
    res.json({ message: `Book deleted!` });
  }
}

module.exports = new BookController();
