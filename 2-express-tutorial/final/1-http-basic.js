const http = require('http');
const { readFileSync } = require('fs');
const homePage = readFileSync('./index.html', 'utf8');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage);
        // res.write("<h1> Home Page </h1>");
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<h1> about Page </h1>");
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write("<h1> Page not found</h1>");
        res.end();
    }

})
server.listen(5000)