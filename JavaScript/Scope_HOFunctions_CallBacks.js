//GOALS

//Understand Scope

//Write Higher Order Functions - pass to other functions

// Pass functions as callbacks  - except functions

//SCOPE: variable visibility.  the location where a variable is defined
// dictates where we have access to that variable.

// FUNCTION SCOPE: variables scoped inside a function.

// BLOCK SCOPE: variables scoped inside a block. blocks in JS are denoted by {}
// note var is different than const or let in that it is NOY block scoped.

// LEXICAL SCOPE: In nested functions the inner functions have access to variables
// in the function above.

//example of lexical scoping
// function outer() {
//  let movie = "Amadeus"

//  function inner() {
//   console.log(movie.toUpperCase)
//  }
//  inner()
// }
// outer()  //returns AMADEUS

//Lexical scope leads us into higher order functions & call backs.

//First lets understand function expressions

// // 1.) Function Statement
// function add(x, y) {
//   return x + y;
// }
// console.log(add(4, 7));

//================================================================//
// //2.) Function Expressions
// for passing into another function

//2a.) Anonymous Function Expression - same as a statement just declared differently(hoisting)
// function(x, y) {
//  return x + y
// }

// let add = function (x, y) {
//   return x + y;
// };
// console.log(add(2, 5));

//2b.) Named Function Expression  - not sure wht u would use this
// let add = function addition(x, y) {
//   return x + y;
// };
// console.log(add(6, 5));
// console.log(addition(6, 5));  //does not work?
//=================================================================//

//Now we are ready to start passing functions around as values.
// FUNCTIONS ARE OBJECTS!

//HOFunctions and how they work.
//Using functions within functions. Excepting functions as arguments and returning functions as values.

// //First functions are objects.
// function add(x, y) {
//   return x + y;
// }
// const subtract = function (x, y) {
//   return x - y;
// };
// function multiply(x, y) {
//   return x * y;
// }
// const divide = function (x, y) {
//   return x / y;
// };

// const operations = [add, subtract, multiply, divide];

// // console.log(operations[0](5, 6));
// //since functions are values we can just use them as such
// for (let operator of operations) {
//   let result = operator(5, 6); //<=parens execute the function
//   console.log(result);
// }

// const thing = {
//   doSomething: multiply, //<=storing a function as a value
// };
// console.log(thing.doSomething(7, 7)); //<=object.property.parens = method

//HOFunctions
// 1.) Functions as arguments
// function frankGore() {
//   console.log("reasons");
// }

// function repeat(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }
// repeat(frankGore, 21); //<= function as an argument

//HOFunctions
//2.) Functions as return arguments. returning a function from within a function.
// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }
// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const halve = multiplyBy(0.5);

// console.log(triple(5), double(5), halve(5));

//////CALLBACK FUNCTIONS
//a callback function is a function passed into another function as
//an argument, which is then invoked inside the outer function.

//we have been doing this already.
//intro to the subject that is very very common

// function callTwice(func) {
//   func();
//   func();
// }

// function laugh() {
//   console.log("HaHaHaaa");
// }
// callTwice(laugh); //<=Callback Function

// function grumpus() {
//   console.log("Katherine is a grumpus");
// }
// setTimeout(grumpus, 1000);

// //same just a dif way of writing it.
// setTimeout(function () {
//   console.log("Katherine is a major grumpus!");
// }, 2000);

// function grumpus() {
//   console.log("Katherine is a grumpus");
// }
// const btn = document.querySelector("button");
// btn.addEventListener("click", grumpus);

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   //<=anonymous function instead
//   alert("I said don't click me!");
// });
