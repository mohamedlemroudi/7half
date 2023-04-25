/* eslint-disable */
import Player from '../player.js';
import Deck from '../deck.js';
import Card from '../card.js';
import MachineDeck from '../machine.js';

describe('Test Player', () => {
  test('Unit Test Move', () => {
    const player = new Player();
    const machine = new MachineDeck();
    const deck = new Deck();
    deck.fillUp();
    deck.shuffle();
    let pos = 0;
    const onMove = (cards, postCard) => {
      expect(cards).toMatchObject(player.cards);
      expect(postCard).toEqual(pos);
    };

    while (player.resultatDeck <= 7.5) {
      player.move(deck, pos, onMove);
      pos++;
    }
  });

  test('Unit Test getName', () => {
    const player = new Player();
    const player2 = new Player();
    player.setName('Mohamed');
    player2.setName('');
    expect(player.getName()).toBe('Mohamed');
    expect(player2.getName()).toBe('Jugador');
  });

  test('Should return correct total value when all cards are numeric', () => {
    const player = new Player();
    const deck = new Deck();
    deck.cards = [
      new Card('hearts', '2'),
      new Card('diamonds', '3'),
      new Card('spades', '4'),
    ];
    let pos = 0;
    const onMove = (cards, postCard) => {
      expect(cards).toMatchObject(player.cards);
      expect(postCard).toEqual(pos);
      pos++;
    };

    player.move(deck, 0, onMove);
    player.move(deck, 1, onMove);
    player.move(deck, 2, onMove);
    const totalValue = player.resultatDeck;
    expect(totalValue).toBe(9);
  });


});

