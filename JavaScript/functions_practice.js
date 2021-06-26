//Practice I.

//write a function isValidPassword
//it accepts 2 arguments: password and username
//password must:
//- be at least 8 characters
//- cannot contain spaces
//- cannot contain username
//if all requirements are met, return true.
//otherwise false.

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 || //<= -1 tells us there is no space
//     password.indexOf(username) !== -1 //<= -1 tells us username and password are not alike
//   ) {
//     return false;
//   }
//   return true;
// }
// console.log(isValidPassword("password123", "password"));

//long way but nice and explicit

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }
// console.log(isValidPassword("aq", "fmdjxclck"));

// Practice II

//write  a function to find the average value in an array of numbers
//avg([0,50])  //25 for ex.
//avg([75,76,80,95,100])  //85.2 for another ex.

// const myArray = [75, 76, 80, 95, 100];
// function avgArray() {
//   let total = 0;
//   for (let i = 0; i < myArray.length; i++) {
//     total += myArray[i];
//   }
//   return total / myArray.length;
// }
// console.log(avgArray());

//using for of loop
// const myArray = [75, 76, 80, 95, 100];
// function avgArray() {
//   let total = 0;
//   for (let num of myArray) {
//     total += num;
//   }
//   return total / myArray.length;
// }
// console.log(avgArray());

//Practice III

//a pangram is a sentence that contains every letter of the alphabet, like:
//'The quick brown fox jumps over the lazy dog'
//write a function called isPangram, which checks to see if a given sentence contains every letter
//of the alphabet.
//isPangram('The five boxing wizards jump quickly')  //true
//isPangram('The five boxing wizards jump quick')  //false

// function isPangram(phrase) {
//   let lowerCase = phrase.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCase.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("The Quick Brown Fox Jumps Over The Lazy Dog"));

//Practice IV

//write a getCard() function which returns a random playing card object, like:
//value: 'K'
//suit: 'clubs'
// pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades,hearts,diamonds
//return both in an object

// function getCard() {
//   valueArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
//   suitArray = ["Clubs", "Spades", "Hearts", "Diamonds"];
//   value = Math.floor(Math.random() * valueArray.length);
//   suit = Math.floor(Math.random() * suitArray.length);
//   return `${valueArray[value]} of ${suitArray[suit]}`;
// }
// console.log(getCard());

//Colt's way - Creates an object, i did not do this step.

function getCard() {
  valueArray = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];
  suitArray = ["Clubs", "Spades", "Hearts", "Diamonds"];
  valueIdx = Math.floor(Math.random() * valueArray.length);
  suitIdx = Math.floor(Math.random() * suitArray.length);
  value = valueArray[valueIdx];
  suit = suitArray[suitIdx];
  return { value: value, suit: suit };
}
console.log(getCard());
