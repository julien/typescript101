module mv {
    class EventEmitter {
        private listeners;
        constructor();
        public on(event: string, handler: Function): EventEmitter;
        public off(event: string, handler: Function): EventEmitter;
        public trigger(event: string, data: any): EventEmitter;
        public getListeners(name: string): Function[];
    }
    class Model extends EventEmitter {
        public attributes: Object;
        constructor(attributes?: Object);
        public get(attribute: string): any;
        public set(key: string, value: any): void;
    }
    class View extends EventEmitter {
        public el: HTMLElement;
        public initialize: Function;
        private ensureElement();
        constructor(el?: HTMLElement, initialize?: Function);
        public remove(): void;
    }
}
