// For this practice problem, we'll represent rectangles as Arrays with two
// elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an
// argument. The Function should return the total area covered by all the
// rectangles.

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(shapes) {
  // Map through input (list of arrays), make list of areas
  // Reduce the resulting array to a sum of all its elements

  return shapes
    .map(shape => shape[0] * shape[1])
    .reduce((sum, area) => sum + area);
}

console.log(totalArea(rectangles));    // 141

// Now, write a second Function named totalSquareArea. This Function should
// calculate the total area of a set of rectangles, just like totalArea.
// However, it should only include squares in its calculations: it should
// ignore rectangles that aren't square.

function totalSquareArea(rectangles) {
  // Pass totalArea an array containing only squares
  return totalArea(rectangles.filter((shape) => shape[0] === shape[1]));
}

console.log(totalSquareArea(rectangles));    // 121
