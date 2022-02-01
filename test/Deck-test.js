const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });
})