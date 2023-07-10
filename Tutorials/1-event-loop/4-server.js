// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log("request event");
//     res.end("hello word");
// });

// server.listen(5000, () => {
//     console.log("listening on 5000 ...");
// });

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
        //BLOCKING CODE
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} and ${j}`);
            }
        }
        res.end("<h2>about Page </h2>");
    }

    res.end(`<h2>Oops ! <h2><p><a href="/">Go back</a></p>`);
});

server.listen(5000);