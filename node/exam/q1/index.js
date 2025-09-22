import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
        res.end('Hello, World!');
    }
    else if (req.url === '/about') {
        res.end('About Page');
    }
    else{
        res.end('Page Not Found');
    }

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});