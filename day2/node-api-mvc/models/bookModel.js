let books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

function getAllBooks() {
    return books;
}

function addBook(book) {
    const newBook = {
        id: books.length + 1,
        ...book
    };
    books.push(newBook);
    return newBook;
}

function updateBook(id, updatedBook) {
    const bookIndex = books.findIndex(b => b.id === id);
    if (bookIndex === -1) return null;

    books[bookIndex] = { id, ...updatedBook };
    return books[bookIndex];
}

function deleteBook(id) {
    const bookIndex = books.findIndex(b => b.id === id);
    if (bookIndex === -1) return false;

    books.splice(bookIndex, 1);
    return true;
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
};
