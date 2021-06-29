//============---------DESTRUCTURING-------------============////
//a short clean syntax to 'unpack':
//1.) values form arrays
//2.) properties from objects
//into distinct variables.

//you can use  commas to slip elements and rest... to group elements.

//ARRAY Destructuring
// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphonce Simbu",
//   "Jared Ward",
// ];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
// const [gold, silver, bronze] = raceResults;
// gold; //'Eliud Kipchoge'
// silver; //'Feyisa Lelisa'
// bronze; //'Galen Rupp'

// const [first, , , fourth] = raceResults;
// first; //'Eliud Kipchoge'
// fourth; //'Ghirmay Ghebreslassie'

// const [winner, ...others] = raceResults;
// winner; //'Eliud Kipchoge'
// others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

//OBJECT Destructuring
// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "Kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya",
// }
// let firstName = runner.first
// let lastName = runner.last
//instead we can use destructuring
// const { first, last } = runner

//we can also rename the key value
// const { country: nation, title: honorific } = runner

//using rest to contain the remaining keys we didn't use.
// const { first, last, ...other } = runner;

//NESTED Destructuring
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
]

// const [{first, last}, {country}] = results

// changing key value to a variable name.
const [{first: goldWinner}, {first: silverWinner}, {first: bronzeWinner}] =
  results
