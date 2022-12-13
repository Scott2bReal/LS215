 // We have been asked to implement a function that determines whether or not a
 // given word is a reserved keyword. We wrote the isReserved function below
 // along with some test cases, but we aren't seeing the expected result. Why
 // not? Fix the code so that it behaves as intended.


 const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

// function isReserved(name) {
//   RESERVED_KEYWORDS.forEach(reserved => {
//     if (name === reserved) {
//       return true;
//     }
//   });
//
//   return false;
// }

 function isReserved(name) {
   for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
     const reserved = RESERVED_KEYWORDS[i];
     if (name === reserved) {
       return true;
     }
   }

   return false;
 }

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

 // We should use a for loop instead of for each when we want to exit a loop
 // early. In this case, the use of forEach prevents us from returning true
 // when the conditional is met because the return value of the callback
 // function is ignored.
