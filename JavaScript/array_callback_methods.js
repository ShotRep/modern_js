//Array callback methods.  your expected to pass in a callback.

//arrays come with many built-in methods that accept callback functions.
//now that we've covered callbacks, we can learn these methods.
//very very useful!

//Methods to know and understand
/*
forEach
map
filter
find
reduce
some
every
*/

//forEach: accepts a callback function. calls the function once per element in the array.

// const numsArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// numsArray.forEach(function (n) {
//   console.log(n * n);
// });

// numsArray.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// numsArray.forEach(function (num, index) {
//   //<=can use 2
//   console.log(index, num);
// });

//harder example

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Prachett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Jeff Smith"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Neil Gaiman"],
//     rating: 4.36,
//   },
// ];

// books.forEach(function (book) {
//   console.log(book.title);
// });

// for (let book of books) {  //<=newer way
//   console.log(book.title);
// }

// for (let i = 0; i < books.length; i++) {
//   console.log(books[i].title);
// }

//MAP: creates a new array with the results of calling a callback on every
// element in the array.  used the most out of all callback methods.

// const texts = ["rofl", "lol", "omg", "ttyl"];
// const caps = texts.map(function (t) {
//   return t.toUpperCase();
// });
// console.log(texts);
// console.log(caps);

// const numbers = [17, 15, 13, 11, 9, 7, 5, 3, 2];
// const words = ["asap", "byob", "rsvp", "diy"];

// const newArray = numbers.map(function (num) {
//   return num * 2; //<=you must return, this pushes into new array for us
// });
// console.log(newArray);

// const evenOrodd = numbers.map(function (num) {
//   return {
//     Number: num,
//     Even: num % 2 === 0,
//   };
// });
// console.log(evenOrodd);

// const newArray = words.map(function (word) {
//   return word.toUpperCase().split("").join(".");
// });
// console.log(newArray);

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Prachett", "Neil Gaiman"],
//     rating: 4.25,
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//   },
//   {
//     title: "American Gods",
//     authors: ["Jeff Smith"],
//     rating: 4.11,
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Neil Gaiman"],
//     rating: 4.36,
//   },
// ];

// const newArray = books.map(function (book) {
//   return book.title.toUpperCase();
// });
// console.log(newArray);

//////FIND
//returns the value of the first element in the array that satisfies the provided testing function and stops.  So 1 result which is the first found.

// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds",
// ];
// let movie = movies.find((movie) => {
//   return movie.includes("Mrs");
// });
// console.log(movie);

// let movie2 = movies.find((movie) => movie.indexOf("Mrs") === 0);
// console.log(movie2);

/////FILTER///
//creates a new array with all elements that pass the test implemented by the provided function.

// const nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const odds = nums.filter((n) => {
//   return n % 2 === 1;
// });
// console.log(odds);

// const smallNums = nums.filter((n) => n <= 5);
// console.log(smallNums);

//using filter with includes

// const books = [
//   {
//     title: "Good Omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "Changing My Mind",
//     authors: ["Zadie Smith"],
//     rating: 3.83,
//     genres: ["nonfiction", "essays"],
//   },
//   {
//     title: "Bone: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"],
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "A Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"],
//   },
//   {
//     title: "The Name of the Wind",
//     authors: ["Patrick Rothfuss"],
//     rating: 4.54,
//     genres: ["fiction", "fantasy"],
//   },
//   {
//     title: "The Overstory",
//     authors: ["Richard Powers"],
//     rating: 4.19,
//     genres: ["fiction", "short stories"],
//   },
//   {
//     title: "The Way of Kings",
//     authors: ["Brandon Sanderson"],
//     rating: 4.65,
//     genres: ["fantasy", "epic"],
//   },
//   {
//     title: "Lord of the flies",
//     authors: ["William Golding"],
//     rating: 3.67,
//     genres: ["fiction"],
//   },
// ];

// const newArray = books.filter((b) => b.genres.includes("fantasy"));
// console.log(newArray);

// const short = books.filter(
//   (b) => b.genres.includes("short stories") || b.genres.includes("essays")
// );
// console.log(short);

// const query = "The";
// const results = books.filter((book) => {
//   const title = book.title.toLocaleLowerCase();
//   return title.includes(query.toLowerCase());
// });
// console.log(results);

/////EVERY
//tests whether all elements in the array pass the provided function.
//it returns a boolean value.  its a test

// const words = ["dog", "dig", "log", "bag", "wag"];
// const threeLetters = words.every((word) => {
//   return word.length === 3;
// });
// console.log(threeLetters);

// const startWithD = words.every((word) => word[0] === "d");
// console.log(startWithD);

// const allEndInG = words.every((word) => {
//   const last = word.length - 1;
//   return word[last] === "g";
// });
// console.log(allEndInG);

//////SOME
//similar to every, but returns true if ANY of the array elements pass
//the test function

// const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// let someWord = words.some((word) => {
//   return word.length > 4;
// });
// console.log(someWord);

// let someLtr = words.some((word) => word[0] === "z");
// console.log(someLtr);

// let someCake = words.some((w) => w.includes("cake"));
// console.log(someCake);

//SORT PT.2  compareFunc(a,b)  THIS WILL MUTATE
//if compareFunc(a,b) returns less than 0
//-sort a before b

//if compareFunc(a,b) returns 0
//-leave a and b unchanged with respect to each other

//if compareFunc(a,b) returns greater than 0
//-sort b before a

//? using slice() instead of math(),which doesn't work, to create a new array.
//maybe because .slice makes a new array and doesn't modify or just copy like
//splice and map?  assuming here.

// const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// prices.sort();
// const ascend = prices.slice().sort((a, b) => a - b); //<=sorts ascending
// console.log(ascend);

// // const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
// prices.sort();
// const descend = prices.slice().sort((a, b) => b - a); //<=sorts descending
// console.log(descend);

/////Reduce
//executes a reducer function on each element of the array, resulting in a single value.
// //summing
// const myArray = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(myArray);

// //multiplying
// const myArray1 = [3, 4, 5, 6, 7].reduce((accumulator, currentValue) => {
//   return accumulator * currentValue;
// });
// console.log(myArray1);

//Find Max Val
// let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73].reduce((max, currVal) => {
//   if (currVal > max) return currVal;
//   return max;
// });
// console.log(grades);

// let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73].reduce((max, currVal) => {
//   return Math.max(max, currVal);
// });
// console.log(grades);

// //Specifying an INITIAL value.  A starting number other than 0.
// const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
//   return sum + currVal;
// }, 10);
// console.log(sum);

// const votes = [
//   "y",
//   "y",
//   "n",
//   "y",
//   "n",
//   "y",
//   "absent",
//   "n",
//   "y",
//   "n",
//   "n",
//   "n",
//   "y",
//   "y",
// ];

// const results = votes.reduce((tally, currentVote) => {
//   if (tally[currentVote]) {
//     tally[currentVote]++;
//   } else {
//     tally[currentVote] = 1;
//   }
//   return tally;
// }, {});
// console.log(results);

//easier cleaner way

const votes = [
  "y",
  "y",
  "n",
  "y",
  "n",
  "y",
  "absent",
  "n",
  "y",
  "n",
  "n",
  "n",
  "y",
  "y",
];

const results = votes.reduce((tally, currentVote) => {
  tally[currentVote] = (tally[currentVote] || 0) + 1;
  return tally;
}, {});
console.log(results);

////STEP BY STEP COMMENTED VERSION BY A PROGRAMMER/////

// This is a classic example of frequency counter pattern - accumulation of different values.

// tally[val]
// The above uses bracket notation syntax to access value under particular property key inside of an object.  It permits the use of dynamic variables

// Let us start by looking at the reduce method :

// It consists of   mandatory accumulator function  and an optional initializer value.

// The purpose of this function is to act upon current value in the array, subsequently returning it as an accumulated value for the next iteration.

// Initializer value simply refers to the starting value of the accumulative process.. If omitted, the starting value would point to the very first element inside the array which reduce is being applied to.

// So, let us step through the example from the lecture:
//============================================================

// const votes = [
//   "y",
//   "n",
//   "y",
//   "n",
//   "n",
//   "n",
//   "n",
//   "y",
//   "y",
//   "n",
//   "y",
//   "n",
//   "y",
//   "n",
// ];

// votes.reduce((intermediaryValues, currentValue) => {
//   if (intermediaryValues[currentValue]) {
//     intermediaryValues[currentValue]++;
//   } else {
//     intermediaryValues[currentValue] = 1;
//   }
//   return intermediaryValues;
// }, {});

//====================================================================

// When we substitute actual values, we get the following:

// First iteration :
// IntermediaryValues === {} (since it is defined as the starting point value)
// current value  ==== ' y' (very first element inside of our array
// votes.reduce(({}, "y")=>{......},{});

// IF  our  accumulator object (intermediaryValues)  presently contains  value at key of 'y'  THEN   increment  that value by 1 (y++);

//     if(intermediaryValues[currentValue]){

//         intermediaryValues[currentValue]++

//       }

// ELSE , set value at key "y" to 1 to signify first occurrence of the letter;

//     else {
//       intermediaryValues[currentValue] = 1;
//     }

// Consequently, return the   return "intermediaryValues" accumulator object to be used in the next iteration .

// SECOND ITERATION :

// IntermediaryValues === {y:1}  ---> since it has been returned from the previous iteration cycle

// current value  ==== ' n' (second element inside of our array)
// votes.reduce(({y:1}, "n")=>{......},{});

// IF  our  accumulator object (intermediaryValues)  presently contains  value at key of 'n'  THEN   increment  that value by 1 (n++);

//     if(intermediaryValues[currentValue]){

//         intermediaryValues[currentValue]++

//       }

// ELSE , set value at key "n" to 1 to signify first occurrence of the letter;

//     else {
//       intermediaryValues[currentValue] = 1;
//     }

// Consequently, return the   return "intermediaryValues" accumulator object to be used in the next iteration .

// THIRD ITERATION :

// IntermediaryValues === {y:1, n:1}  ---> since it has been returned from the previous iteration cycle

// current value  ==== ' y' (third element inside of our array)
// votes.reduce(({y:1, n:1}, "y")=>{......},{});

// IF  our  accumulator object (intermediaryValues)  presently contains  value at key of 'y'  THEN   increment  that value by 1 (y++);

//     if(intermediaryValues[currentValue]){ <--- y key exists,

//         intermediaryValues[currentValue]++  <--- value under "y" is incremented by 1

//       }

// ELSE , set value at key "y" to 1 to signify first occurrence of the letter;

//     else {
//       intermediaryValues[currentValue] = 1;
//     }

// Consequently, return the   return "intermediaryValues" accumulator object to be used in the next iteration .

// FOURTH ITERATION :

// IntermediaryValues === {y:2, n:1}  ---> since it has been returned from the previous iteration cycle

// current value  ==== ' n' (fourthelement inside of our array)
// votes.reduce(({y:2, n:1}, "n")=>{......},{});

// IF  our  accumulator object (intermediaryValues)  presently contains  value at key of 'y'  THEN   increment  that value by 1 (y++);

//     if(intermediaryValues[currentValue]){ <--- n key exists,

//         intermediaryValues[currentValue]++  <--- value under "n" is incremented by 1

//       }

// ELSE , set value at key "y" to 1 to signify first occurrence of the letter;

//     else {
//       intermediaryValues[currentValue] = 1;
//     }

// Consequently, return the   return "intermediaryValues" accumulator object to be used in the next iteration .

// The process shall continue until ALL values found inside of our array are processed.

// Since you are only dealing with 2 values - Y   - N , the ELSE condition will only execute for the very first occurrence of  each letter)
