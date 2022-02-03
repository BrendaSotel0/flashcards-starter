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
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    turn = new Turn("Terrier", card1);
    deck = new Deck([card1, card2, card3]);
    round = new Round(turn);
  });

  it('should return the current card being played', () => {
    turn = new Turn('Terrier', deck.cards[0]);
    let round = new Round(turn);
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update the turn count', () => {
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
  })

  // it('should have a method that instantiates a turn', () => {
  //   turn = new Turn('Terrier', deck.cards[0]);
  //   let round = new Round(turn);
  //   expect(round.returnCurrentCard()).to.equal(card1);
  // })
})
//expect(round.returnCurrentCard()).to.equal(deck.cards[round.turns])