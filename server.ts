import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
});

io.on("connection", (socket) => {
  console.log('connectedo');
  socket.emit('msg', 'conectado com sucesso')
  socket.on('msg', (msg) => { console.log(msg)})
});

httpServer.listen(3000);
console.log('listening');
