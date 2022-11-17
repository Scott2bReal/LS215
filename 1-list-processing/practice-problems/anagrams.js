// Write a Function named anagram that takes two arguments: a word and an array
// of words. Your function should return an array that contains all the words
// from the array argument that are anagrams of the word argument. For example,
// given the word "listen" and an array of candidate words like "enlist",
// "google", "inlets", and "banana", the program should return an array that
// contains "enlist" and "inlets".

function anagram(word, list) {
  // filter the list of words by if the sorted input word matches the sorted word
  return list.filter((listWord) => {
    return word.split('').sort().join('') === listWord.split('').sort().join('')
  })
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])) // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])) // [ "enlist", "inlets" ]
