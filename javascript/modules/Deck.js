import Card from "./Card.js";

export default class Deck {
    constructor() {
        this.cards = [];
    }

    buidar() {
        this.cards = [];
    }

    amplanar() {
        const suits = ['⚔️', '💰', '🏆', '🥍'];
        const values = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];

        for (let suit of suits) {
            for (let value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    pop() {
        return this.cards.pop();
    }

    push(card) {
        this.cards.push(card);
    }
}