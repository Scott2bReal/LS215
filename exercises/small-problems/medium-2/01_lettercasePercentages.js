// Write a function that takes a string and returns an object containing the
// following three properties:

    // the percentage of characters in the string that are lowercase letters
    // the percentage of characters that are uppercase letters
    // the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

/*
Input: String
Output: Object with keys for lowercase, uppercase, and neither

Requirements:
  - Letters should be counted towards lower or upper case
  - Any other character should get counted towards neither

Data Structure:
  - First, array of characters in the string. Then reduce(?) that
    into an object

Algorithm:
  - Init result object
  - Split string into array of chars
  - Init total chars = length of chars array
  - Init totalLowers, totalUppers, totalNeither
  - For each character
    - If char is letter, check case and increment appropriately
    - If char is not a letter, increment neither
  - For each "total" variable, find the percentage and save in object
*/

function findPercentage(total, portion) {
  return ((portion / total) * 100).toFixed(2);
}

function letterPercentages(string) {
  const chars = string.split('');
  const totalChars = chars.length;
  let totalLowers = 0;
  let totalUppers = 0;
  let totalNeither = 0;

  chars.forEach((char) => {
    if (char.match(/[a-z]/i)) {
      if (char.match(/[a-z]/)) {
        totalLowers += 1;
      } else {
        totalUppers += 1;
      }
    } else {
      totalNeither += 1;
    }
  })

  return {
    lowercase: findPercentage(totalChars, totalLowers),
    uppercase: findPercentage(totalChars, totalUppers),
    neither: findPercentage(totalChars, totalNeither),
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
