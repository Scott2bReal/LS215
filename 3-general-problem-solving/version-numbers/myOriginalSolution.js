// Write a function that takes any two version numbers in this format and
// compares them, with the result of this comparison showing whether the first
// is less than, equal to, or greater than the second version:
//
//     If version1 > version2, we should return 1.
//     If version1 < version2, we should return -1.
//     If version1 === version2, we should return 0.
//     If either version number contains characters other than digits and the .
//       character, we should return null.

// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
Questions:
  - Are the numbers between the points considered decimal numbers, and can be
    compared as such?

Problems:
  - How to split version numbers
  - How to handle different lengths of numbers (ex. 1 vs. 1.0)
    - Those two should be equal, but how do I determine that programatically?

Data Structure:
  - Array (separate string by '.')

Algorithm:
  Short Description:
    - Separate each version # into arrays (split by '.'), and compare each
      segment. Once one is different return the result

  Steps:
    - Make arrays of each number by splitting by '.'
    - iterate through longer of the two arrays
      - if they are the same length, iterate through the first
    - If element at other array exists, convert both elements to numbers and compare
      - If one is larger than the other, return that version number as the larger
    - If other element does not exist, convert current element to number. If anything but 0, return that version as the larger
    - If reached the end of the iteration with no return, return 0

*/

function validInput(input) {
  if (!input.split('').every((char) => char.match(/[0-9\.]/))) {
    return false
  }

  if (input.match(/\.\./)) {
    return false
  }

  if (!input[0].match(/[0-9]/)) {
    return false
  }

  return true
}

function compareVersions(version1, version2) {
  const digits1 = version1.split('.')
  const digits2 = version2.split('.')
  const sorted = [digits1, digits2].sort((a, b) => b.length - a.length)
  let larger

  if (!validInput(version1) || !validInput(version2)) {
    return null
  }

  for (let idx = 0; idx < sorted[0].length; idx += 1) {
    if (sorted[1][idx]) {
      if (Number(sorted[0][idx]) > Number(sorted[1][idx])) {
        larger = sorted[0]
        break
      } else if (Number(sorted[1][idx]) > Number(sorted[0][idx])) {
        larger = sorted[1]
        break
      }
    } else {
      if (Number(sorted[0][idx]) !== 0) {
        larger = sorted[0]
        break
      }
    }
  }

  if (larger === digits1) {
    return 1
  } else if (larger === digits2) {
    return -1
  } else {
    return 0
  }
}

console.log(compareVersions('0.1', '1')) // -1
console.log(compareVersions('1', '1.0')) // 0
console.log(compareVersions('1.1', '1.2')) // -1
console.log(compareVersions('1.2', '1.2.0.0')) // 0
console.log(compareVersions('1.18.2', '1.2.0.0')) // 1
console.log(compareVersions('1.18.2', '13.37')) // -1
console.log(compareVersions('1.18.2', 'abcdefg')) // null
console.log(compareVersions('.1.18', '1.18'));
console.log(compareVersions('1..18', '1.15'));
