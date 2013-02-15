var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var mv;
(function (mv) {
    var EventEmitter = (function () {
        function EventEmitter() {
            this.listeners = {
            };
        }
        EventEmitter.prototype.on = function (event, handler) {
            var it;
            if(!this.listeners[event]) {
                this.listeners[event] = [];
            }
            it = this.listeners[event].length;
            while((it = it - 1) >= 0) {
                var h = this.listeners[event][it];
                if(h === handler) {
                    return;
                }
                if(h.toString() === handler.toString()) {
                    return;
                }
            }
            this.listeners[event].push(handler);
            return this;
        };
        EventEmitter.prototype.off = function (event, handler) {
            var it, h;
            if(!this.listeners[event]) {
                this.listeners[event] = [];
            }
            it = this.listeners[event].length;
            while((it = it - 1) >= 0) {
                h = this.listeners[event][it];
                if(h === handler) {
                    this.listeners[event].splice(it, 1);
                }
                if(h.toString() === handler.toString()) {
                    this.listeners[event].splice(it, 1);
                }
            }
            return this;
        };
        EventEmitter.prototype.trigger = function (event, data) {
            var it, h;
            if(this.listeners[event]) {
                it = this.listeners[event].length - 1;
                while(it >= 0) {
                    h = this.listeners[event][it];
                    h(data);
                    it -= 1;
                }
            }
            return this;
        };
        EventEmitter.prototype.getListeners = function (name) {
            return this.listeners[name];
        };
        return EventEmitter;
    })();
    mv.EventEmitter = EventEmitter;    
    var Model = (function (_super) {
        __extends(Model, _super);
        function Model(attributes) {
            if (typeof attributes === "undefined") { attributes = {
            }; }
                _super.call(this);
            this.attributes = attributes;
        }
        Model.prototype.get = function (attribute) {
            return this.attributes[attribute];
        };
        Model.prototype.set = function (key, value) {
            var oldVal, newVal;
            newVal = value;
            if(this.attributes[key]) {
                oldVal = this.attributes[key];
            }
            this.attributes[key] = newVal;
            this.trigger('change', {
                key: key,
                oldVal: oldVal,
                newVal: newVal
            });
        };
        return Model;
    })(EventEmitter);
    mv.Model = Model;    
    var View = (function (_super) {
        __extends(View, _super);
        function View(el, initialize) {
                _super.call(this);
            this.el = el;
            this.initialize = initialize;
            this.ensureElement();
            if(initialize) {
                initialize(this);
            }
        }
        View.prototype.ensureElement = function () {
            if(!this.el || !(this.el instanceof HTMLElement)) {
                this.el = document.createElement('div');
            }
            return this.el;
        };
        View.prototype.remove = function () {
            var p = this.el.parentElement;
            if(p) {
                p.removeChild(this.el);
            }
        };
        return View;
    })(EventEmitter);
    mv.View = View;    
})(mv || (mv = {}));
//@ sourceMappingURL=mv.js.map
