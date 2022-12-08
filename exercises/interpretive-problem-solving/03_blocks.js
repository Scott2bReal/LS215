// A collection of spelling blocks has two letters per block, as shown in this
// list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.
//
// Write a function that takes a word string as an argument and returns true if
// the word can be spelled using the set of blocks, false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

/*
Input: String
Output: Boolean (does this string follow the block rules?)

Data Structure: Nested array of blocks, array for characters of string

Algorithm:
  - init blocks array
  - init array of chars from lowercased input string
  - init array of usedChars as empty array
  - for each char in chars
    - if usedChars does not include char, step through blocks and add both letters from block containign char to used chars
    - if usedChars includes char, return false
  - if made it out of the loop without returning false, return true
*/

function isBlockWord(word) {
  const chars = word.toLowerCase().split('')
  const usedChars = []

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i]

    if (usedChars.includes(char)) {
      return false
    } else {
      // Find block that contains this char
      for (let j = 0; j < BLOCKS.length; j += 1) {
        const block = BLOCKS[j]

        if (block.includes(char)) {
          usedChars.push(block[0], block[1])
          break
        }
      }
    }
  }

  return true
}

const BLOCKS = [
  ['b', 'o'],
  ['x', 'k'],
  ['d', 'q'],
  ['c', 'p'],
  ['n', 'a'],
  ['g', 't'],
  ['r', 'e'],
  ['f', 's'],
  ['j', 'w'],
  ['h', 'u'],
  ['v', 'i'],
  ['l', 'y'],
  ['z', 'm'],
]

// Examples:
console.log(isBlockWord('BATCH')) // true
console.log(isBlockWord('BUTCH')) // false
console.log(isBlockWord('jest')) // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
