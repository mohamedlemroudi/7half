import Deck from './deck.js';
import PlayerDeck from './player.js';
import MachineDeck from './machine.js';
import Jury from './jury.js';

/**
 * The `Game` class represents a game of the Spanish card game "Siete y Media".
 * It manages the game's master deck, player deck, and computer deck, as well as
 * the current position of the card being played. The class provides methods for
 * playing cards from the player deck and computer deck, resetting the game, and
 * determining the winner of the game. It also allows for the game's controller
 * to be initialized and updated with the game's results.
 */
export default class Game {
  // Maximum number of cards in the game
  static MAXCARD = 28;
  // The master deck for the game
  deckMaster = new Deck();
  // The player's deck
  playerDeck = new PlayerDeck();
  // The computer's deck
  computerDeck = new MachineDeck();
  // The position of the card being played
  posCard = 0;
  // Variable that allows to play
  static finishGame = false;

  /**
   * Constructs a new `Game` object, which represents a game of the Spanish
   * card game "Siete y Media". Initializes the game's master deck, player deck,
   * and computer deck, and resets the game.
   */
  constructor() {
    // Reset the game when it's created
    this.resetGame();
  }

  /**
   * Initializes the `Game` object with a reference to the game's controller.
   * This method should be called after constructing the `Game` object, so that
   * the controller can be updated with the game's results.
   * @param {Object} controller - The controller object for the game.
   */
  init(controller) {
    this.controller = controller;
  }

  /**
   * Reset the game to its starting state
   */
  resetGame() {
    // Reset the position of the card being played
    this.posCard = 0;
    // Reset the result of the player's deck
    this.playerDeck.resultatDeck = 0;
    // Reset the result of the computer's deck
    this.computerDeck.resultatDeck = 0;
    // Empty the master deck
    this.deckMaster.toEmpty();
    // Fill up the master deck with cards
    this.deckMaster.fillUp();
    // Shuffle the master deck
    this.deckMaster.shuffle();
    // Allows replay
    Game.finishGame = false;
  }

  /**
   * Play a card from the player's deck
   * @param {Number} posCard
   */
  playCard(posCard) {
    /**
     * If the player's deck result is less
     * than or equal to 7.5 and the card position is valid
     */
    if (this.playerDeck.resultatDeck <= 7.5 && posCard <= (Game.MAXCARD/2) &&
      !Game.finishGame) {
      // Make a move with the player's deck
      this.playerDeck.move(this.deckMaster, this.posCard, (cards, postCard)=>{
        this.controller.insertValue(cards, postCard);
      });
      // Result is greater than 7.5, it's the computer's turn
      if (this.playerDeck.resultatDeck > 7.5) {
        this.playMachine();
      }
    }
  }

  /**
   * Play a card from the computer's deck
   */
  playMachine() {
    if (this.playerDeck.resultatDeck <= 7.5) {
      // Make a move with the computer's deck
      this.computerDeck.playMachine(this.deckMaster,
          15, Game.MAXCARD, (cards, postCard)=>{
            this.controller.insertValue(cards, postCard);
          });
    }
    // Get the result of the game and update the controller
    this.controller.getResult(true);
  }

  /**
   * Determine the winner of the game
   * @return {string} result
   */
  getWinner() {
    // Create a new instance of the Jury class
    const jury = new Jury();
    // Use the Jury class to determine the winner of the game
    return jury.searchWinner(this.playerDeck, this.computerDeck);
  }
}
