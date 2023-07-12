const { readFile, writeFile } = require("fs");
// const { readFile, writeFile } = require("fs").promises;
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise("../content/first.txt", "utf8");
        const second = await readFilePromise("../content/second.txt", "utf8");
        await writeFilePromise('../content/result-promise.txt', "this is nice", { flag: 'a' });
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}
start()





// const getText = (path) => {
//     return new Promise((reject, resolve) => {
//         readFile(path, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 console.log(data);
//                 resolve(data);
//             }
//         });
//     });
// }

// const start = async() => {
//     try {
//         const first = await getText("../content/first.txt");
//         console.log(first);
//     } catch (err) {
//         console.log(err);
//     }
// }
// start()

// getText("../content/first.txt").then((result) => { console.log(result) }).catch((err) => console.log(err));