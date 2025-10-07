import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';// For ES module __dirname fix

// Router setup
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// In-memory user storage
const users = [];
// Routes
router.get('/', (req, res) => {
  res.redirect('/signup');
});

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'signup.html'));
});
// Handle form submission
router.post('/signup', (req, res) => {
        const { username, password } = req.body;
        // Simple validation
        const userExists = users.find(user => user.username === username);
        if (userExists) {
            return res.send(`User ${username} already exists. Please choose a different username.`)
        }
    
        users.push({ username, password });
        res.redirect(`/home?username=${username}`);
});
// Home route
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});
// Serve static files (like CSS)
export default router;