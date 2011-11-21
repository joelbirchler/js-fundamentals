// A closure is a function that you can pass around and remembers all of it's variables
// that were in scope when it was created.
//
// One thing this is useful for is private variables:

function fn(x){
    var privateVar = 8;
    
    return function(y) {
        return x + y + privateVar;
    }
}

var doYourThing = fn(42);
doYourThing(7);


// Another thing is handling asynchronous actions:

for ( var i = 0; i < 5; i++ ) {
  setTimeout( function(){ console.log(i) }, 100 );
}

// logs: 5, 5, 5, 5, 5

for ( var i = 0; i < 5; i++ ) {
  setTimeout( function(x) { 
    return function(){ console.log(x) };
  }(i), 100 );
}

// logs: 0, 1, 2, 3, 4
