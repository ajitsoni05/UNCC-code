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