const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.get('/errors', (req, res, next) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
        if (err) {
            next(err); // Pass errors to Express.
        } else {
            res.send(data);
        }
    }
    );
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});