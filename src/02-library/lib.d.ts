declare module lib {
    class EventEmitter {
        private listeners;
        constructor();
        on(event: string, handler: Function): EventEmitter;
        off(event: string, handler: Function): EventEmitter;
        trigger(event: string, data: any): EventEmitter;
        getListeners(name: string): Function[];
    }
    class Model extends EventEmitter {
        attributes: Object;
        constructor(attributes?: Object);
        get(attribute: string): any;
        set(key: string, value: any): void;
    }
    class View extends EventEmitter {
        el: HTMLElement;
        initialize: Function;
        private ensureElement();
        constructor(el?: HTMLElement, initialize?: Function);
        remove(): void;
    }
}
