console.log("start");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
console.log("reading first");
const second = readFileSync("./content/second.txt", "utf8");
console.log("reading second");
console.log(first, second);
writeFileSync('./content/result.txt', `result :  ${first}, ${second}`, { flag: 'a' }); // flag: 'a' means it will override the content if file exist else create new
console.log("starting new task");