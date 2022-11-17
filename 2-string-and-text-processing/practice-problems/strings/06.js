// Log the return value of String.fromCharCode when
// you pass it charCode as an argument.

const language = 'JavaScript';
const idxVariable = language.indexOf('S')
const charCode = language.charCodeAt(idxVariable)
const char = String.fromCharCode(charCode)
console.log(char)
