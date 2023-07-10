/**
 * OUTPUT:
 * started a first task
 * tarting second task
 * this is the first text file
 * first task completed
 * 
 * readFile is asynchronus
 */

const { readFile } = require('fs');
console.log('started a first task');

readFile('../content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("first task completed");
});
console.log("starting second task");