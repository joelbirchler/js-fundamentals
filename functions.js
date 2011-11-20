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

// What happens if I send more or less arguments than specified in the signature
// TODO

// arguments
// TODO

// arguments.callee 
// TODO: use this example which safe-guards forgetting the new operator
function User(first, last){ 
  if ( !(this instanceof arguments.callee) ) 
    return new User(first, last); 
   
  this.name = first + " " + last; 
}

