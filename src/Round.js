const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[this.turns];
    this.correctGuess = [];
    this.incorrectGuess = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

    //BULLET updates turns count, DONE
      //when a guess is made a new turn instance is created DONE
        //the count is updated regardless of correctness
    //BULLET the next card becomes current card DONE
    
    //BULLET evaluates guesses,
      //stores ids of incorrect guesses in array
    //BULLET Feedback is returned regarding whether the guess is incorrect or correct
  }

  calculatePercentCorrect() {
    //calculates and returns the percentage of correct guesses
  }

  endRound() {
    //prints to the console:
    //‘** Round over! ** You answered <>% of the questions correctly!’
  }



  //remember accessing the data
  //deck.cards[0] NOT deck[0]
  //logs are friendship
}

module.exports = Round;