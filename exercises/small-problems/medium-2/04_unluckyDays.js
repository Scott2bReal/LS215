// Write a function that takes a year as an argument and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater
// than 1752 (when the modern Gregorian Calendar was adopted by the United
// Kingdom). You may also assume that the same calendar will remain in use for
// the foreseeable future.

/*
Input: Year (integer)
Output: Number of friday the 13ths in that year

Algorithm:
  - Make array of the date of each friday in the year (helper)
      - make a new date object for jan 1 of that year
      - if getDay of that day is 5, push getDate of that date
      - return array of dates

  - Filter for 13, return length

function isSameYear(targetYear, year) {
  return targetYear === year;
}

function findFridays(year) {
  const fridays = [];
  let today = new Date(`${year}/01/01`);

  while (true) {
    today = new Date(today.setDate(today.getDate() + 1));

    if (!isSameYear(year, today.getFullYear())) break;

    if (today.getDay() === 5) {
      fridays.push(today.getDate())
    }
  }

  return fridays;
}

function fridayThe13ths(year) {
  const fridayDates = findFridays(year);

  return fridayDates.filter((date) => date === 13).length
}

Launch School Example Algorithm:
  Iterate over all the months of the given year.
  For each month, get the day that falls on the 13th.
  Count the 13ths that fall on a Friday.
  Return the count.
*/

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let month = 0; month < 12; month += 1) {
    const thirteenth = new Date(`${year}/${month}/13`).getDay();
    thirteenths.push(thirteenth);
  }

  return thirteenths.filter((day) => day === 5).length
}

console.log(fridayThe13ths(1986)) // 1
console.log(fridayThe13ths(2015)) // 3
console.log(fridayThe13ths(2017)) // 2
