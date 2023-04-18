import ViewCard from './ViewCard.js';
/**
 * Represents the ViewGame class for displaying the game UI
 * and handling user input.
 * @class
 */
export default class ViewGame {
  /**
   * HTML elements
   * @type {HTMLElement}
   */
  btnPlantar = document.getElementById('plantar');
  btnAposta = document.getElementById('aposta');
  btnTornarJugar = document.getElementById('tornar_jugar');
  cartellResultat = document.getElementById('resultat');
  anunci = document.getElementById('anunciat');

  /**
   * We initialize the class that has the methods to give styles to the letter
   * @type {ViewCard}
   */
  stylesCard = new ViewCard();

  /**
   * Initialize HTML elements and set event listeners
   */
  constructor() {
    this.resetCards();
    this.btnAposta.addEventListener('click', () => this.onApostaClick());
    this.btnPlantar.addEventListener('click', () => this.onPlantarClick());
    this.btnTornarJugar.addEventListener('click',
        () => this.onTornarJugarClick());
  }

  /**
   * Set the controller for this view
   * @param {Object} controller - the controller object
   */
  init(controller) {
    this.controller = controller;
  }

  /**
   * Handle the click event for the "Aposta" button
   */
  onApostaClick() {
    console.log('apostar');
    this.controller.onApostaClick();
  }

  /**
   * Handle the click event for the "Plantar" button
   */
  onPlantarClick() {
    this.controller.onPlantarClick();
  }

  /**
   * Handle the click event for the "Tornar Jugar" button
   */
  onTornarJugarClick() {
    this.controller.onTornarJugarClick();
  }

  /**
   * Update the result display
   * @param {boolean} visible - whether to show or hide the result display
   * @param {string} anunci - the announcement to display (default: 'x')
   */
  updateResult(visible, anunci = 'x') {
    if (visible) {
      this.anunci.innerText = anunci;
      this.cartellResultat.style.visibility = 'visible';
    } else {
      this.cartellResultat.style.visibility = 'hidden';
    }
  }

  /**
   * Reset the display of all card elements
   */
  resetCards() {
    for (let i = 1; i <= 10; i++) {
      document.querySelector('.card-' + i).innerHTML = '';
    }
  }

  /**
   * This method makes sure that the card has a value
   * @param {Card []} cards - card list
   * @param {Integer} posCard - what position of the cards will have value
   */
  insertValue(cards, posCard) {
    this.value = cards[cards.length-1].value;
    this.suit = cards[cards.length-1].suit;
    this.carta = this.stylesCard.createCard(this.value, this.suit);
    document.querySelector('.card-'+posCard).innerHTML += this.carta;
  }
}
