// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

/*
Input: Integer (number of rows, always odd)
Output: Diamond containing that number of rows

Requirements:
  - First row has one star, and (rows - stars) / 2 spaces preceding
  - Subsequent rows have 2 more stars, same formula for spaces
  - Continues until stars equals rows
  - Then same process backwards until stars equals 1
  - Should this create one multiline string, or console log as we go?

Data Structure: Array of "rows" (array of strings)

Algorithm:
  - Init stars = 1
  - Init spaces = find space function (helper)
  - Init rows array = []
  - while stars <= rows
    - init row string
    - add spaces to row (helper)
    - add stars to row
    - add row to rows array
    - increment stars by 2
  - while stars >= 1
    - init row string
    - add spaces to row (helper)
    - add stars to row
    - add row to rows array
    - decrement stars by 2
  - For each row in rows, log row to console
*/

function findSpaces(lines, stars) {
  return (lines - stars) / 2;
}

function rowSpaces(spaces) {
  let string = '';
  for (let i = 0; i < spaces; i += 1) {
    string += ' '
  }
  console.log(string)
  return string
}

function rowStars(stars) {
  let string = '';
  for (let i = 0; i < stars; i += 1) {
    string += '*'
  }
  return string
}

function diamond(lines) {
  const rows = [];
  let stars = 1;

  while (stars <= lines) {
    let row = '';
    row += rowSpaces(findSpaces(lines, stars));
    row += rowStars(stars);
    rows.push(row);
    stars += 2;
  }

  stars -= 4;

  while (stars >= 1) {
    let row = '';
    row += rowSpaces(findSpaces(lines, stars));
    row += rowStars(stars);
    rows.push(row);
    stars -= 2;
  }

  rows.forEach((row) => console.log(row));
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
