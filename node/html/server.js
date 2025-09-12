import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <html>
        <head>
            <title>
                Server
            </title>
        </head>
        <body>
            <h1 style="color: blue; text-align: center;">Welcome to the Server</h1>
        </body>
    </html>
        
        
        
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
