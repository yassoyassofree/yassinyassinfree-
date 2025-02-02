const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

let users = [];

app.post('/create-account', (req, res) => {
    const { username, email, password } = req.body;
    users.push({ username, email, password });
    res.send('Account created');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Logged in successfully');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
