///<reference path="lib.d.ts" />

module app {
  export class Contact extends Backbone.Model {
    defaults: Object = { 
      name: '',
      email: ''
    }

    constructor(attrs?, opts?) {
      super(attrs, opts);
    }
  }

}

$(() => {
  var contact = new app.Contact({name: 'the dude', email: 'the_dude@gmail.com' });
  console.log(contact);
});
