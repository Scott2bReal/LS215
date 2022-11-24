// Examples / Test Cases

// Here are some possible comparisons that our program should be able to do:
// 1 is equal to 1
// 1.1 is greater than 1.0
// 2.3.4 is less than 2.3.5

// We also need to consider what edge cases our solution should handle. Here
// are some possible edge cases:

// 1.a is not a valid version          // we only want to deal with numbers and dots
// .1 and 1. are not valid versions    // versions must begin and end with a number
// 1..0 is not a valid version         // dots can only appear between two numbers
// 1.0 and 1.0.0 are equal to 1        // zeros can be inferred but are not always shown
// 1.0.0 is less than 1.1              // can handle version numbers with different lengths
// 1.0 is less than 1.0.5              // can handle version numbers with different lengths

// Data Structure
// We'll want to use an array of numbers for this one

// Algorithm
// - convert the input data into our data structure of choice
// - express steps to produce outputs, using methods and abstractions available
//   on the data structure

// - return null if the inputs contain any characters other than digits and dots
// - split the input numbers into parts as arrays of integers
// - loop through the two version numbers' parts
//   - for each step, access one part from each version number
//   - if one version number runs out of parts, use 0
//   - compare the two parts
//     - if part1 < part2
//       - return -1
//     - if part1 > part2
//       - return 1
//     - if part1 === part2
//       - we move to the next pair of parts
// - when we reach the end of the loop, return 0

function compareVersions(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}
// Test Cases
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1
