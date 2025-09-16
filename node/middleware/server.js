import http from 'http';

function logger(req, res, next) {
    console.log(`LOG: ${req.method} ${req.url}`);
    next();
}

function authenticate(req, res, next) {
    if (req.url === '/secret') {
        res.writeHead(403, {'Content-Type': 'text/plain'});
        res.end('access denied ');
    } else {
        next();
    } 
}

function finalHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('request handled successfully');
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        authenticate(req, res, () => {
            finalHandler(req, res);
        });
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
