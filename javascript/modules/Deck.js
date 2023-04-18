import Card from './Card.js';
/**
 * Represents a deck of cards.
 */
export default class Deck {
  /**
   * Creates an empty deck of cards.
   */
  constructor() {
    this.cards = [];
  }

  /**
   * Empties the deck of cards.
   */
  toEmpty() {
    this.cards = [];
  }

  /**
   * Fills the deck with 40 standard playing cards.
   */
  fillUp() {
    const suits = ['⚔️', '💰', '🏆', '🥍'];
    const values = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card(suit, value));
      }
    }
  }

  /**
   * Shuffles the deck of cards.
   */
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  /**
   * Removes and returns the top card from the deck.
   * @return {Card} The top card from the deck.
   */
  pop() {
    return this.cards.pop();
  }

  /**
   * Adds a card to the bottom of the deck.
   * @param {Card} card - The card to add to the deck.
   */
  push(card) {
    this.cards.push(card);
  }
}
