const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Prefix grouping for user routes
app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});