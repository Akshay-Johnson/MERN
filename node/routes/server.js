import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html></html>
                <head><title>Home Page</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>About</p>
                    <p>Contact</p>
                </body>
            </html>
        `);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(` about page`);
    } else if (req.url === '/contact') {  
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(` contact page`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Page not found`);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
