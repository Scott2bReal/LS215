// Write a function named myOwnEvery that's similar to the
// Array.prototype.every method. It should take an array and a function as
// arguments, and return true if every element passed to the function evaluates
// as truthy.

function myOwnEvery(array, func) {
  // forEach will go thru the entire collection regardless of that return
  // Better to use a for loop, more efficient
  // array.forEach((value) => {
  //   if (!func(value)) return false
  // })

  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true

// Let's write a program that checks whether all elements of an array are
// Numbers.

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
