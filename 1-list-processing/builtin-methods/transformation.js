// Write a Function named myMap that is similar to the built-in
// Array.prototype.map method. Your Function should take an array and another
// Function (the callback) as arguments, and return a new Array. The new
// Array's values should be the return values of the callback Function.

function myMap(array, func) {
  const newArray = [];

  array.forEach((value) => {
    newArray.push(func(value))
  })

  return newArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]

// Let's build a function that takes an array of book objects as an argument
// and returns an array of book titles. Your function should use myMap.

function getBooksTitle(books) {
  return myMap(books, getTitle);
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

console.log(getBooksTitle(books));
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]
