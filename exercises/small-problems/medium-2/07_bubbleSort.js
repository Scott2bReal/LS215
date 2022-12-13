// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it
// is not an efficient algorithm, it is an excellent exercise for student
// developers. In this exercise, you will write a function that sorts an array
// using the bubble sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array.
// On each pass, the two values of each pair of consecutive elements are
// compared. If the first value is greater than the second, the two elements
// are swapped. This process is repeated until a complete pass is made without
// performing any swaps — at which point the array is completely sorted.

// We can stop iterating the first time we make a pass through the array
// without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the
// algorithm, as well as a minor optimization technique — see the Bubble Sort
// Wikipedia page.

// Write a function that takes an array as an argument and sorts that array
// using the bubble sort algorithm described above. The sorting should be done
// "in-place" — that is, the function should mutate the array. You may assume
// that the array contains at least two elements.

/*
pseudo-code from Wikipedia

procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                swapped := true
            end if
        end for
        n := n - 1
    until not swapped
end procedure
*/

function swap(array, first, last) {
  const swap = array[first];
  array[first] = array[last];
  array[last] = swap;
  return null;
}

function bubbleSort(array) {
  let n = array.length;

  while (true) {
    let swapped = false;

    for (let idx = 0; idx < n; idx += 1) {
      if (array[idx - 1] > array[idx]) {
        swap(array, (idx - 1), idx);
        swapped = true
      }
    }

    n -= 1;
    if (!swapped) break;
  }

  return array
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
