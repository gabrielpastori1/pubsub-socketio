
module.exports = class Sub {
  socket = undefined;
  constructor(socket){
    this.socket = socket;
  }

  subscribe(subject){
    this.socket.emit('subscribe', subject);
  }
}