module.exports = class Pub {
  subscribers = {};
  publish(subject, data) {
    Object.entries(this.subscribers).forEach((obj) => {
      let s = obj[0];
      let subscribers = obj[1];
      if (s === subject) {
        subscribers.forEach((subscriber) =>
          subscriber.emit(subject, data)
        );
      }
    });
  }

  accept(subject, subscriber) {
    (this.subscribers[subject] = this.subscribers[subject]
      ? this.subscribers[subject]
      : []).push(subscriber);
  }
}

