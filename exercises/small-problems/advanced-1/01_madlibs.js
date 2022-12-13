// Let's build another program using madlibs. We made a similar program in the
// Easy exercises, but this time the requirements are a bit different.

// Build a madlibs program that takes a text template as input, plugs in a
// selection of randomized nouns, verbs, adjectives, and adverbs into that
// text, and then returns it. You can build your lists of nouns, verbs,
// adjectives, and adverbs directly into your program. Your program should read
// this text and, for each line, place random words of the appropriate types
// into the text and return the result.

// The challenge of this program isn't just about writing your solution—it's
// about choosing the structure of the text template. Choose the right way to
// structure your template and this problem becomes much easier. Consequently,
// this exercise is a bit more open-ended since the input is also something
// that you'll be defining.

const WORD_TYPES = ['adjective', 'noun', 'verb', 'adverb']
const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry']
const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat']
const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats']
const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly']

function randomWord(type) {
  if (type === 'adjective') {
    let index = Math.floor(Math.random() * ADJECTIVES.length)
    return ADJECTIVES[index]
  } else if (type === 'noun') {
    let index = Math.floor(Math.random() * NOUNS.length)
    return NOUNS[index]
  } else if (type === 'verb') {
    let index = Math.floor(Math.random() * VERBS.length)
    return VERBS[index]
  } else if (type === 'adverb') {
    let index = Math.floor(Math.random() * ADVERBS.length)
    return ADVERBS[index]
  }
}

function madlibs(template) {
  let newString = template

  for (let idx = 0; idx < WORD_TYPES.length; idx += 1) {
    const wordType = WORD_TYPES[idx]
    const regEx = new RegExp(`\\[${wordType}\\]`, 'g')
    newString = newString.replaceAll(regEx, () => randomWord(wordType))
  }

  return newString
}

// Examples:

// Note: The quotes in the example strings returned by the madlibs function are
// only shown for emphasis. These quotes are not present in the actual output
// strings. The words in quotes come from the list of texts and it is the
// madlibs function that puts them in.

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

const template1 =
  'The [adjective] brown [noun] [adverb] [verb] yellow [noun], who [adverb] [verb] his [noun] and looks around'

const template2 = "The [noun] [verb] the [noun]'s [noun]"

console.log(madlibs(template1))
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1))
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2)) // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2)) // The "cat" "pats" the "cat"'s "head".
