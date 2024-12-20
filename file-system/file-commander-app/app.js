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

      // we would have filled our buffer here
      const buff = Buffer.alloc(size)
      // the location at which we want to start filling our buffer
      const offset = 0;
      // how many bytes we want to read
      const length = buff.byteLength;
      // the position that we want to start reading the file from
      const position = 0;

      // decoder 01 => meaningful | Basically decoder takes in data (in binary) and turns it into something meaningful that humans can understand
      // encoder meaningful => 01 
      // Nodejs only understands a character encoder and a character decoder | It doesn't understand an image encoder/ decoder 

      // filling th buffer here with content
      await commandFileHandler.read(buff,offset,length,position);

      console.log(buff.toString())

  });

  const watcher = fs.watch("./command.txt"); // here watcher is async iterator

  for await (const event of watcher) {
    if (event.eventType === "change") {
      // we want to read the content

     commandFileHandler.emit("change");
    }
  }
})();
