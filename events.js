module.exports = class EventEmitter {
  listeners = {}; // Master Object

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }
  off(eventName, fn) {}
  removeListener(eventName, fn) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    
  }
};
