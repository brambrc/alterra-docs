const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Create a book
router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the book.' });
  }
});

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  res.json(book);
});

// Update a book by ID
router.put('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  await book.update(req.body);
  res.json(book);
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  await book.destroy();
  res.json({ message: 'Book deleted.' });
});

module.exports = router;
