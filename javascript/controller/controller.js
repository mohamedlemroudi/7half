/**
 * Class that represents a controller for a model and a view.
 * @class
 */
export default class Controller {
  /**
   * Create a controller for a model and a view.
   * @param {Object} model - The model for the controller.
   * @param {Object} view - The view for the controller.
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.init(this);
    this.model.init(this);
  }

  /**
   * Play the next card on the model.
   */
  onApostaClick() {
    this.model.playCard(this.model.posCard++);
  }

  /**
   * Let the machine play its turn on the model.
   */
  onPlantarClick() {
    this.model.playMachine();
  }

  /**
   * Handles the replay event on the view.
   * Restart the game on the model and view.
   */
  onTornarJugarClick() {
    this.model.resetGame();
    this.view.resetCards();
    this.getResult(false);
  }

  /**
   * Gets the result of the model and updates the view with the result.
   * @param {Boolean} visible - indicate if the result will be visible
   */
  getResult(visible) {
    this.model.playerDeck.setName(this.view.getName());
    const matchResult = this.model.getWinner().substring(0, 20);
    if (matchResult.includes(this.view.getName())) {
      this.view.updateResult(visible, this.model.getWinner(), true);
    } else {
      this.view.updateResult(visible, this.model.getWinner(), false);
    }
  }

  /**
   * Inserta el valor de las cartas en la posición especificada.
   * @param {Array} cards - El array de cartas.
   * @param {number} posCard - La posición en la que se debe insertar la carta.
   */
  insertValue(cards, posCard) {
    this.view.insertValue(cards, posCard);
  }
}
