// Write two functions max and min which returns the maximum and minimum value of the argument passed into them respectively.
// https://www.codewars.com/kata/59c0cd4f46038781010000ac


// And so goes for min
// Further Instructions

// functions will take any number of arguments
// Arrays of numbers can be to any depth
// You can't use Math.max, Math.min, and require

// If one of the arguments can not be evaluated to a number, return NaN

/*
Input: Any number of arguments
Output: The maximum number present in those arguments (anything that can be evaluated or coerced to a number)

Requirements:
  - If nothing can be evaluated to a number, return 0
    - Empty arrays and no args count as 0
  - Strings which can be evaluated as numbers should be
  - Can't use Math.max, Math.min, or require

Data Structure:
  - Array

Algorithm:
  - If no arguments, return 0
  - Make an array of the arguments, completely flatten it
  - Init results array

  - Step through arguments,
      - if it can be evaluated as a number, add number version to results array
      - if not, return NaN

  - If results array is empty, return 0
  - sort the array in descending order (helper)
  - return first element of the sorted results array (last element if min)
*/

// const descendingSort = (a, b) => {
//   if (a > b) {
//     return 1
//   } else if (a < b) {
//     return -1
//   } else {
//     return 0
//   }
// }

// const processArgumentsArray =() => {
//   // ...
// }

const max = (...args) => {
  console.log(args.flat(Infinity))
}

// Example
    max(1,2,3,4) //returns 4
    // Coerces strings to number
    // strings count
    max(1,2,3,['4']) //returns 4; note it returned 4 not '4'

    max(1,2,[3,4]) //returns 4
    max(1,2,[3,[4]]) //returns 4

    // Nested Arrays
    max(1,2,[3,['4r']]) //returns NaN
    max([[[1], [1]], 2, [[3], [3]]]) // 3

    max(-2, -4) // return -2
    max([[],[-4]]) // returns -4

    max(Infinity, 2) // return Infinity?
    max(-Infinity, 2) // return 2

    max(2, NaN) // NaN

    max() /*or*/
    max([]) //returns 0
