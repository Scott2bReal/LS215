// A distinct string is a string that is present only once in an array. Given
// an array of strings, arr, and an integer, k, return the kth distinct string
// present in arr. If there are fewer than k distinct strings, return an empty
// string "". Note that the result string is the one encountered earliest in
// the array.

/*
Input: array, number ("kth" distinct string)
Output: "kth" distinct string, or empty string if fewer than k distinct strings

Questions:
  - What about empty array as input? (probably return empty string)
  - Case?
  - Mutate original array or leave intact?
  - Error handling?
    - Invalid argument types
    - Not correct amount of arguments
    - Array contains values which are not strings
  - Will k ever be negative or 0?
  - Will the array every be sparse?

Data Structure:
  - Array containing distinct strings, can use position in that array

Algorithm:
  - If length of array is less than k, return ''
  - Init distinct string array
  - For each string in array
    - If string is distinct (helper), push to distinct strings array
  - If length of distinctStrings is less than k, return ''
  - Return string at index k - 1 of distinctStrings

isDistinct Algorithm:
  - Init count = 0;
  - For each string in array
    - If string equals currentString, increment count
    - If count is greater than 1, return false
  - Return count equals 1
*/

function isDistinct(arr, string) {
  let count = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    const currentString = arr[idx];

    if (string === currentString) {
      count += 1;
    }

    if (count > 1) return false;
  }

  return true;
}

function distinctString(arr, k) {
  if (arr.length < k) return '';
  const distinctStrings = [];

  arr.forEach((string) => {
    if (isDistinct(arr, string)) {
      distinctStrings.push(string);
    }
  })

  if (distinctStrings.length < k) return '';

  return distinctStrings[k - 1];
}

console.log(distinctString([], 1)); // ''
console.log(distinctString(['a', 'b'], 1)); // 'a'
console.log(distinctString(['A', 'a'], 1)); // 'A'
console.log(distinctString(['A', 'a'], 2)); // 'a'
console.log(distinctString(['d', 'b', 'c', 'b', 'c', 'a'], 2)); // "a"
console.log(distinctString(['d', 'a', 'c'], 2)); // 'a'
