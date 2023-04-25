/**
 * Creates a string representation of a playing card.
 * @param {string} value - The rank of the card (e.g. 'A', '2', '3', ...).
 * @param {string} suit - The suit of the card (e.g. '⚔️', '💰', '🏆', ...).
 * @return {string} A string with HTML markup representing the card.
 */
export default class Card {
  /**
   * Creates a card HTML element with the given value and suit.
   *
   * @param {string} value - The value of the card.
   * @param {string} suit - The suit of the card.
   * @return {string} The HTML code for the card element.
   */
  createCard(value, suit) {
    return `
    <div>
      <span class="rank">${value}</span>
      <br>
      <span class="suit">${suit}</span>
    </div>
  `;
  }
}
