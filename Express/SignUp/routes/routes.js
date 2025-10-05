import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [];

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'signup.html'));
});

router.post('/signup', (req, res) => {
        const { username, password } = req.body;
    
    
        const userExists = users.find(user => user.username === username);
        if (userExists) {
            return res.send(`User ${username} already exists. Please choose a different username.`)
        }
    
        users.push({ username, password });
        res.redirect(`/home?username=${username}`);
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

export default router;