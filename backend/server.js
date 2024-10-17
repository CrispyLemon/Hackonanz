const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

const users = []; // In-memory user store, for production use a database like MongoDB, MySQL etc.

const SECRET_KEY = "7b216a109d3fa590d08145e39bc5dced413533e639244feebd59941d047bdf89ba1ab5a7485886e4bf0cf0345dbd010191c86186882684b6908637476cd85dd84129558bb3ada81442e0c11ad60d49e58421489d00275cdf09d4352534baec2d0d04bb8da1918d5658f17202817b02a597a7b17a56b9875d87157803b0329d971ba2ff68cf9c947750cb2b9e112af01cc861a7ed710429e160562a665e48312aa8a77ce6b85527c40576777eabf513057d6ea3abab27dce89e9d6348c1aa1078f5703fdc2c4656cca9154134649613a001fbb185bedaaf7afd2c33fef89b284e34d42ecfb6bf843315d4be372e1f7e38c3af03b55787a25582053d817d98572e";

// Register route
app.post('/api/register', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.json({ message: 'User registered successfully' });
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token is missing' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Example protected route
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed', user: req.user });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
