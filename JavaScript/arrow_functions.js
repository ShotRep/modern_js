//Arrow Functions
//cleaner way to write functions
//syntactically compact alternative to a regular function expression.

//parens are optional if there's only one parameter
//use empty parens for functions with no parameters

/*
const square = (x) => {
 return x*x 
}
OR
const square = x => {
 return x*x 
}

const greet = () => {
 console.log('Hello')
}

const sum = (x, y) => {
 return x+y 
}
*/

const isEven = (num) => {
  return num % 2 === 0;
};
console.log(isEven(3));

/////////////////IMPLICIT RETURNS//
