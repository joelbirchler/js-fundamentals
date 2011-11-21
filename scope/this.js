// "this" in a function is global

function fn() { return this; }
print( fn() == this ); // true

// But it gets more complicated when we create instance objects...

var boo = new Ghost();
boo.passThroughWall();

function Ghost() {
  print(this); // boo
  
  this.passThroughWall = function() {
    print(this); // boo
    function disperseAtoms() {
      print(this); // global!
    }
    disperseAtoms();
  }
}

// Warning! That new operator is important. Without it, "this" in Ghost() would have referrenced the global space.


// How do we refer to "this" in a function inside a function?
// We take advantage of the variable scoping.

function Ghost() {
  var that = this;
  
  this.passThroughWall = function() {
    function disperseAtoms() {
      print(that); // boo
    }
    disperseAtoms();
  }
}


// We can use "call" and "apply" to change the scope that a function is called in. They are very
// similar but have a slightly different signature...
//
//    fun.apply(thisArg[, argsArray])
//    fun.call(thisArg[, arg1[, arg2[, ...]]])
//

function add(y) {
  return this.x + y;
}

print( add.call({x: 8}, 42) ); // 50

// Okay, that example was kind of lame. But this is really useful.