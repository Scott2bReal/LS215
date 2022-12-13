// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
Input: number
Output: featured number or error message

What about negative inputs?

Requirements:
  - Featured number must be less than or equal to max
  - Odd number
  - Multiple of 7
  - all digits appear only once

Algorithm
  - if number is >= MAX, return error message

  - Find next multiple of 7 higher than number (helper)
    - modulo num % 7, return num + result
  - Keep adding 7 to that amount until a featured number is found or we bust
    - Check if odd, if not continue
    - check if all digits appear only once, if not continue
    - check if <= MAX, if not break and return error message
    - return num
*/

const MAX = 9876543201
const FACTOR = 7

function findNextMultiple(num, factor) {
  // This can have better error handling for range of inputs
  return num + (factor - (num % factor))
}

function allDigitsOnce(num) {
  const string = String(num);
  const uniqueDigits = [];

  string.split('').forEach((digit) => {
    if (!uniqueDigits.includes(digit)) {
      uniqueDigits.push(digit);
    }
  })

  return uniqueDigits.length === string.length
}

function featured(number) {
  if (number >= MAX) return "There is no possible number that fulfills those requirements."

  for (
    let candidate = findNextMultiple(number, FACTOR);
    candidate <= MAX;
    candidate += 7
  ) {
    if (!(candidate % 2 === 1)) {
      continue;
    } else if (allDigitsOnce(candidate)) {
      return candidate;
    }
  }

  return "There is no possible number that fulfills those requirements."
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
