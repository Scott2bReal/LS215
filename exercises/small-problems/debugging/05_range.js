// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function fullRange(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  if (arguments.length === 2) {
    return fullRange(arguments[0], arguments[1])
  }

  return fullRange(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// This creates an endless loop since the two functions have the same name! We
// should rename the first range declaration to something else, and things
// should work as expected.
