class Pubsub {

  channels: Object = {};

  on(channel: string, handler: Function) {
    var i, l, ots = Object.prototype.toString;
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }

    for (i = 0, l = this.channels[channel].length; i < l; i += 1) {
      if (ots.call(this.channels[channel][i]) === ots.call(handler)) {
        return;
      }
    }
    this.channels[channel].push(handler);
    return this;
  }

  off(channel: string, handler: Function) {
    var i, ots = Object.prototype.toString;
    if (this.channels[channel]) {
      if (handler) {
        for (i = this.channels[channel].length - 1; i >= 0; i -= 1) {
          if (ots.call(this.channels[channel][i]) === ots.call(handler)) {
            this.channels[channel].splice(i, 1);
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



