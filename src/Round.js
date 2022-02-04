const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    this.deck.cards.currectAnswer ? this.incorrectGuesses.push(this.currentCard.id) : guess;
  }

  calculatePercentCorrect() {
    
  }

  endRound() {
    
  }
}

module.exports = Round;