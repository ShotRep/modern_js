// // **********************************
// // WRITING EVERYTHING USING FUNCTIONS - DONT DO THIS, NOT CLEAN AT ALL
// // **********************************
// function initializeDeck() {
//   const deck = []
//   const suits = ["hearts", "diamonds", "spades", "clubs"]
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A"
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit,
//       })
//     }
//   }
//   return deck
// }

// function drawCard(deck, drawnCards) {
//   const card = deck.pop()
//   drawnCards.push(card)
//   return card
// }

// function drawMultiple(numCards, deck, drawnCards) {
//   const cards = []
//   for (let i = 0; i < numCards; i++) {
//     cards.push(drawCard(deck, drawnCards))
//   }
//   return cards
// }

// function shuffle(deck) {
//   // loop over array backwards
//   for (let i = deck.length - 1; i > 0; i--) {
//     //pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1))
//     //swap
//     ;[deck[i], deck[j]] = [deck[j], deck[i]]
//   }
//   return deck
// }

// // We have to create a bunch of variables:
// const firstDeck = initializeDeck()
// const drawnCards = []
// shuffle(firstDeck)
// // We have to pass a ton of arguments around:
// const hand1 = drawMultiple(2, firstDeck, drawnCards)
// const hand2 = drawMultiple(2, firstDeck, drawnCards)
// const pokerHand = drawMultiple(5, firstDeck, drawnCards)

// // **********************************
// // USING AN OBJECT + METHODS INSTEAD:  THE WAY TO GO - SEE FUNCTION BASED CODE TO UNDERSTAND WHY.
// // **********************************

// const myDeck = {
//   //<= myDeck is the object so = this keyword
//   deck: [],
//   drawnCards: [],
//   suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
//   values: "2,3,4,5,6,7,8,9,10,Jack,Queen,King,Ace",
//   // values: [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"],
//   initializeDeck() {
//     // const suits = this.suits
//     // const values = this.values
//     // const deck = this.deck
//     const {suits, values, deck} = this //<= this.suits, this.values, this.deck (destructuring)
//     for (let value of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({
//           value,
//           suit,
//         })
//       }
//     }
//     return this.deck //<=we do not have to return deck like we did above, optional.
//   },
//   drawCard() {
//     const card = this.deck.pop()
//     this.drawnCards.push(card)
//     return card
//   },
//   drawMultiple(numCards) {
//     const cards = []
//     for (let i = 0; i < numCards; i++) {
//       cards.push(this.drawCard())
//     }
//     return cards
//   },
//   //Fisher–Yates shuffle algorithm
//   shuffle() {
//     const {deck} = this //<= (destructuring)
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       //pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1))
//       //       //swap
//       ;[deck[i], deck[j]] = [deck[j], deck[i]]
//     }
//   },
// }

// // // Much cleaner!!
// myDeck.initializeDeck()
// myDeck.shuffle()
// const h1 = myDeck.drawMultiple(2)
// // const h2 = myDeck.drawMultiple(2)
// // const h3 = myDeck.drawMultiple(5)

////////////////////////////////////////////////////////////////////////////////////////////
//////Create a deck////////

// THIS FUNCTION RETURNS A NEW DECK EVERY TIME WE CALL IT!
const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck() {
      const {suits, values, deck} = this
      for (let value of values.split(",")) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          })
        }
      }
      // return deck;
    },
    drawCard() {
      const card = this.deck.pop()
      this.drawnCards.push(card)
      return card
    },
    drawMultiple(numCards) {
      const cards = []
      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawCard())
      }
      return cards
    },
    shuffle() {
      const {deck} = this
      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1))
        //swap
        ;[deck[i], deck[j]] = [deck[j], deck[i]]
      }
    },
  }
}

// OUR FIRST DECK!
const myDeck = makeDeck()
myDeck.initializeDeck()
myDeck.shuffle()
const h1 = myDeck.drawMultiple(2)
const h2 = myDeck.drawMultiple(2)
const h3 = myDeck.drawMultiple(5)

// OUR SECOND DECK!
const deck2 = makeDeck()
deck2.initializeDeck()
