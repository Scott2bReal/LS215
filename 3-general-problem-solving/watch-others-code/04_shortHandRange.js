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
  - Commas separate ranges
  - Other provided separators represent ranges

Input: string
Output: string

Data Structure: Array

Algorithm:
  - Define individual separator and range separators
  - Init final array
  - Split input by individual sep (',')
  - For each range in resulting array of ranges (with index)
    - Split range by range separator
    - For each element of that range array
      - If ranges index is 0, initialize counter to first element of that range array as a number
      - Add counter (as string) to final array
      - increment counter by 1
      - Else
        - Check if counter as string meets regex for next item in range array
        - If it does, add counter as string to final array and break
        - If not, add counter as string to final array and continue

  - Return final array joined
*/

RANGES_SEPARATOR = ','
RANGE_SEPARATOR = /(\:|\-|..)/g

function rangeInterpreter(originalString) {
  const finalArray = [];
  const ranges = originalString.split(RANGES_SEPARATOR);

  ranges.forEach((range) => {
    const boundaries = range.split(RANGE_SEPARATOR);
    console.log(boundaries)
  })
}

// Examples
console.log(rangeInterpreter("1, 3, 7, 2, 4, 1" )); // 1, 3, 7, 12, 14, 21
console.log(rangeInterpreter("1-3, 1-2")); // 1, 2, 3, 11, 12
console.log(rangeInterpreter("1:5:2")); // 1, 2, 3, 4, 5, 6, ... 12
console.log(rangeInterpreter("104-2")); // 104, 105, ...112
console.log(rangeInterpreter("104-02")); // 103, 105, ... 202
console.log(rangeInterpreter("545, 64:11")); // 545, 564, 565, ... 611
