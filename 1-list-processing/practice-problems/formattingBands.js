// We have the following Array of information for some popular bands:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
]

// There are problems with this data, though, so we first have to clean it up
// before we can use it:
//
//     1. The band countries are wrong: all the bands should have 'Canada' as the
//        country.
//     2. The band name should have all words capitalized.
//     3. Remove all dots from the band names.
//
// Write a function that can process the input band Array and return an Array
// that contains the fixed information:

function capitalize(string) {
  const letters = string.split('')
  letters[0] = letters[0].toUpperCase()
  return letters.join('')
}

function processBandName(name) {
  return name
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ')
    .replace('.', '')
}

function processBands(data) {
  return data.map((band) => {
    return {
      name: processBandName(band.name),
      country: 'Canada',
      active: band.active,
    }
  })
}

console.log(processBands(bands))

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
