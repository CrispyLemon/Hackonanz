const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = []; // In-memory user store, for production use a database like MongoDB, MySQL etc.

const SECRET_KEY = "dafec4b9bc40ea95322b08476482c9c815ccef5dad7090be31d1b9008a93a82110dfbd190f05d6990f6a92a2d36e2318851500050d6bd5d376d833fbf7f1d2887d07e8ddede160986408ed97dcd0f9e14695050ce06094b01c6c5106e841cea645322b6b3ff4b9584fd1fae4865beab9f4f8ecdae2c5349bb351ed55bdeaef2d017d48c5db15e09dcc625267998494a69d55d070a3e2f3567e6c0b627915eebe5d463f7842df294e7de3337e520ed7dc0e2f562b5be50d348f268858deff635e169b1907fc0ff2049d7ab7a7dc66482e7a0ddd672f470dc18117e234843c54b1fc6bb970145ba41f07b92047fe4e82de3eba2cc9c5b18a78c5fea92da3c90ba9";

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
