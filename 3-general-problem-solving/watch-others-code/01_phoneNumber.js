// Problem Description
//
// Write a program that cleans up user-entered phone numbers so that they can
// be sent as SMS messages. Other than digits, the number may also contain
// special character such as spaces, dash, dot, and parentheses that should be
// ignored.
//
// The rules are as follows:
//
//     If the phone number is less than 10 digits, assume that it is a bad
//     number.
//     If the phone number is 10 digits, assume that it is good.
//     If the phone number is 11 digits and the first number is 1, trim the 1 and use
//     the last 10 digits.
//     If the phone number is 11 digits and the first
//     number is not 1, then it is a bad number.
//     If the phone number is more than 11 digits, assume that it is a bad number.
//
// For bad numbers, just a return a string of 10 0s.

function cleanNumber(phoneNumber) {
  const strippedNumber = phoneNumber.replace(/[^0-9]/g, '').split('');

  if (strippedNumber.length < 10 || strippedNumber.length > 11) {
    return '0000000000'
  }

  if (strippedNumber.length === 11) {
    return strippedNumber[0] === '1' ? strippedNumber.slice(1).join('') : '0000000000'
  }

  return strippedNumber.join('')
}

// Examples
console.log(cleanNumber('1')); // '0000000000'
console.log(cleanNumber('23456789011')); // '0000000000'
console.log(cleanNumber('123456789012')); // '0000000000'
console.log(cleanNumber('1234567890')); // '1234567890'
console.log(cleanNumber('2345678901')); // '2345678901'
console.log(cleanNumber('12345678901')); // '2345678901'
console.log(cleanNumber('(234) 567-890.1')); // '2345678901'
