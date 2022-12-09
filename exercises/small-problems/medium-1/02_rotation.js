// Write a function that rotates the last n digits of a number. For the
// rotation, rotate by one digit to the left, moving the first digit to the
// end.

/*
Input: integer, number of digits to move
Output: integer with digits rotated

Data structure: array

Algorithm:
  - Convert int to array of digits (helper)
  - Grab a chunk of size size from the end of digits
  - Rotate that chunk (helper), append back to digits
  - return converted digits array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined
  if (array.length === 0) return [];

  const copy = [...array];
  copy.push(copy.shift())
  return copy
}

function convertToDigits(num) {
  return String(num).split('');
}

function convertFromDigitsToNumber(digits) {
  return Number(digits.join(''));
}

function rotateRightmostDigits(num, size) {
  let digits = convertToDigits(num);
  const chunk = digits.splice((digits.length - size), size);
  const newChunk = rotateArray(chunk)
  digits.push(newChunk);

  return convertFromDigitsToNumber(digits.flat());
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
