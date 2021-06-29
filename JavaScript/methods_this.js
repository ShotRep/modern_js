//METHODS & THIS
//Pt.2 Objects

//so far.  we have seen the basis of object literals, but there is so much more to talk about with OBJECTS!

// GOALS
// 1.) add methods to objects
// 2.) use new object shorthand syntax
// 3.) use computed properties
// 4.) understand prototypes
// 5.) explain how the heck THIS works

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

const getStats = (arr) => {
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const sum = arr.reduce((sum, r) => sum + r)
  const avg = sum / arr.length
  // Using the new shorthand property syntax: 'gives exactly what we had'
  return {
    max, //<=using shorthand variable name only for key:value
    min,
    sum,
    avg,
  }
}
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

const stats = getStats(reviews)

//early assignment from functions section using shorthand

function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]
  const suits = ["clubs", "spades", "hearts", "diamonds"]
  const value = pick(values)
  const suit = pick(suits)
  return {
    value, //<=Shorthand key:value method
    suit,
  }
}
