const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on('response', (name) => {
    console.log("data recieved from " + name);
});

customEmitter.on('response', () => {
    console.log("some other data recieved");
});
customEmitter.emit('response', 'chetan');