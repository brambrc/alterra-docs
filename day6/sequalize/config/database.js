const Sequelize = require('sequelize');

const sequelize = new Sequelize('books', 'root', 'Kmzway87a@', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;