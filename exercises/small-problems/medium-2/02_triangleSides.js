// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides
// must be greater than the length of the longest side, and every side must
// have a length greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

/*
Input: 3 sides of triangle
Output: String (classification of triangle)

Requirements:
  - Must be valid triangle:
    - sum of the two shortest must be > than length of longest
    - every side must be > 0

    - Equilateral: All three sides are of equal length.
    - Isosceles: Two sides are of equal length, while the third is different.
    - Scalene: All three sides are of different lengths.

Data Structure: Array (for sorting)

Algorithm:
  - if triangle is invalid, return 'invalid'
  -
*/

function isValidTriangle(sides) {
  if (sides.includes(0)) return false;

  const compare = (a, b) => {
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  }

  const sorted = sides.sort(compare);

  if (sorted[2] + sorted[1] <= sorted[0]) return false;

  return true;
}

function triangle(side1, side2, side3) {
  const sides = [side1, side2, side3]
  if (!isValidTriangle([...sides])) return 'invalid';

  const filtered = [];

  sides.forEach((side) => {
    if (!filtered.includes(side)) filtered.push(side);
  })

  if (filtered.length === 1) {
    return 'equilateral'
  } else if (filtered.length === 2) {
    return 'isosceles'
  } else {
    return 'scalene'
  }
}

console.log(triangle(3, 3, 3)) // "equilateral"
console.log(triangle(3, 3, 1.5)) // "isosceles"
console.log(triangle(3, 4, 5)) // "scalene"
console.log(triangle(0, 3, 3)) // "invalid"
console.log(triangle(3, 1, 1)) // "invalid"
