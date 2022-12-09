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
  - Start on third digit
  - One back is 1
  - Current is 2
  - init swap variable
*/

function fibonacci(num) {
  if (num < 3) return 1;

  let currentDigit = 3;
  let swap = 0;
  let oneBack = 1;
  let current = 2;

  while (currentDigit < num) {
    swap = current;
    current += oneBack;
    oneBack = swap;
    currentDigit += 1;
  }

  return current;
}

console.log(fibonacci(1));        // 1
console.log(fibonacci(2));        // 1
console.log(fibonacci(3));        // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
