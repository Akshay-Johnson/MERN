import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import User from './model/user.js';
import bcrypt from 'bcryptjs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url); // Get current file path
const __dirname = path.dirname(__filename); // Get current directory path

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 10000 })// Set a timeout of 10 seconds
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err.message));


app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'login.html'));
});

app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const exsistingUser = await User.findOne({ username });
    if (exsistingUser) {
        return res.send('User already exists. Please choose a different username.');
    }
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });// Create a new user instance
    await newUser.save();
      res.send(`
    <h2>User registered successfully!</h2>
    <p><a href="/login">Click here to login</a></p>
  `);

});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.send('Invalid username or password.');
    }
    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.send('Invalid username or password.');
    }
    res.send(`<h2> login successfully!</h2>
    <p><a href="/signup">redirect to signup</a></p>
  `);

});

app.listen(PORT,() => console.log(`Server running at http://localhost:${PORT}`));