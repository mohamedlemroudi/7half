/* eslint-disable */
import MachineDeck from '../machine.js';
import Deck from '../deck.js';
import Game from '../game.js';

describe('Test Machine', () => {
  test('should move computer deck to deck master until finishGame', () => {
    // Arrange
    const machine = new MachineDeck();
    const deckMaster = new Deck();
    deckMaster.fillUp();
    deckMaster.shuffle();
    let pos = 15;
    const onMove = (cards, postCard) => {
      expect(cards).toMatchObject(machine.cards);
      expect(postCard).toEqual(pos);
      pos++;
    };

    machine.playMachine(deckMaster, 15, Game.MAXCARD, onMove);

    expect(Game.finishGame).toEqual(true);
  });
});
