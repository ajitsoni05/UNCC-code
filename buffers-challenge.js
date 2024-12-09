// 0100 1000 0110 1001 0010 0001

const {Buffer} = require('buffer');



const memoryContainer = Buffer.alloc(3);

memoryContainer[0]=0x48;
memoryContainer[1]=0x69;
memoryContainer[2]=0x21;

console.log(memoryContainer.toString("utf-8"));
// above line prints Hi!


// Also we can use Buffer from
mysecondContainer = Buffer.from([0x48,0x69,0x21]);

console.log(mysecondContainer.toString("utf-8"));