const {Buffer} = require('buffer');

// allocation size , initialization value 
const buffer = Buffer.alloc(10000,0);

console.log(buffer); // 10000

// allacting size (faster) without any initialization value

const buffer2 = Buffer.allocUnsafe(10000); 

console.log(buffer2); // 10000


for(let i = 0 ;i<buffer2.length;i++){
    if(buffer2[i]!==0){
        console.log(`Element at ${i} has the value: ${buffer2[i]}`);
    }
}

// allocUnsafe is faster than alloc method because it doesn't need to take care of initialization


// when we start a node process , some amount of memory is automatically allocated (around 8 kiB(kibibytes)= 8 * 1024 bytes | 8192 bytes of memory) 
// This can be checked by logging Buffer.poolSize 
console.log(Buffer.poolSize); // 8192

// This piece of memory is used when we use Buffer.allocUnsafe instead of Buffer.alloc . Similar is the case when we use Buffer.from 

/*
 So how allocation takes place is actually quite interesting. If the allocation size is less than Buffer.poolSize/2 then ,
 memory is allocated from half the Buffer.poolSize which is equal to Buffer.poolSize>>>1 ( >>> ) is the right shift operator 
 in JavaScript

  a >>> 1  means floor(a/2)

*/

// The below line actually allocates buffer memory in an unsafe way but it doesn't take the memory from the Buffer pool that 
// is allocated at the start of every node process
const buffer3 = Buffer.allocUnsafeSlow(2);
