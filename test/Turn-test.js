const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let turn;

  beforeEach(() => {
    turn = new Turn();
  });

  it('should be a function', () => {
    // const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    // const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should return the guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.returnGuess()).to.equal('Terrier');
  }); 

  it('should return the card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.returnCard()).to.equal(card);
  }); 

  it('should return false if the user’s guess is incorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('Terrier', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return true if the user’s guess is icorrect', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);
    expect(turn.evaluateGuess()).to.equal(true)
  });
})