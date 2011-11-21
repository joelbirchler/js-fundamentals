// variables scope is defined by functions

var chicken = "bawk!";

function henHouse() {
  var bear = "grrr"; // I only have access to this within henHouse
  chicken += " ba-BAWK!"; // I still have access to chicken
  cow = "moo"; // uh-oh, this is going to be global!
}
henHouse();

print(chicken); // "bawk! ba-BAWK!"
print(cow); // "moo"
print(bear); // ReferenceError: bear is not defined

// So, how do we prevent these globals?
// We can wrap things in a function

(function() { // no need to name our function
  
  // ... do private stuff in here ...
  
})(); // and we need to call it



