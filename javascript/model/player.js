import Deck from './deck.js';

/**
 * Clase que representa al jugador del juego.
 * Extiende de la clase Deck para tener acceso a las cartas.
 */
export default class Player extends Deck {
  /**
   * Crea un objeto Player que hereda de la clase Deck
   */
  constructor() {
    super();
    this.resultatDeck = 0;
    this.name = 'Jugador';
  }

  /**
   * Takes a card from the deck and adds its value to the deck's score.
   * @param {Deck} deck - The deck to take the card from.
   * @param {number} posCard - The position of the card in the player's hand.
   * @param {function} onMove - A callback function to call after
   * the move is made.
   */
  move(deck, posCard, onMove) {
    this.push(deck.pop());
    const valorCard = parseInt(this.cards[this.cards.length-1].value);
    if (valorCard < 8) {
      this.resultatDeck += valorCard;
    } else {
      this.resultatDeck += 0.5;
    }
    onMove(this.cards, posCard);
  }

  /**
   * Sets the name of the player.
   * @param {string} name - The name to set.
   */
  setName(name) {
    if (name !== '') {
      this.name = name;
    }
  }

  /**
   * Returns the name of the player.
   * @return {string} The player's name.
   */
  getName() {
    return this.name;
  }
}
