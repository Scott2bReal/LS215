// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains a
// fruit name and a number that represents the desired quantity of that fruit.
// The output array is such that each fruit name appears the number of times
// equal to its desired quantity.
//
// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

function oneItem(list) {
  const newArr = [];
  let counter = list[1];

  while (counter > 0) {
    newArr.push(list[0]);
    counter -= 1;
  }

  return newArr;
}

function buyFruit(list) {
  return list.map((item) => oneItem(item)).flat()
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
