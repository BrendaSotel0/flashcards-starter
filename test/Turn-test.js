const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn();
  });

  it.skip('should be a function', () => {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', () => {
    // const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it.skip('should return the guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.returnGuess()).to.equal('Terrier');
  }); 

  it.skip('should return the card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.returnCard()).to.equal(card);
  }); 

  it.skip('should return false if the user’s guess is incorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it.skip('should return true if the user’s guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.evaluateGuess()).to.equal(true)
  });


  it.skip('should return Correct! if the user’s guess is correct', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.giveFeedback()).to.equal('Correct!')
  });

  it.skip('should return Incorrect! if the user’s guess is incorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!')
  });
})