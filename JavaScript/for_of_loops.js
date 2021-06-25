//for...of
//an ez way of iterating over arrays and strings
//not supported in internet explorer  LOLz
/*
for (variable of iterable) {
 statement
}
*/

// let subreddits = ["soccer", "popheads", "cringe", "books"];

// //old way to iterate through using for loop
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(subreddits[i]);
// }

// //new JS 5 way of iterating over an array to view arrays elements
// for (let element of subreddits) {
//   console.log(element);
// }

// for (let char of "Supercalifragilisticexpialidocious") {
//   console.log(char);
// }

//more on for of loops

//all rows and columns sum to 15
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let i = 0; i < magicSquare.length; i++) {
  row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum += row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

//using a for of which is much cleaner. easier to see and understand

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

//this is a good example of when for of is not good to use.
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

//we need the index fo words1 to mirror in words2
for (let i = 0; i < words1.length; i++) {
  console.log(words1[i], words2[i]);
  console.log(`${words1[i]}${words2[i]}`);
}

// for of is great for getting data but not the index

//interesting with objects

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};
console.log(Object.keys(movieReviews));
console.log(Object.values(movieReviews));

// //Does Not Work?  Strange right?  NOT ITERABLE
// for (let x of movieReviews) {
//   console.log(x);
// }

//This is the way.
for (let x of Object.keys(movieReviews)) {
  console.log(x);
}

for (let x of Object.values(movieReviews)) {
  console.log(x);
}

for (let x of Object.keys(movieReviews)) {
  console.log(x, movieReviews[x]);
}

//getting the avg review rating

const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
let avg = total / ratings.length;
console.log(avg);
