const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Import and use the book routes
const bookRoutes = require('./routes/book');
app.use('/api/books', bookRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
