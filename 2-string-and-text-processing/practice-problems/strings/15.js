// Create a variable named pi and set it to the result of 22 / 7. Convert pi to
// a String using the toString method. Search the resulting string for the
// final occurrence of '14', and log its index position.

const pi = 22 / 7
const piString = pi.toString()
const last14Position = piString.lastIndexOf('14')
console.log(last14Position)
