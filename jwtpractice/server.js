const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Secret key
const SECRET_KEY = "mysecretkey";

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(username === "admin" && password === "password") {
        const payload = { username, role: "admin" };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: "Login successful", token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// Middleware to verify token
function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token) return res.status(403).json({ message: "No token provided" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) return res.status(401).json({ message: "Invalid token" });
        req.user = decoded;
        next();
    });
}

// Protected dashboard route
app.get('/dashboard', verifyToken, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}!`, role: req.user.role });
});

// Serve static HTML directly from a string
app.get('/index.html', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>JWT Demo</title>
</head>
<body>
<h2>Login Form</h2>
<form id="loginForm">
<label>Username: </label>
<input type="text" id="username" value="admin"><br><br>
<label>Password: </label>
<input type="password" id="password" value="password"><br><br>
<button type="submit">Login</button>
</form>

<h2>Dashboard</h2>
<button id="getDashboard">Get Dashboard</button>
<pre id="result"></pre>

<script>
let token = "";

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);

    if(res.ok) token = data.token;
});

document.getElementById('getDashboard').addEventListener('click', async () => {
    if(!token) { alert('Login first!'); return; }

    const res = await fetch('/dashboard', {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
    });

    const data = await res.json();
    document.getElementById('result').textContent = JSON.stringify(data, null, 2);
});
</script>
</body>
</html>
    `);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
    