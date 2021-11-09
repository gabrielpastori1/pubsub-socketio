import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

console.log('oi');

socket.on('msg' , function (msg) {
  console.log(msg)
});


socket.emit('msg', 'outra mensagem')
