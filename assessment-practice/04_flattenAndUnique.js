// Write a function that takes a two-dimensional array as the argument
// and turns it into a flat array with all duplicated elements removed. Treat
// numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one
// that comes first in the result.

/*
Input: two-dimensional (nested) array
Output: one-dimensional array with duplicate elements removed

Questions:
  - Will the array always be exactly two-dimensional (not more or less?)
  - Will the array contain only primitives, or can it contain objects?
  - Will the array ever be sparse?
  - Will we always only receive one argument?
  - Will that argument always be a two-dimensional array?
  - Should the string evaluation be case-sensitive?

Assumed Answers:
  - The array will always be exactly two-dimensional
  - The array will only contain primitives
  - The array will not be sparse
  - We will only receive one argument
  - That argument will always be a two two-dimensional array
  - String evaluation should be case sensitive

Data Structure: Array all the way!

Algorithm:
  - If array is empty, return empty array
  - Make flattened array
  - init uniques array
  - For each element of flattened array
    - if element is a string
      - if uniques contains that string, or a number version, continue
      - if not, add element to uniques
    - else if element is a number
      - if uniques contains that number, or a string version, continue
      - if not, add element to uniques
    - if uniques contains element, continue, if not, add to uniques

  - return uniques
*/

function flattenAndUnique(array) {
  if (array.length === 0) return [];

  const flattened = array.flat();
  const uniques = [];

  for (let i = 0; i < flattened.length; i += 1) {
    const element = flattened[i]

    if (typeof element === 'string') {
      if (uniques.includes(element) || uniques.includes(Number(element))) {
        continue;
      } else {
        uniques.push(element);
        continue;
      }
    } else if (typeof element === 'number') {
      if (uniques.includes(element) || uniques.includes(String(element))) {
        continue;
      } else {
        uniques.push(element);
        continue;
      }
    }

    if (uniques.includes(element)) {
      continue;
    } else {
      uniques.push(element)
    }
  }

  return uniques
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, '3'], [3, 4, 5, 'a']])); // [1, 2, '3', 4, 5, 'a']
