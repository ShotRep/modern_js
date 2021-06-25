//OBJECTS!
//For In Loops

//we can loop over the keys of an object, using object keys ()

/*
for (variable in object) {
 statement
}
*/

const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

//loops over keys automatically
for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

let sum = 0;
for (let prop in jeopardyWinnings) {
  sum += jeopardyWinnings[prop];
}
console.log(`Ken has won $${sum} dollars!`);

//no good reason to use this with an array.  We can use it but...

//this only gives us the index, we are looping over keys-
for (let k in [88, 99, 77, 66]) {
  console.log(k);
}

//also for in orders are not always in order so not great to use with arrays.
