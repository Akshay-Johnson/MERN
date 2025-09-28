import http from 'http';

const logger = (req, res) => {
    console.log("Method:", req.method, "URL:", req.url);
}

const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About Page');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
    logger(req, res);
});


Server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// import express from 'express';

// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello, World!');
// });

// app.get('/about',(req,res)=>{
//     res.send('About Page');
// });

// app.use((req,res)=>{
//     res.status(404).send('Not Found');
// });

// app.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });