/* eslint-disable */
import Deck from '../deck.js';
import Card from '../card.js';

describe('Test Deck', () => {
  test('Unit Test Pop', () => {
    const deck1 = new Deck();
    const card1 = new Card(Card.suits[0], Card.values[0]);
    deck1.push(card1);
    const card2 = deck1.pop();
    expect(card1).toBe(card2);
  });

  test('Unit Test Push', () => {
    const deck1 = new Deck();
    const card1 = new Card(Card.suits[0], Card.values[0]);
    const card2 = new Card(Card.suits[1], Card.values[1]);
    const card3 = new Card(Card.suits[2], Card.values[2]);
    deck1.push(card1);
    deck1.push(card2);
    deck1.push(card3);
    expect(deck1.cards.length).toBe(3);
  });

  test('Unit Test fillUp', () => {
    const deck1 = new Deck();
    deck1.fillUp();
    for (let i = 0; i < deck1.cards.length; i++) {
      expect(deck1.cards[i]).not.toBe('');
    }
  });

  test('Unit Test toEmpty', () => {
    const deck1 = new Deck();
    deck1.toEmpty();
    for (let i = 0; i < deck1.cards.length; i++) {
      expect(deck1.cards[i]).toBe('');
    }
  });

  test('Unit Test shuffle', () => {
    const deck1 = new Deck();
    const deck2 = new Deck();
    deck1.fillUp();
    deck2.fillUp();
    deck1.shuffle();
    deck2.shuffle();
    let pos = 0;
    let notEquals = false;
    while (pos < deck1.cards.length && !notEquals) {
      if (deck1.cards[pos].value !== deck2.cards[pos].value ||
        deck1.cards[pos].suit !== deck2.cards[pos].suit) {
        notEquals = true;
      }
      pos++;
    }
    expect(true).toBe(notEquals);
  });
});
