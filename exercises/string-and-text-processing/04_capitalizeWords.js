// Write a function that takes a string as an argument and returns that string
// with the first character of every word capitalized and all subsequent
// characters in lowercase.
//
// You may assume that a word is any sequence of non-whitespace characters.

function wordCap(string) {
  const words = string.split(' ')

  const capOneWord = (word) => {
    const chars = word.split('')
    chars[0] = chars[0].toUpperCase()
    return chars.join('')
  }

  return words.map((word) => capOneWord(word)).join(' ')
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
