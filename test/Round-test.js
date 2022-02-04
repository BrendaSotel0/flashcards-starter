const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1;
  let card2;
  let card3;
  let turn;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ["object", "array", "function"], "object");
    card2 = new Card(2, 'What is a comma-separated list of related values?', ["array", "object", "function"], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ["mutator method", "accessor method", "iteration method"], 'mutator method');
    turn = new Turn("Terrier", card1);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turn count', () => {
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  });

  it('should update the current card', () => {
    round.takeTurn('guess');
    expect(round.returnCurrentCard().id).to.equal(2);
  });

  it('should evaluate whether the guess is correct', () => {
    turn = new Turn('object', card1);
    round.takeTurn('guess');
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should evaluate whether the guess is incorrect', () => {
    round.takeTurn('guess');
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should store incorrect guesses', () => {
    turn = new Turn('function', card1);
    round.takeTurn('guess');
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(rounnd.incorrectGuesses[0]).to.equal('function')
  });
})
