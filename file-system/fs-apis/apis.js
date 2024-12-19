// // *********Promises- API**************** //

// const fs = require('fs/promises');

// (async () => {
//     try {
//         await fs.copyFile("file.txt","copied-promise.txt")
//     }catch (error){
//         console.log(error);
//     }
// })();

// // ********** Callback API ******** //
// const fs = require('fs');

// // we use callback here , always error is the firs argument when we use callbacks in node js
// // second argument can be some other thing
// fs.copyFile("file.txt","copied-callback.txt",(error)=>{
//     if(error) console.log(error);
// });


// ********** Synchronous API *********** //

// const fs = require("fs");

// fs.copyFileSync("file.txt","copied-sync.txt")