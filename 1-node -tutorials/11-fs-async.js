const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("reading first file");
    console.log(result);
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("reading second file");
        const second = result;
        writeFile("./content/third.txt", `result :  ${first},${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with first task : write on third file");
        });
    });
});
console.log("starting new task");