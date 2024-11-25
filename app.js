const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An Event occured 1.");
});
myE.on("foo", () => {
  console.log("An Event occured 2.");
});

myE.on("foo", (x) => {
  console.log(`An event with a parameter occured: ${x}`);
});
myE.emit("foo");
myE.emit("foo", "1");
