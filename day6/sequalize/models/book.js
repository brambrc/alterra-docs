const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('book', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
});

module.exports = Book;
