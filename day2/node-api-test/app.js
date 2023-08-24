import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// GET endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from GET!' });
});

// POST endpoint
app.post('/api', (req, res) => {
    const requestBody = req.body;
    res.json({
        message: 'Received from POST!',
        data: requestBody
    });
});

// PUT endpoint
app.put('/api', (req, res) => {
    const requestBody = req.body;
    res.json({
        message: 'Received from PUT!',
        data: requestBody
    });
});

// DELETE endpoint
app.delete('/api', (req, res) => {
    res.json({ message: 'Resource deleted with DELETE!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
