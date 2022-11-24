// Let's walk through the process of creating test cases for a hypothetical
// interview problem, so that we can get some practice applying these
// guidelines.

// We are given the problem description: "Write a function called
// doubler that doubles every value in an array". We are not given any test
// cases, so we'll have to create them all on our own.

// Requirements
// - elements that are numbers should be multiplied by 2
// - elements that are strings should be repeated twice via concatenation
// - other types of elements should be duplicated in the array
// - the input array should not be mutated
// - elements that are special number values should remain unchanged
// - elements that are any other type of number should be treated normally (multiplied by 2)
// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
// - non-primitive elements should have their reference duplicated, not their value
// - elements that appear more than once should be treated normally (as specified above)
// - elements that contain nested arrays or objects should be treated normally (duplicated)
// - if the input array contains empty slots (a "sparse array"), they should be removed
// - if an inner array (element) contains empty slots, they should remain unchanged
// - if the input array contains any object properties, they should remain unchanged
// - if an inner array (element) contains any object properties, they should remain unchanged
// - if the array is empty, return an empty array
// - if multiple arguments are passed, ignore all but the first
// - if the argument is a string, treat it as an array of characters
// - if the argument is a non-negative integer, treat it as an array of digits
// - if the argument is an object, treat it as an array of its property values
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'

const SPECIAL_NUMBERS = [Infinity, NaN, -Infinity]

function handleString(string) {
  return string.split('')
}

function handleNumber(num) {
  return String(num)
    .split('')
    .map((digit) => Number(digit))
}

function handleObject(obj) {
  return Object.values(obj);
}

function doubler(array) {
  if (typeof array === 'string') {
    return doubler(handleString(array))
  } else if (typeof array === 'number') {
    return doubler(handleNumber(array))
  } else if (typeof array === 'object' && !Array.isArray(array)) {
    return doubler(handleObject(array))
  }

  if (!Array.isArray(array)) return 'Invalid input'

  const newArr = []

  for (let i = 0; i < array.length; i++) {
    const item = array[i]
    if (typeof item === 'string') {
      newArr.push(item + item)
    } else if (typeof item === 'object') {
      newArr.push(item, item)
    } else if (typeof item === 'number') {
      if (Number.isFinite(item) && !Number.isNaN) {
        newArr.push(item * 2);
      } else {
        newArr.push(item);
      }
    } else {
      newArr.push(item)
    }
  }

  return newArr;
}

// - elements that are numbers should be multiplied by 2
console.log(doubler([1, 2])) // [2, 4]

// - elements that are strings should be repeated twice via concatenation
console.log(doubler(['a', 'ab'])) // ['aa', 'abab']

// - elements that are special number values should remain unchanged
console.log(doubler([NaN, Infinity, -Infinity])); // [NaN, Infinity, -Infinity];

// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
console.log(doubler(['', 'ab'])) // ['', 'abab']

// - the input array can contain a mixture of different types of elements
console.log(doubler(['ab', 2])) // ['abab', 4]

// - non-primitive elements should have their reference duplicated, not their value
console.log(doubler([{ a: 1, b: 2 }])) // [{a: 1, b: 2}, {a: 1,b: 2}]

// - elements that appear more than once should be treated normally (as specified above)
console.log(doubler([1, 1, 'a', 'a'])) // [2, 2, 'aa', 'aa']

// - elements that contain nested arrays or objects should be treated normally (duplicated)
console.log(doubler([[1, 1], { a: 1, b: 2 }])) // [[1, 1], [1, 1], {a: 1, b: 2}, {a: 1, b: 2}]

// - if the input array contains any object properties, they should remain unchanged
let array = [1, 'a']
array.foo = 'bar'
console.log(doubler(array)) // [2, 'aa', foo: 'bar']

// - if the array is empty, return an empty array
console.log(doubler([])) // []

// - if multiple arguments are passed, ignore all but the first
console.log(doubler([], [])) // []

// - if the argument is a string, treat it as an array of characters
console.log(doubler('ab')) // [['aa', 'bb']]

// - if the argument is a non-negative integer, treat it as an array of digits
console.log(doubler(123)) // [2, 4, 6]

// - if the argument is an object, treat it as an array of its property values
console.log(doubler({ a: 1, b: 'a' })) // [2, 'aa']

// - all other kinds of inputs are invalid, and should return the string 'Invalid input'
console.log(
  doubler(function foo() {
    return 'bar'
  })
) // 'Invalid input'
