const express = require('express');
const logger = require('./middlewares/logger');
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing application/json
app.use(logger); // middleware for logging
app.use('/api/items', itemsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
