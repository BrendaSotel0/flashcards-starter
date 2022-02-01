class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess = () => {
    return this.guess;
  }

  returnCard = () => {
    return this.currentCard;
  }

  evaluateGuess = () => {
    return this.guess === this.currentCard.correctAnswer;
  }

  giveFeedback = () => {
    if (this.guess === this.currentCard.correctAnswer) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;