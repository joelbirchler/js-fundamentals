// Functions can be bare
function() {}

// they can be named (and this has the advantage of being able to appear in any order in your code)
function heyLook() {}

// they can be anonymous and assigned to a variable
var checkItOut = function() {}

// they can be both... one catch in this last scenario is that "wow" is only available inside the 
// scope of the function
var checkItOut = function wow() {}

// You can give functions properties...
var fn = function() {};
fn.gilbert = "cat";

// Function length
var fn = function(one, two) {};
fn.length == 2; // Yep, it's true. The length of a function is the number of expected parameters

// What happens if I send more or less arguments than specified in the signature
var fn = function(one, two) {
  print(one);
  print(two);
}
fn(1); // prints: 1, undefined
fn(1, 2, 3); // prints: 1, 2

// You can get that last one with "arguments"
var fn = function() {
  for (var i=0; i < arguments.length; i++) { print(arguments[i]); }
}
fn(1, 2, 3); // prints: 1, 2, 3

// Note that arguments is not an array (even if it looks like one). Let's try to use Array.join
var fn = function() {
  //print( arguments.join() ); // TypeError: arguments.join
}
fn(1, 2, 3);

// We can fix that though...
var fn = function() {
  var argsArray = Array.prototype.slice.call(arguments); // slice returns a shallow clone
  print( argsArray.join() );
}
fn(1, 2, 3);