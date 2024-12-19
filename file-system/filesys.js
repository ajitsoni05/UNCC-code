const fs = require('fs');

const content = fs.readFileSync("./text.txt");

console.log(content); // This will print a buffer
// <Buffer 23 2f 1f >



console.log(content.toString("utf-8"))