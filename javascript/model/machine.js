import Player from './player.js';
import Game from './game.js';
/**
 * Represents a computer player's deck in a card game.
 * @extends Player
 */
export default class MachineDeck extends Player {
  /**
   * Creates a new MachineDeck instance.
   */
  constructor() {
    super();
  }

  /**
   * The `playMachine` method plays cards from the computer's deck until
   * the deck's score is greater than 6 or the maximum number
   * of cards has been played.
   * This method updates the deck with each played card and increments
   * the current position of the card being played.
   * The `finishGame` flag is set to true once the deck's score
   * is greater than 6, indicating that the computer has finished playing.
   * @param {Deck} deckMaster - The master deck for the game.
   * @param {number} posCard - The current position of the card being played.
   * @param {number} MAXCARD - The maximum number of cards in the game.
   * @param {function} onMove - A function to be called after each move made
   * by the computer.
   * It takes two arguments: the computer's deck and the position
   * of the card played.
   */
  playMachine(deckMaster, posCard, MAXCARD, onMove) {
    while (!Game.finishGame && posCard <= MAXCARD) {
      this.move(deckMaster, posCard, onMove);
      posCard++;

      if (this.resultatDeck > 6) {
        Game.finishGame = true;
      }
    }
  }
}
