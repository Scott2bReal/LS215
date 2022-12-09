// Write a function that takes a sentence string as an argument and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

/*
Input: string
Output: String with num words replaced with their digit

Algorithm:
  - Init constant of words to digits
  - create array of words from string
*/

const WORD_DIGITS = {
  'zero': '0',
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function wordToDigit(string) {
  const digitWords = Object.keys(WORD_DIGITS);
  const regex = new RegExp('\\b' + ('one'|'two'|'three'|'four'|'five'|'six'|'seven'|'eight'|'nine'|'zero') + '\\b', 'g');
  const replacer = (match) => {
    return WORD_DIGITS[match]
  }

  return string.replace(regex, replacer)
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
