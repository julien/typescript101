describe('Test Suite', function () {

  beforeEach(function () { });

  describe('EventEmitter', function () {
    const emitter, count = 0;
    emitter = new lib.EventEmitter();
    emitter.on('message', function (message) {
      count += 1;
    });
    emitter.on('message', function (message) {
      count += 1;
    });

    it ('should not add the same "handler" twice for the same event.', function () {
      expect(emitter.getListeners('message').length).toEqual(1);
    });

    it ('should invoke a handler function when triggering the associated event.', function () {
      emitter.trigger('message', 'hello world');
      expect(count).toEqual(1);
    });
  });

  describe('Model', function () {
    const model, count = 0;

    model = new lib.Model();
    model.on('change', function (key, oldVal, newVal) {
      console.log('change', key, oldVal, newVal);
      count += 1;
    });

    it('should dispatch a "change" event when attributes are set or changed', function () {
      model.set('name', 'A test model');
      expect(count).toEqual(1);
    });

    it('should return the value of an attributes according to the given name', function () {
      expect(model.get('name')).toEqual('A test model');
    });

    it('should update the value of a give attribute when set', function () {
      model.set('name', 'An updated model');
      expect(count).toEqual(2);
      expect(model.get('name')).toEqual('An updated model');
    });
  });
});
