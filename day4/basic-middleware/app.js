const express = require('express');
const logger = require('./middlewares/logger');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

// Menggunakan middleware logger
app.use(logger);

// Menentukan routes
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
