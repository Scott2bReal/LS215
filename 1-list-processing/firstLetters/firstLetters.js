// Consider this Array of names:

let names = [
  'Heather',
  'Gisella',
  'Katsuki',
  'Hua',
  'Katy',
  'Kathleen',
  'Otakar',
]

// We want to try to find the most common first letter in this list
// We can break the solution down into the following steps:

// 1. For each name in the list, determine its first letter.
// 2. Count the occurrences of each first letter.
// 3. Find the first letter that occurs most often.

// We can also think about the outputs of each of these steps:
// 1. Array of first letters
// 2. Object with letters: counts
// 3. Letter with largest count

// Now, we can decide which abstractions to use to accomplish these steps
// 1. map
// 2. reduce
// 3. reduce

let letters = names.map((name) => name[0]);
// letters is [ "H", "G", "K", "H", "K", "K", "O" ]

let counts = letters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;
  obj[letter] += 1;
  return obj;
}, {});
// counts is { H: 2, G: 1, K: 3, O: 1 }

let mostCommon = Object.keys(counts).reduce((result, letter) => {
  if (counts[letter] > counts[result]) {
    result = counts[letter];
  }

  return result;
});

// letter is 'K'
