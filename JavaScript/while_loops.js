//While Loops
//a while loop continues to run as along as its test condition is true.

//example, but not the best case use for a while loop.
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// //this is same as above but as a for loop.
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

//A good case use for while loops.

const target = Math.ceil(Math.random() * 10);

let guess = Math.ceil(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target} - Guess: ${guess}`);
  guess = Math.ceil(Math.random() * 10);
}
console.log(
  `Target: ${target} - Guess: ${guess}   "The puter guessed correctly!"`
);

//while loops are great at uncertainty when your not sure how many times the loop needs to run.

/*
while (some condition) {
in the loop, update or attempt to make that condition false
}
*/
