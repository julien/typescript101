var Pubsub = (function () {
    function Pubsub() {
        this.channels = {
        };
    }
    Pubsub.prototype.on = function (channel, handler) {
        var i;
        var l;
        var ots = Object.prototype.toString;

        if(!this.channels[channel]) {
            this.channels[channel] = [];
        }
        for(i = 0 , l = this.channels[channel].length; i < l; i += 1) {
            if(ots.call(this.channels[channel][i]) === ots.call(handler)) {
                return;
            }
        }
        this.channels[channel].push(handler);
        return this;
    };
    Pubsub.prototype.off = function (channel, handler) {
        var i;
        var ots = Object.prototype.toString;

        if(this.channels[channel]) {
            if(handler) {
                for(i = this.channels[channel].length - 1; i >= 0; i -= 1) {
                    if(ots.call(this.channels[channel][i]) === ots.call(handler)) {
                        this.channels[channel].splice(i, 1);
                    }
                }
            } else {
                this.channels[channel] = [];
            }
        }
        return this;
    };
    Pubsub.prototype.trigger = function (channel, data) {
        var i;
        var l;

        if(this.channels[channel] !== null) {
            l = this.channels[channel].length;
            for(i = 0; i < l; i += 1) {
                this.channels[channel][i](data);
            }
        }
        return this;
    };
    return Pubsub;
})();
