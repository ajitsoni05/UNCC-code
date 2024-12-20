const fs = require("fs/promises");

// open (32) file descriptor - a number assigned to an opened file
// read or write

(async () => {
  // scope for below constant is limited to the curly brackets here , for this kind of notation
  const a = "a";

  // we need to close the file once opened | becuz we are occupying the memory and may run into memory issues like leaks
  // free a resource after creating it
  const commandFileHandler = await fs.open("./command.txt", "r");

  commandFileHandler.on("change",async ()=>{
 // get the size of our file
      const size = (await commandFileHandler.stat()).size;
      // allocate our buffer with the size of the file
      const buff = Buffer.alloc(size)
      // the location at which we want to start filling our buffer
      const offset = 0;
      // how many bytes we want to read
      const length = buff.byteLength;
      // the position that we want to start reading the file from
      const position = 0;

      const content = await commandFileHandler.read(buff,offset,length,position);
      console.log(content);
  })

  const watcher = fs.watch("./command.txt"); // here watcher is async iterator

  for await (const event of watcher) {
    if (event.eventType === "change") {
      console.log("The file was changed.");
      // we want to read the content

     commandFileHandler.emit("change");
    }
  }
})();
