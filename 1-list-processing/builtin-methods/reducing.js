// Write a function named myReduce that's similar to the Array.prototype.reduce
// method. It takes an array and a function as arguments, and optionally, a
// third argument that serves as an initial value. If the caller omits the
// initial value, myReduce should use the first element of the Array as the
// initial value. myReduce should return the value returned by the last
// invocation of the callback function.

function myReduce(array, func, initial) {
  let accumulator = initial ? initial : array[0]

  for (let idx = initial ? 0 : 1; idx < array.length; idx += 1) {
    accumulator = func(accumulator, array[idx])
  }

  return accumulator
}

let smallest = (result, value) => (result <= value ? result : value)
let sum = (result, value) => result + value

console.log(myReduce([5, 12, 15, 1, 6], smallest)) // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10)) // 49

function longestWord(words) {
  return myReduce(words, longest)
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result
}

console.log(longestWord(['abc', 'launch', 'targets', ''])) // "targets"
