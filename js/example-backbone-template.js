var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var app;
(function (app) {
    var Contact = (function (_super) {
        __extends(Contact, _super);
        function Contact(attrs, opts) {
                _super.call(this, attrs, opts);
            this.defaults = {
                name: '',
                email: ''
            };
        }
        return Contact;
    })(Backbone.Model);
    app.Contact = Contact;    
})(app || (app = {}));
$(function () {
    var contact = new app.Contact({
        name: 'the dude',
        email: 'the_dude@gmail.com'
    });
    console.log(contact);
});
//@ sourceMappingURL=example-backbone-template.js.map
