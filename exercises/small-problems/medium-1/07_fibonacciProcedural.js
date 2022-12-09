// In the previous exercise, we developed a recursive solution for computing
// the nth Fibonacci number. In a language that is not optimized for recursion,
// some (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger
// nth numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.
//
// Fortunately, every recursive function can be rewritten as a non-recursive
// (or procedural) function.
//
// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// Note that JavaScript can accurately compute integers up to 16 digits long;
// this means that fibonacci(78) is the largest Fibonacci number that you can
// accurately compute with simple operations in JavaScript.

/*
Algorithm:
  - init sum
  - init current
  - init last digit
  - sum += current
  - last digit = sum
*/

function fibonacci(num) {
  let sum = 0;
  let counter = 0;
  let lastDigit = 0;
  let current = 1;

  while (counter < num) {
    sum += current

  }
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
