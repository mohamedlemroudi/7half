/**
 * Creates a new card with the specified suit and value.
 *
 * @param {string} suit - The suit of the card.
 * @param {string} value - The value of the card.
 */
export default class Card {
  /**
   * Creates a new card with the specified suit and value.
   *
   * @param {string} suit - The suit of the card.
   * @param {string} value - The value of the card.
   */
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
