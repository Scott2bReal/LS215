// Implement encoding and decoding for the rail fence cipher.
//
// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient
// Greeks.
//
// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom
// (like a zig-zag). Finally the message is then read off in rows.
//
// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT
// ONCE", the cipherer writes out:

/*
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
*/

// Then
// WECRLTEERDSOEEFEAOCAIVDEN

// To decrypt a message you take the zig-zag shape and fill the ciphertext
// along the rows.
/*
? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
*/

// The first row has seven spots that can be filled with "WECRLTE".
/*
W . . . E . . . C . . . R . . . L . . . T . . . E
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
*/

// Now the 2nd row takes "ERDSOEEFEAOC".
/*
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
*/

// Leaving "AIVDEN" for the last row.
/*
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
*/

// If you now read along the zig-zag shape you can read the original message.

/*
Encoding
Input: Normal string, number of rails
Output: Encoded string

Data Structure: Object with key: rail number, value: string for that rail

Requirements:
  - If input string is empty, return empty string
  - Don't have to evenly traverse all rails
  - More rails than letters just returns original string

Algorithm:
  - Split input string into chars
  - Init counter = 1
  - Init ascending = true
  - Init object with keys for each rail (helper), each value is ''
  - For each char
    - Add char to object[counter]
    - if counter is equal to rails, toggle ascending
    - if ascending, increment counter, if not, decrement counter
  - Make array of all object values, concat that string together, return it
*/

function initRailsObj(rails) {
  let counter = 1;
  let finalObj = {};

  while (counter <= rails) {
    finalObj[counter] = [];
    counter += 1;
  }

  return finalObj
}

function encodedFromObj(railsObj) {
  return Object.values(railsObj).flat().join('');
}

function populateRailObjFromDecoded(railsObj, rails, chars) {
  let counter = 1;
  let ascending = true;

  chars.forEach((char) => {
    railsObj[counter].push(char);

    if (counter === rails) {
      ascending = false;
    } else if (!ascending && counter === 1) {
      ascending = true;
    }

    if (ascending) {
      counter += 1;
    } else {
      counter -= 1;
    }
  })

  return railsObj;
}

function findRailLengths(chars, rails) {
  const railLengths = {}
  let railNum = 1;
  let ascending = true;

  chars.forEach(() => {
    if (railLengths[railNum]) {
      railLengths[railNum] += 1;
    } else {
      railLengths[railNum] = 1;
    }

    if (railNum === rails) {
      ascending = false;
    } else if (!ascending && railNum === 1) {
      ascending = true;
    }

    if (ascending) {
      railNum += 1;
    } else {
      railNum -= 1;
    }
  })

  return railLengths;
}

function populateRailObjFromEncoded(railsObj, rails, chars) {
  const railLengths = findRailLengths(chars, rails)
  let railNum = 1;

  chars.forEach((char) => {
    if (railsObj[railNum].length === railLengths[railNum]) {
      railNum += 1;
    }

    railsObj[railNum].push(char);
  })

  return railsObj;
}

function encode(string, rails) {
  if (string === '' || rails === 1) return string;
  if (string.split('').length < rails) return string;

  const chars = string.split('');
  const railsObj = initRailsObj(rails);
  populateRailObjFromDecoded(railsObj, rails, chars)

  return encodedFromObj(railsObj);
}

function reverseRails(railsObj, rails) {
  let railNum = 1;

  while (railNum <= rails) {
    railsObj[railNum] = railsObj[railNum].reverse();
    railNum += 1;
  }
}

function decodedFromObj(railsObj, rails, targetLength) {
  let finalString = '';
  let railNum = 1;
  let ascending = true;

  reverseRails(railsObj, rails);

  while (finalString.length < targetLength) {
    finalString += railsObj[railNum].pop();

    if (railNum === rails) {
      ascending = false;
    } else if (!ascending && railNum === 1) {
      ascending = true;
    }

    if (ascending) {
      railNum += 1;
    } else {
      railNum -=1;
    }
  }

  return finalString;
}

function decode(string, rails) {
  if (string === '' || rails === 1) return string;
  if (string.split('').length < rails) return string;

  const chars = string.split('');
  const railsObj= initRailsObj(rails);
  populateRailObjFromEncoded(railsObj, rails, chars)

  return decodedFromObj(railsObj, rails, string.length);
}

console.log(encode('', 4)); // ''
console.log(encode('One rail, only one rail', 1)); // 'One rail, only one rail'
console.log(encode('XOXOXOXOXOXOXOXOXO', 2)); // 'XXXXXXXXXOOOOOOOOO'
console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3)); // 'WECRLTEERDSOEEFEAOCAIVDEN'
console.log(encode('THEDEVILISINTHEDETAILS', 3)); // 'TEITELHDVLSNHDTISEIIEA'
console.log(encode('EXERCISES', 4)); // 'ESXIEECSR'
console.log(encode('More rails than letters', 24)); // 'More rails than letters'
console.log(decode('', 4)); // ''
console.log(decode('ABCDEFGHIJKLMNOP', 1)); // 'ABCDEFGHIJKLMNOP'
console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // 'WEAREDISCOVEREDFLEEATONCE'
console.log(decode('XXXXXXXXXOOOOOOOOO', 2)); // 'XOXOXOXOXOXOXOXOXO'
console.log(decode('TEITELHDVLSNHDTISEIIEA', 3)); //'THEDEVILISINTHEDETAILS'
