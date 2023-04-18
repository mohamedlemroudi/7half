import Deck from './Deck.js';
import ViewCard from '../views/ViewCard.js';
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
    this.nom = 'Jugador';
  }

  /**
   * Objeto para crear la estructura HTML necesaria para una carta.
   */
  htmlCard = new ViewCard();

  /**
   * sacando una carta del mazo y sumando su valor al resultado
   * @param {Deck} deck - El mazo de donde sacar la carta.
   * @param {number} posCard - La posición de la carta en la mano del jugador.
   * @param {Controller} controller - Object to access controller methods.
   */
  jugada(deck, posCard, controller) {
    this.push(deck.pop());
    const valorCard = parseInt(this.cards[this.cards.length-1].value);
    if (valorCard < 8) {
      this.resultatDeck += valorCard;
    } else {
      this.resultatDeck += 0.5;
    }
    controller.insertValue(this.cards, posCard);
    console.log('Resultat: ', this.resultatDeck);
  }

  /**
   * Sets the player's name.
   * @param {string} nom - The player's name.
   */
  setNom(nom) {
    if (nom !== '') {
      this.nom = nom;
    } else {
      this.nom = 'Jugador';
    }
  }

  /**
   * Returns the name of the player.
   * @return {string} The player's name.
   */
  getNom() {
    return this.nom;
  }
}
