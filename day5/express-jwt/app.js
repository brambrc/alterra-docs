const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'th1s1ss3cr3t';

//call checkRole function from middleware.js
const { checkRole } = require('./middleware/middleware');

const app = express();
app.use(express.json());

const users = [];



app.post('/register', async (req, res) => {
    const {username, password, role} = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    console.log(hashedPassword)

    users.push({
        username,
        password: hashedPassword,
        role
    })

    res.status(201).json({
        message: 'User created'
    })
});

app.post('/login', async (req, res) => {
        const {username, password} = req.body;

        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(400).json({
                message: 'Authentication Failed, user not found'
            })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Authentication Failed, wrong password'
            })
        }

    
    const token = jwt.sign({ username, role: user.role }, secretKey, { expiresIn: '1h' });
    res.status(200).json({
        message: 'Authentication success',
        token
    })

});



app.get('/users', checkRole('Admin'), (req, res) => {

    res.status(200).json({
        message: 'List of users',
        users
    })

});



const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});