/// <reference path="mv.ts"/>

(function () {

  var emitter:mv.EventEmitter = new mv.EventEmitter();
  emitter.on('message', function (message:string) {
    console.log('got a message', message);
  });

  // this is added twice to check that
  // our event.EventEmitter class will not
  // subscribe the same "handler" twice.
  emitter.on('message', function (message:string) {
    console.log('got a message', message);
  });

  // trigger a message
  emitter.trigger('message', 'hello from typescript');


}());
