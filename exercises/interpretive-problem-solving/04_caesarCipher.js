// Write a function that implements the Caesar Cipher. The Caesar Cipher is one
// of the earliest and simplest ways to encrypt plaintext so that a message can
// be transmitted securely. It is a substitution cipher in which each letter in
// a plaintext is substituted by the letter located a given number of positions
// away in the alphabet. For example, if the letter 'A' is right-shifted by 3
// positions, it will be substituted with the letter 'D'. This shift value is
// often referred to as the key. The "encrypted plaintext" (ciphertext) can be
// decoded using this key value.
//
// The Caesar Cipher only encrypts letters (including both lower and upper
// case). Any other character is left as is. The substituted letters are in the
// same letter case as the original letter. If the key value for shifting
// exceeds the length of the alphabet, it wraps around from the beginning.

/*
Input: string to encrypt, shift length
Output: encrypted string

Initial thoughts:
  - create array of letters, map letters to rotated letter and leave
    punctuation as-is
  - regex to find letter?
  - function to convert large (>26) rotation to good number
  - function to handle wrapping

Requirements:
  - Shifting will wrap if past the end of the alphabet
  - Anything other than letters will be ignored
  - Preserve case

Data Structure: regex for letters, array for dealing with string

Algorithm:
  - Establish range of char codes for upper and lower case
  - From array of chars of input string, map to char codes (charCodes array)
  - Map resulting array using helper rotate function, if current code falls within either letter range
  - Join resulting mapped array with ' ', return

Rotate algorithm:
  -
*/

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

// simple shift
console.log(caesarEncrypt('A', 0)) // "A"
console.log(caesarEncrypt('A', 3)) // "D"

// wrap around
console.log(caesarEncrypt('y', 5)) // "d"
console.log(caesarEncrypt('a', 47)) // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25))
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5))
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(
  caesarEncrypt(
    'There are, as you can see, many punctuations. Right?; Wrong?',
    2
  )
)
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
