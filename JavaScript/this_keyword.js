//T H I S  keyword
//the keyword THIS can be a major point of confusion and misery and hardship and general suffering in the life of a new JS developer.  Oh yay!

//THIS comes up when using the DOM and event listeners.

//what we get with THIS when not in an object. THIS defaults back to the global object.
// function sayHi() {
//   console.log("HI")
//   //this refers to the window (global scope object in the browser)
//   console.log(this)
// }

// const greet = function () {
//   //this refers to the window (global scope object in the browser)
//   console.log(this)
// }

//THIS in methods

// const person = {
//   first: "Cherilyn",
//   last: "Sarkisian",
//   nickName: "Cher",

//   fullName() {
//     //In a method, this refers to the object the method "lives" in. {person}:
//     const {first, last, nickName} = this
//     return `${first} ${last} AKA ${nickName}`
//   },
//   printBio() {
//     const fullName = this.fullName()
//     console.log(`${fullName} is a person!`)
//   },
// }

// const myObj = {
//   fName: "Russ",
//   lName: "Esquire",
//   nick: "Rusty",
//   myFunc() {
//     console.log(this.nick)
//   },
// }

//THIS Invocation Context
//the value of THIS depends on the invocation context of the function it is used in.

function sayHi() {
  console.log("HI")
  //this refers to the window (global scope object in the browser)
  console.log(this)
}

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const {first, last, nickName} = this
    return `${first} ${last} AKA ${nickName}`
  },
  printBio() {
    console.log(this)
    const fullName = this.fullName()
    console.log(`${fullName} is a person!`)
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this)
    console.log(`${this.nickName} says HAHAHAHAH`)
  },
}

// INVOCATION CONTEXT MATTERS!!!
person.printBio() //THIS refers to the person object

// The value of THIS depends on the invocation context the function it is used in.

const printBio = person.printBio
printBio() //THIS refers to window object

//A demo showing when to use arrow functions, since they don't get their own THIS we can use them to pass the original object of THIS.  Nested functions and callbacks can easily interrupt the access of THIS and arrow functions allow us to get past that.  So a shortcoming turns into an advantage for arrow functions adn the use of THIS.

//Just a demo to grasp concept.
const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrase() {
    const {phrases} = this
    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx]
  },
  start() {
    //Use an arrow function to avoid getting a different 'this':
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId)
    console.log("PHEW THANK HEAVENS THAT IS OVER!")
  },
}
