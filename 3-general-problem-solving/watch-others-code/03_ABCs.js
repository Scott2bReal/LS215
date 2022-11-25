// A collection of spelling blocks has two letters per block, as shown in this
// list:
//
// B:O   X:K   D:Q   C:P   N:A G:T   R:E   F:S   J:W   H:U V:I   L:Y   Z:M
//
// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.
//
// Write a function that takes a word string as an argument, and returns true
// if the word can be spelled using the set of blocks, or false otherwise. You
// can consider the letters to be case-insensitive when you apply the rules.

/*
Questions
  - Do I need to worry about characters other than letters?
  - Empty string?

Input: "Word string"
Output: boolean

Requirements:
  - Provided word does not use both letters from any of the supplied "blocks"
  - Word only uses each block once
  - Case-insensitive

Data Structure:
  Nested array - Array containing two-element arrays containing the letters (blocks)
  Array - The word should be split into an array of characters

Algorithm
  - Create constant - nested array of blocks
  - Split word into array of characters, map to uppercase
  - Initialize array of off-limits letters (empty to start)
  - For each character in array of chars from words
    - Check if that character is present in off-limits array, return false if it is
    - If not, determine which block it belongs to and add both of those letters to off-limits array
  - Return true
*/

const BLOCKS = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['L', 'Y'],
  ['Z', 'M'],

]

function isBlockWord(word) {
  const casedWord = word.toUpperCase()
  const offLimits = [];

for (let wordIdx = 0; wordIdx < casedWord.length; wordIdx++) {
    const char = casedWord[wordIdx];
    if (offLimits.includes(char)) return false;

    for (let blocksIdx = 0; blocksIdx < BLOCKS.length; blocksIdx++) {
      const block = BLOCKS[blocksIdx];
      if (block.includes(char)) {
        offLimits.push(block[0], block[1]);
        break;
      }
    }

  }

  return true;
}


// Examples:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('bAtCh'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BUtCH'));      // false
console.log(isBlockWord('jest'));       // true
