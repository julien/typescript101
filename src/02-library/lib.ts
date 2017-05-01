
module lib {

  // an EventEmitter class
  export class EventEmitter {
    private listeners:Object = {};

    constructor() {}

    on(event:string, handler:Function):EventEmitter {
      let it:number;
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      it = this.listeners[event].length;
      while ((it = it - 1) >= 0) {
        const h:Function = this.listeners[event][it];
        if (h === handler) {
          return;
        }
        if (h.toString() === handler.toString()) {
          return;
        }
      }
      this.listeners[event].push(handler);
      return this;
    }

    off(event:string, handler:Function):EventEmitter {
      let it:number, h:Function;
      if (!this.listeners[event]) {
          this.listeners[event] = [];
      }
      it = this.listeners[event].length;
      while ((it = it - 1) >= 0) {
        h = this.listeners[event][it];
        if (h === handler) {
          this.listeners[event].splice(it, 1);
        }
        if (h.toString() === handler.toString()) {
          this.listeners[event].splice(it, 1);
        }
      }
      return this;
    }

    trigger(event:string, data:any):EventEmitter {
      let it:number, h:Function;
      if (this.listeners[event]) {
        it = this.listeners[event].length - 1;
        while (it >= 0) {
          h = this.listeners[event][it];
          h(data);
          it -= 1;
        }
      }
      return this;
    }

    getListeners(name:string):Function[] {
      return this.listeners[name];
    }
  }

  export class Model extends EventEmitter {
    constructor(public attributes:Object = {}) {
      super();
    }

    get(attribute:string):any {
      return this.attributes[attribute];
    }

    set(key:string, value:any):void {
      let oldVal:any, newVal:any;

      newVal = value;
      if (this.attributes[key]) {
        oldVal = this.attributes[key];
      }
      this.attributes[key] = newVal;

      this.trigger('change', { key: key, oldVal: oldVal, newVal: newVal });
    }
  }
}
