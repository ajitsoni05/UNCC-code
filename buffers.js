const {Buffer} = require('buffer');


const memoryContainer = Buffer.alloc(4); // 4 bytes or 32 bits

// Accessing the elements of the memory container like an array
memoryContainer[0]=0xff;
memoryContainer[1]=0xb4;
memoryContainer[2]=0xaf;
memoryContainer[3]=0x11;

console.log(memoryContainer)
// <Buffer ff b4 af 11>


// printing the values in decimal
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);

// let's check if we can write in decimal


// Buffers can hold values max up to 255   


// Proper methods to write negative numbers into buffers
memoryContainer.writeInt8(-34,2)
console.log(memoryContainer.readInt8(2));