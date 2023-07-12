/**
 * module is encapulated code (only share minimum)
 * CommonJS, every file is module by default.
 */

console.log("Globals : " + GLOBALS);
console.log("_dirname : " + __dirname);
console.log("_filename : " + __filename);
console.log("require : " + require);
console.log("module : " + JSON.stringify(module));
console.log("process : " + JSON.stringify(process));

setInterval(() => {
    console.log("hello");
}, 1000);

const name = require("./4-name");
const sayHi = require("./5-utils");
console.log(name);

sayHi(name.john);
sayHi("chetan");
require('./7-mind-grenand')