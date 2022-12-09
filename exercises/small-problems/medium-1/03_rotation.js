// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called
// the maximum rotation of the original number.
//
// Write a function that takes an integer as an argument and returns the
// maximum rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

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

/*
Start rotating at max rotation, rotate down
*/

function maxRotation(num) {
  const size = String(num).length

  for (let i = size; i > 0; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }

  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
