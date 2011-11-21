// Underscore.js has a handy _.extend function that adds a very handy syntax.

_.extend({foo: 'bar'}, {bar: 'foo'}); // {foo: 'bar', bar: 'foo'}

function Foo() {}
_.extend(Foo.prototype, {
  fn: function() { print("hey") },
  x: 42
});


// Backbone.js both uses this for inheritance sugar. The source code for this has been pulled out and is available here: https://github.com/jimmydo/js-toolbox/blob/master/toolbox.js

var CustomModel = BackBone.Model.extend({
    // CustomModel.prototype properties
  },
  {
    // CustomModel "class" properties
  }
);