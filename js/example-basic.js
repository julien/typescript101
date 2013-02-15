((function () {
    var emitter = new mv.EventEmitter();
    emitter.on('message', function (message) {
        console.log('got a message', message);
    });
    emitter.on('message', function (message) {
        console.log('got a message', message);
    });
    emitter.trigger('message', 'hello from typescript');
})());
//@ sourceMappingURL=example-basic.js.map
