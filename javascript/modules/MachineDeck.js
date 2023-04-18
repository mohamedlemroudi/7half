import Player from './Player.js';
import Game from './Game.js';
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
   * The `jugarMaquina` method plays cards from the computer's deck until the
   * deck's score is greater than 6 or the maximum number
   * of cards has been played.
   * This method updates the deck with each played card
   * and increments the current
   * position of the card being played.
   * The `finishGame` flag is set to true once
   * the deck's score is greater than 6,
   * indicating that the computer has finished playing.
   * @param {MachineDeck} computerDeck - The computer's deck.
   * @param {Deck} deckMaster - The master deck for the game.
   * @param {number} posCard - The current position of the card being played.
   * @param {number} MAXCARD - The maximum number of cards in the game.
   * @param {Controller} controller - The controller object
   */
  jugarMaquina(computerDeck, deckMaster, posCard, MAXCARD, controller) {
    while (!Game.finishGame && posCard <= MAXCARD) {
      computerDeck.jugada(deckMaster, posCard, controller);
      posCard++;

      if (computerDeck.resultatDeck > 6) {
        Game.finishGame = true;
      }
    }
  }
}
