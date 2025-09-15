import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // {
    //     pathname: "/greet",
    //     query: { name: "akshay" },
    //     search: "?name=akshay",
    //     href: "/greet?name=akshay"
    // }

    if (parsedUrl.pathname === '/greet' ) {
        const name= parsedUrl.query.name || 'Guest';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${name}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(`Page not found`);
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});