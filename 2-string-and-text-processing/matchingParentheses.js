// Write a function that takes a string as an argument and returns true if the
// string contains properly balanced parentheses, false otherwise. Parentheses
// are properly balanced only when '(' and ')' occur in matching pairs, with
// each pair starting with '('.

function isBalanced(string) {
  const parens = string.replace(/[^()]/g, '')
  let balance = 0;

  for (let i = 0; i < parens.length; i += 1) {
    parens[i] === '(' ? balance += 1 : balance -=1
    if (balance < 0) return false
  }

  return balance === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
