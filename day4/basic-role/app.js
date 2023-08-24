const express = require('express');
const productsRoutes = require('./routes/products');

const app = express();
const PORT = 3000;

app.use('/api/products', productsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
