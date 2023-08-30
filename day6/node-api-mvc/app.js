const express = require('express');
const BookController = require('./controllers/bookController');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/books', BookController.getBooks);
app.post('/books', BookController.addNewBook);
app.put('/books/:id', BookController.updateExistingBook);
app.delete('/books/:id', BookController.removeBook);

app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});

module.exports = app;