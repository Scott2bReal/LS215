// Given an array of integers, nums, return the third largest number in the
// array. If the third largest number does not exist, return the greatest
// number.

// You are not allowed to sort the array.

/*
Input: Array of integers
Output: Third largest integer

Questions:
  - Will the array ever be empty?
  - Will the array ever be sparse?
  - Will the array ever contain negative numbers?
  - What if we receive more than one argument?
  - Do I need to account for invalid argument types (i.e. not an array)?
  - Can I make a copy of the array and sort that?
  - Can I not sort ANY array, or just that original one?

Assumed answers:
  - The array will not be empty
  - The array will not be sparse
  - The array will not contain negative numbers
  - We will always recieve one argument
  - Do not worry about invalid argument types
  - You can sort other arrays than the input array

Algorithm:
  - If length of nums is 1 or 2, return max of nums

  - Init topThree array
  - Add first three nums of array to input array

  - Evaluate topThree (helper)

  - Starting at the fourth element of nums, for loop
    - Add num to top three
    - topThree = evaluate top three

  - return third element of topThree

*/

function sortedTopThree(arr) {
  const compare = (a, b) => {
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  }

  return arr.sort(compare).slice(0, 3)
}

function thirdMax(nums) {
  if (nums.length > 0 && nums.length < 3) {
    return Math.max(...nums)
  }

  let topThree = sortedTopThree(nums.slice(0, 3));

  // Only runs if length of nums is greater than 3
  for (let i = 3; i < nums.length; i += 1) {
    const num = nums[i];
    topThree.push(num);
    topThree = sortedTopThree(topThree)
  }

  return topThree[2]
}

console.log(thirdMax([1, 1])) // 1
console.log(thirdMax([2, 1])) // 2
console.log(thirdMax([3, 2, 1])) // 1
console.log(thirdMax([1, 2, 3])); // 1
console.log(thirdMax([4, 3, 2, 1])) // 2
console.log(thirdMax([3, 4, 1, 2])) // 2
console.log(thirdMax([5, 6, 2, 3, 7, 1, 8, 9])) // 7
