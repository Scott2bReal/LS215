// You are given a list of numbers in a "short-hand" range where only the
// significant part of the next number is written because we know the numbers
// are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14,
// 21]). Some people use different separators for their ranges (ex. "1-3, 1-2",
// "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]).

// Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

//     "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
//     "1-3, 1-2" --> 1, 2, 3, 11, 12
//     "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
//     "104-2" --> 104, 105, ... 112
//     "104-02" --> 104, 105, ... 202
//     "545, 64:11" --> 545, 564, 565, .. 611

/*
Questions:
  - Should this return a string like in the examples, or the full range (no '...')?

Requirements:
  - Commas separate individual numbers
  - Other provided separators represent ranges

Input: string
Output: string

Data Structure: Array

Algorithm:
  - Define individual separator and range separators
  - Init final array
  - Split input by individual sep
  - For each element in resulting array
    - If element does not contain range sep, add to final array as number
    - Else
      - Create range
*/


function rangeInterpreter(originalString) {
  // ...
}

// Examples
console.log(rangeInterpreter("1, 3, 7, 2, 4, 1" )); // 1, 3, 7, 12, 14, 21
console.log(rangeInterpreter("1-3, 1-2")); // 1, 2, 3, 11, 12
console.log(rangeInterpreter("1:5:2")); // 1, 2, 3, 4, 5, 6, ... 12
console.log(rangeInterpreter("104-2")); // 104, 105, ...112
console.log(rangeInterpreter("104-02")); // 103, 105, ... 202
console.log(rangeInterpreter("545, 64:11")); // 545, 564, 565, ... 611
