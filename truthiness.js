// JS is dynamically typed and uses implicit coercion. Be careful!

true + 1;     // 2
true == 1;    // true
true == '1';  // true
true === 1;   // false... triple === means no type coercion

false + 1;    // 1
false == 0;   // true
false == "";  // true

// The following values are "falsy": 
//   - false
//   - undefined
//   - null
//   - "" (empty string)
//   - 0
//   - NaN

"foo" || "hey";     // "foo"
NaN || true;        // true
undefined || true;  // true
"" || true;         // true