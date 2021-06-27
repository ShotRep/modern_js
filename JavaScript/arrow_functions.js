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

/////////////////IMPLICIT RETURNS////////////////////
//losing the "return"
/*
const isEven = function (num) {    <= function expression
  return num % 2 === 0;            
};
const isEven = (num) => {         <= arrow function with parens
  return num % 2 === 0;
};
const isEven = num => {          <= arrow function without parens
  return num % 2 === 0;
};
const isEven = num => (num % 2 === 0);   <= IMPLICIT RETURN
const isEven = num => num % 2 === 0;     <= 1 Liner IMPLICIT RETURN
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = nums.map(function (n) {
  return n * 2;
});
console.log(numbers);

const numbers2 = nums.map((n) => {
  return n * 2;
});
console.log(numbers2);

const numbers3 = nums.map((n) => n * 2);
console.log(numbers3);
