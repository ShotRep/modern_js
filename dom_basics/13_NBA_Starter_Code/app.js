const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
]

// const ulParent = document.createElement("ul")
// for (let game of warriorsGames) {
//   const {homeTeam, awayTeam} = game
//   const gameLI = document.createElement("li")
//   const teamNames = `${awayTeam.team} @ ${homeTeam.team}`
//   const scoreLine = `${awayTeam.points} - ${homeTeam.points}`
//   gameLI.innerText = `${teamNames} ${scoreline}`
//   console.log(scoreLine)
//   ulParent.appendChild(gameLI)
// }
// document.body.prepend(ulParent)

// create new ul
const newUL = document.createElement("ul")
// append new ul to body
document.body.prepend(newUL)

//iterate over the object to get game info from it.

for (let game of warriorsGames) {
  const {homeTeam, awayTeam} = game

  //create li's per game
  const gameLI = document.createElement("li")
  //add game info to new li
  gameLI.innerText = `${awayTeam.team} @ ${homeTeam.team}`
  //append new li with game info to ul
  newUL.appendChild(gameLI)
  console.log(homeTeam.team, awayTeam.team)
}
