// The Vigenere Cipher encrypts alphabetic text using polyalphabetic
// substitution. It uses a series of Caesar Ciphers based on the letters of a
// keyword. Each letter of the keyword is treated as a shift value. For
// instance, the letter 'B' corresponds to a shift value of 1, and the letter
// 'd' corresponds to a shift value of 3. In other words, the shift value used
// for a letter is equal to its index value in the alphabet. This means that
// the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase
// letters 'A'-'Z' are also equivalent to 0-25.
//
// Applying the Vigenere Cipher is done sequentially for each character by
// applying the current shift value to a Caesar Cipher for that particular
// character. To make this more concrete, let's look at the following example:

// Examples
/*
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
*/

// Notice that in the example, the key isn't moved forward if the character
// isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only
// encrypts alphabetic characters.
//
// Write a function that implements the Vigenere Cipher. The case of the
// keyword doesn't matter—in other words, the resulting encryption won't change
// depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').


const LOWER_CASE_RANGE = [97, 122]
const UPPER_CASE_RANGE = [65, 90]
const ROTATION_LIMIT = 26

function isIncluded(num, range) {
  return num >= range[0] && num <= range[1]
}

function fixRotation(rotation) {
  while (rotation > ROTATION_LIMIT) {
    if (rotation > ROTATION_LIMIT) {
      rotation -= ROTATION_LIMIT
    }
  }

  return rotation
}

function wrapLower(code, rotation) {
  let newCode = code + rotation
  while (newCode > LOWER_CASE_RANGE[1]) {
    newCode -= ROTATION_LIMIT
  }

  return newCode
}

function wrapUpper(code, rotation) {
  let newCode = code + rotation
  while (newCode > UPPER_CASE_RANGE[1]) {
    newCode -= ROTATION_LIMIT
  }

  return newCode
}

function wrap(code, rotation) {
  if (isIncluded(code, LOWER_CASE_RANGE)) {
    return wrapLower(code, rotation)
  } else {
    return wrapUpper(code, rotation)
  }
}

function rotate(code, rotation) {
  const actualRotation = fixRotation(rotation)
  return wrap(code, actualRotation)
}

function caesarEncrypt(string, rotation) {
  const charCodes = string.split('').map((char) => char.charCodeAt(0))

  const rotatedCodes = charCodes.map((code) => {
    if (
      isIncluded(code, LOWER_CASE_RANGE) ||
      isIncluded(code, UPPER_CASE_RANGE)
    ) {
      return rotate(code, rotation)
    } else {
      return code
    }
  })

  return rotatedCodes.map((code) => String.fromCharCode(code)).join('')
}
const charValues = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let score = 0;
  return alphabet.split('').reduce((obj, char) => {
    obj[char] = score
    score += 1;
    return obj
  }, {})
}

const CHAR_VALUES = charValues();

/*
Input: string to be encoded, shift keyword
Output: encoded string

Requirements:
  - keyword is case insensitive
  - loop cycling through keyword, only cycled when char in question is abc

Data Structure: Object for keyword letter values, array of chars

Algorithm:
  - Init charValues object (helper)
  - Init keywordIdx = 0;
  - Init array of chars from string
  - Init keywordChars from keyword
  - Step through chars in chars (map)
    - if char is not alphabetic, just return char
    - else
      - return caesar cipher for char, rotation is equal to value at charValues[keyword[keywordIdx]]
      - increment keywordidx (helper)
  - return joined rotated chars array
*/

function incrementKeywordIdx(idx, chars) {
  let newIdx = idx + 1;

  if (newIdx === chars.length) {
    return newIdx - chars.length;
  }

  return newIdx;
}

function vigenereCipher(string, keyword) {
  let keywordIdx = 0;
  const chars = string.split('');
  const keywordChars = keyword.toLowerCase().split('');
  let rotation = CHAR_VALUES[keywordChars[keywordIdx]]

  const rotatedChars = chars.map((char) => {
    if (char.match(/[a-z]/i)) {
      const rotatedChar = caesarEncrypt(char, rotation)
      keywordIdx = incrementKeywordIdx(keywordIdx, keywordChars);
      rotation = CHAR_VALUES[keywordChars[keywordIdx]]
      return rotatedChar;
    } else {
      return char;
    }
  })

  return rotatedChars.join('');
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat')); // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereCipher("Dog", "Rabbit")); // Uoh
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'cab')); // Riogaqrlfu dpp't hq oo riabat!
