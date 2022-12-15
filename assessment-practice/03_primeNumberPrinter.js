// Write a function, primeNumberPrinter, that prints all prime numbers present
// as substrings in a given string.

/*
Input: string
Output: Array containing all prime numbers present as substrings

Questions:
  - Will we only ever receive one argument?
  - Will that argument always be a string?
  - Only contiguous number substrings?
  - What to return if there are no numbers present as substrings?
    - This will cover the case of an empty string

Assumed Answers:
  - Only one argument ever
  - Will always be a string
  - Only contiguous number substrings
  - Empty array if no number substrings

Data Structure: Array (first of num substrings, then of primes)

Algorithm:
  - if string is empty then return empty array
  - init array of all number substrings (helper), map those to numbers
  - filter that array for prime numbers (helper)
  - log that array

*/

function numSubStrings(string) {
  const nums = string.match(/[0-9]+/g)
  return nums ?? []
}

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false
  }

  return num > 1
}

function primeNumberPrinter(string) {
  if (string.length === 0) {
    console.log([])
    return
  }

  const nums = numSubStrings(string).map((numString) => Number(numString))
  console.log(nums.filter((num) => isPrime(num)))
}

primeNumberPrinter('a4bc2k13d') // [2, 13]
primeNumberPrinter('abcdefg') // []
primeNumberPrinter('') // []
