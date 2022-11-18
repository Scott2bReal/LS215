// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.

function swapCase(string) {
  const swapChar = (char) => {
    return char.match(/[A-Z]/) ? char.toLowerCase() : char.toUpperCase()
  }

  return string.split('').map(char => swapChar(char)).join('')
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
