//
// Here I am using functions in much the same way you may do classical object oriented programming.
//

function Person () {
  var age = 3; // age is private (scoped to the function)

  this.growUp = function () { // adding an instance method
    age = 30; // age is still in scope, so we have access to it
    return age;
  }
}

// this is a "class" method
Person.hey = function () { 
  print("hey!"); 
} 

// this is an "instance" method with no access to the private variables
Person.prototype.talk = function () {
  print(this.age); // I don't have access to age
  print(this.growUp()); // I have access to "this"
}

Person.hey();

var me = new Person(); // create a new object instance
me.talk();
