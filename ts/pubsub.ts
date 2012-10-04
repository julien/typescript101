class Pubsub {

  channels: Object = {};

  on(channel: string, handler: Function) {
    var index;
    if (typeof handler === 'function') {
      if (!this.channels[channel] ) {
        this.channels[channel] = [];
      }
      index = this.channels[channel].indexOf(handler);
      if (index === -1) {
        this.channels[channel].push(handler);
      }
    }
    return this;
  }

  off(channel: string, handler: Function) {
    var index, ots = Object.prototype.toString;
    if (this.channels[channel]) {
      if (handler) {
        index = this.channels[channel].indexOf(handler);
        if (index !== -1) {
            this.channels[channel].splice(index, 1);
        }
        for (index = this.channels[channel].length - 1; index >= 0; index -= 1) {
          if (ots.call(this.channels[channel][index]) === ots.call(handler)) {
            this.channels[channel].splice(index, 1);
          }
        }

      } else {
        this.channels[channel] = [];
      }
    }
    return this;
  }

  trigger(channel: string, data: Object) {
    var i, l;
    if (this.channels[channel] !== null) {
      l = this.channels[channel].length;
      for (i = 0; i < l; i +=1) {
        this.channels[channel][i](data);
      }
    }
    return this;
  }
}



