const { createServer } = require("http");
const { Server } = require("socket.io");
const pub = require("./pub");


const httpServer = createServer();
const io = new Server(httpServer, {});

const publisher = new pub();

io.on("connection", (socket) => {
  socket.on("subscribe", (topic) => {
    publisher.accept(topic, socket);
    publisher.publish(topic, "New Subscribe");
  });

  setInterval(() => {
    publisher.publish("test", "Ping");
  }, 1000);
});

httpServer.listen(3000);
console.log("listening");
