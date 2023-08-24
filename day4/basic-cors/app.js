const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'https://example.com',
    optionsSuccessStatus: 200
}

// Use CORS middleware
app.use(cors(corsOptions));

app.get('/data', (req, res) => {
    res.json({ message: 'This is data from the server.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
