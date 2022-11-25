// The Luhn formula is a simple checksum formula used to validate a variety of
// identification numbers, such as credit card numbers and Canadian Social
// Insurance Numbers.
//
// The formula verifies a number against its included check digit, which is
// usually appended to a partial number to generate the full number. This
// number must pass the following test:

//     Counting from the rightmost digit and moving left, double the value of
//     every second digit

//     For any digit that thus become 10 or more, subtract 9 from the result
//     1111 becomes 2121 8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2
//     x 8 = 16 -> 16 - 9 = 7)

//     Add all these digits together 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to
//     give a checksum of 6 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

// If the total (the checksum) ends in 0 (put another way, if the total modulo
// 10 is congruent to 0), then the number is valid according to the Luhn
// Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it
// comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

// Write a program that, given a number in string format, check if it is valid
// per the Luhn formula. This should treat, for example, "2323 2005 7766 3554"
// as valid. You can ignore all non-numeric characters in the input string.

// I'm a bit unclear as to whether I should be checking the whole number
// provided, or only the appended group of digits. Because I can't ask any
// clarifying questions, I am assuming I am checking the entire input

// Input: string
// Output: boolean (whether string meets checksum requirements)

// Data Structure: Array

// Algorithm
/*
  - Clean input of all non-digit characters
  - Split that string, map elements as numbers
  - double every second digit, starting from the rightmost digit
    - if result of doubling is > 10, subtract 9
  - sum up resulting array (reduce)
  - check if result ends in 0, return boolean
*/

function cleanNumString(numString) {
  return numString.replace(/\D/g, '');
}

function endsInZero(number) {
  return number % 10 === 0;
}

function doubleAlternating(numArray) {
  return numArray.reverse().map((digit, idx) => {
    if (idx % 2 === 1) {
      let result = digit * 2;
      return result >= 10 ? (result - 9) : result;
    }

    return digit
  });
}

function luhnChecker(numString) {
  const cleanNumArray = cleanNumString(numString).split('').map(num => Number(num));
  const checkSum = doubleAlternating(cleanNumArray).reduce((acc, item) => acc + item);
  return endsInZero(checkSum);
}

// Examples
console.log(luhnChecker('2323 2005 7766 3554')); // true
console.log(luhnChecker('1111')); // false
console.log(luhnChecker('8763')); // true
