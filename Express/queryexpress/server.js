import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}! Welcome to the About Page.`);
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});