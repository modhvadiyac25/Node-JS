const http = require('http');
// const { writeFileSync } = require('fs');

const server = http.createServer((req, res) => {
    // const request = req,
    //     response = res;
    // console.log("request : ");
    // console.log(req);
    // console.log("response : ");
    // console.log(res);
    // writeFileSync("./content/request.json", req.toString(), { flag: 'a' });
    // writeFileSync("./content/response.json", res.toString(), { flag: 'a' });
    // res.write("hello chetan");

    if (req.url === '/') {
        res.end("<h2>Home Page </h2>");
    }

    if (req.url === '/about') {
        res.end("<h2>about Page </h2>");
    }

    res.end(`<h2>Oops ! <h2><p><a href="/">Go back</a></p>`);
});

server.listen(5000);