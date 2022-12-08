// Write a function that displays an 8-pointed star in an nxn grid, where n is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
Input: integer (always odd and >7)
Output: star with n number of rows

Initial thoughts:
  - functions for outer rows, middle row
  - outer rows have 3 stars, middle row has n stars
  - in first row, 0 leading spaces and inner spaces are (n - stars) / 2
  - subsequent rows see leading spaces + 1, inner spaces - 1
  - we know the middle row is here when inner spaces = 0

Data Structure: array of rows

Algorithm:
  - Init constant outer row stars (3)
  - Init outerSpaces
  - Init innerSpaces (helper)
  - Init rows array

  - while innerSpaces >= 0
    - build an outer row (helper), add to rows
    - increment outerSpaces by 1
    - decrement innerSpaces by 1
  - set innerSpace = 0

  - build a middle row, add to rows

  - while rows.length < lines
    - build an outer row (helper), add to rows
    - decrement outerSpaces by 1
    - increment innerSpaces by 1

  for each row in rows
    - log row to console
*/

OUTER_ROW_STARS = 3;

function initInnerSpaces(lines) {
  return (lines - OUTER_ROW_STARS) / 2;
}

function buildSpaceChunk(spaces) {
  let chunk = '';

  for (let i = 0; i < spaces; i += 1) {
    chunk += ' '
  }

  return chunk
}

function buildOuterRow(outerSpaces, innerSpaces) {
  const outerChunk = buildSpaceChunk(outerSpaces);
  const innerChunk = buildSpaceChunk(innerSpaces);

  return `${outerChunk}*${innerChunk}*${innerChunk}*${outerChunk}`;
}

function buildMiddleRow(lines) {
  let string = ''

  for (let i = 0; i < lines; i += 1) {
    string += '*';
  }

  return string;
}

function star(lines) {
  const rows = [];
  let outerSpaces = 0;
  let innerSpaces = initInnerSpaces(lines);

  while (innerSpaces >= 0) {
    rows.push(buildOuterRow(outerSpaces, innerSpaces));
    outerSpaces += 1;
    innerSpaces -= 1;
  }

  rows.push(buildMiddleRow(lines));

  while (rows.length < lines) {
    outerSpaces -= 1;
    innerSpaces += 1;
    rows.push(buildOuterRow(outerSpaces, innerSpaces));
  }

  rows.forEach((row) => console.log(row));
}

star(7);
/*

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

*/

star(9);
// logs
/*

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

*/
