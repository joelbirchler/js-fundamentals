obj = new Object();
obj.x = 1;

// obj
//    .x = 1
// Object.prototype
//    .constructor = function Object() { [native code] }


function Foo() {
    this.x = 1;
}
obj = new Foo();

// obj
//    .x = 1
// Foo.prototype
//    .constructor = Foo
// Object.prototype
//    .constructor = function Object() { [native code] }


function Foo() {
  this.x = 1;
}
function Bar() {
  this.y = 2;
}
Bar.prototype = new Foo();
Bar.prototype.constructor = Bar;
obj = new Bar();

// obj
//    .y = 2
// Bar.prototype
//    .constructor = Bar
// Foo.prototype
//    .constructor = Foo
//    .x = 1
// Object.prototype
//    .constructor = function Object() { [native code] }
