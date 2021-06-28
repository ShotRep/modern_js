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
const nums = [9, 3, 2, 8];
Math.max(nums); //<=NaN
console.log(Math.max(...nums)); //<=9  ...strips away the array[]
//same as calling Math.max(9,3,2,8)

//2.) SPREAD - for array literals
//creates a new array using an existing array. Spreads the elements from one array into a new array.
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
console.log([...nums1, ...nums2]);
console.log(["a", "b", ...nums2]);
console.log([...nums1, ...nums2, 7, 8, 9, 10]);
