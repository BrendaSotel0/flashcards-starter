const Turn = require("./Turn");

class Round {
  constructor(turn) {
    this.currentCard = turn.currentCard;
    this.turns = 0;
    this.correctGuess = [];
    this.incorrectGuess = [];

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard()); 
    this.turns++;
    

    //updates turns count, DONE
      //when a guess is made a new turn instance is created
      //the count is updated regardless of correctness
      //the next card becomes current card
    //evaluates guesses,
      //checks if it's correct or no
    //gives feedback,
      //is the card correct or incorrect?
    //and stores ids of incorrect guesses
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