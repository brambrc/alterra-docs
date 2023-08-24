import express  from "express";

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! GET requested from homepage', 200);
    });

app.get('/users', (req, res) => {
    res.send("this api is for getting user data", 200);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    });