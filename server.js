const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`[LOGIN ATTEMPT] User: ${username} | Pass: ${password}`);
    res.send('<h1>Authentication details submitted securely to backend.</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is live! Access it at: http://localhost:3000`);
});

