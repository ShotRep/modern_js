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

// **************************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// **************************************************

// const ulParent = document.createElement('ul');
// for (let game of warriorsGames) {
//   const {
//     homeTeam,
//     awayTeam
//   } = game;
//   const gameLi = document.createElement('li');
//   const {
//     team: hTeam,
//     points: hPoints
//   } = homeTeam;
//   const {
//     team: aTeam,
//     points: aPoints
//   } = awayTeam;
//   const teamNames = `${aTeam} @ ${hTeam}`;
//   let scoreLine;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b>-${hPoints}`;
//   } else {
//     scoreLine = `${aPoints}-<b>${hPoints}</b>`;
//   }
//   const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
//   gameLi.classList.add(warriors.isWinner ? 'win' : 'loss')

//   gameLi.innerHTML = `${teamNames} ${scoreLine}`
//   console.log(scoreLine)
//   ulParent.appendChild(gameLi);
// }

// document.body.prepend(ulParent)

// **************************************************
// STEP 2 - REFACTORED CODE! - Making this reuseable as possible.
// **************************************************

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement("ul")
  for (let game of games) {
    const gameLi = document.createElement("li")
    gameLi.innerHTML = getScoresLine(game)
    gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss")
    ulParent.appendChild(gameLi)
  }
  return ulParent
}

const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam
  return target.isWinner
}

const getScoresLine = ({homeTeam, awayTeam}) => {
  const {team: hTeam, points: hPoints} = homeTeam
  const {team: aTeam, points: aPoints} = awayTeam
  const teamNames = `${aTeam} @ ${hTeam}`
  let scoreLine
  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b>-${hPoints}`
  } else {
    scoreLine = `${aPoints}-<b>${hPoints}</b>`
  }
  return `${teamNames} ${scoreLine}`
}

//now we can accept any object and specify which team we want to view with correct win loss color for that team.
const gsSection = document.querySelector("#gs")
const houstonSection = document.querySelector("#htown")
const gsChart = makeChart(warriorsGames, "Golden State")
const htownChart = makeChart(warriorsGames, "Houston")
gsSection.appendChild(gsChart)
houstonSection.appendChild(htownChart)