// Write a function that computes the difference between the square of the sum
// of the first n positive integers and the sum of the squares of the first n
// positive integers.

/*
Input: number
Output: number (square of sums minus sum of squares)

Data Structure: array?

*/

function numbersToN(n) {
  const nums = [];

  for (let i = 0; i < n; i += 1) {
    nums.push(i + 1);
  }

  return nums
}

function squareOfSum(nums) {
  return nums.reduce((a, b) => a + b) ** 2
}

function sumOfSquares(nums) {
  return nums.map((num) => num ** 2).reduce((a, b) => a + b);
}

function sumSquareDifference(num) {
  const nums = numbersToN(num);
  return squareOfSum(nums) - sumOfSquares(nums);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
