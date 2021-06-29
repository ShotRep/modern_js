//METHODS - SHORTHAND SYNTAX
//Pt.2 Objects

//so far.  we have seen the basis of object literals, but there is so much more to talk about with OBJECTS!

// GOALS
// 1.) add methods to objects
// 2.) use new object shorthand syntax
// 3.) use computed properties
// 4.) understand prototypes

//SHORTHAND OBJECT PROPERTIES

// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
// The "old" way:
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

// const getStats = (arr) => {
//   const max = Math.max(...arr)
//   const min = Math.min(...arr)
//   const sum = arr.reduce((sum, r) => sum + r)
//   const avg = sum / arr.length
//   // Using the new shorthand property syntax: 'gives exactly what we had'
//   return {
//     max, //<=using shorthand variable name only for key:value
//     min,
//     sum,
//     avg,
//   }
// }
// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

// const stats = getStats(reviews)

// //early assignment from functions section using shorthand

// function pick(arr) {
//   //return random element from arr
//   const idx = Math.floor(Math.random() * arr.length)
//   return arr[idx]
// }

// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ]
//   const suits = ["clubs", "spades", "hearts", "diamonds"]
//   const value = pick(values)
//   const suit = pick(suits)
//   return {
//     value, //<=Shorthand key:value method
//     suit,
//   }
// }

// ///////////Computed Properties\\\\\\\\\
// const role = "host"
// const person = "Jools Holland"
// const role2 = "Director"
// const person2 = "James Cameron"

// // The old way:
// // Make the object
// const team = {};
// // Then add a property using dynamic key:
// team[role] = person;
// team[role2] = person2;

// // USING COMPUTED PROPERTIES!
// const team = {
//   [role]: person,
//   [role2]: person2,
//   [1 + 6 + 9]: "sixteen",
// }

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   }
// }

// const addProp = (obj, k, v) => ({
//   ...obj,
//   [k]: v,
// })
// const res = addProp(team, "happy", ":)")

//Adding Methods to Objects !
//this object stores like functions together.
//does below remind us of anything ?  Math.xxxx() built in function, we ar just making our own.

// const math = {
//   // numbers: [1, 2, 3, 4, 5],
//   add: function (x, y) {
//     return x + y
//   },
//   multiply: function (x, y) {
//     return x * y
//   },
// }

// // To execute multiply:
// math.add(5, 6) //11
// math.multiply(5, 9) //45

//METHOD SHORTHAND
//we can add functions as properties on objects.  we call them methods!
const auth = {
  username: "TommyBot",
  login() {
    console.log("LOGGED YOU IN!")
  },
  logout() {
    console.log("GOODBYE")
  },
}
