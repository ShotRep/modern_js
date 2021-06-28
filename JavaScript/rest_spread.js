// add default function parameters
// rest & spread
// understand destructuring

//Default Params
//old way
// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }
// console.log(multiply(7));
// console.log(multiply(7, 3));

// //new way "default params syntax"
// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(11));
// console.log(multiply(11, 11));

// const greet = (person, greeting = "hola mi amigo") => {
//   console.log(`${person}, ${greeting}!`);
// };
// greet("Juan");

//SPREAD ...

// it actually does many things.
// spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments(for function calls) or elements(for array literals)are expected, or an object expression to be expanded in places where zero or more key-value pairs(for object literals)are expected.

//its all about expanding some iterable (for function calls, for array literals, or for object literals) to a destination.

//1.) SPREAD - for function calls
// const nums = [9, 3, 2, 8];
// Math.max(nums); //<=NaN
// console.log(Math.max(...nums)); //<=9  ...strips away the array[]
//same as calling Math.max(9,3,2,8)

//2.) SPREAD - for array literals
//creates a new array using an existing array. Spreads the elements from one array into a new array.
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6];
// console.log([...nums1, ...nums2]);
// console.log(["a", "b", ...nums2]);
// console.log([...nums1, ...nums2, 7, 8, 9, 10]);

//3.) SPREAD - for object literals
//copies properties from one object into another object literal
// const feline = { legs: 4, family: "Felidae" };
// const canine = { family: "Caninae", furry: true };

// const dog = { ...canine, isPet: true };
// console.log(dog);
// const lion = { ...feline, genus: "Panthera" };
// console.log(lion);
// const catDog = { ...feline, ...canine };
// console.log(catDog);

//REST Parameters
//it looks like spread but its not!

// FIRST the old way - know about it.
// -= The arguments object =-  using it is very MEH - use REST.
// available inside every function
// its an array-like object
//-has a length property
//-does not have array methods like push/pop
// contains all the arguments passed to the function
// not available inside of arrow functions

// function sum() {
//   const argsArray = [...arguments]; //<=we have to make an array for it
//   return argsArray.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }
// console.log(sum(1, 3, 5, 7, 9, 11));

//either way we have to make an iterate since it is NOT an array.
//we have to create an array so we can use array methods.

// function sumAll() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sumAll(1, 3, 5, 7, 9, 11));
//Also the arguments objet cannot use arrow functions.

//REST Parameters
//it looks like spread but its not!
//collects all remaining arguments into an actual array

function sumAll(...numsArray) {
  //<= nums = array name
  let total = 0;
  for (let n of numsArray) total += n; //<=for of loop
  return total;
}
console.log(sumAll(1, 3, 5, 7, 9, 11));

//SAME just written different

function sum(...numArray) {
  return numArray.reduce((total, curVal) => {
    return total + curVal;
  });
}
console.log(sum(1, 3, 5, 7, 9, 11));

//SAME just written different

const sumIt = (...numzArray) =>
  numzArray.reduce((total, curVal) => total + curVal);
console.log(sumIt(1, 3, 5, 7, 9, 11));

//We are collecting elements or arguments over into an array, we are not copying or spreading them over into an array.

//REST collects into an array where spread splits into an array.
