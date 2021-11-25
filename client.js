const { io } = require("socket.io-client");
const Sub = require("./sub");

const socket = io('http://localhost:3000');

const subscriber = new Sub(socket);

subscriber.subscribe('teste');

socket.on('teste', data => console.log(data));

console.log("running");
