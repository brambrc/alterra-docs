const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

// Mocked database of books
let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

// GET endpoint to retrieve all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST endpoint to add a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.json({ message: 'Book added!', book: newBook });
});

// PUT endpoint to update a book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found!' });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json({ message: 'Book updated!', book });
});

// DELETE endpoint to delete a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(b => b.id !== bookId);
    res.json({ message: `Book with ID ${bookId} deleted!` });
});

app.listen(port, () => {
    console.log(`Bookstore API running at http://localhost:${port}`);
});
