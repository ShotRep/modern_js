/*
1.) Select methods
a.) getElementById
b.) getElementsByTagName
c.) getElementsByClassName
*/

//To select all li's
document.getElementsByTagName("li")

// const list = document.getElementsByTagName("li")
// console.log(list) //<=gives us a 'HTMLcollection' since this is elements not element

// To select all h1's (there's only one on this page):
document.getElementsByTagName("h1")

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName("input") //get all inputs
// inputs[0] //this works
/*Array methods will not work only basic input.
inputs.pop() DOES NOT WORK! pop() is an array method, and this isn't an array!
*/
// for (let input of inputs) {
//   //<=we can loop through the objects
//   console.log(input)
// }
//useful use of iterating through, grabbing inputs from a user.
for (let userInput of inputs) {
  console.log(userInput.value)
}

/*
if we need an array we can just make it with spread.
*/

const myArray = [...inputs]
console.log(myArray)
