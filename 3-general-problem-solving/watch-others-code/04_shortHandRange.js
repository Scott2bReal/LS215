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

  - Finding range boundaries:
    - If length of range is 2, start and end are obvious

  - Map resulting array into expanded ranges (nested array)
    - if element includes range sep, expand range
    - if not, just return char

  - Init counter (helper function)

  - For each element in resulting array
    - If is an array, push expanded range to finalArray
    - If not, determine value and push to finalArray (helper?)

  This works for everything but the uncommented test case. Need to figure out
  how to determine range boundaries for ranges with more than two entries...
*/

RANGES_SEPARATOR = ', '
RANGE_SEPARATOR = /[\:\-..\s]/g

function rangeBoundaries(rangeString) {
  const range = rangeString.split(RANGE_SEPARATOR)
  const length = range.length
  const start = range[0]
  return [range[0], range[1]]
}

function initCounter(arg) {
  return Array.isArray(arg) ? Number(arg[0]) : Number(arg)
}

function determineValue(element, counter) {
  while (true) {
    if (String(counter).endsWith(element)) {
      return String(counter);
    }
    counter += 1;
  }
}

function expandRange(rangeBoundaries, counter) {
  const start = determineValue(rangeBoundaries[0], counter);
  const end = determineValue(rangeBoundaries[1], Number(start))
  counter = Number(start);
  const nums = [];

  while (counter <= end) {
    nums.push(String(counter));
    counter += 1;
  }

  return nums.join(', ')
}

function rangeInterpreter(originalString) {
  const nums = []

  const ranges = originalString.split(RANGES_SEPARATOR).map((element) => {
    return element.match(RANGE_SEPARATOR) ? rangeBoundaries(element) : element
  })

  let counter = initCounter(ranges[0])

  ranges.forEach((element) => {
    if (Array.isArray(element)) {
      nums.push(expandRange(element, counter));
      counter = Number(element[1]);
    } else {
      nums.push(determineValue(element, counter));
      counter = Number(determineValue(element, counter));
    }
  })

  return nums.join(', ');
}

// Examples
// console.log(rangeInterpreter('1, 3, 7, 2, 4, 1')) // 1, 3, 7, 12, 14, 21
// console.log(rangeInterpreter('1-3, 1-2')) // 1, 2, 3, 11, 12
console.log(rangeInterpreter('1:5:2')) // 1, 2, 3, 4, 5, 6, ... 12
// console.log(rangeInterpreter('104-2')) // 104, 105, ...112
// console.log(rangeInterpreter('104-02')) // 103, 105, ... 202
// console.log(rangeInterpreter('545, 64:11')) // 545, 564, 565, ... 611
