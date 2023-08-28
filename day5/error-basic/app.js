    const express = require('express');
    const app = express();
    const PORT = 3000;


    app.get('/errors', (req, res) => {
       throw new Error('BROKEN');
    });


    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });