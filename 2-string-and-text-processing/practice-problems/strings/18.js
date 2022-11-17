// Write a program that asks for a user's name, then
// greets the user with that name. If the user
// appends a ! to his name (e.g., 'Bill!'), the
// computer should "yell" its greeting: that is, it
// should log everything to the console in
// uppercase. You can check whether the name ends
// with a ! using String.prototype.endsWith (ES6
// only). You can remove the ! from the user's name
// with String.prototype.slice.

const name = 'Bob'
const yellName = 'Bob!'

function sayHello(string) {
  if (string.endsWith('!')) {
    console.log(`HELLO ${string.toUpperCase().slice(0, -1)}. WHY ARE WE SCREAMING?`)
  } else {
    console.log(`Hello ${string}.`)
  }
}

sayHello(name)
sayHello(yellName)
