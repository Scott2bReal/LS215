// Write a Function named octalToDecimal that performs octal to decimal
// conversion. When invoked on a String that contains the representation of an
// octal number, the Function returns a decimal version of that value as a
// Number. Implement the conversion yourself: do not use something else to
// perform the conversion for you.

function octalToDecimal(numberString) {
  // Split input string into array of string digits
  // Map digits, convert to numbers
  // Reverse that array so can use index for octal conversion
  // Convert each of those digits from octal to decimal
  // Reduce resulting array for the sum (decimal conversion)
  return numberString
    .split('')
    .map((digit) => Number(digit))
    .reverse()
    .map((digit, idx) => digit * 8 ** idx)
    .reduce((sum, digit) => digit + sum)
}

console.log(octalToDecimal('1')); // 1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); // 9
